@echo off

:: Set some of the commands
if "%1"=="prod" (
	echo Increasing build values in prod
	call mvnw.cmd build-helper:parse-version versions:set -DnewVersion=${parsedVersion.majorVersion}.${parsedVersion.minorVersion}.${parsedVersion.nextIncrementalVersion} -DprocessAllModules=true -DnextSnapshot=true versions:commit
	echo Building prod
	call mvnw.cmd clean install -P install,test,prod -Dnpm.executable=npm.cmd -Dng.executable=ng.cmd -Dng.production.flag="--prod"
) else if "%1" == "prod-build" (
	:: In case testing causes problems
	:: Files in Code\VIR-Backend\src\test\java\com\vir might have to be temporarily removed.
	echo Installing, building dev and running unit tests
	call mvnw.cmd clean install -P install,prod -Dnpm.executable=npm.cmd -Dng.executable=ng.cmd -Dng.production.flag="--prod"
) else if "%1" == "test" (
	echo Building dev and running unit tests
	call mvnw.cmd install -Dnpm.executable=npm.cmd -Dng.executable=ng.cmd -P test
) else if "%1" == "install" (
	echo Installing, building dev and running unit tests
	call mvnw.cmd install -Dnpm.executable=npm.cmd -Dng.executable=ng.cmd -P install,test
) else if "%1" == "install-only" (
	echo Installing, building dev
	call mvnw.cmd install -Dnpm.executable=npm.cmd -Dng.executable=ng.cmd -P install
) else if "%1" == "clean" (
	echo Cleaning project
	call mvnw.cmd clean
) else if "%1" == "integration-test" (
	echo Integration test
	./mvnw clean integration-test -f VIR-Backend/pom.xml -P integration-test
) else if "%1" == "debug" (
	echo Debugging the web application
	java -Xms256m -Xmx512m -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8080 -jar VIR-Backend/target/VIR-Backend-*.jar
) else if "%1" == "run" (
	:: Make sure current path matches the backend version.
	echo Debugging the web application
	java -Xms256m -Xmx512m -jar ./VIR-Backend/target/VIR-Backend-6.3.0.jar
)  else (
	echo Building dev default
	call mvnw.cmd install -Dnpm.executable=npm.cmd -Dng.executable=ng.cmd
)