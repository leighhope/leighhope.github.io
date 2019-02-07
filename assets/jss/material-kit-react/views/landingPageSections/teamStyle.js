"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialKitReact = require("../../../material-kit-react");

var _imagesStyles = require("../../imagesStyles");

var _imagesStyles2 = _interopRequireDefault(_imagesStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var teamStyle = _extends({
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: _extends({}, _materialKitReact.title, {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  })
}, _imagesStyles2.default, {
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: _materialKitReact.cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
});

exports.default = teamStyle;