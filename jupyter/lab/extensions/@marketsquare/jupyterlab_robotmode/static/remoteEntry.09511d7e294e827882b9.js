var _JUPYTERLAB;(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@marketsquare/jupyterlab_robotmode"]=(()=>{"use strict";var e,r,t,o,n,a,i,u,l,s,f,d,p,c,h,v={109:(e,r,t)=>{var o={"./index":()=>t.e(568).then((()=>()=>t(568))),"./extension":()=>t.e(480).then((()=>()=>t(480)))},n=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var o=t.S.default,n="default";if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>n,init:()=>a})}},b={};function m(e){if(b[e])return b[e].exports;var r=b[e]={exports:{}};return v[e].call(r.exports,r,r.exports,m),r.exports}return m.m=v,m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e,r),r)),[])),m.u=e=>e+"."+{480:"4ec31ba8d7115e17188a",568:"abb06746a29814ce5b35"}[e]+".js?v="+{480:"4ec31ba8d7115e17188a",568:"abb06746a29814ce5b35"}[e],m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@marketsquare/jupyterlab_robotmode:",m.l=(t,o,n)=>{if(e[t])e[t].push(o);else{var a,i;if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var s=u[l];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+n){a=s;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,m.nc&&a.setAttribute("nonce",m.nc),a.setAttribute("data-webpack",r+n),a.src=t),e[t]=[o];var f=(r,o)=>{a.onerror=a.onload=null,clearTimeout(d);var n=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),r)return r(o)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),i&&document.head.appendChild(a)}},(()=>{m.S={};var e={},r={};m.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var a=m.S[t],i="@marketsquare/jupyterlab_robotmode",u=[];switch(t){case"default":((e,r,t)=>{var o=a[e]=a[e]||{},n=o[r];(!n||!n.loaded&&i>n.from)&&(o[r]={get:()=>m.e(568).then((()=>()=>m(568))),from:i})})("@marketsquare/jupyterlab_robotmode","0.3.1")}return e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;m.g.importScripts&&(e=m.g.location+"");var r=m.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},o=(e,r)=>{e=t(e),r=t(r);for(var o=0;;){if(o>=e.length)return o<r.length&&"u"!=(typeof r[o])[0];var n=e[o],a=(typeof n)[0];if(o>=r.length)return"u"==a;var i=r[o],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}},n=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,r+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return r}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():n(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var o=e[0],n=o<0;n&&(o=-o-1);for(var i=0,u=1,l=!0;;u++,i++){var s,f,d=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!l||("u"==d?u>o&&!n:""==d!=n);if("u"==f){if(!l||"u"!=d)return!1}else if(l)if(d==f)if(u<=o){if(s!=e[u])return!1}else{if(n?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(n||u<=o)return!1;l=!1,u--}else{if(u<=o||f<d!=n)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>{var t=m.S[e];if(!t||!m.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&o(e,r)?r:e),0)},l=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+n(t)+")",s=(e,r,t,o)=>{var n=u(e,t);return a(o,n)||"undefined"!=typeof console&&console.warn&&console.warn(l(t,n,o)),f(e[t][n])},f=e=>(e.loaded=1,e.get()),d=(e=>function(r,t,o,n){var a=m.I(r);return a&&a.then?a.then(e.bind(e,r,m.S[r],t,o,n)):e(r,m.S[r],t,o)})(((e,r,t,o)=>(i(e,t),s(r,0,t,o)))),p={},c={453:()=>d("default","@jupyterlab/codemirror",[1,3,0,5])},h={480:[453]},m.f.consumes=(e,r)=>{m.o(h,e)&&h[e].forEach((e=>{if(m.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,v[e]=t=>{delete b[e],t.exports=r()}},o=r=>{delete p[e],v[e]=t=>{throw delete b[e],r}};try{var n=c[e]();n.then?r.push(p[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}))},(()=>{var e={234:0};m.f.j=(r,t)=>{var o=m.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>{o=e[r]=[t,n]}));t.push(o[2]=n);var a=m.p+m.u(r),i=new Error;m.l(a,(t=>{if(m.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r)}};var r=(r,t)=>{for(var o,n,[a,i,u]=t,l=0,s=[];l<a.length;l++)n=a[l],m.o(e,n)&&e[n]&&s.push(e[n][0]),e[n]=0;for(o in i)m.o(i,o)&&(m.m[o]=i[o]);for(u&&u(m),r&&r(t);s.length;)s.shift()()},t=self.webpackChunk_marketsquare_jupyterlab_robotmode=self.webpackChunk_marketsquare_jupyterlab_robotmode||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),m(109)})();