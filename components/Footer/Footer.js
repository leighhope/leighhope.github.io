"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _core = require("@material-ui/core");

var _Favorite = require("@material-ui/icons/Favorite");

var _Favorite2 = _interopRequireDefault(_Favorite);

var _footerStyle = require("../../assets/jss/material-kit-react/components/footerStyle");

var _footerStyle2 = _interopRequireDefault(_footerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*eslint-disable*/

// nodejs library to set properties for components

// nodejs library that concatenates classes


// @material-ui/icons


function Footer(_ref) {
  var _classNames, _classNames2;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      whiteFont = props.whiteFont;

  var footerClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.footer, true), _defineProperty(_classNames, classes.footerWhiteFont, whiteFont), _classNames));
  var aClasses = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.a, true), _defineProperty(_classNames2, classes.footerWhiteFont, whiteFont), _classNames2));
  return _react2.default.createElement(
    "footer",
    { className: footerClasses },
    _react2.default.createElement(
      "div",
      { className: classes.container },
      _react2.default.createElement(
        "div",
        { className: classes.left },
        _react2.default.createElement(
          _core.List,
          { className: classes.list },
          _react2.default.createElement(
            _core.ListItem,
            { className: classes.inlineBlock },
            _react2.default.createElement(
              "a",
              {
                href: "https://www.creative-tim.com/",
                className: classes.block,
                target: "_blank"
              },
              "Creative Tim"
            )
          ),
          _react2.default.createElement(
            _core.ListItem,
            { className: classes.inlineBlock },
            _react2.default.createElement(
              "a",
              {
                href: "https://www.creative-tim.com/presentation",
                className: classes.block,
                target: "_blank"
              },
              "About us"
            )
          ),
          _react2.default.createElement(
            _core.ListItem,
            { className: classes.inlineBlock },
            _react2.default.createElement(
              "a",
              {
                href: "http://blog.creative-tim.com/",
                className: classes.block,
                target: "_blank"
              },
              "Blog"
            )
          ),
          _react2.default.createElement(
            _core.ListItem,
            { className: classes.inlineBlock },
            _react2.default.createElement(
              "a",
              {
                href: "https://www.creative-tim.com/license",
                className: classes.block,
                target: "_blank"
              },
              "Licenses"
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: classes.right },
        "\xA9 ",
        1900 + new Date().getYear(),
        " , made with",
        " ",
        _react2.default.createElement(_Favorite2.default, { className: classes.icon }),
        " by",
        " ",
        _react2.default.createElement(
          "a",
          {
            href: "https://www.creative-tim.com",
            className: aClasses,
            target: "_blank"
          },
          "Creative Tim"
        ),
        " ",
        "for a better web."
      )
    )
  );
}

Footer.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  whiteFont: _propTypes2.default.bool
};

exports.default = (0, _core.withStyles)(_footerStyle2.default)(Footer);