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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!* Sticky footer styles*/\n/*-------------------------------------------------- *!*/\n/*.footer {*/\n/*position: absolute;*/\n/*bottom: 0;*/\n/*width: 100%;*/\n/*!* Set the fixed height of the footer here *!*/\n/*height: 60px;*/\n/*line-height: 60px; !* Vertically center the text there *!*/\n/*background-color: #f5f5f5;*/\n/*}*/\n/*.footer > .container {*/\n/*padding-right: 15px;*/\n/*padding-left: 15px;*/\n/*}*/\n/*code {*/\n/*font-size: 80%;*/\n/*}*/\n/*.title{*/\n/*font-family: \"Fira Code Retina\";*/\n/*}*/\n/*.nav-link{*/\n/*font-family: \"Arial\";*/\n/*font-size: large;*/\n/*}*/\n.cont {\n  padding-left:20px;\n  padding-right:20px;\n  margin-top: 130px;\n  height: 100%;\n  margin-bottom: 40px;\n}\n.title {\n  font-family: \"Arial\";\n  font-size: 16px;\n}\n.nav-link {\n  font-family: \"Times new Roman\";\n  font-size: 20px;\n  color: whitesmoke !important;\n\n}\n.navbar-nav \n{\n  color:white !important;\n}\n.navbar {\n\n  /*height: 140px;*/\n  /*background-color: #cccccc;*/\n  background-color: rgb(22, 83, 139) !important; \n  /* background-image: url('./../assets/images/naphtali-marshall-45606-unsplash.jpg'); */\n  /*background-size: contain;*/\n\n}\n.btn{\n  background-color:transparent;\n  color:white !important;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg  fixed-top navbar-dark bg-dark\" >\n\n  <a class=\"navbar-brand logo\" href=\"#\"><img src='./../../../assets/images/ictlogo.jpg'></a> \n <a class=\"navbar-brand \" href=\"#\"><h1 class=\"title\" style=\"font-family:fantasy;\">Alumni <br>Job Portal</h1></a>\n <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\n         aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n   <span class=\"navbar-toggler-icon\"></span>\n </button>\n <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n   <ul class=\"navbar-nav mr-auto\">\n     <li class=\"nav-item my-1\">\n       <a class=\"btn btn-outline-info font-weight-bold ml-3\" style=\"font-weight: 900;\" [routerLinkActive]=\"['active']\" routerLink=\"/home\" >Home </a>\n       <!--<span class=\"sr-only\">(current)</span>-->\n     </li>\n     <li class=\"nav-item my-1\">\n       <a class=\"btn btn-outline-info font-weight-bold ml-3\" [routerLinkActive]=\"['active']\"\n          routerLink=\"/job-list/{{' '}}/{{' '}}\">Jobs</a>\n     </li>\n\n     <!-- <li class=\"nav-item my-1\">\n\n       <a [hidden]=\"!(user != null && user.role === 'JobSeeker')\" class=\"btn btn-outline-dark\n       font-weight-bold ml-3\"\n          [routerLinkActive]=\"['active']\" routerLink=\"/profile-seeker\" >Profile</a>\n     </li>\n     <li class=\"nav-item my-1\">\n       <a [hidden]=\"!(user != null && user.role === 'Recruiter')\" class=\"btn btn-outline-dark\n       font-weight-bold ml-3\"\n          [routerLinkActive]=\"['active']\" routerLink=\"/profile-recruiter\" >Profile</a>\n     </li> -->\n     <li class=\"nav-item my-1\">\n       <a [hidden]=\"!(user != null && user.role === 'JobSeeker')\" class=\"btn btn-outline-info\n       font-weight-bold ml-3\"\n          [routerLinkActive]=\"['active']\" routerLink=\"/dashboard-seeker\" >Dashboard</a>\n     </li>\n     <li class=\"nav-item my-1\">\n       <a [hidden]=\"!(user != null && user.role === 'Faculty')\" class=\"btn btn-outline-info\n       font-weight-bold ml-3\"\n          [routerLinkActive]=\"['active']\" routerLink=\"/dashboard-recruiter\" >Dashboard</a>\n     </li>\n     <li class=\"nav-item my-1\">\n       <a [hidden]=\"!(user != null && (user.role === 'Recruiter' || user.role === 'Admin' ))\"\n          class=\"btn btn-outline-info\n       font-weight-bold ml-3\"\n          [routerLinkActive]=\"['active']\" routerLink=\"/dashboard-recruiter\" >Dashboard</a>\n     </li>\n     <li class=\"nav-item my-1\">\n       <a [hidden]=\"!(user != null && user.role === 'Admin')\" class=\"btn btn-outline-info\n        font-weight-bold ml-3\"\n          [routerLinkActive]=\"['active']\" routerLink=\"/admin\" >Admin</a>\n     </li>\n\n   </ul>\n   <ul class=\"navbar-nav float-right\">\n     <li class=\"nav-item my-1\">\n       <h5 [hidden]=\"user===null\"class=\"text-light my-1 mx-3\"><i [hidden]=\"user===null\" class=\"fa fa-user text-light\"></i>\n         {{user!=null && user.username}}</h5>\n     </li>\n     <li class=\"nav-item my-1\">\n       <button [hidden]=\"user===null\" class=\"btn btn-outline-info\n      font-weight-bold ml-3\" (click)=\"logout()\"\n               type=\"button\">Logout</button>\n     </li>\n     <li class=\"nav-item my-1\">\n       <button [hidden]=\"!(user === null)\" class=\"btn btn-outline-info\n      font-weight-bold ml-3\" routerLink=\"/login\" [routerLinkActive]=\"['active']\"\n               type=\"button\">Login</button>\n     </li>\n\n     <li class=\"nav-item my-1\">\n       <button class=\"btn btn-outline-info\n     font-weight-bold ml-3\" routerLink=\"/register\" [routerLinkActive]=\"['active']\"\n               type=\"button\">Sign Up</button>\n     </li>\n   </ul>\n </div>\n</nav>\n<div class=\"cont\" style=\"min-height: 80vh;\">\n <router-outlet (activate)=\"sessionCheck()\" ></router-outlet>\n</div>\n<!-- <app-footer></app-footer> -->\n\n\n\n"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(userService, router) {
        // this.router.events.subscribe(() => this.sessionCheck());
        this.userService = userService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.sessionCheck = function () {
        var _this = this;
        this.userService.findLoggedUser().then(function (user) { return _this.user = user; });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().then(function () { return _this.router.navigate(['*']); })
            .then(function () {
            return _this.userService.findLoggedUser().then(function (user) { return _this.user = user; });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_recruiter_profile_recruiter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile-recruiter/profile-recruiter.component */ "./src/app/components/profile-recruiter/profile-recruiter.component.ts");
/* harmony import */ var _components_profile_seeker_profile_seeker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile-seeker/profile-seeker.component */ "./src/app/components/profile-seeker/profile-seeker.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/job-board/job-board.component */ "./src/app/components/job-board/job-board.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/view-job/view-job.component */ "./src/app/components/view-job/view-job.component.ts");
/* harmony import */ var _services_job_listing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/job-listing.service */ "./src/app/services/job-listing.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/job-list/job-list.component */ "./src/app/components/job-list/job-list.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/post-job/post-job.component */ "./src/app/components/post-job/post-job.component.ts");
/* harmony import */ var _services_save_job_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/save-job.service */ "./src/app/services/save-job.service.ts");
/* harmony import */ var _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/personal-info/personal-info.component */ "./src/app/components/personal-info/personal-info.component.ts");
/* harmony import */ var _components_user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/user-sidebar/user-sidebar.component */ "./src/app/components/user-sidebar/user-sidebar.component.ts");
/* harmony import */ var _components_job_seeker_dashboard_job_seeker_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/job-seeker-dashboard/job-seeker-dashboard.component */ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.ts");
/* harmony import */ var _components_recruiter_dashboard_recruiter_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/recruiter-dashboard/recruiter-dashboard.component */ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.ts");
/* harmony import */ var _services_job_posting_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/job-posting.service */ "./src/app/services/job-posting.service.ts");
/* harmony import */ var _services_recruiter_detail_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/recruiter-detail.service */ "./src/app/services/recruiter-detail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_profile_recruiter_profile_recruiter_component__WEBPACK_IMPORTED_MODULE_6__["ProfileRecruiterComponent"],
                _components_profile_seeker_profile_seeker_component__WEBPACK_IMPORTED_MODULE_7__["ProfileSeekerComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_9__["JobBoardComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_9__["SearchFilterPipe"],
                _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_11__["ViewJobComponent"],
                _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_14__["JobListComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
                _components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_17__["PostJobComponent"],
                _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_19__["PersonalInfoComponent"],
                _components_user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["UserSidebarComponent"],
                _components_job_seeker_dashboard_job_seeker_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["JobSeekerDashboardComponent"],
                _components_recruiter_dashboard_recruiter_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["RecruiterDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            providers: [
                _services_job_listing_service__WEBPACK_IMPORTED_MODULE_12__["JobListingService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                _services_save_job_service__WEBPACK_IMPORTED_MODULE_18__["SaveJobService"],
                _services_job_posting_service__WEBPACK_IMPORTED_MODULE_23__["JobPostingService"],
                _services_recruiter_detail_service__WEBPACK_IMPORTED_MODULE_24__["RecruiterDetailService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/job-board/job-board.component */ "./src/app/components/job-board/job-board.component.ts");
/* harmony import */ var _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/job-list/job-list.component */ "./src/app/components/job-list/job-list.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_recruiter_profile_recruiter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile-recruiter/profile-recruiter.component */ "./src/app/components/profile-recruiter/profile-recruiter.component.ts");
/* harmony import */ var _components_profile_seeker_profile_seeker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile-seeker/profile-seeker.component */ "./src/app/components/profile-seeker/profile-seeker.component.ts");
/* harmony import */ var _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/view-job/view-job.component */ "./src/app/components/view-job/view-job.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/post-job/post-job.component */ "./src/app/components/post-job/post-job.component.ts");
/* harmony import */ var _components_job_seeker_dashboard_job_seeker_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/job-seeker-dashboard/job-seeker-dashboard.component */ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.ts");
/* harmony import */ var _components_recruiter_dashboard_recruiter_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/recruiter-dashboard/recruiter-dashboard.component */ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.ts");












// import {FacultyDashboardComponent} from './components/faculty-dashboard/faculty-dashboard.component';
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_1__["JobBoardComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'job-list/:location/:keyword', component: _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_2__["JobListComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'profile-recruiter', component: _components_profile_recruiter_profile_recruiter_component__WEBPACK_IMPORTED_MODULE_4__["ProfileRecruiterComponent"] },
    { path: 'profile-seeker', component: _components_profile_seeker_profile_seeker_component__WEBPACK_IMPORTED_MODULE_5__["ProfileSeekerComponent"] },
    { path: 'dashboard-recruiter', component: _components_recruiter_dashboard_recruiter_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["RecruiterDashboardComponent"] },
    // {path: 'dashboard-faculty', component: FacultyDashboardComponent},
    { path: 'dashboard-faculty', component: _components_recruiter_dashboard_recruiter_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["RecruiterDashboardComponent"] },
    { path: 'dashboard-seeker', component: _components_job_seeker_dashboard_job_seeker_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["JobSeekerDashboardComponent"] },
    { path: 'job-list/:location/:keyword/view-job/:jobId', component: _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_6__["ViewJobComponent"] },
    { path: 'dashboard-seeker/view-job/:jobId', component: _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_6__["ViewJobComponent"] },
    { path: 'dashboard-recruiter/view-job/:jobId', component: _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_6__["ViewJobComponent"] },
    { path: 'post', component: _components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_9__["PostJobComponent"] },
    { path: '**', component: _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_1__["JobBoardComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row navbar navbar-expand-lg  bg-dark text-light m-3\" data-toggle=\"collapse\" data-target=\"#pendingRec\">\n  <div class=\"col\">\n    <h3>Pending Recruiter List</h3>\n  </div>\n  <div class=\"col\">\n    <i class=\"fa fa-angle-down fa-2x btn float-right\"></i>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"pendingRec\" data-parent=\"admin\">\n  <div *ngFor=\"let user of users\" class=\"m-3\">\n    <div class=\"row bg-white border shadow text-dark p-2 mx-3\" data-toggle=\"collapse\">\n      <div class=\"col\">\n        <h5>{{user.username}}</h5>\n      </div>\n      <div class=\"col\">\n        <button class=\"btn btn-success float-right ml-2\" (click)=\"approveUser(user._id)\">Approve</button>\n        <button class=\"btn btn-danger float-right\" (click)=\"rejectUser(user._id)\">Reject</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"row navbar navbar-expand-lg  bg-dark text-light m-3\" data-toggle=\"collapse\" data-target=\"#adminCreate\">\n  <div class=\"col\">\n    <h3>Add or Remove Admin User</h3>\n  </div>\n  <div class=\"col\">\n    <i class=\"fa fa-angle-down fa-2x btn float-right\"></i>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"adminCreate\" data-parent=\"adminCreate\">\n  <div class=\"row m-3\">\n    <div class=\"col\">\n      <div class=\"alert alert-danger\" [hidden]=\"!usernameExists\">\n        Username already exists user another one !\n      </div>\n    </div>\n  </div>\n  <div class=\"row m-3\">\n    <div class=\"col\">\n      <form class=\"form\" #form=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\"\n                   id=\"username\" class=\"form-control \" required #userName=\"ngModel\">\n            <div [hidden]=\"userName.valid || userName.pristine\" class=\"mt-2 alert alert-danger\">\n              Username required!!\n            </div>\n          </div>\n          <div class=\"col\">\n\n            <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\"\n                   id=\"password\" class=\"form-control\" required #pass=\"ngModel\">\n            <div [hidden]=\"pass.valid || pass.pristine\" class=\"mt-2 alert alert-danger\">\n              Password required!!\n            </div>\n          </div>\n          <div class=\"col\">\n            <i class=\"fa fa-2x p-1 btn fa-plus\" (click)=\"createAdmin(username, password); form.reset()\"></i>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div *ngFor=\"let user of admins\" class=\"\">\n    <div class=\"row bg-white border shadow text-dark p-2 mx-3\" data-toggle=\"collapse\"\n         *ngIf=\"currentAdmin && user && currentAdmin.username != user.username\">\n      <div class=\"col\">\n        <h4>{{user.username}}</h4>\n      </div>\n      <div class=\"col\">\n        <i class=\"btn fa fa-2x fa-trash float-right ml-2\" (click)=\"deleteAdmin(user._id)\"></i>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <app-footer></app-footer> -->\n\n\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.allJobSeekers = [];
        this.allUsers = [];
        this.admins = [];
        this.usernameExists = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.fetchPendingUser();
    };
    AdminComponent.prototype.fetchPendingUser = function () {
        var _this = this;
        this.userService.findPendingRecruiters().then(function (user) { return _this.users = user; }).then(function () { return _this.findAllUsers(); });
    };
    AdminComponent.prototype.findAllUsers = function () {
        var _this = this;
        this.userService.findAllUsers().then(function (users) {
            _this.allUsers = users;
            _this.allJobSeekers = users.filter(function (user) { return user.role === 'JobSeeker' && user.premiumRequestStatus; });
        }).then(function () {
            _this.admins = _this.allUsers.filter(function (user) { return user.role === 'Admin'; });
        }).then(function () { return _this.userService.findLoggedUser().then(function (user) {
            return _this.currentAdmin = user;
        }); });
    };
    AdminComponent.prototype.approveUser = function (id) {
        var _this = this;
        this.userService.approveRecruiter(id).then(function () { return _this.fetchPendingUser(); });
    };
    AdminComponent.prototype.rejectUser = function (id) {
        var _this = this;
        this.userService.rejectRecruiter(id).then(function () { return _this.fetchPendingUser(); });
    };
    AdminComponent.prototype.deleteAdmin = function (id) {
        var _this = this;
        this.userService.deleteUser(id).then(function () { return _this.findAllUsers(); });
    };
    AdminComponent.prototype.createAdmin = function (username, password) {
        var _this = this;
        var role = 'Admin';
        this.userService.createUser({ username: username, password: password, role: role }).then(function (res) {
            if (res.status === true) {
                _this.findAllUsers();
                _this.usernameExists = false;
            }
            else {
                _this.usernameExists = true;
            }
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.footer {\n  /*position: absolute;*/\n  /* bottom: 10; */\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 50px;\n  /* line-height: 60px; */\n   /* Vertically center the text there */\n  background-color: #f5f5f5;\n  background-image: linear-gradient(rgb(22, 83, 139),rgb(248, 245, 245));\n  /* background-image: url('./../../../assets/images/naphtali-marshall-45606-unsplash.jpg'); */\npadding-top: 10px;\n/* padding-bottom: 10px; */\n}\n\n.footer > .container {\n  padding-right: 15px;\n  padding-left: 15px;\n  text-align: center;\n  -webkit-text-decoration: whitesmoke;\n          text-decoration: whitesmoke;\n}\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer  bg-dark\">\n  <div class=\"container text-light \">\n    Designed, Developed and Managed by Centre for Digital Innovation and Product Development, Digital University Kerala\n\n\n    <i  aria-hidden=\"true\" style=\"color: rgb(12, 23, 59);\">© 2021 Copyright: DWMS</i>\n    <br>\n    <br>\n    <div style=\"\">\n      <a [hidden]=\"checkHidden(linkedin)\" href={{linkedin}} target=\"_blank\"><i class=\"fab fa-linkedin fa-2x\" style=\"color: rgb(18, 11, 59);\"></i></a> &nbsp;\n      <a [hidden]=\"checkHidden(github)\" href={{github}} target=\"_blank\"><i class=\"fab fa-github fa-2x\" style=\"color: rgb(18, 11, 59);\"></i></a> &nbsp;\n      <a [hidden]=\"checkHidden(facebook)\" href={{facebook}} target=\"_blank\"><i class=\"fab fa-facebook-square fa-2x\" style=\"color: rgb(18, 11, 59);\"></i></a> &nbsp;\n      <a [hidden]=\"checkHidden(twitter)\" href={{twitter}} target=\"_blank\"><i class=\"fab fa-twitter fa-2x\" style=\"color: rgb(18, 11, 59);\"></i></a> &nbsp;\n      \n    </div> \n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/job-board/job-board.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/job-board/job-board.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero{\n  background-image: url('Homepic.gif');\n  background-size: contain;\n  background-repeat: no-repeat;\n  height:480px;\n}\n\n.dropdown-menu{\n  position: absolute;\n  max-height: 200px;\n  overflow-y: auto;\n  background: lightgrey;\n}\n\n.hero{\n  background-image: url('Homepic.gif');\n  background-size: contain;\n  background-repeat: no-repeat;\n  height:480px;\n}\n\n.dropdown-menu{\n  position: absolute;\n  max-height: 200px;\n  overflow-y: auto;\n  background: lightgrey;\n}\n\n/*.dropdown-toggle{*/\n\n/*border-radius: 5px;*/\n\n/*}*/\n\n.headingg{\n  font-family: 'Times New Roman', Times, serif;\n  margin-right: -200px;\n  font-size: 30px;\n  color:navy !important;\n  \n}\n\n.headingg1\n{\n  font-family:'Times New Roman', Times, serif;\n  font-size:18px;\n  margin-right: -290px;\n  margin-top: 50px;\n  color:black !important;\n  font-weight:bold !important;\n}\n\n.btn\n{\n  margin-right: -600px;\n  margin-top: 90px;\n  font-weight: bold;\n  color:black !important;\n  font-size: 18px;\n  font-family: 'Times New Roman', Times, serif;\n}\n\n/*.dropdown-toggle{*/\n\n/*border-radius: 5px;*/\n\n/*}*/\n"

/***/ }),

/***/ "./src/app/components/job-board/job-board.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/job-board/job-board.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100\">\n  <div class=\"position-relative overflow-hidden p-5 text-center bg-light text-light hero\">\n    <div class=\"col-md-5 p-lg-5 mx-auto my-5\" style=\"color: #584f4f;\">\n      <h1 class=\"display-4  float-right headingg\"  style=\"font-weight: 600;\" >Searching For a Job ?</h1>\n      <p class=\"lead float-right headingg1 \" style=\"font-weight: normal;\">Join Us to find the best job that fits you</p>\n      \n      <!-- <button class=\"btn btn-outline-info btn-info w-25\"\n              routerLink=\"/job-list/{{location!='' && location!=null ? location:' '}}/{{keywordOrTitle!='' &&\n              keywordOrTitle!=null? keywordOrTitle: ' '}}\">Search </button> -->\n      \n              \n                <button class=\"btn btn-outline-info\n              font-weight-bold ml-3\" routerLink=\"/register\" [routerLinkActive]=\"['active']\"\n                        type=\"button\">Register Now</button>\n             \n      \n     \n    </div>\n    <div class=\"product-device box-shadow d-none d-md-block\"></div>\n    <div class=\"product-device product-device-2 box-shadow d-none d-md-block\"></div>\n\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/job-board/job-board.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/job-board/job-board.component.ts ***!
  \*************************************************************/
/*! exports provided: JobBoardComponent, SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobBoardComponent", function() { return JobBoardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
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

// import * as $ from 'jquery';
// import {} from '@types/googlemaps';


var JobBoardComponent = /** @class */ (function () {
    function JobBoardComponent(router) {
        this.router = router;
    }
    // searchBasedOn() {
    //
    //   this.router.navigate(['job-list/+'location'+]);
    //
    // }
    JobBoardComponent.prototype.setVal = function (val) {
        this.location = val;
    };
    JobBoardComponent.prototype.getInputVal = function () {
        return this.location;
    };
    JobBoardComponent.prototype.ngOnInit = function () {
    };
    JobBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-board',
            template: __webpack_require__(/*! ./job-board.component.html */ "./src/app/components/job-board/job-board.component.html"),
            styles: [__webpack_require__(/*! ./job-board.component.css */ "./src/app/components/job-board/job-board.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], JobBoardComponent);
    return JobBoardComponent;
}());

var SearchFilterPipe = /** @class */ (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (value, search) {
        if (!search) {
            return value;
        }
        var solution = value.filter(function (v) {
            if (!v) {
                return;
            }
            return v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return solution;
    };
    SearchFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'searchFilter' })
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());



/***/ }),

/***/ "./src/app/components/job-list/job-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/job-list/job-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.joblist {\n  background-color: rgba(0, 170, 255, 0.65);\n  border-top-color: whitesmoke;\n  border-bottom-color: rgba(0, 170, 255, 0);\n  border-right-color: rgba(0, 170, 255, 0.02);\n  border-left-color: rgba(0, 170, 255, 0.02);\n  /*border-color: rgba(0, 170, 255, 0.65);*/\n}\n\n.active.joblist a {\n  color: white;\n}\n\n.background-pic{\n  background-image: url('Homepic.png');\n  height:600px;\n background-repeat:no-repeat;\n background-size: contain;\n background-position: center;\n}\n\n.heading{\n\n  font-family: \"Bookman Old Style\";\n  background-color: rgba(15, 15, 15 ,0.6);\n\n}\n\n.dropdown-menu{\n  position: absolute;\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/job-list/job-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/job-list/job-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rounded bg-light p-5 background-pic\">\n  <h1 class=\" text-center text-light rounded shadow p-2 mb-4 heading\">Job Listings\n  </h1>\n \n  <div class=\"row mb-5\">\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\" *ngFor=\"let item of filterItems; let i = index\" [attr.data-index]=\"i\">\n        <div class=\"nav-link bg-white mx-3\" href=\"#\">\n          {{item.val}}\n          <i class=\"fa fa-times ml-3\" (click)=\"removeItems(item,i)\"></i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let job of jobs\"\n        class=\"list-group-item bg-light my-2 rounded shadow-sm\">\n      <div [hidden]=\"job.jobSource !== 'github' \">\n        <div class=\"row text-dark\">\n          <div class=\"col-8\">\n            <h5 style=\"color: rgba(0,123,255,0.85);\">\n              <a routerLink=\"view-job/{{job.id}}|{{job.jobSource}}\">{{job.title}}</a></h5>\n          </div>\n          <!-- <div class=\"col-4\" style=\"text-align: right\">\n            {{job.location}}\n          </div> -->\n        </div>\n        <div class=\"row\">\n          <div class=\"col-8\">{{job.company}} | {{job.type}}|{{job.location}}</div>\n          <div class=\"col-4\" style=\"text-align: right\">\n            <!-- <small>Posted on: {{job.created_at}}</small> -->\n          </div>\n        </div>\n      </div>\n\n        <div [hidden]=\"job.jobSource === 'github' \">\n          <div class=\"row text-dark\">\n            <div class=\"col-8\">\n              <h5 style=\"color: rgba(0,123,255,0.85);\">\n                <a routerLink=\"view-job/{{job._id}}|{{job.jobSource}}\">{{job.title}}</a></h5>\n            </div>\n            <!-- <div class=\"col-4\" style=\"text-align: right\">\n              {{job.location}}\n            </div> -->\n          </div>\n          <div class=\"row\">\n            <div class=\"col-8\">{{job.company}} | {{job.type}}|{{job.location}}</div>\n            <div class=\"col-4\" style=\"text-align: right\">\n              <!-- <small>Posted on: {{job.date}}</small> -->\n            </div>\n          </div>\n        </div>\n    </li>\n  </ul>\n</div>\n<!-- <app-footer></app-footer> -->\n"

/***/ }),

/***/ "./src/app/components/job-list/job-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/job-list/job-list.component.ts ***!
  \***********************************************************/
/*! exports provided: JobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListComponent", function() { return JobListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_job_listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/job-listing.service */ "./src/app/services/job-listing.service.ts");
/* harmony import */ var _services_job_posting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/job-posting.service */ "./src/app/services/job-posting.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobListComponent = /** @class */ (function () {
    function JobListComponent(service, route, jobPostService) {
        this.service = service;
        this.route = route;
        this.jobPostService = jobPostService;
        this.filterCriteria = {};
        this.filterItems = [];
        this.states = [];
        this.jobs = [];
        var location = ' ';
        this.route.params.subscribe(function (param) {
            location = param['location'];
        });
        var keyword = ' ';
        this.route.params.subscribe(function (param) {
            keyword = param['keyword'];
        });
        console.log(location);
        console.log(keyword);
        if (location !== ' ' || keyword !== ' ') {
            this.fetchFilteredJobs(location, keyword);
        }
        else {
            this.fetchAllJobs();
        }
    }
    JobListComponent.prototype.setVal = function (location) {
        this.location = location;
        this.filterCriteria['location'] = location;
        this.filterItems = this.filterItems.filter(function (obj) { return obj.type !== 'location'; });
        this.filterItems.push({ type: 'location', val: location });
        this.searchJob();
    };
    JobListComponent.prototype.setCompany = function (company) {
        this.company = company;
        this.filterCriteria['company'] = company;
        this.filterItems = this.filterItems.filter(function (obj) { return obj.type !== 'company'; });
        this.filterItems.push({ type: 'company', val: company });
        this.searchJob();
    };
    JobListComponent.prototype.setJobType = function (type) {
        this.type = type;
        this.filterCriteria['type'] = type;
        this.filterItems = this.filterItems.filter(function (obj) { return obj.type !== 'type'; });
        this.filterItems.push({ type: 'type', val: type });
        this.searchJob();
    };
    JobListComponent.prototype.removeItems = function (item, i) {
        this.filterItems.splice(i, 1);
        delete this.filterCriteria[item.type];
        this.searchJob();
    };
    JobListComponent.prototype.searchJob = function () {
        var _this = this;
        this.jobPostService.getAllJobPostings().then(function (jobs) {
            return _this.jobs = jobs;
        }).then(function () { return console.log(_this.jobs); }).then(function () {
            return _this.service.findAllJobs().then(function (jobs) {
                jobs.forEach(function (job, index) {
                    var d = new Date(job.created_at);
                    job.created_at = d.toDateString();
                    job.jobSource = 'github';
                    // this.jobs[index] = job;
                });
                _this.jobs = _this.jobs.concat(jobs);
                _this.jobs.forEach(function (job) {
                    var d = new Date(job.datePosted);
                    job.date = d.toDateString();
                });
                _this.companyList = _this.jobs.map(function (item) { return item.company; })
                    .filter(function (value, index, self) { return self.indexOf(value) === index; });
                _this.typeList = _this.jobs.map(function (item) { return item.type; })
                    .filter(function (value, index, self) { return self.indexOf(value) === index; });
                _this.states = _this.jobs.map(function (item) { return item.location; })
                    .filter(function (value, index, self) { return self.indexOf(value) === index; });
            }).then(function () {
                var _loop_1 = function (filter) {
                    if (true) {
                        console.log(_this.filterCriteria[filter]);
                        console.log(filter);
                        _this.jobs = _this.jobs.filter(function (value) { return value[filter] === _this.filterCriteria[filter]; });
                        console.log(_this.jobs);
                    }
                };
                for (var filter in _this.filterCriteria) {
                    _loop_1(filter);
                }
            });
        });
    };
    JobListComponent.prototype.fetchAllJobs = function () {
        var _this = this;
        this.jobPostService.getAllJobPostings().then(function (jobs) {
            return _this.jobs = jobs;
        }).then(function () { return console.log(_this.jobs); }).then(function () {
            return _this.service.findAllJobs().then(function (jobs) {
                jobs.forEach(function (job, index) {
                    var d = new Date(job.created_at);
                    job.created_at = d.toDateString();
                    job.jobSource = 'github';
                    // this.jobs[index] = job;
                });
                _this.jobs = _this.jobs.concat(jobs);
                _this.jobs.forEach(function (job) {
                    var d = new Date(job.datePosted);
                    job.date = d.toDateString();
                });
                _this.companyList = _this.jobs.map(function (item) { return item.company; })
                    .filter(function (value, index, self) { return self.indexOf(value) === index; });
                _this.typeList = _this.jobs.map(function (item) { return item.type; })
                    .filter(function (value, index, self) { return self.indexOf(value) === index; });
                _this.states = _this.jobs.map(function (item) { return item.location; })
                    .filter(function (value, index, self) { return self.indexOf(value) === index; });
            });
        });
    };
    JobListComponent.prototype.fetchFilteredJobs = function (location, keyword) {
        var _this = this;
        this.service.findFilteredJobs(location, keyword).then(function (jobs) {
            _this.jobs = jobs;
            _this.jobs.forEach(function (job, index) {
                var d = new Date(job.created_at);
                job.created_at = d.toDateString();
                job.jobSource = 'github';
                // this.jobs[index] = job;
            });
            _this.companyList = _this.jobs.map(function (item) { return item.company; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.typeList = _this.jobs.map(function (item) { return item.type; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.states = _this.jobs.map(function (item) { return item.location; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
        });
    };
    JobListComponent.prototype.ngOnInit = function () {
    };
    JobListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-list',
            template: __webpack_require__(/*! ./job-list.component.html */ "./src/app/components/job-list/job-list.component.html"),
            styles: [__webpack_require__(/*! ./job-list.component.css */ "./src/app/components/job-list/job-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_job_listing_service__WEBPACK_IMPORTED_MODULE_2__["JobListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_job_posting_service__WEBPACK_IMPORTED_MODULE_3__["JobPostingService"]])
    ], JobListComponent);
    return JobListComponent;
}());



/***/ }),

/***/ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero{\n  background-image: url('mark-cruz-230099-unsplash.jpg');\n  background-size: contain;\n}\n\n.dropdown-menu{\n  position: absolute;\n  max-height: 200px;\n  overflow-y: auto;\n  background: lightgrey;\n}\n\n/*.dropdown-toggle{*/\n\n/*border-radius: 5px;*/\n\n/*}*/\n\n.stats{\n  font-size: 25px;\n}\n\n.back{\n  background-color: rgba(66, 212,244, 0.2);\n}\n"

/***/ }),

/***/ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <app-user-sidebar></app-user-sidebar>\n  </div>\n  <div class=\"col\">\n  \n    <div id=\"myGroup\">\n      <div class=\"row mx-2 p-3 mt-3 bg-white border bounceOutUp shadow\">\n        <div class=\"col stats text-center text-muted\">\n          <a class=\"float-right mx-3 btn  stats\"\n             data-toggle=\"collapse\"  data-parent=\"#myGroup\" data-target=\"#SavedJob\" style=\"color: rgb(18, 18, 90);border: 1px solid black;\">Saved Job</a>\n          <!-- <span class=\"text-danger float-right\"\n          >{{jobsSaved}}</span> -->\n          <!-- <span class=\"text-danger float-left\"\n          >{{jobsApplied}}</span> -->\n          <a class=\"float-left mx-3 btn  stats\" data-toggle=\"collapse\"\n                                    data-target=\"#Applied\" style=\"color: rgb(18, 18, 90);border: 1px solid black;\">Applied Jobs</a>\n        </div>\n      </div>\n      <div class=\"collapse row mx-2 mt-3 bg-white border bounceOutUp shadow\" data-parent=\"#myGroup\" id=\"SavedJob\">\n        <div class=\"col-12 text-muted \">\n          <div class=\"row stats text-center border-bottom bg-dark text-light\">\n            <div class=\"col p-2\" >Saved Jobs</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"row mx-2 p-2 my-3 bg-white border\" *ngFor=\"let job of savedApplication\">\n                <div class=\"col-10\">\n                  <div class=\"row text-dark\">\n                    <div class=\"col-6\">\n                      <h5 style=\"color: rgba(0,123,255,0.85);\">\n                        <a routerLink=\"view-job/{{job.id}}|{{job.jobSource}}\">{{job.title}}</a></h5>\n                    </div>\n                    <div class=\"col-4 text-right\">\n                      <h6>{{job.location}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6 \"><h6>{{job.company}}</h6></div>\n                    <div class=\"col-4 text-right \">\n                      <small>Saved on: {{job.dateApplied}}</small>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-2 float-left\">\n                  <button class=\"btn float-left btn-success p-0 p-1 mr-1\" (click)=\"applyJob(job);\">Apply</button>\n                  <button class=\"btn float-left btn-danger p-0 p-1\" (click)=\"deleteJobId(job)\">UnSave</button>\n                </div>\n                <!--</div>-->\n                <!--<div class=\"col-1 float-left\">-->\n                <!---->\n                <!--</div>-->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row collapse mx-2 mt-3 bg-white border bounceOutUp shadow\" data-parent=\"#myGroup\" id=\"Applied\">\n        <div class=\"col-12 text-muted \">\n          <div class=\"row stats text-center border-bottom bg-dark text-light\">\n            <div class=\"col p-2\">Applied Jobs</div>\n          </div>\n          <div class=\"row \">\n            <div class=\"col\">\n              <div class=\"row mx-2 p-2 m-3 bg-white border\" *ngFor=\"let job of appliedApplication\">\n                <div class=\"col-12\">\n                  <div class=\"row text-dark\">\n                    <div class=\"col-8\">\n                      <h5 style=\"color: rgba(0,123,255,0.85);\">\n                        <a routerLink=\"view-job/{{job.id}}|{{job.jobSource}}\">{{job.title}}</a></h5>\n                    </div>\n                    <div class=\"col-4 text-right\">\n                      <h6>{{job.location}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-8\"><h6>{{job.company}}</h6></div>\n                    <div class=\"col-4 text-right\">\n                      <small>Applied on: {{job.dateApplied}}</small>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n </div>\n</div>\n<!-- <app-footer></app-footer> -->\n"

/***/ }),

/***/ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: JobSeekerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSeekerDashboardComponent", function() { return JobSeekerDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_save_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/save-job.service */ "./src/app/services/save-job.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user.model.client */ "./src/app/models/user.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobSeekerDashboardComponent = /** @class */ (function () {
    function JobSeekerDashboardComponent(router, jobApplicationService, userService) {
        this.router = router;
        this.jobApplicationService = jobApplicationService;
        this.userService = userService;
        this.jobsSaved = 0;
        this.jobsApplied = 0;
        this.savedApplication = [];
        this.appliedApplication = [];
        this.allApplications = [];
        this.recruiters = [];
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    JobSeekerDashboardComponent.prototype.setVal = function (val) {
        this.location = val;
    };
    JobSeekerDashboardComponent.prototype.getInputVal = function () {
        return this.location;
    };
    JobSeekerDashboardComponent.prototype.getJobApplication = function () {
        var _this = this;
        this.jobsSaved = 0;
        this.jobsApplied = 0;
        this.savedApplication = [];
        this.appliedApplication = [];
        this.jobApplicationService.getAllJobApplicationForUser().then(function (application) {
            if (application.status != null && application.status === 'session expired') {
                _this.allApplications = [];
            }
            else {
                _this.allApplications = application;
            }
        }).then(function () {
            console.log(_this.allApplications);
            _this.allApplications.forEach(function (jobApp) {
                if (jobApp.jobSource === 'github') {
                    jobApp['id'] = jobApp.gitHubJobId;
                }
                else {
                    jobApp['id'] = jobApp.jobPosting;
                }
                jobApp.dateApplied = new Date(jobApp.dateApplied).toDateString();
                if (jobApp.status === 'save') {
                    _this.savedApplication.push(jobApp);
                }
                else {
                    _this.appliedApplication.push(jobApp);
                }
            });
        }).then(function () {
            _this.jobsApplied = _this.appliedApplication.length;
            _this.jobsSaved = _this.savedApplication.length;
        });
    };
    JobSeekerDashboardComponent.prototype.ngOnInit = function () {
        this.getJobApplication();
        this.getLoggedInUser();
    };
    JobSeekerDashboardComponent.prototype.getLoggedInUser = function () {
        var _this = this;
        this.userService.findLoggedUser().then(function (user) {
            return _this.user = user;
        }).then(function () { return _this.userService.findAllUsers().then(function (users) {
            _this.recruiters = users.filter(function (user) {
                return user.role === 'Recruiter' && user.requestStatus === 'Verified';
            });
        }); });
    };
    JobSeekerDashboardComponent.prototype.deleteJobId = function (job) {
        var _this = this;
        var id;
        if (job.jobSource === 'github') {
            id = job.id;
        }
        else {
            id = job._id;
            console.log(id);
            console.log(job.id);
            console.log(job.jobSource);
        }
        this.jobApplicationService.deleteJobApplicationByJobPosting(id, job.jobSource).then(function () { return _this.getJobApplication(); });
    };
    JobSeekerDashboardComponent.prototype.applyJob = function (job) {
        var _this = this;
        var jobApplication;
        console.log(job.jobSource);
        if (job.jobSource === 'github') {
            jobApplication = {
                dateApplied: new Date(), status: 'applied', jobSource: job.jobSource, gitHubJobId: job.id,
                location: job.location, title: job.title, company: job.company
            };
        }
        else {
            jobApplication = {
                dateApplied: new Date(), status: 'applied', jobSource: job.jobSource, jobPosting: job._id,
                location: job.location, title: job.title, company: job.company
            };
        }
        var id;
        if (job.jobSource === 'github') {
            id = job.id;
        }
        else {
            id = job._id;
        }
        this.jobApplicationService.deleteJobApplicationByJobPosting(id, job.jobSource).then(function () {
            return _this.jobApplicationService.createJobApplication(jobApplication).then(function () { return _this.getJobApplication(); });
        });
    };
    JobSeekerDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-seeker-dashboard',
            template: __webpack_require__(/*! ./job-seeker-dashboard.component.html */ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./job-seeker-dashboard.component.css */ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_save_job_service__WEBPACK_IMPORTED_MODULE_2__["SaveJobService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], JobSeekerDashboardComponent);
    return JobSeekerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.alert{*/\n  /*display: none;*/\n  /*}*/\n  .mandatory{\n  color:red;\n}\n  .needs-validation {\n  width: 100%;\n  max-width: 1200px;\n  padding: 130px;\n  margin: auto;\n  font-family: \"Bookman Old Style\";\n  background-color: rgba(15, 15, 15 ,0.6);\n}\n  .ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n  .ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n  .background-pic{\n  /* background-image: url('./../../../assets/images/paul-hanaoka-299941-unsplash.jpg'); */\n  background-image: url('registration.jpg'); \n\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content background-pic\">\n  <div class=\"rounded bg-light p-5 background-pic text-light\">\n    <form class=\"needs-validation\" #form=\"ngForm\">\n      <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"!badUserNamePass\">\n        Entered a wrong username or password!!\n      </div>\n      <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"!verificationPending\">\n        Verification for recruiter role pending!!\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"username\" class=\"col-sm-3 col-form-label\">Username<span class=\"mandatory\">*</span></label>\n\n        <div class=\"col-sm-9\">\n          <input type=\"text\" placeholder=\"Xyz\" id=\"username\" class=\"form-control\"\n                 required [(ngModel)]=\"username\" name=\"username\" #userName=\"ngModel\" >\n          <div [hidden]=\"userName.valid || userName.pristine\"  class=\"mt-2 alert alert-danger\">\n            Username required!!\n          </div>\n        </div>\n\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"password\" class=\"col-sm-3 col-form-label\">Password<span class=\"mandatory\">*</span></label>\n\n        <div class=\"col-sm-9\">\n          <input type=\"password\" placeholder=\"123qwe#$\" id=\"password\" class=\"form-control\" required\n                  [(ngModel)]=\"password\" name=\"password\" #pass=\"ngModel\">\n          <div [hidden]=\"pass.valid || pass.pristine\" class=\"mt-2 alert alert-danger\">\n            Password required!!\n          </div>\n          <div class=\"invalid-feedback invalid-password\">\n            Please enter a valid password!!\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <span class=\"col-sm-3\"></span>\n        <div class=\"col-sm-9 d-inline-block\">\n          <div class=\"py-1\">\n            <button type=\"button\" class=\"btn btn-success form-control\" id=\"login\"\n                    (click)=\"login(username,password);  form.reset();\" [disabled]=\"!form.form.valid\"\n            >Sign In</button>\n          </div>\n          <!--<div class=\"py-1 d-inline\">-->\n            <!--<a href=\"\" class=\"float-left forgot-pass\" data-toggle=\"modal\" data-target=\"#forgotPassword\">Forgot-->\n              <!--Password?</a>-->\n            <!--&lt;!&ndash;<a href=\"../register/register.template.client.html\" class=\"float-right\">Sign Up</a>&ndash;&gt;-->\n          <!--</div>-->\n        </div>\n      </div>\n    </form>\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"forgotPassword\" tabindex=\"-1\" role=\"dialog\"\n         aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header \">\n            <h5 class=\"modal-title\" id=\"modalTitle\">Forgot Password</h5>\n\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <h6 id=\"modal-text\" class=\"py-2\">Enter valid Username and Email Id to Reset password</h6>\n            <form class=\"needs-validation\" novalidate>\n              <div class=\"form-group row\">\n                <label for=\"usernameVerify\" class=\"col-sm-2 col-form-label\">Username</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" placeholder=\"Username\" id=\"usernameVerify\" class=\"form-control\"\n                         required>\n\n                  <div class=\"invalid-feedback invalid-username-verify\">\n                    Please enter a valid username!!\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"resetEmail\" class=\"col-sm-2 col-form-label\">Email</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"email\" placeholder=\"abc@xyz.com\" id=\"resetEmail\" class=\"form-control\"\n                         required>\n\n                  <div class=\"invalid-feedback invalid-username-verify\">\n                    Please enter a valid email!!\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary close-modal\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" id=\"sendEmail\">Send Email</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n<!-- <app-footer></app-footer> -->\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.badUserNamePass = false;
        this.verificationPending = false;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService
            .login(username, password)
            .then(function (obj) {
            if (obj.status === 'success') {
                if (obj.role === 'JobSeeker') {
                    _this.router.navigate(['dashboard-seeker']);
                }
                else if (obj.role === 'Admin') {
                    _this.router.navigate(['admin']);
                }
                else if (obj.role === 'Faculty') {
                    _this.router.navigate(['dashboard-faculty']);
                }
                else {
                    _this.router.navigate(['dashboard-recruiter']);
                }
            }
            else if (obj.status === 'user does not exists') {
                _this.badUserNamePass = true;
                _this.verificationPending = false;
            }
            else {
                _this.badUserNamePass = false;
                _this.verificationPending = true;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.title {\n  font-family: \"Fira Code Retina\";\n  font-size: 50px;\n}\n\n.nav-link {\n  font-family: \"Arial\";\n  font-size: large;\n\n}\n\n.navbar {\n\n  height: 140px;\n  background-color: #cccccc;\n  /*background-image: linear-gradient(black,whitesmoke);*/\n  background-image: url('naphtali-marshall-45606-unsplash.jpg');\n  /*background-size: contain;*/\n\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md  fixed-top navbar-dark bg-dark\">\n\n  <!-- <a class=\"navbar-brand \" href=\"#\"><i class=\"fa fa-bullhorn fa-4x\"></i></a> -->\n  <a class=\"navbar-brand \" href=\"#\"><h1 class=\"title\">Job Portal</h1></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\n          aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"btn btn-outline-light font-weight-light ml-3\" [routerLinkActive]=\"['active']\" routerLink=\"/home\" >Home </a>\n        <!--<span class=\"sr-only\">(current)</span>-->\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"btn btn-outline-light font-weight-light ml-3\" [routerLinkActive]=\"['active']\"\n           routerLink=\"/job-list/{{' '}}/{{' '}}\">Jobs</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a [hidden]=\"!(user != null && user.role === 'JobSeeker')\" class=\"btn btn-outline-light\n        font-weight-light ml-3\"\n           [routerLinkActive]=\"['active']\" routerLink=\"/profile-seeker\" >Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [hidden]=\"!(user != null && user.role === 'Recruiter')\" class=\"btn btn-outline-light\n        font-weight-light ml-3\"\n           [routerLinkActive]=\"['active']\" routerLink=\"/profile-recruiter\" >Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [hidden]=\"!(user != null && user.role === 'JobSeeker')\" class=\"btn btn-outline-light\n        font-weight-light ml-3\"\n           [routerLinkActive]=\"['active']\" routerLink=\"/dashboard-seeker\" >Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [hidden]=\"!(user != null && user.role === 'Recruiter')\" class=\"btn btn-outline-light\n        font-weight-light ml-3\"\n           [routerLinkActive]=\"['active']\" routerLink=\"/dashboard-recruiter\" >Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [hidden]=\"!(user != null && user.role === 'Admin')\" class=\"btn btn-outline-light\n         font-weight-light ml-3\"\n           [routerLinkActive]=\"['active']\" routerLink=\"/admin\" >Admin</a>\n      </li>\n\n    </ul>\n    <form class=\"form-inline mt-2 mt-md-0\">\n      <!--<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">-->\n      <button [hidden]=\"!(user === null)\" class=\"btn btn-outline-light\n       font-weight-light ml-3\" routerLink=\"/login\" [routerLinkActive]=\"['active']\"\n              type=\"button\">Login</button>\n\n      <h5 [hidden]=\"user===null\"class=\"text-light my-1 mr-1\"><i [hidden]=\"user===null\" class=\"fa fa-user text-light\"></i>\n        {{user!=null && user.username}}</h5>\n      <button [hidden]=\"user===null\" class=\"btn btn-outline-light\n       font-weight-light ml-3\" (click)=\"logout()\"\n              type=\"button\">Logout</button>\n      <button class=\"btn btn-outline-light\n      font-weight-light ml-3\" routerLink=\"/register\" [routerLinkActive]=\"['active']\"\n              type=\"button\">Sign Up</button>\n    </form>\n  </div>\n\n  <!--<div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">-->\n    <!--<ul class=\"navbar-nav mr-auto\">-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"btn btn-outline-light font-weight-light ml-5\" [routerLinkActive]=\"['active']\" routerLink=\"/home\">Home</a>-->\n        <!--&lt;!&ndash;<span class=\"sr-only\">(current)</span>&ndash;&gt;-->\n      <!--</li>-->\n      <!--<li class=\"nav-item\">-->\n        <!--<a class=\"btn btn-outline-light font-weight-light ml-3\" [routerLinkActive]=\"['active']\" routerLink=\"/job-list/{{' '}}/{{' '}}\">Jobs</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n    <!--<form class=\"form-inline mt-2 mt-md-0\">-->\n      <!--&lt;!&ndash;<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">&ndash;&gt;-->\n      <!--<button class=\"btn btn-outline-light font-weight-light my-2 my-sm-0 mr-4\" routerLink=\"/login\" [routerLinkActive]=\"['active']\"-->\n              <!--type=\"button\">Login-->\n      <!--</button>-->\n      <!--<button class=\"btn btn-outline-light font-weight-light my-2 my-sm-0 mr-2\" [routerLinkActive]=\"['active']\" routerLink=\"/register\"-->\n              <!--type=\"button\">Sign Up-->\n      <!--</button>-->\n    <!--</form>-->\n  <!--</div>-->\n</nav>\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(userService, router) {
        // this.router.events.subscribe(() => this.sessionCheck());
        this.userService = userService;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.sessionCheck = function () {
        var _this = this;
        this.userService.findLoggedUser().then(function (user) { return _this.user = user; });
    };
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().then(function () { return _this.router.navigate(['*']); })
            .then(function () {
            return _this.userService.findLoggedUser().then(function (user) { return _this.user = user; });
        });
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/personal-info/personal-info.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/personal-info/personal-info.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/personal-info/personal-info.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/personal-info/personal-info.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded \">\n  \n  <div class=\"\" style=\"padding:20px\">\n    <button class=\"  rounded float-right\"\n            [disabled]=editMode\n            (click)=\"edit()\">\n      <i class=\"fas fa-pencil-alt\"></i></button>\n    <h3 [hidden]=\"editMode\"> Personal Information </h3>\n    <!-- <h3 [hidden]=\"!editMode\" style=\"color:orange\"> Update Personal Information </h3> -->\n  </div>\n  <ul class=\"list-group\" style=\"list-style: none;\">\n    <li class=\"list-group-item\" style=\"font-size: 24px;\" [hidden]=\"editMode\">\n      <!--<i class=\"float-right btn btn-light fas fa-angle-down\"></i>-->\n      <span style=\"font-weight: bold; font-size: 26px;\">\n        {{firstName}} {{lastName}}\n        <br/>\n      </span>\n      <span style=\"font-style: italic; color: grey;\">\n        <b>Username :</b> {{username}}\n      <br/>\n    </span>\n        <!--<b>Password :</b> {{password}}-->\n        <!--<br/>-->\n      <!-- </span> -->\n      <span>\n        <!--FirstName :-->\n        <!--<br/>-->\n        <!--LastName :-->\n        <!--<br/>-->\n        <i class=\"fas fa-envelope\"></i> {{email}}\n        <br/>\n        <i class=\"fas fa-phone\"></i>&nbsp;{{phone}}\n        <br/>\n        <!-- <hr/> -->\n        <!--<a href=\"#\"><i class=\"fab fa-facebook fa-2x\"></i></a> &nbsp;-->\n      </span>\n      \n    </li>\n    <li class=\"list-group-item\" style=\"font-size: 24px;\" [hidden]=!editMode>\n      <form>\n        <div class=\"form-group row mx-2 mt-2\">\n\n          <!--Username-->\n          <label for=\"username\" class=\"text-center col-form-label\">\n            Username</label>\n          <input [ngModelOptions]=\"{standalone: true}\"\n                 [(ngModel)]=\"username\"\n                 id=\"username\"\n                 class=\"form-control\"\n                 placeholder=\"Username\">\n\n          <!--&lt;!&ndash;Password&ndash;&gt;-->\n          <!--<label for=\"password\" class=\"text-center col-form-label\">-->\n            <!--Password</label>-->\n          <!--<input [ngModelOptions]=\"{standalone: true}\"-->\n                 <!--[(ngModel)]=\"password\"-->\n                 <!--id=\"password\"-->\n                 <!--class=\"form-control\"-->\n                 <!--placeholder=\"Password\"-->\n                 <!--disabled>-->\n\n          <!--First Name-->\n          <label for=\"firstname\" class=\"text-center col-form-label\">\n            First Name</label>\n          <input [ngModelOptions]=\"{standalone: true}\"\n                 [(ngModel)]=\"firstName\"\n                 id=\"firstname\"\n                 class=\"form-control\"\n                 placeholder=\"First Name\">\n\n          <!--Last Name-->\n          <label for=\"lastname\" class=\"text-center col-form-label\">\n            Last Name</label>\n          <input [ngModelOptions]=\"{standalone: true}\"\n                 [(ngModel)]=\"lastName\"\n                 id=\"lastname\"\n                 class=\"form-control\"\n                 placeholder=\"Last Name\">\n\n          <!--email-->\n          <label for=\"email\" class=\"text-center col-form-label\">\n            Email</label>\n          <div class=\"input-group mb-2\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\">\n                <i class=\"fas fa-envelope\"></i>\n              </div>\n            </div>\n            <input [ngModelOptions]=\"{standalone: true}\"\n                   [(ngModel)]=\"email\"\n                   id=\"email\"\n                   class=\"form-control\"\n                   placeholder=\"abc@xyz.com\">\n          </div>\n\n          <!--phone-->\n          <label for=\"phone\" class=\"text-center col-form-label\">\n            Phone</label>\n          <div class=\"input-group mb-2\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\">\n                <i class=\"fas fa-phone\"></i>\n              </div>\n            </div>\n            <input [ngModelOptions]=\"{standalone: true}\"\n                   [(ngModel)]=\"phone\"\n                   id=\"phone\"\n                   class=\"form-control\"\n                   placeholder=\"(555) 111-2222\">\n          </div>\n\n          <!--Social contacts-->\n\n          \n          <button id=\"createBtn\"\n                  class=\"btn btn-block mt-3\"\n                  style=\"color: white; background-color: orange\"\n                  (click)=\"update()\">\n            Update Info\n          </button>\n          <button id=\"cancelBtn\"\n                  class=\"btn btn-secondary btn-block mt-2\"\n                  (click)=\"cancel()\">\n            Cancel\n          </button>\n        </div>\n      </form>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/personal-info/personal-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/personal-info/personal-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalInfoComponent = /** @class */ (function () {
    function PersonalInfoComponent(userService) {
        this.userService = userService;
        this.updateId = '';
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.editMode = false;
    }
    PersonalInfoComponent.prototype.edit = function () {
        this.editMode = true;
    };
    PersonalInfoComponent.prototype.cancel = function () {
        this.editMode = false;
    };
    PersonalInfoComponent.prototype.update = function () {
        var updateduser = {
            'username': this.username,
            // 'password': this.password,
            'firstName': this.firstName,
            'lastName': this.lastName,
            'email': this.email,
            'phone': this.phone,
        };
        // console.log('Update ID : ', this.updateId);
        // console.log('Update as : ', updateduser);
        this.editMode = false;
        this.userService.updateUserProfile(updateduser)
            .then(function (updatedUser) {
            console.log('Update success');
        });
    };
    PersonalInfoComponent.prototype.checkHidden = function (url) {
        if (url === '') {
            return true;
        }
        else {
            return false;
        }
    };
    PersonalInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findLoggedUser()
            .then(function (user) {
            _this.user = user;
            if (user !== null) {
                if (user.firstName === undefined) {
                    _this.editMode = true;
                }
                _this.updateId = user._id;
                _this.username = user.username;
                _this.password = user.password;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.email = user.email;
                _this.phone = user.phone;
                console.log(_this.user);
            }
            else {
                console.log('User : null');
            }
        });
    };
    PersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-info',
            template: __webpack_require__(/*! ./personal-info.component.html */ "./src/app/components/personal-info/personal-info.component.html"),
            styles: [__webpack_require__(/*! ./personal-info.component.css */ "./src/app/components/personal-info/personal-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/post-job/post-job.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/post-job/post-job.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContainer{\n\n  background-image: url('joanna-kosinska-439234-unsplash.jpg');\n  /*background-size: 100% 20%;*/\n  background-size: contain;\n  height: 300px;\n}\n\n.container{\n  margin-top:50px;\n}\n"

/***/ }),

/***/ "./src/app/components/post-job/post-job.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/post-job/post-job.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!--<div class=\"mainContainer pb-5\">-->\n  <!--<div class=\"h-25\"></div>-->\n  <!--<div class=\"bg-white bounceOutRight border container  p-5\">-->\n     <!--<div class=\"row\">-->\n    <!--<div class=\"col-sm-2 \">-->\n      <!--<img class=\"mt-3\" src=\"./../../../assets/images/paul-hanaoka-299941-unsplash.jpg\" width=\"120px\" height=\"140px\"/>-->\n    <!--</div>-->\n    <!--<div class=\"col-sm-10\">-->\n      <!--<i class=\"fa fa-2x fa-pencil float-right\" ></i>-->\n      <!--<h1 class=\"p-0\">Software Engineer</h1>-->\n\n      <!--<h3 class=\"text-muted\" >JP Morgan</h3>-->\n      <!--<small>Posted 2  days ago : 33 views</small> <br>-->\n      <!--<div class=\"d-inline-block mt-3\">-->\n        <!--<button class=\"btn btn-outline-primary mr-3\">Save</button>-->\n        <!--<button class=\"btn btn-primary\">Apply</button>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"bg-white bounceOutRight border container mt-4 p-5 mb-4\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-sm-8\">-->\n        <!--<h2>Job Description</h2>-->\n        <!--<p class=\"text-left\"> Lorem Ipsum L Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum-->\n          <!--orem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum-->\n          <!--Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum-->\n          <!--Lorem Ipsum Lorem Ipsum</p>-->\n        <!--<br>-->\n        <!--<br>-->\n        <!--<h4 >Key Responsibilty</h4>-->\n        <!--<ul class=\"mt-4\">-->\n          <!--<li>-->\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\n          <!--</li>-->\n          <!--<li>-->\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\n          <!--</li>-->\n          <!--<li>-->\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\n          <!--</li>-->\n          <!--<li>-->\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\n          <!--</li>-->\n        <!--</ul>-->\n        <!--<br>-->\n        <!--<br>-->\n        <!--<h4 >Requirements</h4>-->\n        <!--<ul class=\"mt-4\">-->\n          <!--<li>-->\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\n          <!--</li>-->\n          <!--<li>-->\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\n          <!--</li>-->\n          <!--<li>-->\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\n          <!--</li>-->\n          <!--<li>-->\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\n          <!--</li>-->\n        <!--</ul>-->\n      <!--</div>-->\n      <!--<div class=\"col-sm-4 pr-3\">-->\n        <!--<i class=\"fa fa-2x fa-pencil float-right\"></i>-->\n         <!--<h5 class=\"mt-3\">Seniority Level</h5>-->\n          <!--<h6 class=\"text-muted\">Mid-Senior Level</h6>-->\n         <!--<h5 class=\"mt-3\">Industry</h5>-->\n        <!--<h6 class=\"text-muted\">Banking</h6>-->\n        <!--<h5 class=\"mt-3\">Employment Type</h5>-->\n        <!--<h6 class=\"text-muted\">Banking</h6>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n\n\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/components/post-job/post-job.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/post-job/post-job.component.ts ***!
  \***********************************************************/
/*! exports provided: PostJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobComponent", function() { return PostJobComponent; });
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

var PostJobComponent = /** @class */ (function () {
    function PostJobComponent() {
    }
    PostJobComponent.prototype.ngOnInit = function () {
    };
    PostJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-job',
            template: __webpack_require__(/*! ./post-job.component.html */ "./src/app/components/post-job/post-job.component.html"),
            styles: [__webpack_require__(/*! ./post-job.component.css */ "./src/app/components/post-job/post-job.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostJobComponent);
    return PostJobComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-recruiter/profile-recruiter.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/profile-recruiter/profile-recruiter.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile-recruiter/profile-recruiter.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/profile-recruiter/profile-recruiter.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!--<div class=\"mt-3 ml-4\">-->\n      <app-user-sidebar></app-user-sidebar>\n    <!--</div>-->\n    <div class=\"col bg-light\">\n      <!--<h2  class=\"text text-center\" style=\"color: dimgrey;\"> User Profile</h2>-->\n      <div class=\" ml-4 mt-0 mb-5\">\n        <ul class=\"list-group border-0 mb-2\">\n          <li class=\"list-group-item border-0 mb-4\">\n\n            <!--personal info of recruiter-->\n\n\n\n            <!--company  icon -->\n            <!--firstname lastname-->\n            <!--request status - readonly -->\n\n            <div class=\"card rounded \">\n              <div class=\"card-header\">\n                <button class=\"btn btn-outline-primary rounded float-right\"\n                        [disabled]=editMode\n                        (click)=\"edit()\">\n                  <i class=\"fas fa-pencil-alt\"></i></button>\n                <h3 [hidden]=\"editMode\"> Personal Information </h3>\n                <h3 [hidden]=\"!editMode\" style=\"color:orange\"> Update Personal Information </h3>\n              </div>\n              <ul class=\"list-group\">\n                <li class=\"list-group-item\" style=\"font-size: 24px;\" [hidden]=\"editMode\">\n                  <!--<i class=\"float-right btn btn-light fas fa-angle-down\"></i>-->\n                  <span style=\"font-weight: bold; font-size: 30px;\">\n                    {{firstName}} {{lastName}}\n                    <br/>\n                  </span>\n                  <span style=\"font-size: 28px; font-weight: bold; color: dimgray;\">\n                    Position : {{title}}\n                    <br/>\n                    Company : {{company}}\n                    <br/>\n                   </span>\n                  <span style=\"font-size: 24px; color: grey;\">\n                    <b>Username :</b> {{username}}\n                    <br/>\n                    Account Access Request Status : {{requestStatus}}\n                    <br/>\n                   </span>\n                  <span>\n                  <i class=\"fas fa-envelope\"></i> {{email}}\n                  <br/>\n                  <i class=\"fas fa-phone\"></i>&nbsp;{{phone}}\n                  <br/>\n                  <hr/>\n      </span>\n                \n\n                </li>\n                <li class=\"list-group-item\" style=\"font-size: 24px;\" [hidden]=!editMode>\n                  <form>\n                    <div class=\"form-group row mx-2 mt-2\">\n\n                      <!--Username-->\n                      <label for=\"username\" class=\"text-center col-form-label\">\n                        Username</label>\n                      <input [ngModelOptions]=\"{standalone: true}\"\n                             [(ngModel)]=\"username\"\n                             id=\"username\"\n                             class=\"form-control\"\n                             placeholder=\"Enter Username\">\n\n                      <!--First Name-->\n                      <label for=\"firstname\" class=\"text-center col-form-label\">\n                        First Name</label>\n                      <input [ngModelOptions]=\"{standalone: true}\"\n                             [(ngModel)]=\"firstName\"\n                             id=\"firstname\"\n                             class=\"form-control\"\n                             placeholder=\"Enter First Name\">\n\n                      <!--Last Name-->\n                      <label for=\"lastname\" class=\"text-center col-form-label\">\n                        Last Name</label>\n                      <input [ngModelOptions]=\"{standalone: true}\"\n                             [(ngModel)]=\"lastName\"\n                             id=\"lastname\"\n                             class=\"form-control\"\n                             placeholder=\"Enter Last Name\">\n\n                      <!--Position-->\n                      <label for=\"position\" class=\"text-center col-form-label\">\n                        Position </label>\n                      <input [ngModelOptions]=\"{standalone: true}\"\n                             [(ngModel)]=\"title\"\n                             id=\"position\"\n                             class=\"form-control\"\n                             placeholder=\"Position in company\">\n\n                      <!--Company-->\n                      <label for=\"company\" class=\"text-center col-form-label\">\n                        Company </label>\n                      <input [ngModelOptions]=\"{standalone: true}\"\n                             [(ngModel)]=\"company\"\n                             id=\"company\"\n                             class=\"form-control\"\n                             placeholder=\"Company for which you are recruiting\">\n\n                      <!--email-->\n                      <label for=\"email\" class=\"text-center col-form-label\">\n                        Email</label>\n                      <div class=\"input-group mb-2\">\n                        <div class=\"input-group-prepend\">\n                          <div class=\"input-group-text\">\n                            <i class=\"fas fa-envelope\"></i>\n                          </div>\n                        </div>\n                        <input [ngModelOptions]=\"{standalone: true}\"\n                               [(ngModel)]=\"email\"\n                               id=\"email\"\n                               class=\"form-control\"\n                               placeholder=\"abc@xyz.com\">\n                      </div>\n\n                      <!--phone-->\n                      <label for=\"phone\" class=\"text-center col-form-label\">\n                        Phone</label>\n                      <div class=\"input-group mb-2\">\n                        <div class=\"input-group-prepend\">\n                          <div class=\"input-group-text\">\n                            <i class=\"fas fa-phone\"></i>\n                          </div>\n                        </div>\n                        <input [ngModelOptions]=\"{standalone: true}\"\n                               [(ngModel)]=\"phone\"\n                               id=\"phone\"\n                               class=\"form-control\"\n                               placeholder=\"(555) 111-2222\">\n                      </div>\n\n             \n\n                      <button id=\"createBtn\"\n                              class=\"btn btn-block mt-3\"\n                              style=\"color: white; background-color: orange\"\n                              (click)=\"update()\">\n                        Update Info\n                      </button>\n                      <button id=\"cancelBtn\"\n                              class=\"btn btn-secondary btn-block mt-2\"\n                              (click)=\"cancel()\">\n                        Cancel\n                      </button>\n                    </div>\n                  </form>\n                </li>\n              </ul>\n            </div>\n\n\n            <!--personal info of recruiter ends-->\n\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <app-footer></app-footer> -->\n\n\n"

/***/ }),

/***/ "./src/app/components/profile-recruiter/profile-recruiter.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profile-recruiter/profile-recruiter.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfileRecruiterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRecruiterComponent", function() { return ProfileRecruiterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_recruiter_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recruiter-detail.service */ "./src/app/services/recruiter-detail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileRecruiterComponent = /** @class */ (function () {
    function ProfileRecruiterComponent(userService, recruiterService) {
        this.userService = userService;
        this.recruiterService = recruiterService;
        this.updateId = '';
        this.updateRecruiterId = '';
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
        this.title = '';
        this.company = '';
        this.email = '';
        this.requestStatus = '';
        this.phone = '';
        this.editMode = false;
    }
    ProfileRecruiterComponent.prototype.edit = function () {
        this.editMode = true;
    };
    ProfileRecruiterComponent.prototype.cancel = function () {
        this.editMode = false;
    };
    ProfileRecruiterComponent.prototype.update = function () {
        var _this = this;
        var updateduser = {
            'username': this.username,
            // 'password': this.password,
            'firstName': this.firstName,
            'lastName': this.lastName,
            'email': this.email,
            'phone': this.phone,
        };
        var recruiter = {
            'title': this.title,
            'company': this.company
        };
        // console.log('Update ID : ', this.updateId);
        // console.log('Update as : ', updateduser);
        this.editMode = false;
        this.userService.updateUserProfile(updateduser)
            .then(function (updatedUser) {
            _this.recruiterService.updateRecruiterDetail(_this.updateRecruiterId, recruiter)
                .then(function (updatedRecruiter) {
                console.log('Update success');
            });
        });
    };
    ProfileRecruiterComponent.prototype.checkHidden = function (url) {
        if (url === '') {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileRecruiterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findLoggedUser()
            .then(function (user) {
            _this.user = user;
            if (user !== null) {
                if (user.firstName === undefined) {
                    _this.editMode = true;
                }
                _this.updateId = user._id;
                _this.username = user.username;
                _this.password = user.password;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.email = user.email;
                _this.phone = user.phone;
                console.log('Request : ', user.requestStatus);
                _this.requestStatus = user.requestStatus;
                console.log(_this.user);
                _this.recruiterService.findRecruiterDetailsByUserId()
                    .then(function (recruiter) {
                    console.log('Recruiter ID', recruiter);
                    _this.updateRecruiterId = recruiter._id;
                    if (recruiter.title !== undefined) {
                        _this.title = recruiter.title;
                    }
                    if (recruiter.company !== undefined) {
                        _this.company = recruiter.company;
                    }
                });
            }
            else {
                console.log('User : null');
            }
        });
    };
    ProfileRecruiterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-recruiter',
            template: __webpack_require__(/*! ./profile-recruiter.component.html */ "./src/app/components/profile-recruiter/profile-recruiter.component.html"),
            styles: [__webpack_require__(/*! ./profile-recruiter.component.css */ "./src/app/components/profile-recruiter/profile-recruiter.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_recruiter_detail_service__WEBPACK_IMPORTED_MODULE_2__["RecruiterDetailService"]])
    ], ProfileRecruiterComponent);
    return ProfileRecruiterComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-seeker/profile-seeker.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/profile-seeker/profile-seeker.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile-seeker/profile-seeker.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/profile-seeker/profile-seeker.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!--<div class=\"mt-3 ml-4\">-->\n      <!-- <app-user-sidebar></app-user-sidebar> -->\n    <!--</div>-->\n    <div class=\"col bg-light\">\n      <!--<h2  class=\"text text-center\" style=\"color: dimgrey;\"> User Profile</h2>-->\n      <div class=\" ml-2 mt-0 mb-3\">\n        <ul class=\"list-group border-0 mb-2\">\n          <li class=\"list-group-item border-0 \">\n            <app-personal-info></app-personal-info>\n          </li>\n          \n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <app-footer></app-footer> -->\n\n"

/***/ }),

/***/ "./src/app/components/profile-seeker/profile-seeker.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/profile-seeker/profile-seeker.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileSeekerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSeekerComponent", function() { return ProfileSeekerComponent; });
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

var ProfileSeekerComponent = /** @class */ (function () {
    function ProfileSeekerComponent() {
    }
    ProfileSeekerComponent.prototype.ngOnInit = function () {
    };
    ProfileSeekerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-seeker',
            template: __webpack_require__(/*! ./profile-seeker.component.html */ "./src/app/components/profile-seeker/profile-seeker.component.html"),
            styles: [__webpack_require__(/*! ./profile-seeker.component.css */ "./src/app/components/profile-seeker/profile-seeker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileSeekerComponent);
    return ProfileSeekerComponent;
}());



/***/ }),

/***/ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/recruiter-dashboard/recruiter-dashboard.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stats{\n  font-size: 25px;\n}\n"

/***/ }),

/***/ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/recruiter-dashboard/recruiter-dashboard.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"ml-3\">\n    <app-user-sidebar></app-user-sidebar>\n  </div>\n  <div class=\"col\">\n    <div class=\"row bg-dark p-1 text-light text-center mx-2 mb-3\">\n      <div class=\"col\">\n        <h2>My Posted Jobs</h2>\n      </div>\n    </div>\n    <div class=\"row mx-2 p-2 my-3 bg-white border bounceOutUp shadow\">\n      <div class=\"col stats text-muted\">\n        <span class=\"text-danger\">{{jobPostings.length}}</span>\n        <a class=\"mx-3 stats p-0\"\n           data-toggle=\"collapse\" data-parent=\"#myGroup\" data-target=\"#SavedJob\">Jobs Posted</a>\n        <i type=\"button\" class=\"btn fa fa-plus btn-success float-right\" data-toggle=\"modal\"\n           data-target=\"#exampleModalCenter\">\n        </i>\n      </div>\n    </div>\n    <div class=\"row mb-3\">\n      <div class=\"col mx-2\">\n\n      </div>\n    </div>\n    <div class=\"row\" *ngFor=\"let job of jobPostings\">\n      <div class=\"col-10\">\n        <div class=\"row mx-2 p-2 my-3 bg-white border\" >\n          <div class=\"col\">\n            <div class=\"row text-dark\">\n              <div class=\"col-8\">\n                <h5 style=\"color: rgba(0,123,255,0.85);\">\n                  <a routerLink=\"view-job/{{job._id}}|{{job.jobSource}}\">{{job.title}}</a></h5>\n              </div>\n              <!-- <div class=\"col-4 text-right\">\n                <h6>{{job.location}}</h6>\n              </div> -->\n            </div>\n            <div class=\"row\">\n              <div class=\"col-8 \"><h6>{{job.company}}|{{job.location}}</h6></div>\n              <!-- <div class=\"col-4 text-right \">\n                <small>Posted  on: {{ job.date}}</small>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-2 py-3 \">\n        <i class=\"fa fa-trash float-left fa-4x btn ml-3\" (click)=\"deleteJobPosting(job._id)\"></i>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n     aria-hidden=\"true\">\n  <form #form=\"ngForm\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Add new Job</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <!--Job Title-->\n        <input\n          class=\"form-control mb-2\"\n          placeholder=\"Job Title\" [(ngModel)]=\"jobPost.title\" name=\"jobPost.title\">\n\n        <!--Company-->\n        <input\n          class=\"form-control mb-2\"\n          placeholder=\"Company\" [(ngModel)]=\"jobPost.company\" name=\"jobPost.company\">\n\n        <!--Location-->\n        <input\n          class=\"form-control mb-2\"\n          placeholder=\"Location\" [(ngModel)]=\"jobPost.location\" name=\"jobPost.location\">\n\n       \n          <div class=\"form-group\">\n            <label for=\"inputState\">Job Type</label>\n            <select id=\"inputState\" class=\"form-control\" [(ngModel)]=\"jobPost.type\" name=\"jobPost.type\">\n              <option disabled>Choose one...</option>\n              <option value=\"Full Time\">Full Time</option>\n              <option value=\"Contract\">Contract</option>\n              <option value=\"Internship\">Internship</option>\n              <option value=\"Coop\">Coop</option>\n            </select>\n          </div>\n\n           <div class=\"my-2\">\n            <button data-dismiss=\"modal\" class=\"btn btn-block btn-success\" (click)=\"saveJob(); form.reset()\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  </form>\n</div>\n<!-- <app-footer></app-footer> -->\n\n"

/***/ }),

/***/ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/recruiter-dashboard/recruiter-dashboard.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RecruiterDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruiterDashboardComponent", function() { return RecruiterDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_job_listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/job-listing.service */ "./src/app/services/job-listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_save_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/save-job.service */ "./src/app/services/save-job.service.ts");
/* harmony import */ var _services_job_posting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/job-posting.service */ "./src/app/services/job-posting.service.ts");
/* harmony import */ var _models_job_posting_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/job-posting.model.client */ "./src/app/models/job-posting.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecruiterDashboardComponent = /** @class */ (function () {
    function RecruiterDashboardComponent(jobService, route, saveJobService, jobPostService) {
        this.jobService = jobService;
        this.route = route;
        this.saveJobService = saveJobService;
        this.jobPostService = jobPostService;
        this.jobPostings = [];
        this.moreDetails = false;
        this.sAddMode = false;
        this.rAddMode = false;
        this.qAddMode = false;
        this.skill = '';
        this.jobPost = new _models_job_posting_model_client__WEBPACK_IMPORTED_MODULE_5__["JobPostingModelClient"]();
        this.jobPost.skillsRequired = [];
        this.jobPost.responsibilities = [];
        this.jobPost.minQualification = [];
    }
    RecruiterDashboardComponent.prototype.getJobPostingOfCurrentUser = function () {
        var _this = this;
        this.jobPostService.getAllJobPostingForUser().then(function (jobPostings) {
            _this.jobPostings = jobPostings;
            _this.jobPostings.forEach(function (jobPost) {
                if (jobPost != null && jobPost !== undefined && jobPost.datePosted != undefined) {
                    jobPost['date'] = new Date(jobPost.datePosted).toDateString();
                }
                else {
                    jobPost['date'] = '';
                }
            });
        });
    };
    RecruiterDashboardComponent.prototype.addMoreDetails = function () {
        this.moreDetails = true;
    };
    RecruiterDashboardComponent.prototype.toggleRAddMode = function () {
        this.rAddMode = !this.rAddMode;
    };
    RecruiterDashboardComponent.prototype.toggleSAddMode = function () {
        this.sAddMode = !this.sAddMode;
    };
    RecruiterDashboardComponent.prototype.toggleQAddMode = function () {
        this.qAddMode = !this.qAddMode;
    };
    RecruiterDashboardComponent.prototype.cancelAddR = function () {
        this.toggleRAddMode();
    };
    RecruiterDashboardComponent.prototype.cancelAddS = function () {
        this.toggleSAddMode();
    };
    RecruiterDashboardComponent.prototype.cancelAddQ = function () {
        this.toggleQAddMode();
    };
    RecruiterDashboardComponent.prototype.saveJob = function () {
        var _this = this;
        console.log(this.jobPost);
        this.jobPost.datePosted = new Date();
        this.jobPost.jobSource = 'job-portal';
        this.jobPostService.createJobPosting(this.jobPost).then(function () {
            _this.getJobPostingOfCurrentUser();
        });
    };
    RecruiterDashboardComponent.prototype.deleteJobPosting = function (id) {
        var _this = this;
        this.jobPostService.deleteJobPosting(id).then(function () {
            return _this.saveJobService.deleteJobApplicationByJobPosting(id, 'job-portal');
        }).then(function () {
            return _this.getJobPostingOfCurrentUser();
        });
    };
    RecruiterDashboardComponent.prototype.ngOnInit = function () {
        this.getJobPostingOfCurrentUser();
    };
    RecruiterDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recruiter-dashboard',
            template: __webpack_require__(/*! ./recruiter-dashboard.component.html */ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./recruiter-dashboard.component.css */ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_job_listing_service__WEBPACK_IMPORTED_MODULE_1__["JobListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_save_job_service__WEBPACK_IMPORTED_MODULE_3__["SaveJobService"], _services_job_posting_service__WEBPACK_IMPORTED_MODULE_4__["JobPostingService"]])
    ], RecruiterDashboardComponent);
    return RecruiterDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.mandatory{\n  color:red;\n}\n\n.needs-validation {\n  width: 100%;\n  max-width: 1200px;\n  padding: 60px;\n  margin: auto;\n  font-family: \"Bookman Old Style\";\n  background-color: rgba(15, 15, 15 ,0.6);\n\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.background-pic{\n  /* background-image: url('./../../../assets/images/paul-hanaoka-299941-unsplash.jpg'); */\n  background-image: url('signup.jpg');\n  \n  background-repeat:no-repeat;\n  height: 500px;\n  background-position: center;\n  background-size: contain;\n}\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rounded bg-light p-5 background-pic text-light\">\n\n  <form class=\"needs-validation\" #form=\"ngForm\">\n\n    <!--<div class=\"alert alert-success\" role=\"alert\">-->\n    <!--<strong>User registered successfully!!</strong>-->\n    <!--</div>-->\n    <div class=\"alert alert-danger\" [hidden]=\"!usernameExists\">\n      Username already exists user another one !\n    </div>\n    <div class=\"alert alert-success\" [hidden]=\"!successMsg\">\n      User Registered under Recruiter Role. Please wait until verification complete. You will get notification\n      on the registered email within 24 hours !!\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"username\" class=\"col-sm-3 col-form-label\">Username<span class=\"mandatory\">*</span></label>\n\n      <div class=\"col-sm-9\">\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\"\n               id=\"username\" class=\"form-control\" required #userName=\"ngModel\">\n        <div [hidden]=\"userName.valid || userName.pristine\" class=\"mt-2 alert alert-danger\">\n          Username required!!\n        </div>\n      </div>\n\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"password\" class=\"col-sm-3 col-form-label\">Password<span class=\"mandatory\">*</span></label>\n\n      <div class=\"col-sm-9\">\n        <input type=\"password\" placeholder=\"123qwe#$\" [(ngModel)]=\"password\" name=\"password\"\n               id=\"password\" class=\"form-control\" required #pass=\"ngModel\">\n        <div [hidden]=\"pass.valid || pass.pristine\" class=\"mt-2 alert alert-danger\">\n          Password required!!\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <label for=\"verifypass\" class=\"col-sm-3 col-form-label\">Verify Password<span class=\"mandatory\">*</span></label>\n\n      <div class=\"col-sm-9\">\n        <input type=\"password\" placeholder=\"123qwe#$\" id=\"verifypass\"\n               [(ngModel)]=\"verifyPassword\" name=\"verifyPassword\" class=\"form-control\" [pattern]=\"password\" required\n               #vPass=\"ngModel\">\n        <div [hidden]=\"vPass.valid || vPass.pristine\" class=\"mt-2 alert alert-danger\">\n          Password do not match!!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n\n      <label for=\"inlineRadio1\" class=\"col-sm-3 col-form-label\">Role<span class=\"mandatory\">*</span></label>\n\n      <div class=\"col-sm-9\">\n        <div class=\"form-check form-check-inline bg-light text-dark rounded py-2 px-3\">\n          <input class=\"form-check-input \" type=\"radio\" name=\"role\"\n                 id=\"inlineRadio1\" [(ngModel)]=\"role\" value=\"JobSeeker\">\n          <label class=\"form-check-label\" for=\"inlineRadio1\">JobSeeker</label>\n        </div>\n        <div class=\"form-check form-check-inline bg-light text-dark rounded ml-2 py-2 px-3\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"role\"\n                 id=\"inlineRadio2\" [(ngModel)]=\"role\" value=\"Recruiter\">\n          <label class=\"form-check-label\" for=\"inlineRadio1\">Recruiter</label>\n        </div>\n        <!-- new -->\n        <div class=\"form-check form-check-inline bg-light text-dark rounded ml-2 py-2 px-3\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"role\"\n                 id=\"inlineRadio2\" [(ngModel)]=\"role\" value=\"Faculty\">\n          <label class=\"form-check-label\" for=\"inlineRadio1\">Faculty</label>\n        </div>\n        <!-- new -->\n\n      </div>\n    </div>\n    <div class=\"form-group row\" [hidden]=\"role==='JobSeeker'\">\n      <label for=\"email\" class=\"col-sm-3 col-form-label \">Email<span class=\"mandatory\">*</span></label>\n      <div class=\"col-sm-9\">\n        <input type=\"email\" placeholder=\"abc@xyz.com\" email=\"true\" [(ngModel)]=\"email\"\n               id=\"email\" name=\"email\" class=\"form-control\" #emailId=\"ngModel\" [required]=\"role !== 'JobSeeker'\" >\n        <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"mt-2 alert alert-danger\">\n          Please enter a valid email!!\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <span class=\"col-sm-3\"></span>\n      <div class=\"col-sm-9 d-inline-block\">\n        <div class=\"py-1\">\n          <button type=\"button\" (click)=\"register(username, password, role, email ); form.reset(); \"\n                  [disabled]=\"!form.form.valid\"\n                  class=\"btn btn-success form-control\" id=\"signup\">Sign Up\n          </button>\n        </div>\n        <!--<div class=\"py-1\">-->\n        <!--<a href=\"../login/login.template.client.html\">Login</a>-->\n        <!--</div>-->\n      </div>\n    </div>\n  </form>\n\n</div>\n\n<!-- <app-footer></app-footer> -->\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.role = 'JobSeeker';
        this.usernameExists = false;
        this.successMsg = false;
    }
    RegisterComponent.prototype.register = function (username, password, role, email) {
        var _this = this;
        var user;
        // || role==='Faculty'
        if (role === 'Recruiter') {
            user = { username: username, password: password, role: role, email: email };
        }
        else {
            user = { username: username, password: password, role: role };
        }
        //new
        this.service
            .register(user)
            .then(function (res) {
            if (res.status === true) {
                if (role === 'JobSeeker') {
                    _this.router.navigate(['profile-seeker']);
                }
                else if (role === 'Faculty') {
                    _this.router.navigate(['dashboard-faculty']);
                }
                else {
                    _this.successMsg = true;
                    _this.usernameExists = false;
                    _this.role = 'JobSeeker';
                }
            }
            else {
                _this.usernameExists = true;
                _this.role = 'JobSeeker';
                _this.successMsg = false;
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user-sidebar/user-sidebar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-sidebar/user-sidebar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-sidebar/user-sidebar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-sidebar/user-sidebar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group border rounded shadow bg-light\" style=\"list-style: none;\" [hidden] = editMode>\n \n  <li>\n    <app-personal-info></app-personal-info>\n\n  </li>\n  \n</ul>\n\n<ul class=\"list-group border rounded shadow bg-light\"\n    [hidden]=\"!editMode\">\n  <li class=\"list-group-item border border-light mt-2 bg-light\">\n    <img src={{imageUrl}} class=\"rounded\"\n         alt=\"profile picture\" width=\"250px\">\n  </li>\n  <li class=\"list-group-item border border-light mt-0 mb-0 py-1 bg-light\">\n  <form>\n    <input name=\"myFile\"\n           type=\"file\"\n           class=\"form-control\"/>\n    <button type=\"button\"\n            class=\"btn btn-block btn-primary mt-2\"\n            disabled=\"true\">\n      Upload Image\n    </button>\n  </form>\n  </li>\n\n  <li class=\"list-group-item border border-light bg-light\">\n    <span style=\"font-size: 25px; font-weight: bold;\">{{firstName}} {{lastName}} </span>\n  </li>\n  <li class=\"list-group-item border border-light mt-1 py-1 bg-light\">\n      <textarea class=\"mx-0 my-0\" rows=\"5\" cols=\"31\"\n                [ngModelOptions]=\"{standalone: true}\"\n                [(ngModel)]=\"tagline\"\n                placeholder = \"Add Bio\">\n      </textarea>\n  </li>\n  <li class=\"list-group-item border border-light mt-1 mb-2 bg-light\">\n    <button class=\"btn btn-success rounded\" (click)=\"saveBio()\">\n      &nbsp;Save&nbsp;\n    </button>\n    <button class=\"btn btn-grey rounded ml-2\" (click)=\"cancel()\">\n      Cancel\n    </button>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/components/user-sidebar/user-sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-sidebar/user-sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSidebarComponent", function() { return UserSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserSidebarComponent = /** @class */ (function () {
    function UserSidebarComponent(userService) {
        this.userService = userService;
        this.imageUrl = '../../assets/images/displayPic/dp.jpg';
        this.editMode = false;
        this.uploadPicture = true;
        this.firstName = 'firstName';
        this.lastName = 'lastName';
        this.tagline = ' 📑 Add a bio !';
    }
    UserSidebarComponent.prototype.cancel = function () {
        this.editMode = false;
    };
    UserSidebarComponent.prototype.isDefined = function () {
        if (this.tagline === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    UserSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findLoggedUser()
            .then(function (user) {
            _this.user = user;
            if (user !== null) {
                console.log('Bio : ', _this.tagline);
                if (user.tagline !== undefined) {
                    _this.tagline = user.tagline;
                }
                if (user.firstName !== undefined) {
                    _this.firstName = user.firstName;
                }
                if (user.lastName !== undefined) {
                    _this.lastName = user.lastName;
                }
                if (user.requestStatus !== undefined) {
                    _this.imageUrl = '../../assets/images/displayPic/recruiterDefault.jpg';
                }
            }
        });
    };
    UserSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-sidebar',
            template: __webpack_require__(/*! ./user-sidebar.component.html */ "./src/app/components/user-sidebar/user-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./user-sidebar.component.css */ "./src/app/components/user-sidebar/user-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserSidebarComponent);
    return UserSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/view-job/view-job.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/view-job/view-job.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*.background-pic {*/\n  /*background-image: url('./../../../assets/images/paul-hanaoka-299941-unsplash.jpg');*/\n  /*background-size: contain;*/\n  /*}*/\n  /*.heading {*/\n  /*font-family: \"Bookman Old Style\";*/\n  /*background-color: rgba(15, 15, 15 ,0.6);*/\n  /*}*/\n  .mainContainer{\n\n  background-image: url('joanna-kosinska-439234-unsplash.jpg');\n  /*background-size: 100% 20%;*/\n  background-size: contain;\n  height: 300px;\n}\n  .container{\n  margin-top:50px;\n}\n"

/***/ }),

/***/ "./src/app/components/view-job/view-job.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/view-job/view-job.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer pb-5\">\n  <div class=\"h-25\"></div>\n  <div class=\"bg-white bounceOutRight border container  p-5\" [hidden]=\"isMainDivVisible\">\n    <div class=\"row\">\n      <!-- <div class=\"col-sm-2 \">\n        <img class=\"mt-3\" alt=\"Image not found\" src=\"{{job.company_logo}}\" width=\"120px\" height=\"140px\"/>\n      </div> -->\n      <div class=\"col-sm-8\">\n        <!-- <i class=\"fa fa-2x fa-pencil float-right btn\" [hidden]=\"!(user!=null && user.role != 'JobSeeker' &&\n         job.jobSource!='github')\" (click)=\"isMainDivVisible =!isMainDivVisible\"></i> -->\n        <h1 class=\"p-0\">{{job.title}}</h1>\n\n        <h3 class=\"text-muted\">{{job.company}} | {{job.location}} </h3>\n        <small [hidden]=\"job.jobSource!='github'\">Posted : {{job.created_at}}</small>\n        <br>\n        <small [hidden]=\"job.jobSource==='github'\">Posted : {{job && job.datePosted && job.datePosted.toDateString()}}</small>\n        <br>\n        \n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"d-inline-block mt-3\">\n          <!--{{user.role}}-->\n          <button [ngClass]=\"{ 'disabled': (user != null && user.role != 'JobSeeker')}\"\n                  [disabled]=\"(user!=null && user.role != 'JobSeeker') \"\n                  [hidden]=\"alreadySavedCheck || alreadyAppliedCheck\"\n                  class=\"btn btn-outline-primary mr-3\" (click)=\"saveJobId(job)\">Save\n          </button>\n          <button [ngClass]=\"{ 'disabled': (user != null && user.role != 'JobSeeker')}\"\n                  [disabled]=\"(user!=null && user.role != 'JobSeeker')\"\n                  [hidden]=\"!alreadySavedCheck || alreadyAppliedCheck\"\n                  class=\"btn btn-outline-primary mr-3\" (click)=\"deleteJobId(job)\">Go to saved Jobs in Dashboard\n          </button>\n          <!-- <a [ngClass]=\"{ 'disabled': (user != null && user.role != 'JobSeeker')}\"\n             class=\"btn  btn-primary\" (click)=\"applyJob(job);\" [hidden]=\"alreadyAppliedCheck\">Apply</a>\n          <div class=\"btn btn-primary disabled\" [hidden]=\"!alreadyAppliedCheck\">Go to saved Jobs in Dashboard</div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  \n \n</div>"

/***/ }),

/***/ "./src/app/components/view-job/view-job.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/view-job/view-job.component.ts ***!
  \***********************************************************/
/*! exports provided: ViewJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewJobComponent", function() { return ViewJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_job_listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/job-listing.service */ "./src/app/services/job-listing.service.ts");
/* harmony import */ var _services_save_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/save-job.service */ "./src/app/services/save-job.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_posting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/job-posting.service */ "./src/app/services/job-posting.service.ts");
/* harmony import */ var _models_job_posting_model_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/job-posting.model.client */ "./src/app/models/job-posting.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {Job} from '../../models/Job';




// import {User} from '../../models/user.model.client';


var ViewJobComponent = /** @class */ (function () {
    function ViewJobComponent(jobService, route, saveJobService, userService, jobPosting) {
        var _this = this;
        this.jobService = jobService;
        this.route = route;
        this.saveJobService = saveJobService;
        this.userService = userService;
        this.jobPosting = jobPosting;
        this.job = new _models_job_posting_model_client__WEBPACK_IMPORTED_MODULE_6__["JobPostingModelClient"]();
        this.user = null;
        this.jobApplications = [];
        this.alreadySavedCheck = false;
        this.alreadyAppliedCheck = false;
        this.postings = [];
        this.isMainDivVisible = false;
        this.isSecondaryDivVisible = false;
        this.sAddMode = false;
        this.rAddMode = false;
        this.qAddMode = false;
        this.route.params.subscribe(function (param) {
            var detail = param["jobId"].split("|");
            _this.jobId = detail[0];
            _this.jobSource = detail[1];
            console.warn(_this.jobId);
            console.warn(_this.jobSource);
        });
        if (this.jobId != null) {
            //   console.log('farhana',j);
            jobPosting
                .getAllJobPostings()
                .then(function (postings) {
                console.log(postings);
                _this.postings = postings;
                _this.postings.forEach(function (posting) {
                    if (posting._id === _this.jobId) {
                        _this.job = posting;
                        _this.job.jobSource = _this.jobSource;
                        _this.job.datePosted = new Date(posting.datePosted);
                    }
                });
            })
                .then(function () {
                return _this.userService
                    .findLoggedUser()
                    .then(function (user) { return (_this.user = user); });
            })
                .then(function () { return _this.getJobApplication(); });
            // );
        }
    }
    ViewJobComponent.prototype.getJobApplication = function () {
        var _this = this;
        this.saveJobService
            .getAllJobApplicationForUser()
            .then(function (jobApplications) {
            if (jobApplications.status != null &&
                jobApplications.status === "session expired") {
                _this.jobApplications = [];
            }
            else {
                _this.jobApplications = jobApplications;
            }
        })
            .then(function () {
            console.log(_this.jobApplications);
            _this.jobApplications.forEach(function (jobApp) {
                if (_this.jobSource === "github" &&
                    jobApp.gitHubJobId === _this.jobId) {
                    if (jobApp.status === "save") {
                        _this.alreadySavedCheck = true;
                    }
                    else {
                        _this.alreadyAppliedCheck = false;
                    }
                }
                else if (_this.jobSource !== "github" &&
                    jobApp.jobPosting === _this.jobId) {
                    if (jobApp.status === "save") {
                        _this.alreadySavedCheck = true;
                    }
                    else {
                        _this.alreadyAppliedCheck = true;
                    }
                }
            });
        });
    };
    ViewJobComponent.prototype.saveJobId = function (job) {
        var _this = this;
        var jobApplication;
        console.log(job.jobSource);
        if (job.jobSource === "github") {
            jobApplication = {
                dateApplied: new Date(),
                status: "save",
                jobSource: job.jobSource,
                gitHubJobId: job.id,
                location: job.location,
                title: job.title,
                company: job.company,
            };
        }
        else {
            jobApplication = {
                dateApplied: new Date(),
                status: "save",
                jobSource: job.jobSource,
                jobPosting: job._id,
                location: job.location,
                title: job.title,
                company: job.company,
            };
        }
        this.alreadySavedCheck = true;
        this.alreadyAppliedCheck = false;
        this.saveJobService
            .createJobApplication(jobApplication)
            .then(function () { return _this.getJobApplication(); });
    };
    ViewJobComponent.prototype.deleteJobId = function (job) {
        var _this = this;
        this.alreadySavedCheck = true;
        this.alreadyAppliedCheck = false;
        var id;
        if (job.jobSource === "github") {
            id = job.id;
        }
        else {
            id = job._id;
        }
        this.saveJobService
            .deleteJobApplicationByJobPosting(id, job.jobSource)
            .then(function () { return _this.getJobApplication(); });
    };
    ViewJobComponent.prototype.applyJob = function (job) {
        var _this = this;
        var jobApplication;
        console.log(job.jobSource);
        if (job.jobSource === "github") {
            jobApplication = {
                dateApplied: new Date(),
                status: "applied",
                jobSource: job.jobSource,
                gitHubJobId: job.id,
                location: job.location,
                title: job.title,
                company: job.company,
            };
        }
        else {
            jobApplication = {
                dateApplied: new Date(),
                status: "applied",
                jobSource: job.jobSource,
                jobPosting: job._id,
                location: job.location,
                title: job.title,
                company: job.company,
            };
        }
        var id;
        if (job.jobSource === "github") {
            id = job.id;
        }
        else {
            id = job._id;
        }
        this.alreadySavedCheck = true;
        this.alreadyAppliedCheck = true;
        this.saveJobService
            .deleteJobApplicationByJobPosting(id, job.jobSource)
            .then(function () {
            return _this.saveJobService
                .createJobApplication(jobApplication)
                .then(function () { return _this.getJobApplication(); });
        });
    };
    ViewJobComponent.prototype.toggleRAddMode = function () {
        this.rAddMode = !this.rAddMode;
    };
    ViewJobComponent.prototype.toggleSAddMode = function () {
        this.sAddMode = !this.sAddMode;
    };
    ViewJobComponent.prototype.toggleQAddMode = function () {
        this.qAddMode = !this.qAddMode;
    };
    ViewJobComponent.prototype.cancelAddR = function () {
        this.toggleRAddMode();
    };
    ViewJobComponent.prototype.cancelAddS = function () {
        this.toggleSAddMode();
    };
    ViewJobComponent.prototype.cancelAddQ = function () {
        this.toggleQAddMode();
    };
    ViewJobComponent.prototype.ngOnInit = function () { };
    ViewJobComponent.prototype.updateJob = function (id, job) {
        var _this = this;
        console.log(job);
        this.jobPosting
            .updateJobPosting(id, job)
            .then(function () { return _this.getJobApplication(); });
    };
    ViewJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-view-job",
            template: __webpack_require__(/*! ./view-job.component.html */ "./src/app/components/view-job/view-job.component.html"),
            styles: [__webpack_require__(/*! ./view-job.component.css */ "./src/app/components/view-job/view-job.component.css")],
        }),
        __metadata("design:paramtypes", [_services_job_listing_service__WEBPACK_IMPORTED_MODULE_2__["JobListingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_save_job_service__WEBPACK_IMPORTED_MODULE_3__["SaveJobService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_job_posting_service__WEBPACK_IMPORTED_MODULE_5__["JobPostingService"]])
    ], ViewJobComponent);
    return ViewJobComponent;
}());



/***/ }),

/***/ "./src/app/models/job-posting.model.client.ts":
/*!****************************************************!*\
  !*** ./src/app/models/job-posting.model.client.ts ***!
  \****************************************************/
/*! exports provided: JobPostingModelClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPostingModelClient", function() { return JobPostingModelClient; });
var JobPostingModelClient = /** @class */ (function () {
    function JobPostingModelClient() {
    }
    return JobPostingModelClient;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/job-listing.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/job-listing.service.ts ***!
  \*************************************************/
/*! exports provided: JobListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListingService", function() { return JobListingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobListingService = /** @class */ (function () {
    function JobListingService() {
    }
    JobListingService.prototype.findAllJobs = function () {
        return jquery__WEBPACK_IMPORTED_MODULE_1__["ajax"]({
            url: 'https://jobs.github.com/positions.json?markdown=true',
            dataType: 'jsonp'
        });
    };
    JobListingService.prototype.findFilteredJobs = function (location, keyword) {
        console.log('service');
        return jquery__WEBPACK_IMPORTED_MODULE_1__["ajax"]({
            url: 'https://jobs.github.com/positions.json?description=' + keyword + '&location=' + location,
            dataType: 'jsonp'
        });
    };
    JobListingService.prototype.findAllJobPortalJobs = function () {
    };
    JobListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JobListingService);
    return JobListingService;
}());



/***/ }),

/***/ "./src/app/services/job-posting.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/job-posting.service.ts ***!
  \*************************************************/
/*! exports provided: JobPostingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPostingService", function() { return JobPostingService; });
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

var JobPostingService = /** @class */ (function () {
    function JobPostingService() {
        var base;
        if (!location.toString().includes('localhost')) {
            base = 'https://ictjobportal-backend.herokuapp.com';
        }
        else {
            base = 'http://localhost:5500';
        }
        this.url = base + '/api/jobPosting';
        this.allJobPostingUrl = base + '/api/allJobPosting';
    }
    JobPostingService.prototype.createJobPosting = function (jobPosting) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(jobPosting),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    JobPostingService.prototype.updateJobPosting = function (jobPostingId, jobPosting) {
        return fetch(this.url + '/' + jobPostingId, {
            method: 'PUT',
            body: JSON.stringify(jobPosting),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    JobPostingService.prototype.deleteJobPosting = function (jobPostingId) {
        return fetch(this.url + '/' + jobPostingId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    JobPostingService.prototype.getAllJobPostingForUser = function () {
        return fetch(this.url, {
            credentials: 'include'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    JobPostingService.prototype.getAllJobPostings = function () {
        // console.log('in here');
        return fetch(this.allJobPostingUrl, {
            credentials: 'include'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    JobPostingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JobPostingService);
    return JobPostingService;
}());



/***/ }),

/***/ "./src/app/services/recruiter-detail.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/recruiter-detail.service.ts ***!
  \******************************************************/
/*! exports provided: RecruiterDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruiterDetailService", function() { return RecruiterDetailService; });
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

var RecruiterDetailService = /** @class */ (function () {
    function RecruiterDetailService() {
        var base;
        if (!location.toString().includes('localhost')) {
            base = 'https://ictjobportal-backend.herokuapp.com';
        }
        else {
            base = 'http://localhost:5500';
        }
        this.url = base + '/api/recruiter';
    }
    RecruiterDetailService.prototype.findRecruiterDetailsByUserId = function () {
        return fetch(this.url + '/user', {
            credentials: 'include',
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    RecruiterDetailService.prototype.updateRecruiterDetail = function (recruiterId, recruiter) {
        // console.log(JSON.stringify(user));
        return fetch(this.url + '/' + recruiterId, {
            method: 'PUT',
            body: JSON.stringify(recruiter),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    RecruiterDetailService.prototype.createRecruiterDetail = function (recruiterDetail) {
        // console.log(JSON.stringify(user));
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(recruiterDetail),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    RecruiterDetailService.prototype.deleteRecruiterDetail = function (Id) {
        return fetch(this.url + '/' + Id, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    RecruiterDetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RecruiterDetailService);
    return RecruiterDetailService;
}());



/***/ }),

/***/ "./src/app/services/save-job.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/save-job.service.ts ***!
  \**********************************************/
/*! exports provided: SaveJobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveJobService", function() { return SaveJobService; });
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

var SaveJobService = /** @class */ (function () {
    function SaveJobService() {
        var base;
        if (!location.toString().includes('localhost')) {
            base = 'https://ictjobportal-backend.herokuapp.com';
        }
        else {
            base = 'http://localhost:5500';
        }
        this.url = base + '/api/jobApplication';
    }
    SaveJobService.prototype.createJobApplication = function (jobApplication) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(jobApplication),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    SaveJobService.prototype.updateJobApplication = function (jobApplicationId, jobApplication) {
        return fetch(this.url + '/' + jobApplicationId, {
            method: 'PUT',
            body: JSON.stringify(jobApplication),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    SaveJobService.prototype.deleteJobApplication = function (jobApplicationId) {
        return fetch(this.url + '/' + jobApplicationId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    SaveJobService.prototype.deleteJobApplicationByJobPosting = function (jobApplicationId, source) {
        return fetch(this.url + '/' + jobApplicationId + '/' + source, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    SaveJobService.prototype.getAllJobApplicationForUser = function () {
        return fetch(this.url, {
            credentials: 'include'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    SaveJobService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SaveJobService);
    return SaveJobService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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

var UserService = /** @class */ (function () {
    function UserService() {
        var base;
        if (!location.toString().includes('localhost')) {
            base = 'https://ictjobportal-backend.herokuapp.com';
        }
        else {
            base = 'http://localhost:5500';
        }
        this.url = base + '/api/user';
        this.urlRegister = base + '/api/register';
        this.urlLoggedUser = base + '/api/profile';
        this.urlLoggedRecruiter = base + '/api/profile/recruiter';
        this.urlUpdateProfile = base + '/api/profile';
        this.urlLogin = base + '/api/login';
        this.urlPassReset = base + '/api/reset';
        this.urlVerifyUsername = base + '/api/verify';
        this.urlLogout = base + '/api/logout';
        this.urlDeleteProfile = base + '/api/user';
        this.urlApproveRecruiter = base + '/api/approve';
        this.urlPending = base + '/api/pending';
        this.urlRecruiterProfile = base + '/api/profile/recruiter';
        this.urlPremiumGrant = base + '/api/premium/approve';
        this.urlPremiumRevoke = base + '/api/premium/revoke';
    }
    UserService.prototype.register = function (user) {
        return fetch(this.urlRegister, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.login = function (username, password) {
        return fetch(this.urlLogin, {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password }),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.logout = function () {
        return fetch(this.urlLogout, {
            method: 'POST',
            credentials: 'include',
        });
    };
    UserService.prototype.findLoggedUser = function () {
        console.log('sadasdas');
        return fetch(this.urlLoggedUser, {
            credentials: 'include',
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.findLoggedRecruiter = function () {
        return fetch(this.urlLoggedRecruiter, {
            credentials: 'include',
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.updateUserProfile = function (user) {
        return fetch(this.urlUpdateProfile, {
            method: 'PUT',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return fetch(this.url + '/' + userId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    UserService.prototype.createUser = function (user) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.approveRecruiter = function (userId) {
        return fetch(this.urlApproveRecruiter + '/' + userId, {
            method: 'POST',
            credentials: 'include'
        });
    };
    UserService.prototype.rejectRecruiter = function (userId) {
        return fetch(this.url + '/' + userId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    UserService.prototype.grantPremiumAccess = function (userId) {
        return fetch(this.urlPremiumGrant + '/' + userId, {
            method: 'POST',
            credentials: 'include'
        });
    };
    UserService.prototype.revokePremiumAccess = function (userId) {
        return fetch(this.urlPremiumRevoke + '/' + userId, {
            method: 'POST',
            credentials: 'include'
        });
    };
    UserService.prototype.findPendingRecruiters = function () {
        return fetch(this.urlPending, {
            credentials: 'include'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.addRecruiterProfile = function (recruiter) {
        return fetch(this.urlRecruiterProfile, {
            method: 'POST',
            body: JSON.stringify(recruiter),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.findAllUsers = function () {
        return fetch(this.url, {
            credentials: 'include'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\JOBPORTAL\JOBPORTAL\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map