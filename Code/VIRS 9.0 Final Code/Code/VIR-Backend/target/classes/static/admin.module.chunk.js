webpackJsonp(["admin.module"],{

/***/ "./src/app/layout/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("./src/app/layout/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */] }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <!--Card Header-->\r\n  <div class=\"card\">\r\n    <div class=\"card-header  bg-primary card-inverse\">\r\n      <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n      Admin Panel\r\n      <i class=\"fa fa-spinner fa-spin\" style=\"font-size:32px;color:#ff0072\" *ngIf='processing'></i>\r\n    </div>\r\n\r\n    <!--Card contents-->\r\n    <div class=\"card-block\">\r\n      <h4 class=\"card-title\"></h4>\r\n      <p class=\"card-text\">\r\n\r\n        <!--Alert-->\r\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf='error'>\r\n          <strong>{{alertWord}} </strong> doesn't exist in data base.\r\n        </div>\r\n        <div class=\"alert alert-warning\" role=\"alert\" *ngIf='errorAdd'>\r\n          Please Choose the category!\r\n        </div>\r\n\r\n\r\n        <!--Search-->\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-search-input\" class=\"col-1 col-form-label\">\r\n            <strong>Search</strong>\r\n          </label>\r\n          <div class=\"col-2\">\r\n            <input class=\"form-control\" type=\"search\" name=\"searchArea\" [(ngModel)]=\"searchArea\" id=\"example-search-input\" placeholder=\"Word..\">\r\n          </div>\r\n          <button class=\"btn btn-primary\" (click)=\"searchWord()\" [disabled]=\"!searchArea\" required>Search</button>\r\n        </div>\r\n\r\n        <!--Table - shows the search result-->\r\n        <div class='table-responsive table-hover table-striped'>\r\n          <table class='table table-hover'>\r\n            <thead>\r\n              <tr>\r\n                <th>Word</th>\r\n                <th>Categories</th>\r\n                <th>ID</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf='showTable && !error'>\r\n                <td>{{word.value}}</td>\r\n                <td>{{word.category}}</td>\r\n                <td>{{word.id}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <!--Add Edit Delete-->\r\n        <div class=\" row\">\r\n\r\n          <div class=\"col-2 form-group\">\r\n            <input type=\"text\" class=\"form-control mb-2 mr-sm-2 mb-sm-0\" id=\"inlineFormInput\" placeholder=\"Word*\" name=\"wordArea\" [(ngModel)]=\"wordArea\">\r\n            <div [hidden]=\"wordArea\" class=\"alert alert-default\" style=\"color: #ff0072\">\r\n              Word is required\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0 col-2\" id=\"inlineFormCustomSelect\" [(ngModel)]=\"category\">\r\n            <option *ngFor=\"let i of categoryItems\" [value]=\"i\">{{i}}</option>\r\n          </select>\r\n\r\n          <div class=\"col-3 form-group\">\r\n            <input type=\"text\" class=\"form-control mb-2 mr-sm-2 mb-sm-0\" id=\"inlineFormInput\" placeholder=\"ID\" value=\"1212\" name=\"idArea\"\r\n              [(ngModel)]=\"idArea\">\r\n            <div [hidden]=\"idArea\" class=\"alert alert-default\" style=\"color: #ff0072\">\r\n              ID is required only to\r\n              <strong> EDIT</strong>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-3 float-right\">\r\n            <button class=\"btn btn-success\" (click)=\"addWord(wordArea, category)\" [disabled]=\"!wordArea\" required>\r\n              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add</button>\r\n            <button class=\"btn btn-warning\" (click)=\"editWord()\" [disabled]=\"!wordArea || !idArea\" required>\r\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</button>\r\n            <button class=\"btn btn-danger\" (click)=\"deleteWord()\" [disabled]=\"!wordArea\" required>\r\n              <i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\r\n          </div>\r\n        </div>\r\n\r\n        <!--Bulk word upload-->\r\n        <body ng-controller=\"MainCtrl\">\r\n        \r\n          <h1>Add words through CSV File</h1>\r\n          <div class=\"row top-buffer\"></div>\r\n\r\n          <div class=\"row\">\r\n            <input type=\"file\" accept=\".csv\" (change) = \"fileUploadListener($event)\" />\r\n          </div>\r\n\r\n          <div class=\"row top-buffer\"></div>\r\n\r\n          <div class=\"row\">\r\n            <select name = \"bulkUploadSelect\" class=\"custom-select mb-2 mr-sm-2 mb-sm-0 col-2\" id=\"inlineFormCustomSelect\" [(ngModel)]=\"bulkCategory\">\r\n              <option *ngFor=\"let i of categoryItems\" [value]=\"i\">{{i}}</option>\r\n            </select>\r\n            <br>\r\n          \r\n            <div class=\"col-3 float-right\">\r\n              <button class=\"btn btn-primary\" (click)=\"csvaddCaller()\" >\r\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Upload</button>\r\n\r\n              <button class=\"btn btn-primary\" (click)=\"csvCategoryUpdate(bulkCategory)\" >\r\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> DELETE and Upload</button>\r\n            </div>\r\n            \r\n          </div>\r\n        </body>\r\n\r\n\r\n\r\n        <hr>\r\n        <!--Session history-->\r\n        <div>\r\n          <h3>\r\n            Session history:\r\n          </h3>\r\n          <ul>\r\n            <div *ngFor=\"let history of sessionHistory\">\r\n              <li>\r\n                <strong>{{history}}</strong>\r\n              </li>\r\n              <br>\r\n            </div>\r\n          </ul>\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!--Instructions Boxes-->\r\n  <div class=\"row topMargin\">\r\n\r\n    <div class=\"col-md box1\">\r\n      <div class=\"col-md-12\">\r\n        <i class=\"fa fa-plus fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <h5>Add</h5>\r\n\r\n        <hr>\r\n\r\n        <p>-Type the word </p>\r\n        <p>-Select the category</p>\r\n        <p>-Leave the ID box empty</p>\r\n        <p>-Click on \"Add\" button.</p>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md box2\">\r\n      <div class=\"col-md-12\">\r\n        <i class=\"fa fa-pencil fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <h5>Edit</h5>\r\n        <hr>\r\n        <p>-Search the word</p>\r\n        <p>-Type the word in \"Word\" field</p>\r\n        <p>-Select the category</p>\r\n        <p>-Type the ID in \"ID\" field</p>\r\n        <p>-Click on \"Edit\" button.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md box3\">\r\n      <div class=\"col-md-12\">\r\n        <i class=\"fa fa-trash fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <h5>Delete</h5>\r\n        <hr>\r\n        <p>-Type the word </p>\r\n        <p>-Click on \"Delete\" button.</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\n  border-left: 10px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 10px solid #a94442;\n  /* red */ }\n\n.box1 {\n  background-color: #74D941;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border-radius: 8px; }\n\n.box2 {\n  background-color: #FF7919;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border-radius: 8px; }\n\n.box3 {\n  background-color: #ff0072;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border: 2px solid;\n  border-radius: 8px; }\n\n.top-buffer {\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/layout/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(_admin, router) {
        this._admin = _admin;
        this.router = router;
        this.currentJustify = 'start';
        this.processing = false;
        this.error = false;
        this.errorAdd = false;
        this.showTable = false;
        this.categoryItems = ['Category...', 'awl', 'stem', 'hi', 'med', 'low', 'K1', 'K2', 'K3', 'baw'];
        this.category = this.categoryItems[0];
        this.bulkCategory = this.categoryItems[0];
        this.sessionHistory = [];
        this.index = 1;
    }
    // search the word in database
    AdminComponent.prototype.searchWord = function () {
        var _this = this;
        this.processing = true;
        this.error = false;
        this.errorAdd = false;
        this.alertWord = this.searchArea;
        this._admin.getWord(this.searchArea)
            .subscribe(function (res) {
            _this.word = res;
            _this.processing = false;
            _this.showTable = true;
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
    // Add new word to data base
    AdminComponent.prototype.addWord = function (wordArea, category) {
        var _this = this;
        console.log('in addword');
        this.processing = true;
        this.error = false;
        this.errorAdd = false;
        this._admin.postWord(wordArea, category)
            .subscribe(function (res) {
            _this.processing = false;
            _this.sessionHistory[_this.index] = wordArea + ' is added to ' + category + ' category.';
            _this.index++;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side Error occured');
            }
            else {
                _this.errorAdd = true;
                _this.processing = false;
                console.log('Server-side Error occured');
            }
        });
    };
    // Add new word to data base
    AdminComponent.prototype.editWord = function () {
        var _this = this;
        this.processing = true;
        this.error = false;
        this.errorAdd = false;
        this._admin.putWord(this.wordArea, this.category, this.idArea)
            .subscribe(function (res) {
            _this.processing = false;
            _this.sessionHistory[_this.index] = 'Word ID: ' + _this.idArea + ' was edited to ' + _this.wordArea;
            _this.index++;
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
    // Delete the word in database
    AdminComponent.prototype.deleteWord = function () {
        var _this = this;
        this.processing = true;
        this.error = false;
        this.errorAdd = false;
        this._admin.deleteWord(this.wordArea)
            .subscribe(function (res) {
            _this.processing = false;
            _this.sessionHistory[_this.index] = _this.wordArea + ' was succesfully erased from database.';
            _this.index++;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side Error occured');
            }
            else {
                // this.error = true;
                _this.processing = false;
                console.log('Server-side Error occured');
            }
        });
    };
    AdminComponent.prototype.fileUploadListener = function ($event) {
        console.log('starting to add csv');
        //bind $event.target to csv here? then use that binding to call whichever function is needed
        this.csvFile = $event.target;
        //this.csvadd($event.target, this.addWord.bind(this), this._admin, this.processing, this.sessionHistory, this.index, this.errorAdd, this.categoryItems);
        console.log('out of it');
    };
    AdminComponent.prototype.csvaddCaller = function () {
        console.log('in csvaddCaller');
        this.csvadd(this.csvFile, this.addWord.bind(this), this._admin, this.processing, this.sessionHistory, this.index, this.errorAdd, this.categoryItems);
    };
    AdminComponent.prototype.csvCategoryUpdate = function (bulkCategory) {
        var _this = this;
        this.processing = true;
        this.deleteCategory = bulkCategory;
        this._admin.deleteAllInCategory(this.deleteCategory)
            .subscribe(function (res) {
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
        this.csvCategoryUpdateHelper();
    };
    AdminComponent.prototype.csvCategoryUpdateHelper = function () {
        var date = Date.now();
        var currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < 5000);
        this.csvaddCaller();
    };
    AdminComponent.prototype.csvadd = function (csv, callback, _admin, processing, sessionHistory, index, errorAdd, categoryItems) {
        var _this = this;
        console.log('in csvadd');
        var file = csv.files[0];
        var self = this;
        var reader = new FileReader();
        var wordArea;
        var category;
        var array;
        var fields;
        this.processing = true;
        this.error = false;
        this.errorAdd = false;
        console.log('here 2');
        reader.readAsText(file);
        reader.onloadend = function (e) {
            var csvData = reader.result;
            console.log(csvData);
            fields = csvData.split('\n');
            category = _this.bulkCategory;
            fields.forEach(function (element) {
                console.log('in loop');
                var array = element.split(',');
                console.log('HEY YOU');
                console.log(element);
                wordArea = array[0];
                //console.log(wordArea);
                //console.log(categoryItems[1]);
                wordArea = element.replace(/[^a-zA-Z 0-9]/g, "");
                console.log('stripped:');
                console.log(wordArea);
                if (wordArea != '' && wordArea != ' ') {
                    console.log(wordArea);
                    //category = 'K1';
                    console.log(category);
                    //console.log(array[1]);
                    console.log(element);
                    _admin.postWord(element, category)
                        .subscribe(function (res) {
                        processing = false;
                        sessionHistory[index] = element + ' is added to ' + category + ' category.';
                        index++;
                    }, function (err) {
                        if (err.error instanceof Error) {
                            console.log('Client-side Error occured');
                        }
                        else {
                            errorAdd = true;
                            processing = false;
                            console.log('Server-side Error occured');
                        }
                    });
                }
            }, reader.onerror = function () {
                console.log('Unable to read ' + file);
            });
        };
    };
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AdminComponent.prototype, "searchArea", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AdminComponent.prototype, "wordArea", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], AdminComponent.prototype, "idArea", void 0);
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("./src/app/layout/admin/admin.component.html"),
        styles: [__webpack_require__("./src/app/layout/admin/admin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["AdminService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["AdminService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "./src/app/layout/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__ = __webpack_require__("./src/app/layout/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_component__ = __webpack_require__("./src/app/layout/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__["a" /* AdminRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared__["AdminService"]],
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map