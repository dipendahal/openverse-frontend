(window.webpackJsonp=window.webpackJsonp||[]).push([[71,72],{1251:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"propTypes",(function(){return propTypes}));var propTypes={mediaResults:{type:Object,required:!0},fetchState:{type:Object,required:!0},isFilterVisible:{type:Boolean,required:!1},searchTerm:{type:String,required:!0},supported:{type:Boolean,required:!1}}},1257:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useLoadMore}));__webpack_require__(114),__webpack_require__(12),__webpack_require__(54),__webpack_require__(7);var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(35),_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(75),__webpack_require__(2)),_constants_action_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(53),_constants_store_modules__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(74),useLoadMore=function useLoadMore(props){var store=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_6__.p)().store,searchParams=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_6__.a)((function(){return{page:props.mediaResults.page+1,shouldPersistMedia:!0}})),canLoadMore=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_6__.a)((function(){return""!==props.searchTerm.trim()})),onLoadMore=function(){var _ref=Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!canLoadMore){_context.next=3;break}return _context.next=3,store.dispatch("".concat(_constants_store_modules__WEBPACK_IMPORTED_MODULE_8__.e,"/").concat(_constants_action_types__WEBPACK_IMPORTED_MODULE_7__.f),searchParams.value);case 3:return _context.next=5,Promise.resolve();case 5:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}();return{canLoadMore:canLoadMore,onLoadMore:onLoadMore}}},1451:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var search_page_types=__webpack_require__(1251),runtime=__webpack_require__(2),use_load_more=__webpack_require__(1257),pages_searchvue_type_script_lang_js_=Object(runtime.b)({name:"SearchIndex",props:search_page_types.propTypes,setup:function setup(props){var _useLoadMore=Object(use_load_more.a)(props);return{canLoadMore:_useLoadMore.canLoadMore,onLoadMore:_useLoadMore.onLoadMore}}}),componentNormalizer=__webpack_require__(23),component=Object(componentNormalizer.a)(pages_searchvue_type_script_lang_js_,(function(){var _h=this.$createElement;return(this._self._c||_h)("ImageGrid",{attrs:{images:this.mediaResults.items,"can-load-more":this.canLoadMore,"fetch-state":this.fetchState},on:{"load-more":this.onLoadMore}})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{ImageGrid:__webpack_require__(1207).default}),__vuedocgen_export_0.__docgenInfo={displayName:"SearchIndex",exportName:"default",description:"",tags:{}}}}]);