webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\intellijRepository\\reactStudy\\ch1\\front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Home = function Home() {
  _s();

  // const dispatch = useDispatch();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector.user;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts; // useEffect(()=>{
  //     dispatch(loginAction);
  //     dispatch(logoutAction);
  //     dispatch(loginAction);
  // },[]);


  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, user ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "\uB85C\uADF8\uC778\uD588\uC2B5\uB2C8\uB2E4: ", user.nickname, "\uB2D8") : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 60
    }
  }, "\uB85C\uADF8\uC544\uC6C3 \uD588\uC2B5\uB2C8\uB2E4."), dummy.isLoggedIn && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 34
    }
  }), dummy.mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: c,
      post: c,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    });
  }));
};

_s(Home, "3AiC8J8tyOuH52QgZhU9Buf+85o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwicG9zdCIsIm1haW5Qb3N0cyIsIm5pY2tuYW1lIiwiZHVtbXkiLCJpc0xvZ2dlZEluIiwibWFwIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBSTtBQUFBOztBQUNiO0FBRGEscUJBRUVDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FGYjtBQUFBLE1BRU5BLElBRk0sZ0JBRU5BLElBRk07O0FBQUEsc0JBR09GLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0UsSUFBVjtBQUFBLEdBQU4sQ0FIbEI7QUFBQSxNQUdOQyxTQUhNLGlCQUdOQSxTQUhNLEVBS2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tGLElBQUksR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUFlQSxJQUFJLENBQUNHLFFBQXBCLFdBQUgsR0FBMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFEbkQsRUFFS0MsS0FBSyxDQUFDQyxVQUFOLElBQW9CLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZ6QixFQUdLRCxLQUFLLENBQUNGLFNBQU4sQ0FBZ0JJLEdBQWhCLENBQW9CLFVBQUNDLENBQUQsRUFBTztBQUN4QixXQUNJLE1BQUMsNERBQUQ7QUFBVSxTQUFHLEVBQUVBLENBQWY7QUFBa0IsVUFBSSxFQUFFQSxDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREo7QUFHSCxHQUpBLENBSEwsQ0FESjtBQVdILENBdEJEOztHQUFNVixJO1VBRWFDLHVELEVBQ0tBLHVEOzs7S0FIbEJELEk7QUF3QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM0ZWI4YjkyNzk3Y2JkOTQ3MjZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7bG9naW5BY3Rpb24sIGxvZ291dEFjdGlvbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKT0+e1xyXG4gICAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7bWFpblBvc3RzfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKGxvZ2luQWN0aW9uKTtcclxuICAgIC8vICAgICBkaXNwYXRjaChsb2dvdXRBY3Rpb24pO1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKGxvZ2luQWN0aW9uKTtcclxuICAgIC8vIH0sW10pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7dXNlciA/IDxkaXY+66Gc6re47J247ZaI7Iq164uI64ukOiB7dXNlci5uaWNrbmFtZX3ri5g8L2Rpdj4gOiA8ZGl2PuuhnOq3uOyVhOybgyDtlojsirXri4jri6QuPC9kaXY+fVxyXG4gICAgICAgICAgICB7ZHVtbXkuaXNMb2dnZWRJbiAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgICAgICAgIHtkdW1teS5tYWluUG9zdHMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RDYXJkIGtleT17Y30gcG9zdD17Y30vPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9