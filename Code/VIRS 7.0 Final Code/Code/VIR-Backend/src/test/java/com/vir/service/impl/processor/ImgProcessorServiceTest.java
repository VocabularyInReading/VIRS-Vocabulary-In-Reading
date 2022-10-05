package com.vir.service.impl.processor;
import com.vir.model.WordMatch;
import org.apache.http.util.TextUtils;
import org.apache.tika.io.TikaInputStream;
import org.bytedeco.javacpp.BytePointer;
import org.bytedeco.javacpp.lept.PIX;
import org.bytedeco.javacpp.tesseract.TessBaseAPI;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintStream;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.LongSummaryStatistics;
import java.util.Map;

import javax.imageio.ImageIO;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.opencv.core.Mat;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import com.vir.GeneralDevTest;
import com.vir.helpers.IOHelper;
import com.vir.mock.MockEmailService;
import com.vir.mock.MockWordRepository;
import com.vir.model.Count;
import com.vir.model.FileType;
import com.vir.model.Text;
import com.vir.service.EmailService;
import com.vir.service.FileProcessorService;
import com.vir.service.impl.OcrOptimizerService;
import com.vir.repository.WordRepository;
import com.vir.service.WordService;
import com.vir.service.TextProcessorService;
import com.vir.service.impl.SimpleWordService;
import com.vir.service.impl.processor.ImgProcessorService;

import static org.bytedeco.javacpp.lept.pixDestroy;
import static org.bytedeco.javacpp.lept.pixReadMem;

@GeneralDevTest
public class ImgProcessorServiceTest
{
    private final FileProcessorService imgProcessorService;
    private final OcrOptimizerService ocrOptimizerService;
    private final TextProcessorService optimizedTextProcessorService;

    public ImgProcessorServiceTest()
    {
        WordRepository wordRepository = new MockWordRepository();
        WordService wordService = new SimpleWordService();

        optimizedTextProcessorService =
                new OptimizedTextProcessorService
                        (
                                wordRepository
                                , wordService
                        );
        this.ocrOptimizerService = new OcrOptimizerService();
        EmailService emailService = new MockEmailService();
        this.imgProcessorService = new ImgProcessorService
                (
                        optimizedTextProcessorService
                        , emailService
                );
    }
    Map<String, Map<String, Long>> statsAllFiles = new HashMap<String, Map<String, Long>>();
    private String getStatisticsResults(List<Long> ll, String key)
    {
        LongSummaryStatistics ss = ll.stream().mapToLong((x) -> x).summaryStatistics();
        String line =
                key
                        + "," + ss.getCount()
                        + "," + ss.getSum()
                        + "," + ss.getMin()
                        + "," + ss.getAverage()
                        + "," + ss.getMax();

        return line;
    }
    private ArrayList<String> getFilesResults()
    {
        ArrayList<String> linesFiles = new ArrayList<String>();
        final String HEADERS_INDIVIDUAL_FILE = "Key,File Name,Count";
        linesFiles.add(HEADERS_INDIVIDUAL_FILE);
        for(Map.Entry<String, Map<String, Long>> e : statsAllFiles.entrySet())
        {
            for(Map.Entry<String, Long> actual : e.getValue().entrySet())
            {
                linesFiles.add(actual.getKey() + "," + e.getKey() + "," + actual.getValue());
            }//for
        }//for e

        return linesFiles;
    }
    private enum LOG_TYPE
    {
        ERROR_LOG,
        LOG
    }
    private PrintStream getLogPrintStream(String directory, LOG_TYPE logType) throws Exception
    {
        boolean error = logType == LOG_TYPE.ERROR_LOG;
        String fileName = directory + "log" + (error ? "-error" : "") + ".txt";
        FileOutputStream fos = new FileOutputStream(fileName);

        PrintStream ps = new PrintStream(fos, true);

        return ps;
    }
    private String getTempDirectory()
    {
        String tmpDir = this.createDateTimeDirectoryInPath("tmp");

        return tmpDir;
    }
    private String createDateTimeDirectoryInPath(String path)
    {
        path += "/";
        File f = new File(path);
        if(!f.exists()) f.mkdir();
        Calendar c = Calendar.getInstance();

        String month = String.format("%02d", (c.get(Calendar.MONTH) + 1));
        String day = String.format("%02d", c.get(Calendar.DAY_OF_MONTH));
        String date = c.get(Calendar.YEAR) + month + day + "/";
        path += date;
        f = new File(path);
        if(!f.exists()) f.mkdir();
        String hour = c.get(Calendar.HOUR_OF_DAY) + "/";
        path += hour;
        f = new File(path);
        if(!f.exists()) f.mkdir();
        String minute = + c.get(Calendar.MINUTE) + "/";
        path += minute;
        f = new File(path);
        if(!f.exists()) f.mkdir();

        // path += UUID.randomUUID() + "/";

        // f = new File(path);
        // if(!f.exists()) f.mkdir();

        return path;
    }
    private Map<String, BufferedImage> getImageConversions(InputStream stream, String fileExtension)
    {
        try
        {
            //TODO:test DPI 300
            //// final int DPI = 300;
            //apply gaussian blur to raw, gray, b&w, gray with CV library, and b&w with CV library and the same for noise removal
            //based on that, we shall generate the following permutations:
            //raw, gray, b&w, gray2, b&w2
            //raw-blur, gray-blur, b&w-blur, gray2-blur, b&w2-blur
            //raw-blur-noise-removal, gray-blur-noise-removal, b&w-blur-noise-removal, gray2-blur-noise-removal, b&w2-blur-noise-removal
            //raw-noise-removal, gray-noise-removal, b&w-noise-removal, gray2-noise-removal, b&w2-noise-removal
            //TODO:fix this test. it turns out the noise removal only works with gray, so permutations of gray and gray2 are the only valid ones for noise removal
            Map<String, BufferedImage> map = new HashMap<String, BufferedImage>();
            BufferedImage img = IOHelper.inputStreamToBufferedImage(stream);
            map.put("Raw", img);
            BufferedImage binary = IOHelper.convertImageToBinary(img);
            map.put("B&W", binary);
            BufferedImage gray = IOHelper.convertImageToGrayscale(img);
            map.put("Gray", gray);
            Mat matrix = IOHelper.bufferedImageToMat(img, fileExtension);

            Mat gray2OpenCv = this.ocrOptimizerService.convertToGreyScaleOpencv(matrix);
            BufferedImage gray2 = IOHelper.matToBufferedImage(gray2OpenCv, fileExtension);
            map.put("Gray2", gray2);
            Mat binary2OpenCv = this.ocrOptimizerService.convertToBinaryScaleOpencv(matrix);
            BufferedImage binary2 = IOHelper.matToBufferedImage(binary2OpenCv, fileExtension);
            map.put("B&W2", binary2);

            BufferedImage blurRaw = this.ocrOptimizerService.createImageBlurFromMatrix(matrix, fileExtension);
            map.put("Raw Blur", blurRaw);

            Mat grayOpenCv = IOHelper.bufferedImageToMat(gray, fileExtension);
            BufferedImage grayBlur = this.ocrOptimizerService.createImageBlurFromMatrix(grayOpenCv, fileExtension);
            map.put("Gray Blur", grayBlur);

            Mat binaryOpenCv = IOHelper.bufferedImageToMat(binary, fileExtension);
            BufferedImage binaryBlur = this.ocrOptimizerService.createImageBlurFromMatrix(binaryOpenCv, fileExtension);
            map.put("B&W Blur", binaryBlur);

            BufferedImage gray2Blur = this.ocrOptimizerService.createImageBlurFromMatrix(gray2OpenCv, fileExtension);
            map.put("Gray2 Blur", gray2Blur);

            BufferedImage binary2Blur = this.ocrOptimizerService.createImageBlurFromMatrix(binary2OpenCv, fileExtension);
            map.put("B&W2 Blur", binary2Blur);

            BufferedImage rawNoise = this.ocrOptimizerService.createImageWithNoiseRemoved(matrix, fileExtension);
            map.put("Raw Noise", rawNoise);

            BufferedImage grayNoise = this.ocrOptimizerService.createImageWithNoiseRemoved(grayOpenCv, fileExtension);
            map.put("Gray Noise", grayNoise);

            BufferedImage binaryNoise = this.ocrOptimizerService.createImageWithNoiseRemoved(binaryOpenCv, fileExtension);
            map.put("B&W Noise", grayNoise);

            BufferedImage gray2Noise = this.ocrOptimizerService.createImageWithNoiseRemoved(gray2OpenCv, fileExtension);
            map.put("Gray2 Noise", grayNoise);

            BufferedImage binary2Noise = this.ocrOptimizerService.createImageWithNoiseRemoved(binary2OpenCv, fileExtension);
            map.put("B&W2 Noise", grayNoise);

            BufferedImage rawBlurNoise = this.ocrOptimizerService.createImageWithNoiseRemoved(IOHelper.bufferedImageToMat(blurRaw, fileExtension), fileExtension);
            map.put("Raw Blur Noise", rawBlurNoise);

            BufferedImage grayBlurNoise = this.ocrOptimizerService.createImageWithNoiseRemoved(IOHelper.bufferedImageToMat(grayBlur, fileExtension), fileExtension);
            map.put("Gray Blur Noise", grayBlurNoise);

            //tests show that aggregated results never outputs anything legible
            BufferedImage binaryBlurNoise = this.ocrOptimizerService.createImageWithNoiseRemoved(IOHelper.bufferedImageToMat(binaryBlur, fileExtension), fileExtension);
            map.put("B&W Blur Noise", binaryBlurNoise);

            BufferedImage gray2BlurNoise = this.ocrOptimizerService.createImageWithNoiseRemoved(IOHelper.bufferedImageToMat(gray2Blur, fileExtension), fileExtension);
            map.put("Gray2 Blur Noise", gray2BlurNoise);

            BufferedImage binary2BlurNoise = this.ocrOptimizerService.createImageWithNoiseRemoved(IOHelper.bufferedImageToMat(binary2Blur, fileExtension), fileExtension);
            map.put("B&W2 Blur Noise", binary2BlurNoise);

            String path = this.getTempDirectory();

            int i = -1;
            //save the file transformations
            for(Map.Entry<String, BufferedImage> bi : map.entrySet())
            {
                BufferedImage b = bi.getValue();
                String key = bi.getKey();
                if(b == null)
                {
                    System.out.println(key + " has a null file. Unable to save a null file");
                    continue;
                }//if
                try
                {
                    File outputfile = new File(path + ++i + "_" + key.replace(" ", "-") + ".jpg");
                    ImageIO.write(b, "jpg", outputfile);
                }//try
                catch(Throwable t)
                {

                }
            }//for bi

            return map;
        }//try
        catch(Throwable t)
        {
            System.err.println(t);
            return Collections.<String,BufferedImage>emptyMap();
        }//catch
    }
    private String getStringFromImage(BufferedImage img, String fileExtension)
    {
        TessBaseAPI api = null;
        BytePointer outText = null;
        PIX pix = null;
        try
        {
            // org.bytedeco.javacpp.maxphysicalbytes = 2 * Runtime.maxMemory();
            api = new TessBaseAPI();

            if (api.Init("tessdata", "eng") != 0)
            {
                System.err.println("Could not initialize tesseract.");
                return "";
            }//if

            byte[] bytes = IOHelper.convertToByteArray(img, fileExtension);
            pix = pixReadMem(bytes, bytes.length);

            api.SetImage(pix);
            outText = api.GetUTF8Text();
            String result = outText.getString();
            System.out.println("OCR output:\n" + result);

            return result;
        }//try
        catch(Throwable t)
        {
            System.err.println(t);
            return "";
        }//catch
        finally
        {
            if(api != null)
            {
                api.End();
                api.close();
            }//if
            if(outText != null)
            {
                outText.deallocate();
            }//if
            if(pix != null)
            {
                pixDestroy(pix);
            }
        }
    }
    Map<String, Long> statistics;
    private Text processTestFile(MultipartFile file)
    {
        try
                (
                        InputStream stream = file.getInputStream();
                        TikaInputStream tikaStream = TikaInputStream.get(stream)
                )
        {
            String fileName = file.getOriginalFilename();
            String fileExtension = fileName.substring(fileName.lastIndexOf('.' + 1));
            Map<String, BufferedImage> images = this.getImageConversions(tikaStream, fileExtension);

            Long max = 0L;
            Text bestText = null;
            String bestKey = null;
            List<Long> wordCounts = new ArrayList<Long>();
            this.statistics = new HashMap<String, Long>();

            for(Map.Entry<String, BufferedImage> bi : images.entrySet())
            {
                String key = bi.getKey();
                System.out.println("Now processing type " + key);
                try
                {
                    BufferedImage img = bi.getValue();
                    if(img == null)
                    {
                        System.out.println(key + " has a null image. Unable to process");
                        continue;
                    }//if

                    String r = this.getStringFromImage(img, fileExtension);
                    Text t = TextUtils.isBlank(r) ? null : this.optimizedTextProcessorService.process(r);
                    Count c = t == null ? null : t.getStatistics().getWordCount();
                    long wordCount = c == null ? 0 : c.getTotal() - c.getNoCategory();

                    System.out.println(key + " number of words:\t" + wordCount);
                    wordCounts.add(wordCount);
                    this.statistics.put(key, wordCount);
                    if(wordCount == 0 || wordCount < max) continue;

                    max = wordCount;
                    bestText = t;
                    bestKey = key;
                }//try
                catch(Throwable t)
                {
                    System.err.println(t);
                }//catch
                System.out.println(key + " iteration completed");
            }//for bi
            System.out.println("The best result comes from : " + (TextUtils.isBlank(bestKey) ? "none" : bestKey));
            return bestText;
        }//try
        catch(Throwable t)
        {
            return null;
        }//catch
    }
    @Test
    @Ignore
    //TODO:test needs to be fixed. some methods have been updated to release Mat when converting. This was due to memory leaks
    //If this test is ran with multiple threads,
    //it runs faster for the first 5-10 files, but due to the high CPU and memory usage
    //after those files it starts to hang and then eventually the test just crashes after 30-45 minutes
    //a test without threading and about 32 files runs in about an hour which is reasonable for an integration test
    public void testDifferentFormats()
            throws
            Exception
            , IOException
            , OutOfMemoryError
            , SecurityException
    {
        //test from this directory will run real fast
        final String PATH = "src/test/resources/ocr-files-fast-test/";
        //test from this directory will take about an hour if your machine is descent
        // final String PATH = "src/test/resources/ocr-files/";
        String directory = this.createDateTimeDirectoryInPath("logs");
        System.setOut(this.getLogPrintStream(directory, LOG_TYPE.LOG));
        System.setErr(this.getLogPrintStream(directory, LOG_TYPE.ERROR_LOG));

        File folder = new File(PATH);
        File[] files = folder.listFiles();
        Map<String, List<Long>> stats = new HashMap<String, List<Long>>();
        List<Thread> threads = new ArrayList<Thread>();
        final String HEADERS_LINE = "Key,Count,Sum,Min,Average,Max";

        for (File f : files)
        {
            try
            {
                if(!f.isFile() || ".DS_Store".equalsIgnoreCase(f.getName())) return;
                String fileName = f.getName();
                System.out.println("processing file " + fileName);
                byte[] bytes = Files.readAllBytes(f.toPath());

                MultipartFile multipartFile = new MockMultipartFile("file", bytes);
                Text txt = this.processTestFile(multipartFile);

                Map<String, Long> local = statistics;
                ArrayList<String> lines = new ArrayList<String>();
                lines.add(HEADERS_LINE);

                for(Map.Entry<String, Long> e : local.entrySet())
                {
                    String key = e.getKey();
                    Long result = e.getValue();
                    List<Long> ll = stats.get(key);
                    if(ll == null) ll = new ArrayList<Long>();
                    ll.add(result);
                    stats.put(key, ll);

                    String line = this.getStatisticsResults(ll, key);
                    lines.add(line);
                }//for e
                statsAllFiles.put(fileName, local);

                String path = this.createDateTimeDirectoryInPath("results");
                File fResult = new File(path);
                if(!fResult.exists()) fResult.mkdir();
                String newFileName = fileName.substring(0, fileName.indexOf("."));
                Path file = Paths.get(path + newFileName + ".csv");
                Files.write(file, lines, Charset.forName("UTF-8"));
                Path fileIndyFiles = Paths.get(path + newFileName + "-indy-results.csv");
                List<String> linesIndyFiles = getFilesResults();
                Files.write(fileIndyFiles, linesIndyFiles, Charset.forName("UTF-8"));

                System.out.println("File " + fileName + " iteration completed...");
            }//try
            catch(Throwable t)
            {
                System.err.println(t);
            }//catch
        }//for i
        for(Thread t : threads)
        {
            t.join();
        }//for t
        System.out.println("Completed. Compiling statistics...");
        ArrayList<String> lines = new ArrayList<String>();
        lines.add(HEADERS_LINE);
        long sum = 0L;
        for(Map.Entry<String, List<Long>> e : stats.entrySet())
        {
            String key = e.getKey();
            List<Long> ll = e.getValue();

            for(int i = 0; i < ll.size(); ++i)
            {
                sum += ll.get(i);
            }//for i

            String s = this.getStatisticsResults(ll, key);
            lines.add(s);
            System.out.println(s);
        }//for e
        ArrayList<String> linesFiles = this.getFilesResults();

        String path = this.createDateTimeDirectoryInPath("results");
        File f = new File(path);
        if(!f.exists()) f.mkdir();
        Path file = Paths.get(path + "final-results.csv");
        Files.write(file, lines, Charset.forName("UTF-8"));

        Path fileFiles = Paths.get(path + "final-results-all-files.csv");
        Files.write(fileFiles, linesFiles, Charset.forName("UTF-8"));
        path = null;

        assertNotEquals(0L, sum);
        System.out.println("test completed");
    }
    @Test
    @Ignore
    public void testImg()
            throws
            Exception
            , IOException
            , OutOfMemoryError
            , SecurityException
    {
        final String PATH = "/Users/pqsk/Downloads/out/test/";//src/test/resources
        File folder = new File(PATH);
        File[] files = folder.listFiles();

        byte[] bytes = null;
        for (File f : files)
        {
            if(!f.isFile() || ".DS_Store".equalsIgnoreCase(f.getName())) continue;
            bytes = Files.readAllBytes(f.toPath());
            break;
        }//for i

        FileType ft = FileType.PDF;

        MultipartFile multipartFile = new MockMultipartFile("file", bytes);
        Text txt = this.imgProcessorService.process(multipartFile, ft);
    }
    @Ignore
    @Test
    public void process_WithImgFile() throws Exception {
        final String filePath= "a_christmas_carol_by_charles_dickens_segment.png";
        checkValues(filePath);
    }

    //Uses the path of a sample image with columns to check if the values of the words in the image fall in the correct indexes
    @Ignore
    @Test
    public void process_WithImgFileWithColumns() throws Exception {
        final String filePathColumn= "threeColumnImage.jpg";
        checkValuesColumn(filePathColumn);
    }
    
    //Checks that a sample image with columns works correctly by seeing if the words fall in the correct indexes
    private void checkValuesColumn(String filePath) throws Exception {
        try(InputStream stream = new ClassPathResource(filePath).getInputStream()) {
            MockMultipartFile file = new MockMultipartFile(filePath, stream);
            Text actual = imgProcessorService.process(file, FileType.IMG);

            //printingWordList(actual); //Use this to see the words and their indexes
            assertEquals("one", actual.getWords().get(0).getInitialValue());
            assertEquals("eleven", actual.getWords().get(12).getInitialValue());
            assertEquals("seventeen", actual.getWords().get(20).getInitialValue());
        }
    }

    private void checkValues(String filePath) throws Exception {
        try(InputStream stream = new ClassPathResource(filePath).getInputStream()) {
            MockMultipartFile file = new MockMultipartFile(filePath, stream);
            Text actual = imgProcessorService.process(file, FileType.IMG);

            assertEquals("Marley", actual.getWords().get(0).getInitialValue());
            assertEquals("was", actual.getWords().get(1).getInitialValue());
            assertEquals("dead,", actual.getWords().get(2).getInitialValue());
        }
    }


    

    //Prints the words from the list and their indexes
    public void printingWordList(Text text){
        String s = "";
        int index = -1;
        for (WordMatch word: text.getWords()){
            index = index + 1;
            System.out.print(index);
            System.out.print("     ");
            System.out.print("Initial value: ");
            System.out.println(word.getInitialValue());

        }
    }
}
