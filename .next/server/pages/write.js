module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/write.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/BackgroundImage.js":
/*!*******************************************!*\
  !*** ./src/components/BackgroundImage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_BackgroundImage_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/BackgroundImage.scss */ \"./src/components/BackgroundImage.scss\");\n/* harmony import */ var components_BackgroundImage_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_BackgroundImage_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/andrew/dev/notion-api-boilerplate/src/components/BackgroundImage.js\";\n\n\n\nfunction BackgroundImage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"BackgroundImage\" + (props.repeat ? \" repeat\" : \"\"),\n    style: {\n      \"--image\": `url(${props.image})`,\n      \"--opacity\": props.opacity\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackgroundImage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYWNrZ3JvdW5kSW1hZ2UuanM/NGI5YiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kSW1hZ2UiLCJwcm9wcyIsInJlcGVhdCIsImltYWdlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QixzQkFDRTtBQUNFLGFBQVMsRUFBRSxxQkFBcUJBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLFNBQWYsR0FBMkIsRUFBaEQsQ0FEYjtBQUVFLFNBQUssRUFBRTtBQUNMLGlCQUFZLE9BQU1ELEtBQUssQ0FBQ0UsS0FBTSxHQUR6QjtBQUVMLG1CQUFhRixLQUFLLENBQUNHO0FBRmQ7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7QUFFY0osOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYWNrZ3JvdW5kSW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJjb21wb25lbnRzL0JhY2tncm91bmRJbWFnZS5zY3NzXCI7XG5cbmZ1bmN0aW9uIEJhY2tncm91bmRJbWFnZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17XCJCYWNrZ3JvdW5kSW1hZ2VcIiArIChwcm9wcy5yZXBlYXQgPyBcIiByZXBlYXRcIiA6IFwiXCIpfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgXCItLWltYWdlXCI6IGB1cmwoJHtwcm9wcy5pbWFnZX0pYCxcbiAgICAgICAgXCItLW9wYWNpdHlcIjogcHJvcHMub3BhY2l0eSxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZEltYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/BackgroundImage.js\n");

/***/ }),

/***/ "./src/components/BackgroundImage.scss":
/*!*********************************************!*\
  !*** ./src/components/BackgroundImage.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0JhY2tncm91bmRJbWFnZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BackgroundImage.scss\n");

/***/ }),

/***/ "./src/components/HeroSection2.js":
/*!****************************************!*\
  !*** ./src/components/HeroSection2.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Section */ \"./src/components/Section.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_SectionHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SectionHeader */ \"./src/components/SectionHeader.js\");\n\nvar _jsxFileName = \"/home/andrew/dev/notion-api-boilerplate/src/components/HeroSection2.js\";\n\n\n\n\n\nfunction HeroSection2(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    bg: props.bg,\n    textColor: props.textColor,\n    size: props.size,\n    bgImage: props.bgImage,\n    bgImageOpacity: props.bgImageOpacity,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_SectionHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: props.title,\n        subtitle: props.subtitle,\n        size: 1,\n        spaced: true,\n        className: \"text-center\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZXJvU2VjdGlvbjIuanM/MGYwZCJdLCJuYW1lcyI6WyJIZXJvU2VjdGlvbjIiLCJwcm9wcyIsImJnIiwidGV4dENvbG9yIiwic2l6ZSIsImJnSW1hZ2UiLCJiZ0ltYWdlT3BhY2l0eSIsInRpdGxlIiwic3VidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0Isc0JBQ0UscUVBQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUVBLEtBQUssQ0FBQ0MsRUFEWjtBQUVFLGFBQVMsRUFBRUQsS0FBSyxDQUFDRSxTQUZuQjtBQUdFLFFBQUksRUFBRUYsS0FBSyxDQUFDRyxJQUhkO0FBSUUsV0FBTyxFQUFFSCxLQUFLLENBQUNJLE9BSmpCO0FBS0Usa0JBQWMsRUFBRUosS0FBSyxDQUFDSyxjQUx4QjtBQUFBLDJCQU9FLHFFQUFDLGdFQUFEO0FBQUEsNkJBQ0UscUVBQUMsZ0VBQUQ7QUFDRSxhQUFLLEVBQUVMLEtBQUssQ0FBQ00sS0FEZjtBQUVFLGdCQUFRLEVBQUVOLEtBQUssQ0FBQ08sUUFGbEI7QUFHRSxZQUFJLEVBQUUsQ0FIUjtBQUlFLGNBQU0sRUFBRSxJQUpWO0FBS0UsaUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztBQUVjUiwyRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlcm9TZWN0aW9uMi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCJjb21wb25lbnRzL1NlY3Rpb25cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL1NlY3Rpb25IZWFkZXJcIjtcblxuZnVuY3Rpb24gSGVyb1NlY3Rpb24yKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb25cbiAgICAgIGJnPXtwcm9wcy5iZ31cbiAgICAgIHRleHRDb2xvcj17cHJvcHMudGV4dENvbG9yfVxuICAgICAgc2l6ZT17cHJvcHMuc2l6ZX1cbiAgICAgIGJnSW1hZ2U9e3Byb3BzLmJnSW1hZ2V9XG4gICAgICBiZ0ltYWdlT3BhY2l0eT17cHJvcHMuYmdJbWFnZU9wYWNpdHl9XG4gICAgPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3Byb3BzLnN1YnRpdGxlfVxuICAgICAgICAgIHNpemU9ezF9XG4gICAgICAgICAgc3BhY2VkPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb24yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/HeroSection2.js\n");

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_BackgroundImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/BackgroundImage */ \"./src/components/BackgroundImage.js\");\n/* harmony import */ var components_Section_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Section.scss */ \"./src/components/Section.scss\");\n/* harmony import */ var components_Section_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_Section_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/andrew/dev/notion-api-boilerplate/src/components/Section.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nfunction Section(props) {\n  const {\n    bg,\n    textColor,\n    bgImage,\n    bgImageOpacity,\n    bgImageRepeat,\n    className,\n    children\n  } = props,\n        otherProps = _objectWithoutProperties(props, [\"bg\", \"textColor\", \"bgImage\", \"bgImageOpacity\", \"bgImageRepeat\", \"className\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", _objectSpread(_objectSpread({\n    className: \"SectionComponent py-5 position-relative\" + (props.bg ? ` bg-${props.bg}` : \"\") + (props.textColor ? ` text-${props.textColor}` : \"\") + (className ? ` ${className}` : \"\")\n  }, otherProps), {}, {\n    children: [bgImage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_BackgroundImage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      image: bgImage,\n      opacity: bgImageOpacity,\n      repeat: bgImageRepeat\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"\" + ([\"md\", \"lg\"].includes(props.size) ? \" py-md-5\" : \"\") + (props.size === \"lg\" ? \" my-md-5\" : \"\"),\n      children: props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzP2NmMDEiXSwibmFtZXMiOlsiU2VjdGlvbiIsInByb3BzIiwiYmciLCJ0ZXh0Q29sb3IiLCJiZ0ltYWdlIiwiYmdJbWFnZU9wYWNpdHkiLCJiZ0ltYWdlUmVwZWF0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJvdGhlclByb3BzIiwiaW5jbHVkZXMiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDdEIsUUFBTTtBQUNKQyxNQURJO0FBRUpDLGFBRkk7QUFHSkMsV0FISTtBQUlKQyxrQkFKSTtBQUtKQyxpQkFMSTtBQU1KQyxhQU5JO0FBT0pDO0FBUEksTUFTRlAsS0FUSjtBQUFBLFFBUUtRLFVBUkwsNEJBU0lSLEtBVEo7O0FBV0Esc0JBQ0U7QUFDRSxhQUFTLEVBQ1AsNkNBQ0NBLEtBQUssQ0FBQ0MsRUFBTixHQUFZLE9BQU1ELEtBQUssQ0FBQ0MsRUFBRyxFQUEzQixHQUErQixFQURoQyxLQUVDRCxLQUFLLENBQUNFLFNBQU4sR0FBbUIsU0FBUUYsS0FBSyxDQUFDRSxTQUFVLEVBQTNDLEdBQStDLEVBRmhELEtBR0NJLFNBQVMsR0FBSSxJQUFHQSxTQUFVLEVBQWpCLEdBQXFCLEVBSC9CO0FBRkosS0FPTUUsVUFQTjtBQUFBLGVBU0dMLE9BQU8saUJBQ04scUVBQUMsa0VBQUQ7QUFDRSxXQUFLLEVBQUVBLE9BRFQ7QUFFRSxhQUFPLEVBQUVDLGNBRlg7QUFHRSxZQUFNLEVBQUVDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKLGVBaUJFO0FBQ0UsZUFBUyxFQUNQLE1BQ0MsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhSSxRQUFiLENBQXNCVCxLQUFLLENBQUNVLElBQTVCLElBQW9DLFVBQXBDLEdBQWlELEVBRGxELEtBRUNWLEtBQUssQ0FBQ1UsSUFBTixLQUFlLElBQWYsR0FBc0IsVUFBdEIsR0FBbUMsRUFGcEMsQ0FGSjtBQUFBLGdCQU9HVixLQUFLLENBQUNPO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDs7QUFFY1Isc0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJhY2tncm91bmRJbWFnZSBmcm9tIFwiY29tcG9uZW50cy9CYWNrZ3JvdW5kSW1hZ2VcIjtcbmltcG9ydCBcImNvbXBvbmVudHMvU2VjdGlvbi5zY3NzXCI7XG5cbmZ1bmN0aW9uIFNlY3Rpb24ocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGJnLFxuICAgIHRleHRDb2xvcixcbiAgICBiZ0ltYWdlLFxuICAgIGJnSW1hZ2VPcGFjaXR5LFxuICAgIGJnSW1hZ2VSZXBlYXQsXG4gICAgY2xhc3NOYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLm90aGVyUHJvcHNcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIFwiU2VjdGlvbkNvbXBvbmVudCBweS01IHBvc2l0aW9uLXJlbGF0aXZlXCIgK1xuICAgICAgICAocHJvcHMuYmcgPyBgIGJnLSR7cHJvcHMuYmd9YCA6IFwiXCIpICtcbiAgICAgICAgKHByb3BzLnRleHRDb2xvciA/IGAgdGV4dC0ke3Byb3BzLnRleHRDb2xvcn1gIDogXCJcIikgK1xuICAgICAgICAoY2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogXCJcIilcbiAgICAgIH1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIHtiZ0ltYWdlICYmIChcbiAgICAgICAgPEJhY2tncm91bmRJbWFnZVxuICAgICAgICAgIGltYWdlPXtiZ0ltYWdlfVxuICAgICAgICAgIG9wYWNpdHk9e2JnSW1hZ2VPcGFjaXR5fVxuICAgICAgICAgIHJlcGVhdD17YmdJbWFnZVJlcGVhdH1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBcIlwiICtcbiAgICAgICAgICAoW1wibWRcIiwgXCJsZ1wiXS5pbmNsdWRlcyhwcm9wcy5zaXplKSA/IFwiIHB5LW1kLTVcIiA6IFwiXCIpICtcbiAgICAgICAgICAocHJvcHMuc2l6ZSA9PT0gXCJsZ1wiID8gXCIgbXktbWQtNVwiIDogXCJcIilcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Section.js\n");

/***/ }),

/***/ "./src/components/Section.scss":
/*!*************************************!*\
  !*** ./src/components/Section.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Section.scss\n");

/***/ }),

/***/ "./src/components/SectionHeader.js":
/*!*****************************************!*\
  !*** ./src/components/SectionHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_SectionHeader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/SectionHeader.scss */ \"./src/components/SectionHeader.scss\");\n/* harmony import */ var components_SectionHeader_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_SectionHeader_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/andrew/dev/notion-api-boilerplate/src/components/SectionHeader.js\";\n\n\n\nfunction SectionHeader(props) {\n  // Render nothing if no title or subtitle\n  if (!props.title && !props.subtitle) {\n    return null;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: \"SectionHeader\" + (props.className ? ` ${props.className}` : \"\"),\n    children: [props.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"font-weight-bold\" + (props.subtitle && props.spaced ? \" mb-4\" : \"\") + (!props.subtitle ? \" mb-0\" : \"\") + (props.size ? ` h${props.size}` : \"\"),\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this), props.subtitle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"SectionHeader__subtitle mb-0\",\n      children: props.subtitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionHeader);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzPzlkYTUiXSwibmFtZXMiOlsiU2VjdGlvbkhlYWRlciIsInByb3BzIiwidGl0bGUiLCJzdWJ0aXRsZSIsImNsYXNzTmFtZSIsInNwYWNlZCIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUI7QUFDQSxNQUFJLENBQUNBLEtBQUssQ0FBQ0MsS0FBUCxJQUFnQixDQUFDRCxLQUFLLENBQUNFLFFBQTNCLEVBQXFDO0FBQ25DLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQ0UsYUFBUyxFQUNQLG1CQUFtQkYsS0FBSyxDQUFDRyxTQUFOLEdBQW1CLElBQUdILEtBQUssQ0FBQ0csU0FBVSxFQUF0QyxHQUEwQyxFQUE3RCxDQUZKO0FBQUEsZUFLR0gsS0FBSyxDQUFDQyxLQUFOLGlCQUNDO0FBQ0UsZUFBUyxFQUNQLHNCQUNDRCxLQUFLLENBQUNFLFFBQU4sSUFBa0JGLEtBQUssQ0FBQ0ksTUFBeEIsR0FBaUMsT0FBakMsR0FBMkMsRUFENUMsS0FFQyxDQUFDSixLQUFLLENBQUNFLFFBQVAsR0FBa0IsT0FBbEIsR0FBNEIsRUFGN0IsS0FHQ0YsS0FBSyxDQUFDSyxJQUFOLEdBQWMsS0FBSUwsS0FBSyxDQUFDSyxJQUFLLEVBQTdCLEdBQWlDLEVBSGxDLENBRko7QUFBQSxnQkFRR0wsS0FBSyxDQUFDQztBQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixFQWtCR0QsS0FBSyxDQUFDRSxRQUFOLGlCQUNDO0FBQUcsZUFBUyxFQUFDLDhCQUFiO0FBQUEsZ0JBQTZDRixLQUFLLENBQUNFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0FBRWNILDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcImNvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5zY3NzXCI7XG5cbmZ1bmN0aW9uIFNlY3Rpb25IZWFkZXIocHJvcHMpIHtcbiAgLy8gUmVuZGVyIG5vdGhpbmcgaWYgbm8gdGl0bGUgb3Igc3VidGl0bGVcbiAgaWYgKCFwcm9wcy50aXRsZSAmJiAhcHJvcHMuc3VidGl0bGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlclxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgXCJTZWN0aW9uSGVhZGVyXCIgKyAocHJvcHMuY2xhc3NOYW1lID8gYCAke3Byb3BzLmNsYXNzTmFtZX1gIDogXCJcIilcbiAgICAgIH1cbiAgICA+XG4gICAgICB7cHJvcHMudGl0bGUgJiYgKFxuICAgICAgICA8aDFcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgXCJmb250LXdlaWdodC1ib2xkXCIgK1xuICAgICAgICAgICAgKHByb3BzLnN1YnRpdGxlICYmIHByb3BzLnNwYWNlZCA/IFwiIG1iLTRcIiA6IFwiXCIpICtcbiAgICAgICAgICAgICghcHJvcHMuc3VidGl0bGUgPyBcIiBtYi0wXCIgOiBcIlwiKSArXG4gICAgICAgICAgICAocHJvcHMuc2l6ZSA/IGAgaCR7cHJvcHMuc2l6ZX1gIDogXCJcIilcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgIDwvaDE+XG4gICAgICApfVxuXG4gICAgICB7cHJvcHMuc3VidGl0bGUgJiYgKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJTZWN0aW9uSGVhZGVyX19zdWJ0aXRsZSBtYi0wXCI+e3Byb3BzLnN1YnRpdGxlfTwvcD5cbiAgICAgICl9XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25IZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SectionHeader.js\n");

/***/ }),

/***/ "./src/components/SectionHeader.scss":
/*!*******************************************!*\
  !*** ./src/components/SectionHeader.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SectionHeader.scss\n");

/***/ }),

/***/ "./src/components/write.js":
/*!*********************************!*\
  !*** ./src/components/write.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/andrew/dev/notion-api-boilerplate/src/components/write.js\";\n\n\nfunction Subscribe({\n  setSubscribed\n}) {\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n\n  async function postToNotion(e) {\n    e.preventDefault();\n    setSubscribed(true);\n    await fetch('api/update-notion', {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json'\n      },\n      body: JSON.stringify({\n        email\n      })\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    className: \"form\",\n    onSubmit: postToNotion,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      className: \"nameInput focus:outline-none focus:ring-1 focus:ring-palette-primary\",\n      type: \"name\",\n      required: true,\n      placeholder: \"Your name here\",\n      onChange: e => setName(e.target.value)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      className: \"emailInput focus:outline-none focus:ring-1 focus:ring-palette-primary\",\n      type: \"email\",\n      required: true,\n      placeholder: \"Your email here\",\n      onChange: e => setEmail(e.target.value)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"submit\",\n      className: \"submit\",\n      children: \"Subscribe\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Write);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93cml0ZS5qcz9mY2Y5Il0sIm5hbWVzIjpbIlN1YnNjcmliZSIsInNldFN1YnNjcmliZWQiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJwb3N0VG9Ob3Rpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNldE5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIldyaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQjtBQUFFQztBQUFGLENBQW5CLEVBQXNDO0FBQ3BDLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDOztBQUVBLGlCQUFlQyxZQUFmLENBQTRCQyxDQUE1QixFQUErQjtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FOLGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0EsVUFBTU8sS0FBSyxDQUFDLG1CQUFELEVBQXNCO0FBQy9CQyxZQUFNLEVBQUUsTUFEdUI7QUFFL0JDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRnNCO0FBSy9CQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVYO0FBQUYsT0FBZjtBQUx5QixLQUF0QixDQUFYO0FBT0Q7O0FBRUQsc0JBQ0U7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFlBQVEsRUFBRUcsWUFGWjtBQUFBLDRCQUlBO0FBQ0ksZUFBUyxFQUFDLHNFQURkO0FBR0ksVUFBSSxFQUFDLE1BSFQ7QUFJSSxjQUFRLE1BSlo7QUFLSSxpQkFBVyxFQUFDLGdCQUxoQjtBQU1JLGNBQVEsRUFBR0MsQ0FBRCxJQUFPUSxPQUFPLENBQUNSLENBQUMsQ0FBQ1MsTUFBRixDQUFTQyxLQUFWO0FBTjVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKQSxlQWFFO0FBQ0UsZUFBUyxFQUFDLHVFQURaO0FBR0UsVUFBSSxFQUFDLE9BSFA7QUFJRSxjQUFRLE1BSlY7QUFLRSxpQkFBVyxFQUFDLGlCQUxkO0FBTUUsY0FBUSxFQUFHVixDQUFELElBQU9ILFFBQVEsQ0FBQ0csQ0FBQyxDQUFDUyxNQUFGLENBQVNDLEtBQVY7QUFOM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBcUJFO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFTLEVBQUMsUUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7QUFFY0Msb0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93cml0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN1YnNjcmliZSh7IHNldFN1YnNjcmliZWQgfSkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHBvc3RUb05vdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0U3Vic2NyaWJlZCh0cnVlKVxuICAgIGF3YWl0IGZldGNoKCdhcGkvdXBkYXRlLW5vdGlvbicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwgfSksXG4gICAgfSkgICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBjbGFzc05hbWU9XCJmb3JtXCJcbiAgICAgIG9uU3VibWl0PXtwb3N0VG9Ob3Rpb259XG4gICAgPlxuICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJuYW1lSW5wdXRcbiAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXBhbGV0dGUtcHJpbWFyeVwiXG4gICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWUgaGVyZVwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgIFxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT1cImVtYWlsSW5wdXRcbiAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXBhbGV0dGUtcHJpbWFyeVwiXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBoZXJlXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0XCJcbiAgICAgID5cbiAgICAgICAgU3Vic2NyaWJlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3JpdGVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/write.js\n");

/***/ }),

/***/ "./src/pages/write.js":
/*!****************************!*\
  !*** ./src/pages/write.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_write__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/write */ \"./src/components/write.js\");\n/* harmony import */ var components_HeroSection2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/HeroSection2 */ \"./src/components/HeroSection2.js\");\n\nvar _jsxFileName = \"/home/andrew/dev/notion-api-boilerplate/src/pages/write.js\";\n//import { useState } from 'react'\n //function IndexPage() { const [subscribed, setSubscribed] = useState(false)\n//import React from \"react\";\n\n\n\nfunction WritePage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_HeroSection2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    bg: \"white\",\n    textColor: \"dark\",\n    size: \"md\",\n    bgImage: \"\",\n    bgImageOpacity: 1,\n    title: \"Write\",\n    subtitle: \"Write to a Notion Database\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WritePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvd3JpdGUuanM/M2Q2OSJdLCJuYW1lcyI6WyJXcml0ZVBhZ2UiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0NBR0E7QUFFQTs7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN4QixzQkFDRSxxRUFBQywrREFBRDtBQUNFLE1BQUUsRUFBQyxPQURMO0FBRUUsYUFBUyxFQUFDLE1BRlo7QUFHRSxRQUFJLEVBQUMsSUFIUDtBQUlFLFdBQU8sRUFBQyxFQUpWO0FBS0Usa0JBQWMsRUFBRSxDQUxsQjtBQU1FLFNBQUssRUFBQyxPQU5SO0FBT0UsWUFBUSxFQUFDO0FBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0FBRWNELHdFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3dyaXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFdyaXRlIGZyb20gJ2NvbXBvbmVudHMvd3JpdGUnXG5cbi8vZnVuY3Rpb24gSW5kZXhQYWdlKCkgeyBjb25zdCBbc3Vic2NyaWJlZCwgc2V0U3Vic2NyaWJlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuLy9pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVyb1NlY3Rpb24yIGZyb20gXCJjb21wb25lbnRzL0hlcm9TZWN0aW9uMlwiO1xuXG5mdW5jdGlvbiBXcml0ZVBhZ2UocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8SGVyb1NlY3Rpb24yXG4gICAgICBiZz1cIndoaXRlXCJcbiAgICAgIHRleHRDb2xvcj1cImRhcmtcIlxuICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgIGJnSW1hZ2U9XCJcIlxuICAgICAgYmdJbWFnZU9wYWNpdHk9ezF9XG4gICAgICB0aXRsZT1cIldyaXRlXCJcbiAgICAgIHN1YnRpdGxlPVwiV3JpdGUgdG8gYSBOb3Rpb24gRGF0YWJhc2VcIlxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyaXRlUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/write.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Container\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI/ZGM2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Container\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });