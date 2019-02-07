"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialKitReact = require("../../../material-kit-react");

var notificationsStyles = {
  section: {
    backgroundColor: "#FFFFFF",
    display: "block",
    width: "100%",
    position: "relative",
    padding: "0"
  },
  title: _extends({}, _materialKitReact.title, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  container: _materialKitReact.container
};

exports.default = notificationsStyles;