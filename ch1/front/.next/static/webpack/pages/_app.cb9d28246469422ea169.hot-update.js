webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
    User: {
      id: 1,
      nickname: '김대연'
    },
    content: '게시글입니다',
    img: 'http://memop.ediya.com/assets/layouts/layout4/img/logo-light.png'
  }],
  imagePaths: []
};
var ADD_POST = 'ADD_POST';
var ADD_DUMMY = 'ADD_DUMMY';
var addPost = {
  type: ADD_POST
};
var addDummy = {
  type: ADD_DUMMY,
  data: {
    content: 'Hello',
    UserId: 1,
    User: {
      nickname: '디와이'
    }
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      {
        return _objectSpread({}, state);
      }

    case ADD_DUMMY:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [action.data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJVc2VyIiwiaWQiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJpbWciLCJpbWFnZVBhdGhzIiwiQUREX1BPU1QiLCJBRERfRFVNTVkiLCJhZGRQb3N0IiwidHlwZSIsImFkZER1bW15IiwiZGF0YSIsIlVzZXJJZCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUMsQ0FBQztBQUNQQyxRQUFJLEVBQUM7QUFDREMsUUFBRSxFQUFDLENBREY7QUFFREMsY0FBUSxFQUFDO0FBRlIsS0FERTtBQUtQQyxXQUFPLEVBQUMsUUFMRDtBQU1QQyxPQUFHLEVBQUM7QUFORyxHQUFELENBRGM7QUFTeEJDLFlBQVUsRUFBQztBQVRhLENBQXJCO0FBWVAsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBRUEsSUFBTUMsT0FBTyxHQUFHO0FBQ1pDLE1BQUksRUFBRUg7QUFETSxDQUFoQjtBQUlBLElBQU1JLFFBQVEsR0FBRztBQUNiRCxNQUFJLEVBQUVGLFNBRE87QUFFYkksTUFBSSxFQUFDO0FBQ0RSLFdBQU8sRUFBRSxPQURSO0FBRURTLFVBQU0sRUFBRSxDQUZQO0FBR0RaLFFBQUksRUFBRTtBQUNGRSxjQUFRLEVBQUM7QUFEUDtBQUhMO0FBRlEsQ0FBakI7O0FBV0EsSUFBTVcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCaEIsWUFBeUI7QUFBQSxNQUFYaUIsTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDTixJQUFmO0FBQ0ksU0FBS0gsUUFBTDtBQUFjO0FBQ1YsaUNBQ09RLEtBRFA7QUFHSDs7QUFFRCxTQUFLUCxTQUFMO0FBQWU7QUFDWCwrQ0FDT08sS0FEUDtBQUVJZixtQkFBUyxHQUFHZ0IsTUFBTSxDQUFDSixJQUFWLHNHQUFtQkcsS0FBSyxDQUFDZixTQUF6QjtBQUZiO0FBSUg7O0FBRUQ7QUFBUTtBQUNKLGlDQUNPZSxLQURQO0FBR0g7QUFsQkw7QUFvQkgsQ0FyQkQ7O0FBdUJlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNiOWQyODI0NjQ2OTQyMmVhMTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOlt7XHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOifquYDrjIDsl7AnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDon6rKM7Iuc6riA7J6F64uI64ukJyxcclxuICAgICAgICBpbWc6J2h0dHA6Ly9tZW1vcC5lZGl5YS5jb20vYXNzZXRzL2xheW91dHMvbGF5b3V0NC9pbWcvbG9nby1saWdodC5wbmcnLFxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOltdLFxyXG59O1xyXG5cclxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xyXG5jb25zdCBBRERfRFVNTVkgPSAnQUREX0RVTU1ZJztcclxuXHJcbmNvbnN0IGFkZFBvc3QgPSB7XHJcbiAgICB0eXBlOiBBRERfUE9TVCxcclxufTtcclxuXHJcbmNvbnN0IGFkZER1bW15ID0ge1xyXG4gICAgdHlwZTogQUREX0RVTU1ZLFxyXG4gICAgZGF0YTp7XHJcbiAgICAgICAgY29udGVudDogJ0hlbGxvJyxcclxuICAgICAgICBVc2VySWQ6IDEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTon65SU7JmA7J20JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1Q6e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFERF9EVU1NWTp7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDp7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==