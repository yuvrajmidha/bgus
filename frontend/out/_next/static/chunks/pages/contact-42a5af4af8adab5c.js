(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{4463:function(e,t,n){"use strict";var s=n(9499),a=n(4730),i=(n(7294),n(8527)),r=n(5893),o=["fontSize","px","children"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.fontSize,n=void 0===t?["3xl","32px","34px","4xl"]:t,s=e.px,c=void 0===s?"5px":s,u=e.children,g=void 0===u?"Lorem Ipsum":u,d=(0,a.Z)(e,o);return(0,r.jsx)(i.X6,l(l({textAlign:"center",fontFamily:"Nexa Bold",fontSize:n,px:c},d),{},{children:g}))}},7290:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var s=n(2777),a=n(2262),i=n(5959),r=n(2179),o=n(7247),c=n(7294),l=n(8527),u=n(9762),g=n(4612),d=n(3441),p=n(5193),h=n(9609),f=(n(6978),n(4418)),m=n(9669),x=n.n(m),v=n(5893);var j=function(e){var t=(0,c.useState)(""),n=t[0],s=t[1],a=(0,c.useState)(""),i=a[0],r=a[1],o=(0,c.useState)(""),m=o[0],j=o[1],y=(0,c.useState)(""),b=y[0],k=y[1],w=(0,c.useState)(""),C=w[0],A=w[1],B={name:n,email:i,message:b,contactNumber:C,subject:m},L=(0,c.useState)(!1),S=L[0],O=L[1],I=(0,c.useState)(""),N=I[0],Z=I[1],z=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"message":k(a);break;case"phone":A(a);break;case"email":r(a);break;case"subject":j(a)}},R=function(e){O(!1),console.log(e),Z(e),Z(""),200==e.status&&setTimeout((function(){s(""),r(""),k(""),A(""),j("")}),1e3)};return(0,v.jsxs)(l.xu,{p:5,children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(!0),x().post("/api/contact/submit",B).then((function(e){return R(e)}),(function(e){return R(e)}))},children:[(0,v.jsx)("input",{type:"hidden",name:"_redirect",value:"false"}),(0,v.jsxs)(l.kC,{wrap:"wrap",children:[(0,v.jsx)(u.NI,{px:2,width:"100%",isRequired:!0,children:(0,v.jsx)(g.II,{placeholder:"Name",type:"text",p:6,name:"name",value:n,onChange:z})}),(0,v.jsx)(u.NI,{px:2,width:["100%","100%","50%"],mt:4,isRequired:!0,children:(0,v.jsx)(g.II,{p:6,placeholder:"Email",type:"email",name:"email",value:i,onChange:z})}),(0,v.jsx)(u.NI,{px:2,width:["100%","100%","50%"],mt:4,isRequired:!0,children:(0,v.jsx)(g.II,{p:6,placeholder:"Phone Number",type:"tel",pattern:"[0-9]{10}",name:"phone",value:C,onChange:z})}),(0,v.jsx)(u.NI,{px:2,width:"100%",mt:4,children:(0,v.jsx)(g.II,{p:6,placeholder:"Subject",name:"subject",value:m,onChange:z})}),(0,v.jsx)(u.NI,{px:2,width:"100%",mt:4,isRequired:!0,children:(0,v.jsx)(d.g,{p:6,placeholder:"Message",height:"220px",size:"lg",name:"message",value:b,onChange:z,resize:"vertical"})}),(0,v.jsxs)(p.zx,{mt:10,type:"submit",size:"lg",colorScheme:"primary",className:"primary-btn",width:"100%",children:["Submit",S&&(0,v.jsx)(h.$,{thickness:"4px",speed:"1s",emptyColor:"gray.200",color:"blue.500",size:"sm"})]})]})]}),N&&(0,v.jsx)(f.Z,{response:N})]})},y=n(9008),b=(n(9470),n(2214)),k=n(4463),w=n(456),C=(n(6847),n(8754),[{id:1,image:"assets/shapes/Background1.svg",imageUrl:"https://www.bgunifiedsolutions.net/wp-content/uploads/2019/03/Vocus.png",imageAlt:"Company Logo"},{id:2,image:"assets/shapes/Background2.svg",imageAlt:"Company Logo"},{id:3,image:"assets/shapes/Background3.svg",imageAlt:"Company Logo"},{id:4,image:"assets/shapes/Background4.svg",imageAlt:"Company Logo"},{id:5,image:"assets/shapes/Background5.svg",imageAlt:"Company Logo"},{id:6,image:"assets/shapes/Background6.svg",imageAlt:"Company Logo"},{id:7,image:"assets/shapes/Background7.svg",imageAlt:"Company Logo"},{id:8,image:"assets/shapes/Background8.svg",imageAlt:"Company Logo"},{id:9,image:"assets/shapes/Background9.svg",imageAlt:"Company Logo"},{id:10,image:"assets/shapes/Background10.svg",imageAlt:"Company Logo"},{id:11,image:"assets/shapes/Background11.svg",imageAlt:"Company Logo"},{id:12,image:"assets/shapes/Background12.svg",imageAlt:"Company Logo"},{id:13,image:"assets/shapes/Background13.svg",imageAlt:"Company Logo"},{id:14,image:"../../static/Background14.svg",imageAlt:"Company Logo"},{id:15,image:"assets/shapes/Background15.svg",imageAlt:"Company Logo"},{id:16,image:"assets/shapes/Background16.svg",imageAlt:"Company Logo"}]),A=[{id:1,image:"assets/shapes/Phone.svg",imageAlt:"Company Logo"},{id:2,image:"assets/shapes/Mail.svg",imageAlt:"Company Logo"},{id:3,image:"assets/shapes/Location.svg",imageAlt:"Company Logo"}];function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,o.Z)(e);if(t){var a=(0,o.Z)(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return(0,r.Z)(this,n)}}c.Component;var L=n(9583);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,o.Z)(e);if(t){var a=(0,o.Z)(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return(0,r.Z)(this,n)}}var O=function(e){(0,i.Z)(n,e);var t=S(n);function n(e){var a;return(0,s.Z)(this,n),(a=t.call(this,e)).state={},a}return(0,a.Z)(n,[{key:"render",value:function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"contact",children:[(0,v.jsx)(y.default,{children:(0,v.jsx)("title",{children:"Contact us - BG Unified Solutions"})}),(0,v.jsxs)(l.xu,{pos:"relative",bg:"dark.500",children:[(0,v.jsx)(w.Ee,{position:"absolute",height:"100%",zIndex:"0",top:0,left:0,opacity:".3",objectFit:"cover",width:"100%",src:"/assets/images/backgrounds/call_us.jpg"}),(0,v.jsxs)(b.Z,{transform:"scale(1)",zIndex:"100",textAlign:"center",color:"white",py:[16,40],my:0,children:[(0,v.jsx)(k.Z,{zIndex:"100",fontSize:["44px","64px"],children:"Contact Us"}),(0,v.jsx)(l.xv,{zIndex:"100",fontSize:"xl",mt:2,children:"Have a doubt? Want to know more? Let's Connect!"})]})]}),(0,v.jsx)(b.Z,{children:(0,v.jsxs)(l.kC,{wrap:"wrap",children:[(0,v.jsxs)(l.xu,{px:4,width:{base:"100%",lg:"40%"},children:[(0,v.jsxs)(l.xu,{shadow:"lg",bg:"#fff",px:6,py:8,mb:4,borderWidth:0,rounded:"lg",children:[(0,v.jsx)(l.X6,{fontFamily:"Nexa Bold",children:"Australlia"}),(0,v.jsx)(l.rU,{color:"gray.500",fontWeight:700,mt:4,href:"mailto::support@bgunifiedsolutions.in",variant:"link",textAlign:"left",children:(0,v.jsx)(l.xv,{children:"support@bgunifiedsolutions.net"})}),(0,v.jsxs)(l.gC,{color:"gray.500",fontWeight:700,align:"start",spacing:6,children:[(0,v.jsx)(l.rU,{href:"tel:1300002487",variant:"link",textAlign:"left",children:(0,v.jsx)(l.xv,{children:"1300 00 BGUS"})}),(0,v.jsxs)(l.rU,{variant:"link",textAlign:"left",children:[(0,v.jsx)(L.m17,{size:"24px"}),(0,v.jsxs)(l.xv,{mt:2,children:["23 Birchgrove Cres, ",(0,v.jsx)("br",{}),"Marsfield NSW 2122, Australia "]})]})]})]}),(0,v.jsxs)(l.xu,{shadow:"lg",bg:"#fff",px:6,py:8,mb:8,borderWidth:0,rounded:"lg",children:[(0,v.jsx)(l.X6,{fontFamily:"Nexa Bold",children:"India"}),(0,v.jsx)(l.rU,{color:"gray.500",href:"mailto::support@bgunifiedsolutions.in",fontWeight:700,mt:4,variant:"link",textAlign:"left",children:(0,v.jsx)(l.xv,{children:"support@bgunifiedsolutions.in"})}),(0,v.jsxs)(l.gC,{color:"gray.500",fontWeight:700,align:"start",spacing:6,children:[(0,v.jsx)(l.rU,{href:"tel:18003092487",variant:"link",textAlign:"left",children:(0,v.jsx)(l.xv,{children:"1800 309 BGUS"})}),(0,v.jsxs)(l.rU,{variant:"link",textAlign:"left",children:[(0,v.jsx)(L.m17,{size:"24px"}),(0,v.jsxs)(l.xv,{mt:2,children:["25, Gandhi Market, ",(0,v.jsx)("br",{}),"Minto Road, New Delhi, India "]})]})]})]})]}),(0,v.jsxs)(l.xu,{bg:["#ffffff00","#ffffff00","#ffffff00","white"],width:{base:"100%",lg:"60%"},px:8,py:16,boxShadow:[0,0,0,"xl"],textAlign:"center",rounded:12,children:[(0,v.jsx)(k.Z,{children:"Let's Talk!"}),(0,v.jsx)(l.xv,{my:4,children:"Reach out to us, in case anything comes up.. We'll be glad to connect with you!"}),(0,v.jsx)(j,{})]})]})})]})})}}]),n}(c.Component)},8809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(7290)}])}},function(e){e.O(0,[774,888,179],(function(){return t=8809,e(e.s=t);var t}));var t=e.O();_N_E=t}]);