"use strict";var p=Object.create;var a=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var s=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var F=(o,e)=>{for(var r in e)a(o,r,{get:e[r],enumerable:!0})},c=(o,e,r,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of d(e))!D.call(o,l)&&l!==r&&a(o,l,{get:()=>e[l],enumerable:!(m=k(e,l))||m.enumerable});return o};var i=(o,e,r)=>(r=o!=null?p(s(o)):{},c(e||!o||!o.__esModule?a(r,"default",{value:o,enumerable:!0}):r,o)),I=o=>c(a({},"__esModule",{value:!0}),o);var b={};F(b,{faker:()=>_});module.exports=I(b);var t=require("../faker"),f=i(require("../locales/en")),n=i(require("../locales/id_ID"));const _=new t.Faker({locale:"id_ID",localeFallback:"en",locales:{id_ID:n.default,en:f.default}});0&&(module.exports={faker});