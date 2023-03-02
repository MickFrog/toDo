(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var a=t(81),r=t.n(a),o=t(645),i=t.n(o),l=t(667),c=t.n(l),s=new URL(t(14),t.b),d=i()(r());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap);"]);var p=c()(s);d.push([n.id,":root {\n    --gen-font: 'Nunito', sans-serif;\n    --header-fontSize: 4rem;\n    --button-color: #EB9486;\n    --header-bg: #363537;\n    --sidebar-bg: #CEF7A0;\n    --default-padding: 2rem;\n}\n\n* {\n    margin: 0px;\n    box-sizing: border-box;\n}\n\ninput[type=\"checkbox\"] {\n    width: 20px;\n    height: 20px;\n    margin-right: 10px;\n}\n\nbutton, .task, .project {\n    font-family: inherit;\n    font-size: 1.4rem;\n    width: 70%;\n    padding: 5px;\n    border: 0px;\n\n    background-color: var(--button-color);\n    border-radius: 10px;\n    \n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nbutton:hover, .project:hover {\n    background-color: #E6EFE9;\n}\n\n#container {\n    min-height: 100vh;\n    display: grid;\n    grid-template: min(10rem, 20%) 7fr min(3rem, 10%) / 1fr 4fr;\n    font-family: var(--gen-font);\n    font-size: calc(var(--header-fontSize) / 2);\n    \n}\n\n.header, .content, .footer { /*grid intructions*/\n    grid-column: 1 / 3;\n}\n\n.header {\n    background-color: var(--header-bg); \n    color: #F3DE8A;\n    font-size: var(--header-fontSize);\n\n    display: flex;\n    align-items: center;\n    padding-left: var(--header-fontSize);\n    gap: 1rem;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n\n    background-color: #000F08;\n    background-image: url("+p+");\n}\n\n.sideBar {\n    background-color: var(--sidebar-bg);\n    padding: var(--default-padding);\n\n    display: flex;\n    flex-flow: column;\n    gap: 1rem;\n}\n\n.projectsList {\n    display: flex;\n    flex-flow: column;\n    gap: 1rem;\n}\n\n.taskContainer {\n    padding: var(--default-padding);\n}\n\n.taskViewer {\n    display: flex;\n    flex-flow: column;\n    gap: 1rem;\n\n    padding: 1rem;\n}\n\n.task, .project {\n    display: flex;\n    justify-content: space-between;\n    background-color: #F3DE8A;\n    padding-left: 1rem;\n}\n\n.task > button {\n    width: fit-content;\n}\n\n.task > div {\n    display: flex;\n    align-items: center;\n}\n\n.taskContainer > button {\n    gap: 5px;\n    width: 10rem;\n}\n\n.active {\n    background-color: #E6EFE9;\n}\n\n.inputBox {\n    display: none;\n    flex-flow: column;\n    font-size: 1.2rem;\n    background-color: #ccc;\n    gap: 5px;\n    width: 400px;\n    margin: 1rem;\n    padding: 1rem;\n    border-radius: 5px;\n}\n\n.inputBox > input {\n    height: 2rem;\n    font-family: inherit;\n}\n\n.addBtns {\n    display: flex;\n    justify-content: space-around;\n    gap: 1rem;\n}\n\n.addBtns > button {\n    padding: 0px 5px;\n    width: 150px;\n    justify-content: center;\n}\n\n.footer {\n    background-color: var(--header-bg);\n    font-size: 1.2rem;\n    color: var(--button-color);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.overlay {\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.7);\n    height: 100vh;\n    width: 100vw;\n    display: none;\n\n    justify-content: center;\n    align-items: center;\n}\n",""]);const u=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],l=0;l<n.length;l++){var c=n[l],s=a.base?c[0]+a.base:c[0],d=o[s]||0,p="".concat(s," ").concat(d);o[s]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,a);a.byIndex=l,e.splice(l,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var l=t(o[i]);e[l].references--}for(var c=a(n,r),s=0;s<o.length;s++){var d=t(o[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},14:n=>{n.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27192%27 height=%27192%27 viewBox=%270 0 192 192%27%3E%3Cpath fill=%27%23b5ffe9%27 fill-opacity=%270.4%27 d=%27M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z%27%3E%3C/path%3E%3C/svg%3E"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),r=t.n(a),o=t(569),i=t.n(o),l=t(565),c=t.n(l),s=t(216),d=t.n(s),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=n=>{let e=[];return{name:n,createTask:(n,t,a)=>{let r=((n,e,t)=>((void 0).name=n,(void 0).priority=e,(void 0).due=t,(void 0).finished=!1,{get getTaskData(){return{name,priority,due,finished}}}))(n,t,a);e.push(r)},getUnfinishedTasks:()=>{let n=0;for(let t=0;t<e.length;t++)0==e[t].getTaskData().finished&&n++;return n}}};(()=>{const n=document.getElementById("projectBox"),e=(document.getElementById("taskBox"),document.querySelector(".overlay"));let t=(()=>{const n=document.querySelector(".projectsList");return{addProject:e=>{g(e);let t=document.createElement("div");var a;t.className="project",t.textContent=e,(a=t).addEventListener("click",(()=>{for(let e=0;e<n.children.length;e++)[...n.children][e].classList.remove("active");a.classList.add("active")})),n.appendChild(t)}}})();n.onsubmit=a=>{a.preventDefault(),t.addProject(n.elements[0].value),e.style.display="none",n.style.display="none"},n.elements.cancelPjt.addEventListener("click",(()=>{e.style.display="none",n.style.display="none"}))})(),(()=>{const n=document.getElementById("addPjct-Btn"),e=document.querySelector(".overlay"),t=document.getElementById("projectBox");document.getElementById("taskBox"),n.addEventListener("click",(()=>{e.style.display="flex",t.style.display="flex"}))})()})()})();