package com.vir.helpers;

import static org.opencv.imgcodecs.Imgcodecs.CV_LOAD_IMAGE_UNCHANGED;

import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Iterator;

import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageTypeSpecifier;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.metadata.IIOInvalidTreeException;
import javax.imageio.metadata.IIOMetadata;
import javax.imageio.metadata.IIOMetadataNode;
import javax.imageio.stream.ImageOutputStream;

import org.apache.http.util.TextUtils;
import org.opencv.core.Mat;
import org.opencv.core.MatOfByte;
import org.opencv.imgcodecs.Imgcodecs;
/**
 * Class to help with the conveertion between the different file formats.
 * 
 * @author Alfredo Lopez
 *
 */
public class IOHelper {

	//20181112 - PAA - removed default file extensions (jpg /\ jpeg). extensions need to be specified.
	//Sometimes it works, but other times without the proper file extension the conversion or the code will throw exceptions
	/**
	 * Small method to write an input stream to a file.
	 * 
	 * @param path The path where to write to.
	 * @param image The inputstream of the image
	 */
	public static void writeToPath(String path, InputStream image)
	{
		if(image == null || TextUtils.isBlank(path)) return;
		try
		{
			int n = image.available();
			if(n == 0) return;
			byte[] buffer = new byte[n];
			image.read(buffer);
			File targetFile = new File(path);

			try (OutputStream outStream = new FileOutputStream(targetFile))
			{
				outStream.write(buffer);
			}//try
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
		}
	}

	/**
	 * Converts from a Mat object to an InputStream.
	 * 
	 * @param matrix the Mat object with the data.
	 * @return an instance of an InputStream.
	 * @throws Exception
	 */
	public static InputStream matToInputStream(Mat matrix, String fileExtension)
	{
		if(matrix == null || TextUtils.isBlank(fileExtension)) return null;
		try
		{
			MatOfByte matOfBytes = new MatOfByte();
			//ensure that the extensions starts with a dot
			//https://stackoverflow.com/questions/4254460/opencv-could-not-find-encoder-for-the-specified-extension#4254630
			Imgcodecs.imencode((fileExtension.toCharArray()[0] != '.' ? "." : "") + fileExtension, matrix, matOfBytes);
			byte[] bytes = matOfBytes.toArray();
			
			ByteArrayInputStream bais = bytes.length == 0 ? null : new ByteArrayInputStream(bytes);
			matOfBytes = null;
			return bais;
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
			return null;
		}
	}

	/**
	 * Converts from a Matrix to a Buffered Image.
	 * 
	 * @param matrix the Mat object with the data.
	 * @return an instance of an BufferedImage.
	 * @throws Exception
	 */
	public static BufferedImage matToBufferedImage(Mat matrix, String fileExtension)
	{
		if(matrix == null) return null;

		InputStream is = IOHelper.matToInputStream(matrix, fileExtension);

		BufferedImage img = IOHelper.inputStreamToBufferedImage(is);

		return img;
	}
	/**
	 * Converts from a Buffered Image to a Mat.
	 * 
	 * @param image the BufferedImage to convert.
	 * @return an instance of an Mat.
	 * @throws Exception
	 */
	public static Mat bufferedImageToMat(BufferedImage image, String fileExtension)
	{
		if(image == null || TextUtils.isBlank(fileExtension)) return null;
		try
		{
			MatOfByte matBytes = IOHelper.bufferedImageToMatOfByte(image, fileExtension);
			Mat matrix = matBytes == null ? null : Imgcodecs.imdecode(matBytes, CV_LOAD_IMAGE_UNCHANGED);
			matBytes = null;
			return matrix;
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
			return null;
		}
	}
	public static MatOfByte bufferedImageToMatOfByte(BufferedImage image, String fileExtension)
	{
		if(image == null || TextUtils.isBlank(fileExtension)) return null;

		byte[] bytes = IOHelper.convertToByteArray(image, fileExtension);
		MatOfByte matBytes = bytes == null ? null : new MatOfByte(bytes);

		return matBytes;
	}
	/**
	 * Converts from an InputStream to a Mat object.
	 * 
	 * @param stream the stream to read
	 * @return an instance of a Mat
	 * @throws Exception
	 */
	public static Mat inputStreamToMat(InputStream stream)
	{
		if(stream == null) return null;
		try (ByteArrayOutputStream buffer = new ByteArrayOutputStream())
		{
			int nRead;
			byte[] data = new byte[16 * 1024];
			while ((nRead = stream.read(data, 0, data.length)) != -1)
			{
				buffer.write(data, 0, nRead);
			}//while
			byte[] bytes = buffer.toByteArray();
			MatOfByte matBytes = bytes.length == 0 ? null : new MatOfByte(bytes);
			Mat matrix = matBytes == null ? null : Imgcodecs.imdecode(matBytes, CV_LOAD_IMAGE_UNCHANGED);

			return matrix;
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
			return null;
		}//catch
	}
	public static BufferedImage inputStreamToBufferedImage(InputStream stream)
	{
		if(stream == null) return null;
		try
		{
			BufferedImage img = ImageIO.read(stream);
			return img;
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
			return null;
		}
	}
	public static InputStream bufferedImageToInputStream(BufferedImage image, String fileExtension)
	{
		if(image == null || TextUtils.isBlank(fileExtension)) return null;

		try
		{
			byte[] bytes = IOHelper.convertToByteArray(image, fileExtension);
			InputStream is = bytes == null ? null : new ByteArrayInputStream(bytes);
			return is;
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
			return null;
		}
	}
	public static BufferedImage convertImageToBinary(BufferedImage img)
	{
		if(img == null) return null;
		try
		{
			BufferedImage imgBinary = new BufferedImage(img.getWidth(), img.getHeight(), BufferedImage.TYPE_BYTE_BINARY);
			Graphics2D g2d = imgBinary.createGraphics();
			g2d.drawImage(img, 0, 0, null);
			g2d.dispose();
			return imgBinary;
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
			return null;
		}
    }
	public static BufferedImage convertImageToGrayscale(BufferedImage img)
	{
		if(img == null) return null;
		try
		{
			BufferedImage imgGray = new BufferedImage(img.getWidth(), img.getHeight(), BufferedImage.TYPE_BYTE_GRAY);
			Graphics2D g2 = imgGray.createGraphics();
			g2.drawImage(img, 0, 0, null);
			g2.dispose();
			return imgGray;
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
			return null;
		}//catch
    }
	public static byte[] convertToByteArray(BufferedImage img, String fileExtension)
	{
		if(img == null || TextUtils.isBlank(fileExtension)) return null;

		//TODO:review, the docs state that calling ByteArrayOutputStream.close() does nothing, but sometimes if we get an exception the browser has to refresh. Not sure if that's a socket issue or if it's a memory leak that doesn't clear until the browser refreshes due to HTTP keep alive (although not sure if that's the same as TCP keep alive or any way similar)
		try(ByteArrayOutputStream baos = new ByteArrayOutputStream())
		{
			ImageIO.write(img, fileExtension, baos);
			baos.flush();
			byte[] bytes = baos.toByteArray();

			return bytes;
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
			return null;
		}//catch
	}
	public static BufferedImage resizeImage(BufferedImage img, int width, int height)
	{
		try
		{
		int w = img.getWidth() * width;
		int h = img.getHeight() * height;
		Image scaledImage = img.getScaledInstance(w, h, Image.SCALE_SMOOTH);
		//BufferedImage.TYPE_INT_ARGB
		//img.getType()
		BufferedImage imgResized = new BufferedImage(w, h, BufferedImage.TYPE_INT_ARGB);
	
		Graphics2D g2d = imgResized.createGraphics();
		g2d.drawImage(scaledImage, 0, 0, null);
		g2d.dispose();
	
		return imgResized;
		}catch(Throwable ex)
		{
			System.out.println(ex);
			return null;
		}//catch
	}
	public static final String DENSITY_UNITS_NO_UNITS = "00";
	public static final String DENSITY_UNITS_PIXELS_PER_INCH = "01";
	public static final String DENSITY_UNITS_PIXELS_PER_CM = "02";


	public static BufferedImage resizeImage(BufferedImage img) throws IOException
	{
		final String formatName = "jpeg";
		BufferedImage gridImage = null;
		for (Iterator<ImageWriter> iw = ImageIO.getImageWritersByFormatName(formatName); iw.hasNext();)
		{
			ImageWriter writer = iw.next();
			ImageWriteParam writeParam = writer.getDefaultWriteParam();
			ImageTypeSpecifier typeSpecifier = ImageTypeSpecifier.createFromBufferedImageType(BufferedImage.TYPE_INT_RGB);
			IIOMetadata metadata = writer.getDefaultImageMetadata(typeSpecifier, writeParam);
			if (metadata.isReadOnly() || !metadata.isStandardMetadataFormatSupported()) {
				continue;
			}

			setDPI(metadata);

			final ImageOutputStream stream = ImageIO.createImageOutputStream(img);
			try {
				writer.setOutput(stream);
				writer.write(metadata, new IIOImage(gridImage, null, metadata), writeParam);
			} finally {
				stream.close();
			}
			break;
		}
		return gridImage;
	}

	private static void setDPI(IIOMetadata metadata) throws IIOInvalidTreeException {
		String metadataFormat = "javax_imageio_jpeg_image_1.0";
		IIOMetadataNode root = new IIOMetadataNode(metadataFormat);
		IIOMetadataNode jpegVariety = new IIOMetadataNode("JPEGvariety");
		IIOMetadataNode markerSequence = new IIOMetadataNode("markerSequence");

		IIOMetadataNode app0JFIF = new IIOMetadataNode("app0JFIF");
		app0JFIF.setAttribute("majorVersion", "1");
		app0JFIF.setAttribute("minorVersion", "2");
		app0JFIF.setAttribute("thumbWidth", "0");
		app0JFIF.setAttribute("thumbHeight", "0");
		app0JFIF.setAttribute("resUnits", DENSITY_UNITS_PIXELS_PER_INCH);
		app0JFIF.setAttribute("Xdensity", String.valueOf(300));
		app0JFIF.setAttribute("Ydensity", String.valueOf(300));

		root.appendChild(jpegVariety);
		root.appendChild(markerSequence);
		jpegVariety.appendChild(app0JFIF);

		metadata.mergeTree(metadataFormat, root);
	}
}
