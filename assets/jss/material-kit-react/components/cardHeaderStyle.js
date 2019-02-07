"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialKitReact = require("../../material-kit-react");

var cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  warningCardHeader: _materialKitReact.warningCardHeader,
  successCardHeader: _materialKitReact.successCardHeader,
  dangerCardHeader: _materialKitReact.dangerCardHeader,
  infoCardHeader: _materialKitReact.infoCardHeader,
  primaryCardHeader: _materialKitReact.primaryCardHeader
};

exports.default = cardHeaderStyle;