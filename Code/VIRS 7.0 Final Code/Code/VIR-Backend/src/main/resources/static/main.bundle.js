webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/account.module": [
		"./src/app/layout/account/account.module.ts",
		"account.module"
	],
	"./admin/admin.module": [
		"./src/app/layout/admin/admin.module.ts",
		"admin.module"
	],
	"./change-password/change-password.module": [
		"./src/app/layout/change-password/change-password.module.ts",
		"change-password.module"
	],
	"./contact-us/contact-us.module": [
		"./src/app/layout/contact-us/contact-us.module.ts",
		"contact-us.module"
	],
	"./credits/credits.module": [
		"./src/app/layout/credits/credits.module.ts",
		"credits.module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/layout/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./dictionary/dictionary.module": [
		"./src/app/layout/dictionary/dictionary.module.ts",
		"common",
		"dictionary.module"
	],
	"./doc/doc.module": [
		"./src/app/layout/doc/doc.module.ts",
		"doc.module"
	],
	"./enhanced-text-result/enhanced-text-result.module": [
		"./src/app/layout/enhanced-text-result/enhanced-text-result.module.ts",
		"common",
		"enhanced-text-result.module"
	],
	"./essential-words/essential-words.module": [
		"./src/app/layout/essential-words/essential-words.module.ts",
		"common",
		"essential-words.module"
	],
	"./image/image.module": [
		"./src/app/layout/image/image.module.ts",
		"image.module"
	],
	"./itranslate/itranslate.module": [
		"./src/app/layout/itranslate/itranslate.module.ts",
		"itranslate.module"
	],
	"./layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"layout.module"
	],
	"./not-found/not-found.module": [
		"./src/app/not-found/not-found.module.ts",
		"not-found.module"
	],
	"./pdf/pdf.module": [
		"./src/app/layout/pdf/pdf.module.ts",
		"pdf.module"
	],
	"./recovery/recovery.module": [
		"./src/app/layout/recovery/recovery.module.ts",
		"recovery.module"
	],
	"./register/register.module": [
		"./src/app/layout/register/register.module.ts",
		"register.module"
	],
	"./stem-academia/stem-academia.module": [
		"./src/app/layout/stem-academia/stem-academia.module.ts",
		"common",
		"stem-academia.module"
	],
	"./tests/beginner/beginner.module": [
		"./src/app/layout/tests/beginner/beginner.module.ts",
		"beginner.module",
		"common"
	],
	"./tests/tests.module": [
		"./src/app/layout/tests/tests.module.ts",
		"tests.module"
	],
	"./text-statistics/text-statistics.module": [
		"./src/app/layout/text-statistics/text-statistics.module.ts",
		"text-statistics.module"
	],
	"./text/text.module": [
		"./src/app/layout/text/text.module.ts",
		"text.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
    },
    // { path: 'login1', loadChildren: './login/login.module#LoginModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.addLangs(['en', 'fr', 'ur', 'es', 'fa']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur|es|fa/) ? browserLang : 'en');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared__["TextService"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_shared_services_register_service__ = __webpack_require__("./src/app/shared/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_shared_services_jsEncryption_service__ = __webpack_require__("./src/app/shared/services/jsEncryption.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { ChangePasswordService } from 'app/shared/services/change-password.service';
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    // for development
    // return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, '/assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]]
                }
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__shared__["AuthGuard"], __WEBPACK_IMPORTED_MODULE_12_app_shared_services_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_13_app_shared_services_jsEncryption_service__["a" /* JsEncryption */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/layout/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div [@routerTransition]>\n  \n    <ngb-alert type=\"warning\" *ngIf=\"!passclosed\" (close)=\"passClose()\">Your password did not match, please try again.</ngb-alert>\n    <ngb-alert type=\"success\" *ngIf=\"logged\" (close)=\"passClose()\">You have succesfully changed your password! Thank you!</ngb-alert>\n    <ngb-alert *ngIf=\"passwordLenghtError\" type=\"warning\" (close)=\"passClose()\">Password must be at least 6 characters long, try again.</ngb-alert>\n    <!-- <ngb-alert type=\"warning\" *ngIf=\"!serverError\" (close)=\"passClose()\">There was a problem updating your password. Please try again. If the problem persists, please contact an administrator</ngb-alert> -->\n    <ngb-alert type=\"warning\" *ngIf=\"userNotFound\" (close)=\"passClose()\">The current password is incorrect. You can logout and request a reset password if you cannot remember your password</ngb-alert>\n     \n    <div class=\"row\">\n        <div class=\"col-md-4 push-md-4\">\n            <img src=\"assets/images/logo.png\" width=\"150px\" class=\"user-avatar\" />\n            <br />  \n            <h1>Vocabulary in Reading Study</h1>\n            <br />\n            <br />\n            <form>\n                <div class=\"form-content\">\n                  <div class=\"form-group\">\n                      <input type=\"password\" [(ngModel)]=\"currentpassW\" class=\"form-control input-underline input-lg\" id=\"pass\"\n                             name=\"pass\" placeholder=\"Current Password\" required />\n                  </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" [(ngModel)]=\"newpassW\" class=\"form-control input-underline input-lg\" id=\"newpassW\"\n                               name=\"newpassW\" placeholder=\"Choose Password\" required />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" [(ngModel)]=\"copynewpassW\" class=\"form-control input-underline input-lg\" id=\"copynewpassW\"\n                               name=\"copynewpassW\" placeholder=\"Confirm Password\" required />\n                    </div>               \n                </div>\n            </form>   \n            <br />\n            <br />\n            <button class=\"btn btn-primary btn-block\" type=\"submit\" (click)=\"changeUserPassword()\"> Register Password </button>\n            &nbsp;\n  \n        </div>\n    </div>\n\n</div>    \n  "

/***/ }),

/***/ "./src/app/layout/change-password/change-password.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_register_service__ = __webpack_require__("./src/app/shared/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_jsEncryption_service__ = __webpack_require__("./src/app/shared/services/jsEncryption.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Monica M. Rodriguez





//import { ChangePasswordService } from '../../shared/services/change-password.service';
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(_passModalService, _passRegister, _passEncryptor) {
        this._passModalService = _passModalService;
        this._passRegister = _passRegister;
        this._passEncryptor = _passEncryptor;
        this.logged = false;
        this.serverError = true;
        this.userNotFound = false;
        this.passclosed = true;
        this.passregistered = false;
        this.passshow = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("userName") != null) {
            this.localStorUsername = localStorage.getItem('userName'); // storing the username in a global variable.
            //passclosed: false;
        }
    };
    // close
    ChangePasswordComponent.prototype.passClose = function () {
        this.passclosed = true;
        this.passregistered = false;
        this.logged = false;
        this.passwordLenghtError = false;
        this.passshow = false;
        this.serverError = false;
        this.userNotFound = false;
    };
    // ** (ok) ** finding if the password has at least 6 characters 
    ChangePasswordComponent.prototype.newpasswLenght = function () {
        this.passshow = false;
        if (!this.newpassW || this.newpassW.length < 6) {
            this.passwordLenghtError = true;
        }
        else {
            this.passwordLenghtError = false;
        }
    };
    // ** (ok) ** to compare the new password and its copy/ confirming newpassword basically
    ChangePasswordComponent.prototype.newpasswCompare = function () {
        if (this.newpassW === this.copynewpassW) {
            this.passmatch = true;
            this.passclosed = true;
            this.curentpassmatch = true;
        }
        else {
            this.passmatch = false;
            this.passclosed = false;
        }
    };
    //  ** (ok) ** verifies if the user is in the data based current password retrieved from data base with the enter current password from html
    ChangePasswordComponent.prototype.changeUserPassword = function () {
        var _this = this;
        this.passwordLenghtError = false;
        this.newpasswLenght();
        this.newpasswCompare();
        this.serverError = false;
        var user = {};
        user["updatePassword"] = true;
        user["password"] = this._passEncryptor.encrypt(this.currentpassW);
        user["newPassword"] = this._passEncryptor.encrypt(this.newpassW);
        if (!this.passmatch || !this.curentpassmatch || this.passwordLenghtError) {
            this.logged = false;
            return;
        } //if
        // saving the encrypted password
        this.logged = false;
        var updatePassword = true;
        this._passRegister.patchUser(user, this.localStorUsername, updatePassword)
            .subscribe(function (res) {
            _this.logged = true;
            user = null;
            updatePassword = null;
        }, function (err) {
            switch (err.status) {
                case 401:
                    _this.passclosed = false;
                    _this.userNotFound = false;
                    _this.serverError = false;
                    break;
                case 404:
                    _this.userNotFound = true;
                    _this.passclosed = true;
                    _this.serverError = false;
                    break;
                case 500:
                    _this.serverError = true;
                    _this.userNotFound = false;
                    _this.passclosed = true;
                    break;
            } //switch
            user = null;
            updatePassword = null;
        });
    };
    // ** (ok) ** Opens or closes the modal
    ChangePasswordComponent.prototype.open = function (content) {
        var _this = this;
        this._passModalService.open(content).result.then(function (result) {
            _this.closeR = "Closed with: " + result;
        }, function (reason) {
            _this.closeR = "Dismissed " + _this.getPassDismissReason(reason);
        });
    };
    //  ** (ok) **  
    ChangePasswordComponent.prototype.getPassDismissReason = function (reason) {
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
    return ChangePasswordComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ChangePasswordComponent.prototype, "currentpassW", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ChangePasswordComponent.prototype, "newpassW", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ChangePasswordComponent.prototype, "copynewpassW", void 0);
ChangePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tests',
        template: __webpack_require__("./src/app/layout/change-password/change-password.component.html"),
        styles: [__webpack_require__("./src/app/layout/change-password/change-password.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_register_service__["a" /* RegisterService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_register_service__["a" /* RegisterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_services_jsEncryption_service__["a" /* JsEncryption */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_services_jsEncryption_service__["a" /* JsEncryption */]) === "function" && _c || Object])
], ChangePasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "./src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* unused harmony export slideToRight */
/* unused harmony export slideToLeft */
/* unused harmony export slideToBottom */
/* unused harmony export slideToTop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");

function routerTransition() {
    return slideToTop();
}
function slideToRight() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n     <div class=\"container-fluid lg-view\">\r\n        <div class=\"row text-muted copyright\">\r\n            <div class=\"col\">\r\n                <span class=\"text-muted copyright\">Copyright © 2017. All rights reserved.</span>\r\n            </div>\r\n            <div class=\"col\">\r\n                <span>\r\n                    <a class=\"text-muted\" [routerLink]=\"['/contact-us']\" [routerLinkActive]=\"['router-link-active']\">Contact Us</a>\r\n                </span>\r\n                <span>\r\n                    <a class=\"text-muted\" [routerLink]=\"['/credits']\" [routerLinkActive]=\"['router-link-active']\">|&nbsp;&nbsp; Reference</a>\r\n                </span>\r\n                <span>\r\n                    <a class=\"text-muted\" href=\"/swagger-ui.html\">|&nbsp;&nbsp; API &nbsp;&nbsp;|</a>\r\n                </span>\r\n                <span>\r\n                    <a class=\"text-muted\" href=\"/admin\">Admin</a>\r\n                </span>\r\n            </div>\r\n            <div class=\"col\">\r\n                Follow us on:\r\n                <span class=\"text-muted copyright\">&nbsp;&nbsp; </span>\r\n                <a class=\"text-muted\" href=\"https://www.instagram.com/my_virs/?hl=en\" target=\"_blank\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-instagram\" viewBox=\"0 0 16 16\">\r\n                        <path d=\"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z\"/>\r\n                      </svg>\r\n                   <!-- <img src=\"assets/images/instagramlogo.png\"> -->\r\n                </a>\r\n                <a class=\"text-muted\" href=\"https://www.facebook.com/VocabularyInReadingStudy\" target=\"_blank\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-facebook\" viewBox=\"0 0 16 16\">\r\n                        <path d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\"/>\r\n                      </svg>\r\n                    <!--<img src=\"assets/images/facebook.png\">-->\r\n                </a>\r\n            </div>\r\n            <div class=\"col\">\r\n                <a id=\"paypalbtn\" class=\"text-muted\" href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CGR2652V3TZHL\" target=\"_blank\">\r\n                    <!--<img src=\"assets/images/paypal.png\">-->\r\n                    Donate\r\n                </a>\r\n            </div>\r\n       </div>\r\n    </div>\r\n\r\n    <div class=\"container-fluid sm-view\">\r\n        <div class=\"row text-muted copyright\">\r\n            <div class=\"col\">\r\n                <span class=\"text-muted copyright\">Copyright © 2017</span>\r\n            </div>\r\n            <div class=\"col\">\r\n                Follow us on:\r\n                <span class=\"text-muted copyright\">&nbsp;&nbsp; </span>\r\n                <a class=\"text-muted\" href=\"https://www.instagram.com/my_virs/?hl=en\" target=\"_blank\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-instagram\" viewBox=\"0 0 16 16\">\r\n                        <path d=\"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z\"/>\r\n                      </svg>\r\n                   <!-- <img src=\"assets/images/instagramlogo.png\"> -->\r\n                </a>\r\n                <a class=\"text-muted\" href=\"https://www.facebook.com/VocabularyInReadingStudy\" target=\"_blank\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-facebook\" viewBox=\"0 0 16 16\">\r\n                        <path d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\"/>\r\n                      </svg>\r\n                    <!--<img src=\"assets/images/facebook.png\">-->\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row text-muted copyright\"><div class=\"col\">\r\n            <span>\r\n                <a class=\"text-muted\" [routerLink]=\"['/contact-us']\" [routerLinkActive]=\"['router-link-active']\">Contact Us</a>\r\n            </span>\r\n            <span>\r\n                <a class=\"text-muted\" [routerLink]=\"['/credits']\" [routerLinkActive]=\"['router-link-active']\">|&nbsp;&nbsp; Reference</a>\r\n            </span>\r\n        </div>\r\n\r\n            <div class=\"col\">\r\n                <a id=\"paypalbtn\" class=\"text-muted\" href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CGR2652V3TZHL\" target=\"_blank\">\r\n                    <!--<img src=\"assets/images/paypal.png\">-->\r\n                    Donate\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--class=\"col-md-3 \"  class=\"col-md-3 hidden-sm-down\"-->\r\n    <!--\r\n    <div class=\"container\">\r\n        <div class=\"row text-muted copyright\">\r\n            <div class=\"col-xl-3 col-md-7 col-sm-4\">\r\n\r\n            </div>\r\n\r\n            <div class=\"offset-xl-4 col-xl-4 col-md-5 col-sm-8\">\r\n                <div>\r\n\r\n                </div>\r\n\r\n                <span class=\"\">\r\n                    <a class=\"text-muted\" href=\"itms://itunes.apple.com/us/app/vocabulary-in-reading-study/id1307321112?ls=1&mt=8\" target=\"_blank\">\r\n                        <img src=\"assets/images/apple.png\" alt=\"IOS App\">\r\n                    </a>\r\n                </span>\r\n                <span class=\"\">\r\n                    <a class=\"text-muted\" href=\"https://play.google.com/store/apps/details?id=com.vir.vir_android&hl=en\" target=\"_blank\">\r\n                        <img src=\"assets/images/googleplay.png\" alt=\"Andriod App\">\r\n                    </a>\r\n                </span>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n     -->\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  margin-top: 20px;\n  padding: 10px;\n  background-color: #e0e0e0;\n  font-size: .9em; }\n\na:visited {\n  text-decoration: none; }\n\na:hover {\n  text-decoration: none !important;\n  color: #3d3d3d !important; }\n\n.copyright {\n  color: #3d3d3d !important; }\n\n.lg-view {\n  display: block; }\n\n.sm-view {\n  display: none; }\n\n/*\n@media screen and (max-width: 992px) {\n    .footer {\n        padding-left: 0px;\n    }\n}\n*/\n\n@media screen and (max-width: 575px) {\n  /*.footer {\n        margin-top: 100px;\n        padding-left: 0px;\n        text-align: center;\n    }\n    */\n  .lg-view {\n    display: none; }\n  .sm-view {\n    display: block; } }\n"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/shared/components/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/footer/footer.component.scss")]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n    @import url(\"https://use.typekit.net/wya3hqm.css\");\n  </style>\n\n<div class=\"pos-f-t fixed-top header\">\n\t<nav class=\"navbar navbar-inverse bg-inverse navbar-toggleable-md\">\n\t\t<button class=\"navbar-toggler navbar-toggler-right\" (click)=\"toggleSidebar()\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"container\">\n\t\t<a class=\"navbar-brand font-responsive\" id = \"title\" routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\"\n           href=\"javascript:void(0)\">\n           <span class = \"lg-view\">Vocabulary in Reading Study</span>\n           <span class = \"sm-view\">VIRS</span>\n        </a>\n        </div>\n\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t<ul class=\"navbar-nav ml-auto mt-2 mt-md-0\">\n\t\t\t\t<li class=\"nav-item dropdown\" ngbDropdown>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-link\" style=\"color: rgb(0, 0, 0);\" ngbDropdownToggle>\n\t\t\t\t\t\t<i class=\"fa fa-language\"></i> {{ 'language' | translate }} <b class=\"caret\"></b>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('en')\">English</a>\n\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">Farsi</a>\n\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('es')\">Spanish</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<!--Hidding the admin dropdown menu-->\n\t\t\t\t<li class=\"nav-item dropdown\" ngbDropdown *ngIf='false'>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n\t\t\t\t\t\t<i class=\"fa fa-user\"></i> Admin <b class=\"caret\"></b>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"fa fa-fw fa-gear\"></i> Settings</a>\n\t\t\t\t\t\t<a class=\"dropdown-item\" [routerLink]=\"['/dashboard']\" (click)=\"onLoggedout()\"><i class=\"fa fa-fw fa-power-off\"></i> Log Out</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "h6 {\n  color: #080808; }\n\n.topnav {\n  border-radius: 0;\n  background-color: #ffffff;\n  padding: 6px;\n  z-index: 2; }\n\n.topnav .text-center {\n    text-align: center;\n    padding-left: 0;\n    cursor: pointer; }\n\n.topnav .top-right-nav .buy-now a {\n    color: #000000; }\n\n.topnav .top-right-nav .dropdown-menu {\n    top: 40px;\n    right: -5px;\n    left: auto; }\n\n.topnav .top-right-nav .dropdown-menu .message-preview .media .media-body .media-heading {\n      font-size: 14px;\n      font-weight: bold;\n      margin-bottom: 0; }\n\n.topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p {\n      margin: 0; }\n\n.topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p.last {\n      font-size: 13px;\n      margin-bottom: 0; }\n\n.topnav .top-right-nav .dropdown-menu hr {\n      margin-top: 1px;\n      margin-bottom: 4px; }\n\n.messages {\n  width: 300px; }\n\n.messages .media {\n    border-bottom: 1px solid black;\n    padding: 5px 10px; }\n\n.messages .media:last-child {\n      border-bottom: none; }\n\n.messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n\n.messages .media-body .small {\n    margin: 0; }\n\n.messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n.header .navbar {\n  background: #ffffff !important; }\n\n.navbar-toggler {\n  background-color: #3d3d3d; }\n\n/*\n.navbar-toggler-icon{\n    background-color: #3d3d3d !important;\n}\n*/\n\n.lg-view {\n  display: inline-block; }\n\n.sm-view {\n  display: none; }\n\n#title {\n  color: #3d3d3d;\n  font-family: europa,sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  text-align: center;\n  font-size: xx-large; }\n\n@media only screen and (max-width: 992px) {\n  .lg-view {\n    display: none; }\n  .sm-view {\n    display: inline-block; }\n  .font-responsive {\n    font-size: 1em; } }\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.pushRightClass = 'push-right';
        this.login = false;
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] && window.innerWidth <= 992 && _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/shared/components/header/header.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./src/app/shared/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("./src/app/shared/components/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__ = __webpack_require__("./src/app/shared/components/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__ = __webpack_require__("./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n    <ul class=\"list-group\">\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-home\"></i>&nbsp;{{ 'home' | translate }}\n        </a>\n\n\n        <div class=\"nested-menu\">\n            <a class=\"list-group-item\" (click)=\"addExpandClass('upload')\">\n                <span>\n                    <i class=\"fa fa-plus\"></i>&nbsp; {{ 'analyze your text' | translate }}\n                </span>\n            </a>\n            <li class=\"nested\" [class.expand]=\"showMenu === 'upload'\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a [routerLink]=\"['/text']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                            <i class=\"fa fa-fw fa-keyboard-o\"></i>&nbsp;{{ 'text' | translate }}\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/doc']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                            <i class=\"fa fa-fw fa-file-text\"></i>&nbsp;{{ 'doc' | translate }}\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/pdf']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                            <i class=\"fa fa-fw fa-file-pdf-o\"></i>&nbsp;{{ 'pdf' | translate }}\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/image']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                            <i class=\"fa fa-fw fa-picture-o\"></i>&nbsp;{{ 'image' | translate }}\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </div>\n\n        <a routerLink=\"/essential-words\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-list\"></i>&nbsp;{{ 'Essential Words List' | translate }}\n        </a>\n\n        <a routerLink=\"/stem-academia\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-book\"></i>&nbsp;{{ 'Academic/STEM Lists' | translate }}\n        </a>\n\n        <a routerLink=\"/dictionary\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-book\"></i>&nbsp;{{ 'school dictionary' | translate }}\n        </a>\n<!--   TEMPORARILY HID VOCABULARY TESTS AT P.O's REQUEST\n        <a routerLink=\"/tests\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <li class=\"fa fa-fw fa-pencil-square-o\"></li>&nbsp;{{ 'Vocabulary Tests' | translate }}\n        </a>\n        -->\n        <a routerLink=\"/itranslate\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <li class=\"fa fa-fw fa-font\"></li>&nbsp;{{ 'iTranslate' | translate }}\n        </a>\n\n        <div class=\"nested-menu\">\n            <a class=\"list-group-item\" (click)=\"addExpandClass('account')\">\n                <span *ngIf=\"!show\">\n                    <i class=\"fa fa-user\"></i>&nbsp; {{ 'My Profile' | translate }}\n                </span>\n                <span *ngIf=\"show\">\n                    <i class=\"fa fa-user\"></i>&nbsp; Welcome - {{ firstName }}\n                </span>\n            </a>\n            <li class=\"nested\" [class.expand]=\"showMenu === 'account'\">\n                <ul class=\"submenu\">\n                    <li>\n                        <div *ngIf=\"!login\">\n                            <a id=\"aLogin\" class=\"list-group-item\" (click)=\"open(content)\">\n                                <i class=\"fa fa-fw fa-keyboard-o\"></i>&nbsp;{{ 'Login' | translate }}\n                            </a>\n                            <a [routerLink]=\"['/register']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                                <i class=\"fa fa-address-book\"></i>&nbsp;{{ 'Register' | translate }}\n                            </a>\n                            <a class=\"list-group-item\" (click)=\"open(recovery)\">\n                                <i class=\"fa fa-fw fa-refresh\"></i>&nbsp;{{ 'Recovery' | translate }}\n                            </a>\n                        </div>\n\n                        <div *ngIf=\"login\">\n                            <a [routerLink]=\"['/account']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                                <i class=\"fa fa-fw fa-address-card\"></i>&nbsp;{{ 'My Profile' | translate }}\n                            </a>\n                            <a [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" (click)=\"logout()\">\n                                <i class=\"fa fa-fw fa-keyboard-o\"></i>&nbsp;{{ 'Log Out' | translate }}\n                            </a>\n                        </div>\n\n\n                        <div *ngIf=\"login\">\n                            <!-- Monica to be continue ... -->\n                            <a [routerLink]=\"['/change-password']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                                <i class=\"fa fa-address-book\"></i>&nbsp;{{ 'Reset Password' | translate }}\n                            </a>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n        </div>\n    </ul>\n <!--This is the modal for Login-->\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4>\n                Login\n            </h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                <form role=\"form\" id=\"form\">\n                    <div class=\"form-content\">\n\n                        <div class=\"form-group\">\n                            <div>\n                                <strong>User Name:</strong>\n                            </div>\n                            <input type=\"text\" [(ngModel)]=\"loginUser\" class=\"form-control input-underline input-lg\" name=\"user\" placeholder=\"Enter User Name\"\n                            />\n                        </div>\n                        <div class=\"form-group\">\n                            <div>\n                                <strong>Password:</strong>\n                            </div>\n                            <input type=\"password\" [(ngModel)]=\"loginPassword\" class=\"form-control input-underline input-lg\" name=\"password\" placeholder=\"Enter Password\"\n                            />\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-primary btn-block\" (click)=\"getUser(loginError); c('Close click')\"\n                            type=\"submit\">\n                            login\n                        </button>\n                        &nbsp;\n                    </div>\n                </form>\n            </div>\n        </div>\n    </ng-template>\n\n<!--This is the modal for register warning #-->\n    <ng-template #loginError let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4>\n                Login Error\n                <i class=\"fa fa-fw fa-exclamation\"></i>\n            </h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <!--Alert-->\n            <div class=\"alert alert-warning\">\n                <!-- <strong>Password did not match! </strong> <button type = \"button\" aria-label=\"Please try again.\" (click)=\"open(content)\"></button>\n                <a class=\"list-group-item\" (click)=\"open(content)\">\n                    <i class=\"fa fa-fw fa-keyboard-o\"></i>&nbsp;{{ 'Login' | translate }}\n                </a> -->\n                <strong>Username or password incorrect! Please try again or register. </strong>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"open(content); c('Close click')\">Login</button>\n            <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/register']\" [routerLinkActive]=\"['router-link-active']\" (click)=\"c('Close click')\">Register</button>\n        </div>\n    </ng-template>\n\n <!--This is the modal for Login-->\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4>\n                Login!\n            </h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                <form role=\"form\" id=\"form\">\n                    <div class=\"form-content\">\n                        <div class=\"form-group\">\n                            <div>\n                                <strong>User Name:</strong>\n                            </div>\n                            <input type=\"text\" [(ngModel)]=\"loginUser\" class=\"form-control input-underline input-lg\" name=\"user\" placeholder=\"Enter User Name\"\n                            />\n                        </div>\n                        <div class=\"form-group\">\n                            <div>\n                                <strong>Password:</strong>\n                            </div>\n                            <input type=\"password\" [(ngModel)]=\"loginPassword\" class=\"form-control input-underline input-lg\" name=\"password\" placeholder=\"Enter Password\"\n                            />\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-primary btn-block\" (click)=\"getUser(loginError); c('Close click')\"\n                            type=\"submit\">\n                            login\n                        </button>\n                        &nbsp;\n                    </div>\n                </form>\n            </div>\n        </div>\n    </ng-template>\n\n\n<!-- this is a modal for recovery  password by email or by user name  -->\n <ng-template #recovery let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 style=\"width: 100%; display:flex\">\n            Reset Your Password!\n        </h4>\n\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <form role=\"form\" id=\"form\">\n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <div>\n                            <strong>UserName:</strong>\n                        </div>\n                        <input type=\"text\" [(ngModel)]=\"emailRecovery\" class=\"form-control input-underline input-lg\" name=\"emailRecovery\" placeholder=\"Enter the username\"/>\n                    </div>\n                    <div>\n                        <strong>or</strong>\n                    </div>\n                    <div class=\"form-group\">\n                        <div>\n                            <strong>Email:</strong>\n                        </div>\n                        <input type=\"text\" [(ngModel)]=\"emailRecoveryByEmail\" class=\"form-control input-underline input-lg\" name=\"emailRecoveryByEmail\" placeholder=\"Enter the email in your account\"/>\n                        <p style=\"font-size: small; display: flex; width: 100%;\"><i>Note: Username will show up in your recovery email!</i></p>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                        <button id=\"btnRecovery\" routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-primary btn-block\" type=\"submit\"\n                        (click)=\"submit()\" onClick=\"this.disabled=true\" >\n                        Send Email\n                    </button>\n                </div>\n                <div *ngIf=\"successEmailSend\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n                    {{emailRecoveryMessage}}\n                </div>\n            </form>\n        </div>\n    </div>\n</ng-template>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 75px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #3d3d3d;\n  bottom: 180px;\n  overflow-x: hidden;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #3d3d3d;\n    border: 0;\n    border-radius: 0;\n    color: #e0e0e0;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #303030;\n    color: #e0e0e0; }\n  .sidebar .list-group a.router-link-active {\n    background: #303030;\n    color: #e0e0e0; }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #e0e0e0;\n      text-decoration: none;\n      font-weight: 400;\n      background: #3d3d3d; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: .75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover, .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #e0e0e0;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #303030; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #3d3d3d;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #e0e0e0; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #e0e0e0; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #303030; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #e0e0e0;\n    padding: 10px;\n    display: block; }\n  .nested-menu .expand ul.submenu li a:hover {\n    color: #FFF; }\n  form {\n  width: 300px;\n  margin: 0 auto; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 74px;\n    left: 0px; } }\n"

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_register_service__ = __webpack_require__("./src/app/shared/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_jsEncryption_service__ = __webpack_require__("./src/app/shared/services/jsEncryption.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_change_password_change_password_component__ = __webpack_require__("./src/app/layout/change-password/change-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = (function () {
    function SidebarComponent(modal, _register, _encryptor, _changePassword) {
        this.modal = modal;
        this._register = _register;
        this._encryptor = _encryptor;
        this._changePassword = _changePassword;
        this.isActive = false;
        this.showMenu = '';
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("currentUser") != null) {
            this.fullName = localStorage.getItem("currentUser");
            this.getFirstName();
            this.show = true;
            this.login = true;
        } //if
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        if (!window || !window.location || window.location.hash !== "#login")
            return;
        var aLogin = document.getElementById("aLogin");
        if (!aLogin)
            return;
        aLogin.click();
        aLogin = null;
    };
    //-----------------------------------------------------------------------------------
    //Opens or closes the modal
    SidebarComponent.prototype.open = function (content) {
        var _this = this;
        this.emailRecoveryMessage = '';
        this.successEmailSend = false;
        console.log('opened');
        this.modal.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    //-----------------------------------------------------------------------------------
    SidebarComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //-----------------------------------------------------------------------------------
    SidebarComponent.prototype.getUser = function (content) {
        var _this = this;
        event.preventDefault();
        console.log(this.loginUser);
        //console.log(this.loginUser);
        if (!this.loginUser) {
            this.processing = false;
            this.open(content);
            return;
        } //if
        this._register.getUser(this.loginUser)
            .subscribe(function (res) {
            _this.user = res;
            if (_this.verifyUser(_this.user.password)) {
                localStorage.setItem('currentUser', res.fullName);
                localStorage.setItem('userName', res.userName);
                localStorage.setItem('level', res.userLevel);
                localStorage.setItem('email', res.email);
                _this.load();
                _this.getFirstName();
                localStorage.setItem('currentUser', _this.fullName);
                localStorage.setItem('userName', _this.userName);
                localStorage.setItem('level', _this.level);
                localStorage.setItem('email', _this.email);
                //this.login = true;
            } //if
            else {
                _this.processing = false;
                _this.open(content);
            }
            /*//this is to test the encryption funstions ive created. (found in the jsEncription.service class)
            var temp: string;
            temp = this._encryptor.encrypt(this.user.fullName)
            console.log(this._encryptor.decrypt(this._encryptor.encrypt(this.user.fullName)));
           */
        }, function (err) {
            _this.processing = false;
            _this.open(content);
            if (err.error instanceof Error) {
                console.log('Client-side Error occured');
            }
            else {
                console.log('Server-side Error occured');
            }
        });
    };
    SidebarComponent.prototype.logout = function () {
        this.show = false;
        this.login = false;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userName');
    };
    SidebarComponent.prototype.submit = function () {
        if (this.emailRecovery) {
            this.recoveryPassword();
        }
        else if (this.emailRecoveryByEmail) {
            this.recoveryPasswordWithEmail();
        }
        else {
            this.successEmailSend = true;
            this.emailRecoveryMessage = 'Please enter an email or username';
            this.setResetButtonDisabled(false);
        } //else
    };
    SidebarComponent.prototype.setResetButtonDisabled = function (disabled) {
        var btnRecovery = document.getElementById("btnRecovery");
        if (!btnRecovery)
            return;
        btnRecovery.disabled = false;
    };
    SidebarComponent.prototype.recoveryPassword = function () {
        var _this = this;
        this.successEmailSend = false;
        if (!this.emailRecovery || this.emailRecovery.trim() === "") {
            this.successEmailSend = true;
            this.emailRecoveryMessage = 'Please enter an email or username';
            this.setResetButtonDisabled(false);
        } //if
        this._register.recoverPassowrd(this.emailRecovery)
            .subscribe(function (res) {
            _this.setResetButtonDisabled(false);
        }, function (err) {
            _this.setResetButtonDisabled(false);
            switch (err.status) {
                case 200:
                    _this.successEmailSend = true;
                    _this.emailRecoveryMessage = 'Email sent! Check your email inbox.';
                    break;
                case 404:
                    _this.successEmailSend = true;
                    _this.emailRecoveryMessage = "The user " + _this.emailRecovery + " was NOT found.";
                    break;
                default:
                    _this.successEmailSend = true;
                    _this.emailRecoveryMessage = "There was an error sending the email recovery to user " + _this.emailRecovery + ". Please try again";
                    break;
            } //switch
        });
    };
    //****          ***              ***                 **** */
    SidebarComponent.prototype.recoveryPasswordWithEmail = function () {
        var _this = this;
        this.successEmailSend = false;
        if (!this.emailRecoveryByEmail || this.emailRecoveryByEmail.trim() === "") {
            this.successEmailSend = true;
            this.emailRecoveryMessage = 'Please fill in email or username.';
            return;
        } //if
        this._register.recoverPasswordByEmail(this.emailRecoveryByEmail)
            .subscribe(function (res) {
            _this.setResetButtonDisabled(false);
        }, function (err) {
            _this.setResetButtonDisabled(false);
            switch (err.status) {
                case 200:
                    _this.successEmailSend = true;
                    _this.emailRecoveryMessage = 'Email sent! You should check your email box.';
                    break;
                case 404:
                    _this.successEmailSend = true;
                    _this.emailRecoveryMessage = "The user " + _this.emailRecovery + " was NOT found.";
                    break;
                default:
                    _this.successEmailSend = true;
                    _this.emailRecoveryMessage = "There was an error sending the email recovery to user " + _this.emailRecovery + ". Please try again";
                    break;
            } //switch
        });
    };
    SidebarComponent.prototype.getFirstName = function () {
        if (!this.fullName || /^\s+$/.test(this.fullName)) {
            this.fullName = "";
            return;
        } //if
        var index = !this.fullName ? -1 : this.fullName.indexOf(" ");
        this.firstName = index < 1 ? "" : this.fullName.slice(0, index);
        this.firstName = index < 1 ? this.fullName : this.fullName.slice(0, index);
    };
    SidebarComponent.prototype.verifyUser = function (password) {
        password = this._encryptor.decrypt(password);
        if (this.loginPassword == password) {
            this.login = true;
            this.show = true;
            this.loginPassword = ''; //This clears the string where the user entered his info
            this.loginUser = ''; //This clears the string where the user entered his info
            localStorage.removeItem("attempt"); // use this to reset the values of the attempts.
            return true;
        }
        else {
            return false;
        }
    };
    SidebarComponent.prototype.load = function () {
        this.passWord = this.user.password;
        this.userName = this.user.userName;
        this.fullName = this.user.fullName;
        this.level = this.user.userLevel;
        this.email = this.user.email;
    };
    return SidebarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SidebarComponent.prototype, "loginUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SidebarComponent.prototype, "loginPassword", void 0);
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("./src/app/shared/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/sidebar/sidebar.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_4__layout_change_password_change_password_component__["a" /* ChangePasswordComponent */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_register_service__["a" /* RegisterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_jsEncryption_service__["a" /* JsEncryption */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_jsEncryption_service__["a" /* JsEncryption */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__layout_change_password_change_password_component__["a" /* ChangePasswordComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__layout_change_password_change_password_component__["a" /* ChangePasswordComponent */]) === "function" && _d || Object])
], SidebarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
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


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        this.router.navigate(['/login1']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_shared_pipes_module__ = __webpack_require__("./src/app/shared/pipes/shared-pipes.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("./src/app/shared/components/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules__ = __webpack_require__("./src/app/shared/modules/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return __WEBPACK_IMPORTED_MODULE_2__modules__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__ = __webpack_require__("./src/app/shared/guard/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return __WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("./src/app/shared/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return __WEBPACK_IMPORTED_MODULE_4__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "DefinitionService", function() { return __WEBPACK_IMPORTED_MODULE_4__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TextService", function() { return __WEBPACK_IMPORTED_MODULE_4__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "WordsListService", function() { return __WEBPACK_IMPORTED_MODULE_4__services__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interface__ = __webpack_require__("./src/app/shared/interface/index.ts");
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/shared/interface/IDefinition.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IDefinition.js.map

/***/ }),

/***/ "./src/app/shared/interface/IOrder.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IOrder.js.map

/***/ }),

/***/ "./src/app/shared/interface/IPage.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IPage.js.map

/***/ }),

/***/ "./src/app/shared/interface/IStatistics.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IStatistics.js.map

/***/ }),

/***/ "./src/app/shared/interface/IText.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IText.js.map

/***/ }),

/***/ "./src/app/shared/interface/IWord.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IWord.js.map

/***/ }),

/***/ "./src/app/shared/interface/IWordCount.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IWordCount.js.map

/***/ }),

/***/ "./src/app/shared/interface/IWordMatch.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IWordMatch.js.map

/***/ }),

/***/ "./src/app/shared/interface/IWordPercentage.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IWordPercentage.js.map

/***/ }),

/***/ "./src/app/shared/interface/iTranslation.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=iTranslation.js.map

/***/ }),

/***/ "./src/app/shared/interface/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IWordMatch__ = __webpack_require__("./src/app/shared/interface/IWordMatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IWordMatch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__IWordMatch__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IText__ = __webpack_require__("./src/app/shared/interface/IText.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__IText__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IStatistics__ = __webpack_require__("./src/app/shared/interface/IStatistics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IStatistics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__IStatistics__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IDefinition__ = __webpack_require__("./src/app/shared/interface/IDefinition.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IDefinition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__IDefinition__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IWord__ = __webpack_require__("./src/app/shared/interface/IWord.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IWord___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__IWord__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__IPage__ = __webpack_require__("./src/app/shared/interface/IPage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__IPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__IPage__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__IOrder__ = __webpack_require__("./src/app/shared/interface/IOrder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__IOrder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__IOrder__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__IWordCount__ = __webpack_require__("./src/app/shared/interface/IWordCount.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__IWordCount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__IWordCount__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__IWordPercentage__ = __webpack_require__("./src/app/shared/interface/IWordPercentage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__IWordPercentage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__IWordPercentage__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__iTranslation__ = __webpack_require__("./src/app/shared/interface/iTranslation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__iTranslation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__iTranslation__);
/* unused harmony namespace reexport */










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/shared/modules/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_stat_module__ = __webpack_require__("./src/app/shared/modules/stat/stat.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__stat_stat_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_header_page_header_module__ = __webpack_require__("./src/app/shared/modules/page-header/page-header.module.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            {{heading}}\n        </h2>\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-home\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Home</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\n        </ol>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
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

var PageHeaderComponent = (function () {
    function PageHeaderComponent() {
    }
    return PageHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "heading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "icon", void 0);
PageHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-header',
        template: __webpack_require__("./src/app/shared/modules/page-header/page-header.component.html"),
        styles: [__webpack_require__("./src/app/shared/modules/page-header/page-header.component.scss")]
    })
], PageHeaderComponent);

//# sourceMappingURL=page-header.component.js.map

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageHeaderModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_header_component__ = __webpack_require__("./src/app/shared/modules/page-header/page-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageHeaderModule = (function () {
    function PageHeaderModule() {
    }
    return PageHeaderModule;
}());
PageHeaderModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]]
    })
], PageHeaderModule);

//# sourceMappingURL=page-header.module.js.map

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse {{bgClass}}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col col-xs-3\">\n                <i class=\"fa {{icon}} fa-5x\"></i>\n            </div>\n            <div class=\"col col-xs-9 text-right\">\n                <div class=\"d-block huge\">{{count}}</div>\n                <div class=\"d-block\"><h4><b>{{label}}</b></h4></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left\">{{data}}</span>\n        <a href={{url}} class=\"float-right card-inverse\">\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatComponent; });
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

var StatComponent = (function () {
    function StatComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    return StatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "bgClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "count", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "url", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], StatComponent.prototype, "event", void 0);
StatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stat',
        template: __webpack_require__("./src/app/shared/modules/stat/stat.component.html"),
        styles: [__webpack_require__("./src/app/shared/modules/stat/stat.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StatComponent);

var _a;
//# sourceMappingURL=stat.component.js.map

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_component__ = __webpack_require__("./src/app/shared/modules/stat/stat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatModule = (function () {
    function StatModule() {
    }
    return StatModule;
}());
StatModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]]
    })
], StatModule);

//# sourceMappingURL=stat.module.js.map

/***/ }),

/***/ "./src/app/shared/pipes/shared-pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SharedPipesModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedPipesModule = (function () {
    function SharedPipesModule() {
    }
    return SharedPipesModule;
}());
SharedPipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: []
    })
], SharedPipesModule);

//# sourceMappingURL=shared-pipes.module.js.map

/***/ }),

/***/ "./src/app/shared/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
    }
    // To get word ID, Value and Category
    AdminService.prototype.getWord = function (word) {
        return this.http.get("/api/admin/words/" + word)
            .do((function (res) { return console.log(res); }));
    };
    //delete all words in category
    AdminService.prototype.deleteAllInCategory = function (category) {
        console.log('in deleteALlInCategory');
        return this.http.get("/api/admin/words/delete/" + category)
            .do((function (res) { return console.log(res); }));
    };
    // To add new word to data base
    AdminService.prototype.postWord = function (inputValue, inputCategory) {
        return this.http.post("/api/admin/words", ({
            'category': inputCategory,
            'value': inputValue
        }))
            .do((function (res) { return console.log(res); }));
    };
    // To Edit an existing word in data base
    AdminService.prototype.putWord = function (inputValue, inputCategory, inputId) {
        return this.http.post("/api/admin/words", ({
            'category': inputCategory,
            'value': inputValue,
            'id': inputId
        }))
            .do((function (res) { return console.log(res); }));
    };
    // To Delete a word from database
    AdminService.prototype.deleteWord = function (word) {
        return this.http.delete("/api/admin/words/" + word)
            .do((function (res) { return console.log(res); }));
    };
    return AdminService;
}());
AdminService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ "./src/app/shared/services/definition.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefinitionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefinitionService = (function () {
    function DefinitionService(http) {
        this.http = http;
    }
    DefinitionService.prototype.getDefinitionService = function (word) {
        return this.http.get('/api/entries/' + word + '?source=WIKI')
            .do((function (res) { return console.log(res); }));
    };
    return DefinitionService;
}());
DefinitionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], DefinitionService);

var _a;
//# sourceMappingURL=definition.service.js.map

/***/ }),

/***/ "./src/app/shared/services/iTranslate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iTranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var iTranslateService = (function () {
    function iTranslateService(http) {
        this.http = http;
    }
    iTranslateService.prototype.getTranslation = function (text, language) {
        return this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + language + "&hl=" + language + "&dt=t&q=" + encodeURI(text));
    };
    iTranslateService.prototype.retrieveTextFromResults = function (rec) {
        var isArray = rec != null && Array.isArray(rec) && rec.length > 0;
        var results = [];
        if (isArray) {
            var isNestedArray = Array.isArray(rec[0]) && rec[0].length > 0;
            if (isNestedArray) {
                var n = rec[0].length;
                for (var i = 0; i < n; ++i) {
                    var currentTextArray = rec[0][i];
                    var isCurrentArray = currentTextArray != null && Array.isArray(currentTextArray) && currentTextArray.length > 0;
                    if (isCurrentArray) {
                        results.push(currentTextArray[0]);
                    } //if
                    currentTextArray = null;
                    isCurrentArray = null;
                } //for i
                i = null;
                n = null;
            } //if
            isNestedArray = null;
        } //if
        isArray = null;
        var concatenated = results.length > 0 ? results.join(" ") : "";
        results = null;
        return concatenated;
    };
    iTranslateService.prototype.transformTextToString = function (text) {
        if (!text || !text.words || text.words.length == 0)
            return "";
        var words = [];
        var n = text.words.length;
        var i = 0;
        var tmp;
        for (; i < n; ++i) {
            tmp = text.words[i].initialValue;
            words.push(!tmp || tmp === "" ? "\n" : tmp + " ");
        } //for i
        tmp = null;
        i = null;
        n = null;
        var result = words.length > 0 ? words.join("") : "";
        words = null;
        return result;
    };
    return iTranslateService;
}());
iTranslateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], iTranslateService);

var _a;
//# sourceMappingURL=iTranslate.service.js.map

/***/ }),

/***/ "./src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text_service__ = __webpack_require__("./src/app/shared/services/text.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__text_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordsList_service__ = __webpack_require__("./src/app/shared/services/wordsList.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__wordsList_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definition_service__ = __webpack_require__("./src/app/shared/services/definition.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__definition_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_service__ = __webpack_require__("./src/app/shared/services/admin.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__admin_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__iTranslate_service__ = __webpack_require__("./src/app/shared/services/iTranslate.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__iTranslate_service__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/shared/services/jsEncryption.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsEncryption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto_js__ = __webpack_require__("./node_modules/crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_crypto_js__);
/// <reference types="crypto-js" />

var JsEncryption = (function () {
    function JsEncryption() {
        this.key = __WEBPACK_IMPORTED_MODULE_0_crypto_js__["enc"].Utf8.parse('7061737323313233');
        this.iv = __WEBPACK_IMPORTED_MODULE_0_crypto_js__["enc"].Utf8.parse('7061737323313233');
    }
    JsEncryption.prototype.encrypt = function (plainText) {
        this.encrypted = __WEBPACK_IMPORTED_MODULE_0_crypto_js__["AES"].encrypt(__WEBPACK_IMPORTED_MODULE_0_crypto_js__["enc"].Utf8.parse(plainText), this.key, {
            keySize: 128 / 8,
            iv: this.iv,
            mode: __WEBPACK_IMPORTED_MODULE_0_crypto_js__["mode"].CBC,
            padding: __WEBPACK_IMPORTED_MODULE_0_crypto_js__["pad"].Pkcs7
        });
        //console.log('Encrypted :' + this.encrypted);
        return this.encrypted.toString();
    };
    JsEncryption.prototype.decrypt = function (code) {
        this.decrypted = __WEBPACK_IMPORTED_MODULE_0_crypto_js__["AES"].decrypt(code, this.key, {
            keySize: 128 / 8,
            iv: this.iv,
            mode: __WEBPACK_IMPORTED_MODULE_0_crypto_js__["mode"].CBC,
            padding: __WEBPACK_IMPORTED_MODULE_0_crypto_js__["pad"].Pkcs7
        });
        return this.decrypted.toString(__WEBPACK_IMPORTED_MODULE_0_crypto_js__["enc"].Utf8);
    };
    return JsEncryption;
}());

/*
console.log('Encrypted :' + encrypted);
console.log('Key :' + encrypted.key);
console.log('Salt :' + encrypted.salt);
console.log('iv :' + encrypted.iv);
console.log('Decrypted : ' + decrypted);
console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));
*/
//# sourceMappingURL=jsEncryption.service.js.map

/***/ }),

/***/ "./src/app/shared/services/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    // To add new user to data base
    RegisterService.prototype.postUser = function (fName, uName, pass, ulevel, email) {
        return this.http.post("/api/user/add", ({
            'fullName': fName,
            'userName': uName,
            'password': pass,
            'userLevel': ulevel,
            'email': email,
        }))
            .do((function (res) { return console.log(res); }));
        //.do((res => this.login(uName, pass)));
    };
    RegisterService.prototype.login = function (uName, pass) {
        return this.login(uName, pass);
    };
    RegisterService.prototype.getUser = function (uName) {
        return this.http.get("/api/user/" + uName)
            .do((function (res) { return console.log(res); }));
    };
    RegisterService.prototype.patchUser = function (user, userName, updatePassword) {
        user.updatePassword = updatePassword;
        return this.http.patch("/api/user/" + userName, user).do(function (res) { return console.log(res); });
    };
    RegisterService.prototype.deleteUser = function (userName, password) {
        return this.http.delete("/api/user/" + userName + "/" + password);
    };
    RegisterService.prototype.recoverPassowrd = function (uName) {
        return this.http.get("/api/user/recovery/" + uName)
            .do((function (res) { return console.log(res); }));
    };
    //********************************************************************************* */
    RegisterService.prototype.recoverPasswordByEmail = function (email) {
        return this.http.get("/api/user/recovery_email/" + email + "/")
            .do((function (res) { return console.log(res); }));
    };
    //*********************************************************************************
    RegisterService.prototype.resetPassword = function (data) {
        return this.http.post("/api/user/recovery_password?token=" + data.token + "&password=" + data.password, data);
    };
    return RegisterService;
}());
RegisterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], RegisterService);

var _a;
//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "./src/app/shared/services/text.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextService = (function () {
    function TextService(http) {
        this.http = http;
    }
    TextService.prototype.enhancedText = function (textArea) {
        return this.http.post('/api/analyzeText', textArea)
            .do((function (res) { return console.log(res); }));
    };
    TextService.prototype.enhancedDoc = function (formdata) {
        return this.http.post('/api/analyzeFile?type=DOC', formdata)
            .do((function (res) { return console.log(res); }));
    };
    TextService.prototype.enhancedPDF = function (formdata) {
        return this.http.post('/api/analyzeFile?type=PDF', formdata)
            .do((function (res) { return console.log(res); }));
    };
    TextService.prototype.enhancedImage = function (formdata) {
        return this.http.post('/api/analyzeFile?type=IMG', formdata)
            .do((function (res) { return console.log(res); }));
    };
    return TextService;
}());
TextService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], TextService);

var _a;
//# sourceMappingURL=text.service.js.map

/***/ }),

/***/ "./src/app/shared/services/wordsList.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WordsListService = (function () {
    function WordsListService(http) {
        this.http = http;
    }
    WordsListService.prototype.getData = function (page, category, size, sort) {
        return this.http.get("/api/words?category=" + category + "&page=" + page + "&size=" + size + "&sortKey=value&sortDirection=" + sort)
            .do((function (res) { return console.log(res); }));
    };
    // To get word ID, Value and Category
    WordsListService.prototype.getWord = function (word, categories) {
        return this.http.get("/api/words/" + word + "/" + categories)
            .do((function (res) { return console.log(res); }));
    };
    return WordsListService;
}());
WordsListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], WordsListService);

var _a;
//# sourceMappingURL=wordsList.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map