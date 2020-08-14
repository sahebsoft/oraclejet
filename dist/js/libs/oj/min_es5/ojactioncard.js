!function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,o){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,o)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var o,i=n(t);if(e){var a=n(this).constructor;o=Reflect.construct(i,arguments,a)}else o=i.apply(this,arguments);return function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}define(["exports","ojs/ojvcomponent","ojs/ojdomutils"],function(n,a,c){"use strict";
/**
   * @license
   * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */var u=function(t,e,o,n){var i,a=arguments.length,c=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(c=(a<3?i(c):a>3?i(e,o,c):i(e,o))||c);return a>3&&c&&Object.defineProperty(e,o,c),c};n.ActionCard=function(n){!function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&e(t,o)}(h,a.VComponent);var r,u,s,l=o(h);function h(t){var e;return i(this,h),(e=l.call(this,t)).state={active:!1,focus:!1},e._rootElemRef=function(t){e._rootElem=t},e}return r=h,(u=[{key:"render",value:function(){var t,e={"oj-actioncard":!0,"oj-active":this.state.active,"oj-focus-highlight":this.state.focus&&!c.recentPointer()},o=null!==(t=this.props.tabIndex)&&void 0!==t?t:0;return a.h("oj-action-card",{tabIndex:o,class:e,role:"button",onKeyup:this._handleKeyup,onMouseup:this._handleMouseup,onKeydown:this._handleKeydown,onMousedown:this._handleMousedown,onMousemove:this._handleMousemove,onTouchstart:this._handleTouchstart,onTouchend:this._handleTouchend,onTouchcancel:this._handleTouchcancel,onTouchmove:this._handleTouchmove,onFocusin:this._handleFocusin,onFocusout:this._handleFocusout,onOjAction:this._handleOjAction,ref:this._rootElemRef},this.props.children)}},{key:"_isFromActiveSource",value:function(t){var e=t.target;if(e===this._rootElem)return!1;for(;e!=this._rootElem;){if(e.hasAttribute("data-oj-clickthrough")&&"disabled"===e.getAttribute("data-oj-clickthrough"))return!0;e=e.parentNode}return!1}},{key:"_handleOjAction",value:function(t){this._isFromActiveSource(t)&&t.stopPropagation()}},{key:"_handleTouchstart",value:function(t){this._isFromActiveSource(t)||this.updateState({active:!0})}},{key:"_handleTouchend",value:function(t){var e,o;this._isFromActiveSource(t)||this.state.active&&(this.updateState({active:!1}),t.preventDefault(),t.stopPropagation(),null===(o=(e=this.props).onOjAction)||void 0===o||o.call(e,{originalEvent:t}))}},{key:"_handleTouchcancel",value:function(t){this._isFromActiveSource(t)||this.updateState({active:!1})}},{key:"_handleTouchmove",value:function(t){this.state.active&&(this._isFromActiveSource(t)||this.updateState({active:!1}))}},{key:"_handleKeydown",value:function(t){this._isFromActiveSource(t)||t.repeat||"Enter"!==t.key&&" "!==t.key||this.updateState({active:!0})}},{key:"_handleKeyup",value:function(t){var e,o;this._isFromActiveSource(t)||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),t.stopPropagation(),this.updateState({active:!1}),null===(o=(e=this.props).onOjAction)||void 0===o||o.call(e,{originalEvent:t}))}},{key:"_handleMousedown",value:function(t){this._isFromActiveSource(t)||this.updateState({active:!0})}},{key:"_handleMouseup",value:function(t){var e,o;this._isFromActiveSource(t)||this.state.active&&(t.preventDefault(),t.stopPropagation(),this.updateState({active:!1}),null===(o=(e=this.props).onOjAction)||void 0===o||o.call(e,{originalEvent:t}))}},{key:"_handleMousemove",value:function(t){this.state.active&&(this._isFromActiveSource(t)||this.updateState({active:!1}))}},{key:"_handleFocusin",value:function(t){this.updateState({focus:!0})}},{key:"_handleFocusout",value:function(t){this.updateState({focus:!1})}}])&&t(r.prototype,u),s&&t(r,s),h}(),n.ActionCard.metadata={extension:{_DEFAULTS:function t(){i(this,t)},_ROOT_PROPS_MAP:{tabIndex:!0,role:!0}},slots:{"":{}},events:{ojAction:{bubbles:!0}}},u([a.listener({passive:!1})],n.ActionCard.prototype,"_handleOjAction",null),u([a.listener({passive:!0})],n.ActionCard.prototype,"_handleTouchstart",null),u([a.listener({passive:!1})],n.ActionCard.prototype,"_handleTouchend",null),u([a.listener({passive:!0})],n.ActionCard.prototype,"_handleTouchcancel",null),u([a.listener({passive:!0})],n.ActionCard.prototype,"_handleTouchmove",null),u([a.listener({passive:!0})],n.ActionCard.prototype,"_handleKeydown",null),u([a.listener({passive:!1})],n.ActionCard.prototype,"_handleKeyup",null),u([a.listener({passive:!0})],n.ActionCard.prototype,"_handleMousedown",null),u([a.listener({passive:!1})],n.ActionCard.prototype,"_handleMouseup",null),u([a.listener({passive:!0})],n.ActionCard.prototype,"_handleMousemove",null),u([a.listener()],n.ActionCard.prototype,"_handleFocusin",null),u([a.listener()],n.ActionCard.prototype,"_handleFocusout",null),n.ActionCard=u([a.customElement("oj-action-card")],n.ActionCard),Object.defineProperty(n,"__esModule",{value:!0})})}();