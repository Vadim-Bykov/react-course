exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 5856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getUserById),
/* harmony export */   R: () => (/* binding */ getUsers)
/* harmony export */ });
const getUsers = async ()=>{
    const res = await fetch("https://jsonplaceholder.org/users");
    if (!res?.ok) throw new Error("Failed to fetch users");
    const users = await res.json();
    return users;
};
// export const getUserById = async (userId: string) => {
//   try {
//     const res = await fetch(`https://jsonplaceholder.org/users/${userId}`);
//     if (!res?.ok) throw new Error('Failed to fetch user');
//     const users: User = await res.json();
//     return users;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
const getUserById = async (userId)=>{
    return fetch(`https://jsonplaceholder.org/users/${userId}`).then((res)=>{
        if (!res?.ok) throw new Error("Failed to fetch user");
        return res.json();
    }).catch((error)=>{
        return Promise.reject(error);
    });
};


/***/ }),

/***/ 6680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6074);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_users_constants_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3813);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(566);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);





function User({ user, ageRestriction, detailsLink = true }) {
    const currentYear = new Date().getFullYear();
    const birthYear = user.birthDate.split("-")[0];
    const fullYearAge = currentYear - +birthYear;
    const prohibited = ageRestriction && fullYearAge < _layout_users_constants_rules__WEBPACK_IMPORTED_MODULE_2__/* .MIN_AGE */ .G;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().userContainer), prohibited && (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().prohibited)),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
                        children: [
                            "Name: ",
                            user.firstname,
                            " ",
                            user.lastname,
                            "."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
                        children: [
                            "Birth date: ",
                            user.birthDate
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
                        children: [
                            "Age: ",
                            fullYearAge
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
                        children: [
                            "Email: ",
                            user.email
                        ]
                    })
                ]
            }),
            detailsLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: "underline",
                    href: `/users/${user.id}`,
                    children: "Details"
                })
            })
        ]
    });
}


/***/ }),

/***/ 3813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ MIN_AGE)
/* harmony export */ });
const MIN_AGE = 18;


/***/ }),

/***/ 6074:
/***/ ((module) => {

// Exports
module.exports = {
	"searchInput": "styles_searchInput__wfFFi",
	"listTitle": "styles_listTitle__Sb3Vb",
	"userContainer": "styles_userContainer__TFog_",
	"prohibited": "styles_prohibited__Qoo_t",
	"text": "styles_text__uHrV0"
};


/***/ }),

/***/ 781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UsersLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);


function UsersLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-zinc-300 -m-5 p-5 min-h-screen",
        children: children
    });
}


/***/ })

};
;