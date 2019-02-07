"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSlick = require("react-slick");

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _LocationOn = require("@material-ui/icons/LocationOn");

var _LocationOn2 = _interopRequireDefault(_LocationOn);

var _GridContainer = require("../../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _Card = require("../../../components/Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _carouselStyle = require("../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle");

var _carouselStyle2 = _interopRequireDefault(_carouselStyle);

var _bg = require("../../../assets/img/bg.jpg");

var _bg2 = _interopRequireDefault(_bg);

var _bg3 = require("../../../assets/img/bg2.jpg");

var _bg4 = _interopRequireDefault(_bg3);

var _bg5 = require("../../../assets/img/bg3.jpg");

var _bg6 = _interopRequireDefault(_bg5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// react component for creating beautiful carousel

// @material-ui/core components

// @material-ui/icons

// core components


var SectionCarousel = function (_React$Component) {
  _inherits(SectionCarousel, _React$Component);

  function SectionCarousel() {
    _classCallCheck(this, SectionCarousel);

    return _possibleConstructorReturn(this, (SectionCarousel.__proto__ || Object.getPrototypeOf(SectionCarousel)).apply(this, arguments));
  }

  _createClass(SectionCarousel, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
      };
      return _react2.default.createElement(
        "div",
        { className: classes.section },
        _react2.default.createElement(
          "div",
          { className: classes.container },
          _react2.default.createElement(
            _GridContainer2.default,
            null,
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 8, className: classes.marginAuto },
              _react2.default.createElement(
                _Card2.default,
                { carousel: true },
                _react2.default.createElement(
                  _reactSlick2.default,
                  settings,
                  _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", {
                      src: _bg2.default,
                      alt: "First slide",
                      className: "slick-image"
                    }),
                    _react2.default.createElement(
                      "div",
                      { className: "slick-caption" },
                      _react2.default.createElement(
                        "h4",
                        null,
                        _react2.default.createElement(_LocationOn2.default, { className: "slick-icons" }),
                        "Yellowstone National Park, United States"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", {
                      src: _bg4.default,
                      alt: "Second slide",
                      className: "slick-image"
                    }),
                    _react2.default.createElement(
                      "div",
                      { className: "slick-caption" },
                      _react2.default.createElement(
                        "h4",
                        null,
                        _react2.default.createElement(_LocationOn2.default, { className: "slick-icons" }),
                        "Somewhere Beyond, United States"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", {
                      src: _bg6.default,
                      alt: "Third slide",
                      className: "slick-image"
                    }),
                    _react2.default.createElement(
                      "div",
                      { className: "slick-caption" },
                      _react2.default.createElement(
                        "h4",
                        null,
                        _react2.default.createElement(_LocationOn2.default, { className: "slick-icons" }),
                        "Yellowstone National Park, United States"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SectionCarousel;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_carouselStyle2.default)(SectionCarousel);