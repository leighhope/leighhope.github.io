"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Dashboard = require("@material-ui/icons/Dashboard");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Schedule = require("@material-ui/icons/Schedule");

var _Schedule2 = _interopRequireDefault(_Schedule);

var _List = require("@material-ui/icons/List");

var _List2 = _interopRequireDefault(_List);

var _GridContainer = require("../../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _NavPills = require("../../../components/NavPills/NavPills");

var _NavPills2 = _interopRequireDefault(_NavPills);

var _pillsStyle = require("../../../assets/jss/material-kit-react/views/componentsSections/pillsStyle");

var _pillsStyle2 = _interopRequireDefault(_pillsStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @material-ui/core components


// @material-ui/icons


// core components


var SectionPills = function (_React$Component) {
  _inherits(SectionPills, _React$Component);

  function SectionPills() {
    _classCallCheck(this, SectionPills);

    return _possibleConstructorReturn(this, (SectionPills.__proto__ || Object.getPrototypeOf(SectionPills)).apply(this, arguments));
  }

  _createClass(SectionPills, [{
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
            { id: "navigation-pills" },
            _react2.default.createElement(
              "div",
              { className: classes.title },
              _react2.default.createElement(
                "h3",
                null,
                "Navigation Pills"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: classes.title },
              _react2.default.createElement(
                "h3",
                null,
                _react2.default.createElement(
                  "small",
                  null,
                  "With Icons"
                )
              )
            ),
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 8, lg: 6 },
                _react2.default.createElement(_NavPills2.default, {
                  color: "primary",
                  tabs: [{
                    tabButton: "Dashboard",
                    tabIcon: _Dashboard2.default,
                    tabContent: _react2.default.createElement(
                      "span",
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                      ),
                      _react2.default.createElement("br", null),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                      ),
                      _react2.default.createElement("br", null),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                      )
                    )
                  }, {
                    tabButton: "Schedule",
                    tabIcon: _Schedule2.default,
                    tabContent: _react2.default.createElement(
                      "span",
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."
                      ),
                      _react2.default.createElement("br", null),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                      )
                    )
                  }, {
                    tabButton: "Tasks",
                    tabIcon: _List2.default,
                    tabContent: _react2.default.createElement(
                      "span",
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                      ),
                      _react2.default.createElement("br", null),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                      ),
                      _react2.default.createElement("br", null),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                      )
                    )
                  }]
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 12, lg: 6 },
                _react2.default.createElement(_NavPills2.default, {
                  color: "rose",
                  horizontal: {
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  },
                  tabs: [{
                    tabButton: "Dashboard",
                    tabIcon: _Dashboard2.default,
                    tabContent: _react2.default.createElement(
                      "span",
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                      ),
                      _react2.default.createElement("br", null),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                      ),
                      _react2.default.createElement("br", null),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                      )
                    )
                  }, {
                    tabButton: "Schedule",
                    tabIcon: _Schedule2.default,
                    tabContent: _react2.default.createElement(
                      "span",
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."
                      ),
                      _react2.default.createElement("br", null),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                      )
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

  return SectionPills;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_pillsStyle2.default)(SectionPills);