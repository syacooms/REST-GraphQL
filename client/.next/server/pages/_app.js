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
    if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    });
    return clientRef.current;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {
    client: getClient(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1HLEdBQUcsR0FBRyxDQUFFO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFGLEtBQStCO0FBQ3ZDLFFBQU1DLFNBQVMsR0FBR04sNkNBQU0sQ0FBQyxJQUFELENBQXhCOztBQUNBLFFBQU1PLFNBQVMsR0FBRyxNQUFNO0FBQ3BCLFFBQUcsQ0FBQ0QsU0FBUyxDQUFDRSxPQUFkLEVBQXVCRixTQUFTLENBQUNFLE9BQVYsR0FBb0IsSUFBSVAsb0RBQUosQ0FBZ0I7QUFDdkRRLE1BQUFBLGNBQWMsRUFBRTtBQUNaQyxRQUFBQSxPQUFPLEVBQUc7QUFDTkMsVUFBQUEsb0JBQW9CLEVBQUU7QUFEaEI7QUFERTtBQUR1QyxLQUFoQixDQUFwQjtBQU92QixXQUFPTCxTQUFTLENBQUNFLE9BQWpCO0FBQ0gsR0FURDs7QUFVQSxzQkFDQSw4REFBQyw0REFBRDtBQUFxQixVQUFNLEVBQUVELFNBQVMsRUFBdEM7QUFBQSwyQkFDSSw4REFBQyxTQUFELG9CQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREE7QUFLSCxDQWpCRDs7QUFrQkFGLEdBQUcsQ0FBQ1MsZUFBSixHQUFzQixPQUFPO0FBQUVDLEVBQUFBLEdBQUY7QUFBT1QsRUFBQUE7QUFBUCxDQUFQLEtBQThCO0FBQUE7O0FBQ2hELFFBQU1DLFNBQVMsR0FBRyxnQ0FBTUQsU0FBUyxDQUFDUSxlQUFoQiwwREFBTSwyQkFBQVIsU0FBUyxFQUFtQlMsR0FBbkIsQ0FBZixDQUFsQjtBQUNBLFNBQU87QUFBRVIsSUFBQUE7QUFBRixHQUFQO0FBQ0gsQ0FIRDs7QUFLQSxpRUFBZUYsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxuY29uc3QgQXBwID0gKCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAgIGNvbnN0IGNsaWVudFJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjbGllbnRSZWYuY3VycmVudCkgY2xpZW50UmVmLmN1cnJlbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xyXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcXVlcmllcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBjbGllbnRSZWYuY3VycmVudFxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtnZXRDbGllbnQoKX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzPy4oY3R4KVxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnRSZWYiLCJnZXRDbGllbnQiLCJjdXJyZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiXSwic291cmNlUm9vdCI6IiJ9