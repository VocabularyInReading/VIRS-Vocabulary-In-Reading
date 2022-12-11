# VIR-Frontend

### Introduction

`VIR-Frontend App` built using the following:
- Developed using boostrap-v4.0.0-alpha.6
- ng-bootstrap
- angular-v4.3.1
- angular/cli-v1.3.2
- Official Angular i18n support.
- SCSS
- HTML5 


### How to start
**Note** that this seed project requires  **node >=v6.9.0 and npm >=3**.
**INSTALL NODE IN ORDER TO BE ABLE TO USE 'npm' COMMANDS**

In order to start the project use:
```bash
$ cd virs/Code/VIR-Frontend
# install the project's dependencies
$ npm install
$ npm install xlsx 
$ npm install file-saver
# watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
# prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build
```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
**NOTE FOR WINDOWS USERS: this currently does not work properly for windows 7. 
Works with out errors on Windows 10**

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help
(IF 'npm start' IS NOT WORKING, UNINSTALL & INSTALL NODE-SASS WITH 'npm uninstall node-sass' THEN 'npm install node-sass')
(IF 'ng' COMMANDS NOT WORKING, INSTALL ANGULAR/CLI WITH 'npm install -g @angular/cli')

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Documentation
- install it with npm :
```bash
$ npm i -g @compodoc/compodoc 
```
- run it inside the folder of your Angular application
```bash
$ compodoc -p tsconfig.json
```
You can then run an HTTP server in that folder, or launch the previous command with the -s flag, and the tool will serve you the documentation, by default on http://localhost:8080
```bash
$ compodoc -p tsconfig.json -s
```

