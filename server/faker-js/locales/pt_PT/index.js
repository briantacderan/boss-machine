"use strict";var P=Object.create;var i=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var b=(o,r)=>{for(var m in r)i(o,m,{get:r[m],enumerable:!0})},f=(o,r,m,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of h(r))!L.call(o,e)&&e!==m&&i(o,e,{get:()=>r[e],enumerable:!(p=g(r,e))||p.enumerable});return o};var t=(o,r,m)=>(m=o!=null?P(D(o)):{},f(r||!o||!o.__esModule?i(m,"default",{value:o,enumerable:!0}):m,o)),x=o=>f(i({},"__esModule",{value:!0}),o);var j={};b(j,{default:()=>T});module.exports=x(j);var n=t(require("./address")),a=t(require("./cell_phone")),l=t(require("./color")),c=t(require("./commerce")),u=t(require("./date")),d=t(require("./internet")),s=t(require("./name")),_=t(require("./phone_number"));const y={title:"Portuguese (Portugal)",address:n.default,cell_phone:a.default,color:l.default,commerce:c.default,date:u.default,internet:d.default,name:s.default,phone_number:_.default};var T=y;0&&(module.exports={});