This scripts are only to be run if for whatever reason the EC2 instance is lost and a new one has to be created.

If you change the type of your EC2 instance you will have to run the scrips too because technically you are getting a new instance.

Also I wish there was an easy way to do this but it's long and painful.

* Make sure you execute each line in the scripts independently
* Check for errors in each line
* Run the checks at the end and make sure they make sense.
* If the line is to change to a directory, make sure the version still matches what was downloaded with 'wget' These tend to change frequently


Best of luck :)