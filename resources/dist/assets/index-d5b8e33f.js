(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function y(){}function I(e){return e()}function P(){return Object.create(null)}function N(e){e.forEach(I)}function K(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let k;function X(e,t){return k||(k=document.createElement("a")),k.href=t,e===k.href}function Y(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function x(){return O(" ")}function Z(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let V;function w(e){V=e}const $=[],B=[],S=[],H=[],ne=Promise.resolve();let j=!1;function re(){j||(j=!0,ne.then(D))}function M(e){S.push(e)}const A=new Set;let _=0;function D(){if(_!==0)return;const e=V;do{try{for(;_<$.length;){const t=$[_];_++,w(t),oe(t.$$)}}catch(t){throw $.length=0,_=0,t}for(w(null),$.length=0,_=0;B.length;)B.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];A.has(n)||(A.add(n),n())}S.length=0}while($.length);for(;H.length;)H.pop()();j=!1,A.clear(),w(e)}function oe(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const C=new Set;let ie;function G(e,t){e&&e.i&&(C.delete(e),e.i(t))}function se(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),ie.c.push(()=>{C.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function le(e){e&&e.c()}function J(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||M(()=>{const s=e.$$.on_mount.map(I).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...s):N(s),e.$$.on_mount=[]}),i.forEach(M)}function Q(e,t){const n=e.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){e.$$.dirty[0]===-1&&($.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,r,o,i,s,h=[-1]){const m=V;w(e);const l=e.$$={fragment:null,ctx:[],props:i,update:y,not_equal:o,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:P(),dirty:h,skip_bound:!1,root:t.target||m.$$.root};s&&s(l.root);let v=!1;if(l.ctx=n?n(e,t.props||{},(f,d,...b)=>{const g=b.length?b[0]:d;return l.ctx&&o(l.ctx[f],l.ctx[f]=g)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](g),v&&ce(e,f)),d}):[],l.update(),v=!0,N(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const f=ee(t.target);l.fragment&&l.fragment.l(f),f.forEach(T)}else l.fragment&&l.fragment.c();t.intro&&G(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),D()}w(m)}class U{$destroy(){Q(this,1),this.$destroy=y}$on(t,n){if(!K(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fe="/assets/svelte-a39f39b7.svg";function ue(e){let t,n,r,o,i;return{c(){t=a("button"),n=O("count is "),r=O(e[0])},m(s,h){z(s,t,h),c(t,n),c(t,r),o||(i=Z(t,"click",e[1]),o=!0)},p(s,[h]){h&1&&te(r,s[0])},i:y,o:y,d(s){s&&T(t),o=!1,i()}}}function ae(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class de extends U{constructor(t){super(),R(this,t,ae,ue,F,{})}}function he(e){let t,n,r,o,i,s,h,m,l,v,f,d,b,g,q,L,E;return d=new de({}),{c(){t=a("main"),n=a("div"),r=a("a"),r.innerHTML='<img src="/vite.svg" class="logo svelte-c9fbf7" alt="Vite Logo"/>',o=x(),i=a("a"),s=a("img"),m=x(),l=a("h1"),l.textContent="Vite + Svelte",v=x(),f=a("div"),le(d.$$.fragment),b=x(),g=a("p"),g.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',q=x(),L=a("p"),L.textContent="Click on the Vite and Svelte logos to learn more",u(r,"href","https://vitejs.dev"),u(r,"target","_blank"),u(r,"rel","noreferrer"),X(s.src,h=fe)||u(s,"src",h),u(s,"class","logo svelte svelte-c9fbf7"),u(s,"alt","Svelte Logo"),u(i,"href","https://svelte.dev"),u(i,"target","_blank"),u(i,"rel","noreferrer"),u(f,"class","card"),u(L,"class","read-the-docs svelte-c9fbf7")},m(p,W){z(p,t,W),c(t,n),c(n,r),c(n,o),c(n,i),c(i,s),c(t,m),c(t,l),c(t,v),c(t,f),J(d,f,null),c(t,b),c(t,g),c(t,q),c(t,L),E=!0},p:y,i(p){E||(G(d.$$.fragment,p),E=!0)},o(p){se(d.$$.fragment,p),E=!1},d(p){p&&T(t),Q(d)}}}function me(e){return window.Neutralino.init(),[]}class pe extends U{constructor(t){super(),R(this,t,me,he,F,{})}}new pe({target:document.getElementById("app")});
