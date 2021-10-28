(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const App = ({
  Component,
  pageProps
}) => {
  const clientRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const getClient = () => {
    if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
    return clientRef.current;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {
    client: getClient(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

App.getInitialProps = async ({
  ctx,
  Component
}) => {
  var _Component$getInitial;

  const pageProps = await ((_Component$getInitial = Component.getInitialProps) === null || _Component$getInitial === void 0 ? void 0 : _Component$getInitial.call(Component, ctx));
  return {
    pageProps
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1HLEdBQUcsR0FBRyxDQUFFO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFGLEtBQStCO0FBQ3ZDLFFBQU1DLFNBQVMsR0FBR04sNkNBQU0sQ0FBQyxJQUFELENBQXhCOztBQUNBLFFBQU1PLFNBQVMsR0FBRyxNQUFNO0FBQ3BCLFFBQUcsQ0FBQ0QsU0FBUyxDQUFDRSxPQUFkLEVBQXVCRixTQUFTLENBQUNFLE9BQVYsR0FBb0IsSUFBSVAsb0RBQUosRUFBcEI7QUFDdkIsV0FBT0ssU0FBUyxDQUFDRSxPQUFqQjtBQUNILEdBSEQ7O0FBSUEsc0JBQ0EsOERBQUMsNERBQUQ7QUFBcUIsVUFBTSxFQUFFRCxTQUFTLEVBQXRDO0FBQUEsMkJBQ0ksOERBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBO0FBS0gsQ0FYRDs7QUFZQUYsR0FBRyxDQUFDTSxlQUFKLEdBQXNCLE9BQU87QUFBRUMsRUFBQUEsR0FBRjtBQUFPTixFQUFBQTtBQUFQLENBQVAsS0FBOEI7QUFBQTs7QUFDaEQsUUFBTUMsU0FBUyxHQUFHLGdDQUFNRCxTQUFTLENBQUNLLGVBQWhCLDBEQUFNLDJCQUFBTCxTQUFTLEVBQW1CTSxHQUFuQixDQUFmLENBQWxCO0FBQ0EsU0FBTztBQUFFTCxJQUFBQTtBQUFGLEdBQVA7QUFDSCxDQUhEOztBQUtBLGlFQUFlRixHQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVyQkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSc7XHJcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuXHJcbmNvbnN0IEFwcCA9ICggeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCBjbGllbnRSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IGdldENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICBpZighY2xpZW50UmVmLmN1cnJlbnQpIGNsaWVudFJlZi5jdXJyZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KClcclxuICAgICAgICByZXR1cm4gY2xpZW50UmVmLmN1cnJlbnRcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17Z2V0Q2xpZW50KCl9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICAgIClcclxufVxyXG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4LCBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcz8uKGN0eClcclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlUmVmIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50UmVmIiwiZ2V0Q2xpZW50IiwiY3VycmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCJdLCJzb3VyY2VSb290IjoiIn0=