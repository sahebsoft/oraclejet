!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}
/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */define(["ojs/ojmap","ojs/ojset","ojs/ojeventtarget","ojs/ojlogger"],function(e,i,s,r){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
/**
   * @preserve Copyright 2013 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
var a=function(){function s(e,i){t(this,s),this.baseDataProvider=e,this.options=i,this._mapJoinAttributes=new Map,this._fks=[],this._transform=[],this._joinDPs=[],this.JoiningAsyncIterable=function(){return function e(n,i,s){var r=this;t(this,e),this._parent=n,this.params=i,this._asyncIterator=s,this[Symbol.asyncIterator]=function(){return new r._parent.JoiningAsyncIterator(r._parent,r._asyncIterator,r.params)}}}(),this.JoiningAsyncIterator=function(){function e(n,i,s){t(this,e),this._parent=n,this._baseIterator=i,this._params=s}return n(e,[{key:"_fetchNext",value:function(){return this._baseIterator.next().then(function(t){return t})}},{key:"next",value:function(){var t=this;return this._fetchNext().then(function(e){return null!=e&&null!=e.value&&null!=t._parent.options?t._parent._joiningData(e.value.data,t._parent.options).then(function(t){return e.value.data=t,e}):e})}}]),e}(),this.FetchByKeysResults=function(){return function e(n,i,r){t(this,e),this._parent=n,this.fetchParameters=i,this.results=r,this[s._FETCHPARAMETERS]=i,this[s._RESULTS]=r}}(),this.FetchByOffsetResults=function(){return function e(n,i,r,a){t(this,e),this._parent=n,this.fetchParameters=i,this.results=r,this.done=a,this[s._FETCHPARAMETERS]=i,this[s._RESULTS]=r,this[s._DONE]=a}}(),this.Item=function(){return function e(n,i,r){t(this,e),this._parent=n,this.metadata=i,this.data=r,this[s._METADATA]=i,this[s._DATA]=r}}(),this.ItemMetadata=function(){return function e(n,i){t(this,e),this._parent=n,this.key=i,this[s._KEY]=i}}(),this._getJoinSpec(i)}return n(s,[{key:"fetchFirst",value:function(t){var e=t;t&&t.attributes?e.attributes=this._seperateBaseJoinAttributes(t):this._mapJoinAttributes=null;var n=this.baseDataProvider.fetchFirst(e);return new this.JoiningAsyncIterable(this,t,n[Symbol.asyncIterator]())}},{key:"fetchByKeys",value:function(t){var n=this,i=t;if(t&&t.attributes){var s=this._seperateBaseJoinAttributes(t);i={keys:t.keys,attributes:s,scope:t.scope}}else this._mapJoinAttributes=null;return this.baseDataProvider.fetchByKeys(i).then(function(i){var s=new e;if(null!=i&&null!=i.results){var r=[],a=[],o=[],u=0;return t.keys.forEach(function(t){o[u++]=t}),n._fetchByKeyResultsToArray(i,o,a,r),n._joiningData(r,n.options).then(function(e){return u=0,t.keys.forEach(function(t){s.set(t,new n.Item(n,a[u],e[u])),u++}),new n.FetchByKeysResults(n,t,s)})}})}},{key:"fetchByOffset",value:function(t){var e=this,n=t;t&&t.attributes?n={attributes:this._seperateBaseJoinAttributes(t),clientId:t.clientId,filterCriterion:t.filterCriterion,offset:t.offset,size:t.size,sortCriteria:t.sortCriteria}:this._mapJoinAttributes=null;return this.baseDataProvider.fetchByOffset(n).then(function(n){if(null!=n.results){for(var i=[],s=[],r=0;r<n.results.length;r++)i[r]=n.results[r].metadata,s[r]=n.results[r].data;var a=[];return e._joiningData(s,e.options).then(function(s){for(var r=0;r<n.results.length;r++)a[r]=new e.Item(e,i[r],s[r]);return new e.FetchByOffsetResults(e,t,a,n.done)})}})}},{key:"containsKeys",value:function(t){return this.baseDataProvider.containsKeys(t).then(function(t){return t})}},{key:"getTotalSize",value:function(){return this.baseDataProvider.getTotalSize().then(function(t){return t})}},{key:"isEmpty",value:function(){var t=this.baseDataProvider.isEmpty();return t}},{key:"getCapability",value:function(t){return"sort"==t||"filter"==t?null:this.baseDataProvider.getCapability(t)}},{key:"createOptimizedKeySet",value:function(t){return new i(t)}},{key:"createOptimizedKeyMap",value:function(t){if(t){var n=new e;return t.forEach(function(t,e){n.set(e,t)}),n}return new e}},{key:"_getJoinSpec",value:function(t){var e=t.joins;this._joinAlias=Object.keys(e);for(var n=0;n<this._joinAlias.length;n++){var i=e[this._joinAlias[n]];null!=i?(null!=i.foreignKeyMapping.foreignKey?this._fks[n]=i.foreignKeyMapping.foreignKey:null!=i.foreignKeyMapping.foreignKeys?this._fks[n]=i.foreignKeyMapping.foreignKeys:this._fks[n]=null,null!=i.foreignKeyMapping.transform?this._transform[n]=i.foreignKeyMapping.transform:this._transform[n]=null,this._joinDPs[n]=i.joinedDataProvider):(this._fks[n]=null,this._joinDPs[n]=null)}}},{key:"_seperateBaseJoinAttributes",value:function(t){this._mapJoinAttributes=new Map;for(var e=t.attributes,n=0,i=[],s=0;s<e.length;s++){var r=e[s],a=void 0,o=void 0;"string"==typeof r||r instanceof String?(a=r,o=r):(a=r.name,o=r.attributes);for(var u=!1,l=0;null!=this._joinAlias&&l<this._joinAlias.length;l++)if(a==this._joinAlias[l]){u=!0;break}if(u)if(this._mapJoinAttributes.has(a)){var h=this._mapJoinAttributes.get(a);null!=o&&(null==h&&(h=[]),h.concat(o),this._mapJoinAttributes.set(a,h))}else this._mapJoinAttributes.set(a,o);else i[n++]=o}for(var f=0;null!=this._fks&&f<this._fks.length;f++){var c=this._fks[f];i.includes(c)||(c instanceof Array?i=i.concat(c):i[n++]=this._fks[f])}return i}},{key:"_joiningData",value:function(t,e){var n=this;if(null==t||0==t.length||null==e.joins)return Promise.resolve(t);var i=[],s=[];this._getFKValues(t,this._fks,this._transform,i);for(var a=0;a<this._joinAlias.length;a++){var o=this._joinDPs[a],u=o.getCapability("fetchByKeys");if(null!=u&&"batchLookup"==u.implementation||r.warn("Warning: The joined data provider named '"+this._joinAlias[a]+"' does not support 'batchLookup' implementation for FetchByKeysCapability."),null==o)s[a]=null;else if(null==this._mapJoinAttributes)s[a]=o.fetchByKeys({keys:i[a]});else if(this._mapJoinAttributes.has(this._joinAlias[a])){var l=this._mapJoinAttributes.get(this._joinAlias[a]);s[a]=o.fetchByKeys({keys:i[a],attributes:l})}else s[a]=null}return Promise.all(s).then(function(e){for(var s=[],r=[],a=0;null!=e&&a<e.length;a++)(null==n._mapJoinAttributes||n._mapJoinAttributes.has(n._joinAlias[a]))&&(n._fetchByKeyResultsToArray(e[a],i[a],s,r),n._assignAliasData(t,n._joinAlias[a],r));return t})}},{key:"_getFKValues",value:function(t,e,n,i){for(var s=0;s<e.length;s++){for(var r=[],a=0;a<t.length;a++)if(null!=t[a]&&null!=e[s])if(null!=n&&null!=n[s]){var o=new Object;if(e[s]instanceof Array)for(var u=0;u<e[s].length;u++)o[e[s][u]]=t[a][e[s][u]];else o[e[s]]=t[a][e[s]];r[a]=n[s](o)}else if(e[s]instanceof Array){r[a]=[];for(var l=0;l<e[s].length;l++)r[a][l]=t[a][e[s][l]]}else r[a]=t[a][e[s]];else r[a]=null;i[s]=r}}},{key:"_fetchByKeyResultsToArray",value:function(t,e,n,i){if(null!=t&&null!=t.results&&0!=t.results.size)for(var s=0;s<e.length;s++){var r=t.results.get(e[s]);null!=r?(n[s]=r.metadata,i[s]=r.data):(n[s]=null,i[s]=null)}}},{key:"_assignAliasData",value:function(t,e,n){for(var i=0;i<t.length;i++)null!=t[i]&&null!=n&&(t[i][e]=n[i])}}]),s}();return a._REFRESH="refresh",a._MUTATE="mutate",a._ADDEVENTLISTENER="addEventListener",a._DATA="data",a._METADATA="metadata",a._FETCHPARAMETERS="fetchParameters",a._RESULTS="results",a._DONE="done",a._KEY="key",s.EventTargetMixin.applyMixin(a),a})}();
//# sourceMappingURL=ojjoiningdataprovider.js.map