webpackJsonp(["credits.module"],{

/***/ "./src/app/layout/credits/credits-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credits_component__ = __webpack_require__("./src/app/layout/credits/credits.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__credits_component__["a" /* CreditsComponent */] }
];
var CreditsRoutingModule = (function () {
    function CreditsRoutingModule() {
    }
    return CreditsRoutingModule;
}());
CreditsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], CreditsRoutingModule);

//# sourceMappingURL=credits-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/credits/credits.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"text-align:justify\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header card-primary card-inverse bg-info\">\r\n      <i class=\"fa fa-fw fa-quote-right fa-2x float-right\"></i>References&nbsp;&nbsp;\r\n    </div>\r\n    <div class=\"card-block bg-white\">\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Baddeley, A. (1990). Human Memory. London: Lawrence Erlbaum Associates.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Begeny, J. C. and Greene, D. J. (2014), CAN READABILITY FORMULAS BE USED TO SUCCESSFULLY GAUGE DIFFICULTY OF READING MATERIALS?.\r\n          Psychol. Schs., 51: 198–215.\r\n          <a href=\"http://onlinelibrary.wiley.com/doi/10.1002/pits.21740/full\" target=\"_blank\">doi:10.1002/pits.21740</a>\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Cobb, T. (2017). LEXTUTOR (1998-2017),\r\n          <a href=\"http://www.lextutor.ca/\" target=\"_blank\" >\r\n            http://www.lextutor.ca/.</a>\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Coxhead, A. (2000). A new academic word list. TESOL Quarterly, 34: 213–38.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Dwyer, E., Ehsanzadeh, S.J., Grigorescu, C. (submitted for publication). Academic Vocabulary\r\n          in Primary and Secondary Content Area Textbooks. Journal of English for Academic Purposes. Manuscript is submitted for publication.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          https://en.wikibooks.org/wiki/Wikibooks:Reading_Levels\r\n        </cite>\r\n      </p>\r\n\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Dwyer, E., & Ehsanzadeh, S.J. (September 2016). The Teachers’ U.S. Corpus (TUSC). Paper presented at International Vocab@Tokyo Vocabulary Conference, Meiji Gakuin University, Tokyo, Japan.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Dwyer, E., Ehsanzadeh, S.J. (May 2016). Academic Language in K-12 Context. Paper presented at Sunshine State TESOL Conference, West Palm Beach, Florida.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Dwyer, E., & Ehsanzadeh, S.J. (presented 2016, October). Academic Vocabulary: Then and Now, 12th Annual MDTESOL/ Bilingual Education Association Fall Symposium 2016. Symposium conducted at MDC InterAmerican, Miami-Dade College, Miami, Florida.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Ehsanzadeh, S.J. (2012). Depth versus Breadth of Lexical Repertoire: Assessing their Role in\r\n          EFL Students’ Incidental Vocabulary Acquisition. TESL Canada Journal/ Revue TESL du Canada. 29 (2), 24-41.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Ehsanzadeh, S.J., & Dwyer, E. (March 2018). The Science and Math Academic\r\n          Corpus for Kids (SMACK). Paper presented at Annual TESOL International Convention and English Language Expo, TESOL International Association. Chicago, Illinois.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Ehsanzadeh, S.J., & Dwyer, E. (March 2017). Teachers’ U.S. Corpus: A New Perspective. Paper presented at Annual TESOL International Convention and English Language Expo, TESOL International Association, Seattle, Washington.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Ehsanzadeh, S.J., & Dwyer, E. (October 2016). A new Academic Word List for K-12 Context.   Paper presented at Annual Southeast TESOL Regional Conference (SETESOL), Louisville, Kentucky.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Ehsanzadeh, S.J., Dwyer, E., & Carter, D. (October 2015). Situated Language of Mathematics.  Paper presented at Annual Southeast TESOL Regional Conference (SETESOL) and K-12 Dream Day, University of New Orleans, New Orleans, Louisiana.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Flesch, Rudolf. “How to Write Plain English.” Guide to Academic Writing Article - Management - University of Canterbury -\r\n          New Zealand, <a href=\"http://www.mang.canterbury.ac.nz/writing_guide/writing/flesch.shtml\" target=\"_blank\" id='permalink_section' >www.mang.canterbury.ac.nz/writing_guide/writing/flesch.shtml.</a>\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Gardner, D., & Davies, M. (2013). A New Academic Vocabulary List. Applied Linguistics, 35/3:\r\n          305–327.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Laufer, B. (2003). Vocabulary acquisition in a second Language: Do learners really acquire most\r\n          vocabulary by reading? Some empirical evidence. Canadian Modern Language Review (59)4: 567-587.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Nation, P. (2013). Learning Vocabulary in Another Language. Cambridge: Cambridge\r\n          University Press.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Schunk, D. H. (2012). Learning Theories: An Educational Perspective. Pearson Education, Inc.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Tognini-Bonelli, E. & Elena, D. (2001). Corpus linguistics at work: Studies in corpus linguistics.\r\n          Amsterdam: John Benjamins.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          West, M. (1953). A general service list of English words. London: Longman, Green.\r\n        </cite>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container-fluid\" style=\"text-align:justify\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header card-primary card-inverse bg-success\">\r\n      <i class=\"fa fa-fw fa-cogs fa-2x float-right\"></i>Technology&nbsp;&nbsp;\r\n    </div>\r\n    <div class=\"card-block bg-white\">\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          “Tesseract-Ocr/Tesseract.” GitHub, 10 Nov. 2017,\r\n          <a href=\"https://github.com/tesseract-ocr/tesseract\" target=\"_blank\" id='permalink_section'>github.com/tesseract-ocr/tesseract</a>.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          “OpenCV library.” OpenCV library,\r\n          <a href=\"https://opencv.org/\" target=\"_blank\">opencv.org/</a>.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          R. Guo, Q. Dai and D. Hoiem, \"Single-image shadow detection and removal using paired regions,\" CVPR 2011, Providence, RI,\r\n          2011, pp. 2033-2040. doi: 10.1109/CVPR.2011.5995725 URL:\r\n          <a href=\"http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5995725&isnumber=5995307\" target=\"_blank\" id='permalink_section'>'http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5995725&isnumber=5995307'</a>\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          Zucker, Matt. “Page dewarping.” Needlessly complex, 14 Aug. 2016,\r\n          <a href=\"https://mzucker.github.io/2016/08/15/page-dewarping.html\" target=\"_blank\" id='permalink_section'>mzucker.github.io/2016/08/15/page-dewarping.html</a>.\r\n        </cite>\r\n      </p>\r\n      <p class=\"hangingindent\">\r\n        <cite>\r\n          <span>&#8226;</span>\r\n          “Wiktionary” Wiktionary, the free dictionary,\r\n          <a href=\"https://en.wiktionary.org/wiki/Wiktionary:Main_Page\" target=\"_blank\" id='permalink_section'>en.wiktionary.org/wiki/Wiktionary:Main_Page</a>.\r\n        </cite>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/credits/credits.component.scss":
/***/ (function(module, exports) {

module.exports = "div.card {\n  margin: auto;\n  margin-bottom: 3%;\n  margin-top: 3%; }\n\n#permalink_section {\n  white-space: pre-wrap;\n  /* css-3 */\n  white-space: -moz-pre-wrap;\n  /* Mozilla, since 1999 */\n  white-space: -pre-wrap;\n  /* Opera 4-6 */\n  white-space: -o-pre-wrap;\n  /* Opera 7 */\n  word-wrap: break-word;\n  /* Internet Explorer 5.5+ */ }\n\n.hangingindent {\n  padding-left: 22px;\n  text-indent: -22px; }\n"

/***/ }),

/***/ "./src/app/layout/credits/credits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreditsComponent = (function () {
    function CreditsComponent() {
    }
    CreditsComponent.prototype.ngOnInit = function () {
    };
    return CreditsComponent;
}());
CreditsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-credits',
        template: __webpack_require__("./src/app/layout/credits/credits.component.html"),
        styles: [__webpack_require__("./src/app/layout/credits/credits.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CreditsComponent);

//# sourceMappingURL=credits.component.js.map

/***/ }),

/***/ "./src/app/layout/credits/credits.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsModule", function() { return CreditsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__credits_routing_module__ = __webpack_require__("./src/app/layout/credits/credits-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__credits_component__ = __webpack_require__("./src/app/layout/credits/credits.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CreditsModule = (function () {
    function CreditsModule() {
    }
    return CreditsModule;
}());
CreditsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__credits_routing_module__["a" /* CreditsRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__credits_component__["a" /* CreditsComponent */]]
    })
], CreditsModule);

//# sourceMappingURL=credits.module.js.map

/***/ })

});
//# sourceMappingURL=credits.module.chunk.js.map