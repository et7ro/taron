"use strict";(globalThis["webpackChunkTaron"]=globalThis["webpackChunkTaron"]||[]).push([[189],{5189:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",[s("v-main",{ref:"content"},[e.cards&&e.readings?[s("h4",[e._v(e._s(e.question))]),s("section",[s("card-result",{attrs:{cardId:e.selectedCards[0],bodyPart:0,disabled:e.unlocking},on:{flip:function(t){return e.onFlip()}}})],1),s("section",[s("card-result",{attrs:{cardId:e.selectedCards[1],bodyPart:1,disabled:e.unlocking},on:{flip:function(t){return e.onFlip()}}}),e.unlock?s("card-result",{attrs:{special:"",cardId:e.navelCardId,bodyPart:5,disabled:e.unlocking},on:{flip:function(t){return e.onFlip()}}}):e._e(),s("card-result",{attrs:{cardId:e.selectedCards[2],bodyPart:2,disabled:e.unlocking},on:{flip:function(t){return e.onFlip()}}})],1),s("section",[s("card-result",{attrs:{cardId:e.selectedCards[3],bodyPart:3,disabled:e.unlocking},on:{flip:function(t){return e.onFlip()}}}),s("card-result",{attrs:{cardId:e.selectedCards[4],bodyPart:4,disabled:e.unlocking},on:{flip:function(t){return e.onFlip()}}})],1)]:e._e()],2),s("v-bottom-sheet",{staticClass:"elevation-8",model:{value:e.newConsultationDialog,callback:function(t){e.newConsultationDialog=t},expression:"newConsultationDialog"}},[s("h2",[e._v("Iniciar outra consulta ?")]),s("footer",[s("v-btn",{attrs:{text:""},on:{click:function(t){e.newConsultationDialog=!1}}},[s("v-icon",[e._v("clear")]),e._v("Não")],1),s("v-btn",{attrs:{color:"primary"},on:{click:e.reset}},[s("v-icon",[e._v("check")]),e._v("Sim")],1)],1)]),e.opened>=6?s("v-btn",{staticClass:"floating",attrs:{fixed:"",fab:"",small:"",color:"primary"},on:{click:function(t){e.newConsultationDialog=!0}}},[s("v-icon",[e._v("refresh")])],1):e._e(),e.cards&&e.readings?e._e():s("loading")],1)},r=[],a=s(1112),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{class:{special:e.special}},[s("v-overlay",{model:{value:e.expand,callback:function(t){e.expand=t},expression:"expand"}}),s("section",{class:{flip:e.flip,expand:e.expand,contract:e.contract},on:{click:e.toggleFlip}},[s("figure",{class:e.aspect},[s("img",{staticClass:"elevation-4",attrs:{src:e.baseUrl+"img/cards/back.webp",alt:"Card"}}),e.card?s("img",{ref:"card",staticClass:"elevation-4",class:{expand:e.expand},attrs:{src:""+e.baseUrl+e.card.img,alt:"Card"}}):e._e(),e.expand&&!e.contract?s("figcaption",[s("h2",[e._v(e._s(e.readings.body))]),s("p",[e._v(e._s(e.readings.description))]),s("p",[e._v(e._s(e.cardDescription()))]),e.card.id<=22?[s("footer",[s("label",[e._v("Possíveis interpretações positivas")]),s("span",[e._v(e._s(e.card.positive))])]),s("footer",[s("label",[e._v("Possíveis interpretações negativas")]),s("span",[e._v(e._s(e.card.negative))])])]:[s("footer",[s("label",[e._v("Possíveis interpretações")]),s("span",[e._v(e._s(e.card.description))])])]],2):e._e()]),e.expand&&!e.contract?s("v-btn",{staticClass:"floating",attrs:{absolute:"",fab:"",small:""}},[s("v-icon",[e._v("clear")])],1):e._e()],1)],1)},o=[];const d={name:"card-result",props:{cardId:Number,bodyPart:Number,disabled:Boolean,special:Boolean},computed:{baseUrl(){return"/"},card(){return this.$store.state.cards.find((e=>e.id==this.cardId))},readings(){return this.$store.state.readings[this.bodyPart]}},data(){return{flip:!1,expand:!1,contract:!1,aspect:null}},mounted(){this.refreshWindowSize(),this.$root.$on("resize",(()=>{this.refreshWindowSize()}))},methods:{toggleFlip(){return!this.disabled&&((!this.expand||!this.contract)&&(this.$root.$emit("audioPlay","card-select"),this.flip?(this.refreshCardPosition(),this.expand?(this.contract=!0,setTimeout((()=>{this.$emit("close"),this.expand=!1,this.contract=!1}),350)):this.expand=!0):(this.flip=!this.flip,this.$emit("flip")),void this.$forceUpdate()))},cardDescription(){return this.card.id<=22?this.readings.arcano:this.card.value>=11?this.readings.court:this.readings.numeric},refreshWindowSize(){let e=window.innerHeight/3-56,t=100*e/462,s=256*t/100;document.documentElement.style.setProperty("--card-result-width",`${s}px`),document.documentElement.style.setProperty("--card-result-height",`${e}px`),this.aspect=window.innerWidth>window.innerHeight?"horizontal":"vertical",this.refreshCardPosition()},refreshCardPosition(){let e=window.innerWidth>1e3?(window.innerWidth-1e3)/2:0;this.$el.style.setProperty("--offset-top",`-${this.$el.offsetTop}px`),this.$el.style.setProperty("--offset-left",`-${this.$el.offsetLeft+e}px`),this.refreshCardWidth()},refreshCardWidth(){setTimeout((()=>{this.$refs.card&&this.$el.style.setProperty("--card-expanded-width",`${this.$refs.card.width}px`)}),300)}}},l=d;var c=s(1001),h=s(3453),u=s.n(h),p=s(7080),f=s(4926),g=s(4042),v=(0,c.Z)(l,n,o,!1,null,"c10eac5c",null);const m=v.exports;u()(v,{VBtn:p.Z,VIcon:f.Z,VOverlay:g.Z});const b={components:{loading:a.Z,cardResult:m},computed:{question(){return sessionStorage.getItem("question")},cards:{get(){return this.$store.state.cards},set(e){this.$store.commit("setCards",e)}},readings:{get(){return this.$store.state.readings},set(e){this.$store.commit("setReadings",e)}},selectedCards:{get(){return this.$store.state.selectedCards},set(e){this.$store.commit("setSelectedCards",e)}}},data(){return{opened:0,unlocking:!1,unlock:!1,navelCardId:null,newConsultationDialog:!1}},created(){this.selectedCards.length<5&&this.$router.push("/"),this.cards.length?this.getCardsValues():this.getCards(),this.getReadings()},mounted(){document.documentElement.style.setProperty("--result-screen-offset-top",(window.innerHeight-this.$refs.content.$el.clientHeight)/2+"px")},methods:{getReadings(){this.axios.get("/json/readings.json").then((e=>{this.readings=e.data}))},getCards(){this.axios.get("/json/cards.json").then((e=>{this.cards=e.data,this.getCardsValues()}))},getCardsValues(){let e=this.cards.slice(0).filter((e=>this.selectedCards.includes(e.id))).map((e=>e.value));this.findNavelCard(e)},onFlip(){return this.opened++,!this.unlock&&(!(this.opened<5)&&(this.unlocking=!0,this.unlock=!0,this.$root.$emit("audioPlay","bell"),void setTimeout((()=>{this.unlocking=!1}),3e3)))},findNavelCard(e){let t;"object"!=typeof e&&(e=e.toString().split("").map((e=>parseInt(e)))),t=e.reduce(((e,t)=>e+t),0),t>22?this.findNavelCard(t):this.navelCardId=t},reset(){sessionStorage.removeItem("selectedCards"),this.selectedCards=[],this.$router.push("/")}}},C=b;var $=s(8738),_=s(4768),x=(0,c.Z)(C,i,r,!1,null,"4b54ed01",null);const y=x.exports;u()(x,{VBottomSheet:$.Z,VBtn:p.Z,VIcon:f.Z,VMain:_.Z})}}]);