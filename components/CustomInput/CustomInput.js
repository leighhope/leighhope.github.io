"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _FormControl = require("@material-ui/core/FormControl");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _InputLabel = require("@material-ui/core/InputLabel");

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _Input = require("@material-ui/core/Input");

var _Input2 = _interopRequireDefault(_Input);

var _customInputStyle = require("../../assets/jss/material-kit-react/components/customInputStyle");

var _customInputStyle2 = _interopRequireDefault(_customInputStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library to set properties for components

// nodejs library that concatenates classes

// @material-ui/core components


function CustomInput(_ref) {
  var _classNames, _classNames2, _classNames4;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      labelProps = props.labelProps,
      inputProps = props.inputProps,
      error = props.error,
      white = props.white,
      inputRootCustomClasses = props.inputRootCustomClasses,
      success = props.success;


  var labelClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, " " + classes.labelRootError, error), _defineProperty(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.underlineError, error), _defineProperty(_classNames2, classes.underlineSuccess, success && !error), _defineProperty(_classNames2, classes.underline, true), _defineProperty(_classNames2, classes.whiteUnderline, white), _classNames2));
  var marginTop = (0, _classnames2.default)(_defineProperty({}, inputRootCustomClasses, inputRootCustomClasses !== undefined));
  var inputClasses = (0, _classnames2.default)((_classNames4 = {}, _defineProperty(_classNames4, classes.input, true), _defineProperty(_classNames4, classes.whiteInput, white), _classNames4));
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = (0, _classnames2.default)(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }
  return _react2.default.createElement(
    _FormControl2.default,
    _extends({}, formControlProps, { className: formControlClasses }),
    labelText !== undefined ? _react2.default.createElement(
      _InputLabel2.default,
      _extends({
        className: classes.labelRoot + " " + labelClasses,
        htmlFor: id
      }, labelProps),
      labelText
    ) : null,
    _react2.default.createElement(_Input2.default, _extends({
      classes: {
        input: inputClasses,
        root: marginTop,
        disabled: classes.disabled,
        underline: underlineClasses
      },
      id: id
    }, inputProps))
  );
}

CustomInput.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  labelText: _propTypes2.default.node,
  labelProps: _propTypes2.default.object,
  id: _propTypes2.default.string,
  inputProps: _propTypes2.default.object,
  formControlProps: _propTypes2.default.object,
  inputRootCustomClasses: _propTypes2.default.string,
  error: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  white: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_customInputStyle2.default)(CustomInput);