import{k as b,z as g,l as C,r as s,o as V,c as k,b as e,w as t,d as a,a as d,j as w,n as P}from"./entry.8c88b42c.js";const y={class:"update_banner"},z={class:"text-center"},D={class:"actions text-center"},B={__name:"DeletePopup",props:["openPopup"],emits:["confirmDelete","closePopup"],setup(p,{emit:c}){const i=p,o=b(!1);return g(()=>o.value,r=>{r||setTimeout(()=>{c("closePopup")},200)}),C(()=>{o.value=i.openPopup}),(r,n)=>{const u=s("v-card-title"),m=s("v-icon"),v=s("v-card-text"),_=s("v-btn"),f=s("v-card"),x=s("v-dialog");return V(),k("div",y,[e(x,{modelValue:w(o),"onUpdate:modelValue":n[2]||(n[2]=l=>P(o)?o.value=l:null),width:"500",persistent:""},{default:t(()=>[e(f,{class:"text-center px-5 pb-5 pt-2"},{default:t(()=>[e(u,{style:{"font-size":"25px"}},{default:t(()=>[a("Delete Warning!")]),_:1}),d("div",z,[e(m,{color:"orange",size:"70"},{default:t(()=>[a("mdi-alert")]),_:1})]),e(v,{style:{"font-size":"20px"},class:"mb-2"},{default:t(()=>[a("Are you sure you want to delete this item?")]),_:1}),d("div",D,[e(_,{color:"red",class:"mr-3",onClick:n[0]||(n[0]=l=>o.value=!1)},{default:t(()=>[a("Cancel")]),_:1}),e(_,{color:"green",onClick:n[1]||(n[1]=l=>c("confirmDelete"))},{default:t(()=>[a("Confirm")]),_:1})])]),_:1})]),_:1},8,["modelValue"])])}}},h=B;export{h as _};
