"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _nouislider = require("nouislider");

var _nouislider2 = _interopRequireDefault(_nouislider);

var _withStyles = require("@material-ui/core/styles/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _InputAdornment = require("@material-ui/core/InputAdornment");

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _FormControlLabel = require("@material-ui/core/FormControlLabel");

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Checkbox = require("@material-ui/core/Checkbox");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require("@material-ui/core/Radio");

var _Radio2 = _interopRequireDefault(_Radio);

var _Switch = require("@material-ui/core/Switch");

var _Switch2 = _interopRequireDefault(_Switch);

var _Favorite = require("@material-ui/icons/Favorite");

var _Favorite2 = _interopRequireDefault(_Favorite);

var _People = require("@material-ui/icons/People");

var _People2 = _interopRequireDefault(_People);

var _Check = require("@material-ui/icons/Check");

var _Check2 = _interopRequireDefault(_Check);

var _FiberManualRecord = require("@material-ui/icons/FiberManualRecord");

var _FiberManualRecord2 = _interopRequireDefault(_FiberManualRecord);

var _GridContainer = require("../../../components/Grid/GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _GridItem = require("../../../components/Grid/GridItem");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _Button = require("../../../components/CustomButtons/Button");

var _Button2 = _interopRequireDefault(_Button);

var _CustomInput = require("../../../components/CustomInput/CustomInput");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _CustomLinearProgress = require("../../../components/CustomLinearProgress/CustomLinearProgress");

var _CustomLinearProgress2 = _interopRequireDefault(_CustomLinearProgress);

var _Pagination = require("../../../components/Pagination/Pagination");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Badge = require("../../../components/Badge/Badge");

var _Badge2 = _interopRequireDefault(_Badge);

var _basicsStyle = require("../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle");

var _basicsStyle2 = _interopRequireDefault(_basicsStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// plugin that creates slider

// @material-ui/core components

// @material-ui/icons

// core components


var SectionBasics = function (_React$Component) {
  _inherits(SectionBasics, _React$Component);

  function SectionBasics(props) {
    _classCallCheck(this, SectionBasics);

    var _this = _possibleConstructorReturn(this, (SectionBasics.__proto__ || Object.getPrototypeOf(SectionBasics)).call(this, props));

    _this.handleChange = function (name) {
      return function (event) {
        _this.setState(_defineProperty({}, name, event.target.checked));
      };
    };

    _this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    _this.handleChangeEnabled = _this.handleChangeEnabled.bind(_this);
    return _this;
  }

  _createClass(SectionBasics, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _nouislider2.default.create(this.refs.slider1, {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
      _nouislider2.default.create(this.refs.slider2, {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
  }, {
    key: "handleChangeEnabled",
    value: function handleChangeEnabled(event) {
      this.setState({ selectedEnabled: event.target.value });
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(value) {
      var checked = this.state.checked;

      var currentIndex = checked.indexOf(value);
      var newChecked = [].concat(_toConsumableArray(checked));

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      this.setState({
        checked: newChecked
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;

      return _react2.default.createElement(
        "div",
        { className: classes.sections },
        _react2.default.createElement(
          "div",
          { className: classes.container },
          _react2.default.createElement(
            "div",
            { className: classes.title },
            _react2.default.createElement(
              "h2",
              null,
              "Basic Elements"
            )
          ),
          _react2.default.createElement(
            "div",
            { id: "buttons" },
            _react2.default.createElement(
              "div",
              { className: classes.title },
              _react2.default.createElement(
                "h3",
                null,
                "Buttons",
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                  "small",
                  null,
                  "Pick your style"
                )
              )
            ),
            _react2.default.createElement(
              _GridContainer2.default,
              { justify: "center" },
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 8 },
                _react2.default.createElement(
                  _Button2.default,
                  { color: "primary" },
                  "Default"
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "primary", round: true },
                  "round"
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "primary", round: true },
                  _react2.default.createElement(_Favorite2.default, { className: classes.icons }),
                  " with icon"
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { justIcon: true, round: true, color: "primary" },
                  _react2.default.createElement(_Favorite2.default, { className: classes.icons })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "primary", simple: true },
                  "simple"
                )
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
                  "Pick your size"
                )
              )
            ),
            _react2.default.createElement(
              _GridContainer2.default,
              { justify: "center" },
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 8 },
                _react2.default.createElement(
                  _Button2.default,
                  { color: "primary", size: "sm" },
                  "Small"
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "primary" },
                  "Regular"
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "primary", size: "lg" },
                  "Large"
                )
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
                  "Pick your color"
                )
              )
            ),
            _react2.default.createElement(
              _GridContainer2.default,
              { justify: "center" },
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 8 },
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  "Default"
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "primary" },
                  "Primary"
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "info" },
                  "Info"
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "success" },
                  "Success"
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "warning" },
                  "Warning"
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "danger" },
                  "Danger"
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: "rose" },
                  "Rose"
                )
              )
            )
          ),
          _react2.default.createElement("div", { className: classes.space50 }),
          _react2.default.createElement(
            "div",
            { id: "inputs" },
            _react2.default.createElement(
              "div",
              { className: classes.title },
              _react2.default.createElement(
                "h3",
                null,
                "Inputs"
              )
            ),
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 4, md: 4, lg: 3 },
                _react2.default.createElement(_CustomInput2.default, {
                  id: "regular",
                  inputProps: {
                    placeholder: "Regular"
                  },
                  formControlProps: {
                    fullWidth: true
                  }
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 4, md: 4, lg: 3 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "With floating label",
                  id: "float",
                  formControlProps: {
                    fullWidth: true
                  }
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 4, md: 4, lg: 3 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "Success input",
                  id: "success",
                  success: true,
                  formControlProps: {
                    fullWidth: true
                  }
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 4, md: 4, lg: 3 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "Error input",
                  id: "error",
                  error: true,
                  formControlProps: {
                    fullWidth: true
                  }
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 4, md: 4, lg: 3 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "With material Icons",
                  id: "material",
                  formControlProps: {
                    fullWidth: true
                  },
                  inputProps: {
                    endAdornment: _react2.default.createElement(
                      _InputAdornment2.default,
                      { position: "end" },
                      _react2.default.createElement(_People2.default, null)
                    )
                  }
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 4, md: 4, lg: 3 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "With Font Awesome Icons",
                  id: "font-awesome",
                  formControlProps: {
                    fullWidth: true
                  },
                  inputProps: {
                    endAdornment: _react2.default.createElement(
                      _InputAdornment2.default,
                      { position: "end" },
                      _react2.default.createElement("i", { className: "fas fa-users" })
                    )
                  }
                })
              )
            )
          ),
          _react2.default.createElement("div", { className: classes.space70 }),
          _react2.default.createElement(
            "div",
            { id: "checkRadios" },
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 6, md: 4, lg: 3 },
                _react2.default.createElement(
                  "div",
                  { className: classes.title },
                  _react2.default.createElement(
                    "h3",
                    null,
                    "Checkboxes"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                  },
                  _react2.default.createElement(_FormControlLabel2.default, {
                    control: _react2.default.createElement(_Checkbox2.default, {
                      tabIndex: -1,
                      onClick: function onClick() {
                        return _this2.handleToggle(21);
                      },
                      checkedIcon: _react2.default.createElement(_Check2.default, { className: classes.checkedIcon }),
                      icon: _react2.default.createElement(_Check2.default, { className: classes.uncheckedIcon }),
                      classes: { checked: classes.checked }
                    }),
                    classes: { label: classes.label },
                    label: "Unchecked"
                  })
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                  },
                  _react2.default.createElement(_FormControlLabel2.default, {
                    control: _react2.default.createElement(_Checkbox2.default, {
                      tabIndex: -1,
                      onClick: function onClick() {
                        return _this2.handleToggle(22);
                      },
                      checked: this.state.checked.indexOf(22) !== -1 ? true : false,
                      checkedIcon: _react2.default.createElement(_Check2.default, { className: classes.checkedIcon }),
                      icon: _react2.default.createElement(_Check2.default, { className: classes.uncheckedIcon }),
                      classes: { checked: classes.checked }
                    }),
                    classes: { label: classes.label },
                    label: "Checked"
                  })
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                  },
                  _react2.default.createElement(_FormControlLabel2.default, {
                    disabled: true,
                    control: _react2.default.createElement(_Checkbox2.default, {
                      tabIndex: -1,
                      checkedIcon: _react2.default.createElement(_Check2.default, { className: classes.checkedIcon }),
                      icon: _react2.default.createElement(_Check2.default, { className: classes.uncheckedIcon }),
                      classes: { checked: classes.checked }
                    }),
                    classes: {
                      label: classes.label,
                      disabled: classes.disabledCheckboxAndRadio
                    },
                    label: "Disabled Unchecked"
                  })
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                  },
                  _react2.default.createElement(_FormControlLabel2.default, {
                    disabled: true,
                    control: _react2.default.createElement(_Checkbox2.default, {
                      tabIndex: -1,
                      checked: this.state.checked.indexOf(24) !== -1 ? true : false,
                      checkedIcon: _react2.default.createElement(_Check2.default, { className: classes.checkedIcon }),
                      icon: _react2.default.createElement(_Check2.default, { className: classes.uncheckedIcon }),
                      classes: { checked: classes.checked }
                    }),
                    classes: {
                      label: classes.label,
                      disabled: classes.disabledCheckboxAndRadio
                    },
                    label: "Disabled Checked"
                  })
                )
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 6, md: 4, lg: 3 },
                _react2.default.createElement(
                  "div",
                  { className: classes.title },
                  _react2.default.createElement(
                    "h3",
                    null,
                    "Radio Buttons"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                  },
                  _react2.default.createElement(_FormControlLabel2.default, {
                    control: _react2.default.createElement(_Radio2.default, {
                      checked: this.state.selectedEnabled === "a",
                      onChange: this.handleChangeEnabled,
                      value: "a",
                      name: "radio button enabled",
                      "aria-label": "A",
                      icon: _react2.default.createElement(_FiberManualRecord2.default, {
                        className: classes.radioUnchecked
                      }),
                      checkedIcon: _react2.default.createElement(_FiberManualRecord2.default, { className: classes.radioChecked }),
                      classes: {
                        checked: classes.radio
                      }
                    }),
                    classes: {
                      label: classes.label
                    },
                    label: "First Radio"
                  })
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                  },
                  _react2.default.createElement(_FormControlLabel2.default, {
                    control: _react2.default.createElement(_Radio2.default, {
                      checked: this.state.selectedEnabled === "b",
                      onChange: this.handleChangeEnabled,
                      value: "b",
                      name: "radio button enabled",
                      "aria-label": "B",
                      icon: _react2.default.createElement(_FiberManualRecord2.default, {
                        className: classes.radioUnchecked
                      }),
                      checkedIcon: _react2.default.createElement(_FiberManualRecord2.default, { className: classes.radioChecked }),
                      classes: {
                        checked: classes.radio
                      }
                    }),
                    classes: {
                      label: classes.label
                    },
                    label: "Second Radio"
                  })
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                  },
                  _react2.default.createElement(_FormControlLabel2.default, {
                    disabled: true,
                    control: _react2.default.createElement(_Radio2.default, {
                      checked: false,
                      value: "a",
                      name: "radio button disabled",
                      "aria-label": "B",
                      icon: _react2.default.createElement(_FiberManualRecord2.default, {
                        className: classes.radioUnchecked
                      }),
                      checkedIcon: _react2.default.createElement(_FiberManualRecord2.default, { className: classes.radioChecked }),
                      classes: {
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio
                      }
                    }),
                    classes: {
                      label: classes.label
                    },
                    label: "Disabled Unchecked Radio"
                  })
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                  },
                  _react2.default.createElement(_FormControlLabel2.default, {
                    disabled: true,
                    control: _react2.default.createElement(_Radio2.default, {
                      checked: true,
                      value: "b",
                      name: "radio button disabled",
                      "aria-label": "B",
                      icon: _react2.default.createElement(_FiberManualRecord2.default, {
                        className: classes.radioUnchecked
                      }),
                      checkedIcon: _react2.default.createElement(_FiberManualRecord2.default, { className: classes.radioChecked }),
                      classes: {
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio
                      }
                    }),
                    classes: { label: classes.label },
                    label: "Disabled Checked Radio"
                  })
                )
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 6, md: 4, lg: 3 },
                _react2.default.createElement(
                  "div",
                  { className: classes.title },
                  _react2.default.createElement(
                    "h3",
                    null,
                    "Toggle Buttons"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(_FormControlLabel2.default, {
                    control: _react2.default.createElement(_Switch2.default, {
                      checked: this.state.checkedA,
                      onChange: this.handleChange("checkedA"),
                      value: "checkedA",
                      classes: {
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        icon: classes.switchIcon,
                        iconChecked: classes.switchIconChecked,
                        bar: classes.switchBar
                      }
                    }),
                    classes: {
                      label: classes.label
                    },
                    label: "Toggle is on"
                  })
                ),
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(_FormControlLabel2.default, {
                    control: _react2.default.createElement(_Switch2.default, {
                      checked: this.state.checkedB,
                      onChange: this.handleChange("checkedB"),
                      value: "checkedB",
                      classes: {
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        icon: classes.switchIcon,
                        iconChecked: classes.switchIconChecked,
                        bar: classes.switchBar
                      }
                    }),
                    classes: {
                      label: classes.label
                    },
                    label: "Toggle is off"
                  })
                )
              )
            )
          ),
          _react2.default.createElement("div", { className: classes.space70 }),
          _react2.default.createElement(
            "div",
            { id: "progress" },
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 6 },
                _react2.default.createElement(
                  "div",
                  { className: classes.title },
                  _react2.default.createElement(
                    "h3",
                    null,
                    "Progress Bars"
                  )
                ),
                _react2.default.createElement(_CustomLinearProgress2.default, {
                  variant: "determinate",
                  color: "primary",
                  value: 30
                }),
                _react2.default.createElement(_CustomLinearProgress2.default, {
                  variant: "determinate",
                  color: "info",
                  value: 60
                }),
                _react2.default.createElement(_CustomLinearProgress2.default, {
                  variant: "determinate",
                  color: "success",
                  value: 100,
                  style: { width: "35%", display: "inline-block" }
                }),
                _react2.default.createElement(_CustomLinearProgress2.default, {
                  variant: "determinate",
                  color: "warning",
                  value: 100,
                  style: { width: "20%", display: "inline-block" }
                }),
                _react2.default.createElement(_CustomLinearProgress2.default, {
                  variant: "determinate",
                  color: "danger",
                  value: 25,
                  style: { width: "45%", display: "inline-block" }
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 6 },
                _react2.default.createElement(
                  "div",
                  { className: classes.title },
                  _react2.default.createElement(
                    "h3",
                    null,
                    "Pagination"
                  )
                ),
                _react2.default.createElement(_Pagination2.default, {
                  pages: [{ text: 1 }, { text: "..." }, { text: 5 }, { text: 6 }, { active: true, text: 7 }, { text: 8 }, { text: 9 }, { text: "..." }, { text: 12 }]
                }),
                _react2.default.createElement(_Pagination2.default, {
                  pages: [{ text: "PREV" }, { text: 1 }, { text: 2 }, { active: true, text: 3 }, { text: 4 }, { text: 5 }, { text: "NEXT" }],
                  color: "info"
                })
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { id: "sliders" },
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 6 },
                _react2.default.createElement(
                  "div",
                  { className: classes.title },
                  _react2.default.createElement(
                    "h3",
                    null,
                    "Sliders"
                  )
                ),
                _react2.default.createElement("div", { ref: "slider1", className: "slider-primary" }),
                _react2.default.createElement("br", null),
                _react2.default.createElement("div", { ref: "slider2", className: "slider-info" })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 6 },
                _react2.default.createElement(
                  "div",
                  { className: classes.title },
                  _react2.default.createElement(
                    "h3",
                    null,
                    "Badges"
                  )
                ),
                _react2.default.createElement(
                  _Badge2.default,
                  null,
                  "default"
                ),
                _react2.default.createElement(
                  _Badge2.default,
                  { color: "primary" },
                  "primary"
                ),
                _react2.default.createElement(
                  _Badge2.default,
                  { color: "info" },
                  "info"
                ),
                _react2.default.createElement(
                  _Badge2.default,
                  { color: "success" },
                  "success"
                ),
                _react2.default.createElement(
                  _Badge2.default,
                  { color: "warning" },
                  "warning"
                ),
                _react2.default.createElement(
                  _Badge2.default,
                  { color: "danger" },
                  "danger"
                ),
                _react2.default.createElement(
                  _Badge2.default,
                  { color: "rose" },
                  "rose"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SectionBasics;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_basicsStyle2.default)(SectionBasics);