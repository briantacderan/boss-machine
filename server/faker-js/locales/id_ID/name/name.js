"use strict";var _=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var s=Object.prototype.hasOwnProperty;var r=(a,e)=>{for(var n in e)_(a,n,{get:e[n],enumerable:!0})},i=(a,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let m of t(e))!s.call(a,m)&&m!==n&&_(a,m,{get:()=>e[m],enumerable:!(l=f(e,m))||l.enumerable});return a};var d=a=>i(_({},"__esModule",{value:!0}),a);var p={};r(p,{default:()=>o});module.exports=d(p);var o=["{{name.male_first_name}} {{name.male_last_name}}","{{name.male_last_name}} {{name.male_first_name}}","{{name.male_first_name}} {{name.male_first_name}} {{name.male_last_name}}","{{name.female_first_name}} {{name.female_last_name}}","{{name.female_first_name}} {{name.male_last_name}}","{{name.female_last_name}} {{name.female_first_name}}","{{name.female_first_name}} {{name.female_first_name}} {{name.female_last_name}}"];0&&(module.exports={});