(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1204:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(22),__webpack_require__(9),__webpack_require__(7),__webpack_require__(12);var build_url=__webpack_require__(1254),build_url_default=__webpack_require__.n(build_url),legacySourceMap={ccMixter:{audio:function audio(search){return{url:"http://dig.ccmixter.org/search",query:{lic:"open",searchp:search.q}}}},"EDU images":{image:function image(search){return{url:"https://images.all4ed.org",query:{s:search.q}}}},Europeana:{audio:function audio(search){var query="".concat(search.q," AND RIGHTS:*creative*");return search.filters&&search.filters.commercial&&(search.filters.commercial&&(query="".concat(query," AND NOT RIGHTS:*nc*")),search.filters.modify&&(query="".concat(query," AND NOT RIGHTS:*nd*"))),{url:"https://www.europeana.eu/en/search",query:{page:1,qf:'TYPE:"SOUND"',query:query}}},video:function video(search){var query="".concat(search.q," AND RIGHTS:*creative*");return search.filters&&search.filters.commercial&&(search.filters.comercial&&(query="".concat(query," AND NOT RIGHTS:*nc*")),search.filters.modify&&(query="".concat(query," AND NOT RIGHTS:*nd*"))),{url:"https://www.europeana.eu/en/search",query:{page:1,qf:'TYPE:"VIDEO"',query:query}}}},"Google Images":{image:function image(search){return{url:"https://www.google.com/search",query:{q:search.q,tbm:"isch",tbs:"il:cl"}}}},"Images of Empowerment":{image:function image(search){return{url:"https://www.imagesofempowerment.org/",query:{s:search.q}}}},Jamendo:{audio:function audio(search){return{url:"https://www.jamendo.com/search/tracks",query:{q:search.q}}}},"Open Clip Art Library":{image:function image(search){return{url:"http://www.openclipart.org/search/",query:{query:search.q}}}},Nappy:{image:function image(search){return{url:"https://www.nappy.co/",query:{s:search.q}}}},"The Greats":{image:function image(search){return{url:"https://www.thegreats.co/artworks/",query:{theme:0,search:search.q}}}},SoundCloud:{audio:function audio(search){var license="to_share";return search.filters&&search.filters.commercial&&(search.filters.commercial&&(license="to_use_commercially"),search.filters.modify&&(license="to_modify_commercially")),{url:"https://soundcloud.com/search/sounds",query:{q:search.q,"filter.license":license}}}},Vimeo:{video:function video(search){return{url:"https://vimeo.com/search",query:{license:"by",q:search.q}}}},"Wikimedia Commons":{audio:function audio(search){return{url:"https://commons.wikimedia.org/w/index.php",query:{search:"".concat(search.q),title:"Special:MediaSearch",type:"audio"}}},video:function video(search){return{url:"https://commons.wikimedia.org/w/index.php",query:{search:"".concat(search.q),title:"Special:MediaSearch",type:"video"}}}},YouTube:{video:function video(search){return{url:"https://www.youtube.com/results",query:{search_query:search.q,sp:"EgIwAQ%3D%3D"}}}}},get_legacy_source_url=function getLegacySourceUrl(type){return function(sourceName,search){if(!search)throw new Error("Please provide a valid query to search ".concat(sourceName," for ").concat(type," files."));var source=legacySourceMap[sourceName];if(!source)throw new Error("No data available for provided legacy source: ".concat(sourceName));var getSourceUrlInfo=source[type];if(!getSourceUrlInfo)throw new Error("".concat(sourceName," does not offer meta search for ").concat(type));var urlInfo=getSourceUrlInfo(search);return build_url_default()(urlInfo.url,{queryParams:urlInfo.query})}},VMetaSearch_VMetaSourceListvue_type_script_lang_js_={name:"MetaSourceList",props:{type:{type:String},query:{type:Object}},data:function data(){var _this=this;return{sources:Object.keys(legacySourceMap).filter((function(sourceName){return legacySourceMap[sourceName][_this.type]}))}},methods:{getSourceUrl:function getSourceUrl(source){return get_legacy_source_url(this.type)(source,this.query)}}},componentNormalizer=__webpack_require__(23);const __vuedocgen_export_0=Object(componentNormalizer.a)(VMetaSearch_VMetaSourceListvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"mb-10"},[_c("ul",{staticClass:"buttons is-centered mt-6"},_vm._l(_vm.sources,(function(source){return _c("li",{key:source},[_c("a",{staticClass:"button small me-2 is-opaque",attrs:{target:"_blank",rel:"nofollow noreferrer",href:_vm.getSourceUrl(source)}},[_vm._v("\n        "+_vm._s(source)+"\n        "),_vm._m(0,!0)])])})),0)])}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("sup",{staticClass:"top-0"},[_c("i",{staticClass:"ms-2 icon external-link"})])}],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"MetaSourceList",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"string"}},{name:"query",type:{name:"object"}}]}},1254:function(module,exports,__webpack_require__){(function(){"use strict";var root=this,previousBuildUrl=root.buildUrl,encodedParam=function(param){return null===param?"":encodeURIComponent(String(param).trim())},buildUrl=function(url,options){var key,builtUrl,caseChange,queryString=[];if(caseChange=!(!options||!options.lowerCase)&&!!options.lowerCase,null===url?builtUrl="":"object"==typeof url?(builtUrl="",options=url):builtUrl=url,options){if(options.path){builtUrl&&"/"===builtUrl[builtUrl.length-1]&&(builtUrl=builtUrl.slice(0,-1));var localVar=String(options.path).trim();caseChange&&(localVar=localVar.toLowerCase()),0===localVar.indexOf("/")?builtUrl+=localVar:builtUrl+="/"+localVar}if(options.queryParams){for(key in options.queryParams){var param;if(options.queryParams.hasOwnProperty(key)&&void 0!==options.queryParams[key])if(options.disableCSV&&Array.isArray(options.queryParams[key])&&options.queryParams[key].length)for(var i=0;i<options.queryParams[key].length;i++)param=options.queryParams[key][i],queryString.push(key+"="+encodedParam(param));else param=caseChange?options.queryParams[key].toLowerCase():options.queryParams[key],queryString.push(key+"="+encodedParam(param))}builtUrl+="?"+queryString.join("&")}options.hash&&(builtUrl+=caseChange?"#"+String(options.hash).trim().toLowerCase():"#"+String(options.hash).trim())}return builtUrl};buildUrl.noConflict=function(){return root.buildUrl=previousBuildUrl,buildUrl},module.exports&&(exports=module.exports=buildUrl),exports.buildUrl=buildUrl}).call(this)}}]);