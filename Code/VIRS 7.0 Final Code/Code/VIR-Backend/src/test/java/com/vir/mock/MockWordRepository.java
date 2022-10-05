package com.vir.mock;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.vir.model.Word;
import com.vir.repository.WordRepository;

import org.apache.http.util.TextUtils;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import jj2000.j2k.NotImplementedError;

public class MockWordRepository implements WordRepository
{
    private final List<Word> datastore;
    public MockWordRepository()
    {
        this(MockWordRepository.getDataStore());
    }
    public MockWordRepository(List<Word> datastore)
    {
        this.datastore = datastore == null ? new ArrayList<Word>() : datastore;
    }
    @Override
    public List<Word> findAll() {
        return this.datastore;
    }

    @Override//ADDED THIS TO DEBUG
    public Long removeByCategory(String category) {throw new NotImplementedError();}
    @Override
    public Long removeById(int id)  {throw new NotImplementedError();}

    @Override
    public List<Word> findAll(Sort sort) {
        throw new NotImplementedError();
    }

    @Override
    public List<Word> findAll(Iterable<Long> ids) {
        throw new NotImplementedError();
    }

    @Override
    public <S extends Word> List<S> save(Iterable<S> entities) {
        throw new NotImplementedError();
    }

    @Override
    public void flush() {
        throw new NotImplementedError();
    }

    @Override
    public <S extends Word> S saveAndFlush(S entity) {
        throw new NotImplementedError();
    }

    @Override
    public void deleteInBatch(Iterable<Word> entities) {
        throw new NotImplementedError();
    }

    @Override
    public void deleteAllInBatch() {
        throw new NotImplementedError();
    }

    @Override
    public Word getOne(Long id) {
        throw new NotImplementedError();
    }

    @Override
    public <S extends Word> List<S> findAll(Example<S> example) {
        throw new NotImplementedError();
    }

    @Override
    public <S extends Word> List<S> findAll(Example<S> example, Sort sort) {
        throw new NotImplementedError();
    }

    @Override
    public Page<Word> findAll(Pageable pageable) {
        throw new NotImplementedError();
    }

    @Override
    public <S extends Word> S save(S entity) {
        throw new NotImplementedError();
    }

    @Override
    public Word findOne(Long id) {
        throw new NotImplementedError();
    }

    @Override
    public boolean exists(Long id) {
        throw new NotImplementedError();
    }

    @Override
    public long count() {
        throw new NotImplementedError();
    }

    @Override
    public void delete(Long id) {
        throw new NotImplementedError();
    }

    @Override
    public void delete(Word entity) {
        throw new NotImplementedError();
    }

    @Override
    public void delete(Iterable<? extends Word> entities) {
        throw new NotImplementedError();
    }

    @Override
    public void deleteAll() {
        throw new NotImplementedError();
    }

    @Override
    public <S extends Word> S findOne(Example<S> example) {
        throw new NotImplementedError();
    }

    @Override
    public <S extends Word> Page<S> findAll(Example<S> example, Pageable pageable) {
        throw new NotImplementedError();
    }

    @Override
    public <S extends Word> long count(Example<S> example) {
        throw new NotImplementedError();
    }

    @Override
    public <S extends Word> boolean exists(Example<S> example) {
        throw new NotImplementedError();
    }

    @Override
    public List<Word> findByValueIn(List<String> words) {
        throw new NotImplementedError();
    }
    //2018-11-11 - PAA
    //this class is a mock repository, but needed this in order to run integration tests faster
    //there's no need to test wiring up via the framework, so this explicit datastore calls are faster
    //sometimes setup can take up to 5 minutes and that's just counter-productive
    //a system test would require spring/hibernate to wireup, but unit tests and integration tests don't relaly need that much bloat
    @Override
    public List<Word> findWordDistinctByValueIn(List<String> words)
    {
        List<Word> results = new ArrayList<Word>();
        if(words == null || words.size() == 0) return results;
        StringBuilder listIn = new StringBuilder("");
        for(String s : words)
        {
            if(listIn.length() > 0) listIn.append(",");
            listIn.append("'" + s + "'");
        }//for s
        if((listIn + "").trim() == "") return results;
        try
                (
                        Connection con = DriverManager.getConnection(
                                "jdbc:mysql://localhost:3306/vir?useSSL=false&characterEncoding=utf8&connectionCollation=utf8mb4_unicode_ci",
                                "root",
                                "root");
                        Statement stmt = con.createStatement();
                        ResultSet rs = stmt.executeQuery(String.format("SELECT DISTINCT id, value, category FROM word WHERE value in(%s)", listIn));
                )
        {
            while (rs.next())
            {
                int i = 0;
                Long id = rs.getLong(++i);
                String val = rs.getString(++i);
                String cat = rs.getString(++i);

                Word w = new Word(val, cat);
                w.setId(id);
                results.add(w);
            }//while
        }//try
        catch(Throwable t)
        {
            System.out.println(t);
        }
        return results;
        // if(words == null || words.isEmpty()) return Collections.<Word>emptyList();
        // List<Word> found = new ArrayList<Word>();
        // for(Word w : this.datastore)
        // {
        //     String val = w == null ? null : w.getValue();
        //     if(TextUtils.isBlank(val)) continue;
        //     for(String s : words)
        //     {
        //         if(TextUtils.isBlank(s)) continue;
        //         boolean foundEntry = s.equalsIgnoreCase(s);
        //         if(!foundEntry) continue;
        //         found.add(w);
        //         break;
        //     }//for s
        // }//for w
        // return found.isEmpty() ? Collections.<Word>emptyList() : found;
    }

    @Override
    public Word findFirstByValue(String value) {
        throw new NotImplementedError();
    }

    @Override
    public Word findFirstByValueAndCategoryIn(String value, String[] categories) {
        throw new NotImplementedError();
    }

    @Override
    public Long removeByValue(String value) {
        throw new NotImplementedError();
    }

    @Override
    public Page<Word> findAllByCategory(Pageable pageable, String category) {
        throw new NotImplementedError();
    }
    private static List<Word> getDataStore()
    {
        List<Word> datastore = new ArrayList<Word>();
        datastore.add(new Word("value", "cat"));
        datastore.add(new Word("a", "cat"));
        datastore.add(new Word("abacus", "cat"));
        datastore.add(new Word("abalone", "cat"));
        datastore.add(new Word("abandon", "cat"));
        datastore.add(new Word("abandoned", "cat"));
        datastore.add(new Word("abandoning", "cat"));
        datastore.add(new Word("abandonment", "cat"));
        datastore.add(new Word("abandons", "cat"));
        datastore.add(new Word("abase", "cat"));
        datastore.add(new Word("abases", "cat"));
        datastore.add(new Word("abash", "cat"));
        datastore.add(new Word("abate", "cat"));
        datastore.add(new Word("abated", "cat"));
        datastore.add(new Word("abating", "cat"));
        datastore.add(new Word("Abbas", "cat"));
        datastore.add(new Word("abbey", "cat"));
        datastore.add(new Word("abbeys", "cat"));
        datastore.add(new Word("abbots", "cat"));
        datastore.add(new Word("abbreviate", "cat"));
        datastore.add(new Word("abbreviated", "cat"));
        datastore.add(new Word("abbreviates", "cat"));
        datastore.add(new Word("abbreviation", "cat"));
        datastore.add(new Word("abdicate", "cat"));
        datastore.add(new Word("abdicated", "cat"));
        datastore.add(new Word("abdicates", "cat"));
        datastore.add(new Word("abdicating", "cat"));
        datastore.add(new Word("abdication", "cat"));
        datastore.add(new Word("abdomen", "cat"));
        datastore.add(new Word("abdomens", "cat"));
        datastore.add(new Word("abdominal", "cat"));
        datastore.add(new Word("abduction", "cat"));
        datastore.add(new Word("aberration", "cat"));
        datastore.add(new Word("aberrations", "cat"));
        datastore.add(new Word("abettor", "cat"));
        datastore.add(new Word("abeyance", "cat"));
        datastore.add(new Word("abhor", "cat"));
        datastore.add(new Word("abhors", "cat"));
        datastore.add(new Word("abidance", "cat"));
        datastore.add(new Word("abide", "cat"));
        datastore.add(new Word("abiding", "cat"));
        datastore.add(new Word("abidingly", "cat"));
        return datastore;
    }
}