webpackJsonp(["contact-us.module"],{

/***/ "./src/app/layout/contact-us/contact-us-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us_component__ = __webpack_require__("./src/app/layout/contact-us/contact-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__contact_us_component__["a" /* ContactUsComponent */] }
];
var ContactUsRoutingModule = (function () {
    function ContactUsRoutingModule() {
    }
    return ContactUsRoutingModule;
}());
ContactUsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], ContactUsRoutingModule);

//# sourceMappingURL=contact-us-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header card-primary card-inverse\">\n        <i class=\"fa fa-fw fa-paper-plane fa-2x float-right\"></i>Contact us&nbsp;&nbsp;\n    </div>\n    <div class=\"card-block bg-white\">\n        <form id=\"contact-form\" method=\"post\" action=\"https://formcarry.com/s/Hykzrnh1G\" role=\"form\">\n            <div class=\"messages\"></div>\n            <div class=\"controls\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"form_name\">Firstname *</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-address-book\"></i>\n                                </span>\n                                <input id=\"form_name\" type=\"text\" name=\"firstname\" class=\"form-control\" placeholder=\"Please enter your firstname *\" required=\"required\"\n                                    data-error=\"Firstname is required.\">\n                            </div>\n                            <div class=\"help-block with-errors\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"form_lastname\">Lastname *</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-address-book\"></i>\n                                </span>\n                                <input id=\"form_lastname\" type=\"text\" name=\"lastname\" class=\"form-control\" placeholder=\"Please enter your lastname *\" required=\"required\"\n                                    data-error=\"Lastname is required.\">\n                            </div>\n                            <div class=\"help-block with-errors\"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"form_email\">Email *</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-envelope\"></i>\n                                </span>\n                                <input id=\"form_email\" type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Please enter your email *\" required=\"required\"\n                                    data-error=\"Valid email is required.\">\n                            </div>\n                            <div class=\"help-block with-errors\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"form_phone\">Phone</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-phone-square\"></i>\n                                </span>\n                                <input id=\"form_phone\" type=\"tel\" name=\"phone\" class=\"form-control\" placeholder=\"Please enter your phone\">\n                                <div class=\"help-block with-errors\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <label for=\"form_message\">Message *</label>\n                            <textarea id=\"form_message\" name=\"message\" class=\"form-control\" placeholder=\"Message for me *\" rows=\"4\" required=\"required\"\n                                data-error=\"Please,leave us a message.\"></textarea>\n                            <div class=\"help-block with-errors\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <input type=\"submit\" class=\"btn btn-primary btn-send\" value=\"Send message\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p class=\"text-muted\">\n                            <strong>*</strong> These fields are required.</p>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/contact-us/contact-us.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
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

var ContactUsComponent = (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__("./src/app/layout/contact-us/contact-us.component.html"),
        styles: [__webpack_require__("./src/app/layout/contact-us/contact-us.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactUsComponent);

//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "./src/app/layout/contact-us/contact-us.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_us_routing_module__ = __webpack_require__("./src/app/layout/contact-us/contact-us-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_us_component__ = __webpack_require__("./src/app/layout/contact-us/contact-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactUsModule = (function () {
    function ContactUsModule() {
    }
    return ContactUsModule;
}());
ContactUsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__contact_us_routing_module__["a" /* ContactUsRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__contact_us_component__["a" /* ContactUsComponent */]]
    })
], ContactUsModule);

//# sourceMappingURL=contact-us.module.js.map

/***/ })

});
//# sourceMappingURL=contact-us.module.chunk.js.map