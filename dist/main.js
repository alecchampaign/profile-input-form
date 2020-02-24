(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>About</h2>\n\n<form [formGroup]=\"aboutForm\">\n  <div>\n    <label for=\"description\">Description</label>\n    <br />\n    <textarea\n      id=\"description\"\n      formControlName=\"description\"\n      rows=\"4\"\n      [value]=\"\n        sportsService.aboutInfo ? sportsService.aboutInfo.description : null\n      \"\n      ng-required=\"true\"\n    ></textarea>\n  </div>\n\n  <div>\n    <label for=\"location\">Location</label>\n    <input\n      id=\"location\"\n      type=\"text\"\n      formControlName=\"location\"\n      [value]=\"\n        sportsService.aboutInfo ? sportsService.aboutInfo.location : null\n      \"\n      ng-required=\"true\"\n    />\n  </div>\n\n  <div>\n    <label for=\"team\">Team</label>\n    <input\n      id=\"team\"\n      type=\"text\"\n      formControlName=\"team\"\n      [value]=\"sportsService.aboutInfo ? sportsService.aboutInfo.team : null\"\n      ng-required=\"true\"\n    />\n  </div>\n\n  <button routerLink=\"social\" (click)=\"onSubmit(aboutForm.value)\">\n    Next\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sports.service */ "./src/app/sports.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let AboutComponent = class AboutComponent {
    constructor(sportsService, formBuilder) {
        this.sportsService = sportsService;
        this.formBuilder = formBuilder;
        this.aboutForm = this.formBuilder.group({
            description: '',
            location: '',
            team: ''
        });
    }
    onSubmit(info) {
        this.sportsService.saveAboutInfo(info);
    }
    ngOnInit() { }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], AboutComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-bar\">\n  <h1>Athlete Profile</h1>\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic-info/basic-info.component */ "./src/app/basic-info/basic-info.component.ts");
/* harmony import */ var _sports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sports.service */ "./src/app/sports.service.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_7__["BasicInfoComponent"] },
                { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] },
                { path: 'about/social', component: _social_social_component__WEBPACK_IMPORTED_MODULE_10__["SocialComponent"] },
                { path: 'about/social/summary', component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_11__["SummaryComponent"] }
            ])
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_7__["BasicInfoComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _social_social_component__WEBPACK_IMPORTED_MODULE_10__["SocialComponent"],
            _summary_summary_component__WEBPACK_IMPORTED_MODULE_11__["SummaryComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        providers: [_sports_service__WEBPACK_IMPORTED_MODULE_8__["SportsService"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/basic-info/basic-info.component.css":
/*!*****************************************************!*\
  !*** ./src/app/basic-info/basic-info.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLWluZm8vYmFzaWMtaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/basic-info/basic-info.component.html":
/*!******************************************************!*\
  !*** ./src/app/basic-info/basic-info.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Basic Info</h2>\n\n<form [formGroup]=\"basicInfoForm\">\n  <div>\n    <label for=\"name\">Name</label>\n    <input\n      id=\"name\"\n      type=\"text\"\n      formControlName=\"name\"\n      [value]=\"sportsService.basicInfo ? sportsService.basicInfo.name : null\"\n    />\n  </div>\n\n  <div>\n    <label for=\"sport\">Sport</label>\n    <select id=\"sport\" formControlName=\"sport\">\n      <option *ngFor=\"let sport of sports | async\">{{ sport }}</option>\n    </select>\n  </div>\n\n  <div>\n    <label for=\"nationality\">Nationality</label>\n    <select id=\"nationality\" formControlName=\"nationality\">\n      <option *ngFor=\"let country of countries | async\">{{ country }}</option>\n    </select>\n  </div>\n\n  <div>\n    <label for=\"gender\">Gender</label>\n    <select id=\"gender\" formControlName=\"gender\">\n      <option>Male</option>\n      <option>Female</option>\n      <option>Other</option>\n    </select>\n  </div>\n\n  <div>\n    <label for=\"birthDate\">Date of Birth</label>\n    <input\n      id=\"birthDate\"\n      type=\"date\"\n      formControlName=\"birthDate\"\n      [value]=\"\n        sportsService.basicInfo ? sportsService.basicInfo.birthDate : null\n      \"\n    />\n  </div>\n\n  <button routerLink=\"about\" (click)=\"onSubmit(basicInfoForm.value)\">\n    Next\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/basic-info/basic-info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/basic-info/basic-info.component.ts ***!
  \****************************************************/
/*! exports provided: BasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoComponent", function() { return BasicInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sports.service */ "./src/app/sports.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let BasicInfoComponent = class BasicInfoComponent {
    constructor(sportsService, formBuilder) {
        this.sportsService = sportsService;
        this.formBuilder = formBuilder;
        this.basicInfoForm = this.formBuilder.group({
            name: '',
            sport: '',
            nationality: '',
            gender: '',
            birthDate: ''
        });
    }
    onSubmit(info) {
        this.sportsService.saveBasicInfo(info);
    }
    ngOnInit() {
        this.sports = this.sportsService.getSports();
        this.countries = this.sportsService.getCountries();
    }
};
BasicInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-info',
        template: __webpack_require__(/*! ./basic-info.component.html */ "./src/app/basic-info/basic-info.component.html"),
        styles: [__webpack_require__(/*! ./basic-info.component.css */ "./src/app/basic-info/basic-info.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], BasicInfoComponent);



/***/ }),

/***/ "./src/app/social/social.component.css":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Social</h2>\n\n<form [formGroup]=\"socialForm\">\n  <div>\n    <label for=\"twitter\">Twitter</label>\n    <input\n      id=\"twitter\"\n      type=\"text\"\n      formControlName=\"twitter\"\n      [value]=\"\n        sportsService.socialInfo ? sportsService.socialInfo.twitter : null\n      \"\n    />\n  </div>\n\n  <div>\n    <label for=\"instagram\">Instagram</label>\n    <input\n      id=\"instagram\"\n      type=\"text\"\n      formControlName=\"instagram\"\n      [value]=\"\n        sportsService.socialInfo ? sportsService.socialInfo.instagram : null\n      \"\n    />\n  </div>\n\n  <div>\n    <label for=\"facebook\">Facebook</label>\n    <input\n      id=\"facebook\"\n      type=\"text\"\n      formControlName=\"facebook\"\n      [value]=\"\n        sportsService.socialInfo ? sportsService.socialInfo.facebook : null\n      \"\n    />\n  </div>\n\n  <button routerLink=\"summary\" (click)=\"onSubmit(socialForm.value)\">\n    Next\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sports.service */ "./src/app/sports.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let SocialComponent = class SocialComponent {
    constructor(sportsService, formBuilder) {
        this.sportsService = sportsService;
        this.formBuilder = formBuilder;
        this.socialForm = this.formBuilder.group({
            twitter: '',
            facebook: '',
            instagram: ''
        });
    }
    onSubmit(info) {
        this.sportsService.saveSocialInfo(info);
    }
    ngOnInit() { }
};
SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social',
        template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
        styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/social/social.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], SocialComponent);



/***/ }),

/***/ "./src/app/sports.service.ts":
/*!***********************************!*\
  !*** ./src/app/sports.service.ts ***!
  \***********************************/
/*! exports provided: SportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsService", function() { return SportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SportsService = class SportsService {
    constructor(http) {
        this.http = http;
    }
    getSports() {
        return this.http.get('/assets/sports.json');
    }
    getCountries() {
        return this.http.get('/assets/countries.json');
    }
    saveBasicInfo(info) {
        this.basicInfo = info;
        console.log(this.basicInfo);
    }
    saveAboutInfo(info) {
        this.aboutInfo = info;
        console.log(this.aboutInfo);
    }
    saveSocialInfo(info) {
        this.socialInfo = info;
        console.log(this.socialInfo);
    }
    submitData() {
        console.log('Sending data');
        return this.http.post('localhost:4000/profile', JSON.stringify({
            basicInfo: this.basicInfo,
            aboutInfo: this.aboutInfo,
            socialInfo: this.socialInfo
        }));
    }
};
SportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SportsService);



/***/ }),

/***/ "./src/app/summary/summary.component.html":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Summary</h2>\n\n<div>\n  <h3>Basic Info</h3>\n  <button routerLink=\"/\">Edit</button>\n  <p>Name: {{ basicInfo.name }}</p>\n  <p>Sport: {{ basicInfo.sport }}</p>\n  <p>Nationality: {{ basicInfo.nationality }}</p>\n  <p>Gender: {{ basicInfo.gender }}</p>\n  <p>Date of birth: {{ basicInfo.birthDate }}</p>\n</div>\n\n<div>\n  <h3>About</h3>\n  <button routerLink=\"/about\">Edit</button>\n  <p>Desccription: {{ aboutInfo.description }}</p>\n  <p>Location: {{ aboutInfo.location }}</p>\n  <p>Team: {{ aboutInfo.team }}</p>\n</div>\n\n<div>\n  <h3>Social</h3>\n  <button routerLink=\"/about/social\">Edit</button>\n  <p>Twitter: {{ socialInfo.twitter }}</p>\n  <p>Facebook: {{ socialInfo.facebook }}</p>\n  <p>Instagram: {{ socialInfo.instagram }}</p>\n</div>\n\n<button id=\"submit\" (click)=\"submitData()\">Submit</button>\n"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sports.service */ "./src/app/sports.service.ts");



let SummaryComponent = class SummaryComponent {
    constructor(sportsService) {
        this.sportsService = sportsService;
        this.aboutInfo = sportsService.aboutInfo;
        this.socialInfo = sportsService.socialInfo;
        this.basicInfo = sportsService.basicInfo;
    }
    submitData() {
        this.sportsService.submitData();
    }
    ngOnInit() { }
};
SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: __webpack_require__(/*! ./summary.component.html */ "./src/app/summary/summary.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sports_service__WEBPACK_IMPORTED_MODULE_2__["SportsService"]])
], SummaryComponent);



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
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alec/profile-input-form/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map