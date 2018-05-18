window.MutationObserver=window.MutationObserver||function(t){function e(t){this.i=[],this.m=t}function n(e){var n,o={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(n in e)o[n]!==t&&e[n]!==t&&(o[n]=e[n]);return o}function o(e,o,i,r){for(var a,l,c={},u=o.attributes,h=u.length;h--;)l=(a=u[h]).name,r&&r[l]===t||(s(o,a)!==i[l]&&e.push(n({type:"attributes",target:o,attributeName:l,oldValue:i[l],attributeNamespace:a.namespaceURI})),c[l]=!0);for(l in i)c[l]||e.push(n({target:o,type:"attributes",attributeName:l,oldValue:i[l]}))}function i(t,e){var n=!0;return function t(o){var i={node:o};return!e.a||3!==o.nodeType&&8!==o.nodeType?(e.b&&n&&1===o.nodeType&&(i.b=a(o.attributes,function(t,n){return e.f&&!e.f[n.name]||(t[n.name]=s(o,n)),t})),n&&(e.c||e.a||e.b&&e.g)&&(i.c=function(t,e){for(var n=[],o=0;o<t.length;o++)n[o]=e(t[o],o,t);return n}(o.childNodes,t)),n=e.g):i.a=o.nodeValue,i}(t)}function r(t){try{return t.id||(t.mo_id=t.mo_id||u++)}catch(e){try{return t.nodeValue}catch(t){return u++}}}function a(t,e){for(var n={},o=0;o<t.length;o++)n=e(n,t[o],o,t);return n}function l(t,e,n,o){for(;n<t.length;n++)if((o?t[n][o]:t[n])===e)return n;return-1}e._period=30,e.prototype={observe:function(c,s){for(var u={b:!!(s.attributes||s.attributeFilter||s.attributeOldValue),c:!!s.childList,g:!!s.subtree,a:!(!s.characterData&&!s.characterDataOldValue)},h=this.i,f=0;f<h.length;f++)h[f].s===c&&h.splice(f,1);s.attributeFilter&&(u.f=a(s.attributeFilter,function(t,e){return t[e]=!0,t})),h.push({s:c,o:function(e,a){var c=i(e,a);return function(s){var u,h=s.length;a.a&&3===e.nodeType&&e.nodeValue!==c.a&&s.push(new n({type:"characterData",target:e,oldValue:c.a})),a.b&&c.b&&o(s,e,c.b,a.f),(a.c||a.g)&&(u=function(e,i,a,c){function s(t,i,r,a,l){var s,h,f,p=t.length-1;for(l=-~((p-l)/2);f=t.pop();)s=r[f.j],h=a[f.l],c.c&&l&&Math.abs(f.j-f.l)>=p&&(e.push(n({type:"childList",target:i,addedNodes:[s],removedNodes:[s],nextSibling:s.nextSibling,previousSibling:s.previousSibling})),l--),c.b&&h.b&&o(e,s,h.b,c.f),c.a&&3===s.nodeType&&s.nodeValue!==h.a&&e.push(n({type:"characterData",target:s,oldValue:h.a})),c.g&&u(s,h)}function u(i,a){for(var f,p,d,m,g,b=i.childNodes,y=a.c,w=b.length,v=y?y.length:0,_=0,E=0,C=0;E<w||C<v;)(m=b[E])===(g=(d=y[C])&&d.node)?(c.b&&d.b&&o(e,m,d.b,c.f),c.a&&d.a!==t&&m.nodeValue!==d.a&&e.push(n({type:"characterData",target:m,oldValue:d.a})),p&&s(p,i,b,y,_),c.g&&(m.childNodes.length||d.c&&d.c.length)&&u(m,d),E++,C++):(h=!0,f||(f={},p=[]),m&&(f[d=r(m)]||(f[d]=!0,-1===(d=l(y,m,C,"node"))?c.c&&(e.push(n({type:"childList",target:i,addedNodes:[m],nextSibling:m.nextSibling,previousSibling:m.previousSibling})),_++):p.push({j:E,l:d})),E++),g&&g!==b[E]&&(f[d=r(g)]||(f[d]=!0,-1===(d=l(b,g,E))?c.c&&(e.push(n({type:"childList",target:a.node,removedNodes:[g],nextSibling:y[C+1],previousSibling:y[C-1]})),_--):p.push({j:d,l:C})),C++));p&&s(p,i,b,y,_)}var h;return u(i,a),h}(s,e,c,a)),(u||s.length!==h)&&(c=i(e,a))}}(c,u)}),this.h||function(t){!function n(){var o=t.takeRecords();o.length&&t.m(o,t),t.h=setTimeout(n,e._period)}()}(this)},takeRecords:function(){for(var t=[],e=this.i,n=0;n<e.length;n++)e[n].o(t);return t},disconnect:function(){this.i=[],clearTimeout(this.h),this.h=null}};var c=document.createElement("i");c.style.top=0;var s=(c="null"!=c.attributes.style.value)?function(t,e){return e.value}:function(t,e){return"style"!==e.name?e.value:t.style.cssText},u=1;return e}(void 0),(function(){"use strict";var t=new function(){},e=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function n(t){var n=e.has(t);return t=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t),!n&&t}function o(t){var e=t.isConnected;if(void 0!==e)return e;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function i(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function r(t,e,n){n=n||new Set;for(var o=t;o;){if(o.nodeType===Node.ELEMENT_NODE){var a=o;e(a);var l=a.localName;if("link"===l&&"import"===a.getAttribute("rel")){if((o=a.import)instanceof Node&&!n.has(o))for(n.add(o),o=o.firstChild;o;o=o.nextSibling)r(o,e,n);o=i(t,a);continue}if("template"===l){o=i(t,a);continue}if(a=a.__CE_shadowRoot)for(a=a.firstChild;a;a=a.nextSibling)r(a,e,n)}o=o.firstChild?o.firstChild:i(t,o)}}function a(t,e,n){t[e]=n}function l(){this.a=new Map,this.s=new Map,this.f=[],this.b=!1}function c(t,e){t.b=!0,t.f.push(e)}function s(t,e){t.b&&r(e,function(e){return u(t,e)})}function u(t,e){if(t.b&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.f.length;n++)t.f[n](e)}}function h(t,e){var n=[];for(r(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state?t.connectedCallback(o):d(t,o)}}function f(t,e){var n=[];for(r(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state&&t.disconnectedCallback(o)}}function p(t,e,n){var o=(n=n||{}).w||new Set,i=n.i||function(e){return d(t,e)},a=[];if(r(e,function(e){if("link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import;n instanceof Node&&(n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0),n&&"complete"===n.readyState?n.__CE_documentLoadHandled=!0:e.addEventListener("load",function(){var n=e.import;if(!n.__CE_documentLoadHandled){n.__CE_documentLoadHandled=!0;var r=new Set(o);r.delete(n),p(t,n,{w:r,i:i})}})}else a.push(e)},o),t.b)for(e=0;e<a.length;e++)u(t,a[e]);for(e=0;e<a.length;e++)i(a[e])}function d(t,e){if(void 0===e.__CE_state){var n=e.ownerDocument;if((n.defaultView||n.__CE_isImportDocument&&n.__CE_hasRegistry)&&(n=t.a.get(e.localName))){n.constructionStack.push(e);var i=n.constructor;try{try{if(new i!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{n.constructionStack.pop()}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,e.__CE_definition=n,n.attributeChangedCallback)for(n=n.observedAttributes,i=0;i<n.length;i++){var r=n[i],a=e.getAttribute(r);null!==a&&t.attributeChangedCallback(e,r,null,a,null)}o(e)&&t.connectedCallback(e)}}}function m(t,e){this.c=t,this.a=e,this.b=void 0,p(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function g(t){t.b&&t.b.disconnect()}function b(t){if(t.a)throw Error("Already resolved.");t.a=void 0,t.b&&t.b(void 0)}function y(t){this.j=!1,this.c=t,this.o=new Map,this.l=function(t){return t()},this.g=!1,this.m=[],this.u=new m(t,document)}l.prototype.connectedCallback=function(t){var e=t.__CE_definition;e.connectedCallback&&e.connectedCallback.call(t)},l.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;e.disconnectedCallback&&e.disconnectedCallback.call(t)},l.prototype.attributeChangedCallback=function(t,e,n,o,i){var r=t.__CE_definition;r.attributeChangedCallback&&-1<r.observedAttributes.indexOf(e)&&r.attributeChangedCallback.call(t,e,n,o,i)},m.prototype.f=function(t){var e=this.a.readyState;for("interactive"!==e&&"complete"!==e||g(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,o=0;o<n.length;o++)p(this.c,n[o])},y.prototype.define=function(t,e){var o,i,r,a,l,c=this;if(!(e instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!n(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.c.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.j)throw Error("A custom element is already being defined.");this.j=!0;try{var s=function(t){var e=u[t];if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.");return e},u=e.prototype;if(!(u instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");o=s("connectedCallback"),i=s("disconnectedCallback"),r=s("adoptedCallback"),a=s("attributeChangedCallback"),l=e.observedAttributes||[]}catch(t){return}finally{this.j=!1}(function(t,e,n){t.a.set(e,n),t.s.set(n.constructor,n)})(this.c,t,e={localName:t,constructor:e,connectedCallback:o,disconnectedCallback:i,adoptedCallback:r,attributeChangedCallback:a,observedAttributes:l,constructionStack:[]}),this.m.push(e),this.g||(this.g=!0,this.l(function(){return function(t){if(!1!==t.g){t.g=!1;for(var e=t.m,n=[],o=new Map,i=0;i<e.length;i++)o.set(e[i].localName,[]);for(p(t.c,document,{i:function(e){if(void 0===e.__CE_state){var i=e.localName,r=o.get(i);r?r.push(e):t.c.a.get(i)&&n.push(e)}}}),i=0;i<n.length;i++)d(t.c,n[i]);for(;0<e.length;){i=(r=e.shift()).localName;for(var r=o.get(r.localName),a=0;a<r.length;a++)d(t.c,r[a]);(i=t.o.get(i))&&b(i)}}}(c)}))},y.prototype.i=function(t){p(this.c,t)},y.prototype.get=function(t){if(t=this.c.a.get(t))return t.constructor},y.prototype.whenDefined=function(t){if(!n(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var e=this.o.get(t);return e?e.f:(e=new function(){var t=this;this.b=this.a=void 0,this.f=new Promise(function(e){t.b=e,t.a&&e(t.a)})},this.o.set(t,e),this.c.a.get(t)&&!this.m.some(function(e){return e.localName===t})&&b(e),e.f)},y.prototype.v=function(t){g(this.u);var e=this.l;this.l=function(n){return t(function(){return e(n)})}},window.CustomElementRegistry=y,y.prototype.define=y.prototype.define,y.prototype.upgrade=y.prototype.i,y.prototype.get=y.prototype.get,y.prototype.whenDefined=y.prototype.whenDefined,y.prototype.polyfillWrapFlushCallback=y.prototype.v;var w=window.Document.prototype.createElement,v=window.Document.prototype.createElementNS,_=window.Document.prototype.importNode,E=window.Document.prototype.prepend,C=window.Document.prototype.append,N=window.DocumentFragment.prototype.prepend,S=window.DocumentFragment.prototype.append,T=window.Node.prototype.cloneNode,D=window.Node.prototype.appendChild,k=window.Node.prototype.insertBefore,A=window.Node.prototype.removeChild,L=window.Node.prototype.replaceChild,j=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),x=window.Element.prototype.attachShadow,M=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),O=window.Element.prototype.getAttribute,H=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,F=window.Element.prototype.getAttributeNS,V=window.Element.prototype.setAttributeNS,P=window.Element.prototype.removeAttributeNS,I=window.Element.prototype.insertAdjacentElement,z=window.Element.prototype.insertAdjacentHTML,W=window.Element.prototype.prepend,B=window.Element.prototype.append,U=window.Element.prototype.before,X=window.Element.prototype.after,$=window.Element.prototype.replaceWith,q=window.Element.prototype.remove,G=window.HTMLElement,J=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),K=window.HTMLElement.prototype.insertAdjacentElement,Q=window.HTMLElement.prototype.insertAdjacentHTML;function Y(t,e,n){function i(e){return function(n){for(var i=[],r=0;r<arguments.length;++r)i[r-0]=arguments[r];r=[];for(var a=[],l=0;l<i.length;l++){var c=i[l];if(c instanceof Element&&o(c)&&a.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)r.push(c);else r.push(c)}for(e.apply(this,i),i=0;i<a.length;i++)f(t,a[i]);if(o(this))for(i=0;i<r.length;i++)(a=r[i])instanceof Element&&h(t,a)}}n.h&&(e.prepend=i(n.h)),n.append&&(e.append=i(n.append))}var Z,tt=window.customElements;if(!tt||tt.forcePolyfill||"function"!=typeof tt.define||"function"!=typeof tt.get){var et=new l;Z=et,window.HTMLElement=function(){function e(){var e=this.constructor;if(!(o=Z.s.get(e)))throw Error("The custom element being constructed was not registered with `customElements`.");var n=o.constructionStack;if(!n.length)return n=w.call(document,o.localName),Object.setPrototypeOf(n,e.prototype),n.__CE_state=1,n.__CE_definition=o,u(Z,n),n;var o,i=n[o=n.length-1];if(i===t)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return n[o]=t,Object.setPrototypeOf(i,e.prototype),u(Z,i),i}return e.prototype=G.prototype,e}(),function(){var t=et;a(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var n=t.a.get(e);if(n)return new n.constructor}return e=w.call(this,e),u(t,e),e}),a(Document.prototype,"importNode",function(e,n){return e=_.call(this,e,n),this.__CE_hasRegistry?p(t,e):s(t,e),e}),a(Document.prototype,"createElementNS",function(e,n){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var o=t.a.get(n);if(o)return new o.constructor}return e=v.call(this,e,n),u(t,e),e}),Y(t,Document.prototype,{h:E,append:C})}(),Y(et,DocumentFragment.prototype,{h:N,append:S}),function(){var t=et;function e(e,n){Object.defineProperty(e,"textContent",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)n.set.call(this,e);else{var i=void 0;if(this.firstChild){var r=this.childNodes,a=r.length;if(0<a&&o(this)){i=Array(a);for(var l=0;l<a;l++)i[l]=r[l]}}if(n.set.call(this,e),i)for(e=0;e<i.length;e++)f(t,i[e])}}})}a(Node.prototype,"insertBefore",function(e,n){if(e instanceof DocumentFragment){var i=Array.prototype.slice.apply(e.childNodes);if(e=k.call(this,e,n),o(this))for(n=0;n<i.length;n++)h(t,i[n]);return e}return i=o(e),n=k.call(this,e,n),i&&f(t,e),o(this)&&h(t,e),n}),a(Node.prototype,"appendChild",function(e){if(e instanceof DocumentFragment){var n=Array.prototype.slice.apply(e.childNodes);if(e=D.call(this,e),o(this))for(var i=0;i<n.length;i++)h(t,n[i]);return e}return n=o(e),i=D.call(this,e),n&&f(t,e),o(this)&&h(t,e),i}),a(Node.prototype,"cloneNode",function(e){return e=T.call(this,e),this.ownerDocument.__CE_hasRegistry?p(t,e):s(t,e),e}),a(Node.prototype,"removeChild",function(e){var n=o(e),i=A.call(this,e);return n&&f(t,e),i}),a(Node.prototype,"replaceChild",function(e,n){if(e instanceof DocumentFragment){var i=Array.prototype.slice.apply(e.childNodes);if(e=L.call(this,e,n),o(this))for(f(t,n),n=0;n<i.length;n++)h(t,i[n]);return e}i=o(e);var r=L.call(this,e,n),a=o(this);return a&&f(t,n),i&&f(t,e),a&&h(t,e),r}),j&&j.get?e(Node.prototype,j):c(t,function(t){e(t,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=0;e<this.childNodes.length;e++)t.push(this.childNodes[e].textContent);return t.join("")},set:function(t){for(;this.firstChild;)A.call(this,this.firstChild);D.call(this,document.createTextNode(t))}})})}(),function(){var t=et;function e(e,n){Object.defineProperty(e,"innerHTML",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){var i=this,a=void 0;if(o(this)&&(a=[],r(this,function(t){t!==i&&a.push(t)})),n.set.call(this,e),a)for(var l=0;l<a.length;l++){var c=a[l];1===c.__CE_state&&t.disconnectedCallback(c)}return this.ownerDocument.__CE_hasRegistry?p(t,this):s(t,this),e}})}function n(e,n){a(e,"insertAdjacentElement",function(e,i){var r=o(i);return e=n.call(this,e,i),r&&f(t,i),o(e)&&h(t,i),e})}function i(e,n){function o(e,n){for(var o=[];e!==n;e=e.nextSibling)o.push(e);for(n=0;n<o.length;n++)p(t,o[n])}a(e,"insertAdjacentHTML",function(t,e){if("beforebegin"===(t=t.toLowerCase())){var i=this.previousSibling;n.call(this,t,e),o(i||this.parentNode.firstChild,this)}else if("afterbegin"===t)i=this.firstChild,n.call(this,t,e),o(this.firstChild,i);else if("beforeend"===t)i=this.lastChild,n.call(this,t,e),o(i||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");i=this.nextSibling,n.call(this,t,e),o(this.nextSibling,i)}})}x&&a(Element.prototype,"attachShadow",function(t){return this.__CE_shadowRoot=x.call(this,t)}),M&&M.get?e(Element.prototype,M):J&&J.get?e(HTMLElement.prototype,J):c(t,function(t){e(t,{enumerable:!0,configurable:!0,get:function(){return T.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName,n=e?this.content:this,o=v.call(document,this.namespaceURI,this.localName);for(o.innerHTML=t;0<n.childNodes.length;)A.call(n,n.childNodes[0]);for(t=e?o.content:o;0<t.childNodes.length;)D.call(n,t.childNodes[0])}})}),a(Element.prototype,"setAttribute",function(e,n){if(1!==this.__CE_state)return H.call(this,e,n);var o=O.call(this,e);H.call(this,e,n),n=O.call(this,e),t.attributeChangedCallback(this,e,o,n,null)}),a(Element.prototype,"setAttributeNS",function(e,n,o){if(1!==this.__CE_state)return V.call(this,e,n,o);var i=F.call(this,e,n);V.call(this,e,n,o),o=F.call(this,e,n),t.attributeChangedCallback(this,n,i,o,e)}),a(Element.prototype,"removeAttribute",function(e){if(1!==this.__CE_state)return R.call(this,e);var n=O.call(this,e);R.call(this,e),null!==n&&t.attributeChangedCallback(this,e,n,null,null)}),a(Element.prototype,"removeAttributeNS",function(e,n){if(1!==this.__CE_state)return P.call(this,e,n);var o=F.call(this,e,n);P.call(this,e,n);var i=F.call(this,e,n);o!==i&&t.attributeChangedCallback(this,n,o,i,e)}),K?n(HTMLElement.prototype,K):I?n(Element.prototype,I):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),Q?i(HTMLElement.prototype,Q):z?i(Element.prototype,z):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),Y(t,Element.prototype,{h:W,append:B}),function(t){var e=Element.prototype;function n(e){return function(n){for(var i=[],r=0;r<arguments.length;++r)i[r-0]=arguments[r];r=[];for(var a=[],l=0;l<i.length;l++){var c=i[l];if(c instanceof Element&&o(c)&&a.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)r.push(c);else r.push(c)}for(e.apply(this,i),i=0;i<a.length;i++)f(t,a[i]);if(o(this))for(i=0;i<r.length;i++)(a=r[i])instanceof Element&&h(t,a)}}U&&(e.before=n(U)),U&&(e.after=n(X)),$&&a(e,"replaceWith",function(e){for(var n=[],i=0;i<arguments.length;++i)n[i-0]=arguments[i];i=[];for(var r=[],a=0;a<n.length;a++){var l=n[a];if(l instanceof Element&&o(l)&&r.push(l),l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)i.push(l);else i.push(l)}for(a=o(this),$.apply(this,n),n=0;n<r.length;n++)f(t,r[n]);if(a)for(f(t,this),n=0;n<i.length;n++)(r=i[n])instanceof Element&&h(t,r)}),q&&a(e,"remove",function(){var e=o(this);q.call(this),e&&f(t,this)})}(t)}(),document.__CE_hasRegistry=!0;var nt=new y(et);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:nt})}}).call(self);