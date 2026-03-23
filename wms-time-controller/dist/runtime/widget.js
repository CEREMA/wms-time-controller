System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/wms-time-controller/src/runtime/widget.tsx ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");


const { useState, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
function Widget(props) {
    var _a;
    const [jimuMapView, setJimuMapView] = useState(null);
    const [sliderIndex, setSliderIndex] = useState(0);
    const [status, setStatus] = useState({ msg: '', type: 'idle' });
    const { dateMin, dateMax } = (_a = props.config) !== null && _a !== void 0 ? _a : {};
    const buildMonthSteps = () => {
        if (!dateMin || !dateMax)
            return [];
        const steps = [];
        const start = new Date(dateMin);
        const end = new Date(dateMax);
        start.setDate(1);
        end.setDate(1);
        let index = 0;
        while (true) {
            const d = new Date(start.getFullYear(), start.getMonth() + index, 1);
            if (d > end)
                break;
            steps.push(d);
            index++;
        }
        return steps;
    };
    const steps = buildMonthSteps();
    const onActiveViewChange = (jmv) => {
        setJimuMapView(jmv);
    };
    const applyTime = (index) => {
        if (!jimuMapView || steps.length === 0)
            return;
        const map = jimuMapView.view.map;
        const wmsLayers = map.allLayers.filter((l) => l.type === 'wms').toArray();
        if (wmsLayers.length === 0) {
            setStatus({ msg: 'Aucune couche WMS trouvée sur la carte.', type: 'warning' });
            return;
        }
        wmsLayers.forEach((wmsLayer) => {
            wmsLayer.customLayerParameters = Object.assign(Object.assign({}, wmsLayer.customLayerParameters), { TIME: steps[index].toISOString() });
            wmsLayer.refresh();
        });
        setStatus({ msg: `${wmsLayers.length} couche(s) WMS mise(s) à jour : ${formatMonth(steps[index])}`, type: 'success' });
    };
    const onSliderChange = (e) => {
        const index = parseInt(e.target.value);
        setSliderIndex(index);
        applyTime(index);
    };
    const formatMonth = (date) => date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    useEffect(() => {
        if (jimuMapView && steps.length > 0)
            applyTime(sliderIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jimuMapView]);
    // Status color mapping
    const statusColors = {
        idle: 'transparent',
        success: 'var(--calcite-ui-success)',
        error: 'var(--calcite-ui-danger)',
        warning: 'var(--calcite-ui-warning)'
    };
    if (!dateMin || !dateMax) {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "jimu-widget", style: { padding: '16px' } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("calcite-notice", { open: true, color: "yellow", style: { width: '100%' } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { slot: "message" }, "Veuillez configurer les dates min/max dans les param\u00E8tres."))));
    }
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "jimu-widget", style: {
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            fontFamily: 'var(--calcite-sans-family, "Avenir Next", Avenir, sans-serif)',
            color: 'var(--calcite-ui-text-1)'
        } },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                background: 'var(--calcite-ui-foreground-2)',
                borderRadius: '4px',
                padding: '10px 14px',
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--calcite-ui-brand)',
                textAlign: 'center',
                textTransform: 'capitalize',
                letterSpacing: '0.02em'
            } }, steps.length > 0 ? formatMonth(steps[sliderIndex]) : '—'),
        steps.length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '6px' } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "range", min: 0, max: steps.length - 1, value: sliderIndex, onChange: onSliderChange, style: {
                    width: '100%',
                    cursor: 'pointer',
                    accentColor: 'var(--calcite-ui-brand)'
                } }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '11px',
                    color: 'var(--calcite-ui-text-3)'
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { textTransform: 'capitalize' } }, formatMonth(steps[0])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { textTransform: 'capitalize' } }, formatMonth(steps[steps.length - 1]))))),
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: onActiveViewChange })),
        status.msg && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                color: statusColors[status.type],
                padding: '6px 10px',
                background: 'var(--calcite-ui-foreground-2)',
                borderRadius: '4px',
                borderLeft: `3px solid ${statusColors[status.type]}`
            } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("calcite-icon", { icon: status.type === 'success' ? 'check-circle' : status.type === 'error' ? 'exclamation-mark-triangle' : 'information', scale: "s" }),
            status.msg)),
        !jimuMapView && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { fontSize: '11px', color: 'var(--calcite-ui-text-3)', textAlign: 'center' } }, "En attente de connexion \u00E0 la carte\u2026"))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy93bXMtdGltZS1jb250cm9sbGVyL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkc7QUFDYztBQUtwRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLDRDQUFLO0FBRXRCLFNBQVMsTUFBTSxDQUFDLEtBQStCOztJQUM1RCxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBYyxJQUFJLENBQUM7SUFDakUsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxRQUFRLENBQVMsQ0FBQyxDQUFDO0lBQ3pELE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFrRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBRWhJLE1BQU0sRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsV0FBSyxDQUFDLE1BQU0sbUNBQUksRUFBRTtJQUVoRCxNQUFNLGVBQWUsR0FBRyxHQUFXLEVBQUU7UUFD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O2dCQUNWLE9BQU8sRUFBRSxNQUFNO2dCQUNmLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixHQUFHLEVBQUUsS0FBSztnQkFDVixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsS0FBSyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQyxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsVUFBVSxFQUFFLGdDQUFnQztnQkFDNUMsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLFVBQVUsRUFBRSxhQUFhLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDckQ7WUFDQyw2RUFDRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQ3hILEtBQUssRUFBQyxHQUFHLEdBQ1Q7WUFDRCxNQUFNLENBQUMsR0FBRyxDQUNQLENBQ1A7UUFHQSxDQUFDLFdBQVcsSUFBSSxDQUNmLG9FQUFLLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLDBCQUEwQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsb0RBRWxGLENBQ1AsQ0FDRyxDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy93bXMtdGltZS1jb250cm9sbGVyL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnXG5cblxuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IFJlYWN0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXG4gIGNvbnN0IFtzbGlkZXJJbmRleCwgc2V0U2xpZGVySW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8eyBtc2c6IHN0cmluZzsgdHlwZTogJ2lkbGUnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJyB9Pih7IG1zZzogJycsIHR5cGU6ICdpZGxlJyB9KVxuXG4gIGNvbnN0IHtkYXRlTWluLCBkYXRlTWF4IH0gPSBwcm9wcy5jb25maWcgPz8ge31cblxuY29uc3QgYnVpbGRNb250aFN0ZXBzID0gKCk6IERhdGVbXSA9PiB7XG4gIGlmICghZGF0ZU1pbiB8fCAhZGF0ZU1heCkgcmV0dXJuIFtdXG4gIGNvbnN0IHN0ZXBzOiBEYXRlW10gPSBbXVxuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKGRhdGVNaW4pXG4gIGNvbnN0IGVuZCA9IG5ldyBEYXRlKGRhdGVNYXgpXG4gIHN0YXJ0LnNldERhdGUoMSlcbiAgZW5kLnNldERhdGUoMSlcbiAgbGV0IGluZGV4ID0gMFxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShzdGFydC5nZXRGdWxsWWVhcigpLCBzdGFydC5nZXRNb250aCgpICsgaW5kZXgsIDEpXG4gICAgaWYgKGQgPiBlbmQpIGJyZWFrXG4gICAgc3RlcHMucHVzaChkKVxuICAgIGluZGV4KytcbiAgfVxuICByZXR1cm4gc3RlcHNcbn1cblxuICBjb25zdCBzdGVwcyA9IGJ1aWxkTW9udGhTdGVwcygpXG5cbiAgY29uc3Qgb25BY3RpdmVWaWV3Q2hhbmdlID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBzZXRKaW11TWFwVmlldyhqbXYpXG4gIH1cblxuICBjb25zdCBhcHBseVRpbWUgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICBpZiAoIWppbXVNYXBWaWV3IHx8IHN0ZXBzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gIGNvbnN0IG1hcCA9IGppbXVNYXBWaWV3LnZpZXcubWFwXG5cbiAgY29uc3Qgd21zTGF5ZXJzID0gbWFwLmFsbExheWVycy5maWx0ZXIoXG4gICAgKGwpID0+IGwudHlwZSA9PT0gJ3dtcydcbiAgKS50b0FycmF5KCkgYXMgX19lc3JpLldNU0xheWVyW11cblxuICBpZiAod21zTGF5ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHNldFN0YXR1cyh7IG1zZzogJ0F1Y3VuZSBjb3VjaGUgV01TIHRyb3V2w6llIHN1ciBsYSBjYXJ0ZS4nLCB0eXBlOiAnd2FybmluZycgfSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIHdtc0xheWVycy5mb3JFYWNoKCh3bXNMYXllcikgPT4ge1xuICAgIHdtc0xheWVyLmN1c3RvbUxheWVyUGFyYW1ldGVycyA9IHtcbiAgICAgIC4uLndtc0xheWVyLmN1c3RvbUxheWVyUGFyYW1ldGVycyxcbiAgICAgIFRJTUU6IHN0ZXBzW2luZGV4XS50b0lTT1N0cmluZygpXG4gICAgfVxuICAgIHdtc0xheWVyLnJlZnJlc2goKVxuICB9KVxuXG4gIHNldFN0YXR1cyh7IG1zZzogYCR7d21zTGF5ZXJzLmxlbmd0aH0gY291Y2hlKHMpIFdNUyBtaXNlKHMpIMOgIGpvdXIgOiAke2Zvcm1hdE1vbnRoKHN0ZXBzW2luZGV4XSl9YCwgdHlwZTogJ3N1Y2Nlc3MnIH0pXG59XG5cbiAgY29uc3Qgb25TbGlkZXJDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldFNsaWRlckluZGV4KGluZGV4KVxuICAgIGFwcGx5VGltZShpbmRleClcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdE1vbnRoID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT5cbiAgICBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLCB7IG1vbnRoOiAnbG9uZycsIHllYXI6ICdudW1lcmljJyB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGppbXVNYXBWaWV3ICYmIHN0ZXBzLmxlbmd0aCA+IDApIGFwcGx5VGltZShzbGlkZXJJbmRleClcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbamltdU1hcFZpZXddKVxuXG4gIC8vIFN0YXR1cyBjb2xvciBtYXBwaW5nXG4gIGNvbnN0IHN0YXR1c0NvbG9ycyA9IHtcbiAgICBpZGxlOiAndHJhbnNwYXJlbnQnLFxuICAgIHN1Y2Nlc3M6ICd2YXIoLS1jYWxjaXRlLXVpLXN1Y2Nlc3MpJyxcbiAgICBlcnJvcjogJ3ZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKScsXG4gICAgd2FybmluZzogJ3ZhcigtLWNhbGNpdGUtdWktd2FybmluZyknXG4gIH1cblxuICBpZiAoIWRhdGVNaW4gfHwgIWRhdGVNYXgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcxNnB4JyB9fT5cbiAgICAgICAgPGNhbGNpdGUtbm90aWNlIG9wZW4gY29sb3I9XCJ5ZWxsb3dcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgIDxkaXYgc2xvdD1cIm1lc3NhZ2VcIj5WZXVpbGxleiBjb25maWd1cmVyIGxlcyBkYXRlcyBtaW4vbWF4IGRhbnMgbGVzIHBhcmFtw6h0cmVzLjwvZGl2PlxuICAgICAgICA8L2NhbGNpdGUtbm90aWNlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBwYWRkaW5nOiAnMTZweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGdhcDogJzEycHgnLFxuICAgICAgICBmb250RmFtaWx5OiAndmFyKC0tY2FsY2l0ZS1zYW5zLWZhbWlseSwgXCJBdmVuaXIgTmV4dFwiLCBBdmVuaXIsIHNhbnMtc2VyaWYpJyxcbiAgICAgICAgY29sb3I6ICd2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSknXG4gICAgICB9fVxuICAgID5cblxuICAgICAgey8qIEN1cnJlbnQgZGF0ZSBkaXNwbGF5ICovfVxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kOiAndmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgcGFkZGluZzogJzEwcHggMTRweCcsXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgY29sb3I6ICd2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKScsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDJlbSdcbiAgICAgIH19PlxuICAgICAgICB7c3RlcHMubGVuZ3RoID4gMCA/IGZvcm1hdE1vbnRoKHN0ZXBzW3NsaWRlckluZGV4XSkgOiAn4oCUJ31cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogU2xpZGVyICovfVxuICAgICAge3N0ZXBzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzZweCcgfX0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgbWF4PXtzdGVwcy5sZW5ndGggLSAxfVxuICAgICAgICAgICAgdmFsdWU9e3NsaWRlckluZGV4fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU2xpZGVyQ2hhbmdlfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgIGFjY2VudENvbG9yOiAndmFyKC0tY2FsY2l0ZS11aS1icmFuZCknXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTFweCcsXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWNhbGNpdGUtdWktdGV4dC0zKSdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fT57Zm9ybWF0TW9udGgoc3RlcHNbMF0pfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fT57Zm9ybWF0TW9udGgoc3RlcHNbc3RlcHMubGVuZ3RoIC0gMV0pfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogTWFwIHdpZGdldCBjb25uZWN0b3IgKGhpZGRlbikgKi99XG4gICAgICB7cHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmIHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17b25BY3RpdmVWaWV3Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAgey8qIFN0YXR1cyBtZXNzYWdlICovfVxuICAgICAge3N0YXR1cy5tc2cgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIGdhcDogJzZweCcsXG4gICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgICAgICBjb2xvcjogc3RhdHVzQ29sb3JzW3N0YXR1cy50eXBlXSxcbiAgICAgICAgICBwYWRkaW5nOiAnNnB4IDEwcHgnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiknLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgYm9yZGVyTGVmdDogYDNweCBzb2xpZCAke3N0YXR1c0NvbG9yc1tzdGF0dXMudHlwZV19YFxuICAgICAgICB9fT5cbiAgICAgICAgICA8Y2FsY2l0ZS1pY29uXG4gICAgICAgICAgICBpY29uPXtzdGF0dXMudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJ2NoZWNrLWNpcmNsZScgOiBzdGF0dXMudHlwZSA9PT0gJ2Vycm9yJyA/ICdleGNsYW1hdGlvbi1tYXJrLXRyaWFuZ2xlJyA6ICdpbmZvcm1hdGlvbid9XG4gICAgICAgICAgICBzY2FsZT1cInNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAge3N0YXR1cy5tc2d9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIE5vIG1hcCB3YXJuaW5nICovfVxuICAgICAgeyFqaW11TWFwVmlldyAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcxMXB4JywgY29sb3I6ICd2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyknLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgIEVuIGF0dGVudGUgZGUgY29ubmV4aW9uIMOgIGxhIGNhcnRl4oCmXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==