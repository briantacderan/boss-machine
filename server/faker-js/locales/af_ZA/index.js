"use strict";var d=Object.create;var i=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var D=(o,r)=>{for(var m in r)i(o,m,{get:r[m],enumerable:!0})},f=(o,r,m,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of u(r))!A.call(o,t)&&t!==m&&i(o,t,{get:()=>r[t],enumerable:!(n=h(r,t))||n.enumerable});return o};var e=(o,r,m)=>(m=o!=null?d(y(o)):{},f(r||!o||!o.__esModule?i(m,"default",{value:o,enumerable:!0}):m,o)),L=o=>f(i({},"__esModule",{value:!0}),o);var x={};D(x,{default:()=>k});module.exports=L(x);var p=e(require("./address")),a=e(require("./cell_phone")),l=e(require("./company")),c=e(require("./internet")),s=e(require("./name")),_=e(require("./phone_number"));const b={title:"Afrikaans",address:p.default,cell_phone:a.default,company:l.default,internet:c.default,name:s.default,phone_number:_.default};var k=b;0&&(module.exports={});