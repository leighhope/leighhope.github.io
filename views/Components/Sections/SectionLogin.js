"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _InputAdornment = require("@material-ui/core/InputAdornment");

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _People = require("@material-ui/icons/People");

var _People2 = _interopRequireDefault(_People);

var _Email = require("@material-ui/icons/Email");

var _Email2 = _interopRequireDefault(_Email);

var _GridContainer = require("../../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _Card = require("../../../components/Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../../components/Card/CardHeader");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require("../../../components/Card/CardBody");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardFooter = require("../../../components/Card/CardFooter");

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _Button = require("../../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _CustomInput = require("../../../components/CustomInput/CustomInput");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _loginStyle = require("../../../assets/jss/material-kit-react/views/componentsSections/loginStyle");

var _loginStyle2 = _interopRequireDefault(_loginStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core components

// @material-ui/icons

// core components


var SectionLogin = function (_React$Component) {
  _inherits(SectionLogin, _React$Component);

  function SectionLogin() {
    _classCallCheck(this, SectionLogin);

    return _possibleConstructorReturn(this, (SectionLogin.__proto__ || Object.getPrototypeOf(SectionLogin)).apply(this, arguments));
  }

  _createClass(SectionLogin, [{
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
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                  "form",
                  { className: classes.form },
                  _react2.default.createElement(
                    _CardHeader2.default,
                    { color: "primary", className: classes.cardHeader },
                    _react2.default.createElement(
                      "h4",
                      null,
                      "Login"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: classes.socialLine },
                      _react2.default.createElement(
                        _Button2.default,
                        {
                          justIcon: true,
                          href: "#pablo",
                          target: "_blank",
                          color: "transparent",
                          onClick: function onClick(e) {
                            return e.preventDefault();
                          }
                        },
                        _react2.default.createElement("i", {
                          className: classes.socialIcons + " fab fa-twitter"
                        })
                      ),
                      _react2.default.createElement(
                        _Button2.default,
                        {
                          justIcon: true,
                          href: "#pablo",
                          target: "_blank",
                          color: "transparent",
                          onClick: function onClick(e) {
                            return e.preventDefault();
                          }
                        },
                        _react2.default.createElement("i", {
                          className: classes.socialIcons + " fab fa-facebook"
                        })
                      ),
                      _react2.default.createElement(
                        _Button2.default,
                        {
                          justIcon: true,
                          href: "#pablo",
                          target: "_blank",
                          color: "transparent",
                          onClick: function onClick(e) {
                            return e.preventDefault();
                          }
                        },
                        _react2.default.createElement("i", {
                          className: classes.socialIcons + " fab fa-google-plus-g"
                        })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: classes.divider },
                    "Or Be Classical"
                  ),
                  _react2.default.createElement(
                    _CardBody2.default,
                    null,
                    _react2.default.createElement(_CustomInput2.default, {
                      labelText: "First Name...",
                      id: "first",
                      formControlProps: {
                        fullWidth: true
                      },
                      inputProps: {
                        type: "text",
                        endAdornment: _react2.default.createElement(
                          _InputAdornment2.default,
                          { position: "end" },
                          _react2.default.createElement(_People2.default, { className: classes.inputIconsColor })
                        )
                      }
                    }),
                    _react2.default.createElement(_CustomInput2.default, {
                      labelText: "Email...",
                      id: "email",
                      formControlProps: {
                        fullWidth: true
                      },
                      inputProps: {
                        type: "email",
                        endAdornment: _react2.default.createElement(
                          _InputAdornment2.default,
                          { position: "end" },
                          _react2.default.createElement(_Email2.default, { className: classes.inputIconsColor })
                        )
                      }
                    }),
                    _react2.default.createElement(_CustomInput2.default, {
                      labelText: "Password",
                      id: "pass",
                      formControlProps: {
                        fullWidth: true
                      },
                      inputProps: {
                        type: "password",
                        endAdornment: _react2.default.createElement(
                          _InputAdornment2.default,
                          { position: "end" },
                          _react2.default.createElement(
                            _Icon2.default,
                            { className: classes.inputIconsColor },
                            "lock_outline"
                          )
                        )
                      }
                    })
                  ),
                  _react2.default.createElement(
                    _CardFooter2.default,
                    { className: classes.cardFooter },
                    _react2.default.createElement(
                      _Button2.default,
                      { simple: true, color: "primary", size: "lg" },
                      "Get started"
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

  return SectionLogin;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_loginStyle2.default)(SectionLogin);