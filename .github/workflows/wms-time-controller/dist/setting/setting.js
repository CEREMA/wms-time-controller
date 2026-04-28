System.register(["jimu-core","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/wms-time-controller/src/setting/setting.tsx ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");


const { useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const MONTHS = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];
const YEARS = Array.from({ length: 20 }, (_, i) => 2015 + i); // 2015 → 2034
// Convertit "YYYY-MM" → { year, month } (month = 0-indexed)
const parseYearMonth = (val) => {
    if (!val)
        return { year: new Date().getFullYear(), month: 0 };
    const [y, m] = val.split('-');
    return { year: parseInt(y), month: parseInt(m) - 1 };
};
// Convertit year + month (0-indexed) → "YYYY-MM"
const toYearMonth = (year, month) => `${year}-${String(month + 1).padStart(2, '0')}`;
const selectStyle = {
    padding: '5px 6px',
    borderRadius: '4px',
    border: '1px solid var(--calcite-ui-border-1)',
    fontSize: '13px',
    background: 'var(--calcite-ui-foreground-1)',
    color: 'var(--calcite-ui-text-1)',
    cursor: 'pointer'
};
function MonthYearPicker({ label, value, onChange }) {
    const { year, month } = parseYearMonth(value);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { width: '100%' } },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: '6px', fontSize: '13px', color: 'var(--calcite-ui-text-2)' } }, label),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', gap: '6px' } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { value: month, onChange: e => onChange(toYearMonth(year, parseInt(e.target.value))), style: Object.assign(Object.assign({}, selectStyle), { flex: 2 }) }, MONTHS.map((m, i) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: i, value: i }, m)))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { value: year, onChange: e => onChange(toYearMonth(parseInt(e.target.value), month)), style: Object.assign(Object.assign({}, selectStyle), { flex: 1 }) }, YEARS.map(y => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: y, value: y }, y)))))));
}
function Setting(props) {
    var _a, _b, _c, _d;
    const debounceRef = useRef(null);
    const onMapWidgetSelected = (useMapWidgetIds) => {
        props.onSettingChange({ id: props.id, useMapWidgetIds });
    };
    const onDateChange = (key, value) => {
        if (debounceRef.current)
            clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            props.onSettingChange({
                id: props.id,
                config: props.config.set(key, value)
            });
        }, 200);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting p-2" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Carte" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { width: '100%' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: '6px', fontSize: '13px', color: 'var(--calcite-ui-text-2)' } }, "Carte"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: props.useMapWidgetIds, onSelect: onMapWidgetSelected })))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Plage de dates" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(MonthYearPicker, { label: "Date minimum", value: (_b = (_a = props.config) === null || _a === void 0 ? void 0 : _a.dateMin) !== null && _b !== void 0 ? _b : '', onChange: val => onDateChange('dateMin', val) })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(MonthYearPicker, { label: "Date maximum", value: (_d = (_c = props.config) === null || _c === void 0 ? void 0 : _c.dateMax) !== null && _d !== void 0 ? _d : '', onChange: val => onDateChange('dateMax', val) })))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy93bXMtdGltZS1jb250cm9sbGVyL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05sQjtBQUVrRTtBQUduRyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsNENBQUs7QUFFeEIsTUFBTSxNQUFNLEdBQUc7SUFDYixTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU07SUFDcEQsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO0NBQ2xFO0FBRUQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBQyxjQUFjO0FBRTNFLDREQUE0RDtBQUM1RCxNQUFNLGNBQWMsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO0lBQ3JDLElBQUksQ0FBQyxHQUFHO1FB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QUFDLGVBQWUsSUFDZCxLQUFLLEVBQUMsY0FBYyxFQUNwQixLQUFLLEVBQUUsaUJBQUssQ0FBQyxNQUFNLDBDQUFFLE9BQU8sbUNBQUksRUFBRSxFQUNsQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUM3QyxDQUNTLENBQ0UsQ0FFYixDQUNQO0FBQ0gsQ0FBQztBQUNPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy93bXMtdGltZS1jb250cm9sbGVyL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbmltcG9ydCB7IE1hcFdpZGdldFNlbGVjdG9yLCBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZydcblxuY29uc3QgeyB1c2VSZWYgfSA9IFJlYWN0XG5cbmNvbnN0IE1PTlRIUyA9IFtcbiAgJ0phbnZpZXInLCAnRsOpdnJpZXInLCAnTWFycycsICdBdnJpbCcsICdNYWknLCAnSnVpbicsXG4gICdKdWlsbGV0JywgJ0Fvw7t0JywgJ1NlcHRlbWJyZScsICdPY3RvYnJlJywgJ05vdmVtYnJlJywgJ0TDqWNlbWJyZSdcbl1cblxuY29uc3QgWUVBUlMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyMCB9LCAoXywgaSkgPT4gMjAxNSArIGkpIC8vIDIwMTUg4oaSIDIwMzRcblxuLy8gQ29udmVydGl0IFwiWVlZWS1NTVwiIOKGkiB7IHllYXIsIG1vbnRoIH0gKG1vbnRoID0gMC1pbmRleGVkKVxuY29uc3QgcGFyc2VZZWFyTW9udGggPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgaWYgKCF2YWwpIHJldHVybiB7IHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgbW9udGg6IDAgfVxuICBjb25zdCBbeSwgbV0gPSB2YWwuc3BsaXQoJy0nKVxuICByZXR1cm4geyB5ZWFyOiBwYXJzZUludCh5KSwgbW9udGg6IHBhcnNlSW50KG0pIC0gMSB9XG59XG5cbi8vIENvbnZlcnRpdCB5ZWFyICsgbW9udGggKDAtaW5kZXhlZCkg4oaSIFwiWVlZWS1NTVwiXG5jb25zdCB0b1llYXJNb250aCA9ICh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBzdHJpbmcgPT5cbiAgYCR7eWVhcn0tJHtTdHJpbmcobW9udGggKyAxKS5wYWRTdGFydCgyLCAnMCcpfWBcblxuY29uc3Qgc2VsZWN0U3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gIHBhZGRpbmc6ICc1cHggNnB4JyxcbiAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpJyxcbiAgZm9udFNpemU6ICcxM3B4JyxcbiAgYmFja2dyb3VuZDogJ3ZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKScsXG4gIGNvbG9yOiAndmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpJyxcbiAgY3Vyc29yOiAncG9pbnRlcidcbn1cblxuaW50ZXJmYWNlIE1vbnRoWWVhclBpY2tlclByb3BzIHtcbiAgbGFiZWw6IHN0cmluZ1xuICB2YWx1ZTogc3RyaW5nXG4gIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZnVuY3Rpb24gTW9udGhZZWFyUGlja2VyKHsgbGFiZWwsIHZhbHVlLCBvbkNoYW5nZSB9OiBNb250aFllYXJQaWNrZXJQcm9wcykge1xuICBjb25zdCB7IHllYXIsIG1vbnRoIH0gPSBwYXJzZVllYXJNb250aCh2YWx1ZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNnB4JywgZm9udFNpemU6ICcxM3B4JywgY29sb3I6ICd2YXIoLS1jYWxjaXRlLXVpLXRleHQtMiknIH19PlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2cHgnIH19PlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgdmFsdWU9e21vbnRofVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKHRvWWVhck1vbnRoKHllYXIsIHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSkpfVxuICAgICAgICAgIHN0eWxlPXt7IC4uLnNlbGVjdFN0eWxlLCBmbGV4OiAyIH19XG4gICAgICAgID5cbiAgICAgICAgICB7TU9OVEhTLm1hcCgobSwgaSkgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpfT57bX08L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICB2YWx1ZT17eWVhcn1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZSh0b1llYXJNb250aChwYXJzZUludChlLnRhcmdldC52YWx1ZSksIG1vbnRoKSl9XG4gICAgICAgICAgc3R5bGU9e3sgLi4uc2VsZWN0U3R5bGUsIGZsZXg6IDEgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtZRUFSUy5tYXAoeSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17eX0gdmFsdWU9e3l9Pnt5fTwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmcocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgZGVib3VuY2VSZWYgPSB1c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4+KG51bGwpXG5cbiAgY29uc3Qgb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHByb3BzLmlkLCB1c2VNYXBXaWRnZXRJZHMgfSlcbiAgfVxuXG4gIGNvbnN0IG9uRGF0ZUNoYW5nZSA9IChrZXk6ICdkYXRlTWluJyB8ICdkYXRlTWF4JywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmIChkZWJvdW5jZVJlZi5jdXJyZW50KSBjbGVhclRpbWVvdXQoZGVib3VuY2VSZWYuY3VycmVudClcbiAgICBkZWJvdW5jZVJlZi5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgICBpZDogcHJvcHMuaWQsXG4gICAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldChrZXksIHZhbHVlKVxuICAgICAgfSlcbiAgICB9LCAyMDApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmcgcC0yXCI+XG5cbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIkNhcnRlXCI+XG4gICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNnB4JywgZm9udFNpemU6ICcxM3B4JywgY29sb3I6ICd2YXIoLS1jYWxjaXRlLXVpLXRleHQtMiknIH19PlxuICAgICAgICAgICAgICBDYXJ0ZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXtwcm9wcy51c2VNYXBXaWRnZXRJZHN9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXtvbk1hcFdpZGdldFNlbGVjdGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiUGxhZ2UgZGUgZGF0ZXNcIj5cbiAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgPE1vbnRoWWVhclBpY2tlclxuICAgICAgICAgICAgbGFiZWw9XCJEYXRlIG1pbmltdW1cIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbmZpZz8uZGF0ZU1pbiA/PyAnJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gb25EYXRlQ2hhbmdlKCdkYXRlTWluJywgdmFsKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgIDxNb250aFllYXJQaWNrZXJcbiAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBtYXhpbXVtXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jb25maWc/LmRhdGVNYXggPz8gJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsID0+IG9uRGF0ZUNoYW5nZSgnZGF0ZU1heCcsIHZhbCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuICAgIDwvZGl2PlxuICApXG59XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==