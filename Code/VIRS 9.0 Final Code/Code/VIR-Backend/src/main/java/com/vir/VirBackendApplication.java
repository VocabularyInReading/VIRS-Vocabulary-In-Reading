package com.vir;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

import com.vir.service.impl.email.SendGridEmailService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.Resource;

@SpringBootApplication(scanBasePackages = "com.vir, com.vir.service")
public class VirBackendApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(VirBackendApplication.class);

	public static void main(String[] args)
	{
		ApplicationContext applicationContext = SpringApplication.run(VirBackendApplication.class, args);
		LOGGER.info("Spring application has started.");

		// final String KEY_MAX_PHYSICAL_BYTES = "org.bytedeco.javacpp.maxphysicalbytes";
		// String old = System.getProperty(KEY_MAX_PHYSICAL_BYTES);
		// final String KEY_MAX_BYTES = "org.bytedeco.javacpp.maxbytes";
		// String old2 = System.getProperty(KEY_MAX_BYTES);
		// System.out.println("max physical bytes: " + old);
		// System.out.println("max bytes: " + old2);
		// System.setProperty(KEY_MAX_PHYSICAL_BYTES, "0"); 
		// System.setProperty(KEY_MAX_BYTES, "0");
		try
		{
			Resource[] resources = applicationContext.getResources("classpath*:tessdata/*.*");
			final String PATH = "tessdata";
			File f = new File(PATH);
			if(!f.exists()) f.mkdir();

			for (Resource r: resources)
			{
				String fileName = r.getFilename();
				InputStream is = r.getInputStream();
            
				OutputStream os = new FileOutputStream(PATH + "/" + fileName);
				
				byte[] buffer = new byte[1024];
				int bytesRead;
				//read from is to buffer
				while((bytesRead = is.read(buffer)) !=-1){
					os.write(buffer, 0, bytesRead);
				}
				is.close();
				//flush OutputStream to write any buffered data to file
				os.flush();
				os.close();

			}//for r
		}//try
		catch(Throwable t)
		{
			LOGGER.error("There was an error on setting up tesseract language files: ", t);
			//System.out.println("There was an error on setting up tesseract language files: " + t);
			new SendGridEmailService().sendExceptionEmail(t);
		}//catch
	}
}