parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}function r(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var n=document.querySelector(".start"),o=document.querySelectorAll(".field-row"),a=document.querySelector(".game-score"),i=document.querySelector(".message-start"),c=document.querySelector(".message-restart"),s=document.querySelector(".message-win"),u=document.querySelector(".message-lose"),l=0,f=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function d(){var e=Math.floor(4*Math.random()),r=Math.floor(4*Math.random());0===f[e][r]?f[e][r]=Math.random()<.1?4:2:d(),M()}function m(){f=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],d(),d(),M()}function h(){f=f.map(function(e){return e.filter(function(e){return 0===e}).concat(e.filter(function(e){return 0!==e}))})}function v(){f=f.map(function(e){return e.filter(function(e){return 0!==e}).concat(e.filter(function(e){return 0===e}))})}function y(){p(),v(),S()}function L(){p(),h(),S()}function g(e,r){e(),r(),e()}function p(){for(var e=[],r=0;r<f[0].length;r++){e[r]=[];for(var t=f.length-1;t>=0;t--)e[r].push(f[t][r])}f=e}function S(){for(var e=[],r=0;r<f[0].length;r++){e[r]=[];for(var t=f.length-1;t>=0;t--)e[r].unshift(f[t][r])}f=e.reverse()}function b(){var r,t=e(f);try{for(t.s();!(r=t.n()).done;)for(var n=r.value,o=0;o<4;o++)if(n[o]===n[o+1]){var i=n[o]+n[o+1];n[o]=i,n[o+1]=0,l+=i,a.innerHTML=l}}catch(c){t.e(c)}finally{t.f()}}function w(){p(),b(),S()}function M(){for(var e=0;e<4;e++)for(var r=0;r<4;r++)f[e][r]>0?(o[e].children[r].innerHTML=f[e][r],o[e].children[r].className="\n        field-cell field-cell--".concat(f[e][r])):(o[e].children[r].innerHTML="",o[e].children[r].className="field-cell")}function A(){f.some(function(e){e.includes(2048)&&(c.classList.add("hidden"),s.classList.remove("hidden"),n.classList.replace("restart","start"),n.innerHTML="Start")})}function T(){for(var e=!0,r=f.some(function(e){return e.includes(0)}),t=0;t<4;t++)for(var o=0;o<3;o++)f[t][o]!==f[t][o+1]&&f[o][t]!==f[o+1][t]||(e=!1);e&&!r&&(u.classList.remove("hidden"),c.classList.add("hidden"),n.classList.replace("restart","start"),n.innerHTML="Start")}n.addEventListener("click",function(){n.classList.replace("start","restart"),n.innerHTML="Restart",i.classList.add("hidden"),c.classList.remove("hidden"),s.classList.add("hidden"),u.classList.add("hidden"),a.innerHTML=0,l=0,m()}),document.addEventListener("keyup",function(e){if(n.classList.contains("restart"))switch(e.code){case"ArrowRight":g(h,b),d();break;case"ArrowLeft":g(v,b),d();break;case"ArrowUp":g(L,w),d();break;case"ArrowDown":g(y,w),d()}A(),T(),M()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.cf8bd3b8.js.map