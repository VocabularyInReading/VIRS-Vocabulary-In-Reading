webpackJsonp(["layout.module"],{

/***/ "./src/app/layout/layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */],
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
            { path: 'text', loadChildren: './text/text.module#TextModule' },
            { path: 'doc', loadChildren: './doc/doc.module#DocModule' },
            { path: 'pdf', loadChildren: './pdf/pdf.module#PdfModule' },
            { path: 'image', loadChildren: './image/image.module#ImageModule' },
            { path: 'enhanced-text-result', loadChildren: './enhanced-text-result/enhanced-text-result.module#EnhancedTextResultModule' },
            { path: 'text-statistics', loadChildren: './text-statistics/text-statistics.module#TextStatisticsModule' },
            { path: 'dictionary', loadChildren: './dictionary/dictionary.module#DictionaryModule' },
            { path: 'stem-academia', loadChildren: './stem-academia/stem-academia.module#StemAcademiaModule' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
            { path: 'credits', loadChildren: './credits/credits.module#CreditsModule' },
            { path: 'tests', loadChildren: './tests/tests.module#TestsModule' },
            { path: 'tests/:id', loadChildren: './tests/beginner/beginner.module#BeginnerModule' },
            { path: 'itranslate', loadChildren: './itranslate/itranslate.module#ItranslateModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
            { path: 'account', loadChildren: './account/account.module#UserAccountModule' },
            { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordModule' },
            { path: 'essential-words', loadChildren: './essential-words/essential-words.module#EssentialWordsModule' },
            { path: 'restore', loadChildren: './recovery/recovery.module#RecoveryModule' },
        ]
    }
];
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], LayoutRoutingModule);

//# sourceMappingURL=layout-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-sidebar></app-sidebar>\r\n<section class=\"main-container margin-responsive\">\r\n    <router-outlet></router-outlet>\r\n</section>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 60px;\n  margin-left: 235px;\n  margin-bottom: 120px !important;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n  background-color: #ffffff; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important;\n    margin-bottom: 150px !important; } }\n\n/*\r\n@media screen and (max-width: 400px) {\r\n    .margin-responsive {\r\n        margin-bottom: 130px;\r\n    }\r\n}\r\n@media screen and (max-width: 2000px) {\r\n    .margin-responsive {\r\n        margin-bottom: 30px;\r\n    }\r\n}\r\n*/\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = (function () {
    function LayoutComponent(router) {
        this.router = router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("./src/app/layout/layout.component.html"),
        styles: [__webpack_require__("./src/app/layout/layout.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], LayoutComponent);

var _a;
//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_routing_module__ = __webpack_require__("./src/app/layout/layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__layout_routing_module__["a" /* LayoutRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shared__["HeaderComponent"],
            __WEBPACK_IMPORTED_MODULE_7__shared__["SidebarComponent"],
            __WEBPACK_IMPORTED_MODULE_7__shared__["FooterComponent"],
        ]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ })

});
//# sourceMappingURL=layout.module.chunk.js.map