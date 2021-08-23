(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@fluentui/react"), require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@fluentui/react", "prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["PasswordChangeBox"] = factory(require("@fluentui/react"), require("prop-types"), require("react"));
	else
		root["PasswordChangeBox"] = factory(root["FluentUIReact"], root["PropTypes"], root["React"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__11__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordChangeBox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var PasswordChangeBox = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(PasswordChangeBox, _React$Component);

  var _super = _createSuper(PasswordChangeBox);

  function PasswordChangeBox(props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordChangeBox);

    return _super.call(this, props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordChangeBox, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: this._computeContainerCssClass()
      }, this._renderTitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: "lvd-passwordchange-box-fields-container"
      }, this._renderExistingPasswordInputField(), this._renderMainPasswordInputField(), this._renderPasswordConfirmationField()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: "lvd-passwordchange-box-button-container"
      }, this._renderPasswordChangeActionButton(), this._renderBackActionButtonButton()));
    }
  }, {
    key: "_computeContainerCssClass",
    value: function _computeContainerCssClass() {
      var className = 'lvd-passwordchange-box';

      if (this._useFramedLayout()) {
        className = "".concat(className, " lvd-passwordchange-box-framed");
      }

      return className;
    }
  }, {
    key: "_useFramedLayout",
    value: function _useFramedLayout() {
      return this.props.hasOwnProperty('framed') ? !!this.props.framed : true;
    }
  }, {
    key: "_renderTitle",
    value: function _renderTitle() {
      var titleProps = this._getTitleProps();

      return titleProps.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h4", {
        className: "lvd-passwordchange-box-header"
      }, titleProps.text);
    }
  }, {
    key: "_getTitleProps",
    value: function _getTitleProps() {
      var titleProps = this.props.titleProps || {};
      return {
        show: titleProps.hasOwnProperty('show') ? !!titleProps.show : true,
        text: titleProps.text || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.title
      };
    }
  }, {
    key: "_renderExistingPasswordInputField",
    value: function _renderExistingPasswordInputField() {
      if (this._isExistingPasswordRequired()) {
        var existingPasswordElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.TextField, {
          type: "password",
          label: "Current password:",
          placeholder: "Please enter your current password",
          canRevealPassword: this._canReveal(),
          required: true
        });
        return this._renderField(existingPasswordElement);
      } else {
        return null;
      }
    }
  }, {
    key: "_canReveal",
    value: function _canReveal() {
      return this.props.hasOwnProperty('canReveal') ? !!this.props.canReveal : true;
    }
  }, {
    key: "_renderField",
    value: function _renderField(element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: "lvd-passwordchange-box-field"
      }, element);
    }
  }, {
    key: "_isExistingPasswordRequired",
    value: function _isExistingPasswordRequired() {
      return !!this.props.requireExistingPassword;
    }
  }, {
    key: "_renderMainPasswordInputField",
    value: function _renderMainPasswordInputField() {
      var newPasswordElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(lvd_fluentui_passwordbox__WEBPACK_IMPORTED_MODULE_8__.PasswordBox, {
        label: "New password:",
        placeholder: "Please enter your new password",
        canReveal: this._canReveal(),
        required: true
      });
      return this._renderField(newPasswordElement);
    }
  }, {
    key: "_renderPasswordConfirmationField",
    value: function _renderPasswordConfirmationField() {
      var passwordConfirmationElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.TextField, {
        type: "password",
        label: "Password confirmation:",
        placeholder: "Please confirm new password",
        canRevealPassword: this._canReveal(),
        required: true
      });
      return this._renderField(passwordConfirmationElement);
    }
  }, {
    key: "_renderPasswordChangeActionButton",
    value: function _renderPasswordChangeActionButton() {
      var enableSubmit = true;

      var passwordChangeButtonProps = this._getPasswordChangeActionButtonProps();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, {
        disabled: !enableSubmit,
        className: "lvd-passwordchange-box-btn lvd-passwordchange-box-passwordchange-btn",
        text: passwordChangeButtonProps.label
      });
    }
  }, {
    key: "_getPasswordChangeActionButtonProps",
    value: function _getPasswordChangeActionButtonProps() {
      var passwordChangeButtonProps = this.props.passwordChangeButtonProps || {};
      return {
        label: passwordChangeButtonProps.label || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.passwordChangeButton.label
      };
    }
  }, {
    key: "_renderBackActionButtonButton",
    value: function _renderBackActionButtonButton() {
      var backActionButtonprops = this._getBackActionButtonProps();

      return backActionButtonprops.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.DefaultButton, {
        primary: false,
        className: "lvd-passwordchange-box-btn lvd-passwordchange-box-back-btn",
        text: backActionButtonprops.label,
        disabled: false
      });
    }
  }, {
    key: "_getBackActionButtonProps",
    value: function _getBackActionButtonProps() {
      var backActionButtonProps = this.props.backActionButtonProps || {};
      return {
        show: backActionButtonProps.hasOwnProperty('show') ? !!backActionButtonProps.show : true,
        label: backActionButtonProps.label || _PasswordChangeBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.backActionButton.label
      };
    }
  }]);

  return PasswordChangeBox;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));


PasswordChangeBox.propTypes = {
  framed: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  requireExistingPassword: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  canReveal: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  underlined: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  titleProps: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  passwordChangeButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  backActionButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  onPasswordChangeValuesChanged: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  onPasswordChangeBoxInitialized: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  onPasswordChangeBoxDisposed: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 11 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(13), __webpack_require__(12), __webpack_require__(11));
	else {}
})(self, function(__WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__11__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_882__) => {

__nested_webpack_require_882__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_882__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordBox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_882__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_882__(4);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_882__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_882__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_882__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_882__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_882__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_882__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_882__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_882__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_882__(13);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__nested_webpack_require_882__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_882__(14);
/* harmony import */ var _StrengthIndicatorStyles_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_882__(15);
/* harmony import */ var _PasswordStrengthIndicator_jsx__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_882__(16);
/* harmony import */ var _PasswordStatusCallout_jsx__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_882__(22);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var PasswordBox = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(PasswordBox, _React$Component);

  var _super = _createSuper(PasswordBox);

  function PasswordBox(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordBox);

    _this = _super.call(this, props);
    _this.state = {
      password: '',
      hasInteracted: false,
      showRulesCallout: true,
      canShowRulesCallout: false
    };
    _this._handlePasswordFocused = _this._handlePasswordFocused.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handlePasswordChanged = _this._handlePasswordChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._getPasswordFieldErrorMessage = _this._getPasswordFieldErrorMessage.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handlePasswordStatusCalloutDismiss = _this._handlePasswordStatusCalloutDismiss.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._passwordBoxContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createRef();
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordBox, [{
    key: "_handlePasswordChanged",
    value: function _handlePasswordChanged(event) {
      var _this2 = this;

      event.preventDefault();
      var oldPassword = this.state.password;
      this.setState({
        password: event.target.value,
        hasInteracted: true
      }, function () {
        return _this2._raisePasswordChanged(oldPassword);
      });
    }
  }, {
    key: "_raisePasswordChanged",
    value: function _raisePasswordChanged(oldValue) {
      var newValue = this.state.password;

      if (this.props.onPasswordChanged != null) {
        this.props.onPasswordChanged(oldValue, newValue);
      }
    }
  }, {
    key: "_getPasswordFieldErrorMessage",
    value: function _getPasswordFieldErrorMessage(value) {
      var message = this._getEmptyErrorMessage();

      return this._displayPasswordErrorMessages(value) ? message : '';
    }
  }, {
    key: "_displayPasswordErrorMessages",
    value: function _displayPasswordErrorMessages(value) {
      return !this._isPasswordFilledIn(value) && this._displayFieldErrorMessages() && this._isRequired();
    }
  }, {
    key: "_isPasswordFilledIn",
    value: function _isPasswordFilledIn(value) {
      return value != null && value.length > 0;
    }
  }, {
    key: "_displayFieldErrorMessages",
    value: function _displayFieldErrorMessages() {
      return !!this.state.hasInteracted;
    }
  }, {
    key: "_getEmptyErrorMessage",
    value: function _getEmptyErrorMessage() {
      return this.props.emptyErrorMessage || _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.messages.empty;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        canShowRulesCallout: true
      });

      if (this.props.onPasswordBoxInitialized != null) {
        this.props.onPasswordBoxInitialized();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var value = this.state.password;

      if (this.props.onPasswordBoxDisposed != null) {
        this.props.onPasswordBoxDisposed(value);
      }
    }
  }, {
    key: "_handlePasswordFocused",
    value: function _handlePasswordFocused(event) {
      event.preventDefault();

      if (!!this.state.password) {
        this.setState({
          showRulesCallout: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordbox-root",
        ref: this._passwordBoxContainerRef
      }, this._renderPasswordInputField(), this._renderPasswordStrengthIndicator(), this._renderPasswordRulesCallout());
    }
  }, {
    key: "_renderPasswordInputField",
    value: function _renderPasswordInputField() {
      var label = this._getLabel();

      var placeholder = this._getPlaceholder();

      var canReveal = this._canReveal();

      var disabled = this._isDisabled();

      var required = this._isRequired();

      var className = this._getClassName();

      var underlined = this._isUnderlined();

      var readOnly = this._isReadOnly();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.TextField, {
        type: "password",
        label: label,
        placeholder: placeholder,
        canRevealPassword: canReveal,
        disabled: disabled,
        required: required,
        onChange: this._handlePasswordChanged,
        onFocus: this._handlePasswordFocused,
        onGetErrorMessage: this._getPasswordFieldErrorMessage,
        className: className,
        underlined: underlined,
        readOnly: readOnly
      });
    }
  }, {
    key: "_getLabel",
    value: function _getLabel() {
      return this.props.label || _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.label;
    }
  }, {
    key: "_getPlaceholder",
    value: function _getPlaceholder() {
      return this.props.placeholder || _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.placeholder;
    }
  }, {
    key: "_canReveal",
    value: function _canReveal() {
      return this.props.hasOwnProperty('canReveal') ? !!this.props.canReveal : true;
    }
  }, {
    key: "_isRequired",
    value: function _isRequired() {
      return !!this.props.required;
    }
  }, {
    key: "_isDisabled",
    value: function _isDisabled() {
      return !!this.props.disabled;
    }
  }, {
    key: "_getClassName",
    value: function _getClassName() {
      return this.props.className || '';
    }
  }, {
    key: "_isUnderlined",
    value: function _isUnderlined() {
      return !!this.props.underlined;
    }
  }, {
    key: "_isReadOnly",
    value: function _isReadOnly() {
      return !!this.props.readOnly;
    }
  }, {
    key: "_renderPasswordStrengthIndicator",
    value: function _renderPasswordStrengthIndicator() {
      var strengthProps = this._getPasswordStrengthProps();

      var showIndicator = !!strengthProps.style && strengthProps.style != _StrengthIndicatorStyles_js__WEBPACK_IMPORTED_MODULE_10__.default.none && strengthProps.level != null;
      return showIndicator && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_PasswordStrengthIndicator_jsx__WEBPACK_IMPORTED_MODULE_11__.default, {
        style: strengthProps.style,
        strengthPercent: strengthProps.percent,
        strengthLevel: strengthProps.level,
        strengthText: strengthProps.text
      });
    }
  }, {
    key: "_getPasswordStrengthProps",
    value: function _getPasswordStrengthProps() {
      var strengthProps = this.props.passwordStrengthProps || {};
      return {
        style: strengthProps.style || _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.strength.style,
        percent: strengthProps.percent || 0,
        level: strengthProps.level || null,
        text: strengthProps.text || null
      };
    }
  }, {
    key: "_renderPasswordRulesCallout",
    value: function _renderPasswordRulesCallout() {
      var passwordRulesProps = this._getPasswordRulesProps();

      var showRulesCallout = this.state.canShowRulesCallout && this.state.showRulesCallout && passwordRulesProps.rules.length > 0;
      return showRulesCallout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_PasswordStatusCallout_jsx__WEBPACK_IMPORTED_MODULE_12__.default, {
        rules: passwordRulesProps.rules,
        iconProps: passwordRulesProps.icons,
        containerProps: passwordRulesProps.container,
        titleProps: passwordRulesProps.title,
        target: this._passwordBoxContainerRef.current,
        onDismiss: this._handlePasswordStatusCalloutDismiss
      });
    }
  }, {
    key: "_getPasswordRulesProps",
    value: function _getPasswordRulesProps() {
      var passwordRulesProps = this.props.passwordRulesProps || {};
      return {
        rules: passwordRulesProps.rules || [],
        container: Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.container, passwordRulesProps.container || {}),
        title: Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.title, passwordRulesProps.title || {}),
        icons: Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.icons, passwordRulesProps.icons || {})
      };
    }
  }, {
    key: "_handlePasswordStatusCalloutDismiss",
    value: function _handlePasswordStatusCalloutDismiss() {
      this.setState({
        showRulesCallout: false
      });
    }
  }]);

  return PasswordBox;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));


PasswordBox.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  canReveal: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  underlined: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  emptyErrorMessage: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  passwordStrengthProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  passwordRulesProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  onPasswordChanged: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onPasswordBoxInitialized: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onPasswordBoxDisposed: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_14187__) => {

__nested_webpack_require_14187__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_14187__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_14668__) => {

__nested_webpack_require_14668__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_14668__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_15549__) => {

__nested_webpack_require_15549__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_15549__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_16053__) => {

__nested_webpack_require_16053__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_16053__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_16053__(7);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_16937__) => {

__nested_webpack_require_16937__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_16937__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_17442__) => {

__nested_webpack_require_17442__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_17442__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_17442__(9);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_17442__(5);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_18403__) => {

__nested_webpack_require_18403__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_18403__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_19134__) => {

__nested_webpack_require_19134__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_19134__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_19934__) => {

__nested_webpack_require_19934__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_19934__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_19934__(13);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_19934__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_19934__(15);


var PasswordBoxDefaults = {
  label: 'Password:',
  placeholder: 'Please fill in the password',
  messages: {
    empty: 'You must fill in the password'
  },
  strength: {
    style: _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_1__.default.none
  },
  rules: {
    container: {
      calloutMaxWidth: 0,
      calloutMinWidth: 0,
      calloutWidth: 0,
      gapSpace: 5,
      isBeakVisible: true,
      beakWidth: 15,
      directionalHint: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.bottomCenter,
      style: {
        width: 300,
        padding: 10
      }
    },
    title: {
      text: 'Password rules',
      visible: true,
      variant: 'mediumPlus',
      style: {
        marginBottom: 0,
        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semilight
      }
    },
    icons: {
      metIcon: 'CheckMark',
      notMetIcon: 'Cancel'
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordBoxDefaults);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_21602__) => {

__nested_webpack_require_21602__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_21602__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var StrengthIndicatorStyles = {
  bar: 'bar',
  intermittentBar: 'intermittentBar',
  textOnly: 'textOnly',
  none: 'none'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StrengthIndicatorStyles);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_22124__) => {

__nested_webpack_require_22124__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_22124__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordStrengthIndicator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22124__(17);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_22124__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_22124__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_22124__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_22124__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_22124__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_22124__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_22124__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_22124__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_22124__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_22124__(15);
/* harmony import */ var _strengthIndicatorStyles_Bar_jsx__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_22124__(18);
/* harmony import */ var _strengthIndicatorStyles_IntermittentBar_jsx__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_22124__(20);
/* harmony import */ var _strengthIndicatorStyles_TextOnly_jsx__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_22124__(19);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var PasswordStrengthIndicator = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(PasswordStrengthIndicator, _React$Component);

  var _super = _createSuper(PasswordStrengthIndicator);

  function PasswordStrengthIndicator(props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, PasswordStrengthIndicator);

    return _super.call(this, props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(PasswordStrengthIndicator, [{
    key: "render",
    value: function render() {
      var style = this._getStyle();

      var strengthText = this._getStrengthText();

      var strengthLevel = this._getStrengthLevel();

      var strengthPercent = this._getStrengthPercent(strengthLevel);

      var StrengthIndicatorStyleRenderer = this._getStyleRenderer(style);

      if (!StrengthIndicatorStyleRenderer) {
        throw new Error("No renderer found for style ".concat(style));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(StrengthIndicatorStyleRenderer, {
        strengthPercent: strengthPercent,
        strengthText: strengthText,
        strengthLevel: strengthLevel
      });
    }
  }, {
    key: "_getStyle",
    value: function _getStyle() {
      return this.props.style || _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_8__.default.textOnly;
    }
  }, {
    key: "_getStrengthText",
    value: function _getStrengthText() {
      return this.props.strengthText;
    }
  }, {
    key: "_getStrengthPercent",
    value: function _getStrengthPercent(currentStrengthLevel) {
      return Math.ceil(this.props.strengthPercent || currentStrengthLevel.defaultPercent);
    }
  }, {
    key: "_getStrengthLevel",
    value: function _getStrengthLevel() {
      return this.props.strengthLevel;
    }
  }, {
    key: "_getStyleRenderer",
    value: function _getStyleRenderer(style) {
      var _mapping;

      var mapping = (_mapping = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_mapping, _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_8__.default.textOnly, _strengthIndicatorStyles_TextOnly_jsx__WEBPACK_IMPORTED_MODULE_11__.default), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_mapping, _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_8__.default.bar, _strengthIndicatorStyles_Bar_jsx__WEBPACK_IMPORTED_MODULE_9__.default), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_mapping, _StrengthIndicatorStyles__WEBPACK_IMPORTED_MODULE_8__.default.intermittentBar, _strengthIndicatorStyles_IntermittentBar_jsx__WEBPACK_IMPORTED_MODULE_10__.default), _mapping);
      return mapping.hasOwnProperty(style) ? mapping[style] : null;
    }
  }]);

  return PasswordStrengthIndicator;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));


PasswordStrengthIndicator.propTypes = {
  style: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  strengthPercent: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
  strengthLevel: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),
  strengthText: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)
};

/***/ }),
/* 17 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_28372__) => {

__nested_webpack_require_28372__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_28372__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_28935__) => {

__nested_webpack_require_28935__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_28935__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StrengthIndicatorBar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_28935__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_28935__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_28935__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_28935__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_28935__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_28935__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_28935__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_28935__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_28935__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TextOnly_jsx__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_28935__(19);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var StrengthIndicatorBar = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(StrengthIndicatorBar, _React$Component);

  var _super = _createSuper(StrengthIndicatorBar);

  function StrengthIndicatorBar(props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, StrengthIndicatorBar);

    return _super.call(this, props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(StrengthIndicatorBar, [{
    key: "render",
    value: function render() {
      var strengthText = this._getStrengthText();

      var strengthLevel = this._getStrengthLevel();

      var strengthPercent = this._getStrengthPercent(strengthLevel);

      var cssWidth = "".concat(strengthPercent, "%");

      var className = this._getContainerCssClassNameFromStrengtLevel(strengthLevel);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: className
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: "lvd-passwordbox-strength-bar-meter",
        style: {
          width: cssWidth
        }
      })), !!strengthText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_TextOnly_jsx__WEBPACK_IMPORTED_MODULE_7__.default, {
        strengthText: strengthText,
        strengthLevel: strengthLevel,
        strengthPercent: strengthPercent
      }));
    }
  }, {
    key: "_getStrengthText",
    value: function _getStrengthText() {
      return this.props.strengthText || null;
    }
  }, {
    key: "_getStrengthPercent",
    value: function _getStrengthPercent(currentLevel) {
      return Math.ceil(this.props.strengthPercent || currentLevel.defaultPercent);
    }
  }, {
    key: "_getStrengthLevel",
    value: function _getStrengthLevel() {
      return this.props.strengthLevel || null;
    }
  }, {
    key: "_getContainerCssClassNameFromStrengtLevel",
    value: function _getContainerCssClassNameFromStrengtLevel(strengthLevel) {
      var className = 'lvd-passwordbox-strength lvd-passwordbox-strength-bar';

      if (strengthLevel) {
        className = "".concat(className, " ").concat(strengthLevel.id);
      }

      return className;
    }
  }]);

  return StrengthIndicatorBar;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));


StrengthIndicatorBar.propTypes = {
  strengthPercent: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  strengthLevel: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired),
  strengthText: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_34199__) => {

__nested_webpack_require_34199__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_34199__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StrengthIndicatorTextOnly)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_34199__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_34199__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_34199__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_34199__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_34199__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_34199__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_34199__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_34199__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_34199__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var StrengthIndicatorTextOnly = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(StrengthIndicatorTextOnly, _React$Component);

  var _super = _createSuper(StrengthIndicatorTextOnly);

  function StrengthIndicatorTextOnly(props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, StrengthIndicatorTextOnly);

    return _super.call(this, props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(StrengthIndicatorTextOnly, [{
    key: "render",
    value: function render() {
      var strengthLevel = this._getStrengthLevel();

      var strengthText = this._getStrengthText(strengthLevel);

      var className = this._getContainerCssClassNameFromStrengtLevel(strengthLevel);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: className
      }, strengthText);
    }
  }, {
    key: "_getStrengthLevel",
    value: function _getStrengthLevel() {
      return this.props.strengthLevel || null;
    }
  }, {
    key: "_getStrengthText",
    value: function _getStrengthText(currentLevel) {
      return this.props.strengthText || currentLevel.defaultLabel;
    }
  }, {
    key: "_getContainerCssClassNameFromStrengtLevel",
    value: function _getContainerCssClassNameFromStrengtLevel(strengthLevel) {
      var className = 'lvd-passwordbox-strength lvd-passwordbox-strength-text';

      if (strengthLevel) {
        className = "".concat(className, " ").concat(strengthLevel.id);
      }

      return className;
    }
  }]);

  return StrengthIndicatorTextOnly;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));


StrengthIndicatorTextOnly.propTypes = {
  strengthPercent: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  strengthLevel: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired),
  strengthText: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_38558__) => {

__nested_webpack_require_38558__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_38558__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StrengthIndicatorIntermittentBar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_38558__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_38558__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_38558__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_38558__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_38558__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_38558__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_38558__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_38558__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_38558__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TextOnly_jsx__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_38558__(19);
/* harmony import */ var _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_38558__(21);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var StrengthIndicatorIntermittentBar = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(StrengthIndicatorIntermittentBar, _React$Component);

  var _super = _createSuper(StrengthIndicatorIntermittentBar);

  function StrengthIndicatorIntermittentBar(props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, StrengthIndicatorIntermittentBar);

    return _super.call(this, props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(StrengthIndicatorIntermittentBar, [{
    key: "render",
    value: function render() {
      var strengthText = this._getStrengthText();

      var strengthLevel = this._getStrengthLevel();

      var strengthPercent = this._getStrengthPercent(strengthLevel);

      var className = this._getContainerCssClassNameFromStrengtLevel(strengthLevel);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: className
      }, this._renderSegments(strengthLevel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: "clear"
      })), !!strengthText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_TextOnly_jsx__WEBPACK_IMPORTED_MODULE_7__.default, {
        strengthText: strengthText,
        strengthLevel: strengthLevel,
        strengthPercent: strengthPercent
      }));
    }
  }, {
    key: "_getStrengthText",
    value: function _getStrengthText() {
      return this.props.strengthText;
    }
  }, {
    key: "_getStrengthPercent",
    value: function _getStrengthPercent(currentLevel) {
      return Math.ceil(this.props.strengthPercent || currentLevel.defaultPercent);
    }
  }, {
    key: "_getStrengthLevel",
    value: function _getStrengthLevel() {
      return this.props.strengthLevel || null;
    }
  }, {
    key: "_getContainerCssClassNameFromStrengtLevel",
    value: function _getContainerCssClassNameFromStrengtLevel(strengthLevel) {
      var className = 'lvd-passwordbox-strength lvd-passwordbox-strength-intermittent-bar';

      if (strengthLevel) {
        className = "".concat(className, " ").concat(strengthLevel.id);
      }

      return className;
    }
  }, {
    key: "_renderSegments",
    value: function _renderSegments(currentLevel) {
      var segments = this._getAllAvailableLevels();

      return segments.map(function (strengthLevel) {
        var className = "lvd-passwordbox-strength-intermittent-bar-segment ".concat(strengthLevel.id);

        if (strengthLevel.value <= currentLevel.value) {
          className = "".concat(className, " is-active");
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
          key: strengthLevel.id,
          className: className
        });
      });
    }
  }, {
    key: "_getAllAvailableLevels",
    value: function _getAllAvailableLevels() {
      return (0,_PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_8__.getAllAvailableLevels)();
    }
  }]);

  return StrengthIndicatorIntermittentBar;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));


StrengthIndicatorIntermittentBar.propTypes = {
  strengthPercent: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  strengthLevel: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired),
  strengthText: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_44747__) => {

__nested_webpack_require_44747__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_44747__.d(__webpack_exports__, {
/* harmony export */   "PasswordStrengthLevels": () => (/* binding */ PasswordStrengthLevels),
/* harmony export */   "getAllAvailableLevels": () => (/* binding */ getAllAvailableLevels),
/* harmony export */   "getAvailableLevelCount": () => (/* binding */ getAvailableLevelCount)
/* harmony export */ });
var PasswordStrengthLevels = {
  veryWeak: {
    id: 'very-weak',
    value: 1,
    defaultThreshold: 0.1,
    defaultLabel: 'Very weak',
    defaultPercent: 20,
    next: function next() {
      return PasswordStrengthLevels.weak;
    }
  },
  weak: {
    id: 'weak',
    value: 2,
    defaultThreshold: 0.25,
    defaultLabel: 'Weak',
    defaultPercent: 40,
    next: function next() {
      return PasswordStrengthLevels.medium;
    }
  },
  medium: {
    id: 'medium',
    value: 3,
    defaultThreshold: 0.5,
    defaultLabel: 'Medium',
    defaultPercent: 60,
    next: function next() {
      return PasswordStrengthLevels.strong;
    }
  },
  strong: {
    id: 'strong',
    value: 4,
    defaultThreshold: 0.75,
    defaultLabel: 'Strong',
    defaultPercent: 80,
    next: function next() {
      return PasswordStrengthLevels.veryStrong;
    }
  },
  veryStrong: {
    id: 'very-strong',
    value: 5,
    defaultThreshold: 0.9,
    defaultLabel: 'Very strong',
    defaultPercent: 100,
    next: function next() {
      return PasswordStrengthLevels.veryStrong;
    }
  }
};

function getAllAvailableLevels() {
  return [PasswordStrengthLevels.veryWeak, PasswordStrengthLevels.weak, PasswordStrengthLevels.medium, PasswordStrengthLevels.strong, PasswordStrengthLevels.veryStrong];
}

function getAvailableLevelCount() {
  return getAllAvailableLevels().length;
}



/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_46643__) => {

__nested_webpack_require_46643__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_46643__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordStatusCallout)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_46643__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_46643__(4);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_46643__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_46643__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_46643__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_46643__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_46643__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_46643__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_46643__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_46643__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_46643__(13);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__nested_webpack_require_46643__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_46643__(14);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var PasswordStatusCallout = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(PasswordStatusCallout, _React$Component);

  var _super = _createSuper(PasswordStatusCallout);

  function PasswordStatusCallout(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordStatusCallout);

    _this = _super.call(this, props);
    _this._handleCalloutDismiss = _this._handleCalloutDismiss.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordStatusCallout, [{
    key: "_handleCalloutDismiss",
    value: function _handleCalloutDismiss() {
      if (this.props.onDismiss != null) {
        this.props.onDismiss();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var target = this._getTarget();

      var containerProps = this._getContainerProps();

      var rules = this._getRules();

      return rules.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Callout, {
        target: target,
        gapSpace: containerProps.gapSpace,
        calloutWidth: containerProps.calloutWidth,
        calloutMaxWidth: containerProps.calloutMaxWidth,
        calloutMinWidth: containerProps.calloutMinWidth,
        isBeakVisible: containerProps.isBeakVisible,
        beakWidth: containerProps.beakWidth,
        directionalHint: containerProps.directionalHint,
        setInitialFocus: true,
        style: containerProps.style,
        onDismiss: this._handleCalloutDismiss
      }, this._renderTitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-passwordbox-rules-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("ul", null, this._renderPassowrdRules(rules))));
      ;
    }
  }, {
    key: "_getTarget",
    value: function _getTarget() {
      return this.props.target;
    }
  }, {
    key: "_getContainerProps",
    value: function _getContainerProps() {
      var containerProps = this.props.containerProps || {};
      return Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.container, containerProps);
    }
  }, {
    key: "_getRules",
    value: function _getRules() {
      return this.props.rules || [];
    }
  }, {
    key: "_renderTitle",
    value: function _renderTitle() {
      var titleProps = this._getTitleProps();

      var showTitle = titleProps.visible && !!titleProps.text;
      return showTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {
        variant: titleProps.variant,
        style: titleProps.style
      }, titleProps.text);
    }
  }, {
    key: "_getTitleProps",
    value: function _getTitleProps() {
      var titleProps = this.props.title;
      return Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.title, titleProps);
    }
  }, {
    key: "_renderPassowrdRules",
    value: function _renderPassowrdRules(rules) {
      var _this2 = this;

      var ruleIndex = 0;

      var iconProps = this._getIconProps();

      return rules.map(function (rule) {
        var ruleKey = _this2._computeRuleKey(ruleIndex++);

        var ruleDisplayProps = _this2._computeRuleItemDisplayProps(rule, iconProps);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", {
          key: ruleKey,
          className: ruleDisplayProps.className
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("i", {
          className: ruleDisplayProps.ruleIconClassName
        }), rule.text);
      });
    }
  }, {
    key: "_getIconProps",
    value: function _getIconProps() {
      var iconProps = this.props.iconProps || {};
      return Object.assign(_PasswordBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.rules.icons, iconProps);
    }
  }, {
    key: "_computeRuleKey",
    value: function _computeRuleKey(ruleIndex) {
      return "rule-".concat(ruleIndex);
    }
  }, {
    key: "_computeRuleItemDisplayProps",
    value: function _computeRuleItemDisplayProps(rule, iconProps) {
      var className = 'lvd-passwordbox-rule';
      var ruleIconName = iconProps.notMetIcon;

      if (rule.ruleMet) {
        className = "".concat(className, " is-rule-met");
        ruleIconName = iconProps.metIcon;
      } else {
        className = "".concat(className, " is-not-rule-met");
      }

      var ruleIconClassName = this._computeRuleIconClassName(ruleIconName);

      return {
        className: className,
        ruleIconClassName: ruleIconClassName
      };
    }
  }, {
    key: "_computeRuleIconClassName",
    value: function _computeRuleIconClassName(ruleIconName) {
      return "lvd-passwordbox-rule-icon ms-Icon ms-Icon--".concat(ruleIconName);
    }
  }]);

  return PasswordStatusCallout;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));


PasswordStatusCallout.propTypes = {
  target: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),
  rules: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)).isRequired,
  iconProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  containerProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  titleProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  onDismiss: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_55230__) => {

__nested_webpack_require_55230__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_55230__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordCallbackRule)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_55230__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_55230__(4);



var PasswordCallbackRule = /*#__PURE__*/function () {
  function PasswordCallbackRule(callback, name) {
    var allowEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordCallbackRule);

    this._callback = callback;
    this._name = name;
    this._allowEmpty = allowEmpty;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordCallbackRule, [{
    key: "evaluate",
    value: function evaluate(input) {
      if (!input) {
        return this._allowEmpty;
      }

      return this._callback(input);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return PasswordCallbackRule;
}();



/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_56579__) => {

__nested_webpack_require_56579__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_56579__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordRegexRule)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_56579__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_56579__(4);



var PasswordRegexRule = /*#__PURE__*/function () {
  function PasswordRegexRule(regex, name) {
    var allowEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordRegexRule);

    this._regex = regex;
    this._name = name;
    this._allowEmpty = allowEmpty;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordRegexRule, [{
    key: "evaluate",
    value: function evaluate(input) {
      if (!input) {
        return this._allowEmpty;
      }

      return !!input.match(this._regex);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return PasswordRegexRule;
}();



/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_57906__) => {

__nested_webpack_require_57906__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_57906__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordLengthRule)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_57906__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_57906__(4);



var PasswordLengthRule = /*#__PURE__*/function () {
  function PasswordLengthRule(minimumLength) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordLengthRule);

    this._minimumLength = minimumLength;
    this._name = name;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordLengthRule, [{
    key: "evaluate",
    value: function evaluate(input) {
      if (!input || !input.length) {
        return this._minimumLength == 0;
      }

      return input.length >= this._minimumLength;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name || "Must be at least ".concat(this._minimumLength, " character(s) in length");
    }
  }]);

  return PasswordLengthRule;
}();



/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_59328__) => {

__nested_webpack_require_59328__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_59328__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordEvaluator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_59328__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_59328__(4);
/* harmony import */ var _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_59328__(21);




var PasswordEvaluator = /*#__PURE__*/function () {
  function PasswordEvaluator(rules) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PasswordEvaluator);

    this._rules = rules || [];
    this._maxLevelScore = _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_2__.PasswordStrengthLevels.veryStrong.value;
    this._ruleScore = this._computeRuleScore();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PasswordEvaluator, [{
    key: "_computeRuleScore",
    value: function _computeRuleScore() {
      return this._rules.length > 0 ? Math.round(this._maxLevelScore / this._rules.length * 10) / 10 : this._maxLevelScore;
    }
  }, {
    key: "evaluatePassword",
    value: function evaluatePassword(password) {
      var _this = this;

      if (!password) {
        return {
          level: null,
          rules: []
        };
      }

      if (this._rules.length == 0) {
        return {
          level: _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_2__.PasswordStrengthLevels.veryStrong,
          rules: []
        };
      }

      var score = 0;
      var rulesResult = [];

      this._rules.forEach(function (rule) {
        var ruleMet = rule.evaluate(password);

        if (ruleMet) {
          score = Math.min(_this._ruleScore + score, _this._maxLevelScore);
        }

        rulesResult.push({
          ruleMet: ruleMet,
          text: rule.name
        });
      });

      var level = _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_2__.PasswordStrengthLevels.veryWeak;

      while (level.value < score && level.value < this._maxLevelScore) {
        level = level.next();
      }

      return {
        level: level,
        rules: rulesResult
      };
    }
  }]);

  return PasswordEvaluator;
}();



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_61959__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_61959__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_61959__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_61959__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_61959__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_61959__.o(definition, key) && !__nested_webpack_require_61959__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_61959__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_61959__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__nested_webpack_require_61959__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_61959__.d(__webpack_exports__, {
/* harmony export */   "PasswordBox": () => (/* reexport safe */ _PasswordBox_jsx__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "PasswordCallbackRule": () => (/* reexport safe */ _rules_PasswordCallbackRule_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "PasswordRegexRule": () => (/* reexport safe */ _rules_PasswordRegexRule_js__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "PasswordEvaluator": () => (/* reexport safe */ _rules_PasswordEvaluator_js__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "PasswordLengthRule": () => (/* reexport safe */ _rules_PasswordLengthRule_js__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "PasswordStrengthIndicator": () => (/* reexport safe */ _PasswordStrengthIndicator_jsx__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "StrengthIndicatorStyles": () => (/* reexport safe */ _StrengthIndicatorStyles_js__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "PasswordStrengthLevels": () => (/* reexport safe */ _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_7__.PasswordStrengthLevels),
/* harmony export */   "getAllAvailableLevels": () => (/* reexport safe */ _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_7__.getAllAvailableLevels),
/* harmony export */   "getAvailableLevelCount": () => (/* reexport safe */ _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_7__.getAvailableLevelCount)
/* harmony export */ });
/* harmony import */ var _PasswordBox_jsx__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_61959__(2);
/* harmony import */ var _rules_PasswordCallbackRule_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_61959__(23);
/* harmony import */ var _rules_PasswordRegexRule_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_61959__(24);
/* harmony import */ var _rules_PasswordLengthRule_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_61959__(25);
/* harmony import */ var _rules_PasswordEvaluator_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_61959__(26);
/* harmony import */ var _PasswordStrengthIndicator_jsx__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_61959__(16);
/* harmony import */ var _StrengthIndicatorStyles_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_61959__(15);
/* harmony import */ var _PasswordStrengthLevels_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_61959__(21);









})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PasswordChangeBoxDefaults = {
  title: 'Change password',
  passwordChangeButton: {
    label: 'Change password'
  },
  backActionButton: {
    show: true,
    label: 'Back'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordChangeBoxDefaults);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordChangeBox": () => (/* reexport safe */ _PasswordChangeBox_jsx__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _PasswordChangeBox_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});