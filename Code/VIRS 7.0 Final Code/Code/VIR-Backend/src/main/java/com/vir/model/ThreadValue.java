package com.vir.model;

/**
 * This class is created to easily pass values to a thread.
 */
public class ThreadValue<T extends Object>
{
    private T value;
    final Object threadLock;
    final boolean threadSafe;
    public ThreadValue()
    {
        this(false);
    }
    public ThreadValue(boolean threadSafe)
    {
        this.threadSafe = threadSafe;
        this.threadLock = threadSafe ? new Object() : null;
    }
    public T getValue()
    {
        if(this.threadSafe)
        {
            synchronized(this.threadLock)
            {
                return this.value;
            }//synchronize
        }//if
        else return this.value;
    }
    public void setValue(T value)
    {
        if(this.threadSafe)
        {
            synchronized(this.threadLock)
            {
                this.value = value;
            }//synchronize
        }//if
        else this.value = value;
    }
}