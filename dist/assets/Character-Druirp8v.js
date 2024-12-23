import{r as m,U as b,b as w,u as j,j as e,i as v}from"./index-BZcJT81W.js";import{M as N}from"./MainLayout-CeJSiQZ4.js";import{S as y}from"./SideBar--3ItknLH.js";import{C as o}from"./CharacterCard-CpYdmZfW.js";const M=()=>{var i,x,h,g,u;const{courseOfLearningProcess:a}=m.useContext(b),{setIsLoading:d}=m.useContext(w),[t,f]=m.useState([]),n=j();m.useEffect(()=>{a.length!==0&&a[0].courseId.typeWritingSystem==="glyphs"?n("/character"):n("/alphabet")},[a]),m.useEffect(()=>{a.length===0&&n("/courses")},[a]),m.useEffect(()=>{(async()=>{try{const r=a.length!==0&&a[0].courseId._id;d(!0);const l=await v.get(`glyphs_alphabet?courseId=${r}`,{onDownloadProgress:p=>{+Math.round(p.loaded*100/p.total)>=100&&d(!1)}});f(l.data.data.glyphsAndAlphabet)}catch(r){return r}})()},[a]);const c=s=>{s.play()};return e.jsxs(N,{children:[e.jsxs("div",{className:"static mt-[5rem] md:absolute md:left-[5.5rem] md:w-[49vw] lg:left-[17rem] lg:w-[39vw] xl:w-[49vw]",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center bg-white px-6 py-2 text-center",children:[e.jsx("h1",{className:"mb-3 text-xl font-semibold text-gray-800 lg:text-2xl",children:"Hãy cùng học âm bính(Pinyin)"}),e.jsx("p",{className:"lg:text-md text-sm",children:"Làm quen với hệ thống âm thanh tiếng Trung"}),e.jsx("img",{src:"/images/logo/sound.png",className:"lazyload h-[4rem] lg:h-[5rem]"})]}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"px-6",children:[e.jsxs("h2",{className:"relative mt-[1rem] text-center text-xl font-bold",children:[e.jsx("span",{className:"absolute left-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"}),"Các thanh điệu",e.jsx("span",{className:"absolute right-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"})]}),e.jsx("p",{className:"text-md mb-4 text-center lg:text-lg",children:"Mỗi âm tiết có một trong năm thanh điệu"}),e.jsx("div",{className:"grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-3 xl:grid-cols-5",children:(x=(i=t==null?void 0:t.characters)==null?void 0:i.tones)==null?void 0:x.map(({character:s,example:r,audioUrl:l})=>e.jsx(o,{handleListenAudio:c,character:s,example:r,audioUrl:l},s))}),e.jsxs("div",{children:[e.jsxs("h2",{className:"relative mt-[1rem] text-center text-xl font-bold",children:[e.jsx("span",{className:"absolute left-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"}),"Âm thanh đầu",e.jsx("span",{className:"absolute right-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"})]}),e.jsx("p",{className:"text-md mb-4 text-center lg:text-lg",children:"Âm thanh đứng ở đầu một âm tiết"}),e.jsx("div",{className:"grid grid-cols-4 gap-4 sm:grid-cols-5",children:(g=(h=t==null?void 0:t.characters)==null?void 0:h.initials)==null?void 0:g.map(({character:s,example:r,audioUrl:l})=>e.jsx(o,{handleListenAudio:c,character:s,example:r,audioUrl:l},s))})]}),e.jsxs("div",{children:[e.jsxs("h2",{className:"relative mt-[2rem] text-center text-xl font-bold",children:[e.jsx("span",{className:"absolute left-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"}),"Âm thanh cuối",e.jsx("span",{className:"absolute right-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"})]}),e.jsx("p",{className:"text-md mb-4 text-center lg:text-lg",children:"Âm thanh đứng ở cuối một âm tiết"}),e.jsx("div",{className:"grid grid-cols-4 gap-4 sm:grid-cols-5",children:(u=t==null?void 0:t.characters)==null?void 0:u.finals.map(({character:s,example:r,audioUrl:l})=>e.jsx(o,{handleListenAudio:c,character:s,example:r,audioUrl:l},s))})]})]})})]}),e.jsx(y,{})]})};export{M as default};