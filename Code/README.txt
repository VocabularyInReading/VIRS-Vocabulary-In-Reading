# Up and running

* Clone the repo
* Create a local MySQL account with credentials
 ```
username: root
password: root
```
* Login via the MySQL CLI: mysql -u root -p
* Enter the password "root" when prompted"
* Create a schema named: create schema vir;
* Exit: exit
* Add tables: mysql -u root -p vir < /virs/Code/VIR-Backend/src/main/resources/schema.sql\
* Add data to the tables: mysql -u root -p vir < /virs/Code/VIR-Backend/src/main/resources/data.sql 

* Install all dependencies:
```

./virs.sh install-only ('virs.cmd install-only' for Windows)

* Run: 
```
./virs.sh run	('virs.cmd run' for Windows)

NOTE: you have to be in the .../Code directory in order to execute these commands
```
* Access the application at [localhost:8080](localhost:8080)

* Prod:
./virs.sh prod-build

_Note:_
If you are using a Unix like system make sure you give execution permissions to the files.
```chmod +x build.sh```


_Note:_
You can have the application running on :8080 and still modify the front end and see your changes on :4200.

# Folder structure information

## Tree
```
.
├── Code
│   ├── .mvn
│   ├── VIR-Android
│   ├── VIR-Backend
│   ├── VIR-Frontend
│   ├── VIR-VBA
│   ├── VIR-Scripts
│   │   ├── install_image_magic_ec2.sh
│   │   └── install_tesseract_ec2.sh
│   ├── VIR-iPhone
│   ├── virs.cmd
│   ├── virs.sh
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── pom.xml
│   └── start
└── README.md
```

## Description

This is the description of the files from the tree.

Folder/File | Description
--- | --- 
Code             | Contains all the code for the application.
.mvn             | Folder needed for the maven wrapper. (safely ignore, but not delete)
VIR-Android      | Contains all the code for the Android application.
VIR-Backend      | Contains all the code for the backend of the application.
VIR-Frontend     | Contains all the code for the frontend of the application.
VIR-VBA	         | Contains all the code for a VBA workbook to help gather information from the professor and convert it to sql.
VIR-Scripts      | Contains scripts for the application. **this is no longer needed**
VIR-iPhone       | Contains all the code for the iPhone application.
virs.cmd         | Script to build the application from Windows.
virs.sh          | Script to build the application from Unix/Mac.
mvnw             | File needed for the maven wrapper. (safely ignore, but not delete)
mvnw.cmd         | File needed for the maven wrapper. (safely ignore, but not delete)
pom.xml          | Configuration file to build the whole project. Read more about the build pipeline.
README.md        | This readme file (talk about recursion...)


# Creating AWS Environment From Scratch [NOTE: You should not have to change any of the current infastructure but if you do this is how]

### Elastic Beanstalk Dashboard
- If needed create a new Application.
- Create a new environment with all the default configurations and the sample appication.
- Under Config got ahead and create a database with the "username" and "password" (Note the password has to be long, keep in mind that this password will be ecrypted later on)
- Under Config/Software Configuration add a new Property name with the name used in the java EncryptorConfig.java for the name and the value.


### RDS Dashboard

- Go to the database associated with the beanstack above.
- Select it and click Instance Details.
- Click on the security groups: the one that starts with "rds-aws...."
- There go to the "InBound" tab at the bottom and add a new TCP protocol with port 3306 and pic your ip address.
	(This will allow to connect using workbench)
	
### Workbench

- Login with the credentials and the connection string listed on the RDS dashboard.
- Create a new database.
- Populate any data needed.

### Java IDE

- Add properties for the database, encryptor place holder, and port 5000 (needed for production)
- Compile and generate JAR.

### Elastic Beanstalk Dashboard

- Upoad the new version of the application.

### EC2 Dashboard
- If you  do not have a .pem file. Create a key to log in via ssh.
- Click 'Key pairs' to go to the section of the keys.
- Delete the old key pair (This is required to unlink the old VM)
- Create a copy of the current VM instance
- Locate the EC2 instance and right click on it to get the ssh connection information. (for the key to work it has to be associate with the BeanStalk instance, this should be already done, but you can do this in the 'Instance settings' of the Beanstalk)

# Application Building and Pipelines

![Alt text](https://github.com/FIU-SCIS-Senior-Projects/VIR-2.0/blob/develop/Media/DeploymentFlow.png?raw=true "Pipe lines")