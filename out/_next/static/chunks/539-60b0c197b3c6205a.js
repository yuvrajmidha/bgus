"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{5874:function(e,t,r){var n=r(5893),i=r(7294),o=r(7857),l=r(3082),c=r.n(l);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}t.Z=function(e){var t=e.endPoint,r=e.startPoint,l=void 0===r?0:r,a=e.duration,f=void 0===a?1.7:a,p=s(e,["endPoint","startPoint","duration"]),x=(0,i.useState)(!1),y=x[0],d=x[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.ZP,u({end:t,start:y?null:l,useEasing:!0,duration:f},p,{children:function(e){var t=e.countUpRef;return(0,n.jsx)(c(),{active:!y,onChange:function(e){e&&d(!0)},children:(0,n.jsx)("span",u({ref:t,className:"mb-0 text-primary"},p))})}})),(0,n.jsx)("span",{className:"display6",children:p.subtext||""}),(0,n.jsx)("span",{className:"text-secondary",children:p.description||""})]})}},2862:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(5893),i=(r(7294),r(8527)),o=r(5193),l=r(1664),c=r(4273),a=r(9583);var u=function(e){var t=(0,n.jsx)(i.xu,{className:"text-white d-flex justify-content-center shadow-lg align-items-center",rounded:"12px",w:"128px",h:"128px",bg:e.iconBg||"Blue",children:(0,n.jsx)(c.Z,{size:"40px",color:"light.500",src:e.icon})});return e.fullIcon&&(t=(0,n.jsx)(i.xu,{className:"text-white",rounded:"12px",w:"48px",h:"48px",children:e.fullIcon})),(0,n.jsx)(l.default,{href:"/solutions/[name]",as:"".concat(e.link),children:(0,n.jsx)(i.xu,{pt:"64px",h:"100%",children:(0,n.jsxs)(i.xu,{h:"100%",className:"card-with-icon shadow-lg align-items-center d-flex flex-column bg-white rounded p-3",children:[(0,n.jsx)("div",{className:"row iconbox mb-3",children:t}),(0,n.jsx)("div",{className:"row display6 py-3 text-center mx-2",children:e.title}),(0,n.jsx)("div",{className:"row cardContent flex-fill py-2 mx-3 text-center",children:e.children}),(0,n.jsx)("div",{className:"row mx-3 my-3",children:(0,n.jsx)(l.default,{href:"/solutions/[name]",as:"".concat(e.link),children:(0,n.jsx)(o.zx,{py:8,px:12,bg:"dark.500",color:"white",_hover:{color:"white",bg:"dark.400"},borderRadius:"0px 12px",rightIcon:(0,n.jsx)(a.Z1Y,{}),children:"Learn More"})})})]})})})},s=r(1131);var f=function(e){var t=Object.entries(s.Z).filter((function(t){return t[1].title===e.service}))[0];return(0,n.jsx)(n.Fragment,{children:t&&(0,n.jsx)(u,{title:t[1].title,iconBg:t[1].color,link:"/solutions/"+t[0],icon:t[1].icon,children:t[1].description})})}},4056:function(e,t,r){r.d(t,{Z:function(){return Q}});var n=r(5893),i=r(7294),o=r(8527);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=function(e){return(0,n.jsx)(n.Fragment,{children:e.data.map((function(e){var t=e.fontSize,r=void 0===t?"lg":t,i=e.image,l=e.title,u=e.titleSize,s=void 0===u?"lg":u,f=e.titleFont,p=e.styleType,x=void 0===p?"disc":p,y=e.stylePos,d=void 0===y?"outside":y,b=e.opacity,j=void 0===b?1:b,g=e.spacingY,m=void 0===g?2:g,h=e.icon,O=e.iconColor,v=e.list,w=e.text,S=a(e,["fontSize","image","title","titleSize","titleFont","styleType","stylePos","opacity","spacingY","icon","iconColor","list","text"]);return(0,n.jsxs)(n.Fragment,{children:[l&&(0,n.jsx)(o.X6,{fontFamily:f,my:4,fontSize:s,children:l}),i&&(0,n.jsx)(o.kC,{justifyContent:S.imageJustify,children:i}),w&&(0,n.jsx)(o.xv,c({fontSize:r,opacity:j,my:m},S,{children:w})),v&&(0,n.jsx)(o.aV,c({fontSize:r,opacity:j,px:4,my:m,styleType:x,stylePos:d},S,{children:v.map((function(e,t){return(0,n.jsxs)(o.HC,{children:[h&&(0,n.jsx)(o.DE,{icon:h,mr:4,color:O}),e]},t)}))}))]})}))})};var s=function(e){var t=e.data;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("iframe",{src:t.url,width:"100%",height:t.height,frameBorder:"0",allow:"accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,style:{borderRadius:"3px",border:"none"}}),(0,n.jsx)(o.xv,{mt:3,textAlign:"center",opacity:"0.7",children:t.description})]})},f=r(4651);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}function y(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=function(e){var t=e.images,r=(e.captionStyles,e.spacing),i=e.maxW,l=e.width,c=void 0===l?"100%":l,a=y(e,["images","captionStyles","spacing","maxW","width"]),u=(0,n.jsx)("div",{});return u=1===t.length?t.map((function(e,t){return(0,n.jsx)(f.Ee,x({alt:"",src:e,width:c},a),"image-"+t)})):t.map((function(e,t){return(0,n.jsx)(f.Ee,x({alt:"",src:e,mx:r||"16px",width:c,maxW:i||["80px","135.5px","175px","231px","283px"]},a),"image-"+t)})),(0,n.jsx)(o.kC,{justify:"center",wrap:"wrap",flexGrow:1,textAlign:"center",children:u})};var b=function(e){var t=e.data;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.X6,{fontSize:t.fontSize||"28px",children:t.title}),(0,n.jsx)(o.aV,{mt:4,styleType:t.styleType,spacing:2,children:t.items.map((function(e,r){return(0,n.jsxs)(o.HC,{children:[t.styleType?"":(0,n.jsx)(o.DE,{icon:t.icon||"check",color:t.color||"primary.500"}),e]},r)}))})]})},j=(r(8547),r(4273));function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var h=function(e){var t=e.image,r=e.icon,i=e.size,l=void 0===i?"48px":i,c=e.title,a=e.iconColor,u=void 0===a?"dark.500":a,s=(e.color,e.svg),p=e.titleSize,x=void 0===p?"lg":p,y=e.description,d=e.align,b=void 0===d?"center":d,h=e.textOpacity,O=e.titleFont,v=(e.titleColor,m(e,["image","icon","size","title","iconColor","color","svg","titleSize","description","align","textOpacity","titleFont","titleColor"]));return(0,n.jsxs)(o.kC,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}({direction:"column",align:b},v,{children:[s&&(0,n.jsx)(j.Z,{src:s,color:u,size:l}),t&&(0,n.jsx)(f.Ee,{alt:"",src:t,objectFit:"cover",h:l,w:l}),r&&(0,n.jsx)(o.xu,{as:r,size:l}),(0,n.jsx)(o.X6,{fontFamily:O,fontWeight:"600",mt:4,size:x,textAlign:b,children:c}),y&&(0,n.jsx)(o.xv,{opacity:h,mt:4,textAlign:"justify",style:{textAlignLast:b},children:y})]}))};function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var w=function(e){var t=e.image,r=e.icon,i=e.size,l=void 0===i?"48px":i,c=e.title,a=e.imageWidth,u=void 0===a?"96px":a,s=e.iconColor,p=void 0===s?"dark.500":s,x=(e.color,e.svg),y=e.titleSize,d=void 0===y?"lg":y,b=e.description,g=e.align,m=void 0===g?"center":g,h=e.textOpacity,w=e.titleFont,S=void 0===w?"Nexa Bold":w,P=(e.titleColor,v(e,["image","icon","size","title","imageWidth","iconColor","color","svg","titleSize","description","align","textOpacity","titleFont","titleColor"]));return(0,n.jsxs)(o.rj,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){O(e,t,r[t])}))}return e}({align:m,templateColumns:["".concat(u," auto")]},P,{children:[x&&(0,n.jsx)(j.Z,{src:x,color:p,size:l}),(0,n.jsx)(o.kC,{textAlign:"right",justifyContent:["start","start","center"],children:t&&(0,n.jsx)(f.Ee,{alt:"",src:t,objectFit:"cover",h:l,w:l})}),r&&(0,n.jsx)(o.xu,{as:r,size:l}),(0,n.jsxs)(o.xu,{children:[(0,n.jsx)(o.X6,{fontFamily:S,fontSize:P.titleFontSize,size:d,textAlign:m,children:c}),(0,n.jsx)(o.xv,{fontSize:P.textSize,opacity:h,mt:2,textAlign:"justify",style:{textAlignLast:m},children:b})]})]}))},S=r(5874);r(9008);function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var z=function(e){var t=e.count,r=e.digitColor,i=void 0===r?"primary.500":r,l=e.prefix,c=e.suffix,a=e.duration,u=void 0===a?2:a,s=e.fontSize,f=void 0===s?["30px","36px","40px"]:s,p=e.title,x=e.titleSize,y=void 0===x?["18px","20px","22px"]:x,d=e.description,b=e.align,j=void 0===b?"center":b,g=k(e,["count","digitColor","prefix","suffix","duration","fontSize","title","titleSize","description","align"]);return(0,n.jsxs)(o.kC,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){P(e,t,r[t])}))}return e}({direction:"column",align:j},g,{children:[(0,n.jsx)(o.xv,{fontSize:f,fontFamily:"Nexa Bold",color:i,children:(0,n.jsx)(S.Z,{endPoint:t,prefix:l,suffix:c,duration:u})}),(0,n.jsx)(o.X6,{my:2,fontSize:y,textAlign:j,children:p}),(0,n.jsx)(o.xv,{textAlign:j,children:d})]}))},E=r(4090),C=r(9583);function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(a){c=!0,i=a}finally{try{l||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=function(e){var t=e.content,r=I(e,["content"]),l=D(i.useState(0),2),c=l[0],a=l[1];return(0,n.jsxs)(o.rj,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){A(e,t,r[t])}))}return e}({templateColumns:["auto","auto","50% 50%"]},r,{children:[(0,n.jsx)(o.xu,{children:(0,n.jsx)(E.UQ,{onChange:function(e){return a(e)},children:t&&t.map((function(e,t){return(0,n.jsx)(E.Qd,{children:function(t){var r=t.isExpanded;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(E.KF,{children:[(0,n.jsx)(o.xu,{py:2,flex:"1",textAlign:"left",children:(0,n.jsx)(o.X6,{size:"md",children:e.title})}),!r&&(0,n.jsx)(C.wEH,{name:"add"})]}),(0,n.jsx)(E.Hk,{pb:4,children:e.description})]})}})}))})}),(0,n.jsx)(o.xu,{display:["none","none","block"],p:6,children:t&&t.map((function(e,t){if(e.image)return(0,n.jsx)(n.Fragment,{children:c===t&&(0,n.jsx)(f.Ee,{alt:e.title,h:"280px",m:"auto",src:e.image},t)})}))})]}))},Z=r(2862);function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){W(e,t,r[t])}))}return e}function X(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var H=function(e){var t=e.align,r=e.justify,i=e.wrap,l=e.rowDistance,c=e.direction,a=e.content,u=e.imageStyles,s=e.descriptionStyles,p=e.textWidth,x=e.titleStyles,y=X(e,["align","justify","wrap","rowDistance","direction","content","imageStyles","descriptionStyles","textWidth","titleStyles"]);return(0,n.jsxs)(o.kC,B({align:t||"flex-end",direction:c||"row",mt:l,wrap:i||"wrap",justify:r||"space-around"},y,{children:[(0,n.jsxs)(o.xu,{maxWidth:p,children:[(0,n.jsx)(o.xu,B({},x,{children:a.title})),(0,n.jsx)(o.xu,B({},s,{children:a.description}))]}),(0,n.jsx)(f.Ee,B({alt:""},u,{src:a.image}))]}))},T=(r(3086),r(5994));r(9470);function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_(e,t,r[t])}))}return e}function R(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var U=function(e){var t=e.image,r=e.maxH,i=void 0===r?"280px":r,l=e.spacing,c=void 0===l?"24px":l,a=e.px,u=void 0===a?"16px":a,s=e.description,p=e.title,x=e.titleStyle,y=e.descriptionStyle,d=e.imageProps,b=R(e,["image","maxH","spacing","px","description","title","titleStyle","descriptionStyle","imageProps"]);return(0,n.jsxs)(o.kC,L({px:u,my:c,width:"100%",align:"center"},b,{children:[(0,n.jsx)(f.Ee,L({alt:"",padding:["20px","15px","12px"],width:["100%","100%","50%"],maxH:i,src:t},d)),(0,n.jsxs)(o.xu,{width:["100%","100%","50%"],px:["10px","10px","0"],children:[(0,n.jsx)(o.X6,L({mb:"16px",fontFamily:"Nexa Bold"},x,{children:p})),(0,n.jsx)(o.xv,L({textAlign:"justify",fontSize:"lg"},y,{children:s}))]})]}))};function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Y(e,t,r[t])}))}return e}function M(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Q=function(e){var t=e.gap,r=void 0===t?4:t,i=e.type,l=e.data,c=e.width,a=void 0===c?"100%":c,f=M(e,["gap","type","data","width"]);return(0,n.jsx)(n.Fragment,{children:function e(t,i){switch(t){case"content":return(0,n.jsx)(o.xu,G({px:[3,3,r/2],my:4,w:a},f,{children:(0,n.jsx)(u,{data:i})}));case"video":return(0,n.jsx)(o.xu,G({px:[3,3,r/2],my:4,w:a},f,{children:(0,n.jsx)(s,{data:i})}));case"list":return(0,n.jsx)(o.xu,G({px:[3,3,r/2],my:4,w:a},f,{children:(0,n.jsx)(b,{data:i})}));case"imageGroup":return(0,n.jsx)(o.xu,G({px:[3,3,r/2],my:4,w:a},f,{children:(0,n.jsx)(d,G({},i))}));case"feature":return(0,n.jsx)(o.xu,G({px:[3,3,r/2],my:4,w:a},f,{children:(0,n.jsx)(h,G({},i))}));case"feature2":return(0,n.jsx)(o.xu,G({px:[3,3,r/2],my:4,w:a},f,{children:(0,n.jsx)(w,G({},i))}));case"numberCount":return(0,n.jsx)(o.xu,G({px:[3,3,r/2],my:4,w:a},f,{children:(0,n.jsx)(z,G({},i))}));case"accordion":return(0,n.jsx)(o.xu,G({px:[3,3,r/2],my:4,w:a},f,{children:(0,n.jsx)(N,G({},i))}));case"service":return(0,n.jsx)(o.xu,G({px:[3,3,r/2],my:4,w:a},f,{children:(0,n.jsx)(Z.Z,{service:i})}));case"pricing":return(0,n.jsx)(o.xu,G({px:0,my:4,w:a},f,{children:i}));case"altrow":return(0,n.jsx)(H,G({},i));case"image&text":return(0,n.jsx)(o.xu,G({px:0,w:a},f,{children:(0,n.jsx)(U,G({},i))}));case"container":return(0,n.jsx)(o.xu,G({px:0,my:4,w:a},f,{children:(0,n.jsx)(T.Z,{children:f.containerData.map((function(t,i){return(0,n.jsxs)(o.xu,{px:[6,6,r/2],my:4,w:t.width,children:[e(t.type,t.data)," "]},index)}))})}))}}(i,l)})}},6722:function(e,t,r){var n=r(5893),i=(r(7294),r(8527));function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}t.Z=function(e){var t=e.fontSize,r=void 0===t?["3xl","32px","34px","4xl"]:t,c=e.px,a=void 0===c?"5px":c,u=e.children,s=void 0===u?"Lorem Ipsum":u,f=l(e,["fontSize","px","children"]);return(0,n.jsx)(i.X6,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({textAlign:"center",fontFamily:"Nexa Bold",fontSize:r,px:a},f,{children:s}))}}}]);