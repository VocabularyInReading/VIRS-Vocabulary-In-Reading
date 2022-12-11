webpackJsonp(["tests.module"],{

/***/ "./src/app/layout/tests/tests-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tests_component__ = __webpack_require__("./src/app/layout/tests/tests.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tests_component__["a" /* TestsComponent */] }
];
var TestsRoutingModule = (function () {
    function TestsRoutingModule() {
    }
    return TestsRoutingModule;
}());
TestsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], TestsRoutingModule);

//# sourceMappingURL=tests-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/tests/tests.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] class=\"container-fluid\">\r\n\r\n    <div class=\"card card-info card-inverse mb-3 col-lg-12 center-block\">\r\n        <div class=\"card-header card-info\">\r\n            <i class=\"fa fa-fw fa-pencil-square-o fa-3x float-right\" title=\"Test\"></i>\r\n            <h2>Test your Vocabulary!</h2>\r\n            <hr>\r\n            <div *ngIf=\"login\">\r\n                See how well your vocabulary is! Choose the category you desire, but we recommend starting from 'Beginner'.\r\n            </div>\r\n            <div *ngIf=\"!login\">\r\n                See how well your vocabulary is! Choose the category you desire, but we recommend starting from 'Beginner'.\r\n                Take in mind that you also have <strong>5</strong> attempts for each test if you are not a registered user.\r\n                <br />\r\n                Register <a href=\"../register\">Here</a> to have unlimited access to the tests. If you have an account, simply, log in to use this service without interruptions.\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <!--Category selection for quizes-->\r\n\r\n    <br>\r\n\r\n    <div>\r\n        <h3>Test Categories</h3>\r\n    </div>\r\n    <hr>\r\n    <!--Button for Desktop sized screens-->\r\n\r\n    <div class=\"hidden-sm-down\">\r\n        <div class=\"row\">\r\n            <div class=\"col col-md-4\">\r\n                <button routerLink=\"/tests/beginner\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-success btn-block btn-lg\">\r\n                    Beginner\r\n                </button>\r\n\r\n            </div>\r\n            <div class=\"col col-md-4\">\r\n                <button routerLink=\"/tests/intermediate\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-info btn-block btn-lg\">\r\n                    Intermediate\r\n                </button>\r\n            </div>\r\n            <div class=\"col col-md-4\">\r\n                <button routerLink=\"/tests/upper\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-primary btn-block btn-lg\">\r\n                    Upper Intermediate\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <hr />\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col col-md-4\">\r\n                <button routerLink=\"/tests/advanced\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-warning btn-block btn-lg\">\r\n                    Advanced\r\n                </button>\r\n            </div>\r\n            <div class=\"col col-md-4\">\r\n                <button class=\"btn btn-danger btn-block btn-lg\" routerLink=\"/tests/vocabA\" [routerLinkActive]=\"['router-link-active']\">\r\n                    Vocabulary Size Test A\r\n                </button>\r\n            </div>\r\n            <div class=\"col col-md-4\">\r\n                <button class=\"btn button1 btn-block btn-lg\" routerLink=\"/tests/vocabB\" [routerLinkActive]=\"['router-link-active']\">\r\n                    Vocabulary Size Test B\r\n                </button>\r\n            </div>\r\n            <!--div class=\"col col-md-4\">\r\n                <button routerLink=\"/tests/depth\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-primary btn-block btn-lg\" >{{smallLabel}}\r\n                </button>\r\n            </div-->\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!--Buttons for smaller screen sized-->\r\n    <div class=\"container-fluid hidden-md-up\" (window:resize)=\"onResize($event)\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-sm-6\">\r\n                <button routerLink=\"/tests/beginner\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-success btn-block btn-lg\">\r\n                    Beginner\r\n                </button>\r\n            </div>\r\n            <div class=\"container hidden-sm-up\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6\">\r\n                <button routerLink=\"/tests/intermediate\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-info btn-block btn-lg\">\r\n                    Intermediate\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <hr />\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-sm-6\">\r\n                <button routerLink=\"/tests/upper\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-primary btn-block btn-lg\">\r\n                    Upper Intermediate\r\n                </button>\r\n            </div>\r\n            <div class=\"container hidden-sm-up\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6\">\r\n                <button routerLink=\"/tests/advanced\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-warning btn-block btn-lg\">\r\n                    Advanced\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <hr />\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-sm-6\">\r\n                <button class=\"btn btn-danger btn-block btn-lg\" routerLink=\"/tests/vocabA\" [routerLinkActive]=\"['router-link-active']\">\r\n                    Vocabulary Size Test A\r\n                </button>\r\n            </div>\r\n            <div class=\"container hidden-sm-up\">\r\n                <hr />\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6\">\r\n                <button class=\"btn button1 btn-block btn-lg\" routerLink=\"/tests/vocabB\" [routerLinkActive]=\"['router-link-active']\">\r\n                    Vocabulary Size Test B\r\n                </button>\r\n            </div>\r\n\r\n            <!--div class=\"col-md-6 col-sm-6\">\r\n        <button routerLink=\"/tests/depth\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-primary btn-block btn-lg\">\r\n            {{smallLabel}}\r\n        </button>\r\n    </!-div--->\r\n        </div>\r\n    </div>\r\n\r\n    <!--This is the modal for the 2 versions of Vocab tests (ADD '(click)=\"open(content)' in the button tag if you want to have the two versions together)-->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4>\r\n                Choose Desired Version.\r\n            </h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <!--Alert-->\r\n            <div>\r\n                <a routerLink=\"/tests/vocabA\" [routerLinkActive]=\"['router-link-active']\"\r\n                   class=\"btn btn-warning btn-block btn-lg\" (click)=\"c('Close click')\">Version A</a>\r\n            </div>\r\n            <hr />\r\n            <div>\r\n                <a routerLink=\"/tests/vocabB\" [routerLinkActive]=\"['router-link-active']\"\r\n                   class=\"btn btn-primary btn-block btn-lg\" (click)=\"c('Close click')\">Version B</a>\r\n            </div>\r\n        </div>\r\n\r\n    </ng-template>\r\n\r\n    <hr />\r\n    <!--Instructions Boxes-->\r\n    <div>\r\n        <h3>Instructions</h3>\r\n    </div>\r\n\r\n    <div class=\"row topMargin\">\r\n\r\n        <div class=\"col-md box1\">\r\n            <div class=\"col-md-12 head\">\r\n                <i class=\"fa fa-calculator fa-3x\" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"head\">\r\n                    <h5>Select the level of dificulty</h5>\r\n                </div>\r\n\r\n                <hr>\r\n                <p>- Choose from the levels above.</p>\r\n                <p>- The levels are ordered from easy to hard.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md box2\">\r\n            <div class=\"col-md-12 head\">\r\n                <i class=\"fa fa-edit fa-3x \" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n                <div class=\"head\">\r\n                    <h5>Press \"Take the test!\"</h5>\r\n                </div>\r\n\r\n                <hr>\r\n                <p>- You will have 60 secs per question</p>\r\n                <p>- Choose the best answer for the question, then hit 'Check answer'.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md box3\">\r\n            <div class=\"col-md-12 head\">\r\n                <i class=\"fa fa-pie-chart fa-3x\" style=\"padding-bottom: 10px;\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"head\">\r\n                    <h5>Press \"Finish Test\"</h5>\r\n                </div>\r\n\r\n                <hr>\r\n                <p>- To end the current test and display your results.</p>\r\n                <p>- Once you are done, you can hit 'Done' to return to this page.</p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/tests/tests.component.scss":
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center; }\n\n.button1 {\n  background-color: royalblue;\n  color: white; }\n\n.box1 {\n  background-color: #FF7919;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: left;\n  padding-top: 35px;\n  border-radius: 8px; }\n\n.box2 {\n  background-color: #74D941;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: left;\n  padding-top: 35px;\n  border-radius: 8px; }\n\n.box3 {\n  background-color: #3D99F5;\n  min-height: 150px;\n  margin-right: 25px;\n  margin-left: 25px;\n  margin-top: 25px;\n  color: white;\n  text-align: left;\n  padding-top: 35px;\n  border-radius: 8px; }\n\n.head {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/layout/tests/tests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestsComponent = TestsComponent_1 = (function () {
    function TestsComponent(_modal) {
        this._modal = _modal;
        this.smallLabel = TestsComponent_1.SMALL_LABEL;
        this.login = false;
    }
    TestsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.displaySmall = window.innerWidth <= 1330;
        this.updaTeLabels();
        if (localStorage.getItem("currentUser") != null) {
            this.login = true;
        }
    };
    TestsComponent.prototype.onResize = function (event) {
        this.displaySmall = window.innerWidth <= 1330;
        this.updaTeLabels();
        event.target.innerWidth;
    };
    TestsComponent.prototype.updaTeLabels = function () {
        //this.smallLabel = this.displaySmall ? 'Depth of Vocab. Knowledge' : TestsComponent.SMALL_LABEL;
    };
    TestsComponent.prototype.open = function (content) {
        var _this = this;
        this._modal.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TestsComponent.prototype.getDismissReason = function (reason) {
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
    return TestsComponent;
}());
TestsComponent.SMALL_LABEL = 'WAT - Read (2017)';
TestsComponent = TestsComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tests',
        template: __webpack_require__("./src/app/layout/tests/tests.component.html"),
        styles: [__webpack_require__("./src/app/layout/tests/tests.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _a || Object])
], TestsComponent);

var TestsComponent_1, _a;
//# sourceMappingURL=tests.component.js.map

/***/ }),

/***/ "./src/app/layout/tests/tests.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsModule", function() { return TestsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tests_routing_module__ = __webpack_require__("./src/app/layout/tests/tests-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tests_component__ = __webpack_require__("./src/app/layout/tests/tests.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TestsModule = (function () {
    function TestsModule() {
    }
    return TestsModule;
}());
TestsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__tests_routing_module__["a" /* TestsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__tests_component__["a" /* TestsComponent */],
        ]
    })
], TestsModule);

//# sourceMappingURL=tests.module.js.map

/***/ })

});
//# sourceMappingURL=tests.module.chunk.js.map