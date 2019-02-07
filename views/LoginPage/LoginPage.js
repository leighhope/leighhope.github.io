"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _InputAdornment = require("@material-ui/core/InputAdornment");

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Email = require("@material-ui/icons/Email");

var _Email2 = _interopRequireDefault(_Email);

var _People = require("@material-ui/icons/People");

var _People2 = _interopRequireDefault(_People);

var _Header = require("../../components/Header/Header");

var _Header2 = _interopRequireDefault(_Header);

var _HeaderLinks = require("../../components/Header/HeaderLinks");

var _HeaderLinks2 = _interopRequireDefault(_HeaderLinks);

var _Footer = require("../../components/Footer/Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var _GridContainer = require("../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _Button = require("../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Card = require("../../components/Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = require("../../components/Card/CardBody");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardHeader = require("../../components/Card/CardHeader");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardFooter = require("../../components/Card/CardFooter");

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _CustomInput = require("../../components/CustomInput/CustomInput");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _loginPage = require("../../assets/jss/material-kit-react/views/loginPage");

var _loginPage2 = _interopRequireDefault(_loginPage);

var _bg = require("../../assets/img/bg7.jpg");

var _bg2 = _interopRequireDefault(_bg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core components

// @material-ui/icons

// core components


var LoginPage = function (_React$Component) {
  _inherits(LoginPage, _React$Component);

  function LoginPage(props) {
    _classCallCheck(this, LoginPage);

    // we use this to make the card to appear after the page has been rendered
    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

    _this.state = {
      cardAnimaton: "cardHidden"
    };
    return _this;
  }

  _createClass(LoginPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // we add a hidden class to the card and after 700 ms we delete it and the transition appears
      setTimeout(function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this), 700);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          rest = _objectWithoutProperties(_props, ["classes"]);

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, _extends({
          absolute: true,
          color: "transparent",
          brand: "Material Kit React",
          rightLinks: _react2.default.createElement(_HeaderLinks2.default, null)
        }, rest)),
        _react2.default.createElement(
          "div",
          {
            className: classes.pageHeader,
            style: {
              backgroundImage: "url(" + _bg2.default + ")",
              backgroundSize: "cover",
              backgroundPosition: "top center"
            }
          },
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
                  { className: classes[this.state.cardAnimaton] },
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
                          _react2.default.createElement("i", { className: "fab fa-twitter" })
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
                          _react2.default.createElement("i", { className: "fab fa-facebook" })
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
                          _react2.default.createElement("i", { className: "fab fa-google-plus-g" })
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
          ),
          _react2.default.createElement(_Footer2.default, { whiteFont: true })
        )
      );
    }
  }]);

  return LoginPage;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_loginPage2.default)(LoginPage);