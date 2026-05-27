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
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

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

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_elyam_video_commerce_widget_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/login/route.ts */ \"(rsc)/./src/app/api/auth/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\elyam\\\\video-commerce-widget\\\\src\\\\app\\\\api\\\\auth\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_elyam_video_commerce_widget_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNlbHlhbSU1Q3ZpZGVvLWNvbW1lcmNlLXdpZGdldCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZWx5YW0lNUN2aWRlby1jb21tZXJjZS13aWRnZXQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzZCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlkZW8tY29tbWVyY2Utd2lkZ2V0Lz9mZDNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGVseWFtXFxcXHZpZGVvLWNvbW1lcmNlLXdpZGdldFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXGxvZ2luXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL2xvZ2luL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9sb2dpblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGVseWFtXFxcXHZpZGVvLWNvbW1lcmNlLXdpZGdldFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXGxvZ2luXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL2xvZ2luL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/login/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/auth/login/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\nasync function POST(request) {\n    const adminPassword = process.env.ADMIN_PASSWORD;\n    if (!adminPassword) {\n        return Response.json({\n            error: \"Painel admin n\\xe3o configurado. Defina ADMIN_PASSWORD.\"\n        }, {\n            status: 503\n        });\n    }\n    let body;\n    try {\n        body = await request.json();\n    } catch  {\n        return Response.json({\n            error: \"Requisi\\xe7\\xe3o inv\\xe1lida\"\n        }, {\n            status: 400\n        });\n    }\n    if (body.password?.trim() !== adminPassword.trim()) {\n        return Response.json({\n            error: \"Senha incorreta\"\n        }, {\n            status: 401\n        });\n    }\n    const token = await new jose__WEBPACK_IMPORTED_MODULE_2__.SignJWT({\n        role: \"admin\"\n    }).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"24h\").sign((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getJwtSecret)());\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"admin_token\", token, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"strict\",\n        maxAge: 60 * 60 * 24,\n        path: \"/\"\n    });\n    return Response.json({\n        success: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEI7QUFDUTtBQUNHO0FBRWxDLGVBQWVHLEtBQUtDLE9BQWdCO0lBQ3pDLE1BQU1DLGdCQUFnQkMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0lBQ2hELElBQUksQ0FBQ0gsZUFBZTtRQUNsQixPQUFPSSxTQUFTQyxJQUFJLENBQ2xCO1lBQUVDLE9BQU87UUFBdUQsR0FDaEU7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0lBRUEsSUFBSUM7SUFDSixJQUFJO1FBQ0ZBLE9BQU8sTUFBTVQsUUFBUU0sSUFBSTtJQUMzQixFQUFFLE9BQU07UUFDTixPQUFPRCxTQUFTQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFzQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN2RTtJQUVBLElBQUlDLEtBQUtDLFFBQVEsRUFBRUMsV0FBV1YsY0FBY1UsSUFBSSxJQUFJO1FBQ2xELE9BQU9OLFNBQVNDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWtCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ25FO0lBRUEsTUFBTUksUUFBUSxNQUFNLElBQUloQix5Q0FBT0EsQ0FBQztRQUFFaUIsTUFBTTtJQUFRLEdBQzdDQyxrQkFBa0IsQ0FBQztRQUFFQyxLQUFLO0lBQVEsR0FDbENDLFdBQVcsR0FDWEMsaUJBQWlCLENBQUMsT0FDbEJDLElBQUksQ0FBQ3BCLHVEQUFZQTtJQUVwQkQscURBQU9BLEdBQUdzQixHQUFHLENBQUMsZUFBZVAsT0FBTztRQUNsQ1EsVUFBVTtRQUNWQyxRQUFRbkIsa0JBQXlCO1FBQ2pDb0IsVUFBVTtRQUNWQyxRQUFRLEtBQUssS0FBSztRQUNsQkMsTUFBTTtJQUNSO0lBRUEsT0FBT25CLFNBQVNDLElBQUksQ0FBQztRQUFFbUIsU0FBUztJQUFLO0FBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlkZW8tY29tbWVyY2Utd2lkZ2V0Ly4vc3JjL2FwcC9hcGkvYXV0aC9sb2dpbi9yb3V0ZS50cz9kMzFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25KV1QgfSBmcm9tICdqb3NlJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IGdldEp3dFNlY3JldCB9IGZyb20gJ0AvbGliL2F1dGgnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgYWRtaW5QYXNzd29yZCA9IHByb2Nlc3MuZW52LkFETUlOX1BBU1NXT1JEXG4gIGlmICghYWRtaW5QYXNzd29yZCkge1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ1BhaW5lbCBhZG1pbiBuw6NvIGNvbmZpZ3VyYWRvLiBEZWZpbmEgQURNSU5fUEFTU1dPUkQuJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMyB9XG4gICAgKVxuICB9XG5cbiAgbGV0IGJvZHk6IHsgcGFzc3dvcmQ/OiBzdHJpbmcgfVxuICB0cnkge1xuICAgIGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGVycm9yOiAnUmVxdWlzacOnw6NvIGludsOhbGlkYScgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICB9XG5cbiAgaWYgKGJvZHkucGFzc3dvcmQ/LnRyaW0oKSAhPT0gYWRtaW5QYXNzd29yZC50cmltKCkpIHtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGVycm9yOiAnU2VuaGEgaW5jb3JyZXRhJyB9LCB7IHN0YXR1czogNDAxIH0pXG4gIH1cblxuICBjb25zdCB0b2tlbiA9IGF3YWl0IG5ldyBTaWduSldUKHsgcm9sZTogJ2FkbWluJyB9KVxuICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6ICdIUzI1NicgfSlcbiAgICAuc2V0SXNzdWVkQXQoKVxuICAgIC5zZXRFeHBpcmF0aW9uVGltZSgnMjRoJylcbiAgICAuc2lnbihnZXRKd3RTZWNyZXQoKSlcblxuICBjb29raWVzKCkuc2V0KCdhZG1pbl90b2tlbicsIHRva2VuLCB7XG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCxcbiAgICBwYXRoOiAnLycsXG4gIH0pXG5cbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pXG59XG4iXSwibmFtZXMiOlsiU2lnbkpXVCIsImNvb2tpZXMiLCJnZXRKd3RTZWNyZXQiLCJQT1NUIiwicmVxdWVzdCIsImFkbWluUGFzc3dvcmQiLCJwcm9jZXNzIiwiZW52IiwiQURNSU5fUEFTU1dPUkQiLCJSZXNwb25zZSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImJvZHkiLCJwYXNzd29yZCIsInRyaW0iLCJ0b2tlbiIsInJvbGUiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJzZXRJc3N1ZWRBdCIsInNldEV4cGlyYXRpb25UaW1lIiwic2lnbiIsInNldCIsImh0dHBPbmx5Iiwic2VjdXJlIiwic2FtZVNpdGUiLCJtYXhBZ2UiLCJwYXRoIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getJwtSecret: () => (/* binding */ getJwtSecret),\n/* harmony export */   requireAuth: () => (/* binding */ requireAuth)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nasync function requireAuth() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(\"admin_token\")?.value;\n    if (!token) return false;\n    try {\n        const secret = new TextEncoder().encode(process.env.JWT_SECRET);\n        await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(token, secret);\n        return true;\n    } catch  {\n        return false;\n    }\n}\nfunction getJwtSecret() {\n    const secret = process.env.JWT_SECRET;\n    if (!secret) throw new Error(\"JWT_SECRET n\\xe3o configurado\");\n    return new TextEncoder().encode(secret);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNNO0FBRS9CLGVBQWVFO0lBQ3BCLE1BQU1DLFFBQVFGLHFEQUFPQSxHQUFHRyxHQUFHLENBQUMsZ0JBQWdCQztJQUM1QyxJQUFJLENBQUNGLE9BQU8sT0FBTztJQUNuQixJQUFJO1FBQ0YsTUFBTUcsU0FBUyxJQUFJQyxjQUFjQyxNQUFNLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtRQUM5RCxNQUFNWCwrQ0FBU0EsQ0FBQ0csT0FBT0c7UUFDdkIsT0FBTztJQUNULEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBRU8sU0FBU007SUFDZCxNQUFNTixTQUFTRyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7SUFDckMsSUFBSSxDQUFDTCxRQUFRLE1BQU0sSUFBSU8sTUFBTTtJQUM3QixPQUFPLElBQUlOLGNBQWNDLE1BQU0sQ0FBQ0Y7QUFDbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlby1jb21tZXJjZS13aWRnZXQvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqd3RWZXJpZnkgfSBmcm9tICdqb3NlJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVBdXRoKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMoKS5nZXQoJ2FkbWluX3Rva2VuJyk/LnZhbHVlXG4gIGlmICghdG9rZW4pIHJldHVybiBmYWxzZVxuICB0cnkge1xuICAgIGNvbnN0IHNlY3JldCA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwcm9jZXNzLmVudi5KV1RfU0VDUkVUISlcbiAgICBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIHNlY3JldClcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Snd0U2VjcmV0KCk6IFVpbnQ4QXJyYXkge1xuICBjb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUXG4gIGlmICghc2VjcmV0KSB0aHJvdyBuZXcgRXJyb3IoJ0pXVF9TRUNSRVQgbsOjbyBjb25maWd1cmFkbycpXG4gIHJldHVybiBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc2VjcmV0KVxufVxuIl0sIm5hbWVzIjpbImp3dFZlcmlmeSIsImNvb2tpZXMiLCJyZXF1aXJlQXV0aCIsInRva2VuIiwiZ2V0IiwidmFsdWUiLCJzZWNyZXQiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZ2V0Snd0U2VjcmV0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Celyam%5Cvideo-commerce-widget&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();