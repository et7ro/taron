"use strict";(globalThis["webpackChunkTaron"]=globalThis["webpackChunkTaron"]||[]).push([[461],{3588:(e,t,n)=>{n.d(t,{i:()=>l});n(4114);var o=n(8545);function i(){return!0}function r(e,t,n){if(!e||!1===a(e,n))return!1;const i=(0,o.b)(t);if("undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&i.host===e.target)return!1;const r=("object"===typeof n.value&&n.value.include||(()=>[]))();return r.push(t),!r.some((t=>t?.contains(e.target)))}function a(e,t){const n="object"===typeof t.value&&t.value.closeConditional||i;return n(e)}function s(e,t,n){const o="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&r(e,t,n)&&setTimeout((()=>{a(e,n)&&o&&o(e)}),0)}function c(e,t){const n=(0,o.b)(e);t(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}const l={mounted(e,t){const n=n=>s(n,e,t),o=n=>{e._clickOutside.lastMousedownWasOutside=r(n,e,t)};c(e,(e=>{e.addEventListener("click",n,!0),e.addEventListener("mousedown",o,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(c(e,(n=>{if(!n||!e._clickOutside?.[t.instance.$.uid])return;const{onClick:o,onMousedown:i}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",i,!0)})),delete e._clickOutside[t.instance.$.uid])}}},3739:(e,t,n)=>{n.r(t),n.d(t,{ClickOutside:()=>o.i,Intersect:()=>i.o,Mutate:()=>s,Resize:()=>d,Ripple:()=>u.n,Scroll:()=>h,Touch:()=>f.U});var o=n(3588),i=n(9629);function r(e,t){const n=t.modifiers||{},o=t.value,{once:i,immediate:r,...s}=n,c=!Object.keys(s).length,{handler:l,options:d}="object"===typeof o?o:{handler:o,options:{attributes:s?.attr??c,characterData:s?.char??c,childList:s?.child??c,subtree:s?.sub??c}},u=new MutationObserver((function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;l?.(n,o),i&&a(e,t)}));r&&l?.([],u),e._mutate=Object(e._mutate),e._mutate[t.instance.$.uid]={observer:u},u.observe(e,d)}function a(e,t){e._mutate?.[t.instance.$.uid]&&(e._mutate[t.instance.$.uid].observer.disconnect(),delete e._mutate[t.instance.$.uid])}const s={mounted:r,unmounted:a};function c(e,t){const n=t.value,o={passive:!t.modifiers?.active};window.addEventListener("resize",n,o),e._onResize=Object(e._onResize),e._onResize[t.instance.$.uid]={handler:n,options:o},t.modifiers?.quiet||n()}function l(e,t){if(!e._onResize?.[t.instance.$.uid])return;const{handler:n,options:o}=e._onResize[t.instance.$.uid];window.removeEventListener("resize",n,o),delete e._onResize[t.instance.$.uid]}const d={mounted:c,unmounted:l};var u=n(759);function p(e,t){const{self:n=!1}=t.modifiers??{},o=t.value,i="object"===typeof o&&o.options||{passive:!0},r="function"===typeof o||"handleEvent"in o?o:o.handler,a=n?e:t.arg?document.querySelector(t.arg):window;a&&(a.addEventListener("scroll",r,i),e._onScroll=Object(e._onScroll),e._onScroll[t.instance.$.uid]={handler:r,options:i,target:n?void 0:a})}function m(e,t){if(!e._onScroll?.[t.instance.$.uid])return;const{handler:n,options:o,target:i=e}=e._onScroll[t.instance.$.uid];i.removeEventListener("scroll",n,o),delete e._onScroll[t.instance.$.uid]}function v(e,t){t.value!==t.oldValue&&(m(e,t),p(e,t))}const h={mounted:p,unmounted:m,updated:v};var f=n(8567)},9629:(e,t,n)=>{n.d(t,{A:()=>s,o:()=>a});var o=n(6993);function i(e,t){if(!o.tB)return;const n=t.modifiers||{},i=t.value,{handler:a,options:s}="object"===typeof i?i:{handler:i,options:{}},c=new IntersectionObserver((function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1?arguments[1]:void 0;const s=e._observe?.[t.instance.$.uid];if(!s)return;const c=o.some((e=>e.isIntersecting));!a||n.quiet&&!s.init||n.once&&!c&&!s.init||a(c,o,i),c&&n.once?r(e,t):s.init=!0}),s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:c},c.observe(e)}function r(e,t){const n=e._observe?.[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const a={mounted:i,unmounted:r},s=a},759:(e,t,n)=>{n.d(t,{n:()=>L,A:()=>x});var o=n(9094);const i=Symbol("rippleStop"),r=80;function a(e,t){e.style.transform=t,e.style.webkitTransform=t}function s(e){return"TouchEvent"===e.constructor.name}function c(e){return"KeyboardEvent"===e.constructor.name}const l=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=0,i=0;if(!c(e)){const n=t.getBoundingClientRect(),r=s(e)?e.touches[e.touches.length-1]:e;o=r.clientX-n.left,i=r.clientY-n.top}let r=0,a=.3;t._ripple?.circle?(a=.15,r=t.clientWidth/2,r=n.center?r:r+Math.sqrt((o-r)**2+(i-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const l=(t.clientWidth-2*r)/2+"px",d=(t.clientHeight-2*r)/2+"px",u=n.center?l:o-r+"px",p=n.center?d:i-r+"px";return{radius:r,scale:a,x:u,y:p,centerX:l,centerY:d}},d={show(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t?._ripple?.enabled)return;const o=document.createElement("span"),i=document.createElement("span");o.appendChild(i),o.className="v-ripple__container",n.class&&(o.className+=` ${n.class}`);const{radius:r,scale:s,x:c,y:d,centerX:u,centerY:p}=l(e,t,n),m=2*r+"px";i.className="v-ripple__animation",i.style.width=m,i.style.height=m,t.appendChild(o);const v=window.getComputedStyle(t);v&&"static"===v.position&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),a(i,`translate(${c}, ${d}) scale3d(${s},${s},${s})`),i.dataset.activated=String(performance.now()),setTimeout((()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),a(i,`translate(${u}, ${p}) scale3d(1,1,1)`)}),0)},hide(e){if(!e?._ripple?.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const o=performance.now()-Number(n.dataset.activated),i=Math.max(250-o,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode?.parentNode===e&&e.removeChild(n.parentNode)}),300)}),i)}};function u(e){return"undefined"===typeof e||!!e}function p(e){const t={},n=e.currentTarget;if(n?._ripple&&!n._ripple.touched&&!e[i]){if(e[i]=!0,s(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||c(e),n._ripple.class&&(t.class=n._ripple.class),s(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{d.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n?._ripple?.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),r)}else d.show(e,n,t)}}function m(e){e[i]=!0}function v(e){const t=e.currentTarget;if(t?._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{v(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),d.hide(t)}}function h(e){const t=e.currentTarget;t?._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let f=!1;function g(e){f||e.keyCode!==o.uP.enter&&e.keyCode!==o.uP.space||(f=!0,p(e))}function _(e){f=!1,v(e)}function b(e){f&&(f=!1,v(e))}function w(e,t,n){const{value:i,modifiers:r}=t,a=u(i);if(a||d.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=r.center,e._ripple.circle=r.circle,(0,o.Gv)(i)&&i.class&&(e._ripple.class=i.class),a&&!n){if(r.stop)return e.addEventListener("touchstart",m,{passive:!0}),void e.addEventListener("mousedown",m);e.addEventListener("touchstart",p,{passive:!0}),e.addEventListener("touchend",v,{passive:!0}),e.addEventListener("touchmove",h,{passive:!0}),e.addEventListener("touchcancel",v),e.addEventListener("mousedown",p),e.addEventListener("mouseup",v),e.addEventListener("mouseleave",v),e.addEventListener("keydown",g),e.addEventListener("keyup",_),e.addEventListener("blur",b),e.addEventListener("dragstart",v,{passive:!0})}else!a&&n&&k(e)}function k(e){e.removeEventListener("mousedown",p),e.removeEventListener("touchstart",p),e.removeEventListener("touchend",v),e.removeEventListener("touchmove",h),e.removeEventListener("touchcancel",v),e.removeEventListener("mouseup",v),e.removeEventListener("mouseleave",v),e.removeEventListener("keydown",g),e.removeEventListener("keyup",_),e.removeEventListener("dragstart",v),e.removeEventListener("blur",b)}function y(e,t){w(e,t,!1)}function E(e){delete e._ripple,k(e)}function T(e,t){if(t.value===t.oldValue)return;const n=u(t.oldValue);w(e,t,n)}const L={mounted:y,unmounted:E,updated:T},x=L},8567:(e,t,n)=>{n.d(t,{A:()=>p,U:()=>u});var o=n(9094);const i=e=>{const{touchstartX:t,touchendX:n,touchstartY:o,touchendY:i}=e,r=.5,a=16;e.offsetX=n-t,e.offsetY=i-o,Math.abs(e.offsetY)<r*Math.abs(e.offsetX)&&(e.left&&n<t-a&&e.left(e),e.right&&n>t+a&&e.right(e)),Math.abs(e.offsetX)<r*Math.abs(e.offsetY)&&(e.up&&i<o-a&&e.up(e),e.down&&i>o+a&&e.down(e))};function r(e,t){const n=e.changedTouches[0];t.touchstartX=n.clientX,t.touchstartY=n.clientY,t.start?.({originalEvent:e,...t})}function a(e,t){const n=e.changedTouches[0];t.touchendX=n.clientX,t.touchendY=n.clientY,t.end?.({originalEvent:e,...t}),i(t)}function s(e,t){const n=e.changedTouches[0];t.touchmoveX=n.clientX,t.touchmoveY=n.clientY,t.move?.({originalEvent:e,...t})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:e=>r(e,t),touchend:e=>a(e,t),touchmove:e=>s(e,t)}}function l(e,t){const n=t.value,i=n?.parent?e.parentElement:e,r=n?.options??{passive:!0},a=t.instance?.$.uid;if(!i||!a)return;const s=c(t.value);i._touchHandlers=i._touchHandlers??Object.create(null),i._touchHandlers[a]=s,(0,o.HP)(s).forEach((e=>{i.addEventListener(e,s[e],r)}))}function d(e,t){const n=t.value?.parent?e.parentElement:e,i=t.instance?.$.uid;if(!n?._touchHandlers||!i)return;const r=n._touchHandlers[i];(0,o.HP)(r).forEach((e=>{n.removeEventListener(e,r[e])})),delete n._touchHandlers[i]}const u={mounted:l,unmounted:d},p=u},7768:(e,t,n)=>{n.d(t,{$N:()=>f});var o=n(2666),i=n(4979),r=n(8353),a=n(7308),s=n(5965),c=n(5555),l=n(7664),d=n(6768),u=n(144),p=n(9094),m=n(1247),v=n(6993),h=n(7861);function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{blueprint:t,...n}=e,f=(0,p.D9)(t,n),{aliases:g={},components:b={},directives:w={}}=f,k=(0,i.Ty)(f.defaults),y=(0,r.XH)(f.display,f.ssr),E=(0,l.an)(f.theme),T=(0,s.Tz)(f.icons),L=(0,c.RR)(f.locale),x=(0,o.JO)(f.date,L),$=(0,a.Kz)(f.goTo,L),C=e=>{for(const t in w)e.directive(t,w[t]);for(const t in b)e.component(t,b[t]);for(const t in g)e.component(t,(0,m.pM)({...g[t],name:t,aliasName:g[t].name}));if(E.install(e),e.provide(i.hj,k),e.provide(r.TX,y),e.provide(l.Qc,E),e.provide(s.qY,T),e.provide(c.bI,L),e.provide(o.H9,x.options),e.provide(o.w1,x.instance),e.provide(a.aF,$),v.ZK&&f.ssr)if(e.$nuxt)e.$nuxt.hook("app:suspense:resolve",(()=>{y.update()}));else{const{mount:t}=e;e.mount=function(){const n=t(...arguments);return(0,d.dY)((()=>y.update())),e.mount=t,n}}h.v6.reset(),e.mixin({computed:{$vuetify(){return(0,u.Kh)({defaults:_.call(this,i.hj),display:_.call(this,r.TX),theme:_.call(this,l.Qc),icons:_.call(this,s.qY),locale:_.call(this,c.bI),date:_.call(this,o.w1)})}}})};return{install:C,defaults:k,display:y,theme:E,icons:T,locale:L,date:x,goTo:$}}const g="3.5.11";function _(e){const t=this.$,n=t.parent?.provides??t.vnode.appContext?.provides;if(n&&e in n)return n[e]}f.version=g},8568:(e,t,n)=>{n.d(t,{md:()=>a,z:()=>r});var o=n(5965),i=n(6768);const r={collapse:"keyboard_arrow_up",complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"cancel",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sortAsc:"arrow_upward",sortDesc:"arrow_downward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove",calendar:"event",treeviewCollapse:"arrow_drop_down",treeviewExpand:"arrow_right",eyeDropper:"colorize"},a={component:e=>(0,i.h)(o.Hx,{...e,class:"material-icons"})}},8221:(e,t,n)=>{n.d(t,{r:()=>a,z:()=>r});var o=n(5965),i=n(6768);const r={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},a={component:e=>(0,i.h)(o.GP,{...e,class:"mdi"})}},3951:(e,t,n)=>{n.d(t,{P:()=>v,n:()=>m});var o=n(6768),i=n(2586);const r=(0,i.G)("v-picker-title");var a=n(7852),s=n(1146),c=n(2886),l=n(144),d=n(4587),u=n(1247),p=n(4600);const m=(0,d.j)({bgColor:String,landscape:Boolean,title:String,hideHeader:Boolean,...(0,s.G)()},"VPicker"),v=(0,u.RW)()({name:"VPicker",props:m(),setup(e,t){let{slots:n}=t;const{backgroundColorClasses:i,backgroundColorStyles:d}=(0,c.z6)((0,l.lW)(e,"color"));return(0,p.C)((()=>{const t=s.i.filterProps(e),c=!(!e.title&&!n.title);return(0,o.bF)(s.i,(0,o.v6)(t,{color:e.bgColor,class:["v-picker",{"v-picker--landscape":e.landscape,"v-picker--with-actions":!!n.actions},e.class],style:e.style}),{default:()=>[!e.hideHeader&&(0,o.bF)("div",{key:"header",class:[i.value],style:[d.value]},[c&&(0,o.bF)(r,{key:"picker-title"},{default:()=>[n.title?.()??e.title]}),n.header&&(0,o.bF)("div",{class:"v-picker__header"},[n.header()])]),(0,o.bF)("div",{class:"v-picker__body"},[n.default?.()]),n.actions&&(0,o.bF)(a.K,{defaults:{VBtn:{slim:!0,variant:"text"}}},{default:()=>[(0,o.bF)("div",{class:"v-picker__actions"},[n.actions()])]})]})})),{}}})},7266:(e,t,n)=>{n.d(t,{Q:()=>h});var o=n(2067),i=n(6768),r=n(144),a=n(9094),s=n(7354);const c={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},l="$vuetify.",d=(e,t)=>e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n]))),u=(e,t,n)=>function(o){for(var i=arguments.length,r=new Array(i>1?i-1:0),c=1;c<i;c++)r[c-1]=arguments[c];if(!o.startsWith(l))return d(o,r);const u=o.replace(l,""),p=e.value&&n.value[e.value],m=t.value&&n.value[t.value];let v=(0,a.no)(p,u,null);return v||((0,s.OP)(`Translation key "${o}" not found in "${e.value}", trying fallback locale`),v=(0,a.no)(m,u,null)),v||((0,s.yA)(`Translation key "${o}" not found in fallback`),v=o),"string"!==typeof v&&((0,s.yA)(`Translation key "${o}" has a non-string value`),v=o),d(v,r)};function p(e,t){return(n,o)=>{const i=new Intl.NumberFormat([e.value,t.value],o);return i.format(n)}}function m(e,t,n){const r=(0,o.q)(e,t,e[t]??n.value);return r.value=e[t]??n.value,(0,i.wB)(n,(o=>{null==e[t]&&(r.value=n.value)})),r}function v(e){return t=>{const n=m(t,"locale",e.current),o=m(t,"fallback",e.fallback),i=m(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:o,messages:i,t:u(n,o,i),n:p(n,o),provide:v({current:n,fallback:o,messages:i})}}}function h(e){const t=(0,r.IJ)(e?.locale??"en"),n=(0,r.IJ)(e?.fallback??"en"),o=(0,r.KR)({en:c,...e?.messages});return{name:"vuetify",current:t,fallback:n,messages:o,t:u(t,n,o),n:p(t,n),provide:v({current:t,fallback:n,messages:o})}}}}]);