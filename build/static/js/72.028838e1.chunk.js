(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[72],{1321:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(3),n=r(37),i=r(24),o=r(414),c=r(206),s=r(1292),l=r(34),b=r(0),j=["links","action","heading","moreLink","sx"];function d(e){var t=e.links,r=e.action,d=e.heading,u=e.moreLink,h=void 0===u?[]:u,p=e.sx,x=Object(n.a)(e,j);return Object(b.jsxs)(o.a,{sx:Object(a.a)({mb:5},p),children:[Object(b.jsxs)(o.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(b.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:d}),Object(b.jsx)(l.b,Object(a.a)({links:t},x))]}),r&&Object(b.jsx)(o.a,{sx:{flexShrink:0},children:r})]}),Object(b.jsx)(o.a,{sx:{mt:2},children:Object(i.isString)(h)?Object(b.jsx)(s.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(b.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1322:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return b}));var a=r(24),n=r(1335),i=r.n(n);function o(e){return i()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function c(e){return i()(e/100).format("0.0%")}function s(e){return i()(e).format()}function l(e){return Object(a.replace)(i()(e).format("0.00a"),".00","")}function b(e){return i()(e).format("0.0 b")}},1376:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r(3),n=r(37),i=r(638),o=r(206),c=r(0),s=["searchQuery"];function l(e){var t=e.searchQuery,r=void 0===t?"":t,l=Object(n.a)(e,s);return Object(c.jsxs)(i.a,Object(a.a)(Object(a.a)({},l),{},{children:[Object(c.jsx)(o.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(c.jsxs)(o.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(c.jsxs)("strong",{children:['"',r,'"']}),". Try checking for typos or using complete words."]})]}))}},1427:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(37),n=r(3),i=r(1),o=r(1518),c=r(1206),s=r(1259),l=r(65),b=r(206),j=r(0),d=["images","photoIndex","setPhotoIndex","isOpen","onClose"],u=Object(c.a)((function(e){var t="rtl"===e.direction,r=function(t){return{backgroundSize:"24px 24px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:Object(l.a)(e.palette.grey[900],.8),backgroundImage:'url("/static/icons/controls/'.concat(t,'.svg")')}};return Object(s.a)({root:{backdropFilter:"blur(8px)",backgroundColor:Object(l.a)(e.palette.grey[900],.88),"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-of-type":{flexGrow:1},"& li:not(:first-of-type)":{width:e.spacing(5),height:e.spacing(5),justifyContent:"center",marginLeft:e.spacing(1),borderRadius:e.shape.borderRadius}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":r("maximize-outline"),"&.ril__zoomOutButton":r("minimize-outline"),"&.ril__closeButton":r("close")},"& .ril__navButtons":{padding:e.spacing(3),borderRadius:e.shape.borderRadiusSm,"&.ril__navButtonPrev":Object(n.a)({left:e.spacing(2),right:"auto"},r(t?"arrow-ios-forward":"arrow-ios-back")),"&.ril__navButtonNext":Object(n.a)({right:e.spacing(2),left:"auto"},r(t?"arrow-ios-back":"arrow-ios-forward"))}}})}));function h(e){var t=e.images,r=e.photoIndex,c=e.setPhotoIndex,s=e.isOpen,l=e.onClose,h=Object(a.a)(e,d),p=u();Object(i.useEffect)((function(){document.body.style.overflow=s?"hidden":"unset"}),[s]);var x=[Object(j.jsx)(b.a,{variant:"subtitle2",children:"".concat(r+1," / ").concat(t.length)})];return Object(j.jsx)(j.Fragment,{children:s&&Object(j.jsx)(o.a,Object(n.a)({mainSrc:t[r],nextSrc:t[(r+1)%t.length],prevSrc:t[(r+t.length-1)%t.length],onCloseRequest:l,onMovePrevRequest:function(){return c((r+t.length-1)%t.length)},onMoveNextRequest:function(){return c((r+1)%t.length)},toolbarButtons:x,reactModalStyle:{overlay:{zIndex:9999}},wrapperClassName:p.root},h))})}},1706:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var a=r(17),n=r(37),i=r(3),o=(r(1921),r(1946)),c=r(25),s=r(1),l=r(1922),b=r.n(l),j=r(8),d=r(65),u=r(52),h=r(283),p=r(1294),x=r(0),O=["disabled","value","setValue","alignRight"],m=Object(j.a)("div")({position:"relative"}),g=Object(j.a)("div")((function(e){var t=e.theme;return{bottom:40,overflow:"hidden",position:"absolute",left:t.spacing(-2),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadiusMd,"& .emoji-mart":{border:"none",backgroundColor:t.palette.background.paper},"& .emoji-mart-anchor":{color:t.palette.text.disabled,"&:hover, &:focus, &.emoji-mart-anchor-selected":{color:t.palette.text.primary}},"& .emoji-mart-bar":{borderColor:t.palette.divider},"& .emoji-mart-search input":{backgroundColor:"transparent",color:t.palette.text.primary,borderColor:t.palette.grey[50032],"&::placeholder":Object(i.a)(Object(i.a)({},t.typography.body2),{},{color:t.palette.text.disabled})},"& .emoji-mart-search-icon svg":{opacity:1,fill:t.palette.text.disabled},"& .emoji-mart-category-label span":Object(i.a)(Object(i.a)({},t.typography.subtitle2),{},{backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",color:t.palette.text.primary,backgroundColor:Object(d.a)(t.palette.background.paper,.8)}),"& .emoji-mart-title-label":{color:t.palette.text.primary},"& .emoji-mart-category .emoji-mart-emoji:hover:before":{backgroundColor:t.palette.action.selected},"& .emoji-mart-emoji":{outline:"none"},"& .emoji-mart-preview-name":{color:t.palette.text.primary},"& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon":{color:t.palette.text.secondary}}}));function f(e){var t,r=e.disabled,l=e.value,j=e.setValue,d=e.alignRight,f=void 0!==d&&d,v=Object(n.a)(e,O),y=Object(u.a)(),k=Object(s.useState)(!1),w=Object(a.a)(k,2),S=w[0],C=w[1];S&&(t=Object(x.jsx)(o.a,{color:y.palette.primary.main,title:"Pick your emoji\u2026",emoji:"point_up",onSelect:function(e){return j(l+e.native)}}));return Object(x.jsx)(h.a,{onClickAway:function(){C(!1)},children:Object(x.jsxs)(m,Object(i.a)(Object(i.a)({},v),{},{children:[Object(x.jsx)(g,{sx:Object(i.a)({},f&&{right:-2,left:"auto !important"}),children:t}),Object(x.jsx)(p.a,{disabled:r,size:"small",onClick:function(e){e.preventDefault(),C(!S)},children:Object(x.jsx)(c.a,{icon:b.a,width:20,height:20})})]}))})}},2627:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return me}));var a=r(17),n=r(7),i=r(25),o=r(1271),c=r(1),s=(r(1387),r(440),r(2414)),l=r.n(s),b=r(1605),j=r.n(b),d=r(8),u=r(1303),h=r(1316),p=r(2643),x=r(2671),O=r(414),m=r(328),g=r(430),f=r(45),v=r(58),y=r(85),k=r(416),w=r(1321),S=r(1289),C=r(1198),R=r(1606),_=r.n(R),I=r(1452),B=r.n(I),P=r(2415),z=r.n(P),F=r(1331),L=r(206),A=r(1292),N=r(0),M=Object(d.a)(i.a)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function T(e){var t=e.profile,r=t.quote,a=t.country,n=t.email,i=t.token,o=void 0===i?"djand121ednsjf893wriHUHjsdnajkJJOd":i;return Object(N.jsxs)(h.a,{children:[Object(N.jsx)(F.a,{title:"About"}),Object(N.jsxs)(C.a,{spacing:2,sx:{p:3},children:[Object(N.jsx)(L.a,{variant:"body2",children:r}),Object(N.jsxs)(C.a,{direction:"row",children:[Object(N.jsx)(M,{icon:_.a}),Object(N.jsxs)(L.a,{variant:"body2",children:["Live at \xa0",Object(N.jsx)(A.a,{component:"span",variant:"subtitle2",color:"text.primary",children:a})]})]}),Object(N.jsxs)(C.a,{direction:"row",children:[Object(N.jsx)(M,{icon:B.a}),Object(N.jsx)(L.a,{variant:"body2",children:n})]}),Object(N.jsxs)(C.a,{direction:"row",children:[Object(N.jsx)(M,{icon:z.a}),Object(N.jsxs)(L.a,{variant:"body2",children:["VechainThor Token \xa0",Object(N.jsx)(A.a,{component:"span",variant:"subtitle2",color:"primary",children:o})]})]})]})]})}var W=r(31),E=(r(1607),r(1343),r(1344)),U=r.n(E),q=(r(2416),r(1433),r(1294)),G=r(248),J=r(1322),V=r(209);r(1706);function D(e){var t=e.post,r=Object(v.a)().user,n=(Object(c.useRef)(null),Object(c.useRef)(null),Object(c.useState)(t.isLiked)),o=Object(a.a)(n,2),s=(o[0],o[1],Object(c.useState)(t.personLikes.length)),l=Object(a.a)(s,2),b=(l[0],l[1],Object(c.useState)("")),j=Object(a.a)(b,2);j[0],j[1],t.comments.length;return Object(N.jsxs)(h.a,{children:[Object(N.jsx)(F.a,{disableTypography:!0,avatar:Object(N.jsx)(V.a,{}),title:Object(N.jsx)(A.a,{to:"#",variant:"subtitle2",color:"text.primary",component:W.b,children:r.displayName}),subheader:Object(N.jsx)(L.a,{variant:"caption",sx:{display:"block",color:"text.secondary"},children:Object(G.a)(t.createdAt)}),action:Object(N.jsx)(q.a,{children:Object(N.jsx)(i.a,{icon:U.a,width:20,height:20})})}),Object(N.jsxs)(C.a,{spacing:3,sx:{p:3},children:[Object(N.jsx)(L.a,{variant:"body1",children:t.message}),Object(N.jsx)(O.a,{sx:{position:"relative",pt:"calc(100% / 16 * 9)"},children:Object(N.jsx)(O.a,{component:"img",alt:"post media",src:t.media,sx:{top:0,width:1,height:1,borderRadius:1,objectFit:"cover",position:"absolute"}})})]})]})}r(1434);var H=r(1199);function Q(e){var t=e.profile,r=t.follower,a=t.following;return Object(N.jsx)(h.a,{sx:{py:3},children:Object(N.jsxs)(C.a,{direction:"row",divider:Object(N.jsx)(H.a,{orientation:"vertical",flexItem:!0}),children:[Object(N.jsxs)(C.a,{width:1,textAlign:"center",children:[Object(N.jsxs)(L.a,{variant:"h4",children:[Object(J.c)(r)," ECO "]}),Object(N.jsx)(L.a,{variant:"body2",sx:{color:"text.secondary"},children:"Earnings"})]}),Object(N.jsxs)(C.a,{width:1,textAlign:"center",children:[Object(N.jsx)(L.a,{variant:"h4",children:Object(J.c)(a)}),Object(N.jsx)(L.a,{variant:"body2",sx:{color:"text.secondary"},children:"Activities"})]})]})})}var $=r(255),K=r.n($),X=r(256),Y=r.n(X),Z=r(424),ee=r.n(Z),te=r(1360),re=r.n(te);Object(d.a)(i.a)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function ae(e){var t=e.myProfile,r=e.posts;return Object(N.jsxs)(S.a,{container:!0,spacing:3,children:[Object(N.jsx)(S.a,{item:!0,xs:12,md:4,children:Object(N.jsxs)(C.a,{spacing:3,children:[Object(N.jsx)(Q,{profile:t}),Object(N.jsx)(T,{profile:t})]})}),Object(N.jsx)(S.a,{item:!0,xs:12,md:8,children:Object(N.jsx)(C.a,{spacing:3,children:r.map((function(e){return Object(N.jsx)(D,{post:e},e.id)}))})})]})}var ne=r(65),ie=Object(d.a)("div")((function(e){var t=e.theme;return{"&:before":{top:0,zIndex:9,width:"100%",content:"''",height:"100%",position:"absolute",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)",backgroundColor:Object(ne.a)(t.palette.primary.darker,.72)}}})),oe=Object(d.a)("div")((function(e){var t=e.theme;return Object(n.a)({left:0,right:0,zIndex:99,position:"absolute",marginTop:t.spacing(5)},t.breakpoints.up("md"),{right:"auto",display:"flex",alignItems:"center",left:t.spacing(3),bottom:t.spacing(3)})})),ce=Object(d.a)("img")({zIndex:8,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function se(e){var t=e.myProfile,r=Object(v.a)().user,a=t.position,n=t.cover;return Object(N.jsxs)(ie,{children:[Object(N.jsxs)(oe,{children:[Object(N.jsx)(V.a,{sx:{mx:"auto",borderWidth:2,borderStyle:"solid",borderColor:"common.white",width:{xs:80,md:128},height:{xs:80,md:128}}}),Object(N.jsxs)(O.a,{sx:{ml:{md:3},mt:{xs:1,md:0},color:"common.white",textAlign:{xs:"center",md:"left"}},children:[Object(N.jsx)(L.a,{variant:"h4",children:r.displayName}),Object(N.jsx)(L.a,{sx:{opacity:.72},children:a})]})]}),Object(N.jsx)(ce,{alt:"profile cover",src:n})]})}r(3);var le=r(24),be=(r(332),r(1290));r(1288),r(1308),r(1305),r(1376),i.a,Y.a,i.a,re.a,i.a,ee.a,i.a,K.a,Object(d.a)(be.a)((function(e){var t=e.theme;return{width:240,marginBottom:t.spacing(5),transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));var je=r(1397),de=r(1427),ue=Object(d.a)(je.a)((function(e){var t=e.theme;return{bottom:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)",justifyContent:"space-between",color:t.palette.common.white,backgroundColor:Object(ne.a)(t.palette.grey[900],.72),borderBottomLeftRadius:t.shape.borderRadiusMd,borderBottomRightRadius:t.shape.borderRadiusMd}})),he=Object(d.a)("img")({top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function pe(e){var t=e.image,r=e.onOpenLightbox,a=t.imageUrl,n=t.title,o=t.postAt;return Object(N.jsxs)(h.a,{sx:{pt:"100%",cursor:"pointer"},children:[Object(N.jsx)(he,{alt:"gallery image",src:a,onClick:function(){return r(a)}}),Object(N.jsxs)(ue,{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(L.a,{variant:"subtitle1",children:n}),Object(N.jsx)(L.a,{variant:"body2",sx:{opacity:.72},children:Object(G.a)(o)})]}),Object(N.jsx)(q.a,{color:"inherit",children:Object(N.jsx)(i.a,{icon:U.a,width:20,height:20})})]})]})}function xe(e){var t=e.gallery,r=Object(c.useState)(!1),n=Object(a.a)(r,2),i=n[0],o=n[1],s=Object(c.useState)(null),l=Object(a.a)(s,2),b=l[0],j=l[1],d=t.map((function(e){return e.imageUrl})),u=function(e){var t=Object(le.findIndex)(d,(function(t){return t===e}));o(!0),j(t)};return Object(N.jsxs)(O.a,{sx:{mt:5},children:[Object(N.jsx)(L.a,{variant:"h4",sx:{mb:3},children:"Gallery"}),Object(N.jsxs)(h.a,{sx:{p:3},children:[Object(N.jsx)(S.a,{container:!0,spacing:3,children:t.map((function(e){return Object(N.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,children:Object(N.jsx)(pe,{image:e,onOpenLightbox:u})},e.id)}))}),Object(N.jsx)(de.a,{images:d,photoIndex:b,setPhotoIndex:j,isOpen:i,onClose:function(){return o(!1)}})]})]})}r(1365),r(415);var Oe=Object(d.a)("div")((function(e){var t,r=e.theme;return t={zIndex:9,bottom:0,width:"100%",display:"flex",position:"absolute",backgroundColor:r.palette.background.paper},Object(n.a)(t,r.breakpoints.up("sm"),{justifyContent:"center"}),Object(n.a)(t,r.breakpoints.up("md"),{justifyContent:"flex-end",paddingRight:r.spacing(3)}),t}));function me(){var e=Object(y.a)().themeStretch,t=Object(m.c)(),r=Object(m.d)((function(e){return e.user})),n=r.myProfile,s=r.posts,b=(r.followers,r.friends,r.gallery),d=Object(v.a)().user,S=Object(c.useState)("profile"),C=Object(a.a)(S,2),R=C[0],_=C[1],I=Object(c.useState)(""),B=Object(a.a)(I,2);B[0],B[1];Object(c.useEffect)((function(){t(Object(g.k)()),t(Object(g.j)()),t(Object(g.e)()),t(Object(g.f)()),t(Object(g.g)())}),[t]);if(!n)return null;var P=[{value:"profile",icon:Object(N.jsx)(i.a,{icon:j.a,width:20,height:20}),component:Object(N.jsx)(ae,{myProfile:n,posts:s})},{value:"gallery",icon:Object(N.jsx)(i.a,{icon:l.a,width:20,height:20}),component:Object(N.jsx)(xe,{gallery:b})}];return Object(N.jsx)(k.a,{title:"User: Profile | Eco-Activist",children:Object(N.jsxs)(u.a,{maxWidth:!e&&"lg",children:[Object(N.jsx)(w.a,{heading:"Profile",links:[{name:"Dashboard",href:f.b.root},{name:"User",href:f.b.user.root},{name:d.displayName}]}),Object(N.jsxs)(h.a,{sx:{mb:3,height:280,position:"relative"},children:[Object(N.jsx)(se,{myProfile:n}),Object(N.jsx)(Oe,{children:Object(N.jsx)(p.a,{value:R,scrollButtons:"auto",variant:"scrollable",allowScrollButtonsMobile:!0,onChange:function(e,t){_(t)},children:P.map((function(e){return Object(N.jsx)(x.a,{disableRipple:!0,value:e.value,icon:e.icon,label:Object(o.a)(e.value)},e.value)}))})})]}),P.map((function(e){return e.value===R&&Object(N.jsx)(O.a,{children:e.component},e.value)}))]})})}}}]);
//# sourceMappingURL=72.028838e1.chunk.js.map