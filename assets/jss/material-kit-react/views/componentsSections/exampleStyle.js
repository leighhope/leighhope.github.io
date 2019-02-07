"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialKitReact = require("../../../material-kit-react");

var _imagesStyles = require("../../imagesStyles");

var _imagesStyles2 = _interopRequireDefault(_imagesStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleStyle = _extends({
  section: {
    padding: "70px 0"
  },
  container: _extends({}, _materialKitReact.conatinerFluid, {
    textAlign: "center !important"
  })
}, _imagesStyles2.default, {
  link: {
    textDecoration: "none"
  }
});

exports.default = exampleStyle;