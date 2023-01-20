(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function b(){}function B(e){return e()}function V(){return Object.create(null)}function k(e){e.forEach(B)}function I(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function U(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function q(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function v(){return S(" ")}function F(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function M(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function W(e){return Array.from(e.childNodes)}function X(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let O;function x(e){O=e}const y=[],P=[],w=[],T=[],Y=Promise.resolve();let N=!1;function Z(){N||(N=!0,Y.then(H))}function L(e){w.push(e)}const E=new Set;let $=0;function H(){if($!==0)return;const e=O;do{try{for(;$<y.length;){const t=y[$];$++,x(t),ee(t.$$)}}catch(t){throw y.length=0,$=0,t}for(x(null),y.length=0,$=0;P.length;)P.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];E.has(n)||(E.add(n),n())}w.length=0}while(y.length);for(;T.length;)T.pop()();N=!1,E.clear(),x(e)}function ee(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const C=new Set;let te;function z(e,t){e&&e.i&&(C.delete(e),e.i(t))}function ne(e,t,n,o){if(e&&e.o){if(C.has(e))return;C.add(e),te.c.push(()=>{C.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function re(e){e&&e.c()}function D(e,t,n,o){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),o||L(()=>{const s=e.$$.on_mount.map(B).filter(I);e.$$.on_destroy?e.$$.on_destroy.push(...s):k(s),e.$$.on_mount=[]}),i.forEach(L)}function G(e,t){const n=e.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){e.$$.dirty[0]===-1&&(y.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,o,r,i,s,a=[-1]){const f=O;x(e);const c=e.$$={fragment:null,ctx:[],props:i,update:b,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:V(),dirty:a,skip_bound:!1,root:t.target||f.$$.root};s&&s(c.root);let _=!1;if(c.ctx=n?n(e,t.props||{},(l,p,...h)=>{const g=h.length?h[0]:p;return c.ctx&&r(c.ctx[l],c.ctx[l]=g)&&(!c.skip_bound&&c.bound[l]&&c.bound[l](g),_&&oe(e,l)),p}):[],c.update(),_=!0,k(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const l=W(t.target);c.fragment&&c.fragment.l(l),l.forEach(A)}else c.fragment&&c.fragment.c();t.intro&&z(e.$$.fragment),D(e,t.target,t.anchor,t.customElement),H()}x(f)}class Q{$destroy(){G(this,1),this.$destroy=b}$on(t,n){if(!I(n))return b;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!U(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ie(e){let t,n,o,r,i;return{c(){t=d("button"),n=S("count is "),o=S(e[0])},m(s,a){q(s,t,a),u(t,n),u(t,o),r||(i=F(t,"click",e[1]),r=!0)},p(s,[a]){a&1&&X(o,s[0])},i:b,o:b,d(s){s&&A(t),r=!1,i()}}}function ce(e,t,n){let o=0;return[o,()=>{n(0,o+=1)}]}class se extends Q{constructor(t){super(),J(this,t,ce,ie,K,{})}}function ue(e){let t,n,o,r,i,s,a,f,c,_,l,p,h,g,j;return f=new se({}),{c(){t=d("main"),n=d("div"),o=d("button"),o.textContent="open VScode at root",r=v(),i=d("h1"),i.textContent="Vite + Svelte",s=v(),a=d("div"),re(f.$$.fragment),c=v(),_=d("p"),_.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',l=v(),p=d("p"),p.textContent="Click on the Vite and Svelte logos to learn more",M(a,"class","card"),M(p,"class","read-the-docs svelte-c9fbf7")},m(m,R){q(m,t,R),u(t,n),u(n,o),u(t,r),u(t,i),u(t,s),u(t,a),D(f,a,null),u(t,c),u(t,_),u(t,l),u(t,p),h=!0,g||(j=F(o,"click",fe),g=!0)},p:b,i(m){h||(z(f.$$.fragment,m),h=!0)},o(m){ne(f.$$.fragment,m),h=!1},d(m){m&&A(t),G(f),g=!1,j()}}}async function fe(){await Neutralino.os.execCommand("code /",{background:!0})}function le(e){return window.Neutralino.init(),[]}class ae extends Q{constructor(t){super(),J(this,t,le,ue,K,{})}}new ae({target:document.getElementById("app")});
