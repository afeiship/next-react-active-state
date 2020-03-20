/*!
 * name: @feizheng/singleton
 * description: Es6 singleton class.
 * url: https://github.com/afeiship/singleton
 * version: 1.0.0
 * date: 2020-03-20 21:16:34
 * license: MIT
 */

"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new this),this.instance}}]),e}();_defineProperty(exports.default=_default,"instance",null);