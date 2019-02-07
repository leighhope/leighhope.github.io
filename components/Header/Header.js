"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _AppBar = require("@material-ui/core/AppBar");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require("@material-ui/core/Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Button = require("@material-ui/core/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Hidden = require("@material-ui/core/Hidden");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Drawer = require("@material-ui/core/Drawer");

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Menu = require("@material-ui/icons/Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _headerStyle = require("../../assets/jss/material-kit-react/components/headerStyle");

var _headerStyle2 = _interopRequireDefault(_headerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      mobileOpen: false
    };
    _this.handleDrawerToggle = _this.handleDrawerToggle.bind(_this);
    _this.headerColorChange = _this.headerColorChange.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: "handleDrawerToggle",
    value: function handleDrawerToggle() {
      this.setState({ mobileOpen: !this.state.mobileOpen });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.changeColorOnScroll) {
        window.addEventListener("scroll", this.headerColorChange);
      }
    }
  }, {
    key: "headerColorChange",
    value: function headerColorChange() {
      var _props = this.props,
          classes = _props.classes,
          color = _props.color,
          changeColorOnScroll = _props.changeColorOnScroll;

      var windowsScrollTop = window.pageYOffset;
      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
        document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
      } else {
        document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
        document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.changeColorOnScroll) {
        window.removeEventListener("scroll", this.headerColorChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          classes = _props2.classes,
          color = _props2.color,
          rightLinks = _props2.rightLinks,
          leftLinks = _props2.leftLinks,
          brand = _props2.brand,
          fixed = _props2.fixed,
          absolute = _props2.absolute;

      var appBarClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.appBar, true), _defineProperty(_classNames, classes[color], color), _defineProperty(_classNames, classes.absolute, absolute), _defineProperty(_classNames, classes.fixed, fixed), _classNames));
      var brandComponent = _react2.default.createElement(
        _Button2.default,
        { className: classes.title },
        brand
      );
      return _react2.default.createElement(
        _AppBar2.default,
        { className: appBarClasses },
        _react2.default.createElement(
          _Toolbar2.default,
          { className: classes.container },
          leftLinks !== undefined ? brandComponent : null,
          _react2.default.createElement(
            "div",
            { className: classes.flex },
            leftLinks !== undefined ? _react2.default.createElement(
              _Hidden2.default,
              { smDown: true, implementation: "css" },
              leftLinks
            ) : brandComponent
          ),
          _react2.default.createElement(
            _Hidden2.default,
            { smDown: true, implementation: "css" },
            rightLinks
          ),
          _react2.default.createElement(
            _Hidden2.default,
            { mdUp: true },
            _react2.default.createElement(
              _IconButton2.default,
              {
                color: "inherit",
                "aria-label": "open drawer",
                onClick: this.handleDrawerToggle
              },
              _react2.default.createElement(_Menu2.default, null)
            )
          )
        ),
        _react2.default.createElement(
          _Hidden2.default,
          { mdUp: true, implementation: "css" },
          _react2.default.createElement(
            _Drawer2.default,
            {
              variant: "temporary",
              anchor: "right",
              open: this.state.mobileOpen,
              classes: {
                paper: classes.drawerPaper
              },
              onClose: this.handleDrawerToggle
            },
            _react2.default.createElement(
              "div",
              { className: classes.appResponsive },
              leftLinks,
              rightLinks
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  color: _propTypes2.default.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]),
  rightLinks: _propTypes2.default.node,
  leftLinks: _propTypes2.default.node,
  brand: _propTypes2.default.string,
  fixed: _propTypes2.default.bool,
  absolute: _propTypes2.default.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: _propTypes2.default.shape({
    height: _propTypes2.default.number.isRequired,
    color: _propTypes2.default.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]).isRequired
  })
};

exports.default = (0, _withStyles2.default)(_headerStyle2.default)(Header);