import{D as i,E as a,G as o,H as r}from"./entry.8c88b42c.js";const f=i("testStore",{state:()=>({tests:[],filteredTests:[]}),actions:{async doGetTests(){await a.get(`${o().apiURL}/FutureLab/test?lang=${r().lang[0]}`).then(t=>{this.tests=t.data,this.filteredTests=JSON.parse(JSON.stringify(t.data))})},filterResults(t,s){if(t&&this.tests.content&&!s){const n=this.tests.content.filter(e=>e.nameEN.startsWith(t.toUpperCase())||e.nameEN.startsWith(t.toLowerCase())||e.nameAR.startsWith(t));this.filteredTests.content=n}else if(s&&this.tests.content&&!t){const n=this.tests.content.filter(e=>e.nameEN.includes(s.toLowerCase())||e.nameAR.includes(s));this.filteredTests.content=n}else this.filteredTests.content=this.tests.content}}});export{f as t};
