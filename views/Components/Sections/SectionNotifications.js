"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Check = require("@material-ui/icons/Check");

var _Check2 = _interopRequireDefault(_Check);

var _Warning = require("@material-ui/icons/Warning");

var _Warning2 = _interopRequireDefault(_Warning);

var _SnackbarContent = require("../../../components/Snackbar/SnackbarContent");

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

var _Clearfix = require("../../../components/Clearfix/Clearfix");

var _Clearfix2 = _interopRequireDefault(_Clearfix);

var _notificationsStyles = require("../../../assets/jss/material-kit-react/views/componentsSections/notificationsStyles");

var _notificationsStyles2 = _interopRequireDefault(_notificationsStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @material-ui/core components

// @material-ui/icons

// core components


var SectionNotifications = function (_React$Component) {
  _inherits(SectionNotifications, _React$Component);

  function SectionNotifications() {
    _classCallCheck(this, SectionNotifications);

    return _possibleConstructorReturn(this, (SectionNotifications.__proto__ || Object.getPrototypeOf(SectionNotifications)).apply(this, arguments));
  }

  _createClass(SectionNotifications, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        "div",
        { className: classes.section, id: "notifications" },
        _react2.default.createElement(
          "div",
          { className: classes.container },
          _react2.default.createElement(
            "div",
            { className: classes.title },
            _react2.default.createElement(
              "h3",
              null,
              "Notifications"
            )
          )
        ),
        _react2.default.createElement(_SnackbarContent2.default, {
          message: _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              "b",
              null,
              "INFO ALERT:"
            ),
            " You've got some friends nearby, stop looking at your phone and find them..."
          ),
          close: true,
          color: "info",
          icon: "info_outline"
        }),
        _react2.default.createElement(_SnackbarContent2.default, {
          message: _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              "b",
              null,
              "SUCCESS ALERT:"
            ),
            " You've got some friends nearby, stop looking at your phone and find them..."
          ),
          close: true,
          color: "success",
          icon: _Check2.default
        }),
        _react2.default.createElement(_SnackbarContent2.default, {
          message: _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              "b",
              null,
              "WARNING ALERT:"
            ),
            " You've got some friends nearby, stop looking at your phone and find them..."
          ),
          close: true,
          color: "warning",
          icon: _Warning2.default
        }),
        _react2.default.createElement(_SnackbarContent2.default, {
          message: _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              "b",
              null,
              "DANGER ALERT:"
            ),
            " You've got some friends nearby, stop looking at your phone and find them..."
          ),
          close: true,
          color: "danger",
          icon: "info_outline"
        }),
        _react2.default.createElement(_Clearfix2.default, null)
      );
    }
  }]);

  return SectionNotifications;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_notificationsStyles2.default)(SectionNotifications);