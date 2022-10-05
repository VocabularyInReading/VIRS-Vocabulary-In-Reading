webpackJsonp(["account.module"],{

/***/ "./src/app/layout/account/account-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccountRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_component__ = __webpack_require__("./src/app/layout/account/account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__account_component__["a" /* UserAccount */] }
];
var UserAccountRoutingModule = (function () {
    function UserAccountRoutingModule() {
    }
    return UserAccountRoutingModule;
}());
UserAccountRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], UserAccountRoutingModule);

//# sourceMappingURL=account-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] class=\"container-fluid\">\r\n\r\n    <script>\r\n        $(function () {\r\n            $('[data-toggle=\"popover\"]').popover()\r\n        })\r\n\r\n        $(function () {\r\n            $('.example-popover').popover({\r\n                container: 'body'\r\n            })\r\n        })\r\n    </script>\r\n    <!--edit profile modal-->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <div>\r\n                Edit Profile Details\r\n            </div>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div>\r\n            <table class=\"modal-table\">\r\n                <tr>\r\n                    <td><label for=\"fullName\">Name:</label></td>\r\n                    <td><input type=\"text\" [(ngModel)]=\"userEdit.fullName\" /></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><label for=\"email\">Email:</label></td>\r\n                    <td><input type=\"text\" [(ngModel)]=\"userEdit.email\" /></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><label for=\"userName\">User Name:</label></td>\r\n                    <td><input type=\"text\" [(ngModel)]=\"userEdit.updatedUserName\" /></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><label for=\"userLevel\">User Level:</label></td>\r\n                    <td>\r\n                        <select [(ngModel)]=\"userEdit.userLevel\">\r\n                            <option value=\"\">----Select User Level----</option>\r\n                            <option value=\"Student\">Student</option>\r\n                            <option value=\"Professor\">Professor</option>\r\n                            <option value=\"Parent\">Parent</option>\r\n                            <option value=\"Researcher\">Researcher</option>\r\n                            <option value=\"Faculty\">Faculty</option>\r\n                        </select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\" class=\"col-btn-modal\">\r\n                        <button type=\"button\" class=\"btn btn-primary btnModal\" title=\"Update\"\r\n                        (click)=\"updateUser(updateAlert)\">Update</button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </ng-template>\r\n    <!--error updating-->\r\n    <ng-template #updateAlert let-c=\"close\">\r\n        <div class=\"modal-header\">\r\n            <div id=\"updateResultHeader\"></div>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div id=\"updateMsg\"></div>\r\n            <div class=\"btnModalContainer\" id=\"btnUpdateAlert\">\r\n                <button type=\"button\" class=\"btn btn-primary btnModal\" (click)=\"c('Close click')\">Ok</button>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n    <!--delete modal-->\r\n    <ng-template #deleteAccount let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <div>\r\n                Delete Account\r\n            </div>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div>\r\n            <table class=\"modal-table\">\r\n                <tr>\r\n                    <td><label for=\"password\">Password:</label></td>\r\n                    <td><input type=\"password\" [(ngModel)]=\"password\" id=\"password\" name=\"password\"/></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><label for=\"passwordConfirm\">Confirm Password:</label></td>\r\n                    <td><input type=\"password\" [(ngModel)]=\"passwordConfirm\" id=\"passwordConfirm\" name=\"passwordConfirm\"/></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"right-container\"><input type=\"checkbox\" [(ngModel)]=\"confirmDelete\" id=\"confirmDelete\" name=\"confirmDelete\"/></td>\r\n                    <td><label for=\"confirmDelete\">I understand that my account will NOT be recoverable after deletion</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\" class=\"col-btn-modal\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" title=\"Delete Account\"\r\n                        (click)=\"deleteUser(updateAlert)\" type=\"submit\">Delete Account</button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <div class=\"col col-md-6 col-sm-12 center\" id=\"profile-view-container\">\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item active\">My Profile Details</li>\r\n            <li class=\"list-group-item\">Name: <span id=\"fullNameView\">{{user.fullName}}</span></li>\r\n            <li class=\"list-group-item\">Email: <span id=\"emailView\">{{user.email}}</span></li>\r\n            <li class=\"list-group-item\">User Name: <span id=\"userNameView\">{{user.userName}}</span></li>\r\n            <li class=\"list-group-item\">User Type: <span id=\"userLevelView\">{{user.userLevel}}</span></li>\r\n            <li class=\"list-group-item\" id=\"profile-options-container\">\r\n                <button type=\"button\" class=\"btn btn-primary btnOpenModal\" (click)=\"openEdit(content)\" title=\"Edit Profile\">Edit</button>\r\n                <button type=\"button\" class=\"btn btn-primary btnOpenModal\" (click)=\"openDelete(deleteAccount)\" title=\"Delete Account\">Delete</button>\r\n                <button type=\"button\" class=\"btn btn-primary btnOpenModal\" (click)=\"openChangePassword()\" title=\"Change Password\">Change Password</button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <hr />\r\n    <div>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Coming Soon\">My Saved Materials</button>\r\n    </div>\r\n</div>\r\n<br>\r\n<br>\r\n"

/***/ }),

/***/ "./src/app/layout/account/account.component.scss":
/***/ (function(module, exports) {

module.exports = ".center {\n  margin: auto;\n  width: 100%;\n  padding: 10px; }\n\nli {\n  display: inline-block; }\n\n#stats {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  border-radius: 10px; }\n\n#stats td, #stats th {\n  border: 2px solid #ddd;\n  padding: 8px;\n  text-align: center; }\n\n#stats tr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n#stats tr:hover {\n  background-color: #ddd; }\n\n#stats th {\n  border: 2px solid #ddd;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  background-color: lightskyblue;\n  color: white; }\n\n.right-container {\n  text-align: right; }\n\n.hidden {\n  display: none; }\n\n.modal-table {\n  width: 100%;\n  padding: 5px;\n  margin: auto; }\n\n.modal-header {\n  background-color: #4152b4;\n  color: #ffffff; }\n\n.modal-header div {\n  margin: auto;\n  font-size: 145%;\n  font-weight: 550; }\n\n.modal-table td {\n  padding: 10px 25px 10px 25px; }\n\n.modal-table tr {\n  border-bottom: 1px solid grey; }\n\n.btnModal {\n  width: 75%; }\n\n.btnOpenModal {\n  margin-right: 10px; }\n\n.col-btn-modal, #profile-options-container, .btnModalContainer {\n  text-align: center; }\n\n.btnModalContainer {\n  margin: 10px; }\n\n.modal-table input[type=\"text\"], .modal-table input[type=\"password\"] {\n  width: 75%;\n  padding: 5px 15px 5px 15px; }\n\n#userLevel {\n  height: 35px; }\n\n#updateMsg {\n  margin: 18px;\n  text-align: center;\n  font-size: larger; }\n"

/***/ }),

/***/ "./src/app/layout/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccount; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_register_service__ = __webpack_require__("./src/app/shared/services/register.service.ts");
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





var UserAccount = (function () {
    function UserAccount(modal, _register, _encryptor) {
        this.modal = modal;
        this._register = _register;
        this._encryptor = _encryptor;
        this.password = null;
        this.passwordConfirm = null;
        this.confirmDelete = false;
    }
    UserAccount.prototype.ngOnInit = function () {
        this.user = {};
        this.userEdit = {};
        this.updateUserValues();
    };
    UserAccount.prototype.copyUser = function (l, r) {
        l.email = r.email;
        l.fullName = r.fullName;
        l.userLevel = r.userLevel;
        l.userName = r.userName;
        l.updatedUserName = r.userName;
    };
    UserAccount.prototype.sanitizeData = function (field, key) {
        if (field && field !== "null" && typeof undefined != field)
            return field;
        localStorage.setItem(key, "");
        return "";
    };
    UserAccount.prototype.updateUserValues = function () {
        this.user.updatedUserName = this.user.userName = localStorage.getItem('userName');
        this.user.fullName = this.sanitizeData(localStorage.getItem('currentUser'), 'currentUser');
        this.user.userLevel = this.sanitizeData(localStorage.getItem('level'), 'level');
        this.user.email = this.sanitizeData(localStorage.getItem('email'), 'email');
    };
    UserAccount.prototype.openEdit = function (content) {
        this.copyUser(this.userEdit, this.user);
        this.open(content);
    };
    //TODO:probably we should create some sort of helper class so that this open and dimiss methods don't need to be repeated on each view that it's used on
    UserAccount.prototype.open = function (content) {
        var _this = this;
        console.log('opened');
        this.modal.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UserAccount.prototype.openDelete = function (content) {
        var _this = this;
        console.log('opened');
        this.modal.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UserAccount.prototype.openAlert = function (content) {
        var _this = this;
        console.log('opened');
        this.modal.open(content, { size: 'sm' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UserAccount.prototype.getDismissReason = function (reason) {
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
    UserAccount.prototype.updateElement = function (id, elementValue) {
        var node = document.getElementById(id);
        if (!node)
            return;
        node.innerText = !elementValue ? "" : elementValue;
        node = null;
    };
    UserAccount.prototype.setUpdateError = function (msgBody) {
        this.setUpdateResult("Update Error", msgBody);
    };
    UserAccount.prototype.setDeleteError = function (msgBody) {
        this.setUpdateResult("Delete Error", msgBody);
    };
    UserAccount.prototype.setDeleteSuccess = function (msgBody) {
        this.setUpdateResult("Delete Success", msgBody);
    };
    UserAccount.prototype.setUpdateSuccess = function (msgBody) {
        this.setUpdateResult("Update Complete", msgBody);
    };
    UserAccount.prototype.setUpdateResult = function (header, msgBody) {
        var updateResultHeader = document.getElementById("updateResultHeader");
        if (updateResultHeader) {
            updateResultHeader.innerText = header;
            updateResultHeader = null;
        } //if
        var updateMsg = document.getElementById("updateMsg");
        if (!updateMsg)
            return;
        updateMsg.innerText = msgBody;
        updateMsg = null;
    };
    UserAccount.prototype.isEmpty = function (str) {
        return !str || /^\s+$/.test(str);
    };
    UserAccount.prototype.validateUser = function (user) {
        return user && !this.isEmpty(user.fullName) && !this.isEmpty(user.email) && !this.isEmpty(user.userName) && /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(user.email);
    };
    UserAccount.prototype.deleteUser = function (content) {
        var _this = this;
        //validate passwords are not null/empty
        if (this.isEmpty(this.password) || this.isEmpty(this.passwordConfirm)) {
            this.openAlert(content);
            this.setDeleteError("One or both password fields are empty");
            return;
        } //if
        //validate passwords are equal
        if (this.password !== this.passwordConfirm) {
            this.openAlert(content);
            this.setDeleteError("The passwords entered do not match");
            return;
        } //if
        //validate that checkbox is checked
        if (!this.confirmDelete) {
            this.openAlert(content);
            this.setDeleteError("Confirmation checkmark is NOT checked.");
            return;
        } //if
        this.user.userName = localStorage.getItem("userName");
        //get user name from local storage
        if (!this.user.userName || this.isEmpty(this.user.userName)) {
            this.deleteUserFromLocalStorage();
            this.openAlert(content);
            this.hideBtnUpdateAlert();
            this.setDeleteError("There was an error retrieving the user name. Please login and try again.");
            this.redirectToPage("#login");
            return;
        } //if
        this._register.deleteUser(this.user.userName, this._encryptor.encrypt(this.password))
            .subscribe(function (r) {
            _this.deleteUserFromLocalStorage();
            _this.openAlert(content);
            _this.hideBtnUpdateAlert();
            _this.setDeleteSuccess("User " + _this.user.userName + " was successfully deleted.");
            _this.redirectToPage("");
        }, function (err) {
            _this.openAlert(content);
            var msg = "";
            switch (err.status) {
                case 401:
                    msg = "Password entered is invalid. Please try again.";
                    break;
                case 404:
                    _this.hideBtnUpdateAlert();
                    _this.deleteUserFromLocalStorage();
                    msg = "The user was not found. Please ensure that the account was NOT deleted on another window/tab/browser.";
                    _this.redirectToPage("");
                    break;
                case 504:
                    msg = "There was an connection error. Please ensure you are connected to a network and that there is internet access.";
                    break;
                case 400:
                default:
                    msg = "There was error trying to delete the account. Please try again.";
            } //switch
            _this.setDeleteError(msg);
        });
    };
    UserAccount.prototype.deleteUserFromLocalStorage = function () {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("email");
        localStorage.removeItem("userName");
    };
    UserAccount.prototype.redirectToPage = function (view) {
        window.setTimeout(function () {
            window.location.href = window.location.href.replace("/account", view);
        }, 2500);
    };
    UserAccount.prototype.hideBtnUpdateAlert = function () {
        var btnUpdateAlert = document.getElementById("btnUpdateAlert");
        if (!btnUpdateAlert)
            return;
        btnUpdateAlert.className = "hidden";
        btnUpdateAlert = null;
    };
    UserAccount.prototype.openChangePassword = function () {
        window.location.href = window.location.href.replace("/account", "/change-password");
    };
    UserAccount.prototype.updateUser = function (content) {
        var _this = this;
        if (!this.validateUser(this.userEdit)) {
            this.openAlert(content);
            this.setUpdateError("Please fill in the email, user name, and/or full name and ensure that the email is valid");
            return;
        } //if
        if (this.isEmpty(this.userEdit.userLevel))
            this.userEdit.userLevel = null;
        var userName = this.user.userName;
        this.userEdit.userName = this.userEdit.updatedUserName;
        this._register
            .patchUser(this.userEdit, userName, false)
            .subscribe(function (r) {
            if (!_this.userEdit.userLevel)
                _this.userEdit.userLevel = "";
            _this.openAlert(content);
            _this.setUpdateSuccess("Account updated");
            localStorage.setItem("userName", _this.userEdit.userName);
            localStorage.setItem("currentUser", _this.userEdit.fullName);
            localStorage.setItem("level", _this.userEdit.userLevel);
            localStorage.setItem("email", _this.userEdit.email);
            _this.updateUserValues();
            _this.updateElement("userNameView", _this.userEdit.userName);
            _this.updateElement("fullNameView", _this.userEdit.fullName);
            _this.updateElement("userLevelView", _this.userEdit.userLevel);
            _this.updateElement("emailView", _this.userEdit.email);
        }, function (err) {
            var errMsg = "";
            switch (err.status) {
                case 400:
                    errMsg = "Please ensure that the email, user name, and/or full name are valid and not empty.";
                    break;
                case 403:
                    errMsg = "The user name and/or the email selected already exists. Please choose a different one.";
                    break;
                case 404:
                    errMsg = "The user name provided was not found. Please make sure your user name was not updated in another open window/tab/browser.";
                    break;
                case 500:
                    errMsg = "There was an error in processing the update. Please try again in a moment. If the problem persists, please contact an administrator.";
                    break;
                default:
                    errMsg = "There was an unknown error. Please try again";
            } //switch
            _this.openAlert(content);
            _this.setUpdateError(errMsg);
            errMsg = null;
        });
    };
    return UserAccount;
}());
UserAccount = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("./src/app/layout/account/account.component.html"),
        styles: [__webpack_require__("./src/app/layout/account/account.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_register_service__["a" /* RegisterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_services_jsEncryption_service__["a" /* JsEncryption */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_services_jsEncryption_service__["a" /* JsEncryption */]) === "function" && _c || Object])
], UserAccount);

var _a, _b, _c;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "./src/app/layout/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountModule", function() { return UserAccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_routing_module__ = __webpack_require__("./src/app/layout/account/account-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_component__ = __webpack_require__("./src/app/layout/account/account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserAccountModule = (function () {
    function UserAccountModule() {
    }
    return UserAccountModule;
}());
UserAccountModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__account_routing_module__["a" /* UserAccountRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__account_component__["a" /* UserAccount */],
        ]
    })
], UserAccountModule);

//# sourceMappingURL=account.module.js.map

/***/ })

});
//# sourceMappingURL=account.module.chunk.js.map