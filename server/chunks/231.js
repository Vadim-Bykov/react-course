exports.id = 231;
exports.ids = [231];
exports.modules = {

/***/ 2714:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 7409:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3376))

/***/ }),

/***/ 1840:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2900))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 3376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Error({ error, reset }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Log the error to an error reporting service
        console.error(error);
    }, [
        error
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl text-red-600",
                children: "Some error ocurred"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: // Attempt to recover by trying to re-render the segment
                ()=>reset(),
                children: "Try again"
            })
        ]
    });
}


/***/ }),

/***/ 2900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(541);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(566);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Navbar/components/NavItem.tsx



const NavItem = ({ item: { name, route } })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: route,
        className: "border py-2 px-6 rounded-lg bg-blue-200 ",
        children: name
    });
};

;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.tsx



const NAV_ITEMS = [
    {
        name: "Home",
        route: "/"
    },
    {
        name: "Users",
        route: "/users"
    },
    {
        name: "Posts",
        route: "/posts"
    }
];
const Navbar = ()=>{
    const items = NAV_ITEMS.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
            item: item
        }, item.name));
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (0,clsx/* default */.Z)([
            "flex justify-evenly items-center w-screen",
            "bg-teal-400",
            "fixed h-[80px]"
        ]),
        children: items
    });
};

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(3824);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/store/store.ts + 2 modules
var store = __webpack_require__(311);
;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store/* store */.h,
        children: /*#__PURE__*/ jsx_runtime_.jsx("html", {
            lang: "en",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "p-5 pt-[100px]",
                        children: children
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 9758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bb: () => (/* binding */ appApi),
/* harmony export */   u3: () => (/* binding */ useCreatePostMutation),
/* harmony export */   ws: () => (/* binding */ useGetPostsQuery)
/* harmony export */ });
/* unused harmony export useGetPostQuery */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3298);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const appApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "api",
    tagTypes: [
        "Posts"
    ],
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "http://localhost:3500/"
    }),
    endpoints: (builder)=>({
            getPosts: builder.query({
                query: ()=>"posts",
                // query: (params) => ({
                //   url: "`posts",
                //   //  params: some params like page_size
                // }),
                providesTags: [
                    "Posts"
                ]
            }),
            getPost: builder.query({
                query: ({ postId })=>`posts/${postId}`
            }),
            createPost: builder.mutation({
                query: (body)=>({
                        url: "posts",
                        method: "POST",
                        body
                    }),
                invalidatesTags: [
                    "Posts"
                ]
            })
        })
});
const { useGetPostQuery, useGetPostsQuery, useCreatePostMutation } = appApi;


/***/ }),

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ store),
  TL: () => (/* binding */ useAppDispatch)
});

// UNUSED EXPORTS: useAppSelector

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(1388);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
;// CONCATENATED MODULE: ./src/store/features/counter/counterSlice.ts

const initialState = {
    count: 1
};
const counterSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        increment: (state)=>{
            state.count += 1;
        },
        decrement: (state)=>{
            state.count -= 1;
        },
        reset: (state)=>{
            state.count = 0;
        },
        incrementByAmount: (state, action)=>{
            state.count += action.payload;
        }
    }
});
const { increment, decrement, reset: counterSlice_reset, incrementByAmount } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(3258);
;// CONCATENATED MODULE: ./src/store/features/posts/postsSlice.ts


const POSTS_URL = "https://jsonplaceholder.org/posts";
const fetchPosts = (0,redux_toolkit_cjs_production_min.createAsyncThunk)("posts/fetchPosts", async ()=>{
    try {
        const response = await axios/* default */.Z.get(POSTS_URL);
        return response.data;
    } catch (error) {
        return error.message;
    }
});
const addNewPost = (0,redux_toolkit_cjs_production_min.createAsyncThunk)("posts/addNewPost", async (newPost)=>{
    console.log({
        newPost
    });
    try {
        const response = await axios/* default */.Z.post(POSTS_URL, newPost);
        return response.data;
    } catch (error) {
        return error.message;
    }
});
const postsSlice_initialState = {
    posts: [],
    status: "idle",
    error: null
};
const postsSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "counter",
    initialState: postsSlice_initialState,
    reducers: {
        //  addPost: {
        //    reducer(state, action: PayloadAction<Post>) {
        //      state.posts = action.payload;
        //    },
        //    prepare: (title, content) => {
        //      return {
        //        payload: {
        //          id: nanoid(),
        //          title,
        //          content,
        //          publishedAt: sub(new Date(), { minutes: 10 }).toISOString()
        //        },
        //      };
        //    },
        //  },
        // },
        addPost: (state, action)=>{
            state.posts.push({
                id: (0,redux_toolkit_cjs_production_min.nanoid)(),
                publishedAt: new Date().toISOString(),
                ...action.payload
            });
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchPosts.pending, (state, action)=>{
            state.status = "loading";
        }).addCase(fetchPosts.fulfilled, (state, action)=>{
            state.status = "succeed";
            state.posts = [
                ...state.posts,
                ...action.payload
            ];
        }).addCase(fetchPosts.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        }).addCase(addNewPost.fulfilled, (state, action)=>{
            console.log({
                payload: action.payload
            });
            state.posts.push(action.payload);
        });
    }
});
const selectPosts = (state)=>state.posts.posts;
const selectPostsStatus = (state)=>state.posts.status;
const selectPostsError = (state)=>state.posts.error;
const { addPost } = postsSlice.actions;
const postsReducer = postsSlice.reducer;

// EXTERNAL MODULE: ./src/store/features/api/apiSlice.ts
var apiSlice = __webpack_require__(9758);
;// CONCATENATED MODULE: ./src/store/store.ts





const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        [apiSlice/* appApi */.Bb.reducerPath]: apiSlice/* appApi */.Bb.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice/* appApi */.Bb.middleware)
});
const useAppDispatch = lib.useDispatch;
const useAppSelector = (/* unused pure expression or super */ null && (useSelector));


/***/ }),

/***/ 4678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/vadzim/Desktop/Documents/Course/React/react-course/src/app/error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/vadzim/Desktop/Documents/Course/React/react-course/src/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 8924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);


function loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-2xl",
        children: "Loading ..."
    });
}


/***/ }),

/***/ 592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"24x24"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "icon.ico")

    return [{
      ...imageData,
      url: imageUrl + "?72f8a887f319235a",
    }]
  });

/***/ }),

/***/ 3824:
/***/ (() => {



/***/ })

};
;