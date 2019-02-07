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

var _CustomInput = require("../../../components/CustomInput/CustomInput");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _Button = require("../../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _workStyle = require("../../../assets/jss/material-kit-react/views/landingPageSections/workStyle");

var _workStyle2 = _interopRequireDefault(_workStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core components


// @material-ui/icons

// core components


var WorkSection = function (_React$Component) {
  _inherits(WorkSection, _React$Component);

  function WorkSection() {
    _classCallCheck(this, WorkSection);

    return _possibleConstructorReturn(this, (WorkSection.__proto__ || Object.getPrototypeOf(WorkSection)).apply(this, arguments));
  }

  _createClass(WorkSection, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        "div",
        { className: classes.section },
        _react2.default.createElement(
          _GridContainer2.default,
          { justify: "center" },
          _react2.default.createElement(
            _GridItem2.default,
            { cs: 12, sm: 12, md: 8 },
            _react2.default.createElement(
              "h2",
              { className: classes.title },
              "Work with us"
            ),
            _react2.default.createElement(
              "h4",
              { className: classes.description },
              "Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours."
            ),
            _react2.default.createElement(
              "form",
              null,
              _react2.default.createElement(
                _GridContainer2.default,
                null,
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 6 },
                  _react2.default.createElement(_CustomInput2.default, {
                    labelText: "Your Name",
                    id: "name",
                    formControlProps: {
                      fullWidth: true
                    }
                  })
                ),
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 6 },
                  _react2.default.createElement(_CustomInput2.default, {
                    labelText: "Your Email",
                    id: "email",
                    formControlProps: {
                      fullWidth: true
                    }
                  })
                ),
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "Your Message",
                  id: "message",
                  formControlProps: {
                    fullWidth: true,
                    className: classes.textArea
                  },
                  inputProps: {
                    multiline: true,
                    rows: 5
                  }
                }),
                _react2.default.createElement(
                  _GridContainer2.default,
                  { justify: "center" },
                  _react2.default.createElement(
                    _GridItem2.default,
                    {
                      xs: 12,
                      sm: 12,
                      md: 4,
                      className: classes.textCenter
                    },
                    _react2.default.createElement(
                      _Button2.default,
                      { color: "primary" },
                      "Send Message"
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

  return WorkSection;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_workStyle2.default)(WorkSection);