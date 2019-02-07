"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Camera = require("@material-ui/icons/Camera");

var _Camera2 = _interopRequireDefault(_Camera);

var _Palette = require("@material-ui/icons/Palette");

var _Palette2 = _interopRequireDefault(_Palette);

var _Favorite = require("@material-ui/icons/Favorite");

var _Favorite2 = _interopRequireDefault(_Favorite);

var _Header = require("../../components/Header/Header");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require("../../components/Footer/Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var _Button = require("../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _GridContainer = require("../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _HeaderLinks = require("../../components/Header/HeaderLinks");

var _HeaderLinks2 = _interopRequireDefault(_HeaderLinks);

var _NavPills = require("../../components/NavPills/NavPills");

var _NavPills2 = _interopRequireDefault(_NavPills);

var _Parallax = require("../../components/Parallax/Parallax");

var _Parallax2 = _interopRequireDefault(_Parallax);

var _christian = require("../../assets/img/faces/christian.jpg");

var _christian2 = _interopRequireDefault(_christian);

var _studio = require("../../assets/img/examples/studio-1.jpg");

var _studio2 = _interopRequireDefault(_studio);

var _studio3 = require("../../assets/img/examples/studio-2.jpg");

var _studio4 = _interopRequireDefault(_studio3);

var _studio5 = require("../../assets/img/examples/studio-3.jpg");

var _studio6 = _interopRequireDefault(_studio5);

var _studio7 = require("../../assets/img/examples/studio-4.jpg");

var _studio8 = _interopRequireDefault(_studio7);

var _studio9 = require("../../assets/img/examples/studio-5.jpg");

var _studio10 = _interopRequireDefault(_studio9);

var _oluEletu = require("../../assets/img/examples/olu-eletu.jpg");

var _oluEletu2 = _interopRequireDefault(_oluEletu);

var _clemOnojeghuo = require("../../assets/img/examples/clem-onojeghuo.jpg");

var _clemOnojeghuo2 = _interopRequireDefault(_clemOnojeghuo);

var _cynthiaDelRio = require("../../assets/img/examples/cynthia-del-rio.jpg");

var _cynthiaDelRio2 = _interopRequireDefault(_cynthiaDelRio);

var _mariyaGeorgieva = require("../../assets/img/examples/mariya-georgieva.jpg");

var _mariyaGeorgieva2 = _interopRequireDefault(_mariyaGeorgieva);

var _clemOnojegaw = require("../../assets/img/examples/clem-onojegaw.jpg");

var _clemOnojegaw2 = _interopRequireDefault(_clemOnojegaw);

var _profilePage = require("../../assets/jss/material-kit-react/views/profilePage");

var _profilePage2 = _interopRequireDefault(_profilePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// @material-ui/core components

// @material-ui/icons

// core components


var ProfilePage = function (_React$Component) {
  _inherits(ProfilePage, _React$Component);

  function ProfilePage() {
    _classCallCheck(this, ProfilePage);

    return _possibleConstructorReturn(this, (ProfilePage.__proto__ || Object.getPrototypeOf(ProfilePage)).apply(this, arguments));
  }

  _createClass(ProfilePage, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          rest = _objectWithoutProperties(_props, ["classes"]);

      var imageClasses = (0, _classnames2.default)(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
      var navImageClasses = (0, _classnames2.default)(classes.imgRounded, classes.imgGallery);
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, _extends({
          color: "transparent",
          brand: "Material Kit React",
          rightLinks: _react2.default.createElement(_HeaderLinks2.default, null),
          fixed: true,
          changeColorOnScroll: {
            height: 200,
            color: "white"
          }
        }, rest)),
        _react2.default.createElement(_Parallax2.default, { small: true, filter: true, image: require("../../assets/img/profile-bg.jpg") }),
        _react2.default.createElement(
          "div",
          { className: (0, _classnames2.default)(classes.main, classes.mainRaised) },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { className: classes.container },
              _react2.default.createElement(
                _GridContainer2.default,
                { justify: "center" },
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 6 },
                  _react2.default.createElement(
                    "div",
                    { className: classes.profile },
                    _react2.default.createElement(
                      "div",
                      null,
                      _react2.default.createElement("img", { src: _christian2.default, alt: "...", className: imageClasses })
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: classes.name },
                      _react2.default.createElement(
                        "h3",
                        { className: classes.title },
                        "Christian Louboutin"
                      ),
                      _react2.default.createElement(
                        "h6",
                        null,
                        "DESIGNER"
                      ),
                      _react2.default.createElement(
                        _Button2.default,
                        { justIcon: true, link: true, className: classes.margin5 },
                        _react2.default.createElement("i", { className: "fab fa-twitter" })
                      ),
                      _react2.default.createElement(
                        _Button2.default,
                        { justIcon: true, link: true, className: classes.margin5 },
                        _react2.default.createElement("i", { className: "fab fa-instagram" })
                      ),
                      _react2.default.createElement(
                        _Button2.default,
                        { justIcon: true, link: true, className: classes.margin5 },
                        _react2.default.createElement("i", { className: "fab fa-facebook" })
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: classes.description },
                _react2.default.createElement(
                  "p",
                  null,
                  "An artist of considerable range, Chet Faker \u2014 the name taken by Melbourne-raised, Brooklyn-based Nick Murphy \u2014 writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.",
                  " "
                )
              ),
              _react2.default.createElement(
                _GridContainer2.default,
                { justify: "center" },
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 8, className: classes.navWrapper },
                  _react2.default.createElement(_NavPills2.default, {
                    alignCenter: true,
                    color: "primary",
                    tabs: [{
                      tabButton: "Studio",
                      tabIcon: _Camera2.default,
                      tabContent: _react2.default.createElement(
                        _GridContainer2.default,
                        { justify: "center" },
                        _react2.default.createElement(
                          _GridItem2.default,
                          { xs: 12, sm: 12, md: 4 },
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _studio2.default,
                            className: navImageClasses
                          }),
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _studio4.default,
                            className: navImageClasses
                          })
                        ),
                        _react2.default.createElement(
                          _GridItem2.default,
                          { xs: 12, sm: 12, md: 4 },
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _studio10.default,
                            className: navImageClasses
                          }),
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _studio8.default,
                            className: navImageClasses
                          })
                        )
                      )
                    }, {
                      tabButton: "Work",
                      tabIcon: _Palette2.default,
                      tabContent: _react2.default.createElement(
                        _GridContainer2.default,
                        { justify: "center" },
                        _react2.default.createElement(
                          _GridItem2.default,
                          { xs: 12, sm: 12, md: 4 },
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _oluEletu2.default,
                            className: navImageClasses
                          }),
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _clemOnojeghuo2.default,
                            className: navImageClasses
                          }),
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _cynthiaDelRio2.default,
                            className: navImageClasses
                          })
                        ),
                        _react2.default.createElement(
                          _GridItem2.default,
                          { xs: 12, sm: 12, md: 4 },
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _mariyaGeorgieva2.default,
                            className: navImageClasses
                          }),
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _clemOnojegaw2.default,
                            className: navImageClasses
                          })
                        )
                      )
                    }, {
                      tabButton: "Favorite",
                      tabIcon: _Favorite2.default,
                      tabContent: _react2.default.createElement(
                        _GridContainer2.default,
                        { justify: "center" },
                        _react2.default.createElement(
                          _GridItem2.default,
                          { xs: 12, sm: 12, md: 4 },
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _mariyaGeorgieva2.default,
                            className: navImageClasses
                          }),
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _studio6.default,
                            className: navImageClasses
                          })
                        ),
                        _react2.default.createElement(
                          _GridItem2.default,
                          { xs: 12, sm: 12, md: 4 },
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _clemOnojeghuo2.default,
                            className: navImageClasses
                          }),
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _oluEletu2.default,
                            className: navImageClasses
                          }),
                          _react2.default.createElement("img", {
                            alt: "...",
                            src: _studio2.default,
                            className: navImageClasses
                          })
                        )
                      )
                    }]
                  })
                )
              )
            )
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return ProfilePage;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_profilePage2.default)(ProfilePage);