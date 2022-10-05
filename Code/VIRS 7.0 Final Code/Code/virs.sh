#!/bin/bash

# Set some of the commands
if [[ $1 == 'prod' ]]
then
	if [ -z "$2"]
	then
		echo Increasing build values in prod
		./mvnw build-helper:parse-version versions:set -DnewVersion=\${parsedVersion.majorVersion}.\${parsedVersion.minorVersion}.\${parsedVersion.nextIncrementalVersion} -DprocessAllModules=true -DnextSnapshot=true versions:commit	
	else
		echo Increasing build to fixed values "$2" in prod
		./mvnw versions:set -DnewVersion="$2" -DprocessAllModules=true -DnextSnapshot=false versions:commit
	fi

	echo Building prod
	./mvnw clean install -P prod -Dnpm.executable=npm -Dng.executable=ng -Dng.production.flag="--prod"
# In case testing causes problems
# Files in Code\VIR-Backend\src\test\java\com\vir might have to be temporarily removed.
elif [[ $1 == 'prod-build' ]]
then
	echo 'Building prod'
	./mvnw clean install -P prod -Dnpm.executable=npm -Dng.executable=ng -Dng.production.flag="--prod"
elif [[ $1 == 'test' ]]
then
	echo 'Building dev and running unit tests'
	./mvnw install -Dnpm.executable=npm -Dng.executable=ng -P test
elif [[ $1 == 'test-trace' ]]
then
	echo 'Building dev and running unit tests with tracing'
	./mvnw install -Dnpm.executable=npm -Dng.executable=ng -P test -X
elif [[ $1 == 'install-only' ]]
then
	echo 'Installing and building dev'
	./mvnw install -Dnpm.executable=npm -Dng.executable=ng -P install
elif [[ $1 == 'install' ]]
then
	echo 'Installing, building dev and running unit tests'
	./mvnw install -Dnpm.executable=npm -Dng.executable=ng -P install,test
elif [[ $1 == 'clean' ]]
then
	echo 'Cleaning project'
	./mvnw clean
elif [[ $1 == 'integration-test' ]]
then
	echo 'Integration test'
	./mvnw clean integration-test -f VIR-Backend/pom.xml -P integration-test
elif [[ $1 == 'debug' ]]
then
	echo 'Debugging the web application'
	java -Xms256m -Xmx512m -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8000 -jar VIR-Backend/target/VIR-Backend-*.jar
elif [[ $1 == 'run' ]]
then
	echo 'Running the web application'
	java -Xms256m -Xmx512m -jar VIR-Backend/target/VIR-Backend-*.jar
else
	echo 'Building dev (default)'
	# ./mvnw clean install -Dnpm.executable=npm -Dng.executable=ng -DskipTests
	./mvnw install -Dnpm.executable=npm -Dng.executable=ng
fi