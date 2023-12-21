import{k as v,r as c,o as l,c as d,b as n,w as r,a as s,q as E,m as g,j as t,x as y,y as $,t as x,g as u,h as P,d as A}from"./entry.8c88b42c.js";import{r as b,m as w,n as B,e as T,u as V}from"./index.a1c7dcf5.js";import{d as U}from"./corporate.6c895ffd.js";import{_ as k}from"./_plugin-vue_export-helper.c27b6911.js";const O={class:"Application"},R=s("div",{class:"seaction_heading"},[s("h3",{class:"text-center"},"NEW BUSINESS PARTNER")],-1),D=s("p",{class:"desc"}," Futurelab medical laboratories provide a wide range of health screening solutions along with value-added services that include state-of-the-art pathology. Our Quality measures and distribution coverage supported by special pricing models will enable you to serve your patients smoothly in an affordable persona. At this gate, all you need is to drop us a message and our customer service team will take it a step ahead till reaching your destination fast and comfortably. ",-1),I=["onSubmit"],M={key:0,class:"err-msg"},j={class:"tel_parent"},q={key:0,class:"err-msg"},L={key:0,class:"err-msg"},F={key:0,type:"submit",value:"SUBMIT"},G={__name:"Application",setup(N){const m=U(),i=v(!1),a=v({organizationName:"",email:"",phone:""}),h=v({organizationName:{required:b,minLength:w(3)},phone:{numeric:B,minLength:w(8),required:b},email:{required:b,email:T}}),o=V(h,a),f=async()=>{await o.value.$validate()&&(i.value=!0,await m.doAddDashboardCorporate(a.value,!0)&&(o.value.$reset(),a.value={organizationName:"",email:"",phone:""}),i.value=!1)};return(C,p)=>{const _=c("v-col"),S=c("v-btn"),z=c("v-card");return l(),d("div",O,[n(z,{class:"pa-5 pa-sm-8",elevation:"0"},{default:r(()=>[R,D,n(_,{cols:"12",class:"px-0"},{default:r(()=>[s("form",{action:"",onSubmit:E(f,["prevent"]),class:"w-100"},[n(_,{cols:"12",class:"px-0"},{default:r(()=>[g(s("input",{type:"text",name:"userName",id:"userName",placeholder:"Organization Name","onUpdate:modelValue":p[0]||(p[0]=e=>t(a).organizationName=e),class:y([`${t(o).$errors.find(e=>e.$property=="organizationName")?"err-input":""}`])},null,2),[[$,t(a).organizationName]]),t(o).$errors.find(e=>e.$property=="organizationName")?(l(),d("span",M,x(t(o).$errors.find(e=>e.$property=="organizationName")?t(o).$errors.find(e=>e.$property=="organizationName").$message:""),1)):u("",!0)]),_:1}),n(_,{cols:"12",class:"px-0"},{default:r(()=>[s("div",j,[g(s("input",{type:"text",name:"userPhone",id:"userPhone",placeholder:"Phone Number","onUpdate:modelValue":p[1]||(p[1]=e=>t(a).phone=e),class:y([`${t(o).$errors.find(e=>e.$property=="phone")?"err-input":""}`,,"pl-16"])},null,2),[[$,t(a).phone]])]),t(o).$errors.find(e=>e.$property=="phone")?(l(),d("span",q,x(t(o).$errors.find(e=>e.$property=="phone")?t(o).$errors.find(e=>e.$property=="phone").$message:""),1)):u("",!0)]),_:1}),n(_,{cols:"12",class:"px-0"},{default:r(()=>[g(s("input",{type:"text",name:"userPhone",id:"userPhone",placeholder:"Email","onUpdate:modelValue":p[2]||(p[2]=e=>t(a).email=e),class:y([`${t(o).$errors.find(e=>e.$property=="email")?"err-input":""}`,,,])},null,2),[[$,t(a).email]]),t(o).$errors.find(e=>e.$property=="email")?(l(),d("span",L,x(t(o).$errors.find(e=>e.$property=="email")?t(o).$errors.find(e=>e.$property=="email").$message:""),1)):u("",!0)]),_:1}),n(_,{cols:"12",class:"px-0 text-center"},{default:r(()=>[t(i)?u("",!0):(l(),d("input",F)),t(i)?(l(),P(S,{key:1,loading:t(i),width:"50%",rounded:"",height:"45",elevation:"0"},null,8,["loading"])):u("",!0)]),_:1})],40,I)]),_:1})]),_:1})])}}},Q=G;const W={},X={class:"benifits"},Y=s("div",{class:"seaction_heading"},[s("h3",{class:"text-center"},"EXISTING CUSTOMERS")],-1),H=s("p",{class:"desc text-sm-start text-center"}," You are the heart of our mission and hence we are keen to offer you a unique customer experience. This platform has been designed to offer you customer self-service solutions as simple, and frictionless as possible using intelligent technology giving you the support you do expect at every single touchpoint you have with us. ",-1),J={href:"http://orp.futurelab.com.sa:8090/eclinic/index2.jsp",target:"_blank"};function K(N,m){const i=c("v-btn"),a=c("v-card");return l(),d("div",X,[n(a,{class:"pa-5 pa-sm-8 text-center",elevation:"0"},{default:r(()=>[Y,H,s("a",J,[n(i,{width:"50%",class:"mt-6 text-white font-weight-black",elevation:"0",color:"#669930",rounded:"",height:"50"},{default:r(()=>[A("click here")]),_:1})])]),_:1})])}const Z=k(W,[["render",K]]);const ee={},te={class:"corporate_page pb-16"},oe=s("div",{class:"heading"},[s("h3",null,"CORPORATE")],-1),se=s("div",{class:"desc"},[s("p",null," Either you are an existing customer or new business partner , this platform has been dedicated to reach us directly and enjoy our full fledge services. ")],-1);function ae(N,m){const i=Q,a=c("v-col"),h=Z,o=c("v-row"),f=c("v-container");return l(),d("div",te,[oe,se,n(f,{class:"px-5 px-sm-13"},{default:r(()=>[n(o,null,{default:r(()=>[n(a,{cols:"12",md:"6"},{default:r(()=>[n(i)]),_:1}),n(a,{cols:"12",md:"6"},{default:r(()=>[n(h)]),_:1})]),_:1})]),_:1})])}const ce=k(ee,[["render",ae]]);export{ce as default};
