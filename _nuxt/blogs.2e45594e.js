import{D as i,E as o,G as s,H as l}from"./entry.08c37509.js";const h=i("dashboardBlogsStore",{state:()=>({dashboardBlogs:"",latest:[],common:[],blogDetails:"",filteredBlogs:[],filteredCommon:[],filteredLatest:[]}),actions:{async doGetDashboardBlogs(){this.dashboardBlogs=[],await o.get(`${s().apiURL}/FutureLab/blog?lang=${l().lang[0]}`).then(e=>{const t=JSON.parse(JSON.stringify(e.data)),a=JSON.parse(JSON.stringify(e.data)),n=t.content.filter(r=>r.latest),d=t.content.filter(r=>r.common);t.content=n,a.content=d,this.common=a,this.filteredCommon=a,this.latest=t,this.filteredLatest=t,this.filteredBlogs=JSON.parse(JSON.stringify(e.data)),this.dashboardBlogs=e.data})},filterResults(e){if(e&&this.dashboardBlogs.content){const t=this.dashboardBlogs.content.filter(a=>a.titleEN.includes(e.toUpperCase())||a.titleEN.includes(e.toLowerCase())||a.titleAR.includes(e));this.filteredBlogs.content=t}else this.filteredBlogs=this.dashboardBlogs},async doAddDashboardBlogs(e){let t;return await o({data:e,method:"POST",url:`${s().apiURL}/FutureLab/blog?lang=${l().lang[0]}`,headers:{"Content-Type":"multipart/form-data"}}).then(a=>{t=!0,s().callResponse(!0,a.data.message,1)}).catch(a=>{t=!1,s().callResponse(!0,a.response.data.message,2)}),t},async doUpdateDashboardBlogs(e){let t;return await o({data:e,method:"PATCH",url:`${s().apiURL}/FutureLab/blog?lang=${l().lang[0]}`,headers:{"Content-Type":"multipart/form-data"}}).then(a=>{t=!0,this.dashboardBlogs=a.data,s().callResponse(!0,a.data.message,1)}).catch(a=>{s().callResponse(!0,a.response.data.message,2),t=!1}),t},async doGetBlogDetails(e){this.blogDetails={},await o.get(`${s().apiURL}/FutureLab/blog/${e}?lang=${l().lang[0]}`).then(t=>{this.blogDetails=t.data})}}});export{h as d};
