(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~subtopic-subtopic-module~teacher-dash-teacher-dash-module"],{

/***/ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js ***!
  \**************************************************************************************/
/*! exports provided: CKEditorComponent, CKEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorComponent", function() { return CKEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorModule", function() { return CKEditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
/**
 * Basic typings for the CKEditor5 elements.
 */
var CKEditor5;
(function (CKEditor5) {
    /**
     * The CKEditor5 editor constructor.
     * @record
     */
    function EditorConstructor() { }
    CKEditor5.EditorConstructor = EditorConstructor;
    /**
     * The CKEditor5 editor config.
     * @record
     */
    function Config() { }
    CKEditor5.Config = Config;
    /**
     * The event object passed to CKEditor5 event callbacks.
     *
     * See https://ckeditor.com/docs/ckeditor5/latest/api/module_utils_eventinfo-EventInfo.html
     * @record
     * @template EventName
     */
    function EventInfo() { }
    CKEditor5.EventInfo = EventInfo;
    /**
     * The base Editor class.
     *
     * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html
     * @record
     */
    function BaseEditor() { }
    CKEditor5.BaseEditor = BaseEditor;
    /**
     * The CKEditor5 DataApi interface.
     *
     * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_utils_dataapimixin-DataApi.html.
     * @record
     */
    function DataApi() { }
    CKEditor5.DataApi = DataApi;
    /**
     * A CKEditor5 editor that implements the
     * [DataApi interface](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_utils_dataapimixin-DataApi.html).
     * E.g. the `ClassicEditor`, `InlineEditor`, etc.
     * @record
     */
    function Editor() { }
    CKEditor5.Editor = Editor;
})(CKEditor5 || (CKEditor5 = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CKEditorComponent = /** @class */ (function () {
    function CKEditorComponent(elementRef, ngZone) {
        /**
         * The configuration of the editor.
         * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
         * to learn more.
         */
        this.config = {};
        /**
         * The initial data of the editor. Useful when not using the ngModel.
         * See https://angular.io/api/forms/NgModel to learn more.
         */
        this.data = '';
        /**
         * Tag name of the editor component.
         *
         * The default tag is 'div'.
         */
        this.tagName = 'div';
        /**
         * Fires when the editor is ready. It corresponds with the `editor#ready`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#event-ready
         * event.
         */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when the content of the editor has changed. It corresponds with the `editor.model.document#change`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_document-Document.html#event-change
         * event.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when the editing view of the editor is blurred. It corresponds with the `editor.editing.view.document#blur`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:blur
         * event.
         */
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when the editing view of the editor is focused. It corresponds with the `editor.editing.view.document#focus`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:focus
         * event.
         */
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The instance of the editor created by this component.
         */
        this.editorInstance = null;
        /**
         * If the component is read–only before the editor instance is created, it remembers that state,
         * so the editor can become read–only once it is ready.
         */
        this.initialIsDisabled = false;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
    }
    Object.defineProperty(CKEditorComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.editorInstance) {
                return this.editorInstance.isReadOnly;
            }
            return this.initialIsDisabled;
        },
        /**
         * When set `true`, the editor becomes read-only.
         * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#member-isReadOnly
         * to learn more.
         */
        set: /**
         * When set `true`, the editor becomes read-only.
         * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#member-isReadOnly
         * to learn more.
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.setDisabledState(isDisabled);
        },
        enumerable: true,
        configurable: true
    });
    // Implementing the AfterViewInit interface.
    // Implementing the AfterViewInit interface.
    /**
     * @return {?}
     */
    CKEditorComponent.prototype.ngAfterViewInit = 
    // Implementing the AfterViewInit interface.
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.createEditor();
        }));
    };
    // Implementing the OnDestroy interface.
    // Implementing the OnDestroy interface.
    /**
     * @return {?}
     */
    CKEditorComponent.prototype.ngOnDestroy = 
    // Implementing the OnDestroy interface.
    /**
     * @return {?}
     */
    function () {
        if (this.editorInstance) {
            this.editorInstance.destroy();
            this.editorInstance = null;
        }
    };
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} value
     * @return {?}
     */
    CKEditorComponent.prototype.writeValue = 
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // This method is called with the `null` value when the form resets.
        // A component's responsibility is to restore to the initial state.
        if (value === null) {
            value = '';
        }
        // If already initialized.
        if (this.editorInstance) {
            this.editorInstance.setData(value);
        }
        // If not, wait for it to be ready; store the data.
        else {
            this.data = value;
            // If the editor element is already available, then update its content.
            // If the ngModel is used then the editor element should be updated directly here.
            if (this.editorElement) {
                this.editorElement.innerHTML = this.data;
            }
        }
    };
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} callback
     * @return {?}
     */
    CKEditorComponent.prototype.registerOnChange = 
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.cvaOnChange = callback;
    };
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} callback
     * @return {?}
     */
    CKEditorComponent.prototype.registerOnTouched = 
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.cvaOnTouched = callback;
    };
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CKEditorComponent.prototype.setDisabledState = 
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        // If already initialized
        if (this.editorInstance) {
            this.editorInstance.isReadOnly = isDisabled;
        }
        // If not, wait for it to be ready; store the state.
        else {
            this.initialIsDisabled = isDisabled;
        }
    };
    /**
     * Creates the editor instance, sets initial editor data, then integrates
     * the editor with the Angular component. This method does not use the `editor.setData()`
     * because of the issue in the collaboration mode (#6).
     */
    /**
     * Creates the editor instance, sets initial editor data, then integrates
     * the editor with the Angular component. This method does not use the `editor.setData()`
     * because of the issue in the collaboration mode (#6).
     * @private
     * @return {?}
     */
    CKEditorComponent.prototype.createEditor = /**
     * Creates the editor instance, sets initial editor data, then integrates
     * the editor with the Angular component. This method does not use the `editor.setData()`
     * because of the issue in the collaboration mode (#6).
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var element = document.createElement(this.tagName);
        this.editorElement = element;
        if (this.data && this.config.initialData) {
            throw new Error('Editor data should be provided either using `config.initialData` or `data` properties.');
        }
        // Merge two possible ways of providing data into the `config.initialData` field.
        /** @type {?} */
        var config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.config, { initialData: this.config.initialData || this.data || '' });
        this.elementRef.nativeElement.appendChild(element);
        return (/** @type {?} */ (this.editor)).create(element, config)
            .then((/**
         * @param {?} editor
         * @return {?}
         */
        function (editor) {
            _this.editorInstance = editor;
            if (_this.initialIsDisabled) {
                editor.isReadOnly = _this.initialIsDisabled;
            }
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.ready.emit(editor);
            }));
            _this.setUpEditorEvents(editor);
        }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.error(err.stack);
        }));
    };
    /**
     * Integrates the editor with the component by attaching related event listeners.
     */
    /**
     * Integrates the editor with the component by attaching related event listeners.
     * @private
     * @param {?} editor
     * @return {?}
     */
    CKEditorComponent.prototype.setUpEditorEvents = /**
     * Integrates the editor with the component by attaching related event listeners.
     * @private
     * @param {?} editor
     * @return {?}
     */
    function (editor) {
        var _this = this;
        /** @type {?} */
        var modelDocument = editor.model.document;
        /** @type {?} */
        var viewDocument = editor.editing.view.document;
        modelDocument.on('change:data', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                if (_this.cvaOnChange) {
                    /** @type {?} */
                    var data = editor.getData();
                    _this.cvaOnChange(data);
                }
                _this.change.emit({ event: evt, editor: editor });
            }));
        }));
        viewDocument.on('focus', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.focus.emit({ event: evt, editor: editor });
            }));
        }));
        viewDocument.on('blur', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                if (_this.cvaOnTouched) {
                    _this.cvaOnTouched();
                }
                _this.blur.emit({ event: evt, editor: editor });
            }));
        }));
    };
    CKEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ckeditor',
                    template: '<ng-template></ng-template>',
                    // Integration with @angular/forms.
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return CKEditorComponent; })),
                            multi: true,
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    CKEditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CKEditorComponent.propDecorators = {
        editor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        tagName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return CKEditorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CKEditorModule = /** @class */ (function () {
    function CKEditorModule() {
    }
    CKEditorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [CKEditorComponent],
                    exports: [CKEditorComponent]
                },] }
    ];
    return CKEditorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ckeditor-ckeditor5-angular.js.map

/***/ })

}]);
//# sourceMappingURL=default~subtopic-subtopic-module~teacher-dash-teacher-dash-module.js.map