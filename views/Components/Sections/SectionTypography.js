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

var _Small = require("../../../components/Typography/Small");

var _Small2 = _interopRequireDefault(_Small);

var _Danger = require("../../../components/Typography/Danger");

var _Danger2 = _interopRequireDefault(_Danger);

var _Warning = require("../../../components/Typography/Warning");

var _Warning2 = _interopRequireDefault(_Warning);

var _Success = require("../../../components/Typography/Success");

var _Success2 = _interopRequireDefault(_Success);

var _Info = require("../../../components/Typography/Info");

var _Info2 = _interopRequireDefault(_Info);

var _Primary = require("../../../components/Typography/Primary");

var _Primary2 = _interopRequireDefault(_Primary);

var _Muted = require("../../../components/Typography/Muted");

var _Muted2 = _interopRequireDefault(_Muted);

var _Quote = require("../../../components/Typography/Quote");

var _Quote2 = _interopRequireDefault(_Quote);

var _typographyStyle = require("../../../assets/jss/material-kit-react/views/componentsSections/typographyStyle");

var _typographyStyle2 = _interopRequireDefault(_typographyStyle);

var _avatar = require("../../../assets/img/faces/avatar.jpg");

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @material-ui/core components


// @material-ui/icons

// core components


var SectionTypography = function (_React$Component) {
  _inherits(SectionTypography, _React$Component);

  function SectionTypography() {
    _classCallCheck(this, SectionTypography);

    return _possibleConstructorReturn(this, (SectionTypography.__proto__ || Object.getPrototypeOf(SectionTypography)).apply(this, arguments));
  }

  _createClass(SectionTypography, [{
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
            "div",
            { id: "typography" },
            _react2.default.createElement(
              "div",
              { className: classes.title },
              _react2.default.createElement(
                "h2",
                null,
                "Typography"
              )
            ),
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Header 1"
                ),
                _react2.default.createElement(
                  "h1",
                  null,
                  "The Life of Material Kit"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Header 2"
                ),
                _react2.default.createElement(
                  "h2",
                  null,
                  "The Life of Material Kit"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Header 3"
                ),
                _react2.default.createElement(
                  "h3",
                  null,
                  "The Life of Material Kit"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Header 4"
                ),
                _react2.default.createElement(
                  "h4",
                  null,
                  "The Life of Material Kit"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Header 5"
                ),
                _react2.default.createElement(
                  "h5",
                  null,
                  "The Life of Material Kit"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Header 6"
                ),
                _react2.default.createElement(
                  "h6",
                  null,
                  "The Life of Material Kit"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Header 1"
                ),
                _react2.default.createElement(
                  "h1",
                  { className: classes.title },
                  "The Life of Material Kit"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Header 2"
                ),
                _react2.default.createElement(
                  "h2",
                  { className: classes.title },
                  "The Life of Material Kit"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Header 3"
                ),
                _react2.default.createElement(
                  "h3",
                  { className: classes.title },
                  "The Life of Material Kit"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Header 4"
                ),
                _react2.default.createElement(
                  "h4",
                  { className: classes.title },
                  "The Life of Material Kit"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Paragraph"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Quote"
                ),
                _react2.default.createElement(_Quote2.default, {
                  text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
                  author: " Kanye West, Musician"
                })
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Muted Text"
                ),
                _react2.default.createElement(
                  _Muted2.default,
                  null,
                  "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Primary Text"
                ),
                _react2.default.createElement(
                  _Primary2.default,
                  null,
                  "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Info Text"
                ),
                _react2.default.createElement(
                  _Info2.default,
                  null,
                  "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Success Text"
                ),
                _react2.default.createElement(
                  _Success2.default,
                  null,
                  "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Warning Text"
                ),
                _react2.default.createElement(
                  _Warning2.default,
                  null,
                  "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Danger Text"
                ),
                _react2.default.createElement(
                  _Danger2.default,
                  null,
                  "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.typo },
                _react2.default.createElement(
                  "div",
                  { className: classes.note },
                  "Small Tag"
                ),
                _react2.default.createElement(
                  "h2",
                  null,
                  "Header with small subtitle",
                  _react2.default.createElement("br", null),
                  _react2.default.createElement(
                    _Small2.default,
                    null,
                    "Use \"Small\" tag for the headers"
                  )
                )
              )
            )
          ),
          _react2.default.createElement("div", { className: classes.space50 }),
          _react2.default.createElement(
            "div",
            { id: "images" },
            _react2.default.createElement(
              "div",
              { className: classes.title },
              _react2.default.createElement(
                "h2",
                null,
                "Images"
              )
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 2 },
                _react2.default.createElement(
                  "h4",
                  null,
                  "Rounded Image"
                ),
                _react2.default.createElement("img", {
                  src: _avatar2.default,
                  alt: "...",
                  className: classes.imgRounded + " " + classes.imgFluid
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 2, className: classes.marginLeft },
                _react2.default.createElement(
                  "h4",
                  null,
                  "Circle Image"
                ),
                _react2.default.createElement("img", {
                  src: _avatar2.default,
                  alt: "...",
                  className: classes.imgRoundedCircle + " " + classes.imgFluid
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 2, className: classes.marginLeft },
                _react2.default.createElement(
                  "h4",
                  null,
                  "Rounded Raised"
                ),
                _react2.default.createElement("img", {
                  src: _avatar2.default,
                  alt: "...",
                  className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 2, className: classes.marginLeft },
                _react2.default.createElement(
                  "h4",
                  null,
                  "Circle Raised"
                ),
                _react2.default.createElement("img", {
                  src: _avatar2.default,
                  alt: "...",
                  className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                })
              )
            ),
            _react2.default.createElement(_GridContainer2.default, null)
          ),
          _react2.default.createElement("div", { className: classes.space50 })
        )
      );
    }
  }]);

  return SectionTypography;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_typographyStyle2.default)(SectionTypography);