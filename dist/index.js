/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const baseDom = document.createElement('div')\nbaseDom.id = \"akashi-chrome-extension-history-table\"\ndocument.querySelector(\".c-column__wrapper\").append(baseDom)\n\nasync function getHtml(path) {\n  const res = await fetch(path);\n  const html = await res.text();\n  return html;\n}\n\nfunction updateTable() {\n  const dt = new Date()\n  const yyyy_mm_dd = (dt.getFullYear() + '-' + ('00' + (dt.getMonth()+1)).slice(-2) + '-' + ('00' + dt.getDate()).slice(-2))\n  getHtml(\"https://atnd.ak4.jp/requests/new?date=\" + yyyy_mm_dd)\n    .then(html => {\n      let parser = new DOMParser()\n      const dom = parser.parseFromString(html, \"text/html\")\n      const tableDom = dom.querySelector(\".p-application-modal__table--blue\");\n      baseDom.replaceChildren(tableDom)\n    })\n    .catch(err => {\n      console.log(err);\n    })\n}\n\ndocument.querySelectorAll(\".c-circle-button\").forEach(function(elem, i) {\n  elem.addEventListener(\"click\", function() {\n    setTimeout(updateTable, 500);\n  }, false);\n})\n\n//# sourceURL=webpack://akashi-chrome-extension/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;