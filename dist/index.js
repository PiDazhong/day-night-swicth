!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("react"));else if("function"==typeof define&&define.amd)define(["react"],n);else{var e="object"==typeof exports?n(require("react")):n(t.react);for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(self,(t=>(()=>{"use strict";var n={424:(t,n,e)=>{e.d(n,{Z:()=>c});var r=e(81),a=e.n(r),o=e(645),s=e.n(o)()(a());s.push([t.id,".day-night-switch-contanier {\n  width: 180px;\n  height: 70px;\n}\n\n.day-night-switch-contanier .components {\n  position: fixed;\n  width: 180px;\n  height: 70px;\n  background-color: rgba(70, 133, 192, 1);\n  border-radius: 100px;\n  box-shadow: inset 0 0 5px 3px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  transition: 0.7s;\n  transition-timing-function: cubic-bezier(0, 0.5, 1, 1);\n  cursor: pointer;\n}\n\n     \n.day-night-switch-contanier .components .main-button {\n  margin: 7.5px 0 0 7.5px;\n  width: 55px;\n  height: 55px;\n  background-color: rgba(255, 195, 35, 1);\n  border-radius: 50%;\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5), inset -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset 4px 5px 2px -2px rgba(255, 230, 80, 1);\n  transition: 1.0s;\n  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1.00);\n}\n.day-night-switch-contanier .components .moon {\n  position: absolute;\n  background-color: rgba(150, 160, 180, 1);\n  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.3);\n  border-radius: 50% ;\n  transition: 0.5s;\n  opacity: 0;\n}\n.day-night-switch-contanier .components .moon:nth-child(1) {\n  top: 7.5px;\n  left: 25px;\n  width: 12.5px;\n  height: 12.5px;\n}\n.day-night-switch-contanier .components .moon:nth-child(2) {\n  top: 20px;\n  left: 7.5px;\n  width: 20px;\n  height: 20px;\n}\n.day-night-switch-contanier .components .moon:nth-child(3) {\n  top: 32.5px;\n  left: 32.5px;\n  width: 12.5px;\n  height: 12.5px;\n}\n.day-night-switch-contanier .components .daytime-backgrond {\n  position: absolute;\n  border-radius: 50%;\n  transition: 1.0s;\n  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1.00);\n}\n.day-night-switch-contanier .components .daytime-backgrond:nth-child(2) {\n  top: -20px;\n  left: -20px;\n  width: 110px;\n  height:110px;\n  background-color: rgba(255, 255, 255,0.2);\n  z-index: -2;\n}\n.day-night-switch-contanier .components .daytime-backgrond:nth-child(3) {\n  top: -32.5px;\n  left: -17.5px;\n  width: 135px;\n  height:135px;\n  background-color: rgba(255, 255, 255,0.1);\n  z-index: -3;\n}\n.day-night-switch-contanier .components .daytime-backgrond:nth-child(4) {\n  top: -45px;\n  left: -15px;\n  width: 160px;\n  height:160px;\n  background-color: rgba(255, 255, 255,0.05);\n  z-index: -4;\n}\n.day-night-switch-contanier .components  .cloud,.cloud-light {\n  transform: translateY(10px);\n  transition: 1.0s;\n  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1.00);\n}\n\n.day-night-switch-contanier .components .cloud-son {\n  position: absolute;\n  background-color: #fff;\n  border-radius: 50%;\n  z-index: -1;\n  transition: transform 6s,right 1s,bottom 1s;\n}\n\n.day-night-switch-contanier .components .cloud-son:nth-child(6n+1){\n  right: -20px;\n  bottom: 10px;\n  width: 50px;\n  height: 50px;\n}\n.day-night-switch-contanier .components .cloud-son:nth-child(6n+2) {\n  right: -10px;\n  bottom: -25px;\n  width: 60px;\n  height: 60px;\n}\n.day-night-switch-contanier .components .cloud-son:nth-child(6n+3) {\n  right: 20px;\n  bottom: -40px;\n  width: 60px;\n  height: 60px;\n}\n.day-night-switch-contanier .components .cloud-son:nth-child(6n+4) {\n  right: 50px;\n  bottom: -35px;\n  width: 60px;\n  height: 60px;\n}\n.day-night-switch-contanier .components .cloud-son:nth-child(6n+5) {\n  right: 75px;\n  bottom: -60px;\n  width: 75px;\n  height: 75px;\n}\n.day-night-switch-contanier .components .cloud-son:nth-child(6n+6) {\n  right: 110px;\n  bottom: -50px;\n  width: 60px;\n  height: 60px;\n}\n.day-night-switch-contanier .components .cloud{\n  z-index: -2;\n}\n.day-night-switch-contanier .components .cloud-light{\n  position: absolute;\n  right: 0px;\n  bottom: 25px;\n  opacity: 0.5;\n  z-index: -3; /*transform: rotate(-5deg);*/\n}\n.day-night-switch-contanier .components .stars{\n  transform: translateY(-125px);\n  z-index: -2;\n  transition: 1.0s;\n  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1.00);\n}\n\n.day-night-switch-contanier .components .big { --size: 7.5px; }\n.day-night-switch-contanier .components .medium { --size: 5px; }\n.day-night-switch-contanier .components .small { --size: 3px; }\n.day-night-switch-contanier .components .star {\n  position: absolute;\n  width: calc(2*var(--size));\n  height: calc(2*var(--size));\n}\n.day-night-switch-contanier .components .star:nth-child(1){\n  top: 11px;\n  left: 39px;\n  animation-name: dayNightStart;\n  animation-duration: 3.5s;\n}\n.day-night-switch-contanier .components .star:nth-child(2){\n  top: 39px;\n  left: 91px;\n  animation-name: dayNightStart;\n  animation-duration: 4.1s;\n}\n.day-night-switch-contanier .components .star:nth-child(3){\n  top: 26px;\n  left: 19px;\n  animation-name: dayNightStart;\n  animation-duration: 4.9s;\n}\n.day-night-switch-contanier .components .star:nth-child(4){\n  top: 37px;\n  left: 66px;\n  animation-name: dayNightStart;\n  animation-duration: 5.3s;\n}\n.day-night-switch-contanier .components .star:nth-child(5){\n  top: 21px;\n  left: 75px;\n  animation-name: dayNightStart;\n  animation-duration: 3s;\n}\n.day-night-switch-contanier .components .star:nth-child(6){\n  top: 51px;\n  left: 38px;\n  animation-name: dayNightStart;\n  animation-duration: 2.2s;\n}\n@keyframes dayNightStart {\n  0%,20%{transform: scale(0);}\n  20%,100% {transform: scale(1);}\n}\n.day-night-switch-contanier .components  .star-son{\n  float: left;\n}\n.day-night-switch-contanier .components  .star-son:nth-child(1) { --pos: left 0; }\n.day-night-switch-contanier .components  .star-son:nth-child(2) { --pos: right 0; }\n.day-night-switch-contanier .components  .star-son:nth-child(3) { --pos: 0 bottom; }\n.day-night-switch-contanier .components  .star-son:nth-child(4) { --pos: right bottom; }\n.day-night-switch-contanier .components  .star-son { width: var(--size); height: var(--size); background-image:radial-gradient(circle var(--size) at var(--pos), transparent var(--size), #fff); }\n.day-night-switch-contanier .components  .star{ transform: scale(1); transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1.00); transition: 1s; animation-iteration-count:infinite; animation-direction: alternate; animation-timing-function: linear; }\n.day-night-switch-contanier .components  .twinkle { transform: scale(0); }",""]);const c=s},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var o={},s=[],c=0;c<t.length;c++){var i=t[c],l=r.base?i[0]+r.base:i[0],u=o[l]||0,p="".concat(l," ").concat(u);o[l]=u+1;var d=e(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)n[d].references++,n[d].updater(m);else{var h=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function a(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var c=e(o[s]);n[c].references--}for(var i=r(t,a),l=0;l<o.length;l++){var u=e(o[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=i}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},156:n=>{n.exports=t}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return r.d(n,{a:n}),n},r.d=(t,n)=>{for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nc=void 0;var a={};return(()=>{r.r(a),r.d(a,{default:()=>v});var t=r(156),n=r.n(t),e=r(379),o=r.n(e),s=r(795),c=r.n(s),i=r(569),l=r.n(i),u=r(565),p=r.n(u),d=r(216),m=r.n(d),h=r(589),y=r.n(h),x=r(424),f={};function g(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}f.styleTagTransform=y(),f.setAttributes=p(),f.insert=l().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=m(),o()(x.Z,f),x.Z&&x.Z.locals&&x.Z.locals;const v=function(e){var r,a,o=e.value,s=e.onChange,c=e.style,i=e.className,l=(r=(0,t.useState)(!1),a=2,function(t){if(Array.isArray(t))return t}(r)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,a,o,s,c=[],i=!0,l=!1;try{if(o=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;i=!1}else for(;!(i=(r=o.call(e)).done)&&(c.push(r.value),c.length!==n);i=!0);}catch(t){l=!0,a=t}finally{try{if(!i&&null!=e.return&&(s=e.return(),Object(s)!==s))return}finally{if(l)throw a}}return c}}(r,a)||function(t,n){if(t){if("string"==typeof t)return g(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?g(t,n):void 0}}(r,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=l[0],p=l[1],d=!1===o,m=(0,t.useRef)(null),h=(0,t.useRef)(null),y=(0,t.useRef)(null),x=(0,t.useRef)(null),f=(0,t.useRef)(null),v=(0,t.useRef)(null),b=(0,t.useRef)(null),w=(0,t.useRef)(null),N=(0,t.useRef)(null),E=(0,t.useRef)(null);(0,t.useEffect)((function(){var t,n,e,r,a,o,s,c,i;m.current&&(h.current=null===(t=m.current)||void 0===t?void 0:t.querySelector(".main-button"),y.current=null===(n=m.current)||void 0===n?void 0:n.querySelectorAll(".daytime-backgrond"),x.current=null===(e=m.current)||void 0===e?void 0:e.querySelector(".cloud"),f.current=null===(r=m.current)||void 0===r?void 0:r.querySelectorAll(".cloud-son"),v.current=null===(a=m.current)||void 0===a?void 0:a.querySelector(".cloud-light"),b.current=null===(o=m.current)||void 0===o?void 0:o.querySelector(".components"),w.current=null===(s=m.current)||void 0===s?void 0:s.querySelectorAll(".moon"),N.current=null===(c=m.current)||void 0===c?void 0:c.querySelector(".stars"),E.current=null===(i=m.current)||void 0===i?void 0:i.querySelectorAll(".star"))}),[]),(0,t.useEffect)((function(){null!=m&&m.current&&h.current&&S(o?"light":"dark")}),[o,m.current]);var S=function(t){"light"===t?(h.current.style.transform="translateX(0)",h.current.style.backgroundColor="rgba(255, 195, 35,1)",h.current.style.boxShadow="3px 3px 5px rgba(0, 0, 0, 0.5), inset  -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset  4px 5px 2px -2px rgba(255, 230, 80,1)",y.current[0].style.transform="translateX(0)",y.current[1].style.transform="translateX(0)",y.current[2].style.transform="translateX(0)",x.current.style.transform="translateY(10px)",v.current.style.transform="translateY(10px)",b.current.style.backgroundColor="rgba(70, 133, 192,1)",w.current[0].style.opacity="0",w.current[1].style.opacity="0",w.current[2].style.opacity="0",N.current.style.transform="translateY(-125px)",N.current.style.opacity="0",s(!0)):(h.current.style.transform="translateX(110px)",h.current.style.backgroundColor="rgba(195, 200,210,1)",h.current.style.boxShadow="3px 3px 5px rgba(0, 0, 0, 0.5), inset  -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset  4px 5px 2px -2px rgba(255, 255, 210,1)",y.current[0].style.transform="translateX(110px)",y.current[1].style.transform="translateX(80px)",y.current[2].style.transform="translateX(50px)",x.current.style.transform="translateY(80px)",v.current.style.transform="translateY(80px)",b.current.style.backgroundColor="rgba(25,30,50,1)",w.current[0].style.opacity="1",w.current[1].style.opacity="1",w.current[2].style.opacity="1",N.current.style.transform="translateY(-62.5px)",N.current.style.opacity="1",s(!1)),p(!0),setTimeout((function(){p(!1)}),500)};return n().createElement("div",{className:"day-night-switch-contanier ".concat(i||""),ref:m,style:c},n().createElement("div",{className:"components",onClick:function(){return S(d?"light":"dark")},onMouseOut:function(){u||(d?(h.current.style.transform="translateX(110px)",y.current[0].style.transform="translateX(110px)",y.current[1].style.transform="translateX(80px)",y.current[2].style.transform="translateX(50px)",E.current[0].style.top="11px",E.current[0].style.left="39px",E.current[1].style.top="39px",E.current[1].style.left="91px",E.current[2].style.top="26px",E.current[2].style.left="19px",E.current[3].style.top="37px",E.current[3].style.left="66px",E.current[4].style.top="21px",E.current[4].style.left="75px",E.current[5].style.top="51px",E.current[5].style.left="38px"):(h.current.style.transform="translateX(0px)",y.current[0].style.transform="translateX(0px)",y.current[1].style.transform="translateX(0px)",y.current[2].style.transform="translateX(0px)",f.current[0].style.right="-20px",f.current[0].style.bottom="10px",f.current[1].style.right="-10px",f.current[1].style.bottom="-25px",f.current[2].style.right="20px",f.current[2].style.bottom="-40px",f.current[3].style.right="50px",f.current[3].style.bottom="-35px",f.current[4].style.right="75px",f.current[4].style.bottom="-60px",f.current[5].style.right="110px",f.current[5].style.bottom="-50px",f.current[6].style.right="-20px",f.current[6].style.bottom="10px",f.current[7].style.right="-10px",f.current[7].style.bottom="-25px",f.current[8].style.right="20px",f.current[8].style.bottom="-40px",f.current[9].style.right="50px",f.current[9].style.bottom="-35px",f.current[10].style.right="75px",f.current[10].style.bottom="-60px",f.current[11].style.right="110px",f.current[11].style.bottom="-50px"))},onMouseMove:function(){u||(d?(h.current.style.transform="translateX(100px)",y.current[0].style.transform="translateX(100px)",y.current[1].style.transform="translateX(73px)",y.current[2].style.transform="translateX(46px)",E.current[0].style.top="10px",E.current[0].style.left="36px",E.current[1].style.top="40px",E.current[1].style.left="87px",E.current[2].style.top="26px",E.current[2].style.left="16px",E.current[3].style.top="38px",E.current[3].style.left="63px",E.current[4].style.top="20.5px",E.current[4].style.left="72px",E.current[5].style.top="51.5px",E.current[5].style.left="35px"):(h.current.style.transform="translateX(10px)",y.current[0].style.transform="translateX(10px)",y.current[1].style.transform="translateX(7px)",y.current[2].style.transform="translateX(4px)",f.current[0].style.right="-24px",f.current[0].style.bottom="10px",f.current[1].style.right="-12px",f.current[1].style.bottom="-27px",f.current[2].style.right="17px",f.current[2].style.bottom="-43px",f.current[3].style.right="46px",f.current[3].style.bottom="-39px",f.current[4].style.right="70px",f.current[4].style.bottom="-65px",f.current[5].style.right="109px",f.current[5].style.bottom="-54px",f.current[6].style.right="-23px",f.current[6].style.bottom="10px",f.current[7].style.right="-11px",f.current[7].style.bottom="-26px",f.current[8].style.right="18px",f.current[8].style.bottom="-42px",f.current[9].style.right="47px",f.current[9].style.bottom="-38px",f.current[10].style.right="74px",f.current[10].style.bottom="-64px",f.current[11].style.right="110px",f.current[11].style.bottom="-55px"))}},n().createElement("div",{className:"main-button"},n().createElement("div",{className:"moon"}),n().createElement("div",{className:"moon"}),n().createElement("div",{className:"moon"})),n().createElement("div",{className:"daytime-backgrond"}),n().createElement("div",{className:"daytime-backgrond"}),n().createElement("div",{className:"daytime-backgrond"}),n().createElement("div",{className:"cloud"},n().createElement("div",{className:"cloud-son"}),n().createElement("div",{className:"cloud-son"}),n().createElement("div",{className:"cloud-son"}),n().createElement("div",{className:"cloud-son"}),n().createElement("div",{className:"cloud-son"}),n().createElement("div",{className:"cloud-son"})),n().createElement("div",{className:"cloud-light"},n().createElement("div",{className:"cloud-son"}),n().createElement("div",{className:"cloud-son"}),n().createElement("div",{className:"cloud-son"}),n().createElement("div",{className:"cloud-son"}),n().createElement("div",{className:"cloud-son"}),n().createElement("div",{className:"cloud-son"})),n().createElement("div",{className:"stars"},n().createElement("div",{className:"star big"},n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"})),n().createElement("div",{className:"star big"},n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"})),n().createElement("div",{className:"star medium"},n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"})),n().createElement("div",{className:"star medium"},n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"})),n().createElement("div",{className:"star small"},n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"})),n().createElement("div",{className:"star small"},n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"}),n().createElement("div",{className:"star-son"})))))}})(),a})()));