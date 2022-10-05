package com.vir.model;

public class ItranslateRequest
{
    private String text;
    private String target;
    
    public String getText()
    {
        return this.text;
    }
    public void setText(String text)
    {
        this.text = text;
    }
    public String getTarget()
    {
        return this.target;
    }
    public void setTarget(String target)
    {
        this.target = target;
    }
}