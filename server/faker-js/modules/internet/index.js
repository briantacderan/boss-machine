"use strict";var g=Object.create;var c=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty;var $=(a,t)=>{for(var e in t)c(a,e,{get:t[e],enumerable:!0})},d=(a,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of E(t))!T.call(a,s)&&s!==e&&c(a,s,{get:()=>t[s],enumerable:!(r=k(t,s))||r.enumerable});return a};var S=(a,t,e)=>(e=a!=null?g(b(a)):{},d(t||!a||!a.__esModule?c(e,"default",{value:a,enumerable:!0}):e,a)),C=a=>d(c({},"__esModule",{value:!0}),a);var P={};$(P,{InternetModule:()=>m});module.exports=C(P);var j=S(require("./user-agent"));class m{constructor(t){this.faker=t;for(const e of Object.getOwnPropertyNames(m.prototype))e==="constructor"||typeof this[e]!="function"||(this[e]=this[e].bind(this))}avatar(){return`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${this.faker.datatype.number(1249)}.jpg`}email(t,e,r,s){r=r||this.faker.helpers.arrayElement(this.faker.definitions.internet.free_email);let n=this.faker.helpers.slugify(this.userName(t,e));if(s!=null&&s.allowSpecialCharacters){const o="._-".split(""),i=".!#$%&'*+-/=?^_`{|}~".split("");n=n.replace(this.faker.helpers.arrayElement(o),this.faker.helpers.arrayElement(i))}return`${n}@${r}`}exampleEmail(t,e,r){const s=this.faker.helpers.arrayElement(this.faker.definitions.internet.example_email);return this.email(t,e,s,r)}userName(t,e){let r;switch(t=t||this.faker.name.firstName(),e=e||this.faker.name.lastName(),this.faker.datatype.number(2)){case 0:r=`${t}${this.faker.datatype.number(99)}`;break;case 1:r=t+this.faker.helpers.arrayElement([".","_"])+e;break;case 2:r=`${t}${this.faker.helpers.arrayElement([".","_"])}${e}${this.faker.datatype.number(99)}`;break}return r=r.toString().replace(/'/g,""),r=r.replace(/ /g,""),r}protocol(){const t=["http","https"];return this.faker.helpers.arrayElement(t)}httpMethod(){const t=["GET","POST","PUT","DELETE","PATCH"];return this.faker.helpers.arrayElement(t)}httpStatusCode(t={}){const{types:e=Object.keys(this.faker.definitions.internet.http_status_code)}=t,r=this.faker.helpers.arrayElement(e);return this.faker.helpers.arrayElement(this.faker.definitions.internet.http_status_code[r])}url(){return`${this.protocol()}://${this.domainName()}`}domainName(){return`${this.domainWord()}.${this.domainSuffix()}`}domainSuffix(){return this.faker.helpers.arrayElement(this.faker.definitions.internet.domain_suffix)}domainWord(){return`${this.faker.word.adjective()}-${this.faker.word.noun()}`.replace(/([\\~#&*{}/:<>?|\"'])/gi,"").replace(/\s/g,"-").replace(/-{2,}/g,"-").toLowerCase()}ip(){return this.ipv4()}ipv4(){const t=()=>this.faker.datatype.number(255).toFixed(0),e=[];for(let r=0;r<4;r++)e[r]=t();return e.join(".")}ipv6(){const t=()=>{let r="";for(let s=0;s<4;s++)r+=this.faker.helpers.arrayElement(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]);return r},e=[];for(let r=0;r<8;r++)e[r]=t();return e.join(":")}port(){return this.faker.datatype.number({min:0,max:65535})}userAgent(){return j.generate(this.faker)}color(t=0,e=0,r=0){const s=l=>Math.floor((this.faker.datatype.number(256)+l)/2).toString(16).padStart(2,"0"),n=s(t),o=s(e),i=s(r);return`#${n}${o}${i}`}mac(t){let e,r="",s=":";for(["-",""].indexOf(t)!==-1&&(s=t),e=0;e<12;e++)r+=this.faker.datatype.number(15).toString(16),e%2===1&&e!==11&&(r+=s);return r}password(t=15,e=!1,r=/\w/,s=""){const n=/[aeiouAEIOU]$/,o=/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/,i=(l,f,h,p)=>{if(p.length>=l)return p;f&&(p.match(o)?h=n:h=o);const y=this.faker.datatype.number(94)+33;let u=String.fromCharCode(y);return f&&(u=u.toLowerCase()),u.match(h)?i(l,f,h,p+u):i(l,f,h,p)};return i(t,e,r,s)}emoji(t={}){const{types:e=Object.keys(this.faker.definitions.internet.emoji)}=t,r=this.faker.helpers.arrayElement(e);return this.faker.helpers.arrayElement(this.faker.definitions.internet.emoji[r])}}0&&(module.exports={InternetModule});