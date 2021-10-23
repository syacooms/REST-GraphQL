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
  onDelete
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
  }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "messages__buttons",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: startEdit,
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: onDelete,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const UserIds = ['roy', 'jay'];

const getRandomUserId = () => UserIds[Math.round(Math.random())];

const originalMsgs = Array(50).fill(0).map((_, i) => ({
  id: i + 1,
  userId: getRandomUserId(),
  timestamp: 123456789 + i * 1000 * 60,
  text: `${i + 1} mock text`
}));
console.log(JSON.stringify(originalMsgs)); // [
//     {
//         id: 1,
//         userId: getRandomUserId(),
//         timestamp: 123455679123,
//         text: '1 mock text'
//     },
// ]

const MsgList = () => {
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(originalMsgs);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);

  const onCreate = text => {
    const newMsg = {
      id: msgs.length,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: `${msgs.length + 1} ${text}`
    };
    setMsgs(msgs => [newMsg, ...msgs]); //console.log(msgs);
  };

  const onUpdate = (text, id) => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {
        text
      }));
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = id => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const doneEdit = () => setEditingId(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_0__.default, _objectSpread({
        onUpdate: onUpdate,
        onDelete: () => onDelete(x.id),
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id
      }, x), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBUDtBQU9ILEdBUkQ7O0FBVUEsUUFBTUUsUUFBUSxHQUFHLE1BQU1WLFlBQVksQ0FBQyxJQUFELENBQW5DOztBQUVBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsZ0JBQ0tKLElBQUksQ0FBQ1IsR0FBTCxDQUFTc0IsQ0FBQyxpQkFBSyw4REFBQyw2Q0FBRDtBQUNoQixnQkFBUSxFQUFFM0MsUUFETTtBQUVoQixnQkFBUSxFQUFFLE1BQU1HLFFBQVEsQ0FBQ3dDLENBQUMsQ0FBQ3ZELEVBQUgsQ0FGUjtBQUdoQixpQkFBUyxFQUFFLE1BQU00QyxZQUFZLENBQUNXLENBQUMsQ0FBQ3ZELEVBQUgsQ0FIYjtBQUloQixpQkFBUyxFQUFFMkMsU0FBUyxLQUFLWSxDQUFDLENBQUN2RDtBQUpYLFNBS1p1RCxDQUxZLEdBQWNBLENBQUMsQ0FBQ3ZELEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsa0JBREo7QUFhSCxDQXRERDs7QUF5REEsaUVBQWV3QyxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7Ozs7QUFFQSxNQUFNZ0IsSUFBSSxHQUFHLG1CQUNUO0FBQUEsMEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBLGdCQURKOztBQU9BLGlFQUFlQSxJQUFmOzs7Ozs7Ozs7O0FDVEE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSW5wdXQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG4gXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCB0ZXh0ID0gJycsIGlkID0gdW5kZWZpbmVkIH0pID0+IHtcclxuICAgIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWVcclxuICAgICAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJ1xyXG4gICAgICAgIG11dGF0ZSh0ZXh0LCBpZClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pbnB1dFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcmVmPXt0ZXh0UmVmfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuyZhOujjDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQiLCJpbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIlxyXG5cclxuY29uc3QgTXNnSXRlbSA9ICh7IGlkLCB1c2VySWQsIHRpbWVzdGFtcCwgdGV4dCwgb25VcGRhdGUsIGlzRWRpdGluZywgc3RhcnRFZGl0LCBvbkRlbGV0ZSB9KSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2l0ZW1cIj5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgIHt1c2VySWR9eycgJ31cclxuICAgICAgICAgICAgPHN1Yj5cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cjEyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9zdWI+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6ICh0ZXh0KX1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbSIsImltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgVXNlcklkcyA9IFsncm95JywnamF5J11cclxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xyXG4gICAgaWQ6IGkgKyAxLFxyXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5ICsgaSAqIDEwMDAgKiA2MCxcclxuICAgIHRleHQ6IGAke2kgKyAxfSBtb2NrIHRleHRgXHJcbn0pKVxyXG5cclxuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkob3JpZ2luYWxNc2dzKSk7XHJcblxyXG4vLyBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuLy8gICAgICAgICB0aW1lc3RhbXA6IDEyMzQ1NTY3OTEyMyxcclxuLy8gICAgICAgICB0ZXh0OiAnMSBtb2NrIHRleHQnXHJcbi8vICAgICB9LFxyXG4vLyBdXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKVxyXG4gICAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgICAgICAgIGlkOiBtc2dzLmxlbmd0aCxcclxuICAgICAgICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiAoW25ld01zZywgLi4ubXNnc10pKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cobXNncyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25VcGRhdGUgPSAodGV4dCwgaWQpID0+IHtcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxyXG4gICAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAgICAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb25lRWRpdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZClcclxuICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgIHttc2dzLm1hcCh4ID0+ICg8TXNnSXRlbSBrZXk9e3guaWR9IFxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfSBcclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfSBcclxuICAgICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfSBcclxuICAgICAgICAgICAgICAgIHsuLi54fSAvPikpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCIsImltcG9ydCBNc2dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTXNnTGlzdCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxoMT5TSU1QTEUgU05TPC9oMT5cclxuICAgICAgICA8TXNnTGlzdCAvPlxyXG4gICAgPC8+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVJlZiIsIk1zZ0lucHV0IiwibXV0YXRlIiwidGV4dCIsImlkIiwidW5kZWZpbmVkIiwidGV4dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsInZhbHVlIiwiTXNnSXRlbSIsInVzZXJJZCIsInRpbWVzdGFtcCIsIm9uVXBkYXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0Iiwib25EZWxldGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwidXNlU3RhdGUiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwibm93IiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJ4IiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=