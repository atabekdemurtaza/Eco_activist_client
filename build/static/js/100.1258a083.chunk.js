(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[100],{1321:function(t,n,e){"use strict";e.d(n,"a",(function(){return j}));var r=e(3),a=e(37),i=e(24),c=e(414),o=e(206),s=e(1292),l=e(34),d=e(0),u=["links","action","heading","moreLink","sx"];function j(t){var n=t.links,e=t.action,j=t.heading,h=t.moreLink,b=void 0===h?[]:h,x=t.sx,f=Object(a.a)(t,u);return Object(d.jsxs)(c.a,{sx:Object(r.a)({mb:5},x),children:[Object(d.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:j}),Object(d.jsx)(l.b,Object(r.a)({links:n},f))]}),e&&Object(d.jsx)(c.a,{sx:{flexShrink:0},children:e})]}),Object(d.jsx)(c.a,{sx:{mt:2},children:Object(i.isString)(b)?Object(d.jsx)(s.a,{href:b,target:"_blank",variant:"body2",children:b}):b.map((function(t){return Object(d.jsx)(s.a,{noWrap:!0,href:t,variant:"body2",target:"_blank",sx:{display:"table"},children:t},t)}))})]})}},1326:function(t,n,e){"use strict";e.d(n,"b",(function(){return l})),e.d(n,"a",(function(){return d}));var r=e(3),a=e(206),i=e(1316),c=e(1331),o=e(414),s=e(0);function l(t){var n=t.title;return Object(s.jsx)(a.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}function d(t){var n=t.title,e=t.sx,a=t.children;return Object(s.jsxs)(i.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[n&&Object(s.jsx)(c.a,{title:n}),Object(s.jsx)(o.a,{sx:Object(r.a)({p:3,minHeight:180},e),children:a})]})}},1331:function(t,n,e){"use strict";var r=e(7),a=e(6),i=e(2),c=e(1),o=(e(10),e(12)),s=e(167),l=e(206),d=e(13),u=e(8),j=e(141),h=e(168);function b(t){return Object(j.a)("MuiCardHeader",t)}var x=Object(h.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=e(0),O=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=Object(u.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(t,n){var e;return Object(i.a)((e={},Object(r.a)(e,"& .".concat(x.title),n.title),Object(r.a)(e,"& .".concat(x.subheader),n.subheader),e),n.root)}})({display:"flex",alignItems:"center",padding:16}),v=Object(u.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(t,n){return n.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),p=Object(u.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(t,n){return n.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(u.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(t,n){return n.content}})({flex:"1 1 auto"}),k=c.forwardRef((function(t,n){var e=Object(d.a)({props:t,name:"MuiCardHeader"}),r=e.action,c=e.avatar,u=e.className,j=e.component,h=void 0===j?"div":j,x=e.disableTypography,k=void 0!==x&&x,y=e.subheader,C=e.subheaderTypographyProps,T=e.title,w=e.titleTypographyProps,S=Object(a.a)(e,O),R=Object(i.a)({},e,{component:h,disableTypography:k}),z=function(t){var n=t.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},b,n)}(R),W=T;null==W||W.type===l.a||k||(W=Object(f.jsx)(l.a,Object(i.a)({variant:c?"body2":"h5",className:z.title,component:"span",display:"block"},w,{children:W})));var H=y;return null==H||H.type===l.a||k||(H=Object(f.jsx)(l.a,Object(i.a)({variant:c?"body2":"body1",className:z.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:H}))),Object(f.jsxs)(m,Object(i.a)({className:Object(o.default)(z.root,u),as:h,ref:n,styleProps:R},S,{children:[c&&Object(f.jsx)(v,{className:z.avatar,styleProps:R,children:c}),Object(f.jsxs)(g,{className:z.content,styleProps:R,children:[W,H]}),r&&Object(f.jsx)(p,{className:z.action,styleProps:R,children:r})]}))}));n.a=k},2602:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return g}));var r=e(170),a=e(208),i=e.n(a),c=e(25),o=e(8),s=e(206),l=e(1294),d=e(415),u=e(414),j=e(1303),h=e(1289),b=e(45),x=e(416),f=e(1321),O=e(1326),m=e(0),v={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},p=Object(o.a)(x.a)((function(t){var n=t.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}}));function g(){var t=Object(r.useSnackbar)(),n=t.enqueueSnackbar,e=t.closeSnackbar,a=function(t){n(Object(m.jsxs)("div",{children:[Object(m.jsx)(s.a,{variant:"subtitle2",sx:{textTransform:"capitalize"},children:t}),Object(m.jsxs)(s.a,{variant:"body2",sx:{color:"text.secondary"},children:["This is an ",t]})]}),{variant:t,action:function(t){return Object(m.jsx)(l.a,{size:"small",color:"inherit",onClick:function(){return e(t)},children:Object(m.jsx)(c.a,{icon:i.a,width:24,height:24})})}})},o=function(t,r){n("This is an ".concat(t),{variant:t,anchorOrigin:r,action:function(n){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{size:"small",color:"default"!==t?t:"primary",onClick:function(){alert("I belong to snackbar with key ".concat(n))},children:"Alert"}),Object(m.jsx)(d.a,{size:"small",color:"inherit",onClick:function(){return e(n)},children:"Dismiss"})]})}})};return Object(m.jsxs)(p,{title:"Components: Snackbar | Minimal-UI",children:[Object(m.jsx)(u.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(t){return"light"===t.palette.mode?"grey.200":"grey.800"}},children:Object(m.jsx)(j.a,{maxWidth:"lg",children:Object(m.jsx)(f.a,{heading:"Snackbar",links:[{name:"Components",href:b.c.components},{name:"Snackbar"}],moreLink:["https://next.material-ui.com/components/snackbars","https://www.iamhosseindhv.com/notistack"]})})}),Object(m.jsx)(j.a,{maxWidth:"lg",children:Object(m.jsxs)(h.a,{container:!0,spacing:3,children:[Object(m.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(m.jsxs)(O.a,{title:"Simple",sx:v,children:[Object(m.jsx)(d.a,{variant:"contained",color:"inherit",onClick:function(){return n("This is an default")},children:"Default"}),Object(m.jsx)(d.a,{variant:"contained",color:"info",onClick:function(){return n("This is an info",{variant:"info"})},children:"Info"}),Object(m.jsx)(d.a,{variant:"contained",color:"success",onClick:function(){return n("This is an success",{variant:"success"})},children:"Success"}),Object(m.jsx)(d.a,{variant:"contained",color:"warning",onClick:function(){return n("This is an warning",{variant:"warning"})},children:"Warning"}),Object(m.jsx)(d.a,{variant:"contained",color:"error",onClick:function(){return n("This is an error",{variant:"error"})},children:"Error"})]})}),Object(m.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(m.jsxs)(O.a,{title:"With Close",sx:v,children:[Object(m.jsx)(d.a,{variant:"contained",color:"inherit",onClick:function(){return a("default")},children:"Default"}),Object(m.jsx)(d.a,{variant:"contained",color:"info",onClick:function(){return a("info")},children:"Info"}),Object(m.jsx)(d.a,{variant:"contained",color:"success",onClick:function(){return a("success")},children:"Success"}),Object(m.jsx)(d.a,{variant:"contained",color:"warning",onClick:function(){return a("warning")},children:"Warning"}),Object(m.jsx)(d.a,{variant:"contained",color:"error",onClick:function(){return a("error")},children:"Error"})]})}),Object(m.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(m.jsxs)(O.a,{title:"With Action",sx:v,children:[Object(m.jsx)(d.a,{variant:"contained",color:"inherit",onClick:function(){return o("default")},children:"Default"}),Object(m.jsx)(d.a,{variant:"contained",color:"info",onClick:function(){return o("info")},children:"Info"}),Object(m.jsx)(d.a,{variant:"contained",color:"success",onClick:function(){return o("success")},children:"Success"}),Object(m.jsx)(d.a,{variant:"contained",color:"warning",onClick:function(){return o("warning")},children:"Warning"}),Object(m.jsx)(d.a,{variant:"contained",color:"error",onClick:function(){return o("error")},children:"Error"})]})}),Object(m.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(m.jsxs)(O.a,{title:"anchorOrigin",sx:v,children:[Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"top",horizontal:"left"})},children:"Top Left"}),Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"top",horizontal:"center"})},children:"Top Center"}),Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default")},children:"Top Right"}),Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"bottom",horizontal:"left"})},children:"Bottom Left"}),Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"bottom",horizontal:"center"})},children:"Bottom Center"}),Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"bottom",horizontal:"right"})},children:"Bottom Right"})]})})]})})]})}}}]);
//# sourceMappingURL=100.1258a083.chunk.js.map