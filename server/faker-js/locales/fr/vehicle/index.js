"use strict";var y=Object.create;var p=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var V=(e,i)=>{for(var t in i)p(e,t,{get:i[t],enumerable:!0})},m=(e,i,t,f)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of s(i))!D.call(e,o)&&o!==t&&p(e,o,{get:()=>i[o],enumerable:!(f=h(i,o))||f.enumerable});return e};var r=(e,i,t)=>(t=e!=null?y(u(e)):{},m(i||!e||!e.__esModule?p(t,"default",{value:e,enumerable:!0}):t,e)),_=e=>m(p({},"__esModule",{value:!0}),e);var d={};V(d,{default:()=>b});module.exports=_(d);var c=r(require("./bicycle_type")),l=r(require("./fuel")),n=r(require("./type"));const a={bicycle_type:c.default,fuel:l.default,type:n.default};var b=a;0&&(module.exports={});
