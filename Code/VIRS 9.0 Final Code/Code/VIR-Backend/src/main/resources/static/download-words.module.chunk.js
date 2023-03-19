webpackJsonp(["download-words.module"],{

/***/ "./src/app/layout/download-words/download-words-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadWordsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__download_words_component__ = __webpack_require__("./src/app/layout/download-words/download-words.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_2__download_words_component__["a" /* DownloadWordsComponent */] }];
var DownloadWordsRoutingModule = (function () {
    function DownloadWordsRoutingModule() {
    }
    return DownloadWordsRoutingModule;
}());
DownloadWordsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], DownloadWordsRoutingModule);

//# sourceMappingURL=download-words-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/download-words/download-words.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Download Individual Lists</h1><br>\r\n  <div id=\"individualListContainer\">\r\n    <span (click)=\"startDownload(['K1']);\">\r\n      <a id=\"K1\" href=\"javascript:void(0)\">&#x2022; Download K1</a>\r\n    </span><br>\r\n  <span (click)=\"startDownload(['K2']);\">\r\n    <a style=\"text-indent: 50px\" href=\"javascript:void(0)\">&#x2022; Download K2</a>\r\n  </span><br>\r\n  <span (click)=\"startDownload(['K3']);\">\r\n    <a href=\"javascript:void(0)\">&#x2022; Download K3</a>\r\n  </span><br>\r\n\r\n  <span (click)=\"startDownload(['stem']);\">\r\n    <a href=\"javascript:void(0)\">&#x2022; Download Stem Words</a>\r\n  </span><br>\r\n  <span (click)=\"startDownload(['awl']);\">\r\n    <a href=\"javascript:void(0)\">&#x2022; Download Academic Words</a>\r\n  </span><br>\r\n  <span (click)=\"startDownload(['baw']);\">\r\n    <a href=\"javascript:void(0)\">&#x2022; Download Basic Academic Words</a>\r\n  </span><br>\r\n\r\n  <span (click)=\"startDownload(['hi']);\">\r\n    <a href=\"javascript:void(0)\">&#x2022; Download Other High Frequency Words</a>\r\n  </span><br>\r\n  <span (click)=\"startDownload(['med']);\">\r\n    <a href=\"javascript:void(0)\">&#x2022; Download Medium Frequency Words</a>\r\n  </span><br>\r\n  <span (click)=\"startDownload(['low']);\">\r\n    <a href=\"javascript:void(0)\">&#x2022; Download Low Frequency Words</a>\r\n  </span><br>\r\n  </div>\r\n\r\n  <h1>Download Groups of Lists</h1><br>\r\n  <div id=\"groupListContainer\">\r\n    <span (click)=\"startDownload(['K1, K2, K3']);\">\r\n      <a href=\"javascript:void(0)\">&#x2022; Download K1-K3</a>\r\n    </span><br>\r\n    <span (click)=\"startDownload(['stem, awl, baw']);\">\r\n      <a href=\"javascript:void(0)\">&#x2022; Download Stem, Academic, and Basic Academic Words </a>\r\n    </span><br>\r\n    <span (click)=\"startDownload(['K1, K2, K3, stem, awl, baw, hi, med, low']);\">\r\n      <a href=\"javascript:void(0)\">&#x2022; Download All Words</a>\r\n    </span><br>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/download-words/download-words.component.scss":
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-weight: bold; }\n\na {\n  font-size: xx-large; }\n\n#individualListContainer {\n  padding-left: 50px;\n  padding-bottom: 25px; }\n\n#groupListContainer {\n  padding-left: 50px; }\n"

/***/ }),

/***/ "./src/app/layout/download-words/download-words.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadWordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadWordsComponent = (function () {
    function DownloadWordsComponent(_downloadListService) {
        this._downloadListService = _downloadListService;
    }
    DownloadWordsComponent.prototype.ngOnInit = function () { };
    // startDownload(category: string) {
    //     this.processing = true;
    //     this.error = false;
    //     var categories: string[] = ["K1", "K2"];
    //     // this._downloadListService.downloadWordList(categories).subscribe(
    //     //     (res) => {
    //     //         // console.log("Hey");
    //     //         // this.processing = false;
    //     //         // this.file = res;
    //     //         // console.log(res);
    //     //     },
    //     //     (err: HttpErrorResponse) => {
    //     //         if (err.error instanceof Error) {
    //     //             console.log("Client-side Error occured");
    //     //         } else {
    //     //             this.error = true;
    //     //             this.processing = false;
    //     //             console.log("Server-side Error occured");
    //     //         }
    //     //     }
    //     // );
    //     this._downloadListService.downloadWordList(categories);
    // }
    DownloadWordsComponent.prototype.startDownload = function (categories) {
        this.processing = true;
        this.error = false;
        this._downloadListService.downloadWordList(categories);
    };
    return DownloadWordsComponent;
}());
DownloadWordsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-download-words",
        template: __webpack_require__("./src/app/layout/download-words/download-words.component.html"),
        styles: [__webpack_require__("./src/app/layout/download-words/download-words.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared__["DownloadListService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared__["DownloadListService"]) === "function" && _a || Object])
], DownloadWordsComponent);

var _a;
//# sourceMappingURL=download-words.component.js.map

/***/ }),

/***/ "./src/app/layout/download-words/download-words.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadWordsModule", function() { return DownloadWordsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__download_words_routing_module__ = __webpack_require__("./src/app/layout/download-words/download-words-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__download_words_component__ = __webpack_require__("./src/app/layout/download-words/download-words.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DownloadWordsModule = (function () {
    function DownloadWordsModule() {
    }
    return DownloadWordsModule;
}());
DownloadWordsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__download_words_routing_module__["a" /* DownloadWordsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__download_words_component__["a" /* DownloadWordsComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6_app_shared__["DownloadListService"]],
    })
], DownloadWordsModule);

//# sourceMappingURL=download-words.module.js.map

/***/ })

});
//# sourceMappingURL=download-words.module.chunk.js.map