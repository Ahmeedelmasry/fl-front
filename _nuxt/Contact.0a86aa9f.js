import{_ as j}from"./DeletePopup.ea62822f.js";import{d as T}from"./contact.958af057.js";import{G as A,k as _,r as l,o as u,c as C,b as t,w as e,h as D,j as o,d as h,g as b,a as x,s as G,l as L}from"./entry.8c88b42c.js";import{V as R}from"./VDataTable.7c3107fa.js";const I={class:"dashboard_banners_listing"},S=x("div",{class:"heading d-flex justify-space-between align-center"},[x("h2",{class:"my-3"},"Contact Messages")],-1),z={key:0},E={__name:"Listing",props:["dashboardContact","loading"],emits:["regetData"],setup(p,{emit:c}){const g=A(),r=T(),n=_(!1),s=_(!1),d=_(null),f=_([{title:"Name Question",key:"clientName"},{title:"Phone",key:"clientPhone"},{title:"Message",key:"messageText"},{title:"Message Type",key:"messageType"},{title:"Actions",key:"actions"}]),M=async a=>{if(!a.read){const m={id:a.id,clientName:a.clientName,clientPhone:a.clientPhone,messageType:a.messageType,messageText:a.messageText,read:!0};n.value=!0,await r.doUpdateDashboardContact(m)&&c("regetData"),n.value=!1}},w=async()=>{s.value=!1,d.value.loading=!0,await g.doDeleteItem("clientMessage",d.value.id)&&c("regetData"),d.value.loading=!1};return(a,m)=>{const v=l("v-col"),k=l("v-row"),y=l("v-icon"),N=l("v-tooltip"),P=l("v-btn"),V=j,$=l("v-container");return u(),C("div",I,[t($,{fluid:""},{default:e(()=>[t(k,null,{default:e(()=>[t(v,{cols:"12"},{default:e(()=>[S]),_:1})]),_:1}),p.dashboardContact?(u(),D(k,{key:0,class:"px-4"},{default:e(()=>[t(v,{cols:"12",class:"section_container dashboard_table"},{default:e(()=>[t(o(R),{headers:o(f),items:p.dashboardContact.content,loading:p.loading},{"item.actions":e(({item:i})=>[i.selectable.read?b("",!0):(u(),C("span",z,[t(y,{color:"blue",style:{cursor:"pointer"},onClick:B=>M(i.selectable),loading:o(n)},{default:e(()=>[h("mdi-check-all")]),_:2},1032,["onClick","loading"]),t(N,{activator:"parent"},{default:e(()=>[h(" Mark as read ")]),_:1})])),t(P,{elevation:"0",color:"transparent",loading:i.selectable.loading,ripple:!1},{default:e(()=>[t(y,{color:"red",style:{cursor:"pointer"},class:"ml-2",size:"23",onClick:B=>(d.value=i.selectable,s.value=!0)},{default:e(()=>[h("mdi-delete")]),_:2},1032,["onClick"])]),_:2},1032,["loading"])]),_:1},8,["headers","items","loading"]),o(s)?(u(),D(V,{key:0,openPopup:o(s),onClosePopup:m[0]||(m[0]=i=>s.value=!1),onConfirmDelete:w},null,8,["openPopup"])):b("",!0)]),_:1})]),_:1})):b("",!0)]),_:1})])}}},Q=E,U={class:"dashboard_tests_page"},K={__name:"Contact",setup(p){const c=T(),{dashboardContact:g}=G(c),r=_(!0),n=async()=>{r.value=!0,await c.doGetDashboardContact(),r.value=!1};return L(()=>{n()}),(s,d)=>{const f=Q;return u(),C("div",U,[t(f,{dashboardContact:o(g),loading:o(r),onRegetData:n},null,8,["dashboardContact","loading"])])}}};export{K as default};
