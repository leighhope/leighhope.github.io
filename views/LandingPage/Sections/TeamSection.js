"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _GridContainer = require("../../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _Button = require("../../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Card = require("../../../components/Card/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = require("../../../components/Card/CardBody");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardFooter = require("../../../components/Card/CardFooter");

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _teamStyle = require("../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle");

var _teamStyle2 = _interopRequireDefault(_teamStyle);

var _avatar = require("../../../assets/img/faces/avatar.jpg");

var _avatar2 = _interopRequireDefault(_avatar);

var _christian = require("../../../assets/img/faces/christian.jpg");

var _christian2 = _interopRequireDefault(_christian);

var _kendall = require("../../../assets/img/faces/kendall.jpg");

var _kendall2 = _interopRequireDefault(_kendall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// @material-ui/core components


// @material-ui/icons

// core components


var TeamSection = function (_React$Component) {
  _inherits(TeamSection, _React$Component);

  function TeamSection() {
    _classCallCheck(this, TeamSection);

    return _possibleConstructorReturn(this, (TeamSection.__proto__ || Object.getPrototypeOf(TeamSection)).apply(this, arguments));
  }

  _createClass(TeamSection, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      var imageClasses = (0, _classnames2.default)(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
      return _react2.default.createElement(
        "div",
        { className: classes.section },
        _react2.default.createElement(
          "h2",
          { className: classes.title },
          "Here is our team"
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            _GridContainer2.default,
            null,
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(
                _Card2.default,
                { plain: true },
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 6, className: classes.itemGrid },
                  _react2.default.createElement("img", { src: _avatar2.default, alt: "...", className: imageClasses })
                ),
                _react2.default.createElement(
                  "h4",
                  { className: classes.cardTitle },
                  "Gigi Hadid",
                  _react2.default.createElement("br", null),
                  _react2.default.createElement(
                    "small",
                    { className: classes.smallTitle },
                    "Model"
                  )
                ),
                _react2.default.createElement(
                  _CardBody2.default,
                  null,
                  _react2.default.createElement(
                    "p",
                    { className: classes.description },
                    "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",
                    _react2.default.createElement(
                      "a",
                      { href: "#pablo" },
                      "links"
                    ),
                    " for people to be able to follow them outside the site."
                  )
                ),
                _react2.default.createElement(
                  _CardFooter2.default,
                  { className: classes.justifyCenter },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      justIcon: true,
                      color: "transparent",
                      className: classes.margin5
                    },
                    _react2.default.createElement("i", { className: classes.socials + " fab fa-twitter" })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      justIcon: true,
                      color: "transparent",
                      className: classes.margin5
                    },
                    _react2.default.createElement("i", { className: classes.socials + " fab fa-instagram" })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      justIcon: true,
                      color: "transparent",
                      className: classes.margin5
                    },
                    _react2.default.createElement("i", { className: classes.socials + " fab fa-facebook" })
                  )
                )
              )
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(
                _Card2.default,
                { plain: true },
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 6, className: classes.itemGrid },
                  _react2.default.createElement("img", { src: _christian2.default, alt: "...", className: imageClasses })
                ),
                _react2.default.createElement(
                  "h4",
                  { className: classes.cardTitle },
                  "Christian Louboutin",
                  _react2.default.createElement("br", null),
                  _react2.default.createElement(
                    "small",
                    { className: classes.smallTitle },
                    "Designer"
                  )
                ),
                _react2.default.createElement(
                  _CardBody2.default,
                  null,
                  _react2.default.createElement(
                    "p",
                    { className: classes.description },
                    "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",
                    _react2.default.createElement(
                      "a",
                      { href: "#pablo" },
                      "links"
                    ),
                    " for people to be able to follow them outside the site."
                  )
                ),
                _react2.default.createElement(
                  _CardFooter2.default,
                  { className: classes.justifyCenter },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      justIcon: true,
                      color: "transparent",
                      className: classes.margin5
                    },
                    _react2.default.createElement("i", { className: classes.socials + " fab fa-twitter" })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      justIcon: true,
                      color: "transparent",
                      className: classes.margin5
                    },
                    _react2.default.createElement("i", { className: classes.socials + " fab fa-linkedin" })
                  )
                )
              )
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(
                _Card2.default,
                { plain: true },
                _react2.default.createElement(
                  _GridItem2.default,
                  { xs: 12, sm: 12, md: 6, className: classes.itemGrid },
                  _react2.default.createElement("img", { src: _kendall2.default, alt: "...", className: imageClasses })
                ),
                _react2.default.createElement(
                  "h4",
                  { className: classes.cardTitle },
                  "Kendall Jenner",
                  _react2.default.createElement("br", null),
                  _react2.default.createElement(
                    "small",
                    { className: classes.smallTitle },
                    "Model"
                  )
                ),
                _react2.default.createElement(
                  _CardBody2.default,
                  null,
                  _react2.default.createElement(
                    "p",
                    { className: classes.description },
                    "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",
                    _react2.default.createElement(
                      "a",
                      { href: "#pablo" },
                      "links"
                    ),
                    " for people to be able to follow them outside the site."
                  )
                ),
                _react2.default.createElement(
                  _CardFooter2.default,
                  { className: classes.justifyCenter },
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      justIcon: true,
                      color: "transparent",
                      className: classes.margin5
                    },
                    _react2.default.createElement("i", { className: classes.socials + " fab fa-twitter" })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      justIcon: true,
                      color: "transparent",
                      className: classes.margin5
                    },
                    _react2.default.createElement("i", { className: classes.socials + " fab fa-instagram" })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    {
                      justIcon: true,
                      color: "transparent",
                      className: classes.margin5
                    },
                    _react2.default.createElement("i", { className: classes.socials + " fab fa-facebook" })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return TeamSection;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_teamStyle2.default)(TeamSection);