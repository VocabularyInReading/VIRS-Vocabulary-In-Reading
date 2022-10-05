webpackJsonp(["image.module"],{

/***/ "./src/app/layout/image/image-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_component__ = __webpack_require__("./src/app/layout/image/image.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__image_component__["a" /* ImageComponent */] }
];
var ImageRoutingModule = (function () {
    function ImageRoutingModule() {
    }
    return ImageRoutingModule;
}());
ImageRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], ImageRoutingModule);

//# sourceMappingURL=image-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/image/image.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] class=\"container-fluid\">\n\n\t<!--Alert-->\n\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf='error'>\n\t\t<strong>Oh snap!</strong> The file is not readable.\n\t</div>\n\n\t<div class=\"alert alert-warning\" role=\"alert\" *ngIf='fileSizeExceeded'>\n\t\t\t<strong>Oh snap!</strong> The file is too big, please choose a smaller file. Maximum 25 mb.\n\t</div>\n\n\n\t<div class=\"card card-danger card-inverse mb-3 col-lg-12 center-block\">\n\t\t<div class=\"card-header card-info\">\n\t\t\t<i class=\"fa fa-fw fa-picture-o fa-2x float-right\" title=\"Upload your Image\"></i>Upload your Image.&nbsp;&nbsp;\n\t\t\t<i class=\"fa fa-spinner fa-spin\" style=\"font-size:32px;color:white\" *ngIf='processing && userImageFile'></i>\n\t\t\t<span class=\"badge badge-default\">MAX 25 MB</span>\n\t\t</div>\n\n\t\t<div class=\"card-block bg-white\">\n\t\t\t<form>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"file\" id=\"myfile\" #fileInput name=\"myfile\" class=\"btn-block btn btn-danger\" accept=\"image/*\" />\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Button (Double) -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\" btn-block btn btn-secondary\" (click)=\"uploadImage('/enhanced-text-result')\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-file-text\" aria-hidden=\"true\"></i> Enhanced Text</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-block btn btn-primary\" (click)=\"uploadImage('/text-statistics')\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i> Statistics</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\" style=\"margin-top: 50px;\">\n\t\t<div class=\"center\">\n\t\t\t<h5>Instructions</h5>\n\t\t</div>\n\t</div>\n\t<hr>\n\n\t<!--Instructions Boxes-->\n\t<div class=\"row topMargin\">\n\n\t\t<div class=\"col-md box1\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<i class=\"fa fa-upload fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h5>Choose your Image file</h5>\n\t\t\t\t<hr>\n\t\t\t\t<p>Maximum 25 MB.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md box2\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<i class=\"fa fa-file-text fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h5>Press \"Enhanced Text\"</h5>\n\t\t\t\t<hr>\n\t\t\t\t<p>to read your text in frequency-based color coded system.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md box3\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<i class=\"fa fa-pie-chart fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h5>Press \"Statistics\"</h5>\n\t\t\t\t<hr>\n\t\t\t\t<p>to see if the text is suitable for you and view a detailed analysis of the text.</p>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/layout/image/image.component.scss":
/***/ (function(module, exports) {

module.exports = ".center {\n  margin: auto;\n  width: 50%; }\n\nh5 {\n  text-align: center;\n  font-weight: bold; }\n\n.topMargin {\n  margin-top: 25px; }\n\n.box1 {\n  background-color: #FF7919;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border-radius: 8px; }\n\n.box2 {\n  background-color: #74D941;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border-radius: 8px; }\n\n.box3 {\n  background-color: #3D99F5;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border: 2px solid;\n  border-radius: 8px; }\n\nh2 {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/layout/image/image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services__ = __webpack_require__("./src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImageComponent = (function () {
    function ImageComponent(_textService, router, elem, http, _itranslate) {
        this._textService = _textService;
        this.router = router;
        this.elem = elem;
        this.http = http;
        this._itranslate = _itranslate;
    }
    ImageComponent.prototype.processTextResults = function (translatedResults, url) {
        var _this = this;
        this._textService.enhancedText(translatedResults)
            .subscribe(function (res) {
            if (!res || !res.words || res.words.length == 0) {
                _this.error = true;
                _this.processing = false;
                return;
            } //if
            _this.text = res;
            _this._textService.resultText = _this.text;
            _this.processing = false;
            _this.router.navigateByUrl(url);
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
    ImageComponent.prototype.translateResults = function (results, url) {
        var _this = this;
        this._itranslate.getTranslation(results, "en")
            .subscribe(function (rec) {
            var translated = _this._itranslate.retrieveTextFromResults(rec);
            if (!translated || translated === "") {
                _this.error = true;
                _this.processing = false;
                results = null;
                return;
            } //if
            _this.processTextResults(translated, url);
        }, function (err) {
            _this.error = true;
            _this.processing = false;
        });
    };
    ImageComponent.prototype.uploadImage = function (url) {
        var _this = this;
        this.formData = new FormData();
        this.processing = true;
        var fileBrowser = this.fileInput.nativeElement;
        if (fileBrowser.files && fileBrowser.files[0]) {
            this.userImageFile = fileBrowser.files[0];
            // check filesize
            if (this.userImageFile.size > 26214400) {
                this.fileSizeExceeded = true;
                this.processing = false;
                return;
            }
            this.formData.append('file', fileBrowser.files[0]);
        }
        else {
            return;
        }
        var DocFile = this.userImageFile;
        this._textService.enhancedImage(this.formData)
            .subscribe(function (res) {
            var results = _this._itranslate.transformTextToString(res);
            if (results === "") {
                _this.error = true;
                _this.processing = false;
                results = null;
                return;
            } //if
            _this.translateResults(results, url);
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
    ImageComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    return ImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", Object)
], ImageComponent.prototype, "fileInput", void 0);
ImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-image',
        template: __webpack_require__("./src/app/layout/image/image.component.html"),
        styles: [__webpack_require__("./src/app/layout/image/image.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["TextService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["TextService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services__["e" /* iTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services__["e" /* iTranslateService */]) === "function" && _e || Object])
], ImageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=image.component.js.map

/***/ }),

/***/ "./src/app/layout/image/image.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModule", function() { return ImageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_routing_module__ = __webpack_require__("./src/app/layout/image/image-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_component__ = __webpack_require__("./src/app/layout/image/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services__ = __webpack_require__("./src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ImageModule = (function () {
    function ImageModule() {
    }
    return ImageModule;
}());
ImageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__image_routing_module__["a" /* ImageRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__image_component__["a" /* ImageComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared__["TextService"], __WEBPACK_IMPORTED_MODULE_6__shared_services__["e" /* iTranslateService */]],
    })
], ImageModule);

//# sourceMappingURL=image.module.js.map

/***/ })

});
//# sourceMappingURL=image.module.chunk.js.map