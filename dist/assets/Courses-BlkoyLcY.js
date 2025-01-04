import{j as t,r as u,U as b,b as I,d as N,u as w,i as f}from"./index-D-tmjxuU.js";import{M as _}from"./MainLayout-CScXwcHn.js";const L=({name:i,image:l,numOfLearner:o,handleAddCourse:n})=>t.jsxs("div",{onClick:n,className:"w-full bg-[#eeeeee] p-5",children:[t.jsx("img",{src:l,className:"w-full h-[7rem] lazyload"}),t.jsxs("p",{className:"text-center font-medium mt-5 font-noto text-sm",children:["Tiếng ",i]}),t.jsxs("p",{className:"text-center font-medium font-noto text-sm",children:["Số người học: ",o]})]}),P=()=>{const{courseOfLearningProcess:i,setCourseOfLearningProcess:l}=u.useContext(b),{setIsLoading:o}=u.useContext(I),[n,h]=u.useState([]),[x,c]=u.useState(0);let[S,p]=N();const g=w();u.useEffect(()=>{(async()=>{o(!0),await f.get("courses").then(e=>{var r,a;h(((a=(r=e==null?void 0:e.data)==null?void 0:r.data)==null?void 0:a.courses)||[]),o(!1)}).catch(e=>{o(!1)})})()},[]);const j=async(s,e)=>{if(x!==1)switch(c(1),s.status){case 1:case 2:await f.patch(`learning_process/update_recent_access?courseId=${e}`).then(r=>{g(`/learning?courseId=${e}`),l(a=>{const d=[...a],m=d.findIndex(C=>C.courseId._id.toString()===e);if(m>-1)return d.splice(m,1),d.unshift({...a[m]}),d}),c(0)}).catch(r=>{c(0)});return;default:try{await f.post(`learning_process/add_course?courseId=${e}`),p({courseId:e}),l(r=>{const a=[...r];return a.unshift({courseId:s,status:1,sections:[]}),a}),g(`/learning?courseId=${e}`),c(0)}catch(r){return c(0),r}}};return n.map(s=>s.status=0),i.forEach(s=>{const e=n.findIndex(r=>s.courseId._id.toString()===r._id.toString());e>-1&&(n[e].status=s.status)}),t.jsx(_,{children:t.jsxs("div",{className:"mt-[5rem] p-[0.8rem] md:absolute md:left-[5.5rem] lg:left-[17rem]",children:[t.jsxs("p",{className:"mb-4 font-noto text-xl font-medium md:mb-9",children:["Hãy lựa chọn các khóa học bạn cần:"," "]}),t.jsx("ul",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",children:n&&n.map((s,e)=>t.jsxs("li",{className:"relative cursor-pointer rounded-lg bg-[#e5e5e5] shadow-xl hover:shadow-2xl",children:[t.jsx(L,{handleAddCourse:()=>j(s,s._id),name:s.name,image:s.image,numOfLearner:s.numOfLearner}),s.status!==0?t.jsx("p",{className:"absolute right-0 top-0 z-10 flex w-10 cursor-pointer items-center justify-center rounded-bl-lg bg-red-200 font-noto hover:bg-[#eeeeee] hover:text-black",children:t.jsx("i",{className:"fa-solid fa-check text-2xl font-bold"})}):null]},e))})]})})};export{P as default};