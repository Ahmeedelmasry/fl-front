import{K as w,L as k,M as B,N as A,O as _,k as Q,f as P,P as X,Q as Me,z as oe,R as je,S as me,U as q,V as re,W as Z,X as M,Y as G,b as f,Z as Ue,_ as V,$ as ze,a0 as Y,a1 as C,a2 as ue,a3 as se,a4 as Ke,a5 as We,a6 as qe,a7 as j,a8 as Qe,F as N,a9 as J,aa as Xe,d as ie,ab as Ye,q as de,ac as E,ad as Ze,ae as Je,af as et,ag as tt,ah as ce}from"./entry.08c37509.js";const at=w({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),ye=Symbol.for("vuetify:datatable:expanded");function lt(e){const a=k(e,"expandOnClick"),l=B(e,"expanded",e.expanded,r=>new Set(r),r=>[...r.values()]);function t(r,o){const i=new Set(l.value);o?i.add(r.value):i.delete(r.value),l.value=i}function n(r){return l.value.has(r.value)}function d(r){t(r,!n(r))}const u={expand:t,expanded:l,expandOnClick:a,isExpanded:n,toggleExpand:d};return A(ye,u),u}function be(){const e=_(ye);if(!e)throw new Error("foo");return e}const nt=w({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),pe=Symbol.for("vuetify:data-table-group");function ot(e){return{groupBy:B(e,"groupBy")}}function rt(e){const{groupBy:a,sortBy:l}=e,t=Q(new Set),n=P(()=>a.value.map(i=>({...i,order:i.order??!1})).concat(l.value));function d(i){return t.value.has(i.id)}function u(i){const s=new Set(t.value);d(i)?s.delete(i.id):s.add(i.id),t.value=s}function r(i){function s(v){const g=[];for(const p of v.items)"type"in p&&p.type==="group"?g.push(...s(p)):g.push(p);return g}return s({type:"group",items:i,id:"dummy",key:"dummy",value:"dummy",depth:0})}const o={sortByWithGroups:n,toggleGroup:u,opened:t,groupBy:a,extractRows:r,isGroupOpen:d};return A(pe,o),o}function he(){const e=_(pe);if(!e)throw new Error("Missing group!");return e}function ut(e,a){if(!e.length)return[];const l=new Map;for(const t of e){const n=X(t.raw,a);l.has(n)||l.set(n,[]),l.get(n).push(t)}return l}function Se(e,a){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!a.length)return[];const n=ut(e,a[0]),d=[],u=a.slice(1);return n.forEach((r,o)=>{const i=a[0],s=`${t}_${i}_${o}`;d.push({depth:l,id:s,key:i,value:o,items:u.length?Se(r,u,l+1,s):r,type:"group"})}),d}function xe(e,a){const l=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&l.push(t),(a.has(t.id)||t.value==null)&&l.push(...xe(t.items,a))):l.push(t);return l}function st(e,a,l){return{flatItems:P(()=>{if(!a.value.length)return e.value;const n=Se(e.value,a.value.map(d=>d.key));return xe(n,l.value)})}}function it(e){let{page:a,itemsPerPage:l,sortBy:t,groupBy:n,search:d}=e;const u=Me("VDataTable"),r=P(()=>({page:a.value,itemsPerPage:l.value,sortBy:t.value,groupBy:n.value,search:d.value}));oe(()=>d==null?void 0:d.value,()=>{a.value=1});let o=null;oe(r,()=>{je(o,r.value)||(u.emit("update:options",r.value),o=r.value)},{deep:!0,immediate:!0})}const dt=w({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Pe=Symbol.for("vuetify:data-table-pagination");function ct(e){const a=B(e,"page",void 0,t=>+(t??1)),l=B(e,"itemsPerPage",void 0,t=>+(t??10));return{page:a,itemsPerPage:l}}function ft(e){const{page:a,itemsPerPage:l,itemsLength:t}=e,n=P(()=>l.value===-1?0:l.value*(a.value-1)),d=P(()=>l.value===-1?t.value:Math.min(t.value,n.value+l.value)),u=P(()=>l.value===-1||t.value===0?1:Math.ceil(t.value/l.value));me(()=>{a.value>u.value&&(a.value=u.value)});function r(g){l.value=g,a.value=1}function o(){a.value=q(a.value+1,1,u.value)}function i(){a.value=q(a.value-1,1,u.value)}function s(g){a.value=q(g,1,u.value)}const v={page:a,itemsPerPage:l,startIndex:n,stopIndex:d,pageCount:u,itemsLength:t,nextPage:o,prevPage:i,setPage:s,setItemsPerPage:r};return A(Pe,v),v}function vt(){const e=_(Pe);if(!e)throw new Error("Missing pagination!");return e}function gt(e){const{items:a,startIndex:l,stopIndex:t,itemsPerPage:n}=e;return{paginatedItems:P(()=>n.value<=0?a.value:a.value.slice(l.value,t.value))}}const mt={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:a,value:l}=e;return new Set(l?[(t=a[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:a}=e;return a}},we={showSelectAll:!0,allSelected:e=>{let{currentPage:a}=e;return a},select:e=>{let{items:a,value:l,selected:t}=e;for(const n of a)l?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:a,currentPage:l,selected:t}=e;return we.select({items:l,value:a,selected:t})}},ke={showSelectAll:!0,allSelected:e=>{let{allItems:a}=e;return a},select:e=>{let{items:a,value:l,selected:t}=e;for(const n of a)l?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:a,allItems:l,selected:t}=e;return ke.select({items:l,value:a,selected:t})}},yt=w({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]}},"DataTable-select"),Te=Symbol.for("vuetify:data-table-selection");function bt(e,a){let{allItems:l,currentPage:t}=a;const n=B(e,"modelValue",e.modelValue,c=>new Set(c),c=>[...c.values()]),d=P(()=>l.value.filter(c=>c.selectable)),u=P(()=>t.value.filter(c=>c.selectable)),r=P(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return mt;case"all":return ke;case"page":default:return we}});function o(c){return re(c).every(m=>n.value.has(m.value))}function i(c){return re(c).some(m=>n.value.has(m.value))}function s(c,m){const h=r.value.select({items:c,value:m,selected:new Set(n.value)});n.value=h}function v(c){s([c],!o([c]))}function g(c){const m=r.value.selectAll({value:c,allItems:d.value,currentPage:u.value,selected:new Set(n.value)});n.value=m}const p=P(()=>n.value.size>0),y=P(()=>{const c=r.value.allSelected({allItems:d.value,currentPage:u.value});return o(c)}),S={toggleSelect:v,select:s,selectAll:g,isSelected:o,isSomeSelected:i,someSelected:p,allSelected:y,showSelectAll:r.value.showSelectAll};return A(Te,S),S}function U(){const e=_(Te);if(!e)throw new Error("Missing selection!");return e}const pt=w({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),De=Symbol.for("vuetify:data-table-sort");function ht(e){const a=B(e,"sortBy"),l=k(e,"mustSort"),t=k(e,"multiSort");return{sortBy:a,mustSort:l,multiSort:t}}function St(e){const{sortBy:a,mustSort:l,multiSort:t,page:n}=e,d=o=>{let i=a.value.map(v=>({...v}))??[];const s=i.find(v=>v.key===o.key);s?s.order==="desc"?l.value?s.order="asc":i=i.filter(v=>v.key!==o.key):s.order="desc":t.value?i=[...i,{key:o.key,order:"asc"}]:i=[{key:o.key,order:"asc"}],a.value=i,n&&(n.value=1)};function u(o){return!!a.value.find(i=>i.key===o.key)}const r={sortBy:a,toggleSort:d,isSorted:u};return A(De,r),r}function xt(){const e=_(De);if(!e)throw new Error("Missing sort!");return e}function Pt(e,a,l){const t=Z();return{sortedItems:P(()=>l.value.length?wt(a.value,l.value,t.current.value,e.customKeySort):a.value)}}function wt(e,a,l,t){const n=new Intl.Collator(l,{sensitivity:"accent",usage:"sort"});return[...e].sort((d,u)=>{for(let r=0;r<a.length;r++){const o=a[r].key,i=a[r].order??"asc";if(i===!1)continue;let s=X(d.raw,o),v=X(u.raw,o);if(i==="desc"&&([s,v]=[v,s]),t!=null&&t[o]){const g=t[o](s,v);if(!g)continue;return g}if(s instanceof Date&&v instanceof Date)return s.getTime()-v.getTime();if([s,v]=[s,v].map(g=>g!=null?g.toString().toLocaleLowerCase():g),s!==v)return M(s)&&M(v)?0:M(s)?-1:M(v)?1:!isNaN(s)&&!isNaN(v)?Number(s)-Number(v):n.compare(s,v)}return 0})}const Ie=w({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),fe=G()({name:"VDataTableFooter",props:Ie(),setup(e,a){let{slots:l}=a;const{t}=Z(),{page:n,pageCount:d,startIndex:u,stopIndex:r,itemsLength:o,itemsPerPage:i,setItemsPerPage:s}=vt(),v=P(()=>e.itemsPerPageOptions.map(g=>({...g,title:t(g.title)})));return()=>{var g;return f("div",{class:"v-data-table-footer"},[(g=l.prepend)==null?void 0:g.call(l),f("div",{class:"v-data-table-footer__items-per-page"},[f("span",null,[t(e.itemsPerPageText)]),f(Ue,{items:v.value,modelValue:i.value,"onUpdate:modelValue":p=>s(Number(p)),density:"compact",variant:"outlined","hide-details":!0},null)]),f("div",{class:"v-data-table-footer__info"},[f("div",null,[t(e.pageText,o.value?u.value+1:0,r.value,o.value)])]),f("div",{class:"v-data-table-footer__pagination"},[f(V,{icon:e.firstIcon,variant:"plain",onClick:()=>n.value=1,disabled:n.value===1,"aria-label":t(e.firstPageLabel)},null),f(V,{icon:e.prevIcon,variant:"plain",onClick:()=>n.value=Math.max(1,n.value-1),disabled:n.value===1,"aria-label":t(e.prevPageLabel)},null),e.showCurrentPage&&f("span",{key:"page",class:"v-data-table-footer__page"},[n.value]),f(V,{icon:e.nextIcon,variant:"plain",onClick:()=>n.value=Math.min(d.value,n.value+1),disabled:n.value===d.value,"aria-label":t(e.nextPageLabel)},null),f(V,{icon:e.lastIcon,variant:"plain",onClick:()=>n.value=d.value,disabled:n.value===d.value,"aria-label":t(e.lastPageLabel)},null)])])}}}),ee=ze({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,a)=>{let{slots:l,attrs:t}=a;const n=e.tag??"td";return f(n,Y({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:C(e.height),width:C(e.width),left:C(e.fixedOffset||null)}},t),{default:()=>{var d;return[(d=l.default)==null?void 0:d.call(l)]}})}),kt=w({headers:{type:Array,default:()=>[]}},"DataTable-header"),Ve=Symbol.for("vuetify:data-table-headers");function Tt(e,a){const l=Q([]),t=Q([]);me(()=>{var p,y,S;const d=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],u=d.flatMap((c,m)=>c.map(h=>({column:h,row:m}))),r=d.length,o={title:"",sortable:!1},i={...o,width:48};if((p=a==null?void 0:a.groupBy)!=null&&p.value.length){const c=u.findIndex(m=>{let{column:h}=m;return h.key==="data-table-group"});c<0?u.unshift({column:{...o,key:"data-table-group",title:"Group",rowspan:r},row:0}):u.splice(c,1,{column:{...o,...u[c].column},row:u[c].row})}if((y=a==null?void 0:a.showSelect)!=null&&y.value){const c=u.findIndex(m=>{let{column:h}=m;return h.key==="data-table-select"});c<0?u.unshift({column:{...i,key:"data-table-select",rowspan:r},row:0}):u.splice(c,1,{column:{...i,...u[c].column},row:u[c].row})}if((S=a==null?void 0:a.showExpand)!=null&&S.value){const c=u.findIndex(m=>{let{column:h}=m;return h.key==="data-table-expand"});c<0?u.push({column:{...i,key:"data-table-expand",rowspan:r},row:0}):u.splice(c,1,{column:{...i,...u[c].column},row:u[c].row})}const s=ue(r).map(()=>[]),v=ue(r).fill(0);u.forEach(c=>{let{column:m,row:h}=c,T=m.key;T==null&&(T="");for(let x=h;x<=h+(m.rowspan??1)-1;x++)s[x].push({...m,key:T,fixedOffset:v[x],sortable:m.sortable??!!m.key}),v[x]+=Number(m.width??0)}),s.forEach(c=>{for(let m=c.length;m--;m>=0)if(c[m].fixed){c[m].lastFixed=!0;return}});const g=new Set;l.value=s.map(c=>{const m=[];for(const h of c)g.has(h.key)||(g.add(h.key),m.push(h));return m}),t.value=s.at(-1)??[]});const n={headers:l,columns:t};return A(Ve,n),n}function z(){const e=_(Ve);if(!e)throw new Error("Missing headers!");return e}const Ce=w({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:se,default:"$sortAsc"},sortDescIcon:{type:se,default:"$sortDesc"},...Ke()},"VDataTableHeaders"),ve=G()({name:"VDataTableHeaders",props:Ce(),setup(e,a){let{slots:l,emit:t}=a;const{toggleSort:n,sortBy:d,isSorted:u}=xt(),{someSelected:r,allSelected:o,selectAll:i,showSelectAll:s}=U(),{columns:v,headers:g}=z(),{loaderClasses:p}=We(e),y=(x,b)=>{if(!(!e.sticky&&!x.fixed))return{position:"sticky",zIndex:x.fixed?4:e.sticky?3:void 0,left:x.fixed?C(x.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${b})`:void 0}};function S(x){const b=d.value.find(I=>I.key===x.key);return b?b.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:c,backgroundColorStyles:m}=qe(e,"color"),h=P(()=>({headers:g.value,columns:v.value,toggleSort:n,isSorted:u,sortBy:d.value,someSelected:r.value,allSelected:o.value,selectAll:i,getSortIcon:S,getFixedStyles:y})),T=x=>{let{column:b,x:I,y:F}=x;const K=b.key==="data-table-select"||b.key==="data-table-expand";return f(ee,{tag:"th",align:b.align,class:["v-data-table__th",{"v-data-table__th--sortable":b.sortable,"v-data-table__th--sorted":u(b)},p.value],style:{width:C(b.width),minWidth:C(b.width),...y(b,F)},colspan:b.colspan,rowspan:b.rowspan,onClick:b.sortable?()=>n(b):void 0,lastFixed:b.lastFixed,noPadding:K},{default:()=>{var H;const R=`column.${b.key}`,L={column:b,selectAll:i,isSorted:u,toggleSort:n,sortBy:d.value,someSelected:r.value,allSelected:o.value,getSortIcon:S};return l[R]?l[R](L):b.key==="data-table-select"?((H=l["column.data-table-select"])==null?void 0:H.call(l,L))??(s&&f(J,{modelValue:o.value,indeterminate:r.value&&!o.value,"onUpdate:modelValue":i},null)):f("div",{class:"v-data-table-header__content"},[f("span",null,[b.title]),b.sortable&&f(Xe,{key:"icon",class:"v-data-table-header__sort-icon",icon:S(b)},null),e.multiSort&&u(b)&&f("div",{key:"badge",class:["v-data-table-header__sort-badge",...c.value],style:m.value},[d.value.findIndex(O=>O.key===b.key)+1])])}})};j(()=>f(N,null,[l.headers?l.headers(h.value):g.value.map((x,b)=>f("tr",null,[x.map((I,F)=>f(T,{column:I,x:F,y:b},null))])),e.loading&&f("tr",{class:"v-data-table-progress"},[f("th",{colspan:v.value.length},[f(Qe,{name:"v-data-table-progress",active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:l.loader})])])]))}}),Dt=w({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),It=G()({name:"VDataTableGroupHeaderRow",props:Dt(),setup(e,a){let{slots:l}=a;const{isGroupOpen:t,toggleGroup:n,extractRows:d}=he(),{isSelected:u,isSomeSelected:r,select:o}=U(),{columns:i}=z(),s=P(()=>d([e.item]));return()=>f("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[i.value.map(v=>{var g,p;if(v.key==="data-table-group"){const y=t(e.item)?"$expand":"$next",S=()=>n(e.item);return((g=l["data-table-group"])==null?void 0:g.call(l,{item:e.item,count:s.value.length,props:{icon:y,onClick:S}}))??f(ee,{class:"v-data-table-group-header-row__column"},{default:()=>[f(V,{size:"small",variant:"text",icon:y,onClick:S},null),f("span",null,[e.item.value]),f("span",null,[ie("("),s.value.length,ie(")")])]})}if(v.key==="data-table-select"){const y=u(s.value),S=r(s.value)&&!y,c=m=>o(s.value,m);return((p=l["data-table-select"])==null?void 0:p.call(l,{props:{modelValue:y,indeterminate:S,"onUpdate:modelValue":c}}))??f("td",null,[f(J,{modelValue:y,indeterminate:S,"onUpdate:modelValue":c},null)])}return f("td",null,null)})])}}),Vt=w({index:Number,item:Object,onClick:Function},"VDataTableRow"),Ct=Ye({name:"VDataTableRow",props:Vt(),setup(e,a){let{slots:l}=a;const{isSelected:t,toggleSelect:n}=U(),{isExpanded:d,toggleExpand:u}=be(),{columns:r}=z();j(()=>f("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!e.onClick}],onClick:e.onClick},[e.item&&r.value.map((o,i)=>f(ee,{align:o.align,fixed:o.fixed,fixedOffset:o.fixedOffset,lastFixed:o.lastFixed,noPadding:o.key==="data-table-select"||o.key==="data-table-expand",width:o.width},{default:()=>{var p,y;const s=e.item,v=`item.${o.key}`,g={index:e.index,item:e.item,columns:r.value,isSelected:t,toggleSelect:n,isExpanded:d,toggleExpand:u};return l[v]?l[v](g):o.key==="data-table-select"?((p=l["item.data-table-select"])==null?void 0:p.call(l,g))??f(J,{disabled:!s.selectable,modelValue:t([s]),onClick:de(()=>n(s),["stop"])},null):o.key==="data-table-expand"?((y=l["item.data-table-expand"])==null?void 0:y.call(l,g))??f(V,{icon:d(s)?"$collapse":"$expand",size:"small",variant:"text",onClick:de(()=>u(s),["stop"])},null):E(s.columns,o.key)}}))]))}}),Be=w({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number,"onClick:row":Function},"VDataTableRows"),ge=G()({name:"VDataTableRows",props:Be(),setup(e,a){let{emit:l,slots:t}=a;const{columns:n}=z(),{expandOnClick:d,toggleExpand:u,isExpanded:r}=be(),{isSelected:o,toggleSelect:i}=U(),{toggleGroup:s,isGroupOpen:v}=he(),{t:g}=Z();return j(()=>{var p;return e.loading&&t.loading?f("tr",{class:"v-data-table-rows-loading",key:"loading"},[f("td",{colspan:n.value.length},[t.loading()])]):!e.loading&&!e.items.length&&!e.hideNoData?f("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[f("td",{colspan:n.value.length},[((p=t["no-data"])==null?void 0:p.call(t))??g(e.noDataText)])]):f(N,null,[e.items.map((y,S)=>{var h;if(y.type==="group")return t["group-header"]?t["group-header"]({index:S,item:y,columns:n.value,isExpanded:r,toggleExpand:u,isSelected:o,toggleSelect:i,toggleGroup:s,isGroupOpen:v}):f(It,{key:`group-header_${y.id}`,item:y},t);const c={index:S,item:y,columns:n.value,isExpanded:r,toggleExpand:u,isSelected:o,toggleSelect:i},m={...c,props:{key:`item_${y.key??y.index}`,onClick:d.value||e["onClick:row"]?T=>{var x;d.value&&u(y),(x=e["onClick:row"])==null||x.call(e,T,{item:y})}:void 0,index:S,item:y}};return f(N,null,[t.item?t.item(m):f(Ct,m.props,t),r(y)&&((h=t["expanded-row"])==null?void 0:h.call(t,c))])})])}),{}}}),Bt=w({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataTable-items");function At(e,a,l,t){const n=e.returnObject?a:E(a,e.itemValue),d=E(a,e.itemSelectable,!0),u=t.reduce((r,o)=>(r[o.key]=E(a,o.value??o.key),r),{});return{type:"item",key:e.returnObject?E(a,e.itemValue):n,index:l,value:n,selectable:d,columns:u,raw:a}}function _t(e,a,l){return a.map((t,n)=>At(e,t,n,l))}function Ft(e,a){return{items:P(()=>_t(e,e.items,a.value))}}const Ot=w({...Be(),width:[String,Number],search:String,...at(),...nt(),...kt(),...Bt(),...yt(),...pt(),...Ce(),...Ze()},"DataTable"),$t=w({...dt(),...Ot(),...Je(),...Ie()},"VDataTable"),Nt=G()({name:"VDataTable",props:$t(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,a){let{emit:l,slots:t}=a;const{groupBy:n}=ot(e),{sortBy:d,multiSort:u,mustSort:r}=ht(e),{page:o,itemsPerPage:i}=ct(e),{columns:s,headers:v}=Tt(e,{groupBy:n,showSelect:k(e,"showSelect"),showExpand:k(e,"showExpand")}),{items:g}=Ft(e,s),p=k(e,"search"),{filteredItems:y}=et(e,g,p,{transform:W=>W.columns}),{toggleSort:S}=St({sortBy:d,multiSort:u,mustSort:r,page:o}),{sortByWithGroups:c,opened:m,extractRows:h,isGroupOpen:T,toggleGroup:x}=rt({groupBy:n,sortBy:d}),{sortedItems:b}=Pt(e,y,c),{flatItems:I}=st(b,n,m),F=P(()=>I.value.length),{startIndex:K,stopIndex:R,pageCount:L,setItemsPerPage:H}=ft({page:o,itemsPerPage:i,itemsLength:F}),{paginatedItems:O}=gt({items:I,startIndex:K,stopIndex:R,itemsPerPage:i}),te=P(()=>h(O.value)),{isSelected:Ae,select:_e,selectAll:Fe,toggleSelect:Oe,someSelected:$e,allSelected:Ee}=bt(e,{allItems:g,currentPage:te}),{isExpanded:Ne,toggleExpand:Ge}=lt(e);it({page:o,itemsPerPage:i,sortBy:d,groupBy:n,search:p}),tt({VDataTableRows:{hideNoData:k(e,"hideNoData"),noDataText:k(e,"noDataText"),loading:k(e,"loading"),loadingText:k(e,"loadingText")}});const D=P(()=>({page:o.value,itemsPerPage:i.value,sortBy:d.value,pageCount:L.value,toggleSort:S,setItemsPerPage:H,someSelected:$e.value,allSelected:Ee.value,isSelected:Ae,select:_e,selectAll:Fe,toggleSelect:Oe,isExpanded:Ne,toggleExpand:Ge,isGroupOpen:T,toggleGroup:x,items:te.value,groupedItems:O.value,columns:s.value,headers:v.value}));return j(()=>{const[W]=fe.filterProps(e),[Re]=ve.filterProps(e),[Le]=ge.filterProps(e),[He]=ce.filterProps(e);return f(ce,Y({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},He),{top:()=>{var $;return($=t.top)==null?void 0:$.call(t,D.value)},default:()=>{var $,ae,le,ne;return t.default?t.default(D.value):f(N,null,[($=t.colgroup)==null?void 0:$.call(t,D.value),f("thead",null,[f(ve,Re,t)]),(ae=t.thead)==null?void 0:ae.call(t,D.value),f("tbody",null,[t.body?t.body(D.value):f(ge,Y(Le,{items:O.value}),t)]),(le=t.tbody)==null?void 0:le.call(t,D.value),(ne=t.tfoot)==null?void 0:ne.call(t,D.value)])},bottom:()=>t.bottom?t.bottom(D.value):f(N,null,[f(fe,W,{prepend:t["footer.prepend"]})])})}),{}}});export{Nt as V};
