import{a6 as t,B as s,C as r,J as a}from"./index.ff900339.js";const o={mounted(){window.addEventListener("resize",this.adjustIframeHeight),this.adjustIframeHeight()},beforeDestroy(){window.removeEventListener("resize",this.adjustIframeHeight)},methods:{adjustIframeHeight(){const e=this.$refs.iframe;e&&(e.style.height=window.innerHeight+"px")}}},i={class:"iframe-container"},n={ref:"iframe",src:"https://ys.mihoyo.com/main/",frameborder:"0",scrolling:"auto",allowfullscreen:"",class:"iframe-content"};function c(e,d,_,f,m,h){return a(),s("div",i,[r("iframe",n,null,512)])}const u=t(o,[["render",c],["__scopeId","data-v-847b8102"]]);export{u as default};