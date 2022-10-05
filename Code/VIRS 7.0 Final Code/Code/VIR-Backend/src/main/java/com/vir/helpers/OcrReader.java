package com.vir.helpers;

import java.awt.image.BufferedImage;
import java.io.InputStream;

public interface OcrReader extends AutoCloseable
{
    String getOcrResult(BufferedImage img, String fileExtension);
    String getOcrResult(InputStream is, String fileExtension);
}