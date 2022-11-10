"use strict";var w=Object.create;var h=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,K=Object.prototype.hasOwnProperty;var I=(o,e)=>{for(var t in e)h(o,t,{get:e[t],enumerable:!0})},T=(o,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of S(e))!K.call(o,n)&&n!==t&&h(o,n,{get:()=>e[n],enumerable:!(r=A(e,n))||r.enumerable});return o};var N=(o,e,t)=>(t=o!=null?w(E(o)):{},T(e||!o||!o.__esModule?h(t,"default",{value:o,enumerable:!0}):t,o)),P=o=>T(h({},"__esModule",{value:!0}),o);var G={};I(G,{HelpersModule:()=>b});module.exports=P(G);var k=require("../../errors/faker-error"),x=require("../../internal/deprecated"),R=require("./luhn-check"),j=N(require("./unique"));class b{constructor(e){this.faker=e;for(const t of Object.getOwnPropertyNames(b.prototype))t==="constructor"||typeof this[t]!="function"||(this[t]=this[t].bind(this))}slugify(e=""){return e.replace(/ /g,"-").replace(/[^\一-龠\ぁ-ゔ\ァ-ヴー\w\.\-]+/g,"")}replaceSymbolWithNumber(e="",t="#"){let r="";for(let n=0;n<e.length;n++)e.charAt(n)===t?r+=this.faker.datatype.number(9):e.charAt(n)==="!"?r+=this.faker.datatype.number({min:2,max:9}):r+=e.charAt(n);return r}replaceSymbols(e=""){const t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];let r="";for(let n=0;n<e.length;n++)e.charAt(n)==="#"?r+=this.faker.datatype.number(9):e.charAt(n)==="?"?r+=this.arrayElement(t):e.charAt(n)==="*"?r+=this.faker.datatype.boolean()?this.arrayElement(t):this.faker.datatype.number(9):r+=e.charAt(n);return r}replaceCreditCardSymbols(e="6453-####-####-####-###L",t="#"){e=this.regexpStyleStringParse(e),e=this.replaceSymbolWithNumber(e,t);const r=(0,R.luhnCheckValue)(e);return e.replace("L",String(r))}repeatString(e="",t=0){return(0,x.deprecated)({deprecated:"faker.helpers.repeatString()",proposed:"String.prototype.repeat()",since:"7.5",until:"8.0"}),e.repeat(t)}regexpStyleStringParse(e=""){const t=/(.)\{(\d+)\,(\d+)\}/,r=/(.)\{(\d+)\}/,n=/\[(\d+)\-(\d+)\]/;let a,s,l,c,i=e.match(t);for(;i!=null;)a=parseInt(i[2]),s=parseInt(i[3]),a>s&&(l=s,s=a,a=l),c=this.faker.datatype.number({min:a,max:s}),e=e.slice(0,i.index)+i[1].repeat(c)+e.slice(i.index+i[0].length),i=e.match(t);for(i=e.match(r);i!=null;)c=parseInt(i[2]),e=e.slice(0,i.index)+i[1].repeat(c)+e.slice(i.index+i[0].length),i=e.match(r);for(i=e.match(n);i!=null;)a=parseInt(i[1]),s=parseInt(i[2]),a>s&&(l=s,s=a,a=l),e=e.slice(0,i.index)+this.faker.datatype.number({min:a,max:s}).toString()+e.slice(i.index+i[0].length),i=e.match(n);return e}shuffle(e){if(e==null||e.length===0)return e||[];for(let t=e.length-1;t>0;--t){const r=this.faker.datatype.number(t),n=e[t];e[t]=e[r],e[r]=n}return e}uniqueArray(e,t){if(Array.isArray(e)){const n=new Set(e),a=Array.from(n);return this.shuffle(a).splice(0,t)}const r=new Set;try{if(typeof e=="function")for(;r.size<t;)r.add(e())}catch{}return Array.from(r)}mustache(e,t){if(e==null)return"";for(const r in t){const n=new RegExp(`{{${r}}}`,"g"),a=t[r];e=e.replace(n,a)}return e}maybe(e,t={}){const{probability:r=.5}=t;if(this.faker.datatype.float({min:0,max:1})<r)return e()}objectKey(e){const t=Object.keys(e);return this.arrayElement(t)}objectValue(e){const t=this.faker.helpers.objectKey(e);return e[t]}arrayElement(e=["a","b","c"]){const t=e.length>1?this.faker.datatype.number({max:e.length-1}):0;return e[t]}arrayElements(e=["a","b","c"],t){typeof t!="number"?t=e.length===0?0:this.faker.datatype.number({min:1,max:e.length}):t>e.length?t=e.length:t<0&&(t=0);const r=e.slice(0);let n=e.length;const a=n-t;let s,l;for(;n-- >a;)l=Math.floor((n+1)*this.faker.datatype.float({min:0,max:.99})),s=r[l],r[l]=r[n],r[n]=s;return r.slice(a)}fake(e){if(typeof e!="string"||e.length===0)throw new k.FakerError("string parameter is required!");const t=e.search(/{{[a-z]/),r=e.indexOf("}}",t);if(t===-1||r===-1)return e;let a=e.substring(t+2,r+2).replace("}}","").replace("{{","");const s=/\(([^)]+)\)/,l=s.exec(a);let c="";l&&(a=a.replace(s,""),c=l[1]);const i=a.split(".");let m=this.faker,f=this.faker.definitions;for(const y of i)m=m==null?void 0:m[y],f=f==null?void 0:f[y];let u;if(typeof m=="function")u=m;else if(Array.isArray(f))u=()=>this.faker.helpers.arrayElement(f);else throw new k.FakerError(`Invalid module method or definition: ${a}
- faker.${a} is not a function
- faker.definitions.${a} is not an array`);u=u.bind(this);let p;try{p=JSON.parse(c)}catch{p=c}let d;typeof p=="string"&&p.length===0?d=String(u()):d=String(u(p));const g=e.substring(0,t)+d+e.substring(r+2);return g===""?"":this.fake(g)}unique(e,t,r={}){const{maxTime:n=50,maxRetries:a=50}=r;return j.exec(e,t,{...r,startTime:new Date().getTime(),maxTime:n,maxRetries:a,currentIterations:0})}}0&&(module.exports={HelpersModule});
