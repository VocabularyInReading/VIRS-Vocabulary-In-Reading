package com.vir.model;


public class EmailMessage
{
    private String from;
    private String to;
    private String subject;
    private String body;
    private boolean html;

    public EmailMessage()
    {

    }
    public EmailMessage(String from, String to, String subject, String body, boolean html)
    {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.body = body;
        this.html = html;
    }
    public String getFrom()
    {
        return this.from;
    }//getFrom
    public void setFrom(String from)
    {
        this.from = from;
    }//setFrom
    public String getTo()
    {
        return this.to;
    }//getTo
    public void setTo(String to)
    {
        this.to = to;
    }//setTo
    public String getSubject()
    {
        return this.subject;
    }//getSubject
    public void setSubject(String subject)
    {
        this.subject = subject;
    }//setSubject
    public String getBody()
    {
        return this.body;
    }//getBody
    public void setBody(String body)
    {
        this.body = body;
    }//setBody
    public boolean getHtml()
    {
        return this.html;
    }//getHtml
    public void setHtml(boolean html)
    {
        this.html = html;
    }//setHtml
}