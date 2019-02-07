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

var _Button = require("@material-ui/core/Button");

var _Button2 = _interopRequireDefault(_Button);

var _paginationStyle = require("../../assets/jss/material-kit-react/components/paginationStyle");

var _paginationStyle2 = _interopRequireDefault(_paginationStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library to set properties for components

// nodejs library that concatenates classes


// @material-ui/core components


function Pagination(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      pages = props.pages,
      color = props.color;

  return _react2.default.createElement(
    "ul",
    { className: classes.pagination },
    pages.map(function (prop, key) {
      var _classNames;

      var paginationLink = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.paginationLink, true), _defineProperty(_classNames, classes[color], prop.active), _defineProperty(_classNames, classes.disabled, prop.disabled), _classNames));
      return _react2.default.createElement(
        "li",
        { className: classes.paginationItem, key: key },
        prop.onClick !== undefined ? _react2.default.createElement(
          _Button2.default,
          { onClick: prop.onClick, className: paginationLink },
          prop.text
        ) : _react2.default.createElement(
          _Button2.default,
          {
            onClick: function onClick() {
              return console.log("you've clicked " + prop.text);
            },
            className: paginationLink
          },
          prop.text
        )
      );
    })
  );
}

Pagination.defaultProps = {
  color: "primary"
};

Pagination.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  pages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    active: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    text: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(["PREV", "NEXT", "..."])]).isRequired,
    onClick: _propTypes2.default.func
  })).isRequired,
  color: _propTypes2.default.oneOf(["primary", "info", "success", "warning", "danger"])
};

exports.default = (0, _withStyles2.default)(_paginationStyle2.default)(Pagination);