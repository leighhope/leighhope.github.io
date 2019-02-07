"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Chat = require("@material-ui/icons/Chat");

var _Chat2 = _interopRequireDefault(_Chat);

var _VerifiedUser = require("@material-ui/icons/VerifiedUser");

var _VerifiedUser2 = _interopRequireDefault(_VerifiedUser);

var _Fingerprint = require("@material-ui/icons/Fingerprint");

var _Fingerprint2 = _interopRequireDefault(_Fingerprint);

var _GridContainer = require("../../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _InfoArea = require("../../../components/InfoArea/InfoArea");

var _InfoArea2 = _interopRequireDefault(_InfoArea);

var _productStyle = require("../../../assets/jss/material-kit-react/views/landingPageSections/productStyle");

var _productStyle2 = _interopRequireDefault(_productStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// @material-ui/core components


// @material-ui/icons

// core components


var ProductSection = function (_React$Component) {
  _inherits(ProductSection, _React$Component);

  function ProductSection() {
    _classCallCheck(this, ProductSection);

    return _possibleConstructorReturn(this, (ProductSection.__proto__ || Object.getPrototypeOf(ProductSection)).apply(this, arguments));
  }

  _createClass(ProductSection, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        "div",
        { className: classes.section },
        _react2.default.createElement(
          _GridContainer2.default,
          { justify: "center" },
          _react2.default.createElement(
            _GridItem2.default,
            { xs: 12, sm: 12, md: 8 },
            _react2.default.createElement(
              "h2",
              { className: classes.title },
              "Let's talk product"
            ),
            _react2.default.createElement(
              "h5",
              { className: classes.description },
              "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."
            )
          )
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
              _react2.default.createElement(_InfoArea2.default, {
                title: "Free Chat",
                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                icon: _Chat2.default,
                iconColor: "info",
                vertical: true
              })
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(_InfoArea2.default, {
                title: "Verified Users",
                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                icon: _VerifiedUser2.default,
                iconColor: "success",
                vertical: true
              })
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(_InfoArea2.default, {
                title: "Fingerprint",
                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                icon: _Fingerprint2.default,
                iconColor: "danger",
                vertical: true
              })
            )
          )
        )
      );
    }
  }]);

  return ProductSection;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_productStyle2.default)(ProductSection);