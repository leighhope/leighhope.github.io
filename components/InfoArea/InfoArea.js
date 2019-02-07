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

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _infoStyle = require("../../assets/jss/material-kit-react/components/infoStyle");

var _infoStyle2 = _interopRequireDefault(_infoStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library to set properties for components

// nodejs library that concatenates classes

// @material-ui/core components


function InfoArea(_ref) {
  var _classNames, _classNames2;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      title = props.title,
      description = props.description,
      iconColor = props.iconColor,
      vertical = props.vertical;

  var iconWrapper = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.iconWrapper, true), _defineProperty(_classNames, classes[iconColor], true), _defineProperty(_classNames, classes.iconWrapperVertical, vertical), _classNames));
  var iconClasses = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.icon, true), _defineProperty(_classNames2, classes.iconVertical, vertical), _classNames2));
  return _react2.default.createElement(
    "div",
    { className: classes.infoArea },
    _react2.default.createElement(
      "div",
      { className: iconWrapper },
      _react2.default.createElement(props.icon, { className: iconClasses })
    ),
    _react2.default.createElement(
      "div",
      { className: classes.descriptionWrapper },
      _react2.default.createElement(
        "h4",
        { className: classes.title },
        title
      ),
      _react2.default.createElement(
        "p",
        { className: classes.description },
        description
      )
    )
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  icon: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired,
  iconColor: _propTypes2.default.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  vertical: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_infoStyle2.default)(InfoArea);