(()=>{"use strict";var e={531:(e,t,a)=>{var r=a(5130),s=a(6082),o=a(6768);function n(e,t,a,r,s,n){const i=(0,o.g2)("router-view"),d=(0,o.g2)("v-icon"),l=(0,o.g2)("v-btn"),c=(0,o.g2)("v-snackbar"),u=(0,o.g2)("v-app");return(0,o.uX)(),(0,o.Wv)(u,null,{default:(0,o.k6)((()=>[(0,o.bF)(i),(0,o.bF)(c,{modelValue:n.updateAvailable,"onUpdate:modelValue":t[0]||(t[0]=e=>n.updateAvailable=e),top:"",timeout:1e4,color:"primary",onClick:n.updateApp},{action:(0,o.k6)((({attrs:e})=>[(0,o.bF)(l,(0,o.v6)({text:"",icon:""},e),{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.eW)("cached")])),_:1})])),_:2},1040)])),default:(0,o.k6)((()=>[(0,o.eW)(" Atualização disponível ")])),_:1},8,["modelValue","onClick"])])),_:1})}const i=()=>{var e;const t=window.navigator.userAgent.toLowerCase(),a=navigator.standalone??window.matchMedia("(display-mode: standalone)").matches;return/windows/i.test(t)?e="windows":/macintosh/i.test(t)?e="mac":/android/i.test(t)?e="android":/iphone|ipad|ipod/i.test(t)&&(e="ios"),{name:e,standalone:a,isMobile:"android"==e||"ios"==e}},d={computed:{device(){return i},updateAvailable:{get(){return!0},set(e){this.$store.commit("setUpdateAvailable",!1)}},audioPlay:{get(){return this.$store.state.audioPlay},set(e){this.$store.commit("setAudioPlay",e)}}},data(){return{updateAlert:!1,audio:new Audio}},created(){this.refreshWindowSize()},mounted(){window.addEventListener("resize",(()=>{this.refreshWindowSize()}))},methods:{refreshWindowSize(){this.$store.commit("setResizeWindow",!0),document.documentElement.style.setProperty("--vh",`${window.innerHeight}px`)},playAudio(e){this.audio.src=`/audio/${e}.${"ios"==this.device.name?"aac":"ogg"}`,this.audio.currentTime=0,this.audio.play()},updateApp(){location.reload(!0)}},watch:{audioPlay(e){e&&this.playAudio(e)}}};var l=a(1241);const c=(0,l.A)(d,[["render",n]]),u=c;a(4114);var h=a(4249);const p=(0,h.y$)({state:{updateAvailable:!1,cards:[],readings:[],question:null,selectedCards:sessionStorage.getItem("selectedCards")?.split(",")?.map((e=>parseInt(e)))??[],audioPlay:null,resizeWindow:!1,revealAll:!1},mutations:{setUpdateAvailable(e,t){e.updateAvailable=t},setCards(e,t){e.cards=t},setReadings(e,t){e.readings=t},setQuestion(e,t){e.question=t},setSelectedCards(e,t){e.selectedCards=t},addSelectedCard(e,t){e.selectedCards.push(t)},setResizeWindow(e,t){e.resizeWindow=t,setTimeout((()=>{e.resizeWindow=!1}),100)},setAudioPlay(e,t){e.audioPlay=t,setTimeout((()=>{e.audioPlay=null}),100)},setRevealAll(e,t){e.revealAll=t}},actions:{addSelectedCard({commit:e,state:t},a){e("addSelectedCard",a);let r=t.selectedCards;sessionStorage.setItem("selectedCards",r.join(","))}}});var f=a(1387),g=a(4232);const m=e=>((0,o.Qi)("data-v-618ab29a"),e=e(),(0,o.jt)(),e),v={key:0},C=m((()=>(0,o.Lk)("br",null,null,-1))),b={key:1},y={key:2,ref:"content"},A=["onMousedown"],k=["src"],w=m((()=>(0,o.Lk)("h2",null,"Escolher essa carta ?",-1)));function E(e,t,a,s,n,i){const d=(0,o.g2)("v-text-field"),l=(0,o.g2)("v-card-text"),c=(0,o.g2)("v-card"),u=(0,o.g2)("v-icon"),h=(0,o.g2)("v-btn"),p=(0,o.g2)("v-bottom-sheet"),f=(0,o.g2)("loading"),m=(0,o.g2)("v-main");return(0,o.uX)(),(0,o.Wv)(m,null,{default:(0,o.k6)((()=>[n.ready?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("h1",v,[(0,o.eW)("O que deseja perguntar"),C,(0,o.eW)("ao Oráculo do Tarot?")])),n.ready&&!n.loading?((0,o.uX)(),(0,o.CE)("h1",b,"Escolha "+(0,g.v_)(i.selectedCards.length>0?"mais":null)+" "+(0,g.v_)(5-i.selectedCards.length)+" "+(0,g.v_)(5-i.selectedCards.length>1?"cartas":"carta"),1)):(0,o.Q3)("",!0),(0,o.bF)(c,{class:"elevation-8"},{default:(0,o.k6)((()=>[(0,o.bF)(l,null,{default:(0,o.k6)((()=>[n.ready?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(d,{key:0,modelValue:i.question,"onUpdate:modelValue":t[0]||(t[0]=e=>i.question=e),label:"Faça sua pergunta",variant:"underlined","append-inner-icon":"send",rules:n.questionRules,"onClick:append":i.saveQuestion,onKeyup:(0,r.jR)((0,r.D$)(i.saveQuestion,["prevent"]),["enter"]),"hide-details":""},null,8,["modelValue","rules","onClick:append","onKeyup"]))])),_:1})])),_:1}),n.ready&&!n.loading?((0,o.uX)(),(0,o.CE)("section",y,[(0,o.Lk)("article",{class:(0,g.C4)({loading:n.loading})},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.shuffledCards,(e=>((0,o.uX)(),(0,o.CE)("figure",{key:e.id,class:(0,g.C4)([{active:n.pendingSelectCard==e.id,scattered:n.scatterCards,selected:n.selectedCard==e.id},"elevation-2"]),onMousedown:t=>i.confirmSelectCard(e.id)},[(0,o.Lk)("img",{src:`${i.baseUrl}img/cards/back.webp`,alt:"Card"},null,8,k)],42,A)))),128))],2)],512)):(0,o.Q3)("",!0),(0,o.bF)(p,{modelValue:n.selectCardDialog,"onUpdate:modelValue":t[2]||(t[2]=e=>n.selectCardDialog=e),opacity:"0","content-class":"confirm"},{default:(0,o.k6)((()=>[w,(0,o.Lk)("footer",null,[(0,o.bF)(h,{text:"",onClick:t[1]||(t[1]=e=>n.selectCardDialog=!1)},{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)("clear")])),_:1}),(0,o.eW)("Não")])),_:1}),(0,o.bF)(h,{color:"primary",onClick:i.selectCard},{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)("check")])),_:1}),(0,o.eW)("Sim")])),_:1},8,["onClick"])])])),_:1},8,["modelValue"]),n.loading?((0,o.uX)(),(0,o.Wv)(f,{key:3})):(0,o.Q3)("",!0)])),_:1})}var _=a(9751);const S={components:{loading:_.A},computed:{baseUrl(){return"/"},selectedCards:{get(){return this.$store.state.selectedCards},set(e){this.$store.commit("setSelectedCards",e)}},cards:{get(){return this.$store.state.cards},set(e){this.$store.commit("setCards",e)}},question:{get(){return this.$store.state.question},set(e){this.$store.commit("setQuestion",e)}},audioPlay:{get(){return this.$store.state.audioPlay},set(e){this.$store.commit("setAudioPlay",e)}},revealAll:{get(){return this.$store.state.revealAll},set(e){this.$store.commit("setRevealAll",e)}}},data(){return{ready:!1,loading:!1,loadedImg:0,scatterCards:!1,selectCardDialog:!1,pendingSelectCard:null,selectedCard:null,pos:{left:0,x:0},shuffledCards:[],questionRules:[e=>!!e||"Digite sua pergunta ao Oráculo do Tarot."]}},created(){this.gotoResult()},mounted(){let e=this.$route.query.reading,t=this.$route.query.question;e&&t?(this.selectedCards=e.split(",").map((e=>parseInt(e))),this.question=t,this.revealAll=!0,this.gotoResult()):t||(t=sessionStorage.getItem("question"),t&&(this.question=t))},methods:{saveQuestion(){if(!this.question)return!1;sessionStorage.setItem("question",this.question),this.getCards()},getCards(){this.audioPlay="card-select",this.ready=!0,this.loading=!0,fetch("/json/cards.json").then((e=>e.json())).then((e=>{this.cards=e,this.shuffledCards=this.cards.slice(0).sort((()=>.5-Math.random())),this.wheelEvent(),this.refreshCardsQuant(),setTimeout((()=>{this.scatterCards=!0,this.audioPlay="scattering-cards"}),100)})).finally((()=>{this.loading=!1}))},confirmSelectCard(e){setTimeout((()=>{this.pendingSelectCard=e,this.selectCardDialog=!0}),100)},selectCard(){if(this.selectedCard)return!1;this.selectedCard=this.pendingSelectCard,this.audioPlay="card-select",this.$store.dispatch("addSelectedCard",this.selectedCard),this.pendingSelectCard=null,this.gotoResult(),this.selectCardDialog=!1,setTimeout((()=>{let e=this.shuffledCards.find((e=>e.id==this.selectedCard)),t=this.shuffledCards.indexOf(e);this.shuffledCards.splice(t,1),this.refreshCardsQuant(),this.selectedCard=null}),350)},gotoResult(){this.selectedCards.length>=5&&this.$router.push("/result")},refreshCardsQuant(){document.documentElement.style.setProperty("--cards-quant",this.shuffledCards.length)},wheelEvent(){const e=setInterval((()=>{if(!this.$refs.content)return!1;this.$refs.content.onwheel=e=>{this.$refs.content.scrollLeft-=e.wheelDelta},clearInterval(e)}),100)}},watch:{selectCardDialog:function(e){e||(this.pendingSelectCard=null)}}},P=(0,l.A)(S,[["render",E],["__scopeId","data-v-618ab29a"]]),T=P,I=[{path:"/privacy-policy",name:"Privacy Policy",component:()=>a.e(456).then(a.bind(a,6456))},{path:"/result",name:"Result",component:()=>a.e(747).then(a.bind(a,4747))},{path:"/:pathMatch(.*)*",name:"Home",component:T}],$=(0,f.aE)({history:(0,f.Bt)("/"),routes:I});({VUE_APP_GANALYTICS_ID:"G-5W53E66DQY",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FIREBASE_ANALYTICS_ID&&(0,s.bx)($);const F=$;a(5524);var N=a(7768),L=a(8568),D=a(9824),O=a(3739);function j(){return"true"==localStorage.getItem("lightTheme")||"false"!=localStorage.getItem("lightTheme")&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches)}const W=(0,N.$N)({components:D,directives:O,icons:{defaultSet:"md",aliases:L.z,sets:{md:L.md}},theme:{defaultTheme:j()?"light":"dark",options:{customProperties:!0},themes:{light:{dark:!1,colors:{background:"#e6e6e6",primary:"#e1ad21",secondary:"#f8de7e",accent:"#9370db",error:"#ff6347",info:"#a1caf1",success:"#77dd77",warning:"#fcf75e"}},dark:{dark:!0,colors:{background:"#121212",primary:"#e1ad21",secondary:"#f8de7e",accent:"#9370db",error:"#ff6347",info:"#a1caf1",success:"#77dd77",warning:"#fcf75e"}}}}});var q=a(4458);const U=e=>{(0,q.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){e.config.globalProperties.$store.commit("setUpdateAvailable",!0),console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}})},R=(0,r.Ef)(u);R.use(p),R.use(F),R.use(W),R.mount("#app"),U(R),{VUE_APP_GANALYTICS_ID:"G-5W53E66DQY",NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_FIREBASE_ANALYTICS_ID&&R.use(s.Ay,{property:{id:{VUE_APP_GANALYTICS_ID:"G-5W53E66DQY",NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_FIREBASE_ANALYTICS_ID}})},9751:(e,t,a)=>{a.d(t,{A:()=>u});var r=a(6768);const s=e=>((0,r.Qi)("data-v-195db73b"),e=e(),(0,r.jt)(),e),o=["src"],n=s((()=>(0,r.Lk)("figcaption",null,"Carregando cartas",-1)));function i(e,t,a,s,i,d){return(0,r.uX)(),(0,r.CE)("figure",null,[(0,r.Lk)("img",{src:`${d.baseUrl}img/cards/back.webp`,alt:"Card"},null,8,o),n])}const d={name:"loading",computed:{baseUrl(){return"/"}}};var l=a(1241);const c=(0,l.A)(d,[["render",i],["__scopeId","data-v-195db73b"]]),u=c}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,a),o.exports}a.m=e,(()=>{var e=[];a.O=(t,r,s,o)=>{if(!r){var n=1/0;for(c=0;c<e.length;c++){for(var[r,s,o]=e[c],i=!0,d=0;d<r.length;d++)(!1&o||n>=o)&&Object.keys(a.O).every((e=>a.O[e](r[d])))?r.splice(d--,1):(i=!1,o<n&&(n=o));if(i){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,s,o]}})(),(()=>{a.F={},a.E=e=>{Object.keys(a.F).map((t=>{a.F[t](e)}))}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{456:"d6f1d4af",747:"8bf6eb93"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+".186135f9.css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="Taron:";a.l=(r,s,o,n)=>{if(e[r])e[r].push(s);else{var i,d;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+o){i=u;break}}i||(d=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[s];var h=(t,a)=>{i.onerror=i.onload=null,clearTimeout(p);var s=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((e=>e(a))),t)return t(a)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),d&&document.head.appendChild(i)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,s,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",a.nc&&(n.nonce=a.nc);var i=a=>{if(n.onerror=n.onload=null,"load"===a.type)s();else{var r=a&&a.type,i=a&&a.target&&a.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+i+")");d.name="ChunkLoadError",d.code="CSS_CHUNK_LOAD_FAILED",d.type=r,d.request=i,n.parentNode&&n.parentNode.removeChild(n),o(d)}};return n.onerror=n.onload=i,n.href=t,r?r.parentNode.insertBefore(n,r.nextSibling):document.head.appendChild(n),n},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var s=a[r],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===e||o===t))return s}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){s=n[r],o=s.getAttribute("data-href");if(o===e||o===t)return s}},r=r=>new Promise(((s,o)=>{var n=a.miniCssF(r),i=a.p+n;if(t(n,i))return s();e(r,i,null,s,o)})),s={524:0};a.f.miniCss=(e,t)=>{var a={747:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=r(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))}}})(),(()=>{var e={524:0,471:0};a.f.j=(t,r)=>{var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else if(471!=t){var o=new Promise(((a,r)=>s=e[t]=[a,r]));r.push(s[2]=o);var n=a.p+a.u(t),i=new Error,d=r=>{if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,s[1](i)}};a.l(n,d,"chunk-"+t,t)}else e[t]=0},a.F.j=t=>{if((!a.o(e,t)||void 0===e[t])&&471!=t){e[t]=null;var r=document.createElement("link");a.nc&&r.setAttribute("nonce",a.nc),r.rel="prefetch",r.as="script",r.href=a.p+a.u(t),document.head.appendChild(r)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var s,o,[n,i,d]=r,l=0;if(n.some((t=>0!==e[t]))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(d)var c=d(a)}for(t&&t(r);l<n.length;l++)o=n[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},r=globalThis["webpackChunkTaron"]=globalThis["webpackChunkTaron"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{a.O(0,[524],(()=>{a.E(456),a.E(747)}),5)})();var r=a.O(void 0,[683,636,823,890,909,219,258,853,78,785,461,471,338,480],(()=>a(531)));r=a.O(r)})();