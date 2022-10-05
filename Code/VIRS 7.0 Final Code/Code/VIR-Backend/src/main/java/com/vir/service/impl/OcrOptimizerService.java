package com.vir.service.impl;

import static org.opencv.imgproc.Imgproc.GaussianBlur;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.util.EnumSet;
import com.vir.helpers.IOHelper;
import com.vir.model.enumerations.ImageConversionOption;

import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.core.Size;
import org.opencv.imgproc.Imgproc;
import org.springframework.stereotype.Service;
import nu.pattern.OpenCV;

@Service
public class OcrOptimizerService
{
	/**
	 * Load the library once. We use the constructor and Autowiring to make sure we
	 * have this in our class path.
	 */
	public OcrOptimizerService()
	{
		OpenCV.loadShared();
	}

	public Mat optimize(Mat image) throws Exception {
		Mat result;
		result = convertToGreyScaleOpencv(image);
		result = threshold(result);
		return result;
	}
	public BufferedImage preprocessImage(InputStream stream, EnumSet<ImageConversionOption> options, String fileExtension)
		throws Exception
	{
		if(stream == null) return null;

		BufferedImage img = IOHelper.inputStreamToBufferedImage(stream);

		BufferedImage result = this.preprocessImage(img, options, fileExtension);

		return result;
	}
	public void deskey(Mat matrix)
	{
		if(matrix == null) return;

		Size s = matrix.size();

		Mat destination = new Mat();
		Core.bitwise_not(matrix, destination);
		
	}
	public BufferedImage preprocessImage(BufferedImage img, EnumSet<ImageConversionOption> options, String fileExtension)
		throws Exception
	{
		if(img == null) return null;

		int optionsSize = options == null ? 0 : options.size();
		boolean hasOptions = options != null && optionsSize > 0;
		boolean cv = hasOptions && options.contains(ImageConversionOption.CV);
		boolean raw = !hasOptions || options.contains(ImageConversionOption.RAW);
		boolean gray = hasOptions && options.contains(ImageConversionOption.GRAY);
		boolean binary = hasOptions && options.contains(ImageConversionOption.BLACK_AND_WHITE);
		boolean grayCv = cv && gray;
		boolean binaryCv = cv && binary;
		boolean blur = hasOptions && options.contains(ImageConversionOption.GAUSSIAN_BLUR);
		boolean noiseRemoval = hasOptions && options.contains(ImageConversionOption.REMOVE_NOISE);
		
		if(!cv)
		{
			if(binary) img = IOHelper.convertImageToBinary(img);
			else if(gray) img = IOHelper.convertImageToGrayscale(img);
		}
		if(cv || blur || noiseRemoval)
		{
			Mat matrix = IOHelper.bufferedImageToMat(img, fileExtension);
			//if noise removal is requested, then we need to convert the image to gray. gray or gray using cv will work
			if(noiseRemoval && !gray || grayCv) matrix = this.convertToGreyScaleOpencv(matrix);
			else if(!noiseRemoval && binaryCv) matrix = this.convertToBinaryScaleOpencv(matrix);
			//if we can find a way to do the gaussian blur without cv, that would dramatically reduce the jar size
			if(blur) matrix = this.createBlur(matrix);
			//if we can find a way to do the noise removal without cv, that would dramatically reduce the jar size
			if(noiseRemoval) matrix = this.removeNoise(matrix);

			img = IOHelper.matToBufferedImage(matrix, fileExtension);

			if(matrix != null) matrix.release();
		}//if
		return img;
	}
	public InputStream optimize(InputStream stream, boolean blur, String fileExtension) throws IOException, Exception
	{
		InputStream is = this.convertToGreyScale(stream, blur, fileExtension);
		return is;
	}
	// private boolean isColored(BufferedImage img)
	// {
	// 	Color c = new Color(img.getRGB());
	// 	int red = c.getRed();
	// 	int green = c.getGreen();
	// 	int blue = c.getBlue();
	// }
	public BufferedImage createImageBlurFromMatrix(Mat source, String fileExtension) throws Exception
	{
		Mat destination = this.createBlur(source);
		BufferedImage bi = IOHelper.matToBufferedImage(destination, fileExtension);

		return bi;
	}
	public Mat createBlur(Mat source) throws Exception
	{
		if(source == null) return null;
		boolean releaseDestination = true;
		Mat destination = null;
		try
		{
			destination = new Mat();
			GaussianBlur(source, destination, new Size(5,5), 0);
			releaseDestination = false;
			
			return destination;
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
			return null;
		}//catch
		finally
		{
			//TODO:check
			if(source != null) source.release();
			if(releaseDestination && destination != null) destination.release();
		}
	}
	public Mat removeNoise(Mat source)
	{
		if(source == null) return null;

		Mat destination = null;
		boolean releaseDestination = true;
		try
		{
			destination = new Mat();
			//Imgproc.ADAPTIVE_THRESH_GAUSSIAN_C
			//Imgproc.THRESH_BINARY_INV
			//https://www.tutorialspoint.com/opencv/opencv_adaptive_threshold.htm
			//TODO:need to test different permutations of the possible arguments to pass in
			Imgproc.adaptiveThreshold(source, destination, 255, Imgproc.ADAPTIVE_THRESH_MEAN_C, Imgproc.THRESH_BINARY, 15, 18);
			releaseDestination = false;
			return destination;
		}//try
		catch(Throwable t)
		{
			System.out.println(t);
			return null;
		}//catch
		finally
		{
			//TODO:check
			if(source != null) source.release();
			if(releaseDestination && destination != null) destination.release();
		}
	}
	public BufferedImage createImageWithNoiseRemoved(Mat source, String fileExtension)
	{
		try
		{
			Mat destination = this.removeNoise(source);
			BufferedImage bi = destination == null ? null : IOHelper.matToBufferedImage(destination, fileExtension);

			return bi;
		}//try
		catch(Throwable t)
		{
			return null;
		}
	}
	public InputStream convertToGreyScale(InputStream stream, boolean blur, String fileExtension) throws IOException, Exception
	{
		BufferedImage img = IOHelper.inputStreamToBufferedImage(stream);
		BufferedImage binary = blur ? null : IOHelper.convertImageToBinary(img);
		BufferedImage grey = blur ? null :IOHelper.convertImageToGrayscale(img);

		Mat matrix = null;
		if(blur)
		{
			matrix = IOHelper.bufferedImageToMat(img, fileExtension);
			matrix = convertToGreyScaleOpencv(matrix);
			GaussianBlur(matrix, matrix, new Size(5, 5), 0);
			Imgproc.adaptiveThreshold(matrix, matrix, 255, Imgproc.ADAPTIVE_THRESH_MEAN_C, Imgproc.THRESH_BINARY, 15, 18);
		}//if

		if(blur)
		{
			InputStream modifiedStream = IOHelper.matToInputStream(matrix, fileExtension);
			return modifiedStream;
		}//if
		return IOHelper.bufferedImageToInputStream(binary, fileExtension);
	}
	public Mat convertToCode(Mat matrix, int code)
	{
		if(matrix == null) return null;
		boolean releaseDestination = true;
		Mat destination = null;
		try
		{
			boolean canConvert = code != Imgproc.THRESH_BINARY || matrix.channels() > 1;
			if (canConvert)
			{
				destination = new Mat();
				Imgproc.cvtColor(matrix, destination, code);
				releaseDestination = false;
			}//if

			return destination;
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
			return null;
		}//catch
		finally
		{
			//TODO:check
			if(matrix != null) matrix.release();
			if(releaseDestination && destination != null) destination.release();
		}
	}
	public Mat convertToBinaryScaleOpencv(Mat matrix)
	{
		return matrix == null ? null : this.convertToCode(matrix, Imgproc.THRESH_BINARY);
	}
	/**
	 * Converts to a grey scale.
	 * 
	 * Only convert to grey is the image has more than 1 channel.
	 * 
	 * @param matrix the matrix to convert.
	 * @return the converted matrix.
	 */
	public Mat convertToGreyScaleOpencv(Mat matrix)
	{
		return matrix == null ? null : this.convertToCode(matrix, Imgproc.COLOR_BGR2GRAY);
	}

	/**
	 * Converts to a grey scale using Tesseract.
	 * 
	 * @param matrix the matrix to convert.
	 * @return the converted matrix.
	 * @throws Exception
	 */
	public Mat convertToGreyScaleTess(Mat matrix, String fileExtension) throws Exception {
		BufferedImage grey = IOHelper.convertImageToGrayscale(IOHelper.matToBufferedImage(matrix, fileExtension));
		return IOHelper.bufferedImageToMat(grey, fileExtension);
	}
	public Mat threshold(Mat matrix) {
		matrix = convertToGreyScaleOpencv(matrix);
		GaussianBlur(matrix, matrix, new Size(5, 5), 0);
		Imgproc.adaptiveThreshold(matrix, matrix, 255, Imgproc.ADAPTIVE_THRESH_MEAN_C, Imgproc.THRESH_BINARY, 15, 18);
		return matrix;
	}
}