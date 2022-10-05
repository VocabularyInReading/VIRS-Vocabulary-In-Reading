webpackJsonp(["itranslate.module"],{

/***/ "./src/app/layout/itranslate/itranslate-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItranslateRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itranslate_component__ = __webpack_require__("./src/app/layout/itranslate/itranslate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__itranslate_component__["a" /* ItranslateComponent */] }
];
var ItranslateRoutingModule = (function () {
    function ItranslateRoutingModule() {
    }
    return ItranslateRoutingModule;
}());
ItranslateRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], ItranslateRoutingModule);

//# sourceMappingURL=itranslate-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/itranslate/itranslate.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container-fluid ml-1\">\n\n    <div class=\"card-header card-primary card-inverse\" id=\"itranslate\">\n        <i class=\"fa fa-fw fa-font fa-2x float-right\"></i>iTranslate&nbsp;&nbsp;\n    </div>\n    <div class=\"form-group\">\n        <textarea class=\"form-control\" name=\"textArea\" id=\"exampleTextarea\" rows=\"10\" maxlength=\"30000\" [(ngModel)]=\"textArea\"\n        placeholder=\"Enter your text to translate here\" required></textarea>\n    </div>\n\n    <br>\n\n    <div>\n        <select class=\"custom-select\" id=\"inlineFormCustomSelect\" [(ngModel)]=\"target\" required>\n            <option [ngValue]=\"undefined\" disabled  selected> Select target language </option>\n            <option *ngFor=\"let options of optionsSelect\" [value]=\"options.value\">{{options.label}}</option>\n        </select>\n    </div>\n    <br/>\n    <div class=\"btn-group\">\n        <button type=\"button\" class=\"btn dark-mode float-left\" (click)=\"translate()\">Translate</button>\n    </div>\n\n    <br>\n    <br>\n\n    <div >\n        <p class=\"float-left\"> Characters left to translate: {{charsLeft}} </p>\n    </div>\n\n    <br>\n    <br>\n\n    <div style=\"text-align:justify\">\n        <div class=\"card\">\n            <div class=\"card-header card-primary card-inverse bg-success\">\n                <i class=\"fa fa-fw fa-2x float-left\"></i>Translation&nbsp;&nbsp;\n            </div>\n            <div class=\"container-fluid\" style=\"text-align:justify\">\n                {{t2}}\n            </div>\n        </div>\n    </div>\n\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/layout/itranslate/itranslate.component.scss":
/***/ (function(module, exports) {

module.exports = ".dropbtn {\n  background-color: #2833A5;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none; }\n\n.dark-mode {\n  background-color: #3d3d3d;\n  color: #ebebeb; }\n\n.light-mode {\n  background-color: #ebebeb;\n  color: #3d3d3d; }\n\n#itranslate {\n  background-color: #98c1d9; }\n\n.dropup {\n  position: relative;\n  display: inline-block; }\n\n.dropup-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  bottom: 50px;\n  z-index: 1; }\n\n.dropup-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropup-content a:hover {\n  background-color: #ccc; }\n\n.dropup:hover .dropup-content {\n  display: block; }\n\n.dropup:hover .dropbtn {\n  background-color: #2833A5; }\n\n.scrollable-menu {\n  height: auto;\n  max-height: 200px;\n  overflow-x: hidden; }\n"

/***/ }),

/***/ "./src/app/layout/itranslate/itranslate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItranslateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("./src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItranslateComponent = (function () {
    function ItranslateComponent(_itranslate) {
        this._itranslate = _itranslate;
    }
    ItranslateComponent.prototype.ngOnInit = function () {
        this.charsLeft = 1000;
        this.checkCookie();
        this.targetDisplay = '';
        this.optionsSelect = [
            { value: 'af', label: 'Afrikaans' },
            { value: 'sq', label: 'Albanian' },
            { value: 'am', label: 'Amharic' },
            { value: 'ar', label: 'Arabic' },
            { value: 'hy', label: 'Armenian' },
            { value: 'az', label: 'Azeerbaijani' },
            { value: 'eu', label: 'Basque' },
            { value: 'bs', label: 'Bosnian' },
            { value: 'bg', label: 'Bulgarian' },
            { value: 'ca', label: 'Catalan' },
            { value: 'zh-CN', label: 'Chinese' },
            { value: 'hr', label: 'Croatian' },
            { value: 'cs', label: 'Czech' },
            { value: 'da', label: 'Danish' },
            { value: 'nl', label: 'Dutch' },
            { value: 'en', label: 'English' },
            { value: 'et', label: 'Estonian' },
            { value: 'fi', label: 'Finnish' },
            { value: 'fr', label: 'French' },
            { value: 'gl', label: 'Galician' },
            { value: 'ka', label: 'Georgian' },
            { value: 'de', label: 'German' },
            { value: 'el', label: 'Greek' },
            { value: 'ht', label: 'Haitian Creole' },
            { value: 'haw', label: 'Hawaiian' },
            { value: 'iw', label: 'Hebrew' },
            { value: 'hi', label: 'Hindi' },
            { value: 'hmn', label: 'Hmong' },
            { value: 'hu', label: 'Hungarian' },
            { value: 'is', label: 'Icelandic' },
            { value: 'id', label: 'Indonesian' },
            { value: 'ga', label: 'Irish' },
            { value: 'it', label: 'Italian' },
            { value: 'ja', label: 'Japanese' },
            { value: 'kk', label: 'Kazakh' },
            { value: 'ko', label: 'Korean' },
            { value: 'ku', label: 'Kurdish' },
            { value: 'ky', label: 'Kyrgyz' },
            { value: 'lo', label: 'Lao' },
            { value: 'la', label: 'Latin' },
            { value: 'lv', label: 'Latvian' },
            { value: 'lt', label: 'Lithuanian' },
            { value: 'lb', label: 'Luxembourgish' },
            { value: 'mk', label: 'Macedonian' },
            { value: 'ms', label: 'Malay' },
            { value: 'mn', label: 'Mongolian' },
            { value: 'my', label: 'Myanmar' },
            { value: 'ne', label: 'Nepali' },
            { value: 'no', label: 'Norwegian' },
            { value: 'ps', label: 'Pashto' },
            { value: 'fa', label: 'Persian' },
            { value: 'po', label: 'Polish' },
            { value: 'pt', label: 'Portuguese' },
            { value: 'pa', label: 'Punjabi' },
            { value: 'ro', label: 'Romanian' },
            { value: 'ru', label: 'Russian' },
            { value: 'sm', label: 'Samoan' },
            { value: 'gd', label: 'Scots Gaelic' },
            { value: 'sr', label: 'Serbian' },
            { value: 'si', label: 'Sinhala' },
            { value: 'sk', label: 'Slovak' },
            { value: 'sl', label: 'Slovenian' },
            { value: 'so', label: 'Somali' },
            { value: 'es', label: 'Spanish' },
            { value: 'se', label: 'Sundanese' },
            { value: 'sw', label: 'Swahili' },
            { value: 'sv', label: 'Swedish' },
            { value: 'tl', label: 'Tagalog' },
            { value: 'tg', label: 'Tajik' },
            { value: 'ta', label: 'Tamil' },
            { value: 'te', label: 'Telugu' },
            { value: 'th', label: 'Thai' },
            { value: 'tr', label: 'Turkish' },
            { value: 'uk', label: 'Ukrainian' },
            { value: 'uz', label: 'Uzbek' },
            { value: 'vi', label: 'Vietnamese' },
            { value: 'cy', label: 'Welsh' },
            { value: 'xh', label: 'Xhosa' },
            { value: 'yi', label: 'Yiddish' },
            { value: 'yo', label: 'Yoruba' },
            { value: 'zu', label: 'Zulu' },
        ];
    };
    ItranslateComponent.prototype.onClick = function () {
        console.log(this.textArea);
    };
    ItranslateComponent.prototype.changeLang = function (target, targetDisplay) {
        this.target = target;
        console.log(this.target);
        this.targetDisplay = targetDisplay;
    };
    ItranslateComponent.prototype.translate = function () {
        var _this = this;
        if (this.charsLeft < 1) {
            this.charsLeft = this.charsLeft - this.textArea.length;
            this.setCookie("charsLeft", this.charsLeft);
            return;
        } //if
        this._itranslate.getTranslation(this.textArea, this.target)
            .subscribe(function (rec) {
            console.log(rec);
            _this.t2 = rec["translated"];
            _this.t2 = _this._itranslate.retrieveTextFromResults(rec);
            console.log(_this.t2);
            _this.charsLeft = _this.charsLeft - _this.textArea.length;
            _this.setCookie("charsLeft", _this.charsLeft);
        }, function (err) {
            _this.t2 = "There was an unknown error";
        });
    };
    ItranslateComponent.prototype.setCookie = function (cname, cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + (1000 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";";
    };
    ItranslateComponent.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    ItranslateComponent.prototype.checkCookie = function () {
        var chars = this.getCookie("charsLeft");
        if (chars != "") {
            this.charsLeft = parseInt(chars);
        } //if
        else {
            this.setCookie("charsLeft", "1000");
        } //else
    };
    return ItranslateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ItranslateComponent.prototype, "textArea", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ItranslateComponent.prototype, "target", void 0);
ItranslateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-itranslate',
        template: __webpack_require__("./src/app/layout/itranslate/itranslate.component.html"),
        styles: [__webpack_require__("./src/app/layout/itranslate/itranslate.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* iTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* iTranslateService */]) === "function" && _a || Object])
], ItranslateComponent);

var _a;
//# sourceMappingURL=itranslate.component.js.map

/***/ }),

/***/ "./src/app/layout/itranslate/itranslate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItranslateModule", function() { return ItranslateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__itranslate_routing_module__ = __webpack_require__("./src/app/layout/itranslate/itranslate-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__itranslate_component__ = __webpack_require__("./src/app/layout/itranslate/itranslate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services__ = __webpack_require__("./src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ItranslateModule = (function () {
    function ItranslateModule() {
    }
    return ItranslateModule;
}());
ItranslateModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__itranslate_routing_module__["a" /* ItranslateRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbDropdownModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__itranslate_component__["a" /* ItranslateComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services__["e" /* iTranslateService */]],
    })
], ItranslateModule);

//# sourceMappingURL=itranslate.module.js.map

/***/ })

});
//# sourceMappingURL=itranslate.module.chunk.js.map