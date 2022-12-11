package com.vir.helpers;

import com.amazonaws.services.textract.AmazonTextract;
import com.amazonaws.services.textract.AmazonTextractClientBuilder;
import com.amazonaws.services.textract.model.*;
import com.amazonaws.util.IOUtils;
import java.util.List;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Collections;

// Not sure if all these AWS imports are needed

// This class will take the Blocks that ImgProcessorService.java gets return the text in the correct order.
// This is needed because the old method (reading blocks in order) did not read columns correctly
public class AWSBlockReader {

    private class BlockData{
        float x;
        float width;
        String text;
        int column;
        public BlockData(float x, float width, String text){
            this.x = x;
            this.width = width;
            this.text = text;
            column = 1;
        }

        public String toString(){
            return "X: " + x + " width: " + width + " text: " + text + " col: " + column;
        }
    }
    
    private class TextCluster{

        
        private float margin;
        public float position;
        int column;
        int members;
        public TextCluster(BlockData firstMember, float errorMargin){
            position = firstMember.x;
            members = 1;
            margin = errorMargin;
            column = 0;
        }

        // returns true if the value belongs in this cluster
        public boolean check(BlockData value){
            if (Math.abs(value.x - position) < margin){
                return true;
            }
            return false;
        }

        // add a new member and adjust the average
        public void add(BlockData value){
            float total = position * members + value.x;
            members++;
            position = total / members;
        }

        public String toString(){
            return "[Position: " + position + "  Members: " + members+"  Col: " + column + "]";
        }

        
    }
    
    // THIS NEEDS TO BE WORKED ON, .3 might not fit all cases
    private final float MARGIN_OF_ERROR = 0.3f;

    private float totalWidthOfText; // this could be used to get more precise clustering but it seems like MARGIN_OF_ERROR works fine in much fewer lines
    private int columns;
    private ArrayList<BlockData> blockData;
    private float averageColWidth;
    private ArrayList<TextCluster> clusters;

    public AWSBlockReader(List<Block> input){
        columns = 1;
        float left = 0.0f;
        float width = 0.0f;

        blockData = new ArrayList<BlockData>();
        clusters = new ArrayList<TextCluster>(); 

        float minX = 1.0f;
        float maxX = 0.0f;
        for (Block block : input){
            if ((block.getBlockType()).equals("LINE")) {
                left = block.getGeometry().getBoundingBox().getLeft();
                width = block.getGeometry().getBoundingBox().getWidth();

                if (left < minX){ minX = left; }
                if (left + width > maxX) { maxX = left + width; }

                blockData.add(new BlockData(left, width, block.getText()));
                averageColWidth += block.getGeometry().getBoundingBox().getWidth();
            }
        }
        totalWidthOfText = maxX - minX;

        if (!blockData.isEmpty()){
            averageColWidth = averageColWidth / blockData.size();
            //System.out.println("AVERAGE WIDTH: " + averageColWidth);
            //System.out.println("TOTAL WIDTH OF TEXT: " + totalWidthOfText);
        }

        //getCols();
        //orderBlocks();

        
    }

    // find how many columns there are
    private void getCols(){
        
        boolean placed = false;
        for (BlockData block : blockData){
            placed = false;
            
            for (TextCluster cluster : clusters){
                if (cluster.check(block)){
                    cluster.add(block);
                    placed = true;
                }
            }
            
            if (!placed){
                clusters.add(new TextCluster(block, averageColWidth * MARGIN_OF_ERROR));
            }
        }
        columns = clusters.size();
        Collections.sort(clusters, new Comparator<TextCluster>() {
            @Override
            public int compare(TextCluster o1, TextCluster o2) {
                if (o1.position < o2.position)
                    return -1;
                else 
                    return 1;
            }
        });

        int index = 1;
        for (TextCluster cluster : clusters){
            cluster.column = index;
            index++;
        }

        //System.out.println("final clusters: " + clusters);
    }

    //use the info from getCols to order the blocks
    private void orderBlocks(){

        boolean placed = false;
        int index = 0;
        for (BlockData block : blockData){
            placed = false;
            index = 0;
            while (index < columns || !placed){
                if (clusters.get(index).check(block)){
                    placed = true;
                    block.column = clusters.get(index).column;
                }
                index++;
            }
            if (!placed){ // This should never have to happen
                //System.out.println("AWSBlockReader: BLOCK WAS NOT PLACED: " + block.toString());
            }
        }

        
    }

    // This could be modified to change the text layout. Right now columns will return as a tall narrow stack
    public String getText(){
        String output = "";

        for (BlockData block : blockData){
            output += block.text + " ";
        }

        return output;
        
    }


}