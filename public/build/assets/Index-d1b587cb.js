import{b as l,T as L,x as B,O as S,o as g,c as N,w as d,a as m,u as b,Z as A,e as s,d as D,g as T,h as O,i as R}from"./app-6a7dc968.js";import{L as P}from"./main-efa8ec72.js";import{P as V}from"./page-header-980f0e6a.js";import{L as z,w as c}from"./mermaid-cf784c66.js";import{S as j}from"./sweetalert2.min-23656eb7.js";import"./logo-dark-d94ba77b.js";import"./_plugin-vue_export-helper-c27b6911.js";const q=s("meta",{name:"viewport",content:"your content"},null,-1),E={class:"row"},I={class:"col-lg-12"},U={class:"card"},Y={class:"card-header border-bottom-dashed"},G={class:"row g-4 align-items-center"},H=s("div",{class:"col-sm"},[s("div",null,[s("h5",{class:"card-title mb-0"},"Land List")])],-1),M={class:"col-sm-auto"},Z={class:"d-flex flex-wrap align-items-start gap-2"},F=s("i",{class:"ri-delete-bin-2-line"},null,-1),J=[F],K=s("i",{class:"ri-add-line align-bottom me-1"},null,-1),se={__name:"Index",props:{lands:Object},setup(k){const u=l(null);let f;const a=l([]);let i=k,h=L({id:null});l(!1);const p=j.mixin({customClass:{confirmButton:"btn btn-primary mr-2",cancelButton:"btn btn-link",container:"modal-lesson"},buttonsStyling:!1}),_=t=>t.map(e=>[e.id,e.name,e.size+" Sqm",e.address+", "+r(e.barangay)+", "+r(e.municipality)+", "+r(e.province)+", "+e.region,e.seller.fname+" "+e.seller.lname,e.owner.fname+" "+e.owner.lname,v(e.created_at),e.slug]);B(()=>{const t=_(i.lands);f=new z({columns:[{id:"checkboxCol",width:"40px",name:c("input",{type:"checkbox",className:"form-check-input",onChange:e=>y(e)}),align:"center",formatter:(e,n)=>c("input",{type:"checkbox",className:"form-check-input",onClick:o=>C(o,n)}),sort:!1},{name:"Name"},{name:"Size"},{name:"Groundbreaking"},{name:"Address"},{name:"Seller"},{name:"Owner"},{name:"Created Date"},{id:"actionsColumn",name:"Actions",align:"center",width:"75px",formatter:(e,n)=>c("a",{href:"javascript:void(0);",className:"text-muted",onClick:()=>w(n)},[c("i",{className:"ri-pencil-fill fs-16"})]),sort:!1}],sort:!1,theme:"mermaid",search:!0,pagination:{limit:10},data:function(){return new Promise(function(e){setTimeout(function(){e(t)},2e3)})}}).render(u.value)});const v=t=>{const e=new Date(t),n={month:"long",day:"numeric",year:"numeric"};return/\d{2}:\d{2}/.test(t)&&(n.hour="numeric",n.minute="numeric",n.hour12=!0),e.toLocaleDateString("en-US",n)},r=t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),w=t=>{console.log(t),S.visit("/land/"+t.cells[7].data+"/edit")},x=()=>{p.fire({title:"Are you sure?",text:"Are you Sure You want to Delete this data ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&(h.id=a,h.delete("/land/delete",{id:a.value,onSuccess:()=>{p.fire("Deleted!","The data has been deleted.","success");const e=_(i.lands);f.updateConfig({data:function(){return new Promise(function(n){setTimeout(function(){n(e)},1e3)})}}).forceRender()}}))})},C=(t,e)=>{if(t.target.checked)a.value.push(e.cells[0].data);else{const n=a.value.indexOf(e.cells[0].data);n!==-1&&a.value.splice(n,1)}},y=t=>{const e=t.target.checked;a.value=e?i.lands.map(o=>o.id):[],document.querySelectorAll(".form-check-input").forEach(o=>{o.checked=e})};return(t,e)=>(g(),N(P,null,{default:d(()=>[m(b(A),{title:"Land List"},{default:d(()=>[q]),_:1}),m(V,{title:"Land List",pageTitle:"Dashboard"}),s("div",E,[s("div",I,[s("div",U,[s("div",Y,[s("div",G,[H,s("div",M,[s("div",Z,[a.value.length>0?(g(),D("button",{key:0,class:"btn btn-soft-danger",onClick:x},J)):T("",!0),m(b(R),{href:"/land/create",class:"btn btn-success add-btn"},{default:d(()=>[K,O(" Add New")]),_:1})])])])]),s("div",{class:"card-body",ref_key:"gridContainer",ref:u},null,512)])])])]),_:1}))}};export{se as default};