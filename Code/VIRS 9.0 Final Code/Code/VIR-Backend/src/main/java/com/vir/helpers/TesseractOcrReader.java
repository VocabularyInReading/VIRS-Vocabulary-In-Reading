package com.vir.helpers;

import java.awt.image.BufferedImage;
import java.io.FileNotFoundException;
import java.io.InputStream;
import org.bytedeco.javacpp.BytePointer;
import org.bytedeco.javacpp.lept.PIX;
import org.bytedeco.javacpp.tesseract.TessBaseAPI;
import static org.bytedeco.javacpp.lept.pixDestroy;
import static org.bytedeco.javacpp.lept.pixReadMem;

/**
 * The purpose of this class is to allocate tesseract once so that we don't have to allocate multiple times. And by consequence, we deallocate just once after we're done
 */
public class TesseractOcrReader implements OcrReader
{
    private final TessBaseAPI api;
    public TesseractOcrReader(String path, String language) throws FileNotFoundException
    {
        System.out.println(String.format("Attempting to allocating tesseract language '%s' in data path '%s'.", language, path));
        api = new TessBaseAPI();

        if (api.Init(path, language) == 0)
        {
            System.out.println(String.format("Allocation of tesseract language '%s' in data path '%s' was successful.", language, path));
            return;
        }//if

        throw new FileNotFoundException(String.format("Could not initialize tesseract language '%s' in data path '%s's.", language, path));
    }
    public TesseractOcrReader() throws FileNotFoundException
    {
        this("tessdata", "eng");
    }
    @Override
    public String getOcrResult(BufferedImage img, String fileExtension)
    {
        if(img == null) return null;

		BytePointer outText = null;
		PIX pix = null;
		try
		{	
			byte[] bytes = IOHelper.convertToByteArray(img, fileExtension);
			pix = pixReadMem(bytes, bytes.length);

			this.api.SetImage(pix);
			outText = this.api.GetUTF8Text();
            String result = outText.getString();

			return result;
		}//try
		catch(Throwable t)
		{
			System.err.println(t);
			return "";
		}//catch
		finally
		{
			if(outText != null)
			{
				outText.close();
			}//if
			if(pix != null)
			{
				pixDestroy(pix);
            }//if
            if(this.api != null)
            {
                //clear the results so we can reuse tesseract
                this.api.Clear();
            }//if
		}
    }

    @Override
    public String getOcrResult(InputStream is, String fileExtension)
    {
        if(is == null) return "";

        BufferedImage img = IOHelper.inputStreamToBufferedImage(is);
        
        String result = this.getOcrResult(img, fileExtension);

        return result;
	}

    @Override
    public void close() throws Exception
    {
        //if the api has been allocated, then we will deallocate the api
        System.out.println("Attempting to deallocate tesseract");
        if(this.api != null)
        {
            System.out.println("deallocating tesseract begins");
            this.api.End();
            this.api.close();
            System.out.println("deallocating tesseract ends");
        }//if
    }   
    
}