"use strict";var L=Object.create;var e=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty;var w=(o,m)=>{for(var r in m)e(o,r,{get:m[r],enumerable:!0})},f=(o,m,r,n)=>{if(m&&typeof m=="object"||typeof m=="function")for(let t of b(m))!s.call(o,t)&&t!==r&&e(o,t,{get:()=>m[t],enumerable:!(n=_(m,t))||n.enumerable});return o};var i=(o,m,r)=>(r=o!=null?L(g(o)):{},f(m||!o||!o.__esModule?e(r,"default",{value:o,enumerable:!0}):r,o)),x=o=>f(e({},"__esModule",{value:!0}),o);var j={};w(j,{default:()=>H});module.exports=x(j);var p=i(require("./animal")),a=i(require("./commerce")),c=i(require("./date")),l=i(require("./finance")),u=i(require("./internet")),d=i(require("./name")),h=i(require("./phone_number")),D=i(require("./word"));const y={title:"Hungarian",animal:p.default,commerce:a.default,date:c.default,finance:l.default,internet:u.default,name:d.default,phone_number:h.default,word:D.default};var H=y;0&&(module.exports={});