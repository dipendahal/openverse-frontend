(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1206:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(36);var Filters_FilterTagvue_type_script_lang_js_={name:"FilterTag",props:{code:String,filterType:String,label:String},computed:{needsTranslation:function needsTranslation(){return!["audioProviders","imageProviders"].includes(this.$props.filterType)},filterLabel:function filterLabel(){return this.needsTranslation?this.$t(this.$props.label):this.$props.label}},methods:{onClick:function onClick(){this.$emit("filterChanged",{code:this.$props.code,filterType:this.$props.filterType})}}},componentNormalizer=__webpack_require__(23);const __vuedocgen_export_0=Object(componentNormalizer.a)(Filters_FilterTagvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("button",{staticClass:"button tiny tag",attrs:{"aria-label":_vm.$t("filters.aria.remove-filter",{label:_vm.filterLabel})},on:{click:_vm.onClick}},[_c("span",[_vm._v(_vm._s(_vm.filterLabel))]),_vm._v(" "),_vm._m(0)])}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("span",{staticClass:"close ms-2 p-2"},[_c("i",{staticClass:"icon cross"})])}],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"FilterTag",exportName:"default",description:"",tags:{},props:[{name:"code",type:{name:"string"}},{name:"filterType",type:{name:"string"}},{name:"label",type:{name:"string"}}],events:[{name:"filterChanged",type:{names:["undefined"]}}]}}}]);