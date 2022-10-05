webpackJsonp(["recovery.module"],{

/***/ "./src/app/layout/recovery/recovery-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recovery_component__ = __webpack_require__("./src/app/layout/recovery/recovery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__recovery_component__["a" /* RecoveryComponent */] }
];
var RecoveryRoutingModule = (function () {
    function RecoveryRoutingModule() {
    }
    return RecoveryRoutingModule;
}());
RecoveryRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], RecoveryRoutingModule);

//# sourceMappingURL=recovery-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/recovery/recovery.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\n    <ngb-alert type=\"warning\" *ngIf=\"!passclosed\" (close)=\"passClose()\">Your password did not match, please try again.</ngb-alert>\n    <ngb-alert type=\"success\" *ngIf=\"restored\" (close)=\"passClose()\">You have successfully changed your password! Thank you!</ngb-alert>\n    <ngb-alert *ngIf=\"passwordLenghtError\" type=\"warning\" (close)=\"passClose()\">Password must be at least 6 characters long, try again.</ngb-alert>\n    <!-- <ngb-alert type=\"warning\" *ngIf=\"!serverError\" (close)=\"passClose()\">There was a problem updating your password. Please try again. If the problem persists, please contact an administrator</ngb-alert> -->\n    <ngb-alert type=\"warning\" *ngIf=\"userNotFound\" (close)=\"passClose()\">This Link was already used to update password. Please request a new Link to Reset the Password.</ngb-alert>\n\n    <div class=\"row\">\n        <div class=\"col-md-4 push-md-4\">\n            <img src=\"assets/images/logo.png\" width=\"150px\" class=\"user-avatar\" />\n            <br />\n\n            <h1>Vocabulary in Reading Study</h1>\n            <br />\n            <br />\n            <form>\n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input type=\"password\" [(ngModel)]=\"newpassW\" class=\"form-control input-underline input-lg\" id=\"newpassW\" name=\"newpassW\"\n                            placeholder=\"Choose Password\" required />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"password\" [(ngModel)]=\"copynewpassW\" class=\"form-control input-underline input-lg\" id=\"copynewpassW\" name=\"copynewpassW\"\n                            placeholder=\"Confirm Password\" required />\n                    </div>\n                </div>\n            </form>\n            <br />\n            <br />\n            <button class=\"btn btn-primary btn-block\" type=\"submit\" (click)=\"changeUserPassword(content)\"> Register Password </button>\n            &nbsp;\n\n        </div>\n    </div>\n\n\n    <!--This is the modal for register warning-->\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4>\n                Error\n                <i class=\"fa fa-fw fa-exclamation\"></i>\n            </h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <!--Alert-->\n            <div *ngIf=\"show\">\n                Please choose another user name, the one you chose is taken...\n            </div>\n            <div>\n                <strong>Sorry! </strong>\n            </div>\n        </div>\n    </ng-template>\n</div>\n<br>\n<br>"

/***/ }),

/***/ "./src/app/layout/recovery/recovery.component.scss":
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/layout/recovery/recovery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_register_service__ = __webpack_require__("./src/app/shared/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_jsEncryption_service__ = __webpack_require__("./src/app/shared/services/jsEncryption.service.ts");
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






var RecoveryComponent = (function () {
    function RecoveryComponent(_passModalService, _passRegister, _passEncryptor, _route) {
        this._passModalService = _passModalService;
        this._passRegister = _passRegister;
        this._passEncryptor = _passEncryptor;
        this._route = _route;
        this.logged = false;
        this.serverError = true;
        this.userNotFound = false;
        this.passclosed = true;
        this.passregistered = false;
        this.passshow = false;
    }
    RecoveryComponent.prototype.ngOnInit = function () {
        this.token = this._route.snapshot.queryParamMap.get('token');
    };
    // close
    RecoveryComponent.prototype.passClose = function () {
        this.passclosed = true;
        this.passregistered = false;
        this.logged = false;
        this.passwordLenghtError = false;
        this.passshow = false;
        this.serverError = false;
        this.userNotFound = false;
    };
    // ** (ok) ** finding if the password has at least 6 characters 
    RecoveryComponent.prototype.newpasswLenght = function () {
        this.passshow = false;
        if (!this.newpassW || this.newpassW.length < 6) {
            this.passwordLenghtError = true;
        }
        else {
            this.passwordLenghtError = false;
        }
    };
    // ** (ok) ** to compare the new password and its copy/ confirming newpassword basically
    RecoveryComponent.prototype.newpasswCompare = function () {
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
    RecoveryComponent.prototype.changeUserPassword = function (content) {
        var _this = this;
        this.passwordLenghtError = false;
        this.newpasswLenght();
        this.newpasswCompare();
        this.serverError = false;
        console.log(this.currentpassW);
        console.log(this.newpassW);
        var password = this._passEncryptor.encrypt(this.currentpassW);
        var newPassword = this._passEncryptor.encrypt(this.newpassW);
        console.log(this.newpassW);
        console.log(newPassword);
        if (!this.passmatch || !this.curentpassmatch || this.passwordLenghtError) {
            this.logged = false;
            return;
        } //if
        // saving the encrypted password
        this.logged = false;
        var updatePassword = true;
        this._passRegister.resetPassword({ 'token': this.token, 'password': newPassword })
            .subscribe(function (res) {
            _this.restored = true;
        }, function (err) {
            switch (err.status) {
                case 200:
                    _this.restored = true;
                    break;
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
            }
        });
    };
    // --------------------*************   MY code   *************-----------------------------------  
    RecoveryComponent.prototype.resetUserPassword = function (content) {
        var _this = this;
        this.passwordLenghtError = false;
        this.newpasswLenght();
        this.newpasswCompare();
        this.validToken();
        this.serverError = false;
        //this.sendEmail();
        var user = {};
        user["updatePassword"] = true;
        //user["password"] = this._passEncryptor.encrypt(this.currentpassW);
        user["newPassword"] = this._passEncryptor.encrypt(this.newpassW);
        if (!this.passmatch || !this.curentpassmatch || this.passwordLenghtError || !this.tokenValid) {
            this.logged = false;
            return;
        } //if
        // saving the encrypted password
        this.logged = false;
        var updatePassword = true;
        this._passRegister.patchUser(user, this.userNameEnter, updatePassword)
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
    RecoveryComponent.prototype.sendEmail = function () {
        var _this = this;
        if (this.userNameEnter != null) {
            this._passRegister.getUser(this.userNameEnter)
                .subscribe(function (res) {
                _this.userEmail = res.email;
                //send the email to this.userEmail
                _this.emailSent = true;
            }, function (err) {
                if (err.error instanceof Error) {
                    console.log('Client-side Error occured');
                }
                else {
                    _this.passprocessing = false;
                    console.log('Server-side Error occured');
                }
            });
        }
        else {
            this.emailSent = false;
        }
    };
    RecoveryComponent.prototype.validToken = function () {
        this.sendEmail(); //I'm not sure if you calles form here or from the html
        // if (emailSent){
        // if (token)
        //{this.tokenValid = true}
    };
    // --------------------------------------------------------------------------------------  
    // ** (ok) ** Opens or closes the modal
    RecoveryComponent.prototype.open = function (content) {
        var _this = this;
        this._passModalService.open(content).result.then(function (result) {
            _this.closeR = "Closed with: " + result;
        }, function (reason) {
            _this.closeR = "Dismissed " + _this.getPassDismissReason(reason);
        });
    };
    //  ** (ok) **  
    RecoveryComponent.prototype.getPassDismissReason = function (reason) {
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
    return RecoveryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RecoveryComponent.prototype, "currentpassW", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RecoveryComponent.prototype, "newpassW", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RecoveryComponent.prototype, "copynewpassW", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RecoveryComponent.prototype, "userNameEnter", void 0);
RecoveryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tests',
        template: __webpack_require__("./src/app/layout/recovery/recovery.component.html"),
        styles: [__webpack_require__("./src/app/layout/recovery/recovery.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_register_service__["a" /* RegisterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_register_service__["a" /* RegisterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_services_jsEncryption_service__["a" /* JsEncryption */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_services_jsEncryption_service__["a" /* JsEncryption */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], RecoveryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=recovery.component.js.map

/***/ }),

/***/ "./src/app/layout/recovery/recovery.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryModule", function() { return RecoveryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recovery_routing_module__ = __webpack_require__("./src/app/layout/recovery/recovery-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recovery_component__ = __webpack_require__("./src/app/layout/recovery/recovery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_register_service__ = __webpack_require__("./src/app/shared/services/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RecoveryModule = (function () {
    function RecoveryModule() {
    }
    return RecoveryModule;
}());
RecoveryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__recovery_routing_module__["a" /* RecoveryRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__recovery_component__["a" /* RecoveryComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_register_service__["a" /* RegisterService */]]
    })
], RecoveryModule);

//# sourceMappingURL=recovery.module.js.map

/***/ })

});
//# sourceMappingURL=recovery.module.chunk.js.map