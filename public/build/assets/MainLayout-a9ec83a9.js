import{o as n,f as i,b as e,a,w as t,d as o,n as r,u as l,k as d,r as c,g as u,m as _}from"./app-9416164a.js";const f={class:"flex flex-wrap md:flex-no-wrap w-full max-w-5xl mx-auto",key:"main"},m={class:"w-full md:w-1/3 md:border-r-2 border-red-200 md:min-h-screen"},h={class:"sticky top-0 p-8 max-h-screen overflow-y-auto"},p=e("div",{class:"w-full"},[e("div",{class:"w-16 h-16 bg-red-500 rounded-full"})],-1),y=e("p",{class:"font-bold py-8"},"John Doe",-1),b=e("p",{class:"text-gray-600"}," Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. ",-1),w={class:"flex flex-wrap my-8"},g={class:"w-full my-2"},v={class:"w-full my-2"},x={class:"w-full my-2"},k=e("p",{class:"text-gray-500 font-hairline text-sm italic"},"© All Rights reserved",-1),C={key:0,class:"w-full md:w-2/3 overflow-hidden"},M={data(){return{animate:!1}},mounted(){this.animate=!0}},A=Object.assign(M,{__name:"MainLayout",setup(N){return(s,V)=>(n(),i("div",f,[e("div",m,[e("div",h,[p,y,b,e("div",w,[e("span",g,[a(l(d),{href:s.route("home"),class:r([{"border-b border-gray-600":s.$page.url==="/home"},"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"])},{default:t(()=>[o(" Articles ")]),_:1},8,["href","class"])]),e("span",v,[a(l(d),{href:s.route("about"),class:r({"border-b border-gray-600":s.$page.url==="/about"})},{default:t(()=>[o(" About Me ")]),_:1},8,["href","class"])]),e("span",x,[a(l(d),{href:s.route("contact"),class:r({"border-b border-gray-600":s.$page.url==="/contact"})},{default:t(()=>[o(" Contact Me ")]),_:1},8,["href","class"])])]),k])]),a(_,{name:"page",mode:"out-in",appear:""},{default:t(()=>[s.animate?(n(),i("div",C,[c(s.$slots,"default")])):u("",!0)]),_:3})]))}});export{A as _};