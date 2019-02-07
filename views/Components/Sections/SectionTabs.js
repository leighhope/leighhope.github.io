"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Face = require("@material-ui/icons/Face");

var _Face2 = _interopRequireDefault(_Face);

var _Chat = require("@material-ui/icons/Chat");

var _Chat2 = _interopRequireDefault(_Chat);

var _Build = require("@material-ui/icons/Build");

var _Build2 = _interopRequireDefault(_Build);

var _GridContainer = require("../../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _CustomTabs = require("../../../components/CustomTabs/CustomTabs");

var _CustomTabs2 = _interopRequireDefault(_CustomTabs);

var _tabsStyle = require("../../../assets/jss/material-kit-react/views/componentsSections/tabsStyle");

var _tabsStyle2 = _interopRequireDefault(_tabsStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @material-ui/core components


// @material-ui/icons

// core components


var SectionTabs = function (_React$Component) {
  _inherits(SectionTabs, _React$Component);

  function SectionTabs() {
    _classCallCheck(this, SectionTabs);

    return _possibleConstructorReturn(this, (SectionTabs.__proto__ || Object.getPrototypeOf(SectionTabs)).apply(this, arguments));
  }

  _createClass(SectionTabs, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        "div",
        { className: classes.section },
        _react2.default.createElement(
          "div",
          { className: classes.container },
          _react2.default.createElement(
            "div",
            { id: "nav-tabs" },
            _react2.default.createElement(
              "h3",
              null,
              "Navigation Tabs"
            ),
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 6 },
                _react2.default.createElement(
                  "h3",
                  null,
                  _react2.default.createElement(
                    "small",
                    null,
                    "Tabs with Icons on Card"
                  )
                ),
                _react2.default.createElement(_CustomTabs2.default, {
                  headerColor: "primary",
                  tabs: [{
                    tabName: "Profile",
                    tabIcon: _Face2.default,
                    tabContent: _react2.default.createElement(
                      "p",
                      { className: classes.textCenter },
                      "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                    )
                  }, {
                    tabName: "Messages",
                    tabIcon: _Chat2.default,
                    tabContent: _react2.default.createElement(
                      "p",
                      { className: classes.textCenter },
                      "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                    )
                  }, {
                    tabName: "Settings",
                    tabIcon: _Build2.default,
                    tabContent: _react2.default.createElement(
                      "p",
                      { className: classes.textCenter },
                      "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                    )
                  }]
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 6 },
                _react2.default.createElement(
                  "h3",
                  null,
                  _react2.default.createElement(
                    "small",
                    null,
                    "Tabs on Plain Card"
                  )
                ),
                _react2.default.createElement(_CustomTabs2.default, {
                  plainTabs: true,
                  headerColor: "danger",
                  tabs: [{
                    tabName: "Home",
                    tabContent: _react2.default.createElement(
                      "p",
                      { className: classes.textCenter },
                      "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                    )
                  }, {
                    tabName: "Updates",
                    tabContent: _react2.default.createElement(
                      "p",
                      { className: classes.textCenter },
                      "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                    )
                  }, {
                    tabName: "History",
                    tabContent: _react2.default.createElement(
                      "p",
                      { className: classes.textCenter },
                      "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                    )
                  }]
                })
              )
            )
          )
        )
      );
    }
  }]);

  return SectionTabs;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_tabsStyle2.default)(SectionTabs);