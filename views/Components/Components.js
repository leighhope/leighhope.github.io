"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = require("react-router-dom");

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Header = require("../../components/Header/Header");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require("../../components/Footer/Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var _GridContainer = require("../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _Button = require("../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Parallax = require("../../components/Parallax/Parallax");

var _Parallax2 = _interopRequireDefault(_Parallax);

var _HeaderLinks = require("../../components/Header/HeaderLinks");

var _HeaderLinks2 = _interopRequireDefault(_HeaderLinks);

var _SectionBasics = require("./Sections/SectionBasics");

var _SectionBasics2 = _interopRequireDefault(_SectionBasics);

var _SectionNavbars = require("./Sections/SectionNavbars");

var _SectionNavbars2 = _interopRequireDefault(_SectionNavbars);

var _SectionTabs = require("./Sections/SectionTabs");

var _SectionTabs2 = _interopRequireDefault(_SectionTabs);

var _SectionPills = require("./Sections/SectionPills");

var _SectionPills2 = _interopRequireDefault(_SectionPills);

var _SectionNotifications = require("./Sections/SectionNotifications");

var _SectionNotifications2 = _interopRequireDefault(_SectionNotifications);

var _SectionTypography = require("./Sections/SectionTypography");

var _SectionTypography2 = _interopRequireDefault(_SectionTypography);

var _SectionJavascript = require("./Sections/SectionJavascript");

var _SectionJavascript2 = _interopRequireDefault(_SectionJavascript);

var _SectionCarousel = require("./Sections/SectionCarousel");

var _SectionCarousel2 = _interopRequireDefault(_SectionCarousel);

var _SectionCompletedExamples = require("./Sections/SectionCompletedExamples");

var _SectionCompletedExamples2 = _interopRequireDefault(_SectionCompletedExamples);

var _SectionLogin = require("./Sections/SectionLogin");

var _SectionLogin2 = _interopRequireDefault(_SectionLogin);

var _SectionExamples = require("./Sections/SectionExamples");

var _SectionExamples2 = _interopRequireDefault(_SectionExamples);

var _SectionDownload = require("./Sections/SectionDownload");

var _SectionDownload2 = _interopRequireDefault(_SectionDownload);

var _components = require("../../assets/jss/material-kit-react/views/components");

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// react components for routing our app without refresh

// @material-ui/core components

// @material-ui/icons
// core components

// sections for this page


var Components = function (_React$Component) {
  _inherits(Components, _React$Component);

  function Components() {
    _classCallCheck(this, Components);

    return _possibleConstructorReturn(this, (Components.__proto__ || Object.getPrototypeOf(Components)).apply(this, arguments));
  }

  _createClass(Components, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          rest = _objectWithoutProperties(_props, ["classes"]);

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, _extends({
          brand: "Material Kit React",
          rightLinks: _react2.default.createElement(_HeaderLinks2.default, null),
          fixed: true,
          color: "transparent",
          changeColorOnScroll: {
            height: 400,
            color: "white"
          }
        }, rest)),
        _react2.default.createElement(
          _Parallax2.default,
          { image: require("../../assets/img/bg4.jpg") },
          _react2.default.createElement(
            "div",
            { className: classes.container },
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                null,
                _react2.default.createElement(
                  "div",
                  { className: classes.brand },
                  _react2.default.createElement(
                    "h1",
                    { className: classes.title },
                    "Material Kit React."
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: classes.subtitle },
                    "A Badass Material-UI Kit based on Material Design."
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: (0, _classnames2.default)(classes.main, classes.mainRaised) },
          _react2.default.createElement(_SectionBasics2.default, null),
          _react2.default.createElement(_SectionNavbars2.default, null),
          _react2.default.createElement(_SectionTabs2.default, null),
          _react2.default.createElement(_SectionPills2.default, null),
          _react2.default.createElement(_SectionNotifications2.default, null),
          _react2.default.createElement(_SectionTypography2.default, null),
          _react2.default.createElement(_SectionJavascript2.default, null),
          _react2.default.createElement(_SectionCarousel2.default, null),
          _react2.default.createElement(_SectionCompletedExamples2.default, null),
          _react2.default.createElement(_SectionLogin2.default, null),
          _react2.default.createElement(
            _GridItem2.default,
            { md: 12, className: classes.textCenter },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/login-page", className: classes.link },
              _react2.default.createElement(
                _Button2.default,
                { color: "primary", size: "lg", simple: true },
                "View Login Page"
              )
            )
          ),
          _react2.default.createElement(_SectionExamples2.default, null),
          _react2.default.createElement(_SectionDownload2.default, null)
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Components;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_components2.default)(Components);