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
    mutate({
      text,
      id
    });
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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queryClient */ "./queryClient.js");
/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../graphql/message */ "./graphql/message.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\components\\MsgList.js";






 //import useInfiniteScroll from '../hooks/useInfiniteScroll';



const UserIds = ['roy', 'jay'];

const getRandomUserId = () => UserIds[Math.round(Math.random())];

const MsgList = ({
  smsgs,
  users
}) => {
  const client = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const userId = query.userId || query.userid || '';
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(smsgs);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); // const fetchMoreEl = useRef(null)
  // const [hasNext, setHasNext] = useState(true)
  // const interSecting = useInfiniteScroll(fetchMoreEl)

  const {
    mutate: onCreate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(({
    text
  }) => (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(CREATE_MESSAGE, {
    text,
    userId
  }), {
    onSuccess: ({
      createMessage
    }) => {
      client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, old => {
        return {
          messages: [createMessage, ...old.messages]
        };
      });
    }
  });
  const {
    mutate: onUpdate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(({
    text,
    id
  }) => (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(UPDATE_MESSAGE, {
    text,
    id,
    userId
  }), {
    onSuccess: ({
      updateMessage
    }) => {
      client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, old => {
        const targetIndex = old.messages.findIndex(msg => msg.id === updateMessage.id);
        if (targetIndex < 0) return old;
        const newMsgs = [...old.messages];
        newMsgs.splice(targetIndex, 1, updateMessage);
        return {
          messages: newMsgs
        };
      });
      doneEdit();
    }
  });
  const {
    mutate: onDelete
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(id => (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(DELETE_MESSAGE, {
    id,
    userId
  }), {
    onSuccess: ({
      deleteMessage: deletedId
    }) => {
      client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, old => {
        const targetIndex = old.messages.findIndex(msg => msg.id === deletedId);
        if (targetIndex < 0) return old;
        const newMsgs = [...old.messages];
        newMsgs.splice(targetIndex, 1);
        return {
          messages: newMsgs
        };
      });
    }
  });

  const doneEdit = () => setEditingId(null);

  const {
    data,
    error,
    isError
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, () => (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES));
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!(data !== null && data !== void 0 && data.messages)) return;
    console.log('msgs changed');
    setMsgs(data.messages);
  }, [data === null || data === void 0 ? void 0 : data.messages]);

  if (isError) {
    console.error(error);
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_0__.default, {
        onUpdate: onUpdate,
        onDelete: () => onDelete(x.id),
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id,
        myId: userId,
        user: users.find(x => userId === x.id)
      }, x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 37
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);

/***/ }),

/***/ "./graphql/message.js":
/*!****************************!*\
  !*** ./graphql/message.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_MESSAGES": () => (/* binding */ GET_MESSAGES),
/* harmony export */   "GET_MESSAGE": () => (/* binding */ GET_MESSAGE),
/* harmony export */   "CREATE_MESSAGE": () => (/* binding */ CREATE_MESSAGE),
/* harmony export */   "UPDATE_MESSAGE": () => (/* binding */ UPDATE_MESSAGE),
/* harmony export */   "DELETE_MESSAGE": () => (/* binding */ DELETE_MESSAGE)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_MESSAGES = graphql_tag__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GET_MESSAGES {
        messages {
            id
            text
            userId
            timestamp
        }
    }
`;
const GET_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GET_MESSAGE($id: ID!) {
        message(id: $id) {
            id
            text
            userId
            timestamp
        }
    }
`;
const CREATE_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation CREATE_MESSAGE($text: String!, $userId: ID!) {
        createMessage(text: $text, userId: $userId) {
            id
            text
            userId
            timestamp
        }
    }
`;
const UPDATE_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation UPDATE_MESSAGE($id: ID!, $text: String!, $userId: ID!) {
        updateMessage(id: $id, text: $text, userId: $userId){
            id
            text
            userId
            timestamp
        }
    }
`;
const DELETE_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation DELETE_MESSAGE($id: ID!, $userId: ID!){
        deleteMessage(id: $id, userId: $userId)
    }
`;

/***/ }),

/***/ "./graphql/user.js":
/*!*************************!*\
  !*** ./graphql/user.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_USERS": () => (/* binding */ GET_USERS),
/* harmony export */   "GET_USER": () => (/* binding */ GET_USER)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_USERS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query GET_USERS {
        users {
            id
            nickname
        }
    }
`;
const GET_USER = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query GET_USER($id: ID!) {
        user(id: $id) {
            id
            nickname
        }
    }
`;

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
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queryClient */ "./queryClient.js");
/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/message */ "./graphql/message.js");
/* harmony import */ var _graphql_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/user */ "./graphql/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\bxoo\\Desktop\\PJT\\REST-GraphQL\\client\\pages\\index.js";







const Home = ({
  smsgs,
  users
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
    children: "SIMPLE SNS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_0__.default, {
    smsgs: smsgs,
    users: users
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined)]
}, void 0, true); //서버사이드 렌더링


const getServerSideProps = async () => {
  const {
    messages: smsgs
  } = await (0,_queryClient__WEBPACK_IMPORTED_MODULE_1__.default)(_graphql_message__WEBPACK_IMPORTED_MODULE_2__.GET_MESSAGES);
  const {
    users
  } = await (0,_queryClient__WEBPACK_IMPORTED_MODULE_1__.default)(_graphql_user__WEBPACK_IMPORTED_MODULE_3__.GET_USERS);
  return {
    props: {
      smsgs,
      users
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./queryClient.js":
/*!************************!*\
  !*** ./queryClient.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetcher": () => (/* binding */ fetcher),
/* harmony export */   "QueryKeys": () => (/* binding */ QueryKeys),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const URL = 'http://localhost:8000/graphql';
const fetcher = (query, variables = {}) => (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(URL, query, variables);
const QueryKeys = {
  MESSAGES: 'MESSAGES',
  MESSAGE: 'MESSAGE',
  USERS: 'USERS',
  USER: 'USER'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("graphql-tag");

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

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBQUE7QUFBVDtBQURKLEdBQVA7QUFHSCxDQVJNO0FBVVAsaUVBQWV1QyxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQSxNQUFNSSxHQUFHLEdBQUcsK0JBQVo7QUFFTyxNQUFNcEQsT0FBTyxHQUFHLENBQUNXLEtBQUQsRUFBUTBDLFNBQVMsR0FBRyxFQUFwQixLQUEyQkYsd0RBQU8sQ0FBQ0MsR0FBRCxFQUFNekMsS0FBTixFQUFhMEMsU0FBYixDQUFsRDtBQUVBLE1BQU10RCxTQUFTLEdBQUc7QUFDdkJ1QixFQUFBQSxRQUFRLEVBQUUsVUFEYTtBQUV2QmdDLEVBQUFBLE9BQU8sRUFBRSxTQUZjO0FBR3ZCQyxFQUFBQSxLQUFLLEVBQUUsT0FIZ0I7QUFJdkJDLEVBQUFBLElBQUksRUFBRTtBQUppQixDQUFsQjtBQU9QLGlFQUFleEQsT0FBZjs7Ozs7Ozs7OztBQ1pBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSW5wdXQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ncmFwaHFsL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vZ3JhcGhxbC91c2VyLmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC8uL3F1ZXJ5Q2xpZW50LmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbiBcclxuY29uc3QgTXNnSW5wdXQgPSAoeyBtdXRhdGUsIHRleHQgPSAnJywgaWQgPSB1bmRlZmluZWQgfSkgPT4ge1xyXG4gICAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZVxyXG4gICAgICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnXHJcbiAgICAgICAgbXV0YXRlKHt0ZXh0LCBpZH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHJlZj17dGV4dFJlZn1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0IiwiaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCJcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoeyBpZCwgdXNlcklkLCB0aW1lc3RhbXAsIHRleHQsIG9uVXBkYXRlLCBpc0VkaXRpbmcsIHN0YXJ0RWRpdCwgb25EZWxldGUsIG15SWQsIHVzZXIgfSkgPT4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICB7dXNlci5uaWNrbmFtZX17JyAnfVxyXG4gICAgICAgICAgICA8c3ViPlxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyMTI6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3N1Yj5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKHRleHQpfVxyXG5cclxuICAgICAgICB7bXlJZCA9PT0gdXNlcklkICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+7IKt7KCcPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICA8L2xpPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtIiwiaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknXHJcbmltcG9ydCB7IFF1ZXJ5S2V5cyxmZXRjaGVyIH0gZnJvbSAnLi4vcXVlcnlDbGllbnQnXHJcbmltcG9ydCB7IEdFVF9NRVNTQUdFUyB9IGZyb20gJy4uL2dyYXBocWwvbWVzc2FnZSc7XHJcbi8vaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJy4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJztcclxuXHJcbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsJ2pheSddXHJcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4ge1xyXG4gICAgY29uc3QgY2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKVxyXG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgJycgXHJcbiAgICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShzbXNncylcclxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgLy8gY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbClcclxuICAgIC8vIGNvbnN0IFtoYXNOZXh0LCBzZXRIYXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICAvLyBjb25zdCBpbnRlclNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbClcclxuXHJcbiAgICBjb25zdCB7IG11dGF0ZTogb25DcmVhdGUgfSA9IHVzZU11dGF0aW9uKCh7IHRleHQgfSkgPT4gZmV0Y2hlcihDUkVBVEVfTUVTU0FHRSwgeyB0ZXh0LCB1c2VySWQgfSksIHtcclxuICAgICAgICBvblN1Y2Nlc3M6ICh7IGNyZWF0ZU1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIG9sZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IFtjcmVhdGVNZXNzYWdlLCAuLi5vbGQubWVzc2FnZXNdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjb25zdCB7IG11dGF0ZTogb25VcGRhdGUgfSA9IHVzZU11dGF0aW9uKCh7IHRleHQsIGlkIH0pID0+IGZldGNoZXIoVVBEQVRFX01FU1NBR0UsIHsgdGV4dCwgaWQsIHVzZXJJZCB9KSwge1xyXG4gICAgICAgIG9uU3VjY2VzczogKHsgdXBkYXRlTWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgb2xkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBvbGQubWVzc2FnZXMuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IHVwZGF0ZU1lc3NhZ2UuaWQpXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBvbGRcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5vbGQubWVzc2FnZXNdXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB1cGRhdGVNZXNzYWdlKVxyXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlczogbmV3TXNncyB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgZG9uZUVkaXQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICBcclxuXHJcbiAgICAgIGNvbnN0IHsgbXV0YXRlOiBvbkRlbGV0ZSB9ID0gdXNlTXV0YXRpb24oaWQgPT4gZmV0Y2hlcihERUxFVEVfTUVTU0FHRSwgeyBpZCwgdXNlcklkIH0pLCB7XHJcbiAgICAgICAgb25TdWNjZXNzOiAoeyBkZWxldGVNZXNzYWdlOiBkZWxldGVkSWQgfSkgPT4ge1xyXG4gICAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIG9sZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gb2xkLm1lc3NhZ2VzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBkZWxldGVkSWQpXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBvbGRcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5vbGQubWVzc2FnZXNdXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKVxyXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlczogbmV3TXNncyB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNFcnJvciB9ID0gdXNlUXVlcnkoUXVlcnlLZXlzLk1FU1NBR0VTLCAoKSA9PiBmZXRjaGVyKEdFVF9NRVNTQUdFUykpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWRhdGE/Lm1lc3NhZ2VzKSByZXR1cm5cclxuICAgICAgICBjb25zb2xlLmxvZygnbXNncyBjaGFuZ2VkJylcclxuICAgICAgICBzZXRNc2dzKGRhdGEubWVzc2FnZXMpXHJcbiAgICAgIH0sIFtkYXRhPy5tZXNzYWdlc10pXHJcbiAgICBcclxuICAgICAgaWYgKGlzRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge21zZ3MubWFwKHggPT4gKDxNc2dJdGVtIGtleT17eC5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG15SWQ9e3VzZXJJZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcnMuZmluZCh4ID0+IHVzZXJJZCA9PT0geC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgey8qICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+ICovfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NRVNTQUdFUyA9IGdxbCBgXHJcbiAgICBxdWVyeSBHRVRfTUVTU0FHRVMge1xyXG4gICAgICAgIG1lc3NhZ2VzIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgICAgdGltZXN0YW1wXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01FU1NBR0UgPSBncWwgYFxyXG4gICAgcXVlcnkgR0VUX01FU1NBR0UoJGlkOiBJRCEpIHtcclxuICAgICAgICBtZXNzYWdlKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgICAgdGltZXN0YW1wXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX01FU1NBR0UgPSBncWxgXHJcbiAgICBtdXRhdGlvbiBDUkVBVEVfTUVTU0FHRSgkdGV4dDogU3RyaW5nISwgJHVzZXJJZDogSUQhKSB7XHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSh0ZXh0OiAkdGV4dCwgdXNlcklkOiAkdXNlcklkKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9NRVNTQUdFID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gVVBEQVRFX01FU1NBR0UoJGlkOiBJRCEsICR0ZXh0OiBTdHJpbmchLCAkdXNlcklkOiBJRCEpIHtcclxuICAgICAgICB1cGRhdGVNZXNzYWdlKGlkOiAkaWQsIHRleHQ6ICR0ZXh0LCB1c2VySWQ6ICR1c2VySWQpe1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgICB0aW1lc3RhbXBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVTU0FHRSA9IGdxbGBcclxuICAgIG11dGF0aW9uIERFTEVURV9NRVNTQUdFKCRpZDogSUQhLCAkdXNlcklkOiBJRCEpe1xyXG4gICAgICAgIGRlbGV0ZU1lc3NhZ2UoaWQ6ICRpZCwgdXNlcklkOiAkdXNlcklkKVxyXG4gICAgfVxyXG5gIiwiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUlMgPSBncWxgXHJcbiAgICBxdWVyeSBHRVRfVVNFUlMge1xyXG4gICAgICAgIHVzZXJzIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmlja25hbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUiA9IGdxbGBcclxuICAgIHF1ZXJ5IEdFVF9VU0VSKCRpZDogSUQhKSB7XHJcbiAgICAgICAgdXNlcihpZDogJGlkKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5pY2tuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gIiwiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0J1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9xdWVyeUNsaWVudCdcclxuaW1wb3J0IHsgR0VUX01FU1NBR0VTIH0gZnJvbSAnLi4vZ3JhcGhxbC9tZXNzYWdlJ1xyXG5pbXBvcnQgeyBHRVRfVVNFUlMgfSBmcm9tICcuLi9ncmFwaHFsL3VzZXInXHJcblxyXG5jb25zdCBIb21lID0gKHsgc21zZ3MsIHVzZXJzIH0pID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPGgxPlNJTVBMRSBTTlM8L2gxPlxyXG4gICAgICAgIDxNc2dMaXN0IHNtc2dzPXtzbXNnc30gdXNlcnM9e3VzZXJzfSAvPlxyXG4gICAgPC8+XHJcbilcclxuXHJcbi8v7ISc67KE7IKs7J2065OcIOugjOuNlOungVxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtZXNzYWdlczogc21zZ3MgfSA9IGF3YWl0IGZldGNoZXIoR0VUX01FU1NBR0VTKVxyXG4gICAgY29uc3QgeyB1c2VycyB9ID0gYXdhaXQgZmV0Y2hlcihHRVRfVVNFUlMpXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IHNtc2dzLCB1c2VycyB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xyXG5jb25zdCBVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dyYXBocWwnXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hlciA9IChxdWVyeSwgdmFyaWFibGVzID0ge30pID0+IHJlcXVlc3QoVVJMLCBxdWVyeSwgdmFyaWFibGVzKVxyXG5cclxuZXhwb3J0IGNvbnN0IFF1ZXJ5S2V5cyA9IHtcclxuICBNRVNTQUdFUzogJ01FU1NBR0VTJyxcclxuICBNRVNTQUdFOiAnTUVTU0FHRScsXHJcbiAgVVNFUlM6ICdVU0VSUycsXHJcbiAgVVNFUjogJ1VTRVInLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVJlZiIsIk1zZ0lucHV0IiwibXV0YXRlIiwidGV4dCIsImlkIiwidW5kZWZpbmVkIiwidGV4dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsInZhbHVlIiwiTXNnSXRlbSIsInVzZXJJZCIsInRpbWVzdGFtcCIsIm9uVXBkYXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0Iiwib25EZWxldGUiLCJteUlkIiwidXNlciIsIm5pY2tuYW1lIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlUXVlcnlDbGllbnQiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwiUXVlcnlLZXlzIiwiZmV0Y2hlciIsIkdFVF9NRVNTQUdFUyIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJNc2dMaXN0Iiwic21zZ3MiLCJ1c2VycyIsImNsaWVudCIsInF1ZXJ5IiwidXNlcmlkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIkNSRUFURV9NRVNTQUdFIiwib25TdWNjZXNzIiwiY3JlYXRlTWVzc2FnZSIsInNldFF1ZXJ5RGF0YSIsIk1FU1NBR0VTIiwib2xkIiwibWVzc2FnZXMiLCJVUERBVEVfTUVTU0FHRSIsInVwZGF0ZU1lc3NhZ2UiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIkRFTEVURV9NRVNTQUdFIiwiZGVsZXRlTWVzc2FnZSIsImRlbGV0ZWRJZCIsImRhdGEiLCJlcnJvciIsImlzRXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFwIiwieCIsImZpbmQiLCJncWwiLCJHRVRfTUVTU0FHRSIsIkdFVF9VU0VSUyIsIkdFVF9VU0VSIiwiSG9tZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIiwicmVxdWVzdCIsIlVSTCIsInZhcmlhYmxlcyIsIk1FU1NBR0UiLCJVU0VSUyIsIlVTRVIiXSwic291cmNlUm9vdCI6IiJ9