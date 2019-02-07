"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _GridContainer = require("../../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _Button = require("../../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _downloadStyle = require("../../../assets/jss/material-kit-react/views/componentsSections/downloadStyle");

var _downloadStyle2 = _interopRequireDefault(_downloadStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint-disable*/


// @material-ui/core components

// @material-ui/icons

// core components


var SectionDownload = function (_React$Component) {
  _inherits(SectionDownload, _React$Component);

  function SectionDownload() {
    _classCallCheck(this, SectionDownload);

    return _possibleConstructorReturn(this, (SectionDownload.__proto__ || Object.getPrototypeOf(SectionDownload)).apply(this, arguments));
  }

  _createClass(SectionDownload, [{
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
            { className: classes.textCenter, justify: "center" },
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 8 },
              _react2.default.createElement(
                "h2",
                null,
                "Do you love this UI Kit?"
              ),
              _react2.default.createElement(
                "h4",
                null,
                "Cause if you do, it can be yours for FREE. Hit the buttons below to navigate to our website where you can find the kit. We also have the Bootstrap 4 version on plain HTML. Start a new project or give an old Bootstrap project a new look!"
              )
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 8, md: 6 },
              _react2.default.createElement(
                _Button2.default,
                {
                  color: "primary",
                  size: "lg",
                  href: "https://www.creative-tim.com/product/material-kit-react",
                  target: "_blank"
                },
                "Free React Download"
              ),
              _react2.default.createElement(
                _Button2.default,
                {
                  color: "primary",
                  size: "lg",
                  href: "https://www.creative-tim.com/product/material-kit",
                  target: "_blank"
                },
                "Free HTML Downoad"
              )
            )
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            _GridContainer2.default,
            { className: classes.textCenter, justify: "center" },
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 8 },
              _react2.default.createElement(
                "h2",
                null,
                "Want more?"
              ),
              _react2.default.createElement(
                "h4",
                null,
                "We've launched",
                " ",
                _react2.default.createElement(
                  "a",
                  {
                    href: "https://www.creative-tim.com/product/material-kit-pro-react",
                    target: "_blank"
                  },
                  "Material Kit PRO React",
                  " "
                ),
                ".It has a huge number of components, sections and example pages. Start Your Development With A Badass Material-UI nspired by Material Design."
              )
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 8, md: 6 },
              _react2.default.createElement(
                _Button2.default,
                {
                  color: "rose",
                  size: "lg",
                  href: "https://www.creative-tim.com/product/material-kit-pro-react",
                  target: "_blank"
                },
                "Material Kit PRO"
              ),
              _react2.default.createElement(
                _Button2.default,
                {
                  color: "rose",
                  size: "lg",
                  href: "https://www.creative-tim.com/product/material-dashboard-pro-react",
                  target: "_blank"
                },
                "Material Dashboard PRO"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: classes.textCenter + " " + classes.sharingArea },
            _react2.default.createElement(
              _GridContainer2.default,
              { justify: "center" },
              _react2.default.createElement(
                "h3",
                null,
                "Thank you for supporting us!"
              )
            ),
            _react2.default.createElement(
              _Button2.default,
              { color: "twitter" },
              _react2.default.createElement("i", { className: classes.socials + " fab fa-twitter" }),
              " Tweet"
            ),
            _react2.default.createElement(
              _Button2.default,
              { color: "facebook" },
              _react2.default.createElement("i", { className: classes.socials + " fab fa-facebook-square" }),
              " ",
              "Share"
            ),
            _react2.default.createElement(
              _Button2.default,
              { color: "google" },
              _react2.default.createElement("i", { className: classes.socials + " fab fa-google-plus-g" }),
              "Share"
            ),
            _react2.default.createElement(
              _Button2.default,
              { color: "github" },
              _react2.default.createElement("i", { className: classes.socials + " fab fa-github" }),
              " Star"
            )
          )
        )
      );
    }
  }]);

  return SectionDownload;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_downloadStyle2.default)(SectionDownload);