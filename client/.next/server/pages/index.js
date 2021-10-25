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
  myId,
  user
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
  className: "messages__item",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
    children: [user.nickname, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("sub", {
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

const MsgList = ({
  smsgs,
  users
}) => {
  const {
    query: {
      userId = ''
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(smsgs);
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
        myId: userId,
        user: users[x.userId]
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
      lineNumber: 78,
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
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MsgList */ "./components/MsgList.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\pages\\index.js";





const Home = ({
  smsgs,
  users
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
    children: "SIMPLE SNS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_0__.default, {
    smsgs: smsgs,
    users: users
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined)]
}, void 0, true); //서버사이드 렌더링


const getServerSideProps = async () => {
  const smsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_1__.default)('get', '/messages');
  const users = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_1__.default)('get', '/users');
  return {
    props: {
      smsgs,
      users
    }
  };
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxNQUFGO0FBQVVDLEVBQUFBLElBQUksR0FBRyxFQUFqQjtBQUFxQkMsRUFBQUEsRUFBRSxHQUFHQztBQUExQixDQUFELEtBQTJDO0FBQ3hELFFBQU1DLE9BQU8sR0FBR04sNkNBQU0sQ0FBQyxJQUFELENBQXRCOztBQUVBLFFBQU1PLFFBQVEsR0FBR0MsQ0FBQyxJQUFJO0FBQ2xCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUQsSUFBQUEsQ0FBQyxDQUFDRSxlQUFGO0FBQ0EsVUFBTVAsSUFBSSxHQUFHRyxPQUFPLENBQUNLLE9BQVIsQ0FBZ0JDLEtBQTdCO0FBQ0FOLElBQUFBLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsS0FBaEIsR0FBd0IsRUFBeEI7QUFDQVYsSUFBQUEsTUFBTSxDQUFDQyxJQUFELEVBQU9DLEVBQVAsQ0FBTjtBQUNILEdBTkQ7O0FBUUEsc0JBQ0k7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFlBQVEsRUFBRUcsUUFBNUM7QUFBQSw0QkFDSTtBQUNJLFNBQUcsRUFBRUQsT0FEVDtBQUVJLGtCQUFZLEVBQUVILElBRmxCO0FBR0ksaUJBQVcsRUFBQztBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUk7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVVILENBckJEOztBQXVCQSxpRUFBZUYsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7O0FBRUEsTUFBTVksT0FBTyxHQUFHLENBQUM7QUFBRVQsRUFBQUEsRUFBRjtBQUFNVSxFQUFBQSxNQUFOO0FBQWNDLEVBQUFBLFNBQWQ7QUFBeUJaLEVBQUFBLElBQXpCO0FBQStCYSxFQUFBQSxRQUEvQjtBQUF5Q0MsRUFBQUEsU0FBekM7QUFBb0RDLEVBQUFBLFNBQXBEO0FBQStEQyxFQUFBQSxRQUEvRDtBQUF5RUMsRUFBQUEsSUFBekU7QUFBK0VDLEVBQUFBO0FBQS9FLENBQUQsa0JBQ1o7QUFBSSxXQUFTLEVBQUMsZ0JBQWQ7QUFBQSwwQkFDSTtBQUFBLGVBQ0tBLElBQUksQ0FBQ0MsUUFEVixFQUNvQixHQURwQixlQUVJO0FBQUEsZ0JBQ0ssSUFBSUMsSUFBSixDQUFTUixTQUFULEVBQW9CUyxjQUFwQixDQUFtQyxPQUFuQyxFQUE0QztBQUN6Q0MsUUFBQUEsSUFBSSxFQUFFLFNBRG1DO0FBRXpDQyxRQUFBQSxLQUFLLEVBQUUsU0FGa0M7QUFHekNDLFFBQUFBLEdBQUcsRUFBRSxTQUhvQztBQUl6Q0MsUUFBQUEsSUFBSSxFQUFFLFNBSm1DO0FBS3pDQyxRQUFBQSxNQUFNLEVBQUUsU0FMaUM7QUFNekNDLFFBQUFBLE1BQU0sRUFBRTtBQU5pQyxPQUE1QztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFjS2IsU0FBUyxnQkFDTjtBQUFBLDJCQUNJLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFRCxRQUFsQjtBQUE0QixVQUFJLEVBQUViLElBQWxDO0FBQXdDLFFBQUUsRUFBRUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURNLEdBSUxELElBbEJULEVBb0JLaUIsSUFBSSxLQUFLTixNQUFULGlCQUNHO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0k7QUFBUSxhQUFPLEVBQUVJLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBUSxhQUFPLEVBQUVDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjs7QUE4QkEsaUVBQWVOLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTXVCLE9BQU8sR0FBRyxDQUFDLEtBQUQsRUFBTyxLQUFQLENBQWhCOztBQUNBLE1BQU1DLGVBQWUsR0FBRyxNQUFNRCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsRUFBWCxDQUFELENBQXJDOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0FBQUVDLEVBQUFBLEtBQUY7QUFBU0MsRUFBQUE7QUFBVCxDQUFELEtBQXNCO0FBQ2xDLFFBQU07QUFBRUMsSUFBQUEsS0FBSyxFQUFFO0FBQUM5QixNQUFBQSxNQUFNLEdBQUc7QUFBVjtBQUFULE1BQTJCbUIsc0RBQVMsRUFBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ1ksSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JmLCtDQUFRLENBQUNXLEtBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJqQiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFDQSxRQUFNa0IsV0FBVyxHQUFHakQsNkNBQU0sQ0FBQyxJQUFELENBQTFCO0FBQ0EsUUFBTWtELFlBQVksR0FBR2YsaUVBQWlCLENBQUNjLFdBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0UsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JyQiwrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7O0FBRUEsUUFBTXNCLFFBQVEsR0FBRyxNQUFNbEQsSUFBTixJQUFjO0FBQzNCLFVBQU1tRCxNQUFNLEdBQUcsTUFBTXBCLGlEQUFPLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0I7QUFBRS9CLE1BQUFBLElBQUY7QUFBUVcsTUFBQUE7QUFBUixLQUF0QixDQUE1QjtBQUNBLFFBQUksQ0FBQ3dDLE1BQUwsRUFBYSxNQUFNQyxLQUFLLENBQUMsaUJBQUQsQ0FBWDtBQUNiVCxJQUFBQSxPQUFPLENBQUNELElBQUksSUFBSyxDQUFDUyxNQUFELEVBQVMsR0FBR1QsSUFBWixDQUFWLENBQVA7QUFDSCxHQUpEOztBQU1BLFFBQU03QixRQUFRLEdBQUcsT0FBT2IsSUFBUCxFQUFhQyxFQUFiLEtBQW9CO0FBQ2pDLFVBQU1rRCxNQUFNLEdBQUcsTUFBTXBCLGlEQUFPLENBQUMsS0FBRCxFQUFTLGFBQVk5QixFQUFHLEVBQXhCLEVBQTJCO0FBQUNELE1BQUFBLElBQUQ7QUFBT1csTUFBQUE7QUFBUCxLQUEzQixDQUE1QjtBQUNBLFFBQUksQ0FBQ3dDLE1BQUwsRUFBYSxNQUFNQyxLQUFLLENBQUMsaUJBQUQsQ0FBWDtBQUNiVCxJQUFBQSxPQUFPLENBQUNELElBQUksSUFBSTtBQUNaLFlBQU1XLFdBQVcsR0FBR1gsSUFBSSxDQUFDWSxTQUFMLENBQWVDLEdBQUcsSUFBSUEsR0FBRyxDQUFDdEQsRUFBSixLQUFXQSxFQUFqQyxDQUFwQjtBQUNBLFVBQUlvRCxXQUFXLEdBQUcsQ0FBbEIsRUFBcUIsT0FBT1gsSUFBUDtBQUNyQixZQUFNYyxPQUFPLEdBQUcsQ0FBQyxHQUFHZCxJQUFKLENBQWhCO0FBQ0FjLE1BQUFBLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSixXQUFmLEVBQTRCLENBQTVCLEVBQStCRixNQUEvQjtBQUNBLGFBQU9LLE9BQVA7QUFDSCxLQU5NLENBQVA7QUFPQUUsSUFBQUEsUUFBUTtBQUNYLEdBWEQ7O0FBYUEsUUFBTTFDLFFBQVEsR0FBRyxNQUFPZixFQUFQLElBQWM7QUFDM0IsVUFBTTBELFVBQVUsR0FBRyxNQUFNNUIsaURBQU8sQ0FBQyxRQUFELEVBQVksYUFBWTlCLEVBQUcsRUFBM0IsRUFBOEI7QUFBRTJELE1BQUFBLE1BQU0sRUFBRTtBQUFDakQsUUFBQUE7QUFBRDtBQUFWLEtBQTlCLENBQWhDO0FBQ0FnQyxJQUFBQSxPQUFPLENBQUNELElBQUksSUFBSTtBQUNaLFlBQU1XLFdBQVcsR0FBR1gsSUFBSSxDQUFDWSxTQUFMLENBQWVDLEdBQUcsSUFBSUEsR0FBRyxDQUFDdEQsRUFBSixLQUFXMEQsVUFBVSxHQUFHLEVBQTlDLENBQXBCO0FBQ0EsVUFBSU4sV0FBVyxHQUFHLENBQWxCLEVBQXFCLE9BQU9YLElBQVA7QUFDckIsWUFBTWMsT0FBTyxHQUFHLENBQUMsR0FBR2QsSUFBSixDQUFoQjtBQUNBYyxNQUFBQSxPQUFPLENBQUNDLE1BQVIsQ0FBZUosV0FBZixFQUE0QixDQUE1QjtBQUNBLGFBQU9HLE9BQVA7QUFDSCxLQU5NLENBQVA7QUFPSCxHQVREOztBQVdBLFFBQU1FLFFBQVEsR0FBRyxNQUFNYixZQUFZLENBQUMsSUFBRCxDQUFuQzs7QUFFQSxRQUFNZ0IsV0FBVyxHQUFHLFlBQVk7QUFBQTs7QUFDNUIsVUFBTUwsT0FBTyxHQUFHLE1BQU16QixpREFBTyxDQUFDLEtBQUQsRUFBUSxXQUFSLEVBQXFCO0FBQUM2QixNQUFBQSxNQUFNLEVBQUU7QUFBRUUsUUFBQUEsTUFBTSxFQUFFLFVBQUFwQixJQUFJLENBQUNBLElBQUksQ0FBQ3FCLE1BQUwsR0FBYSxDQUFkLENBQUosZ0RBQXNCOUQsRUFBdEIsS0FBNEI7QUFBdEM7QUFBVCxLQUFyQixDQUE3Qjs7QUFDQSxRQUFHdUQsT0FBTyxDQUFDTyxNQUFSLElBQWtCLENBQXJCLEVBQXdCO0FBQ3BCZCxNQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0E7QUFDSDs7QUFDRE4sSUFBQUEsT0FBTyxDQUFDWSxHQUFHLElBQUksQ0FBQyxHQUFHQSxHQUFKLEVBQVEsR0FBR0MsT0FBWCxDQUFSLENBQVA7QUFDSCxHQVBEOztBQVNBM0IsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBR2tCLFlBQVksSUFBSUMsT0FBbkIsRUFBNEJhLFdBQVc7QUFDMUMsR0FGUSxFQUVOLENBQUNkLFlBQUQsQ0FGTSxDQUFUO0FBS0Esc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyw4Q0FBRDtBQUFVLFlBQU0sRUFBRUc7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDS1IsSUFBSSxDQUFDc0IsR0FBTCxDQUFTQyxDQUFDLGlCQUFLLDhEQUFDLDZDQUFEO0FBQ2hCLGdCQUFRLEVBQUVwRCxRQURNO0FBRWhCLGdCQUFRLEVBQUUsTUFBTUcsUUFBUSxDQUFDaUQsQ0FBQyxDQUFDaEUsRUFBSCxDQUZSO0FBR2hCLGlCQUFTLEVBQUUsTUFBTTRDLFlBQVksQ0FBQ29CLENBQUMsQ0FBQ2hFLEVBQUgsQ0FIYjtBQUloQixpQkFBUyxFQUFFMkMsU0FBUyxLQUFLcUIsQ0FBQyxDQUFDaEUsRUFKWDtBQUtoQixZQUFJLEVBQUVVLE1BTFU7QUFNaEIsWUFBSSxFQUFFNkIsS0FBSyxDQUFDeUIsQ0FBQyxDQUFDdEQsTUFBSDtBQU5LLFNBT1pzRCxDQVBZLEdBQWNBLENBQUMsQ0FBQ2hFLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBWUk7QUFBSyxTQUFHLEVBQUU2QztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWko7QUFBQSxrQkFESjtBQWdCSCxDQXRFRDs7QUF5RUEsaUVBQWVSLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFFQTRCLCtEQUFBLEdBQXlCLHVCQUF6Qjs7QUFFQSxNQUFNbkMsT0FBTyxHQUFHLE9BQU9zQyxNQUFQLEVBQWVDLEdBQWYsRUFBb0IsR0FBR0MsSUFBdkIsS0FBZ0M7QUFDNUMsUUFBTUMsR0FBRyxHQUFHLE1BQU1OLDhDQUFLLENBQUNHLE1BQUQsQ0FBTCxDQUFjQyxHQUFkLEVBQW1CLEdBQUdDLElBQXRCLENBQWxCO0FBQ0EsU0FBT0MsR0FBRyxDQUFDQyxJQUFYO0FBQ0gsQ0FIRDtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsaUVBQWUxQyxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOztBQUVBLE1BQU1DLGlCQUFpQixHQUFHMkMsUUFBUSxJQUFJO0FBQ2xDLFFBQU1DLFdBQVcsR0FBRy9FLDZDQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLFFBQU07QUFBQSxPQUFDa0QsWUFBRDtBQUFBLE9BQWU4QjtBQUFmLE1BQWtDakQsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBRUEsUUFBTWtELFdBQVcsR0FBR0osa0RBQVcsQ0FBQyxNQUFLO0FBQ2pDLFFBQUcsQ0FBQ0UsV0FBVyxDQUFDcEUsT0FBaEIsRUFBeUI7QUFDckJvRSxNQUFBQSxXQUFXLENBQUNwRSxPQUFaLEdBQXNCLElBQUl1RSxvQkFBSixDQUF5QkMsT0FBTyxJQUFJSCxlQUFlLENBQ3JFRyxPQUFPLENBQUNDLElBQVIsQ0FBYUMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLGNBQTVCLENBRHFFLENBQW5ELENBQXRCO0FBR0g7O0FBQ0QsV0FBT1AsV0FBVyxDQUFDcEUsT0FBbkI7QUFDSCxHQVA4QixFQU81QixDQUFDb0UsV0FBVyxDQUFDcEUsT0FBYixDQVA0QixDQUEvQixDQUprQyxDQWFsQzs7QUFDQXFCLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUc4QyxRQUFRLENBQUNuRSxPQUFaLEVBQXFCc0UsV0FBVyxHQUFHTSxPQUFkLENBQXNCVCxRQUFRLENBQUNuRSxPQUEvQixFQURULENBR1o7O0FBQ0EsV0FBTyxNQUFNO0FBQ1RzRSxNQUFBQSxXQUFXLEdBQUdPLFVBQWQ7QUFDSCxLQUZEO0FBR0gsR0FQUSxFQU9OLENBQUNWLFFBQVEsQ0FBQ25FLE9BQVYsQ0FQTSxDQUFUO0FBU0EsU0FBT3VDLFlBQVA7QUFDSCxDQXhCRDs7QUEwQkEsaUVBQWVmLGlCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBOzs7O0FBQ0EsTUFBTXNELElBQUksR0FBRyxDQUFDO0FBQUUvQyxFQUFBQSxLQUFGO0FBQVNDLEVBQUFBO0FBQVQsQ0FBRCxrQkFDVDtBQUFBLDBCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSw4REFBQyx3REFBRDtBQUFTLFNBQUssRUFBRUQsS0FBaEI7QUFBdUIsU0FBSyxFQUFFQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQSxnQkFESixFQU9BOzs7QUFDTyxNQUFNK0Msa0JBQWtCLEdBQUcsWUFBWTtBQUMxQyxRQUFNaEQsS0FBSyxHQUFHLE1BQU1SLGlEQUFPLENBQUMsS0FBRCxFQUFRLFdBQVIsQ0FBM0I7QUFDQSxRQUFNUyxLQUFLLEdBQUcsTUFBTVQsaURBQU8sQ0FBQyxLQUFELEVBQVEsUUFBUixDQUEzQjtBQUNBLFNBQU87QUFDSHlELElBQUFBLEtBQUssRUFBRTtBQUFFakQsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQTtBQUFUO0FBREosR0FBUDtBQUdILENBTk07QUFRUCxpRUFBZThDLElBQWY7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vZmV0Y2hlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuIFxyXG5jb25zdCBNc2dJbnB1dCA9ICh7IG11dGF0ZSwgdGV4dCA9ICcnLCBpZCA9IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlXHJcbiAgICAgICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJydcclxuICAgICAgICBtdXRhdGUodGV4dCwgaWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHJlZj17dGV4dFJlZn1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0IiwiaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCJcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoeyBpZCwgdXNlcklkLCB0aW1lc3RhbXAsIHRleHQsIG9uVXBkYXRlLCBpc0VkaXRpbmcsIHN0YXJ0RWRpdCwgb25EZWxldGUsIG15SWQsIHVzZXIgfSkgPT4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICB7dXNlci5uaWNrbmFtZX17JyAnfVxyXG4gICAgICAgICAgICA8c3ViPlxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyMTI6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3N1Yj5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKHRleHQpfVxyXG5cclxuICAgICAgICB7bXlJZCA9PT0gdXNlcklkICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+7IKt7KCcPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICA8L2xpPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtIiwiaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJ1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSAnLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwnO1xyXG5cclxuY29uc3QgVXNlcklkcyA9IFsncm95JywnamF5J11cclxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuY29uc3QgTXNnTGlzdCA9ICh7IHNtc2dzLCB1c2VycyB9KSA9PiB7XHJcbiAgICBjb25zdCB7IHF1ZXJ5OiB7dXNlcklkID0gJyd9IH0gPSB1c2VSb3V0ZXIoKSBcclxuICAgIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKHNtc2dzKVxyXG4gICAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgaW50ZXJTZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpXHJcbiAgICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KVxyXG4gICAgICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJylcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7dGV4dCwgdXNlcklkfSlcclxuICAgICAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZClcclxuICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZylcclxuICAgICAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvbmVFZGl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgcGFyYW1zOiB7dXNlcklkfSB9KVxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gcmVjZWl2ZWRJZCArICcnKVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxyXG4gICAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJywge3BhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLTFdPy5pZCB8fCAnJ319KVxyXG4gICAgICAgIGlmKG5ld01zZ3MubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgc2V0SGFzTmV4dChmYWxzZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE1zZ3MobXNnID0+IFsuLi5tc2csLi4ubmV3TXNnc10pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihpbnRlclNlY3RpbmcgJiYgaGFzTmV4dCkgZ2V0TWVzc2FnZXMoKVxyXG4gICAgfSwgW2ludGVyU2VjdGluZ10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAge21zZ3MubWFwKHggPT4gKDxNc2dJdGVtIGtleT17eC5pZH0gXHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IFxyXG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgICAgICBteUlkPXt1c2VySWR9IFxyXG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcnNbeC51c2VySWRdfVxyXG4gICAgICAgICAgICAgICAgey4uLnh9IC8+KSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCdcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAobWV0aG9kLCB1cmwsIC4uLnJlc3QpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zW21ldGhvZF0odXJsLCAuLi5yZXN0KVxyXG4gICAgcmV0dXJuIHJlcy5kYXRhXHJcbn1cclxuXHJcbi8qIFxyXG5nZXQ6IGF4aW9zLmdldCh1cmxbLCBjb25maWddKVxyXG5kZWxldGU6IGF4aW9zLmRlbGV0ZSh1cmxbLCBjb25maWddKVxyXG5wb3N0OiBheGlvcy5wb3N0KHVybCwgZGF0YVssIGNvbmZpZ10pXHJcbnB1dDogYXhpb3MucHV0KHVybCwgZGF0YVssIGNvbmZpZ10pXHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgdXNlSW5maW5pdGVTY3JvbGwgPSB0YXJnZXRFbCA9PiB7XHJcbiAgICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2ludGVyU2VjdGluZywgc2V0SW50ZXJTZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgXHJcbiAgICBjb25zdCBnZXRPYnNlcnZlciA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGlmKCFvYnNlcnZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50aXJlcyA9PiBzZXRJbnRlclNlY3RpbmcoXHJcbiAgICAgICAgICAgICAgICBlbnRpcmVzLnNvbWUoZW50cnkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpIFxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JzZXJ2ZXJSZWYuY3VycmVudFxyXG4gICAgfSwgW29ic2VydmVyUmVmLmN1cnJlbnRdKVxyXG5cclxuICAgIC8v6rCQ7Iuc7ZWgIOuMgOyDgVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZih0YXJnZXRFbC5jdXJyZW50KSBnZXRPYnNlcnZlcigpLm9ic2VydmUodGFyZ2V0RWwuY3VycmVudClcclxuXHJcbiAgICAgICAgLy/tmZTrqbTsg4Eg7KG07J6s7ZWY7KeAIOyViuydhCDqsr3smrBcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBnZXRPYnNlcnZlcigpLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0YXJnZXRFbC5jdXJyZW50XSlcclxuICAgICAgICBcclxuICAgIHJldHVybiBpbnRlclNlY3RpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5maW5pdGVTY3JvbGwiLCJpbXBvcnQgTXNnTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL01zZ0xpc3QnXHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInXHJcbmNvbnN0IEhvbWUgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4gKFxyXG4gICAgPD5cclxuICAgICAgICA8aDE+U0lNUExFIFNOUzwvaDE+XHJcbiAgICAgICAgPE1zZ0xpc3Qgc21zZ3M9e3Ntc2dzfSB1c2Vycz17dXNlcnN9IC8+XHJcbiAgICA8Lz5cclxuKVxyXG5cclxuLy/shJzrsoTsgqzsnbTrk5wg66CM642U66eBXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBzbXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnKVxyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL3VzZXJzJylcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgc21zZ3MsIHVzZXJzIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJ0ZXh0IiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJNc2dJdGVtIiwidXNlcklkIiwidGltZXN0YW1wIiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJvbkRlbGV0ZSIsIm15SWQiLCJ1c2VyIiwibmlja25hbWUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwidXNlSW5maW5pdGVTY3JvbGwiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiTXNnTGlzdCIsInNtc2dzIiwidXNlcnMiLCJxdWVyeSIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwiZmV0Y2hNb3JlRWwiLCJpbnRlclNlY3RpbmciLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwiRXJyb3IiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsInJlY2VpdmVkSWQiLCJwYXJhbXMiLCJnZXRNZXNzYWdlcyIsImN1cnNvciIsImxlbmd0aCIsIm1hcCIsIngiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIm1ldGhvZCIsInVybCIsInJlc3QiLCJyZXMiLCJkYXRhIiwidXNlQ2FsbGJhY2siLCJ0YXJnZXRFbCIsIm9ic2VydmVyUmVmIiwic2V0SW50ZXJTZWN0aW5nIiwiZ2V0T2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudGlyZXMiLCJzb21lIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiSG9tZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==