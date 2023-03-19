webpackJsonp(["enhanced-text-result.module"],{

/***/ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InfiniteScrollDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfiniteScrollModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");




/**
 * @param {?} selector
 * @param {?} scrollWindow
 * @param {?} defaultElement
 * @param {?} fromRoot
 * @return {?}
 */
function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
    var /** @type {?} */ hasWindow = window && !!window.document && window.document.documentElement;
    var /** @type {?} */ container = hasWindow && scrollWindow ? window : defaultElement;
    if (selector) {
        var /** @type {?} */ containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString
            ? findElement(selector, defaultElement.nativeElement, fromRoot)
            : selector;
        if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
    }
    return container;
}
/**
 * @param {?} selector
 * @param {?} customRoot
 * @param {?} fromRoot
 * @return {?}
 */
function findElement(selector, customRoot, fromRoot) {
    var /** @type {?} */ rootEl = fromRoot ? window.document : customRoot;
    return rootEl.querySelector(selector);
}
/**
 * @param {?} prop
 * @return {?}
 */
function inputPropChanged(prop) {
    return prop && !prop.firstChange;
}
/**
 * @return {?}
 */
function hasWindowDefined() {
    return typeof window !== 'undefined';
}
var VerticalProps = {
    clientHeight: "clientHeight",
    offsetHeight: "offsetHeight",
    scrollHeight: "scrollHeight",
    pageYOffset: "pageYOffset",
    offsetTop: "offsetTop",
    scrollTop: "scrollTop",
    top: "top"
};
var HorizontalProps = {
    clientHeight: "clientWidth",
    offsetHeight: "offsetWidth",
    scrollHeight: "scrollWidth",
    pageYOffset: "pageXOffset",
    offsetTop: "offsetLeft",
    scrollTop: "scrollLeft",
    top: "left"
};
var AxisResolver = (function () {
    /**
     * @param {?=} vertical
     */
    function AxisResolver(vertical) {
        if (vertical === void 0) { vertical = true; }
        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
    }
    /**
     * @return {?}
     */
    AxisResolver.prototype.clientHeightKey = function () {
        return this.propsMap.clientHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetHeightKey = function () {
        return this.propsMap.offsetHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollHeightKey = function () {
        return this.propsMap.scrollHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.pageYOffsetKey = function () {
        return this.propsMap.pageYOffset;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetTopKey = function () {
        return this.propsMap.offsetTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollTopKey = function () {
        return this.propsMap.scrollTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.topKey = function () {
        return this.propsMap.top;
    };
    return AxisResolver;
}());
/**
 * @param {?} alwaysCallback
 * @param {?} shouldFireScrollEvent
 * @param {?} isTriggeredCurrentTotal
 * @return {?}
 */
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
    return (alwaysCallback || shouldFireScrollEvent) && !isTriggeredCurrentTotal;
}
/**
 * @param {?} __0
 * @return {?}
 */
function createResolver(_a) {
    var windowElement = _a.windowElement, axis = _a.axis;
    return createResolverWithContainer({ axis: axis, isWindow: isElementWindow(windowElement) }, windowElement);
}
/**
 * @param {?} resolver
 * @param {?} windowElement
 * @return {?}
 */
function createResolverWithContainer(resolver, windowElement) {
    var /** @type {?} */ container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
        ? windowElement
        : windowElement.nativeElement;
    return Object.assign({}, resolver, { container: container });
}
/**
 * @param {?} windowElement
 * @return {?}
 */
function isElementWindow(windowElement) {
    var /** @type {?} */ isWindow = ['Window', 'global'].some(function (obj) { return Object.prototype.toString.call(windowElement).includes(obj); });
    return isWindow;
}
/**
 * @param {?} isContainerWindow
 * @param {?} windowElement
 * @return {?}
 */
function getDocumentElement(isContainerWindow, windowElement) {
    return isContainerWindow ? windowElement.document.documentElement : null;
}
/**
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePoints(element, resolver) {
    var /** @type {?} */ height = extractHeightForElement(resolver);
    return resolver.isWindow
        ? calculatePointsForWindow(height, element, resolver)
        : calculatePointsForElement(height, element, resolver);
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForWindow(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container, isWindow = resolver.isWindow;
    var _a = extractHeightPropKeys(axis), offsetHeightKey = _a.offsetHeightKey, clientHeightKey = _a.clientHeightKey;
    // scrolled until now / current y point
    var /** @type {?} */ scrolled = height +
        getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
    // total height / most bottom y point
    var /** @type {?} */ nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
    var /** @type {?} */ totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
        nativeElementHeight;
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll };
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForElement(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container;
    // perhaps use container.offsetTop instead of 'scrollTop'
    var /** @type {?} */ scrolled = container[axis.scrollTopKey()];
    var /** @type {?} */ totalToScroll = container[axis.scrollHeightKey()];
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll };
}
/**
 * @param {?} axis
 * @return {?}
 */
function extractHeightPropKeys(axis) {
    return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey()
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
function extractHeightForElement(_a) {
    var container = _a.container, isWindow = _a.isWindow, axis = _a.axis;
    var _b = extractHeightPropKeys(axis), offsetHeightKey = _b.offsetHeightKey, clientHeightKey = _b.clientHeightKey;
    return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
/**
 * @param {?} elem
 * @param {?} isWindow
 * @param {?} offsetHeightKey
 * @param {?} clientHeightKey
 * @return {?}
 */
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
    if (isNaN(elem[offsetHeightKey])) {
        var /** @type {?} */ docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
    }
    else {
        return elem[offsetHeightKey];
    }
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementOffsetTop(elem, axis, isWindow) {
    var /** @type {?} */ topKey = axis.topKey();
    // elem = elem.nativeElement;
    if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
    }
    return (elem.getBoundingClientRect()[topKey] +
        getElementPageYOffset(elem, axis, isWindow));
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementPageYOffset(elem, axis, isWindow) {
    var /** @type {?} */ pageYOffset = axis.pageYOffsetKey();
    var /** @type {?} */ scrollTop = axis.scrollTopKey();
    var /** @type {?} */ offsetTop = axis.offsetTopKey();
    if (isNaN(window[pageYOffset])) {
        return getDocumentElement(isWindow, elem)[scrollTop];
    }
    else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
    }
    else {
        return elem[offsetTop];
    }
}
/**
 * @param {?} container
 * @param {?} distance
 * @param {?} scrollingDown
 * @return {?}
 */
function shouldFireScrollEvent(container, distance, scrollingDown) {
    var /** @type {?} */ remaining;
    var /** @type {?} */ containerBreakpoint;
    var /** @type {?} */ scrolledUntilNow = container.height + container.scrolled;
    if (scrollingDown) {
        remaining = (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        containerBreakpoint = distance.down / 10;
    }
    else {
        remaining = scrolledUntilNow / container.totalToScroll;
        containerBreakpoint = distance.up / 10;
    }
    var /** @type {?} */ shouldFireEvent = remaining <= containerBreakpoint;
    return shouldFireEvent;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @return {?}
 */
function isScrollingDownwards(lastScrollPosition, container) {
    return lastScrollPosition < container.scrolled;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @param {?} distance
 * @return {?}
 */
function getScrollStats(lastScrollPosition, container, distance) {
    var /** @type {?} */ scrollDown = isScrollingDownwards(lastScrollPosition, container);
    return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown: scrollDown
    };
}
/**
 * @param {?} position
 * @param {?} scrollState
 * @return {?}
 */
function updateScrollPosition(position, scrollState) {
    return (scrollState.lastScrollPosition = position);
}
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @return {?}
 */
function updateTotalToScroll(totalToScroll, scrollState) {
    if (scrollState.lastTotalToScroll !== totalToScroll) {
        scrollState.lastTotalToScroll = scrollState.totalToScroll;
        scrollState.totalToScroll = totalToScroll;
    }
}
/**
 * @param {?} scrollState
 * @return {?}
 */
/**
 * @param {?} scroll
 * @param {?} scrollState
 * @param {?} triggered
 * @param {?} isScrollingDown
 * @return {?}
 */
function updateTriggeredFlag(scroll, scrollState, triggered, isScrollingDown) {
    if (isScrollingDown) {
        scrollState.triggered.down = scroll;
    }
    else {
        scrollState.triggered.up = scroll;
    }
}
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @param {?} isScrollingDown
 * @return {?}
 */
function isTriggeredScroll(totalToScroll, scrollState, isScrollingDown) {
    return isScrollingDown
        ? scrollState.triggered.down === totalToScroll
        : scrollState.triggered.up === totalToScroll;
}
/**
 * @param {?} scrollState
 * @param {?} scrolledUntilNow
 * @param {?} totalToScroll
 * @return {?}
 */
function updateScrollState(scrollState, scrolledUntilNow, totalToScroll) {
    updateScrollPosition(scrolledUntilNow, scrollState);
    updateTotalToScroll(totalToScroll, scrollState);
    // const isSameTotal = isSameTotalToScroll(scrollState);
    // if (!isSameTotal) {
    //   updateTriggeredFlag(scrollState, false, isScrollingDown);
    // }
}
/**
 * @param {?} config
 * @return {?}
 */
function createScroller(config) {
    var scrollContainer = config.scrollContainer, scrollWindow = config.scrollWindow, element = config.element, fromRoot = config.fromRoot;
    var /** @type {?} */ resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
    });
    var startWithTotal = calculatePoints(element, resolver).totalToScroll;
    var /** @type {?} */ scrollState = {
        lastScrollPosition: 0,
        lastTotalToScroll: 0,
        totalToScroll: startWithTotal,
        triggered: {
            down: 0,
            up: 0
        }
    };
    var /** @type {?} */ options = {
        container: resolver.container,
        throttle: config.throttle
    };
    var /** @type {?} */ distance = {
        up: config.upDistance,
        down: config.downDistance
    };
    return attachScrollEvent(options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["mergeMap"])(function (ev) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(calculatePoints(element, resolver)); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (positionStats) { return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_a) {
        var stats = _a.stats, scrollDown = _a.scrollDown;
        return updateScrollState(scrollState, stats.scrolled, stats.totalToScroll);
    }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (_a) {
        var fire = _a.fire, scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        return shouldTriggerEvents(config.alwaysCallback, fire, isTriggeredScroll(totalToScroll, scrollState, scrollDown));
    }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_a) {
        var scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        updateTriggeredFlag(totalToScroll, scrollState, true, scrollDown);
    }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(toInfiniteScrollAction));
}
/**
 * @param {?} options
 * @return {?}
 */
function attachScrollEvent(options) {
    var /** @type {?} */ obs = Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromEvent__["a" /* fromEvent */])(options.container, "scroll");
    // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
    // Let's avoid calling the function unless needed.
    // See https://github.com/orizens/ngx-infinite-scroll/issues/198
    if (options.throttle) {
        obs = obs.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["sampleTime"])(options.throttle));
    }
    return obs;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} stats
 * @param {?} distance
 * @return {?}
 */
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
    var _a = getScrollStats(lastScrollPosition, stats, distance), scrollDown = _a.scrollDown, fire = _a.fire;
    return {
        scrollDown: scrollDown,
        fire: fire,
        stats: stats
    };
}
var InfiniteScrollActions = {
    DOWN: "[NGX_ISE] DOWN",
    UP: "[NGX_ISE] UP"
};
/**
 * @param {?} response
 * @return {?}
 */
function toInfiniteScrollAction(response) {
    var scrollDown = response.scrollDown, currentScrollPosition = response.stats.scrolled;
    return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
            currentScrollPosition: currentScrollPosition
        }
    };
}
var InfiniteScrollDirective = (function () {
    /**
     * @param {?} element
     * @param {?} zone
     */
    function InfiniteScrollDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.scrolled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.scrolledUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
    }
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngAfterViewInit = function () {
        if (!this.infiniteScrollDisabled) {
            this.setup();
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnChanges = function (_a) {
        var infiniteScrollContainer = _a.infiniteScrollContainer, infiniteScrollDisabled = _a.infiniteScrollDisabled, infiniteScrollDistance = _a.infiniteScrollDistance;
        var /** @type {?} */ containerChanged = inputPropChanged(infiniteScrollContainer);
        var /** @type {?} */ disabledChanged = inputPropChanged(infiniteScrollDisabled);
        var /** @type {?} */ distanceChanged = inputPropChanged(infiniteScrollDistance);
        var /** @type {?} */ shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
            (disabledChanged && !infiniteScrollDisabled.currentValue) || distanceChanged;
        if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();
            if (shouldSetup) {
                this.setup();
            }
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.setup = function () {
        var _this = this;
        if (hasWindowDefined()) {
            this.zone.runOutsideAngular(function () {
                _this.disposeScroller = createScroller({
                    fromRoot: _this.fromRoot,
                    alwaysCallback: _this.alwaysCallback,
                    disable: _this.infiniteScrollDisabled,
                    downDistance: _this.infiniteScrollDistance,
                    element: _this.element,
                    horizontal: _this.horizontal,
                    scrollContainer: _this.infiniteScrollContainer,
                    scrollWindow: _this.scrollWindow,
                    throttle: _this.infiniteScrollThrottle,
                    upDistance: _this.infiniteScrollUpDistance
                }).subscribe(function (payload) { return _this.zone.run(function () { return _this.handleOnScroll(payload); }); });
            });
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.handleOnScroll = function (_a) {
        var type = _a.type, payload = _a.payload;
        switch (type) {
            case InfiniteScrollActions.DOWN:
                return this.scrolled.emit(payload);
            case InfiniteScrollActions.UP:
                return this.scrolledUp.emit(payload);
            default:
                return;
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnDestroy = function () {
        this.destroyScroller();
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.destroyScroller = function () {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    };
    return InfiniteScrollDirective;
}());
InfiniteScrollDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
            },] },
];
/**
 * @nocollapse
 */
InfiniteScrollDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
InfiniteScrollDirective.propDecorators = {
    'scrolled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'scrolledUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'infiniteScrollDistance': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'infiniteScrollUpDistance': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'infiniteScrollThrottle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'infiniteScrollDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'infiniteScrollContainer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'scrollWindow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'immediateCheck': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'horizontal': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'alwaysCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'fromRoot': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var InfiniteScrollModule = (function () {
    function InfiniteScrollModule() {
    }
    return InfiniteScrollModule;
}());
InfiniteScrollModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [InfiniteScrollDirective],
                exports: [InfiniteScrollDirective],
                imports: [],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
InfiniteScrollModule.ctorParameters = function () { return []; };
/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-library-starter
 */
/**
 * Entry point for all public APIs of the package.
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-infinite-scroll.es5.js.map


/***/ }),

/***/ "./src/app/layout/enhanced-text-result/enhanced-text-result-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnhancedTextResultRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enhanced_text_result_component__ = __webpack_require__("./src/app/layout/enhanced-text-result/enhanced-text-result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__enhanced_text_result_component__["a" /* EnhancedTextResultComponent */] }
];
var EnhancedTextResultRoutingModule = (function () {
    function EnhancedTextResultRoutingModule() {
    }
    return EnhancedTextResultRoutingModule;
}());
EnhancedTextResultRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], EnhancedTextResultRoutingModule);

//# sourceMappingURL=enhanced-text-result-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/enhanced-text-result/enhanced-text-result.component.html":
/***/ (function(module, exports) {

module.exports = "<!--if it sees the object it will show the result, else it prompt the user to go back-->\r\n<div *ngIf=\"text;  else elseBlock\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-8 col-md-8\">\r\n\t\t\t<h2>Enhanced Text</h2>\r\n\t\t</div>\r\n\t\t<div class=\"col-4 col-md-4\" (window:resize)=\"onResize($event)\">\r\n\t\t\t<div class=\"float-right\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" (click)=\"backClicked()\">\r\n\t\t\t\t\t<i class=\"fa fa-step-backward\" aria-hidden=\"true\"></i>{{backLabel}}</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/text-statistics']\">\r\n\t\t\t\t\t<i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i>{{statisticsLabel}}</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<hr>\r\n\r\n\r\n\r\n\t<!--Category Colors Information -->\r\n\t<div class=\"container center\">\r\n\t\t<div class=\"row center font-responsive\">\r\n\t\t\t<div class=\"col-xl-4 col-md-8 col-12\">\r\n\t\t\t\t<span (click)=\"activeCategory('awl'); open(wordList);\">\r\n\t\t\t\t\t<a href=\"javascript:void(0)\">Academic Word</a>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"box awlBox\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4 col-md-8 col-12\">\r\n\t\t\t\t<span (click)=\"activeCategory('stem'); open(wordList);\">\r\n\t\t\t\t\t<a href=\"javascript:void(0)\">STEM </a>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"box stemBox\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4 col-md-8 col-12\">\r\n\t\t\t\t<span (click)=\"activeCategory('hi'); open(wordList);\">\r\n\t\t\t\t\t<a href=\"javascript:void(0)\">Other High Frequency</a>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"box hiBox\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n        <div class = row center front-responsive>\r\n\t\t\t<div class=\"col-xl-4 col-md-8 col-12\">\r\n\t\t\t\t<span (click)=\"activeCategory('med'); open(wordList);\">\r\n\t\t\t\t\t<a href=\"javascript:void(0)\">Med Frequency</a>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"box medBox\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4 col-md-8 col-12\">\r\n\t\t\t\t<span (click)=\"activeCategory('low'); open(wordList);\">\r\n\t\t\t\t\t<a href=\"javascript:void(0)\">Low Frequency</a>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"box lowBox\"></div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-xl-4 col-md-8 col-12\">\r\n\t\t\t\t<span (click)=\"activeCategory('K1'); open(wordList);\">\r\n\t\t\t\t\t<a href=\"javascript:void(0)\">K1</a>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"box K1Box\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4 col-md-8 col-12\">\r\n\t\t\t\t<span (click)=\"activeCategory('K2'); open(wordList);\">\r\n\t\t\t\t\t<a href=\"javascript:void(0)\">K2</a>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"box K2Box\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4 col-md-8 col-12\">\r\n\t\t\t\t<span (click)=\"activeCategory('K3'); open(wordList);\">\r\n\t\t\t\t\t<a href=\"javascript:void(0)\">K3</a>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"box K3Box\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4 col-md-8 col-12\">\r\n\t\t\t\t<span (click)=\"activeCategory(''); open(wordList);\">\r\n\t\t\t\t\t<a href=\"javascript:void(0)\">Names & Off-List</a>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"box offBox\"></div>\r\n\t\t\t</div>\r\n        </div>\r\n\t</div>\r\n\t<hr>\r\n\r\n\t<!--Word Lists popups-->\r\n\t<ng-template #wordList let-c=\"close\" let-d=\"dismiss\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<div class=\"flex-column\">\r\n\t\t\t<h4 class=\"modal-title\">\r\n\t\t\t\t{{wordCategory}} Words in this text &nbsp;&nbsp;\r\n\t\t\t</h4>\r\n\t\t\t<p class=\"pl-2\">\r\n\t\t\t\t{{categoryDescription}}\r\n\t\t\t</p>\r\n\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\r\n\t\t\t<!--word List-->\r\n\t\t\t<div *ngFor='let word of noDuplicates; let i= index;'>\r\n                <span *ngIf=\"word.category == category\" [class]=\"word.category\" (click)=\"getDefinition(word.initialValue); open(content); \">\r\n                    <a href=\"javascript:void(0)\">{{word.value}}<hr></a>\r\n\r\n                </span>\r\n                <span class=\"oneLine\" *ngIf=\"word.initialValue == ''\">\r\n                    <br>\r\n                </span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"modal-footer\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\r\n\t<!--Definition model (Popup)-->\r\n\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<h4 class=\"modal-title\">\r\n\t\t\t\t<img src=\"assets/images/Wikipedia-logo.png\" title=\"Wikipedia Dictionary\" style=\"width:50px;height:50px;\"> Definition &nbsp;&nbsp;\r\n\t\t\t\t<i class=\"fa fa-spinner fa-spin\" style=\"font-size:32px;color:black\" *ngIf='processing'></i>\r\n\t\t\t</h4>\r\n\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<!--Alert-->\r\n\t\t\t<div class=\"alert alert-warning\" role=\"alert\" *ngIf='error'>\r\n\t\t\t\t<strong>Oh snap!</strong> We couldn't find the definition, please try another word.\r\n\t\t\t</div>\r\n\t\t\t<!--Definition-->\r\n\t\t\t<p *ngIf='!error && !processing' class=\"card-text\" [innerHTML]=\"wordDefinition.wiki.html\"></p>\r\n\t\t</div>\r\n\t\t<div class=\"modal-footer\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\r\n\t<!--Print each word from the words object and color it base on the category, Adds popUps when hover for each word-->\r\n\t\r\n\t<div class=\"enhancedTextbox equalLength\"\r\n         infiniteScroll\r\n         [infiniteScrollDistance]=\"3\"\r\n         [infiniteScrollThrottle]=\"50\"\r\n         (scrolled)=\"onScrollDown()\">\r\n\t\t<div class=\"oneLine\" *ngFor='let word of totalWords; let i = index'>\r\n            <span [class]=\"word.category\" ngbTooltip= \"{{popUpCategory(word.category)}}\" (click)=\"getDefinition(word.initialValue); open(content);\"> \r\n\t\t\t\t<a href=\"javascript:void(0)\">{{word.initialValue}}</a>\r\n\t\t\t</span>\r\n\t\t\t<span class=\"oneLine\" *ngIf=\"word.initialValue == '' && word.initialValue != totalWords[i-1].initialValue\">\r\n\t\t\t\t<br>\r\n\t\t\t\t<br>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!--if page refreshes it prompt the user to go to the previous page-->\r\n<ng-template #elseBlock>\r\n\t<!-- <meta http-equiv=\"refresh\" content=\"0;url=http://www.myvirs.com/dashboard\" /> -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-6\">\r\n\t\t\t<h1>Oops!</h1>\r\n\t\t</div>\r\n\t\t<div class=\"col-6\" (window:resize)=\"onResize($event)\">\r\n\t\t\t<div class=\"float-right\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" (click)=\"backClicked()\">\r\n\t\t\t\t\t<i class=\"fa fa-step-backward\" aria-hidden=\"true\"></i>{{backLabel}}</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<hr>\r\n\r\n\t<div>\r\n\t\t<h4> Opps! Please go back...</h4>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/layout/enhanced-text-result/enhanced-text-result.component.scss":
/***/ (function(module, exports) {

module.exports = ".oneLine {\n  display: inline;\n  list-style-type: none; }\n\n.equalLength {\n  text-align: justify; }\n\n.hi {\n  color: #cfcf00; }\n\n.med {\n  color: #ea00ff; }\n\n.low {\n  color: pink; }\n\n.awl {\n  color: #b38902; }\n\n.stem {\n  color: #06f082; }\n\n.K1 {\n  color: #7373f1; }\n\n.K2 {\n  color: #257925; }\n\n.K3 {\n  color: red; }\n\n.box {\n  float: left;\n  width: 20px;\n  height: 20px;\n  margin: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2); }\n\n.hiBox {\n  background: #cfcf00; }\n\n.medBox {\n  background: #ea00ff; }\n\n.lowBox {\n  background: pink; }\n\n.awlBox {\n  background: #b38902; }\n\n.offBox {\n  background: black; }\n\n.stemBox {\n  background: #06f082; }\n\n.K1Box {\n  background: #7373f1; }\n\n.K2Box {\n  background: #257925; }\n\n.K3Box {\n  background: red; }\n\n.enhancedTextbox {\n  margin-left: 30px;\n  margin-right: 30px;\n  margin-top: 30px; }\n\na {\n  color: inherit; }\n\na.disabled {\n  pointer-events: none; }\n\n.solid {\n  border-style: solid;\n  border-color: black; }\n\n.modal-body {\n  max-height: calc(100vh - 210px);\n  overflow-y: auto; }\n\n@media screen and (max-width: 992px) {\n  .margin-responsive {\n    margin-bottom: 70px; } }\n\n@media screen and (max-width: 1300px) {\n  .font-responsive {\n    font-size: 0.8rem; } }\n\n@media screen and (max-width: 1199px) {\n  .font-responsive {\n    font-size: 1rem; } }\n\n@media screen and (max-width: 360px) {\n  .font-responsive {\n    font-size: 0.8rem; } }\n"

/***/ }),

/***/ "./src/app/layout/enhanced-text-result/enhanced-text-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnhancedTextResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EnhancedTextResultComponent = EnhancedTextResultComponent_1 = (function () {
    // tslint:disable-next-line:max-line-length
    function EnhancedTextResultComponent(_textService, _definitionService, router, _location, modalService) {
        this._textService = _textService;
        this._definitionService = _definitionService;
        this.router = router;
        this._location = _location;
        this.modalService = modalService;
        this.backLabel = EnhancedTextResultComponent_1.BACK_LABEL;
        this.statisticsLabel = EnhancedTextResultComponent_1.STATISTICS_LABEL;
        this.pageSize = 1000;
        this.upperBound = 0;
    }
    EnhancedTextResultComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.showOnlyIcons = window.innerWidth <= 680;
        this.updaTeLabels();
        this.text = this._textService.resultText;
        this.numberOfTotalWords = this.text.words.length;
        this.addPage();
        this.getDefinition('book');
        this.noDuplicates = Array.from(this.totalWords.reduce(function (m, t) { return m.set(t.value, t); }, new Map()).values()); // removes duplicates from totalWords
    };
    /**
    * adds 1000 or less words to the words displayed on the page.
    */
    EnhancedTextResultComponent.prototype.addPage = function () {
        if (this.upperBound < this.numberOfTotalWords) {
            this.lowerBound = this.upperBound;
            if ((this.upperBound + this.pageSize) < this.numberOfTotalWords) {
                this.upperBound = this.upperBound + this.pageSize;
            }
            else {
                this.upperBound = this.numberOfTotalWords;
            }
            this.pageOfWords = this.text.words.slice(this.lowerBound, this.upperBound);
            if (this.totalWords == null) {
                this.totalWords = this.pageOfWords;
            }
            else {
                this.totalWords = this.totalWords.concat(this.pageOfWords);
            }
        }
    };
    /**
    * This is called whenever the page is scrolled down.
    */
    EnhancedTextResultComponent.prototype.onScrollDown = function () {
        console.log('On Scroll Called');
        this.addPage();
    };
    // it gets the definition of  the word using DefinitionService
    EnhancedTextResultComponent.prototype.getDefinition = function (word) {
        var _this = this;
        this.processing = true;
        this.error = false;
        this.cleanWord = word.replace(/[^a-zA-Z ]/g, '');
        this._definitionService.getDefinitionService(this.cleanWord)
            .subscribe(function (res) {
            _this.wordDefinition = res;
            _this.processing = false;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side Error occured');
            }
            else {
                _this.error = true;
                _this.processing = false;
                console.log('Server-side Error occured');
            }
        });
    };
    // return to the previous page
    EnhancedTextResultComponent.prototype.backClicked = function () {
        this._location.back();
    };
    EnhancedTextResultComponent.prototype.onResize = function (event) {
        this.showOnlyIcons = window.innerWidth <= 680;
        this.updaTeLabels();
        event.target.innerWidth;
    };
    EnhancedTextResultComponent.prototype.updaTeLabels = function () {
        this.backLabel = this.showOnlyIcons ? '' : EnhancedTextResultComponent_1.BACK_LABEL;
        this.statisticsLabel = this.showOnlyIcons ? '' : EnhancedTextResultComponent_1.STATISTICS_LABEL;
    };
    // definiton Model open
    EnhancedTextResultComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    EnhancedTextResultComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //Convert the active category name "hi,med,low,..." to "High Frequency,.." used for popup title.
    //Sets up the category descriptions.
    EnhancedTextResultComponent.prototype.activeCategory = function (cat) {
        this.category = cat;
        // tslint:disable-next-line:max-line-length
        this.wordCategory = (cat === 'awl') ? 'Academic'
            : (cat === 'stem') ? 'STEM'
                : (cat === 'hi') ? 'Other High Frequency'
                    : (cat === 'med') ? 'Medium Frequency'
                        : (cat === 'low') ? 'Low Frequency'
                            : (cat === 'K1') ? 'K1'
                                : (cat === 'K2') ? 'K2'
                                    : (cat === 'K3') ? 'K3'
                                        : 'Names & Off-Lists';
        this.categoryDescription = (cat === 'awl') ? 'Commonly occurring among a wide variety of academic subjects but not within the 2000 most frequent words '
            : (cat === 'stem') ? 'Words occurring in Math or Science texts but not within the 2000 most frequent words'
                : (cat === 'hi') ? 'Words more than 100 times per 10 million words but not within the 3000 most commonly used words'
                    : (cat === 'med') ? 'Moderately occurring words, occurring between 10 to 100 times per 10 million words'
                        : (cat === 'low') ? 'Rarely occurring words, occurring only 1 to 10 times per 10 million words'
                            : (cat === 'K1') ? 'Among the list of the 1000 most frequently used words in primary and secondary texts'
                                : (cat === 'K2') ? 'Among the list of the 2nd 1000 most frequently used words in primary and secondary texts'
                                    : (cat === 'K3') ? 'Among the list of the 3rd 1000 most frequently used words in primary and secondary texts'
                                        : 'These are words that are names or are not analyzed by us';
    };
    //Convert the active category name "hi,med,low,..." to "High Frequency,.." used for popUps when hovering over words
    EnhancedTextResultComponent.prototype.popUpCategory = function (cat) {
        return (cat === 'awl') ? 'Academic'
            : (cat === 'stem') ? 'STEM'
                : (cat === 'hi') ? 'Other High Frequency'
                    : (cat === 'med') ? 'Medium Frequency'
                        : (cat === 'low') ? 'Low Frequency'
                            : (cat === 'K1') ? 'K1'
                                : (cat === 'K2') ? 'K2'
                                    : (cat === 'K3') ? 'K3'
                                        : 'Names & Off-Lists';
    };
    return EnhancedTextResultComponent;
}());
EnhancedTextResultComponent.BACK_LABEL = ' Back';
EnhancedTextResultComponent.STATISTICS_LABEL = ' Statistics';
EnhancedTextResultComponent = EnhancedTextResultComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-enhanced-text-result',
        template: __webpack_require__("./src/app/layout/enhanced-text-result/enhanced-text-result.component.html"),
        styles: [__webpack_require__("./src/app/layout/enhanced-text-result/enhanced-text-result.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["TextService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["TextService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["DefinitionService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["DefinitionService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _e || Object])
], EnhancedTextResultComponent);

var EnhancedTextResultComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=enhanced-text-result.component.js.map

/***/ }),

/***/ "./src/app/layout/enhanced-text-result/enhanced-text-result.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancedTextResultModule", function() { return EnhancedTextResultModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_definition_service__ = __webpack_require__("./src/app/shared/services/definition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enhanced_text_result_routing_module__ = __webpack_require__("./src/app/layout/enhanced-text-result/enhanced-text-result-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enhanced_text_result_component__ = __webpack_require__("./src/app/layout/enhanced-text-result/enhanced-text-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__ = __webpack_require__("./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EnhancedTextResultModule = (function () {
    function EnhancedTextResultModule() {
    }
    return EnhancedTextResultModule;
}());
EnhancedTextResultModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__enhanced_text_result_routing_module__["a" /* EnhancedTextResultRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__["a" /* InfiniteScrollModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__enhanced_text_result_component__["a" /* EnhancedTextResultComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_0__shared_services_definition_service__["a" /* DefinitionService */]],
    })
], EnhancedTextResultModule);

//# sourceMappingURL=enhanced-text-result.module.js.map

/***/ })

});
//# sourceMappingURL=enhanced-text-result.module.chunk.js.map