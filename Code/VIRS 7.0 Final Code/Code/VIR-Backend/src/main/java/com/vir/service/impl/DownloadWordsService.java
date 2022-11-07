package com.vir.service.impl;

import com.opencsv.CSVWriter;
import com.vir.model.Word;
import com.vir.repository.WordRepository;
import com.vir.service.impl.processor.OptimizedTextProcessorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class DownloadWordsService {
    private WordRepository wordRepo;

    private Logger logger = LoggerFactory.getLogger(DownloadWordsService.class);

    @Autowired
    public DownloadWordsService(WordRepository wordRepo) {
        this.wordRepo = wordRepo;
    }

    public Resource getDownloadExcel(String[] categories) {
        ArrayList<Word> words = new ArrayList<>();
        words.addAll(wordRepo.findByCategoryIn(categories));
        logger.info("Words from categories: {} are {}", categories, words);
        String filePath = String.join("-", categories) + ".csv";
        logger.info("Filepath: {} ", filePath);

//        StringBuilder fileSB = new StringBuilder("./");
//        logger.info("String builder initial contents: {}", fileSB);
//        fileSB.append(categories);
//        fileSB.append(".csv");
//        logger.info("String builder final contents: {}", fileSB);
//        String filePath = fileSB.toString();

        File file = new File("./" + filePath);

        try {
            FileWriter outputfile = new FileWriter(file);

            CSVWriter writer = new CSVWriter(outputfile, ',',
                    CSVWriter.NO_QUOTE_CHARACTER,
                    CSVWriter.DEFAULT_ESCAPE_CHARACTER,
                    CSVWriter.DEFAULT_LINE_END);

            List<String[]> rows = new ArrayList<>();
            String[] headers = new String[2];
            headers[0] = "Word";
            headers[1] = "Category";
            rows.add(headers);
            for (Word word: words) {
                String[] row = new String[2];
                row[0] = word.getValue();
                row[1] = word.getCategory();
                rows.add(row);
            }

            writer.writeAll(rows);
            writer.close();
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        try {
            ResourceLoader resourceLoader = new DefaultResourceLoader();
            Resource resource = resourceLoader.getResource("file:" + filePath);
//            Resource resource = new UrlResource(DownloadWordsService.class.getResource("/").getFile() + filePath);
            logger.info("Resource output: {}", resource);

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    public List<Word> getCategories(String[] categories) {
        ArrayList<Word> words = new ArrayList<>();
        words.addAll(wordRepo.findByCategoryIn(categories));
        return words;
    }

}
