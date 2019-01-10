(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b(require('popper.js')):'function'==typeof define&&define.amd?define(['popper.js'],b):a.tippy=b(a.Popper)})(this,function(a){'use strict';function b(a){L.forEach(function(b){var c=b.popper,d=b.tippyInstance,e=b.settings,f=e.appendTo,g=e.hideOnClick,h=e.trigger;if(f.contains(c)){var i=!0===g||-1!==h.indexOf('focus'),j=!a||c!==a.popper;i&&j&&d.hide(c)}})}function c(a,b){var c=Element.prototype.closest||function(a){for(var b=this;b;){if(e.call(b,a))return b;b=b.parentElement}};return c.call(a,b)}function d(a,b){return Array.prototype.find?a.find(b):a.filter(b)[0]}function f(){var a=function(){K.touch=!0,K.iOS()&&document.body.classList.add('tippy-touch'),K.dynamicInputDetection&&window.performance&&document.addEventListener('mousemove',f)},f=function(){var a;return function(){var b=performance.now();20>b-a&&(K.touch=!1,document.removeEventListener('mousemove',f),!K.iOS()&&document.body.classList.remove('tippy-touch')),a=b}}();document.addEventListener('click',function(a){if(!(a.target instanceof Element))return b();var e=c(a.target,M.TOOLTIPPED_EL),f=c(a.target,M.POPPER);if(f){var g=d(L,function(a){return a.popper===f}),h=g.settings.interactive;if(h)return}if(e){var i=d(L,function(a){return a.el===e}),j=i.settings,k=j.hideOnClick,l=j.multiple,m=j.trigger;if(!l&&K.touch||!l&&-1!==m.indexOf('click'))return b(i);if(!0!==k||-1!==m.indexOf('click'))return}c(a.target,M.CONTROLLER)||!document.querySelector(M.POPPER)||b()}),document.addEventListener('touchstart',a),window.addEventListener('blur',function(){var a=document,b=a.activeElement;b&&b.blur&&e.call(b,M.TOOLTIPPED_EL)&&b.blur()}),!K.SUPPORTS_TOUCH&&(0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&document.addEventListener('pointerdown',a)}function g(){return!g.done&&(g.done=!0,f(),!0)}function h(a){window.requestAnimationFrame(function(){setTimeout(a,0)})}function i(a){for(var b=[!1,'webkit'],c=a.charAt(0).toUpperCase()+a.slice(1),d=0;d<b.length;d++){var e=b[d],f=e?''+e+c:a;if('undefined'!=typeof window.document.body.style[f])return f}return null}function j(a,b){return Array.prototype.findIndex?a.findIndex(b):a.indexOf(d(a,b))}function k(a){var b=a.getAttribute('title');b&&a.setAttribute('data-original-title',b),a.removeAttribute('title')}function l(a){var b=a.getBoundingClientRect();return 0<=b.top&&0<=b.left&&b.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&b.right<=(window.innerWidth||document.documentElement.clientWidth)}function m(a,b){b?window.getComputedStyle(b)[i('transform')]:window.getComputedStyle(a).opacity}function n(a,b){a.forEach(function(a){a&&b(a.classList)})}function o(a){return{tooltip:a.querySelector(M.TOOLTIP),circle:a.querySelector(M.CIRCLE),content:a.querySelector(M.CONTENT)}}function p(a,b){a.forEach(function(a){if(a){var c=e.call(a,M.CONTENT),d=c?J(b/1.3):b;a.style[i('transitionDuration')]=d+'ms'}})}function q(a){return'visible'===a.style.visibility}function r(){}function s(a){return!!a&&'[object Object]'===a.toString()}function t(a){return a.replace(/-.+/,'')}function u(a){var b,c,e=this,f=d(L,function(a){return a.el===e}),g=f.popper,h=f.settings.offset,j=t(g.getAttribute('x-placement')),k=J(g.offsetWidth/2),l=J(g.offsetHeight/2),m=5,n=document.documentElement.offsetWidth||document.body.offsetWidth,o=a.pageX,p=a.pageY;'top'===j?(b=o-k+h,c=p-2*l):'bottom'===j?(b=o-k+h,c=p+10):'left'===j?(b=o-2*k,c=p-l+h):'right'===j?(b=o+5,c=p-l+h):void 0;('top'===j||'bottom'===j)&&(o+m+k+h>n&&(b=n-m-2*k),0>o-m-k+h&&(b=m)),g.style[i('transform')]='translate3d('+b+'px, '+c+'px, 0)'}function v(a){if(a instanceof Element||s(a))return[a];if(a instanceof NodeList)return[].slice.call(a);if(Array.isArray(a))return a;try{return[].slice.call(document.querySelectorAll(a))}catch(a){return[]}}function w(a,b,c){if(!b)return c();var d=o(a.popper),f=d.tooltip,g=!1,e=function(a){a.target!==f||g||(g=!0,c())};f.addEventListener('webkitTransitionEnd',e),f.addEventListener('transitionend',e),clearTimeout(a._transitionendTimeout),a._transitionendTimeout=setTimeout(function(){g||c()},b)}function x(a){return-(a-N.distance)+'px'}function y(b){var c=b.el,d=b.popper,e=b.settings,f=e.position,g=e.popperOptions,j=e.offset,k=e.distance,l=e.flipDuration,m=o(d),n=m.tooltip,p=T({placement:f},g||{},{modifiers:T({},g?g.modifiers:{},{flip:T({padding:k+5},g&&g.modifiers?g.modifiers.flip:{}),offset:T({offset:j},g&&g.modifiers?g.modifiers.offset:{})}),onUpdate:function(){var a=n.style;a.top='',a.bottom='',a.left='',a.right='',a[t(d.getAttribute('x-placement'))]=x(k)}});if(window.MutationObserver){var q=d.style,r=new MutationObserver(function(){q[i('transitionDuration')]='0ms',b.popperInstance.update(),h(function(){q[i('transitionDuration')]=l+'ms'})});r.observe(d,{childList:!0,subtree:!0,characterData:!0}),b._mutationObservers.push(r)}return new a(c,d,p)}function z(a){var b=a.el,c=a.popper,d=a.settings,e=d.appendTo,f=d.followCursor;e.contains(c)||(e.appendChild(c),a.popperInstance?(a.popperInstance.update(),(!f||K.touch)&&a.popperInstance.enableEventListeners()):a.popperInstance=y(a),f&&!K.touch&&(b.addEventListener('mousemove',u),a.popperInstance.disableEventListeners()))}function A(a){var b=a.popper,c=a.popperInstance,d=a.settings.stickyDuration,e=function(){return b.style[i('transitionDuration')]=d+'ms'},f=function(){return b.style[i('transitionDuration')]=''};h(function a(){c&&c.scheduleUpdate(),e(),q(b)?window.requestAnimationFrame(a):f()})}function B(a,b){var c=O.reduce(function(c,d){var e=a.getAttribute('data-'+d.toLowerCase())||b[d];return'false'===e&&(e=!1),'true'===e&&(e=!0),isFinite(e)&&!isNaN(parseFloat(e))&&(e=parseFloat(e)),'string'==typeof e&&'['===e.trim().charAt(0)&&(e=JSON.parse(e)),c[d]=e,c},{});return T({},b,c)}function C(a,b,c){var d=c.position,e=c.distance,f=c.arrow,g=c.animateFill,h=c.inertia,i=c.animation,j=c.arrowSize,k=c.size,l=c.theme,m=c.html,n=c.zIndex,o=c.interactive,p=document.createElement('div');p.setAttribute('class','tippy-popper'),p.setAttribute('role','tooltip'),p.setAttribute('aria-hidden','true'),p.setAttribute('id','tippy-tooltip-'+a),p.style.zIndex=n;var q=document.createElement('div');if(q.setAttribute('class','tippy-tooltip tippy-tooltip--'+k+' leave'),q.setAttribute('data-animation',i),l.split(' ').forEach(function(a){q.classList.add(a+'-theme')}),f){var r=document.createElement('div');r.setAttribute('class','arrow-'+j),r.setAttribute('x-arrow',''),q.appendChild(r)}if(g){q.setAttribute('data-animatefill','');var s=document.createElement('div');s.setAttribute('class','leave'),s.setAttribute('x-circle',''),q.appendChild(s)}h&&q.setAttribute('data-inertia',''),o&&q.setAttribute('data-interactive','');var u=document.createElement('div');if(u.setAttribute('class','tippy-tooltip-content'),m){var v;m instanceof Element?(u.appendChild(m),v='#'+m.id||'tippy-html-template'):(u.innerHTML=document.getElementById(m.replace('#','')).innerHTML,v=m),p.classList.add('html-template'),o&&p.setAttribute('tabindex','-1'),q.setAttribute('data-template-id',v)}else u.innerHTML=b;return q.style[t(d)]=x(e),q.appendChild(u),p.appendChild(q),p}function D(a,b,c,d){var e=[];return'manual'===a?e:(b.addEventListener(a,c.handleTrigger),e.push({event:a,handler:c.handleTrigger}),'mouseenter'===a&&(K.SUPPORTS_TOUCH&&d&&(b.addEventListener('touchstart',c.handleTrigger),e.push({event:'touchstart',handler:c.handleTrigger}),b.addEventListener('touchend',c.handleMouseleave),e.push({event:'touchend',handler:c.handleMouseleave})),b.addEventListener('mouseleave',c.handleMouseleave),e.push({event:'mouseleave',handler:c.handleMouseleave})),'focus'===a&&(b.addEventListener('blur',c.handleBlur),e.push({event:'blur',handler:c.handleBlur})),e)}function E(a,b,c){if(!b.getAttribute('x-placement'))return!0;var d=a.clientX,e=a.clientY,f=c.interactiveBorder,g=c.distance,h=b.getBoundingClientRect(),i=t(b.getAttribute('x-placement')),j=f+g,k={top:h.top-e>f,bottom:e-h.bottom>f,left:h.left-d>f,right:d-h.right>f};return'top'===i?k.top=h.top-e>j:'bottom'===i?k.bottom=e-h.bottom>j:'left'===i?k.left=h.left-d>j:'right'===i?k.right=d-h.right>j:void 0,k.top||k.bottom||k.left||k.right}function F(a,b,d){var e,f,g=this,h=d.position,i=d.delay,j=d.duration,k=d.interactive,l=d.interactiveBorder,m=d.distance,n=d.hideOnClick,o=d.trigger,p=d.touchHold,r=d.touchWait,s=function(){clearTimeout(e),clearTimeout(f)},t=function(){if(s(),!q(b)){var a=Array.isArray(i)?i[0]:i;i?e=setTimeout(function(){return g.show(b)},a):g.show(b)}},u=function(a){return g.callbacks.wait?g.callbacks.wait.call(b,t,a):t()},v=function(){s();var a=Array.isArray(i)?i[1]:i;i?f=setTimeout(function(){return g.hide(b)},a):g.hide(b)};return{handleTrigger:function(c){var d='mouseenter'===c.type&&K.SUPPORTS_TOUCH&&K.touch;if(!(d&&p)){var e='click'===c.type;e&&q(b)&&'persistent'!==n?v():u(c),d&&K.iOS()&&a.click&&a.click()}},handleMouseleave:function(e){if(!('mouseleave'===e.type&&K.SUPPORTS_TOUCH&&K.touch&&p)){if(k){var f=function e(f){var g=function(){document.body.removeEventListener('mouseleave',v),document.removeEventListener('mousemove',e),v()},h=c(f.target,M.TOOLTIPPED_EL),i=c(f.target,M.POPPER)===b,j=-1!==o.indexOf('click');return h&&h!==a?g():void(i||h===a||j||E(f,b,d)&&g())};return document.body.addEventListener('mouseleave',v),void document.addEventListener('mousemove',f)}v()}},handleBlur:function(a){!a.relatedTarget||K.touch||c(a.relatedTarget,M.POPPER)||v()}}}function G(a){return a.arrow&&(a.animateFill=!1),a.appendTo&&'function'==typeof a.appendTo&&(a.appendTo=a.appendTo()),a}function H(a){var b=this;return a.reduce(function(a,c){var d=U,e=T({},G(b.settings.performance?b.settings:B(c,b.settings)));'function'==typeof e.html&&(e.html=e.html(c));var f=e.html,g=e.trigger,h=e.touchHold,i=e.dynamicTitle,j=c.getAttribute('title');if(!j&&!f)return a;c.setAttribute('data-tooltipped',''),c.setAttribute('aria-describedby','tippy-tooltip-'+d),k(c);var l=C(d,j,e),m=F.call(b,c,l,e),n=[];g.trim().split(' ').forEach(function(a){return n=n.concat(D(a,c,m,h))});var p;if(i&&window.MutationObserver){var q=o(l),r=q.content;p=new MutationObserver(function(){var a=c.getAttribute('title');a&&(r.innerHTML=a,k(c))}),p.observe(c,{attributes:!0})}return a.push({id:d,el:c,popper:l,settings:e,listeners:n,tippyInstance:b,_mutationObservers:[p]}),U++,a},[])}function I(a,b){return s(a)&&(a={refObj:!0,attributes:a.attributes||{},getBoundingClientRect:a.getBoundingClientRect,clientWidth:a.clientWidth,clientHeight:a.clientHeight,setAttribute:function(b,c){a.attributes[b]=c},getAttribute:function(b){return a.attributes[b]},removeAttribute:function(b){delete a.attributes[b]},addEventListener:function(){},removeEventListener:function(){},classList:{classNames:{},add:function(b){a.classList.classNames[b]=!0},remove:function(b){return a.classList.classNames[b]=!1,!0},contains:function(b){return!!a.classList.classNames[b]}}}),new V(a,b)}var J=Math.round;a=a&&a.hasOwnProperty('default')?a['default']:a;var K={};'undefined'!=typeof window&&(K.SUPPORTED='requestAnimationFrame'in window,K.SUPPORTS_TOUCH='ontouchstart'in window,K.touch=!1,K.dynamicInputDetection=!0,K.iOS=function(){return /iPhone|iPad|iPod/.test(navigator.userAgent)&&!window.MSStream});var L=[],M={POPPER:'.tippy-popper',TOOLTIP:'.tippy-tooltip',CONTENT:'.tippy-tooltip-content',CIRCLE:'[x-circle]',ARROW:'[x-arrow]',TOOLTIPPED_EL:'[data-tooltipped]',CONTROLLER:'[data-tippy-controller]'},N={html:!1,position:'top',animation:'shift',animateFill:!0,arrow:!1,arrowSize:'regular',delay:0,trigger:'mouseenter focus',duration:350,interactive:!1,interactiveBorder:2,theme:'dark',size:'regular',distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,flipDuration:350,sticky:!1,stickyDuration:200,appendTo:function(){return document.body},zIndex:9999,touchHold:!1,performance:!1,dynamicTitle:!1,popperOptions:{}},O=K.SUPPORTED&&Object.keys(N),P={};if('undefined'!=typeof Element){var Q=Element.prototype;P=Q.matches||Q.matchesSelector||Q.webkitMatchesSelector||Q.mozMatchesSelector||Q.msMatchesSelector||function(a){for(var b=(this.document||this.ownerDocument).querySelectorAll(a),c=b.length;0<=--c&&b.item(c)!==this;);return-1<c}}var e=P,R=function(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')},S=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),T=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},U=1,V=function(){function a(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};R(this,a),K.SUPPORTED&&(g(),this.state={destroyed:!1},this.selector=b,this.settings=T({},N,c),(c.show||c.shown||c.hide||c.hidden)&&console.warn('Callbacks without the `on` prefix are deprecated (with the exception of `wait`). Use onShow, onShown, onHide, and onHidden instead.'),this.callbacks={wait:c.wait,show:c.onShow||c.show||r,shown:c.onShown||c.shown||r,hide:c.onHide||c.hide||r,hidden:c.onHidden||c.hidden||r},this.store=H.call(this,v(b)),L.push.apply(L,this.store))}return S(a,[{key:'getPopperElement',value:function(a){try{return d(this.store,function(b){return b.el===a}).popper}catch(a){console.error('[getPopperElement]: Element passed as the argument does not exist in the instance')}}},{key:'getReferenceElement',value:function(a){try{return d(this.store,function(b){return b.popper===a}).el}catch(a){console.error('[getReferenceElement]: Popper passed as the argument does not exist in the instance')}}},{key:'getReferenceData',value:function(a){return d(this.store,function(b){return b.el===a||b.popper===a})}},{key:'show',value:function(a,b){var c=this;if(!this.state.destroyed){var e=d(this.store,function(b){return b.popper===a}),f=o(a),g=f.tooltip,i=f.circle,j=f.content;if(!this.selector.refObj&&!document.body.contains(e.el))return void this.destroy(a);this.callbacks.show.call(a);var k=e.el,l=e.settings,r=l.appendTo,s=l.sticky,t=l.interactive,u=l.followCursor,v=l.flipDuration,x=l.duration,y=void 0===b?Array.isArray(x)?x[0]:x:b;p([a,g,i],0),z(e),a.style.visibility='visible',a.setAttribute('aria-hidden','false'),h(function(){q(a)&&((!u||K.touch)&&(e.popperInstance.update(),p([a],v)),p([g,i],y),i&&(j.style.opacity=1),t&&k.classList.add('active'),s&&A(e),m(g,i),n([g,i],function(a){a.contains('tippy-notransition')&&a.remove('tippy-notransition'),a.remove('leave'),a.add('enter')}),w(e,y,function(){!q(a)||e._onShownFired||(t&&a.focus(),g.classList.add('tippy-notransition'),e._onShownFired=!0,c.callbacks.shown.call(a))}))})}}},{key:'hide',value:function(a,b){var c=this;if(!this.state.destroyed){this.callbacks.hide.call(a);var e=d(this.store,function(b){return b.popper===a}),f=o(a),g=f.tooltip,h=f.circle,i=f.content,j=e.el,k=e.settings,m=k.appendTo,r=k.sticky,s=k.interactive,t=k.followCursor,v=k.html,x=k.trigger,y=k.duration,z=void 0===b?Array.isArray(y)?y[1]:y:b;e._onShownFired=!1,s&&j.classList.remove('active'),a.style.visibility='hidden',a.setAttribute('aria-hidden','true'),p([g,h,h?i:null],z),h&&(i.style.opacity=0),n([g,h],function(a){a.contains('tippy-tooltip')&&a.remove('tippy-notransition'),a.remove('enter'),a.add('leave')}),v&&-1!==x.indexOf('click')&&l(j)&&j.focus(),w(e,z,function(){q(a)||!m.contains(a)||'1'===getComputedStyle(g).opacity||(j.removeEventListener('mousemove',u),e.popperInstance.disableEventListeners(),m.removeChild(a),c.callbacks.hidden.call(a))})}}},{key:'update',value:function(a){if(!this.state.destroyed){var b=d(this.store,function(b){return b.popper===a}),c=o(a),e=c.content,f=b.el,g=b.settings.html;return g instanceof Element?void console.warn('Aborted: update() should not be used if `html` is a DOM element'):void(e.innerHTML=g?document.getElementById(g.replace('#','')).innerHTML:f.getAttribute('title')||f.getAttribute('data-original-title'),!g&&k(f))}}},{key:'destroy',value:function(a,b){var c=this;if(!this.state.destroyed){var e=d(this.store,function(b){return b.popper===a}),f=e.el,g=e.popperInstance,h=e.listeners,i=e._mutationObservers;q(a)&&this.hide(a,0),h.forEach(function(a){return f.removeEventListener(a.event,a.handler)}),f.setAttribute('title',f.getAttribute('data-original-title')),f.removeAttribute('data-original-title'),f.removeAttribute('data-tooltipped'),f.removeAttribute('aria-describedby'),g&&g.destroy(),i.forEach(function(a){a&&a.disconnect()}),L.splice(j(L,function(b){return b.popper===a}),1),(void 0===b||b)&&(this.store=L.filter(function(a){return a.tippyInstance===c}))}}},{key:'destroyAll',value:function(){var a=this;if(!this.state.destroyed){var b=this.store.length;this.store.forEach(function(c,d){var e=c.popper;a.destroy(e,d===b-1)}),this.store=null,this.state.destroyed=!0}}}]),a}();return I.Browser=K,I.Defaults=N,I.disableDynamicInputDetection=function(){return K.dynamicInputDetection=!1},I.enableDynamicInputDetection=function(){return K.dynamicInputDetection=!0},I});
