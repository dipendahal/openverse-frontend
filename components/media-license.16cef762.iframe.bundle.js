(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1201:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var license=__webpack_require__(1243),MediaInfo_MediaLicensevue_type_script_lang_js_={name:"MediaLicense",props:{fullLicenseName:String,license:String,licenseUrl:String},computed:{isLicense:function isLicense(){return Object(license.b)(this.$props.license)},headerText:function headerText(){var licenseOrTool=this.isLicense?"license":"tool";return this.$t("media-details.reuse.".concat(licenseOrTool,"-header"))}}},componentNormalizer=__webpack_require__(23);const __vuedocgen_export_0=Object(componentNormalizer.a)(MediaInfo_MediaLicensevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"media-attribution"},[_c("h5",{staticClass:"b-header mb-6"},[_vm._v("\n    "+_vm._s(_vm.headerText)+"\n  ")]),_vm._v(" "),_vm.isLicense?[_c("i18n",{staticClass:"block",attrs:{path:"media-details.reuse.attribution.main",tag:"span"},scopedSlots:_vm._u([{key:"link",fn:function(){return[_c("a",{staticClass:"uppercase",attrs:{href:_vm.licenseUrl,target:"_blank",rel:"noopener"}},[_vm._v("\n          "+_vm._s(_vm.fullLicenseName)+"\n        ")])]},proxy:!0}],null,!1,2513310247)}),_vm._v(" "),_c("LicenseElements",{attrs:{license:_vm.license}}),_vm._v(" "),_vm.isLicense?_vm._e():_c("i18n",{staticClass:"caption font-semibold",attrs:{path:"media-details.reuse.license.content",tag:"span"},scopedSlots:_vm._u([{key:"link",fn:function(){return[_c("a",{attrs:{"aria-label":_vm.$t("media-details.aria.attribution.license"),href:_vm.licenseUrl,target:"_blank",rel:"noopener"}},[_vm._v("\n          "+_vm._s(_vm.$t("media-details.reuse.license.link"))+"\n        ")])]},proxy:!0}],null,!1,1828197478)})]:[_c("LicenseElements",{attrs:{license:_vm.license}}),_vm._v(" "),_c("i18n",{staticClass:"caption font-semibold",attrs:{path:"media-details.reuse.tool.content",tag:"span"},scopedSlots:_vm._u([{key:"link",fn:function(){return[_c("a",{attrs:{"aria-label":_vm.$t("media-details.aria.attribution.tool"),href:_vm.licenseUrl,target:"_blank",rel:"noopener"}},[_vm._v("\n          "+_vm._s(_vm.$t("media-details.reuse.tool.link"))+"\n        ")])]},proxy:!0}])})]],2)}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"MediaLicense",exportName:"default",description:"",tags:{},props:[{name:"fullLicenseName",type:{name:"string"}},{name:"license",type:{name:"string"}},{name:"licenseUrl",type:{name:"string"}}]}},1243:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getFullLicenseName})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isLicense})),__webpack_require__.d(__webpack_exports__,"c",(function(){return isPublicDomain}));__webpack_require__(12),__webpack_require__(36);var getFullLicenseName=function getFullLicenseName(license,license_version){if(!license)return"";var licenseUpper=license.toUpperCase();return"CC0"===licenseUpper?"".concat(licenseUpper," ").concat(license_version):"CC ".concat(licenseUpper," ").concat(license_version)},isLicense=function isLicense(){var licenseOrMark=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!["pdm","cc0"].includes(licenseOrMark.toLowerCase())},isPublicDomain=function isPublicDomain(){var licenseOrMark=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return["pdm","cc0"].includes(licenseOrMark.toLowerCase())}}}]);