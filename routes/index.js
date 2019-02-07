"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Components = require("../views/Components/Components");

var _Components2 = _interopRequireDefault(_Components);

var _LandingPage = require("../views/LandingPage/LandingPage");

var _LandingPage2 = _interopRequireDefault(_LandingPage);

var _ProfilePage = require("../views/ProfilePage/ProfilePage");

var _ProfilePage2 = _interopRequireDefault(_ProfilePage);

var _LoginPage = require("../views/LoginPage/LoginPage");

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexRoutes = [{ path: "/landing-page", name: "LandingPage", component: _LandingPage2.default }, { path: "/profile-page", name: "ProfilePage", component: _ProfilePage2.default }, { path: "/login-page", name: "LoginPage", component: _LoginPage2.default }, { path: "/", name: "Components", component: _Components2.default }];

exports.default = indexRoutes;