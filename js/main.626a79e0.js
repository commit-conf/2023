(self["webpackChunkcom_commit_conf_2023"] = self["webpackChunkcom_commit_conf_2023"] || []).push([["main"],{

/***/ "./src/_js/main.ts":
/*!*************************!*\
  !*** ./src/_js/main.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _youtube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube */ "./src/_js/youtube.ts");
/* harmony import */ var _youtube__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youtube__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip */ "./src/_js/tooltip.ts");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _random_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random-entries */ "./src/_js/random-entries.ts");
/* harmony import */ var _random_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_random_entries__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/_js/random-entries.ts":
/*!***********************************!*\
  !*** ./src/_js/random-entries.ts ***!
  \***********************************/
/***/ (function() {

var randomEntries = document.querySelectorAll(".random-entry"); // get random item in randomEntries

var randomIndex = Math.floor(Math.random() * randomEntries.length);
Array.prototype.forEach.call(randomEntries, function (item, index) {
  if (index === randomIndex) {
    item.classList.remove("hide");
  } else {
    item.classList.add("hide");
  }
});

/***/ }),

/***/ "./src/_js/tooltip.ts":
/*!****************************!*\
  !*** ./src/_js/tooltip.ts ***!
  \****************************/
/***/ (function() {

var hamburger = document.querySelector(".topbar-hamburger");
var topbarContent = document.querySelector(".topbar-dropdown-content");
var topbar = document.querySelector(".topbar-dropdown");

if (topbar && hamburger) {
  topbar.classList.remove("topbar-dropdown");
  topbar.classList.add("topbar-dropdown-js");
  hamburger.addEventListener("click", function (e) {
    topbar.classList.toggle("active");
    e.stopPropagation();
  });
  window.addEventListener("click", function () {
    topbar.classList.remove("active");
  });
}

/***/ }),

/***/ "./src/_js/youtube.ts":
/*!****************************!*\
  !*** ./src/_js/youtube.ts ***!
  \****************************/
/***/ (function() {

var youtubeVideos = document.querySelectorAll(".video-link");
Array.prototype.forEach.call(youtubeVideos, function (item) {
  item.addEventListener("click", function (e) {
    try {
      var link = e.currentTarget;

      if (link && !link.classList.contains("playing")) {
        var dataset = link === null || link === void 0 ? void 0 : link.dataset;
        var id = dataset.id;
        var title = dataset.title;
        var iframe = "<iframe title=\"".concat(title, "\" class=\"video-iframe\"  src=\"https://www.youtube-nocookie.com/embed/").concat(id, "?autoplay=1&modestbranding=1&rel=0&wmode=transparent\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
        link.classList.add("playing");
        link.innerHTML = iframe;
      }

      e.preventDefault();
    } catch (error) {}
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/_js/main.ts"));
/******/ }
]);
//# sourceMappingURL=main.626a79e0.js.map