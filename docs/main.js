(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cysote\repos\basedvision-website\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reduced Lens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "7U1H":
/*!*************************************************************************************!*\
  !*** ./src/app/components/call-to-action-button/call-to-action-button.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CallToActionButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallToActionButtonComponent", function() { return CallToActionButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { "background-image": a0 }; };
class CallToActionButtonComponent {
    constructor() {
        this.text = "";
        this.link = "";
        this.backgroundImage = "";
    }
    ngOnInit() {
    }
    extNav() {
        window.open(this.link, "_blank");
    }
}
CallToActionButtonComponent.ɵfac = function CallToActionButtonComponent_Factory(t) { return new (t || CallToActionButtonComponent)(); };
CallToActionButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallToActionButtonComponent, selectors: [["app-call-to-action-button"]], inputs: { text: "text", link: "link", backgroundImage: "backgroundImage" }, decls: 3, vars: 4, consts: [[1, "call-to-action-button-outer-box"], [1, "call-to-action-button", 3, "ngStyle", "click"]], template: function CallToActionButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CallToActionButtonComponent_Template_button_click_1_listener() { return ctx.extNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + ctx.backgroundImage + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".call-to-action-button-outer-box[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    opacity: 100%;\r\n}\r\n\r\n.call-to-action-button[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    height: 50px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    background-color: transparent;\r\n    background-position-x: 85%;\r\n    background-size: 100%;\r\n    background-color: rgba(0,0,0,0.5);\r\n    border-style: solid;\r\n    transition-duration: 0.5s;\r\n    cursor: pointer;\r\n    color: white;\r\n    text-shadow:-1px 1px 2px #000,\r\n                1px 1px 2px #000,\r\n                1px -1px 2px #000,\r\n                -1px -1px 2px #000;\r\n}\r\n\r\n.call-to-action-button[_ngcontent-%COMP%]:hover {\r\n    background-position-y: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGwtdG8tYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWjs7O2tDQUc4QjtBQUNsQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJjYWxsLXRvLWFjdGlvbi1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxsLXRvLWFjdGlvbi1idXR0b24tb3V0ZXItYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLmNhbGwtdG8tYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogODUlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzotMXB4IDFweCAycHggIzAwMCxcclxuICAgICAgICAgICAgICAgIDFweCAxcHggMnB4ICMwMDAsXHJcbiAgICAgICAgICAgICAgICAxcHggLTFweCAycHggIzAwMCxcclxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAycHggIzAwMDtcclxufVxyXG5cclxuLmNhbGwtdG8tYWN0aW9uLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disclaimer: No Medical Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_responsive_card_responsive_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/responsive-card/responsive-card.component */ "s1ah");
/* harmony import */ var _components_call_to_action_button_call_to_action_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/call-to-action-button/call-to-action-button.component */ "7U1H");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");





class AppComponent {
    constructor() {
        this.title = 'basedvision-website';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 0, consts: [[1, "body-container"], [1, "title-container"], ["id", "catchphrase-title"], ["id", "catchphrase-subtitle"], [1, "responsive-card-container"], ["frontText", "Why am I nearsighted? Can I reverse it?", "backText", "It's caused by lenses and a close-up lifestyle! With some careful determination, you can reverse it.", 1, "responsive-card"], ["frontText", "Is it easy to reverse my nearsightedness?", "backText", "With good habits and a plan, it's possible! 1000s of others have done it.", 1, "responsive-card"], ["frontText", "How much does it cost to reverse my nearsightedness?", "backText", "It's (mostly) free! All you need to buy are a few pairs of glasses.", 1, "responsive-card"], [1, "call-to-action-button-container"], ["text", "Join the Discord!", "link", "https://discord.gg/ysGb5paH4a", "backgroundImage", "assets/DiscordBackground.png", 1, "call-to-action-button"], ["text", "Read these studies!", "link", "https://wiki.reducedlens.org/wiki/Clinical_Studies", "backgroundImage", "assets/StudiesBackground.png", 1, "call-to-action-button"], ["text", "Check out these video guides!", "link", "https://www.youtube.com/watch?v=XPIGDSY_xBs", "backgroundImage", "assets/YouTubeBackground.png", 1, "call-to-action-button"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nearsightedness is Reversible!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "For 99% of people. Are you part of the 99%?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-responsive-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-responsive-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-responsive-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-call-to-action-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-call-to-action-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-call-to-action-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_responsive_card_responsive_card_component__WEBPACK_IMPORTED_MODULE_2__["ResponsiveCardComponent"], _components_call_to_action_button_call_to_action_button_component__WEBPACK_IMPORTED_MODULE_3__["CallToActionButtonComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".body-container[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.title-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.responsive-card-container[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.call-to-action-button-container[_ngcontent-%COMP%] {\r\n    margin: 50px;\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.call-to-action-button[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLWNhcmQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmNhbGwtdG8tYWN0aW9uLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FsbC10by1hY3Rpb24tYnV0dG9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_responsive_card_responsive_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/responsive-card/responsive-card.component */ "s1ah");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_call_to_action_button_call_to_action_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/call-to-action-button/call-to-action-button.component */ "7U1H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_responsive_card_responsive_card_component__WEBPACK_IMPORTED_MODULE_3__["ResponsiveCardComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_call_to_action_button_call_to_action_button_component__WEBPACK_IMPORTED_MODULE_6__["CallToActionButtonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "s1ah":
/*!*************************************************************************!*\
  !*** ./src/app/components/responsive-card/responsive-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: ResponsiveCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveCardComponent", function() { return ResponsiveCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ResponsiveCardComponent {
    constructor() {
        this.frontText = "";
        this.backText = "";
    }
    ngOnInit() {
    }
}
ResponsiveCardComponent.ɵfac = function ResponsiveCardComponent_Factory(t) { return new (t || ResponsiveCardComponent)(); };
ResponsiveCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResponsiveCardComponent, selectors: [["app-responsive-card"]], inputs: { frontText: "frontText", backText: "backText" }, decls: 12, vars: 2, consts: [[1, "responsive-card-outer-box"], [1, "responsive-card-inner-box"], [1, "responsive-card-front"], [1, "responsive-card-text-front-container"], [1, "responsive-card-text", "responsive-card-text-front"], [1, "responsive-card-back"], [1, "responsive-card-text-back-container"], [1, "responsive-card-text", "responsive-card-text-back"], [1, "responseive-card-back-investigation-button"]], template: function ResponsiveCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.frontText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.backText);
    } }, styles: [".responsive-card-outer-box[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    width: 200px;\r\n    height: 250px;\r\n    perspective: 1000px;\r\n}\r\n\r\n.responsive-card-inner-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    transition: transform 0.6s;\r\n    transform-style: preserve-3d;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.responsive-card-outer-box[_ngcontent-%COMP%]:hover   .responsive-card-inner-box[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.responsive-card-front[_ngcontent-%COMP%], .responsive-card-back[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.responsive-card-front[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    color: black;\r\n}\r\n\r\n.responsive-card-back[_ngcontent-%COMP%] {\r\n    background-color: #2980b9;\r\n    color: white;\r\n    transform: rotateY(180deg);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.responsive-card-text[_ngcontent-%COMP%] {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.responsive-card-text-back-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n}\r\n\r\n.responseive-card-back-investigation-button[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: white;\r\n    border: 2px solid white;\r\n    padding: 4px 8px;\r\n    margin-bottom: 20px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    transition-duration: 0.5s;\r\n}\r\n\r\n.responseive-card-back-investigation-button[_ngcontent-%COMP%]:hover {\r\n    background-color: white;\r\n    color: black;\r\n    border: 2px solid black;\r\n    font-size: 20px;\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2)\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3BvbnNpdmUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmO0FBQ0oiLCJmaWxlIjoicmVzcG9uc2l2ZS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzcG9uc2l2ZS1jYXJkLW91dGVyLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1jYXJkLWlubmVyLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLnJlc3BvbnNpdmUtY2FyZC1vdXRlci1ib3g6aG92ZXIgLnJlc3BvbnNpdmUtY2FyZC1pbm5lci1ib3gge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLWNhcmQtZnJvbnQsIC5yZXNwb25zaXZlLWNhcmQtYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1jYXJkLWZyb250IHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLWNhcmQtYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLWNhcmQtdGV4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1jYXJkLXRleHQtYmFjay1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5yZXNwb25zZWl2ZS1jYXJkLWJhY2staW52ZXN0aWdhdGlvbi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxufVxyXG5cclxuLnJlc3BvbnNlaXZlLWNhcmQtYmFjay1pbnZlc3RpZ2F0aW9uLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMilcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map