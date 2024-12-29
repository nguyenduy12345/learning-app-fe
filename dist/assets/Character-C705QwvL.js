import{r as m,U as p,b,u as w,j as e,i as j}from"./index-kWVQlEgb.js";import{M as v}from"./MainLayout-C4rj-mKh.js";import{S as N}from"./SideBar-C-XfX46U.js";import{C as i}from"./CharacterCard-dbWJ4W7j.js";const L=()=>{var d,x,h,g,u;const{courseOfLearningProcess:a}=m.useContext(p),{setIsLoading:n}=m.useContext(b),[t,f]=m.useState([]),c=w();m.useEffect(()=>{a.length!==0&&a[0].courseId.typeWritingSystem==="glyphs"?c("/character"):c("/alphabet")},[a]),m.useEffect(()=>{a.length===0&&c("/courses")},[a]),m.useEffect(()=>{(async()=>{try{const r=a.length!==0&&a[0].courseId._id;n(!0);const l=await j.get(`glyphs_alphabet?courseId=${r}`);f(l.data.data.glyphsAndAlphabet),n(!1)}catch(r){return n(!1),r}})()},[a]);const o=s=>{s.play()};return e.jsxs(v,{children:[e.jsxs("div",{className:"static mt-[5rem] md:absolute md:left-[5.5rem] md:w-[49vw] lg:left-[17rem] lg:w-[39vw] xl:w-[49vw]",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center bg-white px-6 py-2 text-center",children:[e.jsx("h1",{className:"mb-3 text-xl font-semibold text-gray-800 lg:text-2xl",children:"Hãy cùng học âm bính(Pinyin)"}),e.jsx("p",{className:"lg:text-md text-sm",children:"Làm quen với hệ thống âm thanh tiếng Trung"}),e.jsx("img",{src:"/images/logo/sound.png",className:"lazyload h-[4rem] lg:h-[5rem]"})]}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"px-6",children:[e.jsxs("h2",{className:"relative mt-[1rem] text-center text-xl font-bold",children:[e.jsx("span",{className:"absolute left-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"}),"Các thanh điệu",e.jsx("span",{className:"absolute right-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"})]}),e.jsx("p",{className:"text-md mb-4 text-center lg:text-lg",children:"Mỗi âm tiết có một trong năm thanh điệu"}),e.jsx("div",{className:"grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-3 xl:grid-cols-5",children:(x=(d=t==null?void 0:t.characters)==null?void 0:d.tones)==null?void 0:x.map(({character:s,example:r,audioUrl:l})=>e.jsx(i,{handleListenAudio:o,character:s,example:r,audioUrl:l},s))}),e.jsxs("div",{children:[e.jsxs("h2",{className:"relative mt-[1rem] text-center text-xl font-bold",children:[e.jsx("span",{className:"absolute left-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"}),"Âm thanh đầu",e.jsx("span",{className:"absolute right-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"})]}),e.jsx("p",{className:"text-md mb-4 text-center lg:text-lg",children:"Âm thanh đứng ở đầu một âm tiết"}),e.jsx("div",{className:"grid grid-cols-4 gap-4 sm:grid-cols-5",children:(g=(h=t==null?void 0:t.characters)==null?void 0:h.initials)==null?void 0:g.map(({character:s,example:r,audioUrl:l})=>e.jsx(i,{handleListenAudio:o,character:s,example:r,audioUrl:l},s))})]}),e.jsxs("div",{children:[e.jsxs("h2",{className:"relative mt-[2rem] text-center text-xl font-bold",children:[e.jsx("span",{className:"absolute left-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"}),"Âm thanh cuối",e.jsx("span",{className:"absolute right-[10%] top-1/2 hidden -translate-y-1/2 transform border-t border-[#5a5757] sm:block sm:w-[20vw] md:w-[3rem] xl:w-[9rem]"})]}),e.jsx("p",{className:"text-md mb-4 text-center lg:text-lg",children:"Âm thanh đứng ở cuối một âm tiết"}),e.jsx("div",{className:"grid grid-cols-4 gap-4 sm:grid-cols-5",children:(u=t==null?void 0:t.characters)==null?void 0:u.finals.map(({character:s,example:r,audioUrl:l})=>e.jsx(i,{handleListenAudio:o,character:s,example:r,audioUrl:l},s))})]})]})})]}),e.jsx(N,{})]})};export{L as default};
