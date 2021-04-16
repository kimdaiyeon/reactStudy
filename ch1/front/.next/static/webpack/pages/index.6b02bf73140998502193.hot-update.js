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





var dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '김대연'
    },
    content: '게시글입니다',
    img: 'http://memop.ediya.com/assets/layouts/layout4/img/logo-light.png'
  }]
};

var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  console.log(state);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn,
      user = _useSelector.user;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["loginAction"]);
    dispatch(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["logoutAction"]);
    dispatch(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["loginAction"]);
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, user ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "\uB85C\uADF8\uC778\uD588\uC2B5\uB2C8\uB2E4: ", user.nickname, "\uB2D8") : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 60
    }
  }, "\uB85C\uADF8\uC544\uC6C3 \uD588\uC2B5\uB2C8\uB2E4."), dummy.isLoggedIn && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 34
    }
  }), dummy.mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: c,
      post: c,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    });
  }));
};

_s(Home, "YGTLqmIJs6VkyaCBmrkbMQmxQKY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZHVtbXkiLCJpc0xvZ2dlZEluIiwiaW1hZ2VQYXRocyIsIm1haW5Qb3N0cyIsIlVzZXIiLCJpZCIsIm5pY2tuYW1lIiwiY29udGVudCIsImltZyIsIkhvbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwidXNlU2VsZWN0b3IiLCJ1c2VyIiwidXNlRWZmZWN0IiwibG9naW5BY3Rpb24iLCJsb2dvdXRBY3Rpb24iLCJtYXAiLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRTtBQUNUQyxZQUFVLEVBQUMsSUFERjtBQUVUQyxZQUFVLEVBQUMsRUFGRjtBQUdUQyxXQUFTLEVBQUMsQ0FBQztBQUNQQyxRQUFJLEVBQUM7QUFDREMsUUFBRSxFQUFDLENBREY7QUFFREMsY0FBUSxFQUFDO0FBRlIsS0FERTtBQUtQQyxXQUFPLEVBQUMsUUFMRDtBQU1QQyxPQUFHLEVBQUM7QUFORyxHQUFEO0FBSEQsQ0FBYjs7QUFZQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFJO0FBQUE7O0FBQ2IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjs7QUFGYSxxQkFHY0MsK0RBQVcsQ0FBQyxVQUFBRCxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRSxJQUFWO0FBQUEsR0FBTixDQUh6QjtBQUFBLE1BR05mLFVBSE0sZ0JBR05BLFVBSE07QUFBQSxNQUdNZSxJQUhOLGdCQUdNQSxJQUhOOztBQUtiQyx5REFBUyxDQUFDLFlBQUk7QUFDVlAsWUFBUSxDQUFDUSwwREFBRCxDQUFSO0FBQ0FSLFlBQVEsQ0FBQ1MsMkRBQUQsQ0FBUjtBQUNBVCxZQUFRLENBQUNRLDBEQUFELENBQVI7QUFDSCxHQUpRLEVBSVAsRUFKTyxDQUFUO0FBTUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tGLElBQUksR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUFlQSxJQUFJLENBQUNWLFFBQXBCLFdBQUgsR0FBMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFEbkQsRUFFS04sS0FBSyxDQUFDQyxVQUFOLElBQW9CLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZ6QixFQUdLRCxLQUFLLENBQUNHLFNBQU4sQ0FBZ0JpQixHQUFoQixDQUFvQixVQUFDQyxDQUFELEVBQU87QUFDeEIsV0FDSSxNQUFDLDREQUFEO0FBQVUsU0FBRyxFQUFFQSxDQUFmO0FBQWtCLFVBQUksRUFBRUEsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKO0FBR0gsR0FKQSxDQUhMLENBREo7QUFXSCxDQXRCRDs7R0FBTVosSTtVQUNlRSx1RCxFQUVVSSx1RDs7O0tBSHpCTixJO0FBd0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YjAyYmY3MzE0MDk5ODUwMjE5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvZ2luQWN0aW9uLCBsb2dvdXRBY3Rpb259IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5jb25zdCBkdW1teSA9e1xyXG4gICAgaXNMb2dnZWRJbjp0cnVlLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuICAgIG1haW5Qb3N0czpbe1xyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTon6rmA64yA7JewJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6J+qyjOyLnOq4gOyeheuLiOuLpCcsXHJcbiAgICAgICAgaW1nOidodHRwOi8vbWVtb3AuZWRpeWEuY29tL2Fzc2V0cy9sYXlvdXRzL2xheW91dDQvaW1nL2xvZ28tbGlnaHQucG5nJyxcclxuICAgIH1dLFxyXG59O1xyXG5jb25zdCBIb21lID0gKCk9PntcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxyXG4gICAgY29uc3Qge2lzTG9nZ2VkSW4sIHVzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5BY3Rpb24pO1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dEFjdGlvbik7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5BY3Rpb24pO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt1c2VyID8gPGRpdj7roZzqt7jsnbjtlojsirXri4jri6Q6IHt1c2VyLm5pY2tuYW1lfeuLmDwvZGl2PiA6IDxkaXY+66Gc6re47JWE7JuDIO2WiOyKteuLiOuLpC48L2Rpdj59XHJcbiAgICAgICAgICAgIHtkdW1teS5pc0xvZ2dlZEluICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICAgICAge2R1bW15Lm1haW5Qb3N0cy5tYXAoKGMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmQga2V5PXtjfSBwb3N0PXtjfS8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=