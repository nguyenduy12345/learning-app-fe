import{r as i,U as x,j as e,L as s}from"./index-DfFjzv6a.js";const d=()=>{var n,a;const{profile:r,missons:l}=i.useContext(x);return e.jsxs("div",{className:"fixed top-[7rem] z-10 hidden h-screen flex-col gap-4 font-noto text-[#777777] md:left-[62.5vw] md:flex md:w-[35vw] lg:left-[67.5vw] lg:w-[30vw] xl:left-[70vw] xl:w-[28vw]",children:[e.jsxs("div",{className:"h-[9rem] w-full rounded-2xl border-[2px] border-[#e5e5e5] bg-white py-6",children:[e.jsx("h4",{className:"mb-4 ml-4 font-noto text-xl font-medium text-black",children:"Số ngày hoạt động"}),e.jsxs("div",{className:"flex items-center gap-3 px-4",children:[e.jsx("div",{className:"mt-2 flex h-6 w-full items-center justify-center rounded-xl bg-[#58cc02]",children:e.jsxs("span",{className:"text-md font-bold text-white",children:[((n=r==null?void 0:r.activeDays)==null?void 0:n.length)===0?"1":(a=r==null?void 0:r.activeDays)==null?void 0:a.length," ","ngày"]})}),e.jsx("img",{src:"/images/logo/daygo.webp",className:"lazyload ml-1 h-12 w-16"})]})]}),e.jsxs("div",{className:"w-full rounded-2xl border-[2px] border-[#e5e5e5] bg-white py-6",children:[e.jsxs("div",{className:"mx-4 flex justify-between",children:[e.jsx("h4",{className:"font-noto text-xl font-medium text-black",children:"Nhiệm vụ"}),e.jsx(s,{to:"/missons",className:"text-md flex cursor-pointer items-center font-noto text-blue-500",children:"Xem thêm"})]}),e.jsx("ul",{className:"text-md mt-2 flex md:max-h-[9rem] lg:max-h-[14rem] flex-col gap-3 overflow-hidden rounded-2xl",children:l.length!==0&&l.map((t,c)=>t.completed===!1&&e.jsxs("li",{className:"mt-2 flex w-full px-4",children:[e.jsxs("ul",{className:"flex-grow items-start",children:[e.jsx("li",{className:"text-xs lg:text-md text-black",children:t.missonId.misson}),e.jsxs("li",{className:"relative mt-2 h-6 w-full rounded-xl bg-[#e5e5e5]",children:[e.jsx("div",{style:{width:`${+t.currentProgress<=+t.missonId.numberOfRequirements?+t.currentProgress/+t.missonId.numberOfRequirements*100:100}%`},className:"absolute top-[1.3px] h-[1.3rem] rounded-xl bg-[#58cc02] transition ease-linear"}),e.jsxs("p",{className:"text-md absolute left-[40%] top-0 font-bold tracking-wider text-[#ffffff]",children:[t.currentProgress," /"," ",t.missonId.numberOfRequirements]})]})]}),e.jsx("div",{className:"ml-4 flex items-end",children:e.jsx("img",{src:"/images/logo/misson-gift.svg",className:"lazyload h-9 w-9"})})]},c))})]}),e.jsxs("ul",{className:"m-2 mt-0 flex flex-wrap items-center justify-center gap-3 text-sm font-bold uppercase text-[#afafaf]",children:[e.jsx("li",{className:"cursor-pointer hover:text-green-500",children:e.jsx(s,{to:"",children:"About"})}),e.jsx("li",{className:"cursor-pointer hover:text-green-500",children:e.jsx(s,{to:"",children:"Blog"})}),e.jsx("li",{className:"cursor-pointer hover:text-green-500",children:e.jsx(s,{to:"",children:"Store"})}),e.jsx("li",{className:"cursor-pointer hover:text-green-500",children:e.jsx(s,{to:"",children:"Efficacy"})}),e.jsx("li",{className:"cursor-pointer hover:text-green-500",children:e.jsx(s,{to:"",children:"Careers"})}),e.jsx("li",{className:"cursor-pointer hover:text-green-500",children:e.jsx(s,{to:"",children:"INVESTORS"})}),e.jsx("li",{className:"cursor-pointer hover:text-green-500",children:e.jsx(s,{to:"",children:"Terms"})}),e.jsx("li",{className:"cursor-pointer hover:text-green-500",children:e.jsx(s,{to:"",children:"Privacy"})})]})]})};export{d as S};
