webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\intellijRepository\\reactStudy\\ch1\\front\\components\\UserProfile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var UserProfile = function UserProfile() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector.user;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["logoutAction"]);
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, "\uC9F9\uC9F9", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 35
      }
    }), user.Post.length), __jsx("div", {
      key: "following",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 41
      }
    }), user.Followings.length), __jsx("div", {
      key: "follower",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, "\uD314\uB85C", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 39
      }
    }), user.Followers.length)],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }, user.nickname[0]),
    title: user.nickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

_s(UserProfile, "vBPVhcCYhWL+dsSk6rat892Zsrs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uTG9nb3V0IiwidXNlQ2FsbGJhY2siLCJsb2dvdXRBY3Rpb24iLCJQb3N0IiwibGVuZ3RoIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFLO0FBQUE7O0FBQUEscUJBQ05DLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUdBLEtBQUssQ0FBQ0MsSUFBVDtBQUFBLEdBQU4sQ0FETDtBQUFBLE1BQ2RBLElBRGMsZ0JBQ2RBLElBRGM7O0FBRXJCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBSTtBQUM3QkgsWUFBUSxDQUFDSSwyREFBRCxDQUFSO0FBQ0gsR0FGMkIsRUFFekIsRUFGeUIsQ0FBNUI7QUFHQSxTQUNJLE1BQUMseUNBQUQ7QUFDSSxXQUFPLEVBQUUsQ0FDTDtBQUFLLFNBQUcsRUFBQyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBbEIsRUFBd0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVQyxNQUFsQyxDQURLLEVBRUw7QUFBSyxTQUFHLEVBQUMsV0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXhCLEVBQThCUCxJQUFJLENBQUNRLFVBQUwsQ0FBZ0JELE1BQTlDLENBRkssRUFHTDtBQUFLLFNBQUcsRUFBQyxVQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBdEIsRUFBNEJQLElBQUksQ0FBQ1MsU0FBTCxDQUFlRixNQUEzQyxDQUhLLENBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksVUFBTSxFQUFFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTUCxJQUFJLENBQUNVLFFBQUwsQ0FBYyxDQUFkLENBQVQsQ0FEWjtBQUVJLFNBQUssRUFBRVYsSUFBSSxDQUFDVSxRQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFXSSxNQUFDLDJDQUFEO0FBQVEsV0FBTyxFQUFFUCxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQVhKLENBREo7QUFlSCxDQXJCRDs7R0FBTU4sVztVQUNhQyx1RCxFQUNFSSx1RDs7O0tBRmZMLFc7QUF1QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjhhZTI1ZDA1MTc1Nzk3ZGE3YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgRm9ybSwgSW5wdXR9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3IsIHVzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtsb2dvdXRBY3Rpb259IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+e1xyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG9uTG9nb3V0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaChsb2dvdXRBY3Rpb24pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj7sp7nsp7k8YnIvPnt1c2VyLlBvc3QubGVuZ3RofTwvZGl2PixcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nXCI+7YyU66Gc7J6JPGJyLz57dXNlci5Gb2xsb3dpbmdzLmxlbmd0aH08L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2VyXCI+7YyU66GcPGJyLz57dXNlci5Gb2xsb3dlcnMubGVuZ3RofTwvZGl2PlxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPnt1c2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt1c2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nb3V0fT7roZzqt7jslYTsm4M8L0J1dHRvbj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=