import{r as s,j as e,i as y,U as C}from"./index-D2yqvCD0.js";import{a as P,N as A,G as M,V as L,M as z}from"./MainLayout-kntGGjnE.js";import{u as E}from"./index.esm-CNmhqX9o.js";const T=({setIsEditPassword:o})=>{const[i,p]=s.useState(),[n,j]=s.useState(!1),[a,c]=s.useState(!1),{register:u,handleSubmit:d,setFocus:g,watch:m,formState:{errors:r,isSubmitting:N}}=E();s.useEffect(()=>{g("password")},[g]);const h=m("newPassword"),f=async t=>{const{password:w,newPassword:k}=t;await y.patch("users/change_password",{password:w,newPassword:k}).then(l=>{var x;p((x=l==null?void 0:l.data)==null?void 0:x.message),setTimeout(()=>o(!1),1500)}).catch(l=>{p(()=>{var x;return(x=l==null?void 0:l.response)!=null&&x.data&&Array.isArray(l.response.data)?l.response.data.map(b=>b.message).join(`
`):l.response.data.message})})};return e.jsxs("div",{className:"fixed left-1/3 top-1/3 z-20 mx-auto mt-10 w-[95%] sm:w-96 -translate-x-1/3 -translate-y-1/2 transform rounded-lg bg-white p-6 font-noto shadow-md sm:left-1/2 sm:-translate-x-1/2 md:left-[66%] xl:left-[57%]",children:[e.jsx("i",{className:"fa-solid fa-xmark-large absolute right-3 top-3 cursor-pointer",onClick:()=>o(!1),children:"X"}),e.jsx("h2",{className:"mb-6 text-center text-2xl font-semibold",children:"Thay đổi mật khẩu"}),e.jsxs("form",{onSubmit:d(f),className:"space-y-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{...u("password",{required:"Nhập mật khẩu của bạn",validate:t=>t.match(/^[A-Za-z0-9!@#$%^&*(),.?":{}|<>_-]+$/)?!0:"Vui lòng nhập mật khẩu của bạn"}),type:n?"text":"password",placeholder:"Mật khẩu",className:"mb-[0.5rem] w-full border border-inherit p-2 pl-3 font-noto outline-none"}),n?e.jsx("i",{className:"fa-solid fa-eye-slash absolute right-3 top-3 cursor-pointer",onClick:()=>j(!n)}):e.jsx("i",{className:"fa-solid fa-eye absolute right-3 top-3 cursor-pointer",onClick:()=>j(!n)}),e.jsx("br",{}),r.password&&e.jsx("p",{className:"mb-2 font-noto text-red-500",children:r.password.message})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{...u("newPassword",{required:"Nhập mật khẩu mới của bạn",minLength:{value:6,message:"Mật khẩu phải nhiều hơn 6 ký tự"},validate:t=>t.match(/^[A-Za-z0-9!@#$%^&*(),.?":{}|<>_-]+$/)?!0:"Mật khẩu chỉ bao gồm ký tự, chữ và số không bao gồm dấu cách!"}),type:a?"text":"password",placeholder:"Mật khẩu mới",className:"mb-[0.5rem] w-full border border-inherit p-2 pl-3 font-noto outline-none"}),a?e.jsx("i",{className:"fa-solid fa-eye-slash absolute right-3 top-3 cursor-pointer",onClick:()=>c(!a)}):e.jsx("i",{className:"fa-solid fa-eye absolute right-3 top-3 cursor-pointer",onClick:()=>c(!a)}),e.jsx("br",{}),r.newPassword&&e.jsx("p",{className:"mb-2 font-noto text-red-500",children:r.newPassword.message})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{...u("confirmPassword",{required:"Xác nhận lại mật khẩu mới của bạn",validate:t=>t===h||"Xác nhận mật khẩu không đúng"}),name:"confirmPassword",type:a?"text":"password",placeholder:"Xác nhận mật khẩu mới",className:"mb-[0.5rem] w-full border border-inherit p-2 pl-3 font-noto outline-none"}),a?e.jsx("i",{className:"fa-solid fa-eye-slash absolute right-3 top-3 cursor-pointer",onClick:()=>c(!a)}):e.jsx("i",{className:"fa-solid fa-eye absolute right-3 top-3 cursor-pointer",onClick:()=>c(!a)}),e.jsx("br",{}),r.confirmPassword&&e.jsx("p",{className:"mb-2 font-noto text-red-500",children:r.confirmPassword.message})]}),e.jsx("button",{type:"submit",className:"w-full rounded-md bg-gradient-to-r from-pink-400 to-blue-600 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:N?"Đang lưu...":"Lưu mật khẩu"}),e.jsx("p",{className:"text-center font-noto text-lg text-red-500",children:i})]})]})},q=({setIsEditProfile:o})=>{const{profile:i,setProfile:p}=s.useContext(C),[n,j]=s.useState(i==null?void 0:i.fullName),[a,c]=s.useState(i==null?void 0:i.sex),[u,d]=s.useState(!1),[g,m]=s.useState(),r=["0","1"],N=async f=>{if(f.preventDefault(),!n){m("Vui lòng nhập tên của bạn");return}if(n.length>30){m("Không nhập tên dài quá 30 ký tự");return}if(!n.match(/^[A-Za-zÀ-ÿáàảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờở̃ỡợùúủũụưứừửữựỳýỷỹỵđĐ0-9]+(?: [A-Za-zÀ-ÿáàảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờở̃ỡợùúủũụưứừửữựỳýỷỹỵđĐ0-9]+)*$/)){m("Tên không được phép có dấu cách đầu tiên và mỗi từ phải cách nhau bằng một dấu cách.");return}u||(d(!0),await y.patch("users/update_information",{fullName:n,sex:a}).then(t=>{m(t.data.message),d(!1),p(w=>({...w,fullName:n,sex:a})),setTimeout(()=>o(!1),1e3)}).catch(t=>{d(!1),m(()=>t.response.data&&Array.isArray(t.response.data)?t.response.data.map(w=>w.message).join(`
`):t.response.data.message)}))},h=f=>{switch(f){case 0:return"Nữ";case 1:return"Nam";default:return}};return e.jsxs("div",{className:"fixed left-1/3 top-1/3 z-20 mx-auto mt-10 w-[95%] -translate-x-1/3 -translate-y-1/2 transform rounded-lg bg-white p-6 font-noto shadow-md sm:left-1/2 sm:w-96 sm:-translate-x-1/2 md:left-[66%] xl:left-[57%]",children:[e.jsx("i",{className:"fa-solid fa-xmark-large absolute right-3 top-3 cursor-pointer",onClick:()=>o(!1),children:"X"}),e.jsx("h2",{className:"mb-6 text-center text-2xl font-semibold",children:"Chỉnh sửa thông tin"}),e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",htmlFor:"currentPassword",children:"Họ và tên"}),e.jsx("input",{id:"fullName",value:n,onChange:f=>j(f.target.value),className:"mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Giới tính"}),e.jsx(P,{value:h(a),onChange:c,children:e.jsxs("div",{className:"relative mt-2",children:[e.jsx(A,{className:"relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-md",children:h(a)}),e.jsx(M,{transition:!0,className:"absolute z-10 mt-1 max-h-56 w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm",children:r&&r.map((f,t)=>e.jsx(L,{value:t,className:"group relative w-32 cursor-default select-none py-2 pl-1 pr-1 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white",children:h(t)},t))})]})})]}),e.jsx("button",{onClick:N,className:"w-full rounded-md bg-gradient-to-r from-pink-400 to-blue-600 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:u?"Đang lưu...":"Lưu thông tin"}),e.jsx("p",{className:"text-center font-noto text-lg text-red-500",children:g})]})]})},F=()=>{const{profile:o,setProfile:i}=s.useContext(C),[p,n]=s.useState(!1),[j,a]=s.useState(!1),[c,u]=s.useState(!1),[d,g]=s.useState(!1),[m,r]=s.useState(!1),[N,h]=s.useState(!1),[f,t]=s.useState(0),w=x=>{if(x.target.files.length>0){const b=x.target.files[0];let v=URL.createObjectURL(b);a(b),u(v)}},k=async x=>{if(f===1)return;if(t(1),!c){t(0);return}x.preventDefault();const b=new FormData;b.append("file",j),h("Đang lưu ảnh..."),await y.patch("users/avatar",b,{headers:{"Content-Type":"multipart/form-data"}}).then(v=>{i(S=>({...S,avatar:v.data.avatar})),u(!1),h(v.data.message),setTimeout(()=>h(""),1e3),t(0),g(!1)}).catch(v=>{t(0),h(v.response.data[0].message)})},l=()=>{u(!1),g(!1)};return e.jsxs(z,{children:[!!o&&e.jsxs("div",{className:"absolute mt-[5rem] w-full rounded-lg bg-white pb-[5rem] shadow-lg md:left-[5.5rem] md:w-[75vw] lg:left-[17rem] lg:w-[69vw]",children:[e.jsxs("div",{className:"relative flex w-full justify-center",children:[e.jsx("img",{src:c||(o.avatar?o.avatar:"/images/logo/person-default.png"),alt:"User Avatar",className:"lazyload h-96 w-full rounded-lg object-cover sm:w-3/4 md:h-[60vh] lg:w-[60%] xl:w-[45%]"}),d?e.jsxs("ul",{className:"absolute bottom-1 right-4 flex",children:[e.jsx("button",{onClick:l,className:"flex transform rounded-full bg-gradient-to-r from-pink-400 to-blue-600 px-4 py-2 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95",children:e.jsx("span",{className:"font-noto text-sm",children:"Dừng thay đổi"})}),e.jsx("button",{onClick:k,className:"transform rounded-full bg-gradient-to-r from-pink-400 to-blue-600 px-4 py-2 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95",children:e.jsxs("span",{className:"flex items-center justify-center space-x-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-5 w-5 ${d?"rotate-180":"rotate-0"} transition-transform duration-300`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})}),e.jsx("span",{className:"font-noto text-sm",children:"Lưu ảnh"})]})})]}):e.jsx("button",{onClick:()=>g(!0),className:"absolute bottom-1 right-4 transform rounded-full bg-gradient-to-r from-pink-400 to-blue-600 px-4 py-2 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95",children:e.jsxs("span",{className:"flex items-center justify-center space-x-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-5 w-5 ${d?"rotate-180":"rotate-0"} transition-transform duration-300`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})}),e.jsx("span",{className:"font-noto text-sm",children:"Chỉnh sửa ảnh"})]})})]}),d&&e.jsx("div",{className:"flex justify-center",children:e.jsx("input",{type:"file",accept:"image/*",onChange:w,className:"mt-2 rounded-lg border p-2"})}),e.jsx("p",{className:"mt-1 w-full text-wrap px-2 text-center text-2xl text-red-600",children:N}),e.jsxs("div",{className:"ml-3 mt-3 md:ml-0 md:text-center",children:[e.jsxs("h2",{className:"font-noto text-xl lg:text-2xl",children:["Tên: ",o.fullName]}),e.jsxs("p",{className:"mt-2 font-noto text-xl lg:text-2xl",children:["Email: ",o.email]}),e.jsxs("p",{className:"mt-2 font-noto text-xl lg:text-2xl",children:["Giới tính: ",o.sex===0?"Nữ":"Nam"]})]}),e.jsxs("div",{className:"mx-2 mt-6 flex flex-col justify-center md:flex-row",children:[e.jsx("div",{onClick:()=>n(!p),className:"transform cursor-pointer rounded-lg bg-gradient-to-r from-pink-400 to-blue-600 px-6 py-3 font-noto text-lg text-white shadow-lg transition-transform duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95",children:"Chỉnh sửa thông tin"}),e.jsx("div",{onClick:()=>r(!m),className:"mt-2 transform cursor-pointer rounded-lg bg-gradient-to-r from-pink-400 to-blue-600 px-6 py-3 font-noto text-lg text-white shadow-lg transition-transform duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 md:ml-2 md:mt-0",children:"Thay đổi mật khẩu"})]})]}),m&&e.jsx(T,{setIsEditPassword:r}),p&&e.jsx(q,{setIsEditProfile:n})]})};export{F as default};
