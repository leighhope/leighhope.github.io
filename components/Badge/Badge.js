"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _badgeStyle = require("../../assets/jss/material-kit-react/components/badgeStyle");

var _badgeStyle2 = _interopRequireDefault(_badgeStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library to set properties for components


// @material-ui/core components


function Badge(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      color = props.color,
      children = props.children;

  return _react2.default.createElement(
    "span",
    { className: classes.badge + " " + classes[color] },
    children
  );
}

Badge.defaultProps = {
  color: "gray"
};

Badge.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  color: _propTypes2.default.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"])
};

exports.default = (0, _withStyles2.default)(_badgeStyle2.default)(Badge);