"use strict";var r=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var a=(h,t)=>{for(var i in t)r(h,i,{get:t[i],enumerable:!0})},g=(h,t,i,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of u(t))!d.call(h,n)&&n!==i&&r(h,n,{get:()=>t[n],enumerable:!(s=f(t,n))||s.enumerable});return h};var b=h=>g(r({},"__esModule",{value:!0}),h);var o={};a(o,{default:()=>m});module.exports=b(o);class m{constructor(){this.N=624;this.M=397;this.MATRIX_A=2567483615;this.UPPER_MASK=2147483648;this.LOWER_MASK=2147483647;this.mt=new Array(this.N);this.mti=this.N+1;this.mag01=[0,this.MATRIX_A]}unsigned32(t){return t<0?(t^this.UPPER_MASK)+this.UPPER_MASK:t}subtraction32(t,i){return t<i?this.unsigned32(4294967296-(i-t)&4294967295):t-i}addition32(t,i){return this.unsigned32(t+i&4294967295)}multiplication32(t,i){let s=0;for(let n=0;n<32;++n)t>>>n&1&&(s=this.addition32(s,this.unsigned32(i<<n)));return s}initGenrand(t){for(this.mt[0]=this.unsigned32(t&4294967295),this.mti=1;this.mti<this.N;this.mti++)this.mt[this.mti]=this.addition32(this.multiplication32(1812433253,this.unsigned32(this.mt[this.mti-1]^this.mt[this.mti-1]>>>30)),this.mti),this.mt[this.mti]=this.unsigned32(this.mt[this.mti]&4294967295)}initByArray(t,i){this.initGenrand(19650218);let s=1,n=0,e=this.N>i?this.N:i;for(;e;e--)this.mt[s]=this.addition32(this.addition32(this.unsigned32(this.mt[s]^this.multiplication32(this.unsigned32(this.mt[s-1]^this.mt[s-1]>>>30),1664525)),t[n]),n),this.mt[s]=this.unsigned32(this.mt[s]&4294967295),s++,n++,s>=this.N&&(this.mt[0]=this.mt[this.N-1],s=1),n>=i&&(n=0);for(e=this.N-1;e;e--)this.mt[s]=this.subtraction32(this.unsigned32(this.mt[s]^this.multiplication32(this.unsigned32(this.mt[s-1]^this.mt[s-1]>>>30),1566083941)),s),this.mt[s]=this.unsigned32(this.mt[s]&4294967295),s++,s>=this.N&&(this.mt[0]=this.mt[this.N-1],s=1);this.mt[0]=2147483648}genrandInt32(){let t;if(this.mti>=this.N){let i;for(this.mti===this.N+1&&this.initGenrand(5489),i=0;i<this.N-this.M;i++)t=this.unsigned32(this.mt[i]&this.UPPER_MASK|this.mt[i+1]&this.LOWER_MASK),this.mt[i]=this.unsigned32(this.mt[i+this.M]^t>>>1^this.mag01[t&1]);for(;i<this.N-1;i++)t=this.unsigned32(this.mt[i]&this.UPPER_MASK|this.mt[i+1]&this.LOWER_MASK),this.mt[i]=this.unsigned32(this.mt[i+(this.M-this.N)]^t>>>1^this.mag01[t&1]);t=this.unsigned32(this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK),this.mt[this.N-1]=this.unsigned32(this.mt[this.M-1]^t>>>1^this.mag01[t&1]),this.mti=0}return t=this.mt[this.mti++],t=this.unsigned32(t^t>>>11),t=this.unsigned32(t^t<<7&2636928640),t=this.unsigned32(t^t<<15&4022730752),t=this.unsigned32(t^t>>>18),t}genrandInt31(){return this.genrandInt32()>>>1}genrandReal1(){return this.genrandInt32()*(1/4294967295)}genrandReal2(){return this.genrandInt32()*(1/4294967296)}genrandReal3(){return(this.genrandInt32()+.5)*(1/4294967296)}genrandRes53(){const t=this.genrandInt32()>>>5,i=this.genrandInt32()>>>6;return(t*67108864+i)*(1/9007199254740992)}}0&&(module.exports={});
