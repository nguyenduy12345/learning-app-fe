import{j as e,r as d,U as lt,b as ct,d as it,u as dt,i as I}from"./index-CDR7SF52.js";import{M as ut}from"./MainLayout-BCE-4O7i.js";import xt from"./Lesson-DbHZtTWO.js";import{S as mt}from"./SideBar-BtRvGVNn.js";const Q=({currentLesson:l,lessonLength:b})=>{const m=2*Math.PI*55,S=m-(l>b,(l-1)/(b||6)*m),r=80;return e.jsxs("svg",{width:"250",height:"250",className:"rotate-90 transform absolute -left-[7.89rem] -bottom-[8rem] flex justify-center items-center",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:r,cy:r,r:55,stroke:"#ddd",strokeWidth:8,fill:"none"}),e.jsx("circle",{cx:r,cy:r,r:55,stroke:"#58cc02",strokeWidth:8,fill:"none",strokeDasharray:m,strokeDashoffset:S,className:"transition-all duration-500"})]})},pt=()=>{var H,R,T,W,q;const{courseOfLearningProcess:l,setCourseOfLearningProcess:b}=d.useContext(lt),{setIsLoading:$}=d.useContext(ct),[s,m]=d.useState([]);let[S]=it();const r=S.get("sectionId"),w=S.get("courseId"),V=S.get("index"),[_,X]=d.useState(),[Y,u]=d.useState(0),[Z,z]=d.useState(!1),[f,k]=d.useState([]),[C,v]=d.useState(0),[O,tt]=d.useState(0),[et,st]=d.useState(0),[E,nt]=d.useState(),P=dt();d.useEffect(()=>{(async()=>{$(!0),await I.get(`sections?sectionId=${r}`).then(n=>{nt(n.data.data.section),$(!1)}).catch(n=>{$(!1)})})()},[r]),d.useEffect(()=>{let t=0,n=0;for(let o=0;o<C-1;o++)f[o]&&(t+=f[o].gems,n+=f[o].experiences);tt(t),st(n)},[C]),d.useEffect(()=>{(async()=>{var n,o;if(!r){P("/learning");return}try{const c=await I.get(`milestones?sectionId=${r}`);m(((o=(n=c==null?void 0:c.data)==null?void 0:n.data)==null?void 0:o.milestones)||[])}catch(c){return c}})()},[r]),d.useEffect(()=>{(async()=>{try{if(s.length===0)return;await I.patch("learning_process/update_section",{courseId:w,sectionId:r,totalMilestone:s==null?void 0:s.length}),b(n=>{const o=[...n],c=o==null?void 0:o.findIndex(y=>w===y.courseId._id.toString()),L=o[c].sections.findIndex(y=>y.sectionId===r);return o[c].sections[L].totalMilestone=s==null?void 0:s.length,o})}catch(n){return n}})()},[r,s.length]),s&&s.map(t=>(t.status=0,t.show=t.show?t.show:!1,t.currentLesson=0,t.totalLesson=0,t.totalLessonDone=0));const B=l==null?void 0:l.findIndex(t=>t.courseId._id.toString()===w.toString()),ot=(R=(H=l[B])==null?void 0:H.sections)==null?void 0:R.findIndex(t=>t.sectionId.toString()===r.toString());(q=(W=(T=l[B])==null?void 0:T.sections[ot])==null?void 0:W.milestones)==null||q.forEach(t=>{const n=s.findIndex(o=>t.milestoneId.toString()===o._id.toString());n>-1&&(s[n].status=t.status,s[n].currentLesson=t.currentLesson,s[n].totalLesson=t.totalLesson,s[n].totalLessonDone=t.totalLessonDone)});const rt=async(t,n,o)=>{var U,F,G,M,A,J,K;const c=l==null?void 0:l.findIndex(p=>p.courseId._id.toString()===w.toString()),L=(F=(U=l[c])==null?void 0:U.sections)==null?void 0:F.findIndex(p=>p.sectionId.toString()===r.toString()),y=(A=(M=(G=l[c])==null?void 0:G.sections[L])==null?void 0:M.milestones)==null?void 0:A.findIndex(p=>p.milestoneId.toString()===o.toString());if(Y!==1){if(o.toString()===(_==null?void 0:_.toString())){s[n].show=!s[n].show,m([...s]),u(0);return}if(X(o),t.show){s.map(p=>p.show=!1),m([...s]),u(0);return}if(u(1),((J=s[n-1])==null?void 0:J.status)===1){u(0);return}if(((K=s[n-1])==null?void 0:K.status)===0){u(0);return}if(n===0){if(y>-1){await I.get(`/lessons?sectionId=${r}&milestoneId=${o}`).then(i=>{var h,g,x,a;k((g=(h=i==null?void 0:i.data)==null?void 0:h.data)==null?void 0:g.lessons),v((a=(x=l[c])==null?void 0:x.sections[L])==null?void 0:a.milestones[y].currentLesson),s.map(j=>j.show=!1),s[n].show=!s[n].show,m([...s]),u(0)}).catch(()=>{u(0)});return}if(await I.patch("/learning_process/add_milestone",{courseId:w,sectionId:r,milestoneId:o})){await I.get(`/lessons?sectionId=${r}&milestoneId=${o}`).then(i=>{var h,g;k((g=(h=i==null?void 0:i.data)==null?void 0:h.data)==null?void 0:g.lessons),b(x=>{const a=[...x],j=a==null?void 0:a.findIndex(N=>w===N.courseId._id.toString()),D=a[j].sections.findIndex(N=>N.sectionId===r);return a[j].sections[D].milestones.push({milestoneId:t._id,currentLesson:1,status:1,totalLesson:0,totalLessonDone:0}),a}),s.map(x=>x.show=!1),s[n].show=!s[n].show,v(1),m([...s]),u(0)}).catch(()=>{u(0)});return}return}switch(t.status){case 1:case 2:await I.get(`/lessons?sectionId=${r}&milestoneId=${o}`).then(i=>{var h,g,x,a;k((g=(h=i==null?void 0:i.data)==null?void 0:h.data)==null?void 0:g.lessons),s.map(j=>j.show=!1),s[n].show=!s[n].show,v((a=(x=l[c])==null?void 0:x.sections[L])==null?void 0:a.milestones[y].currentLesson),m([...s]),u(0)}).catch(i=>{u(0)});return;default:await I.patch("/learning_process/add_milestone",{courseId:w,sectionId:r,milestoneId:o})&&await I.get(`/lessons?sectionId=${r}&milestoneId=${o}`).then(i=>{var h,g;k((g=(h=i==null?void 0:i.data)==null?void 0:h.data)==null?void 0:g.lessons),s.map(x=>x.show=!1),s[n].show=!s[n].show,m([...s]),v(1),b(x=>{const a=[...x],j=a==null?void 0:a.findIndex(N=>w===N.courseId._id.toString()),D=a[j].sections.findIndex(N=>N.sectionId===r);return a[j].sections[D].milestones.push({milestoneId:t._id,currentLesson:1,status:1,totalLesson:0,totalLessonDone:0}),a}),u(0)}).catch(()=>{u(0)})}}},at=()=>{f&&z(!0)};return e.jsx(e.Fragment,{children:Z?e.jsx(xt,{courseId:w,sectionId:r,milestoneId:_,setIsLesson:z,lessons:f,currentLesson:C,setCurrentLesson:v}):e.jsxs(ut,{children:[e.jsx("div",{className:"fixed top-[3.8rem] z-10 h-[5rem] w-full bg-white"}),e.jsxs("div",{className:"relative max-w-full top-[10.5rem] p-[3rem] md:ml-[5rem] md:top-[12rem] lg:ml-[17rem] xl:ml-[20rem] overflow-hidden scrollbar-none",children:[e.jsxs("div",{className:"fixed top-[4.7rem] z-10 flex h-[5.5rem] lg:h-[6.5rem] w-[95.5%] gap-[5px] rounded-2xl border-b-4 border-b-[#546b44] md:border-none bg-[#58cc02] pl-4 left-[0.6rem] md:top-[6rem] md:left-[6rem] md:w-[46vw] lg:left-[18rem] lg:w-[38vw] xl:w-[46vw] 2xl:w-[49.5vw]",children:[e.jsxs("div",{className:"flex-grow flex flex-col justify-center ml-[0.4rem] sm:ml-[1.5rem]",children:[e.jsxs("div",{className:"flex text-white",children:[e.jsx("i",{onClick:()=>P("/learning"),className:"fa-solid fa-arrow-left mr-3 flex cursor-pointer items-center text-sm md:text-lg xl:text-2xl hover:text-blue-500"}),e.jsxs("p",{className:"text-sm sm:text-md lg:text-lg xl:text-xl font-medium flex items-center justify-center font-noto",children:["Phần ",+V+1]})]}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm sm:text-md lg:text-lg xl:text-xl font-noto font-medium text-white",children:E==null?void 0:E.name})})]}),e.jsxs("div",{className:"border-l-[2px] border-l-white w-[4rem] xl:w-[12rem] h-full text-white flex justify-center items-center cursor-pointer hover:text-blue-500",children:[e.jsx("i",{className:"fa-sharp fa-solid fa-book text-3xl"}),e.jsx("p",{className:"hidden xl:block text-xl font-medium ml-2",children:"Hướng dẫn"})]})]}),e.jsx("div",{className:"w-[100%] flex flex-col mx-auto md:mx-0 md:w-[50%] lg:w-[53%] xl:w-[55.4%] scrollbar-none",children:s&&s.map((t,n)=>{var o,c;return e.jsxs("ul",{onClick:()=>rt(t,n,t._id),className:`relative w-full h-40 flex ${n%2?"justify-end":"justify-start"}`,children:[e.jsx("li",{className:`absolute top-[0.4rem] z-0 h-[5.5rem] w-[5.5rem] rounded-full ${n===0||((o=s[n-1])==null?void 0:o.status)===2?"bg-[#46a302]":t.status===0?"bg-[#b7b7b7]":""} md:top-[0.4rem]`}),e.jsxs("li",{className:`absolute flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full text-center text-lg text-blue-100 md:text-xl ${n===0||((c=s[n-1])==null?void 0:c.status)===2?"bg-[#58cc02]":t.status===0?"bg-[#e5e5e5]":""} font-xl md:2xl cursor-pointer p-3 font-noto shadow-2xl transition-all active:translate-y-[0.5rem]
                       `,children:[t.show?"":t.status===1?e.jsx(Q,{currentLesson:t.currentLesson,lessonLength:f==null?void 0:f.length}):t.status===2?e.jsx(Q,{currentLesson:t.currentLesson+1,lessonLength:t.currentLesson}):"",e.jsx("img",{src:"/images/logo/white-star.png",className:"w-[3rem] lazyload"}),t.status===1?e.jsx("div",{style:{clipPath:"polygon(0% 0%, 100% 0%, 100% 93%, 51% 93%, 34% 100%, 25% 93%, 0 93%)"},className:`${t.show?"hidden":" "} absolute -right-12 -top-5 flex h-[2.3rem] w-[8rem] animate-bounce items-center justify-center rounded-md bg-white border-[2px] border-[#e5e5e5] font-noto text-sm font-medium text-[#58cc02]`,children:"Chơi tiếp"}):t.status===2?e.jsx("div",{style:{clipPath:"polygon(0% 0%, 100% 0%, 100% 93%, 51% 93%, 34% 100%, 25% 93%, 0 93%)"},className:`${t.show?"hidden":" "} absolute -right-12 -top-5 flex h-[2.3rem] w-[8rem] animate-bounce items-center justify-center rounded-md bg-white border-[2px] border-[#e5e5e5] font-noto text-sm font-medium text-[#58cc02]`,children:"Hoàn Thành"}):"",(t==null?void 0:t.show)&&e.jsxs("div",{className:`absolute ${n%2?"-left-[11.5rem] top-2 lg:-left-[13.5rem]":"left-[6rem] top-2"} w-[11rem] rounded-lg bg-[#eeeeee] p-1 text-black shadow-2xl lg:w-[13rem]`,children:[t.status===2?e.jsxs("p",{className:"mt-2 font-noto text-sm font-medium lg:text-lg",children:["Bạn nhận đã được:"," "]}):t.status===1?e.jsxs("div",{className:"mb-1 text-center font-noto text-sm font-medium lg:text-lg",children:[e.jsx("span",{children:"Bài học: "}),e.jsx("span",{children:`${C} / ${f==null?void 0:f.length}`})]}):e.jsx("div",{className:"mb-1 w-full h-[2.5rem] flex items-center justify-center text-center font-noto text-sm font-medium lg:text-lg",children:e.jsxs("div",{className:"w-full h-full flex justify-center items-center",children:[e.jsx("i",{className:"fa-solid fa-lock"}),e.jsx("span",{className:"ml-2",children:" Đã bị khóa"})]})}),t.status===2||t.status===1?e.jsxs("ul",{className:"mx-auto mb-2 flex w-[80%] justify-around text-left text-sm font-bold",children:[e.jsxs("li",{className:"flex items-center justify-center text-sm text-yellow-600 sm:text-xl",children:[O,e.jsx("img",{src:"/images/logo/coins.png",className:"ml-1 h-3 w-3 lg:h-5 lg:w-5 lazyload"})]}),e.jsxs("li",{className:"flex items-center justify-center text-sm text-green-700 sm:text-xl",children:[et,e.jsx("img",{src:"/images/logo/explogo.jfif",className:"ml-1 w-3 lg:w-6 lazyload"})]})]}):"",(t==null?void 0:t.status)===2?e.jsx("button",{className:"w-full cursor-pointer rounded-lg bg-[#58cc02] py-1 font-noto text-md font-medium text-white shadow-xl transition",children:"Hoàn thành"}):(t==null?void 0:t.status)===1?e.jsx("button",{onClick:()=>at(),className:"w-full cursor-pointer rounded-lg bg-[#58cc02] py-1 font-noto text-md font-medium text-white shadow-xl transition hover:text-green-600 focus:outline-none",children:"Bắt đầu"}):""]})]})]},t._id)})})]}),e.jsx(mt,{})]})})};export{pt as default};
