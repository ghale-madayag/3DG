import{A as R,B as De,b as k,T as se,z as te,O as ae,x as Oe,o as y,c as K,w as U,a as O,u as g,Z as Ve,e,t as i,h,i as le,d as T,f as oe,F as ne,j as ie,g as F,l as ce,y as $e,n as de,C as Pe}from"./app-976f9ee5.js";import{L as Me}from"./main-f512f018.js";import{_ as re}from"./AlertMsg-a1510749.js";import{S as Ie}from"./sweetalert2.min-4d97f9c3.js";import{L as X,w as o}from"./mermaid-cf784c66.js";import{s as H}from"./default-951051e0.js";import"./logo-dark-d94ba77b.js";import"./_plugin-vue_export-helper-c27b6911.js";function Fe(s){var c=typeof s;return s!=null&&(c=="object"||c=="function")}var ge=Fe,Ae=typeof R=="object"&&R&&R.Object===Object&&R,Ge=Ae,ze=Ge,Ee=typeof self=="object"&&self&&self.Object===Object&&self,Re=ze||Ee||Function("return this")(),pe=Re,Ue=pe,He=function(){return Ue.Date.now()},We=He,qe=/\s/;function Ke(s){for(var c=s.length;c--&&qe.test(s.charAt(c)););return c}var Xe=Ke,Ze=Xe,Je=/^\s+/;function Qe(s){return s&&s.slice(0,Ze(s)+1).replace(Je,"")}var Ye=Qe,es=pe,ss=es.Symbol,ke=ss,me=ke,ye=Object.prototype,ts=ye.hasOwnProperty,as=ye.toString,G=me?me.toStringTag:void 0;function ls(s){var c=ts.call(s,G),b=s[G];try{s[G]=void 0;var d=!0}catch{}var C=as.call(s);return d&&(c?s[G]=b:delete s[G]),C}var os=ls,ns=Object.prototype,is=ns.toString;function cs(s){return is.call(s)}var ds=cs,ue=ke,rs=os,ms=ds,us="[object Null]",hs="[object Undefined]",he=ue?ue.toStringTag:void 0;function bs(s){return s==null?s===void 0?hs:us:he&&he in Object(s)?rs(s):ms(s)}var vs=bs;function _s(s){return s!=null&&typeof s=="object"}var fs=_s,gs=vs,ps=fs,ks="[object Symbol]";function ys(s){return typeof s=="symbol"||ps(s)&&gs(s)==ks}var xs=ys,ws=Ye,be=ge,Cs=xs,ve=0/0,Ss=/^[-+]0x[0-9a-f]+$/i,Ts=/^0b[01]+$/i,js=/^0o[0-7]+$/i,Ns=parseInt;function Bs(s){if(typeof s=="number")return s;if(Cs(s))return ve;if(be(s)){var c=typeof s.valueOf=="function"?s.valueOf():s;s=be(c)?c+"":c}if(typeof s!="string")return s===0?s:+s;s=ws(s);var b=Ts.test(s);return b||js.test(s)?Ns(s.slice(2),b?2:8):Ss.test(s)?ve:+s}var Ls=Bs,Ds=ge,Z=We,_e=Ls,Os="Expected a function",Vs=Math.max,$s=Math.min;function Ps(s,c,b){var d,C,_,p,v,x,S=0,j=!1,N=!1,$=!0;if(typeof s!="function")throw new TypeError(Os);c=_e(c)||0,Ds(b)&&(j=!!b.leading,N="maxWait"in b,_=N?Vs(_e(b.maxWait)||0,c):_,$="trailing"in b?!!b.trailing:$);function P(r){var f=d,B=C;return d=C=void 0,S=r,p=s.apply(B,f),p}function z(r){return S=r,v=setTimeout(M,c),j?P(r):p}function u(r){var f=r-x,B=r-S,D=c-f;return N?$s(D,_-B):D}function w(r){var f=r-x,B=r-S;return x===void 0||f>=c||f<0||N&&B>=_}function M(){var r=Z();if(w(r))return E(r);v=setTimeout(M,u(r))}function E(r){return v=void 0,$&&d?P(r):(d=C=void 0,p)}function W(){v!==void 0&&clearTimeout(v),S=0,d=x=C=v=void 0}function q(){return v===void 0?p:E(Z())}function A(){var r=Z(),f=w(r);if(d=arguments,C=this,x=r,f){if(v===void 0)return z(x);if(N)return clearTimeout(v),v=setTimeout(M,c),P(x)}return v===void 0&&(v=setTimeout(M,c)),p}return A.cancel=W,A.flush=q,A}var Ms=Ps;const fe=De(Ms);const Is=e("meta",{name:"viewport",content:"Land Development"},null,-1),Fs={class:"row"},As={class:"col-lg-12"},Gs={class:"card mt-n4"},zs={class:"bg-primary-subtle"},Es={class:"card-body pb-0 px-4"},Rs={class:"row mb-3"},Us={class:"col-md"},Hs={class:"row align-items-center g-3"},Ws=e("div",{class:"col-md-auto"},[e("div",{class:"avatar-md"},[e("div",{class:"avatar-title bg-white rounded-circle"},[e("img",{src:"/storage/assets/home-heart-line.svg",alt:"",class:"avatar-xs"})])])],-1),qs={class:"col-md"},Ks={class:"fw-bold"},Xs={class:"hstack gap-3 flex-wrap"},Zs=e("i",{class:"ri-building-line align-bottom me-1"},null,-1),Js=e("div",{class:"vr"},null,-1),Qs={class:"fw-medium"},Ys=e("div",{class:"vr"},null,-1),et={class:"fw-medium"},st=e("div",{class:"vr"},null,-1),tt={class:"col-md-auto"},at={class:"hstack gap-1 flex-wrap"},lt={class:"dropdown"},ot=e("button",{class:"btn btn-icon btn-sm fs-22 text-primary dropdown",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("i",{class:"ri-equalizer-line"})],-1),nt={class:"dropdown-menu"},it=e("i",{class:"ri-pencil-fill text-muted me-2 align-bottom"},null,-1),ct=e("i",{class:"ri-eye-fill text-muted me-2 align-bottom"},null,-1),dt=e("ul",{class:"nav nav-tabs-custom border-bottom-0",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link fw-semibold","data-bs-toggle":"tab",href:"#overview",role:"tab"}," Overview ")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link active fw-semibold","data-bs-toggle":"tab",href:"#block",role:"tab"}," Block & Lot ")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link fw-semibold","data-bs-toggle":"tab",href:"#clients",role:"tab"}," Clients ")])],-1),rt={class:"row"},mt={class:"col-lg-12"},ut={class:"tab-content text-muted"},ht={class:"tab-pane fade",id:"overview",role:"tabpanel"},bt={class:"row"},vt={class:"col-xl-9 col-lg-8"},_t={class:"card"},ft={class:"card-body"},gt={class:"text-muted"},pt=e("h6",{class:"mb-3 fw-semibold text-uppercase"},"Description",-1),kt={class:"row"},yt={class:"col-lg-10 col-sm-6"},xt=["innerHTML"],wt={class:"pt-3 border-top border-top-dashed mt-4"},Ct={class:"row gy-5 mb-5"},St={class:"col-lg-2 col-sm-6"},Tt=e("p",{class:"mb-2 text-uppercase fw-medium"},"Size :",-1),jt={class:"fs-15 mb-0"},Nt={class:"col-lg-3 col-sm-6"},Bt=e("p",{class:"mb-2 text-uppercase fw-medium"},"Groundbreaking Date :",-1),Lt={class:"fs-15 mb-0"},Dt={class:"col-lg-6 col-sm-6"},Ot=e("p",{class:"mb-2 text-uppercase fw-medium"},"Address :",-1),Vt={class:"fs-15 mb-0"},$t={class:"pt-3 border-top border-top-dashed mt-4"},Pt=e("h6",{class:"mb-3 fw-semibold text-uppercase"},"Resources",-1),Mt={class:"row g-3"},It={class:"col-xxl-4 col-lg-6"},Ft={class:"border rounded border-dashed p-2"},At={class:"d-flex align-items-center"},Gt={class:"flex-shrink-0 me-3"},zt={class:"avatar-sm"},Et={class:"avatar-title bg-light text-black rounded fs-24"},Rt=["src"],Ut={key:1,class:"ri-attachment-line"},Ht={class:"flex-grow-1 overflow-hidden"},Wt={class:"fs-13 mb-1"},qt={href:"#",class:"text-body text-truncate d-block"},Kt={class:"flex-shrink-0 ms-2"},Xt=["href"],Zt=e("i",{class:"ri-download-2-line"},null,-1),Jt=[Zt],Qt={class:"col-xl-3 col-lg-4"},Yt={class:"card"},ea=e("div",{class:"card-header align-items-center d-flex border-bottom-dashed"},[e("h4",{class:"card-title mb-0 flex-grow-1"},"Seller")],-1),sa={class:"card-body"},ta={"data-simplebar":"",class:"mx-n3 px-3"},aa={class:"vstack gap-3"},la={class:"d-flex mb-4"},oa={class:"avatar-xs flex-shrink-0 me-3"},na={class:"avatar-title bg-danger-subtle text-danger rounded-circle"},ia={class:"flex-grow-1"},ca={class:"fs-15 mb-3"},da={class:"ps-1 vstack gap-3 mb-3"},ra=["href"],ma=e("i",{class:"ri-phone-fill"},null,-1),ua={class:"ps-1 vstack gap-3 mb-3"},ha=["href"],ba=e("i",{class:"ri-mail-fill"},null,-1),va={class:"ps-1 vstack gap-3"},_a={href:"#",class:"text-muted"},fa=e("i",{class:"ri-map-pin-fill"},null,-1),ga={class:"card"},pa=e("div",{class:"card-header align-items-center d-flex border-bottom-dashed"},[e("h4",{class:"card-title mb-0 flex-grow-1"},"Recent Owner")],-1),ka={class:"card-body"},ya={"data-simplebar":"",class:"mx-n3 px-3"},xa={class:"vstack gap-3"},wa={class:"d-flex mb-4"},Ca={class:"avatar-xs flex-shrink-0 me-3"},Sa={class:"avatar-title bg-primary-subtle text-primary rounded-circle"},Ta={class:"flex-grow-1"},ja={class:"fs-15 mb-3"},Na={class:"ps-1 vstack gap-3 mb-3"},Ba=["href"],La=e("i",{class:"ri-phone-fill"},null,-1),Da={class:"ps-1 vstack gap-3 mb-3"},Oa=["href"],Va=e("i",{class:"ri-mail-fill"},null,-1),$a={class:"ps-1 vstack gap-3"},Pa={href:"#",class:"text-muted"},Ma=e("i",{class:"ri-map-pin-fill"},null,-1),Ia={class:"tab-pane fade show active",id:"block",role:"tabpanel"},Fa={class:"row"},Aa={class:"col-xl-3 col-lg-4"},Ga={class:"card"},za=e("div",{class:"card-header"},[e("div",{class:"d-flex"},[e("div",{class:"flex-grow-1"},[e("h5",{class:"fs-16"},"Filter By:")])])],-1),Ea={class:"accordion accordion-flush filter-accordion"},Ra={class:"card-body border-bottom"},Ua=e("p",{class:"text-muted text-uppercase fs-12 fw-medium mb-2"},"Phase",-1),Ha={class:"card-body border-bottom"},Wa=e("p",{class:"text-muted text-uppercase fs-12 fw-medium mb-4"},"Blocks",-1),qa={class:"col-xl-9 col-lg-8"},Ka={class:"card"},Xa=e("i",{class:"ri-add-line align-bottom"},null,-1),Za=e("i",{class:"ri-add-line align-bottom me-1"},null,-1),Ja={class:"card-header"},Qa={class:"row align-items-center"},Ya={class:"col"},el={class:"nav nav-tabs-custom card-header-tabs border-bottom-0",role:"tablist"},sl={class:"nav-item"},tl={class:"nav-link active fw-semibold","data-bs-toggle":"tab",href:"#lot",role:"tab"},al={class:"badge bg-danger-subtle text-danger align-middle rounded-pill ms-1"},ll={class:"nav-item"},ol={class:"nav-link fw-semibold","data-bs-toggle":"tab",href:"#blockVal",role:"tab"},nl={class:"badge bg-danger-subtle text-danger align-middle rounded-pill ms-1"},il={class:"nav-item"},cl={class:"nav-link fw-semibold","data-bs-toggle":"tab",href:"#phaseVal",role:"tab"},dl={class:"badge bg-danger-subtle text-danger align-middle rounded-pill ms-1"},rl=e("div",{class:"col-auto"},[e("div",{id:"selection-element"},[e("div",{class:"my-n1 d-flex align-items-center text-muted"},[h(" Select "),e("div",{id:"select-content",class:"text-body fw-semibold px-1"}),h(" Result "),e("button",{type:"button",class:"btn btn-link link-danger p-0 ms-3","data-bs-toggle":"modal","data-bs-target":"#removeItemModal"},"Remove")])])],-1),ml={class:"card-body"},ul={class:"tab-content text-muted"},hl={class:"tab-pane active",id:"lot",role:"tabpanel"},bl={class:"tab-pane",id:"blockVal",role:"tabpanel"},vl={class:"py-4 text-center"},_l={class:"tab-pane",id:"phaseVal",role:"tabpanel"},fl={class:"py-4 text-center"},gl={class:"modal-dialog modal-dialog-centered"},pl={class:"modal-content"},kl=e("h5",{class:"modal-title"},"Generate Phase and Block",-1),yl={class:"modal-body"},xl={class:"col-sm-5"},wl=e("label",{class:"form-label"},"Phase Name",-1),Cl=["onUpdate:modelValue"],Sl={class:"col-sm-4 mb-3"},Tl=e("h5",{class:"fs-13 fw-medium text-muted"},"Blocks",-1),jl={class:"input-step light mt-1"},Nl=["onClick"],Bl=["value"],Ll=["onClick"],Dl={class:"col-sm-2 pt-4"},Ol=["onClick"],Vl=e("span",{class:"icon-off"},[e("i",{class:"ri-delete-bin-line"})],-1),$l=[Vl],Pl=e("span",{class:"icon-off"},[e("i",{class:"ri-add-line"}),h(" Add")],-1),Ml=[Pl],Il={class:"modal-footer"},Fl={class:"hstack gap-2 justify-content-end"},Al={key:0,class:"spinner-border text-success",role:"status"},Gl=e("span",{class:"sr-only"},"Loading...",-1),zl=[Gl],El={class:"modal-dialog modal-dialog-centered"},Rl={class:"modal-content"},Ul=e("h5",{class:"modal-title"},"Generate Lot",-1),Hl={class:"modal-body"},Wl={class:"row gy-4"},ql={class:"col-sm-4"},Kl=e("label",{class:"form-label"},"Phase",-1),Xl={class:"col-sm-4"},Zl=e("label",{class:"form-label"},"Block",-1),Jl={class:"col-sm-4 mb-3"},Ql=e("h5",{class:"fs-13 fw-medium text-muted"},"Lot",-1),Yl={class:"input-step light mt-1"},eo=["value"],so={class:"modal-footer"},to={class:"hstack gap-2 justify-content-end"},ao={key:0,class:"spinner-border text-success",role:"status"},lo=e("span",{class:"sr-only"},"Loading...",-1),oo=[lo],V=5,vo={__name:"Develop",props:{land:Object,message:Object,phaseVal:Object,blockVal:Object,phaseFilter:Object,blockFilter:Object,phaseDetails:Object},setup(s){const c=k(!1),b=k(!1);let d=s;const C=k([null]),_=k([5]),p=k([5]),v=k(null),x=k(null),S=k(null),j=k(null);let N;const $=k(null),P=k(null),z=k(null);k([]);let u=se({phase:[null],block:[V]}),w=se({phase:null,block:null,lot:V});const M=t=>{_.value[t]++,u.block[t]=_.value[t]},E=t=>{_.value[t]>1&&(_.value[t]--,u.block[t]=_.value[t])},W=()=>{p.value++,w.lot=p.value},q=()=>{p.value>1&&(p.value--,w.lot=p.value)},A=()=>{C.value.push(null),_.value.push(V),u.block.push(V),u.phase.push(null)},r=t=>{C.value.splice(t,1),_.value.splice(t,1),u.block.splice(t,1),u.phase.splice(t,1)},f=t=>{const a=new Date(t),l={month:"long",day:"numeric",year:"numeric"};return/\d{2}:\d{2}/.test(t)&&(l.hour="numeric",l.minute="numeric",l.hour12=!0),a.toLocaleDateString("en-US",l)},B=(t,a)=>t.charAt(0)+a.charAt(0),D=t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),xe=t=>{const a=t.split(".").pop().toLowerCase();return["jpg","jpeg","png","gif","bmp"].includes(a)},we=t=>t>=1024*1024?(t/1048576).toFixed(2)+" MB":t>=1024?(t/1024).toFixed(2)+" KB":t+" bytes",Ce=()=>{c.value=!0},J=()=>{c.value=!1},Se=()=>{b.value=!0},Q=()=>{b.value=!1},Y=Ie.mixin({customClass:{confirmButton:"btn btn-primary mr-2",cancelButton:"btn btn-link",container:"modal-lesson"},buttonsStyling:!1}),Te=()=>{u.post("/land/"+d.land.slug+"/phase",{onSuccess:()=>{c.value=!1,d.message=null,_.value.push(V),u.block.push(V),u.phase=[],Y.fire("Success!","The data has been saved.","success"),I(d.phaseDetails),I(d.blockVal),I(d.phaseVal)}})},je=()=>{w.post("/land/"+d.land.slug+"/lot",{onSuccess:()=>{b.value=!1,S.value=null,j.value=null,w.reset(),p.value=V,Y.fire("Success!","The data has been saved.","success"),I(d.phaseDetails),I(d.phaseDetails)}})},I=t=>{const a=ee(t);N.updateConfig({data:function(){return new Promise(function(l){setTimeout(function(){l(a)},2e3)})}}).forceRender()};te([v,x],fe(function([t,a]){const l={};t?l.phase=t:x.value=null,a&&(l.block=a),ae.get("/land/"+d.land.slug,l,{preserveState:!0,preserveScroll:!0,replace:!0,onSuccess:()=>{I(d.phaseDetails)}})},500)),te([S,j],fe(function([t,a]){const l={};t?(l.phase=t,w.phase=t):(j.value=null,w.phase=null,w.block=null),a?(l.block=a,w.block=a):w.block=null,ae.get("/land/"+d.land.slug,l,{preserveState:!0,preserveScroll:!0,replace:!0})},500));const ee=t=>t.map(a=>[a.id,a.name,a.size,a.details,a.status,f(a.created_at),a.blk_name,a.phase_name]),Ne=t=>t.map(a=>[a.block_number,f(a.created_at),a.phase.phase_name,a.id]),Be=t=>t.map(a=>[a.phase_name,f(a.created_at),a.id]);return Oe(()=>{const t=ee(d.phaseDetails),a=Ne(d.blockVal),l=Be(d.phaseVal);N=new X({columns:[{id:"checkboxCol",width:"40px",name:o("input",{type:"checkbox",className:"form-check-input",onChange:n=>selectAllRows(n)}),align:"center",formatter:(n,m)=>o("input",{type:"checkbox",className:"form-check-input",onClick:L=>handleCheckboxClick(L,m)}),sort:!1},{id:"nameColumn",name:"Name",formatter:(n,m)=>{const L=m.cells[6].data,Le=m.cells[7].data;return o("span",{},[o("div",{className:"d-flex align-items-center gap-3"},[o("div",{className:"avatar-sm"},[o("div",{className:"avatar-title rounded bg-success-subtle text-success fs-4"},[n.replace(/^Lot\s*/,"")])]),o("div",{className:"flex-grow-1"},[o("h5",{className:"fs-14 mb-1"},[o("a",{className:"text-body"},[n])]),o("p",{className:"text-muted mb-0"},[o("span",{className:"fw-medium"},[Le+", "+L])])])])])}},{id:"sizeColumn",name:"Size"},{id:"detailsColumn",name:"Details"},{id:"statusColumn",name:"Status",align:"center",width:"75px",formatter:(n,m)=>o("span",{className:"badge bg-success",onClick:()=>editModal(m)},[n]),sort:!1},{id:"dateColumn",name:"Date Created"},{id:"blockColumn",name:"Block",hidden:!0},{id:"phaseColumn",name:"Phase",hidden:!0},{id:"actionsColumn",name:"Actions",align:"center",width:"75px",formatter:(n,m)=>o("a",{href:"javascript:void(0);",className:"text-muted",onClick:()=>editModal(m)},[o("i",{className:"ri-pencil-fill fs-16"})]),sort:!1}],sort:!1,theme:"mermaid",search:!0,pagination:{limit:10},data:function(){return new Promise(function(n){setTimeout(function(){n(t)},2e3)})}}).render($.value),new X({columns:[{id:"nameColumn",name:"Name",formatter:(n,m)=>{const L=m.cells[2].data;return o("span",{},[o("div",{className:"d-flex align-items-center gap-3"},[o("div",{className:"avatar-sm"},[o("div",{className:"avatar-title rounded bg-success-subtle text-success fs-4"},[n])]),o("div",{className:"flex-grow-1"},[o("h5",{className:"fs-14 mb-1"},[o("a",{className:"text-body"},["Block "+n])]),o("p",{className:"text-muted mb-0"},[o("span",{className:"fw-medium"},[L])])])])])}},{name:"Date Created"},{name:"Phase Nmae",hidden:!0},{id:"actionsColumn",name:"Actions",align:"center",width:"75px",formatter:(n,m)=>o("a",{href:"javascript:void(0);",className:"text-muted",onClick:()=>editModal(m)},[o("i",{className:"ri-pencil-fill fs-16"})]),sort:!1}],sort:!1,theme:"mermaid",search:!0,pagination:{limit:10},data:function(){return new Promise(function(n){setTimeout(function(){n(a)},2e3)})}}).render(P.value),new X({columns:[{id:"nameColumn",name:"Name",formatter:(n,m)=>{const L=m.cells[2].data;return o("span",{},[o("div",{className:"d-flex align-items-center gap-3"},[o("div",{className:"avatar-sm"},[o("div",{className:"avatar-title rounded bg-success-subtle text-success fs-4"},[L])]),o("div",{className:"flex-grow-1"},[o("h5",{className:"fs-14 mb-1"},[o("a",{className:"text-body"},[n])])])])])}},{name:"Date Created"},{name:"Phase Nmae",hidden:!0},{id:"actionsColumn",name:"Actions",align:"center",width:"75px",formatter:(n,m)=>o("a",{href:"javascript:void(0);",className:"text-muted",onClick:()=>editModal(m)},[o("i",{className:"ri-pencil-fill fs-16"})]),sort:!1}],sort:!1,theme:"mermaid",search:!0,pagination:{limit:10},data:function(){return new Promise(function(n){setTimeout(function(){n(l)},2e3)})}}).render(z.value)}),(t,a)=>(y(),K(Me,null,{default:U(()=>[O(g(Ve),{title:"Develop"},{default:U(()=>[Is]),_:1}),e("div",Fs,[e("div",As,[e("div",Gs,[e("div",zs,[e("div",Es,[e("div",Rs,[e("div",Us,[e("div",Hs,[Ws,e("div",qs,[e("div",null,[e("h4",Ks,i(s.land.name),1),e("div",Xs,[e("div",null,[Zs,h("Size: "+i(s.land.size)+" /sqm",1)]),Js,e("div",null,[h("Groundbreaking Date : "),e("span",Qs,i(f(s.land.ground_breaking)),1)]),Ys,e("div",null,[h("Created Date : "),e("span",et,i(f(s.land.created_at)),1)]),st])])])])]),e("div",tt,[e("div",at,[e("div",lt,[ot,e("ul",nt,[e("li",null,[O(g(le),{class:"dropdown-item",href:"/land/"+s.land.slug+"/edit"},{default:U(()=>[it,h("Edit")]),_:1},8,["href"])]),e("li",null,[O(g(le),{class:"dropdown-item",href:"/land"},{default:U(()=>[ct,h("View List")]),_:1})])])])])])]),dt])])])])]),e("div",rt,[e("div",mt,[e("div",ut,[e("div",ht,[e("div",bt,[e("div",vt,[e("div",_t,[e("div",ft,[e("div",gt,[pt,e("div",kt,[e("div",yt,[e("p",{innerHTML:s.land.description},null,8,xt)])]),e("div",wt,[e("div",Ct,[e("div",St,[e("div",null,[Tt,e("h5",jt,i(s.land.size)+" /sqm",1)])]),e("div",Nt,[e("div",null,[Bt,e("h5",Lt,i(f(s.land.ground_breaking)),1)])]),e("div",Dt,[e("div",null,[Ot,e("h5",Vt,i(D(s.land.address?s.land.address:""))+" Brgy. "+i(D(s.land.barangay))+", "+i(D(s.land.municipality))+", "+i(D(s.land.province))+", "+i(s.land.region),1)])])])]),e("div",$t,[Pt,e("div",Mt,[(y(!0),T(ne,null,oe(s.land.attachments,l=>(y(),T("div",It,[e("div",Ft,[e("div",At,[e("div",Gt,[e("div",zt,[e("div",Et,[xe(l.file_name)?(y(),T("img",{key:0,src:"/storage/land/"+l.file_name,class:"img-fluid d-block"},null,8,Rt)):(y(),T("i",Ut))])])]),e("div",Ht,[e("h5",Wt,[e("a",qt,i(l.file_name),1)]),e("div",null,i(we(l.size)),1)]),e("div",Kt,[e("a",{href:"/storage/land/"+l.file_name,download:"",class:"btn btn-icon text-muted btn-sm fs-18"},Jt,8,Xt)])])])]))),256))])])])])])]),e("div",Qt,[e("div",Yt,[ea,e("div",sa,[e("div",ta,[e("div",aa,[e("div",la,[e("div",oa,[e("div",na,i(B(s.land.seller.fname,s.land.seller.lname)),1)]),e("div",ia,[e("h5",ca,i(s.land.seller.fname)+" "+i(s.land.seller.lname),1),e("div",da,[e("a",{href:"tel:"+s.land.seller.phone,class:"text-muted"},[ma,h(" "+i(s.land.seller.phone),1)],8,ra)]),e("div",ua,[e("a",{href:"mailto:"+s.land.seller.email,class:"text-muted"},[ba,h(" "+i(s.land.seller.email),1)],8,ha)]),e("div",va,[e("a",_a,[fa,h(" "+i(s.land.seller.address),1)])])])])])])])]),e("div",ga,[pa,e("div",ka,[e("div",ya,[e("div",xa,[e("div",wa,[e("div",Ca,[e("div",Sa,i(B(s.land.owner.fname,s.land.owner.lname)),1)]),e("div",Ta,[e("h5",ja,i(s.land.owner.fname)+" "+i(s.land.owner.lname),1),e("div",Na,[e("a",{href:"tel:"+s.land.owner.phone,class:"text-muted"},[La,h(" "+i(s.land.owner.phone),1)],8,Ba)]),e("div",Da,[e("a",{href:"mailto:"+s.land.owner.email,class:"text-muted"},[Va,h(" "+i(s.land.owner.email),1)],8,Oa)]),e("div",$a,[e("a",Pa,[Ma,h(" "+i(s.land.owner.address),1)])])])])])])])])])])]),e("div",Ia,[e("div",Fa,[e("div",Aa,[e("div",Ga,[za,e("div",Ea,[e("div",Ra,[e("div",null,[Ua,O(g(H),{class:"form-select mb-3",modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=l=>v.value=l),placeholder:"Select Phase",options:s.phaseFilter,searchable:!0,"track-by":"label"},null,8,["modelValue","options"])])]),e("div",Ha,[Wa,O(g(H),{class:"form-select mb-3",modelValue:x.value,"onUpdate:modelValue":a[1]||(a[1]=l=>x.value=l),placeholder:"Select Block",options:s.blockFilter,searchable:!0,"track-by":"label",disabled:!v.value},null,8,["modelValue","options","disabled"])])])])]),e("div",qa,[e("div",null,[e("div",Ka,[e("div",{class:"card-header border-0"},[e("div",{class:"row g-4"},[e("div",{class:"col-sm-auto"},[e("button",{class:"btn btn-soft-primary w-100",onClick:Ce},[Xa,h(" Generate Phase & Blocks")])]),e("div",{class:"col-sm-auto"},[e("div",null,[e("a",{class:"btn btn-primary",onClick:Se},[Za,h(" Generate Lot")])])])])]),e("div",Ja,[e("div",Qa,[e("div",Ya,[e("ul",el,[e("li",sl,[e("a",tl,[h(" Lot "),e("span",al,i(s.phaseDetails?s.phaseDetails.length:0),1)])]),e("li",ll,[e("a",ol,[h(" Block "),e("span",nl,i(s.blockVal?s.blockVal.length:0),1)])]),e("li",il,[e("a",cl,[h(" Phase "),e("span",dl,i(s.phaseVal?s.phaseVal.length:0),1)])])])]),rl])]),e("div",ml,[e("div",ul,[e("div",hl,[e("div",{class:"table-card gridjs-border-none",ref_key:"gridContainer",ref:$},null,512)]),e("div",bl,[e("div",vl,[e("div",{class:"table-card gridjs-border-none",ref_key:"gridContainerBlock",ref:P},null,512)])]),e("div",_l,[e("div",fl,[e("div",{class:"table-card gridjs-border-none",ref_key:"gridContainerPhase",ref:z},null,512)])])])])])])])]),c.value?(y(),T("div",{key:0,class:de(["modal fade",{show:c.value}]),tabindex:"-1",role:"dialog"},[e("div",gl,[e("div",pl,[e("div",{class:"modal-header"},[kl,e("button",{type:"button",class:"btn-close",onClick:J,"aria-label":"Close"})]),e("form",{class:"tablelist-form",autocomplete:"off",onSubmit:a[2]||(a[2]=ie((...l)=>t.submitHandler&&t.submitHandler(...l),["prevent"]))},[e("div",yl,[e("div",null,[g(u).errors.error?(y(),K(re,{key:0,type:"danger",msg:g(u).errors.error},null,8,["msg"])):F("",!0),(y(!0),T(ne,null,oe(C.value,(l,n)=>(y(),T("div",{key:n,class:"row gy-4"},[e("div",xl,[e("div",null,[wl,ce(e("input",{type:"text","onUpdate:modelValue":m=>g(u).phase[n]=m,class:"form-control",required:""},null,8,Cl),[[$e,g(u).phase[n]]])])]),e("div",Sl,[e("div",null,[Tl,e("div",jl,[e("button",{type:"button",class:"minus",onClick:m=>E(n)},"–",8,Nl),e("input",{type:"number",value:_.value[n],min:"0",max:"100",readonly:""},null,8,Bl),e("button",{type:"button",class:"plus",onClick:m=>M(n)},"+",8,Ll)])])]),e("div",Dl,[e("div",null,[ce(e("button",{type:"button",class:"btn btn-outline-danger btn-icon waves-effect waves-light",onClick:m=>n!==0&&r(n)},$l,8,Ol),[[Pe,n!==0]])])])]))),128)),e("div",{class:"colo-sm-6"},[e("button",{type:"button",class:"btn btn-outline-success waves-effect waves-light btn-sm",onClick:A},Ml)])])]),e("div",Il,[e("div",Fl,[e("button",{type:"button",class:"btn btn-light",onClick:J},"Close"),g(u).processing?(y(),T("div",Al,zl)):F("",!0),e("button",{type:"submit",onClick:Te,class:"btn btn-success is-loading"},"Generate")])])],32)])])],2)):F("",!0),b.value?(y(),T("div",{key:1,class:de(["modal fade",{show:b.value}]),tabindex:"-1",role:"dialog"},[e("div",El,[e("div",Rl,[e("div",{class:"modal-header"},[Ul,e("button",{type:"button",class:"btn-close",onClick:Q,"aria-label":"Close"})]),e("form",{class:"tablelist-form",autocomplete:"off",onSubmit:a[5]||(a[5]=ie((...l)=>t.submitHandler&&t.submitHandler(...l),["prevent"]))},[e("div",Hl,[e("div",null,[g(u).errors.error?(y(),K(re,{key:0,type:"danger",msg:g(u).errors.error},null,8,["msg"])):F("",!0),e("div",Wl,[e("div",ql,[e("div",null,[Kl,O(g(H),{class:"form-select mb-3",modelValue:S.value,"onUpdate:modelValue":a[3]||(a[3]=l=>S.value=l),placeholder:"Select...",options:s.phaseFilter,searchable:!0,"track-by":"label"},null,8,["modelValue","options"])])]),e("div",Xl,[e("div",null,[Zl,O(g(H),{class:"form-select mb-3",modelValue:j.value,"onUpdate:modelValue":a[4]||(a[4]=l=>j.value=l),placeholder:"Select...",options:s.blockFilter,searchable:!0,"track-by":"label",disabled:!S.value},null,8,["modelValue","options","disabled"])])]),e("div",Jl,[e("div",null,[Ql,e("div",Yl,[e("button",{type:"button",class:"minus",onClick:q},"–"),e("input",{type:"number",value:p.value,min:"1",max:"100",readonly:""},null,8,eo),e("button",{type:"button",class:"plus",onClick:W},"+")])])])])])]),e("div",so,[e("div",to,[e("button",{type:"button",class:"btn btn-light",onClick:Q},"Close"),g(u).processing?(y(),T("div",ao,oo)):F("",!0),e("button",{type:"submit",onClick:je,class:"btn btn-success is-loading"},"Generate")])])],32)])])],2)):F("",!0)])])])])]),_:1}))}};export{vo as default};