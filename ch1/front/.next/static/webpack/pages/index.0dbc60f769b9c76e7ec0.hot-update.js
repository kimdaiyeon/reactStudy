webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN, LOG_OUT, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN", function() { return LOG_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var dummyUser = {
  nickname: '디와이',
  Post: [],
  Followings: [],
  Followers: []
};
var initialState = {
  isLoggedIn: false,
  user: null
};
var LOG_IN = 'LOG_IN'; //액션의 이름

var LOG_OUT = 'LOG_OUT'; //액션의 이름

var loginAction = {
  type: LOG_IN,
  data: {
    nickname: '디와이'
  }
};
var logoutAction = {
  type: LOG_OUT
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggedIn: true,
          user: dummyUser
        });
      }

    case LOG_OUT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggedIn: false,
          user: null
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJuaWNrbmFtZSIsIlBvc3QiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJMT0dfSU4iLCJMT0dfT1VUIiwibG9naW5BY3Rpb24iLCJ0eXBlIiwiZGF0YSIsImxvZ291dEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUc7QUFDZEMsVUFBUSxFQUFDLEtBREs7QUFFZEMsTUFBSSxFQUFDLEVBRlM7QUFHZEMsWUFBVSxFQUFDLEVBSEc7QUFJZEMsV0FBUyxFQUFDO0FBSkksQ0FBbEI7QUFNTyxJQUFNQyxZQUFZLEdBQUc7QUFDeEJDLFlBQVUsRUFBRSxLQURZO0FBRXhCQyxNQUFJLEVBQUM7QUFGbUIsQ0FBckI7QUFLQSxJQUFNQyxNQUFNLEdBQUcsUUFBZixDLENBQXlCOztBQUN6QixJQUFNQyxPQUFPLEdBQUcsU0FBaEIsQyxDQUEyQjs7QUFFM0IsSUFBTUMsV0FBVyxHQUFHO0FBQ3ZCQyxNQUFJLEVBQUVILE1BRGlCO0FBRXZCSSxNQUFJLEVBQUU7QUFDRlgsWUFBUSxFQUFFO0FBRFI7QUFGaUIsQ0FBcEI7QUFPQSxJQUFNWSxZQUFZLEdBQUM7QUFDeEJGLE1BQUksRUFBRUY7QUFEa0IsQ0FBbkI7O0FBSVAsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBbUM7QUFBQSxNQUFsQ0MsS0FBa0MsdUVBQTFCVixZQUEwQjtBQUFBLE1BQVpXLE1BQVk7O0FBQy9DLFVBQVFBLE1BQU0sQ0FBQ0wsSUFBZjtBQUNJLFNBQUtILE1BQUw7QUFBWTtBQUNSLCtDQUNPTyxLQURQO0FBRUlULG9CQUFVLEVBQUUsSUFGaEI7QUFHSUMsY0FBSSxFQUFFUDtBQUhWO0FBS0g7O0FBRUQsU0FBS1MsT0FBTDtBQUFhO0FBQ1QsK0NBQ09NLEtBRFA7QUFFSVQsb0JBQVUsRUFBRSxLQUZoQjtBQUdJQyxjQUFJLEVBQUU7QUFIVjtBQUtIOztBQUVEO0FBQVE7QUFDSixpQ0FDT1EsS0FEUDtBQUdIO0FBckJMO0FBdUJILENBeEJEOztBQTBCZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGRiYzYwZjc2OWI5Yzc2ZTdlYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGR1bW15VXNlciA9IHtcclxuICAgIG5pY2tuYW1lOifrlJTsmYDsnbQnLFxyXG4gICAgUG9zdDpbXSxcclxuICAgIEZvbGxvd2luZ3M6W10sXHJcbiAgICBGb2xsb3dlcnM6W10sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIHVzZXI6bnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU4gPSAnTE9HX0lOJzsgLy/slaHshZjsnZgg7J2066aEXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnOyAvL+yVoeyFmOydmCDsnbTrpoRcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IHtcclxuICAgIHR5cGU6IExPR19JTixcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBuaWNrbmFtZTogJ+uUlOyZgOydtCcsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbj17XHJcbiAgdHlwZTogTE9HX09VVCxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR19JTjp7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBkdW1teVVzZXIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgTE9HX09VVDp7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9