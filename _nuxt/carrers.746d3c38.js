import{D as n,E as t,G as a,H as o}from"./entry.8c88b42c.js";const c=n("dashboardCareersStore",{state:()=>({dashboardCareers:[],careerCV:""}),actions:{async doGetDashboardCareers(){this.dashboardCareers=[],await t.get(`${a().apiURL}/FutureLab/career?lang=${o().lang[0]}`).then(e=>{this.dashboardCareers=e.data})},async doGetCareerCV(e){this.careerCV="",await t.get(`${a().apiURL}/FutureLab/career/cv/${e}?lang=${o().lang[0]}`).then(r=>{this.careerCV=r.data})},async doAddDashboardCareers(e,r){let s;return await t({data:e,method:"POST",url:`${a().apiURL}/FutureLab/career?lang=${o().lang[0]}&sendTo=ahmed.elmazry@gmail.com`}).then(d=>{s=!0,r?a().callResponse(!0,"Your application has been sent successfully!",1):a().callResponse(!0,d.data.message,1)}).catch(d=>{s=!1,a().callResponse(!0,d.response.data.message,2)}),s},async doUpdateDashboardCareers(e){let r;return await t({data:e,method:"PATCH",url:`${a().apiURL}/FutureLab/career?lang=${o().lang[0]}`}).then(s=>{r=!0,a().callResponse(!0,s.data.message,1)}).catch(s=>{a().callResponse(!0,s.response.data.message,2),r=!1}),r}}});export{c as d};
