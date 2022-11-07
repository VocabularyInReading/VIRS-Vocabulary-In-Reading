package com.vir.controller;

import com.sun.mail.iap.Response;
import com.vir.model.Word;
import com.vir.service.impl.DownloadWordsService;
import io.swagger.annotations.Api;
import org.apache.http.protocol.HTTP;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/download")
@Api(tags = "download")
@CrossOrigin(value = {"*"}, exposedHeaders = {"Content-Disposition", "Access-Control-Allow-Origin"})
public class DownloadController {

    private DownloadWordsService downloadWordsService;

    private Logger logger = LoggerFactory.getLogger(DownloadController.class);
    @Autowired
    public DownloadController (DownloadWordsService downloadWordsService) {
        this.downloadWordsService = downloadWordsService;
    }

    @GetMapping(value="/{categories}")
    @ResponseBody
    public ResponseEntity<Resource> getFile(@PathVariable String[] categories) {
        try {
            Resource file = downloadWordsService.getDownloadExcel(categories);
//            return new ResponseEntity<>(words, HttpStatus.OK);
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
//            HttpHeaders header = new HttpHeaders();
//            List<String> exposeHeaders = new ArrayList<>();
//            exposeHeaders.add("Content-Disposition");
//            exposeHeaders.add("Content-Length");
//            exposeHeaders.add("Content-Type");
//            header.setAccessControlAllowCredentials(true);
//
//            header.setAccessControlExposeHeaders(exposeHeaders);
//            header.setContentLength(file.contentLength());
//            header.setContentType(MediaType.valueOf("csv"));
//            logger.info(file.getFilename());
//            logger.info("Hey");
////            header.setAccessControlExposeHeaders("Content-Dispostion");
//            header.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"");
//            return new ResponseEntity<>(file, header, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


//    @GetMapping(value="/{categories}")
//    @ResponseBody
//    public ResponseEntity<Resource> getFile(@PathVariable String[] categories) {
//        try {
//            Resource file = downloadWordsService.getDownloadExcel(categories);
////            return new ResponseEntity<>(words, HttpStatus.OK);
//            return ResponseEntity.ok().body(file);
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

//    @GetMapping(value="/{categories}")
//    @ResponseBody
//    public ResponseEntity<String> getFile(@PathVariable String[] categories) {
//        try {
//            Resource file = downloadWordsService.getDownloadExcel(categories);
////            return new ResponseEntity<>(words, HttpStatus.OK);
//            return new ResponseEntity<>(file., HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

//    @GetMapping(value="test/{categories}")
//    @ResponseBody
//    public ResponseEntity<List<Word>> getCategories(@PathVariable String[] categories) {
//        try {
//            ArrayList<Word> words = new ArrayList<>();
//            words.addAll(downloadWordsService.getCategories(categories));
//            return new ResponseEntity<>(words, HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

}
