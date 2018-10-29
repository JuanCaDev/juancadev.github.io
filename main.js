(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _studies_studies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./studies/studies.component */ "./src/app/studies/studies.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] },
    { path: 'studies', component: _studies_studies_component__WEBPACK_IMPORTED_MODULE_5__["StudiesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Juan Felizzola | <small class=\"little-text\">Frontend Dev</small></span>\n  <span class=\"spacer\"></span>\n  <mat-icon class=\"icon\">{{ logo }}</mat-icon>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n\n<mat-toolbar class=\"footer\">\n  <mat-icon class=\"icon\" routerLink=\"\">home</mat-icon>\n  <mat-icon class=\"icon\" routerLink=\"skills\">flash_on</mat-icon>\n  <mat-icon class=\"icon\" routerLink=\"portfolio\">work</mat-icon>\n  <mat-icon class=\"icon\" routerLink=\"studies\">school</mat-icon>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".little-text {\n  font-weight: 300; }\n\n.spacer {\n  flex: 1 1 auto; }\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  justify-content: space-around; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqdWFuY1xcRG9jdW1lbnRzXFxkZXNhcnJvbGxvXFxtaXMtcHJveWVjdG9zXFxhbmd1bGFyXFxQZXJzb25hbFdlYnNpdGUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFnQixFQUFHOztBQUVyQjtFQUNFLGVBQWMsRUFBRzs7QUFFbkI7RUFDRSxnQkFBZTtFQUNmLFVBQVM7RUFDVCw4QkFBNkIsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vVG9vbGJhciBBbmd1bGFyIE1hdGVyaWFsXG4ubGl0dGxlLXRleHQge1xuICBmb250LXdlaWdodDogMzAwOyB9XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bzsgfVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                switch (event.url) {
                    case "/":
                        _this.logo = 'home';
                        break;
                    case "/skills":
                        _this.logo = 'flash_on';
                        break;
                    case "/portfolio":
                        _this.logo = 'work';
                        break;
                    case "/studies":
                        _this.logo = 'school';
                        break;
                    default:
                        break;
                }
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _studies_studies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./studies/studies.component */ "./src/app/studies/studies.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Angular material





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _studies_studies_component__WEBPACK_IMPORTED_MODULE_9__["StudiesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-home\">\n  <div class=\"home\">\n  <figure class=\"img img-container\">\n    <img src=\"../../assets/perfil.jpg\" alt=\"Imagen de perfil\" class=\"img-profile\">\n  </figure>\n  \n  <section class=\"social container\">\n    <img src=\"../../assets/facebook.svg\" class=\"social-img\" alt=\"Facebook logo\">\n    <img src=\"../../assets/twitter.svg\" class=\"social-img\" alt=\"Twitter logo\">\n    <img src=\"../../assets/instagram.svg\" class=\"social-img\" alt=\"Instagram logo\">\n    <img src=\"../../assets/github.svg\" class=\"social-img\" alt=\"Github logo\">\n    <img src=\"../../assets/codepen.svg\" class=\"social-img\" alt=\"Codepen logo\">\n  </section>\n  \n  <section class=\"about container\">\n    <h2 class=\"text-description\">{{ information.description }}</h2>\n    <p>{{ information.about }}</p>\n    <h3 class=\"text-center\">Conoce más</h3>\n    <p class=\"text-center\"><mat-icon class=\"icon-arrow\">keyboard_arrow_down</mat-icon></p>\n  </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-home {\n  height: 80vh;\n  display: flex; }\n\n.home {\n  display: grid;\n  height: 100vh;\n  grid-template-areas: 'img' 'social' 'about';\n  grid-template-rows: auto auto auto; }\n\n.home .img {\n    grid-area: img; }\n\n.home .img-container .img-profile {\n    width: 100%;\n    max-width: 280px;\n    border-radius: 50%;\n    display: block;\n    margin: 0 auto; }\n\n.home .social {\n    grid-area: social;\n    display: flex;\n    justify-content: space-around;\n    align-items: center; }\n\n.home .social .social-img {\n      width: 40px; }\n\n.home .about {\n    grid-area: about;\n    margin-bottom: 56px; }\n\n.home .about .text-description {\n      font-size: 1.3em; }\n\n.home .icon-arrow {\n    -webkit-animation: move 2s infinite;\n            animation: move 2s infinite; }\n\n@-webkit-keyframes move {\n  20% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes move {\n  20% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@media screen and (min-width: 600px) {\n  .home {\n    height: 70vh;\n    width: 700px;\n    margin: auto;\n    grid-template-areas: 'img about' 'social .';\n    grid-template-rows: 300px auto; }\n    .home .img-container .img-profile {\n      margin-top: 50px;\n      width: 100%; }\n    .home .about {\n      margin-top: 150px;\n      margin-bottom: 0;\n      display: flex;\n      flex-direction: column;\n      justify-content: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGp1YW5jXFxEb2N1bWVudHNcXGRlc2Fycm9sbG9cXG1pcy1wcm95ZWN0b3NcXGFuZ3VsYXJcXFBlcnNvbmFsV2Vic2l0ZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWixjQUFhLEVBQUc7O0FBQ2xCO0VBQ0UsY0FBYTtFQUNiLGNBQWE7RUFDYiw0Q0FBMkM7RUFDM0MsbUNBQWtDLEVBNkJBOztBQWpDcEM7SUFPSSxlQUFjLEVBQUc7O0FBUHJCO0lBVU0sWUFBVztJQUNYLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsZUFBYztJQUNkLGVBQWMsRUFBRzs7QUFkdkI7SUFpQkksa0JBQWlCO0lBQ2pCLGNBQWE7SUFDYiw4QkFBNkI7SUFDN0Isb0JBQW1CLEVBRUQ7O0FBdEJ0QjtNQXNCTSxZQUFXLEVBQUc7O0FBdEJwQjtJQXlCSSxpQkFBZ0I7SUFDaEIsb0JBQW1CLEVBSW5COztBQTlCSjtNQTRCTSxpQkFBZ0IsRUFBRzs7QUE1QnpCO0lBaUNJLG9DQUEyQjtZQUEzQiw0QkFBMkIsRUFBRzs7QUFFbEM7RUFDRTtJQUNFLHFDQUE0QjtZQUE1Qiw2QkFBNEIsRUFBQTtFQUM5QjtJQUNFLG9DQUEyQjtZQUEzQiw0QkFBMkIsRUFBQTtFQUM3QjtJQUNFLG1DQUEwQjtZQUExQiwyQkFBMEIsRUFBQSxFQUFBOztBQU45QjtFQUNFO0lBQ0UscUNBQTRCO1lBQTVCLDZCQUE0QixFQUFBO0VBQzlCO0lBQ0Usb0NBQTJCO1lBQTNCLDRCQUEyQixFQUFBO0VBQzdCO0lBQ0UsbUNBQTBCO1lBQTFCLDJCQUEwQixFQUFBLEVBQUE7O0FBRTlCO0VBQ0U7SUFDRSxhQUFZO0lBQ1osYUFBWTtJQUNaLGFBQVk7SUFDWiw0Q0FBMkM7SUFDM0MsK0JBQThCLEVBYUE7SUFsQmhDO01BUU0saUJBQWdCO01BQ2hCLFlBQVcsRUFBRztJQVRwQjtNQWNJLGtCQUFpQjtNQUNqQixpQkFBZ0I7TUFDaEIsY0FBYTtNQUNiLHVCQUFzQjtNQUN0Qix3QkFBdUIsRUFBRyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1ob21lIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICBkaXNwbGF5OiBmbGV4OyB9XG4uaG9tZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdpbWcnICdzb2NpYWwnICdhYm91dCc7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XG5cbiAgLmltZyB7XG4gICAgZ3JpZC1hcmVhOiBpbWc7IH1cbiAgLmltZy1jb250YWluZXIge1xuICAgIC5pbWctcHJvZmlsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMCBhdXRvOyB9IH1cblxuICAuc29jaWFsIHtcbiAgICBncmlkLWFyZWE6IHNvY2lhbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLnNvY2lhbC1pbWcge1xuICAgICAgd2lkdGg6IDQwcHg7IH0gfVxuXG4gIC5hYm91dCB7XG4gICAgZ3JpZC1hcmVhOiBhYm91dDtcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICAgIC50ZXh0LWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07IH1cbiAgICBwIHtcbiB9IH0gICAgICAvLyBtYXJnaW4tdG9wOiAwXG5cbiAgLmljb24tYXJyb3cge1xuICAgIGFuaW1hdGlvbjogbW92ZSAycyBpbmZpbml0ZTsgfSB9XG5cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5ob21lIHtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaW1nIGFib3V0JyAnc29jaWFsIC4nO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHggYXV0bztcbiAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAuaW1nLXByb2ZpbGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTsgfSB9XG5cbiAgICAuc29jaWFsIHt9XG5cbiAgICAuYWJvdXQge1xuICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.information = {
            name: 'Juan Felizzola',
            photo: '',
            socialMedia: {
                facebook: 'https://facebook.com/juankfelizzola',
                twitter: 'https://twitter.com/juancafelizzola'
            },
            description: 'Emprendedor, músico e investigador.',
            about: "Integrante de la Comunidad Desarrolladores Web UTS,\n            en la cual me destaco por dictar diferentes talleres\n            de Desarrollo Web y Marca Personal."
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]
            ],
            exports: [
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-portfolio\">\n  <h1 style=\"text-align: center\">En actualización...</h1>\n</div>"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.sass":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.sass */ "./src/app/portfolio/portfolio.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-skills\">\n<div class=\"skills\">\n  <h2>Habilidades</h2>\n  <section>\n    <img src=\"../../assets/html5.png\" alt=\"Logo HTML5\">\n    <img src=\"../../assets/css3.png\" alt=\"Logo HTML5\">\n    <img src=\"../../assets/js.png\" alt=\"Logo HTML5\">\n  </section>\n\n  <section>\n    <img src=\"../../assets/pug.svg\" alt=\"Logo HTML5\">\n    <img src=\"../../assets/sass.png\" alt=\"Logo HTML5\">\n    <img src=\"../../assets/ts.png\" alt=\"Logo HTML5\">\n  </section>\n\n  <section>\n    <img src=\"../../assets/angular.png\" alt=\"Logo HTML5\">\n    <img src=\"../../assets/ionic.png\" alt=\"Logo HTML5\">\n  </section>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/skills/skills.component.sass":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-skills {\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 56px; }\n  .container-skills .skills {\n    display: flex;\n    flex-direction: column;\n    width: 100%; }\n  .container-skills .skills h2 {\n      text-align: center; }\n  .container-skills .skills section {\n      width: 100%;\n      display: flex;\n      justify-content: space-around;\n      margin: 1em 0; }\n  .container-skills .skills section img {\n        width: 100px;\n        height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL0M6XFxVc2Vyc1xcanVhbmNcXERvY3VtZW50c1xcZGVzYXJyb2xsb1xcbWlzLXByb3llY3Rvc1xcYW5ndWxhclxcUGVyc29uYWxXZWJzaXRlL3NyY1xcYXBwXFxza2lsbHNcXHNraWxscy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixvQkFBbUIsRUFjUztFQW5COUI7SUFPSSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLFlBQVcsRUFVYTtFQW5CNUI7TUFXTSxtQkFBa0IsRUFBRztFQVgzQjtNQWFNLFlBQVc7TUFDWCxjQUFhO01BQ2IsOEJBQTZCO01BQzdCLGNBQWEsRUFHTztFQW5CMUI7UUFrQlEsYUFBWTtRQUNaLGNBQWEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXNraWxscyB7XG4gIGhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gIC5za2lsbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoMiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICBzZWN0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDsgfSB9IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.sass */ "./src/app/skills/skills.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/studies/studies.component.html":
/*!************************************************!*\
  !*** ./src/app/studies/studies.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-studies container\">\n  <h2>Estudios</h2>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Tecnólogo en Desarrollo de Sistemas informáticos</mat-card-title>\n      <mat-card-subtitle>\n        Bucaramanga, 2016\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        <a href=\"http://uts.edu.co\" class=\"link\">Unidades Tecnológicas de Santander</a>\n    </mat-card-content>\n  </mat-card>\n\n  <h2>Logros</h2>\n  <section class=\"accomplishments\">\n    <mat-card class=\"divider\" *ngFor=\"let career of studies.accomplishments.careers\">\n      <mat-card-header>\n        <div mat-card-avatar><img src=\"{{career.logo}}\" class=\"logo\"></div>\n        <mat-card-title>{{ career.name }}</mat-card-title>\n        <mat-card-subtitle>\n          {{ career.date }}\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <a href=\"{{career.url}}\" class=\"link\">{{ career.place }}</a>\n      </mat-card-content>\n    </mat-card>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/studies/studies.component.sass":
/*!************************************************!*\
  !*** ./src/app/studies/studies.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-studies {\n  margin-bottom: 66px; }\n\n.divider {\n  margin-bottom: 1em; }\n\n.logo {\n  width: 100%; }\n\n.link {\n  color: #98ca3f; }\n\n@media screen and (min-width: 600px) {\n  .accomplishments {\n    display: flex;\n    flex-flow: wrap;\n    justify-content: space-between; }\n    .accomplishments mat-card {\n      width: 49.5%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGllcy9DOlxcVXNlcnNcXGp1YW5jXFxEb2N1bWVudHNcXGRlc2Fycm9sbG9cXG1pcy1wcm95ZWN0b3NcXGFuZ3VsYXJcXFBlcnNvbmFsV2Vic2l0ZS9zcmNcXGFwcFxcc3R1ZGllc1xcc3R1ZGllcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFtQixFQUFHOztBQUV4QjtFQUNFLG1CQUFrQixFQUFHOztBQUV2QjtFQUNFLFlBQVcsRUFBRzs7QUFFaEI7RUFDRSxlQUFjLEVBQUc7O0FBRW5CO0VBQ0U7SUFDRSxjQUFhO0lBQ2IsZ0JBQWU7SUFDZiwrQkFBOEIsRUFHWDtJQU5yQjtNQU1JLGFBQVksRUFBRyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGllcy9zdHVkaWVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1zdHVkaWVzIHtcbiAgbWFyZ2luLWJvdHRvbTogNjZweDsgfVxuXG4uZGl2aWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5saW5rIHtcbiAgY29sb3I6ICM5OGNhM2Y7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmFjY29tcGxpc2htZW50cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgbWF0LWNhcmQge1xuICAgICAgd2lkdGg6IDQ5LjUlOyB9IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/studies/studies.component.ts":
/*!**********************************************!*\
  !*** ./src/app/studies/studies.component.ts ***!
  \**********************************************/
/*! exports provided: StudiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudiesComponent", function() { return StudiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudiesComponent = /** @class */ (function () {
    function StudiesComponent() {
        this.studies = {
            accomplishments: {
                careers: [
                    {
                        name: 'Carrera de Arquitectura Frontend',
                        logo: 'https://static.platzi.com/media/achievements/Golden-badge-arquitecto-front.png',
                        date: 'Online, 2018',
                        courses: [
                            'Curso de Desarollo Web Online',
                            'Curso Profesional de Git y GitHub',
                            'Curso de CSS Grid Layout',
                            'Curso de Responsive Design',
                            'Cursos de Animaciones para la Web',
                            'Curso de Sass',
                            'Curso de Stylus',
                            'Curso de Bootstrap',
                            'Curso de PostCSS',
                            'Curso de Boots para Messenger'
                        ],
                        place: 'Platzi - Educación Online Efectiva',
                        url: 'https://platzi.com/@juancafelizzola'
                    },
                    {
                        name: 'Carrera Desarrollo con Angular',
                        logo: 'https://static.platzi.com/media/achievements/golden_badges-angular-a5634cea-cc0f-41a3-92a7-ff18d0745465.png',
                        date: 'Online, 2018',
                        courses: [
                            'Curso de Angular 4',
                            'Curso de Ionic Básico',
                            'Curso de Ionic Avanzado',
                            'Curso de Angular 6'
                        ],
                        place: 'Platzi - Educación Online Efectiva',
                        url: 'https://platzi.com/@juancafelizzola'
                    }
                ]
            }
        };
        console.log(this.studies);
    }
    StudiesComponent.prototype.ngOnInit = function () {
    };
    StudiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-studies',
            template: __webpack_require__(/*! ./studies.component.html */ "./src/app/studies/studies.component.html"),
            styles: [__webpack_require__(/*! ./studies.component.sass */ "./src/app/studies/studies.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], StudiesComponent);
    return StudiesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




//Hammerjs

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\juanc\Documents\desarrollo\mis-proyectos\angular\PersonalWebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map