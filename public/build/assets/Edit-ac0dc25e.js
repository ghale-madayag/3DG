import{o as R,d as te,t as se,n as j,u as o,b as c,T as ae,y as x,s as C,c as L,w as z,a as d,Z as oe,e,g as ie,h as ne,i as ce,l as S,x as V}from"./app-6b88d6f8.js";import{L as re}from"./main-960a6d4e.js";import{P as de}from"./page-header-f36c3911.js";import{$ as ue,C as me,s as g}from"./default-796eeac0.js";import{S as pe}from"./sweetalert2.min-e1f9f419.js";import"./logo-dark-d94ba77b.js";import"./_plugin-vue_export-helper-c27b6911.js";const ve={__name:"AlertMsg",props:{type:String,msg:String},setup(f){let u=f;const D=(()=>{switch(u.type){case"success":return"alert-success text-success";case"info":return"alert-info text-info";case"warning":return"alert-warning text-warning";case"danger":return"alert-danger text-danger";default:return""}})();return(U,P)=>(R(),te("div",{class:j(["mb-4","alert",o(D)])},se(f.msg),3))}},fe=e("meta",{name:"viewport",content:"your content"},null,-1),be={class:"row mb-3"},ge={class:"col-lg-8"},_e=e("i",{class:"ri-add-line align-bottom me-1"},null,-1),he={class:"row"},ye={class:"col-lg-8"},we={class:"card"},xe={class:"card-body"},Se={class:"mb-3"},Ve=e("label",{class:"form-label",for:"name"},"Land Name",-1),je=e("div",{class:"invalid-feedback"},"The land name is required",-1),De={class:"mb-3"},ke=e("label",{class:"form-label",for:"description"},"Description",-1),ze={class:"row"},Re={class:"col-lg-4"},Ue={class:"mb-3 mb-lg-0"},Pe=e("label",{for:"size",class:"form-label"},"Size / Sqm",-1),Ce={class:"col-lg-4"},Le={class:"mb-3 mb-lg-0"},Te=e("label",{for:"groundbreaking",class:"form-label"},"Groundbreaking Date",-1),Oe={class:"card"},Be=e("div",{class:"card-header"},[e("h5",{class:"card-title mb-0"},"Attached files")],-1),Me={class:"card-body"},Ee=e("p",{class:"text-muted"},"Add Attached files here.",-1),qe={class:"col-lg-4"},Ne={class:"card"},Ae=e("div",{class:"card-header"},[e("h5",{class:"card-title mb-0"},"Location Details")],-1),Fe={class:"card-body"},$e={class:"form-group"},Ie=e("label",{class:"form-label"},"Region",-1),He={class:"form-group"},We=e("label",{class:"form-label"},"Province",-1),Ye={class:"form-group"},Ge=e("label",{class:"form-label"},"Municipality",-1),Qe={class:"form-group"},Ze=e("label",{class:"form-label"},"Barangay",-1),Je={class:"mb-3"},Ke=e("label",{for:"address",class:"form-label"},"Blk/Lot/Street/House No.",-1),Xe={class:"card"},el=e("div",{class:"card-header"},[e("h5",{class:"card-title mb-0"},"Seller & Owner Details")],-1),ll={class:"card-body"},tl={class:"mb-3"},sl=e("label",{for:"seller",class:"form-label"},"Seller",-1),al=e("div",{class:"invalid-feedback"},"The seller is required",-1),ol={class:"mb-3"},il=e("label",{for:"owner",class:"form-label"},"Owner",-1),nl=e("div",{class:"invalid-feedback"},"The owner is required",-1),cl=`
    <ul class="list-unstyled mb-0" id="dropzone-preview">
        <li class="mt-2" id="dropzone-preview-list">
            <!-- This is used as the file preview template -->
            <div class="border rounded">
                <div class="d-flex p-2">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm rounded">
                            <img src="#" alt="Project-Image" data-dz-thumbnail class="img-fluid rounded d-block" />
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <div class="pt-1">
                            <h5 class="fs-14 mb-1" data-dz-name>&nbsp;</h5>
                            <p class="fs-13 text-muted mb-0" data-dz-size></p>
                            <strong class="error text-danger" data-dz-errormessage></strong>
                        </div>
                    </div>
                    <div class="flex-shrink-0 ms-3">
                        <button data-dz-remove class="btn btn-sm btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    `,bl={__name:"Edit",props:{land:Object,contacts:Object,message:String},setup(f){const u=c(null);let D=c();c(null);let U=f;const P=pe.mixin({customClass:{confirmButton:"btn btn-primary mr-2",cancelButton:"btn btn-link",container:"modal-lesson"},buttonsStyling:!1});let{name:T,slug:O,description:B,size:M,ground_breaking:E,attachments:y,region:q,province:N,municipality:A,barangay:F,address:$,seller_id:I,owner_id:H}=U.land,s=ae({name:T,slug:O,description:B,size:M,ground_breaking:E,attachments:y,region:q,province:N,municipality:A,barangay:F,address:$,seller_id:I,owner_id:H,oldattachments:[]});const b=c(),m=c(s.region),p=c(s.province),r=c(s.municipality),v=c(s.barangay),_=c(null),h=c(null),k=c(null),W=async()=>{try{const a=await fetch("/storage/address.json");if(!a.ok)throw new Error("Failed to fetch data");const l=await a.json(),t=Object.keys(l).map(i=>({value:l[i].region_name,label:l[i].region_name,province_list:l[i].province_list}));b.value=t,b.value.find(i=>i.value===m.value)&&s.region!==null&&(m.value=s.region,s.province!==null&&(p.value=s.province,s.municipality!==null&&(r.value=s.municipality,s.barangay!==null&&(v.value=s.barangay)))),Y()}catch(a){console.error("Error fetching data:",a)}},Y=()=>{if(m.value!==null&&b.value!==null){const a=b.value.find(l=>l.value===m.value);if(s.region=m.value,a&&typeof a.province_list=="object"){const l=Object.keys(a.province_list).map(t=>({value:t,label:t,municipality_list:a.province_list[t]}));_.value=l,G()}}},G=()=>{if(p.value!==null){const a=_.value.find(l=>l.value===p.value);if(s.province=p.value,a&&typeof a.municipality_list=="object"){const l=Object.keys(a.municipality_list.municipality_list).map(t=>({value:t,label:t,barangay_list:a.municipality_list.municipality_list[t].barangay_list}));h.value=l,Q()}}},Q=()=>{if(r.value!==null){const a=h.value.find(l=>l.value===r.value);if(s.municipality=r.value,a&&(Object.values(a.barangay_list),typeof a.barangay_list=="object")){const l=a.barangay_list.map(t=>({value:t,label:t}));k.value=l,X()}}};x(m,(a,l)=>{if(a!==null&&b.value!==null){Z();const t=b.value.find(n=>n.value===a);if(s.region=a,t&&typeof t.province_list=="object"){const n=Object.keys(t.province_list).map(i=>({value:i,label:i,municipality_list:t.province_list[i]}));_.value=n}}}),x(p,(a,l)=>{if(a!==null){J();const t=_.value.find(n=>n.value===a);if(s.province=a,t&&typeof t.municipality_list=="object"){const n=Object.keys(t.municipality_list.municipality_list).map(i=>({value:i,label:i,barangay_list:t.municipality_list.municipality_list[i].barangay_list}));h.value=n}}}),x(r,(a,l)=>{if(a!==null){K();const t=h.value.find(n=>n.value===a);if(s.municipality=a,t&&(Object.values(t.barangay_list),typeof t.barangay_list=="object")){const n=t.barangay_list.map(i=>({value:i,label:i}));k.value=n}}}),x(v,(a,l)=>{a!==null&&(s.barangay=a)});const Z=()=>{p.value=null,r.value=null,v.value=null},J=()=>{r.value=null,v.value=null},K=()=>{v.value=null},X=()=>{v.value!=null&&(s.barangay=v.value)},ee={altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"};C(()=>{if(u.value!==null){let a=new ue(u.value,{autoProcessQueue:!1,previewTemplate:cl,uploadMultiple:!0,url:"http://localhost:3011/file/",method:"POST",createImageThumbnails:!0,acceptedFiles:"image/jpeg,image/png,image/jpg,.pdf,.docs,.docx",previewsContainer:u.value.parentElement.querySelector(".preview-container"),init:function(){this.on("addedfile",function(l){s.attachments.push(l),l.type&&l.type.startsWith&&!l.type.startsWith("image")&&u.value.parentElement.querySelectorAll("[data-dz-thumbnail]").forEach(function(n){n.src="/storage/assets/bx-file.svg"})}),this.on("removedfile",function(l){s.attachments.splice(l,1),s.oldattachments.push(l.name)})}});u.value.querySelector(".dz-default")&&(u.value.querySelector(".dz-default").innerHTML=`
                    <div style="display: flex; justify-content: center;">
                        <i class="display-4 text-muted ri-upload-cloud-2-fill"></i>
                    </div>
                    <small style="display: flex; justify-content: center;" class="form-text text-muted mb-2"><strong>Drop files here or click to upload.</strong></small>
                `);for(let l=0;l<y.length;l++){const t=y[l].id,n=y[l].file_name,i={id:t,name:n},w=n.split(".").pop().toLowerCase();w==="jpg"||w==="jpeg"||w==="png"||w==="gif"?(i.size="1100",i.dataURL="/storage/land/"+encodeURIComponent(n)):(i.dataURL="/storage/assets/bx-file.svg",i.size="1100"),a.emit("addedfile",i),a.emit("thumbnail",i,i.dataURL),a.emit("complete",i)}}}),C(W);const le=()=>{console.log(s.slug),s.post("/land/"+s.slug,{onStart:()=>{},onSuccess:()=>{P.fire("Updated!","The data has been update.","success"),s.reset()},preserveScroll:!0})};return(a,l)=>(R(),L(re,null,{default:z(()=>[d(o(oe),{title:"Edit Land"},{default:z(()=>[fe]),_:1}),d(de,{title:"Edit Land",pageTitle:"Dashboard"}),e("div",be,[e("div",ge,[f.message?(R(),L(ve,{key:0,type:"success",msg:f.message},null,8,["msg"])):ie("",!0),d(o(ce),{href:"/land/create",class:"btn btn-success w-sm"},{default:z(()=>[_e,ne(" Add New")]),_:1})])]),e("div",he,[e("div",ye,[e("div",we,[e("div",xe,[e("div",Se,[Ve,S(e("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>o(s).name=t),class:j([{"is-invalid":o(s).errors.name},"form-control"]),type:"text"},null,2),[[V,o(s).name]]),je]),e("div",De,[ke,S(e("textarea",{"onUpdate:modelValue":l[1]||(l[1]=t=>o(s).description=t),class:"form-control",id:"description",rows:"5"},`
                           `,512),[[V,o(s).description]])]),e("div",ze,[e("div",Re,[e("div",Ue,[Pe,S(e("input",{"onUpdate:modelValue":l[2]||(l[2]=t=>o(s).size=t),type:"text",class:"form-control",id:"size"},null,512),[[V,o(s).size]])])]),e("div",Ce,[e("div",Le,[Te,d(o(me),{modelValue:o(s).ground_breaking,"onUpdate:modelValue":l[3]||(l[3]=t=>o(s).ground_breaking=t),class:"form-control",config:ee},null,8,["modelValue"])])])])])]),e("div",Oe,[Be,e("div",Me,[e("div",null,[Ee,e("div",{ref_key:"dropRef",ref:u,id:"drop",class:"dropzone custom-dropzone",style:{"justify-content":"center"}},null,512),e("div",{class:"preview-container",ref_key:"dropPreview",ref:D},null,512)])])]),e("div",{class:"text-end mb-4"},[e("button",{type:"submit",class:"btn btn-success w-sm",onClick:le},"Update")])]),e("div",qe,[e("div",Ne,[Ae,e("div",Fe,[e("div",$e,[Ie,d(o(g),{class:"form-select mb-3",modelValue:m.value,"onUpdate:modelValue":l[4]||(l[4]=t=>m.value=t),placeholder:"Select Region",options:b.value,searchable:!0,"track-by":"label"},null,8,["modelValue","options"])]),e("div",He,[We,d(o(g),{class:"form-select mb-3",modelValue:p.value,"onUpdate:modelValue":l[5]||(l[5]=t=>p.value=t),placeholder:"Select Province",searchable:!0,"track-by":"label",options:m.value?_.value:[]},null,8,["modelValue","options"])]),e("div",Ye,[Ge,d(o(g),{class:"form-select mb-3",modelValue:r.value,"onUpdate:modelValue":l[6]||(l[6]=t=>r.value=t),placeholder:"Select Municipality",searchable:!0,"track-by":"label",options:p.value?h.value:[]},null,8,["modelValue","options"])]),e("div",Qe,[Ze,d(o(g),{class:"form-select mb-3",modelValue:v.value,"onUpdate:modelValue":l[7]||(l[7]=t=>v.value=t),placeholder:"Select Barangay",searchable:!0,"track-by":"label",options:r.value?k.value:[]},null,8,["modelValue","options"])]),e("div",Je,[Ke,S(e("textarea",{"onUpdate:modelValue":l[8]||(l[8]=t=>o(s).address=t),class:"form-control",id:"address",rows:"5"},`
                           `,512),[[V,o(s).address]])])])]),e("div",Xe,[el,e("div",ll,[e("div",tl,[sl,d(o(g),{mode:"single",modelValue:o(s).seller_id,"onUpdate:modelValue":l[9]||(l[9]=t=>o(s).seller_id=t),placeholder:"Select Seller","close-on-select":!0,searchable:!0,options:f.contacts,class:j({"is-invalid":o(s).errors.seller_id})},null,8,["modelValue","options","class"]),al]),e("div",ol,[il,d(o(g),{mode:"single",modelValue:o(s).owner_id,"onUpdate:modelValue":l[10]||(l[10]=t=>o(s).owner_id=t),placeholder:"Select Owner","close-on-select":!0,searchable:!0,options:f.contacts,class:j({"is-invalid":o(s).errors.owner_id})},null,8,["modelValue","options","class"]),nl])])])])])]),_:1}))}};export{bl as default};