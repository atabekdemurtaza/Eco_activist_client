(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[114],{1321:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(3),r=a(37),c=a(24),i=a(414),s=a(206),o=a(1292),l=a(34),d=a(0),b=["links","action","heading","moreLink","sx"];function j(e){var t=e.links,a=e.action,j=e.heading,u=e.moreLink,p=void 0===u?[]:u,h=e.sx,m=Object(r.a)(e,b);return Object(d.jsxs)(i.a,{sx:Object(n.a)({mb:5},h),children:[Object(d.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(d.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:j}),Object(d.jsx)(l.b,Object(n.a)({links:t},m))]}),a&&Object(d.jsx)(i.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(i.a,{sx:{mt:2},children:Object(c.isString)(p)?Object(d.jsx)(o.a,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return Object(d.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1331:function(e,t,a){"use strict";var n=a(7),r=a(6),c=a(2),i=a(1),s=(a(10),a(12)),o=a(167),l=a(206),d=a(13),b=a(8),j=a(141),u=a(168);function p(e){return Object(j.a)("MuiCardHeader",e)}var h=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=a(0),x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],O=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(n.a)(a,"& .".concat(h.title),t.title),Object(n.a)(a,"& .".concat(h.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,b=a.className,j=a.component,u=void 0===j?"div":j,h=a.disableTypography,y=void 0!==h&&h,k=a.subheader,C=a.subheaderTypographyProps,P=a.title,M=a.titleTypographyProps,L=Object(r.a)(a,x),R=Object(c.a)({},a,{component:u,disableTypography:y}),T=function(e){var t=e.classes;return Object(o.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(R),N=P;null==N||N.type===l.a||y||(N=Object(m.jsx)(l.a,Object(c.a)({variant:i?"body2":"h5",className:T.title,component:"span",display:"block"},M,{children:N})));var w=k;return null==w||w.type===l.a||y||(w=Object(m.jsx)(l.a,Object(c.a)({variant:i?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:w}))),Object(m.jsxs)(O,Object(c.a)({className:Object(s.default)(T.root,b),as:u,ref:t,styleProps:R},L,{children:[i&&Object(m.jsx)(g,{className:T.avatar,styleProps:R,children:i}),Object(m.jsxs)(f,{className:T.content,styleProps:R,children:[N,w]}),n&&Object(m.jsx)(v,{className:T.action,styleProps:R,children:n})]}))}));t.a=y},2615:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(17),r=a(1),c=a(8),i=a(414),s=a(1303),o=a(1198),l=a(1316),d=a(1331),b=a(1273),j=a(1314),u=a(1279),p=a(206),h=a(2664),m=a(45),x=a(294),O=a(416),g=a(1321),v=a(0),f=Object(c.a)(O.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function y(){var e=Object(x.a)(),t=e.allLang,a=e.currentLang,c=e.translate,O=e.onChangeLang,y=Object(r.useState)(2),k=Object(n.a)(y,2),C=k[0],P=k[1],M=Object(r.useState)(10),L=Object(n.a)(M,2),R=L[0],T=L[1];return Object(v.jsxs)(f,{title:"Components: Multi Language | Minimal-UI",children:[Object(v.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(v.jsx)(s.a,{maxWidth:"lg",children:Object(v.jsx)(g.a,{heading:"Multi Language",links:[{name:"Components",href:m.c.components},{name:"Multi Language"}],moreLink:["https://react.i18next.com","https://next.material-ui.com/guides/localization/#main-content"]})})}),Object(v.jsx)(s.a,{maxWidth:"lg",children:Object(v.jsxs)(o.a,{spacing:5,children:[Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{title:"Flexible"}),Object(v.jsxs)(i.a,{sx:{p:3},children:[Object(v.jsx)(b.a,{row:!0,value:a.value,onChange:function(e){return O(e.target.value)},children:t.map((function(e){return Object(v.jsx)(j.a,{value:e.value,label:e.label,control:Object(v.jsx)(u.a,{})},e.label)}))}),Object(v.jsxs)(i.a,{sx:{my:3,display:"flex",alignItems:"center"},children:[Object(v.jsx)(i.a,{component:"img",alt:a.label,src:a.icon,sx:{mr:1}}),Object(v.jsx)(p.a,{variant:"h2",children:c("demo.title")})]}),Object(v.jsx)(p.a,{variant:"body1",children:c("demo.introduction")})]})]}),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{title:"System",sx:{pb:2}}),Object(v.jsx)(h.a,{component:"div",count:100,page:C,onPageChange:function(e,t){P(t)},rowsPerPage:R,onRowsPerPageChange:function(e){T(parseInt(e.target.value,10)),P(0)}})]})]})})]})}}}]);
//# sourceMappingURL=114.d3eeeb2f.chunk.js.map