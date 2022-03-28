var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,l,u,f,s,d,c,p,h,b,v,y,m,g,j,w,k,P,_={85:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(732),t.e(568)]).then((()=>()=>t(568))),"./extension":()=>Promise.all([t.e(732),t.e(568)]).then((()=>()=>t(568))),"./style":()=>t.e(747).then((()=>()=>t(747)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},x={};function O(e){var r=x[e];if(void 0!==r)return r.exports;var t=x[e]={id:e,exports:{}};return _[e].call(t.exports,t,t.exports,O),t.exports}O.m=_,O.c=x,O.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return O.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,O.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var a=Object.create(null);O.r(a);var o={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>t[e]));return o.default=()=>t,O.d(a,o),a},O.d=(e,r)=>{for(var t in r)O.o(r,t)&&!O.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},O.f={},O.e=e=>Promise.all(Object.keys(O.f).reduce(((r,t)=>(O.f[t](e,r),r)),[])),O.u=e=>e+"."+{4:"aa4e62ff88f11750cfe5",93:"958001fd8f18ef939366",349:"eb4eedc9252cd03d5195",568:"8fdc28b54b826eecb6b1",720:"3e7cb523e74b3cf6bfff",732:"0da11ef43dc987a0f5d2",747:"ece9653f050af9ba4315",792:"f596a7825ef4074e332e",797:"773a797150d19cdd3afc"}[e]+".js?v="+{4:"aa4e62ff88f11750cfe5",93:"958001fd8f18ef939366",349:"eb4eedc9252cd03d5195",568:"8fdc28b54b826eecb6b1",720:"3e7cb523e74b3cf6bfff",732:"0da11ef43dc987a0f5d2",747:"ece9653f050af9ba4315",792:"f596a7825ef4074e332e",797:"773a797150d19cdd3afc"}[e],O.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),O.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="@jupyterlite/pyolite-camunda-kernel-extension:",O.l=(e,r,a,o)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+a){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,O.nc&&i.setAttribute("nonce",O.nc),i.setAttribute("data-webpack",n+a),i.src=e),t[e]=[r];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},O.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{O.S={};var e={},r={};O.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];O.o(O.S,t)||(O.S[t]={});var o=O.S[t],i="@jupyterlite/pyolite-camunda-kernel-extension",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@jupyterlite/kernel","0.1.0-beta.4",(()=>Promise.all([O.e(349),O.e(797),O.e(4),O.e(732)]).then((()=>()=>O(349))))),l("@jupyterlite/kernel","0.1.0-beta.4",(()=>Promise.all([O.e(720),O.e(797),O.e(4),O.e(732)]).then((()=>()=>O(720))))),l("@jupyterlite/pyolite-camunda-kernel-extension","0.1.0-beta.4",(()=>Promise.all([O.e(732),O.e(568)]).then((()=>()=>O(568))))),l("@jupyterlite/pyolite-camunda-kernel","0.1.0-beta.4",(()=>Promise.all([O.e(797),O.e(732),O.e(93)]).then((()=>()=>O(93)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;O.g.importScripts&&(e=O.g.location+"");var r=O.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),O.p=e})(),a=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},o=(e,r)=>{e=a(e),r=a(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],o=(typeof n)[0];if(t>=r.length)return"u"==o;var i=r[t],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;t++}},i=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var o=[];for(a=1;a<e.length;a++){var l=e[a];o.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?o.pop()+" "+o.pop():i(l))}return u();function u(){return o.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,r)=>{if(0 in e){r=a(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var o=0,i=1,u=!0;;i++,o++){var f,s,d=i<e.length?(typeof e[i])[0]:"";if(o>=r.length||"o"==(s=(typeof(f=r[o]))[0]))return!u||("u"==d?i>t&&!n:""==d!=n);if("u"==s){if(!u||"u"!=d)return!1}else if(u)if(d==s)if(i<=t){if(f!=e[i])return!1}else{if(n?f>e[i]:f<e[i])return!1;f!=e[i]&&(u=!1)}else if("s"!=d&&"n"!=d){if(n||i<=t)return!1;u=!1,i--}else{if(i<=t||s<d!=n)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,i--)}}var c=[],p=c.pop.bind(c);for(o=1;o<e.length;o++){var h=e[o];c.push(1==h?p()|p():2==h?p()&p():h?l(h,r):!p())}return!!p()},u=(e,r)=>{var t=O.S[e];if(!t||!O.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},f=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||o(e,r)?r:e),0))&&t[r]},s=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&o(e,r)?r:e),0)},d=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+i(n)+")",c=(e,r,t,n)=>{var a=s(e,t);return l(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(d(e,t,a,n)),v(e[t][a])},p=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!l(t,r)||e&&!o(e,r)?e:r),0))&&n[r]},h=(e,r,t,n)=>{var a=e[t];return"No satisfying version ("+i(n)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(a).map((e=>e+" from "+a[e].from)).join(", ")},b=(e,r,t,n)=>{"undefined"!=typeof console&&console.warn&&console.warn(h(e,r,t,n))},v=e=>(e.loaded=1,e.get()),m=(y=e=>function(r,t,n,a){var o=O.I(r);return o&&o.then?o.then(e.bind(e,r,O.S[r],t,n,a)):e(r,O.S[r],t,n,a)})(((e,r,t,n)=>(u(e,t),v(p(r,t,n)||b(r,e,t,n)||f(r,t))))),g=y(((e,r,t,n)=>(u(e,t),c(r,0,t,n)))),j=y(((e,r,t,n,a)=>{var o=r&&O.o(r,t)&&p(r,t,n);return o?v(o):a()})),w={},k={732:()=>g("default","@jupyterlab/coreutils",[1,5,1,5]),698:()=>j("default","@jupyterlite/kernel",[2,0,1,0,,"beta",4],(()=>Promise.all([O.e(349),O.e(797),O.e(4)]).then((()=>()=>O(349))))),797:()=>g("default","@lumino/coreutils",[1,1,5,3]),168:()=>g("default","@lumino/signaling",[1,1,4,3]),232:()=>m("default","@jupyterlab/observables",[1,4,1,5]),786:()=>g("default","@jupyterlab/services",[1,6,1,5]),66:()=>j("default","@jupyterlite/kernel",[2,0,1,0,,"beta",4],(()=>Promise.all([O.e(720),O.e(4)]).then((()=>()=>O(720))))),792:()=>j("default","@jupyterlite/pyolite-camunda-kernel",[2,0,1,0,,"beta",4],(()=>Promise.all([O.e(797),O.e(93)]).then((()=>()=>O(93)))))},P={4:[168,232,786],93:[66],568:[698],732:[732],792:[792],797:[797]},O.f.consumes=(e,r)=>{O.o(P,e)&&P[e].forEach((e=>{if(O.o(w,e))return r.push(w[e]);var t=r=>{w[e]=0,O.m[e]=t=>{delete O.c[e],t.exports=r()}},n=r=>{delete w[e],O.m[e]=t=>{throw delete O.c[e],r}};try{var a=k[e]();a.then?r.push(w[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={332:0};O.f.j=(r,t)=>{var n=O.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(7(32|92|97)|4)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=O.p+O.u(r),i=new Error;O.l(o,(t=>{if(O.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in i)O.o(i,n)&&(O.m[n]=i[n]);l&&l(O)}for(r&&r(t);u<o.length;u++)a=o[u],O.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunk_jupyterlite_pyolite_camunda_kernel_extension=self.webpackChunk_jupyterlite_pyolite_camunda_kernel_extension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var S=O(85);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlite/pyolite-camunda-kernel-extension"]=S})();