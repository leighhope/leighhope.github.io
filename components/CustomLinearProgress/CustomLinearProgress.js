"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _LinearProgress = require("@material-ui/core/LinearProgress");

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _customLinearProgressStyle = require("../../assets/jss/material-kit-react/components/customLinearProgressStyle");

var _customLinearProgressStyle2 = _interopRequireDefault(_customLinearProgressStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library to set properties for components


// @material-ui/core components

// core components


function CustomLinearProgress(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      color = props.color,
      rest = _objectWithoutProperties(props, ["classes", "color"]);

  return _react2.default.createElement(_LinearProgress2.default, _extends({}, rest, {
    classes: {
      root: classes.root + " " + classes[color + "Background"],
      bar: classes.bar + " " + classes[color]
    }
  }));
}

CustomLinearProgress.defaultProps = {
  color: "gray"
};

CustomLinearProgress.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  color: _propTypes2.default.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"])
};

exports.default = (0, _withStyles2.default)(_customLinearProgressStyle2.default)(CustomLinearProgress);