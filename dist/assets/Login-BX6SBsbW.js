import{r as R,c as K,g as Q,j as o,G as Y,U as J,u as X,L as q,i as C,a as A}from"./index-C8qIewjV.js";import{u as ee}from"./index.esm-DVIVIWls.js";var G={exports:{}};(function(v,S){(function(j,a){v.exports=a(R)})(K,function(j){return function(a){function d(p){if(c[p])return c[p].exports;var x=c[p]={exports:{},id:p,loaded:!1};return a[p].call(x.exports,x,x.exports,d),x.loaded=!0,x.exports}var c={};return d.m=a,d.c=c,d.p="",d(0)}([function(a,d,c){a.exports=c(4)},function(a,d,c){a.exports=c(6)()},function(a,d){a.exports=j},function(a,d){Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(c,p){return decodeURIComponent(c.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(p).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(a,d,c){function p(r){return r&&r.__esModule?r:{default:r}}function x(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function f(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?r:t}function g(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}Object.defineProperty(d,"__esModule",{value:!0});var L=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},O=function(){function r(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(t,n,i){return n&&r(t.prototype,n),i&&r(t,i),t}}(),I=c(2),T=p(I),m=c(1),s=p(m),b=c(5),l=p(b),_=c(3),u=p(_),y=function(){var r=!1;try{r=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch{}return r},E=function(r){function t(){var n,i,e,N;x(this,t);for(var P=arguments.length,F=Array(P),w=0;w<P;w++)F[w]=arguments[w];return i=e=f(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(F))),e.state={isSdkLoaded:!1,isProcessing:!1},e.responseApi=function(k){window.FB.api("/me",{locale:e.props.language,fields:e.props.fields},function(h){L(h,k),e.props.callback(h)})},e.checkLoginState=function(k){e.setStateIfMounted({isProcessing:!1}),k.authResponse?e.responseApi(k.authResponse):e.props.onFailure?e.props.onFailure({status:k.status}):e.props.callback({status:k.status})},e.checkLoginAfterRefresh=function(k){k.status==="connected"?e.checkLoginState(k):window.FB.login(function(h){return e.checkLoginState(h)},!0)},e.click=function(k){if(e.state.isSdkLoaded&&!e.state.isProcessing&&!e.props.isDisabled){e.setState({isProcessing:!0});var h=e.props,M=h.scope,$=h.appId,B=h.onClick,U=h.returnScopes,z=h.responseType,W=h.redirectUri,V=h.disableMobileRedirect,Z=h.authType,H=h.state;if(typeof B!="function"||(B(k),!k.defaultPrevented)){var D={client_id:$,redirect_uri:W,state:H,return_scopes:U,scope:M,response_type:z,auth_type:Z};if(e.props.isMobile&&!V)window.location.href="https://www.facebook.com/dialog/oauth"+(0,l.default)(D);else{if(!window.FB)return void(e.props.onFailure&&e.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(e.checkLoginState,{scope:M,return_scopes:U,auth_type:D.auth_type})}}}},N=i,f(e,N)}return g(t,r),O(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))return void this.sdkLoaded();this.setFbAsyncInit(),this.loadSdkAsynchronously();var n=document.getElementById("fb-root");n||(n=document.createElement("div"),n.id="fb-root",document.body.appendChild(n))}},{key:"componentWillReceiveProps",value:function(n){this.state.isSdkLoaded&&n.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(n){this._isMounted&&this.setState(n)}},{key:"setFbAsyncInit",value:function(){var n=this,i=this.props,e=i.appId,N=i.xfbml,P=i.cookie,F=i.version,w=i.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+F,appId:e,xfbml:N,cookie:P}),n.setStateIfMounted({isSdkLoaded:!0}),(w||n.isRedirectedFromFb())&&window.FB.getLoginStatus(n.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var n=window.location.search;return(0,u.default)(n,"code")||(0,u.default)(n,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var n=this.props.language;(function(i,e,N){var P=i.getElementsByTagName(e)[0],F=P,w=P;i.getElementById(N)||(w=i.createElement(e),w.id=N,w.src="https://connect.facebook.net/"+n+"/sdk.js",F.parentNode.insertBefore(w,F))})(document,"script","facebook-jssdk")}},{key:"render",value:function(){var i=this.props.render;if(!i)throw new Error("ReactFacebookLogin requires a render prop to render");var e={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(e)}}]),t}(T.default.Component);E.propTypes={isDisabled:s.default.bool,callback:s.default.func.isRequired,appId:s.default.string.isRequired,xfbml:s.default.bool,cookie:s.default.bool,authType:s.default.string,scope:s.default.string,state:s.default.string,responseType:s.default.string,returnScopes:s.default.bool,redirectUri:s.default.string,autoLoad:s.default.bool,disableMobileRedirect:s.default.bool,isMobile:s.default.bool,fields:s.default.string,version:s.default.string,language:s.default.string,onClick:s.default.func,onFailure:s.default.func,render:s.default.func.isRequired},E.defaultProps={redirectUri:typeof window<"u"?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:y(),onFailure:null,state:"facebookdirect",responseType:"code"},d.default=E},function(a,d){Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(c){return"?"+Object.keys(c).map(function(p){return p+"="+encodeURIComponent(c[p])}).join("&")}},function(a,d,c){function p(){}var x=c(7);a.exports=function(){function f(O,I,T,m,s,b){if(b!==x){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function g(){return f}f.isRequired=f;var L={array:f,bool:f,func:f,number:f,object:f,string:f,symbol:f,any:f,arrayOf:g,element:f,instanceOf:g,node:f,objectOf:g,oneOf:g,oneOfType:g,shape:g,exact:g};return L.checkPropTypes=p,L.PropTypes=L,L}},function(a,d){var c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=c}])})})(G);var te=G.exports;const oe=Q(te),ne=({handleLoginWithFacebook:v})=>{const S=a=>{v(a)};return o.jsx(oe,{appId:"581032447867843",autoLoad:!0,callback:S,fields:"name,email,picture",scope:"public_profile, email",render:a=>o.jsxs("div",{onClick:a.onClick,className:"mt-1 flex cursor-pointer bg-[#8b8fde] p-3 font-medium text-white hover:text-black",children:[o.jsx("img",{src:"images/logo/facebook.webp",className:"mr-2 h-6 w-6 font-noto"}),o.jsx("p",{className:"text-center w-full",children:"Đăng nhập bằng Facebook"})]})})},se=({handleLoginWithGoogle:v})=>{const S=j=>{v(j)};return o.jsx(Y,{onSuccess:S,render:j=>o.jsxs("div",{onClick:j.onClick,className:"flex cursor-pointer justify-center bg-[#dfe8e7] p-3 font-noto font-medium hover:text-white md:mr-1 md:w-1/2",children:[o.jsx("img",{src:"images/logo/googlelogo.png",className:"lazyload mr-2 h-6 w-6"}),"Đăng nhập bằng Google"]})})},ie=()=>{const[v,S]=R.useState(!1),[j,a]=R.useState(!1),{profile:d}=R.useContext(J),c=X();R.useEffect(()=>{d&&c("/learning")},[d]);const{register:p,handleSubmit:x,setFocus:f,formState:{errors:g,isSubmitting:L}}=ee();R.useEffect(()=>{f("email")},[f]);const O=async m=>{var s,b;if(m)try{await C.post("login",m).then(l=>{var _,u,y;a((_=l==null?void 0:l.data)==null?void 0:_.message),A.set("token",(y=(u=l==null?void 0:l.data)==null?void 0:u.data)==null?void 0:y.accessToken,{expires:30}),l!=null&&l.data&&window.location.replace("/learning")})}catch(l){a((b=(s=l==null?void 0:l.response)==null?void 0:s.data)==null?void 0:b.message)}},I=async m=>{var s,b,l,_;try{const u=await C.post("facebook_login",{accessToken:m.accessToken});A.set("token",(b=(s=u==null?void 0:u.data)==null?void 0:s.data)==null?void 0:b.accessToken,{expires:30}),u!=null&&u.data&&window.location.replace("/learning")}catch(u){a((_=(l=u==null?void 0:u.response)==null?void 0:l.data)==null?void 0:_.message)}},T=async m=>{var s,b,l,_;try{const u=m==null?void 0:m.credential,y=await C.post("google_login",{token:u});A.set("token",(b=(s=y==null?void 0:y.data)==null?void 0:s.data)==null?void 0:b.accessToken,{expires:30}),y!=null&&y.data&&window.location.replace("/learning")}catch(u){a((_=(l=u==null?void 0:u.response)==null?void 0:l.data)==null?void 0:_.message)}};return o.jsx(o.Fragment,{children:o.jsx("div",{className:"flex h-screen w-full items-center justify-center bg-gradient-to-r from-pink-400 to-blue-600",children:o.jsxs("div",{className:"flex h-auto w-[35rem] flex-col bg-white p-6",children:[o.jsxs("div",{className:"mb-5 flex w-full",children:[o.jsx("img",{src:"/images/pngtree.png",className:"lazyload w-[8rem]"}),o.jsx("p",{className:"ml-3 flex items-center justify-center font-noto text-3xl font-bold",children:"Chào mừng bạn tới Duylingo"})]}),o.jsxs("form",{onSubmit:x(O),children:[o.jsx("input",{...p("email",{required:"Nhập email của bạn",validate:m=>m.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?!0:"Vui lòng nhập đúng email của bạn"}),type:"text",placeholder:"Email",name:"email",className:"mb-[1rem] w-full border border-inherit p-2 pl-3 font-noto outline-none"}),o.jsx("br",{}),g.email&&o.jsx("p",{className:"mb-2 text-red-500",children:g.email.message}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{...p("password",{required:"Nhập mật khẩu của bạn",validate:m=>m.match(/^[A-Za-z0-9!@#$%^&*(),.?":{}|<>_-]+$/)?!0:"Vui lòng nhập mật khẩu của bạn"}),type:v?"text":"password",placeholder:"Mật khẩu",name:"password",className:"mb-[1rem] w-full border border-inherit p-2 pl-3 font-noto outline-none"}),v?o.jsx("i",{className:"fa-solid fa-eye-slash absolute right-3 top-3 cursor-pointer",onClick:()=>S(!v)}):o.jsx("i",{className:"fa-solid fa-eye absolute right-3 top-3 cursor-pointer",onClick:()=>S(!v)}),o.jsx("br",{}),g.password&&o.jsx("p",{className:"mb-2 text-red-500",children:g.password.message})]}),o.jsx("button",{className:"h-16 w-full bg-gradient-to-r from-pink-400 to-blue-600 p-2 text-2xl font-bold text-white hover:text-black",children:L?"Đang gửi...":"Đăng Nhập"}),j&&o.jsx("p",{className:"mt-1 w-full text-center font-noto text-xl text-red-500",children:j})]}),o.jsx(q,{to:"/forgot_password",className:"mt-[0.3rem] w-full cursor-pointer font-noto text-sky-500",children:"Quên mật khẩu?"}),o.jsxs("p",{className:"mt-2 font-noto",children:["Bạn chưa có đã có tài khoản?"," ",o.jsx(q,{to:"/register",className:"font-noto text-[1.1rem] font-bold text-blue-700",children:"Đăng Ký"})]}),o.jsxs("div",{className:"mt-4 w-full",children:[o.jsx(se,{handleLoginWithGoogle:T}),o.jsx(ne,{handleLoginWithFacebook:I})]})]})})})};export{ie as default};