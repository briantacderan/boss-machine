"use strict";var i=Object.create;var a=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var w=(o,r)=>{for(var e in r)a(o,e,{get:r[e],enumerable:!0})},c=(o,r,e,m)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of s(r))!b.call(o,l)&&l!==e&&a(o,l,{get:()=>r[l],enumerable:!(m=k(r,l))||m.enumerable});return o};var t=(o,r,e)=>(e=o!=null?i(F(o)):{},c(r||!o||!o.__esModule?a(e,"default",{value:o,enumerable:!0}):e,o)),x=o=>c(a({},"__esModule",{value:!0}),o);var g={};w(g,{faker:()=>d});module.exports=x(g);var f=require("../faker"),n=t(require("../locales/en")),p=t(require("../locales/ro"));const d=new f.Faker({locale:"ro",localeFallback:"en",locales:{ro:p.default,en:n.default}});0&&(module.exports={faker});
