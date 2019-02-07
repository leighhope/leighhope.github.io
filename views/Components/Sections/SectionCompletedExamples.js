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

var _completedStyle = require("../../../assets/jss/material-kit-react/views/componentsSections/completedStyle");

var _completedStyle2 = _interopRequireDefault(_completedStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core components

// @material-ui/icons

// core components


var SectionCompletedExamples = function (_React$Component) {
  _inherits(SectionCompletedExamples, _React$Component);

  function SectionCompletedExamples() {
    _classCallCheck(this, SectionCompletedExamples);

    return _possibleConstructorReturn(this, (SectionCompletedExamples.__proto__ || Object.getPrototypeOf(SectionCompletedExamples)).apply(this, arguments));
  }

  _createClass(SectionCompletedExamples, [{
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
              { xs: 12, sm: 12, md: 8 },
              _react2.default.createElement(
                "h2",
                null,
                "Completed with examples"
              ),
              _react2.default.createElement(
                "h4",
                null,
                "The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can build with this powerful kit."
              )
            )
          )
        )
      );
    }
  }]);

  return SectionCompletedExamples;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_completedStyle2.default)(SectionCompletedExamples);