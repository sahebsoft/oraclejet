!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}
/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */define(["ojs/ojcore-base","ojs/ojdataprovider","ojs/ojeventtarget"],function(e,i,r){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;
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
var s=function(){function r(e,i){t(this,r),this.dataProvider=e,this.options=i,this._noFilterSupport=!1,this.AsyncIterable=function(){return function e(n,i){t(this,e),this._parent=n,this._asyncIterator=i,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}}(),this.AsyncIterator=function(){function e(n,i,r){t(this,e),this._parent=n,this._nextFunc=i,this._params=r}return n(e,[{key:"next",value:function(){var t=this._nextFunc(this._params);return Promise.resolve(t)}}]),e}(),this.AsyncIteratorYieldResult=function(){return function e(n,i){t(this,e),this._parent=n,this.value=i,this[r._VALUE]=i,this[r._DONE]=!1}}(),this.AsyncIteratorReturnResult=function(){return function e(n,i){t(this,e),this._parent=n,this.value=i,this[r._VALUE]=i,this[r._DONE]=!0}}(),this.FetchListResult=function(){return function e(n,i,s,a){t(this,e),this._parent=n,this.fetchParameters=i,this.data=s,this.metadata=a,this[r._FETCHPARAMETERS]=i,this[r._DATA]=s,this[r._METADATA]=a}}(),this.Item=function(){return function e(n,i,s){t(this,e),this._parent=n,this.metadata=i,this.data=s,this[r._METADATA]=i,this[r._DATA]=s}}(),this.ItemMetadata=function(){return function e(n,i){t(this,e),this._parent=n,this.key=i,this[r._KEY]=i}}(),this.FetchListParameters=function(){return function e(n,i,s,a,u,l){t(this,e),this._parent=n,this.params=i,this.size=s,this.sortCriteria=a,this.filterCriterion=u,this.attributes=l;var h=this;i&&Object.keys(i).forEach(function(t){h[t]=i[t]}),this[r._SIZE]=s,a&&(this[r._SORTCRITERIA]=a),u&&(this[r._FILTERCRITERION]=u),l&&(this[r._FETCHATTRIBUTES]=l)}}(),this.FetchByKeysParameters=function(){return function e(n,i,s,a){t(this,e),this._parent=n,this.keys=i,this.params=s,this.attributes=a;var u=this;s&&Object.keys(s).forEach(function(t){u[t]=s[t]}),i&&(this[r._KEYS]=i),a&&(this[r._FETCHATTRIBUTES]=a)}}(),this.FetchByOffsetParameters=function(){return function e(n,i,s,a,u,l,h){t(this,e),this._parent=n,this.offset=i,this.params=s,this.size=a,this.sortCriteria=u,this.filterCriterion=l,this.attributes=h;var _=this;s&&Object.keys(s).forEach(function(t){_[t]=s[t]}),a&&(this[r._SIZE]=a),u&&(this[r._SORTCRITERIA]=u),i&&(this[r._OFFSET]=i),l&&(this[r._FILTERCRITERION]=l),h&&(this[r._FETCHATTRIBUTES]=h)}}(),this.FetchByKeysResults=function(){return function e(n,i,s){t(this,e),this._parent=n,this.fetchParameters=i,this.results=s,this[r._FETCHPARAMETERS]=i,this[r._RESULTS]=s}}(),this.ContainsKeysResults=function(){return function e(n,i,s){t(this,e),this._parent=n,this.containsParameters=i,this.results=s,this[r._CONTAINSPARAMETERS]=i,this[r._RESULTS]=s}}(),this.FetchByOffsetResults=function(){return function e(n,i,s,a){t(this,e),this._parent=n,this.fetchParameters=i,this.results=s,this.done=a,this[r._FETCHPARAMETERS]=i,this[r._RESULTS]=s,this[r._DONE]=a}}(),this[r._FROM]=null==this.options?null:this.options[r._FROM],this[r._OFFSET]=null==this.options?0:this.options[r._OFFSET]>0?this.options[r._OFFSET]:0,this[r._SORTCRITERIA]=null==this.options?null:this.options[r._SORTCRITERIA],this[r._DATAMAPPING]=null==this.options?null:this.options[r._DATAMAPPING],this[r._FETCHATTRIBUTES]=null==this.options?null:this.options[r._FETCHATTRIBUTES],this[r._FILTERCRITERION]=null==this.options?null:this.options[r._FILTERCRITERION],this._addEventListeners(e),e.getCapability&&!e.getCapability("filter")&&(this._noFilterSupport=!0)}return n(r,[{key:"containsKeys",value:function(t){var e=this;return this.dataProvider[r._CONTAINSKEYS]?this.dataProvider[r._CONTAINSKEYS](t):this.fetchByKeys(t).then(function(n){var i=new Set;return t[r._KEYS].forEach(function(t){null!=n[r._RESULTS].get(t)&&i.add(t)}),Promise.resolve(new e.ContainsKeysResults(e,t,i))})}},{key:"fetchByKeys",value:function(t){var e=this,n=null!=t?t[r._KEYS]:null,i=null!=t?t[r._FETCHATTRIBUTES]:null;null==i&&(i=this[r._FETCHATTRIBUTES]);var s=new e.FetchByKeysParameters(e,n,t,i);if(this.dataProvider[r._FETCHBYKEYS])return this.dataProvider[r._FETCHBYKEYS](s).then(function(t){var n=t[r._RESULTS],i=new Map;return n.forEach(function(t,n){var r=e._getMappedItems([t]);i.set(n,r[0])}),new e.FetchByKeysResults(e,s,i)});var a=new this.FetchListParameters(this,null,r._DEFAULT_SIZE,null,null,i),u=new Map,l=this.dataProvider[r._FETCHFIRST](a)[Symbol.asyncIterator]();return this._fetchNextSet(t,l,u).then(function(t){var n=new Map;return t.forEach(function(t,i){var r=e._getMappedItems([t]);n.set(i,r[0])}),new e.FetchByKeysResults(e,s,n)})}},{key:"fetchByOffset",value:function(t){var e=this,n=null!=t?t[r._OFFSET]:null,i=null!=t?t[r._SIZE]:null,s=null!=t?t[r._FETCHATTRIBUTES]:null;null==s&&(s=this[r._FETCHATTRIBUTES]);var a=null!=t?t[r._SORTCRITERIA]:null;null==a&&(a=this[r._SORTCRITERIA]);var u=this._getMappedSortCriteria(a),l=this._combineFilters(t),h=this._getMappedFilterCriterion(l),_=new e.FetchByOffsetParameters(e,n,t,i,u,h,s);return this.dataProvider[r._FETCHBYOFFSET](_).then(function(t){var n=t[r._RESULTS],i=t[r._DONE],s=new Array;return n.forEach(function(t){var n=e._getMappedItems([t]);s.push(n[0])}),new e.FetchByOffsetResults(e,_,s,i)})}},{key:"fetchFirst",value:function(t){var e={};e[r._ITEMS]=[],e[r._DONE]=!1,e[r._STARTINDEX]=0;var n=null!=t?t[r._SIZE]:null,i=null!=t?t[r._SORTCRITERIA]:null;null==i&&(i=this[r._SORTCRITERIA]);var s=this._getMappedSortCriteria(i),a=this._combineFilters(t),u=this._getMappedFilterCriterion(a),l=null!=t?t[r._FETCHATTRIBUTES]:null;null==l&&(l=this[r._FETCHATTRIBUTES]);var h=this;if(null==h[r._FROM]&&h[r._OFFSET]>0){var _=h[r._OFFSET];return new this.AsyncIterable(this,new this.AsyncIterator(this,function(t){return function(){var e=new h.FetchByOffsetParameters(h,_,null,n,s,u,l);return h.dataProvider[r._FETCHBYOFFSET](e).then(function(e){var i=e.results;_+=i.length;var s=h._getMappedItems(i);h._cacheResult(t,s),t[r._DONE]=e[r._DONE];var a=s.map(function(t){return t[r._DATA]}),u=s.map(function(t){return t[r._METADATA]}),l=e[r._FETCHPARAMETERS],o=null!=l?l[r._SORTCRITERIA]:null,E=null!=l?l[r._FILTERCRITERION]:null,T=h._getUnmappedSortCriteria(o),c=h._getUnmappedFilterCriterion(E),f=new h.FetchByOffsetParameters(h,h[r._OFFSET],null,n,T,c);return t[r._DONE]?Promise.resolve(new h.AsyncIteratorReturnResult(h,new h.FetchListResult(h,f,a,u))):Promise.resolve(new h.AsyncIteratorYieldResult(h,new h.FetchListResult(h,f,a,u)))})}}(e),t))}var o=new this.FetchListParameters(this,t,n,s,u,l),E=this.dataProvider[r._FETCHFIRST](o)[Symbol.asyncIterator]();return new this.AsyncIterable(this,new this.AsyncIterator(this,function(e,n){return function(){return n.next().then(function(i){var s=i[r._VALUE][r._DATA],a=i[r._VALUE][r._METADATA],l=s.map(function(t,e){return new h.Item(h,a[e],s[e])});h._noFilterSupport&&h._filterResult(u,l);var _=h._getMappedItems(l);h._cacheResult(e,_),e[r._DONE]=i[r._DONE];var o=null!=t?t[r._SIZE]:null,E=(null!=t&&t[r._OFFSET],i[r._VALUE][r._FETCHPARAMETERS]),T=null!=E?E[r._SORTCRITERIA]:null,c=null!=E?E[r._FILTERCRITERION]:null,f=h._getUnmappedSortCriteria(T),A=h._getUnmappedFilterCriterion(c),R=new h.FetchListParameters(h,t,o,f,A);return h._fetchUntilKey(R,h[r._FROM],e,n).then(function(){return h._fetchUntilOffset(R,h[r._OFFSET]+e[r._STARTINDEX],s.length,e,n)})})}}(e,E),t))}},{key:"getCapability",value:function(t){return this.dataProvider.getCapability(t)}},{key:"getTotalSize",value:function(){return this.dataProvider.getTotalSize()}},{key:"isEmpty",value:function(){return this.dataProvider.isEmpty()}},{key:"_fetchNextSet",value:function(t,n,i){var s=this;return n.next().then(function(a){var u=a[r._VALUE],l=u[r._DATA],h=u[r._METADATA],_=h.map(function(t){return t[r._KEY]}),o=!0;return t[r._KEYS].forEach(function(t){i.has(t)||_.map(function(n,r){e.Object.compareValues(n,t)&&i.set(t,new s.Item(s,h[r],l[r]))}),i.has(t)||(o=!1)}),o||a[r._DONE]?i:s._fetchNextSet(t,n,i)})}},{key:"_fetchUntilKey",value:function(t,n,i,s){var a=this;if(null!=n){var u=i[r._ITEMS].filter(function(t){if(e.KeyUtils.equals(t[r._METADATA][r._KEY],n))return!0});if(u.length>0){var l=i[r._ITEMS].indexOf(u[0]);i[r._ITEMS]=i[r._ITEMS].slice(l,i[r._ITEMS].length)}else{if(!i[r._DONE])return s.next().then(function(t){var e=t[r._VALUE][r._DATA],n=t[r._VALUE][r._METADATA],u=e.map(function(t,i){return new a.Item(a,n[i],e[i])}),l=a._getMappedItems(u);return a._cacheResult(i,l),i[r._DONE]=t[r._DONE],a._fetchUntilKey(t[r._FETCHPARAMETERS],l[r._KEYS],i,s)});i[r._ITEMS]=[]}}return Promise.resolve(null)}},{key:"_fetchUntilOffset",value:function(t,e,n,i,s){var a=this,u=null!=t&&t[r._SIZE]>0?t[r._SIZE]:n;e=e>0?e:0;var l=i[r._ITEMS].slice(e,e+u);if(this._noFilterSupport){var h=this._getMappedFilterCriterion(t[r._FILTERCRITERION]);this._filterResult(h,l)}return l.length<u&&!i[r._DONE]?s.next().then(function(n){var u=n[r._VALUE][r._DATA],h=n[r._VALUE][r._METADATA],_=u.map(function(t,e){return new a.Item(a,h[e],u[e])});if(a._noFilterSupport){var o=a._getMappedFilterCriterion(t[r._FILTERCRITERION]);a._filterResult(o,_)}var E=a._getMappedItems(_);return a._cacheResult(i,E),i[r._DONE]=n[r._DONE],0===u.length?a._createResultPromise(t,i,l):a._fetchUntilOffset(n[r._VALUE][r._FETCHPARAMETERS],e,u.length,i,s)}):a._createResultPromise(t,i,l)}},{key:"_createResultPromise",value:function(t,e,n){e[r._STARTINDEX]=e[r._STARTINDEX]+n.length;var i=n.map(function(t){return t[r._DATA]}),s=n.map(function(t){return t[r._METADATA]});return 0===i.length?Promise.resolve(new this.AsyncIteratorReturnResult(this,new this.FetchListResult(this,t,i,s))):Promise.resolve(new this.AsyncIteratorYieldResult(this,new this.FetchListResult(this,t,i,s)))}},{key:"_cacheResult",value:function(t,e){e.map(function(e){t[r._ITEMS].push(e)})}},{key:"_filterResult",value:function(t,e){if(t){t.filter||(t=i.FilterFactory.getFilter({filterDef:t}));for(var n=e.length-1;n>=0;)t.filter(e[n][r._DATA])||e.splice(n,1),n--}}},{key:"_getMappedItems",value:function(t){var e=this;if(null!=this[r._DATAMAPPING]){var n=this[r._DATAMAPPING][r._MAPFIELDS];if(null!=n&&null!=t&&t.length>0){new Array;return t.map(function(t){return n.bind(e)(t)})}}return t}},{key:"_combineFilters",value:function(t){var e=[],n=0;return null!=t&&null!=t[r._FILTERCRITERION]&&(e[n++]=t[r._FILTERCRITERION]),null!=this[r._FILTERCRITERION]&&(e[n++]=this[r._FILTERCRITERION]),0==e.length?null:1==e.length?e[0]:i.FilterFactory.getFilter({filterDef:{op:"$and",criteria:e}})}},{key:"_getMappedFilterCriterion",value:function(t){if(null!=this[r._DATAMAPPING]){var e=this[r._DATAMAPPING][r._MAPFILTERCRITERION];if(null!=e&&null!=t)return e(t)}return t}},{key:"_getMappedSortCriteria",value:function(t){if(null!=this[r._DATAMAPPING]){var e=this[r._DATAMAPPING][r._MAPSORTCRITERIA];if(null!=e&&null!=t&&t.length>0)return e(t)}return t}},{key:"_getUnmappedSortCriteria",value:function(t){if(null!=this[r._DATAMAPPING]){var e=this[r._DATAMAPPING][r._UNMAPSORTCRITERIA];if(null!=e&&null!=t&&t.length>0)return e(t)}return t}},{key:"_getUnmappedFilterCriterion",value:function(t){if(null!=this[r._DATAMAPPING]){var e=this[r._DATAMAPPING][r._UNMAPFILTERCRITERION];if(null!=e&&null!=t)return e(t)}return t}},{key:"_addEventListeners",value:function(t){var e=this;t[r._ADDEVENTLISTENER](r._REFRESH,function(t){e.dispatchEvent(t)}),t[r._ADDEVENTLISTENER](r._MUTATE,function(t){e.dispatchEvent(t)})}}]),r}();return s._KEY="key",s._KEYS="keys",s._DATA="data",s._STARTINDEX="startIndex",s._SORT="sort",s._SORTCRITERIA="sortCriteria",s._FILTERCRITERION="filterCriterion",s._METADATA="metadata",s._ITEMS="items",s._FROM="from",s._OFFSET="offset",s._REFRESH="refresh",s._MUTATE="mutate",s._SIZE="size",s._FETCHPARAMETERS="fetchParameters",s._VALUE="value",s._DONE="done",s._DATAMAPPING="dataMapping",s._MAPFIELDS="mapFields",s._MAPSORTCRITERIA="mapSortCriteria",s._MAPFILTERCRITERION="mapFilterCriterion",s._UNMAPSORTCRITERIA="unmapSortCriteria",s._UNMAPFILTERCRITERION="unmapFilterCriterion",s._RESULTS="results",s._CONTAINSPARAMETERS="containsParameters",s._DEFAULT_SIZE=25,s._CONTAINSKEYS="containsKeys",s._FETCHBYKEYS="fetchByKeys",s._FETCHBYOFFSET="fetchByOffset",s._FETCHFIRST="fetchFirst",s._ADDEVENTLISTENER="addEventListener",s._FETCHATTRIBUTES="attributes",r.EventTargetMixin.applyMixin(s),e._registerLegacyNamespaceProp("ListDataProviderView",s),s})}();
//# sourceMappingURL=ojlistdataproviderview.js.map