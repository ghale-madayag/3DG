import{T as V,r as i,o as h,d as v,a as e,u as t,Z as N,e as s,w as a,i as y,j as $,n as m,l as b,v as k,h as d,g as D,t as E,F as S,k as U}from"./app-6a7dc968.js";import{_ as q}from"./logo-dark-d94ba77b.js";import{_ as F}from"./Checkbox-57e53921.js";import{_ as c}from"./InputError-6b472e9f.js";import{_ as p}from"./InputLabel-d785cba0.js";import{_ as B}from"./TextInput-5429f563.js";const R={class:"auth-page-wrapper pt-5"},j=U('<div class="auth-one-bg-position auth-one-bg" id="auth-particles"><div class="bg-overlay"></div><div class="shape"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120"><path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path></svg></div></div>',1),L={class:"auth-page-content"},T={class:"text-center mt-sm-5 mb-4 text-white-50"},z=s("img",{src:q,alt:"",height:"120"},null,-1),A=s("div",{class:"text-center mt-2"},[s("h5",{class:"text-primary"},"Create New Account"),s("p",{class:"text-muted"},"Get your free velzon account now")],-1),M={class:"p-2 mt-4"},G={class:"mb-3"},I={class:"mb-3"},O={class:"mb-3"},Y={class:"position-relative auth-pass-inputgroup"},Z=["type"],H=s("i",{class:"ri-eye-fill align-middle"},null,-1),J={class:"mb-3"},K={class:"position-relative auth-pass-inputgroup"},Q=["type"],W=s("i",{class:"ri-eye-fill align-middle"},null,-1),X={key:0,class:"mb-3 form-check"},ee={class:"form-check-label mb-0 fs-12 text-muted fst-italic",for:"auth-remember-check"},se={class:"mt-4"},te={class:"mt-4 text-center"},oe={class:"mb-0"},ae={class:"footer"},le={class:"text-center"},ne={class:"mb-0 text-muted"},re={data(){return{togglePassword:!1,togglePassword_conf:!1}}},fe=Object.assign(re,{__name:"Register",setup(ie){const o=V({name:"",email:"",password:"",password_confirmation:"",terms:!1}),x=()=>{o.post(route("register"),{onFinish:()=>o.reset("password","password_confirmation")})};return(r,l)=>{const u=i("BCol"),_=i("BRow"),f=i("BButton"),w=i("BLink"),C=i("BCardBody"),P=i("BCard"),g=i("BContainer");return h(),v(S,null,[e(t(N),{title:"Register"}),s("div",R,[j,s("div",L,[e(g,null,{default:a(()=>[e(_,null,{default:a(()=>[e(u,{lg:"12"},{default:a(()=>[s("div",T,[s("div",null,[e(t(y),{href:"/",class:"d-inline-block auth-logo"},{default:a(()=>[z]),_:1})])])]),_:1})]),_:1}),e(_,{class:"justify-content-center"},{default:a(()=>[e(u,{md:"8",lg:"6",xl:"5"},{default:a(()=>[e(P,{"no-body":"",class:"mt-4"},{default:a(()=>[e(C,{class:"p-4"},{default:a(()=>[A,s("div",M,[s("form",{onSubmit:$(x,["prevent"]),class:"needs-validation",novalidate:""},[s("div",G,[e(p,{for:"name",value:"Name"}),e(B,{id:"name",modelValue:t(o).name,"onUpdate:modelValue":l[0]||(l[0]=n=>t(o).name=n),type:"text",class:m(["mt-1 block w-full",{"is-invalid":t(o).errors.name}]),required:"",autofocus:"",autocomplete:"name",placeholder:"Enter your name"},null,8,["modelValue","class"]),e(c,{message:t(o).errors.name},null,8,["message"])]),s("div",I,[e(p,{for:"email",value:"Email"}),e(B,{id:"email",modelValue:t(o).email,"onUpdate:modelValue":l[1]||(l[1]=n=>t(o).email=n),type:"email",class:m(["mt-1 block w-full",{"is-invalid":t(o).errors.email}]),required:"",autocomplete:"email",placeholder:"Enter your email"},null,8,["modelValue","class"]),e(c,{message:t(o).errors.email},null,8,["message"])]),s("div",O,[e(p,{for:"password",value:"Password"}),s("div",Y,[b(s("input",{type:r.togglePassword?"text":"password",class:m(["form-control pe-5 password-input",{"is-invalid":t(o).errors.password}]),placeholder:"Enter password",id:"password",required:"","onUpdate:modelValue":l[2]||(l[2]=n=>t(o).password=n),autocomplete:"new-password"},null,10,Z),[[k,t(o).password]]),e(f,{variant:"link",class:"position-absolute end-0 top-0 text-decoration-none text-muted password-addon",type:"button",onClick:l[3]||(l[3]=n=>r.togglePassword=!r.togglePassword)},{default:a(()=>[H]),_:1}),e(c,{message:t(o).errors.password},null,8,["message"])])]),s("div",J,[e(p,{for:"password_confirmation",value:"Confirm Password"}),s("div",K,[b(s("input",{type:r.togglePassword_conf?"text":"password",class:m(["form-control pe-5 password-input",{"is-invalid":t(o).errors.password_confirmation}]),placeholder:"Enter password",id:"password_confirmation",required:"","onUpdate:modelValue":l[4]||(l[4]=n=>t(o).password_confirmation=n),autocomplete:"new-password"},null,10,Q),[[k,t(o).password_confirmation]]),e(f,{variant:"link",class:"position-absolute end-0 top-0 text-decoration-none text-muted password-addon",type:"button",onClick:l[5]||(l[5]=n=>r.togglePassword_conf=!r.togglePassword_conf)},{default:a(()=>[W]),_:1}),e(c,{message:t(o).errors.password_confirmation},null,8,["message"])])]),r.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(h(),v("div",X,[e(F,{id:"terms",checked:t(o).terms,"onUpdate:checked":l[6]||(l[6]=n=>t(o).terms=n),name:"terms",required:"",class:m(["form-check-input me-1",{"is-invalid":t(o).errors.terms}])},null,8,["checked","class"]),s("label",ee,[d(" I agree to the "),e(w,{target:"_blank",href:r.route("terms.show"),class:""},{default:a(()=>[d("Terms of Service")]),_:1},8,["href"]),d(" and "),e(w,{target:"_blank",href:r.route("policy.show"),class:""},{default:a(()=>[d("Privacy Policy")]),_:1},8,["href"])]),e(c,{message:t(o).errors.terms},null,8,["message"])])):D("",!0),s("div",se,[e(f,{variant:"secondary",class:m(["w-100",{"opacity-25":t(o).processing}]),type:"submit",disabled:t(o).processing},{default:a(()=>[d("Sign Up")]),_:1},8,["class","disabled"])])],32)])]),_:1})]),_:1}),s("div",te,[s("p",oe,[d("Already have an account ? "),e(t(y),{href:r.route("login"),class:"fw-semibold text-primary text-decoration-underline"},{default:a(()=>[d(" Signin ")]),_:1},8,["href"])])])]),_:1})]),_:1})]),_:1})]),s("footer",ae,[e(g,null,{default:a(()=>[e(_,null,{default:a(()=>[e(u,{lg:"12"},{default:a(()=>[s("div",le,[s("p",ne,"© "+E(new Date().getFullYear())+" 3DG Realty Development.",1)])]),_:1})]),_:1})]),_:1})])])],64)}}});export{fe as default};