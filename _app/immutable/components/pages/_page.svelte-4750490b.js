import{H as J,I as Q,J as X,K as F,S as H,i as V,s as Y,k as M,a as D,q as P,L as Z,l as y,h as m,c as v,m as S,r as j,n as c,M as $,B as f,b as A,N as ee,O as te,P as re,C as se,o as oe,z as ne,Q as ie,u as z}from"../../chunks/index-0b8c7904.js";import{b as ae}from"../../chunks/paths-8e012144.js";import{f as le,a as ue}from"../../chunks/index-2b310071.js";import{w as ce}from"../../chunks/index-43fb08f2.js";function U(e){return Object.prototype.toString.call(e)==="[object Date]"}function C(e,r){if(e===r||e!==e)return()=>e;const t=typeof e;if(t!==typeof r||Array.isArray(e)!==Array.isArray(r))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=r.map((i,o)=>C(e[o],i));return i=>s.map(o=>o(i))}if(t==="object"){if(!e||!r)throw new Error("Object cannot be null");if(U(e)&&U(r)){e=e.getTime(),r=r.getTime();const o=r-e;return n=>new Date(e+n*o)}const s=Object.keys(r),i={};return s.forEach(o=>{i[o]=C(e[o],r[o])}),o=>{const n={};return s.forEach(u=>{n[u]=i[u](o)}),n}}if(t==="number"){const s=r-e;return i=>e+i*s}throw new Error(`Cannot interpolate ${t} values`)}function de(e,r={}){const t=ce(e);let s,i=e;function o(n,u){if(e==null)return t.set(e=n),Promise.resolve();i=n;let a=s,_=!1,{delay:N=0,duration:d=400,easing:h=F,interpolate:O=C}=J(J({},r),u);if(d===0)return a&&(a.abort(),a=null),t.set(e=i),Promise.resolve();const b=Q()+N;let G;return s=X(g=>{if(g<b)return!0;_||(G=O(e,n),typeof d=="function"&&(d=d(e,n)),_=!0),a&&(a.abort(),a=null);const E=g-b;return E>d?(t.set(e=n),!1):(t.set(e=G(h(E/d))),!0)}),s.promise}return{set:o,update:(n,u)=>o(n(i,e),u),subscribe:t.subscribe}}const me=e=>{const r=e==null?void 0:e.values,t=de(0,e);return{run(){t.set(r.length-1)},reset(){t.set(0,{duration:0})},reverse(){t.set(0)},subscribe(s){return t.subscribe(i=>{const o=r[Math.round(i)];s(o)})}}};function fe(e){let r;return{c(){r=P(e[2])},l(t){r=j(t,e[2])},m(t,s){A(t,r,s)},p(t,s){s&4&&z(r,t[2])},d(t){t&&m(r)}}}function he(e){let r;return{c(){r=P(e[1])},l(t){r=j(t,e[1])},m(t,s){A(t,r,s)},p(t,s){s&2&&z(r,t[1])},d(t){t&&m(r)}}}function pe(e){let r,t,s,i,o,n,u,a,_,N,d,h,O,b,G,g,E,k,R,L;function W(l,I){return l[0]?he:fe}let w=W(e),p=w(e);return{c(){r=M("meta"),t=M("meta"),s=M("meta"),i=M("meta"),o=D(),n=M("section"),u=M("div"),a=M("img"),N=D(),d=M("div"),h=M("h1"),p.c(),G=D(),g=M("button"),E=P("Get Random Quotes"),this.h()},l(l){const I=Z('[data-svelte="svelte-1eniod6"]',document.head);r=y(I,"META",{name:!0,content:!0}),t=y(I,"META",{name:!0,content:!0}),s=y(I,"META",{property:!0,content:!0}),i=y(I,"META",{property:!0,content:!0}),I.forEach(m),o=v(l),n=y(l,"SECTION",{class:!0});var x=S(n);u=y(x,"DIV",{class:!0});var B=S(u);a=y(B,"IMG",{class:!0,src:!0,alt:!0}),B.forEach(m),N=v(x),d=y(x,"DIV",{class:!0});var T=S(d);h=y(T,"H1",{class:!0});var K=S(h);p.l(K),K.forEach(m),G=v(T),g=y(T,"BUTTON",{class:!0});var q=S(g);E=j(q,"Get Random Quotes"),q.forEach(m),T.forEach(m),x.forEach(m),this.h()},h(){document.title="Kram Studio",c(r,"name","title"),c(r,"content",`Kram Studio Services - 
	RECORDING, MIXING & MASTERING, EDITING, SONGWRITING & COMPOSITION, MIDI PROGRAMMING, JINGLES, AUDIO LOGOS & RADIO ADS`),c(t,"name","description"),c(t,"content","Kram Studio \u0E23\u0E31\u0E1A Editing, Mixing, Mastering \u0E40\u0E1E\u0E25\u0E07 \u0E14\u0E49\u0E27\u0E22\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E2A\u0E39\u0E07 \u0E23\u0E31\u0E1A\u0E1C\u0E25\u0E34\u0E15 Beat \u0E14\u0E19\u0E15\u0E23\u0E35\u0E2A\u0E21\u0E31\u0E22\u0E43\u0E2B\u0E21\u0E48\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E41\u0E19\u0E27 \u0E21\u0E35\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E34\u0E25\u0E1B\u0E34\u0E19\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22 Your music is unique, don't try to sound like someone else. Free Mix Evaluation! Free Mix Consultation!"),c(s,"property","og:title"),c(s,"content","SONGWRITING & COMPOSITION, MIDI PROGRAMMING, RECORDING, MIXING & MASTERING, EDITING, JINGLES, AUDIO LOGOS & RADIO ADS"),c(i,"property","og:description"),c(i,"content","SONGWRITING & COMPOSITION, MIDI PROGRAMMING, RECORDING, MIXING & MASTERING, EDITING, JINGLES, AUDIO LOGOS & RADIO ADS"),c(a,"class","w-48 sm:w-56"),$(a.src,_=ae+"/images/ape-shit.jpeg")||c(a,"src",_),c(a,"alt","Welcome"),c(u,"class","flex justify-center w-full my-8"),c(h,"class","text-base sm:text-large md:text-xl font-bold text-center h-28 md:h-32 text-yellow-300"),c(g,"class","mx-auto border border-[#71CC00] max-w-xs border-4 mt-12 px-4 py-3 text-center text-sm font-semibold uppercase text-white"),c(d,"class","flex flex-col justify-center"),c(n,"class","container")},m(l,I){f(document.head,r),f(document.head,t),f(document.head,s),f(document.head,i),A(l,o,I),A(l,n,I),f(n,u),f(u,a),f(n,N),f(n,d),f(d,h),p.m(h,null),f(d,G),f(d,g),f(g,E),k=!0,R||(L=ee(g,"click",e[4]),R=!0)},p(l,[I]){w===(w=W(l))&&p?p.p(l,I):(p.d(1),p=w(l),p&&(p.c(),p.m(h,null)))},i(l){k||(te(()=>{b&&b.end(1),O=ie(h,ue,{y:200,duration:500}),O.start()}),k=!0)},o(l){O&&O.invalidate(),b=re(h,le,{}),k=!1},d(l){m(r),m(t),m(s),m(i),l&&m(o),l&&m(n),p.d(),l&&b&&b.end(),R=!1,L()}}}function Ie(e,r,t){let s;const i=["Where words fail, music speaks.","I like beautiful melodies telling me terrible things.","Music, when soft voices die, vibrates in the memory.","Beethoven tells you what it's like to be Beethoven and Mozart tells you what it's like to be human. Bach tells you what it's like to be the universe.","Music is an agreeable harmony for the honor of God and the permissible delights of the soul.","Music is healing. Music holds things together","Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.","Where words leave off, music begins.","Music, once admitted to the soul, becomes a sort of spirit, and never dies.","Music is the universal language of mankind.","Music produces a kind of pleasure which human nature cannot do without.","If you are looking for a trustworthy recording studio, look no further. Kram Studio has our very own recording studio right here in Sammakorn, Ramkhamhaeng 112","Make some noise, explore a new sound!","Get flawless sound instantly","Our mixing makes memories for maximum impact. Music is essential so let it reach its full potential. We can make it great.","In addition to tracking and mixing, Kram Studio can produce your sound with customised production/beat production, tracking, mastering & mixing."],o=me({values:i,duration:1e4});se(e,o,_=>t(2,s=_));let n=!1,u="";oe(()=>{a()});async function a(){t(0,n=!1),o.run(),t(1,u=i[Math.floor(Math.random()*i.length)]),await ne(),setTimeout(()=>{t(0,n=!0),o.reset()},25e3)}return[n,u,s,o,a]}class _e extends H{constructor(r){super(),V(this,r,Ie,pe,Y,{})}}export{_e as default};