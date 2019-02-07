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

var _HeaderLinks = require("../../components/Header/HeaderLinks");

var _HeaderLinks2 = _interopRequireDefault(_HeaderLinks);

var _Parallax = require("../../components/Parallax/Parallax");

var _Parallax2 = _interopRequireDefault(_Parallax);

var _landingPage = require("../../assets/jss/material-kit-react/views/landingPage");

var _landingPage2 = _interopRequireDefault(_landingPage);

var _ProductSection = require("./Sections/ProductSection");

var _ProductSection2 = _interopRequireDefault(_ProductSection);

var _TeamSection = require("./Sections/TeamSection");

var _TeamSection2 = _interopRequireDefault(_TeamSection);

var _WorkSection = require("./Sections/WorkSection");

var _WorkSection2 = _interopRequireDefault(_WorkSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// @material-ui/core components


// @material-ui/icons

// core components


// Sections for this page


var dashboardRoutes = [];

var LandingPage = function (_React$Component) {
  _inherits(LandingPage, _React$Component);

  function LandingPage() {
    _classCallCheck(this, LandingPage);

    return _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).apply(this, arguments));
  }

  _createClass(LandingPage, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          rest = _objectWithoutProperties(_props, ["classes"]);

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, _extends({
          color: "transparent",
          routes: dashboardRoutes,
          brand: "Material Kit React",
          rightLinks: _react2.default.createElement(_HeaderLinks2.default, null),
          fixed: true,
          changeColorOnScroll: {
            height: 400,
            color: "white"
          }
        }, rest)),
        _react2.default.createElement(
          _Parallax2.default,
          { filter: true, image: require("../../assets/img/landing-bg.jpg") },
          _react2.default.createElement(
            "div",
            { className: classes.container },
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 6 },
                _react2.default.createElement(
                  "h1",
                  { className: classes.title },
                  "Your Story Starts With Us."
                ),
                _react2.default.createElement(
                  "h4",
                  null,
                  "Every landing page needs a small description after the big bold title, that's why we added this text here. Add here all the information that can make you or your product create the first impression."
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                  _Button2.default,
                  {
                    color: "danger",
                    size: "lg",
                    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  _react2.default.createElement("i", { className: "fas fa-play" }),
                  "Watch video"
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: (0, _classnames2.default)(classes.main, classes.mainRaised) },
          _react2.default.createElement(
            "div",
            { className: classes.container },
            _react2.default.createElement(_ProductSection2.default, null),
            _react2.default.createElement(_TeamSection2.default, null),
            _react2.default.createElement(_WorkSection2.default, null)
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return LandingPage;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_landingPage2.default)(LandingPage);