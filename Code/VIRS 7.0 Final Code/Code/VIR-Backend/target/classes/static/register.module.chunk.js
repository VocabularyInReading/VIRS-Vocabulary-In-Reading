webpackJsonp(["register.module"],{

/***/ "./src/app/layout/register/register-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_component__ = __webpack_require__("./src/app/layout/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__register_component__["a" /* RegisterComponent */] }
];
var RegisterRoutingModule = (function () {
    function RegisterRoutingModule() {
    }
    return RegisterRoutingModule;
}());
RegisterRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], RegisterRoutingModule);

//# sourceMappingURL=register-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <div id=\"content\">\r\n    <ngb-alert type=\"warning\" *ngIf=\"!closed\" (close)=\"close()\">Your password did not match, please try again.</ngb-alert>\r\n    <ngb-alert type=\"success\" *ngIf=\"registered\" (close)=\"close()\">You have succesfully registered! Thank you!</ngb-alert>\r\n    <!-- <ngb-alert type=\"success\" *ngIf=\"login\" (close)=\"close()\">You have succesfully logged in! Thank you!</ngb-alert> -->\r\n    <ngb-alert *ngIf=\"pwordLengthError\" type=\"warning\" (close)=\"close()\">Password must be atleast 6 characters long, try again.</ngb-alert>\r\n    <ngb-alert *ngIf=\"show\" type=\"danger\" (close)=\"close()\">Please choose another user name, the one you chose is taken...</ngb-alert>\r\n    <ngb-alert *ngIf=\"emailBlank\" type=\"danger\" (close)=\"close()\">Please enter an email</ngb-alert>\r\n    <ngb-alert *ngIf=\"userNameBlank\" type=\"danger\" (close)=\"close()\">Please enter a user name</ngb-alert>\r\n    <ngb-alert *ngIf=\"fullNameBlank\" type=\"danger\" (close)=\"close()\">Please enter your full name</ngb-alert>\r\n    <ngb-alert *ngIf=\"invalidEmail\" type=\"danger\" (close)=\"close()\">Please enter a valid email</ngb-alert>\r\n    <ngb-alert *ngIf=\"registrationServerError\" type=\"danger\" (close)=\"close()\">There was an error registering. Please try again.</ngb-alert>\r\n    <ngb-alert *ngIf=\"emailExists\" type=\"danger\" (close)=\"close()\">The email entered has already been registered. Please enter a new one.</ngb-alert>\r\n\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 push-md-4\">\r\n            <!--\r\n            <img src=\"assets/images/logo.png\" width=\"150px\" class=\"user-avatar\" />\r\n            <h2>Vocabulary in Reading Study</h2>\r\n            -->\r\n            <h2>Create an Account</h2>\r\n            <form>\r\n                <div class=\"form-content\">\r\n                    <div class=\"form-group\">\r\n\r\n                        <input type=\"text\" [(ngModel)]=\"uName\" class=\"form-control input-underline input-lg\" id=\"userName\"\r\n                               name=\"userName\" placeholder=\"Enter Username\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n\r\n\r\n                        <input type=\"text\" [(ngModel)]=\"fName\" class=\"form-control input-underline input-lg\" id=\"fullName\"\r\n                               name=\"fullName\" placeholder=\"Enter first and last name\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n\r\n\r\n                        <input type=\"password\" [(ngModel)]=\"pword\" class=\"form-control input-underline input-lg\" id=\"password\"\r\n                               name=\"pass\" placeholder=\"Enter Password\" required />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n\r\n\r\n                        <input type=\"password\" [(ngModel)]=\"cPass\" class=\"form-control input-underline input-lg\" id=\"cPassword\"\r\n                               name=\"cpass\" placeholder=\"Re-enter Password\" required />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n\r\n\r\n                        <input type=\"text\" [(ngModel)]=\"email\" class=\"form-control input-underline input-lg\" id=\"email\"\r\n                               name=\"email\" placeholder=\"Enter email\" required />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n\r\n            <select class=\"form-control\" id=\"status\" [(ngModel)]=\"uLevel\">\r\n                <option *ngFor=\"let i of categoryItems\" [value]=\"i\">{{i}}</option>\r\n            </select>\r\n            <br />\r\n            <br />\r\n            <button class=\"btn btn-primary btn-block\"  type=\"submit\"\r\n                (click)=\"getUser(content)\" > Register </button>\r\n            &nbsp;\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n    <!--This is the modal for register warning-->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4>\r\n                Error<i class=\"fa fa-fw fa-exclamation\"></i>\r\n            </h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <!--Alert-->\r\n            <div *ngIf=\"show\">\r\n                Please choose another user name, the one you chose is taken...\r\n            </div>\r\n            <div>\r\n                <strong>Sorry! </strong>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n\r\n<br>\r\n<br>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  margin-bottom: 30px; }\n\n#content {\n  padding-top: 50px;\n  background-color: #b1d1e7; }\n\n/*\r\n.ng-tns-c7-1.ng-trigger.ng-trigger-routerTransition {\r\n\r\n    background-image: url('../../../assets/images/VIRS-1.jpg');\r\n    background-repeat: no-repeat;\r\n    //background-attachment: fixed;\r\n    background-size: cover;\r\n\r\n    margin-top: 40px;\r\n    //margin-bottom: 40px;\r\n  }\r\n  */\n\n/*\r\ninput{\r\n\r\n    border-radius: 12px;\r\n    //box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\nselect{\r\n\r\n    border-radius: 12px;\r\n    //box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n*/\n\nform {\n  margin: auto; }\n\n.btn.btn-primary.btn-block {\n  background-color: #2b2b2b !important;\n  width: 50%;\n  color: #ebebeb;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/layout/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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





//import { timingSafeEqual } from 'crypto';
var RegisterComponent = (function () {
    function RegisterComponent(_modalService, _register, _encryptor) {
        this._modalService = _modalService;
        this._register = _register;
        this._encryptor = _encryptor;
        this.closed = true;
        this.registered = false;
        this.show = false;
        this.login = false;
        this.isActive = false;
        this.showMenu = '';
        this.categoryItems = ['User Level (Optional)', 'Student', 'Professor', 'Parent', 'Researcher', 'Faculty'];
        this.uLevel = this.categoryItems[0];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        if (!window || !window.location || window.location.hash !== "#login")
            return;
        var aLogin = document.getElementById("aLogin");
        if (!aLogin)
            return;
        aLogin.click();
        aLogin = null;
    };
    RegisterComponent.prototype.close = function () {
        this.closed = true;
        this.registered = false;
        this.login = false;
        this.pwordLengthError = false;
        this.show = false;
        this.emailBlank = false;
        this.invalidEmail = false;
        this.userNameBlank = false;
        this.registrationServerError = false;
        this.emailExists = false;
        this.fullNameBlank = false;
    };
    RegisterComponent.prototype.validateUserInput = function () {
        this.emailBlank = !this.email || /^\s+$/.test(this.email);
        this.userNameBlank = !this.uName || /^\s+$/.test(this.uName);
        this.invalidEmail = !this.emailBlank && !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email);
        this.pwordLengthError = !this.pword || this.pword.length < 6;
        if (!this.pwordLengthError)
            this.match = this.closed = this.cPass === this.pword;
        this.fullNameBlank = !this.fName || /^\s+$/.test(this.fName);
    };
    //----------------------------------------
    //GetUtser will first verify if the username is in the database already prior registering the user
    RegisterComponent.prototype.getUser = function (content) {
        var _this = this;
        this.pwordLengthError = false;
        this.validateUserInput();
        if (this.invalidEmail || this.userNameBlank || !this.match || this.pwordLengthError || this.fullNameBlank) {
            return;
        } //if
        //this._register.login(this.uName, this.passWord);
        this._register.getUser(this.uName)
            .subscribe(function (res) {
            _this.user = res;
            _this.show = true;
            _this.processing = false;
        }, function (err) {
            switch (err.status) {
                case 404:
                    _this.register(content);
                    _this.processing = false;
                    break;
                default:
                    _this.registrationServerError = true;
                    break;
            } //switch
        });
    };
    RegisterComponent.prototype.findUserLevelSelected = function () {
        var max = this.categoryItems.length;
        for (var i = 0; i < max; ++i) {
            if (this.categoryItems[i] !== this.uLevel)
                continue;
            max = null;
            return true;
        } //for i
        max = null;
        return false;
    };
    //-----------------------------------------
    //Register will add the user info into the database once all has been verifed
    RegisterComponent.prototype.register = function (content) {
        var _this = this;
        if (this.uLevel === this.categoryItems[0] || !this.findUserLevelSelected()) {
            this.uLevel = null;
        } //if
        this.passWord = this._encryptor.encrypt(this.pword);
        this.fullName = this.fName;
        this.userName = this.uName;
        this.userLevel = this.uLevel;
        this.userEmail = this.email;
        this._register.postUser(this.fullName, this.userName, this.passWord, this.userLevel, this.email)
            .subscribe(function (res) {
            _this.registered = true;
            _this.login = true;
            _this.redirectToPage("#login");
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.emailExists = true;
                    break;
                default:
                    _this.registrationServerError = true;
                    break;
            } //switch
        } //err
        );
    };
    //-----------------------------------------------------------------------------------
    //Opens or closes the modal
    RegisterComponent.prototype.open = function (content) {
        var _this = this;
        this._modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    //-----------------------------------------------------------------------------------
    RegisterComponent.prototype.getDismissReason = function (reason) {
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
    RegisterComponent.prototype.getFirstName = function () {
        if (!this.fullName || /^\s+$/.test(this.fullName)) {
            this.fullName = "";
            return;
        }
        var index = !this.fullName ? -1 : this.fullName.indexOf(" ");
        this.fName = index < 1 ? this.fullName : this.fullName.slice(0, index);
    };
    RegisterComponent.prototype.verifyUser = function (password) {
        if (this.loginPassword == password) {
            this.login = true;
            this.show = true;
            this.loginPassword = '';
            this.loginUser = '';
            localStorage.removeItem("attempt");
            return true;
        }
        else
            return false;
    };
    RegisterComponent.prototype.load = function () {
        this.passWord = this.user.password;
        this.userName = this.user.userName;
        this.fullName = this.user.fullName;
        this.uLevel = this.user.userLevel;
        this.email = this.user.email;
    };
    RegisterComponent.prototype.redirectToPage = function (view) {
        window.setTimeout(function () {
            window.location.href = window.location.href.replace("/register", view);
        }, 2500);
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RegisterComponent.prototype, "uName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RegisterComponent.prototype, "fName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RegisterComponent.prototype, "pword", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RegisterComponent.prototype, "cPass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RegisterComponent.prototype, "email", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RegisterComponent.prototype, "loginUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RegisterComponent.prototype, "loginPassword", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tests',
        template: __webpack_require__("./src/app/layout/register/register.component.html"),
        styles: [__webpack_require__("./src/app/layout/register/register.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_register_service__["a" /* RegisterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_register_service__["a" /* RegisterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_services_jsEncryption_service__["a" /* JsEncryption */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_services_jsEncryption_service__["a" /* JsEncryption */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/layout/register/register.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_routing_module__ = __webpack_require__("./src/app/layout/register/register-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_component__ = __webpack_require__("./src/app/layout/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_register_service__ = __webpack_require__("./src/app/shared/services/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__register_routing_module__["a" /* RegisterRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__register_component__["a" /* RegisterComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_register_service__["a" /* RegisterService */]]
    })
], RegisterModule);

//# sourceMappingURL=register.module.js.map

/***/ })

});
//# sourceMappingURL=register.module.chunk.js.map