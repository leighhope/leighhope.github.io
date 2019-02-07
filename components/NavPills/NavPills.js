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

var _reactSwipeableViews = require("react-swipeable-views");

var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Tabs = require("@material-ui/core/Tabs");

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require("@material-ui/core/Tab");

var _Tab2 = _interopRequireDefault(_Tab);

var _GridContainer = require("../Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _navPillsStyle = require("../../assets/jss/material-kit-react/components/navPillsStyle");

var _navPillsStyle2 = _interopRequireDefault(_navPillsStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library that concatenates classes

// nodejs library to set properties for components


// @material-ui/core components


// core components


var NavPills = function (_React$Component) {
  _inherits(NavPills, _React$Component);

  function NavPills(props) {
    _classCallCheck(this, NavPills);

    var _this = _possibleConstructorReturn(this, (NavPills.__proto__ || Object.getPrototypeOf(NavPills)).call(this, props));

    _this.handleChange = function (event, active) {
      _this.setState({ active: active });
    };

    _this.handleChangeIndex = function (index) {
      _this.setState({ active: index });
    };

    _this.state = {
      active: props.active
    };
    return _this;
  }

  _createClass(NavPills, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          classes = _props.classes,
          tabs = _props.tabs,
          direction = _props.direction,
          color = _props.color,
          horizontal = _props.horizontal,
          alignCenter = _props.alignCenter;

      var flexContainerClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.flexContainer, true), _defineProperty(_classNames, classes.horizontalDisplay, horizontal !== undefined), _classNames));
      var tabButtons = _react2.default.createElement(
        _Tabs2.default,
        {
          classes: {
            root: classes.root,
            fixed: classes.fixed,
            flexContainer: flexContainerClasses,
            indicator: classes.displayNone
          },
          value: this.state.active,
          onChange: this.handleChange,
          centered: alignCenter
        },
        tabs.map(function (prop, key) {
          var _classNames2;

          var icon = {};
          if (prop.tabIcon !== undefined) {
            icon["icon"] = _react2.default.createElement(prop.tabIcon, { className: classes.tabIcon });
          }
          var pillsClasses = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.pills, true), _defineProperty(_classNames2, classes.horizontalPills, horizontal !== undefined), _defineProperty(_classNames2, classes.pillsWithIcons, prop.tabIcon !== undefined), _classNames2));
          return _react2.default.createElement(_Tab2.default, _extends({
            label: prop.tabButton,
            key: key
          }, icon, {
            classes: {
              root: pillsClasses,
              labelContainer: classes.labelContainer,
              label: classes.label,
              selected: classes[color]
            }
          }));
        })
      );
      var tabContent = _react2.default.createElement(
        "div",
        { className: classes.contentWrapper },
        _react2.default.createElement(
          _reactSwipeableViews2.default,
          {
            axis: direction === "rtl" ? "x-reverse" : "x",
            index: this.state.active,
            onChangeIndex: this.handleChangeIndex
          },
          tabs.map(function (prop, key) {
            return _react2.default.createElement(
              "div",
              { className: classes.tabContent, key: key },
              prop.tabContent
            );
          })
        )
      );
      return horizontal !== undefined ? _react2.default.createElement(
        _GridContainer2.default,
        null,
        _react2.default.createElement(
          _GridItem2.default,
          horizontal.tabsGrid,
          tabButtons
        ),
        _react2.default.createElement(
          _GridItem2.default,
          horizontal.contentGrid,
          tabContent
        )
      ) : _react2.default.createElement(
        "div",
        null,
        tabButtons,
        tabContent
      );
    }
  }]);

  return NavPills;
}(_react2.default.Component);

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  // index of the default active pill
  active: _propTypes2.default.number,
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    tabButton: _propTypes2.default.string,
    tabIcon: _propTypes2.default.func,
    tabContent: _propTypes2.default.node
  })).isRequired,
  color: _propTypes2.default.oneOf(["primary", "warning", "danger", "success", "info", "rose"]),
  direction: _propTypes2.default.string,
  horizontal: _propTypes2.default.shape({
    tabsGrid: _propTypes2.default.object,
    contentGrid: _propTypes2.default.object
  }),
  alignCenter: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(_navPillsStyle2.default)(NavPills);