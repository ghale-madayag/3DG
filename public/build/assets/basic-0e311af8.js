import{i as f,Z as v,r as l,o as x,d as b,a as e,e as t,w as s,h as a,t as y,F as w,k as B}from"./app-6a7dc968.js";import{_ as C}from"./logo-light-01b48412.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const L={methods:{getInputElement(n){return document.getElementById("digit"+n+"-input")},moveToNext(n){this.getInputElement(n).value.length===1&&(n!==4?this.getInputElement(n+1).focus():(this.getInputElement(n).blur(),console.log("submit code")))}},components:{Link:f,Head:v}},N={class:"auth-page-wrapper pt-5"},T=B('<div class="auth-one-bg-position auth-one-bg" id="auth-particles"><div class="bg-overlay"></div><div class="shape"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120"><path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path></svg></div></div>',1),D={class:"auth-page-content"},E={class:"text-center mt-sm-5 mb-4 text-white-50"},V=t("img",{src:C,alt:"",height:"20"},null,-1),I=t("p",{class:"mt-3 fs-15 fw-medium"},"Premium Admin & Dashboard Template",-1),K=t("div",{class:"mb-4"},[t("div",{class:"avatar-lg mx-auto"},[t("div",{class:"avatar-title bg-light text-primary display-5 rounded-circle"},[t("i",{class:"ri-mail-line"})])])],-1),$={class:"p-2 mt-4"},F=t("div",{class:"text-muted text-center mb-4 mx-lg-3"},[t("h4",{class:""},"Verify Your Email"),t("p",null,[a("Please enter the 4 digit code sent to "),t("span",{class:"fw-semibold"},"example@abc.com")])],-1),H={class:"mb-3"},R=t("label",{for:"digit1-input",class:"visually-hidden"},"Dight 1",-1),S={class:"mb-3"},z=t("label",{for:"digit2-input",class:"visually-hidden"},"Dight 2",-1),P={class:"mb-3"},Y=t("label",{for:"digit3-input",class:"visually-hidden"},"Dight 3",-1),j={class:"mb-3"},A=t("label",{for:"digit4-input",class:"visually-hidden"},"Dight 4",-1),M={class:"mt-3"},Z={class:"mt-4 text-center"},q={class:"mb-0"},G={class:"footer"},J={class:"text-center"},O={class:"mb-0 text-muted"},Q=t("i",{class:"mdi mdi-heart text-danger"},null,-1);function U(n,o,W,X,tt,d){const _=l("Head"),m=l("Link"),i=l("BCol"),c=l("BRow"),p=l("BButton"),h=l("BCardBody"),g=l("BCard"),u=l("BContainer");return x(),b(w,null,[e(_,{title:"Two Step Verification"}),t("div",N,[T,t("div",D,[e(u,null,{default:s(()=>[e(c,null,{default:s(()=>[e(i,{lg:"12"},{default:s(()=>[t("div",E,[t("div",null,[e(m,{href:"/",class:"d-inline-block auth-logo"},{default:s(()=>[V]),_:1})]),I])]),_:1})]),_:1}),e(c,{class:"justify-content-center"},{default:s(()=>[e(i,{md:"8",lg:"6",xl:"5"},{default:s(()=>[e(g,{"no-body":"",class:"mt-4"},{default:s(()=>[e(h,{class:"p-4"},{default:s(()=>[K,t("div",$,[F,t("form",null,[e(c,null,{default:s(()=>[e(i,{cols:"3"},{default:s(()=>[t("div",H,[R,t("input",{type:"text",class:"form-control form-control-lg bg-light border-light text-center",onKeyup:o[0]||(o[0]=r=>d.moveToNext(1)),maxLength:"1",id:"digit1-input"},null,32)])]),_:1}),e(i,{cols:"3"},{default:s(()=>[t("div",S,[z,t("input",{type:"text",class:"form-control form-control-lg bg-light border-light text-center",onKeyup:o[1]||(o[1]=r=>d.moveToNext(2)),maxLength:"1",id:"digit2-input"},null,32)])]),_:1}),e(i,{cols:"3"},{default:s(()=>[t("div",P,[Y,t("input",{type:"text",class:"form-control form-control-lg bg-light border-light text-center",onKeyup:o[2]||(o[2]=r=>d.moveToNext(3)),maxLength:"1",id:"digit3-input"},null,32)])]),_:1}),e(i,{cols:"3"},{default:s(()=>[t("div",j,[A,t("input",{type:"text",class:"form-control form-control-lg bg-light border-light text-center",onKeyup:o[3]||(o[3]=r=>d.moveToNext(4)),maxLength:"1",id:"digit4-input"},null,32)])]),_:1})]),_:1})]),t("div",M,[e(p,{type:"button",variant:"secondary",class:"w-100"},{default:s(()=>[a("Confirm")]),_:1})])])]),_:1})]),_:1}),t("div",Z,[t("p",q,[a("Didn't receive a code ? "),e(m,{href:"/auth/reset-pwd-basic",class:"fw-semibold text-primary text-decoration-underline"},{default:s(()=>[a("Resend")]),_:1})])])]),_:1})]),_:1})]),_:1})]),t("footer",G,[e(u,null,{default:s(()=>[e(c,null,{default:s(()=>[e(i,{lg:"12"},{default:s(()=>[t("div",J,[t("p",O,[a("© "+y(new Date().getFullYear())+" Velzon. Crafted with ",1),Q,a(" by Themesbrand")])])]),_:1})]),_:1})]),_:1})])])],64)}const lt=k(L,[["render",U]]);export{lt as default};