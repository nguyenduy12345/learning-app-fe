import{r as m,b as g,j as e,i as h}from"./index-DfFjzv6a.js";import{M as p}from"./MainLayout-CaKANKVD.js";const N=()=>{var o,i,c;const[r,f]=m.useState([]),{setIsLoading:d}=m.useContext(g);m.useEffect(()=>{(async()=>{var l,n;try{d(!0);const s=await h.get("/users",{onDownloadProgress:x=>{+Math.round(x.loaded*100/x.total)>=100&&d(!1)}});f(((n=(l=s==null?void 0:s.data)==null?void 0:l.data)==null?void 0:n.users)||[])}catch(s){return s}})()},[]);const t=r&&r.sort((a,l)=>l.experiences-a.experiences);return t.forEach((a,l)=>{a.rank=l+1}),e.jsx(p,{children:e.jsxs("div",{className:"mx-auto mt-[5rem] flex w-full flex-col rounded-lg bg-white py-6 pt-0 font-noto shadow-lg sm:w-[80vw] md:absolute md:left-[8rem] md:top-[5rem] md:mt-0 lg:left-[20rem] lg:w-[65vw] xl:left-[25rem]",children:[e.jsxs("div",{className:"flex flex-col items-center py-[1.3rem] border-b-[2px] border-b-[#afacac]",children:[e.jsx("h1",{className:"mb-2 text-center text-xl font-bold text-green-600",children:"Xếp Hạng Người Chơi Theo Kinh Nghiệm"}),e.jsx("img",{src:"/images/logo/rank-logo.svg",className:"lazyload h-[5rem] md:h-[6rem]"}),e.jsxs("div",{className:"flex gap-5",children:[e.jsxs("div",{className:"relative h-[2.5rem] w-[2.5rem] md:h-[4.5rem] md:w-[4.5rem]",children:[e.jsx("img",{src:((o=t[2])==null?void 0:o.avatar)||"/images/logo/profile.jfif",alt:"Game Character",className:"lazyload rounded-full shadow-lg"}),e.jsx("div",{className:"absolute left-0 top-0 rounded-br-full bg-[#d3a67b] px-4 text-sm font-semibold text-white md:px-6 md:text-lg",children:"3"})]}),e.jsxs("div",{className:"relative h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem]",children:[e.jsx("img",{src:((i=t[0])==null?void 0:i.avatar)||"/images/logo/profile.jfif",alt:"Game Character",className:"lazyload rounded-full shadow-lg"}),e.jsx("div",{className:"absolute left-0 top-0 rounded-br-full bg-[#feea66] px-4 text-sm font-semibold text-white md:px-6 md:text-lg",children:"1"})]}),e.jsxs("div",{className:"relative h-[3rem] w-[3rem] md:h-[5rem] md:w-[5rem]",children:[e.jsx("img",{src:((c=t[1])==null?void 0:c.avatar)||"/images/logo/profile.jfif",alt:"Game Character",className:"lazyload rounded-full shadow-lg"}),e.jsx("div",{className:"absolute left-0 top-0 rounded-br-full bg-[#d6e4ef] px-4 text-sm font-semibold text-white md:px-6 md:text-lg",children:"2"})]})]})]}),e.jsx("div",{className:"h-auto w-full px-6",children:t.map((a,l)=>e.jsx("div",{className:`flex w-full items-center justify-between py-4 ${l%2===0?"bg-gray-50":"bg-white"} border-b`,children:e.jsxs("div",{className:"flex w-full items-center",children:[a.rank===1&&e.jsx("span",{className:" text-3xl text-yellow-500",children:"🥇"}),a.rank===2&&e.jsx("span",{className:" text-3xl text-gray-400",children:"🥈"}),a.rank===3&&e.jsx("span",{className:"text-bronze-400 text-3xl",children:"🥉"}),e.jsxs("div",{className:"flex items-center justify-center min-w-max",children:[e.jsx("p",{className:`${l>2?"text-lg font-bold lg:text-2xl text-center w-[2.5rem]":"hidden"}`,children:l+1}),e.jsx("img",{src:a!=null&&a.avatar?a==null?void 0:a.avatar:"/images/logo/profile.jfif",alt:a==null?void 0:a.fullName,className:"lazyload h-12 w-12 rounded-full border-2 border-gray-300 object-cover ml-[0.5rem]"})]}),e.jsxs("div",{className:"ml-4 w-full justify-between pr-6 text-sm sm:flex md:text-lg",children:[e.jsx("h3",{className:"font-bold text-gray-800",children:a==null?void 0:a.fullName}),e.jsxs("div",{className:"text-gray-600 flex items-center gap-2",children:[e.jsx("span",{children:a==null?void 0:a.experiences}),e.jsx("img",{src:"/images/logo/explogo.jfif",className:"h-[1rem] lg:h-[1.2rem]"})]})]})]})},a==null?void 0:a._id))})]})})};export{N as default};
