"use strict";var s=Object.create;var n=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var D=(t,e)=>{for(var o in e)n(t,o,{get:e[o],enumerable:!0})},f=(t,e,o,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of c(e))!u.call(t,i)&&i!==o&&n(t,i,{get:()=>e[i],enumerable:!(m=d(e,i))||m.enumerable});return t};var r=(t,e,o)=>(o=t!=null?s(h(t)):{},f(e||!t||!t.__esModule?n(o,"default",{value:t,enumerable:!0}):o,t)),L=t=>f(n({},"__esModule",{value:!0}),t);var _={};D(_,{default:()=>U});module.exports=L(_);var p=r(require("./address")),a=r(require("./internet")),l=r(require("./phone_number"));const S={title:"English (United States)",address:p.default,internet:a.default,phone_number:l.default};var U=S;0&&(module.exports={});