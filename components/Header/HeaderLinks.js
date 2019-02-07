"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _List = require("@material-ui/core/List");

var _List2 = _interopRequireDefault(_List);

var _ListItem = require("@material-ui/core/ListItem");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Tooltip = require("@material-ui/core/Tooltip");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _icons = require("@material-ui/icons");

var _CustomDropdown = require("../CustomDropdown/CustomDropdown");

var _CustomDropdown2 = _interopRequireDefault(_CustomDropdown);

var _Button = require("../CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _headerLinksStyle = require("../../assets/jss/material-kit-react/components/headerLinksStyle");

var _headerLinksStyle2 = _interopRequireDefault(_headerLinksStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*eslint-disable*/

// react components for routing our app without refresh


// @material-ui/core components


// @material-ui/icons


// core components


function HeaderLinks(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes;

  return _react2.default.createElement(
    _List2.default,
    { className: classes.list },
    _react2.default.createElement(
      _ListItem2.default,
      { className: classes.listItem },
      _react2.default.createElement(_CustomDropdown2.default, {
        noLiPadding: true,
        buttonText: "Components",
        buttonProps: {
          className: classes.navLink,
          color: "transparent"
        },
        buttonIcon: _icons.Apps,
        dropdownList: [_react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/", className: classes.dropdownLink },
          "All components"
        ), _react2.default.createElement(
          "a",
          {
            href: "https://creativetimofficial.github.io/material-kit-react/#/documentation",
            target: "_blank",
            className: classes.dropdownLink
          },
          "Documentation"
        )]
      })
    ),
    _react2.default.createElement(
      _ListItem2.default,
      { className: classes.listItem },
      _react2.default.createElement(
        _Button2.default,
        {
          href: "https://www.creative-tim.com/product/material-kit-react",
          color: "transparent",
          target: "_blank",
          className: classes.navLink
        },
        _react2.default.createElement(_icons.CloudDownload, { className: classes.icons }),
        " Download"
      )
    ),
    _react2.default.createElement(
      _ListItem2.default,
      { className: classes.listItem },
      _react2.default.createElement(
        _Tooltip2.default,
        {
          id: "instagram-twitter",
          title: "Follow us on twitter",
          placement: window.innerWidth > 959 ? "top" : "left",
          classes: { tooltip: classes.tooltip }
        },
        _react2.default.createElement(
          _Button2.default,
          {
            href: "https://twitter.com/CreativeTim",
            target: "_blank",
            color: "transparent",
            className: classes.navLink
          },
          _react2.default.createElement("i", { className: classes.socialIcons + " fab fa-twitter" })
        )
      )
    ),
    _react2.default.createElement(
      _ListItem2.default,
      { className: classes.listItem },
      _react2.default.createElement(
        _Tooltip2.default,
        {
          id: "instagram-facebook",
          title: "Follow us on facebook",
          placement: window.innerWidth > 959 ? "top" : "left",
          classes: { tooltip: classes.tooltip }
        },
        _react2.default.createElement(
          _Button2.default,
          {
            color: "transparent",
            href: "https://www.facebook.com/CreativeTim",
            target: "_blank",
            className: classes.navLink
          },
          _react2.default.createElement("i", { className: classes.socialIcons + " fab fa-facebook" })
        )
      )
    ),
    _react2.default.createElement(
      _ListItem2.default,
      { className: classes.listItem },
      _react2.default.createElement(
        _Tooltip2.default,
        {
          id: "instagram-tooltip",
          title: "Follow us on instagram",
          placement: window.innerWidth > 959 ? "top" : "left",
          classes: { tooltip: classes.tooltip }
        },
        _react2.default.createElement(
          _Button2.default,
          {
            color: "transparent",
            href: "https://www.instagram.com/CreativeTimOfficial",
            target: "_blank",
            className: classes.navLink
          },
          _react2.default.createElement("i", { className: classes.socialIcons + " fab fa-instagram" })
        )
      )
    )
  );
}

exports.default = (0, _withStyles2.default)(_headerLinksStyle2.default)(HeaderLinks);