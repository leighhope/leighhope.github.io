"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _GridContainer = require("../../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _Button = require("../../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _exampleStyle = require("../../../assets/jss/material-kit-react/views/componentsSections/exampleStyle");

var _exampleStyle2 = _interopRequireDefault(_exampleStyle);

var _landing = require("../../../assets/img/landing.jpg");

var _landing2 = _interopRequireDefault(_landing);

var _profile = require("../../../assets/img/profile.jpg");

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// react components for routing our app without refresh

// @material-ui/core components

// @material-ui/icons

// core components


var SectionExamples = function (_React$Component) {
  _inherits(SectionExamples, _React$Component);

  function SectionExamples() {
    _classCallCheck(this, SectionExamples);

    return _possibleConstructorReturn(this, (SectionExamples.__proto__ || Object.getPrototypeOf(SectionExamples)).apply(this, arguments));
  }

  _createClass(SectionExamples, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        "div",
        { className: classes.section },
        _react2.default.createElement(
          "div",
          { className: classes.container },
          _react2.default.createElement(
            _GridContainer2.default,
            { justify: "center" },
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 6 },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "landing-page", className: classes.link },
                _react2.default.createElement("img", {
                  src: _landing2.default,
                  alt: "...",
                  className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
                }),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "primary", size: "lg", simple: true },
                  "View landing page"
                )
              )
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 6 },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "profile-page", className: classes.link },
                _react2.default.createElement("img", {
                  src: _profile2.default,
                  alt: "...",
                  className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
                }),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "primary", size: "lg", simple: true },
                  "View profile page"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SectionExamples;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_exampleStyle2.default)(SectionExamples);