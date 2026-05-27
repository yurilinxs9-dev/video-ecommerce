"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/cloudinary/sign/route";
exports.ids = ["app/api/cloudinary/sign/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcloudinary%2Fsign%2Froute&page=%2Fapi%2Fcloudinary%2Fsign%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcloudinary%2Fsign%2Froute.ts&appDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcloudinary%2Fsign%2Froute&page=%2Fapi%2Fcloudinary%2Fsign%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcloudinary%2Fsign%2Froute.ts&appDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_elyam_video_commerce_widget_src_app_api_cloudinary_sign_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/cloudinary/sign/route.ts */ \"(rsc)/./src/app/api/cloudinary/sign/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/cloudinary/sign/route\",\n        pathname: \"/api/cloudinary/sign\",\n        filename: \"route\",\n        bundlePath: \"app/api/cloudinary/sign/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\elyam\\\\video-commerce-widget\\\\src\\\\app\\\\api\\\\cloudinary\\\\sign\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_elyam_video_commerce_widget_src_app_api_cloudinary_sign_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/cloudinary/sign/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjbG91ZGluYXJ5JTJGc2lnbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY2xvdWRpbmFyeSUyRnNpZ24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjbG91ZGluYXJ5JTJGc2lnbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNlbHlhbSU1Q3ZpZGVvLWNvbW1lcmNlLXdpZGdldCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZWx5YW0lNUN2aWRlby1jb21tZXJjZS13aWRnZXQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlkZW8tY29tbWVyY2Utd2lkZ2V0Lz8zZGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGVseWFtXFxcXHZpZGVvLWNvbW1lcmNlLXdpZGdldFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjbG91ZGluYXJ5XFxcXHNpZ25cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2Nsb3VkaW5hcnkvc2lnbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Nsb3VkaW5hcnkvc2lnblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY2xvdWRpbmFyeS9zaWduL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZWx5YW1cXFxcdmlkZW8tY29tbWVyY2Utd2lkZ2V0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNsb3VkaW5hcnlcXFxcc2lnblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY2xvdWRpbmFyeS9zaWduL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcloudinary%2Fsign%2Froute&page=%2Fapi%2Fcloudinary%2Fsign%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcloudinary%2Fsign%2Froute.ts&appDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/cloudinary/sign/route.ts":
/*!**********************************************!*\
  !*** ./src/app/api/cloudinary/sign/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function POST(request) {\n    const cloudName = \"dfeps45br\";\n    const apiKey = process.env.CLOUDINARY_API_KEY;\n    const apiSecret = process.env.CLOUDINARY_API_SECRET;\n    if (!cloudName || !apiKey || !apiSecret) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Cloudinary n\\xe3o configurado\"\n        }, {\n            status: 503\n        });\n    }\n    cloudinary__WEBPACK_IMPORTED_MODULE_1__.v2.config({\n        cloud_name: cloudName,\n        api_key: apiKey,\n        api_secret: apiSecret\n    });\n    // ?resource=image para posters, padrão é vídeo\n    const resource = request.nextUrl.searchParams.get(\"resource\") ?? \"video\";\n    const folder = resource === \"image\" ? \"video-commerce/posters\" : \"video-commerce\";\n    const timestamp = Math.round(Date.now() / 1000);\n    const params = {\n        folder,\n        timestamp,\n        use_filename: \"true\",\n        unique_filename: \"true\"\n    };\n    const signature = cloudinary__WEBPACK_IMPORTED_MODULE_1__.v2.utils.api_sign_request(params, apiSecret);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        signature,\n        timestamp,\n        api_key: apiKey,\n        cloud_name: cloudName,\n        folder: params.folder,\n        use_filename: params.use_filename,\n        unique_filename: params.unique_filename\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jbG91ZGluYXJ5L3NpZ24vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RDtBQUNWO0FBRXRDLGVBQWVHLEtBQUtDLE9BQW9CO0lBQzdDLE1BQU1DLFlBQVlDLFdBQTZDO0lBQy9ELE1BQU1HLFNBQVNILFFBQVFDLEdBQUcsQ0FBQ0csa0JBQWtCO0lBQzdDLE1BQU1DLFlBQVlMLFFBQVFDLEdBQUcsQ0FBQ0sscUJBQXFCO0lBRW5ELElBQUksQ0FBQ1AsYUFBYSxDQUFDSSxVQUFVLENBQUNFLFdBQVc7UUFDdkMsT0FBT1gscURBQVlBLENBQUNhLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUE2QixHQUN0QztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7SUFFQWIsMENBQVVBLENBQUNjLE1BQU0sQ0FBQztRQUFFQyxZQUFZWjtRQUFXYSxTQUFTVDtRQUFRVSxZQUFZUjtJQUFVO0lBRWxGLCtDQUErQztJQUMvQyxNQUFNUyxXQUFXaEIsUUFBUWlCLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUMsZUFBZTtJQUNqRSxNQUFNQyxTQUFTSixhQUFhLFVBQVUsMkJBQTJCO0lBRWpFLE1BQU1LLFlBQVlDLEtBQUtDLEtBQUssQ0FBQ0MsS0FBS0MsR0FBRyxLQUFLO0lBQzFDLE1BQU1DLFNBQVM7UUFDYk47UUFDQUM7UUFDQU0sY0FBYztRQUNkQyxpQkFBaUI7SUFDbkI7SUFFQSxNQUFNQyxZQUFZL0IsMENBQVVBLENBQUNnQyxLQUFLLENBQUNDLGdCQUFnQixDQUFDTCxRQUFRbkI7SUFFNUQsT0FBT1gscURBQVlBLENBQUNhLElBQUksQ0FBQztRQUN2Qm9CO1FBQ0FSO1FBQ0FQLFNBQVNUO1FBQ1RRLFlBQVlaO1FBQ1ptQixRQUFRTSxPQUFPTixNQUFNO1FBQ3JCTyxjQUFjRCxPQUFPQyxZQUFZO1FBQ2pDQyxpQkFBaUJGLE9BQU9FLGVBQWU7SUFDekM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvLWNvbW1lcmNlLXdpZGdldC8uL3NyYy9hcHAvYXBpL2Nsb3VkaW5hcnkvc2lnbi9yb3V0ZS50cz85YTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgdjIgYXMgY2xvdWRpbmFyeSB9IGZyb20gJ2Nsb3VkaW5hcnknXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IGNsb3VkTmFtZSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMT1VESU5BUllfQ0xPVURfTkFNRVxyXG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQVBJX0tFWVxyXG4gIGNvbnN0IGFwaVNlY3JldCA9IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQVBJX1NFQ1JFVFxyXG5cclxuICBpZiAoIWNsb3VkTmFtZSB8fCAhYXBpS2V5IHx8ICFhcGlTZWNyZXQpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogJ0Nsb3VkaW5hcnkgbsOjbyBjb25maWd1cmFkbycgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMyB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjbG91ZGluYXJ5LmNvbmZpZyh7IGNsb3VkX25hbWU6IGNsb3VkTmFtZSwgYXBpX2tleTogYXBpS2V5LCBhcGlfc2VjcmV0OiBhcGlTZWNyZXQgfSlcclxuXHJcbiAgLy8gP3Jlc291cmNlPWltYWdlIHBhcmEgcG9zdGVycywgcGFkcsOjbyDDqSB2w61kZW9cclxuICBjb25zdCByZXNvdXJjZSA9IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdyZXNvdXJjZScpID8/ICd2aWRlbydcclxuICBjb25zdCBmb2xkZXIgPSByZXNvdXJjZSA9PT0gJ2ltYWdlJyA/ICd2aWRlby1jb21tZXJjZS9wb3N0ZXJzJyA6ICd2aWRlby1jb21tZXJjZSdcclxuXHJcbiAgY29uc3QgdGltZXN0YW1wID0gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMClcclxuICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICBmb2xkZXIsXHJcbiAgICB0aW1lc3RhbXAsXHJcbiAgICB1c2VfZmlsZW5hbWU6ICd0cnVlJyxcclxuICAgIHVuaXF1ZV9maWxlbmFtZTogJ3RydWUnLFxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2lnbmF0dXJlID0gY2xvdWRpbmFyeS51dGlscy5hcGlfc2lnbl9yZXF1ZXN0KHBhcmFtcywgYXBpU2VjcmV0KVxyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgc2lnbmF0dXJlLFxyXG4gICAgdGltZXN0YW1wLFxyXG4gICAgYXBpX2tleTogYXBpS2V5LFxyXG4gICAgY2xvdWRfbmFtZTogY2xvdWROYW1lLFxyXG4gICAgZm9sZGVyOiBwYXJhbXMuZm9sZGVyLFxyXG4gICAgdXNlX2ZpbGVuYW1lOiBwYXJhbXMudXNlX2ZpbGVuYW1lLFxyXG4gICAgdW5pcXVlX2ZpbGVuYW1lOiBwYXJhbXMudW5pcXVlX2ZpbGVuYW1lLFxyXG4gIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInYyIiwiY2xvdWRpbmFyeSIsIlBPU1QiLCJyZXF1ZXN0IiwiY2xvdWROYW1lIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMT1VESU5BUllfQ0xPVURfTkFNRSIsImFwaUtleSIsIkNMT1VESU5BUllfQVBJX0tFWSIsImFwaVNlY3JldCIsIkNMT1VESU5BUllfQVBJX1NFQ1JFVCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImNvbmZpZyIsImNsb3VkX25hbWUiLCJhcGlfa2V5IiwiYXBpX3NlY3JldCIsInJlc291cmNlIiwibmV4dFVybCIsInNlYXJjaFBhcmFtcyIsImdldCIsImZvbGRlciIsInRpbWVzdGFtcCIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJub3ciLCJwYXJhbXMiLCJ1c2VfZmlsZW5hbWUiLCJ1bmlxdWVfZmlsZW5hbWUiLCJzaWduYXR1cmUiLCJ1dGlscyIsImFwaV9zaWduX3JlcXVlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/cloudinary/sign/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/lodash","vendor-chunks/cloudinary"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcloudinary%2Fsign%2Froute&page=%2Fapi%2Fcloudinary%2Fsign%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcloudinary%2Fsign%2Froute.ts&appDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();