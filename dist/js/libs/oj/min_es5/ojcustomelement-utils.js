!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}
/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */define(["exports","ojs/ojcontext","ojs/ojlogger"],function(t,n,i){"use strict";n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var o={},a=function(){function t(){e(this,t)}return r(t,null,[{key:"isValidCustomElementName",value:function(e){var r=t._RESERVED_TAGS.has(e),n=t._ELEMENT_NAME_REGEXP.test(e);return!r&&n&&!e.startsWith("oj-bind-",0)}},{key:"getSupportedTypes",value:function(e){if(!e)return{};var t=o[e];if(!t){t={};var r=e.toLowerCase(),n=r.match(/(?=[^|])(?:[^|]*<[^>]+>)*[^|]*/g),i=0;n.forEach(function(e){var r=e.trim();"any"===r||"boolean"===r||"number"===r||"string"===r||"array"===r||"object"===r||"null"===r?t[r]=1:0===r.indexOf("array<")?t.array=1:0===r.indexOf("object<")?t.object=1:t.other=1,i++}),t.typeCount=i,o[r]=t}return t}},{key:"getUniqueId",value:function(e){if(e)return e;var r=t._UNIQUE+t._UNIQUE_INCR;return t._UNIQUE_INCR+=1,r}}]),t}();a._UNIQUE_INCR=0,a._UNIQUE="_ojcustomelem",a._RESERVED_TAGS=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]),a._ELEMENT_NAME_REGEXP=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/;var l={accessKey:"accesskey",autocapitalize:"autocapitalize",autofocus:"autofocus",class:"class",contentEditable:"contenteditable",dir:"dir",draggable:"draggable",enterKeyHint:"enterkeyhint",hidden:"hidden",id:"id",inputMode:"inputmode",is:"is",itemid:"itemid",itemprop:"itemprop",itemref:"itemref",itemscope:"itemscope",itemtype:"itemtype",lang:"lang",nonce:"nonce",role:"role",slot:"slot",spellcheck:"spellcheck",style:"style",tabIndex:"tabindex",title:"title",translate:"translate"},s={acceptCharset:"accept-charset",allowFullscreen:"allowfullscreen",allowPaymentRequest:"allowpaymentrequest",colSpan:"colspan",crossOrigin:"crossorigin",dateTime:"datetime",dirName:"dirname",encoding:"enctype",formAction:"formaction",formEnctype:"formenctype",formMethod:"formmethod",formNoValidate:"formnovalidate",formTarget:"formtarget",for:"for",httpEquiv:"http-equiv",imageSizes:"imagesizes",imageSrcset:"imagesrcset",inputMode:"inputmode",isMap:"ismap",maxLength:"maxlength",minLength:"minlength",noModule:"nomodule",noValidate:"novalidate",readOnly:"readonly",referrerPolicy:"referrerpolicy",rowSpan:"rowspan",useMap:"usemap"},u=/^\s*\[[^]*\]\s*$/,c=/^\s*\{[^]*\}\s*$/,d=/^(?:\{\{)([^]+)(?:\}\})$/,v=/^(?:\[\[)([^]+)(?:\]\])$/,m={};Object.keys(l).forEach(function(e){var t=l[e];e!==t&&(m[t]=e,s[e]=t)});var f=function(){function t(){e(this,t)}return r(t,null,[{key:"getExpressionInfo",value:function(e){var t,r=!1;if(e){var n=e.trim(),i=d.exec(n);(t=null==i?void 0:i[1])||(r=!0,t=null==(i=v.exec(n))?void 0:i[1])}return{downstreamOnly:r,expr:t}}},{key:"coerceValue",value:function(e,r,n,i){var o=e.tagName.toLowerCase();if(!i)throw new Error("Unable to parse ".concat(r,"='").concat(n,"' for ").concat(o," with id '").concat(e.id,"'.         This attribute only supports data bound values. Check the API doc for supported types"));var l=a.getSupportedTypes(i),s=u.test(n),d=c.test(n);if(l.array&&s||l.object&&d||l.any&&(s||d))try{return JSON.parse(n)}catch(t){throw new Error("Unable to parse ".concat(r,"='").concat(n,"' for ").concat(o," with id '").concat(e.id,"'           to a JSON Object. Check the value for correct JSON syntax, e.g. double quoted strings. ").concat(t))}else{if(l.string||l.any)return n;if(l.boolean)return t.coerceBooleanValue(e,r,n,i);if(l.number&&!isNaN(n))return Number(n)}throw new Error("Unable to parse ".concat(r,"='").concat(n,"' for ").concat(o," with id '").concat(e.id,"'       to a ").concat(i,"."))}},{key:"coerceBooleanValue",value:function(e,t,r,n){if(null==r||"true"===r||""===r||r.toLowerCase()===t)return!0;if("false"===r)return!1;var i=e.tagName.toLowerCase();throw new Error("Unable to parse ".concat(t,"='").concat(r,"' for ").concat(i," with id '").concat(e.id,"' to a ").concat(n,"."))}},{key:"isGlobalOrData",value:function(e){return Object.prototype.hasOwnProperty.call(l,e)||e.startsWith("data-")||e.startsWith("aria-")}},{key:"getGlobalAttrForProp",value:function(e){return l[e]||e}},{key:"getGlobalPropForAttr",value:function(e){return m[e]||e}},{key:"getNativeAttr",value:function(e){return s[e]||e}}]),t}();function g(e,t){var r=e.cache;return r||(r=new Map,e.cache=r),r.has(t)||r.set(t,e(t)),r.get(t)}f.attributeToPropertyName=g.bind(null,function(e){return e.toLowerCase().replace(/-(.)/g,function(e,t){return t.toUpperCase()})}),f.propertyNameToAttribute=g.bind(null,function(e){return e.replace(/([A-Z])/g,function(e){return"-".concat(e.toLowerCase())})}),f.eventTypeToEventListenerProperty=g.bind(null,function(e){return"on"+e.substr(0,1).toUpperCase()+e.substr(1)}),f.isEventListenerProperty=g.bind(null,function(e){return/^on[A-Z]/.test(e)}),f.eventListenerPropertyToEventType=g.bind(null,function(e){return e.substr(2,1).toLowerCase()+e.substr(3)}),f.propertyNameToChangeEventType=g.bind(null,function(e){return"".concat(e,"Changed")}),f.propertyNameToChangedCallback=g.bind(null,function(e){return"on".concat(e[0].toUpperCase()).concat(e.substr(1),"Changed")}),f.eventTriggerToEventType=g.bind(null,function(e){return"oj".concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))});var h=function(){function t(){e(this,t)}return r(t,null,[{key:"registerElement",value:function(e,r){var n=e.toUpperCase();if(!t._CUSTOM_ELEMENT_REGISTRY[n]){if(!r.descriptor)throw new Error("Custom element ".concat(e," must be registered with a descriptor."));return t._CUSTOM_ELEMENT_REGISTRY[e]=r,t._CUSTOM_ELEMENT_REGISTRY[n]=r,!0}return!1}},{key:"isComposite",value:function(e){var r,n;return null!==(n=null===(r=t.getElementRegistration(e))||void 0===r?void 0:r.composite)&&void 0!==n&&n}},{key:"isElementRegistered",value:function(e){return null!=t._CUSTOM_ELEMENT_REGISTRY[e]}},{key:"getElementRegistration",value:function(e){var r;return null!==(r=t._CUSTOM_ELEMENT_REGISTRY[e])&&void 0!==r?r:null}},{key:"getElementDescriptor",value:function(e){var r;return(null===(r=t.getElementRegistration(e))||void 0===r?void 0:r.descriptor)||{}}},{key:"getElementProperties",value:function(e){var r,n,i=t.getElementDescriptor(e.tagName);return(null===(n=null!==(r=i._metadata)&&void 0!==r?r:i.metadata)||void 0===n?void 0:n.properties)||{}}},{key:"getElementInfo",value:function(e){return e?"".concat(e.tagName.toLowerCase()," with id '").concat(e.id,"'"):""}},{key:"getElementState",value:function(e){var r=e[t._ELEMENT_STATE_KEY];!r&&t.isElementRegistered(e.tagName)&&(r=new(0,t.getElementRegistration(e.tagName).stateClass)(e),Object.defineProperty(e,t._ELEMENT_STATE_KEY,{value:r}));return null!=r?r:null}},{key:"getElementBridge",value:function(e){var r=e[t._ELEMENT_BRIDGE_KEY];if(!r&&t.isElementRegistered(e.tagName)){var n=t.getElementRegistration(e.tagName).bridgeProto;r=Object.create(n);var i=t.getElementDescriptor(e.tagName);r.initializeBridge(e,i),Object.defineProperty(e,t._ELEMENT_BRIDGE_KEY,{value:r})}return null!=r?r:null}},{key:"getSlotMap",value:function(e){for(var r={},n=e.childNodes,i=0;i<n.length;i++){var o=n[i];if(t.isSlotable(o)){var a=t.getSlotAssignment(o);r[a]||(r[a]=[]),r[a].push(o)}}return r}},{key:"getSlotAssignment",value:function(e){var t=null!=e.__oj_slots?e.__oj_slots:e.getAttribute&&e.getAttribute("slot");return t||""}},{key:"isSlotable",value:function(e){return 1===e.nodeType||3===e.nodeType&&!!e.nodeValue.trim()}},{key:"getElementProperty",value:function(e,r){if(t.isElementRegistered(e.tagName)){var n=e._vcomp;return n&&!n.isCustomElementFirst()?t.getComplexProperty(n.props,r):e.getProperty(r)}return e[r]}},{key:"getComplexProperty",value:function(e,t){var r=e,n=t.split(".");try{n.forEach(function(e){return r=r[e]})}catch(e){return}return r}}]),t}();h._CUSTOM_ELEMENT_REGISTRY={},h._ELEMENT_STATE_KEY="_ojElementState",h._ELEMENT_BRIDGE_KEY="_ojBridge";var p=function(){function t(r){e(this,t),this.isComplete=!1,this.isConnected=!1,this.isDisposed=!1,this.isInitializingProperties=!1,this.dirtyProps=new Set,this.Element=r}return r(t,[{key:"getTrackChildrenOption",value:function(){var e,t,r=h.getElementDescriptor(this.Element.tagName).metadata;return null!==(t=null===(e=null==r?void 0:r.extension)||void 0===e?void 0:e._TRACK_CHILDREN)&&void 0!==t?t:"none"}},{key:"registerBusyState",value:function(){var e=n.getContext(this.Element).getBusyContext();this._resolveCreatedBusyState&&this.throwError("Registering busy state before previous state is resolved."),this._resolveCreatedBusyState=e.addBusyState({description:h.getElementInfo(this.Element)+" is being upgraded."})}},{key:"resolveBusyState",value:function(){var e=this._resolveCreatedBusyState;e||this.throwError("Resolving busy state before one is registered."),this._resolveCreatedBusyState=null,e()}},{key:"beginCreate",value:function(e){var t=this;this._preCreatedPromise||(this._preCreatedPromise=this.GetPreCreatedPromise()),this.isComplete&&this._resetStateFlags(),this._createdPromise=this._preCreatedPromise.then(e),this._createdPromise.then(function(){t.Element.classList.add("oj-complete"),t._completeHandler()},function(e){if(t.Element.classList.add("oj-incomplete"),t._completeHandler(),e)throw e})}},{key:"throwError",value:function(e,t){var r=h.getElementInfo(this.Element)+": "+e;throw t&&(r=r+" "+(t.stack?t.stack:t)),new Error(r)}},{key:"resolveBindingProvider",value:function(e){var t;this._resolveBindingProviderCallback?(null===(t=this._bindingProviderCallback)||void 0===t||t.call(this),this._resolveBindingProviderCallback(e),this._resolveBindingProviderCallback=null,this._rejectBindingProviderCallback=null):this._bindingProvider=e}},{key:"rejectBindingProvider",value:function(e){this._rejectBindingProviderCallback&&(this._rejectBindingProviderCallback(e),this._resolveBindingProviderCallback=null,this._rejectBindingProviderCallback=null)}},{key:"disposeBindingProvider",value:function(){this.isDisposed=!0,this.isComplete||this.rejectBindingProvider()}},{key:"setBindingProviderCallback",value:function(e){this._bindingProviderCallback=e}},{key:"getBindingProviderPromise",value:function(){var e,t,r=this;if(!this._bindingProviderPromise){var n=this._walkBindingProviders(this.Element);"none"===n?(null===(e=this._bindingProviderCallback)||void 0===e||e.call(this),this._bindingProviderPromise=Promise.resolve(null)):"knockout"===n?this._bindingProvider?(null===(t=this._bindingProviderCallback)||void 0===t||t.call(this),this._bindingProviderPromise=Promise.resolve(this._bindingProvider)):this._bindingProviderPromise=new Promise(function(e,t){r._resolveBindingProviderCallback=e,r._rejectBindingProviderCallback=t}):this.throwError("Unknown binding provider '"+n+"'.")}return this._bindingProviderPromise}},{key:"getDescriptiveText",value:function(){var e=this.GetDescriptiveValue("aria-label")||this.GetDescriptiveValue("title")||this.GetDescriptiveLabelByValue("labelled-by")||this.GetDescriptiveValue("label-hint")||this.GetDescriptiveLabelByValue("aria-labelledby");return e=e?e.trim().replace(/\s+/g," "):""}},{key:"GetCreatedPromise",value:function(){return this._createdPromise}},{key:"GetPreCreatedPromise",value:function(){var e=this,t=this.getBindingProviderPromise();return"none"!==this.getTrackChildrenOption()&&(t=t.then(function(t){return e._getTrackedChildrenPromises(t)})),t}},{key:"IsTransferAttribute",value:function(e){return!1}},{key:"GetDescriptiveValue",value:function(e){var t=f.attributeToPropertyName(e),r=h.getElementProperties(this.Element);return r&&r[t]?this.Element[t]:this.IsTransferAttribute(e)?this.GetDescriptiveTransferAttributeValue(e):this.Element.getAttribute(e)}},{key:"GetDescriptiveTransferAttributeValue",value:function(e){return""}},{key:"GetDescriptiveLabelByValue",value:function(e){var t=this.GetDescriptiveValue(e);if(t){var r=document.getElementById(t);if(r)return r.textContent}return null}},{key:"GetBindingProviderName",value:function(e){return null}},{key:"_completeHandler",value:function(){this.isComplete||(this.isConnected&&this.resolveBusyState(),this.isComplete=!0)}},{key:"_walkBindingProviders",value:function(e){var t=e._ojBndgPrv;if(t)return t;if(!(t=e.getAttribute("data-oj-binding-provider")||this.GetBindingProviderName(e))){var r=e.parentElement;null==r?e===document.documentElement?t="knockout":this.throwError("Cannot determine binding provider for a disconnected subtree."):t=this._walkBindingProviders(r)}return Object.defineProperty(e,"_ojBndgPrv",{value:t}),t}},{key:"_getTrackedChildrenPromises",value:function(e){var t=this.getTrackChildrenOption(),r=n.getContext(this.Element).getBusyContext(),o=this._getChildrenToTrack(this.Element,t,[]).map(function(t){if(!e){var n=r.addBusyState({description:"Waiting for element "+t.localName+" to be defined."}),o=setInterval(function(){i.warn("Waiting for element "+t.localName+" to be defined.")},2e4);return customElements.whenDefined(t.localName).then(function(){return n(),clearInterval(o),h.isElementRegistered(t.tagName)?h.getElementState(t).GetCreatedPromise():null}).catch(function(e){throw n(),clearInterval(o),new Error("Error defining element "+t.localName+" : "+e)})}return h.isElementRegistered(t.tagName)?h.getElementState(t).GetCreatedPromise():null});return Promise.all(o)}},{key:"_getChildrenToTrack",value:function(e,t,r){for(var n=e.childNodes,i=0;i<n.length;i++){var o=n[i];a.isValidCustomElementName(o.localName)?r.push(o):"nearestCustomElement"===t&&this._getChildrenToTrack(o,t,r)}return r}},{key:"_resetStateFlags",value:function(){this._createdPromise=null,this.isComplete=!1}}]),t}();t.AttributeUtils=f,t.CustomElementUtils=h,t.ElementState=p,t.ElementUtils=a,Object.defineProperty(t,"__esModule",{value:!0})})}();
//# sourceMappingURL=ojcustomelement-utils.js.map