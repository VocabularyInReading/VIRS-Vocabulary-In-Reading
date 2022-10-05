webpackJsonp(["beginner.module"],{

/***/ "./node_modules/angular2-uuid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UUID = (function () {
    function UUID() {
        // no-op
    }
    UUID.UUID = function () {
        if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else {
            // Otherwise, just use Math.random
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
            return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" +
                this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
    };
    UUID.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = "0" + ret;
        }
        return ret;
    };
    UUID.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-simple-timer/index.js":
/***/ (function(module, exports, __webpack_require__) {

exports.SimpleTimer = __webpack_require__("./node_modules/ng2-simple-timer/lib/simple-timer.js").SimpleTimer;


/***/ }),

/***/ "./node_modules/ng2-simple-timer/lib/simple-timer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var angular2_uuid_1 = __webpack_require__("./node_modules/angular2-uuid/index.js");
var SimpleTimer = (function () {
    function SimpleTimer() {
        this.timer = {};
        this.subscription = {};
    }
    SimpleTimer.prototype.getTimer = function () {
        return Object.keys(this.timer);
    };
    SimpleTimer.prototype.getSubscription = function () {
        return Object.keys(this.subscription);
    };
    SimpleTimer.prototype.newTimer = function (name, sec) {
        if (name === undefined || sec === undefined || this.timer[name]) {
            return false;
        }
        var o = Rx_1.Observable.timer(0, sec * 1000);
        this.timer[name] = { second: sec, observable: o };
        return true;
    };
    SimpleTimer.prototype.delTimer = function (name) {
        var _this = this;
        if (name === undefined || !this.timer[name]) {
            return false;
        }
        var s = this.getSubscription();
        s.forEach(function (i) {
            if (_this.subscription[i].name === name) {
                _this.unsubscribe(i);
            }
        });
        delete this.timer[name].observable;
        delete this.timer[name];
    };
    SimpleTimer.prototype.subscribe = function (name, callback) {
        if (!this.timer[name]) {
            return '';
        }
        var id = name + '-' + angular2_uuid_1.UUID.UUID();
        this.subscription[id] = {
            name: name,
            subscription: this.timer[name].observable.subscribe(callback)
        };
        return id;
    };
    SimpleTimer.prototype.unsubscribe = function (id) {
        if (!id || !this.subscription[id]) {
            return false;
        }
        this.subscription[id].subscription.unsubscribe();
        delete this.subscription[id];
    };
    return SimpleTimer;
}());
SimpleTimer = __decorate([
    core_1.Injectable()
], SimpleTimer);
exports.SimpleTimer = SimpleTimer;
//# sourceMappingURL=simple-timer.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm5/Rx.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operators", function() { return operators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return Symbol; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return __WEBPACK_IMPORTED_MODULE_0__Subject__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return __WEBPACK_IMPORTED_MODULE_0__Subject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return __WEBPACK_IMPORTED_MODULE_1__Observable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_observable_bindCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/bindCallback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_observable_bindNodeCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/bindNodeCallback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_observable_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_observable_defer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/defer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_observable_empty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_observable_fromEventPattern__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEventPattern.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_observable_generate__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/generate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_observable_if__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/if.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__add_observable_race__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_observable_never__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/never.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__add_observable_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/onErrorResumeNext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__add_observable_pairs__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/pairs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_observable_range__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/range.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__add_observable_using__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/using.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__add_observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__add_observable_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__add_observable_dom_ajax__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/dom/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__add_observable_dom_webSocket__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/dom/webSocket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__add_operator_buffer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__add_operator_bufferCount__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__add_operator_bufferTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__add_operator_bufferToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__add_operator_bufferWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__add_operator_combineAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/combineAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__add_operator_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__add_operator_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__add_operator_concatAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concatAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__add_operator_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__add_operator_concatMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concatMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__add_operator_count__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/count.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__add_operator_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/dematerialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__add_operator_debounce__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__add_operator_defaultIfEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/defaultIfEmpty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__add_operator_delayWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delayWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__add_operator_distinct__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinct.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__add_operator_distinctUntilKeyChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilKeyChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__add_operator_exhaust__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/exhaust.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__add_operator_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/exhaustMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__add_operator_expand__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/expand.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__add_operator_elementAt__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/elementAt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__add_operator_find__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/find.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__add_operator_findIndex__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/findIndex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__add_operator_groupBy__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/groupBy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__add_operator_ignoreElements__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/ignoreElements.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__add_operator_isEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/isEmpty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__add_operator_audit__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/audit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__add_operator_auditTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/auditTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__add_operator_last__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/last.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__add_operator_let__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__add_operator_every__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/every.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__add_operator_mapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__add_operator_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__add_operator_max__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__add_operator_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__add_operator_mergeAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__add_operator_mergeMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__add_operator_mergeScan__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeScan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__add_operator_min__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__add_operator_multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/multicast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__add_operator_observeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/observeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__add_operator_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/onErrorResumeNext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__add_operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__add_operator_partition__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/partition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__add_operator_pluck__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__add_operator_publish__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publish.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__add_operator_publishBehavior__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishBehavior.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__add_operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__add_operator_publishLast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__add_operator_race__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__add_operator_reduce__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/reduce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__add_operator_repeat__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/repeat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__add_operator_repeatWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/repeatWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__add_operator_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__add_operator_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retryWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__add_operator_sample__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/sample.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__add_operator_sampleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/sampleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__add_operator_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__add_operator_sequenceEqual__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/sequenceEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__add_operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/shareReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__add_operator_single__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/single.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__add_operator_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__add_operator_skipLast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__add_operator_skipUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__add_operator_skipWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__add_operator_subscribeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/subscribeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__add_operator_switch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__add_operator_switchMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__add_operator_takeLast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__add_operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__add_operator_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__add_operator_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/throttleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__add_operator_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeInterval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__add_operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__add_operator_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeoutWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__add_operator_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timestamp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__add_operator_toArray__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__add_operator_window__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/window.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__add_operator_windowCount__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__add_operator_windowTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__add_operator_windowToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__add_operator_windowWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__add_operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__add_operator_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__add_operator_zipAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/zipAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return __WEBPACK_IMPORTED_MODULE_131__Subscription__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return __WEBPACK_IMPORTED_MODULE_132__Subscriber__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__AsyncSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/AsyncSubject.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return __WEBPACK_IMPORTED_MODULE_133__AsyncSubject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return __WEBPACK_IMPORTED_MODULE_134__ReplaySubject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return __WEBPACK_IMPORTED_MODULE_135__BehaviorSubject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__observable_ConnectableObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ConnectableObservable.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return __WEBPACK_IMPORTED_MODULE_136__observable_ConnectableObservable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__Notification__ = __webpack_require__("./node_modules/rxjs/_esm5/Notification.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return __WEBPACK_IMPORTED_MODULE_137__Notification__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__util_EmptyError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/EmptyError.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return __WEBPACK_IMPORTED_MODULE_138__util_EmptyError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__util_ArgumentOutOfRangeError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/ArgumentOutOfRangeError.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return __WEBPACK_IMPORTED_MODULE_139__util_ArgumentOutOfRangeError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__util_ObjectUnsubscribedError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/ObjectUnsubscribedError.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return __WEBPACK_IMPORTED_MODULE_140__util_ObjectUnsubscribedError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__util_TimeoutError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/TimeoutError.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return __WEBPACK_IMPORTED_MODULE_141__util_TimeoutError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__util_UnsubscriptionError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/UnsubscriptionError.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return __WEBPACK_IMPORTED_MODULE_142__util_UnsubscriptionError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__operator_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeInterval.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TimeInterval", function() { return __WEBPACK_IMPORTED_MODULE_143__operator_timeInterval__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__operators_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timestamp.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return __WEBPACK_IMPORTED_MODULE_144__operators_timestamp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__testing_TestScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/TestScheduler.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TestScheduler", function() { return __WEBPACK_IMPORTED_MODULE_145__testing_TestScheduler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__scheduler_VirtualTimeScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/VirtualTimeScheduler.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return __WEBPACK_IMPORTED_MODULE_146__scheduler_VirtualTimeScheduler__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__observable_dom_AjaxObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/AjaxObservable.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxResponse", function() { return __WEBPACK_IMPORTED_MODULE_147__observable_dom_AjaxObservable__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxError", function() { return __WEBPACK_IMPORTED_MODULE_147__observable_dom_AjaxObservable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxTimeoutError", function() { return __WEBPACK_IMPORTED_MODULE_147__observable_dom_AjaxObservable__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__util_pipe__ = __webpack_require__("./node_modules/rxjs/_esm5/util/pipe.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return __WEBPACK_IMPORTED_MODULE_148__util_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__scheduler_asap__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/asap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__scheduler_queue__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/queue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__scheduler_animationFrame__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/animationFrame.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__symbol_rxSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/symbol/rxSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__symbol_iterator__ = __webpack_require__("./node_modules/rxjs/_esm5/symbol/iterator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__symbol_observable__ = __webpack_require__("./node_modules/rxjs/_esm5/symbol/observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
/** PURE_IMPORTS_START ._scheduler_asap,._scheduler_async,._scheduler_queue,._scheduler_animationFrame,._symbol_rxSubscriber,._symbol_iterator,._symbol_observable,._operators PURE_IMPORTS_END */

/* tslint:enable:no-unused-variable */


































































































































/* tslint:disable:no-unused-variable */


























var operators = __WEBPACK_IMPORTED_MODULE_156__operators__;
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: __WEBPACK_IMPORTED_MODULE_149__scheduler_asap__["a" /* asap */],
    queue: __WEBPACK_IMPORTED_MODULE_151__scheduler_queue__["a" /* queue */],
    animationFrame: __WEBPACK_IMPORTED_MODULE_152__scheduler_animationFrame__["a" /* animationFrame */],
    async: __WEBPACK_IMPORTED_MODULE_150__scheduler_async__["a" /* async */]
};
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: __WEBPACK_IMPORTED_MODULE_153__symbol_rxSubscriber__["a" /* rxSubscriber */],
    observable: __WEBPACK_IMPORTED_MODULE_155__symbol_observable__["a" /* observable */],
    iterator: __WEBPACK_IMPORTED_MODULE_154__symbol_iterator__["a" /* iterator */]
};

//# sourceMappingURL=Rx.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/bindCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_bindCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/bindCallback.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_bindCallback PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].bindCallback = __WEBPACK_IMPORTED_MODULE_1__observable_bindCallback__["a" /* bindCallback */];
//# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/bindNodeCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_bindNodeCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/bindNodeCallback.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_bindNodeCallback PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].bindNodeCallback = __WEBPACK_IMPORTED_MODULE_1__observable_bindNodeCallback__["a" /* bindNodeCallback */];
//# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/combineLatest.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_combineLatest PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].combineLatest = __WEBPACK_IMPORTED_MODULE_1__observable_combineLatest__["a" /* combineLatest */];
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/concat.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_concat PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].concat = __WEBPACK_IMPORTED_MODULE_1__observable_concat__["a" /* concat */];
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/defer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_defer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/defer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_defer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].defer = __WEBPACK_IMPORTED_MODULE_1__observable_defer__["a" /* defer */];
//# sourceMappingURL=defer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/dom/ajax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_dom_ajax__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/ajax.js");
/** PURE_IMPORTS_START .._.._.._Observable,.._.._.._observable_dom_ajax PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].ajax = __WEBPACK_IMPORTED_MODULE_1__observable_dom_ajax__["a" /* ajax */];
//# sourceMappingURL=ajax.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/dom/webSocket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_dom_webSocket__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/webSocket.js");
/** PURE_IMPORTS_START .._.._.._Observable,.._.._.._observable_dom_webSocket PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].webSocket = __WEBPACK_IMPORTED_MODULE_1__observable_dom_webSocket__["a" /* webSocket */];
//# sourceMappingURL=webSocket.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/empty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_empty__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/empty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_empty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].empty = __WEBPACK_IMPORTED_MODULE_1__observable_empty__["a" /* empty */];
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/forkJoin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/forkJoin.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_forkJoin PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].forkJoin = __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__["a" /* forkJoin */];
//# sourceMappingURL=forkJoin.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/from.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/from.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_from PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].from = __WEBPACK_IMPORTED_MODULE_1__observable_from__["a" /* from */];
//# sourceMappingURL=from.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/fromEvent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromEvent PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromEvent = __WEBPACK_IMPORTED_MODULE_1__observable_fromEvent__["a" /* fromEvent */];
//# sourceMappingURL=fromEvent.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/fromEventPattern.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromEventPattern__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEventPattern.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromEventPattern PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromEventPattern = __WEBPACK_IMPORTED_MODULE_1__observable_fromEventPattern__["a" /* fromEventPattern */];
//# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/fromPromise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromPromise.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromPromise PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromPromise = __WEBPACK_IMPORTED_MODULE_1__observable_fromPromise__["a" /* fromPromise */];
//# sourceMappingURL=fromPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/generate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_generate__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/generate.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_generate PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].generate = __WEBPACK_IMPORTED_MODULE_1__observable_generate__["a" /* generate */];
//# sourceMappingURL=generate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/if.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_if__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/if.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_if PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].if = __WEBPACK_IMPORTED_MODULE_1__observable_if__["a" /* _if */];
//# sourceMappingURL=if.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/interval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/interval.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_interval PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].interval = __WEBPACK_IMPORTED_MODULE_1__observable_interval__["a" /* interval */];
//# sourceMappingURL=interval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_merge PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].merge = __WEBPACK_IMPORTED_MODULE_1__observable_merge__["a" /* merge */];
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/never.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_never__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/never.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_never PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].never = __WEBPACK_IMPORTED_MODULE_1__observable_never__["a" /* never */];
//# sourceMappingURL=never.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_onErrorResumeNext PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_1__observable_onErrorResumeNext__["a" /* onErrorResumeNext */];
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/pairs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_pairs__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/pairs.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_pairs PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].pairs = __WEBPACK_IMPORTED_MODULE_1__observable_pairs__["a" /* pairs */];
//# sourceMappingURL=pairs.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_race__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/race.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_race PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].race = __WEBPACK_IMPORTED_MODULE_1__observable_race__["a" /* race */];
//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/range.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_range__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/range.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_range PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].range = __WEBPACK_IMPORTED_MODULE_1__observable_range__["a" /* range */];
//# sourceMappingURL=range.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/throw.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/throw.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_throw PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].throw = __WEBPACK_IMPORTED_MODULE_1__observable_throw__["a" /* _throw */];
//# sourceMappingURL=throw.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/timer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/timer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_timer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].timer = __WEBPACK_IMPORTED_MODULE_1__observable_timer__["a" /* timer */];
//# sourceMappingURL=timer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/using.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_using__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/using.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_using PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].using = __WEBPACK_IMPORTED_MODULE_1__observable_using__["a" /* using */];
//# sourceMappingURL=using.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/zip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_zip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].zip = __WEBPACK_IMPORTED_MODULE_1__observable_zip__["a" /* zip */];
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/audit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_audit__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/audit.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_audit PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.audit = __WEBPACK_IMPORTED_MODULE_1__operator_audit__["a" /* audit */];
//# sourceMappingURL=audit.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/auditTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_auditTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/auditTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_auditTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.auditTime = __WEBPACK_IMPORTED_MODULE_1__operator_auditTime__["a" /* auditTime */];
//# sourceMappingURL=auditTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_buffer__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/buffer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_buffer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.buffer = __WEBPACK_IMPORTED_MODULE_1__operator_buffer__["a" /* buffer */];
//# sourceMappingURL=buffer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferCount.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferCount PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferCount = __WEBPACK_IMPORTED_MODULE_1__operator_bufferCount__["a" /* bufferCount */];
//# sourceMappingURL=bufferCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferTime = __WEBPACK_IMPORTED_MODULE_1__operator_bufferTime__["a" /* bufferTime */];
//# sourceMappingURL=bufferTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferToggle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferToggle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferToggle = __WEBPACK_IMPORTED_MODULE_1__operator_bufferToggle__["a" /* bufferToggle */];
//# sourceMappingURL=bufferToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferWhen = __WEBPACK_IMPORTED_MODULE_1__operator_bufferWhen__["a" /* bufferWhen */];
//# sourceMappingURL=bufferWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/catch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/catch.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_catch PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.catch = __WEBPACK_IMPORTED_MODULE_1__operator_catch__["a" /* _catch */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._catch = __WEBPACK_IMPORTED_MODULE_1__operator_catch__["a" /* _catch */];
//# sourceMappingURL=catch.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/combineAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_combineAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/combineAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_combineAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.combineAll = __WEBPACK_IMPORTED_MODULE_1__operator_combineAll__["a" /* combineAll */];
//# sourceMappingURL=combineAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/combineLatest.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_combineLatest PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.combineLatest = __WEBPACK_IMPORTED_MODULE_1__operator_combineLatest__["a" /* combineLatest */];
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/concatAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concatAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatAll = __WEBPACK_IMPORTED_MODULE_1__operator_concatAll__["a" /* concatAll */];
//# sourceMappingURL=concatAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/concatMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concatMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatMap = __WEBPACK_IMPORTED_MODULE_1__operator_concatMap__["a" /* concatMap */];
//# sourceMappingURL=concatMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/concatMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concatMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_concatMapTo__["a" /* concatMapTo */];
//# sourceMappingURL=concatMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/count.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_count__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/count.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_count PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.count = __WEBPACK_IMPORTED_MODULE_1__operator_count__["a" /* count */];
//# sourceMappingURL=count.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounce__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/debounce.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounce PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounce = __WEBPACK_IMPORTED_MODULE_1__operator_debounce__["a" /* debounce */];
//# sourceMappingURL=debounce.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/debounceTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounceTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounceTime = __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__["a" /* debounceTime */];
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/defaultIfEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_defaultIfEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/defaultIfEmpty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_defaultIfEmpty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.defaultIfEmpty = __WEBPACK_IMPORTED_MODULE_1__operator_defaultIfEmpty__["a" /* defaultIfEmpty */];
//# sourceMappingURL=defaultIfEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/delay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/delay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_delay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.delay = __WEBPACK_IMPORTED_MODULE_1__operator_delay__["a" /* delay */];
//# sourceMappingURL=delay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/delayWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_delayWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/delayWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_delayWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.delayWhen = __WEBPACK_IMPORTED_MODULE_1__operator_delayWhen__["a" /* delayWhen */];
//# sourceMappingURL=delayWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/dematerialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/dematerialize.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_dematerialize PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.dematerialize = __WEBPACK_IMPORTED_MODULE_1__operator_dematerialize__["a" /* dematerialize */];
//# sourceMappingURL=dematerialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/distinct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinct__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/distinct.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinct PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinct = __WEBPACK_IMPORTED_MODULE_1__operator_distinct__["a" /* distinct */];
//# sourceMappingURL=distinct.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinctUntilChanged PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinctUntilChanged = __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__["a" /* distinctUntilChanged */];
//# sourceMappingURL=distinctUntilChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/distinctUntilKeyChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilKeyChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/distinctUntilKeyChanged.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinctUntilKeyChanged PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinctUntilKeyChanged = __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilKeyChanged__["a" /* distinctUntilKeyChanged */];
//# sourceMappingURL=distinctUntilKeyChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/elementAt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_elementAt__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/elementAt.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_elementAt PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.elementAt = __WEBPACK_IMPORTED_MODULE_1__operator_elementAt__["a" /* elementAt */];
//# sourceMappingURL=elementAt.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/every.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_every__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/every.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_every PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.every = __WEBPACK_IMPORTED_MODULE_1__operator_every__["a" /* every */];
//# sourceMappingURL=every.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/exhaust.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_exhaust__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/exhaust.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_exhaust PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.exhaust = __WEBPACK_IMPORTED_MODULE_1__operator_exhaust__["a" /* exhaust */];
//# sourceMappingURL=exhaust.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/exhaustMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/exhaustMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_exhaustMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.exhaustMap = __WEBPACK_IMPORTED_MODULE_1__operator_exhaustMap__["a" /* exhaustMap */];
//# sourceMappingURL=exhaustMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/expand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_expand__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/expand.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_expand PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.expand = __WEBPACK_IMPORTED_MODULE_1__operator_expand__["a" /* expand */];
//# sourceMappingURL=expand.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/filter.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_filter PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.filter = __WEBPACK_IMPORTED_MODULE_1__operator_filter__["a" /* filter */];
//# sourceMappingURL=filter.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/finally.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/finally.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_finally PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.finally = __WEBPACK_IMPORTED_MODULE_1__operator_finally__["a" /* _finally */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._finally = __WEBPACK_IMPORTED_MODULE_1__operator_finally__["a" /* _finally */];
//# sourceMappingURL=finally.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/find.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_find__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/find.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_find PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.find = __WEBPACK_IMPORTED_MODULE_1__operator_find__["a" /* find */];
//# sourceMappingURL=find.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/findIndex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_findIndex__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/findIndex.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_findIndex PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.findIndex = __WEBPACK_IMPORTED_MODULE_1__operator_findIndex__["a" /* findIndex */];
//# sourceMappingURL=findIndex.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/first.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/first.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_first PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.first = __WEBPACK_IMPORTED_MODULE_1__operator_first__["a" /* first */];
//# sourceMappingURL=first.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/groupBy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_groupBy__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/groupBy.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_groupBy PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.groupBy = __WEBPACK_IMPORTED_MODULE_1__operator_groupBy__["a" /* groupBy */];
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/ignoreElements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_ignoreElements__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/ignoreElements.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_ignoreElements PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.ignoreElements = __WEBPACK_IMPORTED_MODULE_1__operator_ignoreElements__["a" /* ignoreElements */];
//# sourceMappingURL=ignoreElements.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/isEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_isEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/isEmpty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_isEmpty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.isEmpty = __WEBPACK_IMPORTED_MODULE_1__operator_isEmpty__["a" /* isEmpty */];
//# sourceMappingURL=isEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/last.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_last__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/last.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_last PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.last = __WEBPACK_IMPORTED_MODULE_1__operator_last__["a" /* last */];
//# sourceMappingURL=last.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/let.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_let__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/let.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_let PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.let = __WEBPACK_IMPORTED_MODULE_1__operator_let__["a" /* letProto */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.letBind = __WEBPACK_IMPORTED_MODULE_1__operator_let__["a" /* letProto */];
//# sourceMappingURL=let.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mapTo__["a" /* mapTo */];
//# sourceMappingURL=mapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/materialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/materialize.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_materialize PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.materialize = __WEBPACK_IMPORTED_MODULE_1__operator_materialize__["a" /* materialize */];
//# sourceMappingURL=materialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_max__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/max.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_max PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.max = __WEBPACK_IMPORTED_MODULE_1__operator_max__["a" /* max */];
//# sourceMappingURL=max.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mergeAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeAll = __WEBPACK_IMPORTED_MODULE_1__operator_mergeAll__["a" /* mergeAll */];
//# sourceMappingURL=mergeAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mergeMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.flatMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
//# sourceMappingURL=mergeMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mergeMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.flatMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__["a" /* mergeMapTo */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__["a" /* mergeMapTo */];
//# sourceMappingURL=mergeMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mergeScan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeScan__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeScan.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeScan PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeScan = __WEBPACK_IMPORTED_MODULE_1__operator_mergeScan__["a" /* mergeScan */];
//# sourceMappingURL=mergeScan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_min__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/min.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_min PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.min = __WEBPACK_IMPORTED_MODULE_1__operator_min__["a" /* min */];
//# sourceMappingURL=min.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/multicast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/multicast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_multicast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.multicast = __WEBPACK_IMPORTED_MODULE_1__operator_multicast__["a" /* multicast */];
//# sourceMappingURL=multicast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/observeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_observeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/observeOn.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_observeOn PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.observeOn = __WEBPACK_IMPORTED_MODULE_1__operator_observeOn__["a" /* observeOn */];
//# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_onErrorResumeNext PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_1__operator_onErrorResumeNext__["a" /* onErrorResumeNext */];
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/pairwise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/pairwise.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_pairwise PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.pairwise = __WEBPACK_IMPORTED_MODULE_1__operator_pairwise__["a" /* pairwise */];
//# sourceMappingURL=pairwise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/partition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_partition__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/partition.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_partition PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.partition = __WEBPACK_IMPORTED_MODULE_1__operator_partition__["a" /* partition */];
//# sourceMappingURL=partition.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/pluck.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_pluck__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/pluck.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_pluck PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.pluck = __WEBPACK_IMPORTED_MODULE_1__operator_pluck__["a" /* pluck */];
//# sourceMappingURL=pluck.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publish.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publish__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publish.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publish PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publish = __WEBPACK_IMPORTED_MODULE_1__operator_publish__["a" /* publish */];
//# sourceMappingURL=publish.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publishBehavior.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishBehavior__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publishBehavior.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishBehavior PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishBehavior = __WEBPACK_IMPORTED_MODULE_1__operator_publishBehavior__["a" /* publishBehavior */];
//# sourceMappingURL=publishBehavior.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publishLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publishLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishLast = __WEBPACK_IMPORTED_MODULE_1__operator_publishLast__["a" /* publishLast */];
//# sourceMappingURL=publishLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publishReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publishReplay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishReplay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishReplay = __WEBPACK_IMPORTED_MODULE_1__operator_publishReplay__["a" /* publishReplay */];
//# sourceMappingURL=publishReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_race__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/race.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_race PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.race = __WEBPACK_IMPORTED_MODULE_1__operator_race__["a" /* race */];
//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/reduce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_reduce__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/reduce.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_reduce PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.reduce = __WEBPACK_IMPORTED_MODULE_1__operator_reduce__["a" /* reduce */];
//# sourceMappingURL=reduce.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/repeat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_repeat__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/repeat.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_repeat PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.repeat = __WEBPACK_IMPORTED_MODULE_1__operator_repeat__["a" /* repeat */];
//# sourceMappingURL=repeat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/repeatWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_repeatWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/repeatWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_repeatWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.repeatWhen = __WEBPACK_IMPORTED_MODULE_1__operator_repeatWhen__["a" /* repeatWhen */];
//# sourceMappingURL=repeatWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/retry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/retry.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_retry PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.retry = __WEBPACK_IMPORTED_MODULE_1__operator_retry__["a" /* retry */];
//# sourceMappingURL=retry.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/retryWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/retryWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_retryWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.retryWhen = __WEBPACK_IMPORTED_MODULE_1__operator_retryWhen__["a" /* retryWhen */];
//# sourceMappingURL=retryWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/sample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_sample__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/sample.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_sample PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.sample = __WEBPACK_IMPORTED_MODULE_1__operator_sample__["a" /* sample */];
//# sourceMappingURL=sample.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/sampleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_sampleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/sampleTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_sampleTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.sampleTime = __WEBPACK_IMPORTED_MODULE_1__operator_sampleTime__["a" /* sampleTime */];
//# sourceMappingURL=sampleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/scan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/scan.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_scan PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.scan = __WEBPACK_IMPORTED_MODULE_1__operator_scan__["a" /* scan */];
//# sourceMappingURL=scan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/sequenceEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_sequenceEqual__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/sequenceEqual.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_sequenceEqual PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.sequenceEqual = __WEBPACK_IMPORTED_MODULE_1__operator_sequenceEqual__["a" /* sequenceEqual */];
//# sourceMappingURL=sequenceEqual.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/shareReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/shareReplay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_shareReplay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.shareReplay = __WEBPACK_IMPORTED_MODULE_1__operator_shareReplay__["a" /* shareReplay */];
//# sourceMappingURL=shareReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_single__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/single.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_single PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.single = __WEBPACK_IMPORTED_MODULE_1__operator_single__["a" /* single */];
//# sourceMappingURL=single.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skip = __WEBPACK_IMPORTED_MODULE_1__operator_skip__["a" /* skip */];
//# sourceMappingURL=skip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skipLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skipLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipLast = __WEBPACK_IMPORTED_MODULE_1__operator_skipLast__["a" /* skipLast */];
//# sourceMappingURL=skipLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skipUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skipUntil.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipUntil PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipUntil = __WEBPACK_IMPORTED_MODULE_1__operator_skipUntil__["a" /* skipUntil */];
//# sourceMappingURL=skipUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skipWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skipWhile.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipWhile PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipWhile = __WEBPACK_IMPORTED_MODULE_1__operator_skipWhile__["a" /* skipWhile */];
//# sourceMappingURL=skipWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/startWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/startWith.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_startWith PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.startWith = __WEBPACK_IMPORTED_MODULE_1__operator_startWith__["a" /* startWith */];
//# sourceMappingURL=startWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_subscribeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/subscribeOn.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_subscribeOn PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.subscribeOn = __WEBPACK_IMPORTED_MODULE_1__operator_subscribeOn__["a" /* subscribeOn */];
//# sourceMappingURL=subscribeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switch__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/switch.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switch PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switch = __WEBPACK_IMPORTED_MODULE_1__operator_switch__["a" /* _switch */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._switch = __WEBPACK_IMPORTED_MODULE_1__operator_switch__["a" /* _switch */];
//# sourceMappingURL=switch.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/switchMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switchMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/switchMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switchMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switchMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_switchMapTo__["a" /* switchMapTo */];
//# sourceMappingURL=switchMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/takeLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/takeLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeLast = __WEBPACK_IMPORTED_MODULE_1__operator_takeLast__["a" /* takeLast */];
//# sourceMappingURL=takeLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/takeUntil.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeUntil PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeUntil = __WEBPACK_IMPORTED_MODULE_1__operator_takeUntil__["a" /* takeUntil */];
//# sourceMappingURL=takeUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/takeWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/takeWhile.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeWhile PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeWhile = __WEBPACK_IMPORTED_MODULE_1__operator_takeWhile__["a" /* takeWhile */];
//# sourceMappingURL=takeWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/throttle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_throttle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.throttle = __WEBPACK_IMPORTED_MODULE_1__operator_throttle__["a" /* throttle */];
//# sourceMappingURL=throttle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/throttleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/throttleTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_throttleTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.throttleTime = __WEBPACK_IMPORTED_MODULE_1__operator_throttleTime__["a" /* throttleTime */];
//# sourceMappingURL=throttleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timeInterval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeInterval.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeInterval PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeInterval = __WEBPACK_IMPORTED_MODULE_1__operator_timeInterval__["b" /* timeInterval */];
//# sourceMappingURL=timeInterval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeout.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeout PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeout = __WEBPACK_IMPORTED_MODULE_1__operator_timeout__["a" /* timeout */];
//# sourceMappingURL=timeout.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timeoutWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeoutWith.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeoutWith PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeoutWith = __WEBPACK_IMPORTED_MODULE_1__operator_timeoutWith__["a" /* timeoutWith */];
//# sourceMappingURL=timeoutWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timestamp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timestamp.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timestamp PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timestamp = __WEBPACK_IMPORTED_MODULE_1__operator_timestamp__["a" /* timestamp */];
//# sourceMappingURL=timestamp.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/toPromise.js":
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_window__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/window.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_window PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.window = __WEBPACK_IMPORTED_MODULE_1__operator_window__["a" /* window */];
//# sourceMappingURL=window.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowCount.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowCount PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowCount = __WEBPACK_IMPORTED_MODULE_1__operator_windowCount__["a" /* windowCount */];
//# sourceMappingURL=windowCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowTime = __WEBPACK_IMPORTED_MODULE_1__operator_windowTime__["a" /* windowTime */];
//# sourceMappingURL=windowTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowToggle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowToggle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowToggle = __WEBPACK_IMPORTED_MODULE_1__operator_windowToggle__["a" /* windowToggle */];
//# sourceMappingURL=windowToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowWhen = __WEBPACK_IMPORTED_MODULE_1__operator_windowWhen__["a" /* windowWhen */];
//# sourceMappingURL=windowWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/withLatestFrom.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_withLatestFrom PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.withLatestFrom = __WEBPACK_IMPORTED_MODULE_1__operator_withLatestFrom__["a" /* withLatestFrom */];
//# sourceMappingURL=withLatestFrom.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/zip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_zip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.zip = __WEBPACK_IMPORTED_MODULE_1__operator_zip__["a" /* zipProto */];
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/zipAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_zipAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/zipAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_zipAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.zipAll = __WEBPACK_IMPORTED_MODULE_1__operator_zipAll__["a" /* zipAll */];
//# sourceMappingURL=zipAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/BoundCallbackObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoundCallbackObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/AsyncSubject.js");
/** PURE_IMPORTS_START .._Observable,.._util_tryCatch,.._util_errorObject,.._AsyncSubject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundCallbackObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a callback API to a function that returns an Observable.
     *
     * <span class="informal">Give it a function `f` of type `f(x, callback)` and
     * it will return a function `g` that when called as `g(x)` will output an
     * Observable.</span>
     *
     * `bindCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, the
     * last parameter must be a callback function that `func` calls when it is
     * done.
     *
     * The output of `bindCallback` is a function that takes the same parameters
     * as `func`, except the last one (the callback). When the output function
     * is called with arguments it will return an Observable. If function `func`
     * calls its callback with one argument the Observable will emit that value.
     * If on the other hand the callback is called with multiple values the resulting
     * Observable will emit an array with said values as arguments.
     *
     * It is very important to remember that input function `func` is not called
     * when the output function is, but rather when the Observable returned by the output
     * function is subscribed. This means if `func` makes an AJAX request, that request
     * will be made every time someone subscribes to the resulting Observable, but not before.
     *
     * Optionally, a selector function can be passed to `bindObservable`. The selector function
     * takes the same arguments as the callback and returns the value that will be emitted by the Observable.
     * Even though by default multiple arguments passed to callback appear in the stream as an array
     * the selector function will be called with arguments directly, just as the callback would.
     * This means you can imagine the default selector (when one is not provided explicitly)
     * as a function that aggregates all its arguments into an array, or simply returns first argument
     * if there is only one.
     *
     * The last optional parameter - {@link Scheduler} - can be used to control when the call
     * to `func` happens after someone subscribes to Observable, as well as when results
     * passed to callback will be emitted. By default, the subscription to  an Observable calls `func`
     * synchronously, but using `Scheduler.async` as the last parameter will defer the call to `func`,
     * just like wrapping the call in `setTimeout` with a timeout of `0` would. If you use the async Scheduler
     * and call `subscribe` on the output Observable all function calls that are currently executing
     * will end before `func` is invoked.
     *
     * By default results passed to the callback are emitted immediately after `func` invokes the callback.
     * In particular, if the callback is called synchronously the subscription of the resulting Observable
     * will call the `next` function synchronously as well.  If you want to defer that call,
     * you may use `Scheduler.async` just as before.  This means that by using `Scheduler.async` you can
     * ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.
     *
     * Note that the Observable created by the output function will always emit a single value
     * and then complete immediately. If `func` calls the callback multiple times, values from subsequent
     * calls will not appear in the stream. If you need to listen for multiple calls,
     *  you probably want to use {@link fromEvent} or {@link fromEventPattern} instead.
     *
     * If `func` depends on some context (`this` property) and is not already bound the context of `func`
     * will be the context that the output function has at call time. In particular, if `func`
     * is called as a method of some objec and if `func` is not already bound, in order to preserve the context
     * it is recommended that the context of the output function is set to that object as well.
     *
     * If the input function calls its callback in the "node style" (i.e. first argument to callback is
     * optional error parameter signaling whether the call failed or not), {@link bindNodeCallback}
     * provides convenient error handling and probably is a better choice.
     * `bindCallback` will treat such functions the same as any other and error parameters
     * (whether passed or not) will always be interpreted as regular callback argument.
     *
     *
     * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
     * // Suppose we have jQuery.getJSON('/my/url', callback)
     * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
     * var result = getJSONAsObservable('/my/url');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Receive an array of arguments passed to a callback</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 5
     *   console.log(b); // 'some string'
     *   console.log(c); // {someProperty: 'someValue'}
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction);
     * boundSomeFunction().subscribe(values => {
     *   console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
     * });
     *
     *
     * @example <caption>Use bindCallback with a selector function</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 'a'
     *   console.log(b); // 'b'
     *   console.log(c); // 'c'
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction, (a, b, c) => a + b + c);
     * boundSomeFunction().subscribe(value => {
     *   console.log(value) // 'abc'
     * });
     *
     *
     * @example <caption>Compare behaviour with and without async Scheduler</caption>
     * function iCallMyCallbackSynchronously(cb) {
     *   cb();
     * }
     *
     * const boundSyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously);
     * const boundAsyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);
     *
     * boundSyncFn().subscribe(() => console.log('I was sync!'));
     * boundAsyncFn().subscribe(() => console.log('I was async!'));
     * console.log('This happened...');
     *
     * // Logs:
     * // I was sync!
     * // This happened...
     * // I was async!
     *
     *
     * @example <caption>Use bindCallback on an object method</caption>
     * const boundMethod = Rx.Observable.bindCallback(someObject.methodWithCallback);
     * boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
     * .subscribe(subscriber);
     *
     *
     * @see {@link bindNodeCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func A function with a callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps them to a value that is emitted on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the callback would deliver.
     * @static true
     * @name bindCallback
     * @owner Observable
     */
    BoundCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) {
            selector = undefined;
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    /** @deprecated internal use only */ BoundCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    if (selector) {
                        var result_1 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                        if (result_1 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                            subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(this.context, args.concat(handler));
                if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(BoundCallbackObservable.dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    BoundCallbackObservable.dispatch = function (state) {
        var self = this;
        var source = state.source, subscriber = state.subscriber, context = state.context;
        var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
        var subject = source.subject;
        if (!subject) {
            subject = source.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
            var handler = function handlerFn() {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i - 0] = arguments[_i];
                }
                var source = handlerFn.source;
                var selector = source.selector, subject = source.subject;
                if (selector) {
                    var result_2 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                    if (result_2 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                        self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
                    }
                    else {
                        self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                    }
                }
                else {
                    var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                    self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                }
            };
            // use named function to pass values in without closure
            handler.source = source;
            var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(context, args.concat(handler));
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        self.add(subject.subscribe(subscriber));
    };
    return BoundCallbackObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundCallbackObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/BoundNodeCallbackObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoundNodeCallbackObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/AsyncSubject.js");
/** PURE_IMPORTS_START .._Observable,.._util_tryCatch,.._util_errorObject,.._AsyncSubject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundNodeCallbackObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a Node.js-style callback API to a function that returns an
     * Observable.
     *
     * <span class="informal">It's just like {@link bindCallback}, but the
     * callback is expected to be of type `callback(error, result)`.</span>
     *
     * `bindNodeCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done. The callback function is expected to follow Node.js conventions,
     * where the first argument to the callback is an error object, signaling
     * whether call was successful. If that object is passed to callback, it means
     * something went wrong.
     *
     * The output of `bindNodeCallback` is a function that takes the same
     * parameters as `func`, except the last one (the callback). When the output
     * function is called with arguments, it will return an Observable.
     * If `func` calls its callback with error parameter present, Observable will
     * error with that value as well. If error parameter is not passed, Observable will emit
     * second parameter. If there are more parameters (third and so on),
     * Observable will emit an array with all arguments, except first error argument.
     *
     * Optionally `bindNodeCallback` accepts selector function, which allows you to
     * make resulting Observable emit value computed by selector, instead of regular
     * callback arguments. It works similarly to {@link bindCallback} selector, but
     * Node.js-style error argument will never be passed to that function.
     *
     * Note that `func` will not be called at the same time output function is,
     * but rather whenever resulting Observable is subscribed. By default call to
     * `func` will happen synchronously after subscription, but that can be changed
     * with proper {@link Scheduler} provided as optional third parameter. Scheduler
     * can also control when values from callback will be emitted by Observable.
     * To find out more, check out documentation for {@link bindCallback}, where
     * Scheduler works exactly the same.
     *
     * As in {@link bindCallback}, context (`this` property) of input function will be set to context
     * of returned function, when it is called.
     *
     * After Observable emits value, it will complete immediately. This means
     * even if `func` calls callback again, values from second and consecutive
     * calls will never appear on the stream. If you need to handle functions
     * that call callbacks multiple times, check out {@link fromEvent} or
     * {@link fromEventPattern} instead.
     *
     * Note that `bindNodeCallback` can be used in non-Node.js environments as well.
     * "Node.js-style" callbacks are just a convention, so if you write for
     * browsers or any other environment and API you use implements that callback style,
     * `bindNodeCallback` can be safely used on that API functions as well.
     *
     * Remember that Error object passed to callback does not have to be an instance
     * of JavaScript built-in `Error` object. In fact, it does not even have to an object.
     * Error parameter of callback function is interpreted as "present", when value
     * of that parameter is truthy. It could be, for example, non-zero number, non-empty
     * string or boolean `true`. In all of these cases resulting Observable would error
     * with that value. This means usually regular style callbacks will fail very often when
     * `bindNodeCallback` is used. If your Observable errors much more often then you
     * would expect, check if callback really is called in Node.js-style and, if not,
     * switch to {@link bindCallback} instead.
     *
     * Note that even if error parameter is technically present in callback, but its value
     * is falsy, it still won't appear in array emitted by Observable or in selector function.
     *
     *
     * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
     * import * as fs from 'fs';
     * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
     * var result = readFileAsObservable('./roadNames.txt', 'utf8');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Use on function calling callback with multiple arguments</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // null
     *   console.log(a); // 5
     *   console.log(b); // "some string"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // [5, "some string"]
     * });
     *
     *
     * @example <caption>Use with selector function</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // undefined
     *   console.log(a); // "abc"
     *   console.log(b); // "DEF"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction, (a, b) => a + b);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // "abcDEF"
     * });
     *
     *
     * @example <caption>Use on function calling callback in regular style</caption>
     * someFunction(a => {
     *   console.log(a); // 5
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(
     *   value => {}             // never gets called
     *   err => console.log(err) // 5
     *);
     *
     *
     * @see {@link bindCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a Node.js-style callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps those to a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the Node.js callback would
     * deliver.
     * @static true
     * @name bindNodeCallback
     * @owner Observable
     */
    BoundNodeCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) {
            selector = undefined;
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundNodeCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    /** @deprecated internal use only */ BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    var err = innerArgs.shift();
                    if (err) {
                        subject.error(err);
                    }
                    else if (selector) {
                        var result_1 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                        if (result_1 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                            subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(this.context, args.concat(handler));
                if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    return BoundNodeCallbackObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
function dispatch(state) {
    var self = this;
    var source = state.source, subscriber = state.subscriber, context = state.context;
    // XXX: cast to `any` to access to the private field in `source`.
    var _a = source, callbackFunc = _a.callbackFunc, args = _a.args, scheduler = _a.scheduler;
    var subject = source.subject;
    if (!subject) {
        subject = source.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
        var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector, subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
                self.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else if (selector) {
                var result_2 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                if (result_2 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
                }
                else {
                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                }
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        // use named function to pass values in without closure
        handler.source = source;
        var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(context, args.concat(handler));
        if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
        }
    }
    self.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundNodeCallbackObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/DeferObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeferObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Observable,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var DeferObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
        _super.call(this);
        this.observableFactory = observableFactory;
    }
    /**
     * Creates an Observable that, on subscribe, calls an Observable factory to
     * make an Observable for each new Observer.
     *
     * <span class="informal">Creates the Observable lazily, that is, only when it
     * is subscribed.
     * </span>
     *
     * <img src="./img/defer.png" width="100%">
     *
     * `defer` allows you to create the Observable only when the Observer
     * subscribes, and create a fresh Observable for each Observer. It waits until
     * an Observer subscribes to it, and then it generates an Observable,
     * typically with an Observable factory function. It does this afresh for each
     * subscriber, so although each subscriber may think it is subscribing to the
     * same Observable, in fact each subscriber gets its own individual
     * Observable.
     *
     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
     * var clicksOrInterval = Rx.Observable.defer(function () {
     *   if (Math.random() > 0.5) {
     *     return Rx.Observable.fromEvent(document, 'click');
     *   } else {
     *     return Rx.Observable.interval(1000);
     *   }
     * });
     * clicksOrInterval.subscribe(x => console.log(x));
     *
     * // Results in the following behavior:
     * // If the result of Math.random() is greater than 0.5 it will listen
     * // for clicks anywhere on the "document"; when document is clicked it
     * // will log a MouseEvent object to the console. If the result is less
     * // than 0.5 it will emit ascending numbers, one every second(1000ms).
     *
     * @see {@link create}
     *
     * @param {function(): SubscribableOrPromise} observableFactory The Observable
     * factory function to invoke for each Observer that subscribes to the output
     * Observable. May also return a Promise, which will be converted on the fly
     * to an Observable.
     * @return {Observable} An Observable whose Observers' subscriptions trigger
     * an invocation of the given Observable factory function.
     * @static true
     * @name defer
     * @owner Observable
     */
    DeferObservable.create = function (observableFactory) {
        return new DeferObservable(observableFactory);
    };
    /** @deprecated internal use only */ DeferObservable.prototype._subscribe = function (subscriber) {
        return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
var DeferSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
        _super.call(this, destination);
        this.factory = factory;
        this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function () {
        try {
            this._callFactory();
        }
        catch (err) {
            this._error(err);
        }
    };
    DeferSubscriber.prototype._callFactory = function () {
        var result = this.factory();
        if (result) {
            this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, result));
        }
    };
    return DeferSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=DeferObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/ErrorObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flatten numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    /** @deprecated internal use only */ ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        subscriber.syncErrorThrowable = true;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=ErrorObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/FromEventPatternObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromEventPatternObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isFunction__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/** PURE_IMPORTS_START .._util_isFunction,.._Observable,.._Subscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventPatternObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(FromEventPatternObservable, _super);
    function FromEventPatternObservable(addHandler, removeHandler, selector) {
        _super.call(this);
        this.addHandler = addHandler;
        this.removeHandler = removeHandler;
        this.selector = selector;
    }
    /**
     * Creates an Observable from an API based on addHandler/removeHandler
     * functions.
     *
     * <span class="informal">Converts any addHandler/removeHandler API to an
     * Observable.</span>
     *
     * <img src="./img/fromEventPattern.png" width="100%">
     *
     * Creates an Observable by using the `addHandler` and `removeHandler`
     * functions to add and remove the handlers, with an optional selector
     * function to project the event arguments to a result. The `addHandler` is
     * called when the output Observable is subscribed, and `removeHandler` is
     * called when the Subscription is unsubscribed.
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * function addClickHandler(handler) {
     *   document.addEventListener('click', handler);
     * }
     *
     * function removeClickHandler(handler) {
     *   document.removeEventListener('click', handler);
     * }
     *
     * var clicks = Rx.Observable.fromEventPattern(
     *   addClickHandler,
     *   removeClickHandler
     * );
     * clicks.subscribe(x => console.log(x));
     *
     * @see {@link from}
     * @see {@link fromEvent}
     *
     * @param {function(handler: Function): any} addHandler A function that takes
     * a `handler` function as argument and attaches it somehow to the actual
     * source of events.
     * @param {function(handler: Function, signal?: any): void} [removeHandler] An optional function that
     * takes a `handler` function as argument and removes it in case it was
     * previously attached using `addHandler`. if addHandler returns signal to teardown when remove,
     * removeHandler function will forward it.
     * @param {function(...args: any): T} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEventPattern
     * @owner Observable
     */
    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
        return new FromEventPatternObservable(addHandler, removeHandler, selector);
    };
    /** @deprecated internal use only */ FromEventPatternObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var removeHandler = this.removeHandler;
        var handler = !!this.selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            _this._callSelector(subscriber, args);
        } : function (e) { subscriber.next(e); };
        var retValue = this._callAddHandler(handler, subscriber);
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_isFunction__["a" /* isFunction */])(removeHandler)) {
            return;
        }
        subscriber.add(new __WEBPACK_IMPORTED_MODULE_2__Subscription__["a" /* Subscription */](function () {
            //TODO: determine whether or not to forward to error handler
            removeHandler(handler, retValue);
        }));
    };
    FromEventPatternObservable.prototype._callSelector = function (subscriber, args) {
        try {
            var result = this.selector.apply(this, args);
            subscriber.next(result);
        }
        catch (e) {
            subscriber.error(e);
        }
    };
    FromEventPatternObservable.prototype._callAddHandler = function (handler, errorSubscriber) {
        try {
            return this.addHandler(handler) || null;
        }
        catch (e) {
            errorSubscriber.error(e);
        }
    };
    return FromEventPatternObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));
//# sourceMappingURL=FromEventPatternObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/GenerateObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/** PURE_IMPORTS_START .._Observable,.._util_isScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var selfSelector = function (value) { return value; };
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var GenerateObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
        _super.call(this);
        this.initialState = initialState;
        this.condition = condition;
        this.iterate = iterate;
        this.resultSelector = resultSelector;
        this.scheduler = scheduler;
    }
    GenerateObservable.create = function (initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        if (arguments.length == 1) {
            return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
        }
        if (resultSelectorOrObservable === undefined || Object(__WEBPACK_IMPORTED_MODULE_1__util_isScheduler__["a" /* isScheduler */])(resultSelectorOrObservable)) {
            return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
        }
        return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    /** @deprecated internal use only */ GenerateObservable.prototype._subscribe = function (subscriber) {
        var state = this.initialState;
        if (this.scheduler) {
            return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
                subscriber: subscriber,
                iterate: this.iterate,
                condition: this.condition,
                resultSelector: this.resultSelector,
                state: state
            });
        }
        var _a = this, condition = _a.condition, resultSelector = _a.resultSelector, iterate = _a.iterate;
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        } while (true);
    };
    GenerateObservable.dispatch = function (state) {
        var subscriber = state.subscriber, condition = state.condition;
        if (subscriber.closed) {
            return;
        }
        if (state.needIterate) {
            try {
                state.state = state.iterate(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        }
        else {
            state.needIterate = true;
        }
        if (condition) {
            var conditionResult = void 0;
            try {
                conditionResult = condition(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            if (!conditionResult) {
                subscriber.complete();
                return;
            }
            if (subscriber.closed) {
                return;
            }
        }
        var value;
        try {
            value = state.resultSelector(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return;
        }
        if (subscriber.closed) {
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        return this.schedule(state);
    };
    return GenerateObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=GenerateObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/IfObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Observable,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IfObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IfObservable, _super);
    function IfObservable(condition, thenSource, elseSource) {
        _super.call(this);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
    }
    IfObservable.create = function (condition, thenSource, elseSource) {
        return new IfObservable(condition, thenSource, elseSource);
    };
    /** @deprecated internal use only */ IfObservable.prototype._subscribe = function (subscriber) {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        return new IfSubscriber(subscriber, condition, thenSource, elseSource);
    };
    return IfObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
var IfSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IfSubscriber, _super);
    function IfSubscriber(destination, condition, thenSource, elseSource) {
        _super.call(this, destination);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
        this.tryIf();
    }
    IfSubscriber.prototype.tryIf = function () {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        var result;
        try {
            result = condition();
            var source = result ? thenSource : elseSource;
            if (source) {
                this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, source));
            }
            else {
                this._complete();
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return IfSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=IfObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/IntervalObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntervalObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isNumeric__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/** PURE_IMPORTS_START .._util_isNumeric,.._Observable,.._scheduler_async PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) {
            period = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_isNumeric__["a" /* isNumeric */])(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified IScheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` IScheduler to provide a notion of time, but you may pass any
     * IScheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) {
            period = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    /** @deprecated internal use only */ IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));
//# sourceMappingURL=IntervalObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/NeverObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeverObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_noop__ = __webpack_require__("./node_modules/rxjs/_esm5/util/noop.js");
/** PURE_IMPORTS_START .._Observable,.._util_noop PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var NeverObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
        _super.call(this);
    }
    /**
     * Creates an Observable that emits no items to the Observer.
     *
     * <span class="informal">An Observable that never emits anything.</span>
     *
     * <img src="./img/never.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that emits
     * neither values nor errors nor the completion notification. It can be used
     * for testing purposes or for composing with other Observables. Please note
     * that by never emitting a complete notification, this Observable keeps the
     * subscription from being disposed automatically. Subscriptions need to be
     * manually disposed.
     *
     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
     * function info() {
     *   console.log('Will not be called');
     * }
     * var result = Rx.Observable.never().startWith(7);
     * result.subscribe(x => console.log(x), info, info);
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link of}
     * @see {@link throw}
     *
     * @return {Observable} A "never" Observable: never emits anything.
     * @static true
     * @name never
     * @owner Observable
     */
    NeverObservable.create = function () {
        return new NeverObservable();
    };
    /** @deprecated internal use only */ NeverObservable.prototype._subscribe = function (subscriber) {
        Object(__WEBPACK_IMPORTED_MODULE_1__util_noop__["a" /* noop */])();
    };
    return NeverObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=NeverObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/PairsObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PairsObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

function dispatch(state) {
    var obj = state.obj, keys = state.keys, length = state.length, index = state.index, subscriber = state.subscriber;
    if (index === length) {
        subscriber.complete();
        return;
    }
    var key = keys[index];
    subscriber.next([key, obj[key]]);
    state.index = index + 1;
    this.schedule(state);
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PairsObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(PairsObservable, _super);
    function PairsObservable(obj, scheduler) {
        _super.call(this);
        this.obj = obj;
        this.scheduler = scheduler;
        this.keys = Object.keys(obj);
    }
    /**
     * Convert an object into an observable sequence of [key, value] pairs
     * using an optional IScheduler to enumerate the object.
     *
     * @example <caption>Converts a javascript object to an Observable</caption>
     * var obj = {
     *   foo: 42,
     *   bar: 56,
     *   baz: 78
     * };
     *
     * var source = Rx.Observable.pairs(obj);
     *
     * var subscription = source.subscribe(
     *   function (x) {
     *     console.log('Next: %s', x);
     *   },
     *   function (err) {
     *     console.log('Error: %s', err);
     *   },
     *   function () {
     *     console.log('Completed');
     *   });
     *
     * @param {Object} obj The object to inspect and turn into an
     * Observable sequence.
     * @param {Scheduler} [scheduler] An optional IScheduler to run the
     * enumeration of the input sequence on.
     * @returns {(Observable<Array<string | T>>)} An observable sequence of
     * [key, value] pairs from the object.
     */
    PairsObservable.create = function (obj, scheduler) {
        return new PairsObservable(obj, scheduler);
    };
    /** @deprecated internal use only */ PairsObservable.prototype._subscribe = function (subscriber) {
        var _a = this, keys = _a.keys, scheduler = _a.scheduler;
        var length = keys.length;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                obj: this.obj, keys: keys, length: length, index: 0, subscriber: subscriber
            });
        }
        else {
            for (var idx = 0; idx < length; idx++) {
                var key = keys[idx];
                subscriber.next([key, this.obj[key]]);
            }
            subscriber.complete();
        }
    };
    return PairsObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=PairsObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/RangeObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var RangeObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
        _super.call(this);
        this.start = start;
        this._count = count;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits a sequence of numbers within a specified
     * range.
     *
     * <span class="informal">Emits a sequence of numbers in a range.</span>
     *
     * <img src="./img/range.png" width="100%">
     *
     * `range` operator emits a range of sequential integers, in order, where you
     * select the `start` of the range and its `length`. By default, uses no
     * IScheduler and just delivers the notifications synchronously, but may use
     * an optional IScheduler to regulate those deliveries.
     *
     * @example <caption>Emits the numbers 1 to 10</caption>
     * var numbers = Rx.Observable.range(1, 10);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link interval}
     *
     * @param {number} [start=0] The value of the first integer in the sequence.
     * @param {number} [count=0] The number of sequential integers to generate.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emissions of the notifications.
     * @return {Observable} An Observable of numbers that emits a finite range of
     * sequential integers.
     * @static true
     * @name range
     * @owner Observable
     */
    RangeObservable.create = function (start, count, scheduler) {
        if (start === void 0) {
            start = 0;
        }
        if (count === void 0) {
            count = 0;
        }
        return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function (state) {
        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    };
    /** @deprecated internal use only */ RangeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var start = this.start;
        var count = this._count;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(RangeObservable.dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(start++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
    };
    return RangeObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=RangeObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/SubscribeOnObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeOnObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/asap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isNumeric__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isNumeric.js");
/** PURE_IMPORTS_START .._Observable,.._scheduler_asap,.._util_isNumeric PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var SubscribeOnObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) {
            delayTime = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
        _super.call(this);
        this.source = source;
        this.delayTime = delayTime;
        this.scheduler = scheduler;
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__util_isNumeric__["a" /* isNumeric */])(delayTime) || delayTime < 0) {
            this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
        if (delay === void 0) {
            delay = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
    };
    /** @deprecated internal use only */ SubscribeOnObservable.prototype._subscribe = function (subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=SubscribeOnObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/UsingObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsingObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Observable,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var UsingObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(UsingObservable, _super);
    function UsingObservable(resourceFactory, observableFactory) {
        _super.call(this);
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
    }
    UsingObservable.create = function (resourceFactory, observableFactory) {
        return new UsingObservable(resourceFactory, observableFactory);
    };
    /** @deprecated internal use only */ UsingObservable.prototype._subscribe = function (subscriber) {
        var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
        var resource;
        try {
            resource = resourceFactory();
            return new UsingSubscriber(subscriber, resource, observableFactory);
        }
        catch (err) {
            subscriber.error(err);
        }
    };
    return UsingObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
var UsingSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(UsingSubscriber, _super);
    function UsingSubscriber(destination, resource, observableFactory) {
        _super.call(this, destination);
        this.resource = resource;
        this.observableFactory = observableFactory;
        destination.add(resource);
        this.tryUse();
    }
    UsingSubscriber.prototype.tryUse = function () {
        try {
            var source = this.observableFactory.call(this, this.resource);
            if (source) {
                this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, source));
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return UsingSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=UsingObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/bindCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindCallback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundCallbackObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/BoundCallbackObservable.js");
/** PURE_IMPORTS_START ._BoundCallbackObservable PURE_IMPORTS_END */

var bindCallback = __WEBPACK_IMPORTED_MODULE_0__BoundCallbackObservable__["a" /* BoundCallbackObservable */].create;
//# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/bindNodeCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindNodeCallback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundNodeCallbackObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/BoundNodeCallbackObservable.js");
/** PURE_IMPORTS_START ._BoundNodeCallbackObservable PURE_IMPORTS_END */

var bindNodeCallback = __WEBPACK_IMPORTED_MODULE_0__BoundNodeCallbackObservable__["a" /* BoundNodeCallbackObservable */].create;
//# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isArray__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ArrayObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ArrayObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineLatest.js");
/** PURE_IMPORTS_START .._util_isScheduler,.._util_isArray,._ArrayObservable,.._operators_combineLatest PURE_IMPORTS_END */




/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from all the Observables passed as
 * arguments. This is done by subscribing to each Observable in order and,
 * whenever any Observable emits, collecting an array of the most recent
 * values from each Observable. So if you pass `n` Observables to operator,
 * returned Observable will always emit an array of `n` values, in order
 * corresponding to order of passed Observables (value from the first Observable
 * on the first place and so on).
 *
 * Static version of `combineLatest` accepts either an array of Observables
 * or each Observable can be put directly as an argument. Note that array of
 * Observables is good choice, if you don't know beforehand how many Observables
 * you will combine. Passing empty array will result in Observable that
 * completes immediately.
 *
 * To ensure output array has always the same length, `combineLatest` will
 * actually wait for all input Observables to emit at least once,
 * before it starts emitting results. This means if some Observable emits
 * values before other Observables started emitting, all that values but last
 * will be lost. On the other hand, is some Observable does not emit value but
 * completes, resulting Observable will complete at the same moment without
 * emitting anything, since it will be now impossible to include value from
 * completed Observable in resulting array. Also, if some input Observable does
 * not emit any value and never completes, `combineLatest` will also never emit
 * and never complete, since, again, it will wait for all streams to emit some
 * value.
 *
 * If at least one Observable was passed to `combineLatest` and all passed Observables
 * emitted something, resulting Observable will complete when all combined
 * streams complete. So even if some Observable completes, result of
 * `combineLatest` will still emit values when other Observables do. In case
 * of completed Observable, its value from now on will always be the last
 * emitted value. On the other hand, if any Observable errors, `combineLatest`
 * will error immediately as well, and all other Observables will be unsubscribed.
 *
 * `combineLatest` accepts as optional parameter `project` function, which takes
 * as arguments all values that would normally be emitted by resulting Observable.
 * `project` can return any kind of value, which will be then emitted by Observable
 * instead of default array. Note that `project` does not take as argument that array
 * of values, but values themselves. That means default `project` can be imagined
 * as function that takes all its arguments and puts them into an array.
 *
 *
 * @example <caption>Combine two timer Observables</caption>
 * const firstTimer = Rx.Observable.timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
 * const secondTimer = Rx.Observable.timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
 * const combinedTimers = Rx.Observable.combineLatest(firstTimer, secondTimer);
 * combinedTimers.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0] after 0.5s
 * // [1, 0] after 1s
 * // [1, 1] after 1.5s
 * // [2, 1] after 2s
 *
 *
 * @example <caption>Combine an array of Observables</caption>
 * const observables = [1, 5, 10].map(
 *   n => Rx.Observable.of(n).delay(n * 1000).startWith(0) // emit 0 and then emit n after n seconds
 * );
 * const combined = Rx.Observable.combineLatest(observables);
 * combined.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0, 0] immediately
 * // [1, 0, 0] after 1s
 * // [1, 5, 0] after 5s
 * // [1, 5, 10] after 10s
 *
 *
 * @example <caption>Use project function to dynamically calculate the Body-Mass Index</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} observable1 An input Observable to combine with other Observables.
 * @param {ObservableInput} observable2 An input Observable to combine with other Observables.
 * More than one input Observables may be given as arguments
 * or an array of Observables may be given as the first argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each input Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @static true
 * @name combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (Object(__WEBPACK_IMPORTED_MODULE_0__util_isScheduler__["a" /* isScheduler */])(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_1__util_isArray__["a" /* isArray */])(observables[0])) {
        observables = observables[0];
    }
    return new __WEBPACK_IMPORTED_MODULE_2__ArrayObservable__["a" /* ArrayObservable */](observables, scheduler).lift(new __WEBPACK_IMPORTED_MODULE_3__operators_combineLatest__["a" /* CombineLatestOperator */](project));
}
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/defer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DeferObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/DeferObservable.js");
/** PURE_IMPORTS_START ._DeferObservable PURE_IMPORTS_END */

var defer = __WEBPACK_IMPORTED_MODULE_0__DeferObservable__["a" /* DeferObservable */].create;
//# sourceMappingURL=defer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/AjaxObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ajaxGet */
/* unused harmony export ajaxPost */
/* unused harmony export ajaxDelete */
/* unused harmony export ajaxPut */
/* unused harmony export ajaxPatch */
/* unused harmony export ajaxGetJSON */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AjaxObservable; });
/* unused harmony export AjaxSubscriber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AjaxResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjaxError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AjaxTimeoutError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/** PURE_IMPORTS_START .._.._util_root,.._.._util_tryCatch,.._.._util_errorObject,.._.._Observable,.._.._Subscriber,.._.._operators_map PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






function getCORSRequest() {
    if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest();
    }
    else if (!!__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest();
    }
    else {
        var progId = void 0;
        try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (var i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers) {
    if (headers === void 0) {
        headers = null;
    }
    return new AjaxObservable({ method: 'GET', url: url, headers: headers });
}
;
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
}
;
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
}
;
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
}
;
function ajaxPatch(url, body, headers) {
    return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
}
;
var mapResponse = /*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_5__operators_map__["a" /* map */])(function (x, index) { return x.response; });
function ajaxGetJSON(url, headers) {
    return mapResponse(new AjaxObservable({
        method: 'GET',
        url: url,
        responseType: 'json',
        headers: headers
    }));
}
;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var AjaxObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
        _super.call(this);
        var request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
            },
            crossDomain: false,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (var prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    /** @deprecated internal use only */ AjaxObservable.prototype._subscribe = function (subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    };
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * @example
     * source = Rx.Observable.ajax('/products');
     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
    */
    AjaxObservable.create = (function () {
        var create = function (urlOrRequest) {
            return new AjaxObservable(urlOrRequest);
        };
        create.get = ajaxGet;
        create.post = ajaxPost;
        create.delete = ajaxDelete;
        create.put = ajaxPut;
        create.patch = ajaxPatch;
        create.getJSON = ajaxGetJSON;
        return create;
    })();
    return AjaxObservable;
}(__WEBPACK_IMPORTED_MODULE_3__Observable__["a" /* Observable */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AjaxSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
        _super.call(this, destination);
        this.request = request;
        this.done = false;
        var headers = request.headers = request.headers || {};
        // force CORS if requested
        if (!request.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        // ensure content type is set
        if (!('Content-Type' in headers) && !(__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData && request.body instanceof __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        // properly serialize body
        request.body = this.serializeBody(request.body, request.headers['Content-Type']);
        this.send();
    }
    AjaxSubscriber.prototype.next = function (e) {
        this.done = true;
        var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
        var response = new AjaxResponse(e, xhr, request);
        destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
        var createXHR = request.createXHR;
        var xhr = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(createXHR).call(request);
        if (xhr === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
        }
        else {
            this.xhr = xhr;
            // set up the events before open XHR
            // https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
            // You need to add the event listeners before calling open() on the request.
            // Otherwise the progress events will not fire.
            this.setupEvents(xhr, request);
            // open XHR
            var result = void 0;
            if (user) {
                result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.open).call(xhr, method, url, async, user, password);
            }
            else {
                result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.open).call(xhr, method, url, async);
            }
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                return null;
            }
            // timeout, responseType and withCredentials can be set once the XHR is open
            if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
            }
            if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
            }
            // set headers
            this.setHeaders(xhr, headers);
            // finally send the request
            result = body ? Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.send).call(xhr, body) : Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.send).call(xhr);
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                return null;
            }
        }
        return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData && body instanceof __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData) {
            return body;
        }
        if (contentType) {
            var splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) { return (encodeURIComponent(key) + "=" + encodeURIComponent(body[key])); }).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
        var progressSubscriber = request.progressSubscriber;
        function xhrTimeout(e) {
            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
        }
        ;
        xhr.ontimeout = xhrTimeout;
        xhrTimeout.request = request;
        xhrTimeout.subscriber = this;
        xhrTimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr) {
            if (progressSubscriber) {
                var xhrProgress_1;
                xhrProgress_1 = function (e) {
                    var progressSubscriber = xhrProgress_1.progressSubscriber;
                    progressSubscriber.next(e);
                };
                if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest) {
                    xhr.onprogress = xhrProgress_1;
                }
                else {
                    xhr.upload.onprogress = xhrProgress_1;
                }
                xhrProgress_1.progressSubscriber = progressSubscriber;
            }
            var xhrError_1;
            xhrError_1 = function (e) {
                var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxError('ajax error', this, request));
            };
            xhr.onerror = xhrError_1;
            xhrError_1.request = request;
            xhrError_1.subscriber = this;
            xhrError_1.progressSubscriber = progressSubscriber;
        }
        function xhrReadyStateChange(e) {
            var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (this.readyState === 4) {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status_1 = this.status === 1223 ? 204 : this.status;
                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status_1 === 0) {
                    status_1 = response ? 200 : 0;
                }
                if (200 <= status_1 && status_1 < 300) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                }
            }
        }
        ;
        xhr.onreadystatechange = xhrReadyStateChange;
        xhrReadyStateChange.subscriber = this;
        xhrReadyStateChange.progressSubscriber = progressSubscriber;
        xhrReadyStateChange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
        var _a = this, done = _a.done, xhr = _a.xhr;
        if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
            xhr.abort();
        }
        _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
}(__WEBPACK_IMPORTED_MODULE_4__Subscriber__["a" /* Subscriber */]));
/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
var AjaxResponse = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function AjaxResponse(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxResponse;
}());
/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
var AjaxError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
        _super.call(this, message);
        this.message = message;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxError;
}(Error));
function parseXhrResponse(responseType, xhr) {
    switch (responseType) {
        case 'json':
            if ('response' in xhr) {
                //IE does not support json as responseType, parse it internally
                return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
            }
            else {
                // HACK(benlesh): TypeScript shennanigans
                // tslint:disable-next-line:no-any latest TS seems to think xhr is "never" here.
                return JSON.parse(xhr.responseText || 'null');
            }
        case 'xml':
            return xhr.responseXML;
        case 'text':
        default:
            // HACK(benlesh): TypeScript shennanigans
            // tslint:disable-next-line:no-any latest TS seems to think xhr is "never" here.
            return ('response' in xhr) ? xhr.response : xhr.responseText;
    }
}
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
var AjaxTimeoutError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
        _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
}(AjaxError));
//# sourceMappingURL=AjaxObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/WebSocketSubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_assign__ = __webpack_require__("./node_modules/rxjs/_esm5/util/assign.js");
/** PURE_IMPORTS_START .._.._Subject,.._.._Subscriber,.._.._Observable,.._.._Subscription,.._.._util_root,.._.._ReplaySubject,.._.._util_tryCatch,.._.._util_errorObject,.._.._util_assign PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};









/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var WebSocketSubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        if (urlConfigOrSource instanceof __WEBPACK_IMPORTED_MODULE_2__Observable__["a" /* Observable */]) {
            _super.call(this, destination, urlConfigOrSource);
        }
        else {
            _super.call(this);
            this.WebSocketCtor = __WEBPACK_IMPORTED_MODULE_4__util_root__["a" /* root */].WebSocket;
            this._output = new __WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]();
            if (typeof urlConfigOrSource === 'string') {
                this.url = urlConfigOrSource;
            }
            else {
                // WARNING: config object could override important members here.
                Object(__WEBPACK_IMPORTED_MODULE_8__util_assign__["a" /* assign */])(this, urlConfigOrSource);
            }
            if (!this.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
    }
    WebSocketSubject.prototype.resultSelector = function (e) {
        return JSON.parse(e.data);
    };
    /**
     * Wrapper around the w3c-compatible WebSocket object provided by the browser.
     *
     * @example <caption>Wraps browser WebSocket</caption>
     *
     * let socket$ = Observable.webSocket('ws://localhost:8081');
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @example <caption>Wraps WebSocket from nodejs-websocket (using node.js)</caption>
     *
     * import { w3cwebsocket } from 'websocket';
     *
     * let socket$ = Observable.webSocket({
     *   url: 'ws://localhost:8081',
     *   WebSocketCtor: w3cwebsocket
     * });
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @param {string | WebSocketSubjectConfig} urlConfigOrSource the source of the websocket as an url or a structure defining the websocket object
     * @return {WebSocketSubject}
     * @static true
     * @name webSocket
     * @owner Observable
     */
    WebSocketSubject.create = function (urlConfigOrSource) {
        return new WebSocketSubject(urlConfigOrSource);
    };
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this, this.destination);
        sock.operator = operator;
        return sock;
    };
    WebSocketSubject.prototype._resetState = function () {
        this.socket = null;
        if (!this.source) {
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
        this._output = new __WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]();
    };
    // TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new __WEBPACK_IMPORTED_MODULE_2__Observable__["a" /* Observable */](function (observer) {
            var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(subMsg)();
            if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                self.next(result);
            }
            var subscription = self.subscribe(function (x) {
                var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(messageFilter)(x);
                if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                    observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
                }
                else if (result) {
                    observer.next(x);
                }
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
            return function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(unsubMsg)();
                if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                    observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
                }
                else {
                    self.next(result);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var WebSocketCtor = this.WebSocketCtor;
        var observer = this._output;
        var socket = null;
        try {
            socket = this.protocol ?
                new WebSocketCtor(this.url, this.protocol) :
                new WebSocketCtor(this.url);
            this.socket = socket;
            if (this.binaryType) {
                this.socket.binaryType = this.binaryType;
            }
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new __WEBPACK_IMPORTED_MODULE_3__Subscription__["a" /* Subscription */](function () {
            _this.socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (e) {
            var openObserver = _this.openObserver;
            if (openObserver) {
                openObserver.next(e);
            }
            var queue = _this.destination;
            _this.destination = __WEBPACK_IMPORTED_MODULE_1__Subscriber__["a" /* Subscriber */].create(function (x) { return socket.readyState === 1 && socket.send(x); }, function (e) {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (e && e.code) {
                    socket.close(e.code, e.reason);
                }
                else {
                    observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' +
                        'and an optional reason: { code: number, reason: string }'));
                }
                _this._resetState();
            }, function () {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this._resetState();
            });
            if (queue && queue instanceof __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) {
            _this._resetState();
            observer.error(e);
        };
        socket.onclose = function (e) {
            _this._resetState();
            var closeObserver = _this.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(_this.resultSelector)(e);
            if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                observer.next(result);
            }
        };
    };
    /** @deprecated internal use only */ WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this.socket) {
            this._connectSocket();
        }
        var subscription = new __WEBPACK_IMPORTED_MODULE_3__Subscription__["a" /* Subscription */]();
        subscription.add(this._output.subscribe(subscriber));
        subscription.add(function () {
            var socket = _this.socket;
            if (_this._output.observers.length === 0) {
                if (socket && socket.readyState === 1) {
                    socket.close();
                }
                _this._resetState();
            }
        });
        return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _a = this, source = _a.source, socket = _a.socket;
        if (socket && socket.readyState === 1) {
            socket.close();
            this._resetState();
        }
        _super.prototype.unsubscribe.call(this);
        if (!source) {
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
    };
    return WebSocketSubject;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* AnonymousSubject */]));
//# sourceMappingURL=WebSocketSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/ajax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ajax; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AjaxObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/AjaxObservable.js");
/** PURE_IMPORTS_START ._AjaxObservable PURE_IMPORTS_END */

var ajax = __WEBPACK_IMPORTED_MODULE_0__AjaxObservable__["b" /* AjaxObservable */].create;
//# sourceMappingURL=ajax.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/webSocket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return webSocket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WebSocketSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/WebSocketSubject.js");
/** PURE_IMPORTS_START ._WebSocketSubject PURE_IMPORTS_END */

var webSocket = __WEBPACK_IMPORTED_MODULE_0__WebSocketSubject__["a" /* WebSocketSubject */].create;
//# sourceMappingURL=webSocket.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/empty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return empty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EmptyObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/EmptyObservable.js");
/** PURE_IMPORTS_START ._EmptyObservable PURE_IMPORTS_END */

var empty = __WEBPACK_IMPORTED_MODULE_0__EmptyObservable__["a" /* EmptyObservable */].create;
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/fromEventPattern.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromEventPattern; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FromEventPatternObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/FromEventPatternObservable.js");
/** PURE_IMPORTS_START ._FromEventPatternObservable PURE_IMPORTS_END */

var fromEventPattern = __WEBPACK_IMPORTED_MODULE_0__FromEventPatternObservable__["a" /* FromEventPatternObservable */].create;
//# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/generate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GenerateObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/GenerateObservable.js");
/** PURE_IMPORTS_START ._GenerateObservable PURE_IMPORTS_END */

var generate = __WEBPACK_IMPORTED_MODULE_0__GenerateObservable__["a" /* GenerateObservable */].create;
//# sourceMappingURL=generate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/if.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _if; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IfObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/IfObservable.js");
/** PURE_IMPORTS_START ._IfObservable PURE_IMPORTS_END */

var _if = __WEBPACK_IMPORTED_MODULE_0__IfObservable__["a" /* IfObservable */].create;
//# sourceMappingURL=if.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/interval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interval; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntervalObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/IntervalObservable.js");
/** PURE_IMPORTS_START ._IntervalObservable PURE_IMPORTS_END */

var interval = __WEBPACK_IMPORTED_MODULE_0__IntervalObservable__["a" /* IntervalObservable */].create;
//# sourceMappingURL=interval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/never.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return never; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NeverObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/NeverObservable.js");
/** PURE_IMPORTS_START ._NeverObservable PURE_IMPORTS_END */

var never = __WEBPACK_IMPORTED_MODULE_0__NeverObservable__["a" /* NeverObservable */].create;
//# sourceMappingURL=never.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onErrorResumeNext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._operators_onErrorResumeNext PURE_IMPORTS_END */

var onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__["b" /* onErrorResumeNextStatic */];
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/pairs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pairs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PairsObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/PairsObservable.js");
/** PURE_IMPORTS_START ._PairsObservable PURE_IMPORTS_END */

var pairs = __WEBPACK_IMPORTED_MODULE_0__PairsObservable__["a" /* PairsObservable */].create;
//# sourceMappingURL=pairs.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/range.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return range; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RangeObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/RangeObservable.js");
/** PURE_IMPORTS_START ._RangeObservable PURE_IMPORTS_END */

var range = __WEBPACK_IMPORTED_MODULE_0__RangeObservable__["a" /* RangeObservable */].create;
//# sourceMappingURL=range.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/throw.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _throw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/** PURE_IMPORTS_START ._ErrorObservable PURE_IMPORTS_END */

var _throw = __WEBPACK_IMPORTED_MODULE_0__ErrorObservable__["a" /* ErrorObservable */].create;
//# sourceMappingURL=throw.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/using.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return using; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UsingObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/UsingObservable.js");
/** PURE_IMPORTS_START ._UsingObservable PURE_IMPORTS_END */

var using = __WEBPACK_IMPORTED_MODULE_0__UsingObservable__["a" /* UsingObservable */].create;
//# sourceMappingURL=using.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zip.js");
/** PURE_IMPORTS_START .._operators_zip PURE_IMPORTS_END */

var zip = __WEBPACK_IMPORTED_MODULE_0__operators_zip__["c" /* zipStatic */];
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/audit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = audit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_audit__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/audit.js");
/** PURE_IMPORTS_START .._operators_audit PURE_IMPORTS_END */

/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_audit__["a" /* audit */])(durationSelector)(this);
}
//# sourceMappingURL=audit.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/auditTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = auditTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_auditTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/auditTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_auditTime PURE_IMPORTS_END */


/**
 * Ignores source values for `duration` milliseconds, then emits the most recent
 * value from the source Observable, then repeats this process.
 *
 * <span class="informal">When it sees a source values, it ignores that plus
 * the next ones for `duration` milliseconds, and then it emits the most recent
 * value from the source.</span>
 *
 * <img src="./img/auditTime.png" width="100%">
 *
 * `auditTime` is similar to `throttleTime`, but emits the last value from the
 * silenced time window, instead of the first value. `auditTime` emits the most
 * recent value from the source Observable on the output Observable as soon as
 * its internal timer becomes disabled, and ignores source values while the
 * timer is enabled. Initially, the timer is disabled. As soon as the first
 * source value arrives, the timer is enabled. After `duration` milliseconds (or
 * the time unit determined internally by the optional `scheduler`) has passed,
 * the timer is disabled, then the most recent source value is emitted on the
 * output Observable, and this process repeats for the next source value.
 * Optionally takes a {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.auditTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} duration Time to wait before emitting the most recent source
 * value, measured in milliseconds or the time unit determined internally
 * by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the rate-limiting behavior.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method auditTime
 * @owner Observable
 */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_auditTime__["a" /* auditTime */])(duration, scheduler)(this);
}
//# sourceMappingURL=auditTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buffer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_buffer__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/buffer.js");
/** PURE_IMPORTS_START .._operators_buffer PURE_IMPORTS_END */

/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_buffer__["a" /* buffer */])(closingNotifier)(this);
}
//# sourceMappingURL=buffer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferCount;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferCount.js");
/** PURE_IMPORTS_START .._operators_bufferCount PURE_IMPORTS_END */

/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
        startBufferEvery = null;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferCount__["a" /* bufferCount */])(bufferSize, startBufferEvery)(this);
}
//# sourceMappingURL=bufferCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators_bufferTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isScheduler,.._operators_bufferTime PURE_IMPORTS_END */



/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isScheduler__["a" /* isScheduler */])(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__operators_bufferTime__["a" /* bufferTime */])(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler)(this);
}
//# sourceMappingURL=bufferTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferToggle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferToggle.js");
/** PURE_IMPORTS_START .._operators_bufferToggle PURE_IMPORTS_END */

/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferToggle__["a" /* bufferToggle */])(openings, closingSelector)(this);
}
//# sourceMappingURL=bufferToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferWhen.js");
/** PURE_IMPORTS_START .._operators_bufferWhen PURE_IMPORTS_END */

/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferWhen__["a" /* bufferWhen */])(closingSelector)(this);
}
//# sourceMappingURL=bufferWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/combineAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineAll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_combineAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineAll.js");
/** PURE_IMPORTS_START .._operators_combineAll PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by waiting
 * for the outer Observable to complete, then applying {@link combineLatest}.
 *
 * <span class="informal">Flattens an Observable-of-Observables by applying
 * {@link combineLatest} when the Observable-of-Observables completes.</span>
 *
 * <img src="./img/combineAll.png" width="100%">
 *
 * Takes an Observable of Observables, and collects all Observables from it.
 * Once the outer Observable completes, it subscribes to all collected
 * Observables and combines their values using the {@link combineLatest}
 * strategy, such that:
 * - Every time an inner Observable emits, the output Observable emits.
 * - When the returned observable emits, it emits all of the latest values by:
 *   - If a `project` function is provided, it is called with each recent value
 *     from each inner Observable in whatever order they arrived, and the result
 *     of the `project` function is what is emitted by the output Observable.
 *   - If there is no `project` function, an array of all of the most recent
 *     values is emitted by the output Observable.
 *
 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev =>
 *   Rx.Observable.interval(Math.random()*2000).take(3)
 * ).take(2);
 * var result = higherOrder.combineAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function} [project] An optional function to map the most recent
 * values from each inner Observable into a new result. Takes each of the most
 * recent values from each collected inner Observable as arguments, in order.
 * @return {Observable} An Observable of projected results or arrays of recent
 * values.
 * @method combineAll
 * @owner Observable
 */
function combineAll(project) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_combineAll__["a" /* combineAll */])(project)(this);
}
//# sourceMappingURL=combineAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineLatest.js");
/** PURE_IMPORTS_START .._operators_combineLatest PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__["b" /* combineLatest */].apply(void 0, observables)(this);
}
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/concatMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = concatMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_concatMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concatMapTo.js");
/** PURE_IMPORTS_START .._operators_concatMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_concatMapTo__["a" /* concatMapTo */])(innerObservable, resultSelector)(this);
}
//# sourceMappingURL=concatMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/count.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = count;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_count__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/count.js");
/** PURE_IMPORTS_START .._operators_count PURE_IMPORTS_END */

/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_count__["a" /* count */])(predicate)(this);
}
//# sourceMappingURL=count.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_debounce__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/debounce.js");
/** PURE_IMPORTS_START .._operators_debounce PURE_IMPORTS_END */

/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_debounce__["a" /* debounce */])(durationSelector)(this);
}
//# sourceMappingURL=debounce.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/debounceTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_debounceTime PURE_IMPORTS_END */


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__["a" /* debounceTime */])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/defaultIfEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultIfEmpty;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_defaultIfEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/defaultIfEmpty.js");
/** PURE_IMPORTS_START .._operators_defaultIfEmpty PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * <img src="./img/defaultIfEmpty.png" width="100%">
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
        defaultValue = null;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_defaultIfEmpty__["a" /* defaultIfEmpty */])(defaultValue)(this);
}
//# sourceMappingURL=defaultIfEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/delay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = delay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/delay.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_delay PURE_IMPORTS_END */


/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=async] The IScheduler to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_delay__["a" /* delay */])(delay, scheduler)(this);
}
//# sourceMappingURL=delay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/delayWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = delayWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_delayWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/delayWhen.js");
/** PURE_IMPORTS_START .._operators_delayWhen PURE_IMPORTS_END */

/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_delayWhen__["a" /* delayWhen */])(delayDurationSelector, subscriptionDelay)(this);
}
//# sourceMappingURL=delayWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/dematerialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dematerialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/dematerialize.js");
/** PURE_IMPORTS_START .._operators_dematerialize PURE_IMPORTS_END */

/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_dematerialize__["a" /* dematerialize */])()(this);
}
//# sourceMappingURL=dematerialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/distinct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinct;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinct__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinct.js");
/** PURE_IMPORTS_START .._operators_distinct PURE_IMPORTS_END */

/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinct__["a" /* distinct */])(keySelector, flushes)(this);
}
//# sourceMappingURL=distinct.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._operators_distinctUntilChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__["a" /* distinctUntilChanged */])(compare, keySelector)(this);
}
//# sourceMappingURL=distinctUntilChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/distinctUntilKeyChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilKeyChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilKeyChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinctUntilKeyChanged.js");
/** PURE_IMPORTS_START .._operators_distinctUntilKeyChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilKeyChanged__["a" /* distinctUntilKeyChanged */])(key, compare)(this);
}
//# sourceMappingURL=distinctUntilKeyChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/elementAt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = elementAt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_elementAt__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/elementAt.js");
/** PURE_IMPORTS_START .._operators_elementAt PURE_IMPORTS_END */

/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_elementAt__["a" /* elementAt */])(index, defaultValue)(this);
}
//# sourceMappingURL=elementAt.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/exhaust.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = exhaust;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_exhaust__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/exhaust.js");
/** PURE_IMPORTS_START .._operators_exhaust PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_exhaust__["a" /* exhaust */])()(this);
}
//# sourceMappingURL=exhaust.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/exhaustMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = exhaustMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/exhaustMap.js");
/** PURE_IMPORTS_START .._operators_exhaustMap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000).take(5));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_exhaustMap__["a" /* exhaustMap */])(project, resultSelector)(this);
}
//# sourceMappingURL=exhaustMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/expand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expand;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_expand__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/expand.js");
/** PURE_IMPORTS_START .._operators_expand PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
        scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_expand__["a" /* expand */])(project, concurrent, scheduler)(this);
}
//# sourceMappingURL=expand.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/finally.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _finally;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_finalize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/finalize.js");
/** PURE_IMPORTS_START .._operators_finalize PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete or error.
 * @param {function} callback Function to be called when source terminates.
 * @return {Observable} An Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @owner Observable
 */
function _finally(callback) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_finalize__["a" /* finalize */])(callback)(this);
}
//# sourceMappingURL=finally.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/find.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = find;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_find__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/find.js");
/** PURE_IMPORTS_START .._operators_find PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_find__["b" /* find */])(predicate, thisArg)(this);
}
//# sourceMappingURL=find.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/findIndex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findIndex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_findIndex__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/findIndex.js");
/** PURE_IMPORTS_START .._operators_findIndex PURE_IMPORTS_END */

/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_findIndex__["a" /* findIndex */])(predicate, thisArg)(this);
}
//# sourceMappingURL=findIndex.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/groupBy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = groupBy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_groupBy__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/groupBy.js");
/* unused harmony reexport GroupedObservable */
/** PURE_IMPORTS_START .._operators_groupBy PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_groupBy__["a" /* groupBy */])(keySelector, elementSelector, durationSelector, subjectSelector)(this);
}
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/ignoreElements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ignoreElements;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_ignoreElements__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/ignoreElements.js");
/** PURE_IMPORTS_START .._operators_ignoreElements PURE_IMPORTS_END */

/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_ignoreElements__["a" /* ignoreElements */])()(this);
}
;
//# sourceMappingURL=ignoreElements.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/isEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEmpty;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_isEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/isEmpty.js");
/** PURE_IMPORTS_START .._operators_isEmpty PURE_IMPORTS_END */

/**
 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
 *
 * <img src="./img/isEmpty.png" width="100%">
 *
 * @return {Observable} An Observable that emits a Boolean.
 * @method isEmpty
 * @owner Observable
 */
function isEmpty() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_isEmpty__["a" /* isEmpty */])()(this);
}
//# sourceMappingURL=isEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/mapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mapTo.js");
/** PURE_IMPORTS_START .._operators_mapTo PURE_IMPORTS_END */

/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mapTo__["a" /* mapTo */])(value)(this);
}
//# sourceMappingURL=mapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/materialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = materialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/materialize.js");
/** PURE_IMPORTS_START .._operators_materialize PURE_IMPORTS_END */

/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_materialize__["a" /* materialize */])()(this);
}
//# sourceMappingURL=materialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = max;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_max__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/max.js");
/** PURE_IMPORTS_START .._operators_max PURE_IMPORTS_END */

/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_max__["a" /* max */])(comparer)(this);
}
//# sourceMappingURL=max.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/mergeMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mergeMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mergeMapTo.js");
/** PURE_IMPORTS_START .._operators_mergeMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mergeMapTo__["a" /* mergeMapTo */])(innerObservable, resultSelector, concurrent)(this);
}
//# sourceMappingURL=mergeMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/mergeScan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeScan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mergeScan__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mergeScan.js");
/** PURE_IMPORTS_START .._operators_mergeScan PURE_IMPORTS_END */

/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mergeScan__["a" /* mergeScan */])(accumulator, seed, concurrent)(this);
}
//# sourceMappingURL=mergeScan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = min;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_min__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/min.js");
/** PURE_IMPORTS_START .._operators_min PURE_IMPORTS_END */

/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_min__["a" /* min */])(comparer)(this);
}
//# sourceMappingURL=min.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/multicast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = multicast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._operators_multicast PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Allows source Observable to be subscribed only once with a Subject of choice,
 * while still sharing its values between multiple subscribers.
 *
 * <span class="informal">Subscribe to Observable once, but send its values to multiple subscribers.</span>
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * `multicast` is an operator that works in two modes.
 *
 * In the first mode you provide a single argument to it, which can be either an initialized Subject or a Subject
 * factory. As a result you will get a special kind of an Observable - a {@link ConnectableObservable}. It can be
 * subscribed multiple times, just as regular Observable, but it won't subscribe to the source Observable at that
 * moment. It will do it only if you call its `connect` method. This means you can essentially control by hand, when
 * source Observable will be actually subscribed. What is more, ConnectableObservable will share this one subscription
 * between all of its subscribers. This means that, for example, `ajax` Observable will only send a request once,
 * even though usually it would send a request per every subscriber. Since it sends a request at the moment of
 * subscription, here request would be sent when the `connect` method of a ConnectableObservable is called.
 *
 * The most common pattern of using ConnectableObservable is calling `connect` when the first consumer subscribes,
 * keeping the subscription alive while several consumers come and go and finally unsubscribing from the source
 * Observable, when the last consumer unsubscribes. To not implement that logic over and over again,
 * ConnectableObservable has a special operator, `refCount`. When called, it returns an Observable, which will count
 * the number of consumers subscribed to it and keep ConnectableObservable connected as long as there is at least
 * one consumer. So if you don't actually need to decide yourself when to connect and disconnect a
 * ConnectableObservable, use `refCount`.
 *
 * The second mode is invoked by calling `multicast` with an additional, second argument - selector function.
 * This function accepts an Observable - which basically mirrors the source Observable - and returns Observable
 * as well, which should be the input stream modified by any operators you want. Note that in this
 * mode you cannot provide initialized Subject as a first argument - it has to be a Subject factory. If
 * you provide selector function, `multicast` returns just a regular Observable, instead of ConnectableObservable.
 * Thus, as usual, each subscription to this stream triggers subscription to the source Observable. However,
 * if inside the selector function you subscribe to the input Observable multiple times, actual source stream
 * will be subscribed only once. So if you have a chain of operators that use some Observable many times,
 * but you want to subscribe to that Observable only once, this is the mode you would use.
 *
 * Subject provided as a first parameter of `multicast` is used as a proxy for the single subscription to the
 * source Observable. It means that all values from the source stream go through that Subject. Thus, if a Subject
 * has some special properties, Observable returned by `multicast` will have them as well. If you want to use
 * `multicast` with a Subject that is one of the ones included in RxJS by default - {@link Subject},
 * {@link AsyncSubject}, {@link BehaviorSubject}, or {@link ReplaySubject} - simply use {@link publish},
 * {@link publishLast}, {@link publishBehavior} or {@link publishReplay} respectively. These are actually
 * just wrappers around `multicast`, with a specific Subject hardcoded inside.
 *
 * Also, if you use {@link publish} or {@link publishReplay} with a ConnectableObservables `refCount` operator,
 * you can simply use {@link share} and {@link shareReplay} respectively, which chain these two.
 *
 * @example <caption>Use ConnectableObservable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const connectableSeconds = seconds.multicast(new Subject());
 *
 * connectableSeconds.subscribe(value => console.log('first: ' + value));
 * connectableSeconds.subscribe(value => console.log('second: ' + value));
 *
 * // At this point still nothing happens, even though we subscribed twice.
 *
 * connectableSeconds.connect();
 *
 * // From now on `seconds` are being logged to the console,
 * // twice per every second. `seconds` Observable was however only subscribed once,
 * // so under the hood Observable.interval had only one clock started.
 *
 * @example <caption>Use selector</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds
 *     .multicast(
 *         () => new Subject(),
 *         seconds => seconds.zip(seconds) // Usually zip would subscribe to `seconds` twice.
 *                                         // Because we are inside selector, `seconds` is subscribed once,
 *     )                                   // thus starting only one clock used internally by Observable.interval.
 *     .subscribe();
 *
 * @see {@link publish}
 * @see {@link publishLast}
 * @see {@link publishBehavior}
 * @see {@link publishReplay}
 * @see {@link share}
 * @see {@link shareReplay}
 *
 * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate Subject through
 * which the source sequence's elements will be multicast to the selector function input Observable or
 * ConnectableObservable returned by the operator.
 * @param {Function} [selector] - Optional selector function that can use the input stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the input source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable<T>|ConnectableObservable<T>} An Observable that emits the results of invoking the selector
 * on the source stream or a special {@link ConnectableObservable}, if selector was not provided.
 *
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_multicast__["a" /* multicast */])(subjectOrSubjectFactory, selector)(this);
}
//# sourceMappingURL=multicast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/observeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = observeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_observeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/observeOn.js");
/** PURE_IMPORTS_START .._operators_observeOn PURE_IMPORTS_END */

/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_observeOn__["b" /* observeOn */])(scheduler, delay)(this);
}
//# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onErrorResumeNext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._operators_onErrorResumeNext PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__["a" /* onErrorResumeNext */].apply(void 0, nextSources)(this);
}
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/pairwise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pairwise;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/pairwise.js");
/** PURE_IMPORTS_START .._operators_pairwise PURE_IMPORTS_END */

/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_pairwise__["a" /* pairwise */])()(this);
}
//# sourceMappingURL=pairwise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/partition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = partition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_partition__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/partition.js");
/** PURE_IMPORTS_START .._operators_partition PURE_IMPORTS_END */

/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_partition__["a" /* partition */])(predicate, thisArg)(this);
}
//# sourceMappingURL=partition.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/pluck.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pluck;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_pluck__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/pluck.js");
/** PURE_IMPORTS_START .._operators_pluck PURE_IMPORTS_END */

/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_pluck__["a" /* pluck */].apply(void 0, properties)(this);
}
//# sourceMappingURL=pluck.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publish.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publish;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publish__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publish.js");
/** PURE_IMPORTS_START .._operators_publish PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publish__["a" /* publish */])(selector)(this);
}
//# sourceMappingURL=publish.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publishBehavior.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishBehavior;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishBehavior__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishBehavior.js");
/** PURE_IMPORTS_START .._operators_publishBehavior PURE_IMPORTS_END */

/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishBehavior__["a" /* publishBehavior */])(value)(this);
}
//# sourceMappingURL=publishBehavior.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publishLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishLast.js");
/** PURE_IMPORTS_START .._operators_publishLast PURE_IMPORTS_END */

/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
function publishLast() {
    //TODO(benlesh): correct type-flow through here.
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishLast__["a" /* publishLast */])()(this);
}
//# sourceMappingURL=publishLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publishReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishReplay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishReplay.js");
/** PURE_IMPORTS_START .._operators_publishReplay PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * @param bufferSize
 * @param windowTime
 * @param selectorOrScheduler
 * @param scheduler
 * @return {Observable<T> | ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishReplay__["a" /* publishReplay */])(bufferSize, windowTime, selectorOrScheduler, scheduler)(this);
}
//# sourceMappingURL=publishReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = race;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_race__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_race__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/race.js");
/* unused harmony reexport raceStatic */
/** PURE_IMPORTS_START .._operators_race PURE_IMPORTS_END */

// NOTE: to support backwards compatability with 5.4.* and lower

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_race__["a" /* race */].apply(void 0, observables)(this);
}
//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/repeat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = repeat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_repeat__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/repeat.js");
/** PURE_IMPORTS_START .._operators_repeat PURE_IMPORTS_END */

/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) {
        count = -1;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_repeat__["a" /* repeat */])(count)(this);
}
//# sourceMappingURL=repeat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/repeatWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = repeatWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_repeatWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/repeatWhen.js");
/** PURE_IMPORTS_START .._operators_repeatWhen PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_repeatWhen__["a" /* repeatWhen */])(notifier)(this);
}
//# sourceMappingURL=repeatWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/retry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retry;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/retry.js");
/** PURE_IMPORTS_START .._operators_retry PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) {
        count = -1;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_retry__["a" /* retry */])(count)(this);
}
//# sourceMappingURL=retry.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/retryWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retryWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/retryWhen.js");
/** PURE_IMPORTS_START .._operators_retryWhen PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_retryWhen__["a" /* retryWhen */])(notifier)(this);
}
//# sourceMappingURL=retryWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/sample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sample;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_sample__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sample.js");
/** PURE_IMPORTS_START .._operators_sample PURE_IMPORTS_END */

/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_sample__["a" /* sample */])(notifier)(this);
}
//# sourceMappingURL=sample.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/sampleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sampleTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_sampleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sampleTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_sampleTime PURE_IMPORTS_END */


/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_sampleTime__["a" /* sampleTime */])(period, scheduler)(this);
}
//# sourceMappingURL=sampleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/scan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/scan.js");
/** PURE_IMPORTS_START .._operators_scan PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    if (arguments.length >= 2) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__operators_scan__["a" /* scan */])(accumulator, seed)(this);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_scan__["a" /* scan */])(accumulator)(this);
}
//# sourceMappingURL=scan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/sequenceEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sequenceEqual;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_sequenceEqual__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sequenceEqual.js");
/** PURE_IMPORTS_START .._operators_sequenceEqual PURE_IMPORTS_END */

/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_sequenceEqual__["a" /* sequenceEqual */])(compareTo, comparor)(this);
}
//# sourceMappingURL=sequenceEqual.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/shareReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shareReplay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/shareReplay.js");
/** PURE_IMPORTS_START .._operators_shareReplay PURE_IMPORTS_END */

/**
 * @method shareReplay
 * @owner Observable
 */
function shareReplay(bufferSize, windowTime, scheduler) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_shareReplay__["a" /* shareReplay */])(bufferSize, windowTime, scheduler)(this);
}
;
//# sourceMappingURL=shareReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = single;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_single__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/single.js");
/** PURE_IMPORTS_START .._operators_single PURE_IMPORTS_END */

/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_single__["a" /* single */])(predicate)(this);
}
//# sourceMappingURL=single.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skip;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skip.js");
/** PURE_IMPORTS_START .._operators_skip PURE_IMPORTS_END */

/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skip__["a" /* skip */])(count)(this);
}
//# sourceMappingURL=skip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skipLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipLast.js");
/** PURE_IMPORTS_START .._operators_skipLast PURE_IMPORTS_END */

/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipLast__["a" /* skipLast */])(count)(this);
}
//# sourceMappingURL=skipLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skipUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipUntil;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipUntil.js");
/** PURE_IMPORTS_START .._operators_skipUntil PURE_IMPORTS_END */

/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipUntil__["a" /* skipUntil */])(notifier)(this);
}
//# sourceMappingURL=skipUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skipWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipWhile.js");
/** PURE_IMPORTS_START .._operators_skipWhile PURE_IMPORTS_END */

/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - A function to test each item emitted from the source Observable.
 * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipWhile__["a" /* skipWhile */])(predicate)(this);
}
//# sourceMappingURL=skipWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/startWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/** PURE_IMPORTS_START .._operators_startWith PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_startWith__["a" /* startWith */].apply(void 0, array)(this);
}
//# sourceMappingURL=startWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_subscribeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/subscribeOn.js");
/** PURE_IMPORTS_START .._operators_subscribeOn PURE_IMPORTS_END */

/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_subscribeOn__["a" /* subscribeOn */])(scheduler, delay)(this);
}
//# sourceMappingURL=subscribeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _switch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchAll.js");
/** PURE_IMPORTS_START .._operators_switchAll PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by
 * subscribing to only the most recently emitted of those inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * previous inner Observable once a new one appears.</span>
 *
 * <img src="./img/switch.png" width="100%">
 *
 * `switch` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable subscribes to the inner Observable and
 * begins emitting the items emitted by that. So far, it behaves
 * like {@link mergeAll}. However, when a new inner Observable is emitted,
 * `switch` unsubscribes from the earlier-emitted inner Observable and
 * subscribes to the new inner Observable and begins emitting items from it. It
 * continues to behave like this for subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * // Each click event is mapped to an Observable that ticks every second
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var switched = higherOrder.switch();
 * // The outcome is that `switched` is essentially a timer that restarts
 * // on every click. The interval Observables from older clicks do not merge
 * // with the current interval Observable.
 * switched.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link zipAll}
 *
 * @return {Observable<T>} An Observable that emits the items emitted by the
 * Observable most recently emitted by the source Observable.
 * @method switch
 * @name switch
 * @owner Observable
 */
function _switch() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchAll__["a" /* switchAll */])()(this);
}
//# sourceMappingURL=switch.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/switchMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = switchMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMapTo.js");
/** PURE_IMPORTS_START .._operators_switchMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchMapTo__["a" /* switchMapTo */])(innerObservable, resultSelector)(this);
}
//# sourceMappingURL=switchMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/takeLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeLast.js");
/** PURE_IMPORTS_START .._operators_takeLast PURE_IMPORTS_END */

/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeLast__["a" /* takeLast */])(count)(this);
}
//# sourceMappingURL=takeLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeUntil;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeUntil.js");
/** PURE_IMPORTS_START .._operators_takeUntil PURE_IMPORTS_END */

/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits something. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value, the output Observable stops mirroring the source Observable
 * and completes.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeUntil__["a" /* takeUntil */])(notifier)(this);
}
//# sourceMappingURL=takeUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/takeWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeWhile.js");
/** PURE_IMPORTS_START .._operators_takeWhile PURE_IMPORTS_END */

/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeWhile__["a" /* takeWhile */])(predicate)(this);
}
//# sourceMappingURL=takeWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttle.js");
/** PURE_IMPORTS_START .._operators_throttle PURE_IMPORTS_END */

/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) {
        config = __WEBPACK_IMPORTED_MODULE_0__operators_throttle__["a" /* defaultThrottleConfig */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_throttle__["b" /* throttle */])(durationSelector, config)(this);
}
//# sourceMappingURL=throttle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/throttleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttleTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttleTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_throttle,.._operators_throttleTime PURE_IMPORTS_END */



/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    if (config === void 0) {
        config = __WEBPACK_IMPORTED_MODULE_1__operators_throttle__["a" /* defaultThrottleConfig */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__operators_throttleTime__["a" /* throttleTime */])(duration, scheduler, config)(this);
}
//# sourceMappingURL=throttleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timeInterval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = timeInterval;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeInterval.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__operators_timeInterval__["a"]; });
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeInterval PURE_IMPORTS_END */



/**
 * @param scheduler
 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timeInterval
 * @owner Observable
 */
function timeInterval(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeInterval__["b" /* timeInterval */])(scheduler)(this);
}
//# sourceMappingURL=timeInterval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeout.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeout PURE_IMPORTS_END */


/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * <img src="./img/timeout.png" width="100%">
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * @example <caption>Check if ticks are emitted within certain timespan</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(1100) // Let's use bigger timespan to be safe,
 *                       // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err) // Will never be called.
 * );
 *
 * seconds.timeout(900).subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err) // Will emit error before even first value is emitted,
 *                             // since it did not arrive within 900ms period.
 * );
 *
 * @example <caption>Use Date to check if Observable completed</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(new Date("December 17, 2020 03:24:00"))
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
 *                             // since Observable did not complete by then.
 * );
 *
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeout__["a" /* timeout */])(due, scheduler)(this);
}
//# sourceMappingURL=timeout.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timeoutWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeoutWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeoutWith.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeoutWith PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * <img src="./img/timeoutWith.png" width="100%">
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * @example <caption>Add fallback observable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const minutes = Rx.Observable.interval(60 * 1000);
 *
 * seconds.timeoutWith(900, minutes)
 *     .subscribe(
 *         value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                      // since first value of `seconds` will not arrive fast enough.
 *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
 *                                 // but here will never be called.
 *     );
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeoutWith__["a" /* timeoutWith */])(due, withObservable, scheduler)(this);
}
//# sourceMappingURL=timeoutWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timestamp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timestamp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timestamp.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timestamp PURE_IMPORTS_END */


/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timestamp__["b" /* timestamp */])(scheduler)(this);
}
//# sourceMappingURL=timestamp.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = window;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_window__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/window.js");
/** PURE_IMPORTS_START .._operators_window PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_window__["a" /* window */])(windowBoundaries)(this);
}
//# sourceMappingURL=window.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowCount;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowCount.js");
/** PURE_IMPORTS_START .._operators_windowCount PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
        startWindowEvery = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowCount__["a" /* windowCount */])(windowSize, startWindowEvery)(this);
}
//# sourceMappingURL=windowCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isNumeric__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators_windowTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isNumeric,.._util_isScheduler,.._operators_windowTime PURE_IMPORTS_END */




function windowTime(windowTimeSpan) {
    var scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[3])) {
        scheduler = arguments[3];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isNumeric__["a" /* isNumeric */])(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isNumeric__["a" /* isNumeric */])(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_3__operators_windowTime__["a" /* windowTime */])(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler)(this);
}
//# sourceMappingURL=windowTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowToggle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowToggle.js");
/** PURE_IMPORTS_START .._operators_windowToggle PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowToggle__["a" /* windowToggle */])(openings, closingSelector)(this);
}
//# sourceMappingURL=windowToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowWhen.js");
/** PURE_IMPORTS_START .._operators_windowWhen PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowWhen__["a" /* windowWhen */])(closingSelector)(this);
}
//# sourceMappingURL=windowWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/withLatestFrom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withLatestFrom;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/withLatestFrom.js");
/** PURE_IMPORTS_START .._operators_withLatestFrom PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_withLatestFrom__["a" /* withLatestFrom */].apply(void 0, args)(this);
}
//# sourceMappingURL=withLatestFrom.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zipProto;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zip.js");
/** PURE_IMPORTS_START .._operators_zip PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_zip__["b" /* zip */].apply(void 0, observables)(this);
}
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/zipAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zipAll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zipAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zipAll.js");
/** PURE_IMPORTS_START .._operators_zipAll PURE_IMPORTS_END */

/**
 * @param project
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method zipAll
 * @owner Observable
 */
function zipAll(project) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_zipAll__["a" /* zipAll */])(project)(this);
}
//# sourceMappingURL=zipAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_SubscribeOnObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/SubscribeOnObservable.js");
/** PURE_IMPORTS_START .._observable_SubscribeOnObservable PURE_IMPORTS_END */

/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
var SubscribeOnOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscribeOnOperator(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    SubscribeOnOperator.prototype.call = function (subscriber, source) {
        return new __WEBPACK_IMPORTED_MODULE_0__observable_SubscribeOnObservable__["a" /* SubscribeOnObservable */](source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator;
}());
//# sourceMappingURL=subscribeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AnimationFrameAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrameAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__ = __webpack_require__("./node_modules/rxjs/_esm5/util/AnimationFrame.js");
/** PURE_IMPORTS_START ._AsyncAction,.._util_AnimationFrame PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AnimationFrameAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If an animation frame has already been requested, don't request another
        // one. If an animation frame hasn't been requested yet, request one. Return
        // the current animation frame request id.
        return scheduler.scheduled || (scheduler.scheduled = __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__["a" /* AnimationFrame */].requestAnimationFrame(scheduler.flush.bind(scheduler, null)));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested animation frame and
        // set the scheduled flag to undefined so the next AnimationFrameAction will
        // request its own.
        if (scheduler.actions.length === 0) {
            __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__["a" /* AnimationFrame */].cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AnimationFrameAction;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=AnimationFrameAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AnimationFrameScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrameScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AnimationFrameScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        _super.apply(this, arguments);
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__["a" /* AsyncScheduler */]));
//# sourceMappingURL=AnimationFrameScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AsapAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsapAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Immediate__ = __webpack_require__("./node_modules/rxjs/_esm5/util/Immediate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START .._util_Immediate,._AsyncAction PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsapAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If a microtask has already been scheduled, don't schedule another
        // one. If a microtask hasn't been scheduled yet, schedule one now. Return
        // the current scheduled microtask id.
        return scheduler.scheduled || (scheduler.scheduled = __WEBPACK_IMPORTED_MODULE_0__util_Immediate__["a" /* Immediate */].setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested microtask and
        // set the scheduled flag to undefined so the next AsapAction will schedule
        // its own.
        if (scheduler.actions.length === 0) {
            __WEBPACK_IMPORTED_MODULE_0__util_Immediate__["a" /* Immediate */].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AsapAction;
}(__WEBPACK_IMPORTED_MODULE_1__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=AsapAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AsapScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsapScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AsapScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        _super.apply(this, arguments);
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__["a" /* AsyncScheduler */]));
//# sourceMappingURL=AsapScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/VirtualTimeScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncAction,._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var VirtualTimeScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        var _this = this;
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        _super.call(this, SchedulerAction, function () { return _this.frame; });
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(__WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__["a" /* AsyncScheduler */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var VirtualAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.active = true;
        this.index = scheduler.index = index;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        // If an action is rescheduled, we save allocations by mutating its state,
        // pushing it to the end of the scheduler queue, and recycling the action.
        // But since the VirtualTimeScheduler is used for testing, VirtualActions
        // must be immutable so they can be inspected later.
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=VirtualTimeScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/animationFrame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animationFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AnimationFrameAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AnimationFrameAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AnimationFrameScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AnimationFrameScheduler.js");
/** PURE_IMPORTS_START ._AnimationFrameAction,._AnimationFrameScheduler PURE_IMPORTS_END */


/**
 *
 * Animation Frame Scheduler
 *
 * <span class="informal">Perform task when `window.requestAnimationFrame` would fire</span>
 *
 * When `animationFrame` scheduler is used with delay, it will fall back to {@link async} scheduler
 * behaviour.
 *
 * Without delay, `animationFrame` scheduler can be used to create smooth browser animations.
 * It makes sure scheduled task will happen just before next browser content repaint,
 * thus performing animations as efficiently as possible.
 *
 * @example <caption>Schedule div height animation</caption>
 * const div = document.querySelector('.some-div');
 *
 * Rx.Scheduler.schedule(function(height) {
 *   div.style.height = height + "px";
 *
 *   this.schedule(height + 1);  // `this` references currently executing Action,
 *                               // which we reschedule with new state
 * }, 0, 0);
 *
 * // You will see .some-div element growing in height
 *
 *
 * @static true
 * @name animationFrame
 * @owner Scheduler
 */
var animationFrame = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__AnimationFrameScheduler__["a" /* AnimationFrameScheduler */](__WEBPACK_IMPORTED_MODULE_0__AnimationFrameAction__["a" /* AnimationFrameAction */]);
//# sourceMappingURL=animationFrame.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/asap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsapAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsapAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsapScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsapScheduler.js");
/** PURE_IMPORTS_START ._AsapAction,._AsapScheduler PURE_IMPORTS_END */


/**
 *
 * Asap Scheduler
 *
 * <span class="informal">Perform task as fast as it can be performed asynchronously</span>
 *
 * `asap` scheduler behaves the same as {@link async} scheduler when you use it to delay task
 * in time. If however you set delay to `0`, `asap` will wait for current synchronously executing
 * code to end and then it will try to execute given task as fast as possible.
 *
 * `asap` scheduler will do its best to minimize time between end of currently executing code
 * and start of scheduled task. This makes it best candidate for performing so called "deferring".
 * Traditionally this was achieved by calling `setTimeout(deferredTask, 0)`, but that technique involves
 * some (although minimal) unwanted delay.
 *
 * Note that using `asap` scheduler does not necessarily mean that your task will be first to process
 * after currently executing code. In particular, if some task was also scheduled with `asap` before,
 * that task will execute first. That being said, if you need to schedule task asynchronously, but
 * as soon as possible, `asap` scheduler is your best bet.
 *
 * @example <caption>Compare async and asap scheduler</caption>
 *
 * Rx.Scheduler.async.schedule(() => console.log('async')); // scheduling 'async' first...
 * Rx.Scheduler.asap.schedule(() => console.log('asap'));
 *
 * // Logs:
 * // "asap"
 * // "async"
 * // ... but 'asap' goes first!
 *
 * @static true
 * @name asap
 * @owner Scheduler
 */
var asap = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__AsapScheduler__["a" /* AsapScheduler */](__WEBPACK_IMPORTED_MODULE_0__AsapAction__["a" /* AsapAction */]);
//# sourceMappingURL=asap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/ColdObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColdObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLoggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_applyMixins__ = __webpack_require__("./node_modules/rxjs/_esm5/util/applyMixins.js");
/** PURE_IMPORTS_START .._Observable,.._Subscription,._SubscriptionLoggable,.._util_applyMixins PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ColdObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
        _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            subscriber.add(new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */](function () {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscriber;
        });
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            var message = this.messages[i];
            subscriber.add(this.scheduler.schedule(function (_a) {
                var message = _a.message, subscriber = _a.subscriber;
                message.notification.observe(subscriber);
            }, message.frame, { message: message, subscriber: subscriber }));
        }
    };
    return ColdObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
/*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_3__util_applyMixins__["a" /* applyMixins */])(ColdObservable, [__WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__["a" /* SubscriptionLoggable */]]);
//# sourceMappingURL=ColdObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/HotObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLoggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_applyMixins__ = __webpack_require__("./node_modules/rxjs/_esm5/util/applyMixins.js");
/** PURE_IMPORTS_START .._Subject,.._Subscription,._SubscriptionLoggable,.._util_applyMixins PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var HotObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
        _super.call(this);
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    /** @deprecated internal use only */ HotObservable.prototype._subscribe = function (subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        subscriber.add(new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */](function () {
            subject.logUnsubscribedFrame(index);
        }));
        return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function () {
        var subject = this;
        var messagesLength = subject.messages.length;
        /* tslint:disable:no-var-keyword */
        for (var i = 0; i < messagesLength; i++) {
            (function () {
                var message = subject.messages[i];
                /* tslint:enable */
                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
            })();
        }
    };
    return HotObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]));
/*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_3__util_applyMixins__["a" /* applyMixins */])(HotObservable, [__WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__["a" /* SubscriptionLoggable */]]);
//# sourceMappingURL=HotObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/SubscriptionLog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionLog; });
var SubscriptionLog = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
        if (unsubscribedFrame === void 0) {
            unsubscribedFrame = Number.POSITIVE_INFINITY;
        }
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
    }
    return SubscriptionLog;
}());
//# sourceMappingURL=SubscriptionLog.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/SubscriptionLoggable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionLoggable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLog.js");
/** PURE_IMPORTS_START ._SubscriptionLog PURE_IMPORTS_END */

var SubscriptionLoggable = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__["a" /* SubscriptionLog */](this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__["a" /* SubscriptionLog */](oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());
//# sourceMappingURL=SubscriptionLoggable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/TestScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Notification__ = __webpack_require__("./node_modules/rxjs/_esm5/Notification.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ColdObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/ColdObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HotObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/HotObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/VirtualTimeScheduler.js");
/** PURE_IMPORTS_START .._Observable,.._Notification,._ColdObservable,._HotObservable,._SubscriptionLog,.._scheduler_VirtualTimeScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






var defaultMaxFrame = 750;
var TestScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
        _super.call(this, __WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__["a" /* VirtualAction */], defaultMaxFrame);
        this.assertDeepEqual = assertDeepEqual;
        this.hotObservables = [];
        this.coldObservables = [];
        this.flushTests = [];
    }
    TestScheduler.prototype.createTime = function (marbles) {
        var indexOf = marbles.indexOf('|');
        if (indexOf === -1) {
            throw new Error('marble diagram for time should have a completion marker "|"');
        }
        return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
        if (marbles.indexOf('^') !== -1) {
            throw new Error('cold observable cannot have subscription offset "^"');
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('cold observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var cold = new __WEBPACK_IMPORTED_MODULE_2__ColdObservable__["a" /* ColdObservable */](messages, this);
        this.coldObservables.push(cold);
        return cold;
    };
    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
        if (marbles.indexOf('!') !== -1) {
            throw new Error('hot observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var subject = new __WEBPACK_IMPORTED_MODULE_3__HotObservable__["a" /* HotObservable */](messages, this);
        this.hotObservables.push(subject);
        return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
        var _this = this;
        var messages = [];
        observable.subscribe(function (value) {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(value) });
        }, function (err) {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(err) });
        }, function () {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete() });
        });
        return messages;
    };
    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
        var _this = this;
        if (unsubscriptionMarbles === void 0) {
            unsubscriptionMarbles = null;
        }
        var actual = [];
        var flushTest = { actual: actual, ready: false };
        var unsubscriptionFrame = TestScheduler
            .parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
        var subscription;
        this.schedule(function () {
            subscription = observable.subscribe(function (x) {
                var value = x;
                // Support Observable-of-Observables
                if (x instanceof __WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]) {
                    value = _this.materializeInnerObservable(value, _this.frame);
                }
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(value) });
            }, function (err) {
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(err) });
            }, function () {
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete() });
            });
        }, 0);
        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
        }
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
            }
        };
    };
    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
        var flushTest = { actual: actualSubscriptionLogs, ready: false };
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles) {
                var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                flushTest.ready = true;
                flushTest.expected = marblesArray.map(function (marbles) {
                    return TestScheduler.parseMarblesAsSubscriptions(marbles);
                });
            }
        };
    };
    TestScheduler.prototype.flush = function () {
        var hotObservables = this.hotObservables;
        while (hotObservables.length > 0) {
            hotObservables.shift().setup();
        }
        _super.prototype.flush.call(this);
        var readyFlushTests = this.flushTests.filter(function (test) { return test.ready; });
        while (readyFlushTests.length > 0) {
            var test = readyFlushTests.shift();
            this.assertDeepEqual(test.actual, test.expected);
        }
    };
    TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
        if (typeof marbles !== 'string') {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](Number.POSITIVE_INFINITY);
        }
        var len = marbles.length;
        var groupStart = -1;
        var subscriptionFrame = Number.POSITIVE_INFINITY;
        var unsubscriptionFrame = Number.POSITIVE_INFINITY;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '^':
                    if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    subscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                case '!':
                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                default:
                    throw new Error('there can only be \'^\' and \'!\' markers in a ' +
                        'subscription marble diagram. Found instead \'' + c + '\'.');
            }
        }
        if (unsubscriptionFrame < 0) {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](subscriptionFrame);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](subscriptionFrame, unsubscriptionFrame);
        }
    };
    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
        if (materializeInnerObservables === void 0) {
            materializeInnerObservables = false;
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('conventional marble diagrams cannot have the ' +
                'unsubscription marker "!"');
        }
        var len = marbles.length;
        var testMessages = [];
        var subIndex = marbles.indexOf('^');
        var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
        var getValue = typeof values !== 'object' ?
            function (x) { return x; } :
            function (x) {
                // Support Observable-of-Observables
                if (materializeInnerObservables && values[x] instanceof __WEBPACK_IMPORTED_MODULE_2__ColdObservable__["a" /* ColdObservable */]) {
                    return values[x].messages;
                }
                return values[x];
            };
        var groupStart = -1;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor + frameOffset;
            var notification = void 0;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '|':
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete();
                    break;
                case '^':
                    break;
                case '#':
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(errorValue || 'error');
                    break;
                default:
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(getValue(c));
                    break;
            }
            if (notification) {
                testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
            }
        }
        return testMessages;
    };
    return TestScheduler;
}(__WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__["b" /* VirtualTimeScheduler */]));
//# sourceMappingURL=TestScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/AnimationFrame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RequestAnimationFrameDefinition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

var RequestAnimationFrameDefinition = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RequestAnimationFrameDefinition(root) {
        if (root.requestAnimationFrame) {
            this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
        }
        else if (root.mozRequestAnimationFrame) {
            this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
        }
        else if (root.webkitRequestAnimationFrame) {
            this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
        }
        else if (root.msRequestAnimationFrame) {
            this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
        }
        else if (root.oRequestAnimationFrame) {
            this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
        }
        else {
            this.cancelAnimationFrame = root.clearTimeout.bind(root);
            this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
        }
    }
    return RequestAnimationFrameDefinition;
}());
var AnimationFrame = /*@__PURE__*/ new RequestAnimationFrameDefinition(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=AnimationFrame.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/Immediate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ImmediateDefinition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Immediate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/**
Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
*/
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

var ImmediateDefinition = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ImmediateDefinition(root) {
        this.root = root;
        if (root.setImmediate && typeof root.setImmediate === 'function') {
            this.setImmediate = root.setImmediate.bind(root);
            this.clearImmediate = root.clearImmediate.bind(root);
        }
        else {
            this.nextHandle = 1;
            this.tasksByHandle = {};
            this.currentlyRunningATask = false;
            // Don't get fooled by e.g. browserify environments.
            if (this.canUseProcessNextTick()) {
                // For Node.js before 0.9
                this.setImmediate = this.createProcessNextTickSetImmediate();
            }
            else if (this.canUsePostMessage()) {
                // For non-IE10 modern browsers
                this.setImmediate = this.createPostMessageSetImmediate();
            }
            else if (this.canUseMessageChannel()) {
                // For web workers, where supported
                this.setImmediate = this.createMessageChannelSetImmediate();
            }
            else if (this.canUseReadyStateChange()) {
                // For IE 6–8
                this.setImmediate = this.createReadyStateChangeSetImmediate();
            }
            else {
                // For older browsers
                this.setImmediate = this.createSetTimeoutSetImmediate();
            }
            var ci = function clearImmediate(handle) {
                delete clearImmediate.instance.tasksByHandle[handle];
            };
            ci.instance = this;
            this.clearImmediate = ci;
        }
    }
    ImmediateDefinition.prototype.identify = function (o) {
        return this.root.Object.prototype.toString.call(o);
    };
    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
        return this.identify(this.root.process) === '[object process]';
    };
    ImmediateDefinition.prototype.canUseMessageChannel = function () {
        return Boolean(this.root.MessageChannel);
    };
    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
        var document = this.root.document;
        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
    };
    ImmediateDefinition.prototype.canUsePostMessage = function () {
        var root = this.root;
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `root.postMessage` means something completely different and can't be used for this purpose.
        if (root.postMessage && !root.importScripts) {
            var postMessageIsAsynchronous_1 = true;
            var oldOnMessage = root.onmessage;
            root.onmessage = function () {
                postMessageIsAsynchronous_1 = false;
            };
            root.postMessage('', '*');
            root.onmessage = oldOnMessage;
            return postMessageIsAsynchronous_1;
        }
        return false;
    };
    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fn = function result() {
            var _a = result, handler = _a.handler, args = _a.args;
            if (typeof handler === 'function') {
                handler.apply(undefined, args);
            }
            else {
                (new Function('' + handler))();
            }
        };
        fn.handler = handler;
        fn.args = args;
        return fn;
    };
    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
        return this.nextHandle++;
    };
    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var root = this.root;
        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
        var onGlobalMessage = function globalMessageHandler(event) {
            var instance = globalMessageHandler.instance;
            if (event.source === root &&
                typeof event.data === 'string' &&
                event.data.indexOf(messagePrefix) === 0) {
                instance.runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };
        onGlobalMessage.instance = this;
        root.addEventListener('message', onGlobalMessage, false);
        var fn = function setImmediate() {
            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.postMessage(messagePrefix + handle, '*');
            return handle;
        };
        fn.instance = this;
        fn.messagePrefix = messagePrefix;
        return fn;
    };
    ImmediateDefinition.prototype.runIfPresent = function (handle) {
        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
        // So if we're currently running a task, we'll need to delay this invocation.
        if (this.currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // 'too much recursion' error.
            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
        }
        else {
            var task = this.tasksByHandle[handle];
            if (task) {
                this.currentlyRunningATask = true;
                try {
                    task();
                }
                finally {
                    this.clearImmediate(handle);
                    this.currentlyRunningATask = false;
                }
            }
        }
    };
    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
        var _this = this;
        var channel = new this.root.MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            _this.runIfPresent(handle);
        };
        var fn = function setImmediate() {
            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
        fn.channel = channel;
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var root = instance.root;
            var doc = root.document;
            var html = doc.documentElement;
            var handle = instance.addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement('script');
            script.onreadystatechange = function () {
                instance.runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    return ImmediateDefinition;
}());
var Immediate = /*@__PURE__*/ new ImmediateDefinition(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=Immediate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/applyMixins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMixins;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name_1 = propertyKeys[j];
            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
    }
}
//# sourceMappingURL=applyMixins.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/assign.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export assignImpl */
/* unused harmony export getAssign */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

function assignImpl(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var len = sources.length;
    for (var i = 0; i < len; i++) {
        var source = sources[i];
        for (var k in source) {
            if (source.hasOwnProperty(k)) {
                target[k] = source[k];
            }
        }
    }
    return target;
}
;
function getAssign(root) {
    return root.Object.assign || assignImpl;
}
var assign = /*@__PURE__*/ getAssign(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=assign.js.map


/***/ }),

/***/ "./src/app/layout/tests/beginner/beginner-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeginnerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beginner_component__ = __webpack_require__("./src/app/layout/tests/beginner/beginner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_testBanks_beginnerTestBank_service__ = __webpack_require__("./src/app/shared/services/testBanks/beginnerTestBank.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__beginner_component__["a" /* BeginnerComponent */] }
];
var BeginnerRoutingModule = (function () {
    function BeginnerRoutingModule() {
    }
    return BeginnerRoutingModule;
}());
BeginnerRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_testBanks_beginnerTestBank_service__["a" /* BeginnerTestBank */]]
    })
], BeginnerRoutingModule);

//# sourceMappingURL=beginner-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/tests/beginner/beginner.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div [@routerTransition] class=\"container-fluid\">\n\n    <!--This button dissapears whenerer you start the quiz-->\n\n    <div class=\"container-fluid\" text-align=\"center\" (window:resize)=\"onResize($event)\">\n\n        <button class=\"btn btn-warning float-right\" (click)=\"backClicked()\">\n            <i class=\"fa fa-step-backward\"></i> {{backLabel}}\n        </button>\n\n        <h3>{{level}} Questions.</h3>\n    </div>\n\n\n    <hr />\n\n    <!--This is the start of the card, this displays the questions -->\n\n    <div class=\"card card-info card-inverse mb-3 col-lg-12 center-block\">\n        <div class=\"card-header card-info\" placeholder=\"test\" *ngIf=\"!start\">\n            <h5 *ngIf=\"loggedOn\">Ready, {{firstName}}?</h5>\n            <h5 *ngIf=\"!loggedOn\">Ready? You have <strong>{{remaining}}</strong>  attempt(s) remaining</h5>\n        </div>\n        <div class=\"card-header card-info\" placeholder=\"test\" *ngIf=\"start\">\n            <div class=\"float-right\">Time: {{timer}} sec</div>\n            <br />\n            <hr />\n            <i class=\"fa fa-fw fa-check fa-2x float-right\" *ngIf=\"correct\"></i>\n            <i class=\"fa fa-fw fa-times fa-2x float-right\" *ngIf=\"wrong\"></i>\n            <h5>{{question}}</h5>\n            <hr>\n\n            <!--This is the section for the possible answers-->\n            <form id=\"qOptions\" name=\"formRadio\">\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col col-lg-6 col-md-4\">\n                            <label class=\"custom-control custom-radio\">\n                                <input id=\"radio1\" name=\"radio\" [(ngModel)]=\"radioData\" type=\"radio\" [class.custom-control-checked]=\"checked\" class=\"custom-control-input\" value=\"0\">\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">{{options[0]}}</span>\n                            </label>\n                        </div>\n                        <div class=\"col col-lg-6 col-md-4\">\n                            <label class=\"custom-control custom-radio\">\n                                <input id=\"radio2\" name=\"radio\" [(ngModel)]=\"radioData\" type=\"radio\" class=\"custom-control-input\" value=\"1\">\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">{{options[1]}}</span>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col col-lg-6 col-md-4\">\n                            <label class=\"custom-control custom-radio\">\n                                <input id=\"radio3\" name=\"radio\" [(ngModel)]=\"radioData\" type=\"radio\" class=\"custom-control-input\" value=\"2\">\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">{{options[2]}}</span>\n                            </label>\n                        </div>\n                        <div class=\"col col-lg-6 col-md-4\">\n                            <label class=\"custom-control custom-radio\">\n                                <input id=\"radio4\" name=\"radio\" [(ngModel)]=\"radioData\" type=\"radio\" class=\"custom-control-input\" value=\"3\">\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">{{options[3]}}</span>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <button class=\"btn btn-primary btn-block\" (click)=\"validate()\" [disabled]=\"submited || finished\" *ngIf=\"!timeUp\">Check your answer!</button>\n\n                <div class=\"alert alert-success\" *ngIf=\"correct\">Correct!</div>\n                <div class=\"alert alert-danger\" *ngIf=\"wrong && !timeUp\"><strong>Opps! </strong>Sorry, the answer is: '{{correctAnswer}}'</div>\n                <div class=\"alert alert-warning\" *ngIf=\"timeUp\"><strong>Ran out of time! </strong>Remember that you only have 60 secs per question! </div>\n            </form>\n        </div>\n    </div>\n\n    <div *ngIf=\"!start\">\n        <hr />\n        <button *ngIf=\"!loggedOn\"class=\"btn btn-success btn-block\" (click)=\"startQuiz()\" type=\"button\" [disabled]=\"remaining == 0\">\n            Start The {{level}} Word Test!\n        </button>\n        <button *ngIf=\"loggedOn\" class=\"btn btn-success btn-block\" (click)=\"startQuiz()\" type=\"button\" >\n            Start The {{level}} Word Test!\n        </button>\n    </div>\n    <!-- Buttons, next and finish -->\n\n    <div class=\"container-fluid\">\n        <button class=\"btn btn-primary\" (click)=\"finishQuiz(stats); calcPercentage()\" *ngIf=\"start\">\n            {{finish}}\n        </button>\n        <button class=\"btn btn-success float-right\" (click)=\"nextQuestion(content)\" *ngIf=\"!finished\" id=\"Next\">\n            Next <i class=\"fa fa-step-forward\">  </i>\n        </button>\n    </div>\n\n    <div class=\"container-fluid\">\n        <hr />\n        <div class=\"alert alert-warning\" *ngIf=\"alrt\"><strong>You need to attempt atleast 10 questions. </strong> You have attempted only {{attempted}}.</div>\n    </div>\n\n    <br />\n\n    <!--This is the modal for skipped question warning-->\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4>\n                WARNING<i class=\"fa fa-fw fa-exclamation\"></i>\n            </h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <!--Alert-->\n            <div>\n                <strong>This question is not answered! </strong>Please hit 'Check Answer' to check your selection. If you skip the question without checking, we will mark it as an 'Not Attempted'.\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <!--this button will skip the current question from the quiz-->\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"c('Close click'); skipQuestion(); nextQuestion(content)\">Skip Anyway...</button>\n        </div>\n    </ng-template>\n\n\n    <!--This is the modal that shows the stats of the session once a user hits finish-->\n\n    <ng-template #stats let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4>\n                Test Results:\n            </h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <table id=\"progress\">\n                <tr>\n                    <th>Attempts</th>\n                    <th>Correct</th>\n                    <th>Wrong</th>\n                    <th>Skipped</th>\n                </tr>\n                <tr>\n                    <td>{{attempted}}</td>\n                    <td>{{numRight}}</td>\n                    <td>{{numWrong}}</td>\n                    <td>{{numSkipped}}</td>\n                </tr>\n            </table>\n\n            <div>\n                <hr />\n                <h5><strong>You scored: </strong> {{percent}}% - {{suggestion}}.</h5>\n                <hr />\n            </div>\n            <table id=\"stats\">\n                <tr>\n                    <th>Range</th>\n                    <th>Standing</th>\n                </tr>\n                <tr>\n                    <td>100 - 95</td>\n                    <td>Excelent</td>\n                </tr>\n                <tr>\n                    <td>94 - 85</td>\n                    <td>Very Good</td>\n                </tr>\n                <tr>\n                    <td>84 - 70</td>\n                    <td>Good</td>\n                </tr>\n                <tr>\n                    <td>69 - 60</td>\n                    <td>Fair</td>\n                </tr>\n                <tr>\n                    <td>Less than 60</td>\n                    <td>Needs Instruction</td>\n                </tr>\n            </table>\n        </div>\n\n        <div class=\"modal-footer\">\n            <!--this button will skip the currwnt question from the quiz-->\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"c('Close click'); backClicked()\">Done</button>\n        </div>\n    </ng-template>\n\n    <div>\n\n\n    </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/layout/tests/beginner/beginner.component.scss":
/***/ (function(module, exports) {

module.exports = ".fa-times {\n  color: tomato; }\n\n.fa-check {\n  color: lawngreen; }\n\n#progress {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  border-radius: 10px; }\n\n#progress td, #progress th {\n  border: 2px solid #ddd;\n  padding: 8px;\n  text-align: center; }\n\n#progress tr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n#progress tr:hover {\n  background-color: #ddd; }\n\n#progress th {\n  border: 2px solid #ddd;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  background-color: lightskyblue;\n  color: white; }\n\n#stats {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  border-radius: 10px; }\n\n#stats td, #stats th {\n  border: 2px solid #ddd;\n  padding: 8px;\n  text-align: center; }\n\n#stats tr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n#stats tr:hover {\n  background-color: #ddd; }\n\n#stats th {\n  border: 2px solid #ddd;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  background-color: lightskyblue;\n  color: white; }\n\n.modal-header {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/layout/tests/beginner/beginner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeginnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_simple_timer__ = __webpack_require__("./node_modules/ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_testBanks_testBanks_service__ = __webpack_require__("./src/app/shared/services/testBanks/testBanks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BeginnerComponent = BeginnerComponent_1 = (function () {
    //-----------------------------------------------------------------------------------
    function BeginnerComponent(_location, _modalService, _route, simpleT, _test) {
        this._location = _location;
        this._modalService = _modalService;
        this._route = _route;
        this.simpleT = simpleT;
        this._test = _test;
        //-----------------------------------------------------------------------------------
        this.backLabel = BeginnerComponent_1.BACK_LABEL;
        this.finish = BeginnerComponent_1.FINISH;
        this.numWrong = 0;
        this.numRight = 0;
        this.numSkipped = 0;
        this.attempted = 0;
        this.usedQuetions = [];
        this.usedIndex = 0;
        this.timer = 0;
        this.alrt = false;
        this.timeUp = false;
        this.counter = 0;
        this.randID = Math.floor(Math.random() * Math.floor(20));
        this.submited = false;
        this.start = false;
        this.finished = true;
        this.level = this._route.snapshot.paramMap.get('id');
        _test.getQuestion(this.randID, this.level);
        this.question = _test.question;
        this.answer = _test.answer;
        this.options = _test.options;
        this.numberOfQuestions = _test.totalQuestions;
    }
    //-----------------------------------------------------------------------------------
    //Update on initialization of the page
    BeginnerComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        if (localStorage.getItem("attempt") != null) {
            this.attempts = JSON.parse(localStorage.getItem("attempt"));
            this.loadAttempts();
        }
        this.level = this._route.snapshot.paramMap.get('id');
        this.determineLevel(this.level);
        this.showOnlyIcons = window.innerWidth <= 680;
        this.updaTeLabels();
        this.currentUser = localStorage.getItem('currentUser');
        if (this.currentUser != null)
            this.getFirstName();
        if (localStorage.getItem('currentUser') != null) {
            this.loggedOn = true;
        }
        else {
            this.loggedOn = false;
        }
    };
    BeginnerComponent.prototype.loadAttempts = function () {
        this.b_attempt = this.attempts[0];
        this.i_attempt = this.attempts[1];
        this.ui_attempt = this.attempts[2];
        this.a_attempt = this.attempts[3];
        this.v_attempt = this.attempts[4];
        this.w_attempt = this.attempts[5];
    };
    //-----------------------------------------------------------------------------------
    BeginnerComponent.prototype.getFirstName = function () {
        var index = this.currentUser.indexOf(" ");
        this.firstName = this.currentUser.slice(0, index);
    };
    //-----------------------------------------------------------------------------------
    //Starts the test and creates a new timer and activates it.
    BeginnerComponent.prototype.startQuiz = function () {
        var attempt;
        var temp;
        this.start = true;
        this.finished = false;
        this.simpleT.newTimer('1sec', 1);
        this.subscribeTimer();
        attempt = JSON.parse(localStorage.getItem("attempt"));
        if (!this.loggedOn)
            attempt[this.attemptID] = attempt[this.attemptID] - 1;
        localStorage.setItem("attempt", JSON.stringify(attempt));
    };
    //-----------------------------------------------------------------------------------
    BeginnerComponent.prototype.onResize = function (event) {
        this.showOnlyIcons = window.innerWidth <= 680;
        this.updaTeLabels();
        event.target.innerWidth;
    };
    //-----------------------------------------------------------------------------------
    BeginnerComponent.prototype.updaTeLabels = function () {
        this.backLabel = this.showOnlyIcons ? '' : BeginnerComponent_1.BACK_LABEL;
        this.finish = this.showOnlyIcons ? 'Finish/View Results' : BeginnerComponent_1.FINISH;
    };
    //-----------------------------------------------------------------------------------
    //This function starts or stops the timer
    BeginnerComponent.prototype.subscribeTimer = function () {
        var _this = this;
        if (this.timerId) {
            // Unsubscribe if timer Id is defined
            this.simpleT.unsubscribe(this.timerId);
            this.timerId = undefined;
        }
        else {
            this.timer = -1;
            // Subscribe if timer Id is undefined
            this.timerId = this.simpleT.subscribe('1sec', function () { return _this.timerCallback(); });
            this.timeUp = false;
        }
    };
    //-----------------------------------------------------------------------------------
    //This is the function for the timer. The timer increases by 1 every second for 60 secs.
    //After that, it resets and stops the timer.
    BeginnerComponent.prototype.timerCallback = function () {
        if (this.timer < 60) {
            this.timer++;
        }
        else {
            // Unsubscribe if timer Id is defined
            this.simpleT.unsubscribe(this.timerId);
            this.timerId = undefined;
            this.timeUp = true;
            this.submited = true;
            this.attempted++;
            this.numWrong++;
            this.wrong = true;
        }
    };
    //-----------------------------------------------------------------------------------
    //This checks if the selected answer is the right one by comparing it to this.answer
    //If its right/wrong, it updates the counter depending on result 
    BeginnerComponent.prototype.validate = function () {
        this.selection = this.radioData;
        this.submited = true;
        this.attempted++;
        this.alrt = false;
        this.subscribeTimer();
        if (this.selection == this.answer) {
            this.correct = true;
            this.numRight = this.numRight + 1;
        }
        else {
            this.wrong = true;
            this.numWrong = this.numWrong + 1;
            this.correctAnswer = this._test.options[this.answer]; //Gets the value of the correct answer
        }
    };
    //-----------------------------------------------------------------------------------
    //This function gets the next set of question pack with a random generated ID, if the ID is used, then it generated a new random
    //ID to use for the question. If there are no more question IDs avilable, the quiz is over.
    BeginnerComponent.prototype.nextQuestion = function (content) {
        if (!this.submited) {
            this.open(content);
        } //If question is not submited, the warning modal will pop up
        else if (this.submited || this.skip) {
            var elements = document.getElementsByName('formRadio');
            var form = elements[0];
            form.reset();
            //console.log("Element 0:" + form.reset);
            this.counter++;
            this.usedQuetions[this.usedIndex] = this.randID;
            this.usedIndex++;
            this.randID = Math.floor(Math.random() * Math.floor(this.numberOfQuestions));
            this.checkUsed(this.randID);
            while (this.used == true && this.counter < this.numberOfQuestions) {
                this.randID = Math.floor(Math.random() * Math.floor(this.numberOfQuestions));
                this.checkUsed(this.randID);
            } //This keeps getting a random number that has not been used, then returns it
            if (this.counter < this.numberOfQuestions) {
                //this._question.questionsLib(this.randID);
                this._test.getQuestion(this.randID, this.level);
                this.updateInfo();
                this.submited = false;
                this.skip = false;
                this.correct = false;
                this.wrong = false;
                this.alrt = false;
                this.subscribeTimer();
            }
            else {
                this.finished = true;
            } //Keeps loading questions until no more questions, once done, finish quiz
        }
    };
    //-----------------------------------------------------------------------------------
    //This function loads the information from the selected test bank into this class
    //in order to display it in the HTML
    BeginnerComponent.prototype.updateInfo = function () {
        this.question = this._test.question;
        this.answer = this._test.answer;
        this.options = this._test.options;
    };
    //-----------------------------------------------------------------------------------
    BeginnerComponent.prototype.finishQuiz = function (stats) {
        if (this.attempted >= 10) {
            this.open(stats);
            this.finished = true;
            this.simpleT.unsubscribe(this.timerId);
        }
        else {
            this.alrt = true;
        }
    };
    //-----------------------------------------------------------------------------------
    //This will calculate the percentage of the quiz taken
    BeginnerComponent.prototype.calcPercentage = function () {
        this.percent = Math.round((this.numRight / this.attempted) * 100);
        if (this.percent >= 85 && this.percent <= 100)
            this.suggestion = "Move on to the next level.";
        else if (this.percent >= 70 && this.percent < 85)
            this.suggestion = "Needs practice before going to next level.";
        else if (this.percent >= 60 && this.percent < 70)
            this.suggestion = "Stay in this level and have more vocabulary exercises";
        else if (this.percent < 60)
            this.suggestion = "Needs further instruction.";
    };
    //-----------------------------------------------------------------------------------
    BeginnerComponent.prototype.backClicked = function () {
        this._location.back();
    };
    //-----------------------------------------------------------------------------------
    //Opens or closes the modal
    BeginnerComponent.prototype.open = function (content) {
        var _this = this;
        this._modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    //-----------------------------------------------------------------------------------
    BeginnerComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //-----------------------------------------------------------------------------------
    BeginnerComponent.prototype.skipQuestion = function () {
        this.skip = true;
        this.submited = true;
        this.numSkipped++;
        this.attempted++;
        this.subscribeTimer();
    };
    //-----------------------------------------------------------------------------------
    BeginnerComponent.prototype.determineLevel = function (lvl) {
        if (lvl == "beginner") {
            this.level = "Beginner";
            this.attemptID = 0;
            this.remaining = this.b_attempt;
        }
        else if (lvl == "advanced") {
            this.level = "Advanced";
            this.attemptID = 3;
            this.remaining = this.a_attempt;
        }
        else if (lvl == "intermediate") {
            this.level = "Intermediate";
            this.attemptID = 1;
            this.remaining = this.i_attempt;
        }
        else if (lvl == "upper") {
            this.level = "Upper Intermediate";
            this.attemptID = 2;
            this.remaining = this.ui_attempt;
        }
        else if (lvl == "vocabA") {
            this.level = "Vocabulary Size (A)";
            this.attemptID = 4;
            this.remaining = this.v_attempt;
        }
        else if (lvl == "vocabB") {
            this.level = "Vocabulary Size (B)";
            this.attemptID = 4;
            this.remaining = this.v_attempt;
        }
        else if (lvl == "depth") {
            this.level = "Depth of Vocabulary Knowledge";
            this.attemptID = 5;
            this.remaining = this.w_attempt;
        }
    };
    //-----------------------------------------------------------------------------------
    //this checks if the question ID has been used or not
    BeginnerComponent.prototype.checkUsed = function (id) {
        this.used = false;
        for (var _i = 0, _a = this.usedQuetions; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i == id) {
                this.used = true;
            }
        }
    };
    return BeginnerComponent;
}());
//-----------------------------------------------------------------------------------
BeginnerComponent.BACK_LABEL = ' Categories';
BeginnerComponent.FINISH = 'Finish Test and View Results';
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BeginnerComponent.prototype, "radioData", void 0);
BeginnerComponent = BeginnerComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngbd-buttons-radio',
        template: __webpack_require__("./src/app/layout/tests/beginner/beginner.component.html"),
        styles: [__webpack_require__("./src/app/layout/tests/beginner/beginner.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_simple_timer__["SimpleTimer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_simple_timer__["SimpleTimer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_testBanks_testBanks_service__["a" /* TestBanks */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_testBanks_testBanks_service__["a" /* TestBanks */]) === "function" && _e || Object])
], BeginnerComponent);

var BeginnerComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=beginner.component.js.map

/***/ }),

/***/ "./src/app/layout/tests/beginner/beginner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginnerModule", function() { return BeginnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__ = __webpack_require__("./node_modules/ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__beginner_routing_module__ = __webpack_require__("./src/app/layout/tests/beginner/beginner-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__beginner_component__ = __webpack_require__("./src/app/layout/tests/beginner/beginner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_testBanks_testBanks_service__ = __webpack_require__("./src/app/shared/services/testBanks/testBanks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BeginnerModule = (function () {
    function BeginnerModule() {
    }
    return BeginnerModule;
}());
BeginnerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__beginner_routing_module__["a" /* BeginnerRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__beginner_component__["a" /* BeginnerComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__["SimpleTimer"],
            __WEBPACK_IMPORTED_MODULE_7__shared_services_testBanks_testBanks_service__["a" /* TestBanks */]
        ]
    })
], BeginnerModule);

//# sourceMappingURL=beginner.module.js.map

/***/ }),

/***/ "./src/app/shared/services/testBanks/advancedTestBank.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedTestBank; });
var AdvancedTestBank = (function () {
    function AdvancedTestBank() {
    }
    AdvancedTestBank.questionsLib = function (id) {
        var questions = [
            {
                question: "What is the register of the word 'specs' in: 'I can't find my specs, have you seen them?",
                answer: "1",
                options: ["Formal", "Informal", "Outdated", "Literary"]
            },
            {
                question: "Which word does not take the prefix 'over'?",
                answer: "2",
                options: ["Hand", "Estimate", "Night", "Priced"]
            },
            {
                question: "Choose the odd one out from this list of words connected with work",
                answer: "1",
                options: ["Vocational", "Flextime", "Mechanical", "Manual"]
            },
            {
                question: "Complete the definition: ______ is when you always buy a particular make of a product because you trust the quality",
                answer: "3",
                options: ["Red Tape", "Hard Sell", "Capital Assets", "Brand Loyalty"]
            },
            {
                question: "Which of these words is not a piece of writing?",
                answer: "2",
                options: ["Composition", "Draft", "Plagiarism", "Dissertation"]
            },
            {
                question: "Which word is a negative characteristic",
                answer: "0",
                options: ["Extravagant", "Elegant", "Affectionate", "Generous"]
            },
            {
                question: "Complete the sentence: John and I fell head ______ in love",
                answer: "0",
                options: ["Over heals", "It off", "At first sight", "Over shoulder"]
            },
            {
                question: "Which verb does not mean 'have a strong desire for something'?",
                answer: "2",
                options: ["Crave", "Hanker after", "Defuse", "Yearn for"]
            },
            {
                question: "Complete the sentence with the correct adjective: Becky is so ____." +
                    "If she sees something she likes, she buys it without thinkning",
                answer: "1",
                options: ["Extrovert", "Impulsive", "Garrulous", "Effusive"]
            },
            {
                question: "Which word means 'Someone who is not active physically'",
                answer: "2",
                options: ["A dabbler", "A culture vulture", "A couch potato", "A doer"]
            },
            {
                question: "Complete the sentence: At our office we have a ____ day once a month when we can wear casual clothes.",
                answer: "1",
                options: ["Designer", "Dress down", "Snazzy", "Dress to kill"]
            },
            {
                question: "What does this sentence mean? 'The film was panned by the critics'",
                answer: "1",
                options: ["The critics loved the film", "The critics thought the film was very bad", "The critics praised the film", "The critics made the film"]
            },
            {
                question: "Which expression about reading a book means 'I didn't like it'?",
                answer: "2",
                options: ["It was a page-turner", "I couldn't put it down", "I couldn't get into it", "It's compulsive reading"]
            },
            {
                question: "If someone says 'Lunch is on me' they meaan what?",
                answer: "0",
                options: ["They will pay for lunch", "They will cook lunch", "They already made lunch", "Lets eat lunch at my house"]
            },
            {
                question: "Which of these is not connected with a car accident?",
                answer: "0",
                options: ["Road-rage", "Hit-and-run", "Pile-up", "Head-on collision"]
            },
            {
                question: "What are all these words connected with?: Guided tour, self-catering, an all-in package, trekking",
                answer: "2",
                options: ["Hotels", "Methods of transport", "Types of holidays", "Catering"]
            },
            {
                question: "Complete the sentence: The current economic ____ is very good for small businesses",
                answer: "1",
                options: ["Disposition", "Climate", "Haze", "Whirlwind"]
            },
            {
                question: "Which word does KEY not collocate with?",
                answer: "3",
                options: ["Question", "Decision", "Role", "Thought"]
            },
            {
                question: "A tamed animal ____.",
                answer: "1",
                options: ["Behaves aggresively", "Does not fear humans", "Is a pet", "Lives with other humans"]
            },
            {
                question: "Which of these expressions about the environment is connected with animals?",
                answer: "3",
                options: ["Deforestation", "Greenhouse effect", "Global warming", "Endangered species"]
            },
            {
                question: "Which of these idioms means 'I don't believe you'?",
                answer: "1",
                options: ["I'll give you the benefit of the doubt", "What do you take me for?", "You should take it with a pinch of salt", "Believe me in"]
            },
            {
                question: "Complete the sentence: An area represented by an MP is called a ____.",
                answer: "2",
                options: ["Lobby", "Deputation", "Constituency", "Legislation"]
            },
            {
                question: "Complete the sentence: If you suffer from ____ you are ill because you are not eating enough food.",
                answer: "1",
                options: ["Illiteracy", "Malnutrition", "Poverty", "Sanitation"]
            },
            {
                question: "Which of these crimes is a type of stealing?",
                answer: "2",
                options: ["Perjury", "Harassment", "Embezzelemt", "Joyriding"]
            },
            {
                question: "Complete the sentence: Both sodes agreed to an immediate ____ and the fighting has stopped.",
                answer: "1",
                options: ["Annihilation", "Ceasefire", "Deterrent", "Warfare"]
            },
            {
                question: "Which of these expressions means you have a lot of money?",
                answer: "0",
                options: ["Rolling in it", "Skin", "Strapped for cash", "Things are a bit tight"]
            },
            {
                question: "Which of thee words does not exist?",
                answer: "3",
                options: ["Upload", "Offline", "Inbox", "Undelete"]
            },
            {
                question: "Which of these idioms about illness is the odd one out?",
                answer: "3",
                options: ["Out of sorts", "Off-color", "Under the weather", "On the mend 55"]
            },
            {
                question: "'A level playing field' means what?",
                answer: "3",
                options: ["A change in the rules", "A serious discussion", "An election", "A fair situation"]
            },
            {
                question: "Complete the sentence: Which ____ should I click on to write a new email?",
                answer: "0",
                options: ["Icon", "Thumbnail", "Footprint", "Analogue"]
            },
            {
                question: "Which adjective describes experiencing something using your computer instead in real life?",
                answer: "1",
                options: ["Interactive", "Virtual", "Smart", "Genetic"]
            },
            {
                question: "Which of word do all of the following adjectives collocate with? Persistent, fleeting, lingering, protracted",
                answer: "3",
                options: ["Sit", "Moment", "Glimpse", "Smile"]
            },
            {
                question: "Which verb describes the way someone walks when their feet hurt?",
                answer: "0",
                options: ["Hobble", "Amble", "Tiptoe", "Trudge"]
            },
            {
                question: "What can you do with you eyebrows?",
                answer: "3",
                options: ["Twitch", "Flutter", "Open", "Raise"]
            },
            {
                question: "Which of these is not a shade of red?",
                answer: "3",
                options: ["Poppy", "Ruby", "Strawberry", "Violet"]
            },
            {
                question: "What do all these verb mean? Nip, pop, zip, whizz",
                answer: "0",
                options: ["To go a short distance quickly", "To run a short distance", "To walk very quickly", "None of the above"]
            },
            {
                question: "Which of these words means a very hard or painful experienc?",
                answer: "2",
                options: ["Glitch", "Pitfall", "Ordeal", "Setback"]
            },
            {
                question: "Complete the sentence: The school will not ____ any form of cheating in exams.",
                answer: "0",
                options: ["Condone", "Endorse", "Authorize", "Give the green light"]
            },
            {
                question: "Complete the sentence: Mr. Williams showed no ____ as the judge sentenced him to ten years in prision.",
                answer: "1",
                options: ["Apology", "Remorse", "Excuse", "Alibi"]
            },
            {
                question: "Which of these means 'an agreement'?",
                answer: "3",
                options: ["A gift", "Coincidence", "Rift", "Settlement"]
            },
            {
                question: "Replace 'goes against' without changing the meaning in the following sentence: " +
                    "The findings in this study goes against everything in Dr. Robert's report. ",
                answer: "3",
                options: ["Conceives", "Aplaudes", "Predicts", "Contradicts"]
            },
            {
                question: "Which of these coloquial words refers to a person?",
                answer: "1",
                options: ["Thingamajig", "Whatsisname", "Umpteen", "Thingy"]
            },
            {
                question: "Choose the correct reply: 'Have you heard? Martha is hving an affair!'",
                answer: "0",
                options: ["You should not gossip", "Don't bray", "Stop bickering", "Don't nag me"]
            },
            {
                question: "Choose the best meaning for 'a storn in a teacup'",
                answer: "1",
                options: ["A misunderstanding", "A big argument that will soon be forgotten", "Something u can't understand", "A difficult situation"]
            },
            {
                question: "What idiom has a simillar meaning to 'He's nobody's fool'",
                answer: "1",
                options: ["He has the gift of the dab", "He knows his stuff", "He's a smart-aleck", "He's one sandwich short of a picnic."]
            },
            {
                question: "Complete the sentence: Tom, could you ____ me on Friday? I'll be away from school for the day.",
                answer: "3",
                options: ["Stand for", "Stand by", "Stand up for", "Stand in for"]
            },
            {
                question: "Choose a prhasal verb to replace the word RELAX in 'I'm going to relax on the weekend, I need a break.",
                answer: "0",
                options: ["Chill", "Bottle out", "Stick it out", "Simmer down"]
            },
            {
                question: "Which of these is the odd one out?",
                answer: "3",
                options: ["Spokesperson", "Firefighter", "Flight Attendant", "Cleaning lady"]
            },
            {
                question: "Which of these is not connected with rich or upper class people?",
                answer: "1",
                options: ["New money", "Hoi polloi", "Upper crust", "Stuck-up"]
            }
        ];
        this.totalQuestions = questions.length;
        this.answer = questions[id].answer;
        this.question = questions[id].question;
        this.options = questions[id].options;
    };
    return AdvancedTestBank;
}());

//# sourceMappingURL=advancedTestBank.service.js.map

/***/ }),

/***/ "./src/app/shared/services/testBanks/beginnerTestBank.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeginnerTestBank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * This class will hold all of the test questions for the beginner level quizes
 */
var BeginnerTestBank = (function () {
    function BeginnerTestBank() {
    }
    BeginnerTestBank.questionsLib = function (id) {
        var questions = [
            {
                question: "Which one is a phrase?",
                answer: "1",
                options: ["Our dog's name is Ruby", "In the garden", "I like chocolate", "Where is it?"]
            },
            {
                question: "Which of these is not a car part?",
                answer: "2",
                options: ["Wheel", "Door", "Mug", "Window"]
            },
            {
                question: "Which sentence is not correct?",
                answer: "3",
                options: ["Do you have a brother?", "I've got a cold", "My house has three bedrooms", "I've always got a good time in my English lesson"]
            },
            {
                question: "Which verb can you ___ with all these words? Skiing, Swimming, Dancing, Shopping",
                answer: "3",
                options: ["Take", "Make", "Do", "Go"]
            },
            {
                question: "The answer is 'I'm listening to music'. What is the question?",
                answer: "0",
                options: ["What are you doing?", "What do you do?", "What do you to to relax?", "What do yo like doing?"]
            },
            {
                question: "Which sentence is not correct?",
                answer: "3",
                options: ["I'm making a cup of coffee", "Can you make the bed, please?", "The book made me sad", "She made a photo of the baby"]
            },
            {
                question: "Complete the sentence: What time did you _______ last night?",
                answer: "0",
                options: ["Come home", "Come to home", "Come bank to home", "Come in home"]
            },
            {
                question: "Complete the phase: _______ to get to the airport?",
                answer: "2",
                options: ["How long is it", "How much", "How long does it take", "How far"]
            },
            {
                question: "Which one is the best reply to the question: 'Can I borrow the book?'",
                answer: "0",
                options: ["Yes, but please bring it back tomorrow", "Yes, but please take it back tomorrow",
                    "Ye, but get it back by tomorrow", "Yes, but it should be got back in tomorrow"]
            },
            {
                question: "Which phrasal verb means 'make something louder'?",
                answer: "3",
                options: ["Turn off", "Turn on", "Turn down", "Turn up"]
            },
            {
                question: "Complete the phase: I _______ very well with my sister",
                answer: "1",
                options: ["Get out", "Get along", "Get up", "Get over"]
            },
            {
                question: "Which one is correct?",
                answer: "2",
                options: ["He told me 'Goodbye'", "He said to me 'Goodbye'", "He said 'Goodbye'", "He told 'Goodbye'"]
            },
            {
                question: "Which of these can't you 'tell'?",
                answer: "3",
                options: ["A story", "A joke", "The time", "A question"]
            },
            {
                question: "Which of these verbs can you use with: Train, Plane, Bus, Bicyle",
                answer: "2",
                options: ["Miss", "Catch", "Go by", "Take"]
            },
            {
                question: "Which conjunction makes the question 'Why?'",
                answer: "0",
                options: ["Becasue", "So", "If", "But"]
            },
            {
                question: "Which is the sixth month of the year?",
                answer: "1",
                options: ["July", "June", "January", "May"]
            },
            {
                question: "Fill in the gap: Jane is ______ at the moment, She is coming back in about 10 minutes.",
                answer: "0",
                options: ["Out", "Abroad", "Here", "On the way"]
            },
            {
                question: "Complete the sentence: The driver sits at the ______ of the bus.",
                answer: "3",
                options: ["Side", "Sequinning", "Middle", "Front"]
            },
            {
                question: "Which word is not an adverb?",
                answer: "0",
                options: ["Good", "Well", "Last", "Slowly"]
            },
            {
                question: "Which of these verbs has a past form that ends in 'ed'?",
                answer: "3",
                options: ["Keep", "Drive", "Choose", "Open"]
            },
            {
                question: "Complete the sentence: Yesterday i ______ a great book",
                answer: "0",
                options: ["Read", "Readed", "Reed", "Rode"]
            },
            {
                question: "Add another uncountable kind of food to this list: Rice, bread, water, spaghetti",
                answer: "1",
                options: ["Apples", "Milk", "Tomatoes", "Hot dogs"]
            },
            {
                question: "Which sentence has a negative meaning?",
                answer: "2",
                options: ["The weather is not bad today", "The weather's better today", "It's a terrible day today", "It's hardly a good weather"]
            },
            {
                question: "Which word means the same as 'easy-going'?",
                answer: "2",
                options: ["Happy", "Lovely", "Relaxed", "Kind"]
            },
            {
                question: "Which of thee verbs is not correct?",
                answer: "0",
                options: ["Look of", "Look after", "Look at", "Look for"]
            },
            {
                question: "Which of these words has the wrong prefix",
                answer: "1",
                options: ["Impolite", "Unpossible", "Unsafe", "Incorrect"]
            },
            {
                question: "Which suffix can change an adjective into an adverb?",
                answer: "2",
                options: ["-y", "-er", "-ly", "-ing"]
            },
            {
                question: "Complete the sentence: The house is ______.",
                answer: "1",
                options: ["Very quite", "Very quiet", "Very quietly", "Very quietness"]
            },
            {
                question: "Which question is correct?",
                answer: "1",
                options: ["When was you born?", "When were you born?", "When are you born?", "When do you born?"]
            },
            {
                question: "Which definition is correct?",
                answer: "3",
                options: ["your cousin is your father's siblling", "Your cousin is your aunt's sibling", "Your cousin is your grandparent's son or daughter",
                    "Your cousin is your father's or mother's niece or nephew"]
            },
            {
                question: "Which one is not part of your leg?",
                answer: "0",
                options: ["Thumb", "Toe", "Knee", "Foot"]
            },
            {
                question: "Find something that only women wear",
                answer: "2",
                options: ["Trainers", "Jeans", "Dress", "T-shirt"]
            },
            {
                question: "Which phrase describes someone in a negative way?",
                answer: "3",
                options: ["She is too thin", "He is very tall", "He is quite handsome", "He is too fat"]
            },
            {
                question: "Which sentence is not correct?",
                answer: "1",
                options: ["I've got a headache", "He's got a heart attack", "Do you get hay-fever?", "SHe's got toothache"]
            },
            {
                question: "When do you say 'Congratulations?",
                answer: "1",
                options: ["It's your mom's birthday", "Your friend passed the exam", "Your sister missed her plane", "Your friend is taking a test tomorrow"]
            },
            {
                question: "Complete the sentence: First we saw lightning, then we heard _____",
                answer: "0",
                options: ["Thunder", "Log", "Snow", "Rain"]
            },
            {
                question: "Where in a town do you go to borrow a book?",
                answer: "1",
                options: ["Town Hall", "Library", "Post Office", "Tourist Information Station"]
            },
            {
                question: "Which place has a lot of trees?",
                answer: "2",
                options: ["A village", "A field", "A forest", "A river"]
            },
            {
                question: "Which animal lives on a farm?",
                answer: "1",
                options: ["A snake", "A sheep", "An elephant", "a lion"]
            },
            {
                question: "Which words do you use at the airport?",
                answer: "3",
                options: ["Check down", "Platform", "Boarding card", "Flight"]
            },
            {
                question: "What does this sign mean? 'EXIT'",
                answer: "1",
                options: ["Go away", "Go out", "Go up", "Go in"]
            },
            {
                question: "Which of these fruits is hard and green or red?",
                answer: "2",
                options: ["Banana", "Orange", "Apple", "Strawberry"]
            },
            {
                question: "Which item can you find in the kitchen?",
                answer: "0",
                options: ["Fridge", "Hammer", "Shower cap", "Car"]
            },
            {
                question: "What don't you find in the bedroom?",
                answer: "2",
                options: ["A toilet", "A shower", "A basin", "A wardrobe"]
            },
            {
                question: "What can you do with a remote control?",
                answer: "1",
                options: ["Turn the computer on", "Change the TV station", "Listen to music", "Switch off the light"]
            },
            {
                question: "Where does a doctor work?",
                answer: "3",
                options: ["In a shop", "In an office", "In a factory", "At the hospital"]
            },
            {
                question: "Complete the sentence: When you graduate, you ______",
                answer: "0",
                options: ["Get a degre", "Give a lecture", "Do a course", "Take notes"]
            },
            {
                question: "Which is not part of a computer?",
                answer: "0",
                options: ["A phone box", "A screen", "A keyboard", "A mouse"]
            },
            {
                question: "Complete the sentence: We don't want to take the car with us on the holiday, so we are going by ______",
                answer: "1",
                options: ["Air", "Plane", "Ferry", "Boat"]
            },
            {
                question: "Where can you buy a lot of different things like clothes, toys, food and furniture?",
                answer: "1",
                options: ["Supermarket", "Department store", "Stationary shop", "Concenient store"]
            },
            {
                question: "You can say 'I booked a room' or ______",
                answer: "3",
                options: ["I have a double room", "I checked in", "I filled a room", "I made a reservation"]
            },
            {
                question: "The answer is 'Yes, i'll have the fish and salad'. What is the question?",
                answer: "2",
                options: ["What do you want?", "What do you like?", "Are you ready to order?", "Is everything all right?"]
            },
            {
                question: "Complete the sentence: She plays ______ everyday",
                answer: "3",
                options: ["Swimming", "Karate", "Running", "Tennis"]
            },
            {
                question: "What type of film is about ghosts or dead people?",
                answer: "0",
                options: ["Horror film", "Musical", "Comedy", "Western"]
            },
            {
                question: "Which sentence is wrong?",
                answer: "2",
                options: ["I like relaxing after dinner", "I often listen to music", "I see TV every evening for an hour", "I enjoy reading"]
            },
            {
                question: "Complete the sentence: A ______ attacked me in the street and stole my bag",
                answer: "1",
                options: ["Terrorist", "Mugger", "Vandal", "Murderer"]
            },
            {
                question: "What type of program is often on TV every day and is about people's lives?",
                answer: "0",
                options: ["Talk show", "Cartoon", "Documentary", "Soap Opera"]
            },
            {
                question: "Complete the sentence: Can you repair my TV? ______ ",
                answer: "3",
                options: ["It's untidy", "It's dying", "Isn't it working", "It's out of order"]
            },
            {
                question: "Complete the sentence: When you are unemployed, you  ______ .",
                answer: "1",
                options: ["Do not have enough food", "Do not have a job", "Have a new job", "Do not have a home"]
            },
            {
                question: "What is the definition of 'commited to do something'.",
                answer: "2",
                options: ["Is not interested", "Is interested", "Want to do at any price", "Wish to do"]
            }
        ];
        this.totalQuestions = questions.length;
        this.answer = questions[id].answer;
        this.question = questions[id].question;
        this.options = questions[id].options;
    };
    return BeginnerTestBank;
}());
BeginnerTestBank = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BeginnerTestBank);

//# sourceMappingURL=beginnerTestBank.service.js.map

/***/ }),

/***/ "./src/app/shared/services/testBanks/intermediateTestBank.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntermediateTestBank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IntermediateTestBank = (function () {
    function IntermediateTestBank() {
    }
    IntermediateTestBank.questionsLib = function (id) {
        var questions = [
            {
                question: "Jim Broke his leg and went to the hospital. 'His leg' is ",
                answer: "3",
                option: ["A personal pronoun", "an uncountable noun", "A transitive verb", "A direct object"],
            },
            {
                question: "Which prefix makes the opposite of all these words?: Appear, like, honest, agree",
                answer: "0",
                option: ["dis-", "un-", "mis-", "in-"],
            },
            {
                question: "which noun forms an adjective with the suffix -able?",
                answer: "2",
                option: ["Sad", "Pain", "Fashion", "Danger"],
            },
            {
                question: "Which word cannot be both a noun and a verb?",
                answer: "3",
                option: ["Kiss", "Dream", "Rest", "Meet"],
            },
            {
                question: "Which of these collocations is not correct?",
                answer: "2",
                option: ["A weak accent", "A strong coffee", "Draw some contract", "Hard work"],
            },
            {
                question: "What does the idiom 'Make up your mind' mean?",
                answer: "1",
                option: ["Don't worry", "Decide", "No problem", "It's your decision"],
            },
            {
                question: "Choose the correct preposition for these verbs: Apologize, wait, apply, look",
                answer: "0",
                option: ["To", "On", "For", "From"],
            },
            {
                question: "Which of these does not make a fixed expression with 'by'?",
                answer: "0",
                option: ["My own", "Mistake", "Hand", "Accident"],
            },
            {
                question: "Which expression can you use as a reply to 'Thank you'?",
                answer: "2",
                option: ["It does not matter", "Please", "No problem", "Sorry"],
            },
            {
                question: "Which of these expressions is the odd one out?",
                answer: "1",
                option: ["I don't mind this film", "I can't stand this film", "I quite like this film", "I'm really into this film"],
            },
            {
                question: "Your friend passed her driving test. What do you say?",
                answer: "1",
                option: ["Oh, what a pitty", "Oh, thats brilliant!", "I don't mind", "Really? interesting."],
            },
            {
                question: "Complete with the correct phrasal verb. 'What time does your alarm clock ______ in the morning?",
                answer: "2",
                option: ["Get through", "Give up", "Go off", "Go out"],
            },
            {
                question: "Choose the right verb for: 'Let's ______ a drink together' and 'Could I ______ the bill please?",
                answer: "3",
                option: ["Take", "Drink", "Look", "Have"],
            },
            {
                question: "Which of these have the wrong verb?",
                answer: "2",
                option: ["Joe is doing the shopping", "Please take a seat", "Can you make me a favor?", "Stan is making progress"],
            },
            {
                question: "Which verb can be used with all these?: A bus, a cold, a ball, a criminal",
                answer: "0",
                option: ["Catch", "Get", "Find", "Take"],
            },
            {
                question: "Which phrase can be used with all these nouns? Paper, cake, wood, advice",
                answer: "3",
                option: ["A slice of", "A box of", "A packet of", "A piece of"],
            },
            {
                question: "Complete the sentence: The food was ______ ",
                answer: "1",
                option: ["Very happy", "Quite delicious", "Unpleseantly delicious", "Very upset"],
            },
            {
                question: "Complete the sentence: The plane flew ______the Atlantic Ocean",
                answer: "3",
                option: ["Under", "Acording", "Sideways", "Across"],
            },
            {
                question: "Complete the sentence: ______ I watered the plants, they did not grow",
                answer: "3",
                option: ["Nonetheless", "In spite of", "However", "Eventhough"],
            },
            {
                question: "Complete the sentence: I lost my ticket, ______",
                answer: "1",
                option: ["Unless i walked home", "So I had to walk home", "Because I had to walk home", "No way but to walk"],
            },
            {
                question: "Which animal does not live on a farm?",
                answer: "2",
                option: ["Sheep", "Cow", "Gorilla", "Horse"],
            },
            {
                question: "What do you do when you are tired or bored?",
                answer: "0",
                option: ["Yawn", "Laugh", "Cry", "Shake hands"],
            },
            {
                question: "What is the opposite of 'generous'?",
                answer: "1",
                option: ["Honest", "Greedy", "Prideful", "Ungenerous"],
            },
            {
                question: "What can't we do with our hands?",
                answer: "3",
                option: ["Clap", "Wave", "Touch", "Stroll"],
            },
            {
                question: "Choose the definition for: 'Suburbs' (i.e. We live in the suburbs)",
                answer: "1",
                option: ["In the center of the town", "An area outside the center of town", "An area with no factories", "Downtown"],
            },
            {
                question: "Which of the following is not in the living room?",
                answer: "2",
                option: ["A carpet", "A TV", "A cooker", "An armchair"],
            },
            {
                question: "Which phrase is not correct?",
                answer: "0",
                option: ["The worth of living", "A good standard of living", "The cost of living", "Living production"],
            },
            {
                question: "Complete the sentence: Sam was ______ in a car accident",
                answer: "2",
                option: ["Tickled", "Happy", "Injured", "Promoted"],
            },
            {
                question: "Which is not a fruit?",
                answer: "1",
                option: ["Pineapple", "Brocolli", "Plum", "Grapes"],
            },
            {
                question: "Complete the sentence: Don't eat to many cream cakes, they are ______",
                answer: "0",
                option: ["Fattening", "Spicy", "Chilled", "Healthy"],
            },
            {
                question: "Complete the sentence: When you want to pass a car in front of you, you should wait until it is safe to ______",
                answer: "3",
                option: ["Park", "Pull out", "Brake", "Overtake"],
            },
            {
                question: "Which of these jobs is not a skilled manual job?",
                answer: "1",
                option: ["Plumber", "Pilot", "Electrician", "Mechanic"],
            },
            {
                question: "Which of the following in not in an office?",
                answer: "2",
                option: ["Filling cabinet", "Photocopier", "Chest of drawers", "Wastepaper basket"],
            },
            {
                question: "Which phrase means the same?: Prices have increased slowly",
                answer: "0",
                option: ["Risen gradually", "Dropped sharply", "Fallen slowly", "Gone up sharply"],
            },
            {
                question: "Which of the following verbs is the odd one out?",
                answer: "3",
                option: ["Kick", "Throw", "Hit", "Whistle"],
            },
            {
                question: "Complete the sentence: What is the film ______ ?",
                answer: "2",
                option: ["Take place", "Happening", "About", "Set"],
            },
            {
                question: "Which word means the same as 'the latests'?",
                answer: "3",
                option: ["The last", "The best", "The oldest", "The newest"],
            },
            {
                question: "Complete the sentence: You can ______ the file from the Internet if you want to keep it",
                answer: "2",
                option: ["Store", "Browse", "Download", "Stow"],
            },
            {
                question: "Complete the sentence: The police have arrested a man and ______",
                answer: "0",
                option: ["Charged him with murder", "Investigated a crime", "Brokn the law", "Proven he is guilty"],
            },
            {
                question: "Complete the sentence: A ______ is when there is no rain",
                answer: "1",
                option: ["Famine", "Drought", "Flood", "Disaster"],
            },
            {
                question: "Complete the sentence: The center of Rome is always ______ with tourists at this time of year",
                answer: "3",
                option: ["Lively", "Cosmopolitan", "Busier", "Packed"],
            },
            {
                question: "Which phrase has the wrong preposition?",
                answer: "2",
                option: ["At midnight", "For ages", "During two hours", "By 8 o'clock"],
            },
            {
                question: "What color do you get when you mix together red and blue?",
                answer: "0",
                option: ["Purple", "Green", "Grey", "Orange"],
            },
            {
                question: "Which expression means 'be careful'?",
                answer: "2",
                option: ["Out of order", "Do not disturb", "Mind your step", "Look after"],
            },
            {
                question: "What does the word 'stuff' refer to in: Will you please pick up your stuff and put it in the washing basket?!'",
                answer: "0",
                option: ["Clothes", "Books", "Rubbish", "Make-up"],
            },
            {
                question: "Which of the following is not informal or spoken English?",
                answer: "1",
                option: ["Excuse me, Where's the loo?", "If you require further assistance, contact the manager",
                    "I reckon you'll get a job", "The flat is handy for shopping"],
            },
            {
                question: "What does 'My phone went dead' mean?",
                answer: "3",
                option: ["It is broken", "It is frozen", "No service", "Battery with no charge"],
            },
            {
                question: "What color do you get when you mix red and yellow?",
                answer: "0",
                option: ["Orange", "Purple", "Blue", "Green"],
            }
        ];
        this.question = questions[id].question;
        this.answer = questions[id].answer;
        this.options = questions[id].option;
        this.totalQuestions = questions.length;
    };
    return IntermediateTestBank;
}());
IntermediateTestBank = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], IntermediateTestBank);

//# sourceMappingURL=intermediateTestBank.service.js.map

/***/ }),

/***/ "./src/app/shared/services/testBanks/testBanks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestBanks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testBanks_beginnerTestBank_service__ = __webpack_require__("./src/app/shared/services/testBanks/beginnerTestBank.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testBanks_intermediateTestBank_service__ = __webpack_require__("./src/app/shared/services/testBanks/intermediateTestBank.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__testBanks_upperTestBank_service__ = __webpack_require__("./src/app/shared/services/testBanks/upperTestBank.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testBanks_advancedTestBank_service__ = __webpack_require__("./src/app/shared/services/testBanks/advancedTestBank.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__testBanks_vocab_a_service__ = __webpack_require__("./src/app/shared/services/testBanks/vocab-a.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__testBanks_vocab_b_service__ = __webpack_require__("./src/app/shared/services/testBanks/vocab-b.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/**
 * This class acts as a single access point for all other test banks
 * The class BeginnerComponent in /layout/tests/beginner is the one that uses this class.
 * Depending on the 'level' it will return the question/an
 */
var TestBanks = (function () {
    function TestBanks() {
        //Constants-----------------------------------------------------------------------
        this.BEGINNER = "Beginner";
        this.INTER = "Intermediate";
        this.UPPER = "Upper Intermediate";
        this.ADVANCED = "Advanced";
        this.VOCAB1 = "Vocabulary Size (A)";
        this.VOCAB2 = "Vocabulary Size (B)";
        this.DEPTH = "D";
        //This for when the testbanks are being modified.. something to pass on to the html
        this.NOTE = "THIS SECTION IS NOT DONE YET!! COME BACK SOON...";
    }
    /**
     * Gets the question in position 'id' from the test bank named 'level'
     * @param id is the number to get from the list of questions.
     * @param level is the level from where tp pull from.
     */
    TestBanks.prototype.getQuestion = function (id, level) {
        if (level == "beginner" || level == this.BEGINNER) {
            __WEBPACK_IMPORTED_MODULE_1__testBanks_beginnerTestBank_service__["a" /* BeginnerTestBank */].questionsLib(id);
            this.question = __WEBPACK_IMPORTED_MODULE_1__testBanks_beginnerTestBank_service__["a" /* BeginnerTestBank */].question;
            this.answer = __WEBPACK_IMPORTED_MODULE_1__testBanks_beginnerTestBank_service__["a" /* BeginnerTestBank */].answer;
            this.options = __WEBPACK_IMPORTED_MODULE_1__testBanks_beginnerTestBank_service__["a" /* BeginnerTestBank */].options;
            this.totalQuestions = __WEBPACK_IMPORTED_MODULE_1__testBanks_beginnerTestBank_service__["a" /* BeginnerTestBank */].totalQuestions;
        } //Pulls the quetions from the Beginner test bank
        if (level == "intermediate" || level == this.INTER) {
            __WEBPACK_IMPORTED_MODULE_2__testBanks_intermediateTestBank_service__["a" /* IntermediateTestBank */].questionsLib(id);
            this.question = __WEBPACK_IMPORTED_MODULE_2__testBanks_intermediateTestBank_service__["a" /* IntermediateTestBank */].question;
            this.answer = __WEBPACK_IMPORTED_MODULE_2__testBanks_intermediateTestBank_service__["a" /* IntermediateTestBank */].answer;
            this.options = __WEBPACK_IMPORTED_MODULE_2__testBanks_intermediateTestBank_service__["a" /* IntermediateTestBank */].options;
            this.totalQuestions = __WEBPACK_IMPORTED_MODULE_2__testBanks_intermediateTestBank_service__["a" /* IntermediateTestBank */].totalQuestions;
        } //Pulls the questions from the Intermediate test bank
        if (level == "upper" || level == this.UPPER) {
            __WEBPACK_IMPORTED_MODULE_3__testBanks_upperTestBank_service__["a" /* UpperTestBank */].questionsLib(id);
            this.question = __WEBPACK_IMPORTED_MODULE_3__testBanks_upperTestBank_service__["a" /* UpperTestBank */].question;
            this.answer = __WEBPACK_IMPORTED_MODULE_3__testBanks_upperTestBank_service__["a" /* UpperTestBank */].answer;
            this.options = __WEBPACK_IMPORTED_MODULE_3__testBanks_upperTestBank_service__["a" /* UpperTestBank */].options;
            this.totalQuestions = __WEBPACK_IMPORTED_MODULE_3__testBanks_upperTestBank_service__["a" /* UpperTestBank */].totalQuestions;
        } //Pulls the questions from the Upper Intermediate test bank
        if (level == "advanced" || level == this.ADVANCED) {
            __WEBPACK_IMPORTED_MODULE_4__testBanks_advancedTestBank_service__["a" /* AdvancedTestBank */].questionsLib(id);
            this.question = __WEBPACK_IMPORTED_MODULE_4__testBanks_advancedTestBank_service__["a" /* AdvancedTestBank */].question;
            this.answer = __WEBPACK_IMPORTED_MODULE_4__testBanks_advancedTestBank_service__["a" /* AdvancedTestBank */].answer;
            this.options = __WEBPACK_IMPORTED_MODULE_4__testBanks_advancedTestBank_service__["a" /* AdvancedTestBank */].options;
            this.totalQuestions = __WEBPACK_IMPORTED_MODULE_4__testBanks_advancedTestBank_service__["a" /* AdvancedTestBank */].totalQuestions;
        } //Pulls the questions from the Advanced test bank
        if (level == "vocabA" || level == this.VOCAB1) {
            __WEBPACK_IMPORTED_MODULE_5__testBanks_vocab_a_service__["a" /* VocabATestBank */].questionsLib(id);
            this.question = __WEBPACK_IMPORTED_MODULE_5__testBanks_vocab_a_service__["a" /* VocabATestBank */].question;
            this.answer = __WEBPACK_IMPORTED_MODULE_5__testBanks_vocab_a_service__["a" /* VocabATestBank */].answer;
            this.options = __WEBPACK_IMPORTED_MODULE_5__testBanks_vocab_a_service__["a" /* VocabATestBank */].options;
            this.totalQuestions = __WEBPACK_IMPORTED_MODULE_5__testBanks_vocab_a_service__["a" /* VocabATestBank */].totalQuestions;
        } //Pulls the questions from the VocabATestBank test bank
        if (level == "vocabB" || level == this.VOCAB1) {
            __WEBPACK_IMPORTED_MODULE_6__testBanks_vocab_b_service__["a" /* VocabBTestBank */].questionsLib(id);
            this.question = __WEBPACK_IMPORTED_MODULE_6__testBanks_vocab_b_service__["a" /* VocabBTestBank */].question;
            this.answer = __WEBPACK_IMPORTED_MODULE_6__testBanks_vocab_b_service__["a" /* VocabBTestBank */].answer;
            this.options = __WEBPACK_IMPORTED_MODULE_6__testBanks_vocab_b_service__["a" /* VocabBTestBank */].options;
            this.totalQuestions = __WEBPACK_IMPORTED_MODULE_6__testBanks_vocab_b_service__["a" /* VocabBTestBank */].totalQuestions;
        } //Pulls the questions from the VocabBTestBank test bank
        if (level == "depth" || level == this.DEPTH) {
            //AdvancedTestBank.questionsLib(id);
            //this.question = AdvancedTestBank.question;
            //this.answer = AdvancedTestBank.answer;
            //this.options = AdvancedTestBank.options;
            //this.totalQuestions = AdvancedTestBank.totalQuestions;
            this.answer = this.NOTE;
            this.question = this.NOTE;
            this.options = [this.NOTE, this.NOTE, this.NOTE, this.NOTE];
            this.totalQuestions = 0;
        } //Pulls the questions from the Intermediate test bank
    };
    return TestBanks;
}());
TestBanks = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], TestBanks);

//# sourceMappingURL=testBanks.service.js.map

/***/ }),

/***/ "./src/app/shared/services/testBanks/upperTestBank.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpperTestBank; });
var UpperTestBank = (function () {
    function UpperTestBank() {
    }
    UpperTestBank.questionsLib = function (id) {
        var questions = [
            {
                quesiton: "Complete the definition: A pejorative word ______.",
                answer: "1",
                options: ["Is very formal", "Has a negative association", "Is used mainly in conversation", "Is informal"]
            },
            {
                quesiton: "Which of the following prefixes means 'Before'?",
                answer: "3",
                options: ["Ex-", "Bi-", "Re-", "Pre-"]
            },
            {
                quesiton: "What class of word can have any of the following suffixes? -hood, -ship, -ity, -ment",
                answer: "1",
                options: ["Verb", "Noun", "Adjective", "Adverb"]
            },
            {
                quesiton: "Which adjective does not form a noun with the suffix -ness?",
                answer: "3",
                options: ["Tender", "Weak", "Kind", "Strong"]
            },
            {
                quesiton: "Which of these adjectives does not exist?",
                answer: "2",
                options: ["Worn-out", "Hard-up", "Well-up", "All-out"]
            },
            {
                quesiton: "Complete the sentence: The ______ for tomorrow ia rain in most places",
                answer: "0",
                options: ["Forecast", "Fallout", "Outcome", "Feedback"]
            },
            {
                quesiton: "Which of the following English words come from Spanish?",
                answer: "0",
                options: ["Patio", "Piano", "Ghetto", "Casino"]
            },
            {
                quesiton: "Someone who is always buying new things is a ______.",
                answer: "2",
                options: ["Singleton", "Spin Doctor", "Shopaholic", "Disaster"]
            },
            {
                quesiton: "Which word is the odd one out?",
                answer: "1",
                options: ["Clink", "Splash", "Clang", "Tinkle"]
            },
            {
                quesiton: "Which sentence contains the the wrong homonym?",
                answer: "0",
                options: ["There is a sail on the department store!", "I like stake and chips",
                    "The weather in Spain was really hot", "I love red! - It's my favorite color"]
            },
            {
                quesiton: "You can rent a car ______ you have a current driving license",
                answer: "2",
                options: ["Supposing", "Unless", "On condition that", "In case"]
            },
            {
                quesiton: "Which phrase is not correct?",
                answer: "3",
                options: ["A world of difference", "Poles apart", "A great divide", "A yawning discrepancy"]
            },
            {
                quesiton: "Complete the sentence: ______ studying for a degree, I work two evenings a week in a restaurant.",
                answer: "3",
                options: ["Equally", "Moreover", "Apart from", "In addition to"]
            },
            {
                quesiton: "Do you have Angela's phone number? '______ I'll just have a look in my address book.",
                answer: "1",
                options: ["Mind you...", "Hang on...", "Anyway...", "Still..."]
            },
            {
                quesiton: "Which word is always used in the plural",
                answer: "0",
                options: ["Pijamas", "Tracksuit", "Glove", "Sock"]
            },
            {
                quesiton: "Complete the sentence: The operation was performed by a ______ of three doctors",
                answer: "3",
                options: ["Cast", "Gang", "Crew", "Team"]
            },
            {
                quesiton: "Which is the correct container for all of these? Tissues, cereal, chocolates",
                answer: "3",
                options: ["Jar", "Pack", "Carton", "Box"]
            },
            {
                quesiton: "Which word is the odd one out?",
                answer: "0",
                options: ["Breeze", "Flood", "Drizzle", "Downpour"]
            },
            {
                quesiton: "Complete the definition: 'Someone who is ______ enjoys spending time with other people",
                answer: "2",
                options: ["Eccentric", "Extravagant", "Gregarious", "Inquisitive"]
            },
            {
                quesiton: "Which of these objects does not belong in the kitchen?",
                answer: "3",
                options: ["Grater", "Wok", "Corkscrew", "Remote Control"]
            },
            {
                quesiton: "Complete both sentences: 'My car's _____' and 'The TV's _____",
                answer: "2",
                options: ["Flat", "Run out", "Broken down", "Stopped"]
            },
            {
                quesiton: "Which oh these is not a disease?",
                answer: "2",
                options: ["Rabies", "Cholera", "Poison", "Leprosy"]
            },
            {
                quesiton: "What is the opposite of bitter?",
                answer: "2",
                options: ["Spicy", "Sour", "Sweet", "Salty"]
            },
            {
                quesiton: "Which is not used to describe a part if a tree?",
                answer: "3",
                options: ["Branch", "Twig", "Trunk", "Rock"]
            },
            {
                quesiton: "Complete the sentence: I think i've got ______: My joints swollen and I can't walk very well ",
                answer: "0",
                options: ["Arthritis", "Diabeetus", "A rash", "An Ulcer"]
            },
            {
                quesiton: "Complete the sentence: When you go to L.A., don't forget to visit the ______ Sunset Blvd.",
                answer: "1",
                options: ["Exclusive", "Legendary", "Exotic", "Intoxicating"]
            },
            {
                quesiton: "Complete the sentence: A modem is a ______.",
                answer: "2",
                options: ["A camera with recors sounds and pictures", "A machine that makes copies", "A piece of Equipment used to send information from one PC to the next",
                    "A machine that plays back sound"]
            },
            {
                quesiton: "Which of these is not associated with the internet?",
                answer: "3",
                options: ["Newsgroup", "Home-page", "FAQ", "Spreadsheet"]
            },
            {
                quesiton: "Complete the sentence: The United Kingdom is a  ______.",
                answer: "3",
                options: ["Republic", "Dictatorship", "Federation", "Monarchy"]
            },
            {
                quesiton: "Which of these people is not conected with a trial?",
                answer: "2",
                options: ["Judge", "Jury", "Detective", "Witness"]
            },
            {
                quesiton: "WHich expression means the same as 'He's likely to look for another job'?",
                answer: "0",
                options: ["I reckon he'll", "I suspect he'll", "I'm convinced he'll", "I maintain"]
            },
            {
                quesiton: "Complete the sentence: Jane is always ______ about how many languages she can speak",
                answer: "1",
                options: ["Complaining", "Boasting", "Grumpling", "Begging"]
            },
            {
                quesiton: "Which of these verbs is not connected with 'touch'?",
                answer: "2",
                options: ["Tap", "Stroke", "Glimpse", "Press"]
            },
            {
                quesiton: "Which of these can you do with your eyes?",
                answer: "3",
                options: ["Blush", "Yawn", "Grin", "Blink"]
            },
            {
                quesiton: "Complete the sentence: 'We arrived at the airport ______ for our flight'.",
                answer: "2",
                options: ["At times", "By the time", "Just in time", "At a time"]
            },
            {
                quesiton: "Complete the sentence: 'The cars ______ along at ten miles an hours because of a traffic jam'",
                answer: "1",
                options: ["Swerved", "Crawled", "Flowed", "Fluttered"]
            },
            {
                quesiton: "Chooe the correct idiom that is used when something is bothersome. ",
                answer: "0",
                options: ["A pain in the neck", "In the red", "Barking up the wrong tree", "A pie in the sky"]
            },
            {
                quesiton: "Which of these expressions means 'I've just remembered something important!'",
                answer: "1",
                options: ["Come to think of it", "That reminds me", "If you ask me", "As I was saying"]
            },
            {
                quesiton: "Complete the sentence: 'His Face suddenly turned as white as ______",
                answer: "2",
                options: ["A paper", "Snow", "A ghost", "A cloud"]
            },
            {
                quesiton: "Which of these idioms is the odd one out?",
                answer: "3",
                options: ["She's as hard as nails", "She's a really cold fish", "He has a heart of gold", "He's a bit of an awkward customer"]
            },
            {
                quesiton: "Complete the idiom: If you are worries, you should talk to someone and get it off your ______.",
                answer: "2",
                options: ["Head", "Plane", "Chest", "Shoulders"]
            },
            {
                quesiton: "Choose the correct idiom: 'We only need a small group of people to do this job - You know what they say! ______",
                answer: "3",
                options: ["There's no smoke without fire", "Many hands make light work",
                    "Never look a gift-horse in the mouth", "Too many cooks spoil the broth"]
            },
            {
                quesiton: "Complete the sentence: The band is _____ their new CD in time for Christmas",
                answer: "0",
                options: ["Bringing out", "Bringing about", "Bringing on", "Bringing up"]
            },
            {
                quesiton: "Complete the sentence: We've had cable TV ______. Now we can get about 60 channels!.",
                answer: "3",
                options: ["Put among", "Put about", "Put out", "Put in"]
            },
            {
                quesiton: "Which expression would you see on signs in a shop?",
                answer: "2",
                options: ["Trespassers will be prosecuted", "Pay and display", "Place your order here", "Hard hat area"]
            }
        ];
        this.question = questions[id].quesiton;
        this.answer = questions[id].answer;
        this.options = questions[id].options;
        this.totalQuestions = questions.length;
    };
    return UpperTestBank;
}());

//# sourceMappingURL=upperTestBank.service.js.map

/***/ }),

/***/ "./src/app/shared/services/testBanks/vocab-a.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VocabATestBank; });
var VocabATestBank = (function () {
    function VocabATestBank() {
    }
    VocabATestBank.questionsLib = function (id) {
        var questions = [
            {
                question: "See: They <saw it>",
                answer: "2",
                options: ["Closed it tightly", "Waited for it", "Lokked at it", "Started it up"]
            },
            {
                question: "Time: They have a lot of <time>",
                answer: "2",
                options: ["Money", "Food", "Hours", "Friends"]
            },
            {
                question: "Period: It was a difficult <period>",
                answer: "1",
                options: ["Question", "Time", "Thing to do", "Task"]
            },
            {
                question: "Figure: Is this the right <figure>?",
                answer: "3",
                options: ["Thing", "Place", "Time", "Number"]
            },
            {
                question: "Poor: We <are poor>",
                answer: "0",
                options: ["Have no money", "Feel happy", "Are very interested", "Do not work hard"]
            },
            {
                question: "Microphone: Please use the <microphone>.",
                answer: "1",
                options: ["Machine for making hot food", "Machine that makes sound louder", "Machine that makes things look bigger", "Small telephone"]
            },
            {
                question: "Nil: His mark for the question was <nil>.",
                answer: "1",
                options: ["Very bad", "Nothing", "Vey good", "In the middle"]
            },
            {
                question: "Pub: They went to the <pub>",
                answer: "0",
                options: ["Place where people drink and talk", "Place that looks after money", "Large building with many shops", "Building for swimming"]
            },
            {
                question: "Circle: Make a <circle>.",
                answer: "2",
                options: ["Rough picture", "Space with nothing in it", "Round shape", "Large hole"]
            },
            {
                question: "Dig: Our dog often <digs>",
                answer: "1",
                options: ["Solves a problem", "Creates a hole in the ground", "Wants to sleep", "Enters the water"]
            },
            {
                question: "Soldier: He is a <soldier>.",
                answer: "3",
                options: ["Person in a business", "Person who studies", "Person who uses metal", "Person in the army"]
            },
            {
                question: "Restore: It has been <restored>.",
                answer: "2",
                options: ["Said again", "Given to a different person", "Made like new again", "Given a lower price"]
            },
            {
                question: "Pro: He is a <pro>.",
                answer: "3",
                options: ["Someone who is employed to find out secrets", "A stupid person", "A writter", "Someone who is paid for playing a sport"]
            },
            {
                question: "Compound: They made a new <compound>.",
                answer: "1",
                options: ["Agreement", "Thing made of two or more parts", "Group of people forming a business", "Guess based on past experiences"]
            },
            {
                question: "Deficit: the company had a <large deficit>",
                answer: "0",
                options: ["Spent more money than they made", "Went down a lot in value", "Had a plan for its spending", "Large amout of money saved in a bank"]
            },
            {
                question: "Strap: He broke the <strap>",
                answer: "3",
                options: ["Promise", "Top cover", "Shallow dish for food", "Strip of strong material"]
            },
            {
                question: "Weep: He <wept>",
                answer: "1",
                options: ["Finished his course", "Cried", "Laughed", "Died"]
            },
            {
                question: "Haunt: The house is <haunted>.",
                answer: "3",
                options: ["Full of decorations", "Rented", "Sold", "Full of ghosts"]
            },
            {
                question: "Cube: I need one more <cube>.",
                answer: "1",
                options: ["Sharp object for joining things", "Solid square block", "Tall cup with no saucer", "Stiff paper folder in half"]
            },
            {
                question: "Butler: They have a <butler>",
                answer: "0",
                options: ["Man servant", "machine for cutting down trees", "Private teacher", "Puppy"]
            },
            {
                question: "Nun: We saw a <nun>",
                answer: "2",
                options: ["Long thin creature that lives in the earth", "Terrible accident", "Woman following a strict religious life", "Unexplained bright light"]
            },
            {
                question: "Olive: We bough <olives>",
                answer: "0",
                options: ["Oily fruit", "Scented flowers", "Tools for digging", "A new car"]
            },
            {
                question: "Shudder: The boy <shuddered>",
                answer: "2",
                options: ["Spoke with a low voice", "Almost fell", "Shook", "Called out loudly"]
            },
            {
                question: "Threshhold: They raised the <threshold>",
                answer: "1",
                options: ["Flag", "Point or line where something changes", "Roof inside a building", "Cost of borrowing money"]
            },
            {
                question: "Demography: This book is about <demography>",
                answer: "3",
                options: ["The study of patterns of land use", "The study of the use of pictures", "The study of mobement of water", "The study of population"]
            },
            {
                question: "Malign: His <malign> influence is still felt",
                answer: "1",
                options: ["Good", "Evil", "Vey important", "Secret"]
            },
            {
                question: "Strangle: He <strangled> her",
                answer: "0",
                options: ["Killed her by pressing her throat", "Gave her all the things she wanted", "Took her away by force", "Admired her greatly"]
            },
            {
                question: "Dinosaur: The children were pretending to be <dinosaurs>",
                answer: "3",
                options: ["robbers who work at sea", "Humans with wings", "Large creatures that breathe fire", "Animals that lived an extremely long time"]
            },
            {
                question: "Jug: He was holding <a jug>",
                answer: "0",
                options: ["A container used to hold liquids", "An informal discussion", "A soft cap", "A weapon"]
            },
            {
                question: "Crab: Do you like <crabs>?",
                answer: "2",
                options: ["Thin small cakes", "Hard collars", "Sea creatures that always walk toone side", "Large insects that sing at night"]
            },
            {
                question: "Quilt: They made a <quilt>",
                answer: "2",
                options: ["Fire", "Firm agreement", "Thick warm cover for a bed", "Feather pen"]
            },
            {
                question: "Tummy: Look at my <tummy>",
                answer: "1",
                options: ["Fabric", "Stomach", "Soft animal", "finger used for gripping"]
            },
            {
                question: "Eclipse: <There was an eclipse>",
                answer: "3",
                options: ["A strong wind blew all day", "I heard something hit the water", "People were killed", "The sun was hidden by the moon"]
            },
            {
                question: "Excrete: Thus was <excreted> recently",
                answer: "0",
                options: ["Pushed or sent out", "Made clear", "Discovered by science", "Put on a list of illegal things"]
            },
            {
                question: "Ubiquitous: Many unwanted plants are <ubiquitous>",
                answer: "2",
                options: ["Tasty", "Have strong roots", "Found everywhere", "Die away in the winter"]
            },
            {
                question: "Marrow: This is <the marrow>",
                answer: "1",
                options: ["Symbol that brings good luck to the team", "Soft center of the bone", "Control for guiding a plane", "Increase in salary"]
            },
            {
                question: "Cabaret: We saw the <cabaret>",
                answer: "1",
                options: ["Painting covering a hole", "A song and dance performance", "Small crawling creature", "Person who is half fish"]
            },
            {
                question: "Cavalier: He treated her <in a cavalier manner>",
                answer: "0",
                options: ["Without care", "With goos manners", "Awkwardly", "As a brother would"]
            },
            {
                question: "Veer: The car <veered>",
                answer: "1",
                options: ["Moved shakily", "Changed course", "Made a wide turn", "Slid without turning"]
            },
            {
                question: "Yogurt: This <yogurt> is disgusting!",
                answer: "2",
                options: ["Dark mud found in rivers", "Unhealthy, open sore", "Thick, soured milk, often with sugar", "Large purple fruit"]
            },
            {
                question: "Octopus: They saw an <octopus>",
                answer: "3",
                options: ["A ship", "A large bird", "A machine that flies", "A sea creature with eight legs"]
            },
            {
                question: "Monologue: Now he has a <monologue>",
                answer: "1",
                options: ["A single piece of glass held over an eye", "Long turn at talking without interruption", "Position with all power", "Picture made by joining letters together"]
            },
            {
                question: "Candid: Please be <candid>",
                answer: "3",
                options: ["Careful", "Show empathy", "Show remorse", "Say what you really think"]
            },
            {
                question: "Nozzle: Aim the <nozzle> toward it.",
                answer: "2",
                options: ["Space that light passes through", "Dry patch of skin", "Pipe attachment that forces water", "Sharp part of a fork"]
            },
            {
                question: "Psychosis: He has <psychosis>",
                answer: "3",
                options: ["An inability to move", "Super powers", "A body organ that process sugar", "A mental illness"]
            },
            {
                question: "Ruck: He got hurt in the <ruck>",
                answer: "2",
                options: ["Region between the stomach and the top of the leg", "Noisy street", "Group of players gatheres round the ball", "Race across a field of snow"]
            },
            {
                question: "Rouble: He had a lot of <rouble>",
                answer: "2",
                options: ["Very small red stones", "Distant family member", "Russian money", "moral difficulty in mind"]
            },
            {
                question: "Canonical: These are <canonical examples>",
                answer: "2",
                options: ["Examples which break the usual rules", "Examples taken from a religious book", "regular and widely accepted examples", "Examples discocered very recently"]
            },
            {
                question: "Puree: This <puree> is bringht green",
                answer: "0",
                options: ["Fruit or vegetable in liquid form", "Dress worn by women in India", "Skin of a fruit", "Very thin material"]
            },
            {
                question: "Vial: Put it in a <vial>",
                answer: "3",
                options: ["Device that stores electricity", "Country residense", "Dramatic scene", "Small glass bottle"]
            },
            {
                question: "Counterclaim: They made a <counterclaim>",
                answer: "0",
                options: ["A demand response made by once side in a law case", "A request for a shop to take back thigs", "An agreement between two companies", " A decorative cover for a bed"]
            },
            {
                question: "Refectory: We met in the <refectory>",
                answer: "0",
                options: ["Room for eating", "Office where legal papers can be signed", "Room for several people to sleep in", "Room with glass walls"]
            },
            {
                question: "Trill: He practised the <trill>",
                answer: "0",
                options: ["Repeated high musical sound", "Type of stringed instrument", "Way of throwing the ball", "Dance step of turning around very fast"]
            },
            {
                question: "Talon: Just look at those <talons>!",
                answer: "1",
                options: ["High points of a mountain", "Sharp hooks on the feet of a hunting bird", "Heavy metal coats to protect againts weapons", "People who make fool of themselves"]
            },
            {
                question: "Plankton: We saw a lot of <plankton> here",
                answer: "1",
                options: ["Poisonous plants that spread quick", "Small animal or plants found in water", "Trees producing hard wood", "Grey soil that often causes land to slip"]
            },
            {
                question: "Soliloquy: That was an excelent <soliloquy>",
                answer: "3",
                options: ["Song for six people", "Short clever saying", "Entertainment using lights and sound", "Speech in the theater by the character who is alone"]
            },
            {
                question: "Puma: We saw a <puma>",
                answer: "2",
                options: ["Small house made of mud bricks", "Tree from hot countries", "Large wild cat", "Very strong winds"]
            },
            {
                question: "Augur: It <augured> well",
                answer: "0",
                options: ["Promised good things for the future", "Agreed with what was expected", "Had a good color", "Rang with a clear, beautiful sound"]
            },
            {
                question: "Emir: We saw the <emir>",
                answer: "2",
                options: ["Bird with two long curved tail feathers", "Woman who cares for other people's children", "Middle Eastern chief with power in his own land", "House made out of ice"]
            },
            {
                question: "Didactic: The story <is very dedactic>",
                answer: "0",
                options: ["Tries to teach something", "Is very hard to believe", "Deals with exciting actions", "Is written witn unclear meaning"]
            },
            {
                question: "Cranny: Look what we found in the <cranny>",
                answer: "1",
                options: ["Sale of unwanted objects", "Narrow opening", "Space for storing things", "Large wooden box"]
            },
            {
                question: "Lectern: He stood at the <lectern>",
                answer: "0",
                options: ["Desk made o hold a book at a good height for reading", "Table or block used for church ceremonies", "Place where you buy drinks", "Very edge"]
            },
            {
                question: "Azalea: This <azalea>is very pretty",
                answer: "0",
                options: ["Small tree with flowers growing in groups", "Light natural fabric", "Long piece of material worn in India", "Sea shell shaped like a fan"]
            },
            {
                question: "Marsupial: It is a <marsupial>",
                answer: "3",
                options: ["An animal with small feet", "A plant that takes time to grow", "Plant with flowers that turn to the sun", "An animal with pockets for its babies"]
            },
            {
                question: "Bawdy: It was very <bawdy>",
                answer: "3",
                options: ["Unpredictable", "Innocent", "Rushed", "Indecent"]
            },
            {
                question: "Crowbar: He used a <crowbar>",
                answer: "0",
                options: ["Heavy iron bar with a curved edge", "False name", "Sharp tool to make holes", "Light metal walking stick"]
            },
            {
                question: "Spangled: Her dress was <spangled>",
                answer: "1",
                options: ["Torn into thin strips", "Covered with small bright decorations", "Made with lots of folds in fabric", "Ruined by touching something vey hot"]
            },
            {
                question: "Aver: She <averred> that it wsa the truth",
                answer: "1",
                options: ["Refused to agree", "Declared", "Believed", "Warned"]
            },
            {
                question: "Retro: It has a <retro> look",
                answer: "3",
                options: ["Very fashionable look", "Look of a piece of modern art", "Used before", "Look of something from an earlier time"]
            },
            {
                question: "Rascal: She is such a <rascal>",
                answer: "3",
                options: ["An unbeliever", "Demented", "Hard wroker", "Bad girl"]
            },
            {
                question: "Tweezers: They used <tweezers>",
                answer: "2",
                options: ["Small piece of metal for holding papers", "Small piece of string for closing wounds",
                    "A tool with  two blades for picking up small objects", "Strong tool for cutting plants"]
            },
            {
                question: "Bidet: They have <bidet>",
                answer: "0",
                options: ["Low basin for washing the body after using the toilet", "Large fierce brown dog", "Small private swimming pool", "Man to help in the house"]
            },
            {
                question: "Sloop: Whoose <sloop> is that?",
                answer: "1",
                options: ["Warm hat", "Light sailing boat", "left over food", "untidy work"]
            },
            {
                question: "Swingeing: They got <swingeing fines>",
                answer: "0",
                options: ["Very large fines", "Very small fines", "Fines paid in small amounts", "Fines that vary depending on income"]
            },
            {
                question: "Cenotaph: We met at the <cenotaph>",
                answer: "2",
                options: ["Large important church", "Public square", "Memorial for people buried somewhere else", "Underground train station"]
            },
            {
                question: "Denouement: I was dissapointed with the <denouement>",
                answer: "0",
                options: ["Ending of a story which solves the mystery", "Amount of money paid for a piece of work", "Official report of a meeting", "Small place to live"]
            },
            {
                question: "Bittern: She saw a <bittern>",
                answer: "3",
                options: ["Large bottle for storing liquids", "small green snake", "False picture caused by hot air", "Water bird with long legs and a loud call"]
            },
            {
                question: "Reconnoitre: They have gone to <reconnoitre>",
                answer: "1",
                options: ["Think again", "Make an examination of a new place", "Have a good time to mark a happy event", "Complain formally"]
            },
            {
                question: "Magnanimity: We will never forget her <magnanimity>",
                answer: "2",
                options: ["Very offensive manners", "Courage in times of trouble", "Generosity", "Complete sincere words"]
            },
            {
                question: "Effete: He has become <effete>",
                answer: "0",
                options: ["Weak and soft", "Too fond of something", "unable to leave his bed", "Extremely easy to annoy"]
            },
            {
                question: "Rollick: They were <rollick>",
                answer: "2",
                options: ["Driving very fast", "Staying away from school", "Having fun in a noisy and spirited way", "Sliding on snow"]
            },
            {
                question: "Gobbet: The cat left a <gobbet> behind",
                answer: "3",
                options: ["Strip of torn material", "Footprint", "Piece of solid waste from the body", "Lump of food returned from the stomach"]
            },
            {
                question: "Rigmarole: I hate the <rigmarole>",
                answer: "3",
                options: ["Very fast and dificult dance", "Funny character in a theatre", "Tax form", "long, pointless and complicates set of actions"]
            },
            {
                question: "Alimony: The article was about <alimony>",
                answer: "1",
                options: ["Feelings of bitternes and annoyance", "Money for the care f children, regurlarly after divorce", "Giving praise for excelent ideas", "A metal that breaks easily"]
            },
            {
                question: "Roughshod: he <rode roughshod>",
                answer: "2",
                options: ["Traveled without good preparation", "Made lots of mistakes", "Did not concider other people's feelings", "Did not care about his own comfort"]
            },
            {
                question: "Copra: They supply <copra>",
                answer: "1",
                options: ["A highly poisonous substance used to kill plants", "The dried meat from a large nut used to make oil", "A venemous snake", "Strong rope used on a sail"]
            },
            {
                question: "Bier: She lay on the <bier>",
                answer: "3",
                options: ["Folding garden chair", "Grass next to the river", "Place where boats are tied up", "Board on which a dead body is carried"]
            },
            {
                question: "Torpid: He was <torpid>",
                answer: "3",
                options: ["Undecided", "Filled with very strong feelings", "Confused", "Slow and sleepy"]
            },
            {
                question: "Dachshund: She loves her <dachsund>",
                answer: "2",
                options: ["Warm fur hat", "Thick floor rug", "Small dog with small legs", "Old musical instrument"]
            },
            {
                question: "Cadenza: What do you think of the <cadenza>?",
                answer: "3",
                options: ["Cake topped with cream and fruit", "Large box hanging from a wire", "Slow formal dance from Italy", "Passage in a piece of music that shows a player's great skill"]
            },
            {
                question: "Obtrude: These thoughts <obtruded themselves>",
                answer: "3",
                options: ["Got themselves lost", "Did not agree with each other", "Got mixed up", "Pushed themselves forward in the mind"]
            },
            {
                question: "Panzer: They saw a <panzer> getting nearer",
                answer: "2",
                options: ["Players in a marching band", "Figher planes", "Large, slow moving windowless army cars", "Policewomen"]
            },
            {
                question: "Cyborg: She read about a <cyborg>",
                answer: "0",
                options: ["An integrated human-machine system", "A musical intrument with 40 strings", "A small, newly invented object", "A warm wind in winter"]
            },
            {
                question: "Zygote: It is a <zygote>",
                answer: "0",
                options: ["An early phase of sexual reproduction", "A lot of bother over nothing", "A small animal found in South Africa", "A gun used to launch rockets"]
            },
            {
                question: "Sylvan: The painting has a <sylvan> theme",
                answer: "2",
                options: ["Lost love", "Wandering", "Forest", "Casual folk"]
            },
            {
                question: "Sagacious: She had many ideas that were <sagacious>",
                answer: "0",
                options: ["Instinctively clever", "Ridiculous and wild", "About abusing people and being abused", "Rebelious and dividing"]
            },
            {
                question: "Spatiotemporal: My theory is <spatiotemporal>",
                answer: "3",
                options: ["Focused on small details", "Annoying to people", "Objectionably modern", "Oriented to time and space"]
            },
            {
                question: "Casuist: Don't <play the casuist> with me",
                answer: "2",
                options: ["Focus only on self-pleasure", "Act like a tough guy", "Make judgements about my conduct of duty", "Be stupid"]
            },
            {
                question: "Cyberpunk: I like <cyberpunk>",
                answer: "1",
                options: ["Medicine thta does not use drugs", "One variety of science-fiction", "Art and science of eating", ""]
            },
            {
                question: "Pussyfoot: Let's not <pussyfoot around>",
                answer: "1",
                options: ["Criticise unreasonably", "Take care to avoid confrontation", "Attack indirectly", "Suddenly start"]
            },
        ];
        this.totalQuestions = questions.length;
        this.answer = questions[id].answer;
        this.question = questions[id].question;
        this.options = questions[id].options;
    };
    return VocabATestBank;
}());

//# sourceMappingURL=vocab-a.service.js.map

/***/ }),

/***/ "./src/app/shared/services/testBanks/vocab-b.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VocabBTestBank; });
var VocabBTestBank = (function () {
    function VocabBTestBank() {
    }
    VocabBTestBank.questionsLib = function (id) {
        var questions = [
            {
                question: "Drive: He <drives> fast.",
                answer: "3",
                options: ["Swims", "Learns", "Throws a ball", "Uses a car"],
            },
            {
                question: "Jump: She tried to <jump>.",
                answer: "1",
                options: ["Lie on top of the water", "Get off the ground suddenly", "Stop the car at the edge of the road", "Move very fast"],
            },
            {
                question: "Shoe: Where is your<shoe>?",
                answer: "3",
                options: ["Thing you throw", "Thing u keep money in", "Thing used for writing", "This u wear on your foot"],
            },
            {
                question: "Standard: <Her standards> are very high.",
                answer: "1",
                options: ["Bits at the back under her shoes ", "Levels she reaches in everything", "Marks she gets in school", "Money she asks for"],
            },
            {
                question: "Basis: This was used as the <basis>",
                answer: "3",
                options: ["Answer", "Place to take a rest", "Next step", "Main part"],
            },
            {
                question: "Maintain: Can they <maintain it>?",
                answer: "0",
                options: ["Keep it as it is", "Make it larger", "Get a better one", "Get it"],
            },
            {
                question: "Stone: He sat on a <stone>",
                answer: "0",
                options: ["Hard thing", " Kind of chair", " Soft thing on the floor", "Part of a tree"],
            },
            {
                question: "Upset: I am <upset>",
                answer: "3",
                options: ["Tired", "Famous", "Rich", "Unhappy"],
            },
            {
                question: "Drawer: The <drawer> was empty",
                answer: "0",
                options: ["Sliding box", "Plce where cars are kept", "Animal house", "Cupboard to keep things cold"],
            },
            {
                question: "Joke: We did not understand the <joke>",
                answer: "0",
                options: ["Attempt at humor", "False statement", "Way of speaking", "Way of thinking"],
            },
            {
                question: "Pave: It was <paved>",
                answer: "3",
                options: ["Prevented from going through", "Divided", "Given gold edges", "Covered with a hard surface"],
            },
            {
                question: "Rove: He couldn't stop <roving>",
                answer: "1",
                options: ["Getting drunk", "Traveling around", "Working hard", "Drinking water"],
            },
            {
                question: "Lonesome: He felt <lonesome>.",
                answer: "2",
                options: ["Happy", "Tired", "Without company", "Angered"],
            },
            {
                question: "Allege: They <alleged it>",
                answer: "0",
                options: ["Claimed it without proof", "Stole it", "Proved it", "Argued against"],
            },
            {
                question: "Remedy: We found a good <remedy>",
                answer: "1",
                options: ["Place to eat", "Way to fix a problem", "Rule about numbers", "Way to prepare food"],
            },
            {
                question: "Dash: They <Dashed> it over",
                answer: "0",
                options: ["Moved quickly", "Moved slowly", "Looked quickly", "Fought"],
            },
            {
                question: "Peel: Shal I <peel it>?",
                answer: "1",
                options: ["Eat it", "Take the skin off", "Make it white", "Cut intp pieces"],
            },
            {
                question: "Bacterium: They didnt find a single <bacterium>",
                answer: "0",
                options: ["Small living creature causing disease", "Plant with red or orange flowers", "Animal that carries water", "Thing that has been stolen and sold"],
            },
            {
                question: "Thesis: She has completed her <thesis>",
                answer: "2",
                options: ["Talk given by a judge", "First year of employment", "Long written report of study carried out for a university", "Extended course of hospital treatment"],
            },
            {
                question: "Authentic: It is <authentic>",
                answer: "0",
                options: ["Real", "Fake", "Old", "Desert like"],
            },
            {
                question: "Miniature: It is a <miniature>",
                answer: "1",
                options: ["Instrument for lookin at very small objects", "Very small things of its kind", "Small living creature", "Small lines to join letters in handwriting"],
            },
            {
                question: "Fracture: They found a <fracture>",
                answer: "0",
                options: ["Break", "Small pieces", "Short coat", "Discount certificate"],
            },
            {
                question: "Patience: He <has no patience>",
                answer: "2",
                options: ["Has no free time", "Has no faith", "Will nit wait happily", "Does not know what is fair"],
            },
            {
                question: "Scrub: He is <Scrubbing it>",
                answer: "2",
                options: ["Cutting Shallw lines into it", "Repairing it", "Washing it energetically", "Drawing simple pictures of it"],
            },
            {
                question: "Vocabulary: You will need more <vocabulary>",
                answer: "0",
                options: ["Words", "Skill", "Money", "Guns"],
            },
            {
                question: "Accesory: They gave us <some accesories>",
                answer: "3",
                options: ["Papers giving us the right to enter a country", "Official orders", "Ideas to choose between", "Extra pieces"],
            },
            {
                question: "Fen: The story story is set in <the fens>",
                answer: "0",
                options: ["A piece of low land covered in water", "A piece of high, hilly land", "A block of poor-quality houses", "A time ago"],
            },
            {
                question: "Puritan: He is a <puritan>",
                answer: "1",
                options: ["Person who likes attention", "Person with strict morals", "Person with a moving home", "Person who is frugal"],
            },
            {
                question: "Awe: They looked at the mountain <in awe>",
                answer: "2",
                options: ["Worried expression", "Interested expression", "Sence of wonder", "Feeling of respect"],
            },
            {
                question: "Bristle: The <bristles> are too hard",
                answer: "1",
                options: ["Questions", "Short stiff hairs", "Folding beds", "Bottom of the shoes"],
            },
            {
                question: "Erratic: He wsa <erratic>",
                answer: "3",
                options: ["Without fault", "Very bad", "Very respectful", "Unsteady"],
            },
            {
                question: "Null: His incluence <was null>",
                answer: "2",
                options: ["Has goof results", "Did not help much", "Had no effect", "Lasted a long time"],
            },
            {
                question: "Perturb: I was <perturbed>",
                answer: "1",
                options: ["Made to agree", "Worried and puzzled", "Very wet", "Corruptly sexual"],
            },
            {
                question: "Peasentry: He did a lot for the <peasentry>",
                answer: "0",
                options: ["Local people", "Place of worship", "Working class people", "Rich"],
            },
            {
                question: "Palette: He lost his <palette>",
                answer: "3",
                options: ["Coins", "Wish to eat food", "Female companion", "Artist's board to mix paint"],
            },
            {
                question: "Devious: your plans are <devious>",
                answer: "0",
                options: ["Tricky and threatening", "Well-developed", "Not well thought out", "Expensive"],
            },
            {
                question: "Hallmark: Does it have a <hallmark>",
                answer: "1",
                options: ["Stamp to show when it should be used by", "Stamp to show the quality", "Mark to show it is aproved by royals", "Mark or stain to prevent forgery"],
            },
            {
                question: "Haze: We looked through the haze",
                answer: "1",
                options: ["Small round window", "Unclear air", "List of names", "Cover for a window"],
            },
            {
                question: "Gimmick: That's a good <gimmick>",
                answer: "2",
                options: ["Thing for stangding on to worn high abouve the ground", "Small thing with pockets", "Attention-getting action or image", "Clever plar or trick"],
            },
            {
                question: "Yoga: She has started <yoga>",
                answer: "1",
                options: ["Handwork done by knotting thread", "Form of exercise for the body and mind", "Game with a cork", "Type of dance from eastern countries"],
            },
            {
                question: "Sizzle: Listen to it <sizzle>",
                answer: "2",
                options: ["Turn to stone", "Release pressure", "Make noise while being cooked", "Force out liquid"],
            },
            {
                question: "Psychotherapy: She wanted <psychotherapy>",
                answer: "3",
                options: ["Mutual operation of two things", "Ability to govern", "Unfriendly reaction", "Treatment for mental illness"],
            },
            {
                question: "Mystique: He has lost his <mistique>",
                answer: "1",
                options: ["Healthy body", "Secret way he makes other people think he has a special skill", "Woman he dated", "Hair on his upper lip"],
            },
            {
                question: "Communique: Have you seen their <communique>?",
                answer: "1",
                options: ["Critical report about an organization", "Garden owned by mary members of a community", "Printed material", "Official announcement"],
            },
            {
                question: "Thesaurus: She used the <thesaurus>",
                answer: "0",
                options: ["Kind of dictionary", "Kind of dinosaur", "Chemical compound", "Injection under the skin"],
            },
            {
                question: "Dissonant: This is very <dissonant>",
                answer: "0",
                options: ["Full of sound that are not nice together", "Full if signs of death", "Full of unwanted stops", "Full of garbage"],
            },
            {
                question: "Tracksuit: She was wearing her <tracksuit>",
                answer: "1",
                options: ["A dress", "Set of clothing used for running", "Knitted shirt", "Angry expresion"],
            },
            {
                question: "Spleen: His <spleen> was damaged",
                answer: "1",
                options: ["Knee bone", "Organ found near the stomach", "Pipe taking waste water out", "Respect for himself"],
            },
            {
                question: "Caffeine: This contians a lot of <caffeine>",
                answer: "3",
                options: ["Substance that makes u sleepy", "Ideas not correct", "Dirty water", "Substance that makes you excited"],
            },
            {
                question: "Impale: He noearly got <impaled>",
                answer: "2",
                options: ["Charged with a serious offence", "put in prison", "Stuck through with a sharp instrument", "Involved in a dispute"],
            },
            {
                question: "Jovial: He was very <jovial>",
                answer: "2",
                options: ["Low o a social scale", "Likely to critize others", "Full of fun", "Friendly"],
            },
            {
                question: "Dingy: Its was a <dingy> place",
                answer: "1",
                options: ["Cold, damp", "Poorly lit", "Delightful", "Hot"],
            },
            {
                question: "Kindergarten: This is a good <kindergarten>",
                answer: "1",
                options: ["Activity that allows you to forget things", "Place of learning for childres too young for school", "Strong, deep bag carrid out on the back", "Place where you may borrow books"],
            },
            {
                question: "Locust: There were hundres of <locusts>",
                answer: "2",
                options: ["Unpaid helpers", "Vegetarians", "Creatures with wings", "Fragant flowers"],
            },
            {
                question: "Lintel: He painted the <lintel>",
                answer: "0",
                options: ["Beam accross the top of a window", "Small boat for getting to land from a big boat", "Beautiful tree with green fruit", "Board which shows the scene in a theatre"],
            },
            {
                question: "Upbeat: I am feeling really <upbeat>",
                answer: "1",
                options: ["Upset", "Good", "Hurt", "Confused"],
            },
            {
                question: "Pallor: <His pallor> caused them concern",
                answer: "1",
                options: ["His unusually high temperature", "Faint color of the skin", "Lack of interest", "Group of friends"],
            },
            {
                question: "Skylark: We watched a <skylark>",
                answer: "3",
                options: ["Show with planes flying in patterns", "Human-made object", "Person who does funny tricks", "Small bird that flies high as it sings"],
            },
            {
                question: "Beagle: I have two <beagles>",
                answer: "2",
                options: ["Fast cars", "Large guns", "Small dogs with long ears", "House built at holliday places"],
            },
            {
                question: "Atoll: The <atoll> was beautiful",
                answer: "0",
                options: ["Low island with sea water in the middle", "Art created by weaving pictures from fine string", "Small crown with many valuable stones", "Places where a river flows through a narrow spot"],
            },
            {
                question: "Hutch: Please clean the <hutch>",
                answer: "3",
                options: ["Thing with metal bars to keep dirt out of water pipes", "Space in the back of a car used for storage", "Round metal thing in the middle of a wheel", "Cage for small animals"],
            },
            {
                question: "Gauche: He was <gauche>",
                answer: "2",
                options: ["Talkative", "Flexible", "Awkward", "Determined"],
            },
            {
                question: "Cordillera: They were stopped by the <cordillera>",
                answer: "2",
                options: ["Special law", "Armed ship", "Line of mountains", "Firstborn son of a king"],
            },
            {
                question: "Limpid: He looked into her <limpid> eyes",
                answer: "0",
                options: ["Clear", "Sad", "Happy", "Beautiful"],
            },
            {
                question: "Aperitif: She had an <aperitif>",
                answer: "3",
                options: ["Long chair", "Private singing teacher", "Large hat", "Drink taken before a meal"],
            },
            {
                question: "Scrunch: It was <scrunched up>",
                answer: "1",
                options: ["Done withmany mistakes", "Crushed togeter", "Cut into large pieces", "Thrown individually"],
            },
            {
                question: "Instantiate: You need to <instantiate> that",
                answer: "2",
                options: ["Make happen quickly", "Put that into the correct place", "Give a real example of it", "Explain it"],
            },
            {
                question: "Landfall: The days after the <landfall> were busy",
                answer: "3",
                options: ["Ceremony to bless the land", "Bike event on a mountain", "Acceptance of foreign land", "The seeing of land after a journey by sea or air"],
            },
            {
                question: "Headstrong: He was a <headstrong child>",
                answer: "3",
                options: ["Very clever child", "Child who was given many good things", "Very fat child", "Determined to do what he wants"],
            },
            {
                question: "Supercilious: She suddenly became <supercilious>",
                answer: "0",
                options: ["Proud and not respectful", "Extremely stupid", "Able to think", "Overweight"],
            },
            {
                question: "Torpor: She sank into <a torpor>",
                answer: "1",
                options: ["A deep soft chair", "An inactive state", "Unhappy state", "Bed cover with feathers"],
            },
            {
                question: "Coven: She is a leader of a <coven>",
                answer: "2",
                options: ["Small singing group", "Business owned by its workers", "Secret society", "Group of church women"],
            },
            {
                question: "Sputnik: He told them about the <sputnik>",
                answer: "2",
                options: ["Rare animal", "Trap set by police", "Objet that travels high in the sky round the earth", "Secret organization with evil plans"],
            },
            {
                question: "Mozzarella: We need some <mozzarella>",
                answer: "2",
                options: ["Sweet fruity sauce", "Cheap wine", "Mild cheese", "Lemon grass"],
            },
            {
                question: "Wordaday: These are <workaday> clothes",
                answer: "0",
                options: ["Plain and practical clothes", "Old and worn out clothes", "Party clothes", "Dirty clothes"],
            },
            {
                question: "Lemur: We saw a <lemur>",
                answer: "2",
                options: ["Priest from eastern religion", "Person with skin disease", "Furry animal with long tail", "Purple fish from hot countries"],
            },
            {
                question: "Pantograph: The <pantograph> is broken",
                answer: "2",
                options: ["Intrument which plays music from tubes", "Intrument which measures temperature", "Framework of moving bars for copying plans", "Pen with a metal point"],
            },
            {
                question: "Planetarium: The <planetaruim> was interesting",
                answer: "1",
                options: ["Place where planets are built", "Place where a machine shows how the planets move", "Course to teach people planning skills", "Place whre fish live"],
            },
            {
                question: "Vitreous: These rocks are <vitreous>",
                answer: "3",
                options: ["Very heavy", "Easy to break", "Full of small holes", "Like glass"],
            },
            {
                question: "Cerise: Her dress was <cerise>",
                answer: "0",
                options: ["A bright red color", "Made of a thin material", "Pale blue green color", "Made of expensive material"],
            },
            {
                question: "Frankincense: He brought some <frankincense>",
                answer: "3",
                options: ["Swert smelling  flower", "Soft French cheese", "Food made from yellow rice", "Good smelling substance that comes out of trees"],
            },
            {
                question: "Feint: He made a <feint>",
                answer: "2",
                options: ["Small caje with dried fruit", "Thing with wheels", "Pretend attack to trick the enemy", "Serious mistake"],
            },
            {
                question: "Muff: This <muff> belonged to my mother",
                answer: "0",
                options: ["Tube of animal hair for keeping the hands warm", "Cover for a teapot", "Long rope of feathers to wear around the neck", "Bed cover made from square patches"],
            },
            {
                question: "Ablution: He <performed his abluitions",
                answer: "3",
                options: ["Did his exercises to stay healthy", "Played a difficult piece of music", "Did all his duties as a church minister", "Washed himself to get readt"],
            },
            {
                question: "Exactitude: She was wll knows for hr <exactitude>",
                answer: "3",
                options: ["Courage under pressure", "Sense of fairness", "Habit of making unreasonable demands", "Ability to be very accurate"],
            },
            {
                question: "Speedometer: Thev <speedometer> stoped working",
                answer: "1",
                options: ["Instument that shows changes in weather", "Thing that measures how fast you go", "Things that keeps the room warm", "Tube put in a person to let liquids in their body"],
            },
            {
                question: "Serviette: Where is my serviette?",
                answer: "3",
                options: ["House maid", "Piece of glass which makes things look bigger", "Large flat plate", "Piece of cloth or paper for wiping your mouth"],
            },
            {
                question: "Scrumptious: This is <scrumptious>",
                answer: "2",
                options: ["Very expensive", "Very dull", "Delightful in taste", "Horrendous"],
            },
            {
                question: "Poppadom: Did you put the <poppadom> on the table?",
                answer: "0",
                options: ["Thin, slightly hard piees of fried bread", "Small pieces of food, usually raw", "Cloths for protecting the table", "Small weets"],
            },
            {
                question: "Hydrofoil: He studies <hydrofoil>",
                answer: "1",
                options: ["Crops produces by the sea", "Devices that push boats clear of the water", "Components of rock", "Amazing curls and twists"],
            },
            {
                question: "Bylaw: They made a <bylaw>",
                answer: "1",
                options: ["Publisher list of older books", "Secondary law", "Law that morally condemns people", "Old law"],
            },
            {
                question: "Nymphomaniac: Don't be such a <nymphomaniac>",
                answer: "0",
                options: ["Person expressing uncontrolled sexual desire", "Antisocial person", "Innocent rural person", "Strong person"],
            },
            {
                question: "Maladroit: He is <maladroit>",
                answer: "1",
                options: ["Feeling sick to he stomach", "Physically awkward", "Rather silly", "Short tempered"],
            },
            {
                question: "Taxon: I think it belongs in this <taxon>",
                answer: "2",
                options: ["Tax category", "Tax relief", "Category of creature", "Room for safekeeping"],
            },
            {
                question: "Canoodle: They are always <canoodling>",
                answer: "3",
                options: ["Playing around", "Fighting", "Joking around", "Stroking or kissing one another"],
            },
            {
                question: "Stupa: Look at the <stoopa>",
                answer: "3",
                options: ["Tall haitstyle", "Woman with bad sexual reputation", "Temporary platform for a dead person", "Asian religious memorial"],
            },
            {
                question: "Dramaturgical: It has a <dramaturgical> effect",
                answer: "0",
                options: ["Theatrical", "Wrongful", "Joyful", "Unpleseant"],
            },
        ];
        this.totalQuestions = questions.length;
        this.answer = questions[id].answer;
        this.question = questions[id].question;
        this.options = questions[id].options;
    };
    return VocabBTestBank;
}());

//# sourceMappingURL=vocab-b.service.js.map

/***/ })

});
//# sourceMappingURL=beginner.module.chunk.js.map