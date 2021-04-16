webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
var _this = undefined,
    _jsxFileName = "C:\\intellijRepository\\reactStudy\\ch1\\front\\components\\AppLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 39
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 54
    }
  }, "\uB178\uB4DC\uBC84\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 42
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 64
    }
  }, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "mail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
    enterButton: true,
    style: {
      verticalAlign: 'middle'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, dummy.isLoggedIn ? __jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://www.naver.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("a", {
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 57
    }
  }, "Made By DY")))));
};

_c = AppLayout;
AppLayout.prototype = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c;

$RefreshReg$(_c, "AppLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ2ZXJ0aWNhbEFsaWduIiwiZHVtbXkiLCJpc0xvZ2dlZEluIiwicHJvdG90eXBlIiwiUHJvcFR5cGVzIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDNUIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5Q0FBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0IsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFmLENBQXRCLENBREosRUFFSSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUIsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBdEIsQ0FBekIsQ0FGSixFQUdJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMENBQUQsQ0FBTyxNQUFQO0FBQWMsZUFBVyxNQUF6QjtBQUEwQixTQUFLLEVBQUU7QUFBQ0MsbUJBQWEsRUFBQztBQUFmLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUhKLENBREosRUFRSSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tDLEtBQUssQ0FBQ0MsVUFBTixHQUVHLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZILEdBSUcsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTFIsQ0FESixFQVNJLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tILFFBREwsQ0FUSixFQVlJLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyx3QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DO0FBQUcsVUFBTSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBcEMsQ0FESixDQVpKLENBUkosQ0FESjtBQTJCSCxDQTVCRDs7S0FBTUQsUztBQThCTkEsU0FBUyxDQUFDSyxTQUFWLEdBQW9CO0FBQ2hCSixVQUFRLEVBQUNLLGlEQUFTLENBQUNDO0FBREgsQ0FBcEI7QUFLZVAsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMjhiY2UzYjZkZTc3ZTRmMmQxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTWVudSwgSW5wdXQsIEJ1dHRvbiwgUm93LCBDb2wsIENhcmQsIEF2YXRhciwgRm9ybX0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4vTG9naW5Gb3JtXCI7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZVwiXHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiaG9tZVwiPjxMaW5rIGhyZWY9XCIvXCI+PGE+64W465Oc67KE65OcPC9hPjwvTGluaz48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwicHJvZmlsZVwiPjxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxhPu2UhOuhnO2VhDwvYT48L0xpbms+PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIGVudGVyQnV0dG9uIHN0eWxlPXt7dmVydGljYWxBbGlnbjonbWlkZGxlJ319IC8+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkdW1teS5pc0xvZ2dlZEluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luRm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5uYXZlci5jb20vXCI+PGEgdGFyZ2V0PVwiX2JsYW5rXCI+TWFkZSBCeSBEWTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3RvdHlwZT17XHJcbiAgICBjaGlsZHJlbjpQcm9wVHlwZXMubm9kZSxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9