(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),u=n(667),l=n.n(u),s=new URL(n(14),n.b),d=i()(a());d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap);"]);var c=l()(s);d.push([e.id,":root {\n    --gen-font: 'Nunito', sans-serif;\n    --header-fontSize: 4rem;\n    --button-color: #EB9486;\n    --header-bg: #363537;\n    --sidebar-bg: #CEF7A0;\n    --default-padding: 2rem;\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\ninput[type=\"checkbox\"] {\n    width: 20px;\n    height: 20px;\n    margin-right: 10px;\n}\n\nbutton, .task, .project {\n    font-family: inherit;\n    font-size: 1.4rem;\n    width: 70%;\n    padding: 5px;\n    border: 0px;\n\n    background-color: var(--button-color);\n    border-radius: 10px;\n    \n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nbutton:hover, .project:hover {\n    background-color: #E6EFE9;\n}\n\n#container {\n    min-height: 100vh;\n    display: grid;\n    grid-template: min(10rem, 20%) 7fr min(3rem, 10%) / 1fr 4fr;\n    font-family: var(--gen-font);\n    font-size: calc(var(--header-fontSize) / 2);\n    \n}\n\n.header, .content, .footer { /*grid intructions*/\n    grid-column: 1 / 3;\n}\n\n.header {\n    background-color: var(--header-bg); \n    color: #F3DE8A;\n    font-size: var(--header-fontSize);\n\n    display: flex;\n    align-items: center;\n    padding-left: var(--header-fontSize);\n    gap: 1rem;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n\n    background-color: #000F08;\n    background-image: url("+c+");\n}\n\n.sideBar {\n    background-color: var(--sidebar-bg);\n    padding: var(--default-padding);\n\n    display: flex;\n    flex-flow: column;\n    gap: 1rem;\n}\n\n.projectsList {\n    display: flex;\n    flex-flow: column;\n    gap: 1rem;\n}\n\n#deletePjct {\n    width: 20px;\n}\n\n#deletePjct:hover {\n    background-color: var(--header-bg);\n}\n\n.taskContainer {\n    padding: var(--default-padding);\n}\n\n.taskViewer {\n    display: flex;\n    flex-flow: column;\n    gap: 1rem;\n\n    padding: 1rem;\n}\n\n.task, .project {\n    display: flex;\n    justify-content: space-between;\n    gap: 2rem;\n    background-color: #F3DE8A;\n    padding-left: 1rem;\n}\n\n.task > button {\n    width: fit-content;\n}\n\n.task > div {\n    display: flex;\n    align-items: center;\n}\n\n.taskContainer > button {\n    gap: 5px;\n    width: 10rem;\n}\n\n.active {\n    background-color: #E6EFE9;\n}\n\n.inputBox {\n    display: none;\n    flex-flow: column;\n    font-size: 1.2rem;\n    background-color: #ccc;\n    gap: 5px;\n    width: 400px;\n    margin: 1rem;\n    padding: 1rem;\n    border-radius: 5px;\n}\n\n.inputBox > input {\n    height: 2rem;\n    font-family: inherit;\n}\n\n.addBtns {\n    display: flex;\n    justify-content: space-around;\n    gap: 1rem;\n}\n\n.addBtns > button {\n    padding: 0px 5px;\n    width: 150px;\n    justify-content: center;\n}\n\n.footer {\n    background-color: var(--header-bg);\n    font-size: 1.2rem;\n    color: var(--button-color);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.overlay {\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.7);\n    height: 100vh;\n    width: 100vw;\n    display: none;\n\n    justify-content: center;\n    align-items: center;\n}\n",""]);const f=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var l=this[u][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var l=e[u],s=r.base?l[0]+r.base:l[0],d=o[s]||0,c="".concat(s," ").concat(d);o[s]=d+1;var f=n(c),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var m=a(h,r);r.byIndex=u,t.splice(u,0,{identifier:c,updater:m,references:1})}i.push(c)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var l=r(e,a),s=0;s<o.length;s++){var d=n(o[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},14:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27192%27 height=%27192%27 viewBox=%270 0 192 192%27%3E%3Cpath fill=%27%23b5ffe9%27 fill-opacity=%270.4%27 d=%27M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z%27%3E%3C/path%3E%3C/svg%3E"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),l=n.n(u),s=n(216),d=n.n(s),c=n(589),f=n.n(c),h=n(426),m={};function g(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function p(e){g(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===v(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}m.styleTagTransform=f(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var b=864e5;function T(e){g(1,arguments);var t=p(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function k(e){g(1,arguments);var t=p(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=T(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=T(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}var x=6048e5;var C={};function M(){return C}function D(e,t){var n,r,a,o,i,u,l,s;g(1,arguments);var d=M(),c=w(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:d.weekStartsOn)&&void 0!==r?r:null===(l=d.locale)||void 0===l||null===(s=l.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=p(e),h=f.getUTCDay(),m=(h<c?7:0)+h-c;return f.setUTCDate(f.getUTCDate()-m),f.setUTCHours(0,0,0,0),f}function E(e,t){var n,r,a,o,i,u,l,s;g(1,arguments);var d=p(e),c=d.getUTCFullYear(),f=M(),h=w(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(l=f.locale)||void 0===l||null===(s=l.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(c+1,0,h),m.setUTCHours(0,0,0,0);var v=D(m,t),y=new Date(0);y.setUTCFullYear(c,0,h),y.setUTCHours(0,0,0,0);var b=D(y,t);return d.getTime()>=v.getTime()?c+1:d.getTime()>=b.getTime()?c:c-1}var S=6048e5;function P(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const U=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return P("yy"===t?r%100:r,t.length)},j=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):P(n+1,2)},W=function(e,t){return P(e.getUTCDate(),t.length)},A=function(e,t){return P(e.getUTCHours()%12||12,t.length)},Y=function(e,t){return P(e.getUTCHours(),t.length)},N=function(e,t){return P(e.getUTCMinutes(),t.length)},O=function(e,t){return P(e.getUTCSeconds(),t.length)},F=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return P(Math.floor(r*Math.pow(10,n-3)),t.length)};var H={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return U(e,t)},Y:function(e,t,n,r){var a=E(e,r),o=a>0?a:1-a;return"YY"===t?P(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):P(o,t.length)},R:function(e,t){return P(k(e),t.length)},u:function(e,t){return P(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return P(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return P(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return j(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return P(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){g(1,arguments);var n=p(e),r=D(n,t).getTime()-function(e,t){var n,r,a,o,i,u,l,s;g(1,arguments);var d=M(),c=w(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:d.firstWeekContainsDate)&&void 0!==r?r:null===(l=d.locale)||void 0===l||null===(s=l.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1),f=E(e,t),h=new Date(0);return h.setUTCFullYear(f,0,c),h.setUTCHours(0,0,0,0),D(h,t)}(n,t).getTime();return Math.round(r/S)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):P(a,t.length)},I:function(e,t,n){var r=function(e){g(1,arguments);var t=p(e),n=T(t).getTime()-function(e){g(1,arguments);var t=k(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),T(n)}(t).getTime();return Math.round(n/x)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):P(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):W(e,t)},D:function(e,t,n){var r=function(e){g(1,arguments);var t=p(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/b)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):P(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return P(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return P(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return P(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return A(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Y(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):P(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):P(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):N(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):O(e,t)},S:function(e,t){return F(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return q(a);case"XXXX":case"XX":return B(a);default:return B(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return q(a);case"xxxx":case"xx":return B(a);default:return B(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+L(a,":");default:return"GMT"+B(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+L(a,":");default:return"GMT"+B(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return P(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return P((r._originalDate||e).getTime(),t.length)}};function L(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+P(o,2)}function q(e,t){return e%60==0?(e>0?"-":"+")+P(Math.abs(e)/60,2):B(e,t)}function B(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+P(Math.floor(a/60),2)+n+P(a%60,2)}const z=H;var Q=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},I=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const R={p:I,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return Q(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",Q(a,t)).replace("{{time}}",I(o,t))}};var V=["D","DD"],G=["YY","YYYY"];function X(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var _={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function J(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Z={date:J({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:J({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:J({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var $={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function K(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const ee={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:K({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:K({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:K({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:K({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:K({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function te(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(l):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(l);return i=e.valueCallback?e.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(u.length)}}}var ne,re={ordinalNumber:(ne={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(ne.matchPattern);if(!n)return null;var r=n[0],a=e.match(ne.parsePattern);if(!a)return null;var o=ne.valueCallback?ne.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:te({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:te({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:te({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:te({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:te({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ae={code:"en-US",formatDistance:function(e,t,n){var r,a=_[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Z,formatRelative:function(e,t,n,r){return $[e]},localize:ee,match:re,options:{weekStartsOn:0,firstWeekContainsDate:1}};var oe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ie=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ue=/^'([^]*?)'?$/,le=/''/g,se=/[a-zA-Z]/;function de(e,t,n){var r,a,o,i,u,l,s,d,c,f,h,m,v,b,T,k,x,C;g(2,arguments);var D=String(t),E=M(),S=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:E.locale)&&void 0!==r?r:ae,P=w(null!==(o=null!==(i=null!==(u=null!==(l=null==n?void 0:n.firstWeekContainsDate)&&void 0!==l?l:null==n||null===(s=n.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==u?u:E.firstWeekContainsDate)&&void 0!==i?i:null===(c=E.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=w(null!==(h=null!==(m=null!==(v=null!==(b=null==n?void 0:n.weekStartsOn)&&void 0!==b?b:null==n||null===(T=n.locale)||void 0===T||null===(k=T.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==v?v:E.weekStartsOn)&&void 0!==m?m:null===(x=E.locale)||void 0===x||null===(C=x.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==h?h:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var j=p(e);if(!function(e){if(g(1,arguments),!function(e){return g(1,arguments),e instanceof Date||"object"===y(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=p(e);return!isNaN(Number(t))}(j))throw new RangeError("Invalid time value");var W=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(j),A=function(e,t){return g(2,arguments),function(e,t){g(2,arguments);var n=p(e).getTime(),r=w(t);return new Date(n+r)}(e,-w(t))}(j,W),Y={firstWeekContainsDate:P,weekStartsOn:U,locale:S,_originalDate:j};return D.match(ie).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,R[t])(e,S.formatLong):e})).join("").match(oe).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(ue))?o[1].replace(le,"'"):a;var u,l=z[i];if(l)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===G.indexOf(u))||X(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==V.indexOf(e)}(r)||X(r,t,String(e)),l(A,r,S.localize,Y);if(i.match(se))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}let ce=null,fe=[];const he=()=>{const e=document.querySelector(".projectsList"),t=me(),n=t.taskView,r=document.getElementById("addTask-Btn");let a=null;const o=e=>{for(;n.firstElementChild;)n.removeChild(n.firstElementChild);for(let n=0;n<e.length;n++)t.displayTask(e[n]);ve.taskAddBtn.style.display="flex"};return{addProject:t=>{a=(e=>{let t=[],n=0;return{name:e,createTask:(e,r,a)=>{let o=((e,t,n)=>{let r=e,a=t,o=n;return{get getTaskData(){return{name:r,priority:a,due:o,finished:!1}},id:""}})(e,r,a);return n++,o.id="E"+n,t.push(o),o},getUnfinishedTasks:()=>{let e=0;for(let n=0;n<t.length;n++)0==t[n].getTaskData().finished&&e++;return e},tasks:t}})(t),fe.push(a);let i=document.createElement("div");return i.className="project",i.textContent=a.name,i.appendChild((()=>{let t=document.createElement("button");return t.id="deletePjct",t.addEventListener("click",(()=>{for(e.removeChild(t.parentElement),ce.tasks.length=0,fe=fe.filter((e=>e!=ce)),ce=null;n.firstElementChild;)n.removeChild(n.firstElementChild);r.style.display="none"})),t})()),(u=i).addEventListener("click",(t=>{if("deletePjct"!=t.target.id){ce=a;for(let t=0;t<e.children.length;t++)[...e.children][t].classList.remove("active");u.classList.add("active"),o(ce.tasks)}else ce=a})),e.appendChild(i),i;var u},newProjectObj:a}},me=()=>{const e=document.querySelector(".taskViewer"),t=t=>{let o=document.createElement("div");o.className="task",o.appendChild(n(t.getTaskData.name)),o.appendChild(n(de(t.getTaskData.due,"yyyy-MM-dd"))),o.appendChild(a()),r(o,t.getTaskData.priority),o.setAttribute("T_id",t.id),e.appendChild(o)},n=e=>{let t=document.createElement("p");return t.textContent=e,t},r=(e,t)=>{"urgent"==t&&(e.style.backgroundColor="crimson")},a=()=>{let t=document.createElement("button");return t.id="deleteTask",t.innerHTML='<img src="../src/images/delete.svg" alt="deleteBtn">',t.addEventListener("click",(()=>{ce.tasks=ce.tasks.filter((e=>e.id!=t.parentElement.getAttribute("T_id"))),e.removeChild(t.parentElement)})),t};return{addTask:(e,n,r)=>{-1==function(e,t){g(2,arguments);var n=p(e),r=p(t),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}(r,new Date)&&(r=new Date);let a=ce.createTask(e,n,r);t(a)},displayTask:t,taskView:e}},ge=(()=>{const e=document.getElementById("projectBox"),t=document.getElementById("taskBox"),n=document.querySelector(".overlay");return e.onsubmit=t=>{t.preventDefault(),he().addProject(e.elements[0].value),n.style.display="none",e.style.display="none",e.reset()},t.onsubmit=e=>{e.preventDefault(),me().addTask(t.newTask.value,t.priority.value,new Date(t.taskDue.valueAsDate)),n.style.display="none",t.style.display="none",t.reset()},e.elements.cancelPjt.addEventListener("click",(()=>{n.style.display="none",e.style.display="none"})),t.elements.cancelTask.addEventListener("click",(()=>{n.style.display="none",e.style.display="none"})),{projectForm:e,taskForm:t,overlay:n}})(),ve=(()=>{const e=document.getElementById("addPjct-Btn"),t=document.getElementById("addTask-Btn");return e.addEventListener("click",(()=>{ge.overlay.style.display="flex",ge.projectForm.style.display="flex"})),t.addEventListener("click",(()=>{ge.overlay.style.display="flex",ge.taskForm.style.display="flex"})),{taskAddBtn:t}})();he().addProject("Default").dispatchEvent(new Event("click")),me().addTask("Code all night","normal",new Date)})()})();