"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialKitReact = require("../../../material-kit-react");

var _modalStyle = require("../../modalStyle");

var _modalStyle2 = _interopRequireDefault(_modalStyle);

var _tooltipsStyle = require("../../tooltipsStyle");

var _tooltipsStyle2 = _interopRequireDefault(_tooltipsStyle);

var _popoverStyles = require("../../popoverStyles");

var _popoverStyles2 = _interopRequireDefault(_popoverStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var javascriptStyles = _extends({
  section: {
    padding: "70px 0 0"
  },
  container: _materialKitReact.container,
  title: _extends({}, _materialKitReact.title, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  icon: {
    width: "17px",
    height: "17px",
    marginRight: "4px"
  }
}, _modalStyle2.default, {
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0"
  }
}, _tooltipsStyle2.default, _popoverStyles2.default);

exports.default = javascriptStyles;