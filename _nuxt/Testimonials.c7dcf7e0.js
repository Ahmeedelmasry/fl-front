import{_ as O}from"./DeletePopup.f158edf7.js";import{D as z,E as L,G as T,H as S,k as _,z as H,l as B,r as p,o as y,c as M,b as a,w as n,d as h,t as K,q as Q,j as e,a as V,n as W,h as k,g as C,s as X}from"./entry.08c37509.js";import{r as A,m as R,u as j}from"./index.4590c98c.js";import{V as Y}from"./VDataTable.cbb22240.js";const F=z("dashboardTestemonialstore",{state:()=>({dashboardTestemonials:[]}),actions:{async doGetDashboardTestemonials(){this.dashboardTestemonials=[],await L.get(`${T().apiURL}/FutureLab/testiMonial?lang=${S().lang[0]}`).then(b=>{this.dashboardTestemonials=b.data})},async doAddDashboardTestemonials(b){let i;return await L({data:b,method:"POST",url:`${T().apiURL}/FutureLab/testiMonial?lang=${S().lang[0]}`}).then(l=>{i=!0,this.dashboardTestemonials=l.data,T().callResponse(!0,l.data.message,1)}).catch(l=>{i=!1,T().callResponse(!0,l.response.data.message,2)}),i},async doUpdateDashboardTestemonials(b){let i;return await L({data:b,method:"PATCH",url:`${T().apiURL}/FutureLab/testiMonial?lang=${S().lang[0]}`}).then(l=>{i=!0,this.dashboardTestemonials=l.data,T().callResponse(!0,l.data.message,1)}).catch(l=>{T().callResponse(!0,l.response.data.message,2),i=!1}),i}}}),Z={class:"update_banner"},ee={class:"actions text-center"},te={__name:"UpdateTestimonials",props:["openPopup","toUpdate"],emits:["closePopup","regetData"],setup(b,{emit:i}){const l=b,f=F(),t=_({personNameEN:"",personNameAR:"",personJobTitleEN:"",personJobTitleAR:"",commentEN:"",commentAR:"",image:[]}),g=_(!1),u=_(!1),d=_(!1),w=_({personNameEN:{required:A,minLength:R(3)},personNameAR:{required:A,minLength:R(3)},personJobTitleEN:{required:A,minLength:R(3)},personJobTitleAR:{required:A,minLength:R(3)},commentEN:{required:A,minLength:R(3)},commentAR:{required:A,minLength:R(3)},image:{required:A,minLength:R(1)}}),x=_(null);H(()=>g.value,$=>{$||setTimeout(()=>{i("closePopup")},200)});let m=j(w,t);const c=async()=>{if(l.toUpdate&&(w.value.image={},m=j(w,t)),await m.value.$validate()){if(d.value=!0,l.toUpdate){const s=new FormData;if(s.append("stringDto",JSON.stringify({id:l.toUpdate.selectable.id,personNameEN:t.value.personNameEN,personNameAR:t.value.personNameAR,personJobTitleEN:t.value.personJobTitleEN,personJobTitleAR:t.value.personJobTitleAR,commentEN:t.value.commentEN,commentAR:t.value.commentAR})),t.value.image&&t.value.image.length)s.append("photo",t.value.image[0]);else{const N=atob(x.value),v=new ArrayBuffer(N.length),D=new Uint8Array(v);for(let r=0;r<N.length;r++)D[r]=N.charCodeAt(r);const J=new Blob([v],{type:"application/octet-stream"}),U=new File([J],"filename.ext",{type:"application/octet-stream"});s.append("photo",U)}await f.doUpdateDashboardTestemonials(s)&&(i("regetData"),g.value=!1)}else{const s=new FormData;s.append("stringDto",JSON.stringify({personNameEN:t.value.personNameEN,personNameAR:t.value.personNameAR,personJobTitleEN:t.value.personJobTitleEN,personJobTitleAR:t.value.personJobTitleAR,commentEN:t.value.commentEN,commentAR:t.value.commentAR})),s.append("photo",t.value.image[0]),await f.doAddDashboardTestemonials(s)&&(i("regetData"),g.value=!1)}d.value=!1}};return B(async()=>{g.value=l.openPopup,l.toUpdate&&(t.value.personNameEN=l.toUpdate.selectable.personNameEN,t.value.personNameAR=l.toUpdate.selectable.personNameAR,t.value.personJobTitleEN=l.toUpdate.selectable.personJobTitleEN,t.value.personJobTitleAR=l.toUpdate.selectable.personJobTitleAR,t.value.commentEN=l.toUpdate.selectable.commentEN,t.value.commentAR=l.toUpdate.selectable.commentAR,x.value=l.toUpdate.selectable.personPhoto)}),($,s)=>{const E=p("v-card-title"),N=p("v-text-field"),v=p("v-col"),D=p("v-textarea"),J=p("v-file-input"),U=p("v-row"),r=p("v-container"),P=p("v-btn"),I=p("v-form"),G=p("v-card"),q=p("v-dialog");return y(),M("div",Z,[a(q,{modelValue:e(g),"onUpdate:modelValue":s[8]||(s[8]=o=>W(g)?g.value=o:null),width:"700",persistent:""},{default:n(()=>[a(G,null,{default:n(()=>[a(E,{class:"mb-5 text-center bg-grey-lighten-3"},{default:n(()=>[h(K(b.toUpdate?"Update Testimonial":"Add Testimonial"),1)]),_:1}),a(I,{class:"pa-5",onSubmit:Q(c,["prevent"])},{default:n(()=>[a(r,null,{default:n(()=>[a(U,null,{default:n(()=>[a(v,{cols:"12",sm:"6"},{default:n(()=>[a(N,{label:"English Name",disabled:e(u)||e(d),variant:"outlined",modelValue:e(t).personNameEN,"onUpdate:modelValue":s[0]||(s[0]=o=>e(t).personNameEN=o),"error-messages":e(m).$errors.find(o=>o.$property=="personNameEN")?e(m).$errors.find(o=>o.$property=="personNameEN").$message:""},null,8,["disabled","modelValue","error-messages"])]),_:1}),a(v,{cols:"12",sm:"6"},{default:n(()=>[a(N,{label:"Arabic Name",disabled:e(u)||e(d),variant:"outlined",modelValue:e(t).personNameAR,"onUpdate:modelValue":s[1]||(s[1]=o=>e(t).personNameAR=o),"error-messages":e(m).$errors.find(o=>o.$property=="personNameAR")?e(m).$errors.find(o=>o.$property=="personNameAR").$message:""},null,8,["disabled","modelValue","error-messages"])]),_:1}),a(v,{cols:"12",sm:"6"},{default:n(()=>[a(N,{label:"English Title",disabled:e(u)||e(d),variant:"outlined",modelValue:e(t).personJobTitleEN,"onUpdate:modelValue":s[2]||(s[2]=o=>e(t).personJobTitleEN=o),"error-messages":e(m).$errors.find(o=>o.$property=="personJobTitleEN")?e(m).$errors.find(o=>o.$property=="personJobTitleEN").$message:""},null,8,["disabled","modelValue","error-messages"])]),_:1}),a(v,{cols:"12",sm:"6"},{default:n(()=>[a(N,{label:"Arabic Title",disabled:e(u)||e(d),variant:"outlined",modelValue:e(t).personJobTitleAR,"onUpdate:modelValue":s[3]||(s[3]=o=>e(t).personJobTitleAR=o),"error-messages":e(m).$errors.find(o=>o.$property=="personJobTitleAR")?e(m).$errors.find(o=>o.$property=="personJobTitleAR").$message:""},null,8,["disabled","modelValue","error-messages"])]),_:1}),a(v,{cols:"12",sm:"6"},{default:n(()=>[a(D,{label:"English Comment",disabled:e(u)||e(d),variant:"outlined",modelValue:e(t).commentEN,"onUpdate:modelValue":s[4]||(s[4]=o=>e(t).commentEN=o),"error-messages":e(m).$errors.find(o=>o.$property=="commentEN")?e(m).$errors.find(o=>o.$property=="commentEN").$message:"",rows:"3"},null,8,["disabled","modelValue","error-messages"])]),_:1}),a(v,{cols:"12",sm:"6"},{default:n(()=>[a(D,{label:"Arabic Comment",disabled:e(u)||e(d),variant:"outlined",modelValue:e(t).commentAR,"onUpdate:modelValue":s[5]||(s[5]=o=>e(t).commentAR=o),"error-messages":e(m).$errors.find(o=>o.$property=="commentAR")?e(m).$errors.find(o=>o.$property=="commentAR").$message:"",rows:"3"},null,8,["disabled","modelValue","error-messages"])]),_:1}),a(v,{cols:"12"},{default:n(()=>[a(J,{modelValue:e(t).image,"onUpdate:modelValue":s[6]||(s[6]=o=>e(t).image=o),variant:"outlined",label:"Client Image",disabled:e(u)||e(d),accept:".jpg, .jpeg, png","error-messages":e(m).$errors.find(o=>o.$property=="image")?e(m).$errors.find(o=>o.$property=="image").$message:""},null,8,["modelValue","disabled","error-messages"])]),_:1})]),_:1})]),_:1}),V("div",ee,[a(P,{color:"red",class:"mr-3",onClick:s[7]||(s[7]=o=>g.value=!1),disabled:e(u)||e(d)},{default:n(()=>[h("Cancel")]),_:1},8,["disabled"]),a(P,{color:"green",type:"submit",loading:e(d)},{default:n(()=>[h("Save")]),_:1},8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])])}}},oe=te,ae={class:"dashboard_banners_listing"},se={class:"heading d-flex justify-space-between align-center"},ne=V("h2",{class:"my-3"},"Testimonials",-1),le={class:"py-3"},re=["src"],ie={class:"d-flex align-center justify-center"},de={__name:"Listing",props:["dashboardTestemonials","loading"],emits:["regetData"],setup(b,{emit:i}){const l=T(),f=_(!1),t=_(!1),g=_(null),u=_(!1),d=_(null),w=_([{title:"English Name",key:"personNameEN"},{title:"Arabic Name",key:"personNameAR"},{title:"English Title",key:"personJobTitleEN"},{title:"Arabic Title",key:"personJobTitleAR"},{title:"Image",key:"personPhoto"},{title:"Actions",key:"actions"}]),x=async()=>{u.value=!1,d.value.loading=!0,await l.doDeleteItem("testiMonial",d.value.id)&&i("regetData"),d.value.loading=!1};return(m,c)=>{const $=p("v-btn"),s=p("v-col"),E=p("v-row"),N=p("v-icon"),v=p("v-tooltip"),D=O,J=p("v-container"),U=oe;return y(),M("div",ae,[a(J,{fluid:""},{default:n(()=>[a(E,null,{default:n(()=>[a(s,{cols:"12"},{default:n(()=>[V("div",se,[ne,a($,{onClick:c[0]||(c[0]=r=>f.value=!0),width:"170px",height:"45px",color:"blue"},{default:n(()=>[h("Add Testimonial")]),_:1})])]),_:1})]),_:1}),b.dashboardTestemonials?(y(),k(E,{key:0,class:"px-4"},{default:n(()=>[a(s,{cols:"12",class:"section_container dashboard_table"},{default:n(()=>[a(e(Y),{headers:e(w),items:b.dashboardTestemonials.content,loading:b.loading,search:""},{"item.personPhoto":n(({item:r})=>[V("div",le,[V("img",{width:"100",height:"70",style:{"border-radius":"10px"},src:r.selectable.personPhoto?`data:image/jpg;base64,${r.selectable.personPhoto}`:"",alt:"Test Image"},null,8,re)])]),"item.actions":n(({item:r})=>[V("div",ie,[a($,{elevation:"0"},{default:n(()=>[a(N,{color:"blue",style:{cursor:"pointer"},onClick:P=>(g.value=r,t.value=!0)},{default:n(()=>[h("mdi-square-edit-outline")]),_:2},1032,["onClick"]),a(v,{activator:"parent",location:"bottom center"},{default:n(()=>[h("Update")]),_:1})]),_:2},1024),a($,{elevation:"0",color:"transparent",loading:r.selectable.loading,ripple:!1},{default:n(()=>[a(N,{color:"red",style:{cursor:"pointer"},class:"ml-2",size:"23",onClick:P=>(d.value=r.selectable,u.value=!0)},{default:n(()=>[h("mdi-delete")]),_:2},1032,["onClick"]),a(v,{activator:"parent",location:"bottom center"},{default:n(()=>[h("Delete")]),_:1})]),_:2},1032,["loading"])])]),_:1},8,["headers","items","loading"]),e(u)?(y(),k(D,{key:0,openPopup:e(u),onClosePopup:c[1]||(c[1]=r=>u.value=!1),onConfirmDelete:x},null,8,["openPopup"])):C("",!0)]),_:1})]),_:1})):C("",!0)]),_:1}),e(t)?(y(),k(U,{key:0,openPopup:e(t),onClosePopup:c[2]||(c[2]=r=>(t.value=!1,g.value=null)),toUpdate:e(g),onRegetData:c[3]||(c[3]=r=>i("regetData"))},null,8,["openPopup","toUpdate"])):C("",!0),e(f)?(y(),k(U,{key:1,openPopup:e(f),onClosePopup:c[4]||(c[4]=r=>f.value=!1),onRegetData:c[5]||(c[5]=r=>i("regetData"))},null,8,["openPopup"])):C("",!0)])}}},me=de,pe={class:"dashboard_tests_page"},ve={__name:"Testimonials",setup(b){const i=F(),{dashboardTestemonials:l}=X(i),f=_(!0),t=async()=>{f.value=!0,await i.doGetDashboardTestemonials(),f.value=!1};return B(()=>{t()}),(g,u)=>{const d=me;return y(),M("div",pe,[a(d,{dashboardTestemonials:e(l),loading:e(f),onRegetData:t},null,8,["dashboardTestemonials","loading"])])}}};export{ve as default};
