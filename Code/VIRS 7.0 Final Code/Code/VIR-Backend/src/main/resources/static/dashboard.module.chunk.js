webpackJsonp(["dashboard.module"],{

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/layout/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */] }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n\t<div class=\"row lg-view\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<ngb-carousel>\r\n\t\t\t\t<ng-template ngbSlide *ngFor=\"let slider of sliders\">\r\n\t\t\t\t\t<img class=\"img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\" width=\"100%\">\r\n\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t<h3>{{slider.label}}</h3>\r\n\t\t\t\t\t\t<p>{{slider.text}}</p>\r\n\t\t\t\t\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/text']\">Measure Readability</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ngb-carousel>\r\n\t\t</div>\r\n\t</div>\r\n    <div class=\"row sm-view\">\r\n\t\t<div class=\"col-md-12\">\r\n            <h2>Vocabulary In Reading Study</h2>\r\n\t\t\t\t<p>Analyzing one word at a time.</p>\r\n\t\t\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/text']\">Measure Readability</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<hr>\r\n\r\n    <!--Cards on main page - for more information look at shared/modules/stat component-->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-3 col-lg-6 margin-div\">\r\n\t\t\t<a [routerLink]=\"['/text']\">\r\n\t\t\t\t<app-stat [bgClass]=\"'card-primary'\" [icon]=\"'fa-keyboard-o'\"  [label]=\"'Upload Text'\" [data]=\"'Type Your Text'\" [url]=\"'/text'\"> </app-stat>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-3 col-lg-6 margin-div\">\r\n\t\t\t<a [routerLink]=\"['/doc']\">\r\n\t\t\t\t<app-stat [bgClass]=\"'card-info'\" [icon]=\"'fa-file-text'\"  [label]=\"'Upload Doc'\" [data]=\"'Microsoft Word'\" [url]=\"'/doc'\"></app-stat>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-3 col-lg-6 margin-div\">\r\n\t\t\t<a [routerLink]=\"['/pdf']\">\r\n\t\t\t\t<app-stat [bgClass]=\"'card-success'\" [icon]=\"'fa-file-pdf-o'\"  [label]=\"'Upload PDF'\" [data]=\"'PDF'\" [url]=\"'/pdf'\"></app-stat>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<div class=\"col-xl-3 col-lg-6 margin-div\">\r\n\t\t\t<a [routerLink]=\"['/image']\">\r\n\t\t\t\t<app-stat [bgClass]=\"'card-danger'\" [icon]=\"'fa-picture-o'\" [label]=\"'Upload Image'\" [data]=\"'JPEG, PNG'\" [url]=\"'/image'\"></app-stat>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".margin-div {\n  margin-top: 5px; }\n\n.padding-div {\n  padding: 5px; }\n\na {\n  text-decoration: none; }\n\n.lg-view {\n  display: inline-block;\n  width: 100%; }\n\n.sm-view {\n  display: none; }\n\n@media screen and (max-width: 600px) {\n  .lg-view {\n    display: none; }\n  .sm-view {\n    display: inline-block;\n    width: 100%;\n    background-image: url(\"data:image/jpeg;base64,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EAEBAQEBAQEBAQEAAAAAAAARARAAIBITAgMw/9oACAEBAAECAEMC5beMuB18qraqs61v9K2v0t/r6+n6fq/0t/r6+vr6+7/f19fX19v39/f19fV/v7v9/X193+/v7+/v7v8Ap9/f6ff393+/v7+/v7v+n39/pf8AT9Pv7+7/AKfp+k/v9Pu/6fp9/pf9P0/S/wCn6Y686qLrzrrzjbiu2684vW5bq5b1uK247blvOtvOLja4rzzrr1q49bdV69a4rtuvOurrry484uW2o9brzrjluO2867bbq+HHbefDbzq5bbrzlrj5decXXnFXHG1Mdedt163Ldeddtt15HrdcbVx563VRt1523XnFxtddt5163HL1r4cVcdeXlxecbcW3G1Hm3HXrdXnwvNriurj1u2627brjj1uOtvDzra65bjjtvOuK6vhxcet1cdXF1XLzlvm3Xrct8POW8648jzrzrr1uOuW46268jzri9bjyO28jfDzrr1uuW87br1uvOW7a+HF5x1x63W3n031btrjtvOtpjypzbiuuvOurtuvO284628PW68645bjrzriuriuO2q4uWrjjbrt5ceddbXHw85b1rjltqYuW9brr1uOuOLjbraj1uuKuKjbbtvNriu2684uNrrrzr1uO224rjy47by8+HnFxtcbXXXF51TrbdeVxXLzrzz1urtuuOPOO2vDzrzjrluO2864226vhx151t4W3F58L4txxy3XnHw85a2uOKjy486685br5dVxXret1xt5xtRXbet8N51155XHnbdecvW846vi3HHHXl63b1vi3W23LeR63XbecvKda686+rdeeuOK67bzr1uOrjztvW468uONvOuLbtr4cdt51cbXFXHbttuPN115y3V8PLjio87bet1xxx23nbdtdtXnnXFbcVFt163G3G3HXnFxXLbdedecctXHnHrddetedbecXLbXG155cdt51RXbedt1edt555xtdt1515x1tR63F5xcevW8uvOuNrq6247bzq4tuKuOrluPOuq4+HnHnXLbUet23nXLXrct15121218OuWt5xtRtt15x1tRbeecXG1115163HVx5y1ddety3bXnLXG1xbdt1y9b1uqdbbrzrrbl5111dt1515x1t4edt63HXLcdt51xtdbectx15121urzjrcLbddt1ddXnLedcXh63XnXG5bjrzrrbq+H1by4qPOvONuKltrjzzquLrzrzlu2urjy468vOr1uLja4qPLlu284qcu287btqda4vPOvh15163HW3h51tcXHHHbedcbXV28468628Nrirjq8K5bz5XXXlx5xceR52223Xy47bzrq6uPW648uKjbbrzi4qK48uK2uW26869bjq6uW9brr1rztrzjtrqvPLjr1uqLbrzrqnNuvOuO2687bzjq4869fb1rji8643rdtfDjdedXL1rjjjrttuvO264645b1u25bajzrzrjluOvOuXrbdcHnXLevONwevi3nFxtRtct8uuLrzreccbUxcV123nLdccdVx523XG3rcbUV23rdcbUV15xtxx8POvOW62487bzjrjy684uK4rq47b1urjbry5bq5a68669blvLzjy8uKj1uvW65bluO283XV1tx51y1XG1G23XnLzio2uOOOvLzbz1uKuOKmuPOu29a86rbi4262vPOuvW42otuvOuqNtuvW4245bluu29bjtrjzirjrlvLtvOuLbq7ecdedbcVxVx223G1x523Xrctt58PW648jzrzrjjjrztutuvm3HXnW3h63bety1xvIrjy5br4becett5xy1Tbcet1163HbXnHVct5HnXbetx5G23XnbdtTrzrzt1xx8Phy3Vx63F63HXl51t66uNriurjrzqnW27by5bq5a6864vOOOOuLlqj1uvW64447bzrttur4cXLVcXhXXnLdVLW68uOvLjzjtu3xfV9Xb4v/K/8bl83p19Xxcvm/8AC+r4vm+Ll8X1du33fH//xAAoEAABAwIFBQEAAwEAAAAAAAABAAIRQFIDMFCRkhAgUVNgQkNhcXD/2gAIAQEAAz8AR6nofKhFEIlf7v0PT/VPQ9P7K/s9T5KPlHyUfJR8lHyUfJ3R8ndHyd0fJ3R8ndE/oo+Tuj5O6Nzt0fJR8lHyd0fJ3R8ndO8ndOuO6dcd0fJ3TrjuneTuj5O6Pk7p1x3Trijcd0647o3Hcp1x3TrnblOH6dunXO3Kfc7cp1ztynH9O3Kdcd0647pw/R3TrnblOuduU8/p25Th+nblPuduU6525T7nblOuduU+525TrnblPuduU6525T73cin3u5FPvduU+925T73blPvdyKfe7kU+9/Ip97uRTx+38in3u5FPvfyKfe/kU+93Ip97uRT738in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\");\n    background-repeat: no-repeat;\n    color: white;\n    text-align: center;\n    font-size: larger;\n    padding-top: 20%;\n    padding-bottom: 20%;\n    padding-right: 10%;\n    padding-left: 10%;\n    margin: auto; }\n  /*\r\n    .margin-responsive {\r\n        margin-bottom: 120px;\r\n        margin-top: 150px;\r\n    }\r\n    */ }\n\n.carousel-caption {\n  bottom: 15%;\n  top: auto; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent() {
        this.alerts = [];
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/images/VIRS-1.jpg',
            label: 'Vocabulary in Reading Study',
            text: 'Analyzing one word at a time.'
        }, {
            imagePath: 'assets/images/VIRS-2.jpg',
            label: 'Statistics and Words',
            text: 'Detailed information and data representation of the word lists.'
        }, {
            imagePath: 'assets/images/VIRS-3.jpg',
            label: 'Word Lists',
            text: 'Information about the word is only a click away. '
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        //localStorage.removeItem("attempt");// use this to reset the values of the attempts.
        var attempt = [5, 5, 5, 5, 5, 5]; //FORMAT: [begginer, intermediate, upper_intermediate, advanced, vocab, WAT]
        if (localStorage.getItem("attempt") == null) {
            localStorage.setItem("attempt", JSON.stringify(attempt));
            console.log(JSON.parse(localStorage.getItem("attempt")));
        } //This will initialize the cookies to 5 if thwy are not set.
        //console.log(JSON.parse(localStorage.getItem("attempt"))[2]);//USe this to debug the LocalStorage key "attempt"
    };
    DashboardComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("./src/app/layout/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("./src/app/layout/dashboard/dashboard.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__ = __webpack_require__("./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["StatModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */],
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map