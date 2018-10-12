define(["./logger"],function(a){"use strict";function b(b,d){if(a.log("Offline Persistence Toolkit storageUtils: Processing selector: "+JSON.stringify(b)),b){return e(c(b),d)}return!0}function c(a){var b,e=[];for(var i in a)if(a.hasOwnProperty(i)){var j=a[i];if(0===i.indexOf("$")){if(f(i)){if(!(j instanceof Array))throw new Error("not a valid expression: "+a);b={operator:i,array:[]};for(var k=0;k<j.length;k++){var l=c(j[k]);b.array.push(l)}}else if(g(i))throw new Error("not a valid expression: "+a)}else if(h(j))e.push({left:i,right:j,operator:"$eq"});else{var m={left:i};d(m,j),e.push(m)}}return e.length>1?b={operator:"$and",array:e}:1===e.length&&(b=e[0]),b}function d(a,b){var c=!1;for(var d in b)if(b.hasOwnProperty(d)){var e=b[d];if(c||!g(d))throw new Error("parsing error "+b);a.operator=d,a.right=e,c=!0}}function e(a,b){var c=a.operator;if(f(c)){if(!a.left&&a.array instanceof Array){for(var d,h=a.array,i=0;i<h.length;i++){var l=e(h[i],b);if("$or"===c&&!0===l)return!0;if("$and"===c&&!1===l)return!1;d=l}return d}throw new Error("invalid expression tree!"+a)}if(g(c)){var m=k(a.left,b),n=a.right;if("$lt"===c){var o=j(m,n);return m=o[0],n=o[1],m<n}if("$gt"===c){var o=j(m,n);return m=o[0],n=o[1],m>n}if("$lte"===c){var o=j(m,n);return m=o[0],n=o[1],m<=n}if("$gte"===c){var o=j(m,n);return m=o[0],n=o[1],m>=n}if("$eq"===c)return m===n;if("$ne"===c)return m!==n;if("$regex"===c){return null!==m.match(n)}if("$exists"===c)return n?null!==m&&void 0!==m:null===m||void 0===m;throw new Error("not a valid expression! "+a)}throw new Error("not a valid expression!"+a)}function f(a){return"$and"===a||"$or"===a}function g(a){return"$lt"===a||"$gt"===a||"$lte"===a||"$gte"===a||"$eq"===a||"$ne"===a||"$regex"===a||"$exists"===a}function h(a){return"object"!=typeof a}function i(a){return null!=a&&(a instanceof String||"string"==typeof a)}function j(a,b){return i(a)&&null==b?b="":i(b)&&null==a&&(a=""),[a,b]}function k(a,b){for(var c=a.split("."),d=b,e=0;e<c.length;e++)d=d[c[e]];return d}return{satisfy:b,getValue:k}});