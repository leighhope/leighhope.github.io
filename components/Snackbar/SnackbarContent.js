"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SnackbarContent = require("@material-ui/core/SnackbarContent");

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Close = require("@material-ui/icons/Close");

var _Close2 = _interopRequireDefault(_Close);

var _snackbarContentStyle = require("../../assets/jss/material-kit-react/components/snackbarContentStyle");

var _snackbarContentStyle2 = _interopRequireDefault(_snackbarContentStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons


var SnackbarContent = function (_React$Component) {
  _inherits(SnackbarContent, _React$Component);

  function SnackbarContent(props) {
    _classCallCheck(this, SnackbarContent);

    var _this = _possibleConstructorReturn(this, (SnackbarContent.__proto__ || Object.getPrototypeOf(SnackbarContent)).call(this, props));

    _this.closeAlert = _this.closeAlert.bind(_this);
    var classes = props.classes,
        message = props.message,
        color = props.color,
        close = props.close,
        icon = props.icon;

    var action = [];
    if (close !== undefined) {
      action = [_react2.default.createElement(
        _IconButton2.default,
        {
          className: classes.iconButton,
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          onClick: _this.closeAlert
        },
        _react2.default.createElement(_Close2.default, { className: classes.close })
      )];
    }

    var snackIcon = null;
    switch (typeof icon === "undefined" ? "undefined" : _typeof(icon)) {
      case "function":
        snackIcon = _react2.default.createElement(props.icon, { className: classes.icon });
        break;
      case "string":
        snackIcon = _react2.default.createElement(
          _Icon2.default,
          { className: classes.icon },
          props.icon
        );
        break;
      default:
        snackIcon = null;
        break;
    }

    _this.state = {
      alert: _react2.default.createElement(_SnackbarContent2.default, {
        message: _react2.default.createElement(
          "div",
          null,
          snackIcon,
          message,
          close !== undefined ? action : null
        ),
        classes: {
          root: classes.root + " " + classes[color],
          message: classes.message + " " + classes.container
        }
      })
    };
    return _this;
  }

  _createClass(SnackbarContent, [{
    key: "closeAlert",
    value: function closeAlert() {
      this.setState({ alert: null });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.alert;
    }
  }]);

  return SnackbarContent;
}(_react2.default.Component);

SnackbarContent.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  message: _propTypes2.default.node.isRequired,
  color: _propTypes2.default.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: _propTypes2.default.bool,
  icon: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};

exports.default = (0, _withStyles2.default)(_snackbarContentStyle2.default)(SnackbarContent);