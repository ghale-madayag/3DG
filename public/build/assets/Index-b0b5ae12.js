import{s as I,b as c,T as B,x as Y,m as z,r as Z,o as k,c as G,w as P,a as w,u as a,Z as J,e,d as S,g as D,h as K,j as Q,l as u,y as _,n as m,t as f,R as W}from"./app-6ef5fb23.js";import{L as X}from"./main-7988b907.js";import{P as $}from"./page-header-537b36d1.js";import{L as ee,w as x}from"./mermaid-cf784c66.js";import{S as te}from"./sweetalert2.min-ec1096ae.js";import"./logo-dark-d94ba77b.js";import"./_plugin-vue_export-helper-c27b6911.js";const se=e("meta",{name:"viewport",content:"your content"},null,-1),oe={class:"row"},ae={class:"col-lg-12"},le={class:"card"},ne={class:"card-header border-bottom-dashed"},ie={class:"row g-4 align-items-center"},de=e("div",{class:"col-sm"},[e("div",null,[e("h5",{class:"card-title mb-0"},"User List")])],-1),re={class:"col-sm-auto"},ce={class:"d-flex flex-wrap align-items-start gap-2"},me=e("i",{class:"ri-delete-bin-2-line"},null,-1),ue=[me],fe=e("i",{class:"ri-add-line align-bottom me-1"},null,-1),he={class:"modal-dialog modal-dialog-centered"},_e={class:"modal-content"},pe=e("h5",{class:"modal-title"},null,-1),ve={class:"modal-body"},be={class:"mb-3"},ge=e("label",{for:"fname",class:"form-label"},"First Name",-1),Ce=e("div",{class:"invalid-feedback"},"Please enter first name.",-1),ke={class:"mb-3"},xe=e("label",{for:"lname",class:"form-label"},"Last Name",-1),ye={class:"invalid-feedback"},we={class:"mb-3"},Se=e("label",{for:"email",class:"form-label"},"Email",-1),De=["disabled"],Ne={class:"invalid-feedback"},Ae={class:"mb-3"},Be=e("label",{for:"phone",class:"form-label"},"Phone",-1),Pe={class:"invalid-feedback"},Ue={class:"mb-3"},Ve=e("label",{for:"address",class:"form-label"},"Address",-1),Le={class:"invalid-feedback"},Re={class:"mb-3"},Te=e("label",{for:"other_details",class:"form-label"},"Other Details",-1),Me={class:"invalid-feedback"},Ee=e("label",{for:"role"},"Select Role",-1),je=e("option",{selected:""},"Select Role",-1),qe=e("option",{value:"contact"},"Contact Person",-1),He=e("option",{value:"client"},"Client",-1),Oe=e("option",{value:"agent"},"Agent",-1),Fe=e("option",{value:"staff"},"Staff",-1),Ie=e("option",{value:"administrator"},"Administrator",-1),Ye=[je,qe,He,Oe,Fe,Ie],ze={class:"modal-footer"},Ze={class:"hstack gap-2 justify-content-end"},Ge={key:0,class:"spinner-border text-success",role:"status"},Je=e("span",{class:"sr-only"},"Loading...",-1),Ke=[Je],Qe={type:"submit",class:"btn btn-success is-loading"},at=I({__name:"Index",props:{contacts:Object},setup(U){const y=c(),p=c(),N=c(null);let v;const i=c([]);let h=U;const b=c(!1),V=()=>{b.value?q():j()};let t=B({id:null,name:null,fname:null,lname:null,email:null,phone:null,address:null,other_details:null,roles:null}),g=B({id:null});c(!1);const r=c(!1),L=te.mixin({customClass:{confirmButton:"btn btn-primary mr-2",cancelButton:"btn btn-link",container:"modal-lesson"},buttonsStyling:!1}),R=o=>{b.value=!0,r.value=!0,console.log(o),t.id=o.cells[0].data,t.fname=o.cells[1].data,t.lname=o.cells[2].data,t.phone=o.cells[4].data,t.email=o.cells[5].data,t.address=o.cells[6].data,t.other_details=o.cells[7].data,t.roles=o.cells[9].data,p.value=t.phone},A=()=>{r.value=!1,t.reset(),p.value=null},C=o=>o.map(s=>[s.id,s.fname,s.lname,s.fname+" "+s.lname,s.phone,s.email,s.address,s.other_details,F(s.created_at),s.roles[0].name]);Y(()=>{const o=C(h.contacts);console.log(o),v=new ee({columns:[{id:"checkboxCol",width:"40px",name:x("input",{type:"checkbox",className:"form-check-input",onChange:s=>E(s)}),align:"center",formatter:(s,l)=>x("input",{type:"checkbox",className:"form-check-input",onClick:d=>M(d,l)}),sort:!1},{id:"fnameColumn",name:"fname",hidden:!0},{id:"lnameColumn",name:"lname",hidden:!0},{id:"nameColumn",name:"Name"},{id:"phoneColumn",name:"Phone"},{id:"emailColumn",name:"Email"},{id:"addressColumn",name:"Address"},{id:"other_details",name:"other_details",hidden:!0},{id:"createColumn",name:"Created Date"},{name:"Role"},{id:"actionsColumn",name:"Actions",align:"center",width:"75px",formatter:(s,l)=>x("a",{href:"javascript:void(0);",className:"text-muted",onClick:()=>R(l)},[x("i",{className:"ri-pencil-fill fs-16"})]),sort:!1}],sort:!1,theme:"mermaid",search:!0,pagination:{limit:10},data:function(){return new Promise(function(s){setTimeout(function(){s(o)},2e3)})}}).render(N.value)});const T=()=>{r.value=!0,b.value=!1},M=(o,s)=>{if(o.target.checked)i.value.push(s.cells[0].data);else{const l=i.value.indexOf(s.cells[0].data);l!==-1&&i.value.splice(l,1)}},E=o=>{const s=o.target.checked;i.value=s?h.contacts.map(d=>d.id):[],document.querySelectorAll(".form-check-input").forEach(d=>{d.checked=s})},j=()=>{t.phone=y.value,t.name=t.fname+" "+t.lname,t.post("/user/store",{onStart:()=>{},onSuccess:()=>{const o=C(h.contacts);r.value=!1,v.updateConfig({data:function(){return new Promise(function(s){setTimeout(function(){s(o)},1e3)})}}).forceRender(),t.reset()}})},q=()=>{t.phone=y.value,t.name=t.fname+" "+t.lname,t.post("/user/"+t.id,{onStart:()=>{},onSuccess:()=>{const o=C(h.contacts);r.value=!1,v.updateConfig({data:function(){return new Promise(function(s){setTimeout(function(){s(o)},1e3)})}}).forceRender(),t.reset()}})},H=()=>{L.fire({title:"Are you sure?",text:"Are you Sure You want to Delete this data ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(o=>{o.isConfirmed&&(g.id=i,console.log(g.id),g.delete("/contact/delete",{id:i.value,onSuccess:()=>{const s=C(h.contacts);v.updateConfig({data:function(){return new Promise(function(l){setTimeout(function(){l(s)},1e3)})}}).forceRender(),g.reset(),i.value=[]}}))})},O=z(()=>b.value?"Edit Contact":"Add Contact");function F(o){const s=new Date(o),l={month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0};return s.toLocaleDateString("en-US",l)}return(o,s)=>{const l=Z("phone-input");return k(),G(X,null,{default:P(()=>{var d;return[w(a(J),{title:"User List"},{default:P(()=>[se]),_:1}),w($,{title:"User",pageTitle:"Dashboard"}),e("div",oe,[e("div",ae,[e("div",le,[e("div",ne,[e("div",ie,[de,e("div",re,[e("div",ce,[((d=i.value)==null?void 0:d.length)>0?(k(),S("button",{key:0,class:"btn btn-soft-danger",onClick:H},ue)):D("",!0),e("button",{type:"button",class:"btn btn-success add-btn",onClick:T},[fe,K(" Add New")])])])])]),e("div",{class:"card-body",ref_key:"gridContainer",ref:N},null,512)])])]),r.value?(k(),S("div",{key:0,class:m(["modal fade",{show:r.value}]),tabindex:"-1",role:"dialog"},[e("div",he,[e("div",_e,[e("div",{class:"modal-header bg-light p-3"},[pe,e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:A})]),e("form",{class:"tablelist-form",autocomplete:"off",onSubmit:Q(V,["prevent"])},[e("div",ve,[e("div",be,[ge,u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>a(t).fname=n),id:"fname",type:"text",class:m(["form-control",{"is-invalid":a(t).errors.name}]),placeholder:"Enter First Name",required:""},null,2),[[_,a(t).fname]]),Ce]),e("div",ke,[xe,u(e("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>a(t).lname=n),id:"lname",type:"text",class:m(["form-control",{"is-invalid":a(t).errors.lname}]),placeholder:"Enter Last Name",required:""},null,2),[[_,a(t).lname]]),e("div",ye,f(a(t).errors.lname),1)]),e("div",we,[Se,u(e("input",{"onUpdate:modelValue":s[2]||(s[2]=n=>a(t).email=n),id:"email",type:"email",class:m(["form-control",{"is-invalid":a(t).errors.email}]),disabled:p.value,placeholder:"Enter email"},null,10,De),[[_,a(t).email]]),e("div",Ne,f(a(t).errors.email),1)]),e("div",Ae,[Be,w(l,{defaultCountry:"PH",onPhone:s[3]||(s[3]=n=>y.value=n),value:p.value,class:m({"is-invalid":a(t).errors.phone})},null,8,["value","class"]),e("div",Pe,f(a(t).errors.phone),1)]),e("div",Ue,[Ve,u(e("textarea",{class:m(["form-control",{"is-invalid":a(t).errors.address}]),"onUpdate:modelValue":s[4]||(s[4]=n=>a(t).address=n),id:"address",rows:"2"},null,2),[[_,a(t).address]]),e("div",Le,f(a(t).errors.address),1)]),e("div",Re,[Te,u(e("textarea",{class:m(["form-control",{"is-invalid":a(t).errors.other_details}]),"onUpdate:modelValue":s[5]||(s[5]=n=>a(t).other_details=n),id:"other_details",rows:"3"},null,2),[[_,a(t).other_details]]),e("div",Me,f(a(t).errors.other_details),1)]),e("div",null,[Ee,u(e("select",{class:"form-select mb-3","onUpdate:modelValue":s[6]||(s[6]=n=>a(t).roles=n),"aria-label":"Default select example"},Ye,512),[[W,a(t).roles]])])]),e("div",ze,[e("div",Ze,[e("button",{type:"button",class:"btn btn-light",onClick:A},"Close"),a(t).processing?(k(),S("div",Ge,Ke)):D("",!0),e("button",Qe,f(O.value),1)])])],32)])])],2)):D("",!0)]}),_:1})}}});export{at as default};