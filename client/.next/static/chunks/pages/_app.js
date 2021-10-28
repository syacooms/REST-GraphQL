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
    if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();
    return clientRef.current;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
    client: getClient(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsK0ZBQStGLGVBQWU7QUFDOUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVIsa0RBQWtEO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRDs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7OztBQUdsQjtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJIQUEySDtBQUMzSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9FQUFvRTs7QUFFcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLEdBQUc7QUFDZCxXQUFXLEdBQUc7QUFDZCxXQUFXLGVBQWU7QUFDMUIsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmlEO0FBQ2xDO0FBQ2Y7QUFDQTtBQUNBLEVBQUUsMkRBQWM7QUFDaEI7Ozs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5zY3NzP2QzYTkiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9mb2N1c01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9oeWRyYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL2luZmluaXRlUXVlcnlCZWhhdmlvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL2luZmluaXRlUXVlcnlPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL211dGF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvbXV0YXRpb25DYWNoZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL211dGF0aW9uT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9ub3RpZnlNYW5hZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvb25saW5lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3F1ZXJpZXNPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3F1ZXJ5LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvcXVlcnlDYWNoZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3F1ZXJ5Q2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvcXVlcnlPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3JldHJ5ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9zdWJzY3JpYmFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L0h5ZHJhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvUXVlcnlDbGllbnRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9RdWVyeUVycm9yUmVzZXRCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvcmVhY3RCYXRjaGVkVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9zZXRCYXRjaFVwZGF0ZXNGbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9zZXRMb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlQmFzZVF1ZXJ5LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZUluZmluaXRlUXVlcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlSXNGZXRjaGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC91c2VJc011dGF0aW5nLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZU11dGF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZVF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlUXVlcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxuY29uc3QgQXBwID0gKCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAgIGNvbnN0IGNsaWVudFJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjbGllbnRSZWYuY3VycmVudCkgY2xpZW50UmVmLmN1cnJlbnQgPSBuZXcgUXVlcnlDbGllbnQoKVxyXG4gICAgICAgIHJldHVybiBjbGllbnRSZWYuY3VycmVudFxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtnZXRDbGllbnQoKX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzPy4oY3R4KVxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVs0XSEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzRdIS4vaW5kZXguc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbNF0hLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUxKCkge1xuICAgIGxldCBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgICAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgICAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICAgICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbn0oKTtcbmNvbnN0IGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldDEoKSB7XG4gICAgY29uc3QgbWVtbyA9IHtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgICAgICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgICB9O1xufSgpO1xuY29uc3Qgc3R5bGVzSW5Eb20gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICBsZXQgcmVzdWx0ID0gLTE7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZENvdW50TWFwID0ge1xuICAgIH07XG4gICAgY29uc3QgaWRlbnRpZmllcnMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0W2ldO1xuICAgICAgICBjb25zdCBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgICAgICBjb25zdCBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBpZCArICcgJyArIGNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICAgICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgICAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgICAgICB9O1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgICAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICAgIH1cbiAgICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHtcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3Qgbm9uY2UgPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gICAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gICAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqLyBjb25zdCByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0MSgpIHtcbiAgICBjb25zdCB0ZXh0U3RvcmUgPSBbXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgICB9O1xufSgpO1xuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gICAgY29uc3QgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyAnQG1lZGlhICcgKyBvYmoubWVkaWEgKyAnIHsnICsgb2JqLmNzcyArICd9JyA6IG9iai5jc3M7XG4gICAgLy8gRm9yIG9sZCBJRVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi8gaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuICAgICAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICAgIGxldCBjc3MgPSBvYmouY3NzO1xuICAgIGNvbnN0IG1lZGlhID0gb2JqLm1lZGlhO1xuICAgIGNvbnN0IHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICAgIH1cbiAgICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJztcbiAgICB9XG4gICAgLy8gRm9yIG9sZCBJRVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi8gaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxufVxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5sZXQgc2luZ2xldG9uQ291bnRlciA9IDA7XG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgICBsZXQgc3R5bGU7XG4gICAgbGV0IHVwZGF0ZTtcbiAgICBsZXQgcmVtb3ZlO1xuICAgIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgICAgICBjb25zdCBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgICAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICAgICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgICAgIHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKG9iaik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgICAgICBpZiAobmV3T2JqKSB7XG4gICAgICAgICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7XG4gICAgfTtcbiAgICAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG4gICAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgICAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgICB9XG4gICAgbGlzdCA9IGxpc3QgfHwgW107XG4gICAgbGV0IGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICAgICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICAgIGZvcihsZXQgaTEgPSAwOyBpMSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkxKyspe1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpMV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgaWYgKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgICB9O1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jX19uZXh0IHtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5tZXNzYWdlcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLm1lc3NhZ2VzX19pbnB1dCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xcbn1cXG4ubWVzc2FnZXNfX2lucHV0ID4gKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5tZXNzYWdlc19faW5wdXQgdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xcbiAgICAgLW1vei1ib3gtZmxleDogMTtcXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xcbn1cXG4ubWVzc2FnZXNfX2lucHV0IGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcbi5tZXNzYWdlc19faXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDE1cHggMTVweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjYWFhO1xcbn1cXG4ubWVzc2FnZXNfX2l0ZW0gaDMge1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBtYXJnaW46IDAgMCAxMHB4O1xcbn1cXG4ubWVzc2FnZXNfX2l0ZW0gc3ViIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4ubWVzc2FnZXNfX2l0ZW0gcCB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLm1lc3NhZ2VzX19pdGVtOmhvdmVyIC5tZXNzYWdlc19fYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1lc3NhZ2VzX19pdGVtIC5tZXNzYWdlc19faW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tZXNzYWdlc19fYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICByaWdodDogMTBweDtcXG4gIGJvdHRvbTogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFJSjtBQUhJO0VBQ0UscUJBQUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBS047QUFKTTtFQUNFLDhCQUFBO0tBQUEsMkJBQUE7VUFBQSxzQkFBQTtBQU1SO0FBSk07RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxnQkFBQTtVQUFBLFlBQUE7QUFNUjtBQUpNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBTVI7QUFISTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUtOO0FBSk07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTVI7QUFKTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQU1SO0FBSk07RUFDRSxjQUFBO0FBTVI7QUFKTTtFQUNFLGNBQUE7QUFNUjtBQUpNO0VBQ0UsV0FBQTtBQU1SO0FBSEk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBS05cIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gICNfX25leHQge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICB9XFxyXFxuICBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICB9XFxyXFxuICAubWVzc2FnZXMge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgICZfX2lucHV0IHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XFxyXFxuICAgICAgPiAqIHtcXHJcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIHRleHRhcmVhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjYWFhO1xcclxcbiAgICAgIGgzIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgc3ViIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBwIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOmhvdmVyIC5tZXNzYWdlc19fYnV0dG9ucyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLm1lc3NhZ2VzX19pbnB1dCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fYnV0dG9ucyB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIEZvY3VzTWFuYWdlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShGb2N1c01hbmFnZXIsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIEZvY3VzTWFuYWdlcigpIHtcbiAgICByZXR1cm4gX1N1YnNjcmliYWJsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRm9jdXNNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5zZXREZWZhdWx0RXZlbnRMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHNldEV2ZW50TGlzdGVuZXIoc2V0dXApIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gc2V0dXAoZnVuY3Rpb24gKGZvY3VzZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgZm9jdXNlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIF90aGlzLnNldEZvY3VzZWQoZm9jdXNlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vbkZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldEZvY3VzZWQgPSBmdW5jdGlvbiBzZXRGb2N1c2VkKGZvY3VzZWQpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmb2N1c2VkO1xuXG4gICAgaWYgKGZvY3VzZWQpIHtcbiAgICAgIHRoaXMub25Gb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzRm9jdXNlZCA9IGZ1bmN0aW9uIGlzRm9jdXNlZCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZm9jdXNlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb2N1c2VkO1xuICAgIH0gLy8gZG9jdW1lbnQgZ2xvYmFsIGNhbiBiZSB1bmF2YWlsYWJsZSBpbiByZWFjdCBuYXRpdmVcblxuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCAndmlzaWJsZScsICdwcmVyZW5kZXInXS5pbmNsdWRlcyhkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpO1xuICB9O1xuXG4gIF9wcm90by5zZXREZWZhdWx0RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHNldERlZmF1bHRFdmVudExpc3RlbmVyKCkge1xuICAgIHZhciBfd2luZG93O1xuXG4gICAgaWYgKCFpc1NlcnZlciAmJiAoKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpKSB7XG4gICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXIoZnVuY3Rpb24gKG9uRm9jdXMpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIG9uRm9jdXMoKTtcbiAgICAgICAgfTsgLy8gTGlzdGVuIHRvIHZpc2liaWxsaXR5Y2hhbmdlIGFuZCBmb2N1c1xuXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEJlIHN1cmUgdG8gdW5zdWJzY3JpYmUgaWYgYSBuZXcgaGFuZGxlciBpcyBzZXRcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGxpc3RlbmVyKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEZvY3VzTWFuYWdlcjtcbn0oU3Vic2NyaWJhYmxlKTtcblxuZXhwb3J0IHZhciBmb2N1c01hbmFnZXIgPSBuZXcgRm9jdXNNYW5hZ2VyKCk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5cbi8vIFRZUEVTXG4vLyBGVU5DVElPTlNcbmZ1bmN0aW9uIGRlaHlkcmF0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gIHJldHVybiB7XG4gICAgbXV0YXRpb25LZXk6IG11dGF0aW9uLm9wdGlvbnMubXV0YXRpb25LZXksXG4gICAgc3RhdGU6IG11dGF0aW9uLnN0YXRlXG4gIH07XG59IC8vIE1vc3QgY29uZmlnIGlzIG5vdCBkZWh5ZHJhdGVkIGJ1dCBpbnN0ZWFkIG1lYW50IHRvIGNvbmZpZ3VyZSBhZ2FpbiB3aGVuXG4vLyBjb25zdW1pbmcgdGhlIGRlL3JlaHlkcmF0ZWQgZGF0YSwgdHlwaWNhbGx5IHdpdGggdXNlUXVlcnkgb24gdGhlIGNsaWVudC5cbi8vIFNvbWV0aW1lcyBpdCBtaWdodCBtYWtlIHNlbnNlIHRvIHByZWZldGNoIGRhdGEgb24gdGhlIHNlcnZlciBhbmQgaW5jbHVkZVxuLy8gaW4gdGhlIGh0bWwtcGF5bG9hZCwgYnV0IG5vdCBjb25zdW1lIGl0IG9uIHRoZSBpbml0aWFsIHJlbmRlci5cblxuXG5mdW5jdGlvbiBkZWh5ZHJhdGVRdWVyeShxdWVyeSkge1xuICByZXR1cm4ge1xuICAgIHN0YXRlOiBxdWVyeS5zdGF0ZSxcbiAgICBxdWVyeUtleTogcXVlcnkucXVlcnlLZXksXG4gICAgcXVlcnlIYXNoOiBxdWVyeS5xdWVyeUhhc2hcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFNob3VsZERlaHlkcmF0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gIHJldHVybiBtdXRhdGlvbi5zdGF0ZS5pc1BhdXNlZDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFNob3VsZERlaHlkcmF0ZVF1ZXJ5KHF1ZXJ5KSB7XG4gIHJldHVybiBxdWVyeS5zdGF0ZS5zdGF0dXMgPT09ICdzdWNjZXNzJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlaHlkcmF0ZShjbGllbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zLCBfb3B0aW9uczI7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBtdXRhdGlvbnMgPSBbXTtcbiAgdmFyIHF1ZXJpZXMgPSBbXTtcblxuICBpZiAoKChfb3B0aW9ucyA9IG9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfb3B0aW9ucy5kZWh5ZHJhdGVNdXRhdGlvbnMpICE9PSBmYWxzZSkge1xuICAgIHZhciBzaG91bGREZWh5ZHJhdGVNdXRhdGlvbiA9IG9wdGlvbnMuc2hvdWxkRGVoeWRyYXRlTXV0YXRpb24gfHwgZGVmYXVsdFNob3VsZERlaHlkcmF0ZU11dGF0aW9uO1xuICAgIGNsaWVudC5nZXRNdXRhdGlvbkNhY2hlKCkuZ2V0QWxsKCkuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIGlmIChzaG91bGREZWh5ZHJhdGVNdXRhdGlvbihtdXRhdGlvbikpIHtcbiAgICAgICAgbXV0YXRpb25zLnB1c2goZGVoeWRyYXRlTXV0YXRpb24obXV0YXRpb24pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICgoKF9vcHRpb25zMiA9IG9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfb3B0aW9uczIuZGVoeWRyYXRlUXVlcmllcykgIT09IGZhbHNlKSB7XG4gICAgdmFyIHNob3VsZERlaHlkcmF0ZVF1ZXJ5ID0gb3B0aW9ucy5zaG91bGREZWh5ZHJhdGVRdWVyeSB8fCBkZWZhdWx0U2hvdWxkRGVoeWRyYXRlUXVlcnk7XG4gICAgY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5nZXRBbGwoKS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgaWYgKHNob3VsZERlaHlkcmF0ZVF1ZXJ5KHF1ZXJ5KSkge1xuICAgICAgICBxdWVyaWVzLnB1c2goZGVoeWRyYXRlUXVlcnkocXVlcnkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbXV0YXRpb25zOiBtdXRhdGlvbnMsXG4gICAgcXVlcmllczogcXVlcmllc1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUoY2xpZW50LCBkZWh5ZHJhdGVkU3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkZWh5ZHJhdGVkU3RhdGUgIT09ICdvYmplY3QnIHx8IGRlaHlkcmF0ZWRTdGF0ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtdXRhdGlvbkNhY2hlID0gY2xpZW50LmdldE11dGF0aW9uQ2FjaGUoKTtcbiAgdmFyIHF1ZXJ5Q2FjaGUgPSBjbGllbnQuZ2V0UXVlcnlDYWNoZSgpO1xuICB2YXIgbXV0YXRpb25zID0gZGVoeWRyYXRlZFN0YXRlLm11dGF0aW9ucyB8fCBbXTtcbiAgdmFyIHF1ZXJpZXMgPSBkZWh5ZHJhdGVkU3RhdGUucXVlcmllcyB8fCBbXTtcbiAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlaHlkcmF0ZWRNdXRhdGlvbikge1xuICAgIHZhciBfb3B0aW9ucyRkZWZhdWx0T3B0aW87XG5cbiAgICBtdXRhdGlvbkNhY2hlLmJ1aWxkKGNsaWVudCwgX2V4dGVuZHMoe30sIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IChfb3B0aW9ucyRkZWZhdWx0T3B0aW8gPSBvcHRpb25zLmRlZmF1bHRPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX29wdGlvbnMkZGVmYXVsdE9wdGlvLm11dGF0aW9ucywge1xuICAgICAgbXV0YXRpb25LZXk6IGRlaHlkcmF0ZWRNdXRhdGlvbi5tdXRhdGlvbktleVxuICAgIH0pLCBkZWh5ZHJhdGVkTXV0YXRpb24uc3RhdGUpO1xuICB9KTtcbiAgcXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChkZWh5ZHJhdGVkUXVlcnkpIHtcbiAgICB2YXIgX29wdGlvbnMkZGVmYXVsdE9wdGlvMjtcblxuICAgIHZhciBxdWVyeSA9IHF1ZXJ5Q2FjaGUuZ2V0KGRlaHlkcmF0ZWRRdWVyeS5xdWVyeUhhc2gpOyAvLyBEbyBub3QgaHlkcmF0ZSBpZiBhbiBleGlzdGluZyBxdWVyeSBleGlzdHMgd2l0aCBuZXdlciBkYXRhXG5cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIGlmIChxdWVyeS5zdGF0ZS5kYXRhVXBkYXRlZEF0IDwgZGVoeWRyYXRlZFF1ZXJ5LnN0YXRlLmRhdGFVcGRhdGVkQXQpIHtcbiAgICAgICAgcXVlcnkuc2V0U3RhdGUoZGVoeWRyYXRlZFF1ZXJ5LnN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUmVzdG9yZSBxdWVyeVxuXG5cbiAgICBxdWVyeUNhY2hlLmJ1aWxkKGNsaWVudCwgX2V4dGVuZHMoe30sIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IChfb3B0aW9ucyRkZWZhdWx0T3B0aW8yID0gb3B0aW9ucy5kZWZhdWx0T3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRpb25zJGRlZmF1bHRPcHRpbzIucXVlcmllcywge1xuICAgICAgcXVlcnlLZXk6IGRlaHlkcmF0ZWRRdWVyeS5xdWVyeUtleSxcbiAgICAgIHF1ZXJ5SGFzaDogZGVoeWRyYXRlZFF1ZXJ5LnF1ZXJ5SGFzaFxuICAgIH0pLCBkZWh5ZHJhdGVkUXVlcnkuc3RhdGUpO1xuICB9KTtcbn0iLCJleHBvcnQgeyBDYW5jZWxsZWRFcnJvciB9IGZyb20gJy4vcmV0cnllcic7XG5leHBvcnQgeyBRdWVyeUNhY2hlIH0gZnJvbSAnLi9xdWVyeUNhY2hlJztcbmV4cG9ydCB7IFF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9xdWVyeUNsaWVudCc7XG5leHBvcnQgeyBRdWVyeU9ic2VydmVyIH0gZnJvbSAnLi9xdWVyeU9ic2VydmVyJztcbmV4cG9ydCB7IFF1ZXJpZXNPYnNlcnZlciB9IGZyb20gJy4vcXVlcmllc09ic2VydmVyJztcbmV4cG9ydCB7IEluZmluaXRlUXVlcnlPYnNlcnZlciB9IGZyb20gJy4vaW5maW5pdGVRdWVyeU9ic2VydmVyJztcbmV4cG9ydCB7IE11dGF0aW9uQ2FjaGUgfSBmcm9tICcuL211dGF0aW9uQ2FjaGUnO1xuZXhwb3J0IHsgTXV0YXRpb25PYnNlcnZlciB9IGZyb20gJy4vbXV0YXRpb25PYnNlcnZlcic7XG5leHBvcnQgeyBzZXRMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5leHBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmV4cG9ydCB7IGZvY3VzTWFuYWdlciB9IGZyb20gJy4vZm9jdXNNYW5hZ2VyJztcbmV4cG9ydCB7IG9ubGluZU1hbmFnZXIgfSBmcm9tICcuL29ubGluZU1hbmFnZXInO1xuZXhwb3J0IHsgaGFzaFF1ZXJ5S2V5LCBpc0Vycm9yIH0gZnJvbSAnLi91dGlscyc7XG5leHBvcnQgeyBpc0NhbmNlbGxlZEVycm9yIH0gZnJvbSAnLi9yZXRyeWVyJztcbmV4cG9ydCB7IGRlaHlkcmF0ZSwgaHlkcmF0ZSB9IGZyb20gJy4vaHlkcmF0aW9uJzsgLy8gVHlwZXNcblxuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7IiwiaW1wb3J0IHsgaXNDYW5jZWxhYmxlIH0gZnJvbSAnLi9yZXRyeWVyJztcbmV4cG9ydCBmdW5jdGlvbiBpbmZpbml0ZVF1ZXJ5QmVoYXZpb3IoKSB7XG4gIHJldHVybiB7XG4gICAgb25GZXRjaDogZnVuY3Rpb24gb25GZXRjaChjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmZldGNoRm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfY29udGV4dCRmZXRjaE9wdGlvbnMsIF9jb250ZXh0JGZldGNoT3B0aW9uczIsIF9jb250ZXh0JGZldGNoT3B0aW9uczMsIF9jb250ZXh0JGZldGNoT3B0aW9uczQsIF9jb250ZXh0JHN0YXRlJGRhdGEsIF9jb250ZXh0JHN0YXRlJGRhdGEyO1xuXG4gICAgICAgIHZhciByZWZldGNoUGFnZSA9IChfY29udGV4dCRmZXRjaE9wdGlvbnMgPSBjb250ZXh0LmZldGNoT3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IChfY29udGV4dCRmZXRjaE9wdGlvbnMyID0gX2NvbnRleHQkZmV0Y2hPcHRpb25zLm1ldGEpID09IG51bGwgPyB2b2lkIDAgOiBfY29udGV4dCRmZXRjaE9wdGlvbnMyLnJlZmV0Y2hQYWdlO1xuICAgICAgICB2YXIgZmV0Y2hNb3JlID0gKF9jb250ZXh0JGZldGNoT3B0aW9uczMgPSBjb250ZXh0LmZldGNoT3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IChfY29udGV4dCRmZXRjaE9wdGlvbnM0ID0gX2NvbnRleHQkZmV0Y2hPcHRpb25zMy5tZXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2NvbnRleHQkZmV0Y2hPcHRpb25zNC5mZXRjaE1vcmU7XG4gICAgICAgIHZhciBwYWdlUGFyYW0gPSBmZXRjaE1vcmUgPT0gbnVsbCA/IHZvaWQgMCA6IGZldGNoTW9yZS5wYWdlUGFyYW07XG4gICAgICAgIHZhciBpc0ZldGNoaW5nTmV4dFBhZ2UgPSAoZmV0Y2hNb3JlID09IG51bGwgPyB2b2lkIDAgOiBmZXRjaE1vcmUuZGlyZWN0aW9uKSA9PT0gJ2ZvcndhcmQnO1xuICAgICAgICB2YXIgaXNGZXRjaGluZ1ByZXZpb3VzUGFnZSA9IChmZXRjaE1vcmUgPT0gbnVsbCA/IHZvaWQgMCA6IGZldGNoTW9yZS5kaXJlY3Rpb24pID09PSAnYmFja3dhcmQnO1xuICAgICAgICB2YXIgb2xkUGFnZXMgPSAoKF9jb250ZXh0JHN0YXRlJGRhdGEgPSBjb250ZXh0LnN0YXRlLmRhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfY29udGV4dCRzdGF0ZSRkYXRhLnBhZ2VzKSB8fCBbXTtcbiAgICAgICAgdmFyIG9sZFBhZ2VQYXJhbXMgPSAoKF9jb250ZXh0JHN0YXRlJGRhdGEyID0gY29udGV4dC5zdGF0ZS5kYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2NvbnRleHQkc3RhdGUkZGF0YTIucGFnZVBhcmFtcykgfHwgW107XG4gICAgICAgIHZhciBuZXdQYWdlUGFyYW1zID0gb2xkUGFnZVBhcmFtcztcbiAgICAgICAgdmFyIGNhbmNlbGxlZCA9IGZhbHNlOyAvLyBHZXQgcXVlcnkgZnVuY3Rpb25cblxuICAgICAgICB2YXIgcXVlcnlGbiA9IGNvbnRleHQub3B0aW9ucy5xdWVyeUZuIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ01pc3NpbmcgcXVlcnlGbicpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBidWlsZE5ld1BhZ2VzID0gZnVuY3Rpb24gYnVpbGROZXdQYWdlcyhwYWdlcywgcGFyYW0sIHBhZ2UsIHByZXZpb3VzKSB7XG4gICAgICAgICAgbmV3UGFnZVBhcmFtcyA9IHByZXZpb3VzID8gW3BhcmFtXS5jb25jYXQobmV3UGFnZVBhcmFtcykgOiBbXS5jb25jYXQobmV3UGFnZVBhcmFtcywgW3BhcmFtXSk7XG4gICAgICAgICAgcmV0dXJuIHByZXZpb3VzID8gW3BhZ2VdLmNvbmNhdChwYWdlcykgOiBbXS5jb25jYXQocGFnZXMsIFtwYWdlXSk7XG4gICAgICAgIH07IC8vIENyZWF0ZSBmdW5jdGlvbiB0byBmZXRjaCBhIHBhZ2VcblxuXG4gICAgICAgIHZhciBmZXRjaFBhZ2UgPSBmdW5jdGlvbiBmZXRjaFBhZ2UocGFnZXMsIG1hbnVhbCwgcGFyYW0sIHByZXZpb3VzKSB7XG4gICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdDYW5jZWxsZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09PSAndW5kZWZpbmVkJyAmJiAhbWFudWFsICYmIHBhZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwYWdlcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHF1ZXJ5Rm5Db250ZXh0ID0ge1xuICAgICAgICAgICAgcXVlcnlLZXk6IGNvbnRleHQucXVlcnlLZXksXG4gICAgICAgICAgICBwYWdlUGFyYW06IHBhcmFtLFxuICAgICAgICAgICAgbWV0YTogY29udGV4dC5tZXRhXG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgcXVlcnlGblJlc3VsdCA9IHF1ZXJ5Rm4ocXVlcnlGbkNvbnRleHQpO1xuICAgICAgICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHF1ZXJ5Rm5SZXN1bHQpLnRoZW4oZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBidWlsZE5ld1BhZ2VzKHBhZ2VzLCBwYXJhbSwgcGFnZSwgcHJldmlvdXMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGlzQ2FuY2VsYWJsZShxdWVyeUZuUmVzdWx0KSkge1xuICAgICAgICAgICAgdmFyIHByb21pc2VBc0FueSA9IHByb21pc2U7XG4gICAgICAgICAgICBwcm9taXNlQXNBbnkuY2FuY2VsID0gcXVlcnlGblJlc3VsdC5jYW5jZWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHByb21pc2U7IC8vIEZldGNoIGZpcnN0IHBhZ2U/XG5cbiAgICAgICAgaWYgKCFvbGRQYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICBwcm9taXNlID0gZmV0Y2hQYWdlKFtdKTtcbiAgICAgICAgfSAvLyBGZXRjaCBuZXh0IHBhZ2U/XG4gICAgICAgIGVsc2UgaWYgKGlzRmV0Y2hpbmdOZXh0UGFnZSkge1xuICAgICAgICAgICAgdmFyIG1hbnVhbCA9IHR5cGVvZiBwYWdlUGFyYW0gIT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgdmFyIHBhcmFtID0gbWFudWFsID8gcGFnZVBhcmFtIDogZ2V0TmV4dFBhZ2VQYXJhbShjb250ZXh0Lm9wdGlvbnMsIG9sZFBhZ2VzKTtcbiAgICAgICAgICAgIHByb21pc2UgPSBmZXRjaFBhZ2Uob2xkUGFnZXMsIG1hbnVhbCwgcGFyYW0pO1xuICAgICAgICAgIH0gLy8gRmV0Y2ggcHJldmlvdXMgcGFnZT9cbiAgICAgICAgICBlbHNlIGlmIChpc0ZldGNoaW5nUHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICAgIHZhciBfbWFudWFsID0gdHlwZW9mIHBhZ2VQYXJhbSAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAgICAgICAgICAgdmFyIF9wYXJhbSA9IF9tYW51YWwgPyBwYWdlUGFyYW0gOiBnZXRQcmV2aW91c1BhZ2VQYXJhbShjb250ZXh0Lm9wdGlvbnMsIG9sZFBhZ2VzKTtcblxuICAgICAgICAgICAgICBwcm9taXNlID0gZmV0Y2hQYWdlKG9sZFBhZ2VzLCBfbWFudWFsLCBfcGFyYW0sIHRydWUpO1xuICAgICAgICAgICAgfSAvLyBSZWZldGNoIHBhZ2VzXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgbmV3UGFnZVBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgdmFyIG1hbnVhbCA9IHR5cGVvZiBjb250ZXh0Lm9wdGlvbnMuZ2V0TmV4dFBhZ2VQYXJhbSA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICAgICAgICB2YXIgc2hvdWxkRmV0Y2hGaXJzdFBhZ2UgPSByZWZldGNoUGFnZSAmJiBvbGRQYWdlc1swXSA/IHJlZmV0Y2hQYWdlKG9sZFBhZ2VzWzBdLCAwLCBvbGRQYWdlcykgOiB0cnVlOyAvLyBGZXRjaCBmaXJzdCBwYWdlXG5cbiAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBzaG91bGRGZXRjaEZpcnN0UGFnZSA/IGZldGNoUGFnZShbXSwgbWFudWFsLCBvbGRQYWdlUGFyYW1zWzBdKSA6IFByb21pc2UucmVzb2x2ZShidWlsZE5ld1BhZ2VzKFtdLCBvbGRQYWdlUGFyYW1zWzBdLCBvbGRQYWdlc1swXSkpOyAvLyBGZXRjaCByZW1haW5pbmcgcGFnZXNcblxuICAgICAgICAgICAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwYWdlcykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBzaG91bGRGZXRjaE5leHRQYWdlID0gcmVmZXRjaFBhZ2UgJiYgb2xkUGFnZXNbaV0gPyByZWZldGNoUGFnZShvbGRQYWdlc1tpXSwgaSwgb2xkUGFnZXMpIDogdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRGZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3BhcmFtMiA9IG1hbnVhbCA/IG9sZFBhZ2VQYXJhbXNbaV0gOiBnZXROZXh0UGFnZVBhcmFtKGNvbnRleHQub3B0aW9ucywgcGFnZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hQYWdlKHBhZ2VzLCBtYW51YWwsIF9wYXJhbTIpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYnVpbGROZXdQYWdlcyhwYWdlcywgb2xkUGFnZVBhcmFtc1tpXSwgb2xkUGFnZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG9sZFBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9sb29wKGkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICB2YXIgZmluYWxQcm9taXNlID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwYWdlcykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlczogcGFnZXMsXG4gICAgICAgICAgICBwYWdlUGFyYW1zOiBuZXdQYWdlUGFyYW1zXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBmaW5hbFByb21pc2VBc0FueSA9IGZpbmFsUHJvbWlzZTtcblxuICAgICAgICBmaW5hbFByb21pc2VBc0FueS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGlmIChpc0NhbmNlbGFibGUocHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHByb21pc2UuY2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmaW5hbFByb21pc2U7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0UGFnZVBhcmFtKG9wdGlvbnMsIHBhZ2VzKSB7XG4gIHJldHVybiBvcHRpb25zLmdldE5leHRQYWdlUGFyYW0gPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZ2V0TmV4dFBhZ2VQYXJhbShwYWdlc1twYWdlcy5sZW5ndGggLSAxXSwgcGFnZXMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpb3VzUGFnZVBhcmFtKG9wdGlvbnMsIHBhZ2VzKSB7XG4gIHJldHVybiBvcHRpb25zLmdldFByZXZpb3VzUGFnZVBhcmFtID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmdldFByZXZpb3VzUGFnZVBhcmFtKHBhZ2VzWzBdLCBwYWdlcyk7XG59XG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIG5leHQgcGFnZS5cbiAqIFJldHVybnMgYHVuZGVmaW5lZGAgaWYgaXQgY2Fubm90IGJlIGRldGVybWluZWQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc05leHRQYWdlKG9wdGlvbnMsIHBhZ2VzKSB7XG4gIGlmIChvcHRpb25zLmdldE5leHRQYWdlUGFyYW0gJiYgQXJyYXkuaXNBcnJheShwYWdlcykpIHtcbiAgICB2YXIgbmV4dFBhZ2VQYXJhbSA9IGdldE5leHRQYWdlUGFyYW0ob3B0aW9ucywgcGFnZXMpO1xuICAgIHJldHVybiB0eXBlb2YgbmV4dFBhZ2VQYXJhbSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmV4dFBhZ2VQYXJhbSAhPT0gbnVsbCAmJiBuZXh0UGFnZVBhcmFtICE9PSBmYWxzZTtcbiAgfVxufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBwcmV2aW91cyBwYWdlLlxuICogUmV0dXJucyBgdW5kZWZpbmVkYCBpZiBpdCBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzUHJldmlvdXNQYWdlKG9wdGlvbnMsIHBhZ2VzKSB7XG4gIGlmIChvcHRpb25zLmdldFByZXZpb3VzUGFnZVBhcmFtICYmIEFycmF5LmlzQXJyYXkocGFnZXMpKSB7XG4gICAgdmFyIHByZXZpb3VzUGFnZVBhcmFtID0gZ2V0UHJldmlvdXNQYWdlUGFyYW0ob3B0aW9ucywgcGFnZXMpO1xuICAgIHJldHVybiB0eXBlb2YgcHJldmlvdXNQYWdlUGFyYW0gIT09ICd1bmRlZmluZWQnICYmIHByZXZpb3VzUGFnZVBhcmFtICE9PSBudWxsICYmIHByZXZpb3VzUGFnZVBhcmFtICE9PSBmYWxzZTtcbiAgfVxufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBRdWVyeU9ic2VydmVyIH0gZnJvbSAnLi9xdWVyeU9ic2VydmVyJztcbmltcG9ydCB7IGhhc05leHRQYWdlLCBoYXNQcmV2aW91c1BhZ2UsIGluZmluaXRlUXVlcnlCZWhhdmlvciB9IGZyb20gJy4vaW5maW5pdGVRdWVyeUJlaGF2aW9yJztcbmV4cG9ydCB2YXIgSW5maW5pdGVRdWVyeU9ic2VydmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUXVlcnlPYnNlcnZlcikge1xuICBfaW5oZXJpdHNMb29zZShJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIsIF9RdWVyeU9ic2VydmVyKTtcblxuICAvLyBUeXBlIG92ZXJyaWRlXG4gIC8vIFR5cGUgb3ZlcnJpZGVcbiAgLy8gVHlwZSBvdmVycmlkZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZWxlc3MtY29uc3RydWN0b3JcbiAgZnVuY3Rpb24gSW5maW5pdGVRdWVyeU9ic2VydmVyKGNsaWVudCwgb3B0aW9ucykge1xuICAgIHJldHVybiBfUXVlcnlPYnNlcnZlci5jYWxsKHRoaXMsIGNsaWVudCwgb3B0aW9ucykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5iaW5kTWV0aG9kcyA9IGZ1bmN0aW9uIGJpbmRNZXRob2RzKCkge1xuICAgIF9RdWVyeU9ic2VydmVyLnByb3RvdHlwZS5iaW5kTWV0aG9kcy5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5mZXRjaE5leHRQYWdlID0gdGhpcy5mZXRjaE5leHRQYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mZXRjaFByZXZpb3VzUGFnZSA9IHRoaXMuZmV0Y2hQcmV2aW91c1BhZ2UuYmluZCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIF9RdWVyeU9ic2VydmVyLnByb3RvdHlwZS5zZXRPcHRpb25zLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGJlaGF2aW9yOiBpbmZpbml0ZVF1ZXJ5QmVoYXZpb3IoKVxuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0T3B0aW1pc3RpY1Jlc3VsdCA9IGZ1bmN0aW9uIGdldE9wdGltaXN0aWNSZXN1bHQob3B0aW9ucykge1xuICAgIG9wdGlvbnMuYmVoYXZpb3IgPSBpbmZpbml0ZVF1ZXJ5QmVoYXZpb3IoKTtcbiAgICByZXR1cm4gX1F1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlLmdldE9wdGltaXN0aWNSZXN1bHQuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2hOZXh0UGFnZSA9IGZ1bmN0aW9uIGZldGNoTmV4dFBhZ2Uob3B0aW9ucykge1xuICAgIHZhciBfb3B0aW9ucyRjYW5jZWxSZWZldGM7XG5cbiAgICByZXR1cm4gdGhpcy5mZXRjaCh7XG4gICAgICAvLyBUT0RPIGNvbnNpZGVyIHJlbW92aW5nIGA/PyB0cnVlYCBpbiBmdXR1cmUgYnJlYWtpbmcgY2hhbmdlLCB0byBiZSBjb25zaXN0ZW50IHdpdGggYHJlZmV0Y2hgIEFQSSAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90YW5uZXJsaW5zbGV5L3JlYWN0LXF1ZXJ5L2lzc3Vlcy8yNjE3KVxuICAgICAgY2FuY2VsUmVmZXRjaDogKF9vcHRpb25zJGNhbmNlbFJlZmV0YyA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuY2FuY2VsUmVmZXRjaCkgIT0gbnVsbCA/IF9vcHRpb25zJGNhbmNlbFJlZmV0YyA6IHRydWUsXG4gICAgICB0aHJvd09uRXJyb3I6IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudGhyb3dPbkVycm9yLFxuICAgICAgbWV0YToge1xuICAgICAgICBmZXRjaE1vcmU6IHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdmb3J3YXJkJyxcbiAgICAgICAgICBwYWdlUGFyYW06IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucGFnZVBhcmFtXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2hQcmV2aW91c1BhZ2UgPSBmdW5jdGlvbiBmZXRjaFByZXZpb3VzUGFnZShvcHRpb25zKSB7XG4gICAgdmFyIF9vcHRpb25zJGNhbmNlbFJlZmV0YzI7XG5cbiAgICByZXR1cm4gdGhpcy5mZXRjaCh7XG4gICAgICAvLyBUT0RPIGNvbnNpZGVyIHJlbW92aW5nIGA/PyB0cnVlYCBpbiBmdXR1cmUgYnJlYWtpbmcgY2hhbmdlLCB0byBiZSBjb25zaXN0ZW50IHdpdGggYHJlZmV0Y2hgIEFQSSAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90YW5uZXJsaW5zbGV5L3JlYWN0LXF1ZXJ5L2lzc3Vlcy8yNjE3KVxuICAgICAgY2FuY2VsUmVmZXRjaDogKF9vcHRpb25zJGNhbmNlbFJlZmV0YzIgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmNhbmNlbFJlZmV0Y2gpICE9IG51bGwgPyBfb3B0aW9ucyRjYW5jZWxSZWZldGMyIDogdHJ1ZSxcbiAgICAgIHRocm93T25FcnJvcjogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy50aHJvd09uRXJyb3IsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIGZldGNoTW9yZToge1xuICAgICAgICAgIGRpcmVjdGlvbjogJ2JhY2t3YXJkJyxcbiAgICAgICAgICBwYWdlUGFyYW06IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucGFnZVBhcmFtXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlUmVzdWx0ID0gZnVuY3Rpb24gY3JlYXRlUmVzdWx0KHF1ZXJ5LCBvcHRpb25zKSB7XG4gICAgdmFyIF9zdGF0ZSRkYXRhLCBfc3RhdGUkZGF0YTIsIF9zdGF0ZSRmZXRjaE1ldGEsIF9zdGF0ZSRmZXRjaE1ldGEkZmV0YywgX3N0YXRlJGZldGNoTWV0YTIsIF9zdGF0ZSRmZXRjaE1ldGEyJGZldDtcblxuICAgIHZhciBzdGF0ZSA9IHF1ZXJ5LnN0YXRlO1xuXG4gICAgdmFyIHJlc3VsdCA9IF9RdWVyeU9ic2VydmVyLnByb3RvdHlwZS5jcmVhdGVSZXN1bHQuY2FsbCh0aGlzLCBxdWVyeSwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3VsdCwge1xuICAgICAgZmV0Y2hOZXh0UGFnZTogdGhpcy5mZXRjaE5leHRQYWdlLFxuICAgICAgZmV0Y2hQcmV2aW91c1BhZ2U6IHRoaXMuZmV0Y2hQcmV2aW91c1BhZ2UsXG4gICAgICBoYXNOZXh0UGFnZTogaGFzTmV4dFBhZ2Uob3B0aW9ucywgKF9zdGF0ZSRkYXRhID0gc3RhdGUuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9zdGF0ZSRkYXRhLnBhZ2VzKSxcbiAgICAgIGhhc1ByZXZpb3VzUGFnZTogaGFzUHJldmlvdXNQYWdlKG9wdGlvbnMsIChfc3RhdGUkZGF0YTIgPSBzdGF0ZS5kYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGRhdGEyLnBhZ2VzKSxcbiAgICAgIGlzRmV0Y2hpbmdOZXh0UGFnZTogc3RhdGUuaXNGZXRjaGluZyAmJiAoKF9zdGF0ZSRmZXRjaE1ldGEgPSBzdGF0ZS5mZXRjaE1ldGEpID09IG51bGwgPyB2b2lkIDAgOiAoX3N0YXRlJGZldGNoTWV0YSRmZXRjID0gX3N0YXRlJGZldGNoTWV0YS5mZXRjaE1vcmUpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZmV0Y2hNZXRhJGZldGMuZGlyZWN0aW9uKSA9PT0gJ2ZvcndhcmQnLFxuICAgICAgaXNGZXRjaGluZ1ByZXZpb3VzUGFnZTogc3RhdGUuaXNGZXRjaGluZyAmJiAoKF9zdGF0ZSRmZXRjaE1ldGEyID0gc3RhdGUuZmV0Y2hNZXRhKSA9PSBudWxsID8gdm9pZCAwIDogKF9zdGF0ZSRmZXRjaE1ldGEyJGZldCA9IF9zdGF0ZSRmZXRjaE1ldGEyLmZldGNoTW9yZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9zdGF0ZSRmZXRjaE1ldGEyJGZldC5kaXJlY3Rpb24pID09PSAnYmFja3dhcmQnXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEluZmluaXRlUXVlcnlPYnNlcnZlcjtcbn0oUXVlcnlPYnNlcnZlcik7IiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbHMnOyAvLyBUWVBFU1xuXG4vLyBGVU5DVElPTlNcbnZhciBsb2dnZXIgPSBjb25zb2xlIHx8IHtcbiAgZXJyb3I6IG5vb3AsXG4gIHdhcm46IG5vb3AsXG4gIGxvZzogbm9vcFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dnZXIoKSB7XG4gIHJldHVybiBsb2dnZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nZ2VyKG5ld0xvZ2dlcikge1xuICBsb2dnZXIgPSBuZXdMb2dnZXI7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IFJldHJ5ZXIgfSBmcm9tICcuL3JldHJ5ZXInO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbHMnOyAvLyBUWVBFU1xuXG4vLyBDTEFTU1xuZXhwb3J0IHZhciBNdXRhdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE11dGF0aW9uKGNvbmZpZykge1xuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBjb25maWcuZGVmYXVsdE9wdGlvbnMsIGNvbmZpZy5vcHRpb25zKTtcbiAgICB0aGlzLm11dGF0aW9uSWQgPSBjb25maWcubXV0YXRpb25JZDtcbiAgICB0aGlzLm11dGF0aW9uQ2FjaGUgPSBjb25maWcubXV0YXRpb25DYWNoZTtcbiAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIHRoaXMuc3RhdGUgPSBjb25maWcuc3RhdGUgfHwgZ2V0RGVmYXVsdFN0YXRlKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTXV0YXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnc2V0U3RhdGUnLFxuICAgICAgc3RhdGU6IHN0YXRlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcikgPT09IC0xKSB7XG4gICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcbiAgICB0aGlzLm9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggIT09IG9ic2VydmVyO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMucmV0cnllcikge1xuICAgICAgdGhpcy5yZXRyeWVyLmNhbmNlbCgpO1xuICAgICAgcmV0dXJuIHRoaXMucmV0cnllci5wcm9taXNlLnRoZW4obm9vcCkuY2F0Y2gobm9vcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIF9wcm90by5jb250aW51ZSA9IGZ1bmN0aW9uIF9jb250aW51ZSgpIHtcbiAgICBpZiAodGhpcy5yZXRyeWVyKSB7XG4gICAgICB0aGlzLnJldHJ5ZXIuY29udGludWUoKTtcbiAgICAgIHJldHVybiB0aGlzLnJldHJ5ZXIucHJvbWlzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmV4ZWN1dGUgPSBmdW5jdGlvbiBleGVjdXRlKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgZGF0YTtcbiAgICB2YXIgcmVzdG9yZWQgPSB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gJ2xvYWRpbmcnO1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBpZiAoIXJlc3RvcmVkKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ2xvYWRpbmcnLFxuICAgICAgICB2YXJpYWJsZXM6IHRoaXMub3B0aW9ucy52YXJpYWJsZXNcbiAgICAgIH0pO1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLm9uTXV0YXRlID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5vcHRpb25zLm9uTXV0YXRlKF90aGlzLnN0YXRlLnZhcmlhYmxlcyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0ICE9PSBfdGhpcy5zdGF0ZS5jb250ZXh0KSB7XG4gICAgICAgICAgX3RoaXMuZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogX3RoaXMuc3RhdGUudmFyaWFibGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmV4ZWN1dGVNdXRhdGlvbigpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgZGF0YSA9IHJlc3VsdDsgLy8gTm90aWZ5IGNhY2hlIGNhbGxiYWNrXG5cbiAgICAgIF90aGlzLm11dGF0aW9uQ2FjaGUuY29uZmlnLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMubXV0YXRpb25DYWNoZS5jb25maWcub25TdWNjZXNzKGRhdGEsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCwgX3RoaXMpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5vcHRpb25zLm9uU3VjY2VzcyhkYXRhLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5vcHRpb25zLm9uU2V0dGxlZChkYXRhLCBudWxsLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIC8vIE5vdGlmeSBjYWNoZSBjYWxsYmFja1xuICAgICAgX3RoaXMubXV0YXRpb25DYWNoZS5jb25maWcub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMubXV0YXRpb25DYWNoZS5jb25maWcub25FcnJvcihlcnJvciwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0LCBfdGhpcyk7IC8vIExvZyBlcnJvclxuXG4gICAgICBnZXRMb2dnZXIoKS5lcnJvcihlcnJvcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm9wdGlvbnMub25FcnJvcihlcnJvciwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0KTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm9wdGlvbnMub25TZXR0bGVkKHVuZGVmaW5lZCwgZXJyb3IsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmV4ZWN1dGVNdXRhdGlvbiA9IGZ1bmN0aW9uIGV4ZWN1dGVNdXRhdGlvbigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcyxcbiAgICAgICAgX3RoaXMkb3B0aW9ucyRyZXRyeTtcblxuICAgIHRoaXMucmV0cnllciA9IG5ldyBSZXRyeWVyKHtcbiAgICAgIGZuOiBmdW5jdGlvbiBmbigpIHtcbiAgICAgICAgaWYgKCFfdGhpczIub3B0aW9ucy5tdXRhdGlvbkZuKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdObyBtdXRhdGlvbkZuIGZvdW5kJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXMyLm9wdGlvbnMubXV0YXRpb25GbihfdGhpczIuc3RhdGUudmFyaWFibGVzKTtcbiAgICAgIH0sXG4gICAgICBvbkZhaWw6IGZ1bmN0aW9uIG9uRmFpbCgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnZmFpbGVkJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvblBhdXNlOiBmdW5jdGlvbiBvblBhdXNlKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdwYXVzZSdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25Db250aW51ZTogZnVuY3Rpb24gb25Db250aW51ZSgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnY29udGludWUnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJldHJ5OiAoX3RoaXMkb3B0aW9ucyRyZXRyeSA9IHRoaXMub3B0aW9ucy5yZXRyeSkgIT0gbnVsbCA/IF90aGlzJG9wdGlvbnMkcmV0cnkgOiAwLFxuICAgICAgcmV0cnlEZWxheTogdGhpcy5vcHRpb25zLnJldHJ5RGVsYXlcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5yZXRyeWVyLnByb21pc2U7XG4gIH07XG5cbiAgX3Byb3RvLmRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLnN0YXRlID0gcmVkdWNlcih0aGlzLnN0YXRlLCBhY3Rpb24pO1xuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vbk11dGF0aW9uVXBkYXRlKGFjdGlvbik7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMzLm11dGF0aW9uQ2FjaGUubm90aWZ5KF90aGlzMyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE11dGF0aW9uO1xufSgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRTdGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZXh0OiB1bmRlZmluZWQsXG4gICAgZGF0YTogdW5kZWZpbmVkLFxuICAgIGVycm9yOiBudWxsLFxuICAgIGZhaWx1cmVDb3VudDogMCxcbiAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgc3RhdHVzOiAnaWRsZScsXG4gICAgdmFyaWFibGVzOiB1bmRlZmluZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBmYWlsdXJlQ291bnQ6IHN0YXRlLmZhaWx1cmVDb3VudCArIDFcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncGF1c2UnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1BhdXNlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdjb250aW51ZSc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGlzUGF1c2VkOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdsb2FkaW5nJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29udGV4dDogYWN0aW9uLmNvbnRleHQsXG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzOiAnbG9hZGluZycsXG4gICAgICAgIHZhcmlhYmxlczogYWN0aW9uLnZhcmlhYmxlc1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgaXNQYXVzZWQ6IGZhbHNlXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBmYWlsdXJlQ291bnQ6IHN0YXRlLmZhaWx1cmVDb3VudCArIDEsXG4gICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3NldFN0YXRlJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIGFjdGlvbi5zdGF0ZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSAnLi9tdXRhdGlvbic7XG5pbXBvcnQgeyBtYXRjaE11dGF0aW9uLCBub29wIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7IC8vIFRZUEVTXG5cbi8vIENMQVNTXG5leHBvcnQgdmFyIE11dGF0aW9uQ2FjaGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoTXV0YXRpb25DYWNoZSwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gTXV0YXRpb25DYWNoZShjb25maWcpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9TdWJzY3JpYmFibGUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBfdGhpcy5tdXRhdGlvbnMgPSBbXTtcbiAgICBfdGhpcy5tdXRhdGlvbklkID0gMDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTXV0YXRpb25DYWNoZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJ1aWxkID0gZnVuY3Rpb24gYnVpbGQoY2xpZW50LCBvcHRpb25zLCBzdGF0ZSkge1xuICAgIHZhciBtdXRhdGlvbiA9IG5ldyBNdXRhdGlvbih7XG4gICAgICBtdXRhdGlvbkNhY2hlOiB0aGlzLFxuICAgICAgbXV0YXRpb25JZDogKyt0aGlzLm11dGF0aW9uSWQsXG4gICAgICBvcHRpb25zOiBjbGllbnQuZGVmYXVsdE11dGF0aW9uT3B0aW9ucyhvcHRpb25zKSxcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiBvcHRpb25zLm11dGF0aW9uS2V5ID8gY2xpZW50LmdldE11dGF0aW9uRGVmYXVsdHMob3B0aW9ucy5tdXRhdGlvbktleSkgOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgICB0aGlzLmFkZChtdXRhdGlvbik7XG4gICAgcmV0dXJuIG11dGF0aW9uO1xuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQobXV0YXRpb24pIHtcbiAgICB0aGlzLm11dGF0aW9ucy5wdXNoKG11dGF0aW9uKTtcbiAgICB0aGlzLm5vdGlmeShtdXRhdGlvbik7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShtdXRhdGlvbikge1xuICAgIHRoaXMubXV0YXRpb25zID0gdGhpcy5tdXRhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCAhPT0gbXV0YXRpb247XG4gICAgfSk7XG4gICAgbXV0YXRpb24uY2FuY2VsKCk7XG4gICAgdGhpcy5ub3RpZnkobXV0YXRpb24pO1xuICB9O1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIubXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgIF90aGlzMi5yZW1vdmUobXV0YXRpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEFsbCA9IGZ1bmN0aW9uIGdldEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbnM7XG4gIH07XG5cbiAgX3Byb3RvLmZpbmQgPSBmdW5jdGlvbiBmaW5kKGZpbHRlcnMpIHtcbiAgICBpZiAodHlwZW9mIGZpbHRlcnMuZXhhY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmaWx0ZXJzLmV4YWN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbnMuZmluZChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIHJldHVybiBtYXRjaE11dGF0aW9uKGZpbHRlcnMsIG11dGF0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZmluZEFsbCA9IGZ1bmN0aW9uIGZpbmRBbGwoZmlsdGVycykge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICByZXR1cm4gbWF0Y2hNdXRhdGlvbihmaWx0ZXJzLCBtdXRhdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeShtdXRhdGlvbikge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKG11dGF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5vbkZvY3VzID0gZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICB0aGlzLnJlc3VtZVBhdXNlZE11dGF0aW9ucygpO1xuICB9O1xuXG4gIF9wcm90by5vbk9ubGluZSA9IGZ1bmN0aW9uIG9uT25saW5lKCkge1xuICAgIHRoaXMucmVzdW1lUGF1c2VkTXV0YXRpb25zKCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3VtZVBhdXNlZE11dGF0aW9ucyA9IGZ1bmN0aW9uIHJlc3VtZVBhdXNlZE11dGF0aW9ucygpIHtcbiAgICB2YXIgcGF1c2VkTXV0YXRpb25zID0gdGhpcy5tdXRhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geC5zdGF0ZS5pc1BhdXNlZDtcbiAgICB9KTtcbiAgICByZXR1cm4gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGF1c2VkTXV0YXRpb25zLnJlZHVjZShmdW5jdGlvbiAocHJvbWlzZSwgbXV0YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG11dGF0aW9uLmNvbnRpbnVlKCkuY2F0Y2gobm9vcCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBNdXRhdGlvbkNhY2hlO1xufShTdWJzY3JpYmFibGUpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0U3RhdGUgfSBmcm9tICcuL211dGF0aW9uJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuLy8gQ0xBU1NcbmV4cG9ydCB2YXIgTXV0YXRpb25PYnNlcnZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShNdXRhdGlvbk9ic2VydmVyLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBNdXRhdGlvbk9ic2VydmVyKGNsaWVudCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1N1YnNjcmliYWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuY2xpZW50ID0gY2xpZW50O1xuXG4gICAgX3RoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIF90aGlzLmJpbmRNZXRob2RzKCk7XG5cbiAgICBfdGhpcy51cGRhdGVSZXN1bHQoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNdXRhdGlvbk9ic2VydmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYmluZE1ldGhvZHMgPSBmdW5jdGlvbiBiaW5kTWV0aG9kcygpIHtcbiAgICB0aGlzLm11dGF0ZSA9IHRoaXMubXV0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xpZW50LmRlZmF1bHRNdXRhdGlvbk9wdGlvbnMob3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uVW5zdWJzY3JpYmUgPSBmdW5jdGlvbiBvblVuc3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE11dGF0aW9uO1xuXG4gICAgICAoX3RoaXMkY3VycmVudE11dGF0aW9uID0gdGhpcy5jdXJyZW50TXV0YXRpb24pID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRjdXJyZW50TXV0YXRpb24ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbk11dGF0aW9uVXBkYXRlID0gZnVuY3Rpb24gb25NdXRhdGlvblVwZGF0ZShhY3Rpb24pIHtcbiAgICB0aGlzLnVwZGF0ZVJlc3VsdCgpOyAvLyBEZXRlcm1pbmUgd2hpY2ggY2FsbGJhY2tzIHRvIHRyaWdnZXJcblxuICAgIHZhciBub3RpZnlPcHRpb25zID0ge1xuICAgICAgbGlzdGVuZXJzOiB0cnVlXG4gICAgfTtcblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICBub3RpZnlPcHRpb25zLm9uU3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgbm90aWZ5T3B0aW9ucy5vbkVycm9yID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmeShub3RpZnlPcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFJlc3VsdCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8ucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLmN1cnJlbnRNdXRhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVwZGF0ZVJlc3VsdCgpO1xuICAgIHRoaXMubm90aWZ5KHtcbiAgICAgIGxpc3RlbmVyczogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5tdXRhdGUgPSBmdW5jdGlvbiBtdXRhdGUodmFyaWFibGVzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5tdXRhdGVPcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICh0aGlzLmN1cnJlbnRNdXRhdGlvbikge1xuICAgICAgdGhpcy5jdXJyZW50TXV0YXRpb24ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50TXV0YXRpb24gPSB0aGlzLmNsaWVudC5nZXRNdXRhdGlvbkNhY2hlKCkuYnVpbGQodGhpcy5jbGllbnQsIF9leHRlbmRzKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgIHZhcmlhYmxlczogdHlwZW9mIHZhcmlhYmxlcyAhPT0gJ3VuZGVmaW5lZCcgPyB2YXJpYWJsZXMgOiB0aGlzLm9wdGlvbnMudmFyaWFibGVzXG4gICAgfSkpO1xuICAgIHRoaXMuY3VycmVudE11dGF0aW9uLmFkZE9ic2VydmVyKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNdXRhdGlvbi5leGVjdXRlKCk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVJlc3VsdCA9IGZ1bmN0aW9uIHVwZGF0ZVJlc3VsdCgpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmN1cnJlbnRNdXRhdGlvbiA/IHRoaXMuY3VycmVudE11dGF0aW9uLnN0YXRlIDogZ2V0RGVmYXVsdFN0YXRlKCk7XG5cbiAgICB2YXIgcmVzdWx0ID0gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICBpc0xvYWRpbmc6IHN0YXRlLnN0YXR1cyA9PT0gJ2xvYWRpbmcnLFxuICAgICAgaXNTdWNjZXNzOiBzdGF0ZS5zdGF0dXMgPT09ICdzdWNjZXNzJyxcbiAgICAgIGlzRXJyb3I6IHN0YXRlLnN0YXR1cyA9PT0gJ2Vycm9yJyxcbiAgICAgIGlzSWRsZTogc3RhdGUuc3RhdHVzID09PSAnaWRsZScsXG4gICAgICBtdXRhdGU6IHRoaXMubXV0YXRlLFxuICAgICAgcmVzZXQ6IHRoaXMucmVzZXRcbiAgICB9KTtcblxuICAgIHRoaXMuY3VycmVudFJlc3VsdCA9IHJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRmlyc3QgdHJpZ2dlciB0aGUgbXV0YXRlIGNhbGxiYWNrc1xuICAgICAgaWYgKF90aGlzMi5tdXRhdGVPcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm9uU3VjY2Vzcykge1xuICAgICAgICAgIF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TdWNjZXNzKF90aGlzMi5jdXJyZW50UmVzdWx0LmRhdGEsIF90aGlzMi5jdXJyZW50UmVzdWx0LnZhcmlhYmxlcywgX3RoaXMyLmN1cnJlbnRSZXN1bHQuY29udGV4dCk7XG4gICAgICAgICAgX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIubXV0YXRlT3B0aW9ucy5vblNldHRsZWQoX3RoaXMyLmN1cnJlbnRSZXN1bHQuZGF0YSwgbnVsbCwgX3RoaXMyLmN1cnJlbnRSZXN1bHQudmFyaWFibGVzLCBfdGhpczIuY3VycmVudFJlc3VsdC5jb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm9uRXJyb3IpIHtcbiAgICAgICAgICBfdGhpczIubXV0YXRlT3B0aW9ucy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIubXV0YXRlT3B0aW9ucy5vbkVycm9yKF90aGlzMi5jdXJyZW50UmVzdWx0LmVycm9yLCBfdGhpczIuY3VycmVudFJlc3VsdC52YXJpYWJsZXMsIF90aGlzMi5jdXJyZW50UmVzdWx0LmNvbnRleHQpO1xuICAgICAgICAgIF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TZXR0bGVkKHVuZGVmaW5lZCwgX3RoaXMyLmN1cnJlbnRSZXN1bHQuZXJyb3IsIF90aGlzMi5jdXJyZW50UmVzdWx0LnZhcmlhYmxlcywgX3RoaXMyLmN1cnJlbnRSZXN1bHQuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gVGhlbiB0cmlnZ2VyIHRoZSBsaXN0ZW5lcnNcblxuXG4gICAgICBpZiAob3B0aW9ucy5saXN0ZW5lcnMpIHtcbiAgICAgICAgX3RoaXMyLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyKF90aGlzMi5jdXJyZW50UmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE11dGF0aW9uT2JzZXJ2ZXI7XG59KFN1YnNjcmliYWJsZSk7IiwiaW1wb3J0IHsgc2NoZWR1bGVNaWNyb3Rhc2sgfSBmcm9tICcuL3V0aWxzJzsgLy8gVFlQRVNcblxuLy8gQ0xBU1NcbnZhciBOb3RpZnlNYW5hZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90aWZ5TWFuYWdlcigpIHtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgdGhpcy50cmFuc2FjdGlvbnMgPSAwO1xuXG4gICAgdGhpcy5ub3RpZnlGbiA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9O1xuXG4gICAgdGhpcy5iYXRjaE5vdGlmeUZuID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH07XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTm90aWZ5TWFuYWdlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJhdGNoID0gZnVuY3Rpb24gYmF0Y2goY2FsbGJhY2spIHtcbiAgICB0aGlzLnRyYW5zYWN0aW9ucysrO1xuICAgIHZhciByZXN1bHQgPSBjYWxsYmFjaygpO1xuICAgIHRoaXMudHJhbnNhY3Rpb25zLS07XG5cbiAgICBpZiAoIXRoaXMudHJhbnNhY3Rpb25zKSB7XG4gICAgICB0aGlzLmZsdXNoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8uc2NoZWR1bGUgPSBmdW5jdGlvbiBzY2hlZHVsZShjYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy50cmFuc2FjdGlvbnMpIHtcbiAgICAgIHRoaXMucXVldWUucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlTWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMubm90aWZ5Rm4oY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBbGwgY2FsbHMgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2lsbCBiZSBiYXRjaGVkLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5iYXRjaENhbGxzID0gZnVuY3Rpb24gYmF0Y2hDYWxscyhjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpczIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBxdWV1ZSA9IHRoaXMucXVldWU7XG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgc2NoZWR1bGVNaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuYmF0Y2hOb3RpZnlGbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcXVldWUuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIF90aGlzMy5ub3RpZnlGbihjYWxsYmFjayk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGEgY3VzdG9tIG5vdGlmeSBmdW5jdGlvbi5cbiAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBmb3IgZXhhbXBsZSB3cmFwIG5vdGlmaWNhdGlvbnMgd2l0aCBgUmVhY3QuYWN0YCB3aGlsZSBydW5uaW5nIHRlc3RzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXROb3RpZnlGdW5jdGlvbiA9IGZ1bmN0aW9uIHNldE5vdGlmeUZ1bmN0aW9uKGZuKSB7XG4gICAgdGhpcy5ub3RpZnlGbiA9IGZuO1xuICB9XG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGEgY3VzdG9tIGZ1bmN0aW9uIHRvIGJhdGNoIG5vdGlmaWNhdGlvbnMgdG9nZXRoZXIgaW50byBhIHNpbmdsZSB0aWNrLlxuICAgKiBCeSBkZWZhdWx0IFJlYWN0IFF1ZXJ5IHdpbGwgdXNlIHRoZSBiYXRjaCBmdW5jdGlvbiBwcm92aWRlZCBieSBSZWFjdERPTSBvciBSZWFjdCBOYXRpdmUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldEJhdGNoTm90aWZ5RnVuY3Rpb24gPSBmdW5jdGlvbiBzZXRCYXRjaE5vdGlmeUZ1bmN0aW9uKGZuKSB7XG4gICAgdGhpcy5iYXRjaE5vdGlmeUZuID0gZm47XG4gIH07XG5cbiAgcmV0dXJuIE5vdGlmeU1hbmFnZXI7XG59KCk7IC8vIFNJTkdMRVRPTlxuXG5cbmV4cG9ydCB2YXIgbm90aWZ5TWFuYWdlciA9IG5ldyBOb3RpZnlNYW5hZ2VyKCk7IiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgT25saW5lTWFuYWdlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShPbmxpbmVNYW5hZ2VyLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBPbmxpbmVNYW5hZ2VyKCkge1xuICAgIHJldHVybiBfU3Vic2NyaWJhYmxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPbmxpbmVNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5zZXREZWZhdWx0RXZlbnRMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHNldEV2ZW50TGlzdGVuZXIoc2V0dXApIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gc2V0dXAoZnVuY3Rpb24gKG9ubGluZSkge1xuICAgICAgaWYgKHR5cGVvZiBvbmxpbmUgPT09ICdib29sZWFuJykge1xuICAgICAgICBfdGhpcy5zZXRPbmxpbmUob25saW5lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLm9uT25saW5lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE9ubGluZSA9IGZ1bmN0aW9uIHNldE9ubGluZShvbmxpbmUpIHtcbiAgICB0aGlzLm9ubGluZSA9IG9ubGluZTtcblxuICAgIGlmIChvbmxpbmUpIHtcbiAgICAgIHRoaXMub25PbmxpbmUoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uT25saW5lID0gZnVuY3Rpb24gb25PbmxpbmUoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzT25saW5lID0gZnVuY3Rpb24gaXNPbmxpbmUoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9ubGluZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbmxpbmU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBuYXZpZ2F0b3Iub25MaW5lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRvci5vbkxpbmU7XG4gIH07XG5cbiAgX3Byb3RvLnNldERlZmF1bHRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gc2V0RGVmYXVsdEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdmFyIF93aW5kb3c7XG5cbiAgICBpZiAoIWlzU2VydmVyICYmICgoX3dpbmRvdyA9IHdpbmRvdykgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikpIHtcbiAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAob25PbmxpbmUpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIG9uT25saW5lKCk7XG4gICAgICAgIH07IC8vIExpc3RlbiB0byBvbmxpbmVcblxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQmUgc3VyZSB0byB1bnN1YnNjcmliZSBpZiBhIG5ldyBoYW5kbGVyIGlzIHNldFxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIE9ubGluZU1hbmFnZXI7XG59KFN1YnNjcmliYWJsZSk7XG5cbmV4cG9ydCB2YXIgb25saW5lTWFuYWdlciA9IG5ldyBPbmxpbmVNYW5hZ2VyKCk7IiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlLCByZXBsYWNlQXQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgUXVlcnlPYnNlcnZlciB9IGZyb20gJy4vcXVlcnlPYnNlcnZlcic7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG5leHBvcnQgdmFyIFF1ZXJpZXNPYnNlcnZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShRdWVyaWVzT2JzZXJ2ZXIsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIFF1ZXJpZXNPYnNlcnZlcihjbGllbnQsIHF1ZXJpZXMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9TdWJzY3JpYmFibGUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICBfdGhpcy5xdWVyaWVzID0gW107XG4gICAgX3RoaXMucmVzdWx0ID0gW107XG4gICAgX3RoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgX3RoaXMub2JzZXJ2ZXJzTWFwID0ge307XG5cbiAgICBpZiAocXVlcmllcykge1xuICAgICAgX3RoaXMuc2V0UXVlcmllcyhxdWVyaWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVlcmllc09ic2VydmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLmxpc3RlbmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgX3RoaXMyLm9uVXBkYXRlKG9ic2VydmVyLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25VbnN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uVW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgb2JzZXJ2ZXIuZGVzdHJveSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5zZXRRdWVyaWVzID0gZnVuY3Rpb24gc2V0UXVlcmllcyhxdWVyaWVzLCBub3RpZnlPcHRpb25zKSB7XG4gICAgdGhpcy5xdWVyaWVzID0gcXVlcmllcztcbiAgICB0aGlzLnVwZGF0ZU9ic2VydmVycyhub3RpZnlPcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFJlc3VsdCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5nZXRPcHRpbWlzdGljUmVzdWx0ID0gZnVuY3Rpb24gZ2V0T3B0aW1pc3RpY1Jlc3VsdChxdWVyaWVzKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICByZXR1cm4gcXVlcmllcy5tYXAoZnVuY3Rpb24gKG9wdGlvbnMsIGluZGV4KSB7XG4gICAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IF90aGlzMy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gX3RoaXMzLmdldE9ic2VydmVyKGRlZmF1bHRlZE9wdGlvbnMsIGluZGV4KS5nZXRPcHRpbWlzdGljUmVzdWx0KGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXRPYnNlcnZlciA9IGZ1bmN0aW9uIGdldE9ic2VydmVyKG9wdGlvbnMsIGluZGV4KSB7XG4gICAgdmFyIF9jdXJyZW50T2JzZXJ2ZXI7XG5cbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHRoaXMuY2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTtcbiAgICB2YXIgY3VycmVudE9ic2VydmVyID0gdGhpcy5vYnNlcnZlcnNNYXBbZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUhhc2hdO1xuXG4gICAgaWYgKCFjdXJyZW50T2JzZXJ2ZXIgJiYgZGVmYXVsdGVkT3B0aW9ucy5rZWVwUHJldmlvdXNEYXRhKSB7XG4gICAgICBjdXJyZW50T2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVyc1tpbmRleF07XG4gICAgfVxuXG4gICAgcmV0dXJuIChfY3VycmVudE9ic2VydmVyID0gY3VycmVudE9ic2VydmVyKSAhPSBudWxsID8gX2N1cnJlbnRPYnNlcnZlciA6IG5ldyBRdWVyeU9ic2VydmVyKHRoaXMuY2xpZW50LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlT2JzZXJ2ZXJzID0gZnVuY3Rpb24gdXBkYXRlT2JzZXJ2ZXJzKG5vdGlmeU9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGhhc0luZGV4Q2hhbmdlID0gZmFsc2U7XG4gICAgICB2YXIgcHJldk9ic2VydmVycyA9IF90aGlzNC5vYnNlcnZlcnM7XG4gICAgICB2YXIgcHJldk9ic2VydmVyc01hcCA9IF90aGlzNC5vYnNlcnZlcnNNYXA7XG4gICAgICB2YXIgbmV3UmVzdWx0ID0gW107XG4gICAgICB2YXIgbmV3T2JzZXJ2ZXJzID0gW107XG4gICAgICB2YXIgbmV3T2JzZXJ2ZXJzTWFwID0ge307XG5cbiAgICAgIF90aGlzNC5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbnMsIGkpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSBfdGhpczQuY2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTtcblxuICAgICAgICB2YXIgcXVlcnlIYXNoID0gZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUhhc2g7XG5cbiAgICAgICAgdmFyIG9ic2VydmVyID0gX3RoaXM0LmdldE9ic2VydmVyKGRlZmF1bHRlZE9wdGlvbnMsIGkpO1xuXG4gICAgICAgIGlmIChwcmV2T2JzZXJ2ZXJzTWFwW3F1ZXJ5SGFzaF0gfHwgZGVmYXVsdGVkT3B0aW9ucy5rZWVwUHJldmlvdXNEYXRhKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuc2V0T3B0aW9ucyhkZWZhdWx0ZWRPcHRpb25zLCBub3RpZnlPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvYnNlcnZlciAhPT0gcHJldk9ic2VydmVyc1tpXSkge1xuICAgICAgICAgIGhhc0luZGV4Q2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld09ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICAgICAgbmV3UmVzdWx0LnB1c2gob2JzZXJ2ZXIuZ2V0Q3VycmVudFJlc3VsdCgpKTtcbiAgICAgICAgbmV3T2JzZXJ2ZXJzTWFwW3F1ZXJ5SGFzaF0gPSBvYnNlcnZlcjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJldk9ic2VydmVycy5sZW5ndGggPT09IG5ld09ic2VydmVycy5sZW5ndGggJiYgIWhhc0luZGV4Q2hhbmdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXM0Lm9ic2VydmVycyA9IG5ld09ic2VydmVycztcbiAgICAgIF90aGlzNC5vYnNlcnZlcnNNYXAgPSBuZXdPYnNlcnZlcnNNYXA7XG4gICAgICBfdGhpczQucmVzdWx0ID0gbmV3UmVzdWx0O1xuXG4gICAgICBpZiAoIV90aGlzNC5oYXNMaXN0ZW5lcnMoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRpZmZlcmVuY2UocHJldk9ic2VydmVycywgbmV3T2JzZXJ2ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICAgIGRpZmZlcmVuY2UobmV3T2JzZXJ2ZXJzLCBwcmV2T2JzZXJ2ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIF90aGlzNC5vblVwZGF0ZShvYnNlcnZlciwgcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXM0Lm5vdGlmeSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKG9ic2VydmVyLCByZXN1bHQpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucmVzdWx0ID0gcmVwbGFjZUF0KHRoaXMucmVzdWx0LCBpbmRleCwgcmVzdWx0KTtcbiAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNS5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIoX3RoaXM1LnJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUXVlcmllc09ic2VydmVyO1xufShTdWJzY3JpYmFibGUpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZnVuY3Rpb25hbFVwZGF0ZSwgaXNWYWxpZFRpbWVvdXQsIG5vb3AsIHJlcGxhY2VFcXVhbERlZXAsIHRpbWVVbnRpbFN0YWxlLCBlbnN1cmVRdWVyeUtleUFycmF5IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IFJldHJ5ZXIsIGlzQ2FuY2VsbGVkRXJyb3IgfSBmcm9tICcuL3JldHJ5ZXInOyAvLyBUWVBFU1xuXG4vLyBDTEFTU1xuZXhwb3J0IHZhciBRdWVyeSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFF1ZXJ5KGNvbmZpZykge1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBjb25maWcuZGVmYXVsdE9wdGlvbnM7XG4gICAgdGhpcy5zZXRPcHRpb25zKGNvbmZpZy5vcHRpb25zKTtcbiAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIHRoaXMuY2FjaGUgPSBjb25maWcuY2FjaGU7XG4gICAgdGhpcy5xdWVyeUtleSA9IGNvbmZpZy5xdWVyeUtleTtcbiAgICB0aGlzLnF1ZXJ5SGFzaCA9IGNvbmZpZy5xdWVyeUhhc2g7XG4gICAgdGhpcy5pbml0aWFsU3RhdGUgPSBjb25maWcuc3RhdGUgfHwgdGhpcy5nZXREZWZhdWx0U3RhdGUodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XG4gICAgdGhpcy5tZXRhID0gY29uZmlnLm1ldGE7XG4gICAgdGhpcy5zY2hlZHVsZUdjKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVlcnkucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXRPcHRpb25zID0gZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMkY2FjaGVUaTtcblxuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICB0aGlzLm1ldGEgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLm1ldGE7IC8vIERlZmF1bHQgdG8gNSBtaW51dGVzIGlmIG5vdCBjYWNoZSB0aW1lIGlzIHNldFxuXG4gICAgdGhpcy5jYWNoZVRpbWUgPSBNYXRoLm1heCh0aGlzLmNhY2hlVGltZSB8fCAwLCAoX3RoaXMkb3B0aW9ucyRjYWNoZVRpID0gdGhpcy5vcHRpb25zLmNhY2hlVGltZSkgIT0gbnVsbCA/IF90aGlzJG9wdGlvbnMkY2FjaGVUaSA6IDUgKiA2MCAqIDEwMDApO1xuICB9O1xuXG4gIF9wcm90by5zZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0gb3B0aW9ucztcbiAgfTtcblxuICBfcHJvdG8uc2NoZWR1bGVHYyA9IGZ1bmN0aW9uIHNjaGVkdWxlR2MoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuY2xlYXJHY1RpbWVvdXQoKTtcblxuICAgIGlmIChpc1ZhbGlkVGltZW91dCh0aGlzLmNhY2hlVGltZSkpIHtcbiAgICAgIHRoaXMuZ2NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLm9wdGlvbmFsUmVtb3ZlKCk7XG4gICAgICB9LCB0aGlzLmNhY2hlVGltZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jbGVhckdjVGltZW91dCA9IGZ1bmN0aW9uIGNsZWFyR2NUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmdjVGltZW91dCk7XG4gICAgdGhpcy5nY1RpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLm9wdGlvbmFsUmVtb3ZlID0gZnVuY3Rpb24gb3B0aW9uYWxSZW1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLm9ic2VydmVycy5sZW5ndGggJiYgIXRoaXMuc3RhdGUuaXNGZXRjaGluZykge1xuICAgICAgdGhpcy5jYWNoZS5yZW1vdmUodGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXREYXRhID0gZnVuY3Rpb24gc2V0RGF0YSh1cGRhdGVyLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMkaXNEYXRhRSwgX3RoaXMkb3B0aW9ucztcblxuICAgIHZhciBwcmV2RGF0YSA9IHRoaXMuc3RhdGUuZGF0YTsgLy8gR2V0IHRoZSBuZXcgZGF0YVxuXG4gICAgdmFyIGRhdGEgPSBmdW5jdGlvbmFsVXBkYXRlKHVwZGF0ZXIsIHByZXZEYXRhKTsgLy8gVXNlIHByZXYgZGF0YSBpZiBhbiBpc0RhdGFFcXVhbCBmdW5jdGlvbiBpcyBkZWZpbmVkIGFuZCByZXR1cm5zIGB0cnVlYFxuXG4gICAgaWYgKChfdGhpcyRvcHRpb25zJGlzRGF0YUUgPSAoX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucykuaXNEYXRhRXF1YWwpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zJGlzRGF0YUUuY2FsbChfdGhpcyRvcHRpb25zLCBwcmV2RGF0YSwgZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBwcmV2RGF0YTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zdHJ1Y3R1cmFsU2hhcmluZyAhPT0gZmFsc2UpIHtcbiAgICAgIC8vIFN0cnVjdHVyYWxseSBzaGFyZSBkYXRhIGJldHdlZW4gcHJldiBhbmQgbmV3IGRhdGEgaWYgbmVlZGVkXG4gICAgICBkYXRhID0gcmVwbGFjZUVxdWFsRGVlcChwcmV2RGF0YSwgZGF0YSk7XG4gICAgfSAvLyBTZXQgZGF0YSBhbmQgbWFyayBpdCBhcyBjYWNoZWRcblxuXG4gICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgZGF0YVVwZGF0ZWRBdDogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy51cGRhdGVkQXRcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBfcHJvdG8uc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSwgc2V0U3RhdGVPcHRpb25zKSB7XG4gICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnc2V0U3RhdGUnLFxuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0U3RhdGVPcHRpb25zOiBzZXRTdGF0ZU9wdGlvbnNcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkcmV0cnllcjtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgIChfdGhpcyRyZXRyeWVyID0gdGhpcy5yZXRyeWVyKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcmV0cnllci5jYW5jZWwob3B0aW9ucyk7XG4gICAgcmV0dXJuIHByb21pc2UgPyBwcm9taXNlLnRoZW4obm9vcCkuY2F0Y2gobm9vcCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbGVhckdjVGltZW91dCgpO1xuICAgIHRoaXMuY2FuY2VsKHtcbiAgICAgIHNpbGVudDogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsU3RhdGUpO1xuICB9O1xuXG4gIF9wcm90by5pc0FjdGl2ZSA9IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgcmV0dXJuIG9ic2VydmVyLm9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzRmV0Y2hpbmcgPSBmdW5jdGlvbiBpc0ZldGNoaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzRmV0Y2hpbmc7XG4gIH07XG5cbiAgX3Byb3RvLmlzU3RhbGUgPSBmdW5jdGlvbiBpc1N0YWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzSW52YWxpZGF0ZWQgfHwgIXRoaXMuc3RhdGUuZGF0YVVwZGF0ZWRBdCB8fCB0aGlzLm9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgcmV0dXJuIG9ic2VydmVyLmdldEN1cnJlbnRSZXN1bHQoKS5pc1N0YWxlO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5pc1N0YWxlQnlUaW1lID0gZnVuY3Rpb24gaXNTdGFsZUJ5VGltZShzdGFsZVRpbWUpIHtcbiAgICBpZiAoc3RhbGVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIHN0YWxlVGltZSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNJbnZhbGlkYXRlZCB8fCAhdGhpcy5zdGF0ZS5kYXRhVXBkYXRlZEF0IHx8ICF0aW1lVW50aWxTdGFsZSh0aGlzLnN0YXRlLmRhdGFVcGRhdGVkQXQsIHN0YWxlVGltZSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRm9jdXMgPSBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgIHZhciBfdGhpcyRyZXRyeWVyMjtcblxuICAgIHZhciBvYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXJzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4LnNob3VsZEZldGNoT25XaW5kb3dGb2N1cygpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci5yZWZldGNoKCk7XG4gICAgfSAvLyBDb250aW51ZSBmZXRjaCBpZiBjdXJyZW50bHkgcGF1c2VkXG5cblxuICAgIChfdGhpcyRyZXRyeWVyMiA9IHRoaXMucmV0cnllcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHJldHJ5ZXIyLmNvbnRpbnVlKCk7XG4gIH07XG5cbiAgX3Byb3RvLm9uT25saW5lID0gZnVuY3Rpb24gb25PbmxpbmUoKSB7XG4gICAgdmFyIF90aGlzJHJldHJ5ZXIzO1xuXG4gICAgdmFyIG9ic2VydmVyID0gdGhpcy5vYnNlcnZlcnMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHguc2hvdWxkRmV0Y2hPblJlY29ubmVjdCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci5yZWZldGNoKCk7XG4gICAgfSAvLyBDb250aW51ZSBmZXRjaCBpZiBjdXJyZW50bHkgcGF1c2VkXG5cblxuICAgIChfdGhpcyRyZXRyeWVyMyA9IHRoaXMucmV0cnllcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHJldHJ5ZXIzLmNvbnRpbnVlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcikgPT09IC0xKSB7XG4gICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTsgLy8gU3RvcCB0aGUgcXVlcnkgZnJvbSBiZWluZyBnYXJiYWdlIGNvbGxlY3RlZFxuXG4gICAgICB0aGlzLmNsZWFyR2NUaW1lb3V0KCk7XG4gICAgICB0aGlzLmNhY2hlLm5vdGlmeSh7XG4gICAgICAgIHR5cGU6ICdvYnNlcnZlckFkZGVkJyxcbiAgICAgICAgcXVlcnk6IHRoaXMsXG4gICAgICAgIG9ic2VydmVyOiBvYnNlcnZlclxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIHJlbW92ZU9ic2VydmVyKG9ic2VydmVyKSB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpICE9PSAtMSkge1xuICAgICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggIT09IG9ic2VydmVyO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHRoZSB0cmFuc3BvcnQgbGF5ZXIgZG9lcyBub3Qgc3VwcG9ydCBjYW5jZWxsYXRpb25cbiAgICAgICAgLy8gd2UnbGwgbGV0IHRoZSBxdWVyeSBjb250aW51ZSBzbyB0aGUgcmVzdWx0IGNhbiBiZSBjYWNoZWRcbiAgICAgICAgaWYgKHRoaXMucmV0cnllcikge1xuICAgICAgICAgIGlmICh0aGlzLnJldHJ5ZXIuaXNUcmFuc3BvcnRDYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJldHJ5ZXIuY2FuY2VsKHtcbiAgICAgICAgICAgICAgcmV2ZXJ0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXRyeWVyLmNhbmNlbFJldHJ5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2FjaGVUaW1lKSB7XG4gICAgICAgICAgdGhpcy5zY2hlZHVsZUdjKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWNoZS5yZW1vdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWNoZS5ub3RpZnkoe1xuICAgICAgICB0eXBlOiAnb2JzZXJ2ZXJSZW1vdmVkJyxcbiAgICAgICAgcXVlcnk6IHRoaXMsXG4gICAgICAgIG9ic2VydmVyOiBvYnNlcnZlclxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRPYnNlcnZlcnNDb3VudCA9IGZ1bmN0aW9uIGdldE9ic2VydmVyc0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVycy5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc0ludmFsaWRhdGVkKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ2ludmFsaWRhdGUnXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoID0gZnVuY3Rpb24gZmV0Y2gob3B0aW9ucywgZmV0Y2hPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXMsXG4gICAgICAgIF90aGlzJG9wdGlvbnMkYmVoYXZpbyxcbiAgICAgICAgX2NvbnRleHQkZmV0Y2hPcHRpb25zO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNGZXRjaGluZykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVVwZGF0ZWRBdCAmJiAoZmV0Y2hPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBmZXRjaE9wdGlvbnMuY2FuY2VsUmVmZXRjaCkpIHtcbiAgICAgICAgLy8gU2lsZW50bHkgY2FuY2VsIGN1cnJlbnQgZmV0Y2ggaWYgdGhlIHVzZXIgd2FudHMgdG8gY2FuY2VsIHJlZmV0Y2hlc1xuICAgICAgICB0aGlzLmNhbmNlbCh7XG4gICAgICAgICAgc2lsZW50OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb21pc2UpIHtcbiAgICAgICAgLy8gUmV0dXJuIGN1cnJlbnQgcHJvbWlzZSBpZiB3ZSBhcmUgYWxyZWFkeSBmZXRjaGluZ1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICAgICAgfVxuICAgIH0gLy8gVXBkYXRlIGNvbmZpZyBpZiBwYXNzZWQsIG90aGVyd2lzZSB0aGUgY29uZmlnIGZyb20gdGhlIGxhc3QgZXhlY3V0aW9uIGlzIHVzZWRcblxuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9IC8vIFVzZSB0aGUgb3B0aW9ucyBmcm9tIHRoZSBmaXJzdCBvYnNlcnZlciB3aXRoIGEgcXVlcnkgZnVuY3Rpb24gaWYgbm8gZnVuY3Rpb24gaXMgZm91bmQuXG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIHdoZW4gdGhlIHF1ZXJ5IGlzIGh5ZHJhdGVkIG9yIGNyZWF0ZWQgd2l0aCBzZXRRdWVyeURhdGEuXG5cblxuICAgIGlmICghdGhpcy5vcHRpb25zLnF1ZXJ5Rm4pIHtcbiAgICAgIHZhciBvYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXJzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgub3B0aW9ucy5xdWVyeUZuO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMob2JzZXJ2ZXIub3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHF1ZXJ5S2V5ID0gZW5zdXJlUXVlcnlLZXlBcnJheSh0aGlzLnF1ZXJ5S2V5KTsgLy8gQ3JlYXRlIHF1ZXJ5IGZ1bmN0aW9uIGNvbnRleHRcblxuICAgIHZhciBxdWVyeUZuQ29udGV4dCA9IHtcbiAgICAgIHF1ZXJ5S2V5OiBxdWVyeUtleSxcbiAgICAgIHBhZ2VQYXJhbTogdW5kZWZpbmVkLFxuICAgICAgbWV0YTogdGhpcy5tZXRhXG4gICAgfTsgLy8gQ3JlYXRlIGZldGNoIGZ1bmN0aW9uXG5cbiAgICB2YXIgZmV0Y2hGbiA9IGZ1bmN0aW9uIGZldGNoRm4oKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLm9wdGlvbnMucXVlcnlGbiA/IF90aGlzMi5vcHRpb25zLnF1ZXJ5Rm4ocXVlcnlGbkNvbnRleHQpIDogUHJvbWlzZS5yZWplY3QoJ01pc3NpbmcgcXVlcnlGbicpO1xuICAgIH07IC8vIFRyaWdnZXIgYmVoYXZpb3IgaG9va1xuXG5cbiAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgIGZldGNoT3B0aW9uczogZmV0Y2hPcHRpb25zLFxuICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgcXVlcnlLZXk6IHF1ZXJ5S2V5LFxuICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICBmZXRjaEZuOiBmZXRjaEZuLFxuICAgICAgbWV0YTogdGhpcy5tZXRhXG4gICAgfTtcblxuICAgIGlmICgoX3RoaXMkb3B0aW9ucyRiZWhhdmlvID0gdGhpcy5vcHRpb25zLmJlaGF2aW9yKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9ucyRiZWhhdmlvLm9uRmV0Y2gpIHtcbiAgICAgIHZhciBfdGhpcyRvcHRpb25zJGJlaGF2aW8yO1xuXG4gICAgICAoX3RoaXMkb3B0aW9ucyRiZWhhdmlvMiA9IHRoaXMub3B0aW9ucy5iZWhhdmlvcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnMkYmVoYXZpbzIub25GZXRjaChjb250ZXh0KTtcbiAgICB9IC8vIFN0b3JlIHN0YXRlIGluIGNhc2UgdGhlIGN1cnJlbnQgZmV0Y2ggbmVlZHMgdG8gYmUgcmV2ZXJ0ZWRcblxuXG4gICAgdGhpcy5yZXZlcnRTdGF0ZSA9IHRoaXMuc3RhdGU7IC8vIFNldCB0byBmZXRjaGluZyBzdGF0ZSBpZiBub3QgYWxyZWFkeSBpbiBpdFxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzRmV0Y2hpbmcgfHwgdGhpcy5zdGF0ZS5mZXRjaE1ldGEgIT09ICgoX2NvbnRleHQkZmV0Y2hPcHRpb25zID0gY29udGV4dC5mZXRjaE9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfY29udGV4dCRmZXRjaE9wdGlvbnMubWV0YSkpIHtcbiAgICAgIHZhciBfY29udGV4dCRmZXRjaE9wdGlvbnMyO1xuXG4gICAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ2ZldGNoJyxcbiAgICAgICAgbWV0YTogKF9jb250ZXh0JGZldGNoT3B0aW9uczIgPSBjb250ZXh0LmZldGNoT3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb250ZXh0JGZldGNoT3B0aW9uczIubWV0YVxuICAgICAgfSk7XG4gICAgfSAvLyBUcnkgdG8gZmV0Y2ggdGhlIGRhdGFcblxuXG4gICAgdGhpcy5yZXRyeWVyID0gbmV3IFJldHJ5ZXIoe1xuICAgICAgZm46IGNvbnRleHQuZmV0Y2hGbixcbiAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgX3RoaXMyLnNldERhdGEoZGF0YSk7IC8vIE5vdGlmeSBjYWNoZSBjYWxsYmFja1xuXG5cbiAgICAgICAgX3RoaXMyLmNhY2hlLmNvbmZpZy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5jYWNoZS5jb25maWcub25TdWNjZXNzKGRhdGEsIF90aGlzMik7IC8vIFJlbW92ZSBxdWVyeSBhZnRlciBmZXRjaGluZyBpZiBjYWNoZSB0aW1lIGlzIDBcblxuICAgICAgICBpZiAoX3RoaXMyLmNhY2hlVGltZSA9PT0gMCkge1xuICAgICAgICAgIF90aGlzMi5vcHRpb25hbFJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICAvLyBPcHRpbWlzdGljYWxseSB1cGRhdGUgc3RhdGUgaWYgbmVlZGVkXG4gICAgICAgIGlmICghKGlzQ2FuY2VsbGVkRXJyb3IoZXJyb3IpICYmIGVycm9yLnNpbGVudCkpIHtcbiAgICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0NhbmNlbGxlZEVycm9yKGVycm9yKSkge1xuICAgICAgICAgIC8vIE5vdGlmeSBjYWNoZSBjYWxsYmFja1xuICAgICAgICAgIF90aGlzMi5jYWNoZS5jb25maWcub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLmNhY2hlLmNvbmZpZy5vbkVycm9yKGVycm9yLCBfdGhpczIpOyAvLyBMb2cgZXJyb3JcblxuICAgICAgICAgIGdldExvZ2dlcigpLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSAvLyBSZW1vdmUgcXVlcnkgYWZ0ZXIgZmV0Y2hpbmcgaWYgY2FjaGUgdGltZSBpcyAwXG5cblxuICAgICAgICBpZiAoX3RoaXMyLmNhY2hlVGltZSA9PT0gMCkge1xuICAgICAgICAgIF90aGlzMi5vcHRpb25hbFJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25GYWlsOiBmdW5jdGlvbiBvbkZhaWwoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ2ZhaWxlZCdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25QYXVzZTogZnVuY3Rpb24gb25QYXVzZSgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAncGF1c2UnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uQ29udGludWU6IGZ1bmN0aW9uIG9uQ29udGludWUoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ2NvbnRpbnVlJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICByZXRyeTogY29udGV4dC5vcHRpb25zLnJldHJ5LFxuICAgICAgcmV0cnlEZWxheTogY29udGV4dC5vcHRpb25zLnJldHJ5RGVsYXlcbiAgICB9KTtcbiAgICB0aGlzLnByb21pc2UgPSB0aGlzLnJldHJ5ZXIucHJvbWlzZTtcbiAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMucmVkdWNlcih0aGlzLnN0YXRlLCBhY3Rpb24pO1xuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vblF1ZXJ5VXBkYXRlKGFjdGlvbik7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMzLmNhY2hlLm5vdGlmeSh7XG4gICAgICAgIHF1ZXJ5OiBfdGhpczMsXG4gICAgICAgIHR5cGU6ICdxdWVyeVVwZGF0ZWQnLFxuICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldERlZmF1bHRTdGF0ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRTdGF0ZShvcHRpb25zKSB7XG4gICAgdmFyIGRhdGEgPSB0eXBlb2Ygb3B0aW9ucy5pbml0aWFsRGF0YSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuaW5pdGlhbERhdGEoKSA6IG9wdGlvbnMuaW5pdGlhbERhdGE7XG4gICAgdmFyIGhhc0luaXRpYWxEYXRhID0gdHlwZW9mIG9wdGlvbnMuaW5pdGlhbERhdGEgIT09ICd1bmRlZmluZWQnO1xuICAgIHZhciBpbml0aWFsRGF0YVVwZGF0ZWRBdCA9IGhhc0luaXRpYWxEYXRhID8gdHlwZW9mIG9wdGlvbnMuaW5pdGlhbERhdGFVcGRhdGVkQXQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmluaXRpYWxEYXRhVXBkYXRlZEF0KCkgOiBvcHRpb25zLmluaXRpYWxEYXRhVXBkYXRlZEF0IDogMDtcbiAgICB2YXIgaGFzRGF0YSA9IHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJztcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGRhdGFVcGRhdGVDb3VudDogMCxcbiAgICAgIGRhdGFVcGRhdGVkQXQ6IGhhc0RhdGEgPyBpbml0aWFsRGF0YVVwZGF0ZWRBdCAhPSBudWxsID8gaW5pdGlhbERhdGFVcGRhdGVkQXQgOiBEYXRlLm5vdygpIDogMCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgZXJyb3JVcGRhdGVDb3VudDogMCxcbiAgICAgIGVycm9yVXBkYXRlZEF0OiAwLFxuICAgICAgZmV0Y2hGYWlsdXJlQ291bnQ6IDAsXG4gICAgICBmZXRjaE1ldGE6IG51bGwsXG4gICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgIGlzSW52YWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgc3RhdHVzOiBoYXNEYXRhID8gJ3N1Y2Nlc3MnIDogJ2lkbGUnXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8ucmVkdWNlciA9IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHZhciBfYWN0aW9uJG1ldGEsIF9hY3Rpb24kZGF0YVVwZGF0ZWRBdDtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2ZhaWxlZCc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBmZXRjaEZhaWx1cmVDb3VudDogc3RhdGUuZmV0Y2hGYWlsdXJlQ291bnQgKyAxXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdwYXVzZSc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1BhdXNlZDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY29udGludWUnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdmZXRjaCc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBmZXRjaEZhaWx1cmVDb3VudDogMCxcbiAgICAgICAgICBmZXRjaE1ldGE6IChfYWN0aW9uJG1ldGEgPSBhY3Rpb24ubWV0YSkgIT0gbnVsbCA/IF9hY3Rpb24kbWV0YSA6IG51bGwsXG4gICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICAgICAgc3RhdHVzOiAhc3RhdGUuZGF0YVVwZGF0ZWRBdCA/ICdsb2FkaW5nJyA6IHN0YXRlLnN0YXR1c1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICBkYXRhVXBkYXRlQ291bnQ6IHN0YXRlLmRhdGFVcGRhdGVDb3VudCArIDEsXG4gICAgICAgICAgZGF0YVVwZGF0ZWRBdDogKF9hY3Rpb24kZGF0YVVwZGF0ZWRBdCA9IGFjdGlvbi5kYXRhVXBkYXRlZEF0KSAhPSBudWxsID8gX2FjdGlvbiRkYXRhVXBkYXRlZEF0IDogRGF0ZS5ub3coKSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBmZXRjaEZhaWx1cmVDb3VudDogMCxcbiAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICBpc0ludmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdmFyIGVycm9yID0gYWN0aW9uLmVycm9yO1xuXG4gICAgICAgIGlmIChpc0NhbmNlbGxlZEVycm9yKGVycm9yKSAmJiBlcnJvci5yZXZlcnQgJiYgdGhpcy5yZXZlcnRTdGF0ZSkge1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5yZXZlcnRTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgIGVycm9yVXBkYXRlQ291bnQ6IHN0YXRlLmVycm9yVXBkYXRlQ291bnQgKyAxLFxuICAgICAgICAgIGVycm9yVXBkYXRlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgICAgIGZldGNoRmFpbHVyZUNvdW50OiBzdGF0ZS5mZXRjaEZhaWx1cmVDb3VudCArIDEsXG4gICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnaW52YWxpZGF0ZSc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc0ludmFsaWRhdGVkOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdzZXRTdGF0ZSc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIGFjdGlvbi5zdGF0ZSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFF1ZXJ5O1xufSgpOyIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgaGFzaFF1ZXJ5S2V5QnlPcHRpb25zLCBtYXRjaFF1ZXJ5LCBwYXJzZUZpbHRlckFyZ3MgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJztcbi8vIENMQVNTXG5leHBvcnQgdmFyIFF1ZXJ5Q2FjaGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoUXVlcnlDYWNoZSwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gUXVlcnlDYWNoZShjb25maWcpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9TdWJzY3JpYmFibGUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBfdGhpcy5xdWVyaWVzID0gW107XG4gICAgX3RoaXMucXVlcmllc01hcCA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBRdWVyeUNhY2hlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYnVpbGQgPSBmdW5jdGlvbiBidWlsZChjbGllbnQsIG9wdGlvbnMsIHN0YXRlKSB7XG4gICAgdmFyIF9vcHRpb25zJHF1ZXJ5SGFzaDtcblxuICAgIHZhciBxdWVyeUtleSA9IG9wdGlvbnMucXVlcnlLZXk7XG4gICAgdmFyIHF1ZXJ5SGFzaCA9IChfb3B0aW9ucyRxdWVyeUhhc2ggPSBvcHRpb25zLnF1ZXJ5SGFzaCkgIT0gbnVsbCA/IF9vcHRpb25zJHF1ZXJ5SGFzaCA6IGhhc2hRdWVyeUtleUJ5T3B0aW9ucyhxdWVyeUtleSwgb3B0aW9ucyk7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5nZXQocXVlcnlIYXNoKTtcblxuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHtcbiAgICAgICAgY2FjaGU6IHRoaXMsXG4gICAgICAgIHF1ZXJ5S2V5OiBxdWVyeUtleSxcbiAgICAgICAgcXVlcnlIYXNoOiBxdWVyeUhhc2gsXG4gICAgICAgIG9wdGlvbnM6IGNsaWVudC5kZWZhdWx0UXVlcnlPcHRpb25zKG9wdGlvbnMpLFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiBjbGllbnQuZ2V0UXVlcnlEZWZhdWx0cyhxdWVyeUtleSksXG4gICAgICAgIG1ldGE6IG9wdGlvbnMubWV0YVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFkZChxdWVyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQocXVlcnkpIHtcbiAgICBpZiAoIXRoaXMucXVlcmllc01hcFtxdWVyeS5xdWVyeUhhc2hdKSB7XG4gICAgICB0aGlzLnF1ZXJpZXNNYXBbcXVlcnkucXVlcnlIYXNoXSA9IHF1ZXJ5O1xuICAgICAgdGhpcy5xdWVyaWVzLnB1c2gocXVlcnkpO1xuICAgICAgdGhpcy5ub3RpZnkoe1xuICAgICAgICB0eXBlOiAncXVlcnlBZGRlZCcsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocXVlcnkpIHtcbiAgICB2YXIgcXVlcnlJbk1hcCA9IHRoaXMucXVlcmllc01hcFtxdWVyeS5xdWVyeUhhc2hdO1xuXG4gICAgaWYgKHF1ZXJ5SW5NYXApIHtcbiAgICAgIHF1ZXJ5LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMucXVlcmllcy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggIT09IHF1ZXJ5O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChxdWVyeUluTWFwID09PSBxdWVyeSkge1xuICAgICAgICBkZWxldGUgdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5LnF1ZXJ5SGFzaF07XG4gICAgICB9XG5cbiAgICAgIHRoaXMubm90aWZ5KHtcbiAgICAgICAgdHlwZTogJ3F1ZXJ5UmVtb3ZlZCcsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBfdGhpczIucmVtb3ZlKHF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQocXVlcnlIYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcmllc01hcFtxdWVyeUhhc2hdO1xuICB9O1xuXG4gIF9wcm90by5nZXRBbGwgPSBmdW5jdGlvbiBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcmllcztcbiAgfTtcblxuICBfcHJvdG8uZmluZCA9IGZ1bmN0aW9uIGZpbmQoYXJnMSwgYXJnMikge1xuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnc1swXTtcblxuICAgIGlmICh0eXBlb2YgZmlsdGVycy5leGFjdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZpbHRlcnMuZXhhY3QgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuZmluZChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgIHJldHVybiBtYXRjaFF1ZXJ5KGZpbHRlcnMsIHF1ZXJ5KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZmluZEFsbCA9IGZ1bmN0aW9uIGZpbmRBbGwoYXJnMSwgYXJnMikge1xuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzMiA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3MyWzBdO1xuXG4gICAgcmV0dXJuIGZpbHRlcnMgPyB0aGlzLnF1ZXJpZXMuZmlsdGVyKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgcmV0dXJuIG1hdGNoUXVlcnkoZmlsdGVycywgcXVlcnkpO1xuICAgIH0pIDogdGhpcy5xdWVyaWVzO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcihldmVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNC5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5Lm9uRm9jdXMoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5vbk9ubGluZSA9IGZ1bmN0aW9uIG9uT25saW5lKCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczUucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBxdWVyeS5vbk9ubGluZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFF1ZXJ5Q2FjaGU7XG59KFN1YnNjcmliYWJsZSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBoYXNoUXVlcnlLZXksIG5vb3AsIHBhcnNlRmlsdGVyQXJncywgcGFyc2VRdWVyeUFyZ3MsIHBhcnRpYWxNYXRjaEtleSwgaGFzaFF1ZXJ5S2V5QnlPcHRpb25zIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBRdWVyeUNhY2hlIH0gZnJvbSAnLi9xdWVyeUNhY2hlJztcbmltcG9ydCB7IE11dGF0aW9uQ2FjaGUgfSBmcm9tICcuL211dGF0aW9uQ2FjaGUnO1xuaW1wb3J0IHsgZm9jdXNNYW5hZ2VyIH0gZnJvbSAnLi9mb2N1c01hbmFnZXInO1xuaW1wb3J0IHsgb25saW5lTWFuYWdlciB9IGZyb20gJy4vb25saW5lTWFuYWdlcic7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IGluZmluaXRlUXVlcnlCZWhhdmlvciB9IGZyb20gJy4vaW5maW5pdGVRdWVyeUJlaGF2aW9yJzsgLy8gVFlQRVNcblxuLy8gQ0xBU1NcbmV4cG9ydCB2YXIgUXVlcnlDbGllbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBRdWVyeUNsaWVudChjb25maWcpIHtcbiAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICAgIGNvbmZpZyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMucXVlcnlDYWNoZSA9IGNvbmZpZy5xdWVyeUNhY2hlIHx8IG5ldyBRdWVyeUNhY2hlKCk7XG4gICAgdGhpcy5tdXRhdGlvbkNhY2hlID0gY29uZmlnLm11dGF0aW9uQ2FjaGUgfHwgbmV3IE11dGF0aW9uQ2FjaGUoKTtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0gY29uZmlnLmRlZmF1bHRPcHRpb25zIHx8IHt9O1xuICAgIHRoaXMucXVlcnlEZWZhdWx0cyA9IFtdO1xuICAgIHRoaXMubXV0YXRpb25EZWZhdWx0cyA9IFtdO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFF1ZXJ5Q2xpZW50LnByb3RvdHlwZTtcblxuICBfcHJvdG8ubW91bnQgPSBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy51bnN1YnNjcmliZUZvY3VzID0gZm9jdXNNYW5hZ2VyLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZm9jdXNNYW5hZ2VyLmlzRm9jdXNlZCgpICYmIG9ubGluZU1hbmFnZXIuaXNPbmxpbmUoKSkge1xuICAgICAgICBfdGhpcy5tdXRhdGlvbkNhY2hlLm9uRm9jdXMoKTtcblxuICAgICAgICBfdGhpcy5xdWVyeUNhY2hlLm9uRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlT25saW5lID0gb25saW5lTWFuYWdlci5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGZvY3VzTWFuYWdlci5pc0ZvY3VzZWQoKSAmJiBvbmxpbmVNYW5hZ2VyLmlzT25saW5lKCkpIHtcbiAgICAgICAgX3RoaXMubXV0YXRpb25DYWNoZS5vbk9ubGluZSgpO1xuXG4gICAgICAgIF90aGlzLnF1ZXJ5Q2FjaGUub25PbmxpbmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8udW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQoKSB7XG4gICAgdmFyIF90aGlzJHVuc3Vic2NyaWJlRm9jdSwgX3RoaXMkdW5zdWJzY3JpYmVPbmxpO1xuXG4gICAgKF90aGlzJHVuc3Vic2NyaWJlRm9jdSA9IHRoaXMudW5zdWJzY3JpYmVGb2N1cykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHVuc3Vic2NyaWJlRm9jdS5jYWxsKHRoaXMpO1xuICAgIChfdGhpcyR1bnN1YnNjcmliZU9ubGkgPSB0aGlzLnVuc3Vic2NyaWJlT25saW5lKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkdW5zdWJzY3JpYmVPbmxpLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLmlzRmV0Y2hpbmcgPSBmdW5jdGlvbiBpc0ZldGNoaW5nKGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJncyA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3NbMF07XG5cbiAgICBmaWx0ZXJzLmZldGNoaW5nID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5xdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90by5pc011dGF0aW5nID0gZnVuY3Rpb24gaXNNdXRhdGluZyhmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25DYWNoZS5maW5kQWxsKF9leHRlbmRzKHt9LCBmaWx0ZXJzLCB7XG4gICAgICBmZXRjaGluZzogdHJ1ZVxuICAgIH0pKS5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLmdldFF1ZXJ5RGF0YSA9IGZ1bmN0aW9uIGdldFF1ZXJ5RGF0YShxdWVyeUtleSwgZmlsdGVycykge1xuICAgIHZhciBfdGhpcyRxdWVyeUNhY2hlJGZpbmQ7XG5cbiAgICByZXR1cm4gKF90aGlzJHF1ZXJ5Q2FjaGUkZmluZCA9IHRoaXMucXVlcnlDYWNoZS5maW5kKHF1ZXJ5S2V5LCBmaWx0ZXJzKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHF1ZXJ5Q2FjaGUkZmluZC5zdGF0ZS5kYXRhO1xuICB9O1xuXG4gIF9wcm90by5nZXRRdWVyaWVzRGF0YSA9IGZ1bmN0aW9uIGdldFF1ZXJpZXNEYXRhKHF1ZXJ5S2V5T3JGaWx0ZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UXVlcnlDYWNoZSgpLmZpbmRBbGwocXVlcnlLZXlPckZpbHRlcnMpLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHF1ZXJ5S2V5ID0gX3JlZi5xdWVyeUtleSxcbiAgICAgICAgICBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgICB2YXIgZGF0YSA9IHN0YXRlLmRhdGE7XG4gICAgICByZXR1cm4gW3F1ZXJ5S2V5LCBkYXRhXTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uc2V0UXVlcnlEYXRhID0gZnVuY3Rpb24gc2V0UXVlcnlEYXRhKHF1ZXJ5S2V5LCB1cGRhdGVyLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnNlZE9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhxdWVyeUtleSk7XG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSB0aGlzLmRlZmF1bHRRdWVyeU9wdGlvbnMocGFyc2VkT3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlDYWNoZS5idWlsZCh0aGlzLCBkZWZhdWx0ZWRPcHRpb25zKS5zZXREYXRhKHVwZGF0ZXIsIG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5zZXRRdWVyaWVzRGF0YSA9IGZ1bmN0aW9uIHNldFF1ZXJpZXNEYXRhKHF1ZXJ5S2V5T3JGaWx0ZXJzLCB1cGRhdGVyLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICByZXR1cm4gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmdldFF1ZXJ5Q2FjaGUoKS5maW5kQWxsKHF1ZXJ5S2V5T3JGaWx0ZXJzKS5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBxdWVyeUtleSA9IF9yZWYyLnF1ZXJ5S2V5O1xuICAgICAgICByZXR1cm4gW3F1ZXJ5S2V5LCBfdGhpczIuc2V0UXVlcnlEYXRhKHF1ZXJ5S2V5LCB1cGRhdGVyLCBvcHRpb25zKV07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0UXVlcnlTdGF0ZSA9IGZ1bmN0aW9uIGdldFF1ZXJ5U3RhdGUocXVlcnlLZXksIGZpbHRlcnMpIHtcbiAgICB2YXIgX3RoaXMkcXVlcnlDYWNoZSRmaW5kMjtcblxuICAgIHJldHVybiAoX3RoaXMkcXVlcnlDYWNoZSRmaW5kMiA9IHRoaXMucXVlcnlDYWNoZS5maW5kKHF1ZXJ5S2V5LCBmaWx0ZXJzKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHF1ZXJ5Q2FjaGUkZmluZDIuc3RhdGU7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZVF1ZXJpZXMgPSBmdW5jdGlvbiByZW1vdmVRdWVyaWVzKGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJnczIgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzMlswXTtcblxuICAgIHZhciBxdWVyeUNhY2hlID0gdGhpcy5xdWVyeUNhY2hlO1xuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5Q2FjaGUucmVtb3ZlKHF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZXNldFF1ZXJpZXMgPSBmdW5jdGlvbiByZXNldFF1ZXJpZXMoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3MzID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIsIGFyZzMpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnczNbMF0sXG4gICAgICAgIG9wdGlvbnMgPSBfcGFyc2VGaWx0ZXJBcmdzM1sxXTtcblxuICAgIHZhciBxdWVyeUNhY2hlID0gdGhpcy5xdWVyeUNhY2hlO1xuXG4gICAgdmFyIHJlZmV0Y2hGaWx0ZXJzID0gX2V4dGVuZHMoe30sIGZpbHRlcnMsIHtcbiAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5LnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfdGhpczMucmVmZXRjaFF1ZXJpZXMocmVmZXRjaEZpbHRlcnMsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxRdWVyaWVzID0gZnVuY3Rpb24gY2FuY2VsUXVlcmllcyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJnczQgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiwgYXJnMyksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzNFswXSxcbiAgICAgICAgX3BhcnNlRmlsdGVyQXJnczQkID0gX3BhcnNlRmlsdGVyQXJnczRbMV0sXG4gICAgICAgIGNhbmNlbE9wdGlvbnMgPSBfcGFyc2VGaWx0ZXJBcmdzNCQgPT09IHZvaWQgMCA/IHt9IDogX3BhcnNlRmlsdGVyQXJnczQkO1xuXG4gICAgaWYgKHR5cGVvZiBjYW5jZWxPcHRpb25zLnJldmVydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNhbmNlbE9wdGlvbnMucmV2ZXJ0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvbWlzZXMgPSBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczQucXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLm1hcChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5LmNhbmNlbChjYW5jZWxPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihub29wKS5jYXRjaChub29wKTtcbiAgfTtcblxuICBfcHJvdG8uaW52YWxpZGF0ZVF1ZXJpZXMgPSBmdW5jdGlvbiBpbnZhbGlkYXRlUXVlcmllcyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIF9yZWYzLFxuICAgICAgICBfZmlsdGVycyRyZWZldGNoQWN0aXYsXG4gICAgICAgIF9maWx0ZXJzJHJlZmV0Y2hJbmFjdCxcbiAgICAgICAgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzNSA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3M1WzBdLFxuICAgICAgICBvcHRpb25zID0gX3BhcnNlRmlsdGVyQXJnczVbMV07XG5cbiAgICB2YXIgcmVmZXRjaEZpbHRlcnMgPSBfZXh0ZW5kcyh7fSwgZmlsdGVycywge1xuICAgICAgLy8gaWYgZmlsdGVycy5yZWZldGNoQWN0aXZlIGlzIG5vdCBwcm92aWRlZCBhbmQgZmlsdGVycy5hY3RpdmUgaXMgZXhwbGljaXRseSBmYWxzZSxcbiAgICAgIC8vIGUuZy4gaW52YWxpZGF0ZVF1ZXJpZXMoeyBhY3RpdmU6IGZhbHNlIH0pLCB3ZSBkb24ndCB3YW50IHRvIHJlZmV0Y2ggYWN0aXZlIHF1ZXJpZXNcbiAgICAgIGFjdGl2ZTogKF9yZWYzID0gKF9maWx0ZXJzJHJlZmV0Y2hBY3RpdiA9IGZpbHRlcnMucmVmZXRjaEFjdGl2ZSkgIT0gbnVsbCA/IF9maWx0ZXJzJHJlZmV0Y2hBY3RpdiA6IGZpbHRlcnMuYWN0aXZlKSAhPSBudWxsID8gX3JlZjMgOiB0cnVlLFxuICAgICAgaW5hY3RpdmU6IChfZmlsdGVycyRyZWZldGNoSW5hY3QgPSBmaWx0ZXJzLnJlZmV0Y2hJbmFjdGl2ZSkgIT0gbnVsbCA/IF9maWx0ZXJzJHJlZmV0Y2hJbmFjdCA6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczUucXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5LmludmFsaWRhdGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3RoaXM1LnJlZmV0Y2hRdWVyaWVzKHJlZmV0Y2hGaWx0ZXJzLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVmZXRjaFF1ZXJpZXMgPSBmdW5jdGlvbiByZWZldGNoUXVlcmllcyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJnczYgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiwgYXJnMyksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzNlswXSxcbiAgICAgICAgb3B0aW9ucyA9IF9wYXJzZUZpbHRlckFyZ3M2WzFdO1xuXG4gICAgdmFyIHByb21pc2VzID0gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXM2LnF1ZXJ5Q2FjaGUuZmluZEFsbChmaWx0ZXJzKS5tYXAoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBxdWVyeS5mZXRjaCh1bmRlZmluZWQsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgcmVmZXRjaFBhZ2U6IGZpbHRlcnMgPT0gbnVsbCA/IHZvaWQgMCA6IGZpbHRlcnMucmVmZXRjaFBhZ2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4obm9vcCk7XG5cbiAgICBpZiAoIShvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnRocm93T25FcnJvcikpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLmNhdGNoKG5vb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaFF1ZXJ5ID0gZnVuY3Rpb24gZmV0Y2hRdWVyeShhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIHBhcnNlZE9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucyhwYXJzZWRPcHRpb25zKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Rhbm5lcmxpbnNsZXkvcmVhY3QtcXVlcnkvaXNzdWVzLzY1MlxuXG4gICAgaWYgKHR5cGVvZiBkZWZhdWx0ZWRPcHRpb25zLnJldHJ5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5yZXRyeSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcnlDYWNoZS5idWlsZCh0aGlzLCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgICByZXR1cm4gcXVlcnkuaXNTdGFsZUJ5VGltZShkZWZhdWx0ZWRPcHRpb25zLnN0YWxlVGltZSkgPyBxdWVyeS5mZXRjaChkZWZhdWx0ZWRPcHRpb25zKSA6IFByb21pc2UucmVzb2x2ZShxdWVyeS5zdGF0ZS5kYXRhKTtcbiAgfTtcblxuICBfcHJvdG8ucHJlZmV0Y2hRdWVyeSA9IGZ1bmN0aW9uIHByZWZldGNoUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykudGhlbihub29wKS5jYXRjaChub29wKTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2hJbmZpbml0ZVF1ZXJ5ID0gZnVuY3Rpb24gZmV0Y2hJbmZpbml0ZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgcGFyc2VkT3B0aW9ucyA9IHBhcnNlUXVlcnlBcmdzKGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgIHBhcnNlZE9wdGlvbnMuYmVoYXZpb3IgPSBpbmZpbml0ZVF1ZXJ5QmVoYXZpb3IoKTtcbiAgICByZXR1cm4gdGhpcy5mZXRjaFF1ZXJ5KHBhcnNlZE9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5wcmVmZXRjaEluZmluaXRlUXVlcnkgPSBmdW5jdGlvbiBwcmVmZXRjaEluZmluaXRlUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHJldHVybiB0aGlzLmZldGNoSW5maW5pdGVRdWVyeShhcmcxLCBhcmcyLCBhcmczKS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxNdXRhdGlvbnMgPSBmdW5jdGlvbiBjYW5jZWxNdXRhdGlvbnMoKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZXMgPSBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczcubXV0YXRpb25DYWNoZS5nZXRBbGwoKS5tYXAoZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBtdXRhdGlvbi5jYW5jZWwoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihub29wKS5jYXRjaChub29wKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdW1lUGF1c2VkTXV0YXRpb25zID0gZnVuY3Rpb24gcmVzdW1lUGF1c2VkTXV0YXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldE11dGF0aW9uQ2FjaGUoKS5yZXN1bWVQYXVzZWRNdXRhdGlvbnMoKTtcbiAgfTtcblxuICBfcHJvdG8uZXhlY3V0ZU11dGF0aW9uID0gZnVuY3Rpb24gZXhlY3V0ZU11dGF0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbkNhY2hlLmJ1aWxkKHRoaXMsIG9wdGlvbnMpLmV4ZWN1dGUoKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0UXVlcnlDYWNoZSA9IGZ1bmN0aW9uIGdldFF1ZXJ5Q2FjaGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlDYWNoZTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TXV0YXRpb25DYWNoZSA9IGZ1bmN0aW9uIGdldE11dGF0aW9uQ2FjaGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25DYWNoZTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0T3B0aW9ucztcbiAgfTtcblxuICBfcHJvdG8uc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG4gIH07XG5cbiAgX3Byb3RvLnNldFF1ZXJ5RGVmYXVsdHMgPSBmdW5jdGlvbiBzZXRRdWVyeURlZmF1bHRzKHF1ZXJ5S2V5LCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMucXVlcnlEZWZhdWx0cy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gaGFzaFF1ZXJ5S2V5KHF1ZXJ5S2V5KSA9PT0gaGFzaFF1ZXJ5S2V5KHgucXVlcnlLZXkpO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmVzdWx0LmRlZmF1bHRPcHRpb25zID0gb3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5xdWVyeURlZmF1bHRzLnB1c2goe1xuICAgICAgICBxdWVyeUtleTogcXVlcnlLZXksXG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiBvcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFF1ZXJ5RGVmYXVsdHMgPSBmdW5jdGlvbiBnZXRRdWVyeURlZmF1bHRzKHF1ZXJ5S2V5KSB7XG4gICAgdmFyIF90aGlzJHF1ZXJ5RGVmYXVsdHMkZjtcblxuICAgIHJldHVybiBxdWVyeUtleSA/IChfdGhpcyRxdWVyeURlZmF1bHRzJGYgPSB0aGlzLnF1ZXJ5RGVmYXVsdHMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHBhcnRpYWxNYXRjaEtleShxdWVyeUtleSwgeC5xdWVyeUtleSk7XG4gICAgfSkpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRxdWVyeURlZmF1bHRzJGYuZGVmYXVsdE9wdGlvbnMgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLnNldE11dGF0aW9uRGVmYXVsdHMgPSBmdW5jdGlvbiBzZXRNdXRhdGlvbkRlZmF1bHRzKG11dGF0aW9uS2V5LCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMubXV0YXRpb25EZWZhdWx0cy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gaGFzaFF1ZXJ5S2V5KG11dGF0aW9uS2V5KSA9PT0gaGFzaFF1ZXJ5S2V5KHgubXV0YXRpb25LZXkpO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmVzdWx0LmRlZmF1bHRPcHRpb25zID0gb3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tdXRhdGlvbkRlZmF1bHRzLnB1c2goe1xuICAgICAgICBtdXRhdGlvbktleTogbXV0YXRpb25LZXksXG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiBvcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldE11dGF0aW9uRGVmYXVsdHMgPSBmdW5jdGlvbiBnZXRNdXRhdGlvbkRlZmF1bHRzKG11dGF0aW9uS2V5KSB7XG4gICAgdmFyIF90aGlzJG11dGF0aW9uRGVmYXVsdDtcblxuICAgIHJldHVybiBtdXRhdGlvbktleSA/IChfdGhpcyRtdXRhdGlvbkRlZmF1bHQgPSB0aGlzLm11dGF0aW9uRGVmYXVsdHMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHBhcnRpYWxNYXRjaEtleShtdXRhdGlvbktleSwgeC5tdXRhdGlvbktleSk7XG4gICAgfSkpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRtdXRhdGlvbkRlZmF1bHQuZGVmYXVsdE9wdGlvbnMgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLmRlZmF1bHRRdWVyeU9wdGlvbnMgPSBmdW5jdGlvbiBkZWZhdWx0UXVlcnlPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5fZGVmYXVsdGVkKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IF9leHRlbmRzKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLnF1ZXJpZXMsIHRoaXMuZ2V0UXVlcnlEZWZhdWx0cyhvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnF1ZXJ5S2V5KSwgb3B0aW9ucywge1xuICAgICAgX2RlZmF1bHRlZDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKCFkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5SGFzaCAmJiBkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5S2V5KSB7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5SGFzaCA9IGhhc2hRdWVyeUtleUJ5T3B0aW9ucyhkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5S2V5LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdGVkT3B0aW9ucztcbiAgfTtcblxuICBfcHJvdG8uZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zID0gZnVuY3Rpb24gZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zKG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5kZWZhdWx0TXV0YXRpb25PcHRpb25zID0gZnVuY3Rpb24gZGVmYXVsdE11dGF0aW9uT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuX2RlZmF1bHRlZCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLm11dGF0aW9ucywgdGhpcy5nZXRNdXRhdGlvbkRlZmF1bHRzKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMubXV0YXRpb25LZXkpLCBvcHRpb25zLCB7XG4gICAgICBfZGVmYXVsdGVkOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5xdWVyeUNhY2hlLmNsZWFyKCk7XG4gICAgdGhpcy5tdXRhdGlvbkNhY2hlLmNsZWFyKCk7XG4gIH07XG5cbiAgcmV0dXJuIFF1ZXJ5Q2xpZW50O1xufSgpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBpc1NlcnZlciwgaXNWYWxpZFRpbWVvdXQsIG5vb3AsIHJlcGxhY2VFcXVhbERlZXAsIHNoYWxsb3dFcXVhbE9iamVjdHMsIHRpbWVVbnRpbFN0YWxlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IGZvY3VzTWFuYWdlciB9IGZyb20gJy4vZm9jdXNNYW5hZ2VyJztcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJztcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IGlzQ2FuY2VsbGVkRXJyb3IgfSBmcm9tICcuL3JldHJ5ZXInO1xuZXhwb3J0IHZhciBRdWVyeU9ic2VydmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKFF1ZXJ5T2JzZXJ2ZXIsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIFF1ZXJ5T2JzZXJ2ZXIoY2xpZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3Vic2NyaWJhYmxlLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgX3RoaXMudHJhY2tlZFByb3BzID0gW107XG4gICAgX3RoaXMucHJldmlvdXNTZWxlY3RFcnJvciA9IG51bGw7XG5cbiAgICBfdGhpcy5iaW5kTWV0aG9kcygpO1xuXG4gICAgX3RoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBRdWVyeU9ic2VydmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYmluZE1ldGhvZHMgPSBmdW5jdGlvbiBiaW5kTWV0aG9kcygpIHtcbiAgICB0aGlzLnJlbW92ZSA9IHRoaXMucmVtb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWZldGNoID0gdGhpcy5yZWZldGNoLmJpbmQodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uU3Vic2NyaWJlID0gZnVuY3Rpb24gb25TdWJzY3JpYmUoKSB7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jdXJyZW50UXVlcnkuYWRkT2JzZXJ2ZXIodGhpcyk7XG5cbiAgICAgIGlmIChzaG91bGRGZXRjaE9uTW91bnQodGhpcy5jdXJyZW50UXVlcnksIHRoaXMub3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5leGVjdXRlRmV0Y2goKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVUaW1lcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uVW5zdWJzY3JpYmUgPSBmdW5jdGlvbiBvblVuc3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNob3VsZEZldGNoT25SZWNvbm5lY3QgPSBmdW5jdGlvbiBzaG91bGRGZXRjaE9uUmVjb25uZWN0KCkge1xuICAgIHJldHVybiBfc2hvdWxkRmV0Y2hPblJlY29ubmVjdCh0aGlzLmN1cnJlbnRRdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uc2hvdWxkRmV0Y2hPbldpbmRvd0ZvY3VzID0gZnVuY3Rpb24gc2hvdWxkRmV0Y2hPbldpbmRvd0ZvY3VzKCkge1xuICAgIHJldHVybiBfc2hvdWxkRmV0Y2hPbldpbmRvd0ZvY3VzKHRoaXMuY3VycmVudFF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuY2xlYXJUaW1lcnMoKTtcbiAgICB0aGlzLmN1cnJlbnRRdWVyeS5yZW1vdmVPYnNlcnZlcih0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucywgbm90aWZ5T3B0aW9ucykge1xuICAgIHZhciBwcmV2T3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICB2YXIgcHJldlF1ZXJ5ID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZW5hYmxlZCB0byBiZSBhIGJvb2xlYW4nKTtcbiAgICB9IC8vIEtlZXAgcHJldmlvdXMgcXVlcnkga2V5IGlmIHRoZSB1c2VyIGRvZXMgbm90IHN1cHBseSBvbmVcblxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMucXVlcnlLZXkpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5xdWVyeUtleSA9IHByZXZPcHRpb25zLnF1ZXJ5S2V5O1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICB2YXIgbW91bnRlZCA9IHRoaXMuaGFzTGlzdGVuZXJzKCk7IC8vIEZldGNoIGlmIHRoZXJlIGFyZSBzdWJzY3JpYmVyc1xuXG4gICAgaWYgKG1vdW50ZWQgJiYgc2hvdWxkRmV0Y2hPcHRpb25hbGx5KHRoaXMuY3VycmVudFF1ZXJ5LCBwcmV2UXVlcnksIHRoaXMub3B0aW9ucywgcHJldk9wdGlvbnMpKSB7XG4gICAgICB0aGlzLmV4ZWN1dGVGZXRjaCgpO1xuICAgIH0gLy8gVXBkYXRlIHJlc3VsdFxuXG5cbiAgICB0aGlzLnVwZGF0ZVJlc3VsdChub3RpZnlPcHRpb25zKTsgLy8gVXBkYXRlIHN0YWxlIGludGVydmFsIGlmIG5lZWRlZFxuXG4gICAgaWYgKG1vdW50ZWQgJiYgKHRoaXMuY3VycmVudFF1ZXJ5ICE9PSBwcmV2UXVlcnkgfHwgdGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHByZXZPcHRpb25zLmVuYWJsZWQgfHwgdGhpcy5vcHRpb25zLnN0YWxlVGltZSAhPT0gcHJldk9wdGlvbnMuc3RhbGVUaW1lKSkge1xuICAgICAgdGhpcy51cGRhdGVTdGFsZVRpbWVvdXQoKTtcbiAgICB9XG5cbiAgICB2YXIgbmV4dFJlZmV0Y2hJbnRlcnZhbCA9IHRoaXMuY29tcHV0ZVJlZmV0Y2hJbnRlcnZhbCgpOyAvLyBVcGRhdGUgcmVmZXRjaCBpbnRlcnZhbCBpZiBuZWVkZWRcblxuICAgIGlmIChtb3VudGVkICYmICh0aGlzLmN1cnJlbnRRdWVyeSAhPT0gcHJldlF1ZXJ5IHx8IHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSBwcmV2T3B0aW9ucy5lbmFibGVkIHx8IG5leHRSZWZldGNoSW50ZXJ2YWwgIT09IHRoaXMuY3VycmVudFJlZmV0Y2hJbnRlcnZhbCkpIHtcbiAgICAgIHRoaXMudXBkYXRlUmVmZXRjaEludGVydmFsKG5leHRSZWZldGNoSW50ZXJ2YWwpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0T3B0aW1pc3RpY1Jlc3VsdCA9IGZ1bmN0aW9uIGdldE9wdGltaXN0aWNSZXN1bHQob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gdGhpcy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuICAgIHZhciBxdWVyeSA9IHRoaXMuY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5idWlsZCh0aGlzLmNsaWVudCwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzdWx0KHF1ZXJ5LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFJlc3VsdCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8udHJhY2tSZXN1bHQgPSBmdW5jdGlvbiB0cmFja1Jlc3VsdChyZXN1bHQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciB0cmFja2VkUmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0cmFja2VkUmVzdWx0LCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdmFyIHR5cGVkS2V5ID0ga2V5O1xuXG4gICAgICAgICAgaWYgKCFfdGhpczIudHJhY2tlZFByb3BzLmluY2x1ZGVzKHR5cGVkS2V5KSkge1xuICAgICAgICAgICAgX3RoaXMyLnRyYWNrZWRQcm9wcy5wdXNoKHR5cGVkS2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0W3R5cGVkS2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYWNrZWRSZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLmdldE5leHRSZXN1bHQgPSBmdW5jdGlvbiBnZXROZXh0UmVzdWx0KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgdW5zdWJzY3JpYmUgPSBfdGhpczMuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQuaXNGZXRjaGluZykge1xuICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgICBpZiAocmVzdWx0LmlzRXJyb3IgJiYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudGhyb3dPbkVycm9yKSkge1xuICAgICAgICAgICAgcmVqZWN0KHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXRDdXJyZW50UXVlcnkgPSBmdW5jdGlvbiBnZXRDdXJyZW50UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFF1ZXJ5O1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgdGhpcy5jbGllbnQuZ2V0UXVlcnlDYWNoZSgpLnJlbW92ZSh0aGlzLmN1cnJlbnRRdWVyeSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlZmV0Y2ggPSBmdW5jdGlvbiByZWZldGNoKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaChfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgbWV0YToge1xuICAgICAgICByZWZldGNoUGFnZTogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5yZWZldGNoUGFnZVxuICAgICAgfVxuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2hPcHRpbWlzdGljID0gZnVuY3Rpb24gZmV0Y2hPcHRpbWlzdGljKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gdGhpcy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuICAgIHZhciBxdWVyeSA9IHRoaXMuY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5idWlsZCh0aGlzLmNsaWVudCwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgcmV0dXJuIHF1ZXJ5LmZldGNoKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXM0LmNyZWF0ZVJlc3VsdChxdWVyeSwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoID0gZnVuY3Rpb24gZmV0Y2goZmV0Y2hPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlRmV0Y2goZmV0Y2hPcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNS51cGRhdGVSZXN1bHQoKTtcblxuICAgICAgcmV0dXJuIF90aGlzNS5jdXJyZW50UmVzdWx0O1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5leGVjdXRlRmV0Y2ggPSBmdW5jdGlvbiBleGVjdXRlRmV0Y2goZmV0Y2hPcHRpb25zKSB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIHJlZmVyZW5jZSB0aGUgbGF0ZXN0IHF1ZXJ5IGFzIHRoZSBjdXJyZW50IG9uZSBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgIHRoaXMudXBkYXRlUXVlcnkoKTsgLy8gRmV0Y2hcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5jdXJyZW50UXVlcnkuZmV0Y2godGhpcy5vcHRpb25zLCBmZXRjaE9wdGlvbnMpO1xuXG4gICAgaWYgKCEoZmV0Y2hPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBmZXRjaE9wdGlvbnMudGhyb3dPbkVycm9yKSkge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UuY2F0Y2gobm9vcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVN0YWxlVGltZW91dCA9IGZ1bmN0aW9uIHVwZGF0ZVN0YWxlVGltZW91dCgpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIHRoaXMuY2xlYXJTdGFsZVRpbWVvdXQoKTtcblxuICAgIGlmIChpc1NlcnZlciB8fCB0aGlzLmN1cnJlbnRSZXN1bHQuaXNTdGFsZSB8fCAhaXNWYWxpZFRpbWVvdXQodGhpcy5vcHRpb25zLnN0YWxlVGltZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGltZSA9IHRpbWVVbnRpbFN0YWxlKHRoaXMuY3VycmVudFJlc3VsdC5kYXRhVXBkYXRlZEF0LCB0aGlzLm9wdGlvbnMuc3RhbGVUaW1lKTsgLy8gVGhlIHRpbWVvdXQgaXMgc29tZXRpbWVzIHRyaWdnZXJlZCAxIG1zIGJlZm9yZSB0aGUgc3RhbGUgdGltZSBleHBpcmF0aW9uLlxuICAgIC8vIFRvIG1pdGlnYXRlIHRoaXMgaXNzdWUgd2UgYWx3YXlzIGFkZCAxIG1zIHRvIHRoZSB0aW1lb3V0LlxuXG4gICAgdmFyIHRpbWVvdXQgPSB0aW1lICsgMTtcbiAgICB0aGlzLnN0YWxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzNi5jdXJyZW50UmVzdWx0LmlzU3RhbGUpIHtcbiAgICAgICAgX3RoaXM2LnVwZGF0ZVJlc3VsdCgpO1xuICAgICAgfVxuICAgIH0sIHRpbWVvdXQpO1xuICB9O1xuXG4gIF9wcm90by5jb21wdXRlUmVmZXRjaEludGVydmFsID0gZnVuY3Rpb24gY29tcHV0ZVJlZmV0Y2hJbnRlcnZhbCgpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9ucyRyZWZldGNoO1xuXG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLm9wdGlvbnMucmVmZXRjaEludGVydmFsID09PSAnZnVuY3Rpb24nID8gdGhpcy5vcHRpb25zLnJlZmV0Y2hJbnRlcnZhbCh0aGlzLmN1cnJlbnRSZXN1bHQuZGF0YSwgdGhpcy5jdXJyZW50UXVlcnkpIDogKF90aGlzJG9wdGlvbnMkcmVmZXRjaCA9IHRoaXMub3B0aW9ucy5yZWZldGNoSW50ZXJ2YWwpICE9IG51bGwgPyBfdGhpcyRvcHRpb25zJHJlZmV0Y2ggOiBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlUmVmZXRjaEludGVydmFsID0gZnVuY3Rpb24gdXBkYXRlUmVmZXRjaEludGVydmFsKG5leHRJbnRlcnZhbCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgdGhpcy5jbGVhclJlZmV0Y2hJbnRlcnZhbCgpO1xuICAgIHRoaXMuY3VycmVudFJlZmV0Y2hJbnRlcnZhbCA9IG5leHRJbnRlcnZhbDtcblxuICAgIGlmIChpc1NlcnZlciB8fCB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9PT0gZmFsc2UgfHwgIWlzVmFsaWRUaW1lb3V0KHRoaXMuY3VycmVudFJlZmV0Y2hJbnRlcnZhbCkgfHwgdGhpcy5jdXJyZW50UmVmZXRjaEludGVydmFsID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZWZldGNoSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpczcub3B0aW9ucy5yZWZldGNoSW50ZXJ2YWxJbkJhY2tncm91bmQgfHwgZm9jdXNNYW5hZ2VyLmlzRm9jdXNlZCgpKSB7XG4gICAgICAgIF90aGlzNy5leGVjdXRlRmV0Y2goKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzLmN1cnJlbnRSZWZldGNoSW50ZXJ2YWwpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVUaW1lcnMgPSBmdW5jdGlvbiB1cGRhdGVUaW1lcnMoKSB7XG4gICAgdGhpcy51cGRhdGVTdGFsZVRpbWVvdXQoKTtcbiAgICB0aGlzLnVwZGF0ZVJlZmV0Y2hJbnRlcnZhbCh0aGlzLmNvbXB1dGVSZWZldGNoSW50ZXJ2YWwoKSk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyVGltZXJzID0gZnVuY3Rpb24gY2xlYXJUaW1lcnMoKSB7XG4gICAgdGhpcy5jbGVhclN0YWxlVGltZW91dCgpO1xuICAgIHRoaXMuY2xlYXJSZWZldGNoSW50ZXJ2YWwoKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJTdGFsZVRpbWVvdXQgPSBmdW5jdGlvbiBjbGVhclN0YWxlVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zdGFsZVRpbWVvdXRJZCk7XG4gICAgdGhpcy5zdGFsZVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJSZWZldGNoSW50ZXJ2YWwgPSBmdW5jdGlvbiBjbGVhclJlZmV0Y2hJbnRlcnZhbCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMucmVmZXRjaEludGVydmFsSWQpO1xuICAgIHRoaXMucmVmZXRjaEludGVydmFsSWQgPSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZVJlc3VsdCA9IGZ1bmN0aW9uIGNyZWF0ZVJlc3VsdChxdWVyeSwgb3B0aW9ucykge1xuICAgIHZhciBwcmV2UXVlcnkgPSB0aGlzLmN1cnJlbnRRdWVyeTtcbiAgICB2YXIgcHJldk9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgdmFyIHByZXZSZXN1bHQgPSB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gICAgdmFyIHByZXZSZXN1bHRTdGF0ZSA9IHRoaXMuY3VycmVudFJlc3VsdFN0YXRlO1xuICAgIHZhciBwcmV2UmVzdWx0T3B0aW9ucyA9IHRoaXMuY3VycmVudFJlc3VsdE9wdGlvbnM7XG4gICAgdmFyIHF1ZXJ5Q2hhbmdlID0gcXVlcnkgIT09IHByZXZRdWVyeTtcbiAgICB2YXIgcXVlcnlJbml0aWFsU3RhdGUgPSBxdWVyeUNoYW5nZSA/IHF1ZXJ5LnN0YXRlIDogdGhpcy5jdXJyZW50UXVlcnlJbml0aWFsU3RhdGU7XG4gICAgdmFyIHByZXZRdWVyeVJlc3VsdCA9IHF1ZXJ5Q2hhbmdlID8gdGhpcy5jdXJyZW50UmVzdWx0IDogdGhpcy5wcmV2aW91c1F1ZXJ5UmVzdWx0O1xuICAgIHZhciBzdGF0ZSA9IHF1ZXJ5LnN0YXRlO1xuICAgIHZhciBkYXRhVXBkYXRlZEF0ID0gc3RhdGUuZGF0YVVwZGF0ZWRBdCxcbiAgICAgICAgZXJyb3IgPSBzdGF0ZS5lcnJvcixcbiAgICAgICAgZXJyb3JVcGRhdGVkQXQgPSBzdGF0ZS5lcnJvclVwZGF0ZWRBdCxcbiAgICAgICAgaXNGZXRjaGluZyA9IHN0YXRlLmlzRmV0Y2hpbmcsXG4gICAgICAgIHN0YXR1cyA9IHN0YXRlLnN0YXR1cztcbiAgICB2YXIgaXNQcmV2aW91c0RhdGEgPSBmYWxzZTtcbiAgICB2YXIgaXNQbGFjZWhvbGRlckRhdGEgPSBmYWxzZTtcbiAgICB2YXIgZGF0YTsgLy8gT3B0aW1pc3RpY2FsbHkgc2V0IHJlc3VsdCBpbiBmZXRjaGluZyBzdGF0ZSBpZiBuZWVkZWRcblxuICAgIGlmIChvcHRpb25zLm9wdGltaXN0aWNSZXN1bHRzKSB7XG4gICAgICB2YXIgbW91bnRlZCA9IHRoaXMuaGFzTGlzdGVuZXJzKCk7XG4gICAgICB2YXIgZmV0Y2hPbk1vdW50ID0gIW1vdW50ZWQgJiYgc2hvdWxkRmV0Y2hPbk1vdW50KHF1ZXJ5LCBvcHRpb25zKTtcbiAgICAgIHZhciBmZXRjaE9wdGlvbmFsbHkgPSBtb3VudGVkICYmIHNob3VsZEZldGNoT3B0aW9uYWxseShxdWVyeSwgcHJldlF1ZXJ5LCBvcHRpb25zLCBwcmV2T3B0aW9ucyk7XG5cbiAgICAgIGlmIChmZXRjaE9uTW91bnQgfHwgZmV0Y2hPcHRpb25hbGx5KSB7XG4gICAgICAgIGlzRmV0Y2hpbmcgPSB0cnVlO1xuXG4gICAgICAgIGlmICghZGF0YVVwZGF0ZWRBdCkge1xuICAgICAgICAgIHN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gS2VlcCBwcmV2aW91cyBkYXRhIGlmIG5lZWRlZFxuXG5cbiAgICBpZiAob3B0aW9ucy5rZWVwUHJldmlvdXNEYXRhICYmICFzdGF0ZS5kYXRhVXBkYXRlQ291bnQgJiYgKHByZXZRdWVyeVJlc3VsdCA9PSBudWxsID8gdm9pZCAwIDogcHJldlF1ZXJ5UmVzdWx0LmlzU3VjY2VzcykgJiYgc3RhdHVzICE9PSAnZXJyb3InKSB7XG4gICAgICBkYXRhID0gcHJldlF1ZXJ5UmVzdWx0LmRhdGE7XG4gICAgICBkYXRhVXBkYXRlZEF0ID0gcHJldlF1ZXJ5UmVzdWx0LmRhdGFVcGRhdGVkQXQ7XG4gICAgICBzdGF0dXMgPSBwcmV2UXVlcnlSZXN1bHQuc3RhdHVzO1xuICAgICAgaXNQcmV2aW91c0RhdGEgPSB0cnVlO1xuICAgIH0gLy8gU2VsZWN0IGRhdGEgaWYgbmVlZGVkXG4gICAgZWxzZSBpZiAob3B0aW9ucy5zZWxlY3QgJiYgdHlwZW9mIHN0YXRlLmRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIE1lbW9pemUgc2VsZWN0IHJlc3VsdFxuICAgICAgICBpZiAocHJldlJlc3VsdCAmJiBzdGF0ZS5kYXRhID09PSAocHJldlJlc3VsdFN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UmVzdWx0U3RhdGUuZGF0YSkgJiYgb3B0aW9ucy5zZWxlY3QgPT09IChwcmV2UmVzdWx0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdE9wdGlvbnMuc2VsZWN0KSAmJiAhdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yKSB7XG4gICAgICAgICAgZGF0YSA9IHByZXZSZXN1bHQuZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IG9wdGlvbnMuc2VsZWN0KHN0YXRlLmRhdGEpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zdHJ1Y3R1cmFsU2hhcmluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgZGF0YSA9IHJlcGxhY2VFcXVhbERlZXAocHJldlJlc3VsdCA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdC5kYXRhLCBkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yID0gbnVsbDtcbiAgICAgICAgICB9IGNhdGNoIChzZWxlY3RFcnJvcikge1xuICAgICAgICAgICAgZ2V0TG9nZ2VyKCkuZXJyb3Ioc2VsZWN0RXJyb3IpO1xuICAgICAgICAgICAgZXJyb3IgPSBzZWxlY3RFcnJvcjtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RFcnJvciA9IHNlbGVjdEVycm9yO1xuICAgICAgICAgICAgZXJyb3JVcGRhdGVkQXQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gVXNlIHF1ZXJ5IGRhdGFcbiAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBzdGF0ZS5kYXRhO1xuICAgICAgICB9IC8vIFNob3cgcGxhY2Vob2xkZXIgZGF0YSBpZiBuZWVkZWRcblxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBsYWNlaG9sZGVyRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnICYmIChzdGF0dXMgPT09ICdsb2FkaW5nJyB8fCBzdGF0dXMgPT09ICdpZGxlJykpIHtcbiAgICAgIHZhciBwbGFjZWhvbGRlckRhdGE7IC8vIE1lbW9pemUgcGxhY2Vob2xkZXIgZGF0YVxuXG4gICAgICBpZiAoKHByZXZSZXN1bHQgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHQuaXNQbGFjZWhvbGRlckRhdGEpICYmIG9wdGlvbnMucGxhY2Vob2xkZXJEYXRhID09PSAocHJldlJlc3VsdE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHRPcHRpb25zLnBsYWNlaG9sZGVyRGF0YSkpIHtcbiAgICAgICAgcGxhY2Vob2xkZXJEYXRhID0gcHJldlJlc3VsdC5kYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2Vob2xkZXJEYXRhID0gdHlwZW9mIG9wdGlvbnMucGxhY2Vob2xkZXJEYXRhID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5wbGFjZWhvbGRlckRhdGEoKSA6IG9wdGlvbnMucGxhY2Vob2xkZXJEYXRhO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNlbGVjdCAmJiB0eXBlb2YgcGxhY2Vob2xkZXJEYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlckRhdGEgPSBvcHRpb25zLnNlbGVjdChwbGFjZWhvbGRlckRhdGEpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zdHJ1Y3R1cmFsU2hhcmluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJEYXRhID0gcmVwbGFjZUVxdWFsRGVlcChwcmV2UmVzdWx0ID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UmVzdWx0LmRhdGEsIHBsYWNlaG9sZGVyRGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RFcnJvciA9IG51bGw7XG4gICAgICAgICAgfSBjYXRjaCAoc2VsZWN0RXJyb3IpIHtcbiAgICAgICAgICAgIGdldExvZ2dlcigpLmVycm9yKHNlbGVjdEVycm9yKTtcbiAgICAgICAgICAgIGVycm9yID0gc2VsZWN0RXJyb3I7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0RXJyb3IgPSBzZWxlY3RFcnJvcjtcbiAgICAgICAgICAgIGVycm9yVXBkYXRlZEF0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdlcnJvcic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXJEYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICAgIGRhdGEgPSBwbGFjZWhvbGRlckRhdGE7XG4gICAgICAgIGlzUGxhY2Vob2xkZXJEYXRhID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICBpc0xvYWRpbmc6IHN0YXR1cyA9PT0gJ2xvYWRpbmcnLFxuICAgICAgaXNTdWNjZXNzOiBzdGF0dXMgPT09ICdzdWNjZXNzJyxcbiAgICAgIGlzRXJyb3I6IHN0YXR1cyA9PT0gJ2Vycm9yJyxcbiAgICAgIGlzSWRsZTogc3RhdHVzID09PSAnaWRsZScsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZGF0YVVwZGF0ZWRBdDogZGF0YVVwZGF0ZWRBdCxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgIGVycm9yVXBkYXRlZEF0OiBlcnJvclVwZGF0ZWRBdCxcbiAgICAgIGZhaWx1cmVDb3VudDogc3RhdGUuZmV0Y2hGYWlsdXJlQ291bnQsXG4gICAgICBpc0ZldGNoZWQ6IHN0YXRlLmRhdGFVcGRhdGVDb3VudCA+IDAgfHwgc3RhdGUuZXJyb3JVcGRhdGVDb3VudCA+IDAsXG4gICAgICBpc0ZldGNoZWRBZnRlck1vdW50OiBzdGF0ZS5kYXRhVXBkYXRlQ291bnQgPiBxdWVyeUluaXRpYWxTdGF0ZS5kYXRhVXBkYXRlQ291bnQgfHwgc3RhdGUuZXJyb3JVcGRhdGVDb3VudCA+IHF1ZXJ5SW5pdGlhbFN0YXRlLmVycm9yVXBkYXRlQ291bnQsXG4gICAgICBpc0ZldGNoaW5nOiBpc0ZldGNoaW5nLFxuICAgICAgaXNSZWZldGNoaW5nOiBpc0ZldGNoaW5nICYmIHN0YXR1cyAhPT0gJ2xvYWRpbmcnLFxuICAgICAgaXNMb2FkaW5nRXJyb3I6IHN0YXR1cyA9PT0gJ2Vycm9yJyAmJiBzdGF0ZS5kYXRhVXBkYXRlZEF0ID09PSAwLFxuICAgICAgaXNQbGFjZWhvbGRlckRhdGE6IGlzUGxhY2Vob2xkZXJEYXRhLFxuICAgICAgaXNQcmV2aW91c0RhdGE6IGlzUHJldmlvdXNEYXRhLFxuICAgICAgaXNSZWZldGNoRXJyb3I6IHN0YXR1cyA9PT0gJ2Vycm9yJyAmJiBzdGF0ZS5kYXRhVXBkYXRlZEF0ICE9PSAwLFxuICAgICAgaXNTdGFsZTogaXNTdGFsZShxdWVyeSwgb3B0aW9ucyksXG4gICAgICByZWZldGNoOiB0aGlzLnJlZmV0Y2gsXG4gICAgICByZW1vdmU6IHRoaXMucmVtb3ZlXG4gICAgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5zaG91bGROb3RpZnlMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzaG91bGROb3RpZnlMaXN0ZW5lcnMocmVzdWx0LCBwcmV2UmVzdWx0KSB7XG4gICAgaWYgKCFwcmV2UmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09PSBwcmV2UmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIG5vdGlmeU9uQ2hhbmdlUHJvcHMgPSBfdGhpcyRvcHRpb25zLm5vdGlmeU9uQ2hhbmdlUHJvcHMsXG4gICAgICAgIG5vdGlmeU9uQ2hhbmdlUHJvcHNFeGNsdXNpb25zID0gX3RoaXMkb3B0aW9ucy5ub3RpZnlPbkNoYW5nZVByb3BzRXhjbHVzaW9ucztcblxuICAgIGlmICghbm90aWZ5T25DaGFuZ2VQcm9wcyAmJiAhbm90aWZ5T25DaGFuZ2VQcm9wc0V4Y2x1c2lvbnMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChub3RpZnlPbkNoYW5nZVByb3BzID09PSAndHJhY2tlZCcgJiYgIXRoaXMudHJhY2tlZFByb3BzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGluY2x1ZGVkUHJvcHMgPSBub3RpZnlPbkNoYW5nZVByb3BzID09PSAndHJhY2tlZCcgPyB0aGlzLnRyYWNrZWRQcm9wcyA6IG5vdGlmeU9uQ2hhbmdlUHJvcHM7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHJlc3VsdCkuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgdHlwZWRLZXkgPSBrZXk7XG4gICAgICB2YXIgY2hhbmdlZCA9IHJlc3VsdFt0eXBlZEtleV0gIT09IHByZXZSZXN1bHRbdHlwZWRLZXldO1xuICAgICAgdmFyIGlzSW5jbHVkZWQgPSBpbmNsdWRlZFByb3BzID09IG51bGwgPyB2b2lkIDAgOiBpbmNsdWRlZFByb3BzLnNvbWUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggPT09IGtleTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGlzRXhjbHVkZWQgPSBub3RpZnlPbkNoYW5nZVByb3BzRXhjbHVzaW9ucyA9PSBudWxsID8gdm9pZCAwIDogbm90aWZ5T25DaGFuZ2VQcm9wc0V4Y2x1c2lvbnMuc29tZShmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCA9PT0ga2V5O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2hhbmdlZCAmJiAhaXNFeGNsdWRlZCAmJiAoIWluY2x1ZGVkUHJvcHMgfHwgaXNJbmNsdWRlZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVJlc3VsdCA9IGZ1bmN0aW9uIHVwZGF0ZVJlc3VsdChub3RpZnlPcHRpb25zKSB7XG4gICAgdmFyIHByZXZSZXN1bHQgPSB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gICAgdGhpcy5jdXJyZW50UmVzdWx0ID0gdGhpcy5jcmVhdGVSZXN1bHQodGhpcy5jdXJyZW50UXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jdXJyZW50UmVzdWx0U3RhdGUgPSB0aGlzLmN1cnJlbnRRdWVyeS5zdGF0ZTtcbiAgICB0aGlzLmN1cnJlbnRSZXN1bHRPcHRpb25zID0gdGhpcy5vcHRpb25zOyAvLyBPbmx5IG5vdGlmeSBpZiBzb21ldGhpbmcgaGFzIGNoYW5nZWRcblxuICAgIGlmIChzaGFsbG93RXF1YWxPYmplY3RzKHRoaXMuY3VycmVudFJlc3VsdCwgcHJldlJlc3VsdCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIERldGVybWluZSB3aGljaCBjYWxsYmFja3MgdG8gdHJpZ2dlclxuXG5cbiAgICB2YXIgZGVmYXVsdE5vdGlmeU9wdGlvbnMgPSB7XG4gICAgICBjYWNoZTogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAoKG5vdGlmeU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG5vdGlmeU9wdGlvbnMubGlzdGVuZXJzKSAhPT0gZmFsc2UgJiYgdGhpcy5zaG91bGROb3RpZnlMaXN0ZW5lcnModGhpcy5jdXJyZW50UmVzdWx0LCBwcmV2UmVzdWx0KSkge1xuICAgICAgZGVmYXVsdE5vdGlmeU9wdGlvbnMubGlzdGVuZXJzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmeShfZXh0ZW5kcyh7fSwgZGVmYXVsdE5vdGlmeU9wdGlvbnMsIG5vdGlmeU9wdGlvbnMpKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlUXVlcnkgPSBmdW5jdGlvbiB1cGRhdGVRdWVyeSgpIHtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLmNsaWVudC5nZXRRdWVyeUNhY2hlKCkuYnVpbGQodGhpcy5jbGllbnQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAocXVlcnkgPT09IHRoaXMuY3VycmVudFF1ZXJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByZXZRdWVyeSA9IHRoaXMuY3VycmVudFF1ZXJ5O1xuICAgIHRoaXMuY3VycmVudFF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5jdXJyZW50UXVlcnlJbml0aWFsU3RhdGUgPSBxdWVyeS5zdGF0ZTtcbiAgICB0aGlzLnByZXZpb3VzUXVlcnlSZXN1bHQgPSB0aGlzLmN1cnJlbnRSZXN1bHQ7XG5cbiAgICBpZiAodGhpcy5oYXNMaXN0ZW5lcnMoKSkge1xuICAgICAgcHJldlF1ZXJ5ID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UXVlcnkucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XG4gICAgICBxdWVyeS5hZGRPYnNlcnZlcih0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uUXVlcnlVcGRhdGUgPSBmdW5jdGlvbiBvblF1ZXJ5VXBkYXRlKGFjdGlvbikge1xuICAgIHZhciBub3RpZnlPcHRpb25zID0ge307XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgbm90aWZ5T3B0aW9ucy5vblN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdlcnJvcicgJiYgIWlzQ2FuY2VsbGVkRXJyb3IoYWN0aW9uLmVycm9yKSkge1xuICAgICAgbm90aWZ5T3B0aW9ucy5vbkVycm9yID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVJlc3VsdChub3RpZnlPcHRpb25zKTtcblxuICAgIGlmICh0aGlzLmhhc0xpc3RlbmVycygpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWVycygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KG5vdGlmeU9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRmlyc3QgdHJpZ2dlciB0aGUgY29uZmlndXJhdGlvbiBjYWxsYmFja3NcbiAgICAgIGlmIChub3RpZnlPcHRpb25zLm9uU3VjY2Vzcykge1xuICAgICAgICBfdGhpczgub3B0aW9ucy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzOC5vcHRpb25zLm9uU3VjY2VzcyhfdGhpczguY3VycmVudFJlc3VsdC5kYXRhKTtcbiAgICAgICAgX3RoaXM4Lm9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczgub3B0aW9ucy5vblNldHRsZWQoX3RoaXM4LmN1cnJlbnRSZXN1bHQuZGF0YSwgbnVsbCk7XG4gICAgICB9IGVsc2UgaWYgKG5vdGlmeU9wdGlvbnMub25FcnJvcikge1xuICAgICAgICBfdGhpczgub3B0aW9ucy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczgub3B0aW9ucy5vbkVycm9yKF90aGlzOC5jdXJyZW50UmVzdWx0LmVycm9yKTtcbiAgICAgICAgX3RoaXM4Lm9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczgub3B0aW9ucy5vblNldHRsZWQodW5kZWZpbmVkLCBfdGhpczguY3VycmVudFJlc3VsdC5lcnJvcik7XG4gICAgICB9IC8vIFRoZW4gdHJpZ2dlciB0aGUgbGlzdGVuZXJzXG5cblxuICAgICAgaWYgKG5vdGlmeU9wdGlvbnMubGlzdGVuZXJzKSB7XG4gICAgICAgIF90aGlzOC5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lcihfdGhpczguY3VycmVudFJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBUaGVuIHRoZSBjYWNoZSBsaXN0ZW5lcnNcblxuXG4gICAgICBpZiAobm90aWZ5T3B0aW9ucy5jYWNoZSkge1xuICAgICAgICBfdGhpczguY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5ub3RpZnkoe1xuICAgICAgICAgIHF1ZXJ5OiBfdGhpczguY3VycmVudFF1ZXJ5LFxuICAgICAgICAgIHR5cGU6ICdvYnNlcnZlclJlc3VsdHNVcGRhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUXVlcnlPYnNlcnZlcjtcbn0oU3Vic2NyaWJhYmxlKTtcblxuZnVuY3Rpb24gc2hvdWxkTG9hZE9uTW91bnQocXVlcnksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2UgJiYgIXF1ZXJ5LnN0YXRlLmRhdGFVcGRhdGVkQXQgJiYgIShxdWVyeS5zdGF0ZS5zdGF0dXMgPT09ICdlcnJvcicgJiYgb3B0aW9ucy5yZXRyeU9uTW91bnQgPT09IGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkUmVmZXRjaE9uTW91bnQocXVlcnksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2UgJiYgcXVlcnkuc3RhdGUuZGF0YVVwZGF0ZWRBdCA+IDAgJiYgKG9wdGlvbnMucmVmZXRjaE9uTW91bnQgPT09ICdhbHdheXMnIHx8IG9wdGlvbnMucmVmZXRjaE9uTW91bnQgIT09IGZhbHNlICYmIGlzU3RhbGUocXVlcnksIG9wdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkRmV0Y2hPbk1vdW50KHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiBzaG91bGRMb2FkT25Nb3VudChxdWVyeSwgb3B0aW9ucykgfHwgc2hvdWxkUmVmZXRjaE9uTW91bnQocXVlcnksIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBfc2hvdWxkRmV0Y2hPblJlY29ubmVjdChxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiAob3B0aW9ucy5yZWZldGNoT25SZWNvbm5lY3QgPT09ICdhbHdheXMnIHx8IG9wdGlvbnMucmVmZXRjaE9uUmVjb25uZWN0ICE9PSBmYWxzZSAmJiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKSk7XG59XG5cbmZ1bmN0aW9uIF9zaG91bGRGZXRjaE9uV2luZG93Rm9jdXMocXVlcnksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2UgJiYgKG9wdGlvbnMucmVmZXRjaE9uV2luZG93Rm9jdXMgPT09ICdhbHdheXMnIHx8IG9wdGlvbnMucmVmZXRjaE9uV2luZG93Rm9jdXMgIT09IGZhbHNlICYmIGlzU3RhbGUocXVlcnksIG9wdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkRmV0Y2hPcHRpb25hbGx5KHF1ZXJ5LCBwcmV2UXVlcnksIG9wdGlvbnMsIHByZXZPcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmVuYWJsZWQgIT09IGZhbHNlICYmIChxdWVyeSAhPT0gcHJldlF1ZXJ5IHx8IHByZXZPcHRpb25zLmVuYWJsZWQgPT09IGZhbHNlKSAmJiAoIW9wdGlvbnMuc3VzcGVuc2UgfHwgcXVlcnkuc3RhdGUuc3RhdHVzICE9PSAnZXJyb3InIHx8IHByZXZPcHRpb25zLmVuYWJsZWQgPT09IGZhbHNlKSAmJiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaXNTdGFsZShxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gcXVlcnkuaXNTdGFsZUJ5VGltZShvcHRpb25zLnN0YWxlVGltZSk7XG59IiwiaW1wb3J0IHsgZm9jdXNNYW5hZ2VyIH0gZnJvbSAnLi9mb2N1c01hbmFnZXInO1xuaW1wb3J0IHsgb25saW5lTWFuYWdlciB9IGZyb20gJy4vb25saW5lTWFuYWdlcic7XG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4vdXRpbHMnOyAvLyBUWVBFU1xuXG5mdW5jdGlvbiBkZWZhdWx0UmV0cnlEZWxheShmYWlsdXJlQ291bnQpIHtcbiAgcmV0dXJuIE1hdGgubWluKDEwMDAgKiBNYXRoLnBvdygyLCBmYWlsdXJlQ291bnQpLCAzMDAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NhbmNlbGFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiAodmFsdWUgPT0gbnVsbCA/IHZvaWQgMCA6IHZhbHVlLmNhbmNlbCkgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnQgdmFyIENhbmNlbGxlZEVycm9yID0gZnVuY3Rpb24gQ2FuY2VsbGVkRXJyb3Iob3B0aW9ucykge1xuICB0aGlzLnJldmVydCA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucmV2ZXJ0O1xuICB0aGlzLnNpbGVudCA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuc2lsZW50O1xufTtcbmV4cG9ydCBmdW5jdGlvbiBpc0NhbmNlbGxlZEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIENhbmNlbGxlZEVycm9yO1xufSAvLyBDTEFTU1xuXG5leHBvcnQgdmFyIFJldHJ5ZXIgPSBmdW5jdGlvbiBSZXRyeWVyKGNvbmZpZykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBjYW5jZWxSZXRyeSA9IGZhbHNlO1xuICB2YXIgY2FuY2VsRm47XG4gIHZhciBjb250aW51ZUZuO1xuICB2YXIgcHJvbWlzZVJlc29sdmU7XG4gIHZhciBwcm9taXNlUmVqZWN0O1xuXG4gIHRoaXMuY2FuY2VsID0gZnVuY3Rpb24gKGNhbmNlbE9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2FuY2VsRm4gPT0gbnVsbCA/IHZvaWQgMCA6IGNhbmNlbEZuKGNhbmNlbE9wdGlvbnMpO1xuICB9O1xuXG4gIHRoaXMuY2FuY2VsUmV0cnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2FuY2VsUmV0cnkgPSB0cnVlO1xuICB9O1xuXG4gIHRoaXMuY29udGludWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvbnRpbnVlRm4gPT0gbnVsbCA/IHZvaWQgMCA6IGNvbnRpbnVlRm4oKTtcbiAgfTtcblxuICB0aGlzLmZhaWx1cmVDb3VudCA9IDA7XG4gIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgdGhpcy5pc1Jlc29sdmVkID0gZmFsc2U7XG4gIHRoaXMuaXNUcmFuc3BvcnRDYW5jZWxhYmxlID0gZmFsc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChvdXRlclJlc29sdmUsIG91dGVyUmVqZWN0KSB7XG4gICAgcHJvbWlzZVJlc29sdmUgPSBvdXRlclJlc29sdmU7XG4gICAgcHJvbWlzZVJlamVjdCA9IG91dGVyUmVqZWN0O1xuICB9KTtcblxuICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICBpZiAoIV90aGlzLmlzUmVzb2x2ZWQpIHtcbiAgICAgIF90aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgY29uZmlnLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLm9uU3VjY2Vzcyh2YWx1ZSk7XG4gICAgICBjb250aW51ZUZuID09IG51bGwgPyB2b2lkIDAgOiBjb250aW51ZUZuKCk7XG4gICAgICBwcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZWplY3QgPSBmdW5jdGlvbiByZWplY3QodmFsdWUpIHtcbiAgICBpZiAoIV90aGlzLmlzUmVzb2x2ZWQpIHtcbiAgICAgIF90aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgY29uZmlnLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5vbkVycm9yKHZhbHVlKTtcbiAgICAgIGNvbnRpbnVlRm4gPT0gbnVsbCA/IHZvaWQgMCA6IGNvbnRpbnVlRm4oKTtcbiAgICAgIHByb21pc2VSZWplY3QodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcGF1c2UgPSBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGNvbnRpbnVlUmVzb2x2ZSkge1xuICAgICAgY29udGludWVGbiA9IGNvbnRpbnVlUmVzb2x2ZTtcbiAgICAgIF90aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICAgIGNvbmZpZy5vblBhdXNlID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcub25QYXVzZSgpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgY29udGludWVGbiA9IHVuZGVmaW5lZDtcbiAgICAgIF90aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgICBjb25maWcub25Db250aW51ZSA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLm9uQ29udGludWUoKTtcbiAgICB9KTtcbiAgfTsgLy8gQ3JlYXRlIGxvb3AgZnVuY3Rpb25cblxuXG4gIHZhciBydW4gPSBmdW5jdGlvbiBydW4oKSB7XG4gICAgLy8gRG8gbm90aGluZyBpZiBhbHJlYWR5IHJlc29sdmVkXG4gICAgaWYgKF90aGlzLmlzUmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvbWlzZU9yVmFsdWU7IC8vIEV4ZWN1dGUgcXVlcnlcblxuICAgIHRyeSB7XG4gICAgICBwcm9taXNlT3JWYWx1ZSA9IGNvbmZpZy5mbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwcm9taXNlT3JWYWx1ZSA9IFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9IC8vIENyZWF0ZSBjYWxsYmFjayB0byBjYW5jZWwgdGhpcyBmZXRjaFxuXG5cbiAgICBjYW5jZWxGbiA9IGZ1bmN0aW9uIGNhbmNlbEZuKGNhbmNlbE9wdGlvbnMpIHtcbiAgICAgIGlmICghX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgICByZWplY3QobmV3IENhbmNlbGxlZEVycm9yKGNhbmNlbE9wdGlvbnMpKTsgLy8gQ2FuY2VsIHRyYW5zcG9ydCBpZiBzdXBwb3J0ZWRcblxuICAgICAgICBpZiAoaXNDYW5jZWxhYmxlKHByb21pc2VPclZhbHVlKSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9taXNlT3JWYWx1ZS5jYW5jZWwoKTtcbiAgICAgICAgICB9IGNhdGNoIChfdW51c2VkKSB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTsgLy8gQ2hlY2sgaWYgdGhlIHRyYW5zcG9ydCBsYXllciBzdXBwb3J0IGNhbmNlbGxhdGlvblxuXG5cbiAgICBfdGhpcy5pc1RyYW5zcG9ydENhbmNlbGFibGUgPSBpc0NhbmNlbGFibGUocHJvbWlzZU9yVmFsdWUpO1xuICAgIFByb21pc2UucmVzb2x2ZShwcm9taXNlT3JWYWx1ZSkudGhlbihyZXNvbHZlKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHZhciBfY29uZmlnJHJldHJ5LCBfY29uZmlnJHJldHJ5RGVsYXk7XG5cbiAgICAgIC8vIFN0b3AgaWYgdGhlIGZldGNoIGlzIGFscmVhZHkgcmVzb2x2ZWRcbiAgICAgIGlmIChfdGhpcy5pc1Jlc29sdmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRG8gd2UgbmVlZCB0byByZXRyeSB0aGUgcmVxdWVzdD9cblxuXG4gICAgICB2YXIgcmV0cnkgPSAoX2NvbmZpZyRyZXRyeSA9IGNvbmZpZy5yZXRyeSkgIT0gbnVsbCA/IF9jb25maWckcmV0cnkgOiAzO1xuICAgICAgdmFyIHJldHJ5RGVsYXkgPSAoX2NvbmZpZyRyZXRyeURlbGF5ID0gY29uZmlnLnJldHJ5RGVsYXkpICE9IG51bGwgPyBfY29uZmlnJHJldHJ5RGVsYXkgOiBkZWZhdWx0UmV0cnlEZWxheTtcbiAgICAgIHZhciBkZWxheSA9IHR5cGVvZiByZXRyeURlbGF5ID09PSAnZnVuY3Rpb24nID8gcmV0cnlEZWxheShfdGhpcy5mYWlsdXJlQ291bnQsIGVycm9yKSA6IHJldHJ5RGVsYXk7XG4gICAgICB2YXIgc2hvdWxkUmV0cnkgPSByZXRyeSA9PT0gdHJ1ZSB8fCB0eXBlb2YgcmV0cnkgPT09ICdudW1iZXInICYmIF90aGlzLmZhaWx1cmVDb3VudCA8IHJldHJ5IHx8IHR5cGVvZiByZXRyeSA9PT0gJ2Z1bmN0aW9uJyAmJiByZXRyeShfdGhpcy5mYWlsdXJlQ291bnQsIGVycm9yKTtcblxuICAgICAgaWYgKGNhbmNlbFJldHJ5IHx8ICFzaG91bGRSZXRyeSkge1xuICAgICAgICAvLyBXZSBhcmUgZG9uZSBpZiB0aGUgcXVlcnkgZG9lcyBub3QgbmVlZCB0byBiZSByZXRyaWVkXG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuZmFpbHVyZUNvdW50Kys7IC8vIE5vdGlmeSBvbiBmYWlsXG5cbiAgICAgIGNvbmZpZy5vbkZhaWwgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5vbkZhaWwoX3RoaXMuZmFpbHVyZUNvdW50LCBlcnJvcik7IC8vIERlbGF5XG5cbiAgICAgIHNsZWVwKGRlbGF5KSAvLyBQYXVzZSBpZiB0aGUgZG9jdW1lbnQgaXMgbm90IHZpc2libGUgb3Igd2hlbiB0aGUgZGV2aWNlIGlzIG9mZmxpbmVcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFmb2N1c01hbmFnZXIuaXNGb2N1c2VkKCkgfHwgIW9ubGluZU1hbmFnZXIuaXNPbmxpbmUoKSkge1xuICAgICAgICAgIHJldHVybiBwYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNhbmNlbFJldHJ5KSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBydW4oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07IC8vIFN0YXJ0IGxvb3BcblxuXG4gIHJ1bigpO1xufTsiLCJleHBvcnQgdmFyIFN1YnNjcmliYWJsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN1YnNjcmliYWJsZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN1YnNjcmliYWJsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgY2FsbGJhY2sgPSBsaXN0ZW5lciB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB0aGlzLm9uU3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmxpc3RlbmVycyA9IF90aGlzLmxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggIT09IGNhbGxiYWNrO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uVW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbiBoYXNMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA+IDA7XG4gIH07XG5cbiAgX3Byb3RvLm9uU3Vic2NyaWJlID0gZnVuY3Rpb24gb25TdWJzY3JpYmUoKSB7Ly8gRG8gbm90aGluZ1xuICB9O1xuXG4gIF9wcm90by5vblVuc3Vic2NyaWJlID0gZnVuY3Rpb24gb25VbnN1YnNjcmliZSgpIHsvLyBEbyBub3RoaW5nXG4gIH07XG5cbiAgcmV0dXJuIFN1YnNjcmliYWJsZTtcbn0oKTsiLCIiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbi8vIFRZUEVTXG4vLyBVVElMU1xuZXhwb3J0IHZhciBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZnVuY3Rpb25hbFVwZGF0ZSh1cGRhdGVyLCBpbnB1dCkge1xuICByZXR1cm4gdHlwZW9mIHVwZGF0ZXIgPT09ICdmdW5jdGlvbicgPyB1cGRhdGVyKGlucHV0KSA6IHVwZGF0ZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFRpbWVvdXQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSAhPT0gSW5maW5pdHk7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlUXVlcnlLZXlBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59XG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZShhcnJheTEsIGFycmF5Mikge1xuICByZXR1cm4gYXJyYXkxLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBhcnJheTIuaW5kZXhPZih4KSA9PT0gLTE7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBdChhcnJheSwgaW5kZXgsIHZhbHVlKSB7XG4gIHZhciBjb3B5ID0gYXJyYXkuc2xpY2UoMCk7XG4gIGNvcHlbaW5kZXhdID0gdmFsdWU7XG4gIHJldHVybiBjb3B5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVVbnRpbFN0YWxlKHVwZGF0ZWRBdCwgc3RhbGVUaW1lKSB7XG4gIHJldHVybiBNYXRoLm1heCh1cGRhdGVkQXQgKyAoc3RhbGVUaW1lIHx8IDApIC0gRGF0ZS5ub3coKSwgMCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeUFyZ3MoYXJnMSwgYXJnMiwgYXJnMykge1xuICBpZiAoIWlzUXVlcnlLZXkoYXJnMSkpIHtcbiAgICByZXR1cm4gYXJnMTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYXJnMiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMywge1xuICAgICAgcXVlcnlLZXk6IGFyZzEsXG4gICAgICBxdWVyeUZuOiBhcmcyXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGFyZzIsIHtcbiAgICBxdWVyeUtleTogYXJnMVxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU11dGF0aW9uQXJncyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gIGlmIChpc1F1ZXJ5S2V5KGFyZzEpKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFyZzMsIHtcbiAgICAgICAgbXV0YXRpb25LZXk6IGFyZzEsXG4gICAgICAgIG11dGF0aW9uRm46IGFyZzJcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMiwge1xuICAgICAgbXV0YXRpb25LZXk6IGFyZzFcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYXJnMSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMiwge1xuICAgICAgbXV0YXRpb25GbjogYXJnMVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmcxKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiwgYXJnMykge1xuICByZXR1cm4gaXNRdWVyeUtleShhcmcxKSA/IFtfZXh0ZW5kcyh7fSwgYXJnMiwge1xuICAgIHF1ZXJ5S2V5OiBhcmcxXG4gIH0pLCBhcmczXSA6IFthcmcxIHx8IHt9LCBhcmcyXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU11dGF0aW9uRmlsdGVyQXJncyhhcmcxLCBhcmcyKSB7XG4gIHJldHVybiBpc1F1ZXJ5S2V5KGFyZzEpID8gX2V4dGVuZHMoe30sIGFyZzIsIHtcbiAgICBtdXRhdGlvbktleTogYXJnMVxuICB9KSA6IGFyZzE7XG59XG5leHBvcnQgZnVuY3Rpb24gbWFwUXVlcnlTdGF0dXNGaWx0ZXIoYWN0aXZlLCBpbmFjdGl2ZSkge1xuICBpZiAoYWN0aXZlID09PSB0cnVlICYmIGluYWN0aXZlID09PSB0cnVlIHx8IGFjdGl2ZSA9PSBudWxsICYmIGluYWN0aXZlID09IG51bGwpIHtcbiAgICByZXR1cm4gJ2FsbCc7XG4gIH0gZWxzZSBpZiAoYWN0aXZlID09PSBmYWxzZSAmJiBpbmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gJ25vbmUnO1xuICB9IGVsc2Uge1xuICAgIC8vIEF0IHRoaXMgcG9pbnQsIGFjdGl2ZXxpbmFjdGl2ZSBjYW4gb25seSBiZSB0cnVlfGZhbHNlIG9yIGZhbHNlfHRydWVcbiAgICAvLyBzbywgd2hlbiBvbmx5IG9uZSB2YWx1ZSBpcyBwcm92aWRlZCwgdGhlIG1pc3Npbmcgb25lIGhhcyB0byBiZSB0aGUgbmVnYXRlZCB2YWx1ZVxuICAgIHZhciBpc0FjdGl2ZSA9IGFjdGl2ZSAhPSBudWxsID8gYWN0aXZlIDogIWluYWN0aXZlO1xuICAgIHJldHVybiBpc0FjdGl2ZSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJztcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUXVlcnkoZmlsdGVycywgcXVlcnkpIHtcbiAgdmFyIGFjdGl2ZSA9IGZpbHRlcnMuYWN0aXZlLFxuICAgICAgZXhhY3QgPSBmaWx0ZXJzLmV4YWN0LFxuICAgICAgZmV0Y2hpbmcgPSBmaWx0ZXJzLmZldGNoaW5nLFxuICAgICAgaW5hY3RpdmUgPSBmaWx0ZXJzLmluYWN0aXZlLFxuICAgICAgcHJlZGljYXRlID0gZmlsdGVycy5wcmVkaWNhdGUsXG4gICAgICBxdWVyeUtleSA9IGZpbHRlcnMucXVlcnlLZXksXG4gICAgICBzdGFsZSA9IGZpbHRlcnMuc3RhbGU7XG5cbiAgaWYgKGlzUXVlcnlLZXkocXVlcnlLZXkpKSB7XG4gICAgaWYgKGV4YWN0KSB7XG4gICAgICBpZiAocXVlcnkucXVlcnlIYXNoICE9PSBoYXNoUXVlcnlLZXlCeU9wdGlvbnMocXVlcnlLZXksIHF1ZXJ5Lm9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFwYXJ0aWFsTWF0Y2hLZXkocXVlcnkucXVlcnlLZXksIHF1ZXJ5S2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBxdWVyeVN0YXR1c0ZpbHRlciA9IG1hcFF1ZXJ5U3RhdHVzRmlsdGVyKGFjdGl2ZSwgaW5hY3RpdmUpO1xuXG4gIGlmIChxdWVyeVN0YXR1c0ZpbHRlciA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKHF1ZXJ5U3RhdHVzRmlsdGVyICE9PSAnYWxsJykge1xuICAgIHZhciBpc0FjdGl2ZSA9IHF1ZXJ5LmlzQWN0aXZlKCk7XG5cbiAgICBpZiAocXVlcnlTdGF0dXNGaWx0ZXIgPT09ICdhY3RpdmUnICYmICFpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChxdWVyeVN0YXR1c0ZpbHRlciA9PT0gJ2luYWN0aXZlJyAmJiBpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RhbGUgPT09ICdib29sZWFuJyAmJiBxdWVyeS5pc1N0YWxlKCkgIT09IHN0YWxlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmZXRjaGluZyA9PT0gJ2Jvb2xlYW4nICYmIHF1ZXJ5LmlzRmV0Y2hpbmcoKSAhPT0gZmV0Y2hpbmcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUocXVlcnkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hNdXRhdGlvbihmaWx0ZXJzLCBtdXRhdGlvbikge1xuICB2YXIgZXhhY3QgPSBmaWx0ZXJzLmV4YWN0LFxuICAgICAgZmV0Y2hpbmcgPSBmaWx0ZXJzLmZldGNoaW5nLFxuICAgICAgcHJlZGljYXRlID0gZmlsdGVycy5wcmVkaWNhdGUsXG4gICAgICBtdXRhdGlvbktleSA9IGZpbHRlcnMubXV0YXRpb25LZXk7XG5cbiAgaWYgKGlzUXVlcnlLZXkobXV0YXRpb25LZXkpKSB7XG4gICAgaWYgKCFtdXRhdGlvbi5vcHRpb25zLm11dGF0aW9uS2V5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGV4YWN0KSB7XG4gICAgICBpZiAoaGFzaFF1ZXJ5S2V5KG11dGF0aW9uLm9wdGlvbnMubXV0YXRpb25LZXkpICE9PSBoYXNoUXVlcnlLZXkobXV0YXRpb25LZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFwYXJ0aWFsTWF0Y2hLZXkobXV0YXRpb24ub3B0aW9ucy5tdXRhdGlvbktleSwgbXV0YXRpb25LZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBmZXRjaGluZyA9PT0gJ2Jvb2xlYW4nICYmIG11dGF0aW9uLnN0YXRlLnN0YXR1cyA9PT0gJ2xvYWRpbmcnICE9PSBmZXRjaGluZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShtdXRhdGlvbikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNoUXVlcnlLZXlCeU9wdGlvbnMocXVlcnlLZXksIG9wdGlvbnMpIHtcbiAgdmFyIGhhc2hGbiA9IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnF1ZXJ5S2V5SGFzaEZuKSB8fCBoYXNoUXVlcnlLZXk7XG4gIHJldHVybiBoYXNoRm4ocXVlcnlLZXkpO1xufVxuLyoqXG4gKiBEZWZhdWx0IHF1ZXJ5IGtleXMgaGFzaCBmdW5jdGlvbi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzaFF1ZXJ5S2V5KHF1ZXJ5S2V5KSB7XG4gIHZhciBhc0FycmF5ID0gZW5zdXJlUXVlcnlLZXlBcnJheShxdWVyeUtleSk7XG4gIHJldHVybiBzdGFibGVWYWx1ZUhhc2goYXNBcnJheSk7XG59XG4vKipcbiAqIEhhc2hlcyB0aGUgdmFsdWUgaW50byBhIHN0YWJsZSBoYXNoLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFibGVWYWx1ZUhhc2godmFsdWUpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCBmdW5jdGlvbiAoXywgdmFsKSB7XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsKSA/IE9iamVjdC5rZXlzKHZhbCkuc29ydCgpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsW2tleV07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KSA6IHZhbDtcbiAgfSk7XG59XG4vKipcbiAqIENoZWNrcyBpZiBrZXkgYGJgIHBhcnRpYWxseSBtYXRjaGVzIHdpdGgga2V5IGBhYC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFydGlhbE1hdGNoS2V5KGEsIGIpIHtcbiAgcmV0dXJuIHBhcnRpYWxEZWVwRXF1YWwoZW5zdXJlUXVlcnlLZXlBcnJheShhKSwgZW5zdXJlUXVlcnlLZXlBcnJheShiKSk7XG59XG4vKipcbiAqIENoZWNrcyBpZiBgYmAgcGFydGlhbGx5IG1hdGNoZXMgd2l0aCBgYWAuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpYWxEZWVwRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAhT2JqZWN0LmtleXMoYikuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gIXBhcnRpYWxEZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYGFgIGlmIGBiYCBpcyBkZWVwbHkgZXF1YWwuXG4gKiBJZiBub3QsIGl0IHdpbGwgcmVwbGFjZSBhbnkgZGVlcGx5IGVxdWFsIGNoaWxkcmVuIG9mIGBiYCB3aXRoIHRob3NlIG9mIGBhYC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHN0cnVjdHVyYWwgc2hhcmluZyBiZXR3ZWVuIEpTT04gdmFsdWVzIGZvciBleGFtcGxlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRXF1YWxEZWVwKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoYSkgJiYgQXJyYXkuaXNBcnJheShiKTtcblxuICBpZiAoYXJyYXkgfHwgaXNQbGFpbk9iamVjdChhKSAmJiBpc1BsYWluT2JqZWN0KGIpKSB7XG4gICAgdmFyIGFTaXplID0gYXJyYXkgPyBhLmxlbmd0aCA6IE9iamVjdC5rZXlzKGEpLmxlbmd0aDtcbiAgICB2YXIgYkl0ZW1zID0gYXJyYXkgPyBiIDogT2JqZWN0LmtleXMoYik7XG4gICAgdmFyIGJTaXplID0gYkl0ZW1zLmxlbmd0aDtcbiAgICB2YXIgY29weSA9IGFycmF5ID8gW10gOiB7fTtcbiAgICB2YXIgZXF1YWxJdGVtcyA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJTaXplOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBhcnJheSA/IGkgOiBiSXRlbXNbaV07XG4gICAgICBjb3B5W2tleV0gPSByZXBsYWNlRXF1YWxEZWVwKGFba2V5XSwgYltrZXldKTtcblxuICAgICAgaWYgKGNvcHlba2V5XSA9PT0gYVtrZXldKSB7XG4gICAgICAgIGVxdWFsSXRlbXMrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYVNpemUgPT09IGJTaXplICYmIGVxdWFsSXRlbXMgPT09IGFTaXplID8gYSA6IGNvcHk7XG4gIH1cblxuICByZXR1cm4gYjtcbn1cbi8qKlxuICogU2hhbGxvdyBjb21wYXJlIG9iamVjdHMuIE9ubHkgd29ya3Mgd2l0aCBvYmplY3RzIHRoYXQgYWx3YXlzIGhhdmUgdGhlIHNhbWUgcHJvcGVydGllcy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsT2JqZWN0cyhhLCBiKSB7XG4gIGlmIChhICYmICFiIHx8IGIgJiYgIWEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSAvLyBDb3BpZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtcGxhaW4tb2JqZWN0XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG8pIHtcbiAgaWYgKCFoYXNPYmplY3RQcm90b3R5cGUobykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gSWYgaGFzIG1vZGlmaWVkIGNvbnN0cnVjdG9yXG5cblxuICB2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cbiAgaWYgKHR5cGVvZiBjdG9yID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIElmIGhhcyBtb2RpZmllZCBwcm90b3R5cGVcblxuXG4gIHZhciBwcm90ID0gY3Rvci5wcm90b3R5cGU7XG5cbiAgaWYgKCFoYXNPYmplY3RQcm90b3R5cGUocHJvdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gSWYgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSBhbiBPYmplY3Qtc3BlY2lmaWMgbWV0aG9kXG5cblxuICBpZiAoIXByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBNb3N0IGxpa2VseSBhIHBsYWluIE9iamVjdFxuXG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhc09iamVjdFByb3RvdHlwZShvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNRdWVyeUtleSh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Vycm9yKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEVycm9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNsZWVwKHRpbWVvdXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lb3V0KTtcbiAgfSk7XG59XG4vKipcbiAqIFNjaGVkdWxlcyBhIG1pY3JvdGFzay5cbiAqIFRoaXMgY2FuIGJlIHVzZWZ1bCB0byBzY2hlZHVsZSBzdGF0ZSB1cGRhdGVzIGFmdGVyIHJlbmRlcmluZy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVNaWNyb3Rhc2soY2FsbGJhY2spIHtcbiAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihjYWxsYmFjaykuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSk7XG4gIH0pO1xufSIsImV4cG9ydCAqIGZyb20gJy4vY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL3JlYWN0JzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUh5ZHJhdGUoc3RhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgdmFyIG9wdGlvbnNSZWYgPSBSZWFjdC51c2VSZWYob3B0aW9ucyk7XG4gIG9wdGlvbnNSZWYuY3VycmVudCA9IG9wdGlvbnM7IC8vIFJ1bm5pbmcgaHlkcmF0ZSBhZ2FpbiB3aXRoIHRoZSBzYW1lIHF1ZXJpZXMgaXMgc2FmZSxcbiAgLy8gaXQgd29udCBvdmVyd3JpdGUgb3IgaW5pdGlhbGl6ZSBleGlzdGluZyBxdWVyaWVzLFxuICAvLyByZWx5aW5nIG9uIHVzZU1lbW8gaGVyZSBpcyBvbmx5IGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLlxuICAvLyBoeWRyYXRlIGNhbiBhbmQgc2hvdWxkIGJlIHJ1biAqZHVyaW5nKiByZW5kZXIgaGVyZSBmb3IgU1NSIHRvIHdvcmsgcHJvcGVybHlcblxuICBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIGh5ZHJhdGUocXVlcnlDbGllbnQsIHN0YXRlLCBvcHRpb25zUmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5Q2xpZW50LCBzdGF0ZV0pO1xufVxuZXhwb3J0IHZhciBIeWRyYXRlID0gZnVuY3Rpb24gSHlkcmF0ZShfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICB1c2VIeWRyYXRlKHN0YXRlLCBvcHRpb25zKTtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIGRlZmF1bHRDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbnZhciBRdWVyeUNsaWVudFNoYXJpbmdDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoZmFsc2UpOyAvLyBpZiBjb250ZXh0U2hhcmluZyBpcyBvbiwgd2Ugc2hhcmUgdGhlIGZpcnN0IGFuZCBhdCBsZWFzdCBvbmVcbi8vIGluc3RhbmNlIG9mIHRoZSBjb250ZXh0IGFjcm9zcyB0aGUgd2luZG93XG4vLyB0byBlbnN1cmUgdGhhdCBpZiBSZWFjdCBRdWVyeSBpcyB1c2VkIGFjcm9zc1xuLy8gZGlmZmVyZW50IGJ1bmRsZXMgb3IgbWljcm9mcm9udGVuZHMgdGhleSB3aWxsXG4vLyBhbGwgdXNlIHRoZSBzYW1lICoqaW5zdGFuY2UqKiBvZiBjb250ZXh0LCByZWdhcmRsZXNzXG4vLyBvZiBtb2R1bGUgc2NvcGluZy5cblxuZnVuY3Rpb24gZ2V0UXVlcnlDbGllbnRDb250ZXh0KGNvbnRleHRTaGFyaW5nKSB7XG4gIGlmIChjb250ZXh0U2hhcmluZyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICghd2luZG93LlJlYWN0UXVlcnlDbGllbnRDb250ZXh0KSB7XG4gICAgICB3aW5kb3cuUmVhY3RRdWVyeUNsaWVudENvbnRleHQgPSBkZWZhdWx0Q29udGV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93LlJlYWN0UXVlcnlDbGllbnRDb250ZXh0O1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRDb250ZXh0O1xufVxuXG5leHBvcnQgdmFyIHVzZVF1ZXJ5Q2xpZW50ID0gZnVuY3Rpb24gdXNlUXVlcnlDbGllbnQoKSB7XG4gIHZhciBxdWVyeUNsaWVudCA9IFJlYWN0LnVzZUNvbnRleHQoZ2V0UXVlcnlDbGllbnRDb250ZXh0KFJlYWN0LnVzZUNvbnRleHQoUXVlcnlDbGllbnRTaGFyaW5nQ29udGV4dCkpKTtcblxuICBpZiAoIXF1ZXJ5Q2xpZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBRdWVyeUNsaWVudCBzZXQsIHVzZSBRdWVyeUNsaWVudFByb3ZpZGVyIHRvIHNldCBvbmUnKTtcbiAgfVxuXG4gIHJldHVybiBxdWVyeUNsaWVudDtcbn07XG5leHBvcnQgdmFyIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgPSBmdW5jdGlvbiBRdWVyeUNsaWVudFByb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIGNsaWVudCA9IF9yZWYuY2xpZW50LFxuICAgICAgX3JlZiRjb250ZXh0U2hhcmluZyA9IF9yZWYuY29udGV4dFNoYXJpbmcsXG4gICAgICBjb250ZXh0U2hhcmluZyA9IF9yZWYkY29udGV4dFNoYXJpbmcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRjb250ZXh0U2hhcmluZyxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBjbGllbnQubW91bnQoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xpZW50LnVubW91bnQoKTtcbiAgICB9O1xuICB9LCBbY2xpZW50XSk7XG4gIHZhciBDb250ZXh0ID0gZ2V0UXVlcnlDbGllbnRDb250ZXh0KGNvbnRleHRTaGFyaW5nKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXJ5Q2xpZW50U2hhcmluZ0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFNoYXJpbmdcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjbGllbnRcbiAgfSwgY2hpbGRyZW4pKTtcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgLy8gQ09OVEVYVFxuXG5mdW5jdGlvbiBjcmVhdGVWYWx1ZSgpIHtcbiAgdmFyIF9pc1Jlc2V0ID0gZmFsc2U7XG4gIHJldHVybiB7XG4gICAgY2xlYXJSZXNldDogZnVuY3Rpb24gY2xlYXJSZXNldCgpIHtcbiAgICAgIF9pc1Jlc2V0ID0gZmFsc2U7XG4gICAgfSxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBfaXNSZXNldCA9IHRydWU7XG4gICAgfSxcbiAgICBpc1Jlc2V0OiBmdW5jdGlvbiBpc1Jlc2V0KCkge1xuICAgICAgcmV0dXJuIF9pc1Jlc2V0O1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KGNyZWF0ZVZhbHVlKCkpOyAvLyBIT09LXG5cbmV4cG9ydCB2YXIgdXNlUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkgPSBmdW5jdGlvbiB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUXVlcnlFcnJvclJlc2V0Qm91bmRhcnlDb250ZXh0KTtcbn07IC8vIENPTVBPTkVOVFxuXG5leHBvcnQgdmFyIFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5ID0gZnVuY3Rpb24gUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgdmFsdWUgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY3JlYXRlVmFsdWUoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlcnlFcnJvclJlc2V0Qm91bmRhcnlDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHZhbHVlXG4gIH0sIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHZhbHVlKSA6IGNoaWxkcmVuKTtcbn07IiwiLy8gU2lkZSBlZmZlY3RzXG5pbXBvcnQgJy4vc2V0QmF0Y2hVcGRhdGVzRm4nO1xuaW1wb3J0ICcuL3NldExvZ2dlcic7XG5leHBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5leHBvcnQgeyBRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSwgdXNlUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkgfSBmcm9tICcuL1F1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5JztcbmV4cG9ydCB7IHVzZUlzRmV0Y2hpbmcgfSBmcm9tICcuL3VzZUlzRmV0Y2hpbmcnO1xuZXhwb3J0IHsgdXNlSXNNdXRhdGluZyB9IGZyb20gJy4vdXNlSXNNdXRhdGluZyc7XG5leHBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJy4vdXNlTXV0YXRpb24nO1xuZXhwb3J0IHsgdXNlUXVlcnkgfSBmcm9tICcuL3VzZVF1ZXJ5JztcbmV4cG9ydCB7IHVzZVF1ZXJpZXMgfSBmcm9tICcuL3VzZVF1ZXJpZXMnO1xuZXhwb3J0IHsgdXNlSW5maW5pdGVRdWVyeSB9IGZyb20gJy4vdXNlSW5maW5pdGVRdWVyeSc7XG5leHBvcnQgeyB1c2VIeWRyYXRlLCBIeWRyYXRlIH0gZnJvbSAnLi9IeWRyYXRlJzsgLy8gVHlwZXNcblxuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7IiwiZXhwb3J0IHZhciBsb2dnZXIgPSBjb25zb2xlOyIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuZXhwb3J0IHZhciB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyA9IFJlYWN0RE9NLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOyIsImltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIH0gZnJvbSAnLi9yZWFjdEJhdGNoZWRVcGRhdGVzJztcbm5vdGlmeU1hbmFnZXIuc2V0QmF0Y2hOb3RpZnlGdW5jdGlvbih1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyk7IiwiaW1wb3J0IHsgc2V0TG9nZ2VyIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5cbmlmIChsb2dnZXIpIHtcbiAgc2V0TG9nZ2VyKGxvZ2dlcik7XG59IiwiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkgfSBmcm9tICcuL1F1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5JztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9RdWVyeUNsaWVudFByb3ZpZGVyJztcbmltcG9ydCB7IHNob3VsZFRocm93RXJyb3IgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUXVlcnkob3B0aW9ucywgT2JzZXJ2ZXIpIHtcbiAgdmFyIG1vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgwKSxcbiAgICAgIGZvcmNlVXBkYXRlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIHZhciBlcnJvclJlc2V0Qm91bmRhcnkgPSB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSgpO1xuICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHF1ZXJ5Q2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTsgLy8gTWFrZSBzdXJlIHJlc3VsdHMgYXJlIG9wdGltaXN0aWNhbGx5IHNldCBpbiBmZXRjaGluZyBzdGF0ZSBiZWZvcmUgc3Vic2NyaWJpbmcgb3IgdXBkYXRpbmcgb3B0aW9uc1xuXG4gIGRlZmF1bHRlZE9wdGlvbnMub3B0aW1pc3RpY1Jlc3VsdHMgPSB0cnVlOyAvLyBJbmNsdWRlIGNhbGxiYWNrcyBpbiBiYXRjaCByZW5kZXJzXG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMub25FcnJvcikge1xuICAgIGRlZmF1bHRlZE9wdGlvbnMub25FcnJvciA9IG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhkZWZhdWx0ZWRPcHRpb25zLm9uRXJyb3IpO1xuICB9XG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMub25TdWNjZXNzKSB7XG4gICAgZGVmYXVsdGVkT3B0aW9ucy5vblN1Y2Nlc3MgPSBub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZGVmYXVsdGVkT3B0aW9ucy5vblN1Y2Nlc3MpO1xuICB9XG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkKSB7XG4gICAgZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQgPSBub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQpO1xuICB9XG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAvLyBBbHdheXMgc2V0IHN0YWxlIHRpbWUgd2hlbiB1c2luZyBzdXNwZW5zZSB0byBwcmV2ZW50XG4gICAgLy8gZmV0Y2hpbmcgYWdhaW4gd2hlbiBkaXJlY3RseSBtb3VudGluZyBhZnRlciBzdXNwZW5kaW5nXG4gICAgaWYgKHR5cGVvZiBkZWZhdWx0ZWRPcHRpb25zLnN0YWxlVGltZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMuc3RhbGVUaW1lID0gMTAwMDtcbiAgICB9IC8vIFNldCBjYWNoZSB0aW1lIHRvIDEgaWYgdGhlIG9wdGlvbiBoYXMgYmVlbiBzZXQgdG8gMFxuICAgIC8vIHdoZW4gdXNpbmcgc3VzcGVuc2UgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIG9mIGZldGNoZXNcblxuXG4gICAgaWYgKGRlZmF1bHRlZE9wdGlvbnMuY2FjaGVUaW1lID09PSAwKSB7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLmNhY2hlVGltZSA9IDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMuc3VzcGVuc2UgfHwgZGVmYXVsdGVkT3B0aW9ucy51c2VFcnJvckJvdW5kYXJ5KSB7XG4gICAgLy8gUHJldmVudCByZXRyeWluZyBmYWlsZWQgcXVlcnkgaWYgdGhlIGVycm9yIGJvdW5kYXJ5IGhhcyBub3QgYmVlbiByZXNldCB5ZXRcbiAgICBpZiAoIWVycm9yUmVzZXRCb3VuZGFyeS5pc1Jlc2V0KCkpIHtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMucmV0cnlPbk1vdW50ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZlcihxdWVyeUNsaWVudCwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gIH0pLFxuICAgICAgb2JzZXJ2ZXIgPSBfUmVhY3QkdXNlU3RhdGUyWzBdO1xuXG4gIHZhciByZXN1bHQgPSBvYnNlcnZlci5nZXRPcHRpbWlzdGljUmVzdWx0KGRlZmF1bHRlZE9wdGlvbnMpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgZXJyb3JSZXNldEJvdW5kYXJ5LmNsZWFyUmVzZXQoKTtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBvYnNlcnZlci5zdWJzY3JpYmUobm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZm9yY2VVcGRhdGUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4geCArIDE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKTsgLy8gVXBkYXRlIHJlc3VsdCB0byBtYWtlIHN1cmUgd2UgZGlkIG5vdCBtaXNzIGFueSBxdWVyeSB1cGRhdGVzXG4gICAgLy8gYmV0d2VlbiBjcmVhdGluZyB0aGUgb2JzZXJ2ZXIgYW5kIHN1YnNjcmliaW5nIHRvIGl0LlxuXG4gICAgb2JzZXJ2ZXIudXBkYXRlUmVzdWx0KCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbZXJyb3JSZXNldEJvdW5kYXJ5LCBvYnNlcnZlcl0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIERvIG5vdCBub3RpZnkgb24gdXBkYXRlcyBiZWNhdXNlIG9mIGNoYW5nZXMgaW4gdGhlIG9wdGlvbnMgYmVjYXVzZVxuICAgIC8vIHRoZXNlIGNoYW5nZXMgc2hvdWxkIGFscmVhZHkgYmUgcmVmbGVjdGVkIGluIHRoZSBvcHRpbWlzdGljIHJlc3VsdC5cbiAgICBvYnNlcnZlci5zZXRPcHRpb25zKGRlZmF1bHRlZE9wdGlvbnMsIHtcbiAgICAgIGxpc3RlbmVyczogZmFsc2VcbiAgICB9KTtcbiAgfSwgW2RlZmF1bHRlZE9wdGlvbnMsIG9ic2VydmVyXSk7IC8vIEhhbmRsZSBzdXNwZW5zZVxuXG4gIGlmIChkZWZhdWx0ZWRPcHRpb25zLnN1c3BlbnNlICYmIHJlc3VsdC5pc0xvYWRpbmcpIHtcbiAgICB0aHJvdyBvYnNlcnZlci5mZXRjaE9wdGltaXN0aWMoZGVmYXVsdGVkT3B0aW9ucykudGhlbihmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGRhdGEgPSBfcmVmLmRhdGE7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogZGVmYXVsdGVkT3B0aW9ucy5vblN1Y2Nlc3MoZGF0YSk7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQoZGF0YSwgbnVsbCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBlcnJvclJlc2V0Qm91bmRhcnkuY2xlYXJSZXNldCgpO1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBkZWZhdWx0ZWRPcHRpb25zLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkKHVuZGVmaW5lZCwgZXJyb3IpO1xuICAgIH0pO1xuICB9IC8vIEhhbmRsZSBlcnJvciBib3VuZGFyeVxuXG5cbiAgaWYgKHJlc3VsdC5pc0Vycm9yICYmICFyZXN1bHQuaXNGZXRjaGluZyAmJiBzaG91bGRUaHJvd0Vycm9yKGRlZmF1bHRlZE9wdGlvbnMuc3VzcGVuc2UsIGRlZmF1bHRlZE9wdGlvbnMudXNlRXJyb3JCb3VuZGFyeSwgcmVzdWx0LmVycm9yKSkge1xuICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgfSAvLyBIYW5kbGUgcmVzdWx0IHByb3BlcnR5IHVzYWdlIHRyYWNraW5nXG5cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5ub3RpZnlPbkNoYW5nZVByb3BzID09PSAndHJhY2tlZCcpIHtcbiAgICByZXN1bHQgPSBvYnNlcnZlci50cmFja1Jlc3VsdChyZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgeyBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlL2luZmluaXRlUXVlcnlPYnNlcnZlcic7XG5pbXBvcnQgeyBwYXJzZVF1ZXJ5QXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgdXNlQmFzZVF1ZXJ5IH0gZnJvbSAnLi91c2VCYXNlUXVlcnknOyAvLyBIT09LXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmZpbml0ZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgdmFyIG9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgcmV0dXJuIHVzZUJhc2VRdWVyeShvcHRpb25zLCBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIpO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IHBhcnNlRmlsdGVyQXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzRmV0Y2hpbmcoYXJnMSwgYXJnMikge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cbiAgdmFyIF9wYXJzZUZpbHRlckFyZ3MgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiksXG4gICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnc1swXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUocXVlcnlDbGllbnQuaXNGZXRjaGluZyhmaWx0ZXJzKSksXG4gICAgICBpc0ZldGNoaW5nID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0SXNGZXRjaGluZyA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgZmlsdGVyc1JlZiA9IFJlYWN0LnVzZVJlZihmaWx0ZXJzKTtcbiAgZmlsdGVyc1JlZi5jdXJyZW50ID0gZmlsdGVycztcbiAgdmFyIGlzRmV0Y2hpbmdSZWYgPSBSZWFjdC51c2VSZWYoaXNGZXRjaGluZyk7XG4gIGlzRmV0Y2hpbmdSZWYuY3VycmVudCA9IGlzRmV0Y2hpbmc7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBxdWVyeUNsaWVudC5nZXRRdWVyeUNhY2hlKCkuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHZhciBuZXdJc0ZldGNoaW5nID0gcXVlcnlDbGllbnQuaXNGZXRjaGluZyhmaWx0ZXJzUmVmLmN1cnJlbnQpO1xuXG4gICAgICAgIGlmIChpc0ZldGNoaW5nUmVmLmN1cnJlbnQgIT09IG5ld0lzRmV0Y2hpbmcpIHtcbiAgICAgICAgICBzZXRJc0ZldGNoaW5nKG5ld0lzRmV0Y2hpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW3F1ZXJ5Q2xpZW50XSk7XG4gIHJldHVybiBpc0ZldGNoaW5nO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IHBhcnNlTXV0YXRpb25GaWx0ZXJBcmdzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gdXNlSXNNdXRhdGluZyhhcmcxLCBhcmcyKSB7XG4gIHZhciBtb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdmFyIGZpbHRlcnMgPSBwYXJzZU11dGF0aW9uRmlsdGVyQXJncyhhcmcxLCBhcmcyKTtcbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUocXVlcnlDbGllbnQuaXNNdXRhdGluZyhmaWx0ZXJzKSksXG4gICAgICBpc011dGF0aW5nID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0SXNNdXRhdGluZyA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgZmlsdGVyc1JlZiA9IFJlYWN0LnVzZVJlZihmaWx0ZXJzKTtcbiAgZmlsdGVyc1JlZi5jdXJyZW50ID0gZmlsdGVycztcbiAgdmFyIGlzTXV0YXRpbmdSZWYgPSBSZWFjdC51c2VSZWYoaXNNdXRhdGluZyk7XG4gIGlzTXV0YXRpbmdSZWYuY3VycmVudCA9IGlzTXV0YXRpbmc7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBxdWVyeUNsaWVudC5nZXRNdXRhdGlvbkNhY2hlKCkuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHZhciBuZXdJc011dGF0aW5nID0gcXVlcnlDbGllbnQuaXNNdXRhdGluZyhmaWx0ZXJzUmVmLmN1cnJlbnQpO1xuXG4gICAgICAgIGlmIChpc011dGF0aW5nUmVmLmN1cnJlbnQgIT09IG5ld0lzTXV0YXRpbmcpIHtcbiAgICAgICAgICBzZXRJc011dGF0aW5nKG5ld0lzTXV0YXRpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW3F1ZXJ5Q2xpZW50XSk7XG4gIHJldHVybiBpc011dGF0aW5nO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgbm9vcCwgcGFyc2VNdXRhdGlvbkFyZ3MgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IE11dGF0aW9uT2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlL211dGF0aW9uT2JzZXJ2ZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuaW1wb3J0IHsgc2hvdWxkVGhyb3dFcnJvciB9IGZyb20gJy4vdXRpbHMnOyAvLyBIT09LXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNdXRhdGlvbihhcmcxLCBhcmcyLCBhcmczKSB7XG4gIHZhciBtb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoMCksXG4gICAgICBmb3JjZVVwZGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgb3B0aW9ucyA9IHBhcnNlTXV0YXRpb25BcmdzKGFyZzEsIGFyZzIsIGFyZzMpO1xuICB2YXIgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICB2YXIgb2JzUmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgaWYgKCFvYnNSZWYuY3VycmVudCkge1xuICAgIG9ic1JlZi5jdXJyZW50ID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocXVlcnlDbGllbnQsIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIG9ic1JlZi5jdXJyZW50LnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlc3VsdCA9IG9ic1JlZi5jdXJyZW50LmdldEN1cnJlbnRSZXN1bHQoKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IG9ic1JlZi5jdXJyZW50LnN1YnNjcmliZShub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICBmb3JjZVVwZGF0ZShmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiB4ICsgMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICB2YXIgbXV0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhcmlhYmxlcywgbXV0YXRlT3B0aW9ucykge1xuICAgIG9ic1JlZi5jdXJyZW50Lm11dGF0ZSh2YXJpYWJsZXMsIG11dGF0ZU9wdGlvbnMpLmNhdGNoKG5vb3ApO1xuICB9LCBbXSk7XG5cbiAgaWYgKGN1cnJlbnRSZXN1bHQuZXJyb3IgJiYgc2hvdWxkVGhyb3dFcnJvcih1bmRlZmluZWQsIG9ic1JlZi5jdXJyZW50Lm9wdGlvbnMudXNlRXJyb3JCb3VuZGFyeSwgY3VycmVudFJlc3VsdC5lcnJvcikpIHtcbiAgICB0aHJvdyBjdXJyZW50UmVzdWx0LmVycm9yO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBjdXJyZW50UmVzdWx0LCB7XG4gICAgbXV0YXRlOiBtdXRhdGUsXG4gICAgbXV0YXRlQXN5bmM6IGN1cnJlbnRSZXN1bHQubXV0YXRlXG4gIH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IFF1ZXJpZXNPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUvcXVlcmllc09ic2VydmVyJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9RdWVyeUNsaWVudFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWVyaWVzKHF1ZXJpZXMpIHtcbiAgdmFyIG1vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgwKSxcbiAgICAgIGZvcmNlVXBkYXRlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIHZhciBkZWZhdWx0ZWRRdWVyaWVzID0gcXVlcmllcy5tYXAoZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHF1ZXJ5Q2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTsgLy8gTWFrZSBzdXJlIHRoZSByZXN1bHRzIGFyZSBhbHJlYWR5IGluIGZldGNoaW5nIHN0YXRlIGJlZm9yZSBzdWJzY3JpYmluZyBvciB1cGRhdGluZyBvcHRpb25zXG5cbiAgICBkZWZhdWx0ZWRPcHRpb25zLm9wdGltaXN0aWNSZXN1bHRzID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdGVkT3B0aW9ucztcbiAgfSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBRdWVyaWVzT2JzZXJ2ZXIocXVlcnlDbGllbnQsIGRlZmF1bHRlZFF1ZXJpZXMpO1xuICB9KSxcbiAgICAgIG9ic2VydmVyID0gX1JlYWN0JHVzZVN0YXRlMlswXTtcblxuICB2YXIgcmVzdWx0ID0gb2JzZXJ2ZXIuZ2V0T3B0aW1pc3RpY1Jlc3VsdChkZWZhdWx0ZWRRdWVyaWVzKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IG9ic2VydmVyLnN1YnNjcmliZShub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICBmb3JjZVVwZGF0ZShmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiB4ICsgMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW29ic2VydmVyXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRG8gbm90IG5vdGlmeSBvbiB1cGRhdGVzIGJlY2F1c2Ugb2YgY2hhbmdlcyBpbiB0aGUgb3B0aW9ucyBiZWNhdXNlXG4gICAgLy8gdGhlc2UgY2hhbmdlcyBzaG91bGQgYWxyZWFkeSBiZSByZWZsZWN0ZWQgaW4gdGhlIG9wdGltaXN0aWMgcmVzdWx0LlxuICAgIG9ic2VydmVyLnNldFF1ZXJpZXMoZGVmYXVsdGVkUXVlcmllcywge1xuICAgICAgbGlzdGVuZXJzOiBmYWxzZVxuICAgIH0pO1xuICB9LCBbZGVmYXVsdGVkUXVlcmllcywgb2JzZXJ2ZXJdKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgeyBRdWVyeU9ic2VydmVyIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBwYXJzZVF1ZXJ5QXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgdXNlQmFzZVF1ZXJ5IH0gZnJvbSAnLi91c2VCYXNlUXVlcnknOyAvLyBIT09LXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWVyeShhcmcxLCBhcmcyLCBhcmczKSB7XG4gIHZhciBwYXJzZWRPcHRpb25zID0gcGFyc2VRdWVyeUFyZ3MoYXJnMSwgYXJnMiwgYXJnMyk7XG4gIHJldHVybiB1c2VCYXNlUXVlcnkocGFyc2VkT3B0aW9ucywgUXVlcnlPYnNlcnZlcik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFRocm93RXJyb3Ioc3VzcGVuc2UsIF91c2VFcnJvckJvdW5kYXJ5LCBlcnJvcikge1xuICAvLyBBbGxvdyB1c2VFcnJvckJvdW5kYXJ5IGZ1bmN0aW9uIHRvIG92ZXJyaWRlIHRocm93aW5nIGJlaGF2aW9yIG9uIGEgcGVyLWVycm9yIGJhc2lzXG4gIGlmICh0eXBlb2YgX3VzZUVycm9yQm91bmRhcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gX3VzZUVycm9yQm91bmRhcnkoZXJyb3IpO1xuICB9IC8vIEFsbG93IHVzZUVycm9yQm91bmRhcnkgdG8gb3ZlcnJpZGUgc3VzcGVuc2UncyB0aHJvd2luZyBiZWhhdmlvdXJcblxuXG4gIGlmICh0eXBlb2YgX3VzZUVycm9yQm91bmRhcnkgPT09ICdib29sZWFuJykgcmV0dXJuIF91c2VFcnJvckJvdW5kYXJ5OyAvLyBJZiBzdXNwZW5zZSBpcyBlbmFibGVkIGRlZmF1bHQgdG8gdGhyb3dpbmcgZXJyb3JzXG5cbiAgcmV0dXJuICEhc3VzcGVuc2U7XG59IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iXSwibmFtZXMiOlsidXNlUmVmIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50UmVmIiwiZ2V0Q2xpZW50IiwiY3VycmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCJdLCJzb3VyY2VSb290IjoiIn0=