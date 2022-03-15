"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[542],{9249:function(e,t,r){var n=r(9499),i=r(4730),c=r(7294),o=r(7857),s=r(3082),l=r.n(s),a=r(5893),p=["endPoint","startPoint","duration"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.endPoint,r=e.startPoint,n=void 0===r?0:r,s=e.duration,u=void 0===s?1.7:s,d=(0,i.Z)(e,p),j=(0,c.useState)(!1),f=j[0],y=j[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.ZP,x(x({end:t,start:f?null:n,useEasing:!0,duration:u},d),{},{children:function(e){var t=e.countUpRef;return(0,a.jsx)(l(),{active:!f,onChange:function(e){e&&y(!0)},children:(0,a.jsx)("span",x({ref:t,className:"mb-0 text-primary"},d))})}})),(0,a.jsx)("span",{className:"display6",children:d.subtext||""}),(0,a.jsx)("span",{className:"text-secondary",children:d.description||""})]})}},2053:function(e,t,r){r.d(t,{Z:function(){return u}});r(7294);var n=r(8527),i=r(5193),c=r(3789),o=r(585),s=r(9583),l=r(5893);var a=function(e){var t=(0,l.jsx)(n.xu,{className:"text-white d-flex justify-content-center shadow-lg align-items-center",rounded:"12px",w:"128px",h:"128px",bg:e.iconBg||"Blue",children:(0,l.jsx)(o.Z,{size:"40px",color:"light.500",src:e.icon})});return e.fullIcon&&(t=(0,l.jsx)(n.xu,{className:"text-white",rounded:"12px",w:"48px",h:"48px",children:e.fullIcon})),(0,l.jsx)(c.Z,{href:"".concat(e.link),children:(0,l.jsx)(n.xu,{pt:"64px",h:"100%",children:(0,l.jsxs)(n.xu,{h:"100%",className:"card-with-icon shadow-lg align-items-center d-flex flex-column bg-white rounded p-3",children:[(0,l.jsx)("div",{className:"row iconbox mb-3",children:t}),(0,l.jsx)("div",{className:"row display6 py-3 text-center mx-2",children:e.title}),(0,l.jsx)("div",{className:"row cardContent flex-fill py-2 mx-3 text-center",children:e.children}),(0,l.jsx)("div",{className:"row mx-3 my-3",children:(0,l.jsx)(c.Z,{href:"".concat(e.link),children:(0,l.jsx)(i.zx,{py:8,px:12,bg:"dark.500",color:"white",_hover:{color:"white",bg:"dark.400"},borderRadius:"0px 12px",rightIcon:(0,l.jsx)(s.Z1Y,{}),children:"Learn More"})})})]})})})},p=r(9401);var u=function(e){var t=Object.entries(p.Z).filter((function(t){return t[1].title===e.service}))[0];return(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsx)(a,{title:t[1].title,iconBg:t[1].color,link:"/solutions/"+t[0],icon:t[1].icon,children:t[1].description})})}},966:function(e,t,r){r.d(t,{Z:function(){return $}});var n=r(9499),i=r(4730),c=r(7294),o=r(8527),s=r(5893),l=["fontSize","image","title","titleSize","titleFont","styleType","stylePos","opacity","spacingY","icon","iconColor","list","text"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){return(0,s.jsx)(s.Fragment,{children:e.data.map((function(e){var t=e.fontSize,r=void 0===t?"lg":t,n=e.image,c=e.title,a=e.titleSize,u=void 0===a?"lg":a,x=e.titleFont,d=e.styleType,j=void 0===d?"disc":d,f=e.stylePos,y=void 0===f?"outside":f,O=e.opacity,g=void 0===O?1:O,h=e.spacingY,b=void 0===h?2:h,m=e.icon,v=e.iconColor,w=e.list,P=e.text,S=(0,i.Z)(e,l);return(0,s.jsxs)(s.Fragment,{children:[c&&(0,s.jsx)(o.X6,{fontFamily:x,my:4,fontSize:u,children:c}),n&&(0,s.jsx)(o.kC,{justifyContent:S.imageJustify,children:n}),P&&(0,s.jsx)(o.xv,p(p({fontSize:r,opacity:g,my:b},S),{},{children:P})),w&&(0,s.jsx)(o.aV,p(p({fontSize:r,opacity:g,px:4,my:b,styleType:j,stylePos:y},S),{},{children:w.map((function(e,t){return(0,s.jsxs)(o.HC,{children:[m&&(0,s.jsx)(o.DE,{icon:m,mr:4,color:v}),e]},t)}))}))]})}))})};var x=function(e){var t=e.data;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("iframe",{src:t.url,width:"100%",height:t.height,frameBorder:"0",allow:"accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,style:{borderRadius:"3px",border:"none"}}),(0,s.jsx)(o.xv,{mt:3,textAlign:"center",opacity:"0.7",children:t.description})]})},d=r(456),j=["images","captionStyles","spacing","maxW","width"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t=e.images,r=(e.captionStyles,e.spacing),n=e.maxW,c=e.width,l=void 0===c?"100%":c,a=(0,i.Z)(e,j),p=(0,s.jsx)("div",{});return p=1===t.length?t.map((function(e,t){return(0,s.jsx)(d.Ee,y({alt:"",src:e,width:l},a),"image-"+t)})):t.map((function(e,t){return(0,s.jsx)(d.Ee,y({alt:"",src:e,mx:r||"16px",width:l,maxW:n||["80px","135.5px","175px","231px","283px"]},a),"image-"+t)})),(0,s.jsx)(o.kC,{justify:"center",wrap:"wrap",flexGrow:1,textAlign:"center",children:p})};var g=function(e){var t=e.data;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.X6,{fontSize:t.fontSize||"28px",children:t.title}),(0,s.jsx)(o.aV,{mt:4,styleType:t.styleType,spacing:2,children:t.items.map((function(e,r){return(0,s.jsxs)(o.HC,{children:[t.styleType?"":(0,s.jsx)(o.DE,{icon:t.icon||"check",color:t.color||"primary.500"}),e]},r)}))})]})},h=(r(8547),r(585)),b=["image","icon","size","title","iconColor","color","svg","titleSize","description","align","textOpacity","titleFont","titleColor"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t=e.image,r=e.icon,n=e.size,c=void 0===n?"48px":n,l=e.title,a=e.iconColor,p=void 0===a?"dark.500":a,u=(e.color,e.svg),x=e.titleSize,j=void 0===x?"lg":x,f=e.description,y=e.align,O=void 0===y?"center":y,g=e.textOpacity,m=e.titleFont,w=(e.titleColor,(0,i.Z)(e,b));return(0,s.jsxs)(o.kC,v(v({direction:"column",align:O},w),{},{children:[u&&(0,s.jsx)(h.Z,{src:u,color:p,size:c}),t&&(0,s.jsx)(d.Ee,{alt:"",src:t,objectFit:"cover",h:c,w:c}),r&&(0,s.jsx)(o.xu,{as:r,size:c}),(0,s.jsx)(o.X6,{fontFamily:m,fontWeight:"600",mt:4,size:j,textAlign:O,children:l}),f&&(0,s.jsx)(o.xv,{opacity:g,mt:4,textAlign:"justify",style:{textAlignLast:O},children:f})]}))},P=["image","icon","size","title","imageWidth","iconColor","color","svg","titleSize","description","align","textOpacity","titleFont","titleColor"];function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=function(e){var t=e.image,r=e.icon,n=e.size,c=void 0===n?"48px":n,l=e.title,a=e.imageWidth,p=void 0===a?"96px":a,u=e.iconColor,x=void 0===u?"dark.500":u,j=(e.color,e.svg),f=e.titleSize,y=void 0===f?"lg":f,O=e.description,g=e.align,b=void 0===g?"center":g,m=e.textOpacity,v=e.titleFont,w=void 0===v?"Nexa Bold":v,S=(e.titleColor,(0,i.Z)(e,P));return(0,s.jsxs)(o.rj,D(D({align:b,templateColumns:["".concat(p," auto")]},S),{},{children:[j&&(0,s.jsx)(h.Z,{src:j,color:x,size:c}),(0,s.jsx)(o.kC,{textAlign:"right",justifyContent:["start","start","center"],children:t&&(0,s.jsx)(d.Ee,{alt:"",src:t,objectFit:"cover",h:c,w:c})}),r&&(0,s.jsx)(o.xu,{as:r,size:c}),(0,s.jsxs)(o.xu,{children:[(0,s.jsx)(o.X6,{fontFamily:w,fontSize:S.titleFontSize,size:y,textAlign:b,children:l}),(0,s.jsx)(o.xv,{fontSize:S.textSize,opacity:m,mt:2,textAlign:"justify",style:{textAlignLast:b},children:O})]})]}))},Z=r(9249),E=(r(9008),["count","digitColor","prefix","suffix","duration","fontSize","title","titleSize","description","align"]);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=function(e){var t=e.count,r=e.digitColor,n=void 0===r?"primary.500":r,c=e.prefix,l=e.suffix,a=e.duration,p=void 0===a?2:a,u=e.fontSize,x=void 0===u?["30px","36px","40px"]:u,d=e.title,j=e.titleSize,f=void 0===j?["18px","20px","22px"]:j,y=e.description,O=e.align,g=void 0===O?"center":O,h=(0,i.Z)(e,E);return(0,s.jsxs)(o.kC,C(C({direction:"column",align:g},h),{},{children:[(0,s.jsx)(o.xv,{fontSize:x,fontFamily:"Nexa Bold",color:n,children:(0,s.jsx)(Z.Z,{endPoint:t,prefix:c,suffix:l,duration:p})}),(0,s.jsx)(o.X6,{my:2,fontSize:f,textAlign:g,children:d}),(0,s.jsx)(o.xv,{textAlign:g,children:y})]}))},N=r(2640),A=r(4090),W=r(9583),B=["content"];function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=function(e){var t=e.content,r=(0,i.Z)(e,B),n=c.useState(0),l=(0,N.Z)(n,2),a=l[0],p=l[1];return(0,s.jsxs)(o.rj,H(H({templateColumns:["auto","auto","50% 50%"]},r),{},{children:[(0,s.jsx)(o.xu,{children:(0,s.jsx)(A.UQ,{onChange:function(e){return p(e)},children:t&&t.map((function(e,t){return(0,s.jsx)(A.Qd,{children:function(t){var r=t.isExpanded;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(A.KF,{children:[(0,s.jsx)(o.xu,{py:2,flex:"1",textAlign:"left",children:(0,s.jsx)(o.X6,{size:"md",children:e.title})}),!r&&(0,s.jsx)(W.wEH,{name:"add"})]}),(0,s.jsx)(A.Hk,{pb:4,children:e.description})]})}})}))})}),(0,s.jsx)(o.xu,{display:["none","none","block"],p:6,children:t&&t.map((function(e,t){if(e.image)return(0,s.jsx)(s.Fragment,{children:a===t&&(0,s.jsx)(d.Ee,{alt:e.title,h:"280px",m:"auto",src:e.image},t)})}))})]}))},_=r(2053),I=["align","justify","wrap","rowDistance","direction","content","imageStyles","descriptionStyles","textWidth","titleStyles"];function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Y=function(e){var t=e.align,r=e.justify,n=e.wrap,c=e.rowDistance,l=e.direction,a=e.content,p=e.imageStyles,u=e.descriptionStyles,x=e.textWidth,j=e.titleStyles,f=(0,i.Z)(e,I);return(0,s.jsxs)(o.kC,R(R({align:t||"flex-end",direction:l||"row",mt:c,wrap:n||"wrap",justify:r||"space-around"},f),{},{children:[(0,s.jsxs)(o.xu,{maxWidth:x,children:[(0,s.jsx)(o.xu,R(R({},j),{},{children:a.title})),(0,s.jsx)(o.xu,R(R({},u),{},{children:a.description}))]}),(0,s.jsx)(d.Ee,R(R({alt:""},p),{},{src:a.image}))]}))},G=(r(9287),r(6847)),Q=(r(9470),["image","maxH","spacing","px","description","title","titleStyle","descriptionStyle","imageProps"]);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=function(e){var t=e.image,r=e.maxH,n=void 0===r?"280px":r,c=e.spacing,l=void 0===c?"24px":c,a=e.px,p=void 0===a?"16px":a,u=e.description,x=e.title,j=e.titleStyle,f=e.descriptionStyle,y=e.imageProps,O=(0,i.Z)(e,Q);return(0,s.jsxs)(o.kC,V(V({px:p,my:l,width:"100%",align:"center"},O),{},{children:[(0,s.jsx)(d.Ee,V({alt:"",padding:["20px","15px","12px"],width:["100%","100%","50%"],maxH:n,src:t},y)),(0,s.jsxs)(o.xu,{width:["100%","100%","50%"],px:["10px","10px","0"],children:[(0,s.jsx)(o.X6,V(V({mb:"16px",fontFamily:"Nexa Bold"},j),{},{children:x})),(0,s.jsx)(o.xv,V(V({textAlign:"justify",fontSize:"lg"},f),{},{children:u}))]})]}))},K=["gap","type","data","width"];function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=function(e){var t=e.gap,r=void 0===t?4:t,n=e.type,c=e.data,l=e.width,a=void 0===l?"100%":l,p=(0,i.Z)(e,K);return(0,s.jsx)(s.Fragment,{children:function e(t,n){switch(t){case"content":return(0,s.jsx)(o.xu,q(q({px:[3,3,r/2],my:4,w:a},p),{},{children:(0,s.jsx)(u,{data:n})}));case"video":return(0,s.jsx)(o.xu,q(q({px:[3,3,r/2],my:4,w:a},p),{},{children:(0,s.jsx)(x,{data:n})}));case"list":return(0,s.jsx)(o.xu,q(q({px:[3,3,r/2],my:4,w:a},p),{},{children:(0,s.jsx)(g,{data:n})}));case"imageGroup":return(0,s.jsx)(o.xu,q(q({px:[3,3,r/2],my:4,w:a},p),{},{children:(0,s.jsx)(O,q({},n))}));case"feature":return(0,s.jsx)(o.xu,q(q({px:[3,3,r/2],my:4,w:a},p),{},{children:(0,s.jsx)(w,q({},n))}));case"feature2":return(0,s.jsx)(o.xu,q(q({px:[3,3,r/2],my:4,w:a},p),{},{children:(0,s.jsx)(z,q({},n))}));case"numberCount":return(0,s.jsx)(o.xu,q(q({px:[3,3,r/2],my:4,w:a},p),{},{children:(0,s.jsx)(F,q({},n))}));case"accordion":return(0,s.jsx)(o.xu,q(q({px:[3,3,r/2],my:4,w:a},p),{},{children:(0,s.jsx)(T,q({},n))}));case"service":return(0,s.jsx)(o.xu,q(q({px:[3,3,r/2],my:4,w:a},p),{},{children:(0,s.jsx)(_.Z,{service:n})}));case"pricing":return(0,s.jsx)(o.xu,q(q({px:0,my:4,w:a},p),{},{children:n}));case"altrow":return(0,s.jsx)(Y,q({},n));case"image&text":return(0,s.jsx)(o.xu,q(q({px:0,w:a},p),{},{children:(0,s.jsx)(J,q({},n))}));case"container":return(0,s.jsx)(o.xu,q(q({px:0,my:4,w:a},p),{},{children:(0,s.jsx)(G.Z,{children:p.containerData.map((function(t,n){return(0,s.jsxs)(o.xu,{px:[6,6,r/2],my:4,w:t.width,children:[e(t.type,t.data)," "]},n)}))})}))}}(n,c)})}},4463:function(e,t,r){var n=r(9499),i=r(4730),c=(r(7294),r(8527)),o=r(5893),s=["fontSize","px","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.fontSize,r=void 0===t?["3xl","32px","34px","4xl"]:t,n=e.px,l=void 0===n?"5px":n,p=e.children,u=void 0===p?"Lorem Ipsum":p,x=(0,i.Z)(e,s);return(0,o.jsx)(c.X6,a(a({textAlign:"center",fontFamily:"Nexa Bold",fontSize:r,px:l},x),{},{children:u}))}}}]);