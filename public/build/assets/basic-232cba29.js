import{i as b,Z as g,r as l,o as y,d as B,a as e,e as s,w as t,h as o,t as x,F as C,k as L}from"./app-8bd223dd.js";import{_ as k}from"./logo-light-01b48412.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const I={components:{Link:b,Head:g},methods:{validatePassword(){var r=document.getElementById("password-input"),a=document.getElementById("confirm-password-input");r.value!=a.value?a.setCustomValidity("Passwords Don't Match"):a.setCustomValidity("")}},mounted(){var r=document.getElementById("password-input");r.onchange=this.validatePassword,document.querySelectorAll("form .auth-pass-inputgroup").forEach(function(d){d.querySelectorAll(".password-addon").forEach(function(i){i.addEventListener("click",function(){var n=d.querySelector(".password-input");n.type==="password"?n.type="text":n.type="password"})})});var a=document.getElementById("password-input"),c=document.getElementById("pass-lower"),p=document.getElementById("pass-upper"),u=document.getElementById("pass-number"),m=document.getElementById("pass-length");a.onfocus=function(){document.getElementById("password-contain").style.display="block"},a.onblur=function(){document.getElementById("password-contain").style.display="none"},a.onkeyup=function(){var d=/[a-z]/g;a.value.match(d)?(c.classList.remove("invalid"),c.classList.add("valid")):(c.classList.remove("valid"),c.classList.add("invalid"));var i=/[A-Z]/g;a.value.match(i)?(p.classList.remove("invalid"),p.classList.add("valid")):(p.classList.remove("valid"),p.classList.add("invalid"));var n=/[0-9]/g;a.value.match(n)?(u.classList.remove("invalid"),u.classList.add("valid")):(u.classList.remove("valid"),u.classList.add("invalid")),a.value.length>=8?(m.classList.remove("invalid"),m.classList.add("valid")):(m.classList.remove("valid"),m.classList.add("invalid"))}}},A={class:"auth-page-wrapper pt-5"},P=L('<div class="auth-one-bg-position auth-one-bg" id="auth-particles"><div class="bg-overlay"></div><div class="shape"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120"><path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path></svg></div></div>',1),V={class:"auth-page-content"},z={class:"text-center mt-sm-5 mb-4 text-white-50"},q=s("img",{src:k,alt:"",height:"20"},null,-1),S=s("p",{class:"mt-3 fs-15 fw-medium"},"Premium Admin & Dashboard Template",-1),Z=s("div",{class:"text-center mt-2"},[s("h5",{class:"text-primary"},"Create new password"),s("p",{class:"text-muted"},"Your new password must be different from previous used password.")],-1),D={class:"p-2"},M={class:"mb-3"},N=s("label",{class:"form-label",for:"password-input"},"Password",-1),R={class:"position-relative auth-pass-inputgroup"},$=s("input",{type:"password",class:"form-control pe-5 password-input",onpaste:"return false",placeholder:"Enter password",id:"password-input","aria-describedby":"passwordInput",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",required:""},null,-1),F=s("i",{class:"ri-eye-fill align-middle"},null,-1),H=s("div",{id:"passwordInput",class:"form-text"},"Must be at least 8 characters. ",-1),T={class:"mb-3"},Y=s("label",{class:"form-label",for:"confirm-password-input"},"Confirm Password",-1),j={class:"position-relative auth-pass-inputgroup mb-3"},W=s("input",{type:"password",class:"form-control pe-5 password-input",onpaste:"return false",placeholder:"Confirm password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",id:"confirm-password-input",required:""},null,-1),G=s("i",{class:"ri-eye-fill align-middle"},null,-1),J=s("div",{id:"password-contain",class:"p-3 bg-light mb-2 rounded"},[s("h5",{class:"fs-13"},"Password must contain:"),s("p",{id:"pass-length",class:"invalid fs-12 mb-2"},[o("Minimum "),s("b",null,"8 characters")]),s("p",{id:"pass-lower",class:"invalid fs-12 mb-2"},[o("At "),s("b",null,"lowercase"),o(" letter (a-z)")]),s("p",{id:"pass-upper",class:"invalid fs-12 mb-2"},[o("At least "),s("b",null,"uppercase"),o(" letter (A-Z)")]),s("p",{id:"pass-number",class:"invalid fs-12 mb-0"},[o("A least "),s("b",null,"number"),o(" (0-9) ")])],-1),K=s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",value:"",id:"auth-remember-check"}),s("label",{class:"form-check-label",for:"auth-remember-check"},"Remember me")],-1),O={class:"mt-4"},Q={class:"mt-4 text-center"},U={class:"mb-0"},X={class:"footer"},ss={class:"text-center"},es={class:"mb-0 text-muted"},ts=s("i",{class:"mdi mdi-heart text-danger"},null,-1);function as(r,a,c,p,u,m){const d=l("Head"),i=l("Link"),n=l("BCol"),_=l("BRow"),v=l("BButton"),f=l("BCardBody"),w=l("BCard"),h=l("BContainer");return y(),B(C,null,[e(d,{title:"Password Create"}),s("div",A,[P,s("div",V,[e(h,null,{default:t(()=>[e(_,null,{default:t(()=>[e(n,{lg:"12"},{default:t(()=>[s("div",z,[s("div",null,[e(i,{href:"/",class:"d-inline-block auth-logo"},{default:t(()=>[q]),_:1})]),S])]),_:1})]),_:1}),e(_,{class:"justify-content-center"},{default:t(()=>[e(n,{md:"8",lg:"6",xl:"5"},{default:t(()=>[e(w,{"no-body":"",class:"mt-4"},{default:t(()=>[e(f,{class:"p-4"},{default:t(()=>[Z,s("div",D,[s("form",null,[s("div",M,[N,s("div",R,[$,e(v,{variant:"link",class:"position-absolute end-0 top-0 text-decoration-none text-muted password-addon",type:"button",id:"password-addon"},{default:t(()=>[F]),_:1})]),H]),s("div",T,[Y,s("div",j,[W,e(v,{variant:"link",class:"position-absolute end-0 top-0 text-decoration-none text-muted password-addon",type:"button"},{default:t(()=>[G]),_:1})])]),J,K,s("div",O,[e(v,{variant:"secondary",class:"w-100",onClick:r.validatepassword,type:"submit"},{default:t(()=>[o("Reset Password")]),_:1},8,["onClick"])])])])]),_:1})]),_:1}),s("div",Q,[s("p",U,[o("Wait, I remember my password... "),e(i,{href:"/auth/signin-basic",class:"fw-semibold text-primary text-decoration-underline"},{default:t(()=>[o(" Click here ")]),_:1})])])]),_:1})]),_:1})]),_:1})]),s("footer",X,[e(h,null,{default:t(()=>[e(_,null,{default:t(()=>[e(n,{lg:"12"},{default:t(()=>[s("div",ss,[s("p",es,[o("© "+x(new Date().getFullYear())+" Velzon. Crafted with ",1),ts,o(" by Themesbrand")])])]),_:1})]),_:1})]),_:1})])])],64)}const ds=E(I,[["render",as]]);export{ds as default};