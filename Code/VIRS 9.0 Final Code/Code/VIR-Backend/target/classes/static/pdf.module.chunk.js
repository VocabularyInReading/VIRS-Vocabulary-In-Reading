webpackJsonp(["pdf.module"],{

/***/ "./src/app/layout/pdf/pdf-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_component__ = __webpack_require__("./src/app/layout/pdf/pdf.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pdf_component__["a" /* PdfComponent */] }
];
var PdfRoutingModule = (function () {
    function PdfRoutingModule() {
    }
    return PdfRoutingModule;
}());
PdfRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], PdfRoutingModule);

//# sourceMappingURL=pdf-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/pdf/pdf.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] class=\"container-fluid\">\r\n\r\n\r\n\t<!--Alert-->\r\n\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf='error'>\r\n\t\t<strong>Oh snap!</strong> The file is not readable.\r\n\t</div>\r\n\t<div class=\"alert alert-warning\" role=\"alert\" *ngIf='fileSizeExceeded'>\r\n\t\t\t<strong>Oh snap!</strong> The file is too big, please choose a smaller file. Maximum 25 mb.\r\n\t</div>\r\n\r\n\t<div class=\"card card-success card-inverse mb-3 col-lg-12 center-block\">\r\n\t\t<div class=\"card-header card-info\">\r\n\t\t\t<i class=\"fa fa-fw fa-file-pdf-o fa-2x float-right\" title=\"Upload your PDF\"></i>Upload your PDF.&nbsp;&nbsp;\r\n\t\t\t<i class=\"fa fa-spinner fa-spin\" style=\"font-size:32px;color:white\" *ngIf='processing && userPDFFile'></i>\r\n\t\t\t<span class=\"badge badge-default\">MAX 25 MB</span>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card-block bg-white\">\r\n\t\t\t<form>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<input type=\"file\" id=\"myfile\" #fileInput name=\"myfile\" class=\"btn-block btn btn-success\" accept=\"application/pdf\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!-- Button (Double) -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-12 \">\r\n\t\t\t\t\t\t<div class=\"float-right\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\" btn-block btn btn-secondary\" (click)=\"uploadPDF('/enhanced-text-result')\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-file-text\" aria-hidden=\"true\"></i> Enhanced Text</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-block btn btn-primary\" (click)=\"uploadPDF('/text-statistics')\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i> Statistics</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\" style=\"margin-top: 50px;\">\r\n\t\t<div class=\"center\">\r\n\t\t\t<h5>Instructions</h5>\r\n\t\t</div>\r\n\t</div>\r\n\t<hr>\r\n\r\n\t<!--Instructions Boxes-->\r\n\t<div class=\"row topMargin\">\r\n\r\n\t\t<div class=\"col-md box1\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<i class=\"fa fa-upload fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<h5>Choose your PDF file</h5>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<p>Maximum 25 MB.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md box2\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<i class=\"fa fa-file-text fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<h5>Press \"Enhanced Text\"</h5>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<p>to read your text in frequency-based color coded system.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md box3\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<i class=\"fa fa-pie-chart fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<h5>Press \"Statistics\"</h5>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<p>to see if the text is suitable for you and view a detailed analysis of the text.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/pdf/pdf.component.scss":
/***/ (function(module, exports) {

module.exports = ".center {\n  margin: auto;\n  width: 50%; }\n\nh5 {\n  text-align: center;\n  font-weight: bold; }\n\n.topMargin {\n  margin-top: 25px; }\n\n.card1 {\n  background-color: #FF7919; }\n\n.box1 {\n  background-color: #FF7919;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border-radius: 8px; }\n\n.box2 {\n  background-color: #74D941;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border-radius: 8px; }\n\n.box3 {\n  background-color: #3D99F5;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border-radius: 8px; }\n\nh2 {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/layout/pdf/pdf.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PdfComponent = (function () {
    function PdfComponent(_textService, router, elem, http) {
        this._textService = _textService;
        this.router = router;
        this.elem = elem;
        this.http = http;
    }
    // Cast the input file to FormData - Upload PDF(FormData) to server
    // receive the analyzed PDF - navigate to the enhanced text page to show the result
    PdfComponent.prototype.uploadPDF = function (url) {
        var _this = this;
        this.formData = new FormData();
        this.processing = true;
        this.error = false;
        var fileBrowser = this.fileInput.nativeElement; //could it be this constant or something else causing the uploads to stop working after a while
        //the issue is possibly caused by memory running out after a while.
        if (fileBrowser.files && fileBrowser.files[0]) {
            this.userPDFFile = fileBrowser.files[0];
            // check the file size - more than 25mb will throw an alert to user
            if (this.userPDFFile.size > 26214400) {
                this.fileSizeExceeded = true;
                this.processing = false;
                return;
            }
            this.formData.append('file', fileBrowser.files[0]);
        }
        else {
            return;
        }
        var DocFile = this.userPDFFile;
        this._textService.enhancedPDF(this.formData)
            .subscribe(function (res) {
            _this.text = res;
            _this._textService.resultText = _this.text;
            _this.processing = false;
            _this.router.navigateByUrl(url);
        }, 
        // Error Handling
        function (err) {
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
    PdfComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    return PdfComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", Object)
], PdfComponent.prototype, "fileInput", void 0);
PdfComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pdf',
        template: __webpack_require__("./src/app/layout/pdf/pdf.component.html"),
        styles: [__webpack_require__("./src/app/layout/pdf/pdf.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["TextService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["TextService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object])
], PdfComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=pdf.component.js.map

/***/ }),

/***/ "./src/app/layout/pdf/pdf.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfModule", function() { return PdfModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_routing_module__ = __webpack_require__("./src/app/layout/pdf/pdf-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_component__ = __webpack_require__("./src/app/layout/pdf/pdf.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PdfModule = (function () {
    function PdfModule() {
    }
    return PdfModule;
}());
PdfModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__pdf_routing_module__["a" /* PdfRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__pdf_component__["a" /* PdfComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared__["TextService"]],
    })
], PdfModule);

//# sourceMappingURL=pdf.module.js.map

/***/ })

});
//# sourceMappingURL=pdf.module.chunk.js.map