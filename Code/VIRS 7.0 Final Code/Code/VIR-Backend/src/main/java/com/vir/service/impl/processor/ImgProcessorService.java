package com.vir.service.impl.processor;

import static org.bytedeco.javacpp.lept.pixDestroy;
import static org.bytedeco.javacpp.lept.pixReadMem;

import java.awt.image.BufferedImage;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Comparator;
import java.util.EnumSet;
import java.util.concurrent.TimeUnit;
import java.io.ByteArrayOutputStream;
import javax.imageio.ImageIO;

import com.google.common.base.Stopwatch;
import com.vir.exception.UnparseableContentException;
import com.vir.helpers.IOHelper;
import com.vir.helpers.AWSBlockReader;
import com.vir.helpers.OcrReader;
import com.vir.helpers.TesseractOcrReader;
import com.vir.model.FileType;
import com.vir.model.Text;
import com.vir.model.ThreadValue;
import com.vir.model.enumerations.ImageConversionOption;
import com.vir.service.EmailService;
import com.vir.service.FileProcessorService;
import com.vir.service.TextProcessorService;
import com.vir.service.impl.OcrOptimizerService;

import org.apache.http.util.TextUtils;
import org.apache.tika.io.TikaInputStream;
import org.bytedeco.javacpp.BytePointer;
import org.bytedeco.javacpp.lept.PIX;
import org.bytedeco.javacpp.tesseract.TessBaseAPI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.textract.AmazonTextract;
import com.amazonaws.services.textract.AmazonTextractClientBuilder;
import com.amazonaws.services.textract.model.*;
import com.amazonaws.util.IOUtils;
import java.nio.ByteBuffer;
import java.util.List;

import java.time.Month;
import java.time.LocalDate;

import java.util.ArrayList;

@Service("imgProcessorService")
public class ImgProcessorService implements FileProcessorService
{
	private final TextProcessorService textProcessorService;
	private final EmailService emailService;
	private final boolean isProduction;
	private Month latestMonth;
	private int textractCounter;
	private Logger LOGGER = LoggerFactory.getLogger(ImgProcessorService.class);
	public ImgProcessorService
	(
		@Qualifier("optimizedTextProcessorService")
		TextProcessorService textProcessorService
		, EmailService emailService
	)
	{
		this.textProcessorService = textProcessorService;
		this.emailService = emailService;
		String prodEnvironmentVariable = System.getenv("PROD");
		this.isProduction = "1".equals(prodEnvironmentVariable);
		this.latestMonth = LocalDate.now().getMonth();
		this.textractCounter = 0;
	}
	private Text getProcessedString(String s)
	{
		try
		{
			Text text = this.textProcessorService.process(s);
			return text;
		}//try
		catch(Throwable t)
		{
			this.emailService.sendExceptionEmail(t);
			return null;
		}//catch
	}
	@Override
	public Text process(MultipartFile file, FileType type) throws UnparseableContentException
	{
		LOGGER.info("Attempting to extract text from an {} file.", type);
		if(file == null) return null;

		System.gc();

		String fileName = file.getOriginalFilename();
		int dotIndex = TextUtils.isBlank(fileName) ? -1 : fileName.lastIndexOf('.');
		//if there's no extension, let's try jpg. If it doesn't work it doesn't hurt to try
		String fileExtension = dotIndex == -1 ? "jpg" : fileName.substring(dotIndex + 1);

		Text result = this.createTextFromFile(file, fileExtension);

		LOGGER.info("Text was extracted from {} file {}", type, fileName);

		return result;
	}
	//this is used in non-production for viewing the amount of time something takes. The JIT will eliminate this (and the corresponding methods) in production builds
	Stopwatch sw;
	private void startStopWatch()
	{
		if(this.isProduction) return;
		sw = Stopwatch.createStarted();
	}
	private enum StopWatchOutputOptions
	{
		TIME,
		NO_TIME
	}
	private void printStopWatchMessage(String msg, StopWatchOutputOptions options)
	{
		if(this.isProduction) return;
		boolean showTime = options == StopWatchOutputOptions.TIME;
		//System.out.println(msg + (showTime ? sw : ""));
	}
	private void resetAndRestartStopWatch()
	{
		if(this.isProduction || sw == null) return;
		if(sw.isRunning()) sw.reset();
		sw.start();
	}
	private Text createTextFromFile(MultipartFile file, String fileExtension) throws UnparseableContentException
	{
		try
		(
			InputStream stream = file.getInputStream();
			TikaInputStream tikaStream = TikaInputStream.get(stream);
			InputStream imageByteStream = file.getInputStream();
		)
		{	
			this.startStopWatch();
			this.printStopWatchMessage("Start converting images", StopWatchOutputOptions.NO_TIME);
			OcrOptimizerService ocrOptimizerService = new OcrOptimizerService();
			EnumSet<ImageConversionOption> options = EnumSet.of(ImageConversionOption.RAW);
			//first get the raw image
			BufferedImage imgRaw = ocrOptimizerService.preprocessImage(tikaStream, options, fileExtension);

			options = EnumSet.of(ImageConversionOption.REMOVE_NOISE);
			//finally get the image in gray scale and remove noise
			BufferedImage imgNoiseRemoval = ocrOptimizerService.preprocessImage(imgRaw, options, fileExtension);

			//Code added by Diego Chacin, goal is to have optimized image be put into block reader
			ByteArrayOutputStream img = new ByteArrayOutputStream();
			ImageIO.write(imgNoiseRemoval, fileExtension, img);
			img.flush();
			byte[] imgBytes = img.toByteArray();
			img.close();
			ByteBuffer img_FinalBytes = ByteBuffer.wrap(imgBytes);

			//ByteBuffer image_finalBytes = null;
			//image_finalBytes = ByteBuffer.wrap

			ocrOptimizerService = null;
			System.gc();


			//this.printStopWatchMessage("Finished converting images. It took ", StopWatchOutputOptions.TIME);

			this.resetAndRestartStopWatch();
			//this.printStopWatchMessage("Begin tesseract allocating.", StopWatchOutputOptions.NO_TIME);
			//the tesseract ocr reader should NEVER be used as service and injected for the lifetime of the application
			//this is due to the fact that it uses native resources and it could lead to memory leaks if NOT handled properly
			//please note also that this could easily be switched to something else either as a replacement or for comparison
			//that's the reason for creating the interface

			if(textractCounter > 1000 && this.latestMonth == LocalDate.now().getMonth())
			{
				System.out.println("Error test");
				throw new UnparseableContentException("Textract uses exceeded");
			}
			else if(this.latestMonth != LocalDate.now().getMonth())
			{
				this.textractCounter = 0;
				this.latestMonth = LocalDate.now().getMonth();
			}

			AmazonTextract client = AmazonTextractClientBuilder.defaultClient();

			ByteBuffer imageBytes = null;
			imageBytes = ByteBuffer.wrap(IOUtils.toByteArray(imageByteStream));

			DetectDocumentTextRequest request = new DetectDocumentTextRequest().withDocument(new Document().withBytes(img_FinalBytes));
			textractCounter++;			

			DetectDocumentTextResult textractResult = client.detectDocumentText(request);
			List<Block> blocks = textractResult.getBlocks();

			

			AWSBlockReader blockReader = new AWSBlockReader(blocks);

			Text awsTextResult = this.getProcessedString(blockReader.getText());

			return awsTextResult;

		}
		catch(UnparseableContentException ex)
		{
			System.err.println(ex);
			this.emailService.sendExceptionEmail(ex);
			throw ex;
		}
		catch(Throwable t)
		{
			System.err.println(t);
			this.emailService.sendExceptionEmail(t);
			return new Text();
		}//catch
	}
	private long countAlphaNumeric(String result)
	{
		if(TextUtils.isBlank(result)) return 0;
		long count = 0;
		for(char c : result.toCharArray())
		{
			if(!Character.isLetterOrDigit(c)) continue;
			++count;
		}//for c
		return count;
	}
}
