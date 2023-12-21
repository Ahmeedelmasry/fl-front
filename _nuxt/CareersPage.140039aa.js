import{k as $,r as f,o as i,c as d,b as l,w as n,a as r,q as V,m as h,j as o,x as _,y as g,t as y,g as m,v as L,d as w,n as M,h as D}from"./entry.8c88b42c.js";import{r as v,m as k,e as P,n as U,u as B}from"./index.a1c7dcf5.js";import{d as R}from"./carrers.746d3c38.js";import{_ as F}from"./_plugin-vue_export-helper.c27b6911.js";const z={class:"careers w-100"},A=r("div",{class:"seaction_heading"},[r("h3",{style:{"font-weight":"700 !important",color:"#669930","font-family":"BoldGothic, sans-serif !important"}}," APPLY ")],-1),I=["onSubmit"],J={key:0,class:"err-msg"},Y={key:0,class:"err-msg"},q={key:0,class:"err-msg"},E={class:"select_parent position-relative"},K=r("option",{value:""},"Select a job vacancy",-1),G=r("option",{value:"Lab Director - Kkobar"}," Lab Director - Kkobar ",-1),O=r("option",{value:"Lab Specialist - Riyaah - Makhah"}," Lab Specialist - Riyaah - Makhah ",-1),W=r("option",{value:"Lab Technician - Riyaah - Makhah"}," Lab Technician - Riyaah - Makhah ",-1),H=r("option",{value:"Inventory Controller - Jeddah"}," Inventory Controller - Jeddah ",-1),Q=[K,G,O,W,H],X={key:0,class:"err-msg"},Z={class:"file_upload position-relative",style:{"border-radius":"30px",border:"1px solid rgb(205, 205, 205)"}},ee={key:0,class:"err-msg"},oe={key:0,type:"submit",value:"SUBMIT"},te={__name:"Careers",setup(T){const x=R(),c=$(null),u=$(!1),s=$({fullName:"",email:"",phone:"",file:null,jobTitle:""}),b=$({fullName:{required:v,minLength:k(3)},email:{email:P,required:v},phone:{required:v,minLength:k(8),numeric:U},jobTitle:{required:v},file:{required:v}}),t=B(b,s),C=async()=>{if(await t.value.$validate()){const a=new FormData;a.append("stringDto",JSON.stringify({fullName:s.value.fullName,email:s.value.email,phone:s.value.phone,jobTitle:s.value.jobTitle})),a.append("cv",s.value.file),u.value=!0,await x.doAddDashboardCareers(a,!0),u.value=!1}};return(j,a)=>{const p=f("v-col"),N=f("v-icon"),S=f("v-btn");return i(),d("div",z,[A,l(p,{cols:"12",class:"px-0"},{default:n(()=>[r("form",{action:"",onSubmit:V(C,["prevent"]),class:"w-100"},[l(p,{cols:"12",class:"px-0 pt-0"},{default:n(()=>[h(r("input",{type:"text",name:"userName",id:"userName",placeholder:"Full Name","onUpdate:modelValue":a[0]||(a[0]=e=>o(s).fullName=e),class:_([`${o(t).$errors.find(e=>e.$property=="fullName")?"err-input":""}`])},null,2),[[g,o(s).fullName]]),o(t).$errors.find(e=>e.$property=="fullName")?(i(),d("span",J,y(o(t).$errors.find(e=>e.$property=="fullName")?o(t).$errors.find(e=>e.$property=="fullName").$message:""),1)):m("",!0)]),_:1}),l(p,{cols:"12",class:"px-0"},{default:n(()=>[h(r("input",{type:"text",name:"email",id:"email",placeholder:"Email","onUpdate:modelValue":a[1]||(a[1]=e=>o(s).email=e),class:_([`${o(t).$errors.find(e=>e.$property=="email")?"err-input":""}`])},null,2),[[g,o(s).email]]),o(t).$errors.find(e=>e.$property=="email")?(i(),d("span",Y,y(o(t).$errors.find(e=>e.$property=="email")?o(t).$errors.find(e=>e.$property=="email").$message:""),1)):m("",!0)]),_:1}),l(p,{cols:"12",class:"px-0"},{default:n(()=>[h(r("input",{type:"text",name:"userPhone",id:"userPhone",placeholder:"Phone Number","onUpdate:modelValue":a[2]||(a[2]=e=>o(s).phone=e),class:_([`${o(t).$errors.find(e=>e.$property=="phone")?"err-input":""}`])},null,2),[[g,o(s).phone]]),o(t).$errors.find(e=>e.$property=="phone")?(i(),d("span",q,y(o(t).$errors.find(e=>e.$property=="phone")?o(t).$errors.find(e=>e.$property=="phone").$message:""),1)):m("",!0)]),_:1}),l(p,{cols:"12",class:"px-0"},{default:n(()=>[r("div",E,[h(r("select",{name:"msgType",id:"msgType","onUpdate:modelValue":a[3]||(a[3]=e=>o(s).jobTitle=e),class:_([`${o(t).$errors.find(e=>e.$property=="jobTitle")?"err-input":""}`])},Q,2),[[L,o(s).jobTitle]]),l(N,{class:"position-absolute",style:{right:"10px",top:"50%",transform:"translateY(-50%)",opacity:"0.7"}},{default:n(()=>[w("mdi-chevron-down")]),_:1})]),o(t).$errors.find(e=>e.$property=="jobTitle")?(i(),d("span",X,y(o(t).$errors.find(e=>e.$property=="jobTitle")?o(t).$errors.find(e=>e.$property=="jobTitle").$message:""),1)):m("",!0)]),_:1}),l(p,{cols:"12",class:"px-0"},{default:n(()=>[r("div",Z,[h(r("input",{type:"text",name:"upload_placeholder",id:"upload_placeholder",placeholder:"No File Selected",style:{"padding-left":"130px",border:"unset"},"onUpdate:modelValue":a[4]||(a[4]=e=>M(c)?c.value=e:null),class:_([`${o(t).$errors.find(e=>e.$property=="file")?"err-input":""}`])},null,2),[[g,o(c)]]),r("input",{type:"file",name:"upload",id:"upload",accept:".pdf",onChange:a[5]||(a[5]=e=>e.target.files[0]?(c.value=e.target.files[0].name,o(s).file=e.target.files[0]):(c.value=null,o(s).file=null)),style:{position:"absolute",left:"0",top:"0",height:"100%",cursor:"pointer",opacity:"0","z-index":"11"}},null,32),r("div",{class:_([`${o(t).$errors.find(e=>e.$property=="file")?"err-input":""}`,"upload_button"]),style:{position:"absolute",left:"0",top:"0",width:"fit-content",height:"100%",display:"flex","align-items":"center",padding:"0 20px","font-weight":"300",color:"rgb(144, 144, 144)","background-color":"white","border-top-left-radius":"30px","border-bottom-left-radius":"30px",cursor:"pointer","border-right":"1px solid rgb(205, 205, 205)"}}," Upload CV ",2),l(N,{style:{position:"absolute",right:"20px",top:"50%",transform:"translateY(-50%)",color:"#669930"},size:"20"},{default:n(()=>[w("mdi-folder-outline")]),_:1})]),o(t).$errors.find(e=>e.$property=="file")?(i(),d("span",ee,y(o(t).$errors.find(e=>e.$property=="file")?o(t).$errors.find(e=>e.$property=="file").$message:""),1)):m("",!0)]),_:1}),l(p,{cols:"12",class:"px-0"},{default:n(()=>[l(p,{cols:"12",class:"px-0"},{default:n(()=>[o(u)?m("",!0):(i(),d("input",oe)),o(u)?(i(),D(S,{key:1,loading:o(u),width:"100%",rounded:"",height:"45",elevation:"0",color:"green"},null,8,["loading"])):m("",!0)]),_:1})]),_:1})],40,I)]),_:1})])}}},re=te;const se={},ae={class:"careers_page"},le=r("div",{class:"heading"},[r("h3",null,"Careers")],-1),ne=r("div",{class:"desc"},[r("p",null," We have many vacancies available. Apply now and we will contact you. ")],-1);function ie(T,x){const c=re,u=f("v-col"),s=f("v-row"),b=f("v-container");return i(),d("div",ae,[le,ne,l(b,{class:"px-5 px-md-13"},{default:n(()=>[l(s,{class:"justify-center"},{default:n(()=>[l(u,{cols:"12",md:"8"},{default:n(()=>[l(c)]),_:1})]),_:1})]),_:1})])}const me=F(se,[["render",ie]]);export{me as default};
