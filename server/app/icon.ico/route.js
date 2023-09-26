"use strict";
(() => {
var exports = {};
exports.id = 451;
exports.ids = [451];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ficon.ico%2Froute&isDynamic=0!./src/app/icon.ico?__next_metadata_route__
var icon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(icon_next_metadata_route_namespaceObject);
__webpack_require__.d(icon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ficon.ico%2Froute&isDynamic=0!./src/app/icon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA1ElEQVRIid3UP2oCQRiG8V8kkFoktZUHEDxEREJOkzN4AzsRBG+QUkj63MBSbZIqTUgC/itWcDGgM+usoC981X48zzsws1xLVlhvZ1CGYJkT/OK+DAm85ERF5zUPrOwJeglK1g59vMGkQOv8PB5r8HwC/C3kiFV8F4Cv0AoRkF3VWMEwFA7NSPgP6jECeI8QdGPhNXwGNh/hLlbQ3wLGsqubNFUs8IdGajjc4kuxdxCcJ3yUKSg9HcwxQzvB3r/M7I49PWVv/3d9trRl7aZ4SLB3wdkAc+mm8AY1w/kAAAAASUVORK5CYII=", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, immutable, no-transform, max-age=31536000",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ficon.ico%2Froute&name=app%2Ficon.ico%2Froute&pagePath=private-next-app-dir%2Ficon.ico&appDir=%2FUsers%2Fvadzim%2FDesktop%2FDocuments%2FCourse%2FReact%2Freact-course%2Fsrc%2Fapp&appPaths=%2Ficon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/icon.ico/route",
        pathname: "/icon.ico",
        filename: "icon",
        bundlePath: "app/icon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ficon.ico%2Froute&isDynamic=0!/Users/vadzim/Desktop/Documents/Course/React/react-course/src/app/icon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: icon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/icon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(1318)));
module.exports = __webpack_exports__;

})();