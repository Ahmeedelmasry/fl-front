import{D as g,E as o,G as s,H as c}from"./entry.08c37509.js";const n=g("packageStore",{state:()=>({packages:[],packageCategories:[]}),actions:{async doGetPackages(){await o.get(`${s().apiURL}/FutureLab/package?lang=${c().lang[0]}`).then(e=>{this.packages=e.data,e.data.content.forEach(a=>{!this.packageCategories.find(t=>t.nameEN==a.category.nameEN)&&a.category.nameEN!="HOME Page PACKAGES SECTION"&&this.packageCategories.push(a.category)})})}}});export{n as p};
