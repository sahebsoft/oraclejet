!function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}function i(t,r){return!r||"object"!==e(r)&&"function"!=typeof r?s(t):r}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */define(["exports","ojs/ojcore-base","jquery","ojs/ojcomponentcore","ojs/ojlogger","ojs/ojdomutils","jqueryui-amd/position","ojs/ojcontext","ojs/ojvcomponent"],function(e,i,a,c,u,p,_,f,E){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,f=f&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f;
/**
   * @license
   * Copyright (c) 2004 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var h=function(e){this._tapCallback=e,this.Init()};i._registerLegacyNamespaceProp("SimpleTapRecognizer",h),i.Object.createSubclass(h,i.Object,"oj.SimpleTapRecognizer"),h.prototype.Init=function(){h.superclass.Init.call(this);var e=this._eventHandler.bind(this);this._eventHandlerCallback=e;for(var t,r=document.documentElement,n=0;n<h._TOUCHEVENTS.length;n++)"touchstart"===(t=h._TOUCHEVENTS[n])||"touchmove"===t?r.addEventListener(t,e,{passive:!1,capture:!0}):r.addEventListener(t,e,!0)},h.prototype._eventHandler=function(e){var t=this._tapCallback,r=e.type;if("touchstart"===r)this._touchStartEvent=e,this._touchStartEvent._tapStart=(new Date).getTime();else if("touchmove"===r||"touchcancel"===r)this._touchStartEvent=null;else if("touchend"===r){if(this._touchStartEvent){var n=this._touchStartEvent._tapStart;if(isNaN(n))t(this._touchStartEvent);else(new Date).getTime()-n<h._PRESSHOLDTHRESSHOLD&&t(this._touchStartEvent)}this._touchStartEvent=null}},h.prototype.destroy=function(){this._tapCallback=null;var e=this._eventHandlerCallback;this._eventHandlerCallback=null;for(var t,r=document.documentElement,n=0;n<h._TOUCHEVENTS.length;n++)"touchstart"===(t=h._TOUCHEVENTS[n])||"touchmove"===t?r.removeEventListener(t,e,{passive:!1,capture:!0}):r.removeEventListener(t,e,!0)},h._TOUCHEVENTS=["touchstart","touchmove","touchcancel","touchend"],h._PRESSHOLDTHRESSHOLD=700;var d=function(){this.Init()};i._registerLegacyNamespaceProp("PopupService",d),i.Object.createSubclass(d,i.Object,"oj.PopupService");var T=function(){this.Init()},v={};d.prototype.Init=function(){d.superclass.Init.call(this)},d.getInstance=function(e){return d._popupService||(d._popupService=new T),d._popupService},d.prototype.open=function(e){i.Assert.failedInAbstractFunction()},d.prototype.close=function(e){i.Assert.failedInAbstractFunction()},d.prototype.changeOptions=function(e){i.Assert.failedInAbstractFunction()},d.prototype.triggerOnDescendents=function(e,t,r){i.Assert.failedInAbstractFunction()},d.prototype.destroy=function(){d._popupService=null},d.MODALITY={NONE:"none",MODAL:"modal",MODELESS:"modeless"},d.EVENT={POPUP_REMOVE:"ojPopupRemove",POPUP_CLOSE:"ojPopupClose",POPUP_REFRESH:"ojPopupRefresh",POPUP_AUTODISMISS:"ojPopupAutoDismiss",POPUP_BEFORE_OPEN:"ojPopupBeforeOpen",POPUP_AFTER_OPEN:"ojPopupAfterOpen",POPUP_BEFORE_CLOSE:"ojPopupBeforeClose",POPUP_AFTER_CLOSE:"ojPopupAfterClose"},d.LAYER_LEVEL={TOP_LEVEL:"topLevel",NEAREST_ANCESTOR:"nearestAncestor"},d.OPTION={POPUP:"popup",EVENTS:"events",MODALITY:"modality",LAUNCHER:"launcher",POSITION:"position",LAYER_SELECTORS:"layerSelectors",LAYER_LEVEL:"layerLevel",CONTEXT:"context",CUSTOM_ELEMENT:"customElement"},i.__registerWidget("oj.ojSurrogate",a.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{beforeDestroy:null},_ComponentCreate:function(){this._super(),this.element.uniqueId()},_invokeBeforeDestroy:function(){var e=this.options.beforeDestroy;this.options.beforeDestroy=null,e&&e()},_destroy:function(){this._invokeBeforeDestroy(),this.element.removeUniqueId(),this._super()},_NotifyDetached:function(){this._invokeBeforeDestroy(),this._super()}});i.CustomElementBridge.register("oj-surrogate",{metadata:{properties:{beforeDestroy:{type:"function"}},extension:{_WIDGET_NAME:"ojSurrogate"}}}),i._registerLegacyNamespaceProp("PopupServiceImpl",T),i.Object.createSubclass(T,d,"oj.PopupServiceImpl"),T.prototype.open=function(e){i.Assert.assertObject(e);var t=e[d.OPTION.POPUP];i.Assert.assertPrototype(t,a);var r=v.getStatus(t);if(r===v.STATUS.UNKNOWN||r===v.STATUS.BEFORE_OPEN||r===v.STATUS.CLOSE){var n=e[d.OPTION.LAUNCHER];i.Assert.assertPrototype(n,a);var o=e[d.OPTION.POSITION];i.Assert.assertObjectOrNull(o);var s=e[d.OPTION.EVENTS];i.Assert.assertObject(s);var l=e[d.OPTION.MODALITY];(!l||d.MODALITY.MODELESS!==l&&d.MODALITY.MODAL!==l)&&(l=d.MODALITY.NONE);var _=e[d.OPTION.LAYER_SELECTORS];i.Assert.assertString(_);var f=e[d.OPTION.CUSTOM_ELEMENT],E=e[d.OPTION.LAYER_LEVEL];(!E||d.LAYER_LEVEL.TOP_LEVEL!==E&&d.LAYER_LEVEL.NEAREST_ANCESTOR!==E)&&(E=d.LAYER_LEVEL.NEAREST_ANCESTOR);var h=s[d.EVENT.POPUP_BEFORE_OPEN];h&&a.isFunction(h)||(h=T._defaultBeforeOpenCallback);var O=s[d.EVENT.POPUP_AFTER_OPEN];v.setStatus(t,v.STATUS.OPENING),p.setLogicalParent(t,n),v.addToAncestorLayer(t,n,l,_,E,f);var S,g=function(){try{t.removeAttr("aria-hidden"),this._assertEventSink(),c.subtreeShown(t[0])}catch(e){u.error("Error opening popup:\n%o",e)}finally{v.setStatus(t,v.STATUS.OPEN),O&&O(e);var r=v.getFirstAncestorLayer(t);if(i.Assert.assertPrototype(r,a),v.applyEvents(r,s),!v._getSurrogate(r)&&a.isFunction(s[d.EVENT.POPUP_REMOVE]))(0,s[d.EVENT.POPUP_REMOVE])()}};g=g.bind(this);try{S=h(e)}catch(e){u.error("Error before open popup:\n%o",e)}finally{S&&S instanceof Promise?S.then(g):g()}}else this._assertEventSink()},T._defaultBeforeOpenCallback=function(e){var t=e[d.OPTION.POPUP];i.Assert.assertPrototype(t,a);var r=e[d.OPTION.POSITION];t.show(),r&&t.position(r)},T.prototype.close=function(e){i.Assert.assertObject(e);var t=e[d.OPTION.POPUP];i.Assert.assertPrototype(t,a);var r=v.getOpenPopupLayer(t);i.Assert.assertPrototype(r,a);var n=e[d.OPTION.EVENTS];n?n=a.extend(v.getEvents(r),n):(n=v.getEvents(r),e[d.OPTION.EVENTS]=n);var o=v.getStatus(t);if(o!==v.STATUS.OPEN&&o!==v.STATUS.BEFORE_CLOSE||!n)this._assertEventSink();else{var s=n[d.EVENT.POPUP_BEFORE_CLOSE];s&&a.isFunction(s)||(s=T._defaultBeforeCloseCallback);var l=n[d.EVENT.POPUP_AFTER_CLOSE];v.setStatus(t,v.STATUS.CLOSING),v.applyEvents(r,{});var _,f=function(){try{t.hide(),t.attr("aria-hidden","true"),t.css({top:"auto",bottom:"auto",left:"auto",right:"auto"}),v.removeFromAncestorLayer(t),p.setLogicalParent(t,null),this._assertEventSink(),c.subtreeHidden(t[0])}catch(e){u.error("Error closing popup:\n%o",e)}finally{v.setStatus(t,v.STATUS.CLOSE),l&&a.isFunction(l)&&l(e)}};f=f.bind(this);try{_=s(e)}catch(e){u.error("Error before close popup:\n%o",e)}finally{_&&_ instanceof Promise?_.then(f):f()}}},T._defaultBeforeCloseCallback=function(e){var t=e[d.OPTION.POPUP];i.Assert.assertPrototype(t,a),t.hide()},T.prototype.changeOptions=function(e){i.Assert.assertObject(e);var t=e[d.OPTION.POPUP];if(i.Assert.assertPrototype(t,a),v.getStatus(t)===v.STATUS.OPEN){var r=v.getOpenPopupLayer(t);i.Assert.assertPrototype(r,a);var n=e[d.OPTION.EVENTS];n&&v.applyEvents(r,n);var o=e[d.OPTION.MODALITY];o&&v.applyModality(r,o);var s=e[d.OPTION.LAYER_SELECTORS];i.StringUtils.isEmptyOrUndefined(s)||r.attr("class",s)}},T.prototype.triggerOnDescendents=function(e,t,r){if(v.isPopupOpen(e)){var n={};n.event=t,n.argsArray=r;var o=v.getFirstAncestorLayer(e);v.postOrderVisit(o,this._triggerOnDescendentsVisitCallback,n)}},T.prototype._triggerOnDescendentsVisitCallback=function(e,t){var r=t.event,n=t.argsArray,o=v.getEvents(e);return o&&a.isFunction(o[r])&&o[r].apply(this,n),v.VISIT_RESULT.ACCEPT},T.prototype._assertEventSink=function(){var e,t,r,n=v.hasPopupsOpen(),o=this._callbackEventFilter;if(!n&&o){for(window.removeEventListener("resize",T._refreshCallback,!0),window.removeEventListener("scroll",T._refreshCallback,!0),(t=document.documentElement).removeEventListener("mousewheel",T._refreshCallback,{passive:!0,capture:!0}),t.removeEventListener("DOMMouseScroll",T._refreshCallback,!0),this._callbackEventFilter=null,e=0;e<T._REDISTRIBUTE_EVENTS.length;e++)r=T._REDISTRIBUTE_EVENTS[e],t.removeEventListener(r,o,!0);var i=this._simpleTapRecognizer;i&&(i.destroy(),this._simpleTapRecognizer=null)}else if(n&&!o){for(window.addEventListener("resize",T._refreshCallback,!0),window.addEventListener("scroll",T._refreshCallback,!0),(t=document.documentElement).addEventListener("mousewheel",T._refreshCallback,{passive:!0,capture:!0}),t.addEventListener("DOMMouseScroll",T._refreshCallback,!0),o=this._eventFilterCallback.bind(this),this._callbackEventFilter=o,e=0;e<T._REDISTRIBUTE_EVENTS.length;e++)r=T._REDISTRIBUTE_EVENTS[e],t.addEventListener(r,o,!0);p.isTouchSupported()&&(this._simpleTapRecognizer=new h(o))}},T.prototype._eventFilterCallback=function(e){var t=a(e.target);if(v.hasPopupsOpen()){if(!p.isChromeEvent(e)&&("focus"!==e.type||t.is(":focusable"))){var r=v.getDefaultLayer();if("keydown"!==e.type||!v.hasModalDialogOpen()||p.isAncestor(r[0],t[0])){var n,o=v.getFirstAncestorLayer(t);if(r[0]!==o[0]?o.hasClass(T._FOCUS_WITHIN_SELECTOR)||((n=this._lastFocusLayer)&&n.removeClass(T._FOCUS_WITHIN_SELECTOR),o.addClass(T._FOCUS_WITHIN_SELECTOR),this._lastFocusLayer=o):(n=this._lastFocusLayer)&&(n.removeClass(T._FOCUS_WITHIN_SELECTOR),this._lastFocusLayer=null),"focus"!==e.type||"-1"!==t.attr("tabindex")){for(var i={},s=T._COPY_SAFE_EVENT_PROPERTIES,l={},c=0;c<s.length;c++){var u=s[c],_=e[u];void 0===_||a.isFunction(_)||(l[u]=_)}i.event=a.Event(e,l),v.postOrderVisit(r,T._redistributeVisitCallback,i)}}else v.eatEvent(e)}}else this._assertEventSink()},T._redistributeVisitCallback=function(e,t){var r=v.getEvents(e),n=t.event;return r&&a.isFunction(r[d.EVENT.POPUP_AUTODISMISS])&&r[d.EVENT.POPUP_AUTODISMISS](n),v.VISIT_RESULT.ACCEPT},T._refreshCallback=function(e){isNaN(T._refreshTimerId)&&(T._refreshTimerId=window.setTimeout(function(){T._refreshTimerId=Number.NaN;var e=v.getDefaultLayer();a.isFunction(window.requestAnimationFrame)?T._afRequestId=window.requestAnimationFrame(function(){T._afRequestId=null,v.postOrderVisit(e,T._refreshVisitCallback)}):v.postOrderVisit(e,T._refreshVisitCallback)},T._REFRESH_DELAY))},T._refreshVisitCallback=function(e,t){if(t.level>0)return v.VISIT_RESULT.REJECT;var r=v.getEvents(e);return r&&a.isFunction(r[d.EVENT.POPUP_REFRESH])&&r[d.EVENT.POPUP_REFRESH](),v.VISIT_RESULT.ACCEPT},T.prototype.destroy=function(){T.superclass.destroy.call(this)},T._FOCUS_WITHIN_SELECTOR="oj-focus-within",T._REDISTRIBUTE_EVENTS=["focus","mousedown","keydown"],T._COPY_SAFE_EVENT_PROPERTIES=["altKey","bubbles","cancelable","ctrlKey","currentTarget","eventPhase","metaKey","relatedTarget","shiftKey","target","timeStamp","view","which","button","buttons","clientX","clientY","offsetX","offsetY","pageX","pageY","screenX","screenY","toElement","char","charCode","key","keyCode"],T._REFRESH_DELAY=10,i._registerLegacyNamespaceProp("ZOrderUtils",v),v.STATUS={UNKNOWN:0,BEFORE_OPEN:.5,OPENING:1,OPEN:2,BEFORE_CLOSE:2.5,CLOSING:3,CLOSE:4},v._STATUS_DATA="oj-popup-status",v.getStatus=function(e){e instanceof Element&&(e=a(e));var t=e.data(v._STATUS_DATA);return isNaN(t)?v.STATUS.UNKNOWN:t},v.setStatus=function(e,t){e instanceof Element&&(e=a(e)),t>v.STATUS.UNKNOWN&&t<=v.STATUS.CLOSE&&e.data(v._STATUS_DATA,t)},v.getFirstAncestorLayer=function(e){if(!e)return v.getDefaultLayer();for(var t=e;t&&t.length>0&&t.attr(v._SURROGATE_ATTR)!==v._DEFAULT_LAYER_ID;){if(v._hasSurrogate(t[0]))return t;t=t.parent()}return v.getDefaultLayer()},v.getDefaultLayer=function(){var e=a(document.getElementById(v._DEFAULT_LAYER_ID));return e.length>0||((e=a("<div>")).attr("role","presentation"),e.attr("id",v._DEFAULT_LAYER_ID),e.prependTo(a(document.body))),e},v.addToAncestorLayer=function(e,t,r,n,o,s){var l=e[0];if(v._hasSurrogate(l.parentNode))throw new Error("JET Popup is already open - id: "+l.getAttribute("id"));var u=v.getFirstAncestorLayer(o===d.LAYER_LEVEL.TOP_LEVEL?null:t),p=a("<div>"),_=e.attr("id");i.StringUtils.isEmptyOrUndefined(_)?p.uniqueId():p.attr("id",[_,"layer"].join("_")),p.attr("role","presentation"),p.addClass(n),e.after(p),v._createSurrogate(p,s),c.subtreeDetached(l),e.appendTo(p),e.data(v._LAYER_ID_DATA,p.attr("id")),p.appendTo(u),c.subtreeAttached(l),v.applyModality(p,r)},v._getSurrogate=function(e){var t=e.attr(v._SURROGATE_ATTR);if(t)return document.getElementById(t)},v.applyEvents=function(e,t,r){r||(r=a(v._getSurrogate(e))),e.data(v._EVENTS_DATA,t),r.length>0&&t&&a.isFunction(t[d.EVENT.POPUP_REMOVE])&&c.setComponentOption(r[0],"beforeDestroy",t[d.EVENT.POPUP_REMOVE])},v.getEvents=function(e){return e.data(v._EVENTS_DATA)},v._createSurrogate=function(e,t){var r="script";t&&(r="oj-surrogate");var n=a(document.createElement(r)),o=e.attr("id");i.StringUtils.isEmptyOrUndefined(o)||n.attr("id",[o,"surrogate"].join("_")),t&&n.attr("data-oj-binding-provider","none"),n.insertBefore(e),t||n.ojSurrogate();var s=n.attr("id");return e.attr(v._SURROGATE_ATTR,s),n},v._removeSurrogate=function(e){var t=e.attr(v._SURROGATE_ATTR);e.removeAttr(v._SURROGATE_ATTR);var r=a(document.getElementById(t)),n=r.length>0;return n&&(e.insertAfter(r),c.setComponentOption(r[0],"beforeDestroy",null),r.remove()),n},v.getOpenPopupLayer=function(e){var t=e.parent();if(!t||0===t.length){var r=e.data(v._LAYER_ID_DATA);t=a(document.getElementById(r))}return t},v.removeFromAncestorLayer=function(e){var t=v.getOpenPopupLayer(e);v.preOrderVisit(t,v._closeDescendantPopupsCallback),v._removeOverlayFromAncestorLayer(t),t.removeData(v._EVENTS_DATA),t.removeData(v._MODALITY_DATA),e.removeData(v._LAYER_ID_DATA);var r=e[0];c.subtreeDetached(r),v._removeSurrogate(t)&&r&&r.parentElement?(p.unwrap(e,t),c.subtreeAttached(r)):t.remove()},v._closeDescendantPopupsCallback=function(e,t){if(t.level>0)return v.VISIT_RESULT.REJECT;var r=e.data(v._EVENTS_DATA);return r&&a.isFunction(r[d.EVENT.POPUP_CLOSE])&&r[d.EVENT.POPUP_CLOSE](),v.VISIT_RESULT.ACCEPT},v.applyModality=function(e,t){var r=e.data(v._MODALITY_DATA);e.data(v._MODALITY_DATA,t),i.StringUtils.isEmptyOrUndefined(r)?d.MODALITY.MODAL===t?v._addOverlayToAncestorLayer(e):v._removeOverlayFromAncestorLayer(e):r!==t&&(t!==r&&t===d.MODALITY.MODAL?v._addOverlayToAncestorLayer(e):v._removeOverlayFromAncestorLayer(e)),t===d.MODALITY.MODAL?e.attr("aria-modal","true"):e.removeAttr("aria-modal")},v.hasModalDialogOpen=function(){for(var e=v.getDefaultLayer().children(),t=e.length-1;t>-1;t--){if(a(e[t]).hasClass(v._OVERLAY_SELECTOR))return!0}return!1},v._addOverlayToAncestorLayer=function(e){var t=a("<div>");t.addClass(v._OVERLAY_SELECTOR),t.addClass(e[0].className),t.attr("role","presentation");var r=e.attr("id");i.StringUtils.isEmptyOrUndefined(r)?t.uniqueId():t.attr("id",[r,"overlay"].join("_")),e.before(t);var n=t.attr("id");e.attr(v._OVERLAY_ATTR,n)},v._removeOverlayFromAncestorLayer=function(e){var t=e.attr(v._OVERLAY_ATTR);i.StringUtils.isEmptyOrUndefined(t)||(e.removeAttr(v._OVERLAY_ATTR),a(document.getElementById(t)).remove())},v.VISIT_RESULT={ACCEPT:0,REJECT:1,COMPLETE:2},v._VISIT_TRAVERSAL={PRE_ORDER:0,POST_ORDER:1},v.postOrderVisit=function(e,t,r){var n=r;r||(n={}),n.level=0,n.type=v._VISIT_TRAVERSAL.POST_ORDER,v._visitTree(e,t,n)},v.preOrderVisit=function(e,t,r){var n=r;r||(n={}),n.level=0,n.type=v._VISIT_TRAVERSAL.PRE_ORDER,v._visitTree(e,t,n)},v._visitTree=function(e,t,r){for(var n=r.level,o=e.children(),i=o.length-1;i>-1;i--){var s=a(o[i]);if(v._hasSurrogate(s[0])){var l;if(r.type===v._VISIT_TRAVERSAL.PRE_ORDER){if((l=t(s,r))===v.VISIT_RESULT.COMPLETE)return l;if(l===v.VISIT_RESULT.REJECT)break}if(r.level=n+1,l=v._visitTree(s,t,r),r.level=n,l===v.VISIT_RESULT.COMPLETE)return l;if(r.type===v._VISIT_TRAVERSAL.POST_ORDER){if((l=t(s,r))===v.VISIT_RESULT.COMPLETE)return l;if(l===v.VISIT_RESULT.REJECT)break}}}return v.VISIT_RESULT.ACCEPT},v._hasSurrogate=function(e){return!(!e||1!==e.nodeType||!e.hasAttribute(v._SURROGATE_ATTR))},v.hasPopupsOpen=function(){return v.getDefaultLayer().children().length>0},v.getOpenPopupCount=function(){var e={popupCount:0},t=v.getDefaultLayer();return v.preOrderVisit(t,v._openPopupCountCallback,e),e.popupCount},v._openPopupCountCallback=function(e,t){return t.popupCount+=1,v.VISIT_RESULT.ACCEPT},v.findOpenPopups=function(){var e={},t=[];e.popups=t;var r=v.getDefaultLayer();return v.preOrderVisit(r,v._openPopupsCallback,e),t=e.popups,a(t)},v._openPopupsCallback=function(e,t){return t.popups.push(e[0]),v.VISIT_RESULT.ACCEPT},v.isAboveTopModalLayer=function(e){if(!e||!v.hasPopupsOpen())return!0;var t=function(){var e={topLayer:null},t=v.getDefaultLayer();if(v.preOrderVisit(t,function(e,t){if(t.level>0)return v.VISIT_RESULT.REJECT;var r=t.topLayer;return r?v.compareStackingContexts(a(e),a(r))>0&&(t.topLayer=e):t.topLayer=e,v.VISIT_RESULT.ACCEPT},e),e.topLayer)return e.topLayer[0]}();if(!t)return!0;var r=function(e){var t={topModalPopup:null};if(e.hasAttribute(v._OVERLAY_ATTR)&&(t.topModalPopup=a(e)),v.postOrderVisit(a(e),function(e,t){return e[0].hasAttribute(v._OVERLAY_ATTR)?(t.topModalPopup=e,v.VISIT_RESULT.COMPLETE):v.VISIT_RESULT.ACCEPT},t),t.topModalPopup)return t.topModalPopup[0]}(t);return!r||(p.isAncestorOrSelf(r,e)||v.compareStackingContexts(a(r),a(e))<0)},v.compareStackingContexts=function(e,t){function r(e,t){var r,n=["absolute","relative","fixed"],o=e.parents(),i=[];for(r=o.length-1;r>-1;r--)i.push(a(o[r]));(o=i).push(e);var s=[],l=0;for(r=0;r<o.length;r++){var c=o[r],u=c.css("position"),_=p.getCSSLengthAsFloat(c.css("opacity")),f=p.getCSSLengthAsInt(c.css("z-index")),E=a.inArray(c[0],c.parent().children());a.inArray(u,n)>-1&&f>0?(s.push({weight:[l,f,E],order:[E]}),l+=1):_<1?(s.push({weight:[l,1,E],order:[E]}),l+=1):t&&s.push({weight:[0,0,E],order:[E]})}return s}function n(e,t){for(var r=Math.max(e.length,t.length),n=0;n<r;n++){var o=n<e.length?e[n]:0,i=n<t.length?t[n]:0;if(o!==i)return o<i?-1:1}return 0}i.Assert.assertPrototype(e,a),i.Assert.assertPrototype(t,a);var o,s,l=r(e,!1),c=r(t,!1),u=Math.max(l.length,c.length);for(o=0;o<u;o++)if(0!==(s=n(o<l.length?l[o].weight:[-1],o<c.length?c[o].weight:[-1])))return s;for(l=r(e,!0),c=r(t,!0),u=Math.max(l.length,c.length),o=0;o<u;o++)if(0!==(s=n(o<l.length?l[o].order:[-1],o<c.length?c[o].order:[-1])))return s;return 0},v.eatEvent=function(e){e.stopPropagation(),e.preventDefault()},v.isPopupOpen=function(e){var t=e.parent();return!(!t||1!==t.length||!v._hasSurrogate(t[0]))},v._EVENTS_DATA="oj-popup-events",v._MODALITY_DATA="oj-popup-modality",v._DEFAULT_LAYER_ID="__oj_zorder_container",v._SURROGATE_ATTR="data-oj-surrogate-id",v._LAYER_ID_DATA="oj-popup-layer-id",v._OVERLAY_ATTR="data-oj-overlayid",v._OVERLAY_SELECTOR="oj-component-overlay";var O={};i._registerLegacyNamespaceProp("PositionUtils",O),O.normalizeHorizontalAlignment=function(e,t){for(var r=a.extend({},e),n=0;n<O._ALIGN_RULE_PROPERTIES.length;n++){var o=O._ALIGN_RULE_PROPERTIES[n],s=r[o];if(s)if(i.StringUtils.isString(s))r[o]=s.replace("start",t?"right":"left").replace("end",t?"left":"right").replace("<",t?"+":"-").replace(">",t?"-":"+");else for(var l=0;l<O._SUB_ALIGN_RULE_PROPERTIES.length;l++){var c=O._SUB_ALIGN_RULE_PROPERTIES[l],u=s[c];i.StringUtils.isString(u)&&(s[c]=u.replace("start",t?"right":"left").replace("end",t?"left":"right").replace("<",t?"+":"-").replace(">",t?"-":"+"))}}return r},O.normalizePositionOf=function(e,t,r){return"event"===e?r:null==e||"launcher"===e?t:e},O._normalizeEventForPosition=function(e){a.each(["pageX","pageY"],function(t,r){if(e&&void 0===e[r]&&e.originalEvent){var n,o=e.originalEvent,i=o.type;if(n="touchstart"===i||"touchmove"===i?"touches":"touchend"===i?"changedTouches":null){var s=o[n][0];s&&(e[r]=s[r])}}})},O._ALIGN_RULE_PROPERTIES=["my","at"],O._SUB_ALIGN_RULE_PROPERTIES=["vertical","horizontal"],O.isAligningPositionClipped=function(e){if(e.target&&e.target.height>0&&e.target.width>0){var t=e.target.element;return!O.isWithinViewport(t)}return!1},O.isWithinViewport=function(e){function t(e,t){var r;if(["hidden","scroll","auto"].indexOf(t.overflowY)>-1){if(e.bottom-t.top<-1)return!1;if(r="auto"===t.overflowX&&t.scrollWidth>t.innerWidth||"scroll"===t.overflowX?p.getScrollBarWidth():0,t.bottom-r-e.top<1)return!1}return!(["hidden","scroll","auto"].indexOf(t.overflowX)>-1&&(r="auto"===t.overflowY&&t.scrollHeight>t.innerHeight||"scroll"===t.overflowY?p.getScrollBarWidth():0,e.right-(t.left+("rtl"===p.getReadingDirection()?r:0))<-1||e.left-(t.right-("ltr"===p.getReadingDirection()?r:0))>-1))}function r(e){var t=e[0];if(1===t.nodeType){var r=a.extend({},t.getBoundingClientRect());return r.overflowX=e.css("overflow-x"),r.overflowY=e.css("overflow-y"),r.innerHeight=e.innerHeight(),r.innerWidth=e.innerWidth(),r.scrollHeight=t.scrollHeight,r.scrollWidth=t.scrollWidth,r}return{height:0,width:0}}function n(e){return["fixed","absolute","relative"].indexOf(e.css("position"))>-1&&(Math.abs(p.getCSSLengthAsInt(e.css("top")))>0||Math.abs(p.getCSSLengthAsInt(e.css("bottom")))>0||Math.abs(p.getCSSLengthAsInt(e.css("left")))>0||Math.abs(p.getCSSLengthAsInt(e.css("right")))>0)}if(!e)return!1;if(a.isWindow(e[0])||n(e))return!0;for(var o,i=r(e),s=!0,l=e.parent();s&&l&&l.length>0&&"BODY"!==l[0].nodeName&&1===l[0].nodeType&&!n(l);){if("visible"!==(o=l).css("overflow-x")||"visible"!==o.css("overflow-y")){var c=r(l);c.height>0&&c.width>0&&(s=t(i,c))}l=l.parent()}return s},O._ANIMATION_TRANSFORM_ORIGIN_RULES={"right-top":"right top","right-middle":"right center","right-bottom":"right bottom","left-top":"left top","left-middle":"left center","left-bottom":"left bottom","center-top":"center top","center-middle":"center center","center-bottom":"center bottom"},O._ALIGN_MNEMONIC_DATA="oj-popup-align-mnemonic",O.captureTransformOriginAnimationEffectsOption=function(e,t){var r=[t.horizontal,t.vertical].join("-");e.data(O._ALIGN_MNEMONIC_DATA,r)},O.addTransformOriginAnimationEffectsOption=function(e,t){var r,n;i.StringUtils.isString(t)?(n=!0,r=t):(n=!1,r=JSON.stringify(t));var o=/#myPosition/g;if(r.match(o)){var s=e.data(O._ALIGN_MNEMONIC_DATA);i.StringUtils.isEmptyOrUndefined(s)&&(s="center-middle");var a=O._ANIMATION_TRANSFORM_ORIGIN_RULES[s];r=r.replace(o,a),t=n?r:JSON.parse(r)}return t},O._JQUI_MNEMONIC_GRP_REGX=/^(\w+)(\+|-)?(\d+)?/,O._VERTICAL_ENUM_TST_REGX=/^top$|^center$|^bottom$/,O._HORIZONTAL_ENUM_TST_REGX=/^start$|^left$|^center$|^end$|^right$/,O._COLLISION_ENUM_TST_REGX=/^none$|^flip$|^flipfit$|^fit$|^flipcenter$/,O._parsePositionNmnemonic=function(e,t){var r=[null,Number.NaN],n=O._JQUI_MNEMONIC_GRP_REGX.exec(e);if(n[1]&&t.test(n[1])&&(r[0]=n[1],n[2])){var o=parseInt(n[3],10);isNaN(o)||(o*="-"===n[2]?-1:1,r[1]=o)}return r},O._parseJSON=function(e){if(i.StringUtils.isString(e)&&/^{/.test(e)&&/}$/.test(e))try{return JSON.parse(e)}catch(e){}return null},O._coerceMyAtToJet=function(e,t,r,n){var o=O._parseJSON(t);o&&(t=o),(o=O._parseJSON(r))&&(r=o),n||(n={});var s,l=a.extend({},n),c={x:0,y:0};if(r&&"x"in r&&"y"in r&&(c.x=p.getCSSLengthAsInt(r.x),c.y=p.getCSSLengthAsInt(r.y)),i.StringUtils.isString(t)){var u=t.split(/\s/);u.length>0&&!i.StringUtils.isEmpty(u[0])&&(s=O._parsePositionNmnemonic(u[0],O._HORIZONTAL_ENUM_TST_REGX))[0]&&(l.horizontal=s[0],isNaN(s[1])||(c.x=s[1])),u.length>1&&!i.StringUtils.isEmpty(u[1])&&(s=O._parsePositionNmnemonic(u[1],O._VERTICAL_ENUM_TST_REGX))[0]&&(l.vertical=s[0],isNaN(s[1])||(c.y=s[1]))}else t&&("horizontal"in t&&(s=O._parsePositionNmnemonic(t.horizontal,O._HORIZONTAL_ENUM_TST_REGX))[0]&&(l.horizontal=s[0],isNaN(s[1])||(c.x=s[1])),"vertical"in t&&(s=O._parsePositionNmnemonic(t.vertical,O._VERTICAL_ENUM_TST_REGX))[0]&&(l.vertical=s[0],isNaN(s[1])||(c.y=s[1])));var _={};return _[e]=l,_.offset=c,_},O._coerceCollisionToJet=function(e,t){var r=t;return O._COLLISION_ENUM_TST_REGX.test(e)&&(r=e),{collision:r}},O._coerceOfToJet=function(e,t){var r=O._parseJSON(e);r&&(e=r);var n=t;if(i.StringUtils.isString(e))n=e;else if(a.isWindow(e))n="window";else if(e instanceof Element||e instanceof a){(e=a(e)).uniqueId(),n="#"+function(e){for(var t=[],r=/\w|_|-/,n=0;n<e.length;n++){var o=e.substring(n,n+1);r.test(o)?t.push(o):t.push("\\"+o)}return t.join("")}(e.attr("id"))}else e instanceof Event||e instanceof a.Event?("pageX"in e||"pageY"in e)&&((n={}).x=p.getCSSLengthAsFloat(e.pageX),n.y=p.getCSSLengthAsFloat(e.pageY)):e&&("x"in e||"y"in e)&&((n={}).x=p.getCSSLengthAsFloat(e.x),n.y=p.getCSSLengthAsFloat(e.y));return{of:n}},O.coerceToJet=function(e,t){e||(e={});var r=O._parseJSON(e);r&&(e=r),t||(t={});var n=t.my,o=t.at,i=t.collision,s=t.of,l=O._coerceMyAtToJet("my",e.my,e.offset,n),c=O._coerceMyAtToJet("at",e.at,null,o),u={offset:{x:l.offset.x+c.offset.x,y:l.offset.y+c.offset.y}};return delete l.offset,delete c.offset,a.extend({},l,c,u,O._coerceCollisionToJet(e.collision,i),O._coerceOfToJet(e.of,s),function(e,t){return{using:a.isFunction(e)?e:t}}(e.using,void 0))},O.coerceToJqUi=function(e){function t(t,r){var n=[];if(e[t][r]?n.push(e[t][r]):n.push("center"),"my"===t&&e.offset){var o="horizontal"===r?"x":"y",i=e.offset[o];isNaN(i)||0===i||(n.push(i>0?"+":""),n.push(Math.floor(i).toString()))}return n.join("")}var r={};["my","at"].forEach(function(n){if(e[n]){var o=[];o.push(t(n,"horizontal")),o.push(" "),o.push(t(n,"vertical")),r[n]=o.join("")}});var n=e.of;if(i.StringUtils.isString(n))r.of="window"===n?window:n;else if(n&&!i.StringUtils.isString(n)&&"x"in n&&"y"in n){var o=n.x,s=n.y,l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,1,o,s,o,s,!1,!1,!1,!1,0,null),r.of=a.Event(l,{pageX:o,pageY:s})}else r.of=n;return e.collision&&(r.collision=e.collision),e.using&&(r.using=e.using),r},O.calcAvailablePopupSize=function(e,t,r){var n,o,i,s,l=a.position.getWithinInfo(r||window),c=a.position.getScrollInfo(l),u="rtl"===p.getReadingDirection(),_=u?c.width:0,f=u?0:c.width,E=t.element,h=t.target,d=l.isWindow?l.scrollLeft:0,T=l.isWindow?l.scrollTop:0,v=E.left,O=E.left+E.width,S=E.top,g=E.top+E.height,P=h.left,y=h.left+h.width,A=h.top,m=h.top+h.height,R=l.offset.left+d+_,L=l.offset.left+l.width+d-f,I=l.offset.top+T,N=l.offset.top+l.height+T-c.height;return v<P?(n=R,o=O<=P?P:O<=y?Math.min(y,L):L):v===P?P-R>L-y?(n=R,o=y):(n=P,o=L):v<y?(n=P,o=O<=y?y:L):(n=y,o=L),S<A?(i=I,s=g<=A?A:g<=m?Math.min(m,N):N):S===A?(i=A,s=N):S<m?(i=A,s=g<=m?m:N):(i=m,s=N),{width:o-n,height:s-i}},a.ui.position.flipcenter={left:function(e,t){var r=e.left;a.ui.position.flip.left.call(this,e,t);var n=t.within,o=n.isWindow?n.scrollLeft:n.offset.left,i=n.width,s=e.left-t.collisionPosition.marginLeft,l=o-s,c=s+t.collisionWidth-i-o;(l>0||c>0)&&("right"===t.at[0]?r-=t.targetWidth/2:"left"===t.at[0]&&(r+=t.targetWidth/2),r-=("rtl"===p.getReadingDirection()?-1:1)*(t.elemWidth/2),e.left=Math.max(0,r))},top:function(e,t){var r=e.top;a.ui.position.flip.top.call(this,e,t);var n=t.within,o=n.isWindow?n.scrollTop:n.offset.top,i=t.within.height,s=e.top-t.collisionPosition.marginTop,l=o-s,c=s+t.collisionHeight-i-o;(l>0||c>0)&&("top"===t.at[1]?r+=t.targetHeight/2:"bottom"===t.at[1]&&(r-=t.targetHeight/2),r+=t.elemHeight/2,e.top=Math.max(0,r))}};var S=a.ui.position.flip.left;a.ui.position.flip={left:S.bind(null),top:function(e,t){var r,n,o=t.within,i=o.offset.top+o.scrollTop,s=o.height,a=o.isWindow?o.scrollTop:o.offset.top,l=e.top-t.collisionPosition.marginTop,c=l-a,u=l+t.collisionHeight-s-a,p="top"===t.my[1];r=p?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,n="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0;var _,f,E=-2*t.offset[1];c<0?((_=e.top+r+n+E+t.collisionHeight-s-i)<0||_<Math.abs(c))&&u<0&&c>u&&(e.top+=r+n+E):u>0&&((f=e.top-t.collisionPosition.marginTop+r+n+E-a)>0||Math.abs(f)<u)&&(e.top+=r+n+E)}};
/**
   * @license
   * Copyright (c) 2004 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var g=function(){this.Init()};i._registerLegacyNamespaceProp("PopupLiveRegion",g),i.Object.createSubclass(g,i.Object,"oj.PopupLiveRegion"),g.prototype.Init=function(){g.superclass.Init.call(this),isNaN(g._refCounter)?g._refCounter=1:g._refCounter+=1},g.prototype.destroy=function(){if(!isNaN(g._refCounter)&&(g._refCounter-=1)<1){var e=a(document.getElementById(g._POPUP_LIVE_REGION_ID));e.length>0&&e.remove()}},g.prototype.announce=function(e){if(!i.StringUtils.isEmpty(e)){var t=g._getLiveRegion();t.children().remove(),setTimeout(function(){a("<div>").text(e).appendTo(t)},20)}},g._getLiveRegion=function(){var e=a(document.getElementById(g._POPUP_LIVE_REGION_ID));return 0===e.length&&((e=a("<div>")).attr({id:g._POPUP_LIVE_REGION_ID,role:"log","aria-live":"polite","aria-relevant":"additions"}),e.addClass("oj-helper-hidden-accessible"),e.appendTo(document.body)),e},g._POPUP_LIVE_REGION_ID="__oj_popup_arialiveregion";
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var P=function(e,t,r,n,o){i.Assert.assertPrototype(e,a),i.Assert.assertString(t),i.Assert.assertFunction(r),i.Assert.assertStringOrNull(n),this._options={insertBefore:!1,preventKeyEvents:!0},o&&(this._options=Object.assign({},this._options,o)),this._sibling=e,this._message=t,this._callback=r,this._id=n,this.Init()};i._registerLegacyNamespaceProp("PopupSkipLink",P),i.Object.createSubclass(P,i.Object,"oj.PopupSkipLink"),P.prototype.Init=function(){P.superclass.Init.call(this);var e=this._sibling,t=this._callback,r=this._message,n=this._options.insertBefore,o=this._options.preventKeyEvents;this._message=null;var i=this._id;this._id=null;var s=a(document.getElementById(i));s.length<1&&(s=a("<a>").attr({tabindex:"-1",href:"#",role:"link"})),s.attr("id",i),s.addClass("oj-helper-hidden-accessible"),s.text(r),n?s.insertBefore(e):s.insertAfter(e),s.on("click",P._activateHandler.bind(this,t)),o&&s.on("keydown keyup keypress",P._keyHandler),e.data(P._SKIPLINK_ATTR,s)},P._activateHandler=function(e,t){v.eatEvent(t),window.setImmediate(e)},P._keyHandler=function(e){e.keyCode===a.ui.keyCode.ENTER&&v.eatEvent(e)},P.prototype.destroy=function(){var e=this._sibling;if(delete this._sibling,delete this._callback,e){var t=e.data(P._SKIPLINK_ATTR);e.removeData(P._SKIPLINK_ATTR),t&&(t.off("click keydown keyup keypress"),t.remove())}},P.prototype.getLink=function(){var e,t=this._sibling;return t&&(e=t.data(P._SKIPLINK_ATTR)),e},P._SKIPLINK_ATTR="oj-skiplink";
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var y=function(e,t,r,n){this._element=e,this._operation=t,this._widgetName=r,this._isCustomElement=!!n,this.Init()};i._registerLegacyNamespaceProp("PopupWhenReadyMediator",y),i.Object.createSubclass(y,i.Object,"oj.PopupWhenReadyMediator"),y.prototype.Init=function(){y.superclass.Init.call(this),this._resolvedQueue=[],this._callback=this._eventHandler.bind(this);var e=this._operation,t=["oj"];this._isCustomElement?(t.push(e.charAt(0).toUpperCase()),t.push(e.slice(1))):t.push(e);var r=t.join("");this._eventType=r,this._element.on(r,this._callback);var n=f.getContext(this._element[0]).getBusyContext(),o={description:this._getBusyStateDescription.bind(this,this._element,this._operation,this._widgetName)},i=n.addBusyState(o);this.AddPromiseExecutor(i),this._whenReadyPromise=new Promise(this.AddPromiseExecutor.bind(this))},y.prototype._getBusyStateDescription=function(e,t,r){return r+" identified by '"+e.attr("id")+"' is busy animating on the '"+t+"' operation."},y.prototype._deliverResolved=function(e){var t=this._resolvedQueue;this._resolvedQueue=null;var r=e||this._operation;this._operation=null;for(var n=0;n<t.length;n++)try{t[n](r)}catch(e){u.error("Error resolving whenReady promises:\n%o",e)}this._whenReadyPromise=Promise.resolve("none")},y.prototype.destroy=function(){if(this._resolvedQueue&&this._deliverResolved("none"),this._callback){var e=this._eventType;this._element.off(e,this._callback)}this._callback=null,this._element=null,this._operation=null,this._whenReadyPromise=null,this._widgetName=null,this._eventType=null},y.prototype.getWhenReadyPromise=function(){return this._whenReadyPromise},y.prototype._eventHandler=function(e){e.target===this._element[0]&&(this._element.off(e.type,this._callback),this._deliverResolved(),this._callback=null)},y.prototype._getPendingOperation=function(){return this._operation?this._operation:"none"},y.prototype.AddPromiseExecutor=function(e,t){this._resolvedQueue&&this._resolvedQueue.push(e)},y.prototype.isOperationPending=function(e,t,r,n){var o=!1,i=this._widgetName,s=this._getPendingOperation();if(t===s)u.info("An %s instance invoked a '%s' operation while pending animation of the same type of operation.  The second request will be ignored.",i,t),o=!0;else if("none"!==s){u.info("An %s instance invoked a '%s' operation while pending animation of a '%s' operation. The second request will be invoked after the pending operation completes.",i,t,s),new Promise(this.AddPromiseExecutor.bind(this)).then(function(){this[r].apply(this,n)}.bind(e)),o=!0}return o};var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(f,e);var i,c,u,_=o(f);function f(e){var t;return l(this,f),(t=_.call(this,e))._setRootRef=t._setRootRef.bind(s(t)),t}return i=f,(c=[{key:"render",value:function(){return E.h("div",{style:{display:"none"},ref:this._setRootRef},this.props.children)}},{key:"mounted",value:function(){var e,r;this._popup=a(this._rootRef.firstChild);var n=(t(r={},d.OPTION.POPUP,this._popup),t(r,d.OPTION.EVENTS,(t(e={},d.EVENT.POPUP_AUTODISMISS,this.props.autoDismiss),t(e,d.EVENT.POPUP_REFRESH,function(){this._popup.position(this._getPosition())}.bind(this)),e)),t(r,d.OPTION.LAYER_SELECTORS,this.props.layerSelectors),t(r,d.OPTION.CUSTOM_ELEMENT,!0),t(r,d.OPTION.LAUNCHER,a(this._rootRef)),t(r,d.OPTION.POSITION,this._getPosition()),r);d.getInstance().open(n)}},{key:"unmounted",value:function(){d.getInstance().close(t({},d.OPTION.POPUP,this._popup))}},{key:"updated",value:function(){this._popup.position(this._getPosition())}},{key:"_setRootRef",value:function(e){this._rootRef=e}},{key:"_getPosition",value:function(){return O.normalizeHorizontalAlignment(this.props.position,"rtl"===p.getReadingDirection())}}])&&r(i.prototype,c),u&&r(i,u),f}(E.VComponent);A.metadata={extension:{_DEFAULTS:function e(){l(this,e),this.autoDismiss=null,this.layerSelectors="",this.position={}}}},e.PopupLiveRegion=g,e.PopupService=d,e.PopupSkipLink=P,e.PopupWhenReadyMediator=y,e.PositionUtils=O,e.VPopup=A,Object.defineProperty(e,"__esModule",{value:!0})})}();
//# sourceMappingURL=ojpopupcore.js.map