import{m as f,P as C,r as t,o as r,d as i,e,j as h,a as s,w as o,h as v,t as c,G as l,g as y}from"./app-976f9ee5.js";const S={class:""},b={class:""},g={class:"text-muted mb-0"},N={class:"mb-3"},V={key:0},w={__name:"FormSection",props:{title:{type:String,default:""},description:{type:String,default:""}},emits:["submitted"],setup(n){const m=f(()=>!!C().actions);return(a,d)=>{const _=t("BCardTitle"),u=t("BCardHeader"),p=t("BCardBody"),B=t("BCard");return r(),i("div",S,[e("div",b,[e("form",{onSubmit:d[0]||(d[0]=h($=>a.$emit("submitted"),["prevent"]))},[s(B,{"no-body":""},{default:o(()=>[s(u,null,{default:o(()=>[s(_,null,{default:o(()=>[v(c(n.title),1)]),_:1}),e("p",g,c(n.description),1)]),_:1}),s(p,{class:"p-4"},{default:o(()=>[e("div",N,[l(a.$slots,"form")]),m.value?(r(),i("div",V,[l(a.$slots,"actions")])):y("",!0)]),_:3})]),_:3})],32)])])}}};export{w as _};