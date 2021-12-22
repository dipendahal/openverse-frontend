(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1205:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var license=__webpack_require__(1243),Filters_LicenseExplanationTooltipvue_type_script_lang_js_={name:"LicenseExplanationTooltip",props:{license:{type:String,required:!0},iconDomNode:{required:!0}},data:function data(){return{tooltipBeforeBorderWidth:13,tooltipBeforeTop:10}},computed:{isLicense:function isLicense(){return Object(license.b)(this.$props.license)},inlineStyle:function inlineStyle(){var helpIconBounding=this.iconDomNode.getBoundingClientRect(),helpIconLeft=helpIconBounding.x,helpIconTop=helpIconBounding.y,helpIconWidth=helpIconBounding.width,helpIconHeight=helpIconBounding.height,helpIconTopRelative=this.iconDomNode.offsetTop,helpIconWidthNoPadding=this.iconDomNode.width;return{"--desktop-tooltip-top":"".concat(Math.round(helpIconTop-this.tooltipBeforeTop-this.tooltipBeforeBorderWidth/2),"px"),"--desktop-tooltip-left":"".concat(Math.round(helpIconLeft+helpIconWidth)+this.tooltipBeforeBorderWidth,"px"),"--touch-tooltip-top":"".concat(Math.round(helpIconTopRelative+helpIconHeight+this.tooltipBeforeTop),"px"),"--touch-tooltip-right":"calc(1rem - ".concat(Math.round(helpIconWidth/2-(helpIconWidth-helpIconWidthNoPadding)),"px)"),"--tooltip-before-top":"".concat(this.tooltipBeforeTop,"px"),"--tooltip-before-border-width":"".concat(this.tooltipBeforeBorderWidth,"px")}}},methods:{getLicenseDeedLink:function getLicenseDeedLink(licenseTerm){return"cc0"===licenseTerm?"https://creativecommons.org/publicdomain/zero/1.0/?ref=openverse&atype=rich":"pdm"===licenseTerm?"https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse&atype=rich":"https://creativecommons.org/licenses/".concat(licenseTerm,"/4.0/?ref=openverse&atype=rich")}}},componentNormalizer=(__webpack_require__(1255),__webpack_require__(23));const __vuedocgen_export_0=Object(componentNormalizer.a)(Filters_LicenseExplanationTooltipvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{ref:"tooltip",staticClass:"license-explanation-tooltip p-2",style:_vm.inlineStyle},[_vm.isLicense?_vm._e():_c("h5",{staticClass:"b-header mb-4"},[_vm._v("\n    "+_vm._s(_vm.isLicense?_vm.$t("browse-page.license-description.title"):"")+"\n    "+_vm._s(_vm.license.toUpperCase())+"\n  ")]),_vm._v(" "),_c("LicenseElements",{staticClass:"tooltip",attrs:{license:_vm.license}}),_vm._v(" "),_vm.isLicense?_c("i18n",{staticClass:"caption float-right m-2",attrs:{path:"filters.license-explanation.license",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function(){return[_c("a",{attrs:{target:"_blank",href:""+_vm.getLicenseDeedLink(_vm.license)}},[_vm._v(_vm._s(_vm.$t("filters.license-explanation.link")))])]},proxy:!0}])}):_c("i18n",{staticClass:"caption float-right m-2",attrs:{path:"filters.license-explanation.tool",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function(){return[_c("a",{attrs:{target:"_blank",href:""+_vm.getLicenseDeedLink(_vm.license)}},[_vm._v(_vm._s(_vm.$t("filters.license-explanation.link")))])]},proxy:!0}],null,!1,1452733139)})],1)}),[],!1,null,"67ececbc",null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"LicenseExplanationTooltip",exportName:"default",description:"",tags:{},props:[{name:"license",type:{name:"string"},required:!0},{name:"iconDomNode",required:!0}]}},1243:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getFullLicenseName})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isLicense})),__webpack_require__.d(__webpack_exports__,"c",(function(){return isPublicDomain}));__webpack_require__(12),__webpack_require__(36);var getFullLicenseName=function getFullLicenseName(license,license_version){if(!license)return"";var licenseUpper=license.toUpperCase();return"CC0"===licenseUpper?"".concat(licenseUpper," ").concat(license_version):"CC ".concat(licenseUpper," ").concat(license_version)},isLicense=function isLicense(){var licenseOrMark=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!["pdm","cc0"].includes(licenseOrMark.toLowerCase())},isPublicDomain=function isPublicDomain(){var licenseOrMark=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return["pdm","cc0"].includes(licenseOrMark.toLowerCase())}},1248:function(module,exports,__webpack_require__){var content=__webpack_require__(1256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(66).default)("64ec5174",content,!0,{sourceMap:!1})},1255:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1248)},1256:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(65)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,'.license-explanation-tooltip[data-v-67ececbc]{position:absolute;background:#fff;border:2px solid #d8d8d8;z-index:400;width:20rem;-webkit-box-shadow:10px 10px 10px -10px rgba(0,0,0,.25);box-shadow:10px 10px 10px -10px rgba(0,0,0,.25)}@media (min-width: 1024px){.license-explanation-tooltip[data-v-67ececbc]{top:var(--desktop-tooltip-top);left:var(--desktop-tooltip-left)}}@media screen and (max-width:1023px){.license-explanation-tooltip[data-v-67ececbc]{top:var(--touch-tooltip-top);right:var(--touch-tooltip-right)}}.license-explanation-tooltip[data-v-67ececbc]:after,.license-explanation-tooltip[data-v-67ececbc]:before{border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}@media (min-width: 1024px){.license-explanation-tooltip[data-v-67ececbc]:after,.license-explanation-tooltip[data-v-67ececbc]:before{right:100%;top:var(--tooltip-before-top)}}@media screen and (max-width:1023px){.license-explanation-tooltip[data-v-67ececbc]:after,.license-explanation-tooltip[data-v-67ececbc]:before{bottom:100%;left:10%}}.license-explanation-tooltip[data-v-67ececbc]:after{border-color:hsla(0,0%,100%,0);border-width:10px}@media (min-width: 1024px){.license-explanation-tooltip[data-v-67ececbc]:after{border-right-color:#fff;margin-top:3px}}@media screen and (max-width:1023px){.license-explanation-tooltip[data-v-67ececbc]:after{border-bottom-color:#fff;margin-left:258px}}.license-explanation-tooltip[data-v-67ececbc]:before{border-color:hsla(0,0%,47.1%,0);border-width:var(--tooltip-before-border-width)}@media (min-width: 1024px){.license-explanation-tooltip[data-v-67ececbc]:before{border-right-color:#d8d8d8;margin-top:0}}@media screen and (max-width:1023px){.license-explanation-tooltip[data-v-67ececbc]:before{border-bottom-color:#d8d8d8;margin-left:255px}}',""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___}}]);