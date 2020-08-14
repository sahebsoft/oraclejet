/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojcontext","ojs/ojconfig","ojs/ojcomponentcore","ojs/ojattributegrouphandler","ojs/ojlocaledata","ojs/internal-deps/dvt/DvtToolkit","ojs/ojkeysetimpl","ojs/ojmap","ojs/ojlogger","ojdnd"],function(e,t,n,r,i,s,o,a,l,h,d){"use strict";e.AttributeGroupHandler=s.AttributeGroupHandler,e.ColorAttributeGroupHandler=s.ColorAttributeGroupHandler,e.ShapeAttributeGroupHandler=s.ShapeAttributeGroupHandler;var u=function(e,t){this._component=e,this._configMap=t,this._init()};e.Object.createSubclass(u,e.Object,"DataProviderHandler"),u.prototype._init=function(){this._dataProviderEventListeners={},this._keyDataMap={},this._fetchedData={},this._eventListeners=[]},u.prototype._fetchCollection=function(e,t,n,r,i,s){var o=this,a={data:[],keys:[]};if(s<=-1)return Promise.resolve(a);this._clientId=this._clientId||Symbol();var l={clientId:this._clientId,size:-1},h=e.fetchFirst(l)[Symbol.asyncIterator](),d=this.isTreeDataProvider(e);return h.next().then(function e(s){for(var l=[],u=0;u<s.value.data.length;u++){var c=t({data:s.value.data[u],key:s.value.metadata[u].key},i);l.push(c)}return Promise.all(l).then(function(e){for(var t=0;t<e.length;t++){var s=e[t].data,l=e[t].key;a.data.push(s),a.keys.push(l),o._keyDataMap[n].set(d?l.value:l,{data:s,key:l,parentKey:r,depth:i})}}).then(function(){return s.done?Promise.resolve(a):h.next().then(e)})})},u.prototype._getDPPostProcessor=function(e,t,n,r){var i=this,s=this.isTreeDataProvider(e);r=null==r?Number.MAX_VALUE:r;return s?function s(o,a){var l={value:o.data},h={value:o.key};if(a<r&&n&&n.has(h.value)){var d=e.getChildDataProvider(h.value);if(d)return i._fetchCollection(d,s,t,h.value,a+1).then(function(e){return l.children=e.data,h.children=e.keys,{data:l,key:h}})}return Promise.resolve({data:l,key:h})}:function(e){return Promise.resolve(e)}},u.prototype.fetchAllData=function(e,t,n){if(n&&this._fetchedData[t])return Promise.resolve(this._fetchedData[t]);var r=this._configMap[t];return this.clear(t,!0),this._fetchCollection(e,this._getDPPostProcessor(e,t,r.expandedKeySet,r.maxFetchDepth),t,null,0,r.maxFetchDepth).then(function(r){return n&&(this._fetchedData[t]=r,this._addDPEventListeners(e,t)),r}.bind(this))},u.prototype._getDataProviderEventHandler=function(e){var t=this,n=function(e,t,n){if(!t)return[];var r=new l(t),i=new Map;!function e(t){for(var s=0;s<t.length;s++){var o=n?t[s].value:t[s],a=r.get(o);a!==r.NOT_A_KEY&&i.set(a,s),n&&t[s].children&&e(t[s].children)}}(e.keys);var s=[];return t.forEach(function(e){s.push(i.get(e))}),s},r=function(n){Promise.all([n]).then(function(n){t._fireEvent("clearState",{dataProperty:e}),t._fetchedData[e]=n[0],t._fireEvent("dataUpdated",{data:n[0]})})};return function(i){t._fireEvent("notReady",{event:i});var s=this,o=t.isTreeDataProvider(s),a=t._keyDataMap[e];if("refresh"===i.type)r(t.fetchAllData(s,e));else if("mutate"===i.type){var l,h=i.detail.update,d=i.detail.remove,u=i.detail.add,c=t._fetchedData[e],p=function(n,r,i,l){var h=0,d=[],u=1===i&&!l;return r.keys.forEach(function(n){var i,c=l?null:r.data[h];if(o)if(u){var p=a.get(n);p&&(p.data.value=c,i=Promise.resolve({data:p.data,key:a.get(n).key}))}else{var _={value:c},f={value:n},m=s.getChildDataProvider(n);if(m&&!l)i=t.fetchAllData(m,e).then(function(e){return _.children=e.data,f.children=e.keys,{data:_,key:f}});else i=Promise.resolve({data:_,key:f});if(!l){var v=r.parentKeys?r.parentKeys[h]:null;a.set(f.value,{data:_,key:f,parentKey:v})}}else i=Promise.resolve({data:c,key:n}),a.set(n,{data:c,key:n});d.push(i),h+=1}),Promise.all(d).then(function(e){for(var t=0;t<e.length;t++){var r,s,h,d=o?e[t].key.value:e[t].key,p=a.get(d).parentKey;if(p){var _=a.get(p);_.data.children||u||(_.data.children=[],_.key.children=[]),r=_.data.children,s=_.key.children}else r=c.data,s=c.keys;if(l)h=n[t]-t,r.splice(h,i),s.splice(h,i);else{if(u)h=n[t];else h=0===n.length||null==n[t]?r.length:n[t];r.splice(h,i,e[t].data),s.splice(h,i,e[t].key)}}return c})},_=function(e){return s.fetchByKeys({keys:e}).then(function(t){var n=[];return t.results.size>0&&e.forEach(function(e){n.push(t.results.get(e).data)}),n})},f=Promise.resolve();h&&(l=h.indexes||n(c,h.keys,o),f=Array.isArray(h.data)?p(l,h,1):_(h.keys).then(function(e){var t=Object.create(h,{data:{value:e}});return p(l,t,1)})),f.then(function(){return d?(l=d.indexes||n(c,d.keys,o),p(l,d,1,!0)):Promise.resolve()}).then(function(){return u?(l=u.indexes||n(c,u.addBeforeKeys?u.addBeforeKeys:u.afterKeys,o),Array.isArray(u.data)?p(l,u,0):_(u.keys).then(function(e){var t=Object.create(u,{data:{value:e}});return p(l,t,0)})):Promise.resolve()}).then(function(){r(Promise.resolve(c))})}}},u.prototype._addDPEventListeners=function(e,t){if(!this._dataProviderEventListeners[t]){var n=this._getDataProviderEventHandler(t);e.addEventListener("mutate",n),e.addEventListener("refresh",n),this._dataProviderEventListeners[t]={dataProvider:e,listener:n}}},u.prototype.release=function(e){var t=function(e){var t=this._dataProviderEventListeners[e];if(t){var n=t.dataProvider,r=t.listener;n.removeEventListener("mutate",r),n.removeEventListener("refresh",r),this._dataProviderEventListeners[e]=null}}.bind(this);if(e)t(e),this.clear(e);else{for(var n=Object.keys(this._dataProviderEventListeners),r=0;r<n.length;r++)t(n[r]);this.clear()}},u.prototype.fetchChildrenData=function(e,t,n,r){var i=function(t,n,r){this._keyDataMap[e].get(t).data.children=n,this._keyDataMap[e].get(t).key.children=r}.bind(this),s=t.getChildDataProvider(n);if(s){var o=this._configMap[e].maxFetchDepth,a=this._keyDataMap[e].get(n).depth,l=this._getDPPostProcessor(t,e,r,o);return this._fetchCollection(s,l,e,n,a,o).then(function(e){return i(n,e.data,e.keys),e})}return Promise.resolve({data:[],keys:[]})},u.prototype.clear=function(e,t){e&&t?(this._keyDataMap[e]=this._keyDataMap[e]||new h,this._fireEvent("reset",{dataProperty:e})):e?this._fetchedData[e]=null:(this._fetchedData={},this._keyDataMap={})},u.prototype.isDataProvider=function(t){return e.DataProviderFeatureChecker.isDataProvider(t)},u.prototype.isTreeDataProvider=function(t){return e.DataProviderFeatureChecker.isTreeDataProvider(t)},u.prototype.addEventListener=function(e){this._eventListeners.push(e)},u.prototype._fireEvent=function(e,t){for(var n=0;n<this._eventListeners.length;n++)this._eventListeners[n]({type:e,detail:t})};var c={_SHAPE_REGEXP:/\d/,_SHAPE_ENUMS:{circle:!0,ellipse:!0,square:!0,rectangle:!0,diamond:!0,triangleUp:!0,triangleDown:!0,plus:!0,human:!0,star:!0},shapeParseFunction:function(e,t){var n=t||c._SHAPE_ENUMS;return function(t,r,i,s){if(e[r]){if(c._SHAPE_REGEXP.test(t))return t;if(n[t])return t;throw new Error("Found: '"+t+"'. Expected one of the following: "+Object.keys(n).toString())}return s(t)}}},p=function(e,t){this._path=t,this._root=e,this._delimiter="/"};function _(e){"@babel/helpers - typeof";return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}p.prototype._resolveLeafObjectAndProperty=function(e,t,n,r){for(var i={};e&&t.indexOf(n)>-1;){var s=t.substring(0,t.indexOf(n));r&&void 0===e[s]&&(e[s]={}),e=e[s],t=t.substring(t.indexOf(n)+1,t.length)}return e&&(i.object=e,i.parameter=t),i},p.prototype._resolvePath=function(e){if(void 0===this._leaf){var t=this._resolveLeafObjectAndProperty(this._root,this._path,this._delimiter,e);this._leaf=t.object,this._param=t.parameter}},p.prototype.getValue=function(){return this._resolvePath(!1),void 0===this._leaf?void 0:this._leaf[this._param]},p.prototype.setValue=function(e,t){this._resolvePath(!0),!t&&this._leaf[this._param]||(this._leaf[this._param]=e)};var f={TEXT:function(e){var t={};return e&&(e.hasClass("oj-gauge-metric-label")?(t["font-size"]=!0,t.color=!0):e.hasClass("oj-treemap-node-header")&&(t["font-weight"]=!0)),f._buildTextCssPropertiesObject(e,t)},BACKGROUND:function(e,t,n,r){return f._buildCssBackgroundPropertiesObject(e)},ANIM_DUR:function(e){var t=e.css("animation-duration");if(t)return"ms"===t.slice(-2)?t=parseInt(t.slice(0,-2),10):"s"===t.slice(-1)&&(t=1e3*parseFloat(t.slice(0,-1))),t},_INHERITED_FONT_COLOR:"rgb(254, 0, 254)",_INHERITED_FONT_FAMILY:"Times",_INHERITED_FONT_SIZE:"1px",_INHERITED_FONT_WEIGHT:"1",_INHERITED_FONT_STYLE:"normal",_FONT_SIZE_BUFFER:4,_styleCache:{},defaultStyleProcessor:function(e,t){return e.css(t)},_buildCssBackgroundPropertiesObject:function(e){var t={};return e.css("border-top-color")&&(t.borderColor=e.css("border-top-color")),e.css("border-width")&&e.css("border-style")&&"none"!==e.css("border-style")&&(t.borderWidth=e.css("border-width")),e.css("background-color")&&(t.backgroundColor=e.css("background-color")),t},_buildTextCssPropertiesObject:function(e,t){var n={},r=e.css("font-family");return r&&r!==f._INHERITED_FONT_FAMILY&&(n.fontFamily=r.replace(/"/g,"'")),!(r=e.css("font-size"))||r.indexOf("px")>-1&&parseFloat(r)<f._FONT_SIZE_BUFFER||t["font-size"]||(n.fontSize=r),(r=e.css("font-weight"))&&r!==f._INHERITED_FONT_WEIGHT&&!t["font-weight"]&&(n.fontWeight=r),(r=e.css("color"))&&r!==f._INHERITED_FONT_COLOR&&!t.color&&(n.color=r),(r=e.css("font-style"))&&r!==f._INHERITED_FONT_STYLE&&(n.fontStyle=r),n},processStyles:function(e,n,r,i){var o,a=null,l=null,h=e.data("no-style-cache"),d="";for(o=0;o<r.length;o++)d=d+r[o]+" ";var u,c={},p={},_=Object.keys(i);for(o=0;o<_.length;o++){var m=i[u=_[o]];m instanceof Array||(m=[m]);var v=f._hasUncachedProperty(u,m)||h;l||a||!v||((a=t(document.createElement("div"))).css("display","none"),e.append(a),a.attr("class",d),t(document.body).append(a),(l=t(document.createElement("div"))).css("font-size",f._INHERITED_FONT_SIZE),l.css("color",f._INHERITED_FONT_COLOR),l.css("font-weight",f._INHERITED_FONT_WEIGHT),l.css("font-style",f._INHERITED_FONT_STYLE),a.append(l)),c[u]=m,v&&(p[u]=f._createStyleDivs(l,u,m))}var y=s.ColorAttributeGroupHandler.__createAttrDiv();for(o=0;o<_.length;o++)u=_[o],f._processStyle(p[u],n,u,c[u],h);y&&(s.ColorAttributeGroupHandler.__processAttrDiv(y),y.remove()),a&&a.remove()},_createStyleDivs:function(e,n,r){f._styleCache[n]||(f._styleCache[n]={});for(var i=null,s=0;s<r.length;s++){var o=r[s].property;if(o)void 0===f._styleCache[n][o]&&(i||((i=t(document.createElement("div"))).addClass(n),e.append(i)))}return i},_processStyle:function(e,t,n,r,i){for(var s=0;s<r.length;s++){var o=r[s],a=o.property;if(a){var l=f._styleCache[n][a];if(void 0===l&&e&&(l=f._resolveStyle(e,a),i||(f._styleCache[n][a]=l)),null!=l){var h=new p(t,o.path),d=h.getValue(),u="object"===_(d);if(u&&d)for(var c=Object.keys(l),m=0;m<c.length;m++){var v=c[m];void 0===d[v]&&(d[v]=l[v])}else h.setValue(l,u)}}}},_resolveStyle:function(e,t){var n=f[t],r=n?n(e):f.defaultStyleProcessor(e,t);return null==r||"string"==typeof r&&""===r.replace(/^\s+/g,"")?null:r},_hasUncachedProperty:function(e,t){var n=f._styleCache[e];if(!n)return!0;for(var r=0;r<t.length;r++){var i=t[r].property;if(i)if(void 0===n[i])return!0}return!1}},m=function(e,t){this._component=e,this._configMap=t,this._init()};return e.Object.createSubclass(m,e.Object,"TemplateHandler"),m.prototype._init=function(){this._templateEnginePromise=null,this._templates=this.getTemplates(),this._templateResults={},this._templateNodeData={},this._componentResults={},this._eventListeners=[],this._queueNextEvent=!0,this._eventUpdates=[],this._templatePropertyMap={},this._propertyValidatorMap={}},m.prototype.getTemplateEngine=function(){return this._templateEnginePromise?this._templateEnginePromise:(this._templateEnginePromise=new Promise(function(e){r.__getTemplateEngine().then(function(t){e(t)},function(e){throw new Error("Error loading template engine: "+e)})}),this._templateEnginePromise)},m.prototype.getDataSet=function(e){var t=this.getTemplate(e);return t&&t.dataset},m.prototype.getTemplate=function(e){return this._templates[e]&&this._templates[e][0]},m.prototype.getDataSetBoolean=function(t,n){var r=this.getDataSet(t),i=e.__AttributeUtils.attributeToPropertyName(n),s=r&&r[i];return null!=s&&e.__AttributeUtils.coerceBooleanValue(this.getTemplate(t),n,s,"Boolean")},m.prototype.getTemplates=function(){return e.BaseCustomElementBridge.getSlotMap(this._component.element[0])},m.prototype._getPropertyValidator=function(t,n){if(!t)return null;var r=this._propertyValidatorMap[n];if(r)return r;var i=e.CustomElementBridge.getMetadata(n),s=t.content?t.content.children[0]:t.childNodes[1],o={};return r=function(t,n){var r=t.join("."),a=o[r];if(!a){a=i;for(var l=0;l<t.length;l++)a=a.properties[t[l]];o[r]=a}e.BaseCustomElementBridge.checkEnumValues(s,r,n,a),null!=n&&e.BaseCustomElementBridge.checkType(s,r,n,a)},this._propertyValidatorMap[n]=r,r},m.prototype._processAliasedPropertyNames=function(e,t,n){var r=this._configMap[e].getAliasedPropertyNames;if(r)for(var i=r(t),s=Object.keys(i),o=0;o<s.length;o++){var a=s[o];n[i[a]]=n[a],n[a]=void 0}return n},m.prototype._getTemplateElementProperties=function(e){var t=this._templatePropertyMap[e];return t||(t=this._component.getElementPropertyNames(e),this._templatePropertyMap[e]=t),t},m.prototype.processNodeTemplate=function(t,n,r,i,s,o){var a=this._configMap[t],l=r.getAttribute("slot"),d=this._component.options.as,u=this._component.element[0],c=this._getTemplateElementProperties(i),p="string"==typeof a.templateName?function(){return a.templateName}:a.templateName,_=this._getPropertyValidator(r,i),f=l===p()?t:l,m=function(r){return function(s){var a=this._processAliasedPropertyNames(t,i,s),h=this._templateNodeData[f];e.CollectionUtils.copyInto(h.get(r).data,a),this._eventUpdates.push({key:o,data:a}),this._queueNextEvent&&(this._fireEvent("notReady"),n.getThrottlePromise().then(function(){this._fireEvent("dataUpdated",{dataProperty:t,templateName:l,data:this._eventUpdates.slice(0)}),this._queueNextEvent=!0,this._eventUpdates=[]}.bind(this))),this._queueNextEvent=!1}.bind(this)}.bind(this),v=n.resolveProperties(u,r,i,c,s,d,_);v.subscribe(m(o));var y={data:this._processAliasedPropertyNames(t,i,v.peek()),node:v,context:s};return this._templateNodeData[f]||(this._templateNodeData[f]=new h),this._templateNodeData[f].set(o,y),y.data},m.prototype.processTemplates=function(e,t,n,r,i,s,o){if(s&&this._templateResults[e])return this._templateResults[e];var a,l,h=this._configMap[e],u=this;if(h){a=[],l=[];var c="string"==typeof h.templateName?function(){return h.templateName}:h.templateName,p="string"==typeof h.templateElementName?function(){return h.templateElementName}:h.templateElementName,_=h.resultPath,f=this._component.element[0],m=h.processChildrenData,v=h.processOptionData||function(e){return e},y=u._templateNodeData[e];if(c&&p&&_){var g,C=function(t,r,i,s,o){var a;try{s?a=u.processNodeTemplate(e,n,s,o,i,r):((a=Object.create(t))._noTemplate=!0,a._dvtNoClone=!0,y.set(r,{data:a,context:i})),a.id=r,a._itemData=t}catch(e){d.error(e)}return a};a.push(_),i&&y.has(i)&&(g=y.get(i).context.parentData.concat(y.get(i).context.data));var D=function e(t,n,i){for(var s=t.data,o=t.keys,a=[],l=0;l<s.length;l++){var h=r?s[l].value:s[l],d=r?o[l].value:o[l],v={data:h,key:d,index:l,componentElement:f};r&&(v.parentData=n,v.parentKey=i);var y=c(s[l]),g=p(s[l]),D=u.getTemplate(y),P=C(h,d,v,D,g);if(r&&s[l].children){var b=n.slice(0);b.push(h);var E=e({data:s[l].children,keys:o[l].children},b,d);m?m(P,s[l],E):P[_]=E}a.push(P)}return a}(t,g||[],i);l.push(v(D))}o&&(y.get(i).data[_]=l[0])}var P={paths:a,values:l};return s&&(this._templateResults[e]=P),P},m.prototype.release=function(e){var t;if(e){var n=this._configMap[e].derivedTemplates;t=n?[e].concat(n):[e]}else t=Object.keys(this._templateNodeData);for(var r=0;r<t.length;r++){var i=this._templateNodeData[t[r]];i&&(i.forEach(function(e){e.node&&e.node.dispose()}),this._templateNodeData[t[r]]=new h)}this.clear(e)},m.prototype.clear=function(e,t){if(e)for(var n,r=this._configMap[e].derivedTemplates,i=r?[e].concat(r):[e],s=0;s<i.length;s++)n=i[s],t?this._templateNodeData[n]=this._templateNodeData[n]||new h:(this._templateResults[n]=null,this._componentResults[n]=null);else this._templateResults={},this._componentResults={},this._templateNodeData={}},m.prototype.getComponentResults=function(e){return this._componentResults[e]},m.prototype.setComponentResults=function(e,t){this._componentResults[e]=t},m.prototype.addEventListener=function(e){this._eventListeners.push(e)},m.prototype._fireEvent=function(e,t){for(var n=0;n<this._eventListeners.length;n++)this._eventListeners[n]({type:e,detail:t})},e.__registerWidget("oj.dvtBaseComponent",t.oj.baseComponent,{options:{trackResize:"on"},_ComponentCreate:function(){this._super(),this._renderCount=0,this._numDeferredObjs=0,this._optionsCopy=null,this._dataValuePromise={},this._templateMap={},this._TemplateHandler=new m(this,this._GetSimpleDataProviderConfigs()),this._DataProviderHandler=new u(this,this._GetSimpleDataProviderConfigs()),this._DataProviderHandler.addEventListener(this._GetDPEventHandler()),this._TemplateHandler.addEventListener(this._GetDPEventHandler());for(var n=this._GetComponentStyleClasses(),r=0;r<n.length;r++)this.element.addClass(n[r]);this._referenceDiv=t(document.createElement("div")),this._referenceDiv.css("visibility","hidden"),this.element.append(this._referenceDiv),a.Agent.setAgentInfo(e.AgentUtils.getAgentInfo());var s=this.element[0].parentElement;s&&s._dvtcontext?this._context=s._dvtcontext:this._context=new a.Context(this.element[0],null,this._referenceDiv[0]);var d=Object.keys(this._GetSimpleDataProviderConfigs()),c={oj:e,KeySetImpl:l,ojMap:h,LocaleData:o,dataProviderProps:d};if(this._context.setJetProperties(c),this._context.setReadingDirection(this._GetReadingDirection()),this._context.setTooltipAttachedCallback(i.subtreeAttached),this._context.setOverlayAttachedCallback(i.subtreeAttached),this._context.setFixContextCallback(this._FixRendererContext.bind(this)),this._context.setCustomElement(this._IsCustomElement()),t(document.body).hasClass("oj-hicontrast")&&a.Agent.setHighContrast(!0),this._component=this._CreateDvtComponent(this._context,this._HandleEvent,this),a.Agent.isEnvironmentTest()){var p=this.element[0].getAttribute("data-oj-dvt-test-id");p&&p.length>0&&this._component.setId(p)}this._context.getStage().addChild(this._component),this._LoadResources(),this.options._environment="jet",this.options._widgetConstructor=i.__GetWidgetConstructor(this.element)},_AfterCreate:function(){this._super(),"off"!==this.options.trackResize&&this._addResizeListener(),this._ProcessOptions(),this._Render()},_SetLocaleHelpers:function(e,t){if(!1!==a.requireJS){var n={createNumberConverter:function(t){return new e.IntlNumberConverter(t)},isoToDateConverter:function(e){if("string"==typeof e){var n=t.IntlConverterUtils.isoToDate(e),r=n.toJSON()?t.IntlConverterUtils.dateToLocalIso(n):e;return t.IntlConverterUtils.isoToLocalDate(r)}return e},dateToIsoWithTimeZoneConverter:function(e){if(e instanceof Date){var n=-1*e.getTimezoneOffset(),r=n>=0?"+":"-",i=Math.floor(Math.abs(n)/60),s=Math.abs(n)%60,o=r+(2!==i.toString().length?"0"+i:i)+":"+(2!==s.toString().length?s+"0":s);return t.IntlConverterUtils.dateToLocalIso(e)+o}return e}};this._context.setLocaleHelpers(n)}},refresh:function(){this._super(),this._context.setReadingDirection(this._GetReadingDirection()),this._Render()},getNodeBySubId:function(e){var t=this._component&&this._component.getAutomation?this._component.getAutomation():null;if(t){var n=this._ConvertLocatorToSubId(e);return t.getDomElementForSubId(n)}return null},getSubIdByNode:function(e){var t=this._component&&this._component.getAutomation?this._component.getAutomation():null;if(t){var n=t.getSubIdForDomElement(e);return n?this._ConvertSubIdToLocator(n):null}return null},_ConvertLocatorToSubId:function(e){return null},_ConvertSubIdToLocator:function(e){return null},_ProcessStyles:function(){f.processStyles(this.element,this.options,this._GetComponentStyleClasses(),this._GetChildStyleClasses())},_GetComponentStyleClasses:function(){return["oj-dvtbase"]},_GetChildStyleClasses:function(){var e={"oj-dvt-no-data-message":{path:"_statusMessageStyle",property:"TEXT"}};return e},_GetEventTypes:function(){return[]},_VerifyConnectedForSetup:function(){return!0},_ReleaseResources:function(){this._super(),this._renderNeeded=!0,this._DataProviderHandler.release(),this._TemplateHandler.release(),this._dataValuePromise={}},_destroy:function(){this._context.hideTooltips(),this._context.destroy(),this._context=null;var e=this.element[0].parentElement;e&&e._dvtcontext&&(e._dvtcontext=null),this._component.destroy&&this._component.destroy(),this._component=null,this._removeResizeListener(),this._CleanAllTemplates(),this.element.children().remove(),this.element.removeAttr("role").removeAttr("tabIndex").removeAttr("aria-activedescendant");for(var t=this._GetComponentStyleClasses(),n=0;n<t.length;n++)this.element.removeClass(t[n]);this._MakeReady(),this._TemplateHandler.release(),this._DataProviderHandler.release(),this._dataValuePromise={},this._super()},_setOptions:function(e,n){this._superApply(arguments),this._OptionChangeHandler(e);var r=this.options.trackResize;if("off"===r&&this._resizeListener?this._removeResizeListener():"off"===r||this._resizeListener||this._addResizeListener(),this._ProcessOptions(),!this._bUserDrivenChange){var i=!1,s=this._GetEventTypes(),o=["highlightedCategories","selection","dataCursorPosition","scrollPosition"];t.each(e,function(e){if(s.indexOf(e)<0&&o.indexOf(e)<0)return i=!0,!1}),i?this._Render():(void 0!==e.highlightedCategories&&this._component.highlight(e.highlightedCategories),void 0!==e.selection&&this._component.select(e.selection),void 0!==e.dataCursorPosition&&this._component.positionDataCursor&&this._component.positionDataCursor(e.dataCursorPosition),void 0!==e.scrollPosition&&this._component.scroll(e.scrollPosition))}},_CreateDvtComponent:function(e,t,n){return null},_HandleEvent:function(e){var n=e.type;"selection"===n?this._UserOptionChange("selection",e.selection):"categoryHide"===n||"categoryShow"===n?this._UserOptionChange("hiddenCategories",e.hiddenCategories):"categoryHighlight"===n?this._UserOptionChange("highlightedCategories",e.categories):"optionChange"===n?this._UserOptionChange(e.key,e.value,e.optionMetadata):"touchHoldRelease"===n&&this._GetContextMenu()?this._OpenContextMenu(t.Event(e.nativeEvent),"touch"):"dvtRender"===n?this._Render():"ready"===n&&0===this._numDeferredObjs&&this._MakeReady()},_addResizeListener:function(){this._resizeListener||(this._resizeListener=this._handleResize.bind(this),e.DomUtils.addResizeListener(this.element[0],this._resizeListener,250))},_removeResizeListener:function(){this._resizeListener&&(e.DomUtils.removeResizeListener(this.element[0],this._resizeListener),this._resizeListener=null)},_handleResize:function(e,t){var n=this.element.width(),r=this.element.height();(null==this._width||null==this._height||Math.abs(n-this._width)+Math.abs(r-this._height)>=5)&&this._Render(!0)},_LoadResources:function(){},_Render:function(e){this._context.hideTooltips(),this._NotReady(),!this._context.isReadyToRender()||this._renderNeeded&&e?(this._renderNeeded=!0,this._MakeReady()):(this._width=this._IsFlowingLayoutSupported()?null:this.element.width(),this._height=this._IsFlowingLayoutSupported()?null:this.element.height(),this._context.setDefaultFontFamily(this._referenceDiv.css("font-family")),this.options._width=this._width,this.options._height=this._height,this.options._locale=r.getLocale(),this._IsDraggable()&&this.element.attr("draggable",!0),this._ProcessStyles(),e?0===this._numDeferredObjs&&(this._renderCount+=1,this._RenderComponent(this._optionsCopy,e)):(this._renderCount+=1,this._resolveDeferredDataItems()&&this._RenderComponent(this._optionsCopy)),this._renderNeeded=!1)},_IsDraggable:function(){return!!this.options.dnd},_NotifyShown:function(){this._super(),this._notifyShownAttached()},_NotifyAttached:function(){this._super(),this._notifyShownAttached()},_NotifyDetached:function(){this._super(),this._notifyHiddenDetached()},_NotifyHidden:function(){this._super(),this._notifyHiddenDetached()},_notifyShownAttached:function(){this._renderNeeded&&this._Render()},_notifyHiddenDetached:function(){this._context.hideTooltips(),this._MakeReady()},_UserOptionChange:function(e,t,n){this._bUserDrivenChange=!0,this.option(e,t,{_context:{writeback:!0,optionMetadata:n,internalSet:!0,skipEvent:"_"===e.charAt(0)}}),this._bUserDrivenChange=!1},_NotifyContextMenuGesture:function(e,t,n){if("touch"!==n)if("keyboard"===n){var r=this.element[0].getBoundingClientRect(),i=this._component.getKeyboardFocus()?this._component.getKeyboardFocus().getBoundingClientRect():null,s=i?"left+"+(i.left+.5*i.width-r.left)+" top+"+(i.top+.5*i.height-r.top):"center";this._OpenContextMenu(t,n,{position:{at:s}})}else this._super(e,t,n)},_GetDvtComponent:function(e){var t=i.__GetWidgetConstructor(e)("instance");return t?t._component:null},_GetStringFromIndexPath:function(e){for(var t="",n=0;n<e.length;n++)t+="["+e[n]+"]";return t},_GetIndexPath:function(e){for(var t=[],n=0;e.indexOf("[",n)>0;){var r=e.indexOf("[",n)+1,i=e.indexOf("]",n);t.push(Number(e.substring(r,i))),n=i+1}return t},_GetFirstIndex:function(e){return Number(this._GetFirstBracketedString(e))},_GetFirstBracketedString:function(e){var t=e.indexOf("[")+1,n=e.indexOf("]");return e.substring(t,n)},_GetComponentDeferredDataPaths:function(){return{}},_GetComponentNoClonePaths:function(){if(!this._noClonePaths){this._noClonePaths={};var e=this,t=this._GetComponentDeferredDataPaths().root;t&&t.forEach(function(t){e._noClonePaths[t]=!0})}return this._noClonePaths},_resolveDocumentFonts:function(){var e=document.fonts;if(e&&"loading"===e.status){this._numDeferredObjs+=1;var t=this._renderCount;e.ready.then(function(){this._renderDeferredData(t,null,[])}.bind(this))}},_resolveDeferredDataItems:function(){this._optionsCopy=a.JsonUtils.clone(this.options,null,this._GetComponentNoClonePaths()),this._numDeferredObjs=0,this._FixCustomRenderers(this._optionsCopy),this._resolveDocumentFonts();for(var e=this,t=this._GetComponentDeferredDataPaths(),n=Object.keys(t),r=0;r<n.length;r++){var i=n[r];t[i].forEach(function(t){if("root"===i)e._resolveDeferredDataItem.bind(e)(e.options,e._optionsCopy,t);else{var n=e.options[i];if(n&&n instanceof Array)for(var r=0;r<n.length;r++)e._resolveDeferredDataItem.bind(e)(n[r],e._optionsCopy[i][r],t)}})}return 0===this._numDeferredObjs},_resolveDeferredDataItem:function(e,t,n){var r=new p(e,n),i=r.getValue(),s=this;if(i instanceof Function?i=Promise.resolve(i(this._GetDataContext(e))):this._IsCustomElement()&&Array.isArray(i)&&(i=Promise.resolve(i),r.setValue(i,!0)),i&&this._DataProviderHandler.isDataProvider(i)){var o=this._DataProviderHandler.isTreeDataProvider(i);i=s._dataValuePromise[n]||new Promise(function(e){var t=s._TemplateHandler.getTemplateEngine(),r=s._DataProviderHandler.fetchAllData(i,n,!0);Promise.all([t,r]).then(function(t){if(i===s._dataValuePromise[n]){var r=t[0],a=t[1],l=s._ProcessTemplates(n,a,r,o,null,!0);s._dataValuePromise[n]=null,e(l)}},function(){s._dataValuePromise[n]=null})}),s._dataValuePromise[n]=i}if(i instanceof Promise){var a=this._renderCount;i.then(function(e){var r=[n],i=[e];e.paths&&(r=e.paths,i=e.values),s._renderDeferredData(a,t,r,i)},function(){s._renderDeferredData(a,t,[n],[[]])}),this._numDeferredObjs+=1}},_renderDeferredData:function(e,t,n,r){if(this._context&&e===this._renderCount){this._numDeferredObjs-=1;for(var i=0;i<n.length;i++)new p(t,n[i]).setValue(r[i],!0);0===this._numDeferredObjs&&(this._RenderComponent(this._optionsCopy),this._optionsCopy=null)}},_ClearDataProviderState:function(e){this._DataProviderHandler.clear(e),this._TemplateHandler.release(e),this._dataValuePromise[e]=null},_OptionChangeHandler:function(e){for(var t=Object.keys(this._GetSimpleDataProviderConfigs()),n=0;n<t.length;n++){var r=t[n];Object.prototype.hasOwnProperty.call(e,r)&&this._ClearDataProviderState(r)}},getElementPropertyNames:function(t){var n=e.CustomElementBridge.getMetadata(t).properties,r=Object.keys(n).filter(function(e){return!n[e]._eventListener}),i=new Set;return r.forEach(function(e){i.add(e)}),i},_ProcessTemplates:function(e,t,n,r,i,s,o){return this._TemplateHandler.processTemplates(e,t,n,r,i,s,o)},_GetSimpleDataProviderConfigs:function(){return{}},_GetDPEventHandler:function(){return function(e){"notReady"===e.type?this._NotReady():"dataUpdated"===e.type?this._Render():"clearState"===e.type?this._ClearDataProviderState(e.detail.dataProperty):"reset"===e.type&&this._TemplateHandler.clear(e.detail.dataProperty,!0)}.bind(this)},_getFetchDataHandler:function(e){var t=this._GetSimpleDataProviderConfigs()[e].resultPath;return function(n,r,i,s){var o=this._DataProviderHandler.fetchChildrenData(e,n,s,r),a=this._TemplateHandler.getTemplateEngine();return Promise.all([o,a]).then(function(n){var r=this._ProcessTemplates(e,{data:n[0].data,keys:n[0].keys},n[1],!0,s,!1,!0).values[0];i&&(i[t]=r)}.bind(this))}.bind(this)},_RenderComponent:function(e,t){if(this._context.isReadyToRender()){this._CleanAllTemplates();var n=this._IsFlowingLayoutSupported()&&this._resizeListener;n&&this._removeResizeListener(),this._component.render(t?null:e,this._width,this._height),n&&this._addResizeListener(),this.element.attr("role")?this.element[0].hasAttribute("tabindex")||this.element.attr("tabindex",0):this.element.attr("tabindex",null)}else this._renderNeeded=!0,this._MakeReady()},_GetDataContext:function(e){return{}},_IsFlowingLayoutSupported:function(){return!1},whenReady:function(){if(this._ready)return Promise.resolve(!0);if(!this._promise){var e=this;this._promise=new Promise(function(t){e._promiseResolve=t})}return this._promise},_NotReady:function(){if(this._ready=!1,0===this._numDeferredObjs&&!this._readyResolveFunc){var e=n.getContext(this.element[0]).getBusyContext(),t={description:"The component identified by '"+this.element.attr("id")+"' is being loaded."};this._readyResolveFunc=e.addBusyState(t)}},_MakeReady:function(){this._promiseResolve&&(this._promiseResolve(!0),this._promiseResolve=null),this._ready=!0,this._promise=null,this._readyResolveFunc&&(this._readyResolveFunc(),this._readyResolveFunc=null)},_ProcessOptions:function(){a.Agent.isEnvironmentTest()&&(this.options=Object.assign(this.options,this.element[0].__dvtToolkit));var e=this.options.tooltip;e&&e._renderer&&(this.options.tooltip={renderer:this._GetTemplateRenderer(e._renderer,"tooltip")})},_WrapCustomElementRenderer:function(e){var t=this;return e?function(n){n._dvtcontext=t._context;var r=e(n);if(n._templateName&&n._templateCleanup&&t._AddTemplate(n._templateName,n._templateCleanup),r&&!0!==r.preventDefault&&r.insert){var i=r.insert;return i.classList&&i.classList.contains("oj-dvtbase")?t._GetDvtComponent(i):i}return null}:null},_FixCustomRenderers:function(e){if(this._IsCustomElement())for(var t=this._GetComponentRendererOptions(),n=0;n<t.length;n++){var r=t[n].path,i=t[n].slot,s=this._TemplateHandler.getTemplates();if(i&&s[i]&&s[i][0])this._ProcessInlineTemplateRenderer(e,r,s[i][0],i);else{var o=new p(e,r),a=o.getValue();a&&o.setValue(this._WrapCustomElementRenderer(a),!0)}}},_GetComponentRendererOptions:function(){return[{path:"tooltip/renderer",slot:"tooltipTemplate"}]},_GetTemplateRenderer:function(e,n){var r=this;return function(i){var s=document.createElement("div");s.style.display="none",e({parentElement:s,context:i});var o=s.children[0];return o?(r._AddTemplate(n,function(){t(s).remove()}),s.removeChild(o),t(s).remove(),o):null}},_GetTemplateDataRenderer:function(e,n){var r=this;return function(i){var s=document.createElement("div");s.style.display="none",s._dvtcontext=r._context,r.element.append(s),e({parentElement:s,data:i.data});var o=s.children[0];return o?(r._AddTemplate(n,function(){t(s).remove()}),"http://www.w3.org/2000/svg"===o.namespaceURI?(s.removeChild(o),t(s).remove(),o):r._GetDvtComponent(o)):null}},_WrapInlineTemplateRenderer:function(e,t,n){return e},_ProcessInlineTemplateRenderer:function(e,t,n,r){var i=this._renderCount;this._numDeferredObjs+=1,this._TemplateHandler.getTemplateEngine().then(function(s){var o=function(e){var t=s.execute(this.element[0],n,e);return t&&t.length>0?(Object.defineProperty(e,"_templateCleanup",{value:function(){t.forEach(function(e){s.clean(e)})},enumerable:!1}),Object.defineProperty(e,"_templateName",{value:r,enumerable:!1}),{insert:t}):{preventDefault:!0}}.bind(this);o=this._WrapInlineTemplateRenderer(o,r,t),this._renderDeferredData(i,e,[t],[this._WrapCustomElementRenderer(o)])}.bind(this))},_CleanAllTemplates:function(){for(var e=Object.keys(this._templateMap),t=0;t<e.length;t++){var n=e[t];this._CleanTemplate(n)}this._templateMap={}},_CleanTemplate:function(e){if(this._templateMap[e]){for(var t=this._templateMap[e].length,n=0;n<t;n++)this._templateMap[e][n]();this._templateMap[e]=[]}},_AddTemplate:function(e,t){this._templateMap[e]||(this._templateMap[e]=[]),this._templateMap[e].push(t)},_CompareOptionValues:function(t,n,r){switch(t){case"hiddenCategories":case"highlightedCategories":case"selection":return e.Object.compareValues(n,r);default:return this._super(t,n,r)}}},!0),c});