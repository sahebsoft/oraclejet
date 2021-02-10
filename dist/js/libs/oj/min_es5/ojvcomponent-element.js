!function(){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,e,o){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,o||t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=a(t);if(e){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}
/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */define(["require","exports","ojs/ojvcomponent","ojs/ojvdom","ojs/ojcustomelement","ojs/ojcore-base","ojs/ojdefaultsutils","ojs/ojcontext","ojs/ojcustomelement-utils"],function(t,i,u,l,c,p,_,h,f){"use strict";p=p&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p,h=h&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h;
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var d=function(t){r(n,t);var e=s(n);function n(){return o(this,n),e.apply(this,arguments)}return n}(u.VComponent),m=u.flattenChildren,E=function(i){r(_,i);var u,l,c,p=s(_);function _(){return o(this,_),p.apply(this,arguments)}return u=_,(l=[{key:"getTemplateEngine",value:function(){return _._cachedTemplateEngine}},{key:"getTrackChildrenOption",value:function(){return this.Element._vcomp?"none":"immediate"}},{key:"GetPreCreatedPromise",value:function(){var t=this,e=n(a(_.prototype),"GetPreCreatedPromise",this).call(this);return!_._cachedTemplateEngine&&this._hasDirectTemplateChildren()?e.then(function(){return t._getTemplateEnginePromise()}):e}},{key:"IsTransferAttribute",value:function(t){var e=this.Element._vcomp,n=f.CustomElementUtils.getElementBridge(this.Element)._EXTENSION._ROOT_PROPS_MAP;return e&&n&&!!n[t]}},{key:"GetDescriptiveTransferAttributeValue",value:function(t){return f.CustomElementUtils.getElementBridge(this.Element)._getVComponentProps()[t]}},{key:"_getTemplateEnginePromise",value:function(){return new Promise(function(e,n){t(["ojs/ojtemplateengine"],function(t){e(function(t){if(t&&t.__esModule)return t;var e={};return t&&Object.keys(t).forEach(function(n){var o=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,o.get?o:{enumerable:!0,get:function(){return t[n]}})}),e.default=t,e}(t))},n)}).then(function(t){_._cachedTemplateEngine=t.default})}},{key:"_hasDirectTemplateChildren",value:function(){for(var t=this.Element.childNodes,e=0;e<t.length;e++)if("template"===t[e].localName)return!0;return!1}}])&&e(u.prototype,l),c&&e(u,c),_}(f.ElementState),v={};function P(t,e){switch(t.nodeType){case Node.COMMENT_NODE:return{_node:t,_isWrapped:!0};case Node.TEXT_NODE:return{_text:t.nodeValue,_node:t,_isWrapped:!0};case Node.ELEMENT_NODE:var n=[];t.childNodes.forEach(function(t){var e=P(t);e&&n.push(e)});var o={type:t.tagName.toLowerCase(),props:t,content:n,_node:t,_isWrapped:!0};return null!=e&&o.props.slot!==e&&(o.props.slot=e),o;default:return null}}function C(t,e){var n,o=(n=e[0])&&n._node;if("TEMPLATE"!==o.nodeName)throw new Error("Template node expected for template slot, but found ".concat(o.nodeName," instead."));return function(e){var n=f.CustomElementUtils.getElementBridge(t).State.getTemplateEngine();if(!n)throw new Error("Unexpected call to render a template slot");return n.execute(t,o,e).map(function(t){var e=P(t);return e._clean=n.clean.bind(null,t),e})}}v._DEFAULT_SLOT_PROP="children",v.proto=Object.create(p.BaseCustomElementBridge.proto),p.CollectionUtils.copyInto(v.proto,{AddComponentMethods:function(t){t.setProperty=function(t,e){var n=f.CustomElementUtils.getElementBridge(this);n.SaveEarlyPropertySet(this,t,e)||n.SetProperty(this,t,e,this,!0)},t.getProperty=function(t){return f.CustomElementUtils.getElementBridge(this).GetProperty(this,t,this)}},AttributeChangedCallback:function(t,e,n){if(p.BaseCustomElementBridge.proto.AttributeChangedCallback.call(this,t,e,n),e!==n){var o=f.CustomElementUtils.getElementBridge(this);if(!o.ShouldHandleAttributeChanged(this)&&p.BaseCustomElementBridge.proto.ShouldHandleAttributeChanged.call(o,this)){var r=this._vcomp;r&&!r.isCustomElementFirst()||o.HandleAttributeChanged(this,t,e,n)}}},CreateComponent:function(t){var e=t._vcomp;if(!e){var n=this._initSlotMapAndRootProps(t),o=this._getVComponentProps();(e=new(f.CustomElementUtils.getElementDescriptor(t.tagName)._CONSTRUCTOR)(o))._uniqueId=n.uniqueId,t._vcomp=e,e.setCallbacks(this._getCallbacks(t)),this._mountCustomElement(t,e,o,n.slotMap)}e.mounted()},DefineMethodCallback:function(t,e,n){t[e]=function(){if(!this._vcomp){var t=f.CustomElementUtils.getElementBridge(this);t.State.throwError("Cannot access methods before element is upgraded.")}return this._vcomp[e].apply(this._vcomp,arguments)}},DefinePropertyCallback:function(t,e,n){function o(t,o){this._BRIDGE._updateProperty(this._ELEMENT,e,t,n,o)}function r(){var t=this._BRIDGE._PROPS[e];return void 0===t&&(t=this._BRIDGE._getDefaultValue(e,n),this._BRIDGE._PROPS[e]=t),t}n._derived||p.BaseCustomElementBridge.__DefineDynamicObjectProperty(t._propsProto,e,function(){return r.bind(this)()},function(t){o.bind(this)(t,!1)}),p.BaseCustomElementBridge.__DefineDynamicObjectProperty(t,e,function(){var t=this._vcomp;if(!t||t.isCustomElementFirst()){var e=f.CustomElementUtils.getElementBridge(this);return r.bind(e._PROPS_PROXY)()}},function(t){var e=this._vcomp,n=f.CustomElementUtils.getElementBridge(this);!e||e.isCustomElementFirst()?o.bind(n._PROPS_PROXY)(t,!0):e&&!e.isCustomElementFirst()&&n.State.throwError("Cannot set properties on a VComponent-first element.")})},GetAttributes:function(t){var e=p.BaseCustomElementBridge.proto.GetAttributes.call(this,t),n=t.extension&&t.extension._ROOT_PROPS_MAP;return n&&Object.keys(n).forEach(function(t){e.push(f.AttributeUtils.getGlobalAttrForProp(t))}),e},ShouldHandleAttributeChanged:function(t){if(!p.BaseCustomElementBridge.proto.ShouldHandleAttributeChanged.call(this,t))return!1;var e=t._vcomp;return!e||e.isCustomElementFirst()&&!e.isPatching()},HandleAttributeChanged:function(t,e,n,o){var r=t._vcomp,i=this._EXTENSION._ROOT_PROPS_MAP;if(r&&i){var s=f.AttributeUtils.getGlobalPropForAttr(e)||e;if(i[s]&&n!==o){if(null==o)delete this._LIVE_CONTROLLED_PROPS[s],r.isPatching()||delete this._VCOMP_CONTROLLED_PROPS[s];else{var u=t[s];this._LIVE_CONTROLLED_PROPS[s]=null!=u?u:o,r.isPatching()||(this._VCOMP_CONTROLLED_PROPS[s]=this._LIVE_CONTROLLED_PROPS[s])}r.isPatching()||this._queueRender(t)}}},HandleReattached:function(t){this._verifyConnectDisconnect(t,1)},HandleDetached:function(t){this._verifyConnectDisconnect(t,0)},_verifyConnectDisconnect:function(t,e){t._vcomp&&t._vcomp.isCustomElementFirst()&&(-1===this._verifyingState&&window.queueMicrotask(function(){this._verifyingState===e&&(0===this._verifyingState?this._unmountAndReset(t):t._vcomp.notifyMounted()),this._verifyingState=-1}.bind(this)),this._verifyingState=e)},InitializeElement:function(t){if(!t._vcomp){p.Components&&p.Components.markPendingSubtreeHidden(t),p.BaseCustomElementBridge.__InitProperties(t,t);var e=this.METADATA.events;e&&this.InitializeActionCallbacks(t,e);var n=this._EXTENSION._WRITEBACK_PROPS;n&&this.InitializeWritebackCallbacks(n)}},InitializePrototype:function(t){p.BaseCustomElementBridge.proto.InitializePrototype.call(this,t),Object.defineProperty(t,"_propsProto",{value:{}})},initializeBridge:function(t,e){p.BaseCustomElementBridge.proto.initializeBridge.call(this,t,e),this._verifyingState=-1,this._EXTENSION=this.METADATA.extension||{},this._CONSTRUCTOR=e._CONSTRUCTOR,this._PROPS={},this._EVENT_QUEUE=[],t._propsProto&&(this._PROPS_PROXY=Object.create(t._propsProto),this._PROPS_PROXY._BRIDGE=this,this._PROPS_PROXY._ELEMENT=t),this._LIVE_CONTROLLED_PROPS={},this._VCOMP_CONTROLLED_PROPS={}},InitializeActionCallbacks:function(t,e){var n=this;Object.keys(e).forEach(function(o){var r=e[o],i=f.AttributeUtils.eventTypeToEventListenerProperty(o);n._PROPS[i]=function(e){var i=Object.assign({},e),s=!!r.cancelable,u=[];s&&(i.accept=function(t){u.push(t)});var a={detail:i,bubbles:!!r.bubbles,cancelable:s},l=new CustomEvent(o,a),c=n._queueFireEventsTask(l,t);if(s)return c.then(function(){return l.defaultPrevented?Promise.reject():Promise.all(u).then(function(){return Promise.resolve()},function(t){return Promise.reject(t)})})}})},InitializeWritebackCallbacks:function(t){var e=this;t.forEach(function(t){var n=f.AttributeUtils.propertyNameToChangedCallback(t);e._PROPS[n]=function(n){e._PROPS_PROXY[t]=n}})},HandlePropertyChanged:function(t,e,n,o,r,i){this._queuePropertyChangedEvent(t,e,n,o,r,i)},ValidateAndSetProperty:function(t,e,n,o,r){var i=this.ValidatePropertySet(r,n,o);v.__SetProperty(t,e,n,i)},_mountCustomElement:function(t,e,n,o){this._content||(this._content=v._processSlotContent(t,o));var r=Object.assign({},this._LIVE_CONTROLLED_PROPS);e.mountContent(n,this._content,t,r)},_updateProperty:function(t,e,n,o,r){if(!this.SaveEarlyPropertySet(t,e,n)){var i=this._PROPS[e];if(!p.BaseCustomElementBridge.__CompareOptionValues(e,o,n,i)){var s=n;r&&(s=this.ValidatePropertySet(t,e,n)),void 0===s?delete this._PROPS[e]:this._PROPS[e]=s,this.State.dirtyProps.add(e),this._queuePropertyChangedEvent(t,e,s,i,r,null),t._vcomp&&!o.readOnly&&this._queueRender(t)}}},_queuePropertyChangedEvent:function(t,e,n,o,r,i){if(!this._SKIP_PROP_CHANGE_EVENT&&(!r||this.State.isComplete)){var s=r?"external":"internal",u=this._getPropertyChangedEvent(e,n,o,s,i);this._queueFireEventsTask(u,t)}},_queueFireEventsTask:function(t,e){var n=this;if(this._EVENT_QUEUE.push(t),!this._eventsQueued){var o=h.getContext(e).getBusyContext().addBusyState({description:f.CustomElementUtils.getElementInfo(e)+" event queued."});this._eventsQueued=new Promise(function(t){window.queueMicrotask(function(){var n=this._EVENT_QUEUE.shift();try{for(;n;)e.dispatchEvent(n),n=this._EVENT_QUEUE.shift()}catch(t){throw t}finally{t(),o(),this._eventsQueued=null}}.bind(n))})}return this._eventsQueued},_getPropertyChangedEvent:function(t,e,n,o,r){var i={};return r&&(i.subproperty=r),i.value=e,i.previousValue=n,i.updatedFrom=o,new CustomEvent(t+"Changed",{detail:i})},_queueRender:function(t){t._vcomp.queueRender(t,"propsUpdate")},_getVComponentProps:function(){var t=_.DefaultsUtils.getStaticDefaults(this._CONSTRUCTOR,this.METADATA,!0),e=Object.create(t);Object.assign(e,this._PROPS,this._VCOMP_CONTROLLED_PROPS);var n=this._EXTENSION._READ_ONLY_PROPS;return n&&n.forEach(function(t){return delete e[t]}),e},_getCallbacks:function(t){var e=this;return{getPropsForRender:function(){return e._getVComponentProps()},patch:function(n){var o=Object.assign({},e._LIVE_CONTROLLED_PROPS);t._vcomp.patchContent(n,o,e._content),v._storeUnslottedNodes(t,e._slotVNodes)},convertChildrenToSlotProps:function(n){if(!e._slotProps){e._slotVNodes=n;var o=function(t,e,n){var o=e.slots||{},r=n._DYNAMIC_SLOT,i=r?r.prop:null,s={};return t.forEach(function(t){var e,n,r,u=t.props?t.props.slot:"",a=v._DEFAULT_SLOT_PROP;if(u&&(a=u in o?u:i),a===i){if(!i)return;s[a]||(s[a]=(r=[],(n=u)in(e={})?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e)),s[a][u]||(s[a][u]=[]),s[a][u].push(t)}else a&&(s[a]||(s[a]=[]),s[a].push(t))}),s}(n,e.METADATA,e._EXTENSION);e._slotProps=function(t,e,n,o){var r={};return Object.keys(e).forEach(function(i){var s=e[i];i===v._DEFAULT_SLOT_PROP?r[i]=s:Array.isArray(s)?r[i]=n[i].data?C(t,s):s:(r[i]||(r[i]={}),Object.keys(s).forEach(function(e){r[i][e]=o&&o.isTemplate?C(t,s[e]):s[e]}))}),r}(t,o,e.METADATA.slots,e._EXTENSION._DYNAMIC_SLOT)}return e._slotProps}}},_initializeControlledProps:function(t){var e=this._EXTENSION._ROOT_PROPS_MAP;if(e){var n=this._LIVE_CONTROLLED_PROPS,o=this._VCOMP_CONTROLLED_PROPS;Object.keys(e).forEach(function(e){var r=f.AttributeUtils.getGlobalAttrForProp(e);if(t.hasAttribute(r)){var i=t[e];n[e]=null!=i?i:t.getAttribute(r),o[e]=n[e]}})}},_getDefaultValue:function(t){return _.DefaultsUtils.getFrozenDefault(t,this._CONSTRUCTOR,this.METADATA)},_unmountAndReset:function(t){t._vcomp.notifyUnmounted(),this._bCreateCalled=!1,v._storeAllSlotContent(t,this._slotVNodes),t._vcomp=null},_initSlotMapAndRootProps:function(t){return this._slotMap||(p.Components&&p.Components.unmarkPendingSubtreeHidden(t),this._uniqueId=f.ElementUtils.getUniqueId(t.id),this._slotMap=f.CustomElementUtils.getSlotMap(t),this._initializeControlledProps(t),Object.defineProperty(t,"_vcomp",{writable:!0,value:null,enumerable:!1})),{slotMap:this._slotMap,uniqueId:this._uniqueId}}}),v.register=function(t,e){var n=e.metadata,o={};o[p.BaseCustomElementBridge.DESC_KEY_META]=n,o._CONSTRUCTOR=e;var r={descriptor:o,bridgeProto:v.proto,stateClass:E};f.CustomElementUtils.registerElement(t,r)&&customElements.define(t,v.proto.getClass(o))},v._processSlotContent=function(t,e){var n=[];if(t.childNodes){t._nodeStorage||(t._nodeStorage=document.createElement("div"),t._nodeStorage.style.display="none",t.appendChild(t._nodeStorage));var o=[];Object.entries(e).forEach(function(t){var e=t[0];t[1].forEach(function(t){n.push(P(t,e)),o.push(t)})}),o.forEach(function(e){t._nodeStorage.appendChild(e),p.Components&&p.Components.subtreeHidden(e)})}return n},v.__SetProperty=function(t,e,n,o){var r,i=e,s=n.split("."),u=t(s[0]);s.length>1&&!e[u]&&(i=r={});for(var a=0;a<s.length;a++){var l=t(s[a]),c=i[l];a===s.length-1?i[l]=o:c?Object.isFrozen(c)&&(i[l]=p.CollectionUtils.copyInto({},c,void 0,!0)):i[l]={},i=i[l]}r&&(e[u]=r[u])},v._storeUnslottedNodes=function(t,e){e&&t._nodeStorage&&e.forEach(function(e){var n=e._node;n.isConnected||(t._nodeStorage.appendChild(n),p.Components&&p.Components.subtreeHidden(n))})},v._storeAllSlotContent=function(t,e){e&&t._nodeStorage&&e.forEach(function(e){var n=e._node;t._nodeStorage.appendChild(n),p.Components&&p.Components.subtreeHidden(n)})},Object.defineProperty(i,"classPropToObject",{enumerable:!0,get:function(){return u.classPropToObject}}),Object.defineProperty(i,"dynamicDefault",{enumerable:!0,get:function(){return u.dynamicDefault}}),Object.defineProperty(i,"h",{enumerable:!0,get:function(){return u.h}}),Object.defineProperty(i,"listener",{enumerable:!0,get:function(){return u.listener}}),i.ElementVComponent=d,i.customElement=function(t){return function(e){var n=e.prototype.render;function o(t,e){var n,o=(null===(n=e.extension)||void 0===n?void 0:n._ROOT_PROPS_MAP)||{};return{class:!0,style:!0,ref:!0,key:!0}[t]||o[t]||f.AttributeUtils.isEventListenerProperty(t)}e.prototype.render=function(){var r=n.call(this);return r.type!==t&&(r=l.h(t,null,r)),function(t,e){for(var n in t)if(!o(n,e))throw new Error("Component can only render controlled global properties or DOM event listeners on the root custom element. "+n+" will not be rendered.")}(r.props,e.metadata),r},e.prototype.mount=function(t,e,n){this._vnode=this._renderForMount(t,e);var o=this._ref=l.mountCustomElement(this._vnode,n);return Object.defineProperty(o,"_vcomp",{value:this,enumerable:!1,writable:!0}),o},e.prototype.patch=function(t,e,n,o){var r=this.props,i=this.state,s=this._vnode;this._vnode=this._renderForPatch(t,e),this._vnode._node=this._ref,this._patching=!0;try{l.patchCustomElement(this._vnode,s,n,o)}finally{this._patching=!1}this.updated(r,i)},e.prototype.mountContent=function(t,e,n,o){this._isCustomElementFirst=!0,this._ref=n,this._vnode=this._renderForMount(t,e),this._vnode._node=n,this._patching=!0;try{l.mountCustomElementContent(this._vnode,o)}finally{this._patching=!1}},e.prototype.patchContent=function(t,e,n){var o=this.props,r=this.state,i=this._vnode;this._vnode=this._renderForPatch(t,n),this._vnode._node=this._ref,this._patching=!0;try{l.patchCustomElementContent(this._vnode,i,e)}finally{this._patching=!1}this.updated(o,r)},e.prototype.setCallbacks=function(t){this._callbacks=t},e.prototype.isCustomElementFirst=function(){return!0===this._isCustomElementFirst},e.prototype.isPatching=function(){return this._patching},e.prototype.notifyUnmounted=function(){this._cancelQueuedRender(),l.removeChildren(this._ref,this._vnode.content),this.isCustomElementFirst()&&l.removeListeners(this._ref,this._vnode.props),this.unmounted(),l.patchRef(this._vnode.ref,null)},v.register(t,e)}},i.event=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{bubbles:!1};return t.bubbles,function(t,e){}},i.flattenChildren=m,i.method=function(){return function(t,e,n){}},i.readOnly=function(t,e){},i.rootProperty=function(){return function(t,e){}},Object.defineProperty(i,"__esModule",{value:!0})})}();
//# sourceMappingURL=ojvcomponent-element.js.map