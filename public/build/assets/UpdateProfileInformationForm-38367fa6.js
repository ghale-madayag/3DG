import{T as j,b as v,r as E,o as m,c as V,w as n,d as h,e as t,a as o,l as _,C as b,N as A,h as d,j as y,g as p,t as D,u as s,n as g,i as F,O}from"./app-976f9ee5.js";import{_ as R}from"./FormSection-c5fb67d4.js";import{_ as C}from"./InputError-5b533955.js";import{_ as k}from"./InputLabel-0c363382.js";import{_ as B}from"./TextInput-688b1399.js";const T={key:0,class:"mb-3"},q={class:"mb-2"},z={class:"mb-2"},L=["src","alt"],M={class:"text-danger mt-2"},Y={class:"mb-3"},G={class:"mb-3"},H={key:0},J={class:"text-sm mt-2 text-muted"},K={class:"alert alert-success text-success"},Q={key:0,class:"alert alert-info mt-3"},se={__name:"UpdateProfileInformationForm",props:{user:Object},setup(i){const P=i,e=j({_method:"PUT",name:P.user.name,email:P.user.email,photo:null}),w=v(null),u=v(null),l=v(null),N=()=>{l.value&&(e.photo=l.value.files[0]),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>S()})},I=()=>{w.value=!0},x=()=>{l.value.click()},U=()=>{const a=l.value.files[0];if(!a)return;const r=new FileReader;r.onload=c=>{u.value=c.target.result},r.readAsDataURL(a)},$=()=>{O.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{u.value=null,S()}})},S=()=>{var a;(a=l.value)!=null&&a.value&&(l.value.value=null)};return(a,r)=>{const c=E("BButton");return m(),V(R,{onSubmitted:N,title:"Profile Information",description:"Update your account's profile information and email address."},{form:n(()=>[a.$page.props.jetstream.managesProfilePhotos?(m(),h("div",T,[t("div",q,[t("input",{ref_key:"photoInput",ref:l,type:"file",class:"d-none form-control",onChange:U},null,544),o(k,{for:"photo",value:"Photo"})]),t("div",z,[_(t("div",null,[t("img",{src:i.user.profile_photo_url,alt:i.user.name,class:"rounded-circle",width:"100"},null,8,L)],512),[[b,!u.value]]),_(t("div",null,[t("span",{class:"d-block rounded-circle w-25",style:A("background-image: url('"+u.value+"');")},null,4)],512),[[b,u.value]])]),o(c,{variant:"primary",class:"me-2 btn-sm",type:"button",onClick:y(x,["prevent"])},{default:n(()=>[d("Select A New Photo")]),_:1}),i.user.profile_photo_path?(m(),V(c,{key:0,variant:"danger",type:"button",class:"btn-sm",onClick:y($,["prevent"])},{default:n(()=>[d("Remove Photo")]),_:1})):p("",!0),t("div",M,[t("span",null,D(s(e).errors.photo),1)])])):p("",!0),t("div",Y,[o(k,{for:"name",value:"Name"}),o(B,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":r[0]||(r[0]=f=>s(e).name=f),type:"text",required:"",autocomplete:"name",class:g({"is-invalid":s(e).errors.name})},null,8,["modelValue","class"]),o(C,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),t("div",G,[o(k,{for:"email",value:"Email"}),o(B,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":r[1]||(r[1]=f=>s(e).email=f),type:"email",required:"",autocomplete:"username",class:g({"is-invalid":s(e).errors.email})},null,8,["modelValue","class"]),o(C,{message:s(e).errors.email,class:"mt-2"},null,8,["message"]),a.$page.props.jetstream.hasEmailVerification&&i.user.email_verified_at===null?(m(),h("div",H,[t("p",J,[d(" Your email address is unverified. "),o(s(F),{href:a.route("verification.send"),method:"post",as:"button",class:"btn btn-sm btn-warning",onClick:y(I,["prevent"])},{default:n(()=>[d(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),_(t("div",K," A new verification link has been sent to your email address. ",512),[[b,w.value]])])):p("",!0)])]),actions:n(()=>[o(c,{variant:"primary w-100",type:"submit",class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:n(()=>[d("Save")]),_:1},8,["class","disabled"]),s(e).recentlySuccessful?(m(),h("p",Q,"Profile Saved.")):p("",!0)]),_:1})}}};export{se as default};