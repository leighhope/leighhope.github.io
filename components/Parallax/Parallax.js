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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _parallaxStyle = require("../../assets/jss/material-kit-react/components/parallaxStyle");

var _parallaxStyle2 = _interopRequireDefault(_parallaxStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components


// core components


var Parallax = function (_React$Component) {
  _inherits(Parallax, _React$Component);

  function Parallax(props) {
    _classCallCheck(this, Parallax);

    var _this = _possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).call(this, props));

    var windowScrollTop = window.pageYOffset / 3;
    _this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    };
    _this.resetTransform = _this.resetTransform.bind(_this);
    return _this;
  }

  _createClass(Parallax, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var windowScrollTop = window.pageYOffset / 3;
      this.setState({
        transform: "translate3d(0," + windowScrollTop + "px,0)"
      });
      window.addEventListener("scroll", this.resetTransform);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.resetTransform);
    }
  }, {
    key: "resetTransform",
    value: function resetTransform() {
      var windowScrollTop = window.pageYOffset / 3;
      this.setState({
        transform: "translate3d(0," + windowScrollTop + "px,0)"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          classes = _props.classes,
          filter = _props.filter,
          className = _props.className,
          children = _props.children,
          style = _props.style,
          image = _props.image,
          small = _props.small;

      var parallaxClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.parallax, true), _defineProperty(_classNames, classes.filter, filter), _defineProperty(_classNames, classes.small, small), _defineProperty(_classNames, className, className !== undefined), _classNames));
      return _react2.default.createElement(
        "div",
        {
          className: parallaxClasses,
          style: _extends({}, style, {
            backgroundImage: "url(" + image + ")"
          }, this.state),
          ref: "parallax"
        },
        children
      );
    }
  }]);

  return Parallax;
}(_react2.default.Component);

Parallax.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  filter: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  style: _propTypes2.default.string,
  image: _propTypes2.default.string
};

exports.default = (0, _withStyles2.default)(_parallaxStyle2.default)(Parallax);