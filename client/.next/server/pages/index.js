"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\components\\MsgInput.js";



const MsgInput = ({
  mutate,
  text = '',
  id = undefined
}) => {
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = '';
    mutate(text, id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    className: "messages__input",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
      ref: textRef,
      defaultValue: text,
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\components\\MsgItem.js";




const MsgItem = ({
  id,
  userId,
  timestamp,
  text,
  onUpdate,
  isEditing,
  startEdit,
  onDelete,
  myId
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
  className: "messages__item",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
    children: [userId, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("sub", {
      children: new Date(timestamp).toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_0__.default, {
      mutate: onUpdate,
      text: text,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, undefined)
  }, void 0, false) : text, myId === userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "messages__buttons",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: startEdit,
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: onDelete,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 13
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ "./hooks/useInfiniteScroll.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const UserIds = ['roy', 'jay'];

const getRandomUserId = () => UserIds[Math.round(Math.random())];

const MsgList = () => {
  const {
    query: {
      userId = ''
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const interSecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__.default)(fetchMoreEl);
  const {
    0: hasNext,
    1: setHasNext
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);

  const onCreate = async text => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('post', '/messages', {
      text,
      userId
    });
    if (!newMsg) throw Error('something wrong');
    setMsgs(msgs => [newMsg, ...msgs]);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('put', `/messages/${id}`, {
      text,
      userId
    });
    if (!newMsg) throw Error('something wrong');
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = async id => {
    const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('delete', `/messages/${id}`, {
      params: {
        userId
      }
    });
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === receivedId + '');
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const doneEdit = () => setEditingId(null);

  const getMessages = async () => {
    var _msgs;

    const newMsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('get', '/messages', {
      params: {
        cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''
      }
    });

    if (newMsgs.length == 0) {
      setHasNext(false);
      return;
    }

    setMsgs(msg => [...msg, ...newMsgs]);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (interSecting && hasNext) getMessages();
  }, [interSecting]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_0__.default, _objectSpread({
        onUpdate: onUpdate,
        onDelete: () => onDelete(x.id),
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id,
        myId: userId
      }, x), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 33
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);

/***/ }),

/***/ "./fetcher.js":
/*!********************!*\
  !*** ./fetcher.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = 'http://localhost:8000';

const fetcher = async (method, url, ...rest) => {
  const res = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, ...rest);
  return res.data;
};
/* 
get: axios.get(url[, config])
delete: axios.delete(url[, config])
post: axios.post(url, data[, config])
put: axios.put(url, data[, config])
*/


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);

/***/ }),

/***/ "./hooks/useInfiniteScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfiniteScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInfiniteScroll = targetEl => {
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: interSecting,
    1: setInterSecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(entires => setInterSecting(entires.some(entry => entry.isIntersecting)));
    }

    return observerRef.current;
  }, [observerRef.current]); //감시할 대상

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (targetEl.current) getObserver().observe(targetEl.current); //화면상 존재하지 않을 경우

    return () => {
      getObserver().disconnect();
    };
  }, [targetEl.current]);
  return interSecting;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MsgList */ "./components/MsgList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\pages\\index.js";




const Home = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    children: "SIMPLE SNS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined)]
}, void 0, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUI7QUFDckJnRSxNQUFBQSxXQUFXLENBQUNoRSxPQUFaLEdBQXNCLElBQUltRSxvQkFBSixDQUF5QkMsT0FBTyxJQUFJSCxlQUFlLENBQ3JFRyxPQUFPLENBQUNDLElBQVIsQ0FBYUMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLGNBQTVCLENBRHFFLENBQW5ELENBQXRCO0FBR0g7O0FBQ0QsV0FBT1AsV0FBVyxDQUFDaEUsT0FBbkI7QUFDSCxHQVA4QixFQU81QixDQUFDZ0UsV0FBVyxDQUFDaEUsT0FBYixDQVA0QixDQUEvQixDQUprQyxDQWFsQzs7QUFDQW1CLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUc0QyxRQUFRLENBQUMvRCxPQUFaLEVBQXFCa0UsV0FBVyxHQUFHTSxPQUFkLENBQXNCVCxRQUFRLENBQUMvRCxPQUEvQixFQURULENBR1o7O0FBQ0EsV0FBTyxNQUFNO0FBQ1RrRSxNQUFBQSxXQUFXLEdBQUdPLFVBQWQ7QUFDSCxLQUZEO0FBR0gsR0FQUSxFQU9OLENBQUNWLFFBQVEsQ0FBQy9ELE9BQVYsQ0FQTSxDQUFUO0FBU0EsU0FBT21DLFlBQVA7QUFDSCxDQXhCRDs7QUEwQkEsaUVBQWViLGlCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7QUFFQSxNQUFNb0QsSUFBSSxHQUFHLG1CQUNUO0FBQUEsMEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBLGdCQURKOztBQU9BLGlFQUFlQSxJQUFmOzs7Ozs7Ozs7O0FDVEE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vZmV0Y2hlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuIFxyXG5jb25zdCBNc2dJbnB1dCA9ICh7IG11dGF0ZSwgdGV4dCA9ICcnLCBpZCA9IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlXHJcbiAgICAgICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJydcclxuICAgICAgICBtdXRhdGUodGV4dCwgaWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHJlZj17dGV4dFJlZn1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0IiwiaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCJcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoeyBpZCwgdXNlcklkLCB0aW1lc3RhbXAsIHRleHQsIG9uVXBkYXRlLCBpc0VkaXRpbmcsIHN0YXJ0RWRpdCwgb25EZWxldGUsIG15SWQgfSkgPT4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICB7dXNlcklkfXsnICd9XHJcbiAgICAgICAgICAgIDxzdWI+XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygna28tS1InLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXIxMjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvc3ViPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAge2lzRWRpdGluZyA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uVXBkYXRlfSB0ZXh0PXt0ZXh0fSBpZD17aWR9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAodGV4dCl9XHJcblxyXG4gICAgICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgIDwvbGk+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW0iLCJpbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInXHJcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tICcuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCc7XHJcblxyXG5jb25zdCBVc2VySWRzID0gWydyb3knLCdqYXknXVxyXG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBxdWVyeToge3VzZXJJZCA9ICcnfSB9ID0gdXNlUm91dGVyKCkgXHJcbiAgICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IGludGVyU2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKVxyXG4gICAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jIHRleHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSlcclxuICAgICAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IChbbmV3TXNnLCAuLi5tc2dzXSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwge3RleHQsIHVzZXJJZH0pXHJcbiAgICAgICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKVxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb25lRWRpdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczoge3VzZXJJZH0gfSlcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyAnJylcclxuICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcclxuXHJcbiAgICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHtwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0xXT8uaWQgfHwgJyd9fSlcclxuICAgICAgICBpZihuZXdNc2dzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldEhhc05leHQoZmFsc2UpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRNc2dzKG1zZyA9PiBbLi4ubXNnLC4uLm5ld01zZ3NdKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaW50ZXJTZWN0aW5nICYmIGhhc05leHQpIGdldE1lc3NhZ2VzKClcclxuICAgIH0sIFtpbnRlclNlY3RpbmddKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgIHttc2dzLm1hcCh4ID0+ICg8TXNnSXRlbSBrZXk9e3guaWR9IFxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfSBcclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfSBcclxuICAgICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgICAgICAgbXlJZD17dXNlcklkfSBcclxuICAgICAgICAgICAgICAgIHsuLi54fSAvPikpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnXHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKG1ldGhvZCwgdXJsLCAuLi5yZXN0KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvc1ttZXRob2RdKHVybCwgLi4ucmVzdClcclxuICAgIHJldHVybiByZXMuZGF0YVxyXG59XHJcblxyXG4vKiBcclxuZ2V0OiBheGlvcy5nZXQodXJsWywgY29uZmlnXSlcclxuZGVsZXRlOiBheGlvcy5kZWxldGUodXJsWywgY29uZmlnXSlcclxucG9zdDogYXhpb3MucG9zdCh1cmwsIGRhdGFbLCBjb25maWddKVxyXG5wdXQ6IGF4aW9zLnB1dCh1cmwsIGRhdGFbLCBjb25maWddKVxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlclxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHVzZUluZmluaXRlU2Nyb2xsID0gdGFyZ2V0RWwgPT4ge1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXJSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IFtpbnRlclNlY3RpbmcsIHNldEludGVyU2VjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIFxyXG4gICAgY29uc3QgZ2V0T2JzZXJ2ZXIgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBpZighb2JzZXJ2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudGlyZXMgPT4gc2V0SW50ZXJTZWN0aW5nKFxyXG4gICAgICAgICAgICAgICAgZW50aXJlcy5zb21lKGVudHJ5ID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmVyUmVmLmN1cnJlbnRcclxuICAgIH0sIFtvYnNlcnZlclJlZi5jdXJyZW50XSlcclxuXHJcbiAgICAvL+qwkOyLnO2VoCDrjIDsg4FcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYodGFyZ2V0RWwuY3VycmVudCkgZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKHRhcmdldEVsLmN1cnJlbnQpXHJcblxyXG4gICAgICAgIC8v7ZmU66m07IOBIOyhtOyerO2VmOyngCDslYrsnYQg6rK97JqwXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZ2V0T2JzZXJ2ZXIoKS5kaXNjb25uZWN0KClcclxuICAgICAgICB9XHJcbiAgICB9LCBbdGFyZ2V0RWwuY3VycmVudF0pXHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gaW50ZXJTZWN0aW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUluZmluaXRlU2Nyb2xsIiwiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0J1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPGgxPlNJTVBMRSBTTlM8L2gxPlxyXG4gICAgICAgIDxNc2dMaXN0IC8+XHJcbiAgICA8Lz5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJ0ZXh0IiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJNc2dJdGVtIiwidXNlcklkIiwidGltZXN0YW1wIiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJvbkRlbGV0ZSIsIm15SWQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwidXNlSW5maW5pdGVTY3JvbGwiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiTXNnTGlzdCIsInF1ZXJ5IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJmZXRjaE1vcmVFbCIsImludGVyU2VjdGluZyIsImhhc05leHQiLCJzZXRIYXNOZXh0Iiwib25DcmVhdGUiLCJuZXdNc2ciLCJFcnJvciIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0IiwicmVjZWl2ZWRJZCIsInBhcmFtcyIsImdldE1lc3NhZ2VzIiwiY3Vyc29yIiwibGVuZ3RoIiwibWFwIiwieCIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibWV0aG9kIiwidXJsIiwicmVzdCIsInJlcyIsImRhdGEiLCJ1c2VDYWxsYmFjayIsInRhcmdldEVsIiwib2JzZXJ2ZXJSZWYiLCJzZXRJbnRlclNlY3RpbmciLCJnZXRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50aXJlcyIsInNvbWUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==