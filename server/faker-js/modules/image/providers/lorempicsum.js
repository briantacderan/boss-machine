"use strict";var u=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var b=(t,r)=>{for(var e in r)u(t,e,{get:r[e],enumerable:!0})},p=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of g(r))!l.call(t,a)&&a!==e&&u(t,a,{get:()=>r[a],enumerable:!(n=o(r,a))||n.enumerable});return t};var c=t=>p(u({},"__esModule",{value:!0}),t);var d={};b(d,{LoremPicsum:()=>f});module.exports=c(d);var s=require("../../../internal/deprecated");class f{constructor(r){this.faker=r}image(r,e,n,a){return this.imageUrl(r,e,n,a)}imageGrayscale(r,e,n){return this.imageUrl(r,e,n)}imageBlurred(r,e,n){return this.imageUrl(r,e,void 0,n)}imageRandomSeeded(r,e,n,a,m){return this.imageUrl(r,e,n,a,m)}avatar(){return(0,s.deprecated)({deprecated:"faker.image.lorempicsum.avatar()",proposed:"faker.internet.avatar()",since:"7.3",until:"8.0"}),this.faker.internet.avatar()}imageUrl(r,e,n,a,m){r=r||640,e=e||480;let i="https://picsum.photos";return m&&(i+=`/seed/${m}`),i+=`/${r}/${e}`,n&&a?`${i}?grayscale&blur=${a}`:n?`${i}?grayscale`:a?`${i}?blur=${a}`:i}}0&&(module.exports={LoremPicsum});
