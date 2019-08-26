(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subtopic-subtopic-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/interval.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].interval = rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"];
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./src/app/subtopic/assignments/assignments.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/subtopic/assignments/assignments.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-tab-group>\n    <mat-tab label=\"Grade 1\">\n      <ng-template matTabContent>\n        <div class=\"container\">\n          The firrst content\n        </div>\n\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 2\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 3\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 4\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 5\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 6\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 7\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 8\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 7\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n  </mat-tab-group> -->\n  <div class=\"container\" style=\"margin-bottom:40px;position:relative\">\n      <div *ngIf=\"overlay\" id=\"overlay\" style=\"align-content: center\">\n\n            <h3 style=\"color:white;text-align: center;vertical-align: middle;line-height:200px;font-weight:400\">Would you like to begin the quiz?</h3>\n            <div class=\"row\">\n              <button (click)=\"beginQuiz()\" type=\"button\" class=\"btn  btn-outline-success\" style='margin:auto'>Begin Quiz</button>\n            </div>\n\n      </div>\n      <div *ngIf=\"overlay_finished\" id=\"overlay_finished\" style=\"align-content: center\">\n\n          <h3 style=\"color:black;text-align: center;vertical-align: middle;line-height:200px;font-weight:400\">Quiz Complete</h3>\n\n\n            <!-- <p style=\"color:white;background:#007bff;width:30%;text-align: center\">Final Score:</p> -->\n            <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;color:#a3c739\">Final Score</h3>\n            <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;\">{{questions_correct}}/{{quiz_length}}</h3>\n\n          <div class=\"row\">\n              <button (click)=\"retakeQuiz()\" type=\"button\" class=\"btn  btn-outline-success\" style='margin:auto'>Retake Quiz</button>\n            </div>\n\n    </div>\n      <div class=\"row\">\n          <div class=\"col-md-9\">\n              <div class=\"hero-body\">\n                <div class=\"container\">\n                  <div class=\"columns is-mobile is-centered\">\n                    <div class=\"column is-half\">\n                      <div class=\"has-text-centered\">\n                        <h6\n                          class=\"subtitle has-text-centered is-uppercase is-7 navigation\"\n                        >\n\n                        </h6>\n                        <h5 class=\"subtitle has-text-centered is-5\" [innerHtml]=\"active_question.question\">\n\n                        </h5>\n                        <div (click)=\"highlightAnswer(1)\" class=\"option has-text-grey-dark\"  [ngClass]=\"user_answer == 1 ? active_answer : inactive_answer\">\n                          <span class=\"has-text-weight-bold is-size-5\">A</span>\n                          <div  [innerHtml]=\"active_question.option_a\"></div>\n                        </div>\n                        <div\n                          *ngIf=\"check_answer && active_question.option_a_explanation\"\n                          class=\"border padding rounded border-success\"\n                          [innerHTML]=\"active_question.option_a_explanation\"\n                        >\n                        <!-- {{active_question.option_a_explanation}} -->\n                        </div>\n                        <div (click)=\"highlightAnswer(2)\" class=\"option has-text-grey-dark\" [ngClass]=\"user_answer == 2 ? active_answer : inactive_answer\">\n                          <span class=\"has-text-weight-bold is-size-5\">B</span>\n                          <div  [innerHtml]=\"active_question.option_b\"></div>\n                        </div>\n                        <div\n                          *ngIf=\"check_answer && active_question.option_b_explanation\"\n                          class=\"border padding rounded border-danger\"\n                        [innerHTML]=\"active_question.option_b_explanation\"\n                        >\n                        <!-- {{active_question.option_b_explanation}} -->\n                        </div>\n\n                        <div  (click)=\"highlightAnswer(3)\" class=\"option has-text-grey-dark\" [ngClass]=\"user_answer == 3 ? active_answer : inactive_answer\">\n                          <span class=\"has-text-weight-bold is-size-5\">C</span>\n                          <div  [innerHtml]=\"active_question.option_c\"></div>\n                        </div>\n                        <div\n                          *ngIf=\"check_answer && active_question.option_c_explanation\"\n                          class=\"border padding rounded border-danger\"\n                        >\n                          <div  [innerHtml]=\"active_question.option_c_explanation\"></div>\n\n\n                        </div>\n                        <div (click)=\"highlightAnswer(4)\" class=\"option has-text-grey-dark\" [ngClass]=\"user_answer == 4 ? active_answer : inactive_answer\">\n                          <span class=\"has-text-weight-bold is-size-5\">D</span>\n                          <div  [innerHtml]=\"active_question.option_d\"></div>\n                        </div>\n                        <div\n                          *ngIf=\"check_answer && active_question.option_d_explanation\"\n                          class=\"border padding rounded border-danger\">\n                          <div  [innerHtml]=\"active_question.option_d_explanation\"></div>\n\n\n                        </div>\n\n\n                        <button\n                          type=\"button\"\n                          (click)=\"checkAnswer()\"\n                          class=\"btn btn-outline-success\"\n                          style=\"margin-top:20px;\"\n                          [disabled]=\"active_button\"\n                        >\n                          Check My Answer\n                        </button>\n                        <button\n                        *ngIf=\"questions_answered  != quiz_length\"\n                        (click)=\"nextQuestion()\"\n                          type=\"button\"\n                          class=\"btn btn-outline-success\"\n                          style=\"margin-top:20px;margin-left:10px;\"\n\n                          [disabled]=\"active_button\"\n\n                        >\n                          Next\n                        </button>\n                        <button\n                        *ngIf=\"questions_answered == quiz_length\"\n                        (click)=\"submitQuiz()\"\n                          type=\"button\"\n                          class=\"btn btn-outline-success\"\n                          style=\"margin-top:20px;margin-left:10px;\"\n\n\n\n                        >\n                          Submit Quiz\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n          </div>\n          <div class=\"col-md-2\" >\n              <div class=\"quesitions-answered\" style=\"border: 1px solid #000\">\n                  <p style=\"color:white;background:#007bff;padding:6px;\">Time Left</p>\n                  <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;\">{{timer | date: 'mm:ss'}}</h3>\n                </div>\n              <div class=\"quesitions-answered\" style=\"border: 1px solid #000\">\n                <p style=\"color:white;background:#007bff;padding:6px;\">Questions answered</p>\n                <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;\">{{questions_answered}}/{{quiz_length}}</h3>\n              </div>\n              <div class=\"correct\" style=\"border: 1px solid #000\">\n                  <p style=\"color:white;background:#a3c739;padding:6px;\">Correctly Answered</p>\n                  <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;\">{{questions_correct}}</h3>\n                </div>\n                <div class=\"wrong\" style=\"border: 1px solid #000\">\n                    <p style=\"color:white;background:red;padding:6px;\">Wrongly Answered</p>\n                    <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;\">{{questions_wrong}}</h3>\n                  </div>\n            </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/subtopic/assignments/assignments.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/subtopic/assignments/assignments.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Comfortaa&display=swap\");\nbody {\n  font-family: 'Comfortaa', cursive; }\n.option {\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin-bottom: .5rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: white; }\n.option:hover {\n    background: #f7f7f7; }\n.option:hover span {\n      background: #00d1b2;\n      color: white; }\n.option:active {\n    background: #f7f7f7; }\n.option:active span {\n      background: #00d1b2;\n      color: white; }\n.option:focus-within {\n    background: #f7f7f7; }\n.option:focus-within span {\n      background: #00d1b2;\n      color: white; }\n.option:visited {\n    background: #f7f7f7; }\n.option:visited span {\n      background: #00d1b2;\n      color: white; }\n#overlay {\n  position: absolute;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  /* Black background with opacity */\n  z-index: 2;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */ }\n#overlay_finished {\n  position: absolute;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: white;\n  /* Black background with opacity */\n  z-index: 2;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */ }\n.option span {\n  border-radius: 5px;\n  border: solid 1px #00d1b2;\n  padding: .2rem .5rem 0;\n  width: 2.5rem;\n  margin-right: 1rem;\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  color: #00d1b2; }\n.navigation:before, .navigation:after {\n  content: ' - '; }\n.padding {\n  padding: 30px; }\n.active {\n  background: #f7f7f7; }\n.active span {\n    background: #00d1b2;\n    color: white; }\n.overlay {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2JvZHkxL0Rlc2t0b3AvUHJvamVjdHMvYW5nYXphLXJldmlzZWQvc3JjL2FwcC9zdWJ0b3BpYy9hc3NpZ25tZW50cy9hc3NpZ25tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBWTtBQU1aO0VBQ0UsaUNBQWlDLEVBQUE7QUFHbkM7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFma0MsRUFBQTtBQVFwQztJQVVJLG1CQWpCcUMsRUFBQTtBQU96QztNQWFRLG1CQW5CMkI7TUFvQjNCLFlBQVksRUFBQTtBQWRwQjtJQWtCSSxtQkF6QnFDLEVBQUE7QUFPekM7TUFxQk0sbUJBM0I2QjtNQTRCN0IsWUFBWSxFQUFBO0FBdEJsQjtJQTBCSSxtQkFqQ3FDLEVBQUE7QUFPekM7TUE2Qk0sbUJBbkM2QjtNQW9DN0IsWUFBWSxFQUFBO0FBOUJsQjtJQWtDSSxtQkF6Q3FDLEVBQUE7QUFPekM7TUFxQ00sbUJBM0M2QjtNQTRDN0IsWUFBWSxFQUFBO0FBSWxCO0VBQ0Usa0JBQWtCO0VBQUUsbUNBQUE7RUFFcEIsV0FBVztFQUFFLHNDQUFBO0VBQ2IsWUFBWTtFQUFFLHVDQUFBO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9DQUNDO0VBQUUsa0NBQUE7RUFDSCxVQUFVO0VBQUUsb0ZBQUE7RUFDWixlQUFlO0VBQUUsMkJBQUEsRUFBNEI7QUFFL0M7RUFDRSxrQkFBa0I7RUFBRSxtQ0FBQTtFQUVwQixXQUFXO0VBQUUsc0NBQUE7RUFDYixZQUFZO0VBQUUsdUNBQUE7RUFDZCxNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsdUJBQW9DO0VBQUUsa0NBQUE7RUFDdEMsVUFBVTtFQUFFLG9GQUFBO0VBQ1osZUFBZTtFQUFFLDJCQUFBLEVBQTRCO0FBRS9DO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQTdFaUM7RUE4RWpDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGNBcEZpQyxFQUFBO0FBdUZuQztFQUVJLGNBQWMsRUFBQTtBQUlsQjtFQUNFLGFBQVksRUFBQTtBQUdkO0VBQ0UsbUJBbkd1QyxFQUFBO0FBa0d6QztJQUlJLG1CQXJHK0I7SUFzRy9CLFlBQVksRUFBQTtBQUdoQjtFQUNFLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N1YnRvcGljL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db21mb3J0YWEmZGlzcGxheT1zd2FwJyk7XG5cbiRvcHRpb24tYmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMDAlKTtcbiRvcHRpb24tYmFja2dyb3VuZC1ob3ZlcjogaHNsKDAsIDAlLCA5NyUpO1xuJHByaW1hcnktY29sb3I6IGhzbCgxNzEsIDEwMCUsIDQxJSk7XG5cbmJvZHl7XG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcbn1cblxuLm9wdGlvbntcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICRvcHRpb24tYmFja2dyb3VuZDtcblxuICAmOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICRvcHRpb24tYmFja2dyb3VuZC1ob3ZlcjtcblxuICAgICAgc3BhbntcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgfVxuICAmOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAkb3B0aW9uLWJhY2tncm91bmQtaG92ZXI7XG5cbiAgICBzcGFue1xuICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG4gICY6Zm9jdXMtd2l0aGlue1xuICAgIGJhY2tncm91bmQ6ICRvcHRpb24tYmFja2dyb3VuZC1ob3ZlcjtcblxuICAgIHNwYW57XG4gICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgJjp2aXNpdGVke1xuICAgIGJhY2tncm91bmQ6ICRvcHRpb24tYmFja2dyb3VuZC1ob3ZlcjtcblxuICAgIHNwYW57XG4gICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cbiNvdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgLy8gZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOVxuICApOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xufVxuI292ZXJsYXlfZmluaXNoZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAvLyBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgei1pbmRleDogMjsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbn1cbi5vcHRpb24gc3BhbntcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAkcHJpbWFyeS1jb2xvcjtcbiAgcGFkZGluZzogLjJyZW0gLjVyZW0gMDtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogJHByaW1hcnktY29sb3I7XG59XG5cbi5uYXZpZ2F0aW9ue1xuICAmOmJlZm9yZSwgJjphZnRlcntcbiAgICBjb250ZW50OiAnIC0gJztcbiAgfVxufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6MzBweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICRvcHRpb24tYmFja2dyb3VuZC1ob3ZlcjtcblxuICBzcGFue1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuLm92ZXJsYXkge1xuICBoZWlnaHQ6MTAwJTtcbiAgLy8gd2lkdGg6MTAwO1xuICAvLyBiYWNrZ3JvdW5kOlxufVxuIl19 */"

/***/ }),

/***/ "./src/app/subtopic/assignments/assignments.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/subtopic/assignments/assignments.component.ts ***!
  \***************************************************************/
/*! exports provided: AssignmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsComponent", function() { return AssignmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-service.service */ "./src/app/data-service.service.ts");



var AssignmentsComponent = /** @class */ (function () {
    function AssignmentsComponent(data_service) {
        this.data_service = data_service;
        this.questions_answered = 0;
        this.questions_correct = 0;
        this.questions_wrong = 0;
        this.check_answer = false;
        this.current_question_index = 0;
        this.active_answer = "active";
        this.inactive_answer = "inactive";
        this.question_answer_status = false;
        this.active_button = true;
        this.quiz_length = 0;
        this.overlay = true;
        this.timer = 1000;
        this.overlay_finished = false;
        this.questions = [
            {
                id: 1,
                question: "Which is a noun?",
                answer: 1,
                option_a: "Option A",
                option_b: "Option B",
                option_c: "Option C",
                option_d: "Option D",
                option_a_explanation: "Explanation",
                option_b_explanation: "Explanation",
                option_c_explanation: "Explanation",
                option_d_explanation: "Explanation",
            },
            {
                id: 2,
                question: "2.Which is a noun?",
                answer: 1,
                option_a: "Option A",
                option_b: "Option B",
                option_c: "Option C",
                option_d: "Option D",
                option_a_explanation: "Explanation",
                option_b_explanation: "Explanation",
                option_c_explanation: "Explanation",
                option_d_explanation: "Explanation",
            },
            {
                id: 3,
                question: "Which is a noun?",
                answer: 1,
                option_a: "Option A",
                option_b: "Option B",
                option_c: "Option C",
                option_d: "Option D",
                option_a_explanation: "Explanation",
                option_b_explanation: "Explanation",
                option_c_explanation: "Explanation",
                option_d_explanation: "Explanation",
            }
        ];
    }
    AssignmentsComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    AssignmentsComponent.prototype.ngOnDestroy = function () {
    };
    AssignmentsComponent.prototype.checkAnswer = function () {
        this.check_answer = true;
    };
    AssignmentsComponent.prototype.getQuestions = function () {
        var _this = this;
        var subtopic_id = localStorage.getItem("subtopic");
        this.data_service.getQuizQuestions(subtopic_id).subscribe(function (response) {
            console.log(response);
            _this.quiz_length = response.length;
            _this.questions = response;
            _this.current_question_index = 0;
            _this.active_question = _this.questions[_this.current_question_index];
        });
    };
    AssignmentsComponent.prototype.nextQuestion = function () {
        this.check_answer = false;
        if (this.questions[this.current_question_index].answer == this.user_answer) {
            this.questions_correct += 1;
        }
        else {
            console.log(this.questions[this.current_question_index].answer);
            console.log(this.user_answer);
            this.questions_wrong = +1;
        }
        this.user_answer = 0;
        this.question_answer_status = false;
        this.questions_answered += 1;
        this.current_question_index += 1;
        this.active_question = this.questions[this.current_question_index];
        console.log(this.active_question);
        console.log(this.current_question_index);
        // this.data_service.answerCurrentQuestion().subscribe(response => {
        //   console.log(response);
        //   this.active_question = this.questions[this.current_question_index + 1];
        // })
    };
    AssignmentsComponent.prototype.startSession = function () {
    };
    AssignmentsComponent.prototype.endSession = function () {
    };
    AssignmentsComponent.prototype.highlightAnswer = function (id) {
        if (this.question_answer_status == false) {
            this.active_button = false;
            this.user_answer = id;
        }
        else {
        }
    };
    AssignmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignments',
            template: __webpack_require__(/*! ./assignments.component.html */ "./src/app/subtopic/assignments/assignments.component.html"),
            styles: [__webpack_require__(/*! ./assignments.component.scss */ "./src/app/subtopic/assignments/assignments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], AssignmentsComponent);
    return AssignmentsComponent;
}());

var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());


/***/ }),

/***/ "./src/app/subtopic/forum/forum.component.html":
/*!*****************************************************!*\
  !*** ./src/app/subtopic/forum/forum.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"scrollable\">\n        <ol class=\"chat\">\n            <li class=\"other\">\n            <div class=\"msg\">\n              <div class=\"user\">Marga<span class=\"range admin\">Admin</span></div>\n            <p>Dude</p>\n            <p>Want to go dinner? </p>\n            <time>20:17</time>\n            </div>\n            </li>\n            <li class=\"self\">\n            <div class=\"msg\">\n            <p>Puff...</p>\n            <p>I'm still doing the Góngora comment... </p>\n            <p>Better other day</p>\n            <time>20:18</time>\n            </div>\n            </li>\n            <li class=\"other\">\n            <div class=\"msg\">\n              <div class=\"user\">Brotons</div>\n            <p>What comment about Góngora?</p>\n            <time>20:18</time>\n            </div>\n            </li>\n            <li class=\"self\">\n            <div class=\"msg\">\n            <p>The comment sent Marialu</p>\n            <p>It's for tomorrow</p>\n            <time>20:18</time>\n            </div>\n            </li>\n            <li class=\"other\">\n            <div class=\"msg\">\n              <div class=\"user\">Brotons</div>\n            <p></p>\n            <p>Hand it to me! </p>\n            <time>20:18</time>\n            </div>\n            </li>\n            <li class=\"self\">\n            <div class=\"msg\">\n            <img src=\"https://i.imgur.com/kUPxcsI.jpg\" draggable=\"false\"/>\n            <time>20:19</time>\n            </div>\n            </li>\n            <li class=\"other\">\n            <div class=\"msg\">\n              <div class=\"user\">Brotons</div>\n            <p>Thank you! </p>\n            <time>20:20</time>\n            </div>\n            </li>\n            <div class=\"day\">Today</div>\n            <li class=\"self\">\n            <div class=\"msg\">\n            <p>Who wants to play Minecraft?</p>\n            <time>18:03</time>\n            </div>\n            </li>\n            <li class=\"other\">\n            <div class=\"msg\">\n              <div class=\"user\">Charo</div>\n            <p>Come on, I didn't play it for four months</p>\n            <time>18:07</time>\n            </div>\n            </li>\n            <li class=\"self\">\n            <div class=\"msg\">\n            <p>Ehh, the launcher crash... </p>\n            <time>18:08</time>\n            </div>\n            </li>\n            <li class=\"other\">\n            <div class=\"msg\">\n              <div class=\"user\">Charo</div>\n            <p></p>\n            <p>Sure that is the base code</p>\n            <p>I told it to Mojang</p>\n            <time>18:08</time>\n            </div>\n            </li>\n\n            </ol>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/subtopic/forum/forum.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/subtopic/forum/forum.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  background: #252C33;\n  font-family: 'Lato', sans-serif;\n  margin: 0px auto; }\n\n::-moz-selection {\n  background: rgba(82, 179, 217, 0.3);\n  color: inherit; }\n\n::selection {\n  background: rgba(82, 179, 217, 0.3);\n  color: inherit; }\n\n/* M E N U */\n\n.menu {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  width: 100%;\n  height: 50px;\n  background: rgba(27, 35, 42, 0.9);\n  z-index: 100;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none; }\n\n.back {\n  position: absolute;\n  width: 90px;\n  height: 50px;\n  top: 0px;\n  left: 0px;\n  color: rgba(255, 255, 255, 0.5);\n  line-height: 45px;\n  font-size: 40px;\n  padding-left: 10px;\n  cursor: pointer;\n  transition: .15s all; }\n\n.back img {\n  position: absolute;\n  top: 5px;\n  left: 30px;\n  width: 40px;\n  height: 40px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  -webkit-border-radius: 100%;\n  -moz-border-radius: 100%;\n  -ms-border-radius: 100%;\n  margin-left: 15px; }\n\n.back:active {\n  background: rgba(0, 0, 0, 0.15); }\n\n.name {\n  position: absolute;\n  top: 3px;\n  left: 110px;\n  font-family: 'Lato';\n  font-size: 25px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.98);\n  cursor: default; }\n\n.last {\n  position: absolute;\n  top: 30px;\n  left: 115px;\n  font-family: 'Lato';\n  font-size: 11px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.6);\n  cursor: default; }\n\n.members {\n  position: absolute;\n  top: 30px;\n  left: 115px;\n  font-family: 'Lato';\n  font-size: 11px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.6);\n  cursor: default;\n  word-spacing: 2px; }\n\n/* M E S S A G E S */\n\n.chat {\n  list-style: none;\n  background: none;\n  margin: 0;\n  padding: 0 0 50px 0;\n  margin-top: 60px;\n  margin-bottom: 15px; }\n\n.chat li {\n  padding: 0.5rem;\n  overflow: hidden;\n  display: flex; }\n\n.chat .day {\n  position: relative;\n  display: block;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.3);\n  height: 20px;\n  text-shadow: 7px 0px 0px #252C33, 6px 0px 0px #252C33, 5px 0px 0px #252C33, 4px 0px 0px #252C33, 3px 0px 0px #252C33, 2px 0px 0px #252C33, 1px 0px 0px #252C33, 1px 0px 0px #252C33, 0px 0px 0px #252C33, -1px 0px 0px #252C33, -2px 0px 0px #252C33, -3px 0px 0px #252C33, -4px 0px 0px #252C33, -5px 0px 0px #252C33, -6px 0px 0px #252C33, -7px 0px 0px #252C33;\n  box-shadow: inset 20px 0px 0px #252C33, inset -20px 0px 0px #252C33, inset 0px -2px 0px rgba(255, 255, 255, 0.1);\n  line-height: 38px;\n  margin-top: 5px;\n  margin-bottom: 20px;\n  cursor: default;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none; }\n\n.chat .notification {\n  position: relative;\n  display: inherit;\n  text-align: center;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.15);\n  background: rgba(234, 247, 255, 0.035);\n  line-height: 30px;\n  border-radius: 100px;\n  margin: 7px 35%;\n  height: 30px;\n  width: 30%;\n  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05), 0px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 1px 0px rgba(255, 255, 255, 0.02), inset 0px -1px 0px rgba(255, 255, 255, 0.02);\n  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1), 0px 1px 0px rgba(255, 255, 255, 0.05);\n  cursor: default;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  transition: all 0.2s cubic-bezier(0.565, -0.26, 0.255, 1.41); }\n\n.chat .notification time {\n  position: absolute;\n  top: 7px;\n  right: 7px;\n  font-size: 11px;\n  padding: 8px;\n  border-radius: 100px;\n  background: #252C33;\n  box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.02), inset 0px 0px 1px rgba(27, 35, 42, 0.1);\n  height: 1px;\n  line-height: 0px;\n  color: rgba(255, 255, 255, 0.1);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  transition: all 0.2s cubic-bezier(0.565, -0.26, 0.255, 1.41); }\n\n.other .msg {\n  border-top-left-radius: 0px;\n  box-shadow: -1px 2px 0px #c1cbcd; }\n\n.other:before {\n  content: \"\";\n  position: relative;\n  top: 0px;\n  right: 0px;\n  left: 0px;\n  width: 0px;\n  height: 0px;\n  border: 5px solid #eef8ff;\n  border-left-color: transparent;\n  border-bottom-color: transparent; }\n\n.self {\n  justify-content: flex-end;\n  align-items: flex-end; }\n\n.self .msg {\n  border-bottom-right-radius: 0px;\n  box-shadow: 1px 2px 0px #c1cbcd; }\n\n.self:after {\n  content: \"\";\n  position: relative;\n  display: inline-block;\n  float: right;\n  bottom: 0px;\n  right: 0px;\n  width: 0px;\n  height: 0px;\n  border: 5px solid #eef8ff;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  box-shadow: 0px 2px 0px #c1cbcd; }\n\n.msg {\n  background: #eef8ff;\n  min-width: 50px;\n  padding: 10px;\n  border-radius: 2px;\n  word-break: break-all; }\n\n.msg .user {\n  font-size: 14px;\n  margin: 0 0 2px 0;\n  color: #666;\n  font-weight: 700;\n  margin-top: -2px;\n  margin-bottom: 5px;\n  transition: all .2s ease;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none; }\n\n.msg .user .range.admin {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 300;\n  color: #6aea96;\n  padding: 2px;\n  border-radius: 3px;\n  border: solid 1px #6aea96;\n  background: rgba(255, 255, 255, 0);\n  margin-left: 5px; }\n\n.msg p {\n  font-size: 13px;\n  margin: 0 0 2px 0;\n  color: #777;\n  transition: all .2s ease; }\n\n.msg img {\n  position: relative;\n  display: block;\n  width: 600px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 3px #eee;\n  transition: all 0.8s cubic-bezier(0.565, -0.26, 0.255, 1.41);\n  cursor: default;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none; }\n\n.msg time {\n  font-size: 0.7rem;\n  color: rgba(0, 0, 0, 0.35);\n  margin-top: 3px;\n  float: right;\n  cursor: default;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none; }\n\n.msg time:before {\n  content: \"\\f017\";\n  color: #ddd;\n  font-family: FontAwesome;\n  display: inline-block;\n  margin-right: 4px; }\n\nemoji {\n  display: inline-block;\n  height: 18px;\n  width: 18px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-top: -7px;\n  margin-left: 2px;\n  margin-right: 2px;\n  -webkit-transform: translate3d(0px, 4px, 0px);\n          transform: translate3d(0px, 4px, 0px); }\n\nemoji.please {\n  background-image: url(https://imgur.com/ftowh0s.png); }\n\nemoji.lmao {\n  background-image: url(https://i.imgur.com/MllSy5N.png); }\n\nemoji.happy {\n  background-image: url(https://imgur.com/5WUpcPZ.png); }\n\nemoji.pizza {\n  background-image: url(https://imgur.com/voEvJld.png); }\n\nemoji.cryalot {\n  background-image: url(https://i.imgur.com/UUrRRo6.png); }\n\nemoji.books {\n  background-image: url(https://i.imgur.com/UjZLf1R.png); }\n\nemoji.moai {\n  background-image: url(https://imgur.com/uSpaYy8.png); }\n\nemoji.suffocated {\n  background-image: url(https://i.imgur.com/jfTyB5F.png); }\n\nemoji.scream {\n  background-image: url(https://i.imgur.com/tOLNJgg.png); }\n\nemoji.hearth_blue {\n  background-image: url(https://i.imgur.com/gR9juts.png); }\n\nemoji.funny {\n  background-image: url(https://i.imgur.com/qKia58V.png); }\n\nemoji.shit {\n  background-image: url(https://i.imgur.com/H5Jba8r.png); }\n\n@-webikt-keyframes pulse {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 0.5; } }\n\n::-webkit-scrollbar {\n  min-width: 12px;\n  width: 12px;\n  max-width: 12px;\n  min-height: 12px;\n  height: 12px;\n  max-height: 12px;\n  background: #252C33;\n  box-shadow: inset 0px 50px 0px rgba(27, 35, 42, 0.9), inset 0px -50px 0px #eee; }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 100px;\n  border: solid 3px #252C33; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.1); }\n\n::-webkit-scrollbar-thumb:active {\n  background: rgba(255, 255, 255, 0.1); }\n\n::-webkit-scrollbar-button {\n  display: block;\n  height: 26px; }\n\n/* T Y P E */\n\n.typezone {\n  position: relative;\n  width: 100%;\n  height: 50px;\n  z-index: 99;\n  background: #eee;\n  border: none;\n  outline: none; }\n\ntextarea, textarea:hover {\n  position: absolute;\n  bottom: 0px;\n  left: 8%;\n  right: 8%;\n  width: 80%;\n  height: 30px;\n  z-index: 100;\n  background: #fafafa;\n  border: none;\n  outline: none;\n  padding-left: 2%;\n  padding-right: 2%;\n  padding-top: 2%;\n  color: #666;\n  font-weight: 400;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  overflow: hidden;\n  resize: none;\n  z-index: 200;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  transition: all 0.4s cubic-bezier(0.565, -0.26, 0.255, 1.41); }\n\ntextarea:focus {\n  height: 300px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); }\n\n.emojis {\n  position: relative;\n  display: block;\n  bottom: 0px;\n  left: 0px;\n  width: 8%;\n  height: 50px;\n  background-image: url(https://i.imgur.com/VAn5Geq.png);\n  background-repeat: no-repeat;\n  background-size: 34px 34px;\n  background-position: 45% 9px;\n  z-index: 100;\n  cursor: pointer; }\n\n.emojis:active {\n  opacity: 0.9; }\n\n.send {\n  position: relative;\n  display: block;\n  bottom: 0px;\n  right: 0px;\n  width: 8%;\n  height: 50px;\n  border: none;\n  outline: none;\n  z-index: 100;\n  cursor: pointer;\n  background-image: url(https://i.imgur.com/VSQxJKL.png);\n  background-repeat: no-repeat;\n  background-size: 34px 34px;\n  background-position: 45% 9px;\n  background-color: rgba(255, 255, 255, 0); }\n\n.send:active {\n  opacity: 0.85; }\n\n/* R E S P O N S I V E   C O N F I G U R A T I O N */\n\n@media screen and (max-width: 750px) {\n  ::-webkit-scrollbar {\n    display: none; }\n  .chat {\n    margin-bottom: 55px; }\n  .msg p {\n    font-size: 11px; }\n  .msg .user {\n    font-size: 13px; }\n  .msg img {\n    width: 300px; }\n  .chat .notification {\n    font-size: 12px;\n    margin: 7px 30%;\n    width: 40%; }\n  .chat .day {\n    font-size: 11px; }\n  .emojis {\n    width: 25%; }\n  .send {\n    width: 25%; }\n  textarea {\n    left: 0px;\n    right: 0px;\n    bottom: 50px;\n    padding-left: 5%;\n    padding-right: 5%;\n    padding-top: 20px;\n    width: 90%;\n    border-radius: 0px;\n    height: 28px;\n    background: #fafafa;\n    box-shadow: none;\n    transition: all 0.4s cubic-bezier(0.2, -0.2, 0.2, 1.2); }\n  textarea:focus {\n    height: 30vh;\n    margin-top: 30vh;\n    box-shadow: 0px -20px 20px rgba(0, 0, 0, 0.1); }\n  form:focus ~ .typezone {\n    bottom: 50vh; } }\n\n@media screen and (max-width: 550px) {\n  .msg p {\n    max-width: 250px; }\n  .msg img {\n    width: 200px; }\n  .chat .notification {\n    font-size: 12px;\n    margin: 7px 0px;\n    width: 100%;\n    border-radius: 0px; }\n  .chat .notification time {\n    right: 10px; } }\n\n.scrollable {\n  height: 30vh;\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2JvZHkxL0Rlc2t0b3AvUHJvamVjdHMvYW5nYXphLXJldmlzZWQvc3JjL2FwcC9zdWJ0b3BpYy9mb3J1bS9mb3J1bS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0EsbUNBQWdDO0VBQ2hDLGNBQWMsRUFBQTs7QUFGZDtFQUNBLG1DQUFnQztFQUNoQyxjQUFjLEVBQUE7O0FBR2QsWUFBQTs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUE4QjtFQUM5QixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSwrQkFBNEIsRUFBQTs7QUFFOUI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQ0FBNkI7RUFDN0IsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLCtCQUE0QjtFQUM1QixlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsK0JBQTRCO0VBQzVCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkIsb0JBQUE7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsK0JBQTRCO0VBQzVCLFlBQVk7RUFDWixrV0FBa1c7RUFDbFcsZ0hBQTZHO0VBQzdHLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0NBQTZCO0VBQzdCLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLHdLQUF3SjtFQUN4SixtRkFBMkU7RUFDM0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiw0REFBNkQsRUFBQTs7QUFFL0Q7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsMEZBQW1GO0VBQ25GLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsK0JBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiw0REFBNkQsRUFBQTs7QUFHL0Q7RUFDRSwyQkFBMkI7RUFDM0IsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLCtCQUErQjtFQUMvQiwrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLCtCQUErQixFQUFBOztBQUdqQztFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtDQUErQjtFQUMvQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDREQUE2RDtFQUM3RCxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxnQkFBZTtFQUNmLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNkNBQXFDO1VBQXJDLHFDQUFxQyxFQUFBOztBQUV2QztFQUFhLG9EQUFvRCxFQUFBOztBQUNqRTtFQUFXLHNEQUFzRCxFQUFBOztBQUNqRTtFQUFZLG9EQUFvRCxFQUFBOztBQUNoRTtFQUFZLG9EQUFvRCxFQUFBOztBQUNoRTtFQUFjLHNEQUFzRCxFQUFBOztBQUNwRTtFQUFZLHNEQUFzRCxFQUFBOztBQUNsRTtFQUFXLG9EQUFvRCxFQUFBOztBQUMvRDtFQUFpQixzREFBc0QsRUFBQTs7QUFDdkU7RUFBYSxzREFBc0QsRUFBQTs7QUFDbkU7RUFBa0Isc0RBQXNELEVBQUE7O0FBQ3hFO0VBQVksc0RBQXNELEVBQUE7O0FBQ2xFO0VBQVcsc0RBQXNELEVBQUE7O0FBRWpFO0VBQ0E7SUFBTyxVQUFVLEVBQUE7RUFDakI7SUFBSyxZQUFZLEVBQUEsRUFBSTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsOEVBQTJFLEVBQUE7O0FBRzdFO0VBQ0Usb0NBQWlDO0VBQ2pDLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0Usb0NBQWlDLEVBQUE7O0FBR25DO0VBQ0Usb0NBQWlDLEVBQUE7O0FBR25DO0VBQ0UsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFHZCxZQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBRWxCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQ0FBd0M7RUFDeEMsNERBQTZELEVBQUE7O0FBRS9EO0VBQ0UsYUFBYTtFQUNiLDJDQUF3QyxFQUFBOztBQUUxQztFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBQ1QsWUFBWTtFQUNaLHNEQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixzREFBc0Q7RUFDdEQsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsd0NBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsYUFBYSxFQUFBOztBQUdmLG9EQUFBOztBQUVBO0VBQ0U7SUFDQSxhQUFhLEVBQUE7RUFFYjtJQUNJLG1CQUFtQixFQUFBO0VBRXZCO0lBQ0ksZUFBZSxFQUFBO0VBRW5CO0lBQ0ksZUFBZSxFQUFBO0VBRW5CO0lBQ0ksWUFBWSxFQUFBO0VBRWhCO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVLEVBQUE7RUFFZDtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNEQUFxRCxFQUFBO0VBRXpEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw2Q0FBMEMsRUFBQTtFQUU5QztJQUNJLFlBQVksRUFBQSxFQUNmOztBQUVIO0VBQ0U7SUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtJQUNJLFlBQVksRUFBQTtFQUVoQjtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQixFQUFBO0VBRXRCO0lBQ0ksV0FBVyxFQUFBLEVBQ2Q7O0FBRUg7RUFDRSxZQUFXO0VBQ1gsa0JBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdWJ0b3BpYy9mb3J1bS9mb3J1bS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMjUyQzMzO1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuOjpzZWxlY3Rpb257XG5iYWNrZ3JvdW5kOiByZ2JhKDgyLDE3OSwyMTcsMC4zKTtcbmNvbG9yOiBpbmhlcml0O1xufVxuXG4vKiBNIEUgTiBVICovXG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI3LDM1LDQyLDAuOSk7XG4gIHotaW5kZXg6IDEwMDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogLjE1cyBhbGw7XG59XG4uYmFjayBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAzMHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbi5iYWNrOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xNSk7XG59XG4ubmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDExMHB4O1xuICBmb250LWZhbWlseTogJ0xhdG8nO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOTgpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ubGFzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAxMTVweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ubWVtYmVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAxMTVweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHdvcmQtc3BhY2luZzogMnB4O1xufVxuXG4vKiBNIEUgUyBTIEEgRyBFIFMgKi9cblxuLmNoYXQge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCA1MHB4IDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2hhdCBsaSB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jaGF0IC5kYXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1zaGFkb3c6IDdweCAwcHggMHB4ICMyNTJDMzMsIDZweCAwcHggMHB4ICMyNTJDMzMsIDVweCAwcHggMHB4ICMyNTJDMzMsIDRweCAwcHggMHB4ICMyNTJDMzMsIDNweCAwcHggMHB4ICMyNTJDMzMsIDJweCAwcHggMHB4ICMyNTJDMzMsIDFweCAwcHggMHB4ICMyNTJDMzMsIDFweCAwcHggMHB4ICMyNTJDMzMsIDBweCAwcHggMHB4ICMyNTJDMzMsIC0xcHggMHB4IDBweCAjMjUyQzMzLCAtMnB4IDBweCAwcHggIzI1MkMzMywgLTNweCAwcHggMHB4ICMyNTJDMzMsIC00cHggMHB4IDBweCAjMjUyQzMzLCAtNXB4IDBweCAwcHggIzI1MkMzMywgLTZweCAwcHggMHB4ICMyNTJDMzMsIC03cHggMHB4IDBweCAjMjUyQzMzO1xuICBib3gtc2hhZG93OiBpbnNldCAyMHB4IDBweCAwcHggIzI1MkMzMywgaW5zZXQgLTIwcHggMHB4IDBweCAjMjUyQzMzLCBpbnNldCAwcHggLTJweCAwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuLmNoYXQgLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgMjQ3LCAyNTUsIDAuMDM1KTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW46IDdweCAzNSU7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwJTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgwLDAsMCwuMDUpLCAwcHggLTFweCAwcHggcmdiYSgwLDAsMCwuMDUpLCBpbnNldCAwcHggMXB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LC4wMiksIGluc2V0IDBweCAtMXB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LC4wMik7XG4gIHRleHQtc2hhZG93OiAwcHggLTFweCAwcHggcmdiYSgwLDAsMCwuMSksIDBweCAxcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjA1KTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBjdWJpYy1iZXppZXIoMC41NjUsIC0wLjI2MCwgMC4yNTUsIDEuNDEwKTtcbn1cbi5jaGF0IC5ub3RpZmljYXRpb24gdGltZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3cHg7XG4gIHJpZ2h0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzI1MkMzMztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwuMDIpLCBpbnNldCAwcHggMHB4IDFweCByZ2JhKDI3LDM1LDQyLDAuMSk7XG4gIGhlaWdodDogMXB4O1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBjdWJpYy1iZXppZXIoMC41NjUsIC0wLjI2MCwgMC4yNTUsIDEuNDEwKTtcbn1cblxuLm90aGVyIC5tc2cge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IC0xcHggMnB4IDBweCAjYzFjYmNkO1xufVxuLm90aGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNlZWY4ZmY7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWxmIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnNlbGYgLm1zZyB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMHB4ICNjMWNiY2Q7XG59XG4uc2VsZjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2VlZjhmZjtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4ICNjMWNiY2Q7XG59XG5cbi5tc2cge1xuICBiYWNrZ3JvdW5kOiAjZWVmOGZmO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLm1zZyAudXNlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDAgMnB4IDA7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubXNnIC51c2VyIC5yYW5nZS5hZG1pbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzZhZWE5NjtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICM2YWVhOTY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMCk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubXNnIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMCAwIDJweCAwO1xuICBjb2xvcjogIzc3NztcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xufVxuLm1zZyBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggI2VlZTtcbiAgdHJhbnNpdGlvbjogYWxsIC44cyBjdWJpYy1iZXppZXIoMC41NjUsIC0wLjI2MCwgMC4yNTUsIDEuNDEwKTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1zZyB0aW1lIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC4zNSk7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuLm1zZyB0aW1lOmJlZm9yZXtcbiAgY29udGVudDpcIlxcZjAxN1wiO1xuICBjb2xvcjogI2RkZDtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG5lbW9qaXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXJnaW4tdG9wOiAtN3B4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDRweCwgMHB4KTtcbn1cbmVtb2ppLnBsZWFzZXtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWd1ci5jb20vZnRvd2gwcy5wbmcpO31cbmVtb2ppLmxtYW97YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vTWxsU3k1Ti5wbmcpO31cbmVtb2ppLmhhcHB5e2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltZ3VyLmNvbS81V1VwY1BaLnBuZyk7fVxuZW1vamkucGl6emF7YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1ndXIuY29tL3ZvRXZKbGQucG5nKTt9XG5lbW9qaS5jcnlhbG90e2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2kuaW1ndXIuY29tL1VVclJSbzYucG5nKTt9XG5lbW9qaS5ib29rc3tiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9ValpMZjFSLnBuZyk7fVxuZW1vamkubW9haXtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWd1ci5jb20vdVNwYVl5OC5wbmcpO31cbmVtb2ppLnN1ZmZvY2F0ZWR7YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vamZUeUI1Ri5wbmcpO31cbmVtb2ppLnNjcmVhbXtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS90T0xOSmdnLnBuZyk7fVxuZW1vamkuaGVhcnRoX2JsdWV7YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vZ1I5anV0cy5wbmcpO31cbmVtb2ppLmZ1bm55e2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2kuaW1ndXIuY29tL3FLaWE1OFYucG5nKTt9XG5lbW9qaS5zaGl0e2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2kuaW1ndXIuY29tL0g1SmJhOHIucG5nKTt9XG5cbkAtd2ViaWt0LWtleWZyYW1lcyBwdWxzZSB7XG5mcm9tIHsgb3BhY2l0eTogMDsgfVxudG8geyBvcGFjaXR5OiAwLjU7IH1cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIG1pbi13aWR0aDogMTJweDtcbiAgd2lkdGg6IDEycHg7XG4gIG1heC13aWR0aDogMTJweDtcbiAgbWluLWhlaWdodDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBtYXgtaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMjUyQzMzO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggNTBweCAwcHggcmdiYSgyNywzNSw0MiwwLjkpLCBpbnNldCAwcHggLTUwcHggMHB4ICNlZWU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogc29saWQgM3B4ICMyNTJDMzM7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDI2cHg7XG59XG5cbi8qIFQgWSBQIEUgKi9cbi50eXBlem9uZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG50ZXh0YXJlYSwgdGV4dGFyZWE6aG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiA4JTtcbiAgcmlnaHQ6IDglO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHJlc2l6ZTogbm9uZTtcbiAgei1pbmRleDogMjAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjRzIGN1YmljLWJlemllcigwLjU2NSwgLTAuMjYwLCAwLjI1NSwgMS40MTApO1xufVxudGV4dGFyZWE6Zm9jdXMge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLDAsMCwwLjMpO1xufVxuLmVtb2ppcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiA4JTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9WQW41R2VxLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMzRweCAzNHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NSUgOXB4O1xuICB6LWluZGV4OiAxMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5lbW9qaXM6YWN0aXZlIHtcbiAgb3BhY2l0eTogMC45O1xufVxuLnNlbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDglO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2kuaW1ndXIuY29tL1ZTUXhKS0wucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAzNHB4IDM0cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDQ1JSA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMCk7XG59XG4uc2VuZDphY3RpdmUge1xuICBvcGFjaXR5OiAwLjg1O1xufVxuXG4vKiBSIEUgUyBQIE8gTiBTIEkgViBFICAgQyBPIE4gRiBJIEcgVSBSIEEgVCBJIE8gTiAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY2hhdHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG4gIH1cbiAgLm1zZyBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAubXNnIC51c2VyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAubXNnIGltZyB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgLmNoYXQgLm5vdGlmaWNhdGlvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW46IDdweCAzMCU7XG4gICAgICB3aWR0aDogNDAlO1xuICB9XG4gIC5jaGF0IC5kYXkge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIC5lbW9qaXMge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgfVxuICAuc2VuZCB7XG4gICAgICB3aWR0aDogMjUlO1xuICB9XG4gIHRleHRhcmVhIHtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IDUwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKDAuMiwgLTAuMiwgMC4yLCAxLjIpO1xuICB9XG4gIHRleHRhcmVhOmZvY3VzIHtcbiAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgIG1hcmdpbi10b3A6IDMwdmg7XG4gICAgICBib3gtc2hhZG93OiAwcHggLTIwcHggMjBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cbiAgZm9ybTpmb2N1cyB+IC50eXBlem9uZSB7XG4gICAgICBib3R0b206IDUwdmg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5tc2cgcCB7XG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICB9XG4gIC5tc2cgaW1nIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuY2hhdCAubm90aWZpY2F0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbjogN3B4IDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG4gIC5jaGF0IC5ub3RpZmljYXRpb24gdGltZSB7XG4gICAgICByaWdodDogMTBweDtcbiAgfVxufVxuLnNjcm9sbGFibGUge1xuICBoZWlnaHQ6MzB2aDtcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/subtopic/forum/forum.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subtopic/forum/forum.component.ts ***!
  \***************************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForumComponent = /** @class */ (function () {
    function ForumComponent() {
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    ForumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forum',
            template: __webpack_require__(/*! ./forum.component.html */ "./src/app/subtopic/forum/forum.component.html"),
            styles: [__webpack_require__(/*! ./forum.component.scss */ "./src/app/subtopic/forum/forum.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/subtopic/nested-notes/nested-notes.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/subtopic/nested-notes/nested-notes.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-md-12\" [innerHTML]=\"notes\">\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/subtopic/nested-notes/nested-notes.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/subtopic/nested-notes/nested-notes.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  height: 60vh; }\n\n.topic-title {\n  font-weight: 300;\n  font-size: 0.9em;\n  color: #a3c739; }\n\n.notes-content {\n  margin: 20px; }\n\n.links {\n  text-decoration: underline;\n  padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2JvZHkxL0Rlc2t0b3AvUHJvamVjdHMvYW5nYXphLXJldmlzZWQvc3JjL2FwcC9zdWJ0b3BpYy9uZXN0ZWQtbm90ZXMvbmVzdGVkLW5vdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3VidG9waWMvbmVzdGVkLW5vdGVzL25lc3RlZC1ub3Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgaGVpZ2h0OjYwdmg7XG59XG4udG9waWMtdGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogI2EzYzczOTtcbn1cbi5ub3Rlcy1jb250ZW50IHtcbiAgbWFyZ2luOjIwcHg7XG59XG4ubGlua3Mge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/subtopic/nested-notes/nested-notes.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/subtopic/nested-notes/nested-notes.component.ts ***!
  \*****************************************************************/
/*! exports provided: NestedNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedNotesComponent", function() { return NestedNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var NestedNotesComponent = /** @class */ (function () {
    function NestedNotesComponent(activatedRoute, data_service, spinner, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.data_service = data_service;
        this.spinner = spinner;
        this.router = router;
        console.log("loaded");
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.subtopic_id = localStorage.getItem('subtopic');
            console.log("triggered route event");
            _this.getNotes();
        });
    }
    NestedNotesComponent.prototype.ngOnInit = function () {
        this.subtopic_id = localStorage.getItem('subtopic');
        console.log("loaded");
        this.getNotes();
    };
    NestedNotesComponent.prototype.getNotes = function () {
        var _this = this;
        console.log("subtopic id is" + this.subtopic_id);
        this.data_service.getNotes(this.subtopic_id).subscribe(function (response) {
            console.log("My notes response" + response);
            _this.subject_fillable = response;
            _this.notes = "";
            _this.notes = response[0].notes;
            console.log(_this.notes);
            console.log(response);
        });
    };
    NestedNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nested-notes',
            template: __webpack_require__(/*! ./nested-notes.component.html */ "./src/app/subtopic/nested-notes/nested-notes.component.html"),
            styles: [__webpack_require__(/*! ./nested-notes.component.scss */ "./src/app/subtopic/nested-notes/nested-notes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NestedNotesComponent);
    return NestedNotesComponent;
}());



/***/ }),

/***/ "./src/app/subtopic/query/query.component.html":
/*!*****************************************************!*\
  !*** ./src/app/subtopic/query/query.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n\n    </div>\n    <div class=\"col-md-4\">\n\n    </div>\n\n  </div>\n  <div class=\"row\">\n\n\n      <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n        Ask a Question\n      </button>\n      <div class=\"recent_questions\">\n\n      </div>\n      <div class=\"question_class\">\n        <div class=\"row\">\n          <p class=\"title\">\n            <!-- Are you foolish? -->\n          </p>\n\n        </div>\n        <div class=\"row\">\n          <p class=\"answer\">\n            <!-- Quite possibly so -->\n          </p>\n        </div>\n      </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/subtopic/query/query.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/subtopic/query/query.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  padding: 20px;\n  color: #a3c739;\n  font-size: 1.2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2JvZHkxL0Rlc2t0b3AvUHJvamVjdHMvYW5nYXphLXJldmlzZWQvc3JjL2FwcC9zdWJ0b3BpYy9xdWVyeS9xdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdWJ0b3BpYy9xdWVyeS9xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIHBhZGRpbmc6MjBweDtcbiAgY29sb3I6I2EzYzczOTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/subtopic/query/query.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subtopic/query/query.component.ts ***!
  \***************************************************/
/*! exports provided: QueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryComponent", function() { return QueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { DataServiceService } from "../"
var QueryComponent = /** @class */ (function () {
    function QueryComponent() {
    }
    QueryComponent.prototype.ngOnInit = function () {
    };
    QueryComponent.prototype.getQueries = function () {
    };
    QueryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-query',
            template: __webpack_require__(/*! ./query.component.html */ "./src/app/subtopic/query/query.component.html"),
            styles: [__webpack_require__(/*! ./query.component.scss */ "./src/app/subtopic/query/query.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QueryComponent);
    return QueryComponent;
}());



/***/ }),

/***/ "./src/app/subtopic/quizzes/quizzes.component.html":
/*!*********************************************************!*\
  !*** ./src/app/subtopic/quizzes/quizzes.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-tab-group>\n    <mat-tab label=\"Grade 1\">\n      <ng-template matTabContent>\n        <div class=\"container\">\n          The firrst content\n        </div>\n\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 2\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 3\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 4\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 5\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 6\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 7\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 8\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Grade 7\">\n      <ng-template matTabContent>\n        The Second Content\n      </ng-template>\n    </mat-tab>\n  </mat-tab-group> -->\n\n<div class=\"container\" style=\"margin-bottom:40px;position:relative\">\n  <div *ngIf=\"overlay\" id=\"overlay\" style=\"align-content: center\">\n\n        <h3 style=\"color:white;text-align: center;vertical-align: middle;line-height:200px;font-weight:400\">Would you like to begin the quiz?</h3>\n        <div class=\"row\">\n          <button (click)=\"beginQuiz()\" type=\"button\" class=\"btn  btn-outline-success\" style='margin:auto'>Begin Quiz</button>\n        </div>\n\n  </div>\n  <div *ngIf=\"overlay_finished\" id=\"overlay_finished\" style=\"align-content: center\">\n\n      <h3 style=\"color:black;text-align: center;vertical-align: middle;line-height:200px;font-weight:400\">Quiz Complete</h3>\n\n\n        <!-- <p style=\"color:white;background:#007bff;width:30%;text-align: center\">Final Score:</p> -->\n        <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;color:#a3c739\">Final Score</h3>\n        <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;\">{{questions_correct}}/{{quiz_length}}</h3>\n\n      <div class=\"row\">\n          <button (click)=\"retakeQuiz()\" type=\"button\" class=\"btn  btn-outline-success\" style='margin:auto'>Retake Quiz</button>\n        </div>\n\n</div>\n  <div class=\"row\">\n      <div class=\"col-md-9\">\n          <div class=\"hero-body\">\n            <div class=\"container\">\n              <div class=\"columns is-mobile is-centered\">\n                <div class=\"column is-half\">\n                  <div class=\"has-text-centered\">\n                    <h6\n                      class=\"subtitle has-text-centered is-uppercase is-7 navigation\"\n                    >\n\n                    </h6>\n                    <h5 class=\"subtitle has-text-centered is-5\" [innerHtml]=\"active_question.question\">\n\n                    </h5>\n                    <div (click)=\"highlightAnswer(1)\" class=\"option has-text-grey-dark\"  [ngClass]=\"user_answer == 1 ? active_answer : inactive_answer\">\n                      <span class=\"has-text-weight-bold is-size-5\">A</span>\n                      <div  [innerHtml]=\"active_question.option_a\"></div>\n                    </div>\n                    <div\n                      *ngIf=\"check_answer && active_question.option_a_explanation\"\n                      class=\"border padding rounded border-success\"\n                      [innerHTML]=\"active_question.option_a_explanation\"\n                    >\n                    <!-- {{active_question.option_a_explanation}} -->\n                    </div>\n                    <div (click)=\"highlightAnswer(2)\" class=\"option has-text-grey-dark\" [ngClass]=\"user_answer == 2 ? active_answer : inactive_answer\">\n                      <span class=\"has-text-weight-bold is-size-5\">B</span>\n                      <div  [innerHtml]=\"active_question.option_b\"></div>\n                    </div>\n                    <div\n                      *ngIf=\"check_answer && active_question.option_b_explanation\"\n                      class=\"border padding rounded border-danger\"\n                    [innerHTML]=\"active_question.option_b_explanation\"\n                    >\n                    <!-- {{active_question.option_b_explanation}} -->\n                    </div>\n\n                    <div  (click)=\"highlightAnswer(3)\" class=\"option has-text-grey-dark\" [ngClass]=\"user_answer == 3 ? active_answer : inactive_answer\">\n                      <span class=\"has-text-weight-bold is-size-5\">C</span>\n                      <div  [innerHtml]=\"active_question.option_c\"></div>\n                    </div>\n                    <div\n                      *ngIf=\"check_answer && active_question.option_c_explanation\"\n                      class=\"border padding rounded border-danger\"\n                    >\n                      <div  [innerHtml]=\"active_question.option_c_explanation\"></div>\n\n\n                    </div>\n                    <div (click)=\"highlightAnswer(4)\" class=\"option has-text-grey-dark\" [ngClass]=\"user_answer == 4 ? active_answer : inactive_answer\">\n                      <span class=\"has-text-weight-bold is-size-5\">D</span>\n                      <div  [innerHtml]=\"active_question.option_d\"></div>\n                    </div>\n                    <div\n                      *ngIf=\"check_answer && active_question.option_d_explanation\"\n                      class=\"border padding rounded border-danger\">\n                      <div  [innerHtml]=\"active_question.option_d_explanation\"></div>\n\n\n                    </div>\n\n\n                    <button\n                      type=\"button\"\n                      (click)=\"checkAnswer()\"\n                      class=\"btn btn-outline-success\"\n                      style=\"margin-top:20px;\"\n                      [disabled]=\"active_button\"\n                    >\n                      Check My Answer\n                    </button>\n                    <button\n                    *ngIf=\"questions_answered  != quiz_length\"\n                    (click)=\"nextQuestion()\"\n                      type=\"button\"\n                      class=\"btn btn-outline-success\"\n                      style=\"margin-top:20px;margin-left:10px;\"\n\n                      [disabled]=\"active_button\"\n\n                    >\n                      Next\n                    </button>\n                    <button\n                    *ngIf=\"questions_answered == quiz_length\"\n                    (click)=\"submitQuiz()\"\n                      type=\"button\"\n                      class=\"btn btn-outline-success\"\n                      style=\"margin-top:20px;margin-left:10px;\"\n\n\n\n                    >\n                      Submit Quiz\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n      </div>\n      <div class=\"col-md-2\" >\n          <div class=\"quesitions-answered\" style=\"border: 1px solid #000\">\n              <p style=\"color:white;background:#007bff;padding:6px;\">Time Left</p>\n              <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;\">{{timer | date: 'mm:ss'}}</h3>\n            </div>\n          <div class=\"quesitions-answered\" style=\"border: 1px solid #000\">\n            <p style=\"color:white;background:#007bff;padding:6px;\">Questions answered</p>\n            <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;\">{{questions_answered}}/{{quiz_length}}</h3>\n          </div>\n          <div class=\"correct\" style=\"border: 1px solid #000\">\n              <p style=\"color:white;background:#a3c739;padding:6px;\">Correctly Answered</p>\n              <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;\">{{questions_correct}}</h3>\n            </div>\n            <div class=\"wrong\" style=\"border: 1px solid #000\">\n                <p style=\"color:white;background:red;padding:6px;\">Wrongly Answered</p>\n                <h3 style=\"text-align: center;font-weight:400;margin-bottom:10px;\">{{questions_wrong}}</h3>\n              </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/subtopic/quizzes/quizzes.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/subtopic/quizzes/quizzes.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Comfortaa&display=swap\");\nbody {\n  font-family: 'Comfortaa', cursive; }\n.option {\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin-bottom: .5rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: white; }\n.option:hover {\n    background: #f7f7f7; }\n.option:hover span {\n      background: #00d1b2;\n      color: white; }\n.option:active {\n    background: #f7f7f7; }\n.option:active span {\n      background: #00d1b2;\n      color: white; }\n.option:focus-within {\n    background: #f7f7f7; }\n.option:focus-within span {\n      background: #00d1b2;\n      color: white; }\n.option:visited {\n    background: #f7f7f7; }\n.option:visited span {\n      background: #00d1b2;\n      color: white; }\n#overlay {\n  position: absolute;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  /* Black background with opacity */\n  z-index: 2;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */ }\n#overlay_finished {\n  position: absolute;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: white;\n  /* Black background with opacity */\n  z-index: 2;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */ }\n.option span {\n  border-radius: 5px;\n  border: solid 1px #00d1b2;\n  padding: .2rem .5rem 0;\n  width: 2.5rem;\n  margin-right: 1rem;\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  color: #00d1b2; }\n.navigation:before, .navigation:after {\n  content: ' - '; }\n.padding {\n  padding: 30px; }\n.active {\n  background: #f7f7f7; }\n.active span {\n    background: #00d1b2;\n    color: white; }\n.overlay {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2JvZHkxL0Rlc2t0b3AvUHJvamVjdHMvYW5nYXphLXJldmlzZWQvc3JjL2FwcC9zdWJ0b3BpYy9xdWl6emVzL3F1aXp6ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQVk7QUFNWjtFQUNFLGlDQUFpQyxFQUFBO0FBR25DO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBZmtDLEVBQUE7QUFRcEM7SUFVSSxtQkFqQnFDLEVBQUE7QUFPekM7TUFhUSxtQkFuQjJCO01Bb0IzQixZQUFZLEVBQUE7QUFkcEI7SUFrQkksbUJBekJxQyxFQUFBO0FBT3pDO01BcUJNLG1CQTNCNkI7TUE0QjdCLFlBQVksRUFBQTtBQXRCbEI7SUEwQkksbUJBakNxQyxFQUFBO0FBT3pDO01BNkJNLG1CQW5DNkI7TUFvQzdCLFlBQVksRUFBQTtBQTlCbEI7SUFrQ0ksbUJBekNxQyxFQUFBO0FBT3pDO01BcUNNLG1CQTNDNkI7TUE0QzdCLFlBQVksRUFBQTtBQUlsQjtFQUNFLGtCQUFrQjtFQUFFLG1DQUFBO0VBRXBCLFdBQVc7RUFBRSxzQ0FBQTtFQUNiLFlBQVk7RUFBRSx1Q0FBQTtFQUNkLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQ0FDQztFQUFFLGtDQUFBO0VBQ0gsVUFBVTtFQUFFLG9GQUFBO0VBQ1osZUFBZTtFQUFFLDJCQUFBLEVBQTRCO0FBRS9DO0VBQ0Usa0JBQWtCO0VBQUUsbUNBQUE7RUFFcEIsV0FBVztFQUFFLHNDQUFBO0VBQ2IsWUFBWTtFQUFFLHVDQUFBO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHVCQUFvQztFQUFFLGtDQUFBO0VBQ3RDLFVBQVU7RUFBRSxvRkFBQTtFQUNaLGVBQWU7RUFBRSwyQkFBQSxFQUE0QjtBQUUvQztFQUNFLGtCQUFrQjtFQUNsQix5QkE3RWlDO0VBOEVqQyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixjQXBGaUMsRUFBQTtBQXVGbkM7RUFFSSxjQUFjLEVBQUE7QUFJbEI7RUFDRSxhQUFZLEVBQUE7QUFHZDtFQUNFLG1CQW5HdUMsRUFBQTtBQWtHekM7SUFJSSxtQkFyRytCO0lBc0cvQixZQUFZLEVBQUE7QUFHaEI7RUFDRSxZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdWJ0b3BpYy9xdWl6emVzL3F1aXp6ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvbWZvcnRhYSZkaXNwbGF5PXN3YXAnKTtcblxuJG9wdGlvbi1iYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEwMCUpO1xuJG9wdGlvbi1iYWNrZ3JvdW5kLWhvdmVyOiBoc2woMCwgMCUsIDk3JSk7XG4kcHJpbWFyeS1jb2xvcjogaHNsKDE3MSwgMTAwJSwgNDElKTtcblxuYm9keXtcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xufVxuXG4ub3B0aW9ue1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogJG9wdGlvbi1iYWNrZ3JvdW5kO1xuXG4gICY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogJG9wdGlvbi1iYWNrZ3JvdW5kLWhvdmVyO1xuXG4gICAgICBzcGFue1xuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICB9XG4gICY6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICRvcHRpb24tYmFja2dyb3VuZC1ob3ZlcjtcblxuICAgIHNwYW57XG4gICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgJjpmb2N1cy13aXRoaW57XG4gICAgYmFja2dyb3VuZDogJG9wdGlvbi1iYWNrZ3JvdW5kLWhvdmVyO1xuXG4gICAgc3BhbntcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuICAmOnZpc2l0ZWR7XG4gICAgYmFja2dyb3VuZDogJG9wdGlvbi1iYWNrZ3JvdW5kLWhvdmVyO1xuXG4gICAgc3BhbntcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuI292ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAvLyBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45XG4gICk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG59XG4jb3ZlcmxheV9maW5pc2hlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIC8vIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xufVxuLm9wdGlvbiBzcGFue1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICRwcmltYXJ5LWNvbG9yO1xuICBwYWRkaW5nOiAuMnJlbSAuNXJlbSAwO1xuICB3aWR0aDogMi41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuLm5hdmlnYXRpb257XG4gICY6YmVmb3JlLCAmOmFmdGVye1xuICAgIGNvbnRlbnQ6ICcgLSAnO1xuICB9XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzozMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogJG9wdGlvbi1iYWNrZ3JvdW5kLWhvdmVyO1xuXG4gIHNwYW57XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG4ub3ZlcmxheSB7XG4gIGhlaWdodDoxMDAlO1xuICAvLyB3aWR0aDoxMDA7XG4gIC8vIGJhY2tncm91bmQ6XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/subtopic/quizzes/quizzes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/subtopic/quizzes/quizzes.component.ts ***!
  \*******************************************************/
/*! exports provided: QuizzesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizzesComponent", function() { return QuizzesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var alertify = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
var QuizzesComponent = /** @class */ (function () {
    function QuizzesComponent(data_service, toastr) {
        this.data_service = data_service;
        this.toastr = toastr;
        this.questions_answered = 0;
        this.questions_correct = 0;
        this.questions_wrong = 0;
        this.check_answer = false;
        this.current_question_index = 0;
        this.active_answer = "active";
        this.inactive_answer = "inactive";
        this.question_answer_status = false;
        this.active_button = true;
        this.quiz_length = 0;
        this.overlay = true;
        this.timer = 1000;
        this.overlay_finished = false;
    }
    QuizzesComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    QuizzesComponent.prototype.ngOnDestroy = function () {
    };
    QuizzesComponent.prototype.checkAnswer = function () {
        this.check_answer = true;
    };
    QuizzesComponent.prototype.getQuestions = function () {
        var _this = this;
        var subtopic_id = localStorage.getItem("subtopic");
        this.data_service.getQuizQuestions(subtopic_id).subscribe(function (response) {
            console.log(response);
            _this.quiz_length = response.length;
            _this.questions = response;
            _this.current_question_index = 0;
            _this.active_question = _this.questions[_this.current_question_index];
        });
    };
    QuizzesComponent.prototype.nextQuestion = function () {
        var _this = this;
        console.log("clicked");
        this.check_answer = false;
        // this.current_question_index += 1;
        if (this.questions[this.current_question_index].answer == this.user_answer) {
            this.questions_answered += 1;
            this.questions_correct += 1;
            this.current_question_index += 1;
            console.log(this.current_question_index);
            console.log(this.questions[this.current_question_index]);
            this.data_service.commitQuizAnswer(this.user_answer, 1, this.questions[this.current_question_index].id).subscribe(function (response) {
                console.log("section 2");
                console.log(response);
                // this.current_question_index += 1;
            });
            console.log("section 1");
        }
        else {
            this.questions_answered += 1;
            this.questions_wrong += 1;
            this.data_service.commitQuizAnswer(this.user_answer, 0, this.questions[this.current_question_index].id).subscribe(function (response) {
                console.log("section 2");
                console.log(response);
                _this.current_question_index += 1;
            });
        }
        if (this.questions[this.current_question_index] == undefined) {
            alert("You have completed the quiz");
        }
        this.user_answer = 0;
        this.question_answer_status = false;
        // this.questions_answered += 1;
        // this.current_question_index += 1;
        console.log(this.current_question_index);
        this.active_question = this.questions[this.current_question_index];
        console.log(this.active_question);
        console.log(this.current_question_index);
        // this.data_service.answerCurrentQuestion().subscribe(response => {
        //   console.log(response);
        //   this.active_question = this.questions[this.current_question_index + 1];
        // })
    };
    QuizzesComponent.prototype.startSession = function () {
        var date = Date.now();
        console.log(date);
    };
    QuizzesComponent.prototype.endSession = function () {
    };
    QuizzesComponent.prototype.highlightAnswer = function (id) {
        if (this.question_answer_status == false) {
            this.active_button = false;
            this.user_answer = id;
        }
        else {
        }
    };
    QuizzesComponent.prototype.beginQuiz = function () {
        this.overlay = false;
        this.startTimer();
    };
    QuizzesComponent.prototype.startTimer = function () {
        var _this = this;
        this.timer += Date.now();
        rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].interval(1000)
            .subscribe(function (val) {
            _this.timer -= 1000;
            console.log();
        });
    };
    QuizzesComponent.prototype.retakeQuiz = function () {
        this.current_question_index = 0;
        this.overlay = true;
        this.overlay_finished = false;
        this.questions_correct = 0;
        this.questions_answered = 0;
        this.questions_wrong = 0;
        this.active_question = this.questions[this.current_question_index];
        this.highlightAnswer(0);
    };
    QuizzesComponent.prototype.showSuccess = function () {
        this.toastr.success('Quiz has been submitted');
    };
    QuizzesComponent.prototype.submitQuiz = function () {
        var _this = this;
        console.log(localStorage.getItem('user_id'));
        this.overlay_finished = true;
        this.data_service.submitQuiz(this.questions_correct, this.quiz_length).subscribe(function (response) {
            console.log(response);
            _this.showSuccess();
        });
    };
    QuizzesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quizzes',
            template: __webpack_require__(/*! ./quizzes.component.html */ "./src/app/subtopic/quizzes/quizzes.component.html"),
            styles: [__webpack_require__(/*! ./quizzes.component.scss */ "./src/app/subtopic/quizzes/quizzes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], QuizzesComponent);
    return QuizzesComponent;
}());

var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());


/***/ }),

/***/ "./src/app/subtopic/subtopic.component.html":
/*!**************************************************!*\
  !*** ./src/app/subtopic/subtopic.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n  <div class=\"container\">\n    <div class=\"col-md-12\">\n      <div class=\"container activity-tab\">\n          <nav class=\"nav nav-tabs nav-justified\">\n              <a class=\"nav-item nav-link\" routerLink=\"../../notes/math\">\n                  <div class=\"col-md-12\">\n                      <img src=\"assets/images/math.png\" width=\"60\" height=\"60\">\n                      <h4 style=\"font-weight:300;font-size:1.2em;padding-top:10px;\">Math</h4>\n                  </div>\n              </a>\n              <a class=\"nav-item nav-link\"  routerLink=\"../../notes/english\">\n                  <div class=\"col-md-12\">\n                      <img src=\"assets/images/english.png\" width=\"60\" height=\"60\">\n                      <h4 style=\"font-weight:300;font-size:1.2em;padding-top:10px;\">English</h4>\n                  </div>\n              </a>\n              <a class=\"nav-item nav-link\"  routerLink=\"../../notes/kiswahili\">\n                  <div class=\"col-md-12\">\n                      <img src=\"assets/images/swahili.png\" width=\"60\" height=\"60\">\n                      <h4 style=\"font-weight:300;font-size:1.2em;padding-top:10px;\">Kiswahili</h4>\n                  </div>\n              </a>\n              <a class=\"nav-item nav-link\" routerLink=\"../../notes/science\">\n                  <div class=\"col-md-12\">\n                      <img src=\"assets/images/science.png\" width=\"60\" height=\"60\">\n                      <h4 style=\"font-weight:300;font-size:1.2em;padding-top:10px;\">Science</h4>\n                  </div>\n              </a>\n              <a class=\"nav-item nav-link\"  routerLink=\"../../notes/social\">\n                  <div class=\"col-md-12\">\n                      <img src=\"assets/images/social.png\" width=\"60\" height=\"60\">\n                      <h4 style=\"font-weight:300;font-size:1.2em;font-size:1.2em;padding-top:10px;\">Social Studies</h4>\n                  </div>\n              </a>\n              <a class=\"nav-item nav-link\" routerLink=\"../../notes/religion\">\n                  <div class=\"col-md-12\">\n                      <img src=\"assets/images/religion2.png\" width=\"60\" height=\"60\">\n                      <h4 style=\"font-weight:300;font-size:1.2em;font-size:1.2em;padding-top:10px;\">Religion</h4>\n                  </div>\n              </a>\n            </nav>\n      </div>\n    </div>\n\n\n</div>\n</div>\n\n<div class=\"row container padding-item\">\n  <div class=\"col-md-6 container\">\n    <label>\n      <h3 style=\"color:#a3c739;font-weight: 300;padding-top:20px;border-bottom: 2px #a3c739 solid;padding-top:8px;\">\n          Select Subtopic:\n      </h3>\n    </label>\n    <select class=\"form-control\"  (change)=\"changeSubtopic($event.target.value)\">\n      <option *ngFor=\"let subtopic of subtopics\" value=\"{{subtopic.id}}\">{{subtopic.subtopic_name}}</option>\n    </select>\n  </div>\n</div>\n<div class=\"col-md-12\">\n  <div class=\"container activity-tab\">\n    <nav class=\"nav nav-tabs nav-justified\">\n        <a class=\"nav-item nav-link\" [routerLink]=\"['./notes']\"  routerLinkActive=\"active\">\n          Notes\n\n</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"['./teacher_notes']\" routerLinkActive=\"active\">Teacher's Notes</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"['./quizzes']\" routerLinkActive=\"active\">Assignment</a>\n        <!-- <a class=\"nav-item nav-link\" [routerLink]=\"['./activity']\" routerLinkActive=\"active\">Class Activity</a> -->\n        <a class=\"nav-item nav-link\" [routerLink]=\"['./assignments']\" routerLinkActive=\"active\">Quiz</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"['./consult']\" routerLinkActive=\"active\">Ask a Teacher</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"['./forum']\" routerLinkActive=\"active\">Class Forum</a>\n      </nav>\n</div>\n</div>\n\n<div class=\"router-outlet-container\">\n  <router-outlet>\n\n  </router-outlet>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/subtopic/subtopic.component.scss":
/*!**************************************************!*\
  !*** ./src/app/subtopic/subtopic.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activity-tab {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.example-container {\n  height: 100%; }\n\n.example-sidenav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5); }\n\n.example-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n.example-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.nav-item {\n  border-bottom: #f5f5f5 3px solid; }\n\n.post-carousel {\n  background: #3ea3dc;\n  padding-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  clear: both; }\n\n.subject-block {\n  width: 165px;\n  /* background:white; */\n  align-content: center;\n  justify-content: center;\n  padding-top: 0;\n  transition: 0.2s ease-in-out;\n  display: block;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-left: 16px;\n  padding-top: 16px; }\n\n.subject-block img {\n  height: 169px;\n  width: 165px;\n  padding-top: 0;\n  text-align: center; }\n\n.subject-block:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); }\n\n.contained-image {\n  background: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  justify-content: center;\n  display: flex;\n  vertical-align: center;\n  align-content: center; }\n\n.subject-text {\n  color: white;\n  margin: 0;\n  padding-top: 15px;\n  font-weight: 300; }\n\n.padding-item {\n  margin-left: 30px;\n  margin-right: 30px; }\n\n.site-footer {\n  background-color: #26272b;\n  padding: 45px 0 20px;\n  font-size: 15px;\n  line-height: 24px;\n  color: #737373;\n  position: absolute;\n  bottom: 0;\n  width: 100%; }\n\n.site-footer hr {\n  border-top-color: #bbb;\n  opacity: 0.5; }\n\n.site-footer hr.small {\n  margin: 20px 0; }\n\n.site-footer h6 {\n  color: #fff;\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-top: 5px;\n  letter-spacing: 2px; }\n\n.site-footer a {\n  color: #737373; }\n\n.site-footer a:hover {\n  color: #3366cc;\n  text-decoration: none; }\n\n.footer-links {\n  padding-left: 0;\n  list-style: none; }\n\n.footer-links li {\n  display: block; }\n\n.footer-links a {\n  color: #737373; }\n\n.footer-links a:active, .footer-links a:focus, .footer-links a:hover {\n  color: #3366cc;\n  text-decoration: none; }\n\n.footer-links.inline li {\n  display: inline-block; }\n\n.site-footer .social-icons {\n  text-align: right; }\n\n.site-footer .social-icons a {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  margin-left: 6px;\n  margin-right: 0;\n  border-radius: 100%;\n  background-color: #33353d; }\n\n.copyright-text {\n  margin: 0; }\n\n@media (max-width: 991px) {\n  .site-footer [class^=col-] {\n    margin-bottom: 30px; } }\n\n@media (max-width: 767px) {\n  .site-footer {\n    padding-bottom: 0; }\n  .site-footer .copyright-text, .site-footer .social-icons {\n    text-align: center; } }\n\n.social-icons {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.social-icons li {\n  display: inline-block;\n  margin-bottom: 4px; }\n\n.social-icons li.title {\n  margin-right: 15px;\n  text-transform: uppercase;\n  color: #96a2b2;\n  font-weight: 700;\n  font-size: 13px; }\n\n.social-icons a {\n  background-color: #eceeef;\n  color: #818a91;\n  font-size: 16px;\n  display: inline-block;\n  line-height: 44px;\n  width: 44px;\n  height: 44px;\n  text-align: center;\n  margin-right: 8px;\n  border-radius: 100%;\n  transition: all .2s linear; }\n\n.social-icons a:active, .social-icons a:focus, .social-icons a:hover {\n  color: #fff;\n  background-color: #29aafe; }\n\n.social-icons.size-sm a {\n  line-height: 34px;\n  height: 34px;\n  width: 34px;\n  font-size: 14px; }\n\n.social-icons a.facebook:hover {\n  background-color: #3b5998; }\n\n.social-icons a.twitter:hover {\n  background-color: #00aced; }\n\n.social-icons a.linkedin:hover {\n  background-color: #007bb6; }\n\n.social-icons a.dribbble:hover {\n  background-color: #ea4c89; }\n\n@media (max-width: 767px) {\n  .social-icons li.title {\n    display: block;\n    margin-right: 0;\n    font-weight: 600; } }\n\n.router-outlet-container {\n  min-height: 40vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2JvZHkxL0Rlc2t0b3AvUHJvamVjdHMvYW5nYXphLXJldmlzZWQvc3JjL2FwcC9zdWJ0b3BpYy9zdWJ0b3BpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsWUFDRCxFQUFBOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVEsRUFBQTs7QUFHVjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVEsRUFBQTs7QUFFVjtFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLG1CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVSxFQUFBOztBQUdaO0VBQ0UsWUFBWTtFQUNaLHNCQUFBO0VBQ0EscUJBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixjQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixnQ0FBK0I7RUFDL0IsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUFBOztBQUVsQjtFQUNFLGFBQVk7RUFDWixZQUFZO0VBQ1osY0FBYTtFQUNiLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSw4QkFBMEI7RUFDMUIsV0FBVTtFQUNWLFlBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsWUFBVztFQUNYLFNBQVM7RUFDVixpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFFakI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWlCLEVBQUE7O0FBRW5CO0VBRUUseUJBQXdCO0VBQ3hCLG9CQUFtQjtFQUNuQixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFdBQVUsRUFBQTs7QUFFWjtFQUVFLHNCQUFxQjtFQUNyQixZQUNGLEVBQUE7O0FBQ0E7RUFFRSxjQUNGLEVBQUE7O0FBQ0E7RUFFRSxXQUFVO0VBQ1YsZUFBYztFQUNkLHlCQUF3QjtFQUN4QixlQUFjO0VBQ2QsbUJBQ0YsRUFBQTs7QUFDQTtFQUVFLGNBQWEsRUFBQTs7QUFFZjtFQUVFLGNBQWE7RUFDYixxQkFBb0IsRUFBQTs7QUFFdEI7RUFFRSxlQUFjO0VBQ2QsZ0JBQ0YsRUFBQTs7QUFDQTtFQUVFLGNBQ0YsRUFBQTs7QUFDQTtFQUVFLGNBQ0YsRUFBQTs7QUFDQTtFQUVFLGNBQWE7RUFDYixxQkFBb0IsRUFBQTs7QUFFdEI7RUFFRSxxQkFDRixFQUFBOztBQUNBO0VBRUUsaUJBQ0YsRUFBQTs7QUFDQTtFQUVFLFdBQVU7RUFDVixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG1CQUFrQjtFQUNsQix5QkFDRixFQUFBOztBQUNBO0VBRUUsU0FDRixFQUFBOztBQUNBO0VBRUU7SUFFRSxtQkFDRixFQUFBLEVBQUM7O0FBRUg7RUFFRTtJQUVFLGlCQUNGLEVBQUE7RUFDQTtJQUVFLGtCQUNGLEVBQUEsRUFBQzs7QUFFSDtFQUVFLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGdCQUNGLEVBQUE7O0FBQ0E7RUFFRSxxQkFBb0I7RUFDcEIsa0JBQ0YsRUFBQTs7QUFDQTtFQUVFLGtCQUFpQjtFQUNqQix5QkFBd0I7RUFDeEIsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsZUFDRixFQUFBOztBQUNBO0VBQ0UseUJBQXdCO0VBQ3hCLGNBQWE7RUFDYixlQUFjO0VBQ2QscUJBQW9CO0VBQ3BCLGlCQUFnQjtFQUNoQixXQUFVO0VBQ1YsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBR2xCLDBCQUNGLEVBQUE7O0FBQ0E7RUFFRSxXQUFVO0VBQ1YseUJBQ0YsRUFBQTs7QUFDQTtFQUVFLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsV0FBVTtFQUNWLGVBQ0YsRUFBQTs7QUFDQTtFQUVFLHlCQUNGLEVBQUE7O0FBQ0E7RUFFRSx5QkFDRixFQUFBOztBQUNBO0VBRUUseUJBQ0YsRUFBQTs7QUFDQTtFQUVFLHlCQUNGLEVBQUE7O0FBQ0E7RUFFRTtJQUVFLGNBQWE7SUFDYixlQUFjO0lBQ2QsZ0JBQ0YsRUFBQSxFQUFDOztBQUVIO0VBRUksZ0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdWJ0b3BpYy9zdWJ0b3BpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpdml0eS10YWIge1xuICBtYXJnaW4tdG9wOjIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICBoZWlnaHQ6MTAwJVxuIH1cblxuIC5leGFtcGxlLXNpZGVuYXYge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIHdpZHRoOiAyMDBweDtcbiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xuIH1cblxuIC5leGFtcGxlLWhlYWRlciB7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICB0b3A6IDA7XG4gICBsZWZ0OiAwO1xuICAgcmlnaHQ6IDA7XG4gfVxuXG4gLmV4YW1wbGUtZm9vdGVyIHtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGJvdHRvbTogMDtcbiAgIGxlZnQ6IDA7XG4gICByaWdodDogMDtcbiB9XG4gLm5hdi1pdGVtIHtcbiAgIGJvcmRlci1ib3R0b206ICNmNWY1ZjUgM3B4IHNvbGlkO1xuIH1cblxuIC5wb3N0LWNhcm91c2VsIHtcbiAgIGJhY2tncm91bmQ6ICMzZWEzZGM7XG4gICBwYWRkaW5nLWJvdHRvbTo0MHB4O1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGNsZWFyOmJvdGg7XG5cbiB9XG4gLnN1YmplY3QtYmxvY2sge1xuICAgd2lkdGg6IDE2NXB4O1xuICAgLyogYmFja2dyb3VuZDp3aGl0ZTsgKi9cbiAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBwYWRkaW5nLXRvcDowO1xuICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XG4gICBtYXJnaW4tbGVmdDoxNnB4O1xuICAgcGFkZGluZy10b3A6MTZweDtcbiB9XG4gLnN1YmplY3QtYmxvY2sgaW1nIHtcbiAgIGhlaWdodDoxNjlweDtcbiAgIHdpZHRoOiAxNjVweDtcbiAgIHBhZGRpbmctdG9wOjA7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfVxuIC5zdWJqZWN0LWJsb2NrOmhvdmVyIHtcbiAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxuIH1cbiAuY29udGFpbmVkLWltYWdlIHtcbiAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjcpO1xuICAgd2lkdGg6MTAwJTtcbiAgIGhlaWdodDo1MHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiB9XG4gLnN1YmplY3QtdGV4dCB7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6MTVweDtcbiAgZm9udC13ZWlnaHQ6MzAwO1xuIH1cbi5wYWRkaW5nLWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OjMwcHg7XG59XG4uc2l0ZS1mb290ZXJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjojMjYyNzJiO1xuICBwYWRkaW5nOjQ1cHggMCAyMHB4O1xuICBmb250LXNpemU6MTVweDtcbiAgbGluZS1oZWlnaHQ6MjRweDtcbiAgY29sb3I6IzczNzM3MztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206MDtcbiAgd2lkdGg6MTAwJTtcbn1cbi5zaXRlLWZvb3RlciBoclxue1xuICBib3JkZXItdG9wLWNvbG9yOiNiYmI7XG4gIG9wYWNpdHk6MC41XG59XG4uc2l0ZS1mb290ZXIgaHIuc21hbGxcbntcbiAgbWFyZ2luOjIwcHggMFxufVxuLnNpdGUtZm9vdGVyIGg2XG57XG4gIGNvbG9yOiNmZmY7XG4gIGZvbnQtc2l6ZToxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6NXB4O1xuICBsZXR0ZXItc3BhY2luZzoycHhcbn1cbi5zaXRlLWZvb3RlciBhXG57XG4gIGNvbG9yOiM3MzczNzM7XG59XG4uc2l0ZS1mb290ZXIgYTpob3Zlclxue1xuICBjb2xvcjojMzM2NmNjO1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cbi5mb290ZXItbGlua3NcbntcbiAgcGFkZGluZy1sZWZ0OjA7XG4gIGxpc3Qtc3R5bGU6bm9uZVxufVxuLmZvb3Rlci1saW5rcyBsaVxue1xuICBkaXNwbGF5OmJsb2NrXG59XG4uZm9vdGVyLWxpbmtzIGFcbntcbiAgY29sb3I6IzczNzM3M1xufVxuLmZvb3Rlci1saW5rcyBhOmFjdGl2ZSwuZm9vdGVyLWxpbmtzIGE6Zm9jdXMsLmZvb3Rlci1saW5rcyBhOmhvdmVyXG57XG4gIGNvbG9yOiMzMzY2Y2M7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuLmZvb3Rlci1saW5rcy5pbmxpbmUgbGlcbntcbiAgZGlzcGxheTppbmxpbmUtYmxvY2tcbn1cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zXG57XG4gIHRleHQtYWxpZ246cmlnaHRcbn1cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIGFcbntcbiAgd2lkdGg6NDBweDtcbiAgaGVpZ2h0OjQwcHg7XG4gIGxpbmUtaGVpZ2h0OjQwcHg7XG4gIG1hcmdpbi1sZWZ0OjZweDtcbiAgbWFyZ2luLXJpZ2h0OjA7XG4gIGJvcmRlci1yYWRpdXM6MTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjojMzMzNTNkXG59XG4uY29weXJpZ2h0LXRleHRcbntcbiAgbWFyZ2luOjBcbn1cbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KVxue1xuICAuc2l0ZS1mb290ZXIgW2NsYXNzXj1jb2wtXVxuICB7XG4gICAgbWFyZ2luLWJvdHRvbTozMHB4XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KVxue1xuICAuc2l0ZS1mb290ZXJcbiAge1xuICAgIHBhZGRpbmctYm90dG9tOjBcbiAgfVxuICAuc2l0ZS1mb290ZXIgLmNvcHlyaWdodC10ZXh0LC5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zXG4gIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlclxuICB9XG59XG4uc29jaWFsLWljb25zXG57XG4gIHBhZGRpbmctbGVmdDowO1xuICBtYXJnaW4tYm90dG9tOjA7XG4gIGxpc3Qtc3R5bGU6bm9uZVxufVxuLnNvY2lhbC1pY29ucyBsaVxue1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTo0cHhcbn1cbi5zb2NpYWwtaWNvbnMgbGkudGl0bGVcbntcbiAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgY29sb3I6Izk2YTJiMjtcbiAgZm9udC13ZWlnaHQ6NzAwO1xuICBmb250LXNpemU6MTNweFxufVxuLnNvY2lhbC1pY29ucyBhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2VlZWY7XG4gIGNvbG9yOiM4MThhOTE7XG4gIGZvbnQtc2l6ZToxNnB4O1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6NDRweDtcbiAgd2lkdGg6NDRweDtcbiAgaGVpZ2h0OjQ0cHg7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6OHB4O1xuICBib3JkZXItcmFkaXVzOjEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjphbGwgLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjphbGwgLjJzIGxpbmVhclxufVxuLnNvY2lhbC1pY29ucyBhOmFjdGl2ZSwuc29jaWFsLWljb25zIGE6Zm9jdXMsLnNvY2lhbC1pY29ucyBhOmhvdmVyXG57XG4gIGNvbG9yOiNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IzI5YWFmZVxufVxuLnNvY2lhbC1pY29ucy5zaXplLXNtIGFcbntcbiAgbGluZS1oZWlnaHQ6MzRweDtcbiAgaGVpZ2h0OjM0cHg7XG4gIHdpZHRoOjM0cHg7XG4gIGZvbnQtc2l6ZToxNHB4XG59XG4uc29jaWFsLWljb25zIGEuZmFjZWJvb2s6aG92ZXJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk4XG59XG4uc29jaWFsLWljb25zIGEudHdpdHRlcjpob3Zlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGFjZWRcbn1cbi5zb2NpYWwtaWNvbnMgYS5saW5rZWRpbjpob3Zlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiYjZcbn1cbi5zb2NpYWwtaWNvbnMgYS5kcmliYmJsZTpob3Zlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNlYTRjODlcbn1cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KVxue1xuICAuc29jaWFsLWljb25zIGxpLnRpdGxlXG4gIHtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDowO1xuICAgIGZvbnQtd2VpZ2h0OjYwMFxuICB9XG59XG4ucm91dGVyLW91dGxldC1jb250YWluZXIge1xuXG4gICAgbWluLWhlaWdodDogNDB2aCAgO1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/subtopic/subtopic.component.ts":
/*!************************************************!*\
  !*** ./src/app/subtopic/subtopic.component.ts ***!
  \************************************************/
/*! exports provided: SubtopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtopicComponent", function() { return SubtopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var SubtopicComponent = /** @class */ (function () {
    function SubtopicComponent(activatedRoute, data_service, spinner, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.data_service = data_service;
        this.spinner = spinner;
        this.router = router;
        this.topic = localStorage.getItem('topic');
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this.subject = params.subject_name;
            _this.subject_name = params.subject_name;
        });
        this.loadSubtopics();
    }
    SubtopicComponent.prototype.ngOnInit = function () {
        this.spinner.hide();
        // this.getInitialNotes();
    };
    // getInitialNotes(){
    //   this.subject_data['subtopic_id'] = 1;
    //   this.data_service.getNotes(this.subject_data).subscribe(response => {
    //     console.log(response);
    //     this.subject_fillable = response[0];
    //   })
    // }
    SubtopicComponent.prototype.changeSubtopic = function (e) {
        this.subtopic_id = e;
        console.log(this.subtopic_id);
        localStorage.setItem('subtopic', this.subtopic_id);
        this.router.navigate(['./subtopic/notes']);
    };
    SubtopicComponent.prototype.loadSubtopics = function () {
        var _this = this;
        this.data_service.getSubtopics(this.topic).subscribe(function (response) {
            console.log(response);
            _this.subtopics = response;
            _this.subtopic_id = response[0].id;
            console.log(_this.subtopic_id);
            // this.goToNotesPage(this.subtopic_id);
        });
    };
    SubtopicComponent.prototype.fetchNotes = function (subtopic_id) {
    };
    SubtopicComponent.prototype.goToPage = function (subject_id, subject_name) {
        this.spinner.show();
        console.log("clicked");
        console.log(subject_id);
        localStorage.setItem('subject_id', subject_id);
        this.router.navigateByUrl("notes");
    };
    // goToNotesPage(subtopic_id){
    //   this.spinner.show();
    //   localStorage.setItem('subtopic', subtopic_id);
    //   console.log("clicked");
    //   this.router.navigate(["/subtopic/"+ this.subject + "/notes"]);
    //   this.spinner.hide();
    // }
    SubtopicComponent.prototype.goToQuizzes = function () {
    };
    SubtopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subtopic',
            template: __webpack_require__(/*! ./subtopic.component.html */ "./src/app/subtopic/subtopic.component.html"),
            styles: [__webpack_require__(/*! ./subtopic.component.scss */ "./src/app/subtopic/subtopic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubtopicComponent);
    return SubtopicComponent;
}());



/***/ }),

/***/ "./src/app/subtopic/subtopic.module.ts":
/*!*********************************************!*\
  !*** ./src/app/subtopic/subtopic.module.ts ***!
  \*********************************************/
/*! exports provided: SubtopicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtopicModule", function() { return SubtopicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subtopic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subtopic.component */ "./src/app/subtopic/subtopic.component.ts");
/* harmony import */ var _nested_notes_nested_notes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested-notes/nested-notes.component */ "./src/app/subtopic/nested-notes/nested-notes.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/subtopic/forum/forum.component.ts");
/* harmony import */ var _teacher_notes_teacher_notes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher-notes/teacher-notes.component */ "./src/app/subtopic/teacher-notes/teacher-notes.component.ts");
/* harmony import */ var _quizzes_quizzes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quizzes/quizzes.component */ "./src/app/subtopic/quizzes/quizzes.component.ts");
/* harmony import */ var _query_query_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./query/query.component */ "./src/app/subtopic/query/query.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assignments/assignments.component */ "./src/app/subtopic/assignments/assignments.component.ts");














var routes = [
    {
        path: ':subject_name',
        component: _subtopic_component__WEBPACK_IMPORTED_MODULE_5__["SubtopicComponent"],
        children: [
            {
                path: 'notes',
                component: _nested_notes_nested_notes_component__WEBPACK_IMPORTED_MODULE_6__["NestedNotesComponent"],
            },
            {
                path: 'teacher_notes',
                component: _teacher_notes_teacher_notes_component__WEBPACK_IMPORTED_MODULE_8__["TeacherNotesComponent"]
            },
            {
                path: 'quizzes',
                component: _quizzes_quizzes_component__WEBPACK_IMPORTED_MODULE_9__["QuizzesComponent"]
            },
            {
                path: 'consult',
                component: _query_query_component__WEBPACK_IMPORTED_MODULE_10__["QueryComponent"]
            },
            {
                path: 'forum',
                component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_7__["ForumComponent"]
            },
            {
                path: 'assignments',
                component: _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_13__["AssignmentsComponent"]
            }
        ]
    }
];
var SubtopicModule = /** @class */ (function () {
    function SubtopicModule() {
    }
    SubtopicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _subtopic_component__WEBPACK_IMPORTED_MODULE_5__["SubtopicComponent"],
                _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_13__["AssignmentsComponent"],
                _nested_notes_nested_notes_component__WEBPACK_IMPORTED_MODULE_6__["NestedNotesComponent"],
                _query_query_component__WEBPACK_IMPORTED_MODULE_10__["QueryComponent"],
                _quizzes_quizzes_component__WEBPACK_IMPORTED_MODULE_9__["QuizzesComponent"],
                _forum_forum_component__WEBPACK_IMPORTED_MODULE_7__["ForumComponent"],
                _teacher_notes_teacher_notes_component__WEBPACK_IMPORTED_MODULE_8__["TeacherNotesComponent"],
                _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_13__["AssignmentsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], SubtopicModule);
    return SubtopicModule;
}());



/***/ }),

/***/ "./src/app/subtopic/teacher-notes/teacher-notes.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/subtopic/teacher-notes/teacher-notes.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-md-12\" [innerHTML]=\"notes\">\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/subtopic/teacher-notes/teacher-notes.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/subtopic/teacher-notes/teacher-notes.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnRvcGljL3RlYWNoZXItbm90ZXMvdGVhY2hlci1ub3Rlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/subtopic/teacher-notes/teacher-notes.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/subtopic/teacher-notes/teacher-notes.component.ts ***!
  \*******************************************************************/
/*! exports provided: TeacherNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherNotesComponent", function() { return TeacherNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-service.service */ "./src/app/data-service.service.ts");



var TeacherNotesComponent = /** @class */ (function () {
    function TeacherNotesComponent(data_service) {
        this.data_service = data_service;
    }
    TeacherNotesComponent.prototype.ngOnInit = function () {
        // let subtopic_id = localStorage.getItem('subtopic_id');
        this.getTeacherNotes();
    };
    TeacherNotesComponent.prototype.ngOnDestroy = function () {
    };
    TeacherNotesComponent.prototype.startSession = function () {
    };
    TeacherNotesComponent.prototype.endSession = function () {
    };
    TeacherNotesComponent.prototype.getTeacherNotes = function () {
        var _this = this;
        var subtopic_id = localStorage.getItem('subtopic');
        console.log(subtopic_id);
        this.data_service.getTeachersNotes(subtopic_id).subscribe(function (response) {
            console.log("My notes response" + response);
            _this.subject_fillable = response;
            _this.notes = "";
            _this.notes = response['notes'];
            console.log(_this.notes);
            console.log(response);
        });
    };
    TeacherNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teacher-notes',
            template: __webpack_require__(/*! ./teacher-notes.component.html */ "./src/app/subtopic/teacher-notes/teacher-notes.component.html"),
            styles: [__webpack_require__(/*! ./teacher-notes.component.scss */ "./src/app/subtopic/teacher-notes/teacher-notes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
    ], TeacherNotesComponent);
    return TeacherNotesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=subtopic-subtopic-module.js.map