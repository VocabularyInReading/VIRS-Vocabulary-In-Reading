webpackJsonp(["text.module"],{

/***/ "./src/app/layout/text/text-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_component__ = __webpack_require__("./src/app/layout/text/text.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__text_component__["a" /* TextComponent */] }
];
var TextRoutingModule = (function () {
    function TextRoutingModule() {
    }
    return TextRoutingModule;
}());
TextRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], TextRoutingModule);

//# sourceMappingURL=text-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/text/text.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\n\t<!--Alert-->\n\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf='error'>\n\t\t<strong>Oh snap!</strong> We don't support alien characters, yet. Please enter your text again.\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"card card-info card-inverse mb-3 col-lg-12 center-block\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<i class=\"fa fa-fw fa-keyboard-o fa-2x float-right\" title=\"Enter your text\"></i>Enter your text&nbsp;&nbsp;\n\t\t\t\t<i class=\"fa fa-spinner fa-spin\" style=\"font-size:32px;color:white\" *ngIf='processing'></i>\n\t\t\t\t<span class=\"badge badge-default\">MAX 30,000 Characters</span>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-block bg-white\">\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<textarea class=\"form-control\" name=\"textArea\" id=\"exampleTextarea\" rows=\"10\" maxlength=\"30000\" [(ngModel)]=\"textArea\"\n\t\t\t\t\t\t placeholder=\"Enter your text here (required). You must input at least 100 words of text to run readability test.\" required></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<!-- Button (Double) -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-block btn btn-secondary \" (click)=\"analyzeText('/enhanced-text-result')\" [disabled]=\"!textArea\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-file-text\" aria-hidden=\"true\"></i> Enhanced Text</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-block btn btn-primary\" (click)=\"analyzeText('/text-statistics')\" [disabled]=\"!textArea\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i> Statistics</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\" style=\"margin-top: 10px;\">\n\t\t<div class=\"center\">\n\t\t\t<h5>Instructions</h5>\n\t\t</div>\n\t</div>\n\t<hr>\n\n\t<!--Instructions Boxes-->\n\t<div class=\"row topMargin bottomMargin\">\n\n\t\t<div class=\"col-md box1\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<i class=\"fa fa-keyboard-o fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h5>Type you text</h5>\n\t\t\t\t<hr>\n\t\t\t\t<p>Maximum 30,000 characters.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md box2\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<i class=\"fa fa-file-text fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h5>Press \"Enhanced Text\"</h5>\n\t\t\t\t<hr>\n\t\t\t\t<p>to read your text in frequency-based color coded system.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md box3\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<i class=\"fa fa-pie-chart fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h5>Press \"Statistics\"</h5>\n\t\t\t\t<hr>\n\t\t\t\t<p>to see if the text is suitable for you and view a detailed analysis of the text.</p>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/text/text.component.scss":
/***/ (function(module, exports) {

module.exports = ".center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.vertical-center {\n  min-height: 100%;\n  /* Fallback for browsers do NOT support vh unit */\n  min-height: 100vh;\n  /* These two lines are counted as one :-)       */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.fontStyle {\n  font-size: .9em;\n  font-weight: bold; }\n\n.center {\n  margin: auto;\n  width: 50%; }\n\nh5 {\n  text-align: center;\n  font-weight: bold; }\n\n.topMargin {\n  margin-top: 10px; }\n\n.bottomMargin {\n  margin-bottom: 50px; }\n\n@media screen and (max-width: 992px) {\n  .margin-responsive {\n    margin-bottom: 70px; } }\n\n.oneLine {\n  display: inline;\n  list-style-type: none;\n  padding-right: 2px; }\n\n.buttonPadding {\n  padding-right: 30px; }\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 10px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 10px solid #a94442;\n  /* red */ }\n\n.box1 {\n  background-color: #FF7919;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border-radius: 8px; }\n\n.box2 {\n  background-color: #74D941;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border-radius: 8px; }\n\n.box3 {\n  background-color: #3D99F5;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: center;\n  padding-top: 35px;\n  border: 2px solid;\n  border-radius: 8px; }\n"

/***/ }),

/***/ "./src/app/layout/text/text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextComponent = (function () {
    function TextComponent(_textService, router) {
        this._textService = _textService;
        this.router = router;
    }
    // Function for enhanced text
    TextComponent.prototype.analyzeText = function (url) {
        var _this = this;
        this.processing = true;
        this.error = false;
        this._textService.enhancedText(this.textArea)
            .subscribe(function (res) {
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
    TextComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    return TextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TextComponent.prototype, "textArea", void 0);
TextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-text',
        template: __webpack_require__("./src/app/layout/text/text.component.html"),
        styles: [__webpack_require__("./src/app/layout/text/text.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["TextService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["TextService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object])
], TextComponent);

var _a, _b;
//# sourceMappingURL=text.component.js.map

/***/ }),

/***/ "./src/app/layout/text/text.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextModule", function() { return TextModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_routing_module__ = __webpack_require__("./src/app/layout/text/text-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_component__ = __webpack_require__("./src/app/layout/text/text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TextModule = (function () {
    function TextModule() {
    }
    return TextModule;
}());
TextModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__text_routing_module__["a" /* TextRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__text_component__["a" /* TextComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared__["TextService"]],
    })
], TextModule);

//# sourceMappingURL=text.module.js.map

/***/ })

});
//# sourceMappingURL=text.module.chunk.js.map