import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import{f as o,b as t,F as i,l as p,o as s,t as r,a as l,w as c,d as u,m}from"./app-fd622c3c.js";const _={},f={class:"text-sm font-bold uppercase"},g={class:"pt-4"};function x(n,h){const a=m("RouterLink");return s(),o("div",null,[t("ul",null,[(s(!0),o(i,null,p(n.$store.state.articles.recents,e=>(s(),o("li",{key:e.slug,class:"p-8"},[t("span",f,r(n.dayJs(e.created_at).format("MMMM YYYY")),1),t("h2",null,[l(a,{to:{name:"BlogController@SingleArticle",params:{article:e.slug}},class:"text-2xl font-bold hover:underline cursor-pointer pt-2 pb-4"},{default:c(()=>[u(r(e.title),1)]),_:2},1032,["to"])]),t("p",null,r(e.excerpt),1),t("div",g,[l(a,{to:{name:"BlogController@SingleArticle",params:{article:e.slug}},class:"hover:underline cursor-pointer text-red-600"},{default:c(()=>[u(" Read ")]),_:2},1032,["to"])])]))),128))])])}const B=d(_,[["render",x]]);export{B as default};
