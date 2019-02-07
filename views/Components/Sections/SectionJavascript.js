"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// react plugin for creating date-time-picker

// @material-ui/core components

// @material-ui/icons

// core components


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDatetime = require("react-datetime");

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Slide = require("@material-ui/core/Slide");

var _Slide2 = _interopRequireDefault(_Slide);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Dialog = require("@material-ui/core/Dialog");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = require("@material-ui/core/DialogTitle");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = require("@material-ui/core/DialogContent");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogActions = require("@material-ui/core/DialogActions");

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _InputLabel = require("@material-ui/core/InputLabel");

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _FormControl = require("@material-ui/core/FormControl");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Tooltip = require("@material-ui/core/Tooltip");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Popover = require("@material-ui/core/Popover");

var _Popover2 = _interopRequireDefault(_Popover);

var _LibraryBooks = require("@material-ui/icons/LibraryBooks");

var _LibraryBooks2 = _interopRequireDefault(_LibraryBooks);

var _Close = require("@material-ui/icons/Close");

var _Close2 = _interopRequireDefault(_Close);

var _GridContainer = require("../../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _Button = require("../../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _javascriptStyles = require("../../../assets/jss/material-kit-react/views/componentsSections/javascriptStyles");

var _javascriptStyles2 = _interopRequireDefault(_javascriptStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Transition(props) {
  return _react2.default.createElement(_Slide2.default, _extends({ direction: "down" }, props));
}

var SectionJavascript = function (_React$Component) {
  _inherits(SectionJavascript, _React$Component);

  function SectionJavascript(props) {
    _classCallCheck(this, SectionJavascript);

    var _this = _possibleConstructorReturn(this, (SectionJavascript.__proto__ || Object.getPrototypeOf(SectionJavascript)).call(this, props));

    _this.anchorElLeft = null;
    _this.anchorElTop = null;
    _this.anchorElBottom = null;
    _this.anchorElRight = null;

    _this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false
    };
    return _this;
  }

  _createClass(SectionJavascript, [{
    key: "handleClickOpen",
    value: function handleClickOpen(modal) {
      var x = [];
      x[modal] = true;
      this.setState(x);
    }
  }, {
    key: "handleClose",
    value: function handleClose(modal) {
      var x = [];
      x[modal] = false;
      this.setState(x);
    }
  }, {
    key: "handleClosePopover",
    value: function handleClosePopover(state) {
      this.setState(_defineProperty({}, state, false));
    }
  }, {
    key: "handleClickButton",
    value: function handleClickButton(state) {
      this.setState(_defineProperty({}, state, true));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;

      return _react2.default.createElement(
        "div",
        { className: classes.section },
        _react2.default.createElement(
          "div",
          { className: classes.container },
          _react2.default.createElement(
            "div",
            { className: classes.title },
            _react2.default.createElement(
              "h2",
              null,
              "Javascript components"
            )
          ),
          _react2.default.createElement(
            _GridContainer2.default,
            null,
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 6 },
              _react2.default.createElement(
                "div",
                { className: classes.title },
                _react2.default.createElement(
                  "h3",
                  null,
                  "Modal"
                )
              ),
              _react2.default.createElement(
                _GridContainer2.default,
                null,
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 6, lg: 4 },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      color: "primary",
                      block: true,
                      onClick: function onClick() {
                        return _this2.handleClickOpen("classicModal");
                      }
                    },
                    _react2.default.createElement(_LibraryBooks2.default, { className: classes.icon }),
                    "Classic"
                  ),
                  _react2.default.createElement(
                    _Dialog2.default,
                    {
                      classes: {
                        root: classes.center,
                        paper: classes.modal
                      },
                      open: this.state.classicModal,
                      TransitionComponent: Transition,
                      keepMounted: true,
                      onClose: function onClose() {
                        return _this2.handleClose("classicModal");
                      },
                      "aria-labelledby": "classic-modal-slide-title",
                      "aria-describedby": "classic-modal-slide-description"
                    },
                    _react2.default.createElement(
                      _DialogTitle2.default,
                      {
                        id: "classic-modal-slide-title",
                        disableTypography: true,
                        className: classes.modalHeader
                      },
                      _react2.default.createElement(
                        _IconButton2.default,
                        {
                          className: classes.modalCloseButton,
                          key: "close",
                          "aria-label": "Close",
                          color: "inherit",
                          onClick: function onClick() {
                            return _this2.handleClose("classicModal");
                          }
                        },
                        _react2.default.createElement(_Close2.default, { className: classes.modalClose })
                      ),
                      _react2.default.createElement(
                        "h4",
                        { className: classes.modalTitle },
                        "Modal title"
                      )
                    ),
                    _react2.default.createElement(
                      _DialogContent2.default,
                      {
                        id: "classic-modal-slide-description",
                        className: classes.modalBody
                      },
                      _react2.default.createElement(
                        "p",
                        null,
                        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
                      )
                    ),
                    _react2.default.createElement(
                      _DialogActions2.default,
                      { className: classes.modalFooter },
                      _react2.default.createElement(
                        _Button2.default,
                        { color: "transparent", simple: true },
                        "Nice Button"
                      ),
                      _react2.default.createElement(
                        _Button2.default,
                        {
                          onClick: function onClick() {
                            return _this2.handleClose("classicModal");
                          },
                          color: "danger",
                          simple: true
                        },
                        "Close"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 12 },
                _react2.default.createElement(
                  "div",
                  { className: classes.title },
                  _react2.default.createElement(
                    "h3",
                    null,
                    "Datetime Picker"
                  )
                ),
                _react2.default.createElement(
                  _GridContainer2.default,
                  null,
                  _react2.default.createElement(
                    _GridItem2.default,
                    { xs: 12, sm: 12, md: 6 },
                    _react2.default.createElement(
                      _InputLabel2.default,
                      { className: classes.label },
                      "Datetime Picker"
                    ),
                    _react2.default.createElement("br", null),
                    _react2.default.createElement(
                      _FormControl2.default,
                      { fullWidth: true },
                      _react2.default.createElement(_reactDatetime2.default, {
                        inputProps: { placeholder: "Datetime Picker Here" }
                      })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 6 },
              _react2.default.createElement(
                "div",
                { className: classes.title },
                _react2.default.createElement(
                  "h3",
                  null,
                  "Popovers"
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                {
                  buttonRef: function buttonRef(node) {
                    _this2.anchorElLeft = node;
                  },
                  onClick: function onClick() {
                    return _this2.handleClickButton("openLeft");
                  }
                },
                "On left"
              ),
              _react2.default.createElement(
                _Popover2.default,
                {
                  classes: {
                    paper: classes.popover
                  },
                  open: this.state.openLeft,
                  anchorEl: this.anchorElLeft,
                  anchorReference: "anchorEl",
                  onClose: function onClose() {
                    return _this2.handleClosePopover("openLeft");
                  },
                  anchorOrigin: {
                    vertical: "center",
                    horizontal: "left"
                  },
                  transformOrigin: {
                    vertical: "center",
                    horizontal: "right"
                  }
                },
                _react2.default.createElement(
                  "h3",
                  { className: classes.popoverHeader },
                  "Popover on left"
                ),
                _react2.default.createElement(
                  "div",
                  { className: classes.popoverBody },
                  "Here will be some very useful information about his popover. Here will be some very useful information about his popover."
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                {
                  buttonRef: function buttonRef(node) {
                    _this2.anchorElTop = node;
                  },
                  onClick: function onClick() {
                    return _this2.handleClickButton("openTop");
                  }
                },
                "On top"
              ),
              _react2.default.createElement(
                _Popover2.default,
                {
                  classes: {
                    paper: classes.popover
                  },
                  open: this.state.openTop,
                  anchorEl: this.anchorElTop,
                  anchorReference: "anchorEl",
                  onClose: function onClose() {
                    return _this2.handleClosePopover("openTop");
                  },
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                  },
                  transformOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                  }
                },
                _react2.default.createElement(
                  "h3",
                  { className: classes.popoverHeader },
                  "Popover on top"
                ),
                _react2.default.createElement(
                  "div",
                  { className: classes.popoverBody },
                  "Here will be some very useful information about his popover."
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                {
                  buttonRef: function buttonRef(node) {
                    _this2.anchorElBottom = node;
                  },
                  onClick: function onClick() {
                    return _this2.handleClickButton("openBottom");
                  }
                },
                "On bottom"
              ),
              _react2.default.createElement(
                _Popover2.default,
                {
                  classes: {
                    paper: classes.popover
                  },
                  open: this.state.openBottom,
                  anchorEl: this.anchorElBottom,
                  anchorReference: "anchorEl",
                  onClose: function onClose() {
                    return _this2.handleClosePopover("openBottom");
                  },
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "center"
                  }
                },
                _react2.default.createElement(
                  "h3",
                  { className: classes.popoverHeader },
                  "Popover on bottom"
                ),
                _react2.default.createElement(
                  "div",
                  { className: classes.popoverBody },
                  "Here will be some very useful information about his popover."
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                {
                  buttonRef: function buttonRef(node) {
                    _this2.anchorElRight = node;
                  },
                  onClick: function onClick() {
                    return _this2.handleClickButton("openRight");
                  }
                },
                "On right"
              ),
              _react2.default.createElement(
                _Popover2.default,
                {
                  classes: {
                    paper: classes.popover
                  },
                  open: this.state.openRight,
                  anchorEl: this.anchorElRight,
                  anchorReference: "anchorEl",
                  onClose: function onClose() {
                    return _this2.handleClosePopover("openRight");
                  },
                  anchorOrigin: {
                    vertical: "center",
                    horizontal: "right"
                  },
                  transformOrigin: {
                    vertical: "center",
                    horizontal: "left"
                  }
                },
                _react2.default.createElement(
                  "h3",
                  { className: classes.popoverHeader },
                  "Popover on right"
                ),
                _react2.default.createElement(
                  "div",
                  { className: classes.popoverBody },
                  "Here will be some very useful information about his popover."
                )
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "div",
                { className: classes.title },
                _react2.default.createElement(
                  "h3",
                  null,
                  "Tooltips"
                )
              ),
              _react2.default.createElement(
                _Tooltip2.default,
                {
                  id: "tooltip-left",
                  title: "Tooltip on left",
                  placement: "left",
                  classes: { tooltip: classes.tooltip }
                },
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  "On left"
                )
              ),
              _react2.default.createElement(
                _Tooltip2.default,
                {
                  id: "tooltip-top",
                  title: "Tooltip on top",
                  placement: "top",
                  classes: { tooltip: classes.tooltip }
                },
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  "On top"
                )
              ),
              _react2.default.createElement(
                _Tooltip2.default,
                {
                  id: "tooltip-bottom",
                  title: "Tooltip on bottom",
                  placement: "bottom",
                  classes: { tooltip: classes.tooltip }
                },
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  "On bottom"
                )
              ),
              _react2.default.createElement(
                _Tooltip2.default,
                {
                  id: "tooltip-right",
                  title: "Tooltip on right",
                  placement: "right",
                  classes: { tooltip: classes.tooltip }
                },
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  "On right"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: classes.title },
            _react2.default.createElement(
              "h3",
              null,
              "Carousel"
            )
          )
        )
      );
    }
  }]);

  return SectionJavascript;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_javascriptStyles2.default)(SectionJavascript);