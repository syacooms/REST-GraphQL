(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "../node_modules/react-query/es/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\pages\\_app.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var App = function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var clientRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);

  var getClient = function getClient() {
    if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    });
    return clientRef.current;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
    client: getClient(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_s(App, "67t0qiuNMBMd6ZM7Z7JwZpgZZRM=");

_c = App;

App.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(_ref2) {
    var _Component$getInitial;

    var ctx, Component, pageProps;
    return C_Users_bxoo_Desktop_PJT_REST_GraphQL_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx, Component = _ref2.Component;
            _context.next = 3;
            return (_Component$getInitial = Component.getInitialProps) === null || _Component$getInitial === void 0 ? void 0 : _Component$getInitial.call(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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

/***/ "../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!":
/*!********************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app! ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./index.scss */ "../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./pages/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./index.scss */ "../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./pages/index.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./index.scss */ "../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./pages/index.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target];
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "../node_modules/next/dist/compiled/css-loader/api.js":
/*!************************************************************!*\
  !*** ../node_modules/next/dist/compiled/css-loader/api.js ***!
  \************************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./pages/index.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./pages/index.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "../node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n\n#__next {\n  margin: 10px;\n}\n\nh1 {\n  text-align: center;\n  margin: 20px 0;\n}\n\n.messages {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.messages__input {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  width: 80%;\n  max-width: 700px;\n  min-width: 400px;\n  margin: 0 auto 10px;\n}\n.messages__input > * {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.messages__input textarea {\n  padding: 10px;\n  -webkit-flex-grow: 1;\n     -moz-box-flex: 1;\n          flex-grow: 1;\n}\n.messages__input button {\n  margin-left: 5px;\n  width: 60px;\n}\n.messages__item {\n  position: relative;\n  margin: 10px 0;\n  padding: 15px 15px 5px;\n  border-radius: 5px;\n  border: solid 1px #aaa;\n}\n.messages__item h3 {\n  font-size: 0.85em;\n  margin: 0 0 10px;\n}\n.messages__item sub {\n  font-weight: normal;\n  margin-left: 5px;\n  vertical-align: baseline;\n}\n.messages__item p {\n  margin: 10px 0;\n}\n.messages__item:hover .messages__buttons {\n  display: block;\n}\n.messages__item .messages__input {\n  width: 100%;\n}\n.messages__buttons {\n  display: none;\n  position: absolute;\n  text-align: right;\n  right: 10px;\n  bottom: 10px;\n}", "",{"version":3,"sources":["webpack://index.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;AACJ;;AACE;EACE,YAAA;AAEJ;;AAAE;EACE,kBAAA;EACA,cAAA;AAGJ;;AADE;EACE,gBAAA;EACA,UAAA;EACA,SAAA;AAIJ;AAHI;EACE,qBAAA;EAAA,iBAAA;EAAA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AAKN;AAJM;EACE,8BAAA;KAAA,2BAAA;UAAA,sBAAA;AAMR;AAJM;EACE,aAAA;EACA,oBAAA;KAAA,gBAAA;UAAA,YAAA;AAMR;AAJM;EACE,gBAAA;EACA,WAAA;AAMR;AAHI;EACE,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;AAKN;AAJM;EACE,iBAAA;EACA,gBAAA;AAMR;AAJM;EACE,mBAAA;EACA,gBAAA;EACA,wBAAA;AAMR;AAJM;EACE,cAAA;AAMR;AAJM;EACE,cAAA;AAMR;AAJM;EACE,WAAA;AAMR;AAHI;EACE,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;AAKN","sourcesContent":["body {\r\n    margin: 0;\r\n  }\r\n  #__next {\r\n    margin: 10px;\r\n  }\r\n  h1 {\r\n    text-align: center;\r\n    margin: 20px 0;\r\n  }\r\n  .messages {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    &__input {\r\n      display: flex;\r\n      width: 80%;\r\n      max-width: 700px;\r\n      min-width: 400px;\r\n      margin: 0 auto 10px;\r\n      > * {\r\n        box-sizing: border-box;\r\n      }\r\n      textarea {\r\n        padding: 10px;\r\n        flex-grow: 1;\r\n      }\r\n      button {\r\n        margin-left: 5px;\r\n        width: 60px;\r\n      }\r\n    }\r\n    &__item {\r\n      position: relative;\r\n      margin: 10px 0;\r\n      padding: 15px 15px 5px;\r\n      border-radius: 5px;\r\n      border: solid 1px #aaa;\r\n      h3 {\r\n        font-size: 0.85em;\r\n        margin: 0 0 10px;\r\n      }\r\n      sub {\r\n        font-weight: normal;\r\n        margin-left: 5px;\r\n        vertical-align: baseline;\r\n      }\r\n      p {\r\n        margin: 10px 0;\r\n      }\r\n      &:hover .messages__buttons {\r\n        display: block;\r\n      }\r\n      .messages__input {\r\n        width: 100%;\r\n      }\r\n    }\r\n    &__buttons {\r\n      display: none;\r\n      position: absolute;\r\n      text-align: right;\r\n      right: 10px;\r\n      bottom: 10px;\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/react-query/es/core/focusManager.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-query/es/core/focusManager.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusManager": function() { return /* binding */ focusManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");




var FocusManager = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(FocusManager, _Subscribable);

  function FocusManager() {
    return _Subscribable.apply(this, arguments) || this;
  }

  var _proto = FocusManager.prototype;

  _proto.onSubscribe = function onSubscribe() {
    if (!this.removeEventListener) {
      this.setDefaultEventListener();
    }
  };

  _proto.setEventListener = function setEventListener(setup) {
    var _this = this;

    if (this.removeEventListener) {
      this.removeEventListener();
    }

    this.removeEventListener = setup(function (focused) {
      if (typeof focused === 'boolean') {
        _this.setFocused(focused);
      } else {
        _this.onFocus();
      }
    });
  };

  _proto.setFocused = function setFocused(focused) {
    this.focused = focused;

    if (focused) {
      this.onFocus();
    }
  };

  _proto.onFocus = function onFocus() {
    this.listeners.forEach(function (listener) {
      listener();
    });
  };

  _proto.isFocused = function isFocused() {
    if (typeof this.focused === 'boolean') {
      return this.focused;
    } // document global can be unavailable in react native


    if (typeof document === 'undefined') {
      return true;
    }

    return [undefined, 'visible', 'prerender'].includes(document.visibilityState);
  };

  _proto.setDefaultEventListener = function setDefaultEventListener() {
    var _window;

    if (!_utils__WEBPACK_IMPORTED_MODULE_1__.isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
      this.setEventListener(function (onFocus) {
        var listener = function listener() {
          return onFocus();
        }; // Listen to visibillitychange and focus


        window.addEventListener('visibilitychange', listener, false);
        window.addEventListener('focus', listener, false);
        return function () {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('visibilitychange', listener);
          window.removeEventListener('focus', listener);
        };
      });
    }
  };

  return FocusManager;
}(_subscribable__WEBPACK_IMPORTED_MODULE_2__.Subscribable);

var focusManager = new FocusManager();

/***/ }),

/***/ "../node_modules/react-query/es/core/hydration.js":
/*!********************************************************!*\
  !*** ../node_modules/react-query/es/core/hydration.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dehydrate": function() { return /* binding */ dehydrate; },
/* harmony export */   "hydrate": function() { return /* binding */ hydrate; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");


// TYPES
// FUNCTIONS
function dehydrateMutation(mutation) {
  return {
    mutationKey: mutation.options.mutationKey,
    state: mutation.state
  };
} // Most config is not dehydrated but instead meant to configure again when
// consuming the de/rehydrated data, typically with useQuery on the client.
// Sometimes it might make sense to prefetch data on the server and include
// in the html-payload, but not consume it on the initial render.


function dehydrateQuery(query) {
  return {
    state: query.state,
    queryKey: query.queryKey,
    queryHash: query.queryHash
  };
}

function defaultShouldDehydrateMutation(mutation) {
  return mutation.state.isPaused;
}

function defaultShouldDehydrateQuery(query) {
  return query.state.status === 'success';
}

function dehydrate(client, options) {
  var _options, _options2;

  options = options || {};
  var mutations = [];
  var queries = [];

  if (((_options = options) == null ? void 0 : _options.dehydrateMutations) !== false) {
    var shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
    client.getMutationCache().getAll().forEach(function (mutation) {
      if (shouldDehydrateMutation(mutation)) {
        mutations.push(dehydrateMutation(mutation));
      }
    });
  }

  if (((_options2 = options) == null ? void 0 : _options2.dehydrateQueries) !== false) {
    var shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
    client.getQueryCache().getAll().forEach(function (query) {
      if (shouldDehydrateQuery(query)) {
        queries.push(dehydrateQuery(query));
      }
    });
  }

  return {
    mutations: mutations,
    queries: queries
  };
}
function hydrate(client, dehydratedState, options) {
  if (typeof dehydratedState !== 'object' || dehydratedState === null) {
    return;
  }

  var mutationCache = client.getMutationCache();
  var queryCache = client.getQueryCache();
  var mutations = dehydratedState.mutations || [];
  var queries = dehydratedState.queries || [];
  mutations.forEach(function (dehydratedMutation) {
    var _options$defaultOptio;

    mutationCache.build(client, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations, {
      mutationKey: dehydratedMutation.mutationKey
    }), dehydratedMutation.state);
  });
  queries.forEach(function (dehydratedQuery) {
    var _options$defaultOptio2;

    var query = queryCache.get(dehydratedQuery.queryHash); // Do not hydrate if an existing query exists with newer data

    if (query) {
      if (query.state.dataUpdatedAt < dehydratedQuery.state.dataUpdatedAt) {
        query.setState(dehydratedQuery.state);
      }

      return;
    } // Restore query


    queryCache.build(client, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries, {
      queryKey: dehydratedQuery.queryKey,
      queryHash: dehydratedQuery.queryHash
    }), dehydratedQuery.state);
  });
}

/***/ }),

/***/ "../node_modules/react-query/es/core/index.js":
/*!****************************************************!*\
  !*** ../node_modules/react-query/es/core/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelledError": function() { return /* reexport safe */ _retryer__WEBPACK_IMPORTED_MODULE_0__.CancelledError; },
/* harmony export */   "QueryCache": function() { return /* reexport safe */ _queryCache__WEBPACK_IMPORTED_MODULE_1__.QueryCache; },
/* harmony export */   "QueryClient": function() { return /* reexport safe */ _queryClient__WEBPACK_IMPORTED_MODULE_2__.QueryClient; },
/* harmony export */   "QueryObserver": function() { return /* reexport safe */ _queryObserver__WEBPACK_IMPORTED_MODULE_3__.QueryObserver; },
/* harmony export */   "QueriesObserver": function() { return /* reexport safe */ _queriesObserver__WEBPACK_IMPORTED_MODULE_4__.QueriesObserver; },
/* harmony export */   "InfiniteQueryObserver": function() { return /* reexport safe */ _infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_5__.InfiniteQueryObserver; },
/* harmony export */   "MutationCache": function() { return /* reexport safe */ _mutationCache__WEBPACK_IMPORTED_MODULE_6__.MutationCache; },
/* harmony export */   "MutationObserver": function() { return /* reexport safe */ _mutationObserver__WEBPACK_IMPORTED_MODULE_7__.MutationObserver; },
/* harmony export */   "setLogger": function() { return /* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_8__.setLogger; },
/* harmony export */   "notifyManager": function() { return /* reexport safe */ _notifyManager__WEBPACK_IMPORTED_MODULE_9__.notifyManager; },
/* harmony export */   "focusManager": function() { return /* reexport safe */ _focusManager__WEBPACK_IMPORTED_MODULE_10__.focusManager; },
/* harmony export */   "onlineManager": function() { return /* reexport safe */ _onlineManager__WEBPACK_IMPORTED_MODULE_11__.onlineManager; },
/* harmony export */   "hashQueryKey": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.hashQueryKey; },
/* harmony export */   "isError": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.isError; },
/* harmony export */   "isCancelledError": function() { return /* reexport safe */ _retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelledError; },
/* harmony export */   "dehydrate": function() { return /* reexport safe */ _hydration__WEBPACK_IMPORTED_MODULE_13__.dehydrate; },
/* harmony export */   "hydrate": function() { return /* reexport safe */ _hydration__WEBPACK_IMPORTED_MODULE_13__.hydrate; }
/* harmony export */ });
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryer */ "../node_modules/react-query/es/core/retryer.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryCache */ "../node_modules/react-query/es/core/queryCache.js");
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queryClient */ "../node_modules/react-query/es/core/queryClient.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryObserver */ "../node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _queriesObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queriesObserver */ "../node_modules/react-query/es/core/queriesObserver.js");
/* harmony import */ var _infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infiniteQueryObserver */ "../node_modules/react-query/es/core/infiniteQueryObserver.js");
/* harmony import */ var _mutationCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mutationCache */ "../node_modules/react-query/es/core/mutationCache.js");
/* harmony import */ var _mutationObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mutationObserver */ "../node_modules/react-query/es/core/mutationObserver.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ "../node_modules/react-query/es/core/logger.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./focusManager */ "../node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./onlineManager */ "../node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hydration */ "../node_modules/react-query/es/core/hydration.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./types */ "../node_modules/react-query/es/core/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_14__) if(["default","CancelledError","QueryCache","QueryClient","QueryObserver","QueriesObserver","InfiniteQueryObserver","MutationCache","MutationObserver","setLogger","notifyManager","focusManager","onlineManager","hashQueryKey","isError","isCancelledError","dehydrate","hydrate"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_14__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);














 // Types



/***/ }),

/***/ "../node_modules/react-query/es/core/infiniteQueryBehavior.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-query/es/core/infiniteQueryBehavior.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "infiniteQueryBehavior": function() { return /* binding */ infiniteQueryBehavior; },
/* harmony export */   "getNextPageParam": function() { return /* binding */ getNextPageParam; },
/* harmony export */   "getPreviousPageParam": function() { return /* binding */ getPreviousPageParam; },
/* harmony export */   "hasNextPage": function() { return /* binding */ hasNextPage; },
/* harmony export */   "hasPreviousPage": function() { return /* binding */ hasPreviousPage; }
/* harmony export */ });
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryer */ "../node_modules/react-query/es/core/retryer.js");

function infiniteQueryBehavior() {
  return {
    onFetch: function onFetch(context) {
      context.fetchFn = function () {
        var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;

        var refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
        var fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
        var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'forward';
        var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'backward';
        var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        var newPageParams = oldPageParams;
        var cancelled = false; // Get query function

        var queryFn = context.options.queryFn || function () {
          return Promise.reject('Missing queryFn');
        };

        var buildNewPages = function buildNewPages(pages, param, page, previous) {
          newPageParams = previous ? [param].concat(newPageParams) : [].concat(newPageParams, [param]);
          return previous ? [page].concat(pages) : [].concat(pages, [page]);
        }; // Create function to fetch a page


        var fetchPage = function fetchPage(pages, manual, param, previous) {
          if (cancelled) {
            return Promise.reject('Cancelled');
          }

          if (typeof param === 'undefined' && !manual && pages.length) {
            return Promise.resolve(pages);
          }

          var queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param,
            meta: context.meta
          };
          var queryFnResult = queryFn(queryFnContext);
          var promise = Promise.resolve(queryFnResult).then(function (page) {
            return buildNewPages(pages, param, page, previous);
          });

          if ((0,_retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelable)(queryFnResult)) {
            var promiseAsAny = promise;
            promiseAsAny.cancel = queryFnResult.cancel;
          }

          return promise;
        };

        var promise; // Fetch first page?

        if (!oldPages.length) {
          promise = fetchPage([]);
        } // Fetch next page?
        else if (isFetchingNextPage) {
            var manual = typeof pageParam !== 'undefined';
            var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
            promise = fetchPage(oldPages, manual, param);
          } // Fetch previous page?
          else if (isFetchingPreviousPage) {
              var _manual = typeof pageParam !== 'undefined';

              var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);

              promise = fetchPage(oldPages, _manual, _param, true);
            } // Refetch pages
            else {
                (function () {
                  newPageParams = [];
                  var manual = typeof context.options.getNextPageParam === 'undefined';
                  var shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true; // Fetch first page

                  promise = shouldFetchFirstPage ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0])); // Fetch remaining pages

                  var _loop = function _loop(i) {
                    promise = promise.then(function (pages) {
                      var shouldFetchNextPage = refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true;

                      if (shouldFetchNextPage) {
                        var _param2 = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);

                        return fetchPage(pages, manual, _param2);
                      }

                      return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
                    });
                  };

                  for (var i = 1; i < oldPages.length; i++) {
                    _loop(i);
                  }
                })();
              }

        var finalPromise = promise.then(function (pages) {
          return {
            pages: pages,
            pageParams: newPageParams
          };
        });
        var finalPromiseAsAny = finalPromise;

        finalPromiseAsAny.cancel = function () {
          cancelled = true;

          if ((0,_retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelable)(promise)) {
            promise.cancel();
          }
        };

        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
/**
 * Checks if there is a next page.
 * Returns `undefined` if it cannot be determined.
 */

function hasNextPage(options, pages) {
  if (options.getNextPageParam && Array.isArray(pages)) {
    var nextPageParam = getNextPageParam(options, pages);
    return typeof nextPageParam !== 'undefined' && nextPageParam !== null && nextPageParam !== false;
  }
}
/**
 * Checks if there is a previous page.
 * Returns `undefined` if it cannot be determined.
 */

function hasPreviousPage(options, pages) {
  if (options.getPreviousPageParam && Array.isArray(pages)) {
    var previousPageParam = getPreviousPageParam(options, pages);
    return typeof previousPageParam !== 'undefined' && previousPageParam !== null && previousPageParam !== false;
  }
}

/***/ }),

/***/ "../node_modules/react-query/es/core/infiniteQueryObserver.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-query/es/core/infiniteQueryObserver.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfiniteQueryObserver": function() { return /* binding */ InfiniteQueryObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryObserver */ "../node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "../node_modules/react-query/es/core/infiniteQueryBehavior.js");




var InfiniteQueryObserver = /*#__PURE__*/function (_QueryObserver) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(InfiniteQueryObserver, _QueryObserver);

  // Type override
  // Type override
  // Type override
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  function InfiniteQueryObserver(client, options) {
    return _QueryObserver.call(this, client, options) || this;
  }

  var _proto = InfiniteQueryObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    _QueryObserver.prototype.bindMethods.call(this);

    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  };

  _proto.setOptions = function setOptions(options) {
    _QueryObserver.prototype.setOptions.call(this, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      behavior: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.infiniteQueryBehavior)()
    }));
  };

  _proto.getOptimisticResult = function getOptimisticResult(options) {
    options.behavior = (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.infiniteQueryBehavior)();
    return _QueryObserver.prototype.getOptimisticResult.call(this, options);
  };

  _proto.fetchNextPage = function fetchNextPage(options) {
    var _options$cancelRefetc;

    return this.fetch({
      // TODO consider removing `?? true` in future breaking change, to be consistent with `refetch` API (see https://github.com/tannerlinsley/react-query/issues/2617)
      cancelRefetch: (_options$cancelRefetc = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc : true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: 'forward',
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };

  _proto.fetchPreviousPage = function fetchPreviousPage(options) {
    var _options$cancelRefetc2;

    return this.fetch({
      // TODO consider removing `?? true` in future breaking change, to be consistent with `refetch` API (see https://github.com/tannerlinsley/react-query/issues/2617)
      cancelRefetch: (_options$cancelRefetc2 = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc2 : true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: 'backward',
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };

  _proto.createResult = function createResult(query, options) {
    var _state$data, _state$data2, _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet;

    var state = query.state;

    var result = _QueryObserver.prototype.createResult.call(this, query, options);

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, result, {
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.hasNextPage)(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
      hasPreviousPage: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.hasPreviousPage)(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
      isFetchingNextPage: state.isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === 'forward',
      isFetchingPreviousPage: state.isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === 'backward'
    });
  };

  return InfiniteQueryObserver;
}(_queryObserver__WEBPACK_IMPORTED_MODULE_3__.QueryObserver);

/***/ }),

/***/ "../node_modules/react-query/es/core/logger.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-query/es/core/logger.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLogger": function() { return /* binding */ getLogger; },
/* harmony export */   "setLogger": function() { return /* binding */ setLogger; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
 // TYPES

// FUNCTIONS
var logger = console || {
  error: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
  warn: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
  log: _utils__WEBPACK_IMPORTED_MODULE_0__.noop
};
function getLogger() {
  return logger;
}
function setLogger(newLogger) {
  logger = newLogger;
}

/***/ }),

/***/ "../node_modules/react-query/es/core/mutation.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-query/es/core/mutation.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mutation": function() { return /* binding */ Mutation; },
/* harmony export */   "getDefaultState": function() { return /* binding */ getDefaultState; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "../node_modules/react-query/es/core/logger.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retryer */ "../node_modules/react-query/es/core/retryer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");




 // TYPES

// CLASS
var Mutation = /*#__PURE__*/function () {
  function Mutation(config) {
    this.options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, config.defaultOptions, config.options);
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.observers = [];
    this.state = config.state || getDefaultState();
  }

  var _proto = Mutation.prototype;

  _proto.setState = function setState(state) {
    this.dispatch({
      type: 'setState',
      state: state
    });
  };

  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  };

  _proto.removeObserver = function removeObserver(observer) {
    this.observers = this.observers.filter(function (x) {
      return x !== observer;
    });
  };

  _proto.cancel = function cancel() {
    if (this.retryer) {
      this.retryer.cancel();
      return this.retryer.promise.then(_utils__WEBPACK_IMPORTED_MODULE_1__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_1__.noop);
    }

    return Promise.resolve();
  };

  _proto.continue = function _continue() {
    if (this.retryer) {
      this.retryer.continue();
      return this.retryer.promise;
    }

    return this.execute();
  };

  _proto.execute = function execute() {
    var _this = this;

    var data;
    var restored = this.state.status === 'loading';
    var promise = Promise.resolve();

    if (!restored) {
      this.dispatch({
        type: 'loading',
        variables: this.options.variables
      });
      promise = promise.then(function () {
        return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
      }).then(function (context) {
        if (context !== _this.state.context) {
          _this.dispatch({
            type: 'loading',
            context: context,
            variables: _this.state.variables
          });
        }
      });
    }

    return promise.then(function () {
      return _this.executeMutation();
    }).then(function (result) {
      data = result; // Notify cache callback

      _this.mutationCache.config.onSuccess == null ? void 0 : _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
    }).then(function () {
      return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
    }).then(function () {
      return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
    }).then(function () {
      _this.dispatch({
        type: 'success',
        data: data
      });

      return data;
    }).catch(function (error) {
      // Notify cache callback
      _this.mutationCache.config.onError == null ? void 0 : _this.mutationCache.config.onError(error, _this.state.variables, _this.state.context, _this); // Log error

      (0,_logger__WEBPACK_IMPORTED_MODULE_2__.getLogger)().error(error);
      return Promise.resolve().then(function () {
        return _this.options.onError == null ? void 0 : _this.options.onError(error, _this.state.variables, _this.state.context);
      }).then(function () {
        return _this.options.onSettled == null ? void 0 : _this.options.onSettled(undefined, error, _this.state.variables, _this.state.context);
      }).then(function () {
        _this.dispatch({
          type: 'error',
          error: error
        });

        throw error;
      });
    });
  };

  _proto.executeMutation = function executeMutation() {
    var _this2 = this,
        _this$options$retry;

    this.retryer = new _retryer__WEBPACK_IMPORTED_MODULE_3__.Retryer({
      fn: function fn() {
        if (!_this2.options.mutationFn) {
          return Promise.reject('No mutationFn found');
        }

        return _this2.options.mutationFn(_this2.state.variables);
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: 'failed'
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: 'pause'
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: 'continue'
        });
      },
      retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
      retryDelay: this.options.retryDelay
    });
    return this.retryer.promise;
  };

  _proto.dispatch = function dispatch(action) {
    var _this3 = this;

    this.state = reducer(this.state, action);
    _notifyManager__WEBPACK_IMPORTED_MODULE_4__.notifyManager.batch(function () {
      _this3.observers.forEach(function (observer) {
        observer.onMutationUpdate(action);
      });

      _this3.mutationCache.notify(_this3);
    });
  };

  return Mutation;
}();
function getDefaultState() {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: 'idle',
    variables: undefined
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'failed':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        failureCount: state.failureCount + 1
      });

    case 'pause':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        isPaused: true
      });

    case 'continue':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        isPaused: false
      });

    case 'loading':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        context: action.context,
        data: undefined,
        error: null,
        isPaused: false,
        status: 'loading',
        variables: action.variables
      });

    case 'success':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        data: action.data,
        error: null,
        status: 'success',
        isPaused: false
      });

    case 'error':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        data: undefined,
        error: action.error,
        failureCount: state.failureCount + 1,
        isPaused: false,
        status: 'error'
      });

    case 'setState':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, action.state);

    default:
      return state;
  }
}

/***/ }),

/***/ "../node_modules/react-query/es/core/mutationCache.js":
/*!************************************************************!*\
  !*** ../node_modules/react-query/es/core/mutationCache.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationCache": function() { return /* binding */ MutationCache; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation */ "../node_modules/react-query/es/core/mutation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");




 // TYPES

// CLASS
var MutationCache = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(MutationCache, _Subscribable);

  function MutationCache(config) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.mutations = [];
    _this.mutationId = 0;
    return _this;
  }

  var _proto = MutationCache.prototype;

  _proto.build = function build(client, options, state) {
    var mutation = new _mutation__WEBPACK_IMPORTED_MODULE_1__.Mutation({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state: state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : undefined
    });
    this.add(mutation);
    return mutation;
  };

  _proto.add = function add(mutation) {
    this.mutations.push(mutation);
    this.notify(mutation);
  };

  _proto.remove = function remove(mutation) {
    this.mutations = this.mutations.filter(function (x) {
      return x !== mutation;
    });
    mutation.cancel();
    this.notify(mutation);
  };

  _proto.clear = function clear() {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this2.mutations.forEach(function (mutation) {
        _this2.remove(mutation);
      });
    });
  };

  _proto.getAll = function getAll() {
    return this.mutations;
  };

  _proto.find = function find(filters) {
    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.mutations.find(function (mutation) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(filters, mutation);
    });
  };

  _proto.findAll = function findAll(filters) {
    return this.mutations.filter(function (mutation) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(filters, mutation);
    });
  };

  _proto.notify = function notify(mutation) {
    var _this3 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this3.listeners.forEach(function (listener) {
        listener(mutation);
      });
    });
  };

  _proto.onFocus = function onFocus() {
    this.resumePausedMutations();
  };

  _proto.onOnline = function onOnline() {
    this.resumePausedMutations();
  };

  _proto.resumePausedMutations = function resumePausedMutations() {
    var pausedMutations = this.mutations.filter(function (x) {
      return x.state.isPaused;
    });
    return _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      return pausedMutations.reduce(function (promise, mutation) {
        return promise.then(function () {
          return mutation.continue().catch(_utils__WEBPACK_IMPORTED_MODULE_3__.noop);
        });
      }, Promise.resolve());
    });
  };

  return MutationCache;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../node_modules/react-query/es/core/mutationObserver.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-query/es/core/mutationObserver.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationObserver": function() { return /* binding */ MutationObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutation */ "../node_modules/react-query/es/core/mutation.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");





// CLASS
var MutationObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(MutationObserver, _Subscribable);

  function MutationObserver(client, options) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;

    _this.setOptions(options);

    _this.bindMethods();

    _this.updateResult();

    return _this;
  }

  var _proto = MutationObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  };

  _proto.setOptions = function setOptions(options) {
    this.options = this.client.defaultMutationOptions(options);
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      var _this$currentMutation;

      (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.removeObserver(this);
    }
  };

  _proto.onMutationUpdate = function onMutationUpdate(action) {
    this.updateResult(); // Determine which callbacks to trigger

    var notifyOptions = {
      listeners: true
    };

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error') {
      notifyOptions.onError = true;
    }

    this.notify(notifyOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };

  _proto.reset = function reset() {
    this.currentMutation = undefined;
    this.updateResult();
    this.notify({
      listeners: true
    });
  };

  _proto.mutate = function mutate(variables, options) {
    this.mutateOptions = options;

    if (this.currentMutation) {
      this.currentMutation.removeObserver(this);
    }

    this.currentMutation = this.client.getMutationCache().build(this.client, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.options, {
      variables: typeof variables !== 'undefined' ? variables : this.options.variables
    }));
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  };

  _proto.updateResult = function updateResult() {
    var state = this.currentMutation ? this.currentMutation.state : (0,_mutation__WEBPACK_IMPORTED_MODULE_2__.getDefaultState)();

    var result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
      isLoading: state.status === 'loading',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
      isIdle: state.status === 'idle',
      mutate: this.mutate,
      reset: this.reset
    });

    this.currentResult = result;
  };

  _proto.notify = function notify(options) {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      // First trigger the mutate callbacks
      if (_this2.mutateOptions) {
        if (options.onSuccess) {
          _this2.mutateOptions.onSuccess == null ? void 0 : _this2.mutateOptions.onSuccess(_this2.currentResult.data, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(_this2.currentResult.data, null, _this2.currentResult.variables, _this2.currentResult.context);
        } else if (options.onError) {
          _this2.mutateOptions.onError == null ? void 0 : _this2.mutateOptions.onError(_this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(undefined, _this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
        }
      } // Then trigger the listeners


      if (options.listeners) {
        _this2.listeners.forEach(function (listener) {
          listener(_this2.currentResult);
        });
      }
    });
  };

  return MutationObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../node_modules/react-query/es/core/notifyManager.js":
/*!************************************************************!*\
  !*** ../node_modules/react-query/es/core/notifyManager.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notifyManager": function() { return /* binding */ notifyManager; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
 // TYPES

// CLASS
var NotifyManager = /*#__PURE__*/function () {
  function NotifyManager() {
    this.queue = [];
    this.transactions = 0;

    this.notifyFn = function (callback) {
      callback();
    };

    this.batchNotifyFn = function (callback) {
      callback();
    };
  }

  var _proto = NotifyManager.prototype;

  _proto.batch = function batch(callback) {
    this.transactions++;
    var result = callback();
    this.transactions--;

    if (!this.transactions) {
      this.flush();
    }

    return result;
  };

  _proto.schedule = function schedule(callback) {
    var _this = this;

    if (this.transactions) {
      this.queue.push(callback);
    } else {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(function () {
        _this.notifyFn(callback);
      });
    }
  }
  /**
   * All calls to the wrapped function will be batched.
   */
  ;

  _proto.batchCalls = function batchCalls(callback) {
    var _this2 = this;

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this2.schedule(function () {
        callback.apply(void 0, args);
      });
    };
  };

  _proto.flush = function flush() {
    var _this3 = this;

    var queue = this.queue;
    this.queue = [];

    if (queue.length) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(function () {
        _this3.batchNotifyFn(function () {
          queue.forEach(function (callback) {
            _this3.notifyFn(callback);
          });
        });
      });
    }
  }
  /**
   * Use this method to set a custom notify function.
   * This can be used to for example wrap notifications with `React.act` while running tests.
   */
  ;

  _proto.setNotifyFunction = function setNotifyFunction(fn) {
    this.notifyFn = fn;
  }
  /**
   * Use this method to set a custom function to batch notifications together into a single tick.
   * By default React Query will use the batch function provided by ReactDOM or React Native.
   */
  ;

  _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
    this.batchNotifyFn = fn;
  };

  return NotifyManager;
}(); // SINGLETON


var notifyManager = new NotifyManager();

/***/ }),

/***/ "../node_modules/react-query/es/core/onlineManager.js":
/*!************************************************************!*\
  !*** ../node_modules/react-query/es/core/onlineManager.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onlineManager": function() { return /* binding */ onlineManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");




var OnlineManager = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(OnlineManager, _Subscribable);

  function OnlineManager() {
    return _Subscribable.apply(this, arguments) || this;
  }

  var _proto = OnlineManager.prototype;

  _proto.onSubscribe = function onSubscribe() {
    if (!this.removeEventListener) {
      this.setDefaultEventListener();
    }
  };

  _proto.setEventListener = function setEventListener(setup) {
    var _this = this;

    if (this.removeEventListener) {
      this.removeEventListener();
    }

    this.removeEventListener = setup(function (online) {
      if (typeof online === 'boolean') {
        _this.setOnline(online);
      } else {
        _this.onOnline();
      }
    });
  };

  _proto.setOnline = function setOnline(online) {
    this.online = online;

    if (online) {
      this.onOnline();
    }
  };

  _proto.onOnline = function onOnline() {
    this.listeners.forEach(function (listener) {
      listener();
    });
  };

  _proto.isOnline = function isOnline() {
    if (typeof this.online === 'boolean') {
      return this.online;
    }

    if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
      return true;
    }

    return navigator.onLine;
  };

  _proto.setDefaultEventListener = function setDefaultEventListener() {
    var _window;

    if (!_utils__WEBPACK_IMPORTED_MODULE_1__.isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
      this.setEventListener(function (onOnline) {
        var listener = function listener() {
          return onOnline();
        }; // Listen to online


        window.addEventListener('online', listener, false);
        window.addEventListener('offline', listener, false);
        return function () {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('online', listener);
          window.removeEventListener('offline', listener);
        };
      });
    }
  };

  return OnlineManager;
}(_subscribable__WEBPACK_IMPORTED_MODULE_2__.Subscribable);

var onlineManager = new OnlineManager();

/***/ }),

/***/ "../node_modules/react-query/es/core/queriesObserver.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-query/es/core/queriesObserver.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueriesObserver": function() { return /* binding */ QueriesObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryObserver */ "../node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");





var QueriesObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(QueriesObserver, _Subscribable);

  function QueriesObserver(client, queries) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.queries = [];
    _this.result = [];
    _this.observers = [];
    _this.observersMap = {};

    if (queries) {
      _this.setQueries(queries);
    }

    return _this;
  }

  var _proto = QueriesObserver.prototype;

  _proto.onSubscribe = function onSubscribe() {
    var _this2 = this;

    if (this.listeners.length === 1) {
      this.observers.forEach(function (observer) {
        observer.subscribe(function (result) {
          _this2.onUpdate(observer, result);
        });
      });
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };

  _proto.destroy = function destroy() {
    this.listeners = [];
    this.observers.forEach(function (observer) {
      observer.destroy();
    });
  };

  _proto.setQueries = function setQueries(queries, notifyOptions) {
    this.queries = queries;
    this.updateObservers(notifyOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.result;
  };

  _proto.getOptimisticResult = function getOptimisticResult(queries) {
    var _this3 = this;

    return queries.map(function (options, index) {
      var defaultedOptions = _this3.client.defaultQueryObserverOptions(options);

      return _this3.getObserver(defaultedOptions, index).getOptimisticResult(defaultedOptions);
    });
  };

  _proto.getObserver = function getObserver(options, index) {
    var _currentObserver;

    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var currentObserver = this.observersMap[defaultedOptions.queryHash];

    if (!currentObserver && defaultedOptions.keepPreviousData) {
      currentObserver = this.observers[index];
    }

    return (_currentObserver = currentObserver) != null ? _currentObserver : new _queryObserver__WEBPACK_IMPORTED_MODULE_1__.QueryObserver(this.client, defaultedOptions);
  };

  _proto.updateObservers = function updateObservers(notifyOptions) {
    var _this4 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      var hasIndexChange = false;
      var prevObservers = _this4.observers;
      var prevObserversMap = _this4.observersMap;
      var newResult = [];
      var newObservers = [];
      var newObserversMap = {};

      _this4.queries.forEach(function (options, i) {
        var defaultedOptions = _this4.client.defaultQueryObserverOptions(options);

        var queryHash = defaultedOptions.queryHash;

        var observer = _this4.getObserver(defaultedOptions, i);

        if (prevObserversMap[queryHash] || defaultedOptions.keepPreviousData) {
          observer.setOptions(defaultedOptions, notifyOptions);
        }

        if (observer !== prevObservers[i]) {
          hasIndexChange = true;
        }

        newObservers.push(observer);
        newResult.push(observer.getCurrentResult());
        newObserversMap[queryHash] = observer;
      });

      if (prevObservers.length === newObservers.length && !hasIndexChange) {
        return;
      }

      _this4.observers = newObservers;
      _this4.observersMap = newObserversMap;
      _this4.result = newResult;

      if (!_this4.hasListeners()) {
        return;
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.difference)(prevObservers, newObservers).forEach(function (observer) {
        observer.destroy();
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.difference)(newObservers, prevObservers).forEach(function (observer) {
        observer.subscribe(function (result) {
          _this4.onUpdate(observer, result);
        });
      });

      _this4.notify();
    });
  };

  _proto.onUpdate = function onUpdate(observer, result) {
    var index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.result = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.replaceAt)(this.result, index, result);
      this.notify();
    }
  };

  _proto.notify = function notify() {
    var _this5 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this5.listeners.forEach(function (listener) {
        listener(_this5.result);
      });
    });
  };

  return QueriesObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../node_modules/react-query/es/core/query.js":
/*!****************************************************!*\
  !*** ../node_modules/react-query/es/core/query.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": function() { return /* binding */ Query; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "../node_modules/react-query/es/core/logger.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retryer */ "../node_modules/react-query/es/core/retryer.js");




 // TYPES

// CLASS
var Query = /*#__PURE__*/function () {
  function Query(config) {
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || this.getDefaultState(this.options);
    this.state = this.initialState;
    this.meta = config.meta;
    this.scheduleGc();
  }

  var _proto = Query.prototype;

  _proto.setOptions = function setOptions(options) {
    var _this$options$cacheTi;

    this.options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions, options);
    this.meta = options == null ? void 0 : options.meta; // Default to 5 minutes if not cache time is set

    this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 5 * 60 * 1000);
  };

  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };

  _proto.scheduleGc = function scheduleGc() {
    var _this = this;

    this.clearGcTimeout();

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isValidTimeout)(this.cacheTime)) {
      this.gcTimeout = setTimeout(function () {
        _this.optionalRemove();
      }, this.cacheTime);
    }
  };

  _proto.clearGcTimeout = function clearGcTimeout() {
    clearTimeout(this.gcTimeout);
    this.gcTimeout = undefined;
  };

  _proto.optionalRemove = function optionalRemove() {
    if (!this.observers.length && !this.state.isFetching) {
      this.cache.remove(this);
    }
  };

  _proto.setData = function setData(updater, options) {
    var _this$options$isDataE, _this$options;

    var prevData = this.state.data; // Get the new data

    var data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.functionalUpdate)(updater, prevData); // Use prev data if an isDataEqual function is defined and returns `true`

    if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) {
      data = prevData;
    } else if (this.options.structuralSharing !== false) {
      // Structurally share data between prev and new data if needed
      data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.replaceEqualDeep)(prevData, data);
    } // Set data and mark it as cached


    this.dispatch({
      data: data,
      type: 'success',
      dataUpdatedAt: options == null ? void 0 : options.updatedAt
    });
    return data;
  };

  _proto.setState = function setState(state, setStateOptions) {
    this.dispatch({
      type: 'setState',
      state: state,
      setStateOptions: setStateOptions
    });
  };

  _proto.cancel = function cancel(options) {
    var _this$retryer;

    var promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(_utils__WEBPACK_IMPORTED_MODULE_1__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_1__.noop) : Promise.resolve();
  };

  _proto.destroy = function destroy() {
    this.clearGcTimeout();
    this.cancel({
      silent: true
    });
  };

  _proto.reset = function reset() {
    this.destroy();
    this.setState(this.initialState);
  };

  _proto.isActive = function isActive() {
    return this.observers.some(function (observer) {
      return observer.options.enabled !== false;
    });
  };

  _proto.isFetching = function isFetching() {
    return this.state.isFetching;
  };

  _proto.isStale = function isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function (observer) {
      return observer.getCurrentResult().isStale;
    });
  };

  _proto.isStaleByTime = function isStaleByTime(staleTime) {
    if (staleTime === void 0) {
      staleTime = 0;
    }

    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0,_utils__WEBPACK_IMPORTED_MODULE_1__.timeUntilStale)(this.state.dataUpdatedAt, staleTime);
  };

  _proto.onFocus = function onFocus() {
    var _this$retryer2;

    var observer = this.observers.find(function (x) {
      return x.shouldFetchOnWindowFocus();
    });

    if (observer) {
      observer.refetch();
    } // Continue fetch if currently paused


    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  };

  _proto.onOnline = function onOnline() {
    var _this$retryer3;

    var observer = this.observers.find(function (x) {
      return x.shouldFetchOnReconnect();
    });

    if (observer) {
      observer.refetch();
    } // Continue fetch if currently paused


    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  };

  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer); // Stop the query from being garbage collected

      this.clearGcTimeout();
      this.cache.notify({
        type: 'observerAdded',
        query: this,
        observer: observer
      });
    }
  };

  _proto.removeObserver = function removeObserver(observer) {
    if (this.observers.indexOf(observer) !== -1) {
      this.observers = this.observers.filter(function (x) {
        return x !== observer;
      });

      if (!this.observers.length) {
        // If the transport layer does not support cancellation
        // we'll let the query continue so the result can be cached
        if (this.retryer) {
          if (this.retryer.isTransportCancelable) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }

        if (this.cacheTime) {
          this.scheduleGc();
        } else {
          this.cache.remove(this);
        }
      }

      this.cache.notify({
        type: 'observerRemoved',
        query: this,
        observer: observer
      });
    }
  };

  _proto.getObserversCount = function getObserversCount() {
    return this.observers.length;
  };

  _proto.invalidate = function invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: 'invalidate'
      });
    }
  };

  _proto.fetch = function fetch(options, fetchOptions) {
    var _this2 = this,
        _this$options$behavio,
        _context$fetchOptions;

    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        // Silently cancel current fetch if the user wants to cancel refetches
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        // Return current promise if we are already fetching
        return this.promise;
      }
    } // Update config if passed, otherwise the config from the last execution is used


    if (options) {
      this.setOptions(options);
    } // Use the options from the first observer with a query function if no function is found.
    // This can happen when the query is hydrated or created with setQueryData.


    if (!this.options.queryFn) {
      var observer = this.observers.find(function (x) {
        return x.options.queryFn;
      });

      if (observer) {
        this.setOptions(observer.options);
      }
    }

    var queryKey = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.ensureQueryKeyArray)(this.queryKey); // Create query function context

    var queryFnContext = {
      queryKey: queryKey,
      pageParam: undefined,
      meta: this.meta
    }; // Create fetch function

    var fetchFn = function fetchFn() {
      return _this2.options.queryFn ? _this2.options.queryFn(queryFnContext) : Promise.reject('Missing queryFn');
    }; // Trigger behavior hook


    var context = {
      fetchOptions: fetchOptions,
      options: this.options,
      queryKey: queryKey,
      state: this.state,
      fetchFn: fetchFn,
      meta: this.meta
    };

    if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
      var _this$options$behavio2;

      (_this$options$behavio2 = this.options.behavior) == null ? void 0 : _this$options$behavio2.onFetch(context);
    } // Store state in case the current fetch needs to be reverted


    this.revertState = this.state; // Set to fetching state if not already in it

    if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;

      this.dispatch({
        type: 'fetch',
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    } // Try to fetch the data


    this.retryer = new _retryer__WEBPACK_IMPORTED_MODULE_2__.Retryer({
      fn: context.fetchFn,
      onSuccess: function onSuccess(data) {
        _this2.setData(data); // Notify cache callback


        _this2.cache.config.onSuccess == null ? void 0 : _this2.cache.config.onSuccess(data, _this2); // Remove query after fetching if cache time is 0

        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onError: function onError(error) {
        // Optimistically update state if needed
        if (!((0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error) && error.silent)) {
          _this2.dispatch({
            type: 'error',
            error: error
          });
        }

        if (!(0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error)) {
          // Notify cache callback
          _this2.cache.config.onError == null ? void 0 : _this2.cache.config.onError(error, _this2); // Log error

          (0,_logger__WEBPACK_IMPORTED_MODULE_3__.getLogger)().error(error);
        } // Remove query after fetching if cache time is 0


        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: 'failed'
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: 'pause'
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: 'continue'
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay
    });
    this.promise = this.retryer.promise;
    return this.promise;
  };

  _proto.dispatch = function dispatch(action) {
    var _this3 = this;

    this.state = this.reducer(this.state, action);
    _notifyManager__WEBPACK_IMPORTED_MODULE_4__.notifyManager.batch(function () {
      _this3.observers.forEach(function (observer) {
        observer.onQueryUpdate(action);
      });

      _this3.cache.notify({
        query: _this3,
        type: 'queryUpdated',
        action: action
      });
    });
  };

  _proto.getDefaultState = function getDefaultState(options) {
    var data = typeof options.initialData === 'function' ? options.initialData() : options.initialData;
    var hasInitialData = typeof options.initialData !== 'undefined';
    var initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === 'function' ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    var hasData = typeof data !== 'undefined';
    return {
      data: data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: false,
      isInvalidated: false,
      isPaused: false,
      status: hasData ? 'success' : 'idle'
    };
  };

  _proto.reducer = function reducer(state, action) {
    var _action$meta, _action$dataUpdatedAt;

    switch (action.type) {
      case 'failed':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          fetchFailureCount: state.fetchFailureCount + 1
        });

      case 'pause':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isPaused: true
        });

      case 'continue':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isPaused: false
        });

      case 'fetch':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          fetchFailureCount: 0,
          fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
          isFetching: true,
          isPaused: false,
          status: !state.dataUpdatedAt ? 'loading' : state.status
        });

      case 'success':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          data: action.data,
          dataUpdateCount: state.dataUpdateCount + 1,
          dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: false,
          isInvalidated: false,
          isPaused: false,
          status: 'success'
        });

      case 'error':
        var error = action.error;

        if ((0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error) && error.revert && this.revertState) {
          return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.revertState);
        }

        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          error: error,
          errorUpdateCount: state.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: state.fetchFailureCount + 1,
          isFetching: false,
          isPaused: false,
          status: 'error'
        });

      case 'invalidate':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isInvalidated: true
        });

      case 'setState':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, action.state);

      default:
        return state;
    }
  };

  return Query;
}();

/***/ }),

/***/ "../node_modules/react-query/es/core/queryCache.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-query/es/core/queryCache.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryCache": function() { return /* binding */ QueryCache; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ "../node_modules/react-query/es/core/query.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");





// CLASS
var QueryCache = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(QueryCache, _Subscribable);

  function QueryCache(config) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.queries = [];
    _this.queriesMap = {};
    return _this;
  }

  var _proto = QueryCache.prototype;

  _proto.build = function build(client, options, state) {
    var _options$queryHash;

    var queryKey = options.queryKey;
    var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hashQueryKeyByOptions)(queryKey, options);
    var query = this.get(queryHash);

    if (!query) {
      query = new _query__WEBPACK_IMPORTED_MODULE_2__.Query({
        cache: this,
        queryKey: queryKey,
        queryHash: queryHash,
        options: client.defaultQueryOptions(options),
        state: state,
        defaultOptions: client.getQueryDefaults(queryKey),
        meta: options.meta
      });
      this.add(query);
    }

    return query;
  };

  _proto.add = function add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: 'queryAdded',
        query: query
      });
    }
  };

  _proto.remove = function remove(query) {
    var queryInMap = this.queriesMap[query.queryHash];

    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter(function (x) {
        return x !== query;
      });

      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }

      this.notify({
        type: 'queryRemoved',
        query: query
      });
    }
  };

  _proto.clear = function clear() {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this2.queries.forEach(function (query) {
        _this2.remove(query);
      });
    });
  };

  _proto.get = function get(queryHash) {
    return this.queriesMap[queryHash];
  };

  _proto.getAll = function getAll() {
    return this.queries;
  };

  _proto.find = function find(arg1, arg2) {
    var _parseFilterArgs = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs[0];

    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.queries.find(function (query) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(filters, query);
    });
  };

  _proto.findAll = function findAll(arg1, arg2) {
    var _parseFilterArgs2 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs2[0];

    return filters ? this.queries.filter(function (query) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(filters, query);
    }) : this.queries;
  };

  _proto.notify = function notify(event) {
    var _this3 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this3.listeners.forEach(function (listener) {
        listener(event);
      });
    });
  };

  _proto.onFocus = function onFocus() {
    var _this4 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this4.queries.forEach(function (query) {
        query.onFocus();
      });
    });
  };

  _proto.onOnline = function onOnline() {
    var _this5 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this5.queries.forEach(function (query) {
        query.onOnline();
      });
    });
  };

  return QueryCache;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../node_modules/react-query/es/core/queryClient.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-query/es/core/queryClient.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryClient": function() { return /* binding */ QueryClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryCache */ "../node_modules/react-query/es/core/queryCache.js");
/* harmony import */ var _mutationCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutationCache */ "../node_modules/react-query/es/core/mutationCache.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager */ "../node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onlineManager */ "../node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "../node_modules/react-query/es/core/infiniteQueryBehavior.js");







 // TYPES

// CLASS
var QueryClient = /*#__PURE__*/function () {
  function QueryClient(config) {
    if (config === void 0) {
      config = {};
    }

    this.queryCache = config.queryCache || new _queryCache__WEBPACK_IMPORTED_MODULE_1__.QueryCache();
    this.mutationCache = config.mutationCache || new _mutationCache__WEBPACK_IMPORTED_MODULE_2__.MutationCache();
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
  }

  var _proto = QueryClient.prototype;

  _proto.mount = function mount() {
    var _this = this;

    this.unsubscribeFocus = _focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.subscribe(function () {
      if (_focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused() && _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.isOnline()) {
        _this.mutationCache.onFocus();

        _this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.subscribe(function () {
      if (_focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused() && _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.isOnline()) {
        _this.mutationCache.onOnline();

        _this.queryCache.onOnline();
      }
    });
  };

  _proto.unmount = function unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;

    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
  };

  _proto.isFetching = function isFetching(arg1, arg2) {
    var _parseFilterArgs = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs[0];

    filters.fetching = true;
    return this.queryCache.findAll(filters).length;
  };

  _proto.isMutating = function isMutating(filters) {
    return this.mutationCache.findAll((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      fetching: true
    })).length;
  };

  _proto.getQueryData = function getQueryData(queryKey, filters) {
    var _this$queryCache$find;

    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  };

  _proto.getQueriesData = function getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(function (_ref) {
      var queryKey = _ref.queryKey,
          state = _ref.state;
      var data = state.data;
      return [queryKey, data];
    });
  };

  _proto.setQueryData = function setQueryData(queryKey, updater, options) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(queryKey);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(updater, options);
  };

  _proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
    var _this2 = this;

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function (_ref2) {
        var queryKey = _ref2.queryKey;
        return [queryKey, _this2.setQueryData(queryKey, updater, options)];
      });
    });
  };

  _proto.getQueryState = function getQueryState(queryKey, filters) {
    var _this$queryCache$find2;

    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  };

  _proto.removeQueries = function removeQueries(arg1, arg2) {
    var _parseFilterArgs2 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs2[0];

    var queryCache = this.queryCache;
    _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      queryCache.findAll(filters).forEach(function (query) {
        queryCache.remove(query);
      });
    });
  };

  _proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
    var _this3 = this;

    var _parseFilterArgs3 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs3[0],
        options = _parseFilterArgs3[1];

    var queryCache = this.queryCache;

    var refetchFilters = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      active: true
    });

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      queryCache.findAll(filters).forEach(function (query) {
        query.reset();
      });
      return _this3.refetchQueries(refetchFilters, options);
    });
  };

  _proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
    var _this4 = this;

    var _parseFilterArgs4 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs4[0],
        _parseFilterArgs4$ = _parseFilterArgs4[1],
        cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;

    if (typeof cancelOptions.revert === 'undefined') {
      cancelOptions.revert = true;
    }

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this4.queryCache.findAll(filters).map(function (query) {
        return query.cancel(cancelOptions);
      });
    });
    return Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
    var _ref3,
        _filters$refetchActiv,
        _filters$refetchInact,
        _this5 = this;

    var _parseFilterArgs5 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs5[0],
        options = _parseFilterArgs5[1];

    var refetchFilters = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      // if filters.refetchActive is not provided and filters.active is explicitly false,
      // e.g. invalidateQueries({ active: false }), we don't want to refetch active queries
      active: (_ref3 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref3 : true,
      inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
    });

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      _this5.queryCache.findAll(filters).forEach(function (query) {
        query.invalidate();
      });

      return _this5.refetchQueries(refetchFilters, options);
    });
  };

  _proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
    var _this6 = this;

    var _parseFilterArgs6 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs6[0],
        options = _parseFilterArgs6[1];

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this6.queryCache.findAll(filters).map(function (query) {
        return query.fetch(undefined, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
          meta: {
            refetchPage: filters == null ? void 0 : filters.refetchPage
          }
        }));
      });
    });
    var promise = Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);

    if (!(options == null ? void 0 : options.throwOnError)) {
      promise = promise.catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
    }

    return promise;
  };

  _proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions); // https://github.com/tannerlinsley/react-query/issues/652

    if (typeof defaultedOptions.retry === 'undefined') {
      defaultedOptions.retry = false;
    }

    var query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  };

  _proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    parsedOptions.behavior = (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_7__.infiniteQueryBehavior)();
    return this.fetchQuery(parsedOptions);
  };

  _proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.cancelMutations = function cancelMutations() {
    var _this7 = this;

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this7.mutationCache.getAll().map(function (mutation) {
        return mutation.cancel();
      });
    });
    return Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.resumePausedMutations = function resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  };

  _proto.executeMutation = function executeMutation(options) {
    return this.mutationCache.build(this, options).execute();
  };

  _proto.getQueryCache = function getQueryCache() {
    return this.queryCache;
  };

  _proto.getMutationCache = function getMutationCache() {
    return this.mutationCache;
  };

  _proto.getDefaultOptions = function getDefaultOptions() {
    return this.defaultOptions;
  };

  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };

  _proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
    var result = this.queryDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(queryKey) === (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.queryKey);
    });

    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey: queryKey,
        defaultOptions: options
      });
    }
  };

  _proto.getQueryDefaults = function getQueryDefaults(queryKey) {
    var _this$queryDefaults$f;

    return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(queryKey, x.queryKey);
    })) == null ? void 0 : _this$queryDefaults$f.defaultOptions : undefined;
  };

  _proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
    var result = this.mutationDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(mutationKey) === (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.mutationKey);
    });

    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey: mutationKey,
        defaultOptions: options
      });
    }
  };

  _proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
    var _this$mutationDefault;

    return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(mutationKey, x.mutationKey);
    })) == null ? void 0 : _this$mutationDefault.defaultOptions : undefined;
  };

  _proto.defaultQueryOptions = function defaultQueryOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }

    var defaultedOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, {
      _defaulted: true
    });

    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKeyByOptions)(defaultedOptions.queryKey, defaultedOptions);
    }

    return defaultedOptions;
  };

  _proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
    return this.defaultQueryOptions(options);
  };

  _proto.defaultMutationOptions = function defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, {
      _defaulted: true
    });
  };

  _proto.clear = function clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  };

  return QueryClient;
}();

/***/ }),

/***/ "../node_modules/react-query/es/core/queryObserver.js":
/*!************************************************************!*\
  !*** ../node_modules/react-query/es/core/queryObserver.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryObserver": function() { return /* binding */ QueryObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager */ "../node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "../node_modules/react-query/es/core/logger.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryer */ "../node_modules/react-query/es/core/retryer.js");








var QueryObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(QueryObserver, _Subscribable);

  function QueryObserver(client, options) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.options = options;
    _this.trackedProps = [];
    _this.previousSelectError = null;

    _this.bindMethods();

    _this.setOptions(options);

    return _this;
  }

  var _proto = QueryObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  };

  _proto.onSubscribe = function onSubscribe() {
    if (this.listeners.length === 1) {
      this.currentQuery.addObserver(this);

      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }

      this.updateTimers();
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };

  _proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
    return _shouldFetchOnReconnect(this.currentQuery, this.options);
  };

  _proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
    return _shouldFetchOnWindowFocus(this.currentQuery, this.options);
  };

  _proto.destroy = function destroy() {
    this.listeners = [];
    this.clearTimers();
    this.currentQuery.removeObserver(this);
  };

  _proto.setOptions = function setOptions(options, notifyOptions) {
    var prevOptions = this.options;
    var prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryObserverOptions(options);

    if (typeof this.options.enabled !== 'undefined' && typeof this.options.enabled !== 'boolean') {
      throw new Error('Expected enabled to be a boolean');
    } // Keep previous query key if the user does not supply one


    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }

    this.updateQuery();
    var mounted = this.hasListeners(); // Fetch if there are subscribers

    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    } // Update result


    this.updateResult(notifyOptions); // Update stale interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    }

    var nextRefetchInterval = this.computeRefetchInterval(); // Update refetch interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
      this.updateRefetchInterval(nextRefetchInterval);
    }
  };

  _proto.getOptimisticResult = function getOptimisticResult(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return this.createResult(query, defaultedOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };

  _proto.trackResult = function trackResult(result) {
    var _this2 = this;

    var trackedResult = {};
    Object.keys(result).forEach(function (key) {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: function get() {
          var typedKey = key;

          if (!_this2.trackedProps.includes(typedKey)) {
            _this2.trackedProps.push(typedKey);
          }

          return result[typedKey];
        }
      });
    });
    return trackedResult;
  };

  _proto.getNextResult = function getNextResult(options) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var unsubscribe = _this3.subscribe(function (result) {
        if (!result.isFetching) {
          unsubscribe();

          if (result.isError && (options == null ? void 0 : options.throwOnError)) {
            reject(result.error);
          } else {
            resolve(result);
          }
        }
      });
    });
  };

  _proto.getCurrentQuery = function getCurrentQuery() {
    return this.currentQuery;
  };

  _proto.remove = function remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  };

  _proto.refetch = function refetch(options) {
    return this.fetch((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      meta: {
        refetchPage: options == null ? void 0 : options.refetchPage
      }
    }));
  };

  _proto.fetchOptimistic = function fetchOptimistic(options) {
    var _this4 = this;

    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return query.fetch().then(function () {
      return _this4.createResult(query, defaultedOptions);
    });
  };

  _proto.fetch = function fetch(fetchOptions) {
    var _this5 = this;

    return this.executeFetch(fetchOptions).then(function () {
      _this5.updateResult();

      return _this5.currentResult;
    });
  };

  _proto.executeFetch = function executeFetch(fetchOptions) {
    // Make sure we reference the latest query as the current one might have been removed
    this.updateQuery(); // Fetch

    var promise = this.currentQuery.fetch(this.options, fetchOptions);

    if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
      promise = promise.catch(_utils__WEBPACK_IMPORTED_MODULE_2__.noop);
    }

    return promise;
  };

  _proto.updateStaleTimeout = function updateStaleTimeout() {
    var _this6 = this;

    this.clearStaleTimeout();

    if (_utils__WEBPACK_IMPORTED_MODULE_2__.isServer || this.currentResult.isStale || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidTimeout)(this.options.staleTime)) {
      return;
    }

    var time = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime); // The timeout is sometimes triggered 1 ms before the stale time expiration.
    // To mitigate this issue we always add 1 ms to the timeout.

    var timeout = time + 1;
    this.staleTimeoutId = setTimeout(function () {
      if (!_this6.currentResult.isStale) {
        _this6.updateResult();
      }
    }, timeout);
  };

  _proto.computeRefetchInterval = function computeRefetchInterval() {
    var _this$options$refetch;

    return typeof this.options.refetchInterval === 'function' ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
  };

  _proto.updateRefetchInterval = function updateRefetchInterval(nextInterval) {
    var _this7 = this;

    this.clearRefetchInterval();
    this.currentRefetchInterval = nextInterval;

    if (_utils__WEBPACK_IMPORTED_MODULE_2__.isServer || this.options.enabled === false || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidTimeout)(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
      return;
    }

    this.refetchIntervalId = setInterval(function () {
      if (_this7.options.refetchIntervalInBackground || _focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused()) {
        _this7.executeFetch();
      }
    }, this.currentRefetchInterval);
  };

  _proto.updateTimers = function updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval(this.computeRefetchInterval());
  };

  _proto.clearTimers = function clearTimers() {
    this.clearStaleTimeout();
    this.clearRefetchInterval();
  };

  _proto.clearStaleTimeout = function clearStaleTimeout() {
    clearTimeout(this.staleTimeoutId);
    this.staleTimeoutId = undefined;
  };

  _proto.clearRefetchInterval = function clearRefetchInterval() {
    clearInterval(this.refetchIntervalId);
    this.refetchIntervalId = undefined;
  };

  _proto.createResult = function createResult(query, options) {
    var prevQuery = this.currentQuery;
    var prevOptions = this.options;
    var prevResult = this.currentResult;
    var prevResultState = this.currentResultState;
    var prevResultOptions = this.currentResultOptions;
    var queryChange = query !== prevQuery;
    var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    var state = query.state;
    var dataUpdatedAt = state.dataUpdatedAt,
        error = state.error,
        errorUpdatedAt = state.errorUpdatedAt,
        isFetching = state.isFetching,
        status = state.status;
    var isPreviousData = false;
    var isPlaceholderData = false;
    var data; // Optimistically set result in fetching state if needed

    if (options.optimisticResults) {
      var mounted = this.hasListeners();
      var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);

      if (fetchOnMount || fetchOptionally) {
        isFetching = true;

        if (!dataUpdatedAt) {
          status = 'loading';
        }
      }
    } // Keep previous data if needed


    if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== 'error') {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } // Select data if needed
    else if (options.select && typeof state.data !== 'undefined') {
        // Memoize select result
        if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === (prevResultOptions == null ? void 0 : prevResultOptions.select) && !this.previousSelectError) {
          data = prevResult.data;
        } else {
          try {
            data = options.select(state.data);

            if (options.structuralSharing !== false) {
              data = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.replaceEqualDeep)(prevResult == null ? void 0 : prevResult.data, data);
            }

            this.previousSelectError = null;
          } catch (selectError) {
            (0,_logger__WEBPACK_IMPORTED_MODULE_4__.getLogger)().error(selectError);
            error = selectError;
            this.previousSelectError = selectError;
            errorUpdatedAt = Date.now();
            status = 'error';
          }
        }
      } // Use query data
      else {
          data = state.data;
        } // Show placeholder data if needed


    if (typeof options.placeholderData !== 'undefined' && typeof data === 'undefined' && (status === 'loading' || status === 'idle')) {
      var placeholderData; // Memoize placeholder data

      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === 'function' ? options.placeholderData() : options.placeholderData;

        if (options.select && typeof placeholderData !== 'undefined') {
          try {
            placeholderData = options.select(placeholderData);

            if (options.structuralSharing !== false) {
              placeholderData = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.replaceEqualDeep)(prevResult == null ? void 0 : prevResult.data, placeholderData);
            }

            this.previousSelectError = null;
          } catch (selectError) {
            (0,_logger__WEBPACK_IMPORTED_MODULE_4__.getLogger)().error(selectError);
            error = selectError;
            this.previousSelectError = selectError;
            errorUpdatedAt = Date.now();
            status = 'error';
          }
        }
      }

      if (typeof placeholderData !== 'undefined') {
        status = 'success';
        data = placeholderData;
        isPlaceholderData = true;
      }
    }

    var result = {
      status: status,
      isLoading: status === 'loading',
      isSuccess: status === 'success',
      isError: status === 'error',
      isIdle: status === 'idle',
      data: data,
      dataUpdatedAt: dataUpdatedAt,
      error: error,
      errorUpdatedAt: errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching: isFetching,
      isRefetching: isFetching && status !== 'loading',
      isLoadingError: status === 'error' && state.dataUpdatedAt === 0,
      isPlaceholderData: isPlaceholderData,
      isPreviousData: isPreviousData,
      isRefetchError: status === 'error' && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  };

  _proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
    if (!prevResult) {
      return true;
    }

    if (result === prevResult) {
      return false;
    }

    var _this$options = this.options,
        notifyOnChangeProps = _this$options.notifyOnChangeProps,
        notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;

    if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
      return true;
    }

    if (notifyOnChangeProps === 'tracked' && !this.trackedProps.length) {
      return true;
    }

    var includedProps = notifyOnChangeProps === 'tracked' ? this.trackedProps : notifyOnChangeProps;
    return Object.keys(result).some(function (key) {
      var typedKey = key;
      var changed = result[typedKey] !== prevResult[typedKey];
      var isIncluded = includedProps == null ? void 0 : includedProps.some(function (x) {
        return x === key;
      });
      var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function (x) {
        return x === key;
      });
      return changed && !isExcluded && (!includedProps || isIncluded);
    });
  };

  _proto.updateResult = function updateResult(notifyOptions) {
    var prevResult = this.currentResult;
    this.currentResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options; // Only notify if something has changed

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.shallowEqualObjects)(this.currentResult, prevResult)) {
      return;
    } // Determine which callbacks to trigger


    var defaultNotifyOptions = {
      cache: true
    };

    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) {
      defaultNotifyOptions.listeners = true;
    }

    this.notify((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, defaultNotifyOptions, notifyOptions));
  };

  _proto.updateQuery = function updateQuery() {
    var query = this.client.getQueryCache().build(this.client, this.options);

    if (query === this.currentQuery) {
      return;
    }

    var prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;

    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  };

  _proto.onQueryUpdate = function onQueryUpdate(action) {
    var notifyOptions = {};

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error' && !(0,_retryer__WEBPACK_IMPORTED_MODULE_5__.isCancelledError)(action.error)) {
      notifyOptions.onError = true;
    }

    this.updateResult(notifyOptions);

    if (this.hasListeners()) {
      this.updateTimers();
    }
  };

  _proto.notify = function notify(notifyOptions) {
    var _this8 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      // First trigger the configuration callbacks
      if (notifyOptions.onSuccess) {
        _this8.options.onSuccess == null ? void 0 : _this8.options.onSuccess(_this8.currentResult.data);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(_this8.currentResult.data, null);
      } else if (notifyOptions.onError) {
        _this8.options.onError == null ? void 0 : _this8.options.onError(_this8.currentResult.error);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(undefined, _this8.currentResult.error);
      } // Then trigger the listeners


      if (notifyOptions.listeners) {
        _this8.listeners.forEach(function (listener) {
          listener(_this8.currentResult);
        });
      } // Then the cache listeners


      if (notifyOptions.cache) {
        _this8.client.getQueryCache().notify({
          query: _this8.currentQuery,
          type: 'observerResultsUpdated'
        });
      }
    });
  };

  return QueryObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_7__.Subscribable);

function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === 'error' && options.retryOnMount === false);
}

function shouldRefetchOnMount(query, options) {
  return options.enabled !== false && query.state.dataUpdatedAt > 0 && (options.refetchOnMount === 'always' || options.refetchOnMount !== false && isStale(query, options));
}

function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || shouldRefetchOnMount(query, options);
}

function _shouldFetchOnReconnect(query, options) {
  return options.enabled !== false && (options.refetchOnReconnect === 'always' || options.refetchOnReconnect !== false && isStale(query, options));
}

function _shouldFetchOnWindowFocus(query, options) {
  return options.enabled !== false && (options.refetchOnWindowFocus === 'always' || options.refetchOnWindowFocus !== false && isStale(query, options));
}

function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== 'error' || prevOptions.enabled === false) && isStale(query, options);
}

function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}

/***/ }),

/***/ "../node_modules/react-query/es/core/retryer.js":
/*!******************************************************!*\
  !*** ../node_modules/react-query/es/core/retryer.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCancelable": function() { return /* binding */ isCancelable; },
/* harmony export */   "CancelledError": function() { return /* binding */ CancelledError; },
/* harmony export */   "isCancelledError": function() { return /* binding */ isCancelledError; },
/* harmony export */   "Retryer": function() { return /* binding */ Retryer; }
/* harmony export */ });
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusManager */ "../node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onlineManager */ "../node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");


 // TYPES

function defaultRetryDelay(failureCount) {
  return Math.min(1000 * Math.pow(2, failureCount), 30000);
}

function isCancelable(value) {
  return typeof (value == null ? void 0 : value.cancel) === 'function';
}
var CancelledError = function CancelledError(options) {
  this.revert = options == null ? void 0 : options.revert;
  this.silent = options == null ? void 0 : options.silent;
};
function isCancelledError(value) {
  return value instanceof CancelledError;
} // CLASS

var Retryer = function Retryer(config) {
  var _this = this;

  var cancelRetry = false;
  var cancelFn;
  var continueFn;
  var promiseResolve;
  var promiseReject;

  this.cancel = function (cancelOptions) {
    return cancelFn == null ? void 0 : cancelFn(cancelOptions);
  };

  this.cancelRetry = function () {
    cancelRetry = true;
  };

  this.continue = function () {
    return continueFn == null ? void 0 : continueFn();
  };

  this.failureCount = 0;
  this.isPaused = false;
  this.isResolved = false;
  this.isTransportCancelable = false;
  this.promise = new Promise(function (outerResolve, outerReject) {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });

  var resolve = function resolve(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };

  var reject = function reject(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };

  var pause = function pause() {
    return new Promise(function (continueResolve) {
      continueFn = continueResolve;
      _this.isPaused = true;
      config.onPause == null ? void 0 : config.onPause();
    }).then(function () {
      continueFn = undefined;
      _this.isPaused = false;
      config.onContinue == null ? void 0 : config.onContinue();
    });
  }; // Create loop function


  var run = function run() {
    // Do nothing if already resolved
    if (_this.isResolved) {
      return;
    }

    var promiseOrValue; // Execute query

    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    } // Create callback to cancel this fetch


    cancelFn = function cancelFn(cancelOptions) {
      if (!_this.isResolved) {
        reject(new CancelledError(cancelOptions)); // Cancel transport if supported

        if (isCancelable(promiseOrValue)) {
          try {
            promiseOrValue.cancel();
          } catch (_unused) {}
        }
      }
    }; // Check if the transport layer support cancellation


    _this.isTransportCancelable = isCancelable(promiseOrValue);
    Promise.resolve(promiseOrValue).then(resolve).catch(function (error) {
      var _config$retry, _config$retryDelay;

      // Stop if the fetch is already resolved
      if (_this.isResolved) {
        return;
      } // Do we need to retry the request?


      var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      var delay = typeof retryDelay === 'function' ? retryDelay(_this.failureCount, error) : retryDelay;
      var shouldRetry = retry === true || typeof retry === 'number' && _this.failureCount < retry || typeof retry === 'function' && retry(_this.failureCount, error);

      if (cancelRetry || !shouldRetry) {
        // We are done if the query does not need to be retried
        reject(error);
        return;
      }

      _this.failureCount++; // Notify on fail

      config.onFail == null ? void 0 : config.onFail(_this.failureCount, error); // Delay

      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sleep)(delay) // Pause if the document is not visible or when the device is offline
      .then(function () {
        if (!_focusManager__WEBPACK_IMPORTED_MODULE_1__.focusManager.isFocused() || !_onlineManager__WEBPACK_IMPORTED_MODULE_2__.onlineManager.isOnline()) {
          return pause();
        }
      }).then(function () {
        if (cancelRetry) {
          reject(error);
        } else {
          run();
        }
      });
    });
  }; // Start loop


  run();
};

/***/ }),

/***/ "../node_modules/react-query/es/core/subscribable.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-query/es/core/subscribable.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscribable": function() { return /* binding */ Subscribable; }
/* harmony export */ });
var Subscribable = /*#__PURE__*/function () {
  function Subscribable() {
    this.listeners = [];
  }

  var _proto = Subscribable.prototype;

  _proto.subscribe = function subscribe(listener) {
    var _this = this;

    var callback = listener || function () {
      return undefined;
    };

    this.listeners.push(callback);
    this.onSubscribe();
    return function () {
      _this.listeners = _this.listeners.filter(function (x) {
        return x !== callback;
      });

      _this.onUnsubscribe();
    };
  };

  _proto.hasListeners = function hasListeners() {
    return this.listeners.length > 0;
  };

  _proto.onSubscribe = function onSubscribe() {// Do nothing
  };

  _proto.onUnsubscribe = function onUnsubscribe() {// Do nothing
  };

  return Subscribable;
}();

/***/ }),

/***/ "../node_modules/react-query/es/core/types.js":
/*!****************************************************!*\
  !*** ../node_modules/react-query/es/core/types.js ***!
  \****************************************************/
/***/ (function() {



/***/ }),

/***/ "../node_modules/react-query/es/core/utils.js":
/*!****************************************************!*\
  !*** ../node_modules/react-query/es/core/utils.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isServer": function() { return /* binding */ isServer; },
/* harmony export */   "noop": function() { return /* binding */ noop; },
/* harmony export */   "functionalUpdate": function() { return /* binding */ functionalUpdate; },
/* harmony export */   "isValidTimeout": function() { return /* binding */ isValidTimeout; },
/* harmony export */   "ensureQueryKeyArray": function() { return /* binding */ ensureQueryKeyArray; },
/* harmony export */   "difference": function() { return /* binding */ difference; },
/* harmony export */   "replaceAt": function() { return /* binding */ replaceAt; },
/* harmony export */   "timeUntilStale": function() { return /* binding */ timeUntilStale; },
/* harmony export */   "parseQueryArgs": function() { return /* binding */ parseQueryArgs; },
/* harmony export */   "parseMutationArgs": function() { return /* binding */ parseMutationArgs; },
/* harmony export */   "parseFilterArgs": function() { return /* binding */ parseFilterArgs; },
/* harmony export */   "parseMutationFilterArgs": function() { return /* binding */ parseMutationFilterArgs; },
/* harmony export */   "mapQueryStatusFilter": function() { return /* binding */ mapQueryStatusFilter; },
/* harmony export */   "matchQuery": function() { return /* binding */ matchQuery; },
/* harmony export */   "matchMutation": function() { return /* binding */ matchMutation; },
/* harmony export */   "hashQueryKeyByOptions": function() { return /* binding */ hashQueryKeyByOptions; },
/* harmony export */   "hashQueryKey": function() { return /* binding */ hashQueryKey; },
/* harmony export */   "stableValueHash": function() { return /* binding */ stableValueHash; },
/* harmony export */   "partialMatchKey": function() { return /* binding */ partialMatchKey; },
/* harmony export */   "partialDeepEqual": function() { return /* binding */ partialDeepEqual; },
/* harmony export */   "replaceEqualDeep": function() { return /* binding */ replaceEqualDeep; },
/* harmony export */   "shallowEqualObjects": function() { return /* binding */ shallowEqualObjects; },
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "isQueryKey": function() { return /* binding */ isQueryKey; },
/* harmony export */   "isError": function() { return /* binding */ isError; },
/* harmony export */   "sleep": function() { return /* binding */ sleep; },
/* harmony export */   "scheduleMicrotask": function() { return /* binding */ scheduleMicrotask; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");

// TYPES
// UTILS
var isServer = typeof window === 'undefined';
function noop() {
  return undefined;
}
function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function ensureQueryKeyArray(value) {
  return Array.isArray(value) ? value : [value];
}
function difference(array1, array2) {
  return array1.filter(function (x) {
    return array2.indexOf(x) === -1;
  });
}
function replaceAt(array, index, value) {
  var copy = array.slice(0);
  copy[index] = value;
  return copy;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }

  if (typeof arg2 === 'function') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg3, {
      queryKey: arg1,
      queryFn: arg2
    });
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
    queryKey: arg1
  });
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === 'function') {
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg3, {
        mutationKey: arg1,
        mutationFn: arg2
      });
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
      mutationKey: arg1
    });
  }

  if (typeof arg1 === 'function') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
      mutationFn: arg1
    });
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg1);
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
    queryKey: arg1
  }), arg3] : [arg1 || {}, arg2];
}
function parseMutationFilterArgs(arg1, arg2) {
  return isQueryKey(arg1) ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
    mutationKey: arg1
  }) : arg1;
}
function mapQueryStatusFilter(active, inactive) {
  if (active === true && inactive === true || active == null && inactive == null) {
    return 'all';
  } else if (active === false && inactive === false) {
    return 'none';
  } else {
    // At this point, active|inactive can only be true|false or false|true
    // so, when only one value is provided, the missing one has to be the negated value
    var isActive = active != null ? active : !inactive;
    return isActive ? 'active' : 'inactive';
  }
}
function matchQuery(filters, query) {
  var active = filters.active,
      exact = filters.exact,
      fetching = filters.fetching,
      inactive = filters.inactive,
      predicate = filters.predicate,
      queryKey = filters.queryKey,
      stale = filters.stale;

  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }

  var queryStatusFilter = mapQueryStatusFilter(active, inactive);

  if (queryStatusFilter === 'none') {
    return false;
  } else if (queryStatusFilter !== 'all') {
    var isActive = query.isActive();

    if (queryStatusFilter === 'active' && !isActive) {
      return false;
    }

    if (queryStatusFilter === 'inactive' && isActive) {
      return false;
    }
  }

  if (typeof stale === 'boolean' && query.isStale() !== stale) {
    return false;
  }

  if (typeof fetching === 'boolean' && query.isFetching() !== fetching) {
    return false;
  }

  if (predicate && !predicate(query)) {
    return false;
  }

  return true;
}
function matchMutation(filters, mutation) {
  var exact = filters.exact,
      fetching = filters.fetching,
      predicate = filters.predicate,
      mutationKey = filters.mutationKey;

  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }

    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }

  if (typeof fetching === 'boolean' && mutation.state.status === 'loading' !== fetching) {
    return false;
  }

  if (predicate && !predicate(mutation)) {
    return false;
  }

  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
/**
 * Default query keys hash function.
 */

function hashQueryKey(queryKey) {
  var asArray = ensureQueryKeyArray(queryKey);
  return stableValueHash(asArray);
}
/**
 * Hashes the value into a stable hash.
 */

function stableValueHash(value) {
  return JSON.stringify(value, function (_, val) {
    return isPlainObject(val) ? Object.keys(val).sort().reduce(function (result, key) {
      result[key] = val[key];
      return result;
    }, {}) : val;
  });
}
/**
 * Checks if key `b` partially matches with key `a`.
 */

function partialMatchKey(a, b) {
  return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b));
}
/**
 * Checks if `b` partially matches with `a`.
 */

function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    return !Object.keys(b).some(function (key) {
      return !partialDeepEqual(a[key], b[key]);
    });
  }

  return false;
}
/**
 * This function returns `a` if `b` is deeply equal.
 * If not, it will replace any deeply equal children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */

function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }

  var array = Array.isArray(a) && Array.isArray(b);

  if (array || isPlainObject(a) && isPlainObject(b)) {
    var aSize = array ? a.length : Object.keys(a).length;
    var bItems = array ? b : Object.keys(b);
    var bSize = bItems.length;
    var copy = array ? [] : {};
    var equalItems = 0;

    for (var i = 0; i < bSize; i++) {
      var key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);

      if (copy[key] === a[key]) {
        equalItems++;
      }
    }

    return aSize === bSize && equalItems === aSize ? a : copy;
  }

  return b;
}
/**
 * Shallow compare objects. Only works with objects that always have the same properties.
 */

function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }

  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
} // Copied from: https://github.com/jonschlinkert/is-plain-object

function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  } // If has modified constructor


  var ctor = o.constructor;

  if (typeof ctor === 'undefined') {
    return true;
  } // If has modified prototype


  var prot = ctor.prototype;

  if (!hasObjectPrototype(prot)) {
    return false;
  } // If constructor does not have an Object-specific method


  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false;
  } // Most likely a plain Object


  return true;
}

function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isQueryKey(value) {
  return typeof value === 'string' || Array.isArray(value);
}
function isError(value) {
  return value instanceof Error;
}
function sleep(timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
}
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */

function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(function (error) {
    return setTimeout(function () {
      throw error;
    });
  });
}

/***/ }),

/***/ "../node_modules/react-query/es/index.js":
/*!***********************************************!*\
  !*** ../node_modules/react-query/es/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../node_modules/react-query/es/core/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _core__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _core__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "../node_modules/react-query/es/react/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "../node_modules/react-query/es/react/Hydrate.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-query/es/react/Hydrate.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHydrate": function() { return /* binding */ useHydrate; },
/* harmony export */   "Hydrate": function() { return /* binding */ Hydrate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "../node_modules/react-query/es/core/index.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");



function useHydrate(state, options) {
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  var optionsRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(options);
  optionsRef.current = options; // Running hydrate again with the same queries is safe,
  // it wont overwrite or initialize existing queries,
  // relying on useMemo here is only a performance optimization.
  // hydrate can and should be run *during* render here for SSR to work properly

  react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    if (state) {
      (0,_core__WEBPACK_IMPORTED_MODULE_2__.hydrate)(queryClient, state, optionsRef.current);
    }
  }, [queryClient, state]);
}
var Hydrate = function Hydrate(_ref) {
  var children = _ref.children,
      options = _ref.options,
      state = _ref.state;
  useHydrate(state, options);
  return children;
};

/***/ }),

/***/ "../node_modules/react-query/es/react/QueryClientProvider.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-query/es/react/QueryClientProvider.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueryClient": function() { return /* binding */ useQueryClient; },
/* harmony export */   "QueryClientProvider": function() { return /* binding */ QueryClientProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var defaultContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(undefined);
var QueryClientSharingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(false); // if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.

function getQueryClientContext(contextSharing) {
  if (contextSharing && typeof window !== 'undefined') {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }

    return window.ReactQueryClientContext;
  }

  return defaultContext;
}

var useQueryClient = function useQueryClient() {
  var queryClient = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(getQueryClientContext(react__WEBPACK_IMPORTED_MODULE_0___default().useContext(QueryClientSharingContext)));

  if (!queryClient) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return queryClient;
};
var QueryClientProvider = function QueryClientProvider(_ref) {
  var client = _ref.client,
      _ref$contextSharing = _ref.contextSharing,
      contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing,
      children = _ref.children;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    client.mount();
    return function () {
      client.unmount();
    };
  }, [client]);
  var Context = getQueryClientContext(contextSharing);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QueryClientSharingContext.Provider, {
    value: contextSharing
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: client
  }, children));
};

/***/ }),

/***/ "../node_modules/react-query/es/react/QueryErrorResetBoundary.js":
/*!***********************************************************************!*\
  !*** ../node_modules/react-query/es/react/QueryErrorResetBoundary.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueryErrorResetBoundary": function() { return /* binding */ useQueryErrorResetBoundary; },
/* harmony export */   "QueryErrorResetBoundary": function() { return /* binding */ QueryErrorResetBoundary; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // CONTEXT

function createValue() {
  var _isReset = false;
  return {
    clearReset: function clearReset() {
      _isReset = false;
    },
    reset: function reset() {
      _isReset = true;
    },
    isReset: function isReset() {
      return _isReset;
    }
  };
}

var QueryErrorResetBoundaryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(createValue()); // HOOK

var useQueryErrorResetBoundary = function useQueryErrorResetBoundary() {
  return react__WEBPACK_IMPORTED_MODULE_0___default().useContext(QueryErrorResetBoundaryContext);
}; // COMPONENT

var QueryErrorResetBoundary = function QueryErrorResetBoundary(_ref) {
  var children = _ref.children;
  var value = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return createValue();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QueryErrorResetBoundaryContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
};

/***/ }),

/***/ "../node_modules/react-query/es/react/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-query/es/react/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryClientProvider": function() { return /* reexport safe */ _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider; },
/* harmony export */   "useQueryClient": function() { return /* reexport safe */ _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__.useQueryClient; },
/* harmony export */   "QueryErrorResetBoundary": function() { return /* reexport safe */ _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__.QueryErrorResetBoundary; },
/* harmony export */   "useQueryErrorResetBoundary": function() { return /* reexport safe */ _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__.useQueryErrorResetBoundary; },
/* harmony export */   "useIsFetching": function() { return /* reexport safe */ _useIsFetching__WEBPACK_IMPORTED_MODULE_4__.useIsFetching; },
/* harmony export */   "useIsMutating": function() { return /* reexport safe */ _useIsMutating__WEBPACK_IMPORTED_MODULE_5__.useIsMutating; },
/* harmony export */   "useMutation": function() { return /* reexport safe */ _useMutation__WEBPACK_IMPORTED_MODULE_6__.useMutation; },
/* harmony export */   "useQuery": function() { return /* reexport safe */ _useQuery__WEBPACK_IMPORTED_MODULE_7__.useQuery; },
/* harmony export */   "useQueries": function() { return /* reexport safe */ _useQueries__WEBPACK_IMPORTED_MODULE_8__.useQueries; },
/* harmony export */   "useInfiniteQuery": function() { return /* reexport safe */ _useInfiniteQuery__WEBPACK_IMPORTED_MODULE_9__.useInfiniteQuery; },
/* harmony export */   "useHydrate": function() { return /* reexport safe */ _Hydrate__WEBPACK_IMPORTED_MODULE_10__.useHydrate; },
/* harmony export */   "Hydrate": function() { return /* reexport safe */ _Hydrate__WEBPACK_IMPORTED_MODULE_10__.Hydrate; }
/* harmony export */ });
/* harmony import */ var _setBatchUpdatesFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBatchUpdatesFn */ "../node_modules/react-query/es/react/setBatchUpdatesFn.js");
/* harmony import */ var _setLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLogger */ "../node_modules/react-query/es/react/setLogger.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");
/* harmony import */ var _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryErrorResetBoundary */ "../node_modules/react-query/es/react/QueryErrorResetBoundary.js");
/* harmony import */ var _useIsFetching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useIsFetching */ "../node_modules/react-query/es/react/useIsFetching.js");
/* harmony import */ var _useIsMutating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsMutating */ "../node_modules/react-query/es/react/useIsMutating.js");
/* harmony import */ var _useMutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useMutation */ "../node_modules/react-query/es/react/useMutation.js");
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useQuery */ "../node_modules/react-query/es/react/useQuery.js");
/* harmony import */ var _useQueries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useQueries */ "../node_modules/react-query/es/react/useQueries.js");
/* harmony import */ var _useInfiniteQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useInfiniteQuery */ "../node_modules/react-query/es/react/useInfiniteQuery.js");
/* harmony import */ var _Hydrate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Hydrate */ "../node_modules/react-query/es/react/Hydrate.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types */ "../node_modules/react-query/es/react/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_11__) if(["default","QueryClientProvider","useQueryClient","QueryErrorResetBoundary","useQueryErrorResetBoundary","useIsFetching","useIsMutating","useMutation","useQuery","useQueries","useInfiniteQuery","useHydrate","Hydrate"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_11__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// Side effects










 // Types



/***/ }),

/***/ "../node_modules/react-query/es/react/logger.js":
/*!******************************************************!*\
  !*** ../node_modules/react-query/es/react/logger.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": function() { return /* binding */ logger; }
/* harmony export */ });
var logger = console;

/***/ }),

/***/ "../node_modules/react-query/es/react/reactBatchedUpdates.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-query/es/react/reactBatchedUpdates.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unstable_batchedUpdates": function() { return /* binding */ unstable_batchedUpdates; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

var unstable_batchedUpdates = (react_dom__WEBPACK_IMPORTED_MODULE_0___default().unstable_batchedUpdates);

/***/ }),

/***/ "../node_modules/react-query/es/react/setBatchUpdatesFn.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-query/es/react/setBatchUpdatesFn.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "../node_modules/react-query/es/core/index.js");
/* harmony import */ var _reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactBatchedUpdates */ "../node_modules/react-query/es/react/reactBatchedUpdates.js");


_core__WEBPACK_IMPORTED_MODULE_0__.notifyManager.setBatchNotifyFunction(_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates);

/***/ }),

/***/ "../node_modules/react-query/es/react/setLogger.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-query/es/react/setLogger.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../node_modules/react-query/es/core/index.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "../node_modules/react-query/es/react/logger.js");



if (_logger__WEBPACK_IMPORTED_MODULE_0__.logger) {
  (0,_core__WEBPACK_IMPORTED_MODULE_1__.setLogger)(_logger__WEBPACK_IMPORTED_MODULE_0__.logger);
}

/***/ }),

/***/ "../node_modules/react-query/es/react/types.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-query/es/react/types.js ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "../node_modules/react-query/es/react/useBaseQuery.js":
/*!************************************************************!*\
  !*** ../node_modules/react-query/es/react/useBaseQuery.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBaseQuery": function() { return /* binding */ useBaseQuery; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryErrorResetBoundary */ "../node_modules/react-query/es/react/QueryErrorResetBoundary.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/react/utils.js");





function useBaseQuery(options, Observer) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
      forceUpdate = _React$useState[1];

  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  var errorResetBoundary = (0,_QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_2__.useQueryErrorResetBoundary)();
  var defaultedOptions = queryClient.defaultQueryObserverOptions(options); // Make sure results are optimistically set in fetching state before subscribing or updating options

  defaultedOptions.optimisticResults = true; // Include callbacks in batch renders

  if (defaultedOptions.onError) {
    defaultedOptions.onError = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onError);
  }

  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onSuccess);
  }

  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onSettled);
  }

  if (defaultedOptions.suspense) {
    // Always set stale time when using suspense to prevent
    // fetching again when directly mounting after suspending
    if (typeof defaultedOptions.staleTime !== 'number') {
      defaultedOptions.staleTime = 1000;
    } // Set cache time to 1 if the option has been set to 0
    // when using suspense to prevent infinite loop of fetches


    if (defaultedOptions.cacheTime === 0) {
      defaultedOptions.cacheTime = 1;
    }
  }

  if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
    // Prevent retrying failed query if the error boundary has not been reset yet
    if (!errorResetBoundary.isReset()) {
      defaultedOptions.retryOnMount = false;
    }
  }

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(function () {
    return new Observer(queryClient, defaultedOptions);
  }),
      observer = _React$useState2[0];

  var result = observer.getOptimisticResult(defaultedOptions);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    errorResetBoundary.clearReset();
    var unsubscribe = observer.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    })); // Update result to make sure we did not miss any query updates
    // between creating the observer and subscribing to it.

    observer.updateResult();
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [errorResetBoundary, observer]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]); // Handle suspense

  if (defaultedOptions.suspense && result.isLoading) {
    throw observer.fetchOptimistic(defaultedOptions).then(function (_ref) {
      var data = _ref.data;
      defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
    }).catch(function (error) {
      errorResetBoundary.clearReset();
      defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(undefined, error);
    });
  } // Handle error boundary


  if (result.isError && !result.isFetching && (0,_utils__WEBPACK_IMPORTED_MODULE_4__.shouldThrowError)(defaultedOptions.suspense, defaultedOptions.useErrorBoundary, result.error)) {
    throw result.error;
  } // Handle result property usage tracking


  if (defaultedOptions.notifyOnChangeProps === 'tracked') {
    result = observer.trackResult(result);
  }

  return result;
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useInfiniteQuery.js":
/*!****************************************************************!*\
  !*** ../node_modules/react-query/es/react/useInfiniteQuery.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInfiniteQuery": function() { return /* binding */ useInfiniteQuery; }
/* harmony export */ });
/* harmony import */ var _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/infiniteQueryObserver */ "../node_modules/react-query/es/core/infiniteQueryObserver.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBaseQuery */ "../node_modules/react-query/es/react/useBaseQuery.js");


 // HOOK

function useInfiniteQuery(arg1, arg2, arg3) {
  var options = (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.parseQueryArgs)(arg1, arg2, arg3);
  return (0,_useBaseQuery__WEBPACK_IMPORTED_MODULE_1__.useBaseQuery)(options, _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_2__.InfiniteQueryObserver);
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useIsFetching.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-query/es/react/useIsFetching.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsFetching": function() { return /* binding */ useIsFetching; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");




function useIsFetching(arg1, arg2) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();

  var _parseFilterArgs = (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.parseFilterArgs)(arg1, arg2),
      filters = _parseFilterArgs[0];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(queryClient.isFetching(filters)),
      isFetching = _React$useState[0],
      setIsFetching = _React$useState[1];

  var filtersRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(filters);
  filtersRef.current = filters;
  var isFetchingRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(isFetching);
  isFetchingRef.current = isFetching;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = queryClient.getQueryCache().subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        var newIsFetching = queryClient.isFetching(filtersRef.current);

        if (isFetchingRef.current !== newIsFetching) {
          setIsFetching(newIsFetching);
        }
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [queryClient]);
  return isFetching;
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useIsMutating.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-query/es/react/useIsMutating.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMutating": function() { return /* binding */ useIsMutating; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");




function useIsMutating(arg1, arg2) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
  var filters = (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.parseMutationFilterArgs)(arg1, arg2);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(queryClient.isMutating(filters)),
      isMutating = _React$useState[0],
      setIsMutating = _React$useState[1];

  var filtersRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(filters);
  filtersRef.current = filters;
  var isMutatingRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(isMutating);
  isMutatingRef.current = isMutating;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = queryClient.getMutationCache().subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        var newIsMutating = queryClient.isMutating(filtersRef.current);

        if (isMutatingRef.current !== newIsMutating) {
          setIsMutating(newIsMutating);
        }
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [queryClient]);
  return isMutating;
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useMutation.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-query/es/react/useMutation.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMutation": function() { return /* binding */ useMutation; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _core_mutationObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/mutationObserver */ "../node_modules/react-query/es/core/mutationObserver.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/react/utils.js");






 // HOOK

function useMutation(arg1, arg2, arg3) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0),
      forceUpdate = _React$useState[1];

  var options = (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.parseMutationArgs)(arg1, arg2, arg3);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  var obsRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();

  if (!obsRef.current) {
    obsRef.current = new _core_mutationObserver__WEBPACK_IMPORTED_MODULE_4__.MutationObserver(queryClient, options);
  } else {
    obsRef.current.setOptions(options);
  }

  var currentResult = obsRef.current.getCurrentResult();
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = obsRef.current.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_5__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, []);
  var mutate = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function (variables, mutateOptions) {
    obsRef.current.mutate(variables, mutateOptions).catch(_core_utils__WEBPACK_IMPORTED_MODULE_2__.noop);
  }, []);

  if (currentResult.error && (0,_utils__WEBPACK_IMPORTED_MODULE_6__.shouldThrowError)(undefined, obsRef.current.options.useErrorBoundary, currentResult.error)) {
    throw currentResult.error;
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, currentResult, {
    mutate: mutate,
    mutateAsync: currentResult.mutate
  });
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useQueries.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-query/es/react/useQueries.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueries": function() { return /* binding */ useQueries; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_queriesObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/queriesObserver */ "../node_modules/react-query/es/core/queriesObserver.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");




function useQueries(queries) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
      forceUpdate = _React$useState[1];

  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  var defaultedQueries = queries.map(function (options) {
    var defaultedOptions = queryClient.defaultQueryObserverOptions(options); // Make sure the results are already in fetching state before subscribing or updating options

    defaultedOptions.optimisticResults = true;
    return defaultedOptions;
  });

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(function () {
    return new _core_queriesObserver__WEBPACK_IMPORTED_MODULE_2__.QueriesObserver(queryClient, defaultedQueries);
  }),
      observer = _React$useState2[0];

  var result = observer.getOptimisticResult(defaultedQueries);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = observer.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [observer]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setQueries(defaultedQueries, {
      listeners: false
    });
  }, [defaultedQueries, observer]);
  return result;
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useQuery.js":
/*!********************************************************!*\
  !*** ../node_modules/react-query/es/react/useQuery.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQuery": function() { return /* binding */ useQuery; }
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "../node_modules/react-query/es/core/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBaseQuery */ "../node_modules/react-query/es/react/useBaseQuery.js");


 // HOOK

function useQuery(arg1, arg2, arg3) {
  var parsedOptions = (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.parseQueryArgs)(arg1, arg2, arg3);
  return (0,_useBaseQuery__WEBPACK_IMPORTED_MODULE_1__.useBaseQuery)(parsedOptions, _core__WEBPACK_IMPORTED_MODULE_2__.QueryObserver);
}

/***/ }),

/***/ "../node_modules/react-query/es/react/utils.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-query/es/react/utils.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shouldThrowError": function() { return /* binding */ shouldThrowError; }
/* harmony export */ });
function shouldThrowError(suspense, _useErrorBoundary, error) {
  // Allow useErrorBoundary function to override throwing behavior on a per-error basis
  if (typeof _useErrorBoundary === 'function') {
    return _useErrorBoundary(error);
  } // Allow useErrorBoundary to override suspense's throwing behaviour


  if (typeof _useErrorBoundary === 'boolean') return _useErrorBoundary; // If suspense is enabled default to throwing errors

  return !!suspense;
}

/***/ }),

/***/ "../node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!**********************************************************************!*\
  !*** ../node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "../node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "../node_modules/react/jsx-dev-runtime.js":
/*!************************************************!*\
  !*** ../node_modules/react/jsx-dev-runtime.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "../node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!"), __webpack_exec__("../node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwySEFBMkg7QUFDM0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvRUFBb0U7O0FBRXBFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxlQUFlO0FBQzFCLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FB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Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJpRDtBQUNsQztBQUNmO0FBQ0E7QUFDQSxFQUFFLDJEQUFjO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguc2Nzcz9kM2E5Iiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5zY3NzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvZm9jdXNNYW5hZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvaHlkcmF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9pbmZpbml0ZVF1ZXJ5QmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9pbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9tdXRhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL211dGF0aW9uQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9tdXRhdGlvbk9ic2VydmVyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvbm90aWZ5TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL29ubGluZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyaWVzT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3F1ZXJ5Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyeUNsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3F1ZXJ5T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9yZXRyeWVyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvc3Vic2NyaWJhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvSHlkcmF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9RdWVyeUNsaWVudFByb3ZpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L1F1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9yZWFjdEJhdGNoZWRVcGRhdGVzLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3NldEJhdGNoVXBkYXRlc0ZuLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3NldExvZ2dlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC91c2VCYXNlUXVlcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlSW5maW5pdGVRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC91c2VJc0ZldGNoaW5nLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZUlzTXV0YXRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlTXV0YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlUXVlcmllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC91c2VRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcblxyXG5jb25zdCBBcHAgPSAoIHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gICAgY29uc3QgY2xpZW50UmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBnZXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWNsaWVudFJlZi5jdXJyZW50KSBjbGllbnRSZWYuY3VycmVudCA9IG5ldyBRdWVyeUNsaWVudCh7XHJcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyaWVzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGNsaWVudFJlZi5jdXJyZW50XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e2dldENsaWVudCgpfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM/LihjdHgpXHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzRdIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbNF0hLi9pbmRleC5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVs0XSEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRTEoKSB7XG4gICAgbGV0IG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgICAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xufSgpO1xuY29uc3QgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0MSgpIHtcbiAgICBjb25zdCBtZW1vID0ge1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgICAgICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICAgIH07XG59KCk7XG5jb25zdCBzdHlsZXNJbkRvbSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICAgIGxldCByZXN1bHQgPSAtMTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGlkQ291bnRNYXAgPSB7XG4gICAgfTtcbiAgICBjb25zdCBpZGVudGlmaWVycyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgIGNvbnN0IGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgICAgIGNvbnN0IGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGlkICsgJyAnICsgY291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgICAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gICAgfVxuICAgIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBub25jZSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovIGNvbnN0IHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQxKCkge1xuICAgIGNvbnN0IHRleHRTdG9yZSA9IFtdO1xuICAgIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgICAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICAgIH07XG59KCk7XG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgICBjb25zdCBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/ICdAbWVkaWEgJyArIG9iai5tZWRpYSArICcgeycgKyBvYmouY3NzICsgJ30nIDogb2JqLmNzcztcbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG4gICAgICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gICAgbGV0IGNzcyA9IG9iai5jc3M7XG4gICAgY29uc3QgbWVkaWEgPSBvYmoubWVkaWE7XG4gICAgY29uc3Qgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gICAgfVxuICAgIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nO1xuICAgIH1cbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG59XG5sZXQgc2luZ2xldG9uID0gbnVsbDtcbmxldCBzaW5nbGV0b25Db3VudGVyID0gMDtcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICAgIGxldCBzdHlsZTtcbiAgICBsZXQgdXBkYXRlO1xuICAgIGxldCByZW1vdmU7XG4gICAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgICAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICAgICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICAgICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcbiAgICAgICAgcmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUob2JqKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgICAgIGlmIChuZXdPYmopIHtcbiAgICAgICAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtcbiAgICB9O1xuICAgIC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAgIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbiAgICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICAgIH1cbiAgICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgICBsZXQgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgICAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgICAgZm9yKGxldCBpMSA9IDA7IGkxIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaTErKyl7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2kxXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBpZiAoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICAgIH07XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNfX25leHQge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLm1lc3NhZ2VzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubWVzc2FnZXNfX2lucHV0IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XFxufVxcbi5tZXNzYWdlc19faW5wdXQgPiAqIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm1lc3NhZ2VzX19pbnB1dCB0ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAtbW96LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxufVxcbi5tZXNzYWdlc19faW5wdXQgYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLm1lc3NhZ2VzX19pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTVweCAxNXB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNhYWE7XFxufVxcbi5tZXNzYWdlc19faXRlbSBoMyB7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIG1hcmdpbjogMCAwIDEwcHg7XFxufVxcbi5tZXNzYWdlc19faXRlbSBzdWIge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi5tZXNzYWdlc19faXRlbSBwIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG4ubWVzc2FnZXNfX2l0ZW06aG92ZXIgLm1lc3NhZ2VzX19idXR0b25zIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWVzc2FnZXNfX2l0ZW0gLm1lc3NhZ2VzX19pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1lc3NhZ2VzX19idXR0b25zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUlKO0FBSEk7RUFDRSxxQkFBQTtFQUFBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFLTjtBQUpNO0VBQ0UsOEJBQUE7S0FBQSwyQkFBQTtVQUFBLHNCQUFBO0FBTVI7QUFKTTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGdCQUFBO1VBQUEsWUFBQTtBQU1SO0FBSk07RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFNUjtBQUhJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBS047QUFKTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFNUjtBQUpNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBTVI7QUFKTTtFQUNFLGNBQUE7QUFNUjtBQUpNO0VBQ0UsY0FBQTtBQU1SO0FBSk07RUFDRSxXQUFBO0FBTVI7QUFISTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFLTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcbiAgI19fbmV4dCB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gIH1cXHJcXG4gIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIH1cXHJcXG4gIC5tZXNzYWdlcyB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgJl9faW5wdXQge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxyXFxuICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcXHJcXG4gICAgICA+ICoge1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDE1cHggMTVweCA1cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNhYWE7XFxyXFxuICAgICAgaDMge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XFxyXFxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBzdWIge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIHAge1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICY6aG92ZXIgLm1lc3NhZ2VzX19idXR0b25zIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAubWVzc2FnZXNfX2lucHV0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmX19idXR0b25zIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICByaWdodDogMTBweDtcXHJcXG4gICAgICBib3R0b206IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgRm9jdXNNYW5hZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKEZvY3VzTWFuYWdlciwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gRm9jdXNNYW5hZ2VyKCkge1xuICAgIHJldHVybiBfU3Vic2NyaWJhYmxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBGb2N1c01hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5vblN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uU3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnNldERlZmF1bHRFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gc2V0RXZlbnRMaXN0ZW5lcihzZXR1cCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBzZXR1cChmdW5jdGlvbiAoZm9jdXNlZCkge1xuICAgICAgaWYgKHR5cGVvZiBmb2N1c2VkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgX3RoaXMuc2V0Rm9jdXNlZChmb2N1c2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLm9uRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uc2V0Rm9jdXNlZCA9IGZ1bmN0aW9uIHNldEZvY3VzZWQoZm9jdXNlZCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZvY3VzZWQ7XG5cbiAgICBpZiAoZm9jdXNlZCkge1xuICAgICAgdGhpcy5vbkZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbkZvY3VzID0gZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaXNGb2N1c2VkID0gZnVuY3Rpb24gaXNGb2N1c2VkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5mb2N1c2VkID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvY3VzZWQ7XG4gICAgfSAvLyBkb2N1bWVudCBnbG9iYWwgY2FuIGJlIHVuYXZhaWxhYmxlIGluIHJlYWN0IG5hdGl2ZVxuXG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt1bmRlZmluZWQsICd2aXNpYmxlJywgJ3ByZXJlbmRlciddLmluY2x1ZGVzKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldERlZmF1bHRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gc2V0RGVmYXVsdEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdmFyIF93aW5kb3c7XG5cbiAgICBpZiAoIWlzU2VydmVyICYmICgoX3dpbmRvdyA9IHdpbmRvdykgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikpIHtcbiAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAob25Gb2N1cykge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgICByZXR1cm4gb25Gb2N1cygpO1xuICAgICAgICB9OyAvLyBMaXN0ZW4gdG8gdmlzaWJpbGxpdHljaGFuZ2UgYW5kIGZvY3VzXG5cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQmUgc3VyZSB0byB1bnN1YnNjcmliZSBpZiBhIG5ldyBoYW5kbGVyIGlzIHNldFxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgbGlzdGVuZXIpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRm9jdXNNYW5hZ2VyO1xufShTdWJzY3JpYmFibGUpO1xuXG5leHBvcnQgdmFyIGZvY3VzTWFuYWdlciA9IG5ldyBGb2N1c01hbmFnZXIoKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcblxuLy8gVFlQRVNcbi8vIEZVTkNUSU9OU1xuZnVuY3Rpb24gZGVoeWRyYXRlTXV0YXRpb24obXV0YXRpb24pIHtcbiAgcmV0dXJuIHtcbiAgICBtdXRhdGlvbktleTogbXV0YXRpb24ub3B0aW9ucy5tdXRhdGlvbktleSxcbiAgICBzdGF0ZTogbXV0YXRpb24uc3RhdGVcbiAgfTtcbn0gLy8gTW9zdCBjb25maWcgaXMgbm90IGRlaHlkcmF0ZWQgYnV0IGluc3RlYWQgbWVhbnQgdG8gY29uZmlndXJlIGFnYWluIHdoZW5cbi8vIGNvbnN1bWluZyB0aGUgZGUvcmVoeWRyYXRlZCBkYXRhLCB0eXBpY2FsbHkgd2l0aCB1c2VRdWVyeSBvbiB0aGUgY2xpZW50LlxuLy8gU29tZXRpbWVzIGl0IG1pZ2h0IG1ha2Ugc2Vuc2UgdG8gcHJlZmV0Y2ggZGF0YSBvbiB0aGUgc2VydmVyIGFuZCBpbmNsdWRlXG4vLyBpbiB0aGUgaHRtbC1wYXlsb2FkLCBidXQgbm90IGNvbnN1bWUgaXQgb24gdGhlIGluaXRpYWwgcmVuZGVyLlxuXG5cbmZ1bmN0aW9uIGRlaHlkcmF0ZVF1ZXJ5KHF1ZXJ5KSB7XG4gIHJldHVybiB7XG4gICAgc3RhdGU6IHF1ZXJ5LnN0YXRlLFxuICAgIHF1ZXJ5S2V5OiBxdWVyeS5xdWVyeUtleSxcbiAgICBxdWVyeUhhc2g6IHF1ZXJ5LnF1ZXJ5SGFzaFxuICB9O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0U2hvdWxkRGVoeWRyYXRlTXV0YXRpb24obXV0YXRpb24pIHtcbiAgcmV0dXJuIG11dGF0aW9uLnN0YXRlLmlzUGF1c2VkO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0U2hvdWxkRGVoeWRyYXRlUXVlcnkocXVlcnkpIHtcbiAgcmV0dXJuIHF1ZXJ5LnN0YXRlLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVoeWRyYXRlKGNsaWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMsIF9vcHRpb25zMjtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG11dGF0aW9ucyA9IFtdO1xuICB2YXIgcXVlcmllcyA9IFtdO1xuXG4gIGlmICgoKF9vcHRpb25zID0gb3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRpb25zLmRlaHlkcmF0ZU11dGF0aW9ucykgIT09IGZhbHNlKSB7XG4gICAgdmFyIHNob3VsZERlaHlkcmF0ZU11dGF0aW9uID0gb3B0aW9ucy5zaG91bGREZWh5ZHJhdGVNdXRhdGlvbiB8fCBkZWZhdWx0U2hvdWxkRGVoeWRyYXRlTXV0YXRpb247XG4gICAgY2xpZW50LmdldE11dGF0aW9uQ2FjaGUoKS5nZXRBbGwoKS5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgaWYgKHNob3VsZERlaHlkcmF0ZU11dGF0aW9uKG11dGF0aW9uKSkge1xuICAgICAgICBtdXRhdGlvbnMucHVzaChkZWh5ZHJhdGVNdXRhdGlvbihtdXRhdGlvbikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCgoX29wdGlvbnMyID0gb3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRpb25zMi5kZWh5ZHJhdGVRdWVyaWVzKSAhPT0gZmFsc2UpIHtcbiAgICB2YXIgc2hvdWxkRGVoeWRyYXRlUXVlcnkgPSBvcHRpb25zLnNob3VsZERlaHlkcmF0ZVF1ZXJ5IHx8IGRlZmF1bHRTaG91bGREZWh5ZHJhdGVRdWVyeTtcbiAgICBjbGllbnQuZ2V0UXVlcnlDYWNoZSgpLmdldEFsbCgpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICBpZiAoc2hvdWxkRGVoeWRyYXRlUXVlcnkocXVlcnkpKSB7XG4gICAgICAgIHF1ZXJpZXMucHVzaChkZWh5ZHJhdGVRdWVyeShxdWVyeSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtdXRhdGlvbnM6IG11dGF0aW9ucyxcbiAgICBxdWVyaWVzOiBxdWVyaWVzXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZShjbGllbnQsIGRlaHlkcmF0ZWRTdGF0ZSwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRlaHlkcmF0ZWRTdGF0ZSAhPT0gJ29iamVjdCcgfHwgZGVoeWRyYXRlZFN0YXRlID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG11dGF0aW9uQ2FjaGUgPSBjbGllbnQuZ2V0TXV0YXRpb25DYWNoZSgpO1xuICB2YXIgcXVlcnlDYWNoZSA9IGNsaWVudC5nZXRRdWVyeUNhY2hlKCk7XG4gIHZhciBtdXRhdGlvbnMgPSBkZWh5ZHJhdGVkU3RhdGUubXV0YXRpb25zIHx8IFtdO1xuICB2YXIgcXVlcmllcyA9IGRlaHlkcmF0ZWRTdGF0ZS5xdWVyaWVzIHx8IFtdO1xuICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZGVoeWRyYXRlZE11dGF0aW9uKSB7XG4gICAgdmFyIF9vcHRpb25zJGRlZmF1bHRPcHRpbztcblxuICAgIG11dGF0aW9uQ2FjaGUuYnVpbGQoY2xpZW50LCBfZXh0ZW5kcyh7fSwgb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogKF9vcHRpb25zJGRlZmF1bHRPcHRpbyA9IG9wdGlvbnMuZGVmYXVsdE9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfb3B0aW9ucyRkZWZhdWx0T3B0aW8ubXV0YXRpb25zLCB7XG4gICAgICBtdXRhdGlvbktleTogZGVoeWRyYXRlZE11dGF0aW9uLm11dGF0aW9uS2V5XG4gICAgfSksIGRlaHlkcmF0ZWRNdXRhdGlvbi5zdGF0ZSk7XG4gIH0pO1xuICBxdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKGRlaHlkcmF0ZWRRdWVyeSkge1xuICAgIHZhciBfb3B0aW9ucyRkZWZhdWx0T3B0aW8yO1xuXG4gICAgdmFyIHF1ZXJ5ID0gcXVlcnlDYWNoZS5nZXQoZGVoeWRyYXRlZFF1ZXJ5LnF1ZXJ5SGFzaCk7IC8vIERvIG5vdCBoeWRyYXRlIGlmIGFuIGV4aXN0aW5nIHF1ZXJ5IGV4aXN0cyB3aXRoIG5ld2VyIGRhdGFcblxuICAgIGlmIChxdWVyeSkge1xuICAgICAgaWYgKHF1ZXJ5LnN0YXRlLmRhdGFVcGRhdGVkQXQgPCBkZWh5ZHJhdGVkUXVlcnkuc3RhdGUuZGF0YVVwZGF0ZWRBdCkge1xuICAgICAgICBxdWVyeS5zZXRTdGF0ZShkZWh5ZHJhdGVkUXVlcnkuc3RhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBSZXN0b3JlIHF1ZXJ5XG5cblxuICAgIHF1ZXJ5Q2FjaGUuYnVpbGQoY2xpZW50LCBfZXh0ZW5kcyh7fSwgb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogKF9vcHRpb25zJGRlZmF1bHRPcHRpbzIgPSBvcHRpb25zLmRlZmF1bHRPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX29wdGlvbnMkZGVmYXVsdE9wdGlvMi5xdWVyaWVzLCB7XG4gICAgICBxdWVyeUtleTogZGVoeWRyYXRlZFF1ZXJ5LnF1ZXJ5S2V5LFxuICAgICAgcXVlcnlIYXNoOiBkZWh5ZHJhdGVkUXVlcnkucXVlcnlIYXNoXG4gICAgfSksIGRlaHlkcmF0ZWRRdWVyeS5zdGF0ZSk7XG4gIH0pO1xufSIsImV4cG9ydCB7IENhbmNlbGxlZEVycm9yIH0gZnJvbSAnLi9yZXRyeWVyJztcbmV4cG9ydCB7IFF1ZXJ5Q2FjaGUgfSBmcm9tICcuL3F1ZXJ5Q2FjaGUnO1xuZXhwb3J0IHsgUXVlcnlDbGllbnQgfSBmcm9tICcuL3F1ZXJ5Q2xpZW50JztcbmV4cG9ydCB7IFF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuL3F1ZXJ5T2JzZXJ2ZXInO1xuZXhwb3J0IHsgUXVlcmllc09ic2VydmVyIH0gZnJvbSAnLi9xdWVyaWVzT2JzZXJ2ZXInO1xuZXhwb3J0IHsgSW5maW5pdGVRdWVyeU9ic2VydmVyIH0gZnJvbSAnLi9pbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXInO1xuZXhwb3J0IHsgTXV0YXRpb25DYWNoZSB9IGZyb20gJy4vbXV0YXRpb25DYWNoZSc7XG5leHBvcnQgeyBNdXRhdGlvbk9ic2VydmVyIH0gZnJvbSAnLi9tdXRhdGlvbk9ic2VydmVyJztcbmV4cG9ydCB7IHNldExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmV4cG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuZXhwb3J0IHsgZm9jdXNNYW5hZ2VyIH0gZnJvbSAnLi9mb2N1c01hbmFnZXInO1xuZXhwb3J0IHsgb25saW5lTWFuYWdlciB9IGZyb20gJy4vb25saW5lTWFuYWdlcic7XG5leHBvcnQgeyBoYXNoUXVlcnlLZXksIGlzRXJyb3IgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCB7IGlzQ2FuY2VsbGVkRXJyb3IgfSBmcm9tICcuL3JldHJ5ZXInO1xuZXhwb3J0IHsgZGVoeWRyYXRlLCBoeWRyYXRlIH0gZnJvbSAnLi9oeWRyYXRpb24nOyAvLyBUeXBlc1xuXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJzsiLCJpbXBvcnQgeyBpc0NhbmNlbGFibGUgfSBmcm9tICcuL3JldHJ5ZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGluZmluaXRlUXVlcnlCZWhhdmlvcigpIHtcbiAgcmV0dXJuIHtcbiAgICBvbkZldGNoOiBmdW5jdGlvbiBvbkZldGNoKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQuZmV0Y2hGbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9jb250ZXh0JGZldGNoT3B0aW9ucywgX2NvbnRleHQkZmV0Y2hPcHRpb25zMiwgX2NvbnRleHQkZmV0Y2hPcHRpb25zMywgX2NvbnRleHQkZmV0Y2hPcHRpb25zNCwgX2NvbnRleHQkc3RhdGUkZGF0YSwgX2NvbnRleHQkc3RhdGUkZGF0YTI7XG5cbiAgICAgICAgdmFyIHJlZmV0Y2hQYWdlID0gKF9jb250ZXh0JGZldGNoT3B0aW9ucyA9IGNvbnRleHQuZmV0Y2hPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogKF9jb250ZXh0JGZldGNoT3B0aW9uczIgPSBfY29udGV4dCRmZXRjaE9wdGlvbnMubWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb250ZXh0JGZldGNoT3B0aW9uczIucmVmZXRjaFBhZ2U7XG4gICAgICAgIHZhciBmZXRjaE1vcmUgPSAoX2NvbnRleHQkZmV0Y2hPcHRpb25zMyA9IGNvbnRleHQuZmV0Y2hPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogKF9jb250ZXh0JGZldGNoT3B0aW9uczQgPSBfY29udGV4dCRmZXRjaE9wdGlvbnMzLm1ldGEpID09IG51bGwgPyB2b2lkIDAgOiBfY29udGV4dCRmZXRjaE9wdGlvbnM0LmZldGNoTW9yZTtcbiAgICAgICAgdmFyIHBhZ2VQYXJhbSA9IGZldGNoTW9yZSA9PSBudWxsID8gdm9pZCAwIDogZmV0Y2hNb3JlLnBhZ2VQYXJhbTtcbiAgICAgICAgdmFyIGlzRmV0Y2hpbmdOZXh0UGFnZSA9IChmZXRjaE1vcmUgPT0gbnVsbCA/IHZvaWQgMCA6IGZldGNoTW9yZS5kaXJlY3Rpb24pID09PSAnZm9yd2FyZCc7XG4gICAgICAgIHZhciBpc0ZldGNoaW5nUHJldmlvdXNQYWdlID0gKGZldGNoTW9yZSA9PSBudWxsID8gdm9pZCAwIDogZmV0Y2hNb3JlLmRpcmVjdGlvbikgPT09ICdiYWNrd2FyZCc7XG4gICAgICAgIHZhciBvbGRQYWdlcyA9ICgoX2NvbnRleHQkc3RhdGUkZGF0YSA9IGNvbnRleHQuc3RhdGUuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb250ZXh0JHN0YXRlJGRhdGEucGFnZXMpIHx8IFtdO1xuICAgICAgICB2YXIgb2xkUGFnZVBhcmFtcyA9ICgoX2NvbnRleHQkc3RhdGUkZGF0YTIgPSBjb250ZXh0LnN0YXRlLmRhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfY29udGV4dCRzdGF0ZSRkYXRhMi5wYWdlUGFyYW1zKSB8fCBbXTtcbiAgICAgICAgdmFyIG5ld1BhZ2VQYXJhbXMgPSBvbGRQYWdlUGFyYW1zO1xuICAgICAgICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7IC8vIEdldCBxdWVyeSBmdW5jdGlvblxuXG4gICAgICAgIHZhciBxdWVyeUZuID0gY29udGV4dC5vcHRpb25zLnF1ZXJ5Rm4gfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnTWlzc2luZyBxdWVyeUZuJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGJ1aWxkTmV3UGFnZXMgPSBmdW5jdGlvbiBidWlsZE5ld1BhZ2VzKHBhZ2VzLCBwYXJhbSwgcGFnZSwgcHJldmlvdXMpIHtcbiAgICAgICAgICBuZXdQYWdlUGFyYW1zID0gcHJldmlvdXMgPyBbcGFyYW1dLmNvbmNhdChuZXdQYWdlUGFyYW1zKSA6IFtdLmNvbmNhdChuZXdQYWdlUGFyYW1zLCBbcGFyYW1dKTtcbiAgICAgICAgICByZXR1cm4gcHJldmlvdXMgPyBbcGFnZV0uY29uY2F0KHBhZ2VzKSA6IFtdLmNvbmNhdChwYWdlcywgW3BhZ2VdKTtcbiAgICAgICAgfTsgLy8gQ3JlYXRlIGZ1bmN0aW9uIHRvIGZldGNoIGEgcGFnZVxuXG5cbiAgICAgICAgdmFyIGZldGNoUGFnZSA9IGZ1bmN0aW9uIGZldGNoUGFnZShwYWdlcywgbWFudWFsLCBwYXJhbSwgcHJldmlvdXMpIHtcbiAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ0NhbmNlbGxlZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICd1bmRlZmluZWQnICYmICFtYW51YWwgJiYgcGFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBhZ2VzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcXVlcnlGbkNvbnRleHQgPSB7XG4gICAgICAgICAgICBxdWVyeUtleTogY29udGV4dC5xdWVyeUtleSxcbiAgICAgICAgICAgIHBhZ2VQYXJhbTogcGFyYW0sXG4gICAgICAgICAgICBtZXRhOiBjb250ZXh0Lm1ldGFcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciBxdWVyeUZuUmVzdWx0ID0gcXVlcnlGbihxdWVyeUZuQ29udGV4dCk7XG4gICAgICAgICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocXVlcnlGblJlc3VsdCkudGhlbihmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkTmV3UGFnZXMocGFnZXMsIHBhcmFtLCBwYWdlLCBwcmV2aW91cyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoaXNDYW5jZWxhYmxlKHF1ZXJ5Rm5SZXN1bHQpKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZUFzQW55ID0gcHJvbWlzZTtcbiAgICAgICAgICAgIHByb21pc2VBc0FueS5jYW5jZWwgPSBxdWVyeUZuUmVzdWx0LmNhbmNlbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcHJvbWlzZTsgLy8gRmV0Y2ggZmlyc3QgcGFnZT9cblxuICAgICAgICBpZiAoIW9sZFBhZ2VzLmxlbmd0aCkge1xuICAgICAgICAgIHByb21pc2UgPSBmZXRjaFBhZ2UoW10pO1xuICAgICAgICB9IC8vIEZldGNoIG5leHQgcGFnZT9cbiAgICAgICAgZWxzZSBpZiAoaXNGZXRjaGluZ05leHRQYWdlKSB7XG4gICAgICAgICAgICB2YXIgbWFudWFsID0gdHlwZW9mIHBhZ2VQYXJhbSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICB2YXIgcGFyYW0gPSBtYW51YWwgPyBwYWdlUGFyYW0gOiBnZXROZXh0UGFnZVBhcmFtKGNvbnRleHQub3B0aW9ucywgb2xkUGFnZXMpO1xuICAgICAgICAgICAgcHJvbWlzZSA9IGZldGNoUGFnZShvbGRQYWdlcywgbWFudWFsLCBwYXJhbSk7XG4gICAgICAgICAgfSAvLyBGZXRjaCBwcmV2aW91cyBwYWdlP1xuICAgICAgICAgIGVsc2UgaWYgKGlzRmV0Y2hpbmdQcmV2aW91c1BhZ2UpIHtcbiAgICAgICAgICAgICAgdmFyIF9tYW51YWwgPSB0eXBlb2YgcGFnZVBhcmFtICE9PSAndW5kZWZpbmVkJztcblxuICAgICAgICAgICAgICB2YXIgX3BhcmFtID0gX21hbnVhbCA/IHBhZ2VQYXJhbSA6IGdldFByZXZpb3VzUGFnZVBhcmFtKGNvbnRleHQub3B0aW9ucywgb2xkUGFnZXMpO1xuXG4gICAgICAgICAgICAgIHByb21pc2UgPSBmZXRjaFBhZ2Uob2xkUGFnZXMsIF9tYW51YWwsIF9wYXJhbSwgdHJ1ZSk7XG4gICAgICAgICAgICB9IC8vIFJlZmV0Y2ggcGFnZXNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBuZXdQYWdlUGFyYW1zID0gW107XG4gICAgICAgICAgICAgICAgICB2YXIgbWFudWFsID0gdHlwZW9mIGNvbnRleHQub3B0aW9ucy5nZXROZXh0UGFnZVBhcmFtID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgICAgICAgICAgIHZhciBzaG91bGRGZXRjaEZpcnN0UGFnZSA9IHJlZmV0Y2hQYWdlICYmIG9sZFBhZ2VzWzBdID8gcmVmZXRjaFBhZ2Uob2xkUGFnZXNbMF0sIDAsIG9sZFBhZ2VzKSA6IHRydWU7IC8vIEZldGNoIGZpcnN0IHBhZ2VcblxuICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IHNob3VsZEZldGNoRmlyc3RQYWdlID8gZmV0Y2hQYWdlKFtdLCBtYW51YWwsIG9sZFBhZ2VQYXJhbXNbMF0pIDogUHJvbWlzZS5yZXNvbHZlKGJ1aWxkTmV3UGFnZXMoW10sIG9sZFBhZ2VQYXJhbXNbMF0sIG9sZFBhZ2VzWzBdKSk7IC8vIEZldGNoIHJlbWFpbmluZyBwYWdlc1xuXG4gICAgICAgICAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHBhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHNob3VsZEZldGNoTmV4dFBhZ2UgPSByZWZldGNoUGFnZSAmJiBvbGRQYWdlc1tpXSA/IHJlZmV0Y2hQYWdlKG9sZFBhZ2VzW2ldLCBpLCBvbGRQYWdlcykgOiB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcGFyYW0yID0gbWFudWFsID8gb2xkUGFnZVBhcmFtc1tpXSA6IGdldE5leHRQYWdlUGFyYW0oY29udGV4dC5vcHRpb25zLCBwYWdlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFBhZ2UocGFnZXMsIG1hbnVhbCwgX3BhcmFtMik7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShidWlsZE5ld1BhZ2VzKHBhZ2VzLCBvbGRQYWdlUGFyYW1zW2ldLCBvbGRQYWdlc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgb2xkUGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX2xvb3AoaSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaW5hbFByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHBhZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VzOiBwYWdlcyxcbiAgICAgICAgICAgIHBhZ2VQYXJhbXM6IG5ld1BhZ2VQYXJhbXNcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGZpbmFsUHJvbWlzZUFzQW55ID0gZmluYWxQcm9taXNlO1xuXG4gICAgICAgIGZpbmFsUHJvbWlzZUFzQW55LmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKGlzQ2FuY2VsYWJsZShwcm9taXNlKSkge1xuICAgICAgICAgICAgcHJvbWlzZS5jYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZpbmFsUHJvbWlzZTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRQYWdlUGFyYW0ob3B0aW9ucywgcGFnZXMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZ2V0TmV4dFBhZ2VQYXJhbSA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5nZXROZXh0UGFnZVBhcmFtKHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdLCBwYWdlcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlvdXNQYWdlUGFyYW0ob3B0aW9ucywgcGFnZXMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZ2V0UHJldmlvdXNQYWdlUGFyYW0gPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZ2V0UHJldmlvdXNQYWdlUGFyYW0ocGFnZXNbMF0sIHBhZ2VzKTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgbmV4dCBwYWdlLlxuICogUmV0dXJucyBgdW5kZWZpbmVkYCBpZiBpdCBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzTmV4dFBhZ2Uob3B0aW9ucywgcGFnZXMpIHtcbiAgaWYgKG9wdGlvbnMuZ2V0TmV4dFBhZ2VQYXJhbSAmJiBBcnJheS5pc0FycmF5KHBhZ2VzKSkge1xuICAgIHZhciBuZXh0UGFnZVBhcmFtID0gZ2V0TmV4dFBhZ2VQYXJhbShvcHRpb25zLCBwYWdlcyk7XG4gICAgcmV0dXJuIHR5cGVvZiBuZXh0UGFnZVBhcmFtICE9PSAndW5kZWZpbmVkJyAmJiBuZXh0UGFnZVBhcmFtICE9PSBudWxsICYmIG5leHRQYWdlUGFyYW0gIT09IGZhbHNlO1xuICB9XG59XG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHByZXZpb3VzIHBhZ2UuXG4gKiBSZXR1cm5zIGB1bmRlZmluZWRgIGlmIGl0IGNhbm5vdCBiZSBkZXRlcm1pbmVkLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNQcmV2aW91c1BhZ2Uob3B0aW9ucywgcGFnZXMpIHtcbiAgaWYgKG9wdGlvbnMuZ2V0UHJldmlvdXNQYWdlUGFyYW0gJiYgQXJyYXkuaXNBcnJheShwYWdlcykpIHtcbiAgICB2YXIgcHJldmlvdXNQYWdlUGFyYW0gPSBnZXRQcmV2aW91c1BhZ2VQYXJhbShvcHRpb25zLCBwYWdlcyk7XG4gICAgcmV0dXJuIHR5cGVvZiBwcmV2aW91c1BhZ2VQYXJhbSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJldmlvdXNQYWdlUGFyYW0gIT09IG51bGwgJiYgcHJldmlvdXNQYWdlUGFyYW0gIT09IGZhbHNlO1xuICB9XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IFF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuL3F1ZXJ5T2JzZXJ2ZXInO1xuaW1wb3J0IHsgaGFzTmV4dFBhZ2UsIGhhc1ByZXZpb3VzUGFnZSwgaW5maW5pdGVRdWVyeUJlaGF2aW9yIH0gZnJvbSAnLi9pbmZpbml0ZVF1ZXJ5QmVoYXZpb3InO1xuZXhwb3J0IHZhciBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9RdWVyeU9ic2VydmVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKEluZmluaXRlUXVlcnlPYnNlcnZlciwgX1F1ZXJ5T2JzZXJ2ZXIpO1xuXG4gIC8vIFR5cGUgb3ZlcnJpZGVcbiAgLy8gVHlwZSBvdmVycmlkZVxuICAvLyBUeXBlIG92ZXJyaWRlXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlbGVzcy1jb25zdHJ1Y3RvclxuICBmdW5jdGlvbiBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIoY2xpZW50LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9RdWVyeU9ic2VydmVyLmNhbGwodGhpcywgY2xpZW50LCBvcHRpb25zKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEluZmluaXRlUXVlcnlPYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJpbmRNZXRob2RzID0gZnVuY3Rpb24gYmluZE1ldGhvZHMoKSB7XG4gICAgX1F1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlLmJpbmRNZXRob2RzLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLmZldGNoTmV4dFBhZ2UgPSB0aGlzLmZldGNoTmV4dFBhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZldGNoUHJldmlvdXNQYWdlID0gdGhpcy5mZXRjaFByZXZpb3VzUGFnZS5iaW5kKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5zZXRPcHRpb25zID0gZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgX1F1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlLnNldE9wdGlvbnMuY2FsbCh0aGlzLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgYmVoYXZpb3I6IGluZmluaXRlUXVlcnlCZWhhdmlvcigpXG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90by5nZXRPcHRpbWlzdGljUmVzdWx0ID0gZnVuY3Rpb24gZ2V0T3B0aW1pc3RpY1Jlc3VsdChvcHRpb25zKSB7XG4gICAgb3B0aW9ucy5iZWhhdmlvciA9IGluZmluaXRlUXVlcnlCZWhhdmlvcigpO1xuICAgIHJldHVybiBfUXVlcnlPYnNlcnZlci5wcm90b3R5cGUuZ2V0T3B0aW1pc3RpY1Jlc3VsdC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaE5leHRQYWdlID0gZnVuY3Rpb24gZmV0Y2hOZXh0UGFnZShvcHRpb25zKSB7XG4gICAgdmFyIF9vcHRpb25zJGNhbmNlbFJlZmV0YztcblxuICAgIHJldHVybiB0aGlzLmZldGNoKHtcbiAgICAgIC8vIFRPRE8gY29uc2lkZXIgcmVtb3ZpbmcgYD8/IHRydWVgIGluIGZ1dHVyZSBicmVha2luZyBjaGFuZ2UsIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCBgcmVmZXRjaGAgQVBJIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Rhbm5lcmxpbnNsZXkvcmVhY3QtcXVlcnkvaXNzdWVzLzI2MTcpXG4gICAgICBjYW5jZWxSZWZldGNoOiAoX29wdGlvbnMkY2FuY2VsUmVmZXRjID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5jYW5jZWxSZWZldGNoKSAhPSBudWxsID8gX29wdGlvbnMkY2FuY2VsUmVmZXRjIDogdHJ1ZSxcbiAgICAgIHRocm93T25FcnJvcjogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy50aHJvd09uRXJyb3IsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIGZldGNoTW9yZToge1xuICAgICAgICAgIGRpcmVjdGlvbjogJ2ZvcndhcmQnLFxuICAgICAgICAgIHBhZ2VQYXJhbTogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5wYWdlUGFyYW1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaFByZXZpb3VzUGFnZSA9IGZ1bmN0aW9uIGZldGNoUHJldmlvdXNQYWdlKG9wdGlvbnMpIHtcbiAgICB2YXIgX29wdGlvbnMkY2FuY2VsUmVmZXRjMjtcblxuICAgIHJldHVybiB0aGlzLmZldGNoKHtcbiAgICAgIC8vIFRPRE8gY29uc2lkZXIgcmVtb3ZpbmcgYD8/IHRydWVgIGluIGZ1dHVyZSBicmVha2luZyBjaGFuZ2UsIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCBgcmVmZXRjaGAgQVBJIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Rhbm5lcmxpbnNsZXkvcmVhY3QtcXVlcnkvaXNzdWVzLzI2MTcpXG4gICAgICBjYW5jZWxSZWZldGNoOiAoX29wdGlvbnMkY2FuY2VsUmVmZXRjMiA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuY2FuY2VsUmVmZXRjaCkgIT0gbnVsbCA/IF9vcHRpb25zJGNhbmNlbFJlZmV0YzIgOiB0cnVlLFxuICAgICAgdGhyb3dPbkVycm9yOiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnRocm93T25FcnJvcixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgZmV0Y2hNb3JlOiB7XG4gICAgICAgICAgZGlyZWN0aW9uOiAnYmFja3dhcmQnLFxuICAgICAgICAgIHBhZ2VQYXJhbTogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5wYWdlUGFyYW1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVSZXN1bHQgPSBmdW5jdGlvbiBjcmVhdGVSZXN1bHQocXVlcnksIG9wdGlvbnMpIHtcbiAgICB2YXIgX3N0YXRlJGRhdGEsIF9zdGF0ZSRkYXRhMiwgX3N0YXRlJGZldGNoTWV0YSwgX3N0YXRlJGZldGNoTWV0YSRmZXRjLCBfc3RhdGUkZmV0Y2hNZXRhMiwgX3N0YXRlJGZldGNoTWV0YTIkZmV0O1xuXG4gICAgdmFyIHN0YXRlID0gcXVlcnkuc3RhdGU7XG5cbiAgICB2YXIgcmVzdWx0ID0gX1F1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVJlc3VsdC5jYWxsKHRoaXMsIHF1ZXJ5LCBvcHRpb25zKTtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdWx0LCB7XG4gICAgICBmZXRjaE5leHRQYWdlOiB0aGlzLmZldGNoTmV4dFBhZ2UsXG4gICAgICBmZXRjaFByZXZpb3VzUGFnZTogdGhpcy5mZXRjaFByZXZpb3VzUGFnZSxcbiAgICAgIGhhc05leHRQYWdlOiBoYXNOZXh0UGFnZShvcHRpb25zLCAoX3N0YXRlJGRhdGEgPSBzdGF0ZS5kYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGRhdGEucGFnZXMpLFxuICAgICAgaGFzUHJldmlvdXNQYWdlOiBoYXNQcmV2aW91c1BhZ2Uob3B0aW9ucywgKF9zdGF0ZSRkYXRhMiA9IHN0YXRlLmRhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZGF0YTIucGFnZXMpLFxuICAgICAgaXNGZXRjaGluZ05leHRQYWdlOiBzdGF0ZS5pc0ZldGNoaW5nICYmICgoX3N0YXRlJGZldGNoTWV0YSA9IHN0YXRlLmZldGNoTWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IChfc3RhdGUkZmV0Y2hNZXRhJGZldGMgPSBfc3RhdGUkZmV0Y2hNZXRhLmZldGNoTW9yZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9zdGF0ZSRmZXRjaE1ldGEkZmV0Yy5kaXJlY3Rpb24pID09PSAnZm9yd2FyZCcsXG4gICAgICBpc0ZldGNoaW5nUHJldmlvdXNQYWdlOiBzdGF0ZS5pc0ZldGNoaW5nICYmICgoX3N0YXRlJGZldGNoTWV0YTIgPSBzdGF0ZS5mZXRjaE1ldGEpID09IG51bGwgPyB2b2lkIDAgOiAoX3N0YXRlJGZldGNoTWV0YTIkZmV0ID0gX3N0YXRlJGZldGNoTWV0YTIuZmV0Y2hNb3JlKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGZldGNoTWV0YTIkZmV0LmRpcmVjdGlvbikgPT09ICdiYWNrd2FyZCdcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSW5maW5pdGVRdWVyeU9ic2VydmVyO1xufShRdWVyeU9ic2VydmVyKTsiLCJpbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlscyc7IC8vIFRZUEVTXG5cbi8vIEZVTkNUSU9OU1xudmFyIGxvZ2dlciA9IGNvbnNvbGUgfHwge1xuICBlcnJvcjogbm9vcCxcbiAgd2Fybjogbm9vcCxcbiAgbG9nOiBub29wXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2dlcigpIHtcbiAgcmV0dXJuIGxvZ2dlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dnZXIobmV3TG9nZ2VyKSB7XG4gIGxvZ2dlciA9IG5ld0xvZ2dlcjtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgUmV0cnllciB9IGZyb20gJy4vcmV0cnllcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlscyc7IC8vIFRZUEVTXG5cbi8vIENMQVNTXG5leHBvcnQgdmFyIE11dGF0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTXV0YXRpb24oY29uZmlnKSB7XG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIGNvbmZpZy5kZWZhdWx0T3B0aW9ucywgY29uZmlnLm9wdGlvbnMpO1xuICAgIHRoaXMubXV0YXRpb25JZCA9IGNvbmZpZy5tdXRhdGlvbklkO1xuICAgIHRoaXMubXV0YXRpb25DYWNoZSA9IGNvbmZpZy5tdXRhdGlvbkNhY2hlO1xuICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgdGhpcy5zdGF0ZSA9IGNvbmZpZy5zdGF0ZSB8fCBnZXREZWZhdWx0U3RhdGUoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNdXRhdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdzZXRTdGF0ZScsXG4gICAgICBzdGF0ZTogc3RhdGVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiBhZGRPYnNlcnZlcihvYnNlcnZlcikge1xuICAgIGlmICh0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiByZW1vdmVPYnNlcnZlcihvYnNlcnZlcikge1xuICAgIHRoaXMub2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCAhPT0gb2JzZXJ2ZXI7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5yZXRyeWVyKSB7XG4gICAgICB0aGlzLnJldHJ5ZXIuY2FuY2VsKCk7XG4gICAgICByZXR1cm4gdGhpcy5yZXRyeWVyLnByb21pc2UudGhlbihub29wKS5jYXRjaChub29wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbnRpbnVlID0gZnVuY3Rpb24gX2NvbnRpbnVlKCkge1xuICAgIGlmICh0aGlzLnJldHJ5ZXIpIHtcbiAgICAgIHRoaXMucmV0cnllci5jb250aW51ZSgpO1xuICAgICAgcmV0dXJuIHRoaXMucmV0cnllci5wcm9taXNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoKTtcbiAgfTtcblxuICBfcHJvdG8uZXhlY3V0ZSA9IGZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBkYXRhO1xuICAgIHZhciByZXN0b3JlZCA9IHRoaXMuc3RhdGUuc3RhdHVzID09PSAnbG9hZGluZyc7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIGlmICghcmVzdG9yZWQpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnbG9hZGluZycsXG4gICAgICAgIHZhcmlhYmxlczogdGhpcy5vcHRpb25zLnZhcmlhYmxlc1xuICAgICAgfSk7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMub25NdXRhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm9wdGlvbnMub25NdXRhdGUoX3RoaXMuc3RhdGUudmFyaWFibGVzKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgIT09IF90aGlzLnN0YXRlLmNvbnRleHQpIHtcbiAgICAgICAgICBfdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAnbG9hZGluZycsXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBfdGhpcy5zdGF0ZS52YXJpYWJsZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZXhlY3V0ZU11dGF0aW9uKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBkYXRhID0gcmVzdWx0OyAvLyBOb3RpZnkgY2FjaGUgY2FsbGJhY2tcblxuICAgICAgX3RoaXMubXV0YXRpb25DYWNoZS5jb25maWcub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5tdXRhdGlvbkNhY2hlLmNvbmZpZy5vblN1Y2Nlc3MoZGF0YSwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0LCBfdGhpcyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm9wdGlvbnMub25TdWNjZXNzKGRhdGEsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm9wdGlvbnMub25TZXR0bGVkKGRhdGEsIG51bGwsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgLy8gTm90aWZ5IGNhY2hlIGNhbGxiYWNrXG4gICAgICBfdGhpcy5tdXRhdGlvbkNhY2hlLmNvbmZpZy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5tdXRhdGlvbkNhY2hlLmNvbmZpZy5vbkVycm9yKGVycm9yLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQsIF90aGlzKTsgLy8gTG9nIGVycm9yXG5cbiAgICAgIGdldExvZ2dlcigpLmVycm9yKGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMub3B0aW9ucy5vbkVycm9yKGVycm9yLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMub3B0aW9ucy5vblNldHRsZWQodW5kZWZpbmVkLCBlcnJvciwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0KTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZXhlY3V0ZU11dGF0aW9uID0gZnVuY3Rpb24gZXhlY3V0ZU11dGF0aW9uKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzLFxuICAgICAgICBfdGhpcyRvcHRpb25zJHJldHJ5O1xuXG4gICAgdGhpcy5yZXRyeWVyID0gbmV3IFJldHJ5ZXIoe1xuICAgICAgZm46IGZ1bmN0aW9uIGZuKCkge1xuICAgICAgICBpZiAoIV90aGlzMi5vcHRpb25zLm11dGF0aW9uRm4pIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05vIG11dGF0aW9uRm4gZm91bmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdGhpczIub3B0aW9ucy5tdXRhdGlvbkZuKF90aGlzMi5zdGF0ZS52YXJpYWJsZXMpO1xuICAgICAgfSxcbiAgICAgIG9uRmFpbDogZnVuY3Rpb24gb25GYWlsKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdmYWlsZWQnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uUGF1c2U6IGZ1bmN0aW9uIG9uUGF1c2UoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ3BhdXNlJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvbkNvbnRpbnVlOiBmdW5jdGlvbiBvbkNvbnRpbnVlKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdjb250aW51ZSdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmV0cnk6IChfdGhpcyRvcHRpb25zJHJldHJ5ID0gdGhpcy5vcHRpb25zLnJldHJ5KSAhPSBudWxsID8gX3RoaXMkb3B0aW9ucyRyZXRyeSA6IDAsXG4gICAgICByZXRyeURlbGF5OiB0aGlzLm9wdGlvbnMucmV0cnlEZWxheVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJldHJ5ZXIucHJvbWlzZTtcbiAgfTtcblxuICBfcHJvdG8uZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMuc3RhdGUgPSByZWR1Y2VyKHRoaXMuc3RhdGUsIGFjdGlvbik7XG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLm9uTXV0YXRpb25VcGRhdGUoYWN0aW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczMubXV0YXRpb25DYWNoZS5ub3RpZnkoX3RoaXMzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTXV0YXRpb247XG59KCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFN0YXRlKCkge1xuICByZXR1cm4ge1xuICAgIGNvbnRleHQ6IHVuZGVmaW5lZCxcbiAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgZmFpbHVyZUNvdW50OiAwLFxuICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICBzdGF0dXM6ICdpZGxlJyxcbiAgICB2YXJpYWJsZXM6IHVuZGVmaW5lZFxuICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2ZhaWxlZCc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGZhaWx1cmVDb3VudDogc3RhdGUuZmFpbHVyZUNvdW50ICsgMVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdwYXVzZSc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGlzUGF1c2VkOiB0cnVlXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ2NvbnRpbnVlJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNQYXVzZWQ6IGZhbHNlXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ2xvYWRpbmcnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb250ZXh0OiBhY3Rpb24uY29udGV4dCxcbiAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICBzdGF0dXM6ICdsb2FkaW5nJyxcbiAgICAgICAgdmFyaWFibGVzOiBhY3Rpb24udmFyaWFibGVzXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICBpc1BhdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIGZhaWx1cmVDb3VudDogc3RhdGUuZmFpbHVyZUNvdW50ICsgMSxcbiAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICBzdGF0dXM6ICdlcnJvcidcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnc2V0U3RhdGUnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgYWN0aW9uLnN0YXRlKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICcuL211dGF0aW9uJztcbmltcG9ydCB7IG1hdGNoTXV0YXRpb24sIG5vb3AgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJzsgLy8gVFlQRVNcblxuLy8gQ0xBU1NcbmV4cG9ydCB2YXIgTXV0YXRpb25DYWNoZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShNdXRhdGlvbkNhY2hlLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBNdXRhdGlvbkNhY2hlKGNvbmZpZykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1N1YnNjcmliYWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIF90aGlzLm11dGF0aW9ucyA9IFtdO1xuICAgIF90aGlzLm11dGF0aW9uSWQgPSAwO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNdXRhdGlvbkNhY2hlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYnVpbGQgPSBmdW5jdGlvbiBidWlsZChjbGllbnQsIG9wdGlvbnMsIHN0YXRlKSB7XG4gICAgdmFyIG11dGF0aW9uID0gbmV3IE11dGF0aW9uKHtcbiAgICAgIG11dGF0aW9uQ2FjaGU6IHRoaXMsXG4gICAgICBtdXRhdGlvbklkOiArK3RoaXMubXV0YXRpb25JZCxcbiAgICAgIG9wdGlvbnM6IGNsaWVudC5kZWZhdWx0TXV0YXRpb25PcHRpb25zKG9wdGlvbnMpLFxuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IG9wdGlvbnMubXV0YXRpb25LZXkgPyBjbGllbnQuZ2V0TXV0YXRpb25EZWZhdWx0cyhvcHRpb25zLm11dGF0aW9uS2V5KSA6IHVuZGVmaW5lZFxuICAgIH0pO1xuICAgIHRoaXMuYWRkKG11dGF0aW9uKTtcbiAgICByZXR1cm4gbXV0YXRpb247XG4gIH07XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChtdXRhdGlvbikge1xuICAgIHRoaXMubXV0YXRpb25zLnB1c2gobXV0YXRpb24pO1xuICAgIHRoaXMubm90aWZ5KG11dGF0aW9uKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKG11dGF0aW9uKSB7XG4gICAgdGhpcy5tdXRhdGlvbnMgPSB0aGlzLm11dGF0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4ICE9PSBtdXRhdGlvbjtcbiAgICB9KTtcbiAgICBtdXRhdGlvbi5jYW5jZWwoKTtcbiAgICB0aGlzLm5vdGlmeShtdXRhdGlvbik7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5tdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgX3RoaXMyLnJlbW92ZShtdXRhdGlvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0QWxsID0gZnVuY3Rpb24gZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9ucztcbiAgfTtcblxuICBfcHJvdG8uZmluZCA9IGZ1bmN0aW9uIGZpbmQoZmlsdGVycykge1xuICAgIGlmICh0eXBlb2YgZmlsdGVycy5leGFjdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZpbHRlcnMuZXhhY3QgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm11dGF0aW9ucy5maW5kKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgcmV0dXJuIG1hdGNoTXV0YXRpb24oZmlsdGVycywgbXV0YXRpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5maW5kQWxsID0gZnVuY3Rpb24gZmluZEFsbChmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25zLmZpbHRlcihmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIHJldHVybiBtYXRjaE11dGF0aW9uKGZpbHRlcnMsIG11dGF0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KG11dGF0aW9uKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIobXV0YXRpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRm9jdXMgPSBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgIHRoaXMucmVzdW1lUGF1c2VkTXV0YXRpb25zKCk7XG4gIH07XG5cbiAgX3Byb3RvLm9uT25saW5lID0gZnVuY3Rpb24gb25PbmxpbmUoKSB7XG4gICAgdGhpcy5yZXN1bWVQYXVzZWRNdXRhdGlvbnMoKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdW1lUGF1c2VkTXV0YXRpb25zID0gZnVuY3Rpb24gcmVzdW1lUGF1c2VkTXV0YXRpb25zKCkge1xuICAgIHZhciBwYXVzZWRNdXRhdGlvbnMgPSB0aGlzLm11dGF0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4LnN0YXRlLmlzUGF1c2VkO1xuICAgIH0pO1xuICAgIHJldHVybiBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwYXVzZWRNdXRhdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChwcm9taXNlLCBtdXRhdGlvbikge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbXV0YXRpb24uY29udGludWUoKS5jYXRjaChub29wKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE11dGF0aW9uQ2FjaGU7XG59KFN1YnNjcmliYWJsZSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IGdldERlZmF1bHRTdGF0ZSB9IGZyb20gJy4vbXV0YXRpb24nO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG4vLyBDTEFTU1xuZXhwb3J0IHZhciBNdXRhdGlvbk9ic2VydmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKE11dGF0aW9uT2JzZXJ2ZXIsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIE11dGF0aW9uT2JzZXJ2ZXIoY2xpZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3Vic2NyaWJhYmxlLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5jbGllbnQgPSBjbGllbnQ7XG5cbiAgICBfdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgX3RoaXMuYmluZE1ldGhvZHMoKTtcblxuICAgIF90aGlzLnVwZGF0ZVJlc3VsdCgpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE11dGF0aW9uT2JzZXJ2ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5iaW5kTWV0aG9kcyA9IGZ1bmN0aW9uIGJpbmRNZXRob2RzKCkge1xuICAgIHRoaXMubXV0YXRlID0gdGhpcy5tdXRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0ID0gdGhpcy5yZXNldC5iaW5kKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5zZXRPcHRpb25zID0gZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5jbGllbnQuZGVmYXVsdE11dGF0aW9uT3B0aW9ucyhvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8ub25VbnN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uVW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TXV0YXRpb247XG5cbiAgICAgIChfdGhpcyRjdXJyZW50TXV0YXRpb24gPSB0aGlzLmN1cnJlbnRNdXRhdGlvbikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJGN1cnJlbnRNdXRhdGlvbi5yZW1vdmVPYnNlcnZlcih0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uTXV0YXRpb25VcGRhdGUgPSBmdW5jdGlvbiBvbk11dGF0aW9uVXBkYXRlKGFjdGlvbikge1xuICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7IC8vIERldGVybWluZSB3aGljaCBjYWxsYmFja3MgdG8gdHJpZ2dlclxuXG4gICAgdmFyIG5vdGlmeU9wdGlvbnMgPSB7XG4gICAgICBsaXN0ZW5lcnM6IHRydWVcbiAgICB9O1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgIG5vdGlmeU9wdGlvbnMub25TdWNjZXNzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICBub3RpZnlPcHRpb25zLm9uRXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZ5KG5vdGlmeU9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5nZXRDdXJyZW50UmVzdWx0ID0gZnVuY3Rpb24gZ2V0Q3VycmVudFJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMuY3VycmVudE11dGF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XG4gICAgdGhpcy5ub3RpZnkoe1xuICAgICAgbGlzdGVuZXJzOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm11dGF0ZSA9IGZ1bmN0aW9uIG11dGF0ZSh2YXJpYWJsZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm11dGF0ZU9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudE11dGF0aW9uKSB7XG4gICAgICB0aGlzLmN1cnJlbnRNdXRhdGlvbi5yZW1vdmVPYnNlcnZlcih0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRNdXRhdGlvbiA9IHRoaXMuY2xpZW50LmdldE11dGF0aW9uQ2FjaGUoKS5idWlsZCh0aGlzLmNsaWVudCwgX2V4dGVuZHMoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgdmFyaWFibGVzOiB0eXBlb2YgdmFyaWFibGVzICE9PSAndW5kZWZpbmVkJyA/IHZhcmlhYmxlcyA6IHRoaXMub3B0aW9ucy52YXJpYWJsZXNcbiAgICB9KSk7XG4gICAgdGhpcy5jdXJyZW50TXV0YXRpb24uYWRkT2JzZXJ2ZXIodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE11dGF0aW9uLmV4ZWN1dGUoKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlUmVzdWx0ID0gZnVuY3Rpb24gdXBkYXRlUmVzdWx0KCkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuY3VycmVudE11dGF0aW9uID8gdGhpcy5jdXJyZW50TXV0YXRpb24uc3RhdGUgOiBnZXREZWZhdWx0U3RhdGUoKTtcblxuICAgIHZhciByZXN1bHQgPSBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgIGlzTG9hZGluZzogc3RhdGUuc3RhdHVzID09PSAnbG9hZGluZycsXG4gICAgICBpc1N1Y2Nlc3M6IHN0YXRlLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgaXNFcnJvcjogc3RhdGUuc3RhdHVzID09PSAnZXJyb3InLFxuICAgICAgaXNJZGxlOiBzdGF0ZS5zdGF0dXMgPT09ICdpZGxlJyxcbiAgICAgIG11dGF0ZTogdGhpcy5tdXRhdGUsXG4gICAgICByZXNldDogdGhpcy5yZXNldFxuICAgIH0pO1xuXG4gICAgdGhpcy5jdXJyZW50UmVzdWx0ID0gcmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkob3B0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBGaXJzdCB0cmlnZ2VyIHRoZSBtdXRhdGUgY2FsbGJhY2tzXG4gICAgICBpZiAoX3RoaXMyLm11dGF0ZU9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMub25TdWNjZXNzKSB7XG4gICAgICAgICAgX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIubXV0YXRlT3B0aW9ucy5vblN1Y2Nlc3MoX3RoaXMyLmN1cnJlbnRSZXN1bHQuZGF0YSwgX3RoaXMyLmN1cnJlbnRSZXN1bHQudmFyaWFibGVzLCBfdGhpczIuY3VycmVudFJlc3VsdC5jb250ZXh0KTtcbiAgICAgICAgICBfdGhpczIubXV0YXRlT3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU2V0dGxlZChfdGhpczIuY3VycmVudFJlc3VsdC5kYXRhLCBudWxsLCBfdGhpczIuY3VycmVudFJlc3VsdC52YXJpYWJsZXMsIF90aGlzMi5jdXJyZW50UmVzdWx0LmNvbnRleHQpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMub25FcnJvcikge1xuICAgICAgICAgIF90aGlzMi5tdXRhdGVPcHRpb25zLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5tdXRhdGVPcHRpb25zLm9uRXJyb3IoX3RoaXMyLmN1cnJlbnRSZXN1bHQuZXJyb3IsIF90aGlzMi5jdXJyZW50UmVzdWx0LnZhcmlhYmxlcywgX3RoaXMyLmN1cnJlbnRSZXN1bHQuY29udGV4dCk7XG4gICAgICAgICAgX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIubXV0YXRlT3B0aW9ucy5vblNldHRsZWQodW5kZWZpbmVkLCBfdGhpczIuY3VycmVudFJlc3VsdC5lcnJvciwgX3RoaXMyLmN1cnJlbnRSZXN1bHQudmFyaWFibGVzLCBfdGhpczIuY3VycmVudFJlc3VsdC5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBUaGVuIHRyaWdnZXIgdGhlIGxpc3RlbmVyc1xuXG5cbiAgICAgIGlmIChvcHRpb25zLmxpc3RlbmVycykge1xuICAgICAgICBfdGhpczIubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIoX3RoaXMyLmN1cnJlbnRSZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTXV0YXRpb25PYnNlcnZlcjtcbn0oU3Vic2NyaWJhYmxlKTsiLCJpbXBvcnQgeyBzY2hlZHVsZU1pY3JvdGFzayB9IGZyb20gJy4vdXRpbHMnOyAvLyBUWVBFU1xuXG4vLyBDTEFTU1xudmFyIE5vdGlmeU1hbmFnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RpZnlNYW5hZ2VyKCkge1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IDA7XG5cbiAgICB0aGlzLm5vdGlmeUZuID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH07XG5cbiAgICB0aGlzLmJhdGNoTm90aWZ5Rm4gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBOb3RpZnlNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYmF0Y2ggPSBmdW5jdGlvbiBiYXRjaChjYWxsYmFjaykge1xuICAgIHRoaXMudHJhbnNhY3Rpb25zKys7XG4gICAgdmFyIHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gICAgdGhpcy50cmFuc2FjdGlvbnMtLTtcblxuICAgIGlmICghdGhpcy50cmFuc2FjdGlvbnMpIHtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5zY2hlZHVsZSA9IGZ1bmN0aW9uIHNjaGVkdWxlKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLnRyYW5zYWN0aW9ucykge1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVNaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5ub3RpZnlGbihjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEFsbCBjYWxscyB0byB0aGUgd3JhcHBlZCBmdW5jdGlvbiB3aWxsIGJlIGJhdGNoZWQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmJhdGNoQ2FsbHMgPSBmdW5jdGlvbiBiYXRjaENhbGxzKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIF90aGlzMi5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZTtcbiAgICB0aGlzLnF1ZXVlID0gW107XG5cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICBzY2hlZHVsZU1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5iYXRjaE5vdGlmeUZuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgX3RoaXMzLm5vdGlmeUZuKGNhbGxiYWNrKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgYSBjdXN0b20gbm90aWZ5IGZ1bmN0aW9uLlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGZvciBleGFtcGxlIHdyYXAgbm90aWZpY2F0aW9ucyB3aXRoIGBSZWFjdC5hY3RgIHdoaWxlIHJ1bm5pbmcgdGVzdHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldE5vdGlmeUZ1bmN0aW9uID0gZnVuY3Rpb24gc2V0Tm90aWZ5RnVuY3Rpb24oZm4pIHtcbiAgICB0aGlzLm5vdGlmeUZuID0gZm47XG4gIH1cbiAgLyoqXG4gICAqIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgYSBjdXN0b20gZnVuY3Rpb24gdG8gYmF0Y2ggbm90aWZpY2F0aW9ucyB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHRpY2suXG4gICAqIEJ5IGRlZmF1bHQgUmVhY3QgUXVlcnkgd2lsbCB1c2UgdGhlIGJhdGNoIGZ1bmN0aW9uIHByb3ZpZGVkIGJ5IFJlYWN0RE9NIG9yIFJlYWN0IE5hdGl2ZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0QmF0Y2hOb3RpZnlGdW5jdGlvbiA9IGZ1bmN0aW9uIHNldEJhdGNoTm90aWZ5RnVuY3Rpb24oZm4pIHtcbiAgICB0aGlzLmJhdGNoTm90aWZ5Rm4gPSBmbjtcbiAgfTtcblxuICByZXR1cm4gTm90aWZ5TWFuYWdlcjtcbn0oKTsgLy8gU0lOR0xFVE9OXG5cblxuZXhwb3J0IHZhciBub3RpZnlNYW5hZ2VyID0gbmV3IE5vdGlmeU1hbmFnZXIoKTsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJztcbmltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBPbmxpbmVNYW5hZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKE9ubGluZU1hbmFnZXIsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIE9ubGluZU1hbmFnZXIoKSB7XG4gICAgcmV0dXJuIF9TdWJzY3JpYmFibGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE9ubGluZU1hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5vblN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uU3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnNldERlZmF1bHRFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gc2V0RXZlbnRMaXN0ZW5lcihzZXR1cCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBzZXR1cChmdW5jdGlvbiAob25saW5lKSB7XG4gICAgICBpZiAodHlwZW9mIG9ubGluZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIF90aGlzLnNldE9ubGluZShvbmxpbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMub25PbmxpbmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uc2V0T25saW5lID0gZnVuY3Rpb24gc2V0T25saW5lKG9ubGluZSkge1xuICAgIHRoaXMub25saW5lID0gb25saW5lO1xuXG4gICAgaWYgKG9ubGluZSkge1xuICAgICAgdGhpcy5vbk9ubGluZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25PbmxpbmUgPSBmdW5jdGlvbiBvbk9ubGluZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaXNPbmxpbmUgPSBmdW5jdGlvbiBpc09ubGluZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub25saW5lID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB0aGlzLm9ubGluZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIG5hdmlnYXRvci5vbkxpbmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLm9uTGluZTtcbiAgfTtcblxuICBfcHJvdG8uc2V0RGVmYXVsdEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBzZXREZWZhdWx0RXZlbnRMaXN0ZW5lcigpIHtcbiAgICB2YXIgX3dpbmRvdztcblxuICAgIGlmICghaXNTZXJ2ZXIgJiYgKChfd2luZG93ID0gd2luZG93KSA9PSBudWxsID8gdm9pZCAwIDogX3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKSkge1xuICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVyKGZ1bmN0aW9uIChvbk9ubGluZSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgICByZXR1cm4gb25PbmxpbmUoKTtcbiAgICAgICAgfTsgLy8gTGlzdGVuIHRvIG9ubGluZVxuXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBCZSBzdXJlIHRvIHVuc3Vic2NyaWJlIGlmIGEgbmV3IGhhbmRsZXIgaXMgc2V0XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29ubGluZScsIGxpc3RlbmVyKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gT25saW5lTWFuYWdlcjtcbn0oU3Vic2NyaWJhYmxlKTtcblxuZXhwb3J0IHZhciBvbmxpbmVNYW5hZ2VyID0gbmV3IE9ubGluZU1hbmFnZXIoKTsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2UsIHJlcGxhY2VBdCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBRdWVyeU9ic2VydmVyIH0gZnJvbSAnLi9xdWVyeU9ic2VydmVyJztcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJztcbmV4cG9ydCB2YXIgUXVlcmllc09ic2VydmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKFF1ZXJpZXNPYnNlcnZlciwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gUXVlcmllc09ic2VydmVyKGNsaWVudCwgcXVlcmllcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1N1YnNjcmliYWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIF90aGlzLnF1ZXJpZXMgPSBbXTtcbiAgICBfdGhpcy5yZXN1bHQgPSBbXTtcbiAgICBfdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICBfdGhpcy5vYnNlcnZlcnNNYXAgPSB7fTtcblxuICAgIGlmIChxdWVyaWVzKSB7XG4gICAgICBfdGhpcy5zZXRRdWVyaWVzKHF1ZXJpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBRdWVyaWVzT2JzZXJ2ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5vblN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uU3Vic2NyaWJlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBfdGhpczIub25VcGRhdGUob2JzZXJ2ZXIsIHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vblVuc3Vic2NyaWJlID0gZnVuY3Rpb24gb25VbnN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldFF1ZXJpZXMgPSBmdW5jdGlvbiBzZXRRdWVyaWVzKHF1ZXJpZXMsIG5vdGlmeU9wdGlvbnMpIHtcbiAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgIHRoaXMudXBkYXRlT2JzZXJ2ZXJzKG5vdGlmeU9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5nZXRDdXJyZW50UmVzdWx0ID0gZnVuY3Rpb24gZ2V0Q3VycmVudFJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLmdldE9wdGltaXN0aWNSZXN1bHQgPSBmdW5jdGlvbiBnZXRPcHRpbWlzdGljUmVzdWx0KHF1ZXJpZXMpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHJldHVybiBxdWVyaWVzLm1hcChmdW5jdGlvbiAob3B0aW9ucywgaW5kZXgpIHtcbiAgICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gX3RoaXMzLmNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAgIHJldHVybiBfdGhpczMuZ2V0T2JzZXJ2ZXIoZGVmYXVsdGVkT3B0aW9ucywgaW5kZXgpLmdldE9wdGltaXN0aWNSZXN1bHQoZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldE9ic2VydmVyID0gZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIob3B0aW9ucywgaW5kZXgpIHtcbiAgICB2YXIgX2N1cnJlbnRPYnNlcnZlcjtcblxuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gdGhpcy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuICAgIHZhciBjdXJyZW50T2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVyc01hcFtkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5SGFzaF07XG5cbiAgICBpZiAoIWN1cnJlbnRPYnNlcnZlciAmJiBkZWZhdWx0ZWRPcHRpb25zLmtlZXBQcmV2aW91c0RhdGEpIHtcbiAgICAgIGN1cnJlbnRPYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXJzW2luZGV4XTtcbiAgICB9XG5cbiAgICByZXR1cm4gKF9jdXJyZW50T2JzZXJ2ZXIgPSBjdXJyZW50T2JzZXJ2ZXIpICE9IG51bGwgPyBfY3VycmVudE9ic2VydmVyIDogbmV3IFF1ZXJ5T2JzZXJ2ZXIodGhpcy5jbGllbnQsIGRlZmF1bHRlZE9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVPYnNlcnZlcnMgPSBmdW5jdGlvbiB1cGRhdGVPYnNlcnZlcnMobm90aWZ5T3B0aW9ucykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaGFzSW5kZXhDaGFuZ2UgPSBmYWxzZTtcbiAgICAgIHZhciBwcmV2T2JzZXJ2ZXJzID0gX3RoaXM0Lm9ic2VydmVycztcbiAgICAgIHZhciBwcmV2T2JzZXJ2ZXJzTWFwID0gX3RoaXM0Lm9ic2VydmVyc01hcDtcbiAgICAgIHZhciBuZXdSZXN1bHQgPSBbXTtcbiAgICAgIHZhciBuZXdPYnNlcnZlcnMgPSBbXTtcbiAgICAgIHZhciBuZXdPYnNlcnZlcnNNYXAgPSB7fTtcblxuICAgICAgX3RoaXM0LnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9ucywgaSkge1xuICAgICAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IF90aGlzNC5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBxdWVyeUhhc2ggPSBkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5SGFzaDtcblxuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBfdGhpczQuZ2V0T2JzZXJ2ZXIoZGVmYXVsdGVkT3B0aW9ucywgaSk7XG5cbiAgICAgICAgaWYgKHByZXZPYnNlcnZlcnNNYXBbcXVlcnlIYXNoXSB8fCBkZWZhdWx0ZWRPcHRpb25zLmtlZXBQcmV2aW91c0RhdGEpIHtcbiAgICAgICAgICBvYnNlcnZlci5zZXRPcHRpb25zKGRlZmF1bHRlZE9wdGlvbnMsIG5vdGlmeU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9ic2VydmVyICE9PSBwcmV2T2JzZXJ2ZXJzW2ldKSB7XG4gICAgICAgICAgaGFzSW5kZXhDaGFuZ2UgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3T2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICBuZXdSZXN1bHQucHVzaChvYnNlcnZlci5nZXRDdXJyZW50UmVzdWx0KCkpO1xuICAgICAgICBuZXdPYnNlcnZlcnNNYXBbcXVlcnlIYXNoXSA9IG9ic2VydmVyO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcmV2T2JzZXJ2ZXJzLmxlbmd0aCA9PT0gbmV3T2JzZXJ2ZXJzLmxlbmd0aCAmJiAhaGFzSW5kZXhDaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpczQub2JzZXJ2ZXJzID0gbmV3T2JzZXJ2ZXJzO1xuICAgICAgX3RoaXM0Lm9ic2VydmVyc01hcCA9IG5ld09ic2VydmVyc01hcDtcbiAgICAgIF90aGlzNC5yZXN1bHQgPSBuZXdSZXN1bHQ7XG5cbiAgICAgIGlmICghX3RoaXM0Lmhhc0xpc3RlbmVycygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGlmZmVyZW5jZShwcmV2T2JzZXJ2ZXJzLCBuZXdPYnNlcnZlcnMpLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgICAgZGlmZmVyZW5jZShuZXdPYnNlcnZlcnMsIHByZXZPYnNlcnZlcnMpLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgX3RoaXM0Lm9uVXBkYXRlKG9ic2VydmVyLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczQubm90aWZ5KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUob2JzZXJ2ZXIsIHJlc3VsdCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5yZXN1bHQgPSByZXBsYWNlQXQodGhpcy5yZXN1bHQsIGluZGV4LCByZXN1bHQpO1xuICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM1Lmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcihfdGhpczUucmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBRdWVyaWVzT2JzZXJ2ZXI7XG59KFN1YnNjcmliYWJsZSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmdW5jdGlvbmFsVXBkYXRlLCBpc1ZhbGlkVGltZW91dCwgbm9vcCwgcmVwbGFjZUVxdWFsRGVlcCwgdGltZVVudGlsU3RhbGUsIGVuc3VyZVF1ZXJ5S2V5QXJyYXkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgUmV0cnllciwgaXNDYW5jZWxsZWRFcnJvciB9IGZyb20gJy4vcmV0cnllcic7IC8vIFRZUEVTXG5cbi8vIENMQVNTXG5leHBvcnQgdmFyIFF1ZXJ5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUXVlcnkoY29uZmlnKSB7XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IGNvbmZpZy5kZWZhdWx0T3B0aW9ucztcbiAgICB0aGlzLnNldE9wdGlvbnMoY29uZmlnLm9wdGlvbnMpO1xuICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgdGhpcy5jYWNoZSA9IGNvbmZpZy5jYWNoZTtcbiAgICB0aGlzLnF1ZXJ5S2V5ID0gY29uZmlnLnF1ZXJ5S2V5O1xuICAgIHRoaXMucXVlcnlIYXNoID0gY29uZmlnLnF1ZXJ5SGFzaDtcbiAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IGNvbmZpZy5zdGF0ZSB8fCB0aGlzLmdldERlZmF1bHRTdGF0ZSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcbiAgICB0aGlzLm1ldGEgPSBjb25maWcubWV0YTtcbiAgICB0aGlzLnNjaGVkdWxlR2MoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBRdWVyeS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9ucyRjYWNoZVRpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHRoaXMubWV0YSA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMubWV0YTsgLy8gRGVmYXVsdCB0byA1IG1pbnV0ZXMgaWYgbm90IGNhY2hlIHRpbWUgaXMgc2V0XG5cbiAgICB0aGlzLmNhY2hlVGltZSA9IE1hdGgubWF4KHRoaXMuY2FjaGVUaW1lIHx8IDAsIChfdGhpcyRvcHRpb25zJGNhY2hlVGkgPSB0aGlzLm9wdGlvbnMuY2FjaGVUaW1lKSAhPSBudWxsID8gX3RoaXMkb3B0aW9ucyRjYWNoZVRpIDogNSAqIDYwICogMTAwMCk7XG4gIH07XG5cbiAgX3Byb3RvLnNldERlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xuICB9O1xuXG4gIF9wcm90by5zY2hlZHVsZUdjID0gZnVuY3Rpb24gc2NoZWR1bGVHYygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5jbGVhckdjVGltZW91dCgpO1xuXG4gICAgaWYgKGlzVmFsaWRUaW1lb3V0KHRoaXMuY2FjaGVUaW1lKSkge1xuICAgICAgdGhpcy5nY1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMub3B0aW9uYWxSZW1vdmUoKTtcbiAgICAgIH0sIHRoaXMuY2FjaGVUaW1lKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyR2NUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJHY1RpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZ2NUaW1lb3V0KTtcbiAgICB0aGlzLmdjVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8ub3B0aW9uYWxSZW1vdmUgPSBmdW5jdGlvbiBvcHRpb25hbFJlbW92ZSgpIHtcbiAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzLmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5pc0ZldGNoaW5nKSB7XG4gICAgICB0aGlzLmNhY2hlLnJlbW92ZSh0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldERhdGEgPSBmdW5jdGlvbiBzZXREYXRhKHVwZGF0ZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9ucyRpc0RhdGFFLCBfdGhpcyRvcHRpb25zO1xuXG4gICAgdmFyIHByZXZEYXRhID0gdGhpcy5zdGF0ZS5kYXRhOyAvLyBHZXQgdGhlIG5ldyBkYXRhXG5cbiAgICB2YXIgZGF0YSA9IGZ1bmN0aW9uYWxVcGRhdGUodXBkYXRlciwgcHJldkRhdGEpOyAvLyBVc2UgcHJldiBkYXRhIGlmIGFuIGlzRGF0YUVxdWFsIGZ1bmN0aW9uIGlzIGRlZmluZWQgYW5kIHJldHVybnMgYHRydWVgXG5cbiAgICBpZiAoKF90aGlzJG9wdGlvbnMkaXNEYXRhRSA9IChfdGhpcyRvcHRpb25zID0gdGhpcy5vcHRpb25zKS5pc0RhdGFFcXVhbCkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnMkaXNEYXRhRS5jYWxsKF90aGlzJG9wdGlvbnMsIHByZXZEYXRhLCBkYXRhKSkge1xuICAgICAgZGF0YSA9IHByZXZEYXRhO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnN0cnVjdHVyYWxTaGFyaW5nICE9PSBmYWxzZSkge1xuICAgICAgLy8gU3RydWN0dXJhbGx5IHNoYXJlIGRhdGEgYmV0d2VlbiBwcmV2IGFuZCBuZXcgZGF0YSBpZiBuZWVkZWRcbiAgICAgIGRhdGEgPSByZXBsYWNlRXF1YWxEZWVwKHByZXZEYXRhLCBkYXRhKTtcbiAgICB9IC8vIFNldCBkYXRhIGFuZCBtYXJrIGl0IGFzIGNhY2hlZFxuXG5cbiAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICBkYXRhVXBkYXRlZEF0OiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnVwZGF0ZWRBdFxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIF9wcm90by5zZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlLCBzZXRTdGF0ZU9wdGlvbnMpIHtcbiAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdzZXRTdGF0ZScsXG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRTdGF0ZU9wdGlvbnM6IHNldFN0YXRlT3B0aW9uc1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyRyZXRyeWVyO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgKF90aGlzJHJldHJ5ZXIgPSB0aGlzLnJldHJ5ZXIpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRyZXRyeWVyLmNhbmNlbChvcHRpb25zKTtcbiAgICByZXR1cm4gcHJvbWlzZSA/IHByb21pc2UudGhlbihub29wKS5jYXRjaChub29wKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0aGlzLmNsZWFyR2NUaW1lb3V0KCk7XG4gICAgdGhpcy5jYW5jZWwoe1xuICAgICAgc2lsZW50OiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzQWN0aXZlID0gZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLnNvbWUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXIub3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaXNGZXRjaGluZyA9IGZ1bmN0aW9uIGlzRmV0Y2hpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNGZXRjaGluZztcbiAgfTtcblxuICBfcHJvdG8uaXNTdGFsZSA9IGZ1bmN0aW9uIGlzU3RhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNJbnZhbGlkYXRlZCB8fCAhdGhpcy5zdGF0ZS5kYXRhVXBkYXRlZEF0IHx8IHRoaXMub2JzZXJ2ZXJzLnNvbWUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXIuZ2V0Q3VycmVudFJlc3VsdCgpLmlzU3RhbGU7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzU3RhbGVCeVRpbWUgPSBmdW5jdGlvbiBpc1N0YWxlQnlUaW1lKHN0YWxlVGltZSkge1xuICAgIGlmIChzdGFsZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhbGVUaW1lID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0ludmFsaWRhdGVkIHx8ICF0aGlzLnN0YXRlLmRhdGFVcGRhdGVkQXQgfHwgIXRpbWVVbnRpbFN0YWxlKHRoaXMuc3RhdGUuZGF0YVVwZGF0ZWRBdCwgc3RhbGVUaW1lKTtcbiAgfTtcblxuICBfcHJvdG8ub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgdmFyIF90aGlzJHJldHJ5ZXIyO1xuXG4gICAgdmFyIG9ic2VydmVyID0gdGhpcy5vYnNlcnZlcnMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHguc2hvdWxkRmV0Y2hPbldpbmRvd0ZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgIG9ic2VydmVyLnJlZmV0Y2goKTtcbiAgICB9IC8vIENvbnRpbnVlIGZldGNoIGlmIGN1cnJlbnRseSBwYXVzZWRcblxuXG4gICAgKF90aGlzJHJldHJ5ZXIyID0gdGhpcy5yZXRyeWVyKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcmV0cnllcjIuY29udGludWUoKTtcbiAgfTtcblxuICBfcHJvdG8ub25PbmxpbmUgPSBmdW5jdGlvbiBvbk9ubGluZSgpIHtcbiAgICB2YXIgX3RoaXMkcmV0cnllcjM7XG5cbiAgICB2YXIgb2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVycy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geC5zaG91bGRGZXRjaE9uUmVjb25uZWN0KCk7XG4gICAgfSk7XG5cbiAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgIG9ic2VydmVyLnJlZmV0Y2goKTtcbiAgICB9IC8vIENvbnRpbnVlIGZldGNoIGlmIGN1cnJlbnRseSBwYXVzZWRcblxuXG4gICAgKF90aGlzJHJldHJ5ZXIzID0gdGhpcy5yZXRyeWVyKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcmV0cnllcjMuY29udGludWUoKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiBhZGRPYnNlcnZlcihvYnNlcnZlcikge1xuICAgIGlmICh0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpOyAvLyBTdG9wIHRoZSBxdWVyeSBmcm9tIGJlaW5nIGdhcmJhZ2UgY29sbGVjdGVkXG5cbiAgICAgIHRoaXMuY2xlYXJHY1RpbWVvdXQoKTtcbiAgICAgIHRoaXMuY2FjaGUubm90aWZ5KHtcbiAgICAgICAgdHlwZTogJ29ic2VydmVyQWRkZWQnLFxuICAgICAgICBxdWVyeTogdGhpcyxcbiAgICAgICAgb2JzZXJ2ZXI6IG9ic2VydmVyXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcikgIT09IC0xKSB7XG4gICAgICB0aGlzLm9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCAhPT0gb2JzZXJ2ZXI7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCF0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgLy8gSWYgdGhlIHRyYW5zcG9ydCBsYXllciBkb2VzIG5vdCBzdXBwb3J0IGNhbmNlbGxhdGlvblxuICAgICAgICAvLyB3ZSdsbCBsZXQgdGhlIHF1ZXJ5IGNvbnRpbnVlIHNvIHRoZSByZXN1bHQgY2FuIGJlIGNhY2hlZFxuICAgICAgICBpZiAodGhpcy5yZXRyeWVyKSB7XG4gICAgICAgICAgaWYgKHRoaXMucmV0cnllci5pc1RyYW5zcG9ydENhbmNlbGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmV0cnllci5jYW5jZWwoe1xuICAgICAgICAgICAgICByZXZlcnQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJldHJ5ZXIuY2FuY2VsUmV0cnkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jYWNoZVRpbWUpIHtcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlR2MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhY2hlLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhY2hlLm5vdGlmeSh7XG4gICAgICAgIHR5cGU6ICdvYnNlcnZlclJlbW92ZWQnLFxuICAgICAgICBxdWVyeTogdGhpcyxcbiAgICAgICAgb2JzZXJ2ZXI6IG9ic2VydmVyXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldE9ic2VydmVyc0NvdW50ID0gZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJzQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aDtcbiAgfTtcblxuICBfcHJvdG8uaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzSW52YWxpZGF0ZWQpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnaW52YWxpZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZmV0Y2ggPSBmdW5jdGlvbiBmZXRjaChvcHRpb25zLCBmZXRjaE9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcyxcbiAgICAgICAgX3RoaXMkb3B0aW9ucyRiZWhhdmlvLFxuICAgICAgICBfY29udGV4dCRmZXRjaE9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc0ZldGNoaW5nKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhVXBkYXRlZEF0ICYmIChmZXRjaE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGZldGNoT3B0aW9ucy5jYW5jZWxSZWZldGNoKSkge1xuICAgICAgICAvLyBTaWxlbnRseSBjYW5jZWwgY3VycmVudCBmZXRjaCBpZiB0aGUgdXNlciB3YW50cyB0byBjYW5jZWwgcmVmZXRjaGVzXG4gICAgICAgIHRoaXMuY2FuY2VsKHtcbiAgICAgICAgICBzaWxlbnQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvbWlzZSkge1xuICAgICAgICAvLyBSZXR1cm4gY3VycmVudCBwcm9taXNlIGlmIHdlIGFyZSBhbHJlYWR5IGZldGNoaW5nXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gICAgICB9XG4gICAgfSAvLyBVcGRhdGUgY29uZmlnIGlmIHBhc3NlZCwgb3RoZXJ3aXNlIHRoZSBjb25maWcgZnJvbSB0aGUgbGFzdCBleGVjdXRpb24gaXMgdXNlZFxuXG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIH0gLy8gVXNlIHRoZSBvcHRpb25zIGZyb20gdGhlIGZpcnN0IG9ic2VydmVyIHdpdGggYSBxdWVyeSBmdW5jdGlvbiBpZiBubyBmdW5jdGlvbiBpcyBmb3VuZC5cbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgcXVlcnkgaXMgaHlkcmF0ZWQgb3IgY3JlYXRlZCB3aXRoIHNldFF1ZXJ5RGF0YS5cblxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMucXVlcnlGbikge1xuICAgICAgdmFyIG9ic2VydmVyID0gdGhpcy5vYnNlcnZlcnMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC5vcHRpb25zLnF1ZXJ5Rm47XG4gICAgICB9KTtcblxuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvYnNlcnZlci5vcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcXVlcnlLZXkgPSBlbnN1cmVRdWVyeUtleUFycmF5KHRoaXMucXVlcnlLZXkpOyAvLyBDcmVhdGUgcXVlcnkgZnVuY3Rpb24gY29udGV4dFxuXG4gICAgdmFyIHF1ZXJ5Rm5Db250ZXh0ID0ge1xuICAgICAgcXVlcnlLZXk6IHF1ZXJ5S2V5LFxuICAgICAgcGFnZVBhcmFtOiB1bmRlZmluZWQsXG4gICAgICBtZXRhOiB0aGlzLm1ldGFcbiAgICB9OyAvLyBDcmVhdGUgZmV0Y2ggZnVuY3Rpb25cblxuICAgIHZhciBmZXRjaEZuID0gZnVuY3Rpb24gZmV0Y2hGbigpIHtcbiAgICAgIHJldHVybiBfdGhpczIub3B0aW9ucy5xdWVyeUZuID8gX3RoaXMyLm9wdGlvbnMucXVlcnlGbihxdWVyeUZuQ29udGV4dCkgOiBQcm9taXNlLnJlamVjdCgnTWlzc2luZyBxdWVyeUZuJyk7XG4gICAgfTsgLy8gVHJpZ2dlciBiZWhhdmlvciBob29rXG5cblxuICAgIHZhciBjb250ZXh0ID0ge1xuICAgICAgZmV0Y2hPcHRpb25zOiBmZXRjaE9wdGlvbnMsXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICBxdWVyeUtleTogcXVlcnlLZXksXG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgIGZldGNoRm46IGZldGNoRm4sXG4gICAgICBtZXRhOiB0aGlzLm1ldGFcbiAgICB9O1xuXG4gICAgaWYgKChfdGhpcyRvcHRpb25zJGJlaGF2aW8gPSB0aGlzLm9wdGlvbnMuYmVoYXZpb3IpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zJGJlaGF2aW8ub25GZXRjaCkge1xuICAgICAgdmFyIF90aGlzJG9wdGlvbnMkYmVoYXZpbzI7XG5cbiAgICAgIChfdGhpcyRvcHRpb25zJGJlaGF2aW8yID0gdGhpcy5vcHRpb25zLmJlaGF2aW9yKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9ucyRiZWhhdmlvMi5vbkZldGNoKGNvbnRleHQpO1xuICAgIH0gLy8gU3RvcmUgc3RhdGUgaW4gY2FzZSB0aGUgY3VycmVudCBmZXRjaCBuZWVkcyB0byBiZSByZXZlcnRlZFxuXG5cbiAgICB0aGlzLnJldmVydFN0YXRlID0gdGhpcy5zdGF0ZTsgLy8gU2V0IHRvIGZldGNoaW5nIHN0YXRlIGlmIG5vdCBhbHJlYWR5IGluIGl0XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNGZXRjaGluZyB8fCB0aGlzLnN0YXRlLmZldGNoTWV0YSAhPT0gKChfY29udGV4dCRmZXRjaE9wdGlvbnMgPSBjb250ZXh0LmZldGNoT3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb250ZXh0JGZldGNoT3B0aW9ucy5tZXRhKSkge1xuICAgICAgdmFyIF9jb250ZXh0JGZldGNoT3B0aW9uczI7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnZmV0Y2gnLFxuICAgICAgICBtZXRhOiAoX2NvbnRleHQkZmV0Y2hPcHRpb25zMiA9IGNvbnRleHQuZmV0Y2hPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX2NvbnRleHQkZmV0Y2hPcHRpb25zMi5tZXRhXG4gICAgICB9KTtcbiAgICB9IC8vIFRyeSB0byBmZXRjaCB0aGUgZGF0YVxuXG5cbiAgICB0aGlzLnJldHJ5ZXIgPSBuZXcgUmV0cnllcih7XG4gICAgICBmbjogY29udGV4dC5mZXRjaEZuLFxuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBfdGhpczIuc2V0RGF0YShkYXRhKTsgLy8gTm90aWZ5IGNhY2hlIGNhbGxiYWNrXG5cblxuICAgICAgICBfdGhpczIuY2FjaGUuY29uZmlnLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLmNhY2hlLmNvbmZpZy5vblN1Y2Nlc3MoZGF0YSwgX3RoaXMyKTsgLy8gUmVtb3ZlIHF1ZXJ5IGFmdGVyIGZldGNoaW5nIGlmIGNhY2hlIHRpbWUgaXMgMFxuXG4gICAgICAgIGlmIChfdGhpczIuY2FjaGVUaW1lID09PSAwKSB7XG4gICAgICAgICAgX3RoaXMyLm9wdGlvbmFsUmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgIC8vIE9wdGltaXN0aWNhbGx5IHVwZGF0ZSBzdGF0ZSBpZiBuZWVkZWRcbiAgICAgICAgaWYgKCEoaXNDYW5jZWxsZWRFcnJvcihlcnJvcikgJiYgZXJyb3Iuc2lsZW50KSkge1xuICAgICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgICAgLy8gTm90aWZ5IGNhY2hlIGNhbGxiYWNrXG4gICAgICAgICAgX3RoaXMyLmNhY2hlLmNvbmZpZy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIuY2FjaGUuY29uZmlnLm9uRXJyb3IoZXJyb3IsIF90aGlzMik7IC8vIExvZyBlcnJvclxuXG4gICAgICAgICAgZ2V0TG9nZ2VyKCkuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9IC8vIFJlbW92ZSBxdWVyeSBhZnRlciBmZXRjaGluZyBpZiBjYWNoZSB0aW1lIGlzIDBcblxuXG4gICAgICAgIGlmIChfdGhpczIuY2FjaGVUaW1lID09PSAwKSB7XG4gICAgICAgICAgX3RoaXMyLm9wdGlvbmFsUmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkZhaWw6IGZ1bmN0aW9uIG9uRmFpbCgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnZmFpbGVkJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvblBhdXNlOiBmdW5jdGlvbiBvblBhdXNlKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdwYXVzZSdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25Db250aW51ZTogZnVuY3Rpb24gb25Db250aW51ZSgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnY29udGludWUnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJldHJ5OiBjb250ZXh0Lm9wdGlvbnMucmV0cnksXG4gICAgICByZXRyeURlbGF5OiBjb250ZXh0Lm9wdGlvbnMucmV0cnlEZWxheVxuICAgIH0pO1xuICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucmV0cnllci5wcm9taXNlO1xuICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gIH07XG5cbiAgX3Byb3RvLmRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5yZWR1Y2VyKHRoaXMuc3RhdGUsIGFjdGlvbik7XG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLm9uUXVlcnlVcGRhdGUoYWN0aW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczMuY2FjaGUubm90aWZ5KHtcbiAgICAgICAgcXVlcnk6IF90aGlzMyxcbiAgICAgICAgdHlwZTogJ3F1ZXJ5VXBkYXRlZCcsXG4gICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RGVmYXVsdFN0YXRlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFN0YXRlKG9wdGlvbnMpIHtcbiAgICB2YXIgZGF0YSA9IHR5cGVvZiBvcHRpb25zLmluaXRpYWxEYXRhID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5pbml0aWFsRGF0YSgpIDogb3B0aW9ucy5pbml0aWFsRGF0YTtcbiAgICB2YXIgaGFzSW5pdGlhbERhdGEgPSB0eXBlb2Ygb3B0aW9ucy5pbml0aWFsRGF0YSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgdmFyIGluaXRpYWxEYXRhVXBkYXRlZEF0ID0gaGFzSW5pdGlhbERhdGEgPyB0eXBlb2Ygb3B0aW9ucy5pbml0aWFsRGF0YVVwZGF0ZWRBdCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuaW5pdGlhbERhdGFVcGRhdGVkQXQoKSA6IG9wdGlvbnMuaW5pdGlhbERhdGFVcGRhdGVkQXQgOiAwO1xuICAgIHZhciBoYXNEYXRhID0gdHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZGF0YVVwZGF0ZUNvdW50OiAwLFxuICAgICAgZGF0YVVwZGF0ZWRBdDogaGFzRGF0YSA/IGluaXRpYWxEYXRhVXBkYXRlZEF0ICE9IG51bGwgPyBpbml0aWFsRGF0YVVwZGF0ZWRBdCA6IERhdGUubm93KCkgOiAwLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBlcnJvclVwZGF0ZUNvdW50OiAwLFxuICAgICAgZXJyb3JVcGRhdGVkQXQ6IDAsXG4gICAgICBmZXRjaEZhaWx1cmVDb3VudDogMCxcbiAgICAgIGZldGNoTWV0YTogbnVsbCxcbiAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgaXNJbnZhbGlkYXRlZDogZmFsc2UsXG4gICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICBzdGF0dXM6IGhhc0RhdGEgPyAnc3VjY2VzcycgOiAnaWRsZSdcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5yZWR1Y2VyID0gZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgdmFyIF9hY3Rpb24kbWV0YSwgX2FjdGlvbiRkYXRhVXBkYXRlZEF0O1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnZmFpbGVkJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGZldGNoRmFpbHVyZUNvdW50OiBzdGF0ZS5mZXRjaEZhaWx1cmVDb3VudCArIDFcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzUGF1c2VkOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjb250aW51ZSc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1BhdXNlZDogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2ZldGNoJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGZldGNoRmFpbHVyZUNvdW50OiAwLFxuICAgICAgICAgIGZldGNoTWV0YTogKF9hY3Rpb24kbWV0YSA9IGFjdGlvbi5tZXRhKSAhPSBudWxsID8gX2FjdGlvbiRtZXRhIDogbnVsbCxcbiAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgICBzdGF0dXM6ICFzdGF0ZS5kYXRhVXBkYXRlZEF0ID8gJ2xvYWRpbmcnIDogc3RhdGUuc3RhdHVzXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICAgIGRhdGFVcGRhdGVDb3VudDogc3RhdGUuZGF0YVVwZGF0ZUNvdW50ICsgMSxcbiAgICAgICAgICBkYXRhVXBkYXRlZEF0OiAoX2FjdGlvbiRkYXRhVXBkYXRlZEF0ID0gYWN0aW9uLmRhdGFVcGRhdGVkQXQpICE9IG51bGwgPyBfYWN0aW9uJGRhdGFVcGRhdGVkQXQgOiBEYXRlLm5vdygpLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIGZldGNoRmFpbHVyZUNvdW50OiAwLFxuICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgIGlzSW52YWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICB2YXIgZXJyb3IgPSBhY3Rpb24uZXJyb3I7XG5cbiAgICAgICAgaWYgKGlzQ2FuY2VsbGVkRXJyb3IoZXJyb3IpICYmIGVycm9yLnJldmVydCAmJiB0aGlzLnJldmVydFN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLnJldmVydFN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgZXJyb3JVcGRhdGVDb3VudDogc3RhdGUuZXJyb3JVcGRhdGVDb3VudCArIDEsXG4gICAgICAgICAgZXJyb3JVcGRhdGVkQXQ6IERhdGUubm93KCksXG4gICAgICAgICAgZmV0Y2hGYWlsdXJlQ291bnQ6IHN0YXRlLmZldGNoRmFpbHVyZUNvdW50ICsgMSxcbiAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdpbnZhbGlkYXRlJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzSW52YWxpZGF0ZWQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ3NldFN0YXRlJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgYWN0aW9uLnN0YXRlKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUXVlcnk7XG59KCk7IiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBoYXNoUXVlcnlLZXlCeU9wdGlvbnMsIG1hdGNoUXVlcnksIHBhcnNlRmlsdGVyQXJncyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuLy8gQ0xBU1NcbmV4cG9ydCB2YXIgUXVlcnlDYWNoZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShRdWVyeUNhY2hlLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBRdWVyeUNhY2hlKGNvbmZpZykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1N1YnNjcmliYWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIF90aGlzLnF1ZXJpZXMgPSBbXTtcbiAgICBfdGhpcy5xdWVyaWVzTWFwID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFF1ZXJ5Q2FjaGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5idWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKGNsaWVudCwgb3B0aW9ucywgc3RhdGUpIHtcbiAgICB2YXIgX29wdGlvbnMkcXVlcnlIYXNoO1xuXG4gICAgdmFyIHF1ZXJ5S2V5ID0gb3B0aW9ucy5xdWVyeUtleTtcbiAgICB2YXIgcXVlcnlIYXNoID0gKF9vcHRpb25zJHF1ZXJ5SGFzaCA9IG9wdGlvbnMucXVlcnlIYXNoKSAhPSBudWxsID8gX29wdGlvbnMkcXVlcnlIYXNoIDogaGFzaFF1ZXJ5S2V5QnlPcHRpb25zKHF1ZXJ5S2V5LCBvcHRpb25zKTtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLmdldChxdWVyeUhhc2gpO1xuXG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoe1xuICAgICAgICBjYWNoZTogdGhpcyxcbiAgICAgICAgcXVlcnlLZXk6IHF1ZXJ5S2V5LFxuICAgICAgICBxdWVyeUhhc2g6IHF1ZXJ5SGFzaCxcbiAgICAgICAgb3B0aW9uczogY2xpZW50LmRlZmF1bHRRdWVyeU9wdGlvbnMob3B0aW9ucyksXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IGNsaWVudC5nZXRRdWVyeURlZmF1bHRzKHF1ZXJ5S2V5KSxcbiAgICAgICAgbWV0YTogb3B0aW9ucy5tZXRhXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChxdWVyeSkge1xuICAgIGlmICghdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5LnF1ZXJ5SGFzaF0pIHtcbiAgICAgIHRoaXMucXVlcmllc01hcFtxdWVyeS5xdWVyeUhhc2hdID0gcXVlcnk7XG4gICAgICB0aGlzLnF1ZXJpZXMucHVzaChxdWVyeSk7XG4gICAgICB0aGlzLm5vdGlmeSh7XG4gICAgICAgIHR5cGU6ICdxdWVyeUFkZGVkJyxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShxdWVyeSkge1xuICAgIHZhciBxdWVyeUluTWFwID0gdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5LnF1ZXJ5SGFzaF07XG5cbiAgICBpZiAocXVlcnlJbk1hcCkge1xuICAgICAgcXVlcnkuZGVzdHJveSgpO1xuICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5xdWVyaWVzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCAhPT0gcXVlcnk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHF1ZXJ5SW5NYXAgPT09IHF1ZXJ5KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXJpZXNNYXBbcXVlcnkucXVlcnlIYXNoXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ub3RpZnkoe1xuICAgICAgICB0eXBlOiAncXVlcnlSZW1vdmVkJyxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIF90aGlzMi5yZW1vdmUocXVlcnkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldChxdWVyeUhhc2gpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5SGFzaF07XG4gIH07XG5cbiAgX3Byb3RvLmdldEFsbCA9IGZ1bmN0aW9uIGdldEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyaWVzO1xuICB9O1xuXG4gIF9wcm90by5maW5kID0gZnVuY3Rpb24gZmluZChhcmcxLCBhcmcyKSB7XG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3MgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzWzBdO1xuXG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJzLmV4YWN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZmlsdGVycy5leGFjdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucXVlcmllcy5maW5kKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgcmV0dXJuIG1hdGNoUXVlcnkoZmlsdGVycywgcXVlcnkpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5maW5kQWxsID0gZnVuY3Rpb24gZmluZEFsbChhcmcxLCBhcmcyKSB7XG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3MyID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnczJbMF07XG5cbiAgICByZXR1cm4gZmlsdGVycyA/IHRoaXMucXVlcmllcy5maWx0ZXIoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbWF0Y2hRdWVyeShmaWx0ZXJzLCBxdWVyeSk7XG4gICAgfSkgOiB0aGlzLnF1ZXJpZXM7XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeShldmVudCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5vbkZvY3VzID0gZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM0LnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnkub25Gb2N1cygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uT25saW5lID0gZnVuY3Rpb24gb25PbmxpbmUoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNS5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5Lm9uT25saW5lKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUXVlcnlDYWNoZTtcbn0oU3Vic2NyaWJhYmxlKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGhhc2hRdWVyeUtleSwgbm9vcCwgcGFyc2VGaWx0ZXJBcmdzLCBwYXJzZVF1ZXJ5QXJncywgcGFydGlhbE1hdGNoS2V5LCBoYXNoUXVlcnlLZXlCeU9wdGlvbnMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFF1ZXJ5Q2FjaGUgfSBmcm9tICcuL3F1ZXJ5Q2FjaGUnO1xuaW1wb3J0IHsgTXV0YXRpb25DYWNoZSB9IGZyb20gJy4vbXV0YXRpb25DYWNoZSc7XG5pbXBvcnQgeyBmb2N1c01hbmFnZXIgfSBmcm9tICcuL2ZvY3VzTWFuYWdlcic7XG5pbXBvcnQgeyBvbmxpbmVNYW5hZ2VyIH0gZnJvbSAnLi9vbmxpbmVNYW5hZ2VyJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgaW5maW5pdGVRdWVyeUJlaGF2aW9yIH0gZnJvbSAnLi9pbmZpbml0ZVF1ZXJ5QmVoYXZpb3InOyAvLyBUWVBFU1xuXG4vLyBDTEFTU1xuZXhwb3J0IHZhciBRdWVyeUNsaWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFF1ZXJ5Q2xpZW50KGNvbmZpZykge1xuICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgICAgY29uZmlnID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeUNhY2hlID0gY29uZmlnLnF1ZXJ5Q2FjaGUgfHwgbmV3IFF1ZXJ5Q2FjaGUoKTtcbiAgICB0aGlzLm11dGF0aW9uQ2FjaGUgPSBjb25maWcubXV0YXRpb25DYWNoZSB8fCBuZXcgTXV0YXRpb25DYWNoZSgpO1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBjb25maWcuZGVmYXVsdE9wdGlvbnMgfHwge307XG4gICAgdGhpcy5xdWVyeURlZmF1bHRzID0gW107XG4gICAgdGhpcy5tdXRhdGlvbkRlZmF1bHRzID0gW107XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVlcnlDbGllbnQucHJvdG90eXBlO1xuXG4gIF9wcm90by5tb3VudCA9IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlRm9jdXMgPSBmb2N1c01hbmFnZXIuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChmb2N1c01hbmFnZXIuaXNGb2N1c2VkKCkgJiYgb25saW5lTWFuYWdlci5pc09ubGluZSgpKSB7XG4gICAgICAgIF90aGlzLm11dGF0aW9uQ2FjaGUub25Gb2N1cygpO1xuXG4gICAgICAgIF90aGlzLnF1ZXJ5Q2FjaGUub25Gb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudW5zdWJzY3JpYmVPbmxpbmUgPSBvbmxpbmVNYW5hZ2VyLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZm9jdXNNYW5hZ2VyLmlzRm9jdXNlZCgpICYmIG9ubGluZU1hbmFnZXIuaXNPbmxpbmUoKSkge1xuICAgICAgICBfdGhpcy5tdXRhdGlvbkNhY2hlLm9uT25saW5lKCk7XG5cbiAgICAgICAgX3RoaXMucXVlcnlDYWNoZS5vbk9ubGluZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCgpIHtcbiAgICB2YXIgX3RoaXMkdW5zdWJzY3JpYmVGb2N1LCBfdGhpcyR1bnN1YnNjcmliZU9ubGk7XG5cbiAgICAoX3RoaXMkdW5zdWJzY3JpYmVGb2N1ID0gdGhpcy51bnN1YnNjcmliZUZvY3VzKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkdW5zdWJzY3JpYmVGb2N1LmNhbGwodGhpcyk7XG4gICAgKF90aGlzJHVuc3Vic2NyaWJlT25saSA9IHRoaXMudW5zdWJzY3JpYmVPbmxpbmUpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyR1bnN1YnNjcmliZU9ubGkuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uaXNGZXRjaGluZyA9IGZ1bmN0aW9uIGlzRmV0Y2hpbmcoYXJnMSwgYXJnMikge1xuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnc1swXTtcblxuICAgIGZpbHRlcnMuZmV0Y2hpbmcgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5Q2FjaGUuZmluZEFsbChmaWx0ZXJzKS5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLmlzTXV0YXRpbmcgPSBmdW5jdGlvbiBpc011dGF0aW5nKGZpbHRlcnMpIHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbkNhY2hlLmZpbmRBbGwoX2V4dGVuZHMoe30sIGZpbHRlcnMsIHtcbiAgICAgIGZldGNoaW5nOiB0cnVlXG4gICAgfSkpLmxlbmd0aDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0UXVlcnlEYXRhID0gZnVuY3Rpb24gZ2V0UXVlcnlEYXRhKHF1ZXJ5S2V5LCBmaWx0ZXJzKSB7XG4gICAgdmFyIF90aGlzJHF1ZXJ5Q2FjaGUkZmluZDtcblxuICAgIHJldHVybiAoX3RoaXMkcXVlcnlDYWNoZSRmaW5kID0gdGhpcy5xdWVyeUNhY2hlLmZpbmQocXVlcnlLZXksIGZpbHRlcnMpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcXVlcnlDYWNoZSRmaW5kLnN0YXRlLmRhdGE7XG4gIH07XG5cbiAgX3Byb3RvLmdldFF1ZXJpZXNEYXRhID0gZnVuY3Rpb24gZ2V0UXVlcmllc0RhdGEocXVlcnlLZXlPckZpbHRlcnMpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRRdWVyeUNhY2hlKCkuZmluZEFsbChxdWVyeUtleU9yRmlsdGVycykubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgcXVlcnlLZXkgPSBfcmVmLnF1ZXJ5S2V5LFxuICAgICAgICAgIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgICAgIHZhciBkYXRhID0gc3RhdGUuZGF0YTtcbiAgICAgIHJldHVybiBbcXVlcnlLZXksIGRhdGFdO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5zZXRRdWVyeURhdGEgPSBmdW5jdGlvbiBzZXRRdWVyeURhdGEocXVlcnlLZXksIHVwZGF0ZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFyc2VkT3B0aW9ucyA9IHBhcnNlUXVlcnlBcmdzKHF1ZXJ5S2V5KTtcbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucyhwYXJzZWRPcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5xdWVyeUNhY2hlLmJ1aWxkKHRoaXMsIGRlZmF1bHRlZE9wdGlvbnMpLnNldERhdGEodXBkYXRlciwgb3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldFF1ZXJpZXNEYXRhID0gZnVuY3Rpb24gc2V0UXVlcmllc0RhdGEocXVlcnlLZXlPckZpbHRlcnMsIHVwZGF0ZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczIuZ2V0UXVlcnlDYWNoZSgpLmZpbmRBbGwocXVlcnlLZXlPckZpbHRlcnMpLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIHF1ZXJ5S2V5ID0gX3JlZjIucXVlcnlLZXk7XG4gICAgICAgIHJldHVybiBbcXVlcnlLZXksIF90aGlzMi5zZXRRdWVyeURhdGEocXVlcnlLZXksIHVwZGF0ZXIsIG9wdGlvbnMpXTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXRRdWVyeVN0YXRlID0gZnVuY3Rpb24gZ2V0UXVlcnlTdGF0ZShxdWVyeUtleSwgZmlsdGVycykge1xuICAgIHZhciBfdGhpcyRxdWVyeUNhY2hlJGZpbmQyO1xuXG4gICAgcmV0dXJuIChfdGhpcyRxdWVyeUNhY2hlJGZpbmQyID0gdGhpcy5xdWVyeUNhY2hlLmZpbmQocXVlcnlLZXksIGZpbHRlcnMpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcXVlcnlDYWNoZSRmaW5kMi5zdGF0ZTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlUXVlcmllcyA9IGZ1bmN0aW9uIHJlbW92ZVF1ZXJpZXMoYXJnMSwgYXJnMikge1xuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzMiA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3MyWzBdO1xuXG4gICAgdmFyIHF1ZXJ5Q2FjaGUgPSB0aGlzLnF1ZXJ5Q2FjaGU7XG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBxdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnlDYWNoZS5yZW1vdmUocXVlcnkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc2V0UXVlcmllcyA9IGZ1bmN0aW9uIHJlc2V0UXVlcmllcyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJnczMgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiwgYXJnMyksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzM1swXSxcbiAgICAgICAgb3B0aW9ucyA9IF9wYXJzZUZpbHRlckFyZ3MzWzFdO1xuXG4gICAgdmFyIHF1ZXJ5Q2FjaGUgPSB0aGlzLnF1ZXJ5Q2FjaGU7XG5cbiAgICB2YXIgcmVmZXRjaEZpbHRlcnMgPSBfZXh0ZW5kcyh7fSwgZmlsdGVycywge1xuICAgICAgYWN0aXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBxdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnkucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF90aGlzMy5yZWZldGNoUXVlcmllcyhyZWZldGNoRmlsdGVycywgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbFF1ZXJpZXMgPSBmdW5jdGlvbiBjYW5jZWxRdWVyaWVzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzNCA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3M0WzBdLFxuICAgICAgICBfcGFyc2VGaWx0ZXJBcmdzNCQgPSBfcGFyc2VGaWx0ZXJBcmdzNFsxXSxcbiAgICAgICAgY2FuY2VsT3B0aW9ucyA9IF9wYXJzZUZpbHRlckFyZ3M0JCA9PT0gdm9pZCAwID8ge30gOiBfcGFyc2VGaWx0ZXJBcmdzNCQ7XG5cbiAgICBpZiAodHlwZW9mIGNhbmNlbE9wdGlvbnMucmV2ZXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY2FuY2VsT3B0aW9ucy5yZXZlcnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBwcm9taXNlcyA9IG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzNC5xdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykubWFwKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICByZXR1cm4gcXVlcnkuY2FuY2VsKGNhbmNlbE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApO1xuICB9O1xuXG4gIF9wcm90by5pbnZhbGlkYXRlUXVlcmllcyA9IGZ1bmN0aW9uIGludmFsaWRhdGVRdWVyaWVzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgX3JlZjMsXG4gICAgICAgIF9maWx0ZXJzJHJlZmV0Y2hBY3RpdixcbiAgICAgICAgX2ZpbHRlcnMkcmVmZXRjaEluYWN0LFxuICAgICAgICBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3M1ID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIsIGFyZzMpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnczVbMF0sXG4gICAgICAgIG9wdGlvbnMgPSBfcGFyc2VGaWx0ZXJBcmdzNVsxXTtcblxuICAgIHZhciByZWZldGNoRmlsdGVycyA9IF9leHRlbmRzKHt9LCBmaWx0ZXJzLCB7XG4gICAgICAvLyBpZiBmaWx0ZXJzLnJlZmV0Y2hBY3RpdmUgaXMgbm90IHByb3ZpZGVkIGFuZCBmaWx0ZXJzLmFjdGl2ZSBpcyBleHBsaWNpdGx5IGZhbHNlLFxuICAgICAgLy8gZS5nLiBpbnZhbGlkYXRlUXVlcmllcyh7IGFjdGl2ZTogZmFsc2UgfSksIHdlIGRvbid0IHdhbnQgdG8gcmVmZXRjaCBhY3RpdmUgcXVlcmllc1xuICAgICAgYWN0aXZlOiAoX3JlZjMgPSAoX2ZpbHRlcnMkcmVmZXRjaEFjdGl2ID0gZmlsdGVycy5yZWZldGNoQWN0aXZlKSAhPSBudWxsID8gX2ZpbHRlcnMkcmVmZXRjaEFjdGl2IDogZmlsdGVycy5hY3RpdmUpICE9IG51bGwgPyBfcmVmMyA6IHRydWUsXG4gICAgICBpbmFjdGl2ZTogKF9maWx0ZXJzJHJlZmV0Y2hJbmFjdCA9IGZpbHRlcnMucmVmZXRjaEluYWN0aXZlKSAhPSBudWxsID8gX2ZpbHRlcnMkcmVmZXRjaEluYWN0IDogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNS5xdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnkuaW52YWxpZGF0ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfdGhpczUucmVmZXRjaFF1ZXJpZXMocmVmZXRjaEZpbHRlcnMsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZWZldGNoUXVlcmllcyA9IGZ1bmN0aW9uIHJlZmV0Y2hRdWVyaWVzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzNiA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3M2WzBdLFxuICAgICAgICBvcHRpb25zID0gX3BhcnNlRmlsdGVyQXJnczZbMV07XG5cbiAgICB2YXIgcHJvbWlzZXMgPSBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczYucXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLm1hcChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5LmZldGNoKHVuZGVmaW5lZCwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICByZWZldGNoUGFnZTogZmlsdGVycyA9PSBudWxsID8gdm9pZCAwIDogZmlsdGVycy5yZWZldGNoUGFnZVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihub29wKTtcblxuICAgIGlmICghKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudGhyb3dPbkVycm9yKSkge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UuY2F0Y2gobm9vcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoUXVlcnkgPSBmdW5jdGlvbiBmZXRjaFF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgcGFyc2VkT3B0aW9ucyA9IHBhcnNlUXVlcnlBcmdzKGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zKHBhcnNlZE9wdGlvbnMpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vdGFubmVybGluc2xleS9yZWFjdC1xdWVyeS9pc3N1ZXMvNjUyXG5cbiAgICBpZiAodHlwZW9mIGRlZmF1bHRlZE9wdGlvbnMucmV0cnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLnJldHJ5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeUNhY2hlLmJ1aWxkKHRoaXMsIGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIHJldHVybiBxdWVyeS5pc1N0YWxlQnlUaW1lKGRlZmF1bHRlZE9wdGlvbnMuc3RhbGVUaW1lKSA/IHF1ZXJ5LmZldGNoKGRlZmF1bHRlZE9wdGlvbnMpIDogUHJvbWlzZS5yZXNvbHZlKHF1ZXJ5LnN0YXRlLmRhdGEpO1xuICB9O1xuXG4gIF9wcm90by5wcmVmZXRjaFF1ZXJ5ID0gZnVuY3Rpb24gcHJlZmV0Y2hRdWVyeShhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2hRdWVyeShhcmcxLCBhcmcyLCBhcmczKS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaEluZmluaXRlUXVlcnkgPSBmdW5jdGlvbiBmZXRjaEluZmluaXRlUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHZhciBwYXJzZWRPcHRpb25zID0gcGFyc2VRdWVyeUFyZ3MoYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgcGFyc2VkT3B0aW9ucy5iZWhhdmlvciA9IGluZmluaXRlUXVlcnlCZWhhdmlvcigpO1xuICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnkocGFyc2VkT3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnByZWZldGNoSW5maW5pdGVRdWVyeSA9IGZ1bmN0aW9uIHByZWZldGNoSW5maW5pdGVRdWVyeShhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2hJbmZpbml0ZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpLnRoZW4obm9vcCkuY2F0Y2gobm9vcCk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbE11dGF0aW9ucyA9IGZ1bmN0aW9uIGNhbmNlbE11dGF0aW9ucygpIHtcbiAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlcyA9IG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzNy5tdXRhdGlvbkNhY2hlLmdldEFsbCgpLm1hcChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIG11dGF0aW9uLmNhbmNlbCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApO1xuICB9O1xuXG4gIF9wcm90by5yZXN1bWVQYXVzZWRNdXRhdGlvbnMgPSBmdW5jdGlvbiByZXN1bWVQYXVzZWRNdXRhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TXV0YXRpb25DYWNoZSgpLnJlc3VtZVBhdXNlZE11dGF0aW9ucygpO1xuICB9O1xuXG4gIF9wcm90by5leGVjdXRlTXV0YXRpb24gPSBmdW5jdGlvbiBleGVjdXRlTXV0YXRpb24ob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uQ2FjaGUuYnVpbGQodGhpcywgb3B0aW9ucykuZXhlY3V0ZSgpO1xuICB9O1xuXG4gIF9wcm90by5nZXRRdWVyeUNhY2hlID0gZnVuY3Rpb24gZ2V0UXVlcnlDYWNoZSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeUNhY2hlO1xuICB9O1xuXG4gIF9wcm90by5nZXRNdXRhdGlvbkNhY2hlID0gZnVuY3Rpb24gZ2V0TXV0YXRpb25DYWNoZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbkNhY2hlO1xuICB9O1xuXG4gIF9wcm90by5nZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRPcHRpb25zO1xuICB9O1xuXG4gIF9wcm90by5zZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0gb3B0aW9ucztcbiAgfTtcblxuICBfcHJvdG8uc2V0UXVlcnlEZWZhdWx0cyA9IGZ1bmN0aW9uIHNldFF1ZXJ5RGVmYXVsdHMocXVlcnlLZXksIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5xdWVyeURlZmF1bHRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBoYXNoUXVlcnlLZXkocXVlcnlLZXkpID09PSBoYXNoUXVlcnlLZXkoeC5xdWVyeUtleSk7XG4gICAgfSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXN1bHQuZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnF1ZXJ5RGVmYXVsdHMucHVzaCh7XG4gICAgICAgIHF1ZXJ5S2V5OiBxdWVyeUtleSxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IG9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0UXVlcnlEZWZhdWx0cyA9IGZ1bmN0aW9uIGdldFF1ZXJ5RGVmYXVsdHMocXVlcnlLZXkpIHtcbiAgICB2YXIgX3RoaXMkcXVlcnlEZWZhdWx0cyRmO1xuXG4gICAgcmV0dXJuIHF1ZXJ5S2V5ID8gKF90aGlzJHF1ZXJ5RGVmYXVsdHMkZiA9IHRoaXMucXVlcnlEZWZhdWx0cy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcGFydGlhbE1hdGNoS2V5KHF1ZXJ5S2V5LCB4LnF1ZXJ5S2V5KTtcbiAgICB9KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHF1ZXJ5RGVmYXVsdHMkZi5kZWZhdWx0T3B0aW9ucyA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8uc2V0TXV0YXRpb25EZWZhdWx0cyA9IGZ1bmN0aW9uIHNldE11dGF0aW9uRGVmYXVsdHMobXV0YXRpb25LZXksIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5tdXRhdGlvbkRlZmF1bHRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBoYXNoUXVlcnlLZXkobXV0YXRpb25LZXkpID09PSBoYXNoUXVlcnlLZXkoeC5tdXRhdGlvbktleSk7XG4gICAgfSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXN1bHQuZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm11dGF0aW9uRGVmYXVsdHMucHVzaCh7XG4gICAgICAgIG11dGF0aW9uS2V5OiBtdXRhdGlvbktleSxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IG9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0TXV0YXRpb25EZWZhdWx0cyA9IGZ1bmN0aW9uIGdldE11dGF0aW9uRGVmYXVsdHMobXV0YXRpb25LZXkpIHtcbiAgICB2YXIgX3RoaXMkbXV0YXRpb25EZWZhdWx0O1xuXG4gICAgcmV0dXJuIG11dGF0aW9uS2V5ID8gKF90aGlzJG11dGF0aW9uRGVmYXVsdCA9IHRoaXMubXV0YXRpb25EZWZhdWx0cy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcGFydGlhbE1hdGNoS2V5KG11dGF0aW9uS2V5LCB4Lm11dGF0aW9uS2V5KTtcbiAgICB9KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG11dGF0aW9uRGVmYXVsdC5kZWZhdWx0T3B0aW9ucyA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8uZGVmYXVsdFF1ZXJ5T3B0aW9ucyA9IGZ1bmN0aW9uIGRlZmF1bHRRdWVyeU9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLl9kZWZhdWx0ZWQpIHtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMucXVlcmllcywgdGhpcy5nZXRRdWVyeURlZmF1bHRzKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucXVlcnlLZXkpLCBvcHRpb25zLCB7XG4gICAgICBfZGVmYXVsdGVkOiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAoIWRlZmF1bHRlZE9wdGlvbnMucXVlcnlIYXNoICYmIGRlZmF1bHRlZE9wdGlvbnMucXVlcnlLZXkpIHtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMucXVlcnlIYXNoID0gaGFzaFF1ZXJ5S2V5QnlPcHRpb25zKGRlZmF1bHRlZE9wdGlvbnMucXVlcnlLZXksIGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0ZWRPcHRpb25zO1xuICB9O1xuXG4gIF9wcm90by5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMgPSBmdW5jdGlvbiBkZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRRdWVyeU9wdGlvbnMob3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmRlZmF1bHRNdXRhdGlvbk9wdGlvbnMgPSBmdW5jdGlvbiBkZWZhdWx0TXV0YXRpb25PcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5fZGVmYXVsdGVkKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRpb25zLCB0aGlzLmdldE11dGF0aW9uRGVmYXVsdHMob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5tdXRhdGlvbktleSksIG9wdGlvbnMsIHtcbiAgICAgIF9kZWZhdWx0ZWQ6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB0aGlzLnF1ZXJ5Q2FjaGUuY2xlYXIoKTtcbiAgICB0aGlzLm11dGF0aW9uQ2FjaGUuY2xlYXIoKTtcbiAgfTtcblxuICByZXR1cm4gUXVlcnlDbGllbnQ7XG59KCk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IGlzU2VydmVyLCBpc1ZhbGlkVGltZW91dCwgbm9vcCwgcmVwbGFjZUVxdWFsRGVlcCwgc2hhbGxvd0VxdWFsT2JqZWN0cywgdGltZVVudGlsU3RhbGUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgZm9jdXNNYW5hZ2VyIH0gZnJvbSAnLi9mb2N1c01hbmFnZXInO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgaXNDYW5jZWxsZWRFcnJvciB9IGZyb20gJy4vcmV0cnllcic7XG5leHBvcnQgdmFyIFF1ZXJ5T2JzZXJ2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoUXVlcnlPYnNlcnZlciwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gUXVlcnlPYnNlcnZlcihjbGllbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9TdWJzY3JpYmFibGUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBfdGhpcy50cmFja2VkUHJvcHMgPSBbXTtcbiAgICBfdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yID0gbnVsbDtcblxuICAgIF90aGlzLmJpbmRNZXRob2RzKCk7XG5cbiAgICBfdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFF1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5iaW5kTWV0aG9kcyA9IGZ1bmN0aW9uIGJpbmRNZXRob2RzKCkge1xuICAgIHRoaXMucmVtb3ZlID0gdGhpcy5yZW1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZmV0Y2ggPSB0aGlzLnJlZmV0Y2guYmluZCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRRdWVyeS5hZGRPYnNlcnZlcih0aGlzKTtcblxuICAgICAgaWYgKHNob3VsZEZldGNoT25Nb3VudCh0aGlzLmN1cnJlbnRRdWVyeSwgdGhpcy5vcHRpb25zKSkge1xuICAgICAgICB0aGlzLmV4ZWN1dGVGZXRjaCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVRpbWVycygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25VbnN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uVW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2hvdWxkRmV0Y2hPblJlY29ubmVjdCA9IGZ1bmN0aW9uIHNob3VsZEZldGNoT25SZWNvbm5lY3QoKSB7XG4gICAgcmV0dXJuIF9zaG91bGRGZXRjaE9uUmVjb25uZWN0KHRoaXMuY3VycmVudFF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5zaG91bGRGZXRjaE9uV2luZG93Rm9jdXMgPSBmdW5jdGlvbiBzaG91bGRGZXRjaE9uV2luZG93Rm9jdXMoKSB7XG4gICAgcmV0dXJuIF9zaG91bGRGZXRjaE9uV2luZG93Rm9jdXModGhpcy5jdXJyZW50UXVlcnksIHRoaXMub3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5jbGVhclRpbWVycygpO1xuICAgIHRoaXMuY3VycmVudFF1ZXJ5LnJlbW92ZU9ic2VydmVyKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5zZXRPcHRpb25zID0gZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zLCBub3RpZnlPcHRpb25zKSB7XG4gICAgdmFyIHByZXZPcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIHZhciBwcmV2UXVlcnkgPSB0aGlzLmN1cnJlbnRRdWVyeTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmVuYWJsZWQgIT09ICdib29sZWFuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBlbmFibGVkIHRvIGJlIGEgYm9vbGVhbicpO1xuICAgIH0gLy8gS2VlcCBwcmV2aW91cyBxdWVyeSBrZXkgaWYgdGhlIHVzZXIgZG9lcyBub3Qgc3VwcGx5IG9uZVxuXG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5xdWVyeUtleSkge1xuICAgICAgdGhpcy5vcHRpb25zLnF1ZXJ5S2V5ID0gcHJldk9wdGlvbnMucXVlcnlLZXk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgIHZhciBtb3VudGVkID0gdGhpcy5oYXNMaXN0ZW5lcnMoKTsgLy8gRmV0Y2ggaWYgdGhlcmUgYXJlIHN1YnNjcmliZXJzXG5cbiAgICBpZiAobW91bnRlZCAmJiBzaG91bGRGZXRjaE9wdGlvbmFsbHkodGhpcy5jdXJyZW50UXVlcnksIHByZXZRdWVyeSwgdGhpcy5vcHRpb25zLCBwcmV2T3B0aW9ucykpIHtcbiAgICAgIHRoaXMuZXhlY3V0ZUZldGNoKCk7XG4gICAgfSAvLyBVcGRhdGUgcmVzdWx0XG5cblxuICAgIHRoaXMudXBkYXRlUmVzdWx0KG5vdGlmeU9wdGlvbnMpOyAvLyBVcGRhdGUgc3RhbGUgaW50ZXJ2YWwgaWYgbmVlZGVkXG5cbiAgICBpZiAobW91bnRlZCAmJiAodGhpcy5jdXJyZW50UXVlcnkgIT09IHByZXZRdWVyeSB8fCB0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gcHJldk9wdGlvbnMuZW5hYmxlZCB8fCB0aGlzLm9wdGlvbnMuc3RhbGVUaW1lICE9PSBwcmV2T3B0aW9ucy5zdGFsZVRpbWUpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YWxlVGltZW91dCgpO1xuICAgIH1cblxuICAgIHZhciBuZXh0UmVmZXRjaEludGVydmFsID0gdGhpcy5jb21wdXRlUmVmZXRjaEludGVydmFsKCk7IC8vIFVwZGF0ZSByZWZldGNoIGludGVydmFsIGlmIG5lZWRlZFxuXG4gICAgaWYgKG1vdW50ZWQgJiYgKHRoaXMuY3VycmVudFF1ZXJ5ICE9PSBwcmV2UXVlcnkgfHwgdGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHByZXZPcHRpb25zLmVuYWJsZWQgfHwgbmV4dFJlZmV0Y2hJbnRlcnZhbCAhPT0gdGhpcy5jdXJyZW50UmVmZXRjaEludGVydmFsKSkge1xuICAgICAgdGhpcy51cGRhdGVSZWZldGNoSW50ZXJ2YWwobmV4dFJlZmV0Y2hJbnRlcnZhbCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRPcHRpbWlzdGljUmVzdWx0ID0gZnVuY3Rpb24gZ2V0T3B0aW1pc3RpY1Jlc3VsdChvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSB0aGlzLmNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5jbGllbnQuZ2V0UXVlcnlDYWNoZSgpLmJ1aWxkKHRoaXMuY2xpZW50LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXN1bHQocXVlcnksIGRlZmF1bHRlZE9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5nZXRDdXJyZW50UmVzdWx0ID0gZnVuY3Rpb24gZ2V0Q3VycmVudFJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by50cmFja1Jlc3VsdCA9IGZ1bmN0aW9uIHRyYWNrUmVzdWx0KHJlc3VsdCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHRyYWNrZWRSZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRyYWNrZWRSZXN1bHQsIGtleSwge1xuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB2YXIgdHlwZWRLZXkgPSBrZXk7XG5cbiAgICAgICAgICBpZiAoIV90aGlzMi50cmFja2VkUHJvcHMuaW5jbHVkZXModHlwZWRLZXkpKSB7XG4gICAgICAgICAgICBfdGhpczIudHJhY2tlZFByb3BzLnB1c2godHlwZWRLZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHRbdHlwZWRLZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJhY2tlZFJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TmV4dFJlc3VsdCA9IGZ1bmN0aW9uIGdldE5leHRSZXN1bHQob3B0aW9ucykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciB1bnN1YnNjcmliZSA9IF90aGlzMy5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAoIXJlc3VsdC5pc0ZldGNoaW5nKSB7XG4gICAgICAgICAgdW5zdWJzY3JpYmUoKTtcblxuICAgICAgICAgIGlmIChyZXN1bHQuaXNFcnJvciAmJiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy50aHJvd09uRXJyb3IpKSB7XG4gICAgICAgICAgICByZWplY3QocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEN1cnJlbnRRdWVyeSA9IGZ1bmN0aW9uIGdldEN1cnJlbnRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UXVlcnk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICB0aGlzLmNsaWVudC5nZXRRdWVyeUNhY2hlKCkucmVtb3ZlKHRoaXMuY3VycmVudFF1ZXJ5KTtcbiAgfTtcblxuICBfcHJvdG8ucmVmZXRjaCA9IGZ1bmN0aW9uIHJlZmV0Y2gob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmZldGNoKF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBtZXRhOiB7XG4gICAgICAgIHJlZmV0Y2hQYWdlOiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnJlZmV0Y2hQYWdlXG4gICAgICB9XG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaE9wdGltaXN0aWMgPSBmdW5jdGlvbiBmZXRjaE9wdGltaXN0aWMob3B0aW9ucykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSB0aGlzLmNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5jbGllbnQuZ2V0UXVlcnlDYWNoZSgpLmJ1aWxkKHRoaXMuY2xpZW50LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgICByZXR1cm4gcXVlcnkuZmV0Y2goKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczQuY3JlYXRlUmVzdWx0KHF1ZXJ5LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2ggPSBmdW5jdGlvbiBmZXRjaChmZXRjaE9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGVGZXRjaChmZXRjaE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM1LnVwZGF0ZVJlc3VsdCgpO1xuXG4gICAgICByZXR1cm4gX3RoaXM1LmN1cnJlbnRSZXN1bHQ7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmV4ZWN1dGVGZXRjaCA9IGZ1bmN0aW9uIGV4ZWN1dGVGZXRjaChmZXRjaE9wdGlvbnMpIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgcmVmZXJlbmNlIHRoZSBsYXRlc3QgcXVlcnkgYXMgdGhlIGN1cnJlbnQgb25lIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgdGhpcy51cGRhdGVRdWVyeSgpOyAvLyBGZXRjaFxuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLmN1cnJlbnRRdWVyeS5mZXRjaCh0aGlzLm9wdGlvbnMsIGZldGNoT3B0aW9ucyk7XG5cbiAgICBpZiAoIShmZXRjaE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGZldGNoT3B0aW9ucy50aHJvd09uRXJyb3IpKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS5jYXRjaChub29wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlU3RhbGVUaW1lb3V0ID0gZnVuY3Rpb24gdXBkYXRlU3RhbGVUaW1lb3V0KCkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgdGhpcy5jbGVhclN0YWxlVGltZW91dCgpO1xuXG4gICAgaWYgKGlzU2VydmVyIHx8IHRoaXMuY3VycmVudFJlc3VsdC5pc1N0YWxlIHx8ICFpc1ZhbGlkVGltZW91dCh0aGlzLm9wdGlvbnMuc3RhbGVUaW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0aW1lID0gdGltZVVudGlsU3RhbGUodGhpcy5jdXJyZW50UmVzdWx0LmRhdGFVcGRhdGVkQXQsIHRoaXMub3B0aW9ucy5zdGFsZVRpbWUpOyAvLyBUaGUgdGltZW91dCBpcyBzb21ldGltZXMgdHJpZ2dlcmVkIDEgbXMgYmVmb3JlIHRoZSBzdGFsZSB0aW1lIGV4cGlyYXRpb24uXG4gICAgLy8gVG8gbWl0aWdhdGUgdGhpcyBpc3N1ZSB3ZSBhbHdheXMgYWRkIDEgbXMgdG8gdGhlIHRpbWVvdXQuXG5cbiAgICB2YXIgdGltZW91dCA9IHRpbWUgKyAxO1xuICAgIHRoaXMuc3RhbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXM2LmN1cnJlbnRSZXN1bHQuaXNTdGFsZSkge1xuICAgICAgICBfdGhpczYudXBkYXRlUmVzdWx0KCk7XG4gICAgICB9XG4gICAgfSwgdGltZW91dCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXB1dGVSZWZldGNoSW50ZXJ2YWwgPSBmdW5jdGlvbiBjb21wdXRlUmVmZXRjaEludGVydmFsKCkge1xuICAgIHZhciBfdGhpcyRvcHRpb25zJHJlZmV0Y2g7XG5cbiAgICByZXR1cm4gdHlwZW9mIHRoaXMub3B0aW9ucy5yZWZldGNoSW50ZXJ2YWwgPT09ICdmdW5jdGlvbicgPyB0aGlzLm9wdGlvbnMucmVmZXRjaEludGVydmFsKHRoaXMuY3VycmVudFJlc3VsdC5kYXRhLCB0aGlzLmN1cnJlbnRRdWVyeSkgOiAoX3RoaXMkb3B0aW9ucyRyZWZldGNoID0gdGhpcy5vcHRpb25zLnJlZmV0Y2hJbnRlcnZhbCkgIT0gbnVsbCA/IF90aGlzJG9wdGlvbnMkcmVmZXRjaCA6IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVSZWZldGNoSW50ZXJ2YWwgPSBmdW5jdGlvbiB1cGRhdGVSZWZldGNoSW50ZXJ2YWwobmV4dEludGVydmFsKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICB0aGlzLmNsZWFyUmVmZXRjaEludGVydmFsKCk7XG4gICAgdGhpcy5jdXJyZW50UmVmZXRjaEludGVydmFsID0gbmV4dEludGVydmFsO1xuXG4gICAgaWYgKGlzU2VydmVyIHx8IHRoaXMub3B0aW9ucy5lbmFibGVkID09PSBmYWxzZSB8fCAhaXNWYWxpZFRpbWVvdXQodGhpcy5jdXJyZW50UmVmZXRjaEludGVydmFsKSB8fCB0aGlzLmN1cnJlbnRSZWZldGNoSW50ZXJ2YWwgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlZmV0Y2hJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzNy5vcHRpb25zLnJlZmV0Y2hJbnRlcnZhbEluQmFja2dyb3VuZCB8fCBmb2N1c01hbmFnZXIuaXNGb2N1c2VkKCkpIHtcbiAgICAgICAgX3RoaXM3LmV4ZWN1dGVGZXRjaCgpO1xuICAgICAgfVxuICAgIH0sIHRoaXMuY3VycmVudFJlZmV0Y2hJbnRlcnZhbCk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVRpbWVycyA9IGZ1bmN0aW9uIHVwZGF0ZVRpbWVycygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YWxlVGltZW91dCgpO1xuICAgIHRoaXMudXBkYXRlUmVmZXRjaEludGVydmFsKHRoaXMuY29tcHV0ZVJlZmV0Y2hJbnRlcnZhbCgpKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJUaW1lcnMgPSBmdW5jdGlvbiBjbGVhclRpbWVycygpIHtcbiAgICB0aGlzLmNsZWFyU3RhbGVUaW1lb3V0KCk7XG4gICAgdGhpcy5jbGVhclJlZmV0Y2hJbnRlcnZhbCgpO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclN0YWxlVGltZW91dCA9IGZ1bmN0aW9uIGNsZWFyU3RhbGVUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YWxlVGltZW91dElkKTtcbiAgICB0aGlzLnN0YWxlVGltZW91dElkID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclJlZmV0Y2hJbnRlcnZhbCA9IGZ1bmN0aW9uIGNsZWFyUmVmZXRjaEludGVydmFsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWZldGNoSW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5yZWZldGNoSW50ZXJ2YWxJZCA9IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlUmVzdWx0ID0gZnVuY3Rpb24gY3JlYXRlUmVzdWx0KHF1ZXJ5LCBvcHRpb25zKSB7XG4gICAgdmFyIHByZXZRdWVyeSA9IHRoaXMuY3VycmVudFF1ZXJ5O1xuICAgIHZhciBwcmV2T3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICB2YXIgcHJldlJlc3VsdCA9IHRoaXMuY3VycmVudFJlc3VsdDtcbiAgICB2YXIgcHJldlJlc3VsdFN0YXRlID0gdGhpcy5jdXJyZW50UmVzdWx0U3RhdGU7XG4gICAgdmFyIHByZXZSZXN1bHRPcHRpb25zID0gdGhpcy5jdXJyZW50UmVzdWx0T3B0aW9ucztcbiAgICB2YXIgcXVlcnlDaGFuZ2UgPSBxdWVyeSAhPT0gcHJldlF1ZXJ5O1xuICAgIHZhciBxdWVyeUluaXRpYWxTdGF0ZSA9IHF1ZXJ5Q2hhbmdlID8gcXVlcnkuc3RhdGUgOiB0aGlzLmN1cnJlbnRRdWVyeUluaXRpYWxTdGF0ZTtcbiAgICB2YXIgcHJldlF1ZXJ5UmVzdWx0ID0gcXVlcnlDaGFuZ2UgPyB0aGlzLmN1cnJlbnRSZXN1bHQgOiB0aGlzLnByZXZpb3VzUXVlcnlSZXN1bHQ7XG4gICAgdmFyIHN0YXRlID0gcXVlcnkuc3RhdGU7XG4gICAgdmFyIGRhdGFVcGRhdGVkQXQgPSBzdGF0ZS5kYXRhVXBkYXRlZEF0LFxuICAgICAgICBlcnJvciA9IHN0YXRlLmVycm9yLFxuICAgICAgICBlcnJvclVwZGF0ZWRBdCA9IHN0YXRlLmVycm9yVXBkYXRlZEF0LFxuICAgICAgICBpc0ZldGNoaW5nID0gc3RhdGUuaXNGZXRjaGluZyxcbiAgICAgICAgc3RhdHVzID0gc3RhdGUuc3RhdHVzO1xuICAgIHZhciBpc1ByZXZpb3VzRGF0YSA9IGZhbHNlO1xuICAgIHZhciBpc1BsYWNlaG9sZGVyRGF0YSA9IGZhbHNlO1xuICAgIHZhciBkYXRhOyAvLyBPcHRpbWlzdGljYWxseSBzZXQgcmVzdWx0IGluIGZldGNoaW5nIHN0YXRlIGlmIG5lZWRlZFxuXG4gICAgaWYgKG9wdGlvbnMub3B0aW1pc3RpY1Jlc3VsdHMpIHtcbiAgICAgIHZhciBtb3VudGVkID0gdGhpcy5oYXNMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBmZXRjaE9uTW91bnQgPSAhbW91bnRlZCAmJiBzaG91bGRGZXRjaE9uTW91bnQocXVlcnksIG9wdGlvbnMpO1xuICAgICAgdmFyIGZldGNoT3B0aW9uYWxseSA9IG1vdW50ZWQgJiYgc2hvdWxkRmV0Y2hPcHRpb25hbGx5KHF1ZXJ5LCBwcmV2UXVlcnksIG9wdGlvbnMsIHByZXZPcHRpb25zKTtcblxuICAgICAgaWYgKGZldGNoT25Nb3VudCB8fCBmZXRjaE9wdGlvbmFsbHkpIHtcbiAgICAgICAgaXNGZXRjaGluZyA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFkYXRhVXBkYXRlZEF0KSB7XG4gICAgICAgICAgc3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBLZWVwIHByZXZpb3VzIGRhdGEgaWYgbmVlZGVkXG5cblxuICAgIGlmIChvcHRpb25zLmtlZXBQcmV2aW91c0RhdGEgJiYgIXN0YXRlLmRhdGFVcGRhdGVDb3VudCAmJiAocHJldlF1ZXJ5UmVzdWx0ID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UXVlcnlSZXN1bHQuaXNTdWNjZXNzKSAmJiBzdGF0dXMgIT09ICdlcnJvcicpIHtcbiAgICAgIGRhdGEgPSBwcmV2UXVlcnlSZXN1bHQuZGF0YTtcbiAgICAgIGRhdGFVcGRhdGVkQXQgPSBwcmV2UXVlcnlSZXN1bHQuZGF0YVVwZGF0ZWRBdDtcbiAgICAgIHN0YXR1cyA9IHByZXZRdWVyeVJlc3VsdC5zdGF0dXM7XG4gICAgICBpc1ByZXZpb3VzRGF0YSA9IHRydWU7XG4gICAgfSAvLyBTZWxlY3QgZGF0YSBpZiBuZWVkZWRcbiAgICBlbHNlIGlmIChvcHRpb25zLnNlbGVjdCAmJiB0eXBlb2Ygc3RhdGUuZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gTWVtb2l6ZSBzZWxlY3QgcmVzdWx0XG4gICAgICAgIGlmIChwcmV2UmVzdWx0ICYmIHN0YXRlLmRhdGEgPT09IChwcmV2UmVzdWx0U3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHRTdGF0ZS5kYXRhKSAmJiBvcHRpb25zLnNlbGVjdCA9PT0gKHByZXZSZXN1bHRPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UmVzdWx0T3B0aW9ucy5zZWxlY3QpICYmICF0aGlzLnByZXZpb3VzU2VsZWN0RXJyb3IpIHtcbiAgICAgICAgICBkYXRhID0gcHJldlJlc3VsdC5kYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhID0gb3B0aW9ucy5zZWxlY3Qoc3RhdGUuZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnN0cnVjdHVyYWxTaGFyaW5nICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBkYXRhID0gcmVwbGFjZUVxdWFsRGVlcChwcmV2UmVzdWx0ID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UmVzdWx0LmRhdGEsIGRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0RXJyb3IgPSBudWxsO1xuICAgICAgICAgIH0gY2F0Y2ggKHNlbGVjdEVycm9yKSB7XG4gICAgICAgICAgICBnZXRMb2dnZXIoKS5lcnJvcihzZWxlY3RFcnJvcik7XG4gICAgICAgICAgICBlcnJvciA9IHNlbGVjdEVycm9yO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yID0gc2VsZWN0RXJyb3I7XG4gICAgICAgICAgICBlcnJvclVwZGF0ZWRBdCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBzdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBVc2UgcXVlcnkgZGF0YVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IHN0YXRlLmRhdGE7XG4gICAgICAgIH0gLy8gU2hvdyBwbGFjZWhvbGRlciBkYXRhIGlmIG5lZWRlZFxuXG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucGxhY2Vob2xkZXJEYXRhICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnIHx8IHN0YXR1cyA9PT0gJ2lkbGUnKSkge1xuICAgICAgdmFyIHBsYWNlaG9sZGVyRGF0YTsgLy8gTWVtb2l6ZSBwbGFjZWhvbGRlciBkYXRhXG5cbiAgICAgIGlmICgocHJldlJlc3VsdCA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdC5pc1BsYWNlaG9sZGVyRGF0YSkgJiYgb3B0aW9ucy5wbGFjZWhvbGRlckRhdGEgPT09IChwcmV2UmVzdWx0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdE9wdGlvbnMucGxhY2Vob2xkZXJEYXRhKSkge1xuICAgICAgICBwbGFjZWhvbGRlckRhdGEgPSBwcmV2UmVzdWx0LmRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZWhvbGRlckRhdGEgPSB0eXBlb2Ygb3B0aW9ucy5wbGFjZWhvbGRlckRhdGEgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnBsYWNlaG9sZGVyRGF0YSgpIDogb3B0aW9ucy5wbGFjZWhvbGRlckRhdGE7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0ICYmIHR5cGVvZiBwbGFjZWhvbGRlckRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyRGF0YSA9IG9wdGlvbnMuc2VsZWN0KHBsYWNlaG9sZGVyRGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnN0cnVjdHVyYWxTaGFyaW5nICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlckRhdGEgPSByZXBsYWNlRXF1YWxEZWVwKHByZXZSZXN1bHQgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHQuZGF0YSwgcGxhY2Vob2xkZXJEYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yID0gbnVsbDtcbiAgICAgICAgICB9IGNhdGNoIChzZWxlY3RFcnJvcikge1xuICAgICAgICAgICAgZ2V0TG9nZ2VyKCkuZXJyb3Ioc2VsZWN0RXJyb3IpO1xuICAgICAgICAgICAgZXJyb3IgPSBzZWxlY3RFcnJvcjtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RFcnJvciA9IHNlbGVjdEVycm9yO1xuICAgICAgICAgICAgZXJyb3JVcGRhdGVkQXQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlckRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgZGF0YSA9IHBsYWNlaG9sZGVyRGF0YTtcbiAgICAgICAgaXNQbGFjZWhvbGRlckRhdGEgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgIGlzTG9hZGluZzogc3RhdHVzID09PSAnbG9hZGluZycsXG4gICAgICBpc1N1Y2Nlc3M6IHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgaXNFcnJvcjogc3RhdHVzID09PSAnZXJyb3InLFxuICAgICAgaXNJZGxlOiBzdGF0dXMgPT09ICdpZGxlJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBkYXRhVXBkYXRlZEF0OiBkYXRhVXBkYXRlZEF0LFxuICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgZXJyb3JVcGRhdGVkQXQ6IGVycm9yVXBkYXRlZEF0LFxuICAgICAgZmFpbHVyZUNvdW50OiBzdGF0ZS5mZXRjaEZhaWx1cmVDb3VudCxcbiAgICAgIGlzRmV0Y2hlZDogc3RhdGUuZGF0YVVwZGF0ZUNvdW50ID4gMCB8fCBzdGF0ZS5lcnJvclVwZGF0ZUNvdW50ID4gMCxcbiAgICAgIGlzRmV0Y2hlZEFmdGVyTW91bnQ6IHN0YXRlLmRhdGFVcGRhdGVDb3VudCA+IHF1ZXJ5SW5pdGlhbFN0YXRlLmRhdGFVcGRhdGVDb3VudCB8fCBzdGF0ZS5lcnJvclVwZGF0ZUNvdW50ID4gcXVlcnlJbml0aWFsU3RhdGUuZXJyb3JVcGRhdGVDb3VudCxcbiAgICAgIGlzRmV0Y2hpbmc6IGlzRmV0Y2hpbmcsXG4gICAgICBpc1JlZmV0Y2hpbmc6IGlzRmV0Y2hpbmcgJiYgc3RhdHVzICE9PSAnbG9hZGluZycsXG4gICAgICBpc0xvYWRpbmdFcnJvcjogc3RhdHVzID09PSAnZXJyb3InICYmIHN0YXRlLmRhdGFVcGRhdGVkQXQgPT09IDAsXG4gICAgICBpc1BsYWNlaG9sZGVyRGF0YTogaXNQbGFjZWhvbGRlckRhdGEsXG4gICAgICBpc1ByZXZpb3VzRGF0YTogaXNQcmV2aW91c0RhdGEsXG4gICAgICBpc1JlZmV0Y2hFcnJvcjogc3RhdHVzID09PSAnZXJyb3InICYmIHN0YXRlLmRhdGFVcGRhdGVkQXQgIT09IDAsXG4gICAgICBpc1N0YWxlOiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKSxcbiAgICAgIHJlZmV0Y2g6IHRoaXMucmVmZXRjaCxcbiAgICAgIHJlbW92ZTogdGhpcy5yZW1vdmVcbiAgICB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnNob3VsZE5vdGlmeUxpc3RlbmVycyA9IGZ1bmN0aW9uIHNob3VsZE5vdGlmeUxpc3RlbmVycyhyZXN1bHQsIHByZXZSZXN1bHQpIHtcbiAgICBpZiAoIXByZXZSZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IHByZXZSZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgbm90aWZ5T25DaGFuZ2VQcm9wcyA9IF90aGlzJG9wdGlvbnMubm90aWZ5T25DaGFuZ2VQcm9wcyxcbiAgICAgICAgbm90aWZ5T25DaGFuZ2VQcm9wc0V4Y2x1c2lvbnMgPSBfdGhpcyRvcHRpb25zLm5vdGlmeU9uQ2hhbmdlUHJvcHNFeGNsdXNpb25zO1xuXG4gICAgaWYgKCFub3RpZnlPbkNoYW5nZVByb3BzICYmICFub3RpZnlPbkNoYW5nZVByb3BzRXhjbHVzaW9ucykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5vdGlmeU9uQ2hhbmdlUHJvcHMgPT09ICd0cmFja2VkJyAmJiAhdGhpcy50cmFja2VkUHJvcHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaW5jbHVkZWRQcm9wcyA9IG5vdGlmeU9uQ2hhbmdlUHJvcHMgPT09ICd0cmFja2VkJyA/IHRoaXMudHJhY2tlZFByb3BzIDogbm90aWZ5T25DaGFuZ2VQcm9wcztcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzdWx0KS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB0eXBlZEtleSA9IGtleTtcbiAgICAgIHZhciBjaGFuZ2VkID0gcmVzdWx0W3R5cGVkS2V5XSAhPT0gcHJldlJlc3VsdFt0eXBlZEtleV07XG4gICAgICB2YXIgaXNJbmNsdWRlZCA9IGluY2x1ZGVkUHJvcHMgPT0gbnVsbCA/IHZvaWQgMCA6IGluY2x1ZGVkUHJvcHMuc29tZShmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCA9PT0ga2V5O1xuICAgICAgfSk7XG4gICAgICB2YXIgaXNFeGNsdWRlZCA9IG5vdGlmeU9uQ2hhbmdlUHJvcHNFeGNsdXNpb25zID09IG51bGwgPyB2b2lkIDAgOiBub3RpZnlPbkNoYW5nZVByb3BzRXhjbHVzaW9ucy5zb21lKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ID09PSBrZXk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjaGFuZ2VkICYmICFpc0V4Y2x1ZGVkICYmICghaW5jbHVkZWRQcm9wcyB8fCBpc0luY2x1ZGVkKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlUmVzdWx0ID0gZnVuY3Rpb24gdXBkYXRlUmVzdWx0KG5vdGlmeU9wdGlvbnMpIHtcbiAgICB2YXIgcHJldlJlc3VsdCA9IHRoaXMuY3VycmVudFJlc3VsdDtcbiAgICB0aGlzLmN1cnJlbnRSZXN1bHQgPSB0aGlzLmNyZWF0ZVJlc3VsdCh0aGlzLmN1cnJlbnRRdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmN1cnJlbnRSZXN1bHRTdGF0ZSA9IHRoaXMuY3VycmVudFF1ZXJ5LnN0YXRlO1xuICAgIHRoaXMuY3VycmVudFJlc3VsdE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7IC8vIE9ubHkgbm90aWZ5IGlmIHNvbWV0aGluZyBoYXMgY2hhbmdlZFxuXG4gICAgaWYgKHNoYWxsb3dFcXVhbE9iamVjdHModGhpcy5jdXJyZW50UmVzdWx0LCBwcmV2UmVzdWx0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRGV0ZXJtaW5lIHdoaWNoIGNhbGxiYWNrcyB0byB0cmlnZ2VyXG5cblxuICAgIHZhciBkZWZhdWx0Tm90aWZ5T3B0aW9ucyA9IHtcbiAgICAgIGNhY2hlOiB0cnVlXG4gICAgfTtcblxuICAgIGlmICgobm90aWZ5T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogbm90aWZ5T3B0aW9ucy5saXN0ZW5lcnMpICE9PSBmYWxzZSAmJiB0aGlzLnNob3VsZE5vdGlmeUxpc3RlbmVycyh0aGlzLmN1cnJlbnRSZXN1bHQsIHByZXZSZXN1bHQpKSB7XG4gICAgICBkZWZhdWx0Tm90aWZ5T3B0aW9ucy5saXN0ZW5lcnMgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZ5KF9leHRlbmRzKHt9LCBkZWZhdWx0Tm90aWZ5T3B0aW9ucywgbm90aWZ5T3B0aW9ucykpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVRdWVyeSA9IGZ1bmN0aW9uIHVwZGF0ZVF1ZXJ5KCkge1xuICAgIHZhciBxdWVyeSA9IHRoaXMuY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5idWlsZCh0aGlzLmNsaWVudCwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmIChxdWVyeSA9PT0gdGhpcy5jdXJyZW50UXVlcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldlF1ZXJ5ID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgdGhpcy5jdXJyZW50UXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmN1cnJlbnRRdWVyeUluaXRpYWxTdGF0ZSA9IHF1ZXJ5LnN0YXRlO1xuICAgIHRoaXMucHJldmlvdXNRdWVyeVJlc3VsdCA9IHRoaXMuY3VycmVudFJlc3VsdDtcblxuICAgIGlmICh0aGlzLmhhc0xpc3RlbmVycygpKSB7XG4gICAgICBwcmV2UXVlcnkgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZRdWVyeS5yZW1vdmVPYnNlcnZlcih0aGlzKTtcbiAgICAgIHF1ZXJ5LmFkZE9ic2VydmVyKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25RdWVyeVVwZGF0ZSA9IGZ1bmN0aW9uIG9uUXVlcnlVcGRhdGUoYWN0aW9uKSB7XG4gICAgdmFyIG5vdGlmeU9wdGlvbnMgPSB7fTtcblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICBub3RpZnlPcHRpb25zLm9uU3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ2Vycm9yJyAmJiAhaXNDYW5jZWxsZWRFcnJvcihhY3Rpb24uZXJyb3IpKSB7XG4gICAgICBub3RpZnlPcHRpb25zLm9uRXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUmVzdWx0KG5vdGlmeU9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCkpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkobm90aWZ5T3B0aW9ucykge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBGaXJzdCB0cmlnZ2VyIHRoZSBjb25maWd1cmF0aW9uIGNhbGxiYWNrc1xuICAgICAgaWYgKG5vdGlmeU9wdGlvbnMub25TdWNjZXNzKSB7XG4gICAgICAgIF90aGlzOC5vcHRpb25zLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXM4Lm9wdGlvbnMub25TdWNjZXNzKF90aGlzOC5jdXJyZW50UmVzdWx0LmRhdGEpO1xuICAgICAgICBfdGhpczgub3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzOC5vcHRpb25zLm9uU2V0dGxlZChfdGhpczguY3VycmVudFJlc3VsdC5kYXRhLCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAobm90aWZ5T3B0aW9ucy5vbkVycm9yKSB7XG4gICAgICAgIF90aGlzOC5vcHRpb25zLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzOC5vcHRpb25zLm9uRXJyb3IoX3RoaXM4LmN1cnJlbnRSZXN1bHQuZXJyb3IpO1xuICAgICAgICBfdGhpczgub3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzOC5vcHRpb25zLm9uU2V0dGxlZCh1bmRlZmluZWQsIF90aGlzOC5jdXJyZW50UmVzdWx0LmVycm9yKTtcbiAgICAgIH0gLy8gVGhlbiB0cmlnZ2VyIHRoZSBsaXN0ZW5lcnNcblxuXG4gICAgICBpZiAobm90aWZ5T3B0aW9ucy5saXN0ZW5lcnMpIHtcbiAgICAgICAgX3RoaXM4Lmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyKF90aGlzOC5jdXJyZW50UmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFRoZW4gdGhlIGNhY2hlIGxpc3RlbmVyc1xuXG5cbiAgICAgIGlmIChub3RpZnlPcHRpb25zLmNhY2hlKSB7XG4gICAgICAgIF90aGlzOC5jbGllbnQuZ2V0UXVlcnlDYWNoZSgpLm5vdGlmeSh7XG4gICAgICAgICAgcXVlcnk6IF90aGlzOC5jdXJyZW50UXVlcnksXG4gICAgICAgICAgdHlwZTogJ29ic2VydmVyUmVzdWx0c1VwZGF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBRdWVyeU9ic2VydmVyO1xufShTdWJzY3JpYmFibGUpO1xuXG5mdW5jdGlvbiBzaG91bGRMb2FkT25Nb3VudChxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiAhcXVlcnkuc3RhdGUuZGF0YVVwZGF0ZWRBdCAmJiAhKHF1ZXJ5LnN0YXRlLnN0YXR1cyA9PT0gJ2Vycm9yJyAmJiBvcHRpb25zLnJldHJ5T25Nb3VudCA9PT0gZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRSZWZldGNoT25Nb3VudChxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiBxdWVyeS5zdGF0ZS5kYXRhVXBkYXRlZEF0ID4gMCAmJiAob3B0aW9ucy5yZWZldGNoT25Nb3VudCA9PT0gJ2Fsd2F5cycgfHwgb3B0aW9ucy5yZWZldGNoT25Nb3VudCAhPT0gZmFsc2UgJiYgaXNTdGFsZShxdWVyeSwgb3B0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRGZXRjaE9uTW91bnQocXVlcnksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHNob3VsZExvYWRPbk1vdW50KHF1ZXJ5LCBvcHRpb25zKSB8fCBzaG91bGRSZWZldGNoT25Nb3VudChxdWVyeSwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIF9zaG91bGRGZXRjaE9uUmVjb25uZWN0KHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmVuYWJsZWQgIT09IGZhbHNlICYmIChvcHRpb25zLnJlZmV0Y2hPblJlY29ubmVjdCA9PT0gJ2Fsd2F5cycgfHwgb3B0aW9ucy5yZWZldGNoT25SZWNvbm5lY3QgIT09IGZhbHNlICYmIGlzU3RhbGUocXVlcnksIG9wdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gX3Nob3VsZEZldGNoT25XaW5kb3dGb2N1cyhxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiAob3B0aW9ucy5yZWZldGNoT25XaW5kb3dGb2N1cyA9PT0gJ2Fsd2F5cycgfHwgb3B0aW9ucy5yZWZldGNoT25XaW5kb3dGb2N1cyAhPT0gZmFsc2UgJiYgaXNTdGFsZShxdWVyeSwgb3B0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRGZXRjaE9wdGlvbmFsbHkocXVlcnksIHByZXZRdWVyeSwgb3B0aW9ucywgcHJldk9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2UgJiYgKHF1ZXJ5ICE9PSBwcmV2UXVlcnkgfHwgcHJldk9wdGlvbnMuZW5hYmxlZCA9PT0gZmFsc2UpICYmICghb3B0aW9ucy5zdXNwZW5zZSB8fCBxdWVyeS5zdGF0ZS5zdGF0dXMgIT09ICdlcnJvcicgfHwgcHJldk9wdGlvbnMuZW5hYmxlZCA9PT0gZmFsc2UpICYmIGlzU3RhbGUocXVlcnksIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiBxdWVyeS5pc1N0YWxlQnlUaW1lKG9wdGlvbnMuc3RhbGVUaW1lKTtcbn0iLCJpbXBvcnQgeyBmb2N1c01hbmFnZXIgfSBmcm9tICcuL2ZvY3VzTWFuYWdlcic7XG5pbXBvcnQgeyBvbmxpbmVNYW5hZ2VyIH0gZnJvbSAnLi9vbmxpbmVNYW5hZ2VyJztcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi91dGlscyc7IC8vIFRZUEVTXG5cbmZ1bmN0aW9uIGRlZmF1bHRSZXRyeURlbGF5KGZhaWx1cmVDb3VudCkge1xuICByZXR1cm4gTWF0aC5taW4oMTAwMCAqIE1hdGgucG93KDIsIGZhaWx1cmVDb3VudCksIDMwMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2FuY2VsYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mICh2YWx1ZSA9PSBudWxsID8gdm9pZCAwIDogdmFsdWUuY2FuY2VsKSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydCB2YXIgQ2FuY2VsbGVkRXJyb3IgPSBmdW5jdGlvbiBDYW5jZWxsZWRFcnJvcihvcHRpb25zKSB7XG4gIHRoaXMucmV2ZXJ0ID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5yZXZlcnQ7XG4gIHRoaXMuc2lsZW50ID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5zaWxlbnQ7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ2FuY2VsbGVkRXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQ2FuY2VsbGVkRXJyb3I7XG59IC8vIENMQVNTXG5cbmV4cG9ydCB2YXIgUmV0cnllciA9IGZ1bmN0aW9uIFJldHJ5ZXIoY29uZmlnKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIGNhbmNlbFJldHJ5ID0gZmFsc2U7XG4gIHZhciBjYW5jZWxGbjtcbiAgdmFyIGNvbnRpbnVlRm47XG4gIHZhciBwcm9taXNlUmVzb2x2ZTtcbiAgdmFyIHByb21pc2VSZWplY3Q7XG5cbiAgdGhpcy5jYW5jZWwgPSBmdW5jdGlvbiAoY2FuY2VsT3B0aW9ucykge1xuICAgIHJldHVybiBjYW5jZWxGbiA9PSBudWxsID8gdm9pZCAwIDogY2FuY2VsRm4oY2FuY2VsT3B0aW9ucyk7XG4gIH07XG5cbiAgdGhpcy5jYW5jZWxSZXRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjYW5jZWxSZXRyeSA9IHRydWU7XG4gIH07XG5cbiAgdGhpcy5jb250aW51ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY29udGludWVGbiA9PSBudWxsID8gdm9pZCAwIDogY29udGludWVGbigpO1xuICB9O1xuXG4gIHRoaXMuZmFpbHVyZUNvdW50ID0gMDtcbiAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICB0aGlzLmlzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgdGhpcy5pc1RyYW5zcG9ydENhbmNlbGFibGUgPSBmYWxzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKG91dGVyUmVzb2x2ZSwgb3V0ZXJSZWplY3QpIHtcbiAgICBwcm9taXNlUmVzb2x2ZSA9IG91dGVyUmVzb2x2ZTtcbiAgICBwcm9taXNlUmVqZWN0ID0gb3V0ZXJSZWplY3Q7XG4gIH0pO1xuXG4gIHZhciByZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xuICAgIGlmICghX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgX3RoaXMuaXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICBjb25maWcub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcub25TdWNjZXNzKHZhbHVlKTtcbiAgICAgIGNvbnRpbnVlRm4gPT0gbnVsbCA/IHZvaWQgMCA6IGNvbnRpbnVlRm4oKTtcbiAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlamVjdCA9IGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkge1xuICAgIGlmICghX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgX3RoaXMuaXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICBjb25maWcub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLm9uRXJyb3IodmFsdWUpO1xuICAgICAgY29udGludWVGbiA9PSBudWxsID8gdm9pZCAwIDogY29udGludWVGbigpO1xuICAgICAgcHJvbWlzZVJlamVjdCh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBwYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoY29udGludWVSZXNvbHZlKSB7XG4gICAgICBjb250aW51ZUZuID0gY29udGludWVSZXNvbHZlO1xuICAgICAgX3RoaXMuaXNQYXVzZWQgPSB0cnVlO1xuICAgICAgY29uZmlnLm9uUGF1c2UgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5vblBhdXNlKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjb250aW51ZUZuID0gdW5kZWZpbmVkO1xuICAgICAgX3RoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgIGNvbmZpZy5vbkNvbnRpbnVlID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcub25Db250aW51ZSgpO1xuICAgIH0pO1xuICB9OyAvLyBDcmVhdGUgbG9vcCBmdW5jdGlvblxuXG5cbiAgdmFyIHJ1biA9IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAvLyBEbyBub3RoaW5nIGlmIGFscmVhZHkgcmVzb2x2ZWRcbiAgICBpZiAoX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9taXNlT3JWYWx1ZTsgLy8gRXhlY3V0ZSBxdWVyeVxuXG4gICAgdHJ5IHtcbiAgICAgIHByb21pc2VPclZhbHVlID0gY29uZmlnLmZuKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHByb21pc2VPclZhbHVlID0gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH0gLy8gQ3JlYXRlIGNhbGxiYWNrIHRvIGNhbmNlbCB0aGlzIGZldGNoXG5cblxuICAgIGNhbmNlbEZuID0gZnVuY3Rpb24gY2FuY2VsRm4oY2FuY2VsT3B0aW9ucykge1xuICAgICAgaWYgKCFfdGhpcy5pc1Jlc29sdmVkKSB7XG4gICAgICAgIHJlamVjdChuZXcgQ2FuY2VsbGVkRXJyb3IoY2FuY2VsT3B0aW9ucykpOyAvLyBDYW5jZWwgdHJhbnNwb3J0IGlmIHN1cHBvcnRlZFxuXG4gICAgICAgIGlmIChpc0NhbmNlbGFibGUocHJvbWlzZU9yVmFsdWUpKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHByb21pc2VPclZhbHVlLmNhbmNlbCgpO1xuICAgICAgICAgIH0gY2F0Y2ggKF91bnVzZWQpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9OyAvLyBDaGVjayBpZiB0aGUgdHJhbnNwb3J0IGxheWVyIHN1cHBvcnQgY2FuY2VsbGF0aW9uXG5cblxuICAgIF90aGlzLmlzVHJhbnNwb3J0Q2FuY2VsYWJsZSA9IGlzQ2FuY2VsYWJsZShwcm9taXNlT3JWYWx1ZSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHByb21pc2VPclZhbHVlKS50aGVuKHJlc29sdmUpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgdmFyIF9jb25maWckcmV0cnksIF9jb25maWckcmV0cnlEZWxheTtcblxuICAgICAgLy8gU3RvcCBpZiB0aGUgZmV0Y2ggaXMgYWxyZWFkeSByZXNvbHZlZFxuICAgICAgaWYgKF90aGlzLmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBEbyB3ZSBuZWVkIHRvIHJldHJ5IHRoZSByZXF1ZXN0P1xuXG5cbiAgICAgIHZhciByZXRyeSA9IChfY29uZmlnJHJldHJ5ID0gY29uZmlnLnJldHJ5KSAhPSBudWxsID8gX2NvbmZpZyRyZXRyeSA6IDM7XG4gICAgICB2YXIgcmV0cnlEZWxheSA9IChfY29uZmlnJHJldHJ5RGVsYXkgPSBjb25maWcucmV0cnlEZWxheSkgIT0gbnVsbCA/IF9jb25maWckcmV0cnlEZWxheSA6IGRlZmF1bHRSZXRyeURlbGF5O1xuICAgICAgdmFyIGRlbGF5ID0gdHlwZW9mIHJldHJ5RGVsYXkgPT09ICdmdW5jdGlvbicgPyByZXRyeURlbGF5KF90aGlzLmZhaWx1cmVDb3VudCwgZXJyb3IpIDogcmV0cnlEZWxheTtcbiAgICAgIHZhciBzaG91bGRSZXRyeSA9IHJldHJ5ID09PSB0cnVlIHx8IHR5cGVvZiByZXRyeSA9PT0gJ251bWJlcicgJiYgX3RoaXMuZmFpbHVyZUNvdW50IDwgcmV0cnkgfHwgdHlwZW9mIHJldHJ5ID09PSAnZnVuY3Rpb24nICYmIHJldHJ5KF90aGlzLmZhaWx1cmVDb3VudCwgZXJyb3IpO1xuXG4gICAgICBpZiAoY2FuY2VsUmV0cnkgfHwgIXNob3VsZFJldHJ5KSB7XG4gICAgICAgIC8vIFdlIGFyZSBkb25lIGlmIHRoZSBxdWVyeSBkb2VzIG5vdCBuZWVkIHRvIGJlIHJldHJpZWRcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5mYWlsdXJlQ291bnQrKzsgLy8gTm90aWZ5IG9uIGZhaWxcblxuICAgICAgY29uZmlnLm9uRmFpbCA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLm9uRmFpbChfdGhpcy5mYWlsdXJlQ291bnQsIGVycm9yKTsgLy8gRGVsYXlcblxuICAgICAgc2xlZXAoZGVsYXkpIC8vIFBhdXNlIGlmIHRoZSBkb2N1bWVudCBpcyBub3QgdmlzaWJsZSBvciB3aGVuIHRoZSBkZXZpY2UgaXMgb2ZmbGluZVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWZvY3VzTWFuYWdlci5pc0ZvY3VzZWQoKSB8fCAhb25saW5lTWFuYWdlci5pc09ubGluZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY2FuY2VsUmV0cnkpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1bigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTsgLy8gU3RhcnQgbG9vcFxuXG5cbiAgcnVuKCk7XG59OyIsImV4cG9ydCB2YXIgU3Vic2NyaWJhYmxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3Vic2NyaWJhYmxlKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3Vic2NyaWJhYmxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBjYWxsYmFjayA9IGxpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIHRoaXMub25TdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMubGlzdGVuZXJzID0gX3RoaXMubGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCAhPT0gY2FsbGJhY2s7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub25VbnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uIGhhc0xpc3RlbmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMubGVuZ3RoID4gMDtcbiAgfTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHsvLyBEbyBub3RoaW5nXG4gIH07XG5cbiAgX3Byb3RvLm9uVW5zdWJzY3JpYmUgPSBmdW5jdGlvbiBvblVuc3Vic2NyaWJlKCkgey8vIERvIG5vdGhpbmdcbiAgfTtcblxuICByZXR1cm4gU3Vic2NyaWJhYmxlO1xufSgpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuLy8gVFlQRVNcbi8vIFVUSUxTXG5leHBvcnQgdmFyIGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmdW5jdGlvbmFsVXBkYXRlKHVwZGF0ZXIsIGlucHV0KSB7XG4gIHJldHVybiB0eXBlb2YgdXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZXIoaW5wdXQpIDogdXBkYXRlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkVGltZW91dCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlICE9PSBJbmZpbml0eTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVRdWVyeUtleUFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlKGFycmF5MSwgYXJyYXkyKSB7XG4gIHJldHVybiBhcnJheTEuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIGFycmF5Mi5pbmRleE9mKHgpID09PSAtMTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUF0KGFycmF5LCBpbmRleCwgdmFsdWUpIHtcbiAgdmFyIGNvcHkgPSBhcnJheS5zbGljZSgwKTtcbiAgY29weVtpbmRleF0gPSB2YWx1ZTtcbiAgcmV0dXJuIGNvcHk7XG59XG5leHBvcnQgZnVuY3Rpb24gdGltZVVudGlsU3RhbGUodXBkYXRlZEF0LCBzdGFsZVRpbWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KHVwZGF0ZWRBdCArIChzdGFsZVRpbWUgfHwgMCkgLSBEYXRlLm5vdygpLCAwKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gIGlmICghaXNRdWVyeUtleShhcmcxKSkge1xuICAgIHJldHVybiBhcmcxO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmcyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmczLCB7XG4gICAgICBxdWVyeUtleTogYXJnMSxcbiAgICAgIHF1ZXJ5Rm46IGFyZzJcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMiwge1xuICAgIHF1ZXJ5S2V5OiBhcmcxXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTXV0YXRpb25BcmdzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgaWYgKGlzUXVlcnlLZXkoYXJnMSkpIHtcbiAgICBpZiAodHlwZW9mIGFyZzIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMywge1xuICAgICAgICBtdXRhdGlvbktleTogYXJnMSxcbiAgICAgICAgbXV0YXRpb25GbjogYXJnMlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmcyLCB7XG4gICAgICBtdXRhdGlvbktleTogYXJnMVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmcxID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmcyLCB7XG4gICAgICBtdXRhdGlvbkZuOiBhcmcxXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGFyZzEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gIHJldHVybiBpc1F1ZXJ5S2V5KGFyZzEpID8gW19leHRlbmRzKHt9LCBhcmcyLCB7XG4gICAgcXVlcnlLZXk6IGFyZzFcbiAgfSksIGFyZzNdIDogW2FyZzEgfHwge30sIGFyZzJdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTXV0YXRpb25GaWx0ZXJBcmdzKGFyZzEsIGFyZzIpIHtcbiAgcmV0dXJuIGlzUXVlcnlLZXkoYXJnMSkgPyBfZXh0ZW5kcyh7fSwgYXJnMiwge1xuICAgIG11dGF0aW9uS2V5OiBhcmcxXG4gIH0pIDogYXJnMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXBRdWVyeVN0YXR1c0ZpbHRlcihhY3RpdmUsIGluYWN0aXZlKSB7XG4gIGlmIChhY3RpdmUgPT09IHRydWUgJiYgaW5hY3RpdmUgPT09IHRydWUgfHwgYWN0aXZlID09IG51bGwgJiYgaW5hY3RpdmUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnYWxsJztcbiAgfSBlbHNlIGlmIChhY3RpdmUgPT09IGZhbHNlICYmIGluYWN0aXZlID09PSBmYWxzZSkge1xuICAgIHJldHVybiAnbm9uZSc7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXQgdGhpcyBwb2ludCwgYWN0aXZlfGluYWN0aXZlIGNhbiBvbmx5IGJlIHRydWV8ZmFsc2Ugb3IgZmFsc2V8dHJ1ZVxuICAgIC8vIHNvLCB3aGVuIG9ubHkgb25lIHZhbHVlIGlzIHByb3ZpZGVkLCB0aGUgbWlzc2luZyBvbmUgaGFzIHRvIGJlIHRoZSBuZWdhdGVkIHZhbHVlXG4gICAgdmFyIGlzQWN0aXZlID0gYWN0aXZlICE9IG51bGwgPyBhY3RpdmUgOiAhaW5hY3RpdmU7XG4gICAgcmV0dXJuIGlzQWN0aXZlID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hRdWVyeShmaWx0ZXJzLCBxdWVyeSkge1xuICB2YXIgYWN0aXZlID0gZmlsdGVycy5hY3RpdmUsXG4gICAgICBleGFjdCA9IGZpbHRlcnMuZXhhY3QsXG4gICAgICBmZXRjaGluZyA9IGZpbHRlcnMuZmV0Y2hpbmcsXG4gICAgICBpbmFjdGl2ZSA9IGZpbHRlcnMuaW5hY3RpdmUsXG4gICAgICBwcmVkaWNhdGUgPSBmaWx0ZXJzLnByZWRpY2F0ZSxcbiAgICAgIHF1ZXJ5S2V5ID0gZmlsdGVycy5xdWVyeUtleSxcbiAgICAgIHN0YWxlID0gZmlsdGVycy5zdGFsZTtcblxuICBpZiAoaXNRdWVyeUtleShxdWVyeUtleSkpIHtcbiAgICBpZiAoZXhhY3QpIHtcbiAgICAgIGlmIChxdWVyeS5xdWVyeUhhc2ggIT09IGhhc2hRdWVyeUtleUJ5T3B0aW9ucyhxdWVyeUtleSwgcXVlcnkub3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXBhcnRpYWxNYXRjaEtleShxdWVyeS5xdWVyeUtleSwgcXVlcnlLZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIHF1ZXJ5U3RhdHVzRmlsdGVyID0gbWFwUXVlcnlTdGF0dXNGaWx0ZXIoYWN0aXZlLCBpbmFjdGl2ZSk7XG5cbiAgaWYgKHF1ZXJ5U3RhdHVzRmlsdGVyID09PSAnbm9uZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAocXVlcnlTdGF0dXNGaWx0ZXIgIT09ICdhbGwnKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gcXVlcnkuaXNBY3RpdmUoKTtcblxuICAgIGlmIChxdWVyeVN0YXR1c0ZpbHRlciA9PT0gJ2FjdGl2ZScgJiYgIWlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5U3RhdHVzRmlsdGVyID09PSAnaW5hY3RpdmUnICYmIGlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBzdGFsZSA9PT0gJ2Jvb2xlYW4nICYmIHF1ZXJ5LmlzU3RhbGUoKSAhPT0gc3RhbGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIGZldGNoaW5nID09PSAnYm9vbGVhbicgJiYgcXVlcnkuaXNGZXRjaGluZygpICE9PSBmZXRjaGluZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShxdWVyeSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaE11dGF0aW9uKGZpbHRlcnMsIG11dGF0aW9uKSB7XG4gIHZhciBleGFjdCA9IGZpbHRlcnMuZXhhY3QsXG4gICAgICBmZXRjaGluZyA9IGZpbHRlcnMuZmV0Y2hpbmcsXG4gICAgICBwcmVkaWNhdGUgPSBmaWx0ZXJzLnByZWRpY2F0ZSxcbiAgICAgIG11dGF0aW9uS2V5ID0gZmlsdGVycy5tdXRhdGlvbktleTtcblxuICBpZiAoaXNRdWVyeUtleShtdXRhdGlvbktleSkpIHtcbiAgICBpZiAoIW11dGF0aW9uLm9wdGlvbnMubXV0YXRpb25LZXkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZXhhY3QpIHtcbiAgICAgIGlmIChoYXNoUXVlcnlLZXkobXV0YXRpb24ub3B0aW9ucy5tdXRhdGlvbktleSkgIT09IGhhc2hRdWVyeUtleShtdXRhdGlvbktleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXBhcnRpYWxNYXRjaEtleShtdXRhdGlvbi5vcHRpb25zLm11dGF0aW9uS2V5LCBtdXRhdGlvbktleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGZldGNoaW5nID09PSAnYm9vbGVhbicgJiYgbXV0YXRpb24uc3RhdGUuc3RhdHVzID09PSAnbG9hZGluZycgIT09IGZldGNoaW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHByZWRpY2F0ZSAmJiAhcHJlZGljYXRlKG11dGF0aW9uKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hRdWVyeUtleUJ5T3B0aW9ucyhxdWVyeUtleSwgb3B0aW9ucykge1xuICB2YXIgaGFzaEZuID0gKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucXVlcnlLZXlIYXNoRm4pIHx8IGhhc2hRdWVyeUtleTtcbiAgcmV0dXJuIGhhc2hGbihxdWVyeUtleSk7XG59XG4vKipcbiAqIERlZmF1bHQgcXVlcnkga2V5cyBoYXNoIGZ1bmN0aW9uLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNoUXVlcnlLZXkocXVlcnlLZXkpIHtcbiAgdmFyIGFzQXJyYXkgPSBlbnN1cmVRdWVyeUtleUFycmF5KHF1ZXJ5S2V5KTtcbiAgcmV0dXJuIHN0YWJsZVZhbHVlSGFzaChhc0FycmF5KTtcbn1cbi8qKlxuICogSGFzaGVzIHRoZSB2YWx1ZSBpbnRvIGEgc3RhYmxlIGhhc2guXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YWJsZVZhbHVlSGFzaCh2YWx1ZSkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIGZ1bmN0aW9uIChfLCB2YWwpIHtcbiAgICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWwpID8gT2JqZWN0LmtleXModmFsKS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWxba2V5XTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pIDogdmFsO1xuICB9KTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGtleSBgYmAgcGFydGlhbGx5IG1hdGNoZXMgd2l0aCBrZXkgYGFgLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aWFsTWF0Y2hLZXkoYSwgYikge1xuICByZXR1cm4gcGFydGlhbERlZXBFcXVhbChlbnN1cmVRdWVyeUtleUFycmF5KGEpLCBlbnN1cmVRdWVyeUtleUFycmF5KGIpKTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGBiYCBwYXJ0aWFsbHkgbWF0Y2hlcyB3aXRoIGBhYC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFydGlhbERlZXBFcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIGEgIT09IHR5cGVvZiBiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICFPYmplY3Qua2V5cyhiKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiAhcGFydGlhbERlZXBFcXVhbChhW2tleV0sIGJba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBgYWAgaWYgYGJgIGlzIGRlZXBseSBlcXVhbC5cbiAqIElmIG5vdCwgaXQgd2lsbCByZXBsYWNlIGFueSBkZWVwbHkgZXF1YWwgY2hpbGRyZW4gb2YgYGJgIHdpdGggdGhvc2Ugb2YgYGFgLlxuICogVGhpcyBjYW4gYmUgdXNlZCBmb3Igc3RydWN0dXJhbCBzaGFyaW5nIGJldHdlZW4gSlNPTiB2YWx1ZXMgZm9yIGV4YW1wbGUuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VFcXVhbERlZXAoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShhKSAmJiBBcnJheS5pc0FycmF5KGIpO1xuXG4gIGlmIChhcnJheSB8fCBpc1BsYWluT2JqZWN0KGEpICYmIGlzUGxhaW5PYmplY3QoYikpIHtcbiAgICB2YXIgYVNpemUgPSBhcnJheSA/IGEubGVuZ3RoIDogT2JqZWN0LmtleXMoYSkubGVuZ3RoO1xuICAgIHZhciBiSXRlbXMgPSBhcnJheSA/IGIgOiBPYmplY3Qua2V5cyhiKTtcbiAgICB2YXIgYlNpemUgPSBiSXRlbXMubGVuZ3RoO1xuICAgIHZhciBjb3B5ID0gYXJyYXkgPyBbXSA6IHt9O1xuICAgIHZhciBlcXVhbEl0ZW1zID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYlNpemU7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGFycmF5ID8gaSA6IGJJdGVtc1tpXTtcbiAgICAgIGNvcHlba2V5XSA9IHJlcGxhY2VFcXVhbERlZXAoYVtrZXldLCBiW2tleV0pO1xuXG4gICAgICBpZiAoY29weVtrZXldID09PSBhW2tleV0pIHtcbiAgICAgICAgZXF1YWxJdGVtcysrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhU2l6ZSA9PT0gYlNpemUgJiYgZXF1YWxJdGVtcyA9PT0gYVNpemUgPyBhIDogY29weTtcbiAgfVxuXG4gIHJldHVybiBiO1xufVxuLyoqXG4gKiBTaGFsbG93IGNvbXBhcmUgb2JqZWN0cy4gT25seSB3b3JrcyB3aXRoIG9iamVjdHMgdGhhdCBhbHdheXMgaGF2ZSB0aGUgc2FtZSBwcm9wZXJ0aWVzLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93RXF1YWxPYmplY3RzKGEsIGIpIHtcbiAgaWYgKGEgJiYgIWIgfHwgYiAmJiAhYSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IC8vIENvcGllZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3RcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qobykge1xuICBpZiAoIWhhc09iamVjdFByb3RvdHlwZShvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBJZiBoYXMgbW9kaWZpZWQgY29uc3RydWN0b3JcblxuXG4gIHZhciBjdG9yID0gby5jb25zdHJ1Y3RvcjtcblxuICBpZiAodHlwZW9mIGN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gSWYgaGFzIG1vZGlmaWVkIHByb3RvdHlwZVxuXG5cbiAgdmFyIHByb3QgPSBjdG9yLnByb3RvdHlwZTtcblxuICBpZiAoIWhhc09iamVjdFByb3RvdHlwZShwcm90KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBJZiBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIGFuIE9iamVjdC1zcGVjaWZpYyBtZXRob2RcblxuXG4gIGlmICghcHJvdC5oYXNPd25Qcm9wZXJ0eSgnaXNQcm90b3R5cGVPZicpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIE1vc3QgbGlrZWx5IGEgcGxhaW4gT2JqZWN0XG5cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFzT2JqZWN0UHJvdG90eXBlKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1F1ZXJ5S2V5KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRXJyb3I7XG59XG5leHBvcnQgZnVuY3Rpb24gc2xlZXAodGltZW91dCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXQpO1xuICB9KTtcbn1cbi8qKlxuICogU2NoZWR1bGVzIGEgbWljcm90YXNrLlxuICogVGhpcyBjYW4gYmUgdXNlZnVsIHRvIHNjaGVkdWxlIHN0YXRlIHVwZGF0ZXMgYWZ0ZXIgcmVuZGVyaW5nLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZU1pY3JvdGFzayhjYWxsYmFjaykge1xuICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGNhbGxiYWNrKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KTtcbiAgfSk7XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVhY3QnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBoeWRyYXRlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gdXNlSHlkcmF0ZShzdGF0ZSwgb3B0aW9ucykge1xuICB2YXIgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICB2YXIgb3B0aW9uc1JlZiA9IFJlYWN0LnVzZVJlZihvcHRpb25zKTtcbiAgb3B0aW9uc1JlZi5jdXJyZW50ID0gb3B0aW9uczsgLy8gUnVubmluZyBoeWRyYXRlIGFnYWluIHdpdGggdGhlIHNhbWUgcXVlcmllcyBpcyBzYWZlLFxuICAvLyBpdCB3b250IG92ZXJ3cml0ZSBvciBpbml0aWFsaXplIGV4aXN0aW5nIHF1ZXJpZXMsXG4gIC8vIHJlbHlpbmcgb24gdXNlTWVtbyBoZXJlIGlzIG9ubHkgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24uXG4gIC8vIGh5ZHJhdGUgY2FuIGFuZCBzaG91bGQgYmUgcnVuICpkdXJpbmcqIHJlbmRlciBoZXJlIGZvciBTU1IgdG8gd29yayBwcm9wZXJseVxuXG4gIFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgaHlkcmF0ZShxdWVyeUNsaWVudCwgc3RhdGUsIG9wdGlvbnNSZWYuY3VycmVudCk7XG4gICAgfVxuICB9LCBbcXVlcnlDbGllbnQsIHN0YXRlXSk7XG59XG5leHBvcnQgdmFyIEh5ZHJhdGUgPSBmdW5jdGlvbiBIeWRyYXRlKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIHVzZUh5ZHJhdGUoc3RhdGUsIG9wdGlvbnMpO1xuICByZXR1cm4gY2hpbGRyZW47XG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgZGVmYXVsdENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xudmFyIFF1ZXJ5Q2xpZW50U2hhcmluZ0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChmYWxzZSk7IC8vIGlmIGNvbnRleHRTaGFyaW5nIGlzIG9uLCB3ZSBzaGFyZSB0aGUgZmlyc3QgYW5kIGF0IGxlYXN0IG9uZVxuLy8gaW5zdGFuY2Ugb2YgdGhlIGNvbnRleHQgYWNyb3NzIHRoZSB3aW5kb3dcbi8vIHRvIGVuc3VyZSB0aGF0IGlmIFJlYWN0IFF1ZXJ5IGlzIHVzZWQgYWNyb3NzXG4vLyBkaWZmZXJlbnQgYnVuZGxlcyBvciBtaWNyb2Zyb250ZW5kcyB0aGV5IHdpbGxcbi8vIGFsbCB1c2UgdGhlIHNhbWUgKippbnN0YW5jZSoqIG9mIGNvbnRleHQsIHJlZ2FyZGxlc3Ncbi8vIG9mIG1vZHVsZSBzY29waW5nLlxuXG5mdW5jdGlvbiBnZXRRdWVyeUNsaWVudENvbnRleHQoY29udGV4dFNoYXJpbmcpIHtcbiAgaWYgKGNvbnRleHRTaGFyaW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKCF3aW5kb3cuUmVhY3RRdWVyeUNsaWVudENvbnRleHQpIHtcbiAgICAgIHdpbmRvdy5SZWFjdFF1ZXJ5Q2xpZW50Q29udGV4dCA9IGRlZmF1bHRDb250ZXh0O1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cuUmVhY3RRdWVyeUNsaWVudENvbnRleHQ7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdENvbnRleHQ7XG59XG5cbmV4cG9ydCB2YXIgdXNlUXVlcnlDbGllbnQgPSBmdW5jdGlvbiB1c2VRdWVyeUNsaWVudCgpIHtcbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gUmVhY3QudXNlQ29udGV4dChnZXRRdWVyeUNsaWVudENvbnRleHQoUmVhY3QudXNlQ29udGV4dChRdWVyeUNsaWVudFNoYXJpbmdDb250ZXh0KSkpO1xuXG4gIGlmICghcXVlcnlDbGllbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFF1ZXJ5Q2xpZW50IHNldCwgdXNlIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgdG8gc2V0IG9uZScpO1xuICB9XG5cbiAgcmV0dXJuIHF1ZXJ5Q2xpZW50O1xufTtcbmV4cG9ydCB2YXIgUXVlcnlDbGllbnRQcm92aWRlciA9IGZ1bmN0aW9uIFF1ZXJ5Q2xpZW50UHJvdmlkZXIoX3JlZikge1xuICB2YXIgY2xpZW50ID0gX3JlZi5jbGllbnQsXG4gICAgICBfcmVmJGNvbnRleHRTaGFyaW5nID0gX3JlZi5jb250ZXh0U2hhcmluZyxcbiAgICAgIGNvbnRleHRTaGFyaW5nID0gX3JlZiRjb250ZXh0U2hhcmluZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGNvbnRleHRTaGFyaW5nLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGNsaWVudC5tb3VudCgpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGllbnQudW5tb3VudCgpO1xuICAgIH07XG4gIH0sIFtjbGllbnRdKTtcbiAgdmFyIENvbnRleHQgPSBnZXRRdWVyeUNsaWVudENvbnRleHQoY29udGV4dFNoYXJpbmcpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlcnlDbGllbnRTaGFyaW5nQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0U2hhcmluZ1xuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNsaWVudFxuICB9LCBjaGlsZHJlbikpO1xufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyAvLyBDT05URVhUXG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbHVlKCkge1xuICB2YXIgX2lzUmVzZXQgPSBmYWxzZTtcbiAgcmV0dXJuIHtcbiAgICBjbGVhclJlc2V0OiBmdW5jdGlvbiBjbGVhclJlc2V0KCkge1xuICAgICAgX2lzUmVzZXQgPSBmYWxzZTtcbiAgICB9LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIF9pc1Jlc2V0ID0gdHJ1ZTtcbiAgICB9LFxuICAgIGlzUmVzZXQ6IGZ1bmN0aW9uIGlzUmVzZXQoKSB7XG4gICAgICByZXR1cm4gX2lzUmVzZXQ7XG4gICAgfVxuICB9O1xufVxuXG52YXIgUXVlcnlFcnJvclJlc2V0Qm91bmRhcnlDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoY3JlYXRlVmFsdWUoKSk7IC8vIEhPT0tcblxuZXhwb3J0IHZhciB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSA9IGZ1bmN0aW9uIHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChRdWVyeUVycm9yUmVzZXRCb3VuZGFyeUNvbnRleHQpO1xufTsgLy8gQ09NUE9ORU5UXG5cbmV4cG9ydCB2YXIgUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkgPSBmdW5jdGlvbiBRdWVyeUVycm9yUmVzZXRCb3VuZGFyeShfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciB2YWx1ZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjcmVhdGVWYWx1ZSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChRdWVyeUVycm9yUmVzZXRCb3VuZGFyeUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSwgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4odmFsdWUpIDogY2hpbGRyZW4pO1xufTsiLCIvLyBTaWRlIGVmZmVjdHNcbmltcG9ydCAnLi9zZXRCYXRjaFVwZGF0ZXNGbic7XG5pbXBvcnQgJy4vc2V0TG9nZ2VyJztcbmV4cG9ydCB7IFF1ZXJ5Q2xpZW50UHJvdmlkZXIsIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9RdWVyeUNsaWVudFByb3ZpZGVyJztcbmV4cG9ydCB7IFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5LCB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSB9IGZyb20gJy4vUXVlcnlFcnJvclJlc2V0Qm91bmRhcnknO1xuZXhwb3J0IHsgdXNlSXNGZXRjaGluZyB9IGZyb20gJy4vdXNlSXNGZXRjaGluZyc7XG5leHBvcnQgeyB1c2VJc011dGF0aW5nIH0gZnJvbSAnLi91c2VJc011dGF0aW5nJztcbmV4cG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnLi91c2VNdXRhdGlvbic7XG5leHBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJy4vdXNlUXVlcnknO1xuZXhwb3J0IHsgdXNlUXVlcmllcyB9IGZyb20gJy4vdXNlUXVlcmllcyc7XG5leHBvcnQgeyB1c2VJbmZpbml0ZVF1ZXJ5IH0gZnJvbSAnLi91c2VJbmZpbml0ZVF1ZXJ5JztcbmV4cG9ydCB7IHVzZUh5ZHJhdGUsIEh5ZHJhdGUgfSBmcm9tICcuL0h5ZHJhdGUnOyAvLyBUeXBlc1xuXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJzsiLCJleHBvcnQgdmFyIGxvZ2dlciA9IGNvbnNvbGU7IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5leHBvcnQgdmFyIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzID0gUmVhY3RET00udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM7IiwiaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgfSBmcm9tICcuL3JlYWN0QmF0Y2hlZFVwZGF0ZXMnO1xubm90aWZ5TWFuYWdlci5zZXRCYXRjaE5vdGlmeUZ1bmN0aW9uKHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKTsiLCJpbXBvcnQgeyBzZXRMb2dnZXIgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcblxuaWYgKGxvZ2dlcikge1xuICBzZXRMb2dnZXIobG9nZ2VyKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUvbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSB9IGZyb20gJy4vUXVlcnlFcnJvclJlc2V0Qm91bmRhcnknO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuaW1wb3J0IHsgc2hvdWxkVGhyb3dFcnJvciB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VRdWVyeShvcHRpb25zLCBPYnNlcnZlcikge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKDApLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgdmFyIGVycm9yUmVzZXRCb3VuZGFyeSA9IHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5KCk7XG4gIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gcXVlcnlDbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpOyAvLyBNYWtlIHN1cmUgcmVzdWx0cyBhcmUgb3B0aW1pc3RpY2FsbHkgc2V0IGluIGZldGNoaW5nIHN0YXRlIGJlZm9yZSBzdWJzY3JpYmluZyBvciB1cGRhdGluZyBvcHRpb25zXG5cbiAgZGVmYXVsdGVkT3B0aW9ucy5vcHRpbWlzdGljUmVzdWx0cyA9IHRydWU7IC8vIEluY2x1ZGUgY2FsbGJhY2tzIGluIGJhdGNoIHJlbmRlcnNcblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5vbkVycm9yKSB7XG4gICAgZGVmYXVsdGVkT3B0aW9ucy5vbkVycm9yID0gbm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGRlZmF1bHRlZE9wdGlvbnMub25FcnJvcik7XG4gIH1cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5vblN1Y2Nlc3MpIHtcbiAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU3VjY2VzcyA9IG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhkZWZhdWx0ZWRPcHRpb25zLm9uU3VjY2Vzcyk7XG4gIH1cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQpIHtcbiAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCA9IG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCk7XG4gIH1cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgIC8vIEFsd2F5cyBzZXQgc3RhbGUgdGltZSB3aGVuIHVzaW5nIHN1c3BlbnNlIHRvIHByZXZlbnRcbiAgICAvLyBmZXRjaGluZyBhZ2FpbiB3aGVuIGRpcmVjdGx5IG1vdW50aW5nIGFmdGVyIHN1c3BlbmRpbmdcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRlZE9wdGlvbnMuc3RhbGVUaW1lICE9PSAnbnVtYmVyJykge1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5zdGFsZVRpbWUgPSAxMDAwO1xuICAgIH0gLy8gU2V0IGNhY2hlIHRpbWUgdG8gMSBpZiB0aGUgb3B0aW9uIGhhcyBiZWVuIHNldCB0byAwXG4gICAgLy8gd2hlbiB1c2luZyBzdXNwZW5zZSB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agb2YgZmV0Y2hlc1xuXG5cbiAgICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5jYWNoZVRpbWUgPT09IDApIHtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMuY2FjaGVUaW1lID0gMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5zdXNwZW5zZSB8fCBkZWZhdWx0ZWRPcHRpb25zLnVzZUVycm9yQm91bmRhcnkpIHtcbiAgICAvLyBQcmV2ZW50IHJldHJ5aW5nIGZhaWxlZCBxdWVyeSBpZiB0aGUgZXJyb3IgYm91bmRhcnkgaGFzIG5vdCBiZWVuIHJlc2V0IHlldFxuICAgIGlmICghZXJyb3JSZXNldEJvdW5kYXJ5LmlzUmVzZXQoKSkge1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5yZXRyeU9uTW91bnQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmVyKHF1ZXJ5Q2xpZW50LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgfSksXG4gICAgICBvYnNlcnZlciA9IF9SZWFjdCR1c2VTdGF0ZTJbMF07XG5cbiAgdmFyIHJlc3VsdCA9IG9ic2VydmVyLmdldE9wdGltaXN0aWNSZXN1bHQoZGVmYXVsdGVkT3B0aW9ucyk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICBlcnJvclJlc2V0Qm91bmRhcnkuY2xlYXJSZXNldCgpO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IG9ic2VydmVyLnN1YnNjcmliZShub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICBmb3JjZVVwZGF0ZShmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiB4ICsgMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkpOyAvLyBVcGRhdGUgcmVzdWx0IHRvIG1ha2Ugc3VyZSB3ZSBkaWQgbm90IG1pc3MgYW55IHF1ZXJ5IHVwZGF0ZXNcbiAgICAvLyBiZXR3ZWVuIGNyZWF0aW5nIHRoZSBvYnNlcnZlciBhbmQgc3Vic2NyaWJpbmcgdG8gaXQuXG5cbiAgICBvYnNlcnZlci51cGRhdGVSZXN1bHQoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtlcnJvclJlc2V0Qm91bmRhcnksIG9ic2VydmVyXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRG8gbm90IG5vdGlmeSBvbiB1cGRhdGVzIGJlY2F1c2Ugb2YgY2hhbmdlcyBpbiB0aGUgb3B0aW9ucyBiZWNhdXNlXG4gICAgLy8gdGhlc2UgY2hhbmdlcyBzaG91bGQgYWxyZWFkeSBiZSByZWZsZWN0ZWQgaW4gdGhlIG9wdGltaXN0aWMgcmVzdWx0LlxuICAgIG9ic2VydmVyLnNldE9wdGlvbnMoZGVmYXVsdGVkT3B0aW9ucywge1xuICAgICAgbGlzdGVuZXJzOiBmYWxzZVxuICAgIH0pO1xuICB9LCBbZGVmYXVsdGVkT3B0aW9ucywgb2JzZXJ2ZXJdKTsgLy8gSGFuZGxlIHN1c3BlbnNlXG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMuc3VzcGVuc2UgJiYgcmVzdWx0LmlzTG9hZGluZykge1xuICAgIHRocm93IG9ic2VydmVyLmZldGNoT3B0aW1pc3RpYyhkZWZhdWx0ZWRPcHRpb25zKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZGF0YSA9IF9yZWYuZGF0YTtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBkZWZhdWx0ZWRPcHRpb25zLm9uU3VjY2VzcyhkYXRhKTtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZChkYXRhLCBudWxsKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGVycm9yUmVzZXRCb3VuZGFyeS5jbGVhclJlc2V0KCk7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGRlZmF1bHRlZE9wdGlvbnMub25FcnJvcihlcnJvcik7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQodW5kZWZpbmVkLCBlcnJvcik7XG4gICAgfSk7XG4gIH0gLy8gSGFuZGxlIGVycm9yIGJvdW5kYXJ5XG5cblxuICBpZiAocmVzdWx0LmlzRXJyb3IgJiYgIXJlc3VsdC5pc0ZldGNoaW5nICYmIHNob3VsZFRocm93RXJyb3IoZGVmYXVsdGVkT3B0aW9ucy5zdXNwZW5zZSwgZGVmYXVsdGVkT3B0aW9ucy51c2VFcnJvckJvdW5kYXJ5LCByZXN1bHQuZXJyb3IpKSB7XG4gICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICB9IC8vIEhhbmRsZSByZXN1bHQgcHJvcGVydHkgdXNhZ2UgdHJhY2tpbmdcblxuXG4gIGlmIChkZWZhdWx0ZWRPcHRpb25zLm5vdGlmeU9uQ2hhbmdlUHJvcHMgPT09ICd0cmFja2VkJykge1xuICAgIHJlc3VsdCA9IG9ic2VydmVyLnRyYWNrUmVzdWx0KHJlc3VsdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCB7IEluZmluaXRlUXVlcnlPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUvaW5maW5pdGVRdWVyeU9ic2VydmVyJztcbmltcG9ydCB7IHBhcnNlUXVlcnlBcmdzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyB1c2VCYXNlUXVlcnkgfSBmcm9tICcuL3VzZUJhc2VRdWVyeSc7IC8vIEhPT0tcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUluZmluaXRlUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykge1xuICB2YXIgb3B0aW9ucyA9IHBhcnNlUXVlcnlBcmdzKGFyZzEsIGFyZzIsIGFyZzMpO1xuICByZXR1cm4gdXNlQmFzZVF1ZXJ5KG9wdGlvbnMsIEluZmluaXRlUXVlcnlPYnNlcnZlcik7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgcGFyc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gdXNlSXNGZXRjaGluZyhhcmcxLCBhcmcyKSB7XG4gIHZhciBtb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICB2YXIgX3BhcnNlRmlsdGVyQXJncyA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyKSxcbiAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzWzBdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShxdWVyeUNsaWVudC5pc0ZldGNoaW5nKGZpbHRlcnMpKSxcbiAgICAgIGlzRmV0Y2hpbmcgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRJc0ZldGNoaW5nID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBmaWx0ZXJzUmVmID0gUmVhY3QudXNlUmVmKGZpbHRlcnMpO1xuICBmaWx0ZXJzUmVmLmN1cnJlbnQgPSBmaWx0ZXJzO1xuICB2YXIgaXNGZXRjaGluZ1JlZiA9IFJlYWN0LnVzZVJlZihpc0ZldGNoaW5nKTtcbiAgaXNGZXRjaGluZ1JlZi5jdXJyZW50ID0gaXNGZXRjaGluZztcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IHF1ZXJ5Q2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5zdWJzY3JpYmUobm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdmFyIG5ld0lzRmV0Y2hpbmcgPSBxdWVyeUNsaWVudC5pc0ZldGNoaW5nKGZpbHRlcnNSZWYuY3VycmVudCk7XG5cbiAgICAgICAgaWYgKGlzRmV0Y2hpbmdSZWYuY3VycmVudCAhPT0gbmV3SXNGZXRjaGluZykge1xuICAgICAgICAgIHNldElzRmV0Y2hpbmcobmV3SXNGZXRjaGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbcXVlcnlDbGllbnRdKTtcbiAgcmV0dXJuIGlzRmV0Y2hpbmc7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgcGFyc2VNdXRhdGlvbkZpbHRlckFyZ3MgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9RdWVyeUNsaWVudFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VJc011dGF0aW5nKGFyZzEsIGFyZzIpIHtcbiAgdmFyIG1vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB2YXIgZmlsdGVycyA9IHBhcnNlTXV0YXRpb25GaWx0ZXJBcmdzKGFyZzEsIGFyZzIpO1xuICB2YXIgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShxdWVyeUNsaWVudC5pc011dGF0aW5nKGZpbHRlcnMpKSxcbiAgICAgIGlzTXV0YXRpbmcgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRJc011dGF0aW5nID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBmaWx0ZXJzUmVmID0gUmVhY3QudXNlUmVmKGZpbHRlcnMpO1xuICBmaWx0ZXJzUmVmLmN1cnJlbnQgPSBmaWx0ZXJzO1xuICB2YXIgaXNNdXRhdGluZ1JlZiA9IFJlYWN0LnVzZVJlZihpc011dGF0aW5nKTtcbiAgaXNNdXRhdGluZ1JlZi5jdXJyZW50ID0gaXNNdXRhdGluZztcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IHF1ZXJ5Q2xpZW50LmdldE11dGF0aW9uQ2FjaGUoKS5zdWJzY3JpYmUobm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdmFyIG5ld0lzTXV0YXRpbmcgPSBxdWVyeUNsaWVudC5pc011dGF0aW5nKGZpbHRlcnNSZWYuY3VycmVudCk7XG5cbiAgICAgICAgaWYgKGlzTXV0YXRpbmdSZWYuY3VycmVudCAhPT0gbmV3SXNNdXRhdGluZykge1xuICAgICAgICAgIHNldElzTXV0YXRpbmcobmV3SXNNdXRhdGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbcXVlcnlDbGllbnRdKTtcbiAgcmV0dXJuIGlzTXV0YXRpbmc7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUvbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBub29wLCBwYXJzZU11dGF0aW9uQXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgTXV0YXRpb25PYnNlcnZlciB9IGZyb20gJy4uL2NvcmUvbXV0YXRpb25PYnNlcnZlcic7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5pbXBvcnQgeyBzaG91bGRUaHJvd0Vycm9yIH0gZnJvbSAnLi91dGlscyc7IC8vIEhPT0tcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU11dGF0aW9uKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgdmFyIG1vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgwKSxcbiAgICAgIGZvcmNlVXBkYXRlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBvcHRpb25zID0gcGFyc2VNdXRhdGlvbkFyZ3MoYXJnMSwgYXJnMiwgYXJnMyk7XG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIHZhciBvYnNSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBpZiAoIW9ic1JlZi5jdXJyZW50KSB7XG4gICAgb2JzUmVmLmN1cnJlbnQgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihxdWVyeUNsaWVudCwgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgb2JzUmVmLmN1cnJlbnQuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVzdWx0ID0gb2JzUmVmLmN1cnJlbnQuZ2V0Q3VycmVudFJlc3VsdCgpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gb2JzUmVmLmN1cnJlbnQuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGZvcmNlVXBkYXRlKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIHggKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHZhciBtdXRhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFyaWFibGVzLCBtdXRhdGVPcHRpb25zKSB7XG4gICAgb2JzUmVmLmN1cnJlbnQubXV0YXRlKHZhcmlhYmxlcywgbXV0YXRlT3B0aW9ucykuY2F0Y2gobm9vcCk7XG4gIH0sIFtdKTtcblxuICBpZiAoY3VycmVudFJlc3VsdC5lcnJvciAmJiBzaG91bGRUaHJvd0Vycm9yKHVuZGVmaW5lZCwgb2JzUmVmLmN1cnJlbnQub3B0aW9ucy51c2VFcnJvckJvdW5kYXJ5LCBjdXJyZW50UmVzdWx0LmVycm9yKSkge1xuICAgIHRocm93IGN1cnJlbnRSZXN1bHQuZXJyb3I7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGN1cnJlbnRSZXN1bHQsIHtcbiAgICBtdXRhdGU6IG11dGF0ZSxcbiAgICBtdXRhdGVBc3luYzogY3VycmVudFJlc3VsdC5tdXRhdGVcbiAgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgUXVlcmllc09ic2VydmVyIH0gZnJvbSAnLi4vY29yZS9xdWVyaWVzT2JzZXJ2ZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXJpZXMocXVlcmllcykge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKDApLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgdmFyIGRlZmF1bHRlZFF1ZXJpZXMgPSBxdWVyaWVzLm1hcChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gcXVlcnlDbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpOyAvLyBNYWtlIHN1cmUgdGhlIHJlc3VsdHMgYXJlIGFscmVhZHkgaW4gZmV0Y2hpbmcgc3RhdGUgYmVmb3JlIHN1YnNjcmliaW5nIG9yIHVwZGF0aW5nIG9wdGlvbnNcblxuICAgIGRlZmF1bHRlZE9wdGlvbnMub3B0aW1pc3RpY1Jlc3VsdHMgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0ZWRPcHRpb25zO1xuICB9KTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFF1ZXJpZXNPYnNlcnZlcihxdWVyeUNsaWVudCwgZGVmYXVsdGVkUXVlcmllcyk7XG4gIH0pLFxuICAgICAgb2JzZXJ2ZXIgPSBfUmVhY3QkdXNlU3RhdGUyWzBdO1xuXG4gIHZhciByZXN1bHQgPSBvYnNlcnZlci5nZXRPcHRpbWlzdGljUmVzdWx0KGRlZmF1bHRlZFF1ZXJpZXMpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gb2JzZXJ2ZXIuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGZvcmNlVXBkYXRlKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIHggKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbb2JzZXJ2ZXJdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBEbyBub3Qgbm90aWZ5IG9uIHVwZGF0ZXMgYmVjYXVzZSBvZiBjaGFuZ2VzIGluIHRoZSBvcHRpb25zIGJlY2F1c2VcbiAgICAvLyB0aGVzZSBjaGFuZ2VzIHNob3VsZCBhbHJlYWR5IGJlIHJlZmxlY3RlZCBpbiB0aGUgb3B0aW1pc3RpYyByZXN1bHQuXG4gICAgb2JzZXJ2ZXIuc2V0UXVlcmllcyhkZWZhdWx0ZWRRdWVyaWVzLCB7XG4gICAgICBsaXN0ZW5lcnM6IGZhbHNlXG4gICAgfSk7XG4gIH0sIFtkZWZhdWx0ZWRRdWVyaWVzLCBvYnNlcnZlcl0pO1xuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCB7IFF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IHBhcnNlUXVlcnlBcmdzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyB1c2VCYXNlUXVlcnkgfSBmcm9tICcuL3VzZUJhc2VRdWVyeSc7IC8vIEhPT0tcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgdmFyIHBhcnNlZE9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgcmV0dXJuIHVzZUJhc2VRdWVyeShwYXJzZWRPcHRpb25zLCBRdWVyeU9ic2VydmVyKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2hvdWxkVGhyb3dFcnJvcihzdXNwZW5zZSwgX3VzZUVycm9yQm91bmRhcnksIGVycm9yKSB7XG4gIC8vIEFsbG93IHVzZUVycm9yQm91bmRhcnkgZnVuY3Rpb24gdG8gb3ZlcnJpZGUgdGhyb3dpbmcgYmVoYXZpb3Igb24gYSBwZXItZXJyb3IgYmFzaXNcbiAgaWYgKHR5cGVvZiBfdXNlRXJyb3JCb3VuZGFyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfdXNlRXJyb3JCb3VuZGFyeShlcnJvcik7XG4gIH0gLy8gQWxsb3cgdXNlRXJyb3JCb3VuZGFyeSB0byBvdmVycmlkZSBzdXNwZW5zZSdzIHRocm93aW5nIGJlaGF2aW91clxuXG5cbiAgaWYgKHR5cGVvZiBfdXNlRXJyb3JCb3VuZGFyeSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gX3VzZUVycm9yQm91bmRhcnk7IC8vIElmIHN1c3BlbnNlIGlzIGVuYWJsZWQgZGVmYXVsdCB0byB0aHJvd2luZyBlcnJvcnNcblxuICByZXR1cm4gISFzdXNwZW5zZTtcbn0iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnRSZWYiLCJnZXRDbGllbnQiLCJjdXJyZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiXSwic291cmNlUm9vdCI6IiJ9