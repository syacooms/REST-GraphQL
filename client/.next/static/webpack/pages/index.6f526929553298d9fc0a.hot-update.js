"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\components\\MsgList.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var UserIds = ['roy', 'jay'];

var getRandomUserId = function getRandomUserId() {
  return UserIds[Math.round(Math.random())];
};

var msgs = Array(50).fill(0).map(function (_, i) {
  return {
    id: i + 1,
    userId: getRandomUserId(),
    timestamp: 123456789123 + i * 1000 * 60,
    text: "".concat(i + 1, " mock text")
  };
}); // [
//     {
//         id: 1,
//         userId: getRandomUserId(),
//         timestamp: 123455679123,
//         text: '1 mock text'
//     },
// ]

var MsgList = function MsgList() {
  /*#__PURE__*/
  (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
    className: "messages",
    children: msgs.map(function (x) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread({}, x), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 24
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_c = MsgList;
/* harmony default export */ __webpack_exports__["default"] = (MsgList);

var _c;

$RefreshReg$(_c, "MsgList");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmY1MjY5Mjk1NTMyOThkOWZjMGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQyxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQU8sS0FBUCxDQUFoQjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxDQUFmLEVBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFXO0FBQzFDQyxJQUFBQSxFQUFFLEVBQUVELENBQUMsR0FBRyxDQURrQztBQUUxQ0UsSUFBQUEsTUFBTSxFQUFFWCxlQUFlLEVBRm1CO0FBRzFDWSxJQUFBQSxTQUFTLEVBQUUsZUFBZUgsQ0FBQyxHQUFHLElBQUosR0FBVyxFQUhLO0FBSTFDSSxJQUFBQSxJQUFJLFlBQUtKLENBQUMsR0FBRyxDQUFUO0FBSnNDLEdBQVg7QUFBQSxDQUF0QixDQUFiLEVBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCO0FBQUE7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBLGNBQ0lWLElBQUksQ0FBQ0csR0FBTCxDQUFVLFVBQUFRLENBQUM7QUFBQSwwQkFBSSw4REFBQyw2Q0FBRCxvQkFBY0EsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUFYO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdILENBSkQ7O0tBQU1EO0FBT04sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XHJcblxyXG5cclxuY29uc3QgVXNlcklkcyA9IFsncm95JywnamF5J11cclxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuY29uc3QgbXNncyA9IEFycmF5KDUwKS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcclxuICAgIGlkOiBpICsgMSxcclxuICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTEyMyArIGkgKiAxMDAwICogNjAsXHJcbiAgICB0ZXh0OiBgJHtpICsgMX0gbW9jayB0ZXh0YFxyXG59KSlcclxuXHJcbi8vIFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4vLyAgICAgICAgIHRpbWVzdGFtcDogMTIzNDU1Njc5MTIzLFxyXG4vLyAgICAgICAgIHRleHQ6ICcxIG1vY2sgdGV4dCdcclxuLy8gICAgIH0sXHJcbi8vIF1cclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj57XHJcbiAgICAgICAgbXNncy5tYXAoIHggPT4gPE1zZ0l0ZW0gIHsuLi54fSAvPilcclxuICAgIH08L3VsPlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCJdLCJuYW1lcyI6WyJNc2dJdGVtIiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIk1zZ0xpc3QiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==