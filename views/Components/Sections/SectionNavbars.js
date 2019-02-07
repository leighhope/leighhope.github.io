"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _List = require("@material-ui/core/List");

var _List2 = _interopRequireDefault(_List);

var _ListItem = require("@material-ui/core/ListItem");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Search = require("@material-ui/icons/Search");

var _Search2 = _interopRequireDefault(_Search);

var _Email = require("@material-ui/icons/Email");

var _Email2 = _interopRequireDefault(_Email);

var _Face = require("@material-ui/icons/Face");

var _Face2 = _interopRequireDefault(_Face);

var _AccountCircle = require("@material-ui/icons/AccountCircle");

var _AccountCircle2 = _interopRequireDefault(_AccountCircle);

var _Explore = require("@material-ui/icons/Explore");

var _Explore2 = _interopRequireDefault(_Explore);

var _GridContainer = require("../../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _Header = require("../../../components/Header/Header");

var _Header2 = _interopRequireDefault(_Header);

var _CustomInput = require("../../../components/CustomInput/CustomInput");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _CustomDropdown = require("../../../components/CustomDropdown/CustomDropdown");

var _CustomDropdown2 = _interopRequireDefault(_CustomDropdown);

var _Button = require("../../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _navbarsStyle = require("../../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle");

var _navbarsStyle2 = _interopRequireDefault(_navbarsStyle);

var _bg = require("../../../assets/img/bg.jpg");

var _bg2 = _interopRequireDefault(_bg);

var _avatar = require("../../../assets/img/faces/avatar.jpg");

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @material-ui/core components

// @material-ui/icons

// core components


var SectionNavbars = function (_React$Component) {
  _inherits(SectionNavbars, _React$Component);

  function SectionNavbars() {
    _classCallCheck(this, SectionNavbars);

    return _possibleConstructorReturn(this, (SectionNavbars.__proto__ || Object.getPrototypeOf(SectionNavbars)).apply(this, arguments));
  }

  _createClass(SectionNavbars, [{
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
                  "Menu"
                )
              ),
              _react2.default.createElement(_Header2.default, {
                brand: "Menu",
                color: "primary",
                leftLinks: _react2.default.createElement(
                  _List2.default,
                  { className: classes.list },
                  _react2.default.createElement(
                    _ListItem2.default,
                    { className: classes.listItem },
                    _react2.default.createElement(
                      _Button2.default,
                      {
                        href: "#pablo",
                        className: classes.navLink,
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        },
                        color: "transparent"
                      },
                      "Link"
                    )
                  ),
                  _react2.default.createElement(
                    _ListItem2.default,
                    { className: classes.listItem },
                    _react2.default.createElement(
                      _Button2.default,
                      {
                        href: "#pablo",
                        className: classes.navLink,
                        onClick: function onClick(e) {
                          return e.preventDefault();
                        },
                        color: "transparent"
                      },
                      "Link"
                    )
                  ),
                  _react2.default.createElement(
                    _ListItem2.default,
                    { className: classes.listItem },
                    _react2.default.createElement(_CustomDropdown2.default, {
                      buttonText: "Dropdown",
                      dropdownHeader: "Dropdown Header",
                      buttonProps: {
                        className: classes.navLink,
                        color: "transparent"
                      },
                      dropdownList: ["Action", "Another action", "Something else here", { divider: true }, "Separated link", { divider: true }, "One more separated link"]
                    })
                  )
                )
              })
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
                  "Menu with Icons"
                )
              ),
              _react2.default.createElement(_Header2.default, {
                brand: "Icons",
                color: "info",
                rightLinks: _react2.default.createElement(
                  _List2.default,
                  { className: classes.list },
                  _react2.default.createElement(
                    _ListItem2.default,
                    { className: classes.listItem },
                    _react2.default.createElement(
                      _Button2.default,
                      { color: "transparent", className: classes.navLink },
                      _react2.default.createElement(_Email2.default, { className: classes.icons })
                    )
                  ),
                  _react2.default.createElement(
                    _ListItem2.default,
                    { className: classes.listItem },
                    _react2.default.createElement(
                      _Button2.default,
                      { color: "transparent", className: classes.navLink },
                      _react2.default.createElement(_Face2.default, { className: classes.icons })
                    )
                  ),
                  _react2.default.createElement(
                    _ListItem2.default,
                    { className: classes.listItem },
                    _react2.default.createElement(_CustomDropdown2.default, {
                      left: true,
                      hoverColor: "info",
                      dropdownHeader: "Dropdown Header",
                      buttonIcon: "settings",
                      buttonProps: {
                        className: classes.navLink,
                        color: "transparent"
                      },
                      dropdownList: ["Action", "Another action", "Something else here", { divider: true }, "Separated link", { divider: true }, "One more separated link"]
                    })
                  )
                )
              })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: classes.title },
            _react2.default.createElement(
              "h3",
              null,
              "Navigation"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { id: "navbar", className: classes.navbar },
          _react2.default.createElement(
            "div",
            {
              className: classes.navigation,
              style: { backgroundImage: "url(" + _bg2.default + ")" }
            },
            _react2.default.createElement(_Header2.default, {
              brand: "Brand",
              color: "rose",
              leftLinks: _react2.default.createElement(
                _List2.default,
                { className: classes.list },
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    "Link"
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    "Link"
                  )
                )
              ),
              rightLinks: _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_CustomInput2.default, {
                  white: true,
                  inputRootCustomClasses: classes.inputRootCustomClasses,
                  formControlProps: {
                    className: classes.formControl
                  },
                  inputProps: {
                    placeholder: "Search",
                    inputProps: {
                      "aria-label": "Search",
                      className: classes.searchInput
                    }
                  }
                }),
                _react2.default.createElement(
                  _Button2.default,
                  { justIcon: true, round: true, color: "white" },
                  _react2.default.createElement(_Search2.default, { className: classes.searchIcon })
                )
              )
            }),
            _react2.default.createElement(_Header2.default, {
              brand: "Info Color",
              color: "info",
              rightLinks: _react2.default.createElement(
                _List2.default,
                { className: classes.list },
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink + " " + classes.navLinkActive,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    "Discover"
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    "Profile"
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    "Settings"
                  )
                )
              )
            }),
            _react2.default.createElement(_Header2.default, {
              brand: "Primary Color",
              color: "primary",
              rightLinks: _react2.default.createElement(
                _List2.default,
                { className: classes.list },
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink + " " + classes.navLinkActive,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    _react2.default.createElement(_Explore2.default, { className: classes.icons }),
                    " Discover"
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    _react2.default.createElement(_AccountCircle2.default, { className: classes.icons }),
                    " Profile"
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    _react2.default.createElement(
                      _Icon2.default,
                      { className: classes.icons },
                      "settings"
                    ),
                    " Settings"
                  )
                )
              )
            }),
            _react2.default.createElement(_Header2.default, {
              brand: "Navbar with notifications",
              color: "dark",
              rightLinks: _react2.default.createElement(
                _List2.default,
                { className: classes.list },
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    "Discover"
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    "Wishlist"
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      justIcon: true,
                      round: true,
                      href: "#pablo",
                      className: classes.notificationNavLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "rose"
                    },
                    _react2.default.createElement(_Email2.default, { className: classes.icons })
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(_CustomDropdown2.default, {
                    left: true,
                    caret: false,
                    hoverColor: "black",
                    dropdownHeader: "Dropdown Header",
                    buttonText: _react2.default.createElement("img", {
                      src: _avatar2.default,
                      className: classes.img,
                      alt: "profile"
                    }),
                    buttonProps: {
                      className: classes.navLink + " " + classes.imageDropdownButton,
                      color: "transparent"
                    },
                    dropdownList: ["Me", "Settings and other stuff", "Sign out"]
                  })
                )
              )
            }),
            _react2.default.createElement(_Header2.default, {
              brand: "Navbar with profile",
              rightLinks: _react2.default.createElement(
                _List2.default,
                { className: classes.list },
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    "Discover"
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.navLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "transparent"
                    },
                    "Wishlist"
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      href: "#pablo",
                      className: classes.registerNavLink,
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      color: "rose",
                      round: true
                    },
                    "Register"
                  )
                )
              )
            }),
            _react2.default.createElement(_Header2.default, {
              brand: "Transparent",
              color: "transparent",
              rightLinks: _react2.default.createElement(
                _List2.default,
                { className: classes.list },
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      color: "transparent",
                      className: classes.navLink + " " + classes.socialIconsButton
                    },
                    _react2.default.createElement("i", {
                      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter"
                    }),
                    " ",
                    "Twitter"
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      color: "transparent",
                      className: classes.navLink + " " + classes.socialIconsButton
                    },
                    _react2.default.createElement("i", {
                      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-facebook"
                    }),
                    " ",
                    "Facebook"
                  )
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { className: classes.listItem },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      color: "transparent",
                      className: classes.navLink + " " + classes.socialIconsButton
                    },
                    _react2.default.createElement("i", {
                      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-instagram"
                    }),
                    " ",
                    "Instagram"
                  )
                )
              )
            })
          )
        )
      );
    }
  }]);

  return SectionNavbars;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_navbarsStyle2.default)(SectionNavbars);