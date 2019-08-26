(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./notes/notes.module": [
		"./src/app/notes/notes.module.ts",
		"default~notes-notes-module~subtopic-subtopic-module",
		"notes-notes-module"
	],
	"./subtopic/subtopic.module": [
		"./src/app/subtopic/subtopic.module.ts",
		"default~notes-notes-module~subtopic-subtopic-module",
		"default~subtopic-subtopic-module~teacher-dash-teacher-dash-module",
		"subtopic-subtopic-module"
	],
	"./teacher-dash/teacher-dash.module": [
		"./src/app/teacher-dash/teacher-dash.module.ts",
		"default~subtopic-subtopic-module~teacher-dash-teacher-dash-module",
		"teacher-dash-teacher-dash-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");




var routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    // { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsModule' },
    { path: 'notes', loadChildren: './notes/notes.module#NotesModule' },
    { path: 'subtopic', loadChildren: './subtopic/subtopic.module#SubtopicModule' },
    { path: 'teacher_dash', loadChildren: './teacher-dash/teacher-dash.module#TeacherDashModule' },
    { path: 'sign', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: '**', loadChildren: './home/home.module#HomeModule' },
    { path: '', redirectTo: 'home', pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\"\n    ><img src=\"./assets/images/logo.png\" class=\"logo\" width=\"130\" height=\"70\" />\n  </a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse show\" id=\"navbarSupportedContent\">\n<ul class=\"navbar-nav mr-auto\">\n\n\n\n\n    </ul>\n    <!-- <div class=\"dropdown show\">\n      <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        Dropdown link\n      </a>\n\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n      </div>\n    </div> -->\n    <div *ngIf=\"login_status\" style=\"margin-left:60vw;\" class=\"logged-in-container form-inline row navbar-nav mr-auto\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\n      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2BAwxJqQJ73Hm76FNsiKKtVDDzo4oaggAF1AcBl9WPkzIXZSvBw\" width=\"40\" height=\"40\">\n      <p class=\"user\">{{username}}</p>\n\n      <a class=\"logout\" (click)=\"logout()\"> Log Out</a>\n    </div>\n\n    <!-- <p style=\"margin-left:10px;font-weight:300;font-size:1.3em\">Log Out</p> -->\n\n\n    <Form *ngIf=\"!login_status\" [formGroup]=\"login_form\" class=\"pull-right form-inline\">\n        <input\n          type=\"text\"\n          placeholder=\"Username\"\n          class=\"form-control mr-sm-2\"\n          formControlName=\"name\"\n        />\n        <input\n          type=\"password\"\n          placeholder=\"Password\"\n          class=\"form-control mr-sm-2\"\n          formControlName=\"password\"\n        />\n        <Button (click)=\"loginAttempt()\"\n        class=\"btn btn-outline-success my-2 my-sm-0\"\n        >\n          Log In\n        </Button>\n        <button (click)=\"signupPage()\" class=\"btn btn-outline-success my-2 my-sm-0 signup-padding\">Sign Up</button>\n      </Form>\n\n  </div>\n\n\n</nav>\n\n  <div class=\"pre-navbar row\" style=\"margin:0\">\n\n      <div class=\"col-md-2 text-center\">\n        <p (click)=\"goToNotesPage()\"class=\"learn-nav-text\">\n          Learn\n        </p>\n      </div>\n\n      <div class=\"col-md-2 text-center\">\n        <p class=\"learn-nav-text\">Analytics</p>\n      </div>\n      <div class=\"col-md-8 row float-right \">\n        <div class=\"col-md-5\">\n\n        </div>\n        <div class=\"col-md-2 text-center\" >\n            <p class=\"pre-nav-text\">\n              About\n            </p>\n          </div>\n\n          <div class=\"col-md-2 text-center\">\n            <p class=\"pre-nav-text\">Media</p>\n          </div>\n          <div class=\"col-md-3 text-center\">\n              <p class=\"pre-nav-text\">Contact Us</p>\n            </div>\n\n\n      </div>\n\n    </div>\n\n\n<router-outlet>\n\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  margin-left: 80px; }\n\n.login-form {\n  position: absolute;\n  right: 0;\n  margin-right: 80px; }\n\n.signup-padding {\n  margin-left: 5px; }\n\n.pre-navbar {\n  background: #a3c739;\n  min-height: 60px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 60px;\n  margin-right: 0; }\n\n.pre-nav-text {\n  color: white;\n  font-size: 1.2em;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n  font-weight: 50 !important; }\n\n.pre-nav-text:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  text-decoration: overline; }\n\np {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.user {\n  padding-top: 3px;\n  padding-left: 8px;\n  font-weight: 300;\n  font-size: 1.4em;\n  vertical-align: center; }\n\n.logout {\n  padding-top: 3px;\n  padding-left: 8px;\n  font-weight: 300;\n  font-size: 1.0em;\n  vertical-align: center;\n  color: #a3c739 !important;\n  margin-left: 15px;\n  cursor: pointer; }\n\n.float-right {\n  float: right; }\n\nanalytics-nav-text\n.analytics-nav-text {\n  color: white;\n  font-size: 1.5em;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n  cursor: pointer;\n  font-weight: 50 !important;\n  text-shadow: 2px 2px  green; }\n\n.learn-nav-text {\n  color: white;\n  font-size: 1.5em;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n  cursor: pointer;\n  font-weight: 50 !important;\n  text-shadow: 2px 2px  green; }\n\n.learn-nav-text:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  text-decoration: overline; }\n\n.analytics-nav-text:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  text-decoration: overline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2JvZHkxL0Rlc2t0b3AvUHJvamVjdHMvYW5nYXphLXJldmlzZWQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdCQUFlLEVBQUE7O0FBRWpCO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFjLEVBQUE7O0FBRWhCO0VBQ0UsWUFBVztFQUNYLGdCQUFnQjtFQUNoQixpQ0FBeUI7RUFBekIseUJBQXlCO0VBQXpCLGdEQUF5QjtFQUN6QiwwQkFBMEIsRUFBQTs7QUFFNUI7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBOztBQUUzQjtFQUVFLHdCQUF3QjtFQUN4QiwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF3QjtFQUN4QixpQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFlBQVcsRUFBQTs7QUFFYjs7RUFHRSxZQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlDQUF5QjtFQUF6Qix5QkFBeUI7RUFBekIsZ0RBQXlCO0VBQ3pCLGVBQWU7RUFDZiwwQkFBMEI7RUFDekIsMkJBQTJCLEVBQUE7O0FBRTlCO0VBQ0UsWUFBVztFQUNYLGdCQUFnQjtFQUNoQixpQ0FBeUI7RUFBekIseUJBQXlCO0VBQXpCLGdEQUF5QjtFQUN6QixlQUFlO0VBQ2YsMEJBQTBCO0VBQ3pCLDJCQUEyQixFQUFBOztBQUU5QjtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG4ubG9naW4tZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogODBweDtcbn1cbi5zaWdudXAtcGFkZGluZyB7XG4gIG1hcmdpbi1sZWZ0OjVweDtcbn1cbi5wcmUtbmF2YmFyIHtcbiAgYmFja2dyb3VuZDogI2EzYzczOTtcbiAgbWluLWhlaWdodDo2MHB4O1xuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDowO1xufVxuLnByZS1uYXYtdGV4dCB7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xuICBmb250LXdlaWdodDogNTAgIWltcG9ydGFudDtcbn1cbi5wcmUtbmF2LXRleHQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmU7XG59XG5wIHtcblxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi51c2VyIHtcbiAgcGFkZGluZy10b3A6M3B4O1xuICBwYWRkaW5nLWxlZnQ6OHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEuNGVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ291dCB7XG4gIHBhZGRpbmctdG9wOjNweDtcbiAgcGFkZGluZy1sZWZ0OjhweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxLjBlbTtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6I2EzYzczOSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDoxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmxvYXQtcmlnaHQge1xuICBmbG9hdDpyaWdodDtcbn1cbmFuYWx5dGljcy1uYXYtdGV4dFxuXG4uYW5hbHl0aWNzLW5hdi10ZXh0IHtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwICFpbXBvcnRhbnQ7XG4gICB0ZXh0LXNoYWRvdzogMnB4IDJweCAgZ3JlZW47XG59XG4ubGVhcm4tbmF2LXRleHQge1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNTAgIWltcG9ydGFudDtcbiAgIHRleHQtc2hhZG93OiAycHggMnB4ICBncmVlbjtcbn1cbi5sZWFybi1uYXYtdGV4dDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcblxufVxuLmFuYWx5dGljcy1uYXYtdGV4dDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcblxufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var alertify = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(data_service, spinner, router) {
        this.data_service = data_service;
        this.spinner = spinner;
        this.router = router;
        this.title = "Angaza Elimu";
        this.login_status = false;
        this.currentUser = localStorage.getItem("user_pk");
        this.username = localStorage.getItem("angaza_user");
        this.user_type = localStorage.getItem("user_type");
        console.log(this.currentUser);
        console.log(this.username);
        this.currentUser && this.username
            ? this.goToNotes()
            : this.setFalseLoginStatus();
        if (this.currentUser && this.username && this.user_type == "student") {
            this.goToNotes();
        }
        else if (this.currentUser &&
            this.username &&
            this.user_type == "teacher") {
            this.goToTeacherDashboard();
        }
        else {
            this.setFalseLoginStatus();
        }
        var name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.login_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: name,
            password: password
        });
    }
    AppComponent.prototype.goToNotes = function () {
        this.spinner.show();
        this.login_status = true;
        console.log("clicked");
        this.router.navigate(["notes/math"]);
    };
    AppComponent.prototype.setFalseLoginStatus = function () {
        this.login_status = false;
        localStorage.removeItem("user_pk");
        localStorage.removeItem("angaza_user");
    };
    AppComponent.prototype.loginAttempt = function () {
        var _this = this;
        this.spinner.show();
        this.data_service.login(this.login_form.value).subscribe(function (response) {
            console.log(_this.login_form.value);
            if (response["access_token"] && response["user_type"] == "student") {
                localStorage.setItem("user_type", response["user_type"]);
                localStorage.setItem("school_code", response["school_code"]);
                localStorage.setItem("user_id", response["id"]);
                localStorage.setItem("user_pk", response["access_token"]);
                localStorage.setItem("angaza_user", response["username"]);
                localStorage.setItem('angaza_access_token', response['access_token']);
                _this.username = response["username"];
                alertify.alert("Login Successful", "You have logged in Successfully.", function () {
                    alertify.message("OK");
                });
                _this.goToNotes();
                _this.login_status = true;
            }
            else if (response["access_token"] &&
                response["user_type"] == "teacher") {
                localStorage.setItem("user_type", response["user_type"]);
                localStorage.setItem("user_id", response["id"]);
                localStorage.setItem("user_pk", response["access_token"]);
                localStorage.setItem("angaza_user", response["username"]);
                alertify.alert("Login Successful", "You have logged in Successfully.", function () {
                    alertify.message("OK");
                });
                _this.goToTeacherDashboard();
                _this.login_status = true;
                _this.username = response["username"];
            }
            console.log(response);
            _this.spinner.hide();
            alertify.alert("Login Successful", "Login was successful.", function () {
                alertify.message("OK");
            });
        }, function (err) {
            alertify.alert("Unsuccessful Login", "Login Unsuccessful. Check Username and Password.", function () {
                alertify.message("OK");
            });
            _this.spinner.hide();
        });
    };
    AppComponent.prototype.goToTeacherDashboard = function () {
        this.router.navigate(["/teacher_dash"]);
    };
    AppComponent.prototype.goToNotesPage = function () {
        this.spinner.show();
        console.log("clicked");
        // localStorage.setItem('subject_id', subject_id);
        this.router.navigateByUrl("notes/english");
    };
    AppComponent.prototype.logout = function () {
        if (confirm("Do you want to log out?")) {
            localStorage.removeItem("user_pk");
            localStorage.removeItem("angaza_user");
            this.username = "";
            this.login_status = false;
            this.router.navigateByUrl("/");
        }
        else {
        }
    };
    AppComponent.prototype.signupPage = function () {
        this.router.navigateByUrl("/sign");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _teacher_landing_teacher_landing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teacher-landing/teacher-landing.component */ "./src/app/teacher-landing/teacher-landing.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");














// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _teacher_landing_teacher_landing_component__WEBPACK_IMPORTED_MODULE_10__["TeacherLandingComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_12__["TimeAgoPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-service.service.ts ***!
  \*****************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import 'rxjs/Rx';
var DataServiceService = /** @class */ (function () {
    // notes_url: string = "https://portal.angazaelimu.com/core"
    function DataServiceService(http) {
        this.http = http;
        this.api_url = "http://api.angazaelimu.com";
    }
    DataServiceService.prototype.login = function (form_data) {
        return this.http.post(this.api_url + "/api/auth/login", form_data);
    };
    DataServiceService.prototype.signup = function (form_data) {
        return this.http.post(this.api_url + "/api/auth/signup", form_data);
    };
    DataServiceService.prototype.getTopics = function (subject_id, class_id) {
        console.log(class_id);
        console.log(subject_id);
        var notes_data = {
            subject_id: subject_id,
            class: class_id
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.post(this.api_url + "/api/getTopics", notes_data, { headers: header });
    };
    DataServiceService.prototype.getNotes = function (subtopic_id) {
        console.log(subtopic_id);
        var data = {
            subtopic_id: subtopic_id
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        console.log(subtopic_id);
        return this.http.post(this.api_url + "/api/getSubtopicNotes", data, { headers: header });
    };
    DataServiceService.prototype.getTeachersNotes = function (subtopic_id) {
        var school_id = localStorage.getItem('school_id');
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        var data = {
            subtopic_id: subtopic_id,
            school_id: school_id
        };
        return this.http.post(this.api_url + "/api/getTeachersNotes", data, { headers: header });
    };
    DataServiceService.prototype.getSubtopics = function (subject_data) {
        console.log(subject_data);
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        var data = {
            topic_id: subject_data
        };
        return this.http.post(this.api_url + "/api/getSubtopics", data, { headers: header });
    };
    DataServiceService.prototype.commitSession = function (data) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.post(this.api_url + "/api/commitSession", data, { headers: header });
    };
    DataServiceService.prototype.createAssignmentQuestion = function (question_details, subtopic_id) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        question_details.school_id = '0101';
        question_details.subtopic_id = subtopic_id;
        question_details.quiz_id = localStorage.getItem('quiz_id');
        return this.http.post(this.api_url + "/api/createAssignmentQuestion", question_details, { headers: header });
    };
    DataServiceService.prototype.getTopicsFromClass = function (subject_id, class_) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        var data = {
            subject_id: subject_id,
            class_: class_
        };
        return this.http.post(this.api_url + "/api/getTopicsFromClass", data, { headers: header });
    };
    DataServiceService.prototype.getSubtopicsWhereTopic = function (topic_id) {
        var data = {
            topic_id: topic_id
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.post(this.api_url + "/api/getSubtopicsWhereTopic", data, { headers: header });
    };
    DataServiceService.prototype.getSubtopicsFromClass = function (topic_id) {
        var data = {
            topic_id: topic_id
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.post(this.api_url + "/api/getSubTopicsFromTopics", data, { headers: header });
    };
    DataServiceService.prototype.getClasses = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('user_token')
        });
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.get(this.api_url + "/api/getClasses", { headers: headers });
    };
    DataServiceService.prototype.getSubjects = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('user_token')
        });
        return this.http.get(this.api_url + '/api/getSubjects', { headers: headers });
    };
    DataServiceService.prototype.getQuizQuestions = function (subtopic_id) {
        var data = {
            subtopic_id: subtopic_id
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.post(this.api_url + '/api/getQuizQuestions', data, { headers: header });
    };
    DataServiceService.prototype.commitQuizAnswer = function (answer, marked, question_id) {
        localStorage.getItem('quiz_id');
        var data = {
            quiz_id: localStorage.getItem('quiz_id'),
            student_id: localStorage.getItem('user_id'),
            answer: answer,
            marked: marked,
            question_id: question_id
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.post(this.api_url + '/api/answerQuestion', data, { headers: header });
    };
    DataServiceService.prototype.commitAssignmentAnswer = function (answer, marked, question_id) {
        var data = {
            subtopic_id: localStorage.getItem('quiz_id'),
            student_id: localStorage.getItem('user_id'),
            answer: answer,
            marked: marked,
            question_id: question_id
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.post(this.api_url + "/api/answerQuiz", data, { headers: header });
    };
    DataServiceService.prototype.getAssignmentQuestions = function (subtopic_id, school_code) {
        var data = {
            school_code: school_code,
            subtopic_id: subtopic_id
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.post(this.api_url + '/api/getAssignmentQuestions', data, { headers: header });
    };
    DataServiceService.prototype.uploadNotes = function (form_data, notes_Data) {
        var data = {
            subject_id: form_data.subject_id,
            class_: form_data.class_,
            topic_id: form_data.topic_id,
            subtopic_id: form_data.subtopic_id,
            notes: notes_Data
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.post(this.api_url + '/api/postTeacherNotes', data, { headers: header });
    };
    DataServiceService.prototype.getStudents = function (subject_id) {
        var data = {
            subject: subject_id
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.post(this.api_url + "/api/getStudents", data, { headers: header });
    };
    DataServiceService.prototype.getStudentSubtopicResults = function (student_id) {
        var data = {
            student_id: student_id
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        return this.http.post(this.api_url + "/api/getStudentSubtopicResults", data, { headers: header });
    };
    DataServiceService.prototype.submitQuiz = function (correctly_answered, total_questions) {
        var student_id = localStorage.getItem('user_id');
        console.log(student_id);
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('angaza_access_token')
        });
        var data = {
            student_id: localStorage.getItem('user_id'),
            // subtopic: subtopic
            // class: class,
            subtopic_id: localStorage.getItem('subtopic'),
            // subject_id:subject_id
            // attempt_number,
            correctly_answered: correctly_answered,
            total_questions: total_questions
        };
        return this.http.post(this.api_url + "/api/submitQuiz", data, { headers: header });
    };
    DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"full-page\" style=\"margin-top:40px;\">\n      <div class=\"card container\">\n          <form [formGroup]=\"signupForm\">\n              <div class=\"row\" style=\"padding-top:20px\">\n                  <div class=\"form-group col-md-6\">\n                      <label for=\"exampleInputEmail1\">User Type</label>\n                      <select class=\"form-control\" formControlName=\"user_type\" aria-describedby=\"emailHelp\" placeholder=\"Select User Type\">\n                        <option value=\"student\">\n                          Student\n                        </option>\n                        <option value=\"teacher\">\n                          Teacher\n                        </option>\n                        <option value=\"parent\">\n                          Parent\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"exampleInputPassword1\">Username</label>\n                      <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Choose a username\">\n                    </div>\n\n              </div>\n              <div class=\"row\"></div>\n              <div class=\"row\" style=\"padding-top:20px\">\n                  <div class=\"form-group col-md-6\" *ngIf=\"signupForm.value.user_type == 'student'\">\n                      <label> Parent Email Address</label>\n                      <input type=\"email\" formControlName=\"email\" class=\"form-control\"  placeholder=\"Enter email\">\n\n                    </div>\n                    <div class=\"form-group col-md-6\" *ngIf=\"signupForm.value.user_type == 'teacher'\">\n                        <label for=\"exampleInputEmail1\">Email Address</label>\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control\"  placeholder=\"Enter email\">\n\n                      </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"exampleInputPassword1\">Password</label>\n                      <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">\n                    </div>\n              </div>\n              <div class=\"row\" style=\"padding-top:20px\">\n                  <div class=\"form-group col-md-6\">\n                      <label for=\"exampleInputEmail1\">Confirm Password</label>\n                      <input type=\"password\" class=\"form-control\" formControlName=\"confirm_password\" placeholder=\"Password Confirmation\">\n\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"exampleInputPassword1\">School Code</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"school_code\" placeholder=\"School Code(Optional)\">\n                    </div>\n              </div>\n\n\n                  <button (click)=\"signupAttempt()\" style=\"margin-bottom:20px;text-align:center;width:30%;\" class=\"btn btn-primary\">Register</button>\n\n          </form>\n\n        </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(data_service, router) {
        this.data_service = data_service;
        this.router = router;
        var user_type = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        var email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        var name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        var school_code = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        var confirm_password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: name,
            email: email,
            user_type: user_type,
            password: password,
            confirm_password: confirm_password,
            school_code: school_code,
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signupAttempt = function () {
        var _this = this;
        console.log(this.signupForm.value);
        this.data_service.signup(this.signupForm.value).subscribe(function (response) {
            console.log(response);
            _this.router.navigateByUrl('/home');
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/teacher-landing/teacher-landing.component.html":
/*!****************************************************************!*\
  !*** ./src/app/teacher-landing/teacher-landing.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  teacher-landing works!\n</p>\n"

/***/ }),

/***/ "./src/app/teacher-landing/teacher-landing.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/teacher-landing/teacher-landing.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItbGFuZGluZy90ZWFjaGVyLWxhbmRpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/teacher-landing/teacher-landing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/teacher-landing/teacher-landing.component.ts ***!
  \**************************************************************/
/*! exports provided: TeacherLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherLandingComponent", function() { return TeacherLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeacherLandingComponent = /** @class */ (function () {
    function TeacherLandingComponent() {
    }
    TeacherLandingComponent.prototype.ngOnInit = function () {
    };
    TeacherLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teacher-landing',
            template: __webpack_require__(/*! ./teacher-landing.component.html */ "./src/app/teacher-landing/teacher-landing.component.html"),
            styles: [__webpack_require__(/*! ./teacher-landing.component.scss */ "./src/app/teacher-landing/teacher-landing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeacherLandingComponent);
    return TeacherLandingComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nobody1/Desktop/Projects/angaza-revised/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map