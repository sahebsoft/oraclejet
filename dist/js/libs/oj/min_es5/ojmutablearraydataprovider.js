!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}
/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */define(["ojs/ojcore-base","ojs/ojmap","ojs/ojset","ojs/ojdataprovider","ojs/ojeventtarget","ojs/ojlogger"],function(e,n,a,s,r,u){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;
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
var o=function(){function r(e,n){t(this,r),this._data=e,this.options=n,this.findMovesInArrayComparison=function(t,e,i){var n,a,s,r,u;if(t.length&&e.length)for(n=a=0;(!i||n<i)&&(r=t[a]);++a){for(s=0;u=e[s];++s)if(r.value===u.value){r.moved=u.index,u.moved=r.index,e.splice(s,1),n=s=0;break}n+=s}},this.Item=function(){return function e(i,n){t(this,e),this.metadata=i,this.data=n,this[r._METADATA]=i,this[r._DATA]=n}}(),this.ItemMetadata=function(){return function e(i){t(this,e),this.key=i,this[r._KEY]=i}}(),this.FetchByKeysResults=function(){return function e(i,n){t(this,e),this.fetchParameters=i,this.results=n,this[r._FETCHPARAMETERS]=i,this[r._RESULTS]=n}}(),this.ContainsKeysResults=function(){return function e(i,n){t(this,e),this.containsParameters=i,this.results=n,this[r._CONTAINSPARAMETERS]=i,this[r._RESULTS]=n}}(),this.FetchByOffsetResults=function(){return function e(i,n,a){t(this,e),this.fetchParameters=i,this.results=n,this.done=a,this[r._FETCHPARAMETERS]=i,this[r._RESULTS]=n,this[r._DONE]=a}}(),this.FetchListParameters=function(){return function e(i,n,a,s){t(this,e),this.size=i,this.sortCriteria=n,this.filterCriterion=a,this.attributes=s,this[r._SIZE]=i,this[r._SORTCRITERIA]=n,this[r._FILTERCRITERION]=a,this[r._ATTRIBUTES]=s}}(),this.FetchListResult=function(){return function e(i,n,a){t(this,e),this.fetchParameters=i,this.data=n,this.metadata=a,this[r._FETCHPARAMETERS]=i,this[r._DATA]=n,this[r._METADATA]=a}}(),this.AsyncIterable=function(){return function e(i){t(this,e),this._asyncIterator=i,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}}(),this.AsyncIterator=function(){function e(i,n,a,s){t(this,e),this._parent=i,this._nextFunc=n,this._params=a,this._offset=s,this._clientId=a&&a.clientId||Symbol(),i._mapClientIdToOffset.set(this._clientId,s),this._cacheObj={},this._cacheObj[r._MUTATIONSEQUENCENUM]=i._mutationSequenceNum}return i(e,[{key:"next",value:function(){var t=this._parent._mapClientIdToOffset.get(this._clientId),e=this._nextFunc(this._params,t,!1,this._cacheObj);return this._parent._mapClientIdToOffset.set(this._clientId,e.offset),Promise.resolve(e.result)}}]),e}(),this.AsyncIteratorYieldResult=function(){return function e(i){t(this,e),this.value=i,this[r._VALUE]=i,this[r._DONE]=!1}}(),this.AsyncIteratorReturnResult=function(){return function e(i){t(this,e),this.value=i,this[r._VALUE]=i,this[r._DONE]=!0}}(),this.DataProviderMutationEventDetail=function(){return function e(i,n,a,s){t(this,e),this._parent=i,this.add=n,this.remove=a,this.update=s,this[r._ADD]=n,this[r._REMOVE]=a,this[r._UPDATE]=s,Object.defineProperty(this,r._PARENT,{value:i,enumerable:!1})}}(),this.DataProviderOperationEventDetail=function(){return function e(i,n,a,s,u){t(this,e),this._parent=i,this.keys=n,this.metadata=a,this.data=s,this.indexes=u,this[r._KEYS]=n,this[r._METADATA]=a,this[r._DATA]=s,this[r._INDEXES]=u,Object.defineProperty(this,r._PARENT,{value:i,enumerable:!1})}}(),this.DataProviderAddOperationEventDetail=function(){return function e(i,n,a,s,u,o,l){t(this,e),this._parent=i,this.keys=n,this.afterKeys=a,this.addBeforeKeys=s,this.metadata=u,this.data=o,this.indexes=l,this[r._KEYS]=n,this[r._AFTERKEYS]=a,this[r._ADDBEFOREKEYS]=s,this[r._METADATA]=u,this[r._DATA]=o,this[r._INDEXES]=l,Object.defineProperty(this,r._PARENT,{value:i,enumerable:!1})}}(),this._sequenceNum=0,this._mutationSequenceNum=0,this._mapClientIdToOffset=new Map,this.data=e}return i(r,[{key:"containsKeys",value:function(t){var e=this;return this.fetchByKeys(t).then(function(i){var n=new a;return t[r._KEYS].forEach(function(t){null!=i[r._RESULTS].get(t)&&n.add(t)}),Promise.resolve(new e.ContainsKeysResults(t,n))})}},{key:"fetchByKeys",value:function(t){var i=this;this._generateKeysIfNeeded();var a,s=new n,u=this._getKeys(),o=null!=t?t[r._ATTRIBUTES]:null,l=0;if(t){var h=i._getRowData();return t[r._KEYS].forEach(function(t){for(a=null,l=0;l<u.length;l++)if(e.Object.compareValues(u[l],t)){a=l;break}if(null!=a&&a>=0){var n=h[a];if(o&&o.length>0){var r={};i._filterRowAttributes(o,n,r),n=r}s.set(t,new i.Item(new i.ItemMetadata(t),n))}}),Promise.resolve(new i.FetchByKeysResults(t,s))}return Promise.reject("Keys are a required parameter")}},{key:"fetchByOffset",value:function(t){var e=this,i=null!=t?t[r._SIZE]:-1,n=null!=t?t[r._SORTCRITERIA]:null,a=null!=t&&t[r._OFFSET]>0?t[r._OFFSET]:0,s=null!=t?t[r._ATTRIBUTES]:null,u=null!=t?t[r._FILTERCRITERION]:null;this._generateKeysIfNeeded();var o=[],l=!0;if(t){var h=new this.FetchListParameters(i,n,u,s),f=this._fetchFrom(h,a,!0).result,c=f[r._VALUE];l=f[r._DONE];var _=c[r._DATA],d=c[r._METADATA].map(function(t){return t[r._KEY]});return o=_.map(function(t,i){return new e.Item(new e.ItemMetadata(d[i]),t)}),Promise.resolve(new this.FetchByOffsetResults(t,o,l))}return Promise.reject("Offset is a required parameter")}},{key:"fetchFirst",value:function(t){return new this.AsyncIterable(new this.AsyncIterator(this,this._fetchFrom.bind(this),t,0))}},{key:"getCapability",value:function(t){return r.getCapability(t)}},{key:"getTotalSize",value:function(){return Promise.resolve(this._getRowData().length)}},{key:"isEmpty",value:function(){return this._getRowData().length>0?"no":"yes"}},{key:"createOptimizedKeySet",value:function(t){return new a(t)}},{key:"createOptimizedKeyMap",value:function(t){if(t){var e=new n;return t.forEach(function(t,i){e.set(i,t)}),e}return new n}},{key:"_getRowData",value:function(){return this[r._DATA]}},{key:"_getKeys",value:function(){return null==this._keys||this._keys instanceof Array?this._keys:this._keys()}},{key:"_indexOfKey",value:function(t){var i,n=this._getKeys(),a=-1;for(i=0;i<n.length;i++)if(e.Object.compareValues(n[i],t)){a=i;break}return a}},{key:"_adjustIteratorOffset",value:function(t,e){var i=this;this._mapClientIdToOffset.forEach(function(n,a){var s=0,r=0;t&&t.forEach(function(t){t<n&&++r}),n-=r,e&&e.forEach(function(t){t<n&&++s}),n+=s,i._mapClientIdToOffset.set(a,n)})}},{key:"compareArrays",value:function(t,e,i){return i="boolean"==typeof i?{dontLimitMoves:i}:i||{},e=e||[],(t=t||[]).length<e.length?this.compareSmallArrayToBigArray(t,e,"added","deleted",i):this.compareSmallArrayToBigArray(e,t,"deleted","added",i)}},{key:"compareSmallArrayToBigArray",value:function(t,e,i,n,a){var s,r,u,o,l,h=Math.min,f=Math.max,c=[],_=t.length,d=e.length,v=d-_||1,E=_+d+1;for(s=0;s<=_;s++)for(o=u,c.push(u=[]),l=h(d,s+v),r=f(0,s-1);r<=l;r++)if(r)if(s)if(t[s-1]===e[r-1])u[r]=o[r-1];else{var y=o[r]||E,p=u[r-1]||E;u[r]=h(y,p)+1}else u[r]=r+1;else u[r]=s+1;var m,A=[],T=[],g=[];for(s=_,r=d;s||r;)m=c[s][r]-1,r&&m===c[s][r-1]?T.push(A[A.length]={status:i,value:e[--r],index:r}):s&&m===c[s-1][r]?g.push(A[A.length]={status:n,value:t[--s],index:s}):(--r,--s);return this.findMovesInArrayComparison(g,T,!a.dontLimitMoves&&10*_),A.reverse()}},{key:"_dataMutated",value:function(t){var i,n,s,r,o,l=this,h=[],f=[],c=[],_=[],d=[];l._mutationSequenceNum++;var v=!0,E=!0;t.forEach(function(t){"deleted"===t.status?(v=!1):"added"===t.status&&(E=!1)});var y=[],p=[],m=null,A=null,T=null,g=l._generateKeysIfNeeded();if(!v&&!E){for(i=0;i<t.length;i++){r=t[i].index,o=t[i].status;var R=l._getId(t[i].value);for(n=0;n<t.length;n++)n!=i&&r===t[n].index&&o!==t[n].status&&y.indexOf(i)<0&&p.indexOf(i)<0&&(null==R||e.Object.compareValues(R,l._getId(t[n].value)))&&("deleted"===o?(p.push(i),y.push(n)):(p.push(n),y.push(i)))}for(i=0;i<t.length;i++)if(y.indexOf(i)>=0){var I=l._getKeys()[t[i].index];f.push(I),h.push(t[i].value),c.push(t[i].index)}if(f.length>0){_=f.map(function(t){return new l.ItemMetadata(t)});var O=new a;f.map(function(t){O.add(t)}),m=new l.DataProviderOperationEventDetail(l,O,_,h,c)}}if(h=[],f=[],c=[],!v){for(i=0;i<t.length;i++)"deleted"===t[i].status&&y.indexOf(i)<0&&p.indexOf(i)<0&&(f.push(l._getKeys()[t[i].index]),h.push(t[i].value),c.push(t[i].index));if(f.length>0&&f.map(function(t){var e=l._indexOfKey(t);l._keys.splice(e,1)}),f.length>0){_=f.map(function(t){return new l.ItemMetadata(t)});var S=new a;f.map(function(t){S.add(t)}),T=new l.DataProviderOperationEventDetail(l,S,_,h,c)}}if(h=[],f=[],c=[],!E){var b=null==l._getKeys()||!(l._getKeys().length>0);for(i=0;i<t.length;i++)"added"===t[i].status&&y.indexOf(i)<0&&p.indexOf(i)<0&&(null==(s=l._getId(t[i].value))&&(g||l._keysSpecified)&&(s=l._getKeys()[t[i].index]),null==s?(s=l._sequenceNum++,l._keys.splice(t[i].index,0,s)):b||-1===l._indexOfKey(s)?l._keys.splice(t[i].index,0,s):g||l._keysSpecified||(u.warn("added row has duplicate key "+s),l._keys.splice(t[i].index,0,s)),f.push(s),h.push(t[i].value),c.push(t[i].index));for(i=0;i<t.length;i++)if("added"===t[i].status&&y.indexOf(i)<0&&p.indexOf(i)<0){var k=l._getKeys()[t[i].index+1];k=null==k?null:k,d.push(k)}if(f.length>0){_=f.map(function(t){return new l.ItemMetadata(t)});var C=new a;f.map(function(t){C.add(t)});var D=new a;d.map(function(t){D.add(t)}),A=new l.DataProviderAddOperationEventDetail(l,C,D,d,_,h,c)}}l._fireMutationEvent(A,T,m)}},{key:"_dataRefreshed",value:function(t){var e,i,n,a;if(this._mutationEvent){var r=this._mutationEvent.detail;this._adjustIteratorOffset(null===(e=r.remove)||void 0===e?void 0:e.indexes,null===(i=r.add)||void 0===i?void 0:i.indexes),this.dispatchEvent(this._mutationEvent)}else if(this._mutationRemoveEvent||this._mutationAddEvent||this._mutationUpdateEvent){if(this._mutationRemoveEvent){var u=this._mutationRemoveEvent.detail;this._adjustIteratorOffset(null===(n=u.remove)||void 0===n?void 0:n.indexes,null),this.dispatchEvent(this._mutationRemoveEvent)}if(this._mutationAddEvent){var o=this._mutationAddEvent.detail;this._adjustIteratorOffset(null,null===(a=o.add)||void 0===a?void 0:a.indexes),this.dispatchEvent(this._mutationAddEvent)}this._mutationUpdateEvent&&this.dispatchEvent(this._mutationUpdateEvent)}else this.dispatchEvent(new s.DataProviderRefreshEvent);this._mutationEvent=null,this._mutationRemoveEvent=null,this._mutationAddEvent=null,this._mutationUpdateEvent=null}},{key:"_fireMutationEvent",value:function(t,e,i){var n=new this.DataProviderMutationEventDetail(this,t,e,i);this._mutationEvent=new s.DataProviderMutationEvent(n)}},{key:"_hasSamePropValue",value:function(t,i,n){var a="_hasSamePropValue is true";try{t&&t[n]&&t[n].forEach(function(t){i&&i[n]&&i[n].forEach(function(i){if(e.Object.compareValues(t,i))throw a})})}catch(t){if(t===a)return!0;throw t}return!1}},{key:"_generateKeysIfNeeded",value:function(){if(null==this._keys){var t=null!=this.options?this.options[r._KEYATTRIBUTES]:null;this._keys=[];var e,i=this._getRowData(),n=0;for(n=0;n<i.length;n++)null!=(e=this._getId(i[n]))&&"@index"!=t||(e=this._sequenceNum++),this._keys[n]=e;return!0}return!1}},{key:"_getId",value:function(t){var e,i=null;if(null!=this.options&&null!=this.options[r._KEYATTRIBUTES]&&(i=this.options[r._KEYATTRIBUTES]),null!=i){var n;if(Array.isArray(i))for(e=[],n=0;n<i.length;n++)e[n]=this._getVal(t,i[n]);else e="@value"==i?this._getAllVals(t):this._getVal(t,i);return e}return null}},{key:"_getVal",value:function(t,e){if("string"==typeof e){var i=e.indexOf(".");if(i>0){var n=e.substring(0,i),a=e.substring(i+1),s=t[n];if(s)return this._getVal(s,a)}}return"function"==typeof t[e]?t[e]():t[e]}},{key:"_getAllVals",value:function(t){var e=this;return Object.keys(t).map(function(i){return e._getVal(t,i)})}},{key:"_fetchFrom",value:function(t,e,i,n){var a=this,u=null!=t?t[r._ATTRIBUTES]:null;this._generateKeysIfNeeded();var o=null!=t?t[r._SORTCRITERIA]:null,l=this._getCachedIndexMap(o,n),h=this._getRowData(),f=l.map(function(t){return h[t]}),c=l.map(function(t){return a._getKeys()[t]}),_=null!=t?t[r._SIZE]>0?t[r._SIZE]:t[r._SIZE]<0?a._getKeys().length:25:25,d=e+_<f.length,v=this._mergeSortCriteria(o);null!=v&&((t=t||{})[r._SORTCRITERIA]=v);var E,y=[],p=[],m=0;if(null!=t&&t[r._FILTERCRITERION]){var A=null;A=s.FilterFactory.getFilter({filterDef:t[r._FILTERCRITERION],filterOptions:this.options});for(var T=0;y.length<_&&T<f.length;)A.filter(f[T])&&(m>=e&&(y.push(f[T]),p.push(c[T])),m++),T++;d=T<f.length}else y=f.slice(e,e+_),p=c.slice(e,e+_);m=e+y.length,E=y.map(function(t){if(u&&u.length>0){var e={};a._filterRowAttributes(u,t,e),t=e}return t});var g=p.map(function(t){return new a.ItemMetadata(t)}),R=new this.FetchListResult(t,E,g);return(i?d:R.data.length>0)?{result:new this.AsyncIteratorYieldResult(R),offset:m}:{result:new this.AsyncIteratorReturnResult(R),offset:m}}},{key:"_getCachedIndexMap",value:function(t,e){if(e&&e.indexMap&&e[r._MUTATIONSEQUENCENUM]===this._mutationSequenceNum)return e.indexMap;var i=this._getRowData().map(function(t,e){return e}),n=this._sortData(i,t);return e&&(e.indexMap=n,e[r._MUTATIONSEQUENCENUM]=this._mutationSequenceNum),n}},{key:"_sortData",value:function(t,e){var i=this._getRowData(),n=t.map(function(t){return{index:t,value:i[t]}});return null!=e&&n.sort(this._getSortComparator(e)),n.map(function(t){return t.index})}},{key:"_getSortComparator",value:function(t){var e=this;return function(i,n){var a,s,u,o,l,h,f=null!=e.options?e.options[r._SORTCOMPARATORS]:null;for(a=0;a<t.length;a++)if(s=t[a][r._DIRECTION],u=t[a][r._ATTRIBUTE],o=null,null!=f&&(o=f[r._COMPARATORS].get(u)),l=e._getVal(i.value,u),h=e._getVal(n.value,u),null!=o){var c="descending"==s?-1:1,_=o(l,h)*c;if(0!=_)return _}else{var d=0,v="string"==typeof l?l:new String(l).toString(),E="string"==typeof h?h:new String(h).toString();if(0!=(d="ascending"==s?v.localeCompare(E,void 0,{numeric:!0,sensitivity:"base"}):E.localeCompare(v,void 0,{numeric:!0,sensitivity:"base"})))return d}return 0}}},{key:"_mergeSortCriteria",value:function(t){var e=null!=this.options?this.options[r._IMPLICITSORT]:null;if(null!=e){if(null==t)return e;var i,n,a,s=t.slice(0);for(i=0;i<e.length;i++){for(a=!1,n=0;n<s.length;n++)s[n][r._ATTRIBUTE]==e[i][r._ATTRIBUTE]&&(a=!0);a||s.push(e[i])}return s}return t}},{key:"_filterRowAttributes",value:function(t,e,i){var n=this;if(Array.isArray(t)){var a,s=!1;t.forEach(function(t){t!=r._ATDEFAULT&&t.name!=r._ATDEFAULT||(s=!0)}),Object.keys(e).forEach(function(r){if(s){var u,o=!1,l=r;for(a=0;a<t.length;a++)if((u=t[a]instanceof Object?t[a].name:t[a]).startsWith("!")){if((u=u.substr(1,u.length-1))==r){o=!0;break}}else if(u==r){l=t[a];break}o||n._filterRowAttributes(l,e,i)}else t.forEach(function(t){var a;(a=t instanceof Object?t.name:t).startsWith("!")||a!=r||n._filterRowAttributes(t,e,i)})})}else if(t instanceof Object){var u=t.name,o=t.attributes;if(u&&!u.startsWith("!"))if(e[u]instanceof Object&&!Array.isArray(e[u])&&o){var l={};n._filterRowAttributes(o,e[u],l),i[u]=l}else if(Array.isArray(e[u])&&o){var h;i[u]=[],e[u].forEach(function(t,e){h={},n._filterRowAttributes(o,t,h),i[u][e]=h})}else n._proxyAttribute(i,e,u)}else n._proxyAttribute(i,e,t)}},{key:"_proxyAttribute",value:function(t,e,i){t&&e&&Object.defineProperty(t,i,{get:function(){return e[i]},set:function(t){e[i]=t},enumerable:!0})}},{key:"data",set:function(t){var e=null==this._data?[]:this._data.slice();Array.isArray(t)?Object.isFrozen(t)?this._data=t:(this._data=t.slice(),Object.freeze(this._data)):this._data=null==t?[]:[].concat(t),(null==e||0==e.length)&&null!=this._data&&this._data.length>0||(null==this._data||0==this._data.length)&&null!=e&&e.length>0?(this._keys=null,this._dataRefreshed(this._data)):(this._changes=this.compareArrays(e,this._data,!1),null!=this._changes&&this._changes.length>0&&(this._dataMutated(this._changes),this._dataRefreshed(this._data)))},get:function(){return this._data}},{key:"dataChanges",get:function(){return this._changes}}],[{key:"_getFetchCapability",value:function(){var t=new Set;return t.add("exclusion"),{caching:"all",attributeFilter:{expansion:{},ordering:{},defaultShape:{features:t}}}}},{key:"getCapability",value:function(t){return"sort"==t?{attributes:"multiple"}:"fetchByKeys"==t?Object.assign({implementation:"lookup"},r._getFetchCapability()):"fetchByOffset"==t?Object.assign({implementation:"randomAccess"},r._getFetchCapability()):"fetchFirst"==t?Object.assign({iterationSpeed:"immediate"},r._getFetchCapability()):"fetchCapability"==t?r._getFetchCapability():"filter"==t?{operators:["$co","$eq","$ew","$pr","$gt","$ge","$lt","$le","$ne","$regex","$sw"],attributeExpression:["*"],textFilter:{}}:null}}]),r}();return o._KEY="key",o._KEYS="keys",o._AFTERKEYS="afterKeys",o._ADDBEFOREKEYS="addBeforeKeys",o._DIRECTION="direction",o._ATTRIBUTE="attribute",o._ATTRIBUTES="attributes",o._SORT="sort",o._SORTCRITERIA="sortCriteria",o._FILTERCRITERION="filterCriterion",o._DATA="_data",o._METADATA="metadata",o._INDEXES="indexes",o._OFFSET="offset",o._SIZE="size",o._IMPLICITSORT="implicitSort",o._KEYATTRIBUTES="keyAttributes",o._SORTCOMPARATORS="sortComparators",o._COMPARATORS="comparators",o._COMPARATOR="comparator",o._RESULTS="results",o._CONTAINS="contains",o._FETCHPARAMETERS="fetchParameters",o._CONTAINSPARAMETERS="containsParameters",o._VALUE="value",o._DONE="done",o._ADD="add",o._REMOVE="remove",o._UPDATE="update",o._DETAIL="detail",o._FETCHLISTRESULT="fetchListResult",o._ATDEFAULT="@default",o._MUTATIONSEQUENCENUM="mutationSequenceNum",o._PARENT="_parent",r.EventTargetMixin.applyMixin(o),o})}();
//# sourceMappingURL=ojmutablearraydataprovider.js.map