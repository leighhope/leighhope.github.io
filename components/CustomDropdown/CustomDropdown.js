"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _MenuItem = require("@material-ui/core/MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuList = require("@material-ui/core/MenuList");

var _MenuList2 = _interopRequireDefault(_MenuList);

var _ClickAwayListener = require("@material-ui/core/ClickAwayListener");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Paper = require("@material-ui/core/Paper");

var _Paper2 = _interopRequireDefault(_Paper);

var _Grow = require("@material-ui/core/Grow");

var _Grow2 = _interopRequireDefault(_Grow);

var _Divider = require("@material-ui/core/Divider");

var _Divider2 = _interopRequireDefault(_Divider);

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Popper = require("@material-ui/core/Popper");

var _Popper2 = _interopRequireDefault(_Popper);

var _Button = require("../CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _customDropdownStyle = require("../../assets/jss/material-kit-react/components/customDropdownStyle");

var _customDropdownStyle2 = _interopRequireDefault(_customDropdownStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// nodejs library to set properties for components


// @material-ui/core components


// core components


var CustomDropdown = function (_React$Component) {
  _inherits(CustomDropdown, _React$Component);

  function CustomDropdown(props) {
    _classCallCheck(this, CustomDropdown);

    var _this = _possibleConstructorReturn(this, (CustomDropdown.__proto__ || Object.getPrototypeOf(CustomDropdown)).call(this, props));

    _this.handleCloseAway = function (event) {
      if (_this.anchorEl.contains(event.target)) {
        return;
      }
      _this.setState({ open: false });
    };

    _this.state = {
      open: false
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  _createClass(CustomDropdown, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState(function (state) {
        return { open: !state.open };
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose(param) {
      this.setState({ open: false });
      if (this.props && this.props.onClick) {
        this.props.onClick(param);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _classNames2,
          _this2 = this,
          _classNames3;

      var open = this.state.open;
      var _props = this.props,
          classes = _props.classes,
          buttonText = _props.buttonText,
          buttonIcon = _props.buttonIcon,
          dropdownList = _props.dropdownList,
          buttonProps = _props.buttonProps,
          dropup = _props.dropup,
          dropdownHeader = _props.dropdownHeader,
          caret = _props.caret,
          hoverColor = _props.hoverColor,
          left = _props.left,
          rtlActive = _props.rtlActive,
          noLiPadding = _props.noLiPadding;

      var caretClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.caret, true), _defineProperty(_classNames, classes.caretActive, open), _defineProperty(_classNames, classes.caretRTL, rtlActive), _classNames));
      var dropdownItem = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.dropdownItem, true), _defineProperty(_classNames2, classes[hoverColor + "Hover"], true), _defineProperty(_classNames2, classes.noLiPadding, noLiPadding), _defineProperty(_classNames2, classes.dropdownItemRTL, rtlActive), _classNames2));
      var icon = null;
      switch (typeof buttonIcon === "undefined" ? "undefined" : _typeof(buttonIcon)) {
        case "function":
          icon = _react2.default.createElement(this.props.buttonIcon, { className: classes.buttonIcon });
          break;
        case "string":
          icon = _react2.default.createElement(
            _Icon2.default,
            { className: classes.buttonIcon },
            this.props.buttonIcon
          );
          break;
        default:
          icon = null;
          break;
      }
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            _Button2.default,
            _extends({
              "aria-label": "Notifications",
              "aria-owns": open ? "menu-list" : null,
              "aria-haspopup": "true"
            }, buttonProps, {
              buttonRef: function buttonRef(node) {
                _this2.anchorEl = node;
              },
              onClick: this.handleClick
            }),
            icon,
            buttonText !== undefined ? buttonText : null,
            caret ? _react2.default.createElement("b", { className: caretClasses }) : null
          )
        ),
        _react2.default.createElement(
          _Popper2.default,
          {
            open: open,
            anchorEl: this.anchorEl,
            transition: true,
            disablePortal: true,
            placement: dropup ? left ? "top-start" : "top" : left ? "bottom-start" : "bottom",
            className: (0, _classnames2.default)((_classNames3 = {}, _defineProperty(_classNames3, classes.popperClose, !open), _defineProperty(_classNames3, classes.pooperResponsive, true), _classNames3))
          },
          function (_ref) {
            var TransitionProps = _ref.TransitionProps,
                placement = _ref.placement;
            return _react2.default.createElement(
              _Grow2.default,
              {
                "in": open,
                id: "menu-list",
                style: dropup ? { transformOrigin: "0 100% 0" } : { transformOrigin: "0 0 0" }
              },
              _react2.default.createElement(
                _Paper2.default,
                { className: classes.dropdown },
                _react2.default.createElement(
                  _ClickAwayListener2.default,
                  { onClickAway: _this2.handleCloseAway },
                  _react2.default.createElement(
                    _MenuList2.default,
                    { role: "menu", className: classes.menuList },
                    dropdownHeader !== undefined ? _react2.default.createElement(
                      _MenuItem2.default,
                      {
                        onClick: _this2.handleClose,
                        className: classes.dropdownHeader
                      },
                      dropdownHeader
                    ) : null,
                    dropdownList.map(function (prop, key) {
                      if (prop.divider) {
                        return _react2.default.createElement(_Divider2.default, {
                          key: key,
                          onClick: _this2.handleClose,
                          className: classes.dropdownDividerItem
                        });
                      }
                      return _react2.default.createElement(
                        _MenuItem2.default,
                        {
                          key: key,
                          onClick: _this2.handleClose,
                          className: dropdownItem
                        },
                        prop
                      );
                    })
                  )
                )
              )
            );
          }
        )
      );
    }
  }]);

  return CustomDropdown;
}(_react2.default.Component);

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};

CustomDropdown.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  hoverColor: _propTypes2.default.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: _propTypes2.default.node,
  buttonIcon: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  dropdownList: _propTypes2.default.array,
  buttonProps: _propTypes2.default.object,
  dropup: _propTypes2.default.bool,
  dropdownHeader: _propTypes2.default.node,
  rtlActive: _propTypes2.default.bool,
  caret: _propTypes2.default.bool,
  left: _propTypes2.default.bool,
  noLiPadding: _propTypes2.default.bool,
  // function that retuns the selected item
  onClick: _propTypes2.default.func
};

exports.default = (0, _withStyles2.default)(_customDropdownStyle2.default)(CustomDropdown);