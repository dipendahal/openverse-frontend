(window.webpackJsonp=window.webpackJsonp||[]).push([[69,15,72],{1203:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var components_LoadingIconvue_type_script_lang_js_={name:"LoadingIcon"},componentNormalizer=(__webpack_require__(1258),__webpack_require__(23));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_LoadingIconvue_type_script_lang_js_,(function(){var _h=this.$createElement;this._self._c;return this._m(0)}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"lds-ring"},[_c("div"),this._v(" "),_c("div"),this._v(" "),_c("div"),this._v(" "),_c("div")])}],!1,null,"7f2b418a",null).exports;var LoadingIcon=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"LoadingIcon",exportName:"default",description:"",tags:{}};var ImageGrid_LoadMoreButtonvue_type_script_lang_js_={name:"LoadMoreButton",components:{LoadingIcon:LoadingIcon},props:{isFetching:{type:Boolean,default:!0},isFinished:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},mediaType:{type:String,default:"image"}},computed:{finishedLabel:function finishedLabel(){var type=this.$t("browse-page.search-form.".concat(this.mediaType));return this.$t("browse-page.no-more",{type:type})},buttonLabel:function buttonLabel(){return this.isFinished?this.finishedLabel:this.$t("browse-page.load")}},methods:{onLoadMore:function onLoadMore(){this.$emit("onLoadMore")}}},LoadMoreButton_component=(__webpack_require__(1260),Object(componentNormalizer.a)(ImageGrid_LoadMoreButtonvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{directives:[{name:"show",rawName:"v-show",value:!_vm.isError,expression:"!isError"}],staticClass:"load-more pb-6"},[_c("button",{directives:[{name:"show",rawName:"v-show",value:!_vm.isFetching,expression:"!isFetching"}],staticClass:"button",attrs:{disabled:_vm.isFinished},on:{click:_vm.onLoadMore,keyup:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")?null:_vm.onLoadMore.apply(null,arguments)}}},[_c("span",[_vm._v(_vm._s(_vm.buttonLabel))])]),_vm._v(" "),_c("LoadingIcon",{directives:[{name:"show",rawName:"v-show",value:_vm.isFetching,expression:"isFetching"}]})],1)}),[],!1,null,"7ca4c0bc",null));const LoadMoreButton_vuedocgen_export_0=LoadMoreButton_component.exports;__webpack_exports__.default=LoadMoreButton_vuedocgen_export_0;LoadMoreButton_vuedocgen_export_0.__docgenInfo={displayName:"LoadMoreButton",exportName:"default",description:"",tags:{},props:[{name:"isFetching",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isFinished",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isError",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"mediaType",type:{name:"string"},defaultValue:{func:!1,value:"'image'"}}],events:[{name:"onLoadMore"}]}},1249:function(module,exports,__webpack_require__){var content=__webpack_require__(1259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(66).default)("1ce11c38",content,!0,{sourceMap:!1})},1250:function(module,exports,__webpack_require__){var content=__webpack_require__(1261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(66).default)("119ce72f",content,!0,{sourceMap:!1})},1251:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"propTypes",(function(){return propTypes}));var propTypes={mediaResults:{type:Object,required:!0},fetchState:{type:Object,required:!0},isFilterVisible:{type:Boolean,required:!1},searchTerm:{type:String,required:!0},supported:{type:Boolean,required:!1}}},1257:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useLoadMore}));__webpack_require__(114),__webpack_require__(12),__webpack_require__(54),__webpack_require__(7);var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(35),_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(75),__webpack_require__(2)),_constants_action_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(53),_constants_store_modules__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(74),useLoadMore=function useLoadMore(props){var store=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_6__.p)().store,searchParams=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_6__.a)((function(){return{page:props.mediaResults.page+1,shouldPersistMedia:!0}})),canLoadMore=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_6__.a)((function(){return""!==props.searchTerm.trim()})),onLoadMore=function(){var _ref=Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!canLoadMore){_context.next=3;break}return _context.next=3,store.dispatch("".concat(_constants_store_modules__WEBPACK_IMPORTED_MODULE_8__.e,"/").concat(_constants_action_types__WEBPACK_IMPORTED_MODULE_7__.f),searchParams.value);case 3:return _context.next=5,Promise.resolve();case 5:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}();return{canLoadMore:canLoadMore,onLoadMore:onLoadMore}}},1258:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1249)},1259:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(65)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".lds-ring[data-v-7f2b418a]{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div[data-v-7f2b418a]{display:block;position:absolute;width:51px;height:51px;margin:6px;border-radius:50%;-webkit-animation:lds-ring-data-v-7f2b418a 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-data-v-7f2b418a 1.2s cubic-bezier(.5,0,.5,1) infinite;border:6px solid transparent;border-top-color:#3b3b3b}.lds-ring div[data-v-7f2b418a]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-7f2b418a]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-7f2b418a]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-data-v-7f2b418a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes lds-ring-data-v-7f2b418a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1260:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1250)},1261:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(65)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".load-more[data-v-7ca4c0bc]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}button[data-v-7ca4c0bc]{color:#23282d;margin-top:2rem;border:1px solid rgba(35,40,45,.2);font-size:1.2em}button[data-v-7ca4c0bc]:hover{color:#fff}button[data-v-7ca4c0bc]:disabled{opacity:1}button[data-v-7ca4c0bc]:disabled:hover{color:#000}@media screen and (max-width:767px){button[data-v-7ca4c0bc]{padding:.5rem}button span[data-v-7ca4c0bc]{font-size:.9rem}}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1452:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),use_load_more=__webpack_require__(1257),AudioTrack=__webpack_require__(197),LoadMoreButton=__webpack_require__(1203),search_page_types=__webpack_require__(1251),search_audiovue_type_script_lang_js_=Object(runtime.b)({name:"AudioSearch",components:{AudioTrack:AudioTrack.a,LoadMoreButton:LoadMoreButton.default},props:search_page_types.propTypes,setup:function setup(props){var i18n=Object(runtime.p)().i18n,audioTrackSize=Object(runtime.a)((function(){return props.isFilterVisible?"m":"s"})),isError=Object(runtime.a)((function(){return!!props.fetchState.fetchingError})),errorHeader=Object(runtime.a)((function(){var type=i18n.t("browse-page.search-form.audio");return i18n.t("browse-page.fetching-error",{type:type})})),_useLoadMore=Object(use_load_more.a)(props);return{audioTrackSize:audioTrackSize,isError:isError,errorHeader:errorHeader,canLoadMore:_useLoadMore.canLoadMore,onLoadMore:_useLoadMore.onLoadMore}}}),componentNormalizer=__webpack_require__(23),component=Object(componentNormalizer.a)(search_audiovue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",[_vm.supported?[_vm._l(_vm.mediaResults.items,(function(audio){return _c("AudioTrack",{key:audio.id,staticClass:"px-6 mb-6",attrs:{audio:audio,size:_vm.audioTrackSize,layout:"row"}})})),_vm._v(" "),_vm.isError?[_c("h5",[_vm._v(_vm._s(_vm.errorHeader))]),_vm._v(" "),_c("p",[_vm._v(_vm._s(_vm.fetchState.fetchingError))])]:_vm._e(),_vm._v(" "),_vm.canLoadMore?_c("LoadMoreButton",{attrs:{"is-error":_vm.isError,"is-fetching":_vm.fetchState.isFetching,"is-finished":_vm.fetchState.isFinished,"media-type":"audio","data-testid":"load-more"},on:{onLoadMore:_vm.onLoadMore}}):_vm._e()]:_vm._e()],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{LoadMoreButton:__webpack_require__(1203).default}),__vuedocgen_export_0.__docgenInfo={displayName:"AudioSearch",exportName:"default",description:"",tags:{}}}}]);