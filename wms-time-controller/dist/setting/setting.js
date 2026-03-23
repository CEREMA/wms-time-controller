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


function Setting(props) {
    var _a, _b, _c, _d;
    const onMapWidgetSelected = (useMapWidgetIds) => {
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds
        });
    };
    const onDateMinChange = (e) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('dateMin', e.target.value)
        });
    };
    const onDateMaxChange = (e) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('dateMax', e.target.value)
        });
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting p-2" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Carte" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Carte" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: props.useMapWidgetIds, onSelect: onMapWidgetSelected }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Plage de dates" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Date minimum" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "month", value: (_b = (_a = props.config) === null || _a === void 0 ? void 0 : _a.dateMin) !== null && _b !== void 0 ? _b : '', onChange: onDateMinChange, style: {
                        width: '100%',
                        padding: '6px 8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '13px'
                    } })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Date maximum" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "month", value: (_d = (_c = props.config) === null || _c === void 0 ? void 0 : _c.dateMax) !== null && _d !== void 0 ? _d : '', onChange: onDateMaxChange, style: {
                        width: '100%',
                        padding: '6px 8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '13px'
                    } })))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy93bXMtdGltZS1jb250cm9sbGVyL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05sQjtBQUVrRTtBQUdwRixTQUFTLE9BQU8sQ0FBRSxLQUFzQzs7SUFDckUsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLGVBQXlCLEVBQUUsRUFBRTtRQUN4RCxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQ3BCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNaLGVBQWU7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQXNDLEVBQUUsRUFBRTtRQUNqRSxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQ3BCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNaLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDcEQsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQXNDLEVBQUUsRUFBRTtRQUNqRSxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQ3BCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNaLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDcEQsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLENBQ0wsb0VBQUssU0FBUyxFQUFDLG9CQUFvQjtRQUVqQywyREFBQywrRUFBYyxJQUFDLEtBQUssRUFBQyxPQUFPO1lBQzNCLDJEQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFDLE9BQU87Z0JBQ3ZCLDJEQUFDLGtGQUFpQixJQUNoQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWUsRUFDdEMsUUFBUSxFQUFFLG1CQUFtQixHQUM3QixDQUNTLENBQ0U7UUFFakIsMkRBQUMsK0VBQWMsSUFBQyxLQUFLLEVBQUMsZ0JBQWdCO1lBQ3BDLDJEQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFDLGNBQWM7Z0JBQzlCLHNFQUNFLElBQUksRUFBQyxPQUFPLEVBQ1osS0FBSyxFQUFFLGlCQUFLLENBQUMsTUFBTSwwQ0FBRSxPQUFPLG1DQUFJLEVBQUUsRUFDbEMsUUFBUSxFQUFFLGVBQWUsRUFDekIsS0FBSyxFQUFFO3dCQUNMLEtBQUssRUFBRSxNQUFNO3dCQUNiLE9BQU8sRUFBRSxTQUFTO3dCQUNsQixZQUFZLEVBQUUsS0FBSzt3QkFDbkIsTUFBTSxFQUFFLGdCQUFnQjt3QkFDeEIsUUFBUSxFQUFFLE1BQU07cUJBQ2pCLEdBQ0QsQ0FDUztZQUNiLDJEQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFDLGNBQWM7Z0JBQzlCLHNFQUNFLElBQUksRUFBQyxPQUFPLEVBQ1osS0FBSyxFQUFFLGlCQUFLLENBQUMsTUFBTSwwQ0FBRSxPQUFPLG1DQUFJLEVBQUUsRUFDbEMsUUFBUSxFQUFFLGVBQWUsRUFDekIsS0FBSyxFQUFFO3dCQUNMLEtBQUssRUFBRSxNQUFNO3dCQUNiLE9BQU8sRUFBRSxTQUFTO3dCQUNsQixZQUFZLEVBQUUsS0FBSzt3QkFDbkIsTUFBTSxFQUFFLGdCQUFnQjt3QkFDeEIsUUFBUSxFQUFFLE1BQU07cUJBQ2pCLEdBQ0QsQ0FDUyxDQUNFLENBRWIsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvd21zLXRpbWUtY29udHJvbGxlci9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgdHlwZSB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXG5pbXBvcnQgeyBNYXBXaWRnZXRTZWxlY3RvciwgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmcgKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICB1c2VNYXBXaWRnZXRJZHNcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25EYXRlTWluQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgnZGF0ZU1pbicsIGUudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBvbkRhdGVNYXhDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdkYXRlTWF4JywgZS50YXJnZXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZyBwLTJcIj5cblxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiQ2FydGVcIj5cbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJDYXJ0ZVwiPlxuICAgICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvclxuICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXtwcm9wcy51c2VNYXBXaWRnZXRJZHN9XG4gICAgICAgICAgICBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJQbGFnZSBkZSBkYXRlc1wiPlxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIkRhdGUgbWluaW11bVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm1vbnRoXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jb25maWc/LmRhdGVNaW4gPz8gJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25EYXRlTWluQ2hhbmdlfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCA4cHgnLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCdcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIkRhdGUgbWF4aW11bVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm1vbnRoXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jb25maWc/LmRhdGVNYXggPz8gJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25EYXRlTWF4Q2hhbmdlfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCA4cHgnLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCdcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9