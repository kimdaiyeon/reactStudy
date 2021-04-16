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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZHVtbXkiLCJpc0xvZ2dlZEluIiwiaW1hZ2VQYXRocyIsIm1haW5Qb3N0cyIsIlVzZXIiLCJpZCIsIm5pY2tuYW1lIiwiY29udGVudCIsImltZyIsIkhvbWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInBvc3QiLCJtYXAiLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRTtBQUNUQyxZQUFVLEVBQUMsSUFERjtBQUVUQyxZQUFVLEVBQUMsRUFGRjtBQUdUQyxXQUFTLEVBQUMsQ0FBQztBQUNQQyxRQUFJLEVBQUM7QUFDREMsUUFBRSxFQUFDLENBREY7QUFFREMsY0FBUSxFQUFDO0FBRlIsS0FERTtBQUtQQyxXQUFPLEVBQUMsUUFMRDtBQU1QQyxPQUFHLEVBQUM7QUFORyxHQUFEO0FBSEQsQ0FBYjs7QUFZQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFJO0FBQUE7O0FBQ2I7QUFEYSxxQkFFRUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUZiO0FBQUEsTUFFTkEsSUFGTSxnQkFFTkEsSUFGTTs7QUFBQSxzQkFHT0YsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRSxJQUFWO0FBQUEsR0FBTixDQUhsQjtBQUFBLE1BR05WLFNBSE0saUJBR05BLFNBSE0sRUFLYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1MsSUFBSSxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBQWVBLElBQUksQ0FBQ04sUUFBcEIsV0FBSCxHQUEwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBEQURuRCxFQUVLTixLQUFLLENBQUNDLFVBQU4sSUFBb0IsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRnpCLEVBR0tELEtBQUssQ0FBQ0csU0FBTixDQUFnQlcsR0FBaEIsQ0FBb0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hCLFdBQ0ksTUFBQyw0REFBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBZjtBQUFrQixVQUFJLEVBQUVBLENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESjtBQUdILEdBSkEsQ0FITCxDQURKO0FBV0gsQ0F0QkQ7O0dBQU1OLEk7VUFFYUMsdUQsRUFDS0EsdUQ7OztLQUhsQkQsSTtBQXdCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTViMjQxMDE5ZGQ4Y2UxOTU3YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtsb2dpbkFjdGlvbiwgbG9nb3V0QWN0aW9ufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgZHVtbXkgPXtcclxuICAgIGlzTG9nZ2VkSW46dHJ1ZSxcclxuICAgIGltYWdlUGF0aHM6W10sXHJcbiAgICBtYWluUG9zdHM6W3tcclxuICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgbmlja25hbWU6J+q5gOuMgOyXsCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50Oifqsozsi5zquIDsnoXri4jri6QnLFxyXG4gICAgICAgIGltZzonaHR0cDovL21lbW9wLmVkaXlhLmNvbS9hc3NldHMvbGF5b3V0cy9sYXlvdXQ0L2ltZy9sb2dvLWxpZ2h0LnBuZycsXHJcbiAgICB9XSxcclxufTtcclxuY29uc3QgSG9tZSA9ICgpPT57XHJcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHttYWluUG9zdHN9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyAgICAgZGlzcGF0Y2gobG9naW5BY3Rpb24pO1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKGxvZ291dEFjdGlvbik7XHJcbiAgICAvLyAgICAgZGlzcGF0Y2gobG9naW5BY3Rpb24pO1xyXG4gICAgLy8gfSxbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt1c2VyID8gPGRpdj7roZzqt7jsnbjtlojsirXri4jri6Q6IHt1c2VyLm5pY2tuYW1lfeuLmDwvZGl2PiA6IDxkaXY+66Gc6re47JWE7JuDIO2WiOyKteuLiOuLpC48L2Rpdj59XHJcbiAgICAgICAgICAgIHtkdW1teS5pc0xvZ2dlZEluICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICAgICAge2R1bW15Lm1haW5Qb3N0cy5tYXAoKGMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmQga2V5PXtjfSBwb3N0PXtjfS8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=