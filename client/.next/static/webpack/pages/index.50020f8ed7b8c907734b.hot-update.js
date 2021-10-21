"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\components\\MsgList.js",
    _this = undefined,
    _s = $RefreshSig$();

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
    timestamp: 123456789 + i * 1000 * 60,
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
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(originalMsgs),
      msgs = _useState[0],
      setMsgs = _useState[1];

  var onCreate = function onCreate(text) {
    var newMsg = {
      id: msgs.length,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: "".concat(msgs.length + 1, " ").concat(text)
    };
    setMsgs(function (msgs) {
      return [newMsg].concat((0,C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs));
    });
    console.log(msgs);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread({}, x), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 33
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "0rHCd0+xzNh1d+KPpUdLMZZ9PRQ=");

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


/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "../node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTAwMjBmOGVkN2I4YzkwNzczNGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1HLE9BQU8sR0FBRyxDQUFDLEtBQUQsRUFBTyxLQUFQLENBQWhCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxTQUFNRCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsRUFBWCxDQUFELENBQWI7QUFBQSxDQUF4Qjs7QUFFQSxJQUFNQyxJQUFJLEdBQUdDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlLENBQWYsRUFBa0JDLEdBQWxCLENBQXNCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVc7QUFDMUNDLElBQUFBLEVBQUUsRUFBRUQsQ0FBQyxHQUFHLENBRGtDO0FBRTFDRSxJQUFBQSxNQUFNLEVBQUVYLGVBQWUsRUFGbUI7QUFHMUNZLElBQUFBLFNBQVMsRUFBRSxZQUFZSCxDQUFDLEdBQUcsSUFBSixHQUFXLEVBSFE7QUFJMUNJLElBQUFBLElBQUksWUFBS0osQ0FBQyxHQUFHLENBQVQ7QUFKc0MsR0FBWDtBQUFBLENBQXRCLENBQWIsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsa0JBQXdCaEIsK0NBQVEsQ0FBQ2lCLFlBQUQsQ0FBaEM7QUFBQSxNQUFPWCxJQUFQO0FBQUEsTUFBYVksT0FBYjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBSixJQUFJLEVBQUk7QUFDckIsUUFBTUssTUFBTSxHQUFHO0FBQ1hSLE1BQUFBLEVBQUUsRUFBRU4sSUFBSSxDQUFDZSxNQURFO0FBRVhSLE1BQUFBLE1BQU0sRUFBRVgsZUFBZSxFQUZaO0FBR1hZLE1BQUFBLFNBQVMsRUFBRVEsSUFBSSxDQUFDQyxHQUFMLEVBSEE7QUFJWFIsTUFBQUEsSUFBSSxZQUFLVCxJQUFJLENBQUNlLE1BQUwsR0FBYyxDQUFuQixjQUF3Qk4sSUFBeEI7QUFKTyxLQUFmO0FBTUFHLElBQUFBLE9BQU8sQ0FBQyxVQUFBWixJQUFJO0FBQUEsY0FBTWMsTUFBTixpSkFBaUJkLElBQWpCO0FBQUEsS0FBTCxDQUFQO0FBQ0FrQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW5CLElBQVo7QUFDSCxHQVREOztBQVVBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVhO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDS2IsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQWlCLENBQUM7QUFBQSw0QkFBSyw4REFBQyw2Q0FBRCxvQkFBd0JBLENBQXhCLEdBQWNBLENBQUMsQ0FBQ2QsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBTDtBQUFBLE9BQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQVFILENBckJEOztHQUFNSTs7S0FBQUE7QUF3Qk4sK0RBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERlO0FBQ2Y7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNScUQ7QUFDdEM7QUFDZixpQ0FBaUMsNkRBQWdCO0FBQ2pEOzs7Ozs7Ozs7Ozs7OztBQ0hlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z1RDtBQUNKO0FBQ3NCO0FBQ2xCO0FBQ3hDO0FBQ2YsU0FBUyw4REFBaUIsU0FBUyw0REFBZSxTQUFTLHVFQUEwQixTQUFTLDhEQUFpQjtBQUMvRzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ3RDO0FBQ2Y7QUFDQSxvQ0FBb0MsNkRBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRiw2REFBZ0I7QUFDdEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgVXNlcklkcyA9IFsncm95JywnamF5J11cclxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuY29uc3QgbXNncyA9IEFycmF5KDUwKS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcclxuICAgIGlkOiBpICsgMSxcclxuICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OSArIGkgKiAxMDAwICogNjAsXHJcbiAgICB0ZXh0OiBgJHtpICsgMX0gbW9jayB0ZXh0YFxyXG59KSlcclxuXHJcbi8vIFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4vLyAgICAgICAgIHRpbWVzdGFtcDogMTIzNDU1Njc5MTIzLFxyXG4vLyAgICAgICAgIHRleHQ6ICcxIG1vY2sgdGV4dCdcclxuLy8gICAgIH0sXHJcbi8vIF1cclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpXHJcblxyXG4gICAgY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgICAgICAgIGlkOiBtc2dzLmxlbmd0aCxcclxuICAgICAgICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiAoW25ld01zZywgLi4ubXNnc10pKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZ3MpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICB7bXNncy5tYXAoeCA9PiAoPE1zZ0l0ZW0ga2V5PXt4LmlkfSB7Li4ueH0gLz4pKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSJdLCJuYW1lcyI6WyJNc2dJdGVtIiwiTXNnSW5wdXQiLCJ1c2VTdGF0ZSIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJtc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJNc2dMaXN0Iiwib3JpZ2luYWxNc2dzIiwic2V0TXNncyIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==