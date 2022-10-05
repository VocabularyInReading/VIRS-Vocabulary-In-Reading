webpackJsonp(["dictionary.module"],{

/***/ "./src/app/layout/dictionary/dictionary-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dictionary_component__ = __webpack_require__("./src/app/layout/dictionary/dictionary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dictionary_component__["a" /* DictionaryComponent */] }
];
var DictionaryRoutingModule = (function () {
    function DictionaryRoutingModule() {
    }
    return DictionaryRoutingModule;
}());
DictionaryRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], DictionaryRoutingModule);

//# sourceMappingURL=dictionary-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/dictionary/dictionary.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Buttons - Visible only on desktops-->\n<div class=\"container bottomMarging\">\n    <div class=\"btn-group hidden-sm-down\">\n      <!--  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateCategory('awl')\">Academic Words</button>\n        <button type=\"button\" class=\"btn purpleButton\" (click)=\"updateCategory('stem')\">STEM Words</button> -->\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"updateCategory('hi')\">High Frequency</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateCategory('med')\">Medium Frequency</button>\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateCategory('low')\">Low Frequency</button>\n    </div>\n</div>\n\n<!-- Buttons - Visible only on cellphones\n<div class=\"container bottomMarging\">\n    <div class=\"btn-group hidden-md-up\" style=\"width: 200%;\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateCategory('awl')\">Academic Words</button>\n        <button type=\"button\" class=\"btn purpleButton\" (click)=\"updateCategory('stem')\">STEM Words</button>\n\n    </div>\n</div> -->\n\n<div class=\"container bottomMarging\">\n    <div class=\"btn-group hidden-md-up\" style=\"width: 100%;\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"updateCategory('hi')\">High Frequency</button>\n    </div>\n    <div class=\"btn-group hidden-md-up\" style=\"width: 100%;\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateCategory('med')\">Medium Frequency</button>\n    </div>\n    <div class=\"btn-group hidden-md-up\" style=\"width: 100%;\">\n        <button type=\"button\" class=\"btn btn-warning btn-block\" (click)=\"updateCategory('low')\">Low Frequency</button>\n    </div>\n</div>\n\n<hr />\n\n\n<div class =\"dark-mode\">\n    <p style=\"text-align: center;font-size: 0.9rem; \">\n        <strong>Click ALL on the bottom of the page prior to downloading the word list.</strong>\n    </p>\n</div>\n<!--Alert-->\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf='errorSearch'>\n    <strong>{{alertWord}} </strong> doesn't exist in data base.\n</div>\n\n<!--Search-->\n<div class=\"form-group row m-1 p-1\">\n    <div class=\"col col-md-8 col-xl-4\">\n        <input class=\"form-control\" type=\"search\" name=\"searchArea\" [(ngModel)]=\"searchArea\" id=\"example-search-input\" placeholder=\"Word..\">\n    </div>\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n            <button class=\"btn light-mode m-1 mt-2\" (click)=\"searchWord();\" [disabled]=\"!searchArea\" required> Search </button>\n        </div>\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n            <button class= \"btn light-mode m-1 mt-2\" placement=\"bottom\" ngbTooltip=\"Text Copied!\" triggers=\"click:blur\" (click)=\"copyMessage('Ehsanzadeh, S.J. & Dwyer, E. (2017). A Corpus-based K-12 School Dictionary.')\" value=\"click to copy\"> Cite Us </button>\n        </div>\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\n            <button class=\"btn light-mode m-1 mt-2\" (click)=\"exportexcel();\" value=\"Click to Download\" placement=\"right\" ngbTooltip=\"Click ALL below before downloading\"> Download List </button>\n        </div>\n    </div>\n</div>\n\n<!--Table - shows the search result-->\n<div class='table-responsive table-hover table-striped'>\n    <table class='table table-hover' id=\"excel-table\">\n        <!--\n        <thead>\n            <tr class=\"table-active\">\n                <th>Word</th>\n                <th>Category</th>\n\n            </tr>\n        </thead>\n        -->\n        <tbody>\n            <tr *ngIf='showTable && !error' class=\"table-success\">\n                <td (click)=\"getDefinition(word.value); open(content);\">\n                    <a href=\"javascript:void(0)\">{{ word.value}}</a>\n                </td>\n                <td>{{resultCategory}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n\n<!--Definition model (Popup)-->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n            <img src=\"assets/images/Wikipedia-logo.png\" title=\"Wikipedia Dictionary\" style=\"width:50px;height:50px;\"> Definition &nbsp;&nbsp;\n            <i class=\"fa fa-spinner fa-spin\" style=\"font-size:32px;color:black\" *ngIf='processing'></i>\n        </h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <!--Alert-->\n        <div class=\"alert alert-warning\" role=\"alert\" *ngIf='error'>\n            <strong>Oh snap!</strong> We couldn't find the definition, please try another word.\n        </div>\n        <!--Definition-->\n        <p *ngIf='!error && !processing' class=\"card-text\" [innerHTML]=\"wordDefinition.wiki.html\"></p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n<!--Table-->\n<div class='table-responsive table-hover table-striped' *ngIf='turnOn'>\n    <table class='table table-hover'>\n        <thead>\n            <tr>\n                <th>Word</th>\n                <th>Category</th>\n\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor='let word of page.content'>\n                <td (click)=\"getDefinition(word.value); open(content);\">\n                    <a href=\"javascript:void(0)\">{{ word.value}}</a>\n                </td>\n                <td>{{wordCategory}}</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <!--Pagination-->\n    <div [ngSwitch]=\"activeCategory\">\n        <div *ngSwitchCase=\"'awl'\">\n            <ngb-pagination [collectionSize]=\"page.totalElements\" [pageSize]=\"tableSize\" [(page)]=\"awlpage\" [maxSize]=\"4\" [rotate]=\"true\"\n                            [ellipses]=\"false\" (pageChange)=\"getAWLWordList(awlpage)\" [boundaryLinks]=\"true\"></ngb-pagination>\n        </div>\n        <div *ngSwitchCase=\"'stem'\">\n            <ngb-pagination [collectionSize]=\"page.totalElements\" [pageSize]=\"tableSize\" [(page)]=\"stempage\" [maxSize]=\"4\" [rotate]=\"true\"\n                            [ellipses]=\"false\" (pageChange)=\"getSTEMWordList(awlpage)\" [boundaryLinks]=\"true\"></ngb-pagination>\n        </div>\n        <div *ngSwitchCase=\"'hi'\">\n            <ngb-pagination [collectionSize]=\"page.totalElements\" [pageSize]=\"tableSize\" [(page)]=\"hipage\" [maxSize]=\"4\" [rotate]=\"true\"\n                            [ellipses]=\"false\" (pageChange)=\"getHIWordList(hipage)\" [boundaryLinks]=\"true\"></ngb-pagination>\n        </div>\n        <div *ngSwitchCase=\"'med'\">\n            <ngb-pagination [collectionSize]=\"page.totalElements\" [pageSize]=\"tableSize\" [(page)]=\"medpage\" [maxSize]=\"4\" [rotate]=\"true\"\n                            [ellipses]=\"false\" (pageChange)=\"getMedWordList(medpage)\" [boundaryLinks]=\"true\"></ngb-pagination>\n        </div>\n        <div *ngSwitchCase=\"'low'\">\n            <ngb-pagination [collectionSize]=\"page.totalElements\" [pageSize]=\"tableSize\" [(page)]=\"lowpage\" [maxSize]=\"4\" [rotate]=\"true\"\n                            [ellipses]=\"false\" (pageChange)=\"getLowWordList(lowpage)\" [boundaryLinks]=\"true\"></ngb-pagination>\n        </div>\n        <hr class=\"bottomMarging\">\n\n        <!--Page Size-->\n        <div class=\"btn-group col-md-4 float-right\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"tableSize\">\n            <label ngbButtonLabel class=\"btn-secondary\">\n                <input ngbButton type=\"radio\" [value]=\"20\" (click)=\"getWordList(0, activeCategory, 20, sort);resetPagination()\"> 20\n            </label>\n            <label ngbButtonLabel class=\"btn-secondary\">\n                <input ngbButton type=\"radio\" value=\"60\" (click)=\"getWordList(0, activeCategory, 60, sort);resetPagination()\"> 60\n            </label>\n            <label ngbButtonLabel class=\"btn-secondary dark-mode\">\n                <input ngbButton type=\"radio\" [value]=\"2000\" (click)=\"getWordList(0, activeCategory, 2000, sort);resetPagination()\"> ALL\n            </label>\n        </div>\n\n        <!--Sorting-->\n        <div class=\"btn-group col-md-4\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"sorting\">\n            <label ngbButtonLabel class=\"btn-secondary\">\n                <input ngbButton type=\"radio\" [value]=\"ASC\" (click)=\"getWordList(0, activeCategory, tableSize, 'ASC' );resetPagination()\"> ASC\n            </label>\n            <label ngbButtonLabel class=\"btn-secondary\">\n                <input ngbButton type=\"radio\" value=\"DESC\" (click)=\"getWordList(0, activeCategory, tableSize, 'DESC');resetPagination()\"> DESC\n            </label>\n        </div>\n\n        <div class=\"col-md-4\" style=\"margin:0 auto;\">\n            <p>\n                <strong>page: {{page.number + 1}} / {{page.totalPages}}</strong>\n            </p>\n        </div>\n        <hr class=\"topMarging\">\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/layout/dictionary/dictionary.component.scss":
/***/ (function(module, exports) {

module.exports = ".col.col-md-8.col-xl-4 {\n  margin-top: 10px;\n  margin-left: 30px; }\n\n.dark-mode {\n  background-color: #3d3d3d;\n  color: #ebebeb; }\n\n.light-mode {\n  background-color: #ebebeb;\n  color: #3d3d3d; }\n\n.table-responsive {\n  margin-top: 10px;\n  width: 100%; }\n\n.btn-group {\n  width: 100%; }\n\n.btn-group .btn {\n  width: 100%; }\n\n.purpleButton {\n  background-color: darkorchid;\n  color: white; }\n\n.purpleButton:hover {\n  background-color: darkmagenta; }\n\n.page {\n  width: 40% !important; }\n\n.bottomMarging {\n  margin-bottom: 25px; }\n\n.topMarging {\n  margin-top: 25px; }\n\n.center {\n  margin: auto;\n  width: 50%;\n  border: 3px solid green;\n  padding: 10px; }\n\na {\n  color: inherit; }\n\na.disabled {\n  pointer-events: none; }\n\n.modal-body {\n  max-height: calc(100vh - 210px);\n  overflow-y: auto; }\n\ntable {\n  table-layout: fixed;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/layout/dictionary/dictionary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DictionaryComponent = (function () {
    function DictionaryComponent(_wordsList, _definitionService, modalService) {
        this._wordsList = _wordsList;
        this._definitionService = _definitionService;
        this.modalService = modalService;
        this.awlpage = 1;
        this.hipage = 1;
        this.medpage = 1;
        this.lowpage = 1;
        this.searchTrigger = false;
        this.showTable = false;
        this.defaultPagination = 1;
        this.advancedPagination = 1;
        this.paginationSize = 1;
        this.disabledPagination = 1;
        this.isDisabled = true;
        this.tableSize = 20;
        this.sort = 'ASC';
        this.activeCategory = 'hi';
    }
    DictionaryComponent.prototype.resetPagination = function () {
        this.awlpage = 1;
        this.hipage = 1;
        this.medpage = 1;
        this.lowpage = 1;
    };
    DictionaryComponent.prototype.updateCategory = function (category) {
        this.activeCategory = category;
        this.searchTrigger = false;
        this.getWordList(0, this.activeCategory, this.tableSize, this.sort);
        this.convertText(this.activeCategory);
    };
    DictionaryComponent.prototype.getWordList = function (pageNumber, category, size, sort) {
        var _this = this;
        this.defaultPagination = 1;
        this.sort = sort;
        this._wordsList.getData(pageNumber, category, size, sort)
            .subscribe(function (res) {
            _this.page = res;
            _this.turnOn = true;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side Error occured');
            }
            else {
                console.log('Server-side Error occured');
            }
        });
    };
    // Since the page Number starts from 0 in the backend we decrement the PageNumber by 1
    DictionaryComponent.prototype.getAWLWordList = function (pageNumber) {
        this.getWordList(pageNumber - 1, 'awl', this.tableSize, this.sort);
    };
    DictionaryComponent.prototype.getSTEMWordList = function (pageNumber) {
        this.getWordList(pageNumber - 1, 'stem', this.tableSize, this.sort);
    };
    DictionaryComponent.prototype.getHIWordList = function (pageNumber) {
        this.getWordList(pageNumber - 1, 'hi', this.tableSize, this.sort);
    };
    DictionaryComponent.prototype.getMedWordList = function (pageNumber) {
        this.getWordList(pageNumber - 1, 'med', this.tableSize, this.sort);
    };
    DictionaryComponent.prototype.getLowWordList = function (pageNumber) {
        this.getWordList(pageNumber - 1, 'low', this.tableSize, this.sort);
    };
    DictionaryComponent.prototype.convertText = function (category) {
        var temp;
        if (category === 'awl') {
            temp = 'Academic Word';
        }
        else if (category === 'hi') {
            temp = 'High Frequency';
        }
        else if (category == 'stem') {
            temp = 'STEM';
        }
        else if (category === 'med') {
            temp = 'Medium Frequency';
        }
        else if (category === 'low') {
            temp = 'Low Frequency';
        }
        if (this.searchTrigger == true) {
            return this.resultCategory = temp;
        }
        else if (this.searchTrigger == false) {
            return this.wordCategory = temp;
        } //This determines if the user hits 'search' in order to update the view properly
    };
    DictionaryComponent.prototype.ngOnInit = function () {
        this.getWordList(0, this.activeCategory, this.tableSize, this.sort);
        this.convertText(this.activeCategory);
        window.scrollTo(0, 0);
    };
    // it gets the definition of  the word using DefinitionService
    DictionaryComponent.prototype.getDefinition = function (word) {
        var _this = this;
        this.processing = true;
        this.error = false;
        this.cleanWord = word.replace(/[^a-zA-Z ]/g, '');
        this._definitionService.getDefinitionService(this.cleanWord)
            .subscribe(function (res) {
            _this.wordDefinition = res;
            _this.turnOn = true;
            _this.processing = false;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side Error occured');
            }
            else {
                _this.error = true;
                _this.processing = false;
                console.log('Server-side Error occured');
            }
        });
    };
    // definiton Model open
    DictionaryComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    DictionaryComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    DictionaryComponent.prototype.searchWord = function () {
        var _this = this;
        this.errorSearch = false;
        this.searchTrigger = true;
        this.alertWord = this.searchArea;
        var categories = "awl,hi,stem,med,low";
        this._wordsList.getWord(this.searchArea, categories)
            .subscribe(function (res) {
            _this.word = res;
            _this.processing = false;
            _this.showTable = true;
            _this.resultCategory = _this.convertText(res.category);
            categories = null;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side Error occured');
            }
            else {
                _this.errorSearch = true;
                console.log('Server-side Error occured');
            }
            categories = null;
        });
    };
    DictionaryComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    DictionaryComponent.prototype.exportexcel = function () {
        /* table id is passed over here */
        var element = document.getElementById('excel-table');
        var ws = __WEBPACK_IMPORTED_MODULE_3_xlsx__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = __WEBPACK_IMPORTED_MODULE_3_xlsx__["utils"].book_new();
        __WEBPACK_IMPORTED_MODULE_3_xlsx__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        __WEBPACK_IMPORTED_MODULE_3_xlsx__["writeFile"](wb, 'WordList.xlsx');
    };
    return DictionaryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DictionaryComponent.prototype, "searchArea", void 0);
DictionaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dictionary',
        template: __webpack_require__("./src/app/layout/dictionary/dictionary.component.html"),
        styles: [__webpack_require__("./src/app/layout/dictionary/dictionary.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["g" /* NgbPaginationConfig */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["WordsListService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["WordsListService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["DefinitionService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["DefinitionService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object])
], DictionaryComponent);

var _a, _b, _c;
//# sourceMappingURL=dictionary.component.js.map

/***/ }),

/***/ "./src/app/layout/dictionary/dictionary.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryModule", function() { return DictionaryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_definition_service__ = __webpack_require__("./src/app/shared/services/definition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_wordsList_service__ = __webpack_require__("./src/app/shared/services/wordsList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dictionary_routing_module__ = __webpack_require__("./src/app/layout/dictionary/dictionary-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dictionary_component__ = __webpack_require__("./src/app/layout/dictionary/dictionary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DictionaryModule = (function () {
    function DictionaryModule() {
    }
    return DictionaryModule;
}());
DictionaryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__dictionary_routing_module__["a" /* DictionaryRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__dictionary_component__["a" /* DictionaryComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_wordsList_service__["a" /* WordsListService */], __WEBPACK_IMPORTED_MODULE_0__shared_services_definition_service__["a" /* DefinitionService */]],
    })
], DictionaryModule);

//# sourceMappingURL=dictionary.module.js.map

/***/ })

});
//# sourceMappingURL=dictionary.module.chunk.js.map