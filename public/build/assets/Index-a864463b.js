import{s as q,b as r,T as D,x as O,m as F,r as H,o as b,c as I,w as S,a as g,u as o,Z as z,e,d as k,g as x,h as Z,j as G,l as f,y as h,n as c,t as m}from"./app-6a7dc968.js";import{L as J}from"./main-efa8ec72.js";import{P as K}from"./page-header-980f0e6a.js";import{L as Q,w as C}from"./mermaid-cf784c66.js";import"./logo-dark-d94ba77b.js";import"./_plugin-vue_export-helper-c27b6911.js";const W=e("meta",{name:"viewport",content:"your content"},null,-1),X={class:"row"},Y={class:"col-lg-12"},$={class:"card"},ee={class:"card-header border-bottom-dashed"},te={class:"row g-4 align-items-center"},se=e("div",{class:"col-sm"},[e("div",null,[e("h5",{class:"card-title mb-0"},"Contact List")])],-1),ae={class:"col-sm-auto"},oe={class:"d-flex flex-wrap align-items-start gap-2"},le=e("i",{class:"ri-delete-bin-2-line"},null,-1),ne=[le],ie=e("i",{class:"ri-add-line align-bottom me-1"},null,-1),de={class:"modal-dialog modal-dialog-centered"},re={class:"modal-content"},ce=e("h5",{class:"modal-title"},null,-1),me={class:"modal-body"},ue={class:"mb-3"},fe=e("label",{for:"fname",class:"form-label"},"First Name",-1),he=e("div",{class:"invalid-feedback"},"Please enter first name.",-1),_e={class:"mb-3"},pe=e("label",{for:"lname",class:"form-label"},"Last Name",-1),ve={class:"invalid-feedback"},be={class:"mb-3"},Ce=e("label",{for:"email",class:"form-label"},"Email",-1),ge={class:"invalid-feedback"},ke={class:"mb-3"},xe=e("label",{for:"phone",class:"form-label"},"Phone",-1),ye={class:"invalid-feedback"},we={class:"mb-3"},Ne=e("label",{for:"address",class:"form-label"},"Address",-1),De={class:"invalid-feedback"},Se=e("label",{for:"other_details",class:"form-label"},"Other Details",-1),Le={class:"invalid-feedback"},Pe={class:"modal-footer"},Te={class:"hstack gap-2 justify-content-end"},Ve={key:0,class:"spinner-border text-success",role:"status"},Ae=e("span",{class:"sr-only"},"Loading...",-1),Ee=[Ae],Me={type:"submit",class:"btn btn-success is-loading"},Fe=q({__name:"Index",props:{contacts:Object},setup(L){const y=r(null);let _;const i=r([]);let u=L;const p=r(!1),P=()=>{p.value?R():M()};let s=D({id:null,fname:null,lname:null,email:null,phone:r(),address:null,other_details:null}),w=D({id:null});r(!1);const d=r(!1),T=a=>{p.value=!0,d.value=!0,s.id=a.cells[0].data,s.fname=a.cells[1].data,s.lname=a.cells[2].data,s.phone=a.cells[4].data,s.email=a.cells[5].data,s.address=a.cells[6].data,s.other_details=a.cells[7].data},N=()=>{d.value=!1},v=a=>a.map(t=>[t.id,t.fname,t.lname,t.fname+" "+t.lname,t.phone,t.email,t.address,t.other_details,j(t.created_at),t.id]);O(()=>{const a=v(u.contacts);_=new Q({columns:[{id:"checkboxCol",width:"40px",name:C("input",{type:"checkbox",className:"form-check-input",onChange:t=>E(t)}),align:"center",formatter:(t,n)=>C("input",{type:"checkbox",className:"form-check-input",onClick:l=>A(l,n)}),sort:!1},{id:"fnameColumn",name:"fname",hidden:!0},{id:"lnameColumn",name:"lname",hidden:!0},{id:"nameColumn",name:"Name"},{id:"phoneColumn",name:"Phone"},{id:"emailColumn",name:"Email"},{id:"addressColumn",name:"Address"},{id:"other_details",name:"other_details",hidden:!0},{id:"createColumn",name:"Created Date"},{id:"actionsColumn",name:"Actions",align:"center",width:"75px",formatter:(t,n)=>C("a",{href:"javascript:void(0);",className:"text-muted",onClick:()=>T(n)},[C("i",{className:"ri-pencil-fill fs-16"})]),sort:!1}],sort:!1,theme:"mermaid",search:!0,pagination:{limit:10},data:function(){return new Promise(function(t){setTimeout(function(){t(a)},2e3)})}}).render(y.value)});const V=()=>{d.value=!0,p.value=!1},A=(a,t)=>{if(a.target.checked)i.value.push(t.cells[0].data);else{const n=i.value.indexOf(t.cells[0].data);n!==-1&&i.value.splice(n,1)}},E=a=>{const t=a.target.checked;i.value=t?u.contacts.map(l=>l.id):[],document.querySelectorAll(".form-check-input").forEach(l=>{l.checked=t})},M=()=>{s.post("/contact/store",{onStart:()=>{},onSuccess:()=>{const a=v(u.contacts);d.value=!1,_.updateConfig({data:function(){return new Promise(function(t){setTimeout(function(){t(a)},1e3)})}}).forceRender(),s.reset()}})},R=()=>{s.post("/contact/"+s.id,{onStart:()=>{},onSuccess:()=>{const a=v(u.contacts);d.value=!1,_.updateConfig({data:function(){return new Promise(function(t){setTimeout(function(){t(a)},1e3)})}}).forceRender(),s.reset()}})},U=()=>{w.id=i,w.delete("/contact/delete",{id:i.value,onSuccess:()=>{const a=v(u.contacts);_.updateConfig({data:function(){return new Promise(function(t){setTimeout(function(){t(a)},1e3)})}}).forceRender()}})},B=F(()=>p.value?"Edit Contact":"Add Contact");function j(a){const t=new Date(a),n={month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0};return t.toLocaleDateString("en-US",n)}return(a,t)=>{const n=H("phone-input");return b(),I(J,null,{default:S(()=>[g(o(z),{title:"Contact List"},{default:S(()=>[W]),_:1}),g(K,{title:"Contact",pageTitle:"Dashboard"}),e("div",X,[e("div",Y,[e("div",$,[e("div",ee,[e("div",te,[se,e("div",ae,[e("div",oe,[i.value.length>0?(b(),k("button",{key:0,class:"btn btn-soft-danger",onClick:U},ne)):x("",!0),e("button",{type:"button",class:"btn btn-success add-btn",onClick:V},[ie,Z(" Add New")])])])])]),e("div",{class:"card-body",ref_key:"gridContainer",ref:y},null,512)])])]),d.value?(b(),k("div",{key:0,class:c(["modal fade",{show:d.value}]),tabindex:"-1",role:"dialog"},[e("div",de,[e("div",re,[e("div",{class:"modal-header bg-light p-3"},[ce,e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:N})]),e("form",{class:"tablelist-form",autocomplete:"off",onSubmit:G(P,["prevent"])},[e("div",me,[e("div",ue,[fe,f(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>o(s).fname=l),id:"fname",type:"text",class:c(["form-control",{"is-invalid":o(s).errors.fname}]),placeholder:"Enter First Name",required:""},null,2),[[h,o(s).fname]]),he]),e("div",_e,[pe,f(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>o(s).lname=l),id:"lname",type:"text",class:c(["form-control",{"is-invalid":o(s).errors.lname}]),placeholder:"Enter Last Name",required:""},null,2),[[h,o(s).lname]]),e("div",ve,m(o(s).errors.lname),1)]),e("div",be,[Ce,f(e("input",{"onUpdate:modelValue":t[2]||(t[2]=l=>o(s).email=l),id:"email",type:"email",class:c(["form-control",{"is-invalid":o(s).errors.email}]),placeholder:"Enter email"},null,2),[[h,o(s).email]]),e("div",ge,m(o(s).errors.email),1)]),e("div",ke,[xe,g(n,{onCountry:t[3]||(t[3]=l=>a.country=l)}),e("div",ye,m(o(s).errors.phone),1)]),e("div",we,[Ne,f(e("textarea",{class:c(["form-control",{"is-invalid":o(s).errors.address}]),"onUpdate:modelValue":t[4]||(t[4]=l=>o(s).address=l),id:"address",rows:"2"},null,2),[[h,o(s).address]]),e("div",De,m(o(s).errors.address),1)]),e("div",null,[Se,f(e("textarea",{class:c(["form-control",{"is-invalid":o(s).errors.other_details}]),"onUpdate:modelValue":t[5]||(t[5]=l=>o(s).other_details=l),id:"other_details",rows:"3"},null,2),[[h,o(s).other_details]]),e("div",Le,m(o(s).errors.other_details),1)])]),e("div",Pe,[e("div",Te,[e("button",{type:"button",class:"btn btn-light",onClick:N},"Close"),o(s).processing?(b(),k("div",Ve,Ee)):x("",!0),e("button",Me,m(B.value),1)])])],32)])])],2)):x("",!0)]),_:1})}}});export{Fe as default};