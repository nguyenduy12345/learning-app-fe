import{r as o,u as E,U as q,j as e,L as r,i as w,a as R}from"./index-DfFjzv6a.js";import{u as T}from"./index.esm-BmI1xTpi.js";const M=()=>{const[n,l]=o.useState(!1),[c,v]=o.useState(""),[m,h]=o.useState(!1),[d,k]=o.useState(!1),y=E(),{profile:u}=o.useContext(q);o.useEffect(()=>{u&&y("/learning")},[u]);const{register:i,handleSubmit:C,setFocus:f,formState:{errors:a,isSubmitting:P}}=T();o.useEffect(()=>{f("fullName")},[f]),o.useEffect(()=>{h(!1)},[c]);const S=async t=>{var b,g;if(!t)return;if(c!==t.password){h("Xác nhận mật khẩu sai");return}const{fullName:A,email:p,password:x}=t;try{await w.post("register",{fullName:A,email:p,password:x}),await w.post("login",{email:p,password:x}).then(s=>{var N,j;R.set("token",(j=(N=s==null?void 0:s.data)==null?void 0:N.data)==null?void 0:j.accessToken,{expires:30}),s!=null&&s.data&&(window.location.href="http://localhost:5173/learning ")})}catch(s){k((g=(b=s==null?void 0:s.response)==null?void 0:b.data)==null?void 0:g.message)}};return e.jsx("div",{className:"flex h-screen w-full items-center justify-center bg-gradient-to-r from-pink-400 to-blue-600",children:e.jsxs("div",{className:"flex h-auto w-[35rem] flex-col bg-white p-6",children:[e.jsxs("form",{onSubmit:C(S),children:[e.jsx("h4",{className:"mb-4 w-full text-center text-3xl font-bold font-noto",children:"Tạo tài khoản"}),e.jsx("input",{name:"fullName",...i("fullName",{required:"Nhập tên tài khoản của bạn",validate:t=>t.match(/^[A-Za-z0-9]+$/)?!0:"Vui lòng nhập họ và tên bạn",maxLength:{value:255,message:"Trường tên quá dài, vui lòng nhập lại"}}),type:"text",placeholder:"Họ và tên",className:"mb-[0.5rem] w-full border border-inherit p-2 pl-3 outline-none font-noto"}),e.jsx("br",{}),a.fullName&&e.jsx("p",{className:"mb-2 text-red-500",children:a.fullName.message}),e.jsx("input",{...i("email",{required:"Nhập email của bạn",validate:t=>t.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?!0:"Vui lòng nhập đúng email của bạn"}),type:"text",placeholder:"Email",className:"mb-[0.5rem] w-full border border-inherit p-2 pl-3 outline-none font-noto"}),e.jsx("br",{}),a.email&&e.jsx("p",{className:"mb-2 text-red-500",children:a.email.message}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{...i("password",{required:"Nhập mật khẩu của bạn",minLength:{value:6,message:"Mật khẩu phải nhiều hơn 6 ký tự"},validate:t=>t.match(/^[A-Za-z0-9!@#$%^&*(),.?":{}|<>_-]+$/)?!0:"Vui lòng nhập mật khẩu của bạn"}),type:n?"text":"password",placeholder:"Mật khẩu",className:"mb-[0.5rem] w-full border border-inherit p-2 pl-3 outline-none font-noto"}),n?e.jsx("i",{className:"fa-solid fa-eye-slash absolute right-3 top-3 cursor-pointer",onClick:()=>l(!n)}):e.jsx("i",{className:"fa-solid fa-eye absolute right-3 top-3 cursor-pointer",onClick:()=>l(!n)}),e.jsx("br",{}),a.password&&e.jsx("p",{className:"mb-2 text-red-500 font-noto",children:a.password.message})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{...i("rePassword",{required:"Xác nhận lại mật khẩu của bạn"}),onChange:t=>v(t.target.value),name:"rePassword",type:n?"text":"password",placeholder:"Xác nhận mật khẩu",className:"mb-[0.5rem] w-full border border-inherit p-2 pl-3 outline-none font-noto"}),n?e.jsx("i",{className:"fa-solid fa-eye-slash absolute right-3 top-3 cursor-pointer",onClick:()=>l(!n)}):e.jsx("i",{className:"fa-solid fa-eye absolute right-3 top-3 cursor-pointer",onClick:()=>l(!n)}),e.jsx("br",{}),a.rePassword&&e.jsx("p",{className:"mb-2 text-red-500 font-noto",children:a.rePassword.message}),m&&e.jsx("p",{className:"mb-2 text-red-500 font-noto",children:m})]}),e.jsx("button",{className:"h-16 w-full bg-gradient-to-r from-pink-400 to-blue-600 p-2 text-2xl font-bold text-white hover:text-black font-noto",children:P?"Đang Gửi...":"Đăng Ký"}),d&&e.jsx("p",{className:"mb-2 p-1 text-center text-red-500 font-noto",children:d})]}),e.jsxs("p",{className:"mt-2 font-noto",children:["Bạn đã có tài khoản?"," ",e.jsx(r,{to:"/login",className:"text-[1.1rem] font-bold font-noto text-blue-700",children:"Đăng nhập"})]}),e.jsxs("p",{className:"mt-3 font-noto",children:["Khi đăng ký trên Duylingo, bạn đã đồng ý với"," ",e.jsx(r,{to:"",className:"font-medium font-noto",children:"Các chính sách"}),"và",e.jsx(r,{to:"",className:"font-medium font-noto",children:"Chính sách bảo mật"}),"của chúng tôi."]}),e.jsxs("p",{className:"mt-3 font-noto",children:["Trang này được bảo vệ bởi tập đoàn"," ",e.jsx("span",{className:"font-medium font-noto",children:"reCAPTCHA"})," và theo"," ",e.jsx(r,{to:"",className:"font-medium font-noto",children:"Chính sách bảo mật"}),"và"," ",e.jsx(r,{to:"",className:"font-medium font-noto",children:"Điều khoản dịch vụ của Google"}),"."]})]})})};export{M as default};
