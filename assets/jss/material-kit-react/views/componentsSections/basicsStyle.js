"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialKitReact = require("../../../material-kit-react");

var _customCheckboxRadioSwitch = require("../../customCheckboxRadioSwitch");

var _customCheckboxRadioSwitch2 = _interopRequireDefault(_customCheckboxRadioSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicsStyle = _extends({
  sections: {
    padding: "70px 0"
  },
  container: _materialKitReact.container,
  title: _extends({}, _materialKitReact.title, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  }
}, _customCheckboxRadioSwitch2.default);

exports.default = basicsStyle;