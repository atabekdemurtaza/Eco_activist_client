(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[103],{1333:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return g})),a.d(t,"e",(function(){return x})),a.d(t,"f",(function(){return v}));var r=a(3),o=a(1323),i=a(8),n=a(0),c=Object(i.a)(o.b)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(1.5),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function l(e){var t=Object.assign({},e);return Object(n.jsx)(c,Object(r.a)({},t))}var s=Object(i.a)(o.c)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8}}));function d(e){var t=Object.assign({},e);return Object(n.jsx)(s,Object(r.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},t))}var p=a(37),u=["onClick"],b=Object(i.a)("svg")((function(e){return{height:20,stroke:"none",cursor:"pointer",fill:e.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function m(e){var t=e.onClick,a=Object(p.a)(e,u);return Object(n.jsx)(o.f,Object(r.a)(Object(r.a)({},a),{},{children:Object(n.jsx)(b,{viewBox:"0 0 24 24",onClick:t,children:Object(n.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var h=Object(i.a)(o.g)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(t.palette.divider)}}}));function g(e){var t=Object.assign({},e);return Object(n.jsx)(h,Object(r.a)({},t))}var y=["children","onClose"],f=Object(i.a)(o.h)((function(e){var t=e.theme,a="rtl"===t.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:t.spacing(1),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:t.palette.common.white,right:a&&"0",left:a&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:t.palette.grey[800]}}}));function x(e){var t=e.children,a=e.onClose,o=Object(p.a)(e,y);return Object(n.jsx)(f,Object(r.a)(Object(r.a)({tipSize:8,anchor:"bottom",onClose:a,closeButton:!0,closeOnClick:!1},o),{},{children:t}))}var j=["sx"],O=Object(i.a)("div")((function(e){var t=e.theme;return{zIndex:99,position:"absolute",left:t.spacing(1.5),bottom:t.spacing(3.5),boxShadow:t.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:t.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function v(e){var t=e.sx,a=Object(p.a)(e,j);return Object(n.jsx)(O,{sx:t,children:Object(n.jsx)(o.i,Object(r.a)({maxWidth:100,unit:"imperial"},a))})}},1367:function(e,t,a){"use strict";var r=a(7),o=a(6),i=a(2),n=a(1),c=(a(10),a(12)),l=a(167),s=a(65),d=a(16),p=a(253),u=a(13),b=a(8),m=a(141),h=a(168);function g(e){return Object(m.a)("MuiSwitch",e)}var y=Object(h.a)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),f=a(0),x=["className","color","edge","size","sx"],j=Object(b.a)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return[t.root,a.edge&&t["edge".concat(Object(d.a)(a.edge))],t["size".concat(Object(d.a)(a.size))]]}})((function(e){var t,a=e.styleProps;return Object(i.a)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===a.edge&&{marginLeft:-8},"end"===a.edge&&{marginRight:-8},"small"===a.size&&(t={width:40,height:24,padding:7},Object(r.a)(t,"& .".concat(y.thumb),{width:16,height:16}),Object(r.a)(t,"& .".concat(y.switchBase),Object(r.a)({padding:4},"&.".concat(y.checked),{transform:"translateX(16px)"})),t))})),O=Object(b.a)(p.a,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var a=e.styleProps;return[t.switchBase,t.input,"default"!==a.color&&t["color".concat(Object(d.a)(a.color))]]}})((function(e){var t,a=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:"light"===a.palette.mode?a.palette.common.white:a.palette.grey[300],transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest})},Object(r.a)(t,"&.".concat(y.checked),{transform:"translateX(20px)"}),Object(r.a)(t,"&.".concat(y.disabled),{color:"light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600]}),Object(r.a)(t,"&.".concat(y.checked," + .").concat(y.track),{opacity:.5}),Object(r.a)(t,"&.".concat(y.disabled," + .").concat(y.track),{opacity:"light"===a.palette.mode?.12:.2}),Object(r.a)(t,"& .".concat(y.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,a=e.theme,o=e.styleProps;return Object(i.a)({"&:hover":{backgroundColor:Object(s.a)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},Object(r.a)(t,"&.".concat(y.checked),Object(r.a)({color:a.palette[o.color].main,"&:hover":{backgroundColor:Object(s.a)(a.palette[o.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(y.disabled),{color:"light"===a.palette.mode?Object(s.i)(a.palette[o.color].main,.62):Object(s.b)(a.palette[o.color].main,.55)})),Object(r.a)(t,"&.".concat(y.checked," + .").concat(y.track),{backgroundColor:a.palette[o.color].main}),t))})),v=Object(b.a)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.mode?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.mode?.38:.3}})),w=Object(b.a)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){return{boxShadow:e.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),k=n.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiSwitch"}),r=a.className,n=a.color,s=void 0===n?"primary":n,p=a.edge,b=void 0!==p&&p,m=a.size,h=void 0===m?"medium":m,y=a.sx,k=Object(o.a)(a,x),S=Object(i.a)({},a,{color:s,edge:b,size:h}),_=function(e){var t=e.classes,a=e.edge,r=e.size,o=e.color,n=e.checked,c=e.disabled,s={root:["root",a&&"edge".concat(Object(d.a)(a)),"size".concat(Object(d.a)(r))],switchBase:["switchBase","color".concat(Object(d.a)(o)),n&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},p=Object(l.a)(s,g,t);return Object(i.a)({},t,p)}(S),z=Object(f.jsx)(w,{className:_.thumb,styleProps:S});return Object(f.jsxs)(j,{className:Object(c.default)(_.root,r),sx:y,styleProps:S,children:[Object(f.jsx)(O,Object(i.a)({type:"checkbox",icon:z,checkedIcon:z,ref:t,styleProps:S},k,{classes:Object(i.a)({},_,{root:_.switchBase})})),Object(f.jsx)(v,{className:_.track,styleProps:S})]})}));t.a=k},1503:function(e){e.exports=JSON.parse('{"version":8,"name":"Basic","metadata":{"mapbox:autocomposite":true},"sources":{"mapbox":{"url":"mapbox://mapbox.mapbox-streets-v7","type":"vector"}},"sprite":"mapbox://sprites/mapbox/basic-v8","glyphs":"mapbox://fonts/mapbox/{fontstack}/{range}.pbf","layers":[{"id":"background","type":"background","paint":{"background-color":"#dedede"},"interactive":true},{"id":"landuse_overlay_national_park","type":"fill","source":"mapbox","source-layer":"landuse_overlay","filter":["==","class","national_park"],"paint":{"fill-color":"#d2edae","fill-opacity":0.75},"interactive":true},{"id":"landuse_park","type":"fill","source":"mapbox","source-layer":"landuse","filter":["==","class","park"],"paint":{"fill-color":"#d2edae"},"interactive":true},{"id":"waterway","type":"line","source":"mapbox","source-layer":"waterway","filter":["all",["==","$type","LineString"],["in","class","river","canal"]],"paint":{"line-color":"#a0cfdf","line-width":{"base":1.4,"stops":[[8,0.5],[20,15]]}},"interactive":true},{"id":"water","type":"fill","source":"mapbox","source-layer":"water","paint":{"fill-color":"#a0cfdf"},"interactive":true},{"id":"building","type":"fill","source":"mapbox","source-layer":"building","paint":{"fill-color":"#d6d6d6"},"interactive":true},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]},"line-dasharray":[0.36,0.18]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]},"line-dasharray":[0.28,0.14]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["<=","admin_level",2],["==","maritime",0]]],"type":"line","source":"mapbox","id":"admin_country","paint":{"line-color":"#8b8a8a","line-width":{"base":1.3,"stops":[[3,0.5],[22,15]]}},"source-layer":"admin"},{"interactive":true,"minzoom":5,"layout":{"icon-image":"{maki}-11","text-offset":[0,0.5],"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":8,"text-anchor":"top","text-size":11,"icon-size":1},"filter":["all",["==","$type","Point"],["all",["==","scalerank",1],["==","localrank",1]]],"type":"symbol","source":"mapbox","id":"poi_label","paint":{"text-color":"#666","text-halo-width":1,"text-halo-color":"rgba(255,255,255,0.75)","text-halo-blur":1},"source-layer":"poi_label"},{"interactive":true,"layout":{"symbol-placement":"line","text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-transform":"uppercase","text-letter-spacing":0.1,"text-size":{"base":1.4,"stops":[[10,8],[20,14]]}},"filter":["all",["==","$type","LineString"],["in","class","motorway","primary","secondary","tertiary","trunk"]],"type":"symbol","source":"mapbox","id":"road_major_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":2},"source-layer":"road_label"},{"interactive":true,"minzoom":8,"layout":{"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":6,"text-size":{"stops":[[6,12],[12,16]]}},"filter":["all",["==","$type","Point"],["in","type","town","village","hamlet","suburb","neighbourhood","island"]],"type":"symbol","source":"mapbox","id":"place_label_other","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Bold","Arial Unicode MS Bold"],"text-max-width":10,"text-size":{"stops":[[3,12],[8,16]]}},"maxzoom":16,"filter":["all",["==","$type","Point"],["==","type","city"]],"type":"symbol","source":"mapbox","id":"place_label_city","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Regular","Arial Unicode MS Regular"],"text-max-width":10,"text-size":{"stops":[[3,14],[8,22]]}},"maxzoom":12,"filter":["==","$type","Point"],"type":"symbol","source":"mapbox","id":"country_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"country_label"}]}')},1762:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var r=a(3),o=a(17),i=a(1323),n=a(1),c=a(1333),l=a(7),s=a(1671),d=a(8),p=a(65),u=a(52),b=a(414),m=a(206),h=a(1367),g=a(1503),y=a(0),f=Object(s.fromJS)(g),x=["labels","roads","buildings","parks","water","background"],j={background:/background/,water:/water/,parks:/park/,buildings:/building/,roads:/bridge|road|tunnel/,labels:/label|place|poi/},O={line:"line-color",fill:"fill-color",background:"background-color",symbol:"text-color"},v=Object(d.a)("div")((function(e){var t=e.theme;return{zIndex:99,minWidth:200,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:t.shape.borderRadius,backgroundColor:Object(p.a)(t.palette.grey[900],.72)}})),w=Object(d.a)("div")((function(e){var t=e.theme;return{width:20,height:20,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",marginRight:t.spacing(1),border:"solid 1px ".concat(t.palette.grey[500]),"& input":{width:12,height:12,border:"none",outline:"none",cursor:"pointer",WebkitAppearance:"none",backgroundColor:"transparent","&::-webkit-color-swatch-wrapper":{padding:0},"&::-moz-color-swatch":{border:"none",borderRadius:"50%"},"&::-webkit-color-swatch":{border:"none",borderRadius:"50%"}}}}));function k(e){var t=e.onChange,a=Object(u.a)(),i=Object(n.useState)({water:!0,parks:!0,roads:!0,labels:!0,buildings:!0,background:!0}),c=Object(o.a)(i,2),s=c[0],d=c[1],p=Object(n.useState)({water:a.palette.grey[900],labels:a.palette.grey[800],parks:a.palette.primary.dark,buildings:a.palette.grey[900],background:a.palette.grey[700],roads:a.palette.warning.darker}),g=Object(o.a)(p,2),k=g[0],S=g[1];Object(n.useEffect)((function(){_({color:k,visibility:s})}),[k,s]);var _=function(e){var a=e.color,r=e.visibility,o=f.get("layers").filter((function(e){var t=e.get("id");return x.every((function(e){return r[e]||!j[e].test(t)}))})).map((function(e){var t=e.get("id"),r=e.get("type"),o=x.find((function(e){return j[e].test(t)}));return o&&O[r]?e.setIn(["paint",O[r]],a[o]):e}));t(f.set("layers",o))};return Object(y.jsx)(v,{children:x.map((function(e){return Object(y.jsxs)(b.a,{sx:{py:1,display:"flex",alignItems:"center"},children:[Object(y.jsx)(w,{sx:Object(r.a)({},!s[e]&&{opacity:.48}),children:Object(y.jsx)("input",{type:"color",value:k[e],disabled:!s[e],onChange:function(t){return function(e,t){var a=Object(r.a)(Object(r.a)({},k),{},Object(l.a)({},t,e.target.value));S(a),_({color:a,visibility:s})}(t,e)}})}),Object(y.jsx)(m.a,{variant:"body2",sx:{flexGrow:1,textTransform:"capitalize",color:s[e]?"common.white":"text.disabled"},children:e}),Object(y.jsx)(h.a,{size:"small",checked:s[e],onChange:function(t){return function(e,t){var a=Object(r.a)(Object(r.a)({},s),{},Object(l.a)({},t,e.target.checked));d(a),_({color:k,visibility:a})}(t,e)}})]},e)}))})}function S(e){var t=Object.assign({},e),a=Object(n.useState)(""),l=Object(o.a)(a,2),s=l[0],d=l[1],p=Object(n.useState)({latitude:37.805,longitude:-122.447,zoom:15.5,bearing:0,pitch:0}),u=Object(o.a)(p,2),b=u[0],m=u[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(i.l,Object(r.a)(Object(r.a)(Object(r.a)({},b),{},{mapStyle:s,onViewportChange:m},t),{},{children:[Object(y.jsx)(c.f,{}),Object(y.jsx)(c.d,{}),Object(y.jsx)(c.a,{}),Object(y.jsx)(c.b,{})]})),Object(y.jsx)(k,{onChange:d})]})}}}]);
//# sourceMappingURL=103.b1692269.chunk.js.map