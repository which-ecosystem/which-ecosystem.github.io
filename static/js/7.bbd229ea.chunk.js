(this.webpackJsonpwhich=this.webpackJsonpwhich||[]).push([[7],{223:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(55),l=a(102),o=a(224),c=a.n(o),s=a(225),u=a.n(s),m=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},img:{margin:e.spacing(2),width:e.spacing(24)}}})),d={default:{icon:c.a,tagline:"No content"},construction:{icon:u.a,tagline:"Coming soon"}};t.a=function(e){var t=e.variant,a=void 0===t?"default":t,n=e.message,l=m(),o=d[a],c=o.icon,s=o.tagline;return i.a.createElement("div",{className:l.root},i.a.createElement("img",{src:c,className:l.img,alt:"No content"}),i.a.createElement(r.a,{variant:"h5"},s),i.a.createElement(r.a,{color:"textSecondary"},i.a.createElement("p",null,n)))}},224:function(e,t,a){e.exports=a.p+"static/media/noContent.527b7724.svg"},225:function(e,t,a){e.exports=a.p+"static/media/construction.07ebb9e5.svg"},252:function(e,t,a){"use strict";var n=a(57),i=a(0),r=a.n(i),l=a(10),o=a(175),c=a(176),s=a(387),u=a(102),m=a(282),d=a.n(m),h=Object(u.a)((function(e){var t;return{root:(t={zIndex:1e3,position:"fixed"},Object(n.a)(t,e.breakpoints.down("sm"),{right:e.spacing(2),bottom:e.spacing(8)}),Object(n.a)(t,e.breakpoints.up("md"),{right:e.spacing(5),bottom:e.spacing(5)}),t)}}));t.a=function(e){var t=e.hideOnScroll,a=void 0!==t&&t,n=h(),i=Object(l.f)(),u=Object(o.a)();return r.a.createElement(c.a,{appear:!1,direction:"up",in:!a||!u},r.a.createElement(s.a,{onClick:function(){i.push("/new")},className:n.root,color:"secondary"},r.a.createElement(d.a,null)))}},253:function(e,t,a){"use strict";var n=a(288),i=a(0),r=a.n(i),l=a(287),o=a(279),c=a(102),s=a(281),u=a(361),m=a(362),d=a(71),h=a(280),v=a.n(h),g=Object(c.a)({root:{position:"absolute",color:"white",top:"86%",fontSize:20,textShadow:"0 0 3px black",display:"flex",alignItems:"center"},left:{left:30},right:{right:30}}),p=function(e){var t=e.value,a=e.which,n=e.like,i=g();return r.a.createElement("div",{className:"".concat(i.root," ").concat(i[a])},n&&r.a.createElement(v.a,null),"".concat(t,"%"))},f=a(69),b=a(31),E=a(32),w={month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"},k=Object(c.a)((function(e){return{images:{height:e.spacing(50)},imagesBlock:{display:"flex"},rateLine:{position:"relative",width:"100%",height:e.spacing(2),backgroundColor:e.palette.primary.light,transitionDuration:"0.5s"},highlight:{backgroundColor:"".concat(e.palette.primary.main," !important")},fillRateLine:{height:e.spacing(2),backgroundColor:e.palette.primary.light,transitionDuration:"0.5s"}}})),O=function(e){var t,a,n=e.poll,i=e.setPoll,l=k(),c=n.author,h=n.contents,v=h.left,g=h.right,O=n.vote,j=Object(d.b)().enqueueSnackbar,y=Object(E.b)().isAuthenticated,x=new Date(n.createdAt).toLocaleString("default",w),N=function(e){if(y)if(O)j("You have already voted in this poll",{variant:"error"});else{var t={which:e,pollId:n._id},a=Object(o.a)({},n);a.contents[e].votes+=1,a.vote=Object(o.a)({_id:"",authorId:"",createdAt:new Date},t),i(a),Object(b.c)("votes/",t)}else j("Unauthorized users can not vote in polls",{variant:"error"})};v.votes||g.votes?a=100-(t=Math.round(v.votes/(v.votes+g.votes)*100)):(t=0,a=0);var C=v.votes>=g.votes?"left":"right";return r.a.createElement(s.a,null,r.a.createElement(f.a,{user:c,info:x}),r.a.createElement("div",{className:l.imagesBlock},r.a.createElement(u.a,{onDoubleClick:function(){return N("left")}},r.a.createElement(m.a,{className:l.images,image:v.url}),r.a.createElement(p,{value:t,which:"left",like:"left"===(null===O||void 0===O?void 0:O.which)})),r.a.createElement(u.a,{onDoubleClick:function(){return N("right")}},r.a.createElement(m.a,{className:l.images,image:g.url}),r.a.createElement(p,{value:a,which:"right",like:"right"===(null===O||void 0===O?void 0:O.which)}))),r.a.createElement("div",{className:"".concat(l.rateLine," ").concat("right"===C?l.highlight:"")},r.a.createElement("div",{className:"".concat(l.fillRateLine," ").concat("left"===C?l.highlight:""),style:{width:"".concat(t,"%")}})))};t.a=function(e){var t=e.polls,a=e.mutate,i=function(e){var i=e.index,l=e.style,o=e.key,c=t[i];return r.a.createElement("div",{key:"".concat(o,"-").concat(c._id,"-").concat(t.length),style:l},r.a.createElement(O,{poll:c,setPoll:function(e){var r=Object(n.a)(t);r[i]=e,a([],!1),a(r,!1)}}))};return r.a.createElement(l.c,null,(function(e){var a=e.height,n=e.isScrolling,o=e.registerChild,c=e.onChildScroll,s=e.scrollTop;return r.a.createElement(l.a,{disableHeight:!0},(function(e){var u=e.width;return r.a.createElement("div",{ref:o},r.a.createElement(l.b,{autoHeight:!0,height:a,isScrolling:n,onScroll:c,rowCount:t.length,rowHeight:550,rowRenderer:i,scrollTop:s,width:u,containerStyle:{pointerEvents:"auto"},overscanRowCount:1}))}))}))}},254:function(e,t,a){"use strict";var n=a(19),i=a(0),r=a.n(i),l=a(384),o=a(232),c=a.n(o),s=a(292),u=a(293),m=a(294),d=a(295),h=a(397),v=a(296),g=function(e){var t=e.setIsOpen,a=e.isOpen,o=e.callback,c=Object(i.useState)(""),g=Object(n.a)(c,2),p=g[0],f=g[1],b=function(){t(!1)};return r.a.createElement("div",null,r.a.createElement(s.a,{open:a,onClose:b},r.a.createElement(u.a,null,"Upload via link"),r.a.createElement(m.a,null,r.a.createElement(d.a,null,"Provide a valid URL to your image:"),r.a.createElement(h.a,{autoFocus:!0,margin:"dense",id:"name",label:"Image URL",type:"text",fullWidth:!0,autoComplete:"off",onChange:function(e){f(e.target.value)}})),r.a.createElement(v.a,null,r.a.createElement(l.a,{onClick:b,color:"primary"},"Cancel"),r.a.createElement(l.a,{onClick:function(){var e=p;if(p.startsWith("https://www.instagram.com/")){var t=p.match("/p/(.*)/"),a=t&&t[1];e="https://www.instagram.com/p/".concat(a,"/media/?size=l")}else if(p.startsWith("https://drive.google.com/")){var n=p.match("/d/(.*)/"),i=n&&n[1];e="https://drive.google.com/uc?export=view&id=".concat(i)}o(e||""),b()},color:"primary",disabled:!p.length},"Submit"))))};t.a=function(e){var t=e.callback,a=e.children,o=Object(i.useState)(!1),s=Object(n.a)(o,2),u=s[0],m=s[1],d=function(){m(!0)},h=r.a.createElement(l.a,{onClick:d,variant:"outlined",color:"primary",startIcon:r.a.createElement(c.a,null)},"Attach a link"),v=a&&r.a.Children.toArray(a)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{callback:t,isOpen:u,setIsOpen:m}),r.a.isValidElement(v)?r.a.cloneElement(v,{onClick:d}):h)}},400:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),l=a(363),o=a(386),c=a(55),s=a(102),u=a(297),m=a.n(u),d=a(90),h=a.n(d),v=a(385),g=Object(s.a)({root:{position:"relative"},menuButton:{width:200,height:50,textAlign:"center"},menuNumber:{fontWeight:800,color:"black"},menuText:{color:"darkgray"}}),p=function(e){var t=e.text,a=e.value,n=g();return i.a.createElement("div",{className:n.menuButton},i.a.createElement("div",{className:n.menuNumber},a),i.a.createElement("div",{className:n.menuText},t))},f=a(254),b=a(34),E=a(31),w=a(32),k=Object(s.a)((function(e){return{root:{position:"relative",marginBottom:e.spacing(4)},avatar:{width:150,height:150,margin:"0 auto"},name:{margin:e.spacing(1,0),display:"flex",alignItems:"center",justifyContent:"center"},verified:{marginLeft:e.spacing(.5),width:e.spacing(3),height:e.spacing(3)},profileMenu:{display:"flex",width:"100%",height:50,marginTop:e.spacing(6),borderBottom:"1px solid lightgray"},menuButton:{width:200,height:50,textAlign:"center"},badge:{width:e.spacing(5),height:e.spacing(5),borderRadius:"50%",cursor:"pointer",background:"#d3d3d3",display:"flex",alignItems:"center","& svg":{margin:"0 auto"}},avatarContainer:{position:"relative",textAlign:"center"},menuNumber:{fontWeight:800,color:"black"},menuText:{color:"darkgray"},skeleton:{margin:"10px auto",borderRadius:2}}})),O=function(e){var t=e.savedPolls,a=e.totalVotes,n=e.setUserInfo,r=e.userInfo,l=k(),s=Object(w.b)().user,u=new Date((null===r||void 0===r?void 0:r.createdAt)||"").toLocaleDateString();return i.a.createElement("div",{className:l.root},r?(null===r||void 0===r?void 0:r._id)===(null===s||void 0===s?void 0:s._id)?i.a.createElement(f.a,{callback:function(e){var t=null===s||void 0===s?void 0:s._id;Object(E.b)("/users/".concat(t),{avatarUrl:e}).then((function(e){n(e.data)}))}},i.a.createElement("div",{className:l.avatarContainer},i.a.createElement(o.a,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:i.a.createElement("div",{className:l.badge},i.a.createElement(m.a,null))},i.a.createElement(b.a,{className:l.avatar,user:r})))):i.a.createElement(b.a,{className:l.avatar,user:r}):i.a.createElement(v.a,{animation:"wave",variant:"circle",width:150,height:150,className:l.avatar}),r?i.a.createElement(c.a,{variant:"h5",className:l.name},null===r||void 0===r?void 0:r.username,(null===r||void 0===r?void 0:r.verified)&&i.a.createElement(h.a,{className:l.verified,color:"primary"})):i.a.createElement(v.a,{animation:"wave",variant:"rect",width:100,height:20,className:l.skeleton}),i.a.createElement("div",{className:l.profileMenu},r?i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{text:"Polls",value:t}),i.a.createElement(p,{text:"Since",value:u}),i.a.createElement(p,{text:"Total votes",value:a})):i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,{animation:"wave",variant:"rect",width:170,height:20,className:l.skeleton}),i.a.createElement(v.a,{animation:"wave",variant:"rect",width:170,height:20,className:l.skeleton}),i.a.createElement(v.a,{animation:"wave",variant:"rect",width:170,height:20,className:l.skeleton}))))},j=a(253),y=a(76),x=a(252),N=a(223),C=a(68);t.default=function(){var e=Object(r.f)(),t=Object(r.g)().username,a=Object(w.b)().user,o=Object(C.d)(t),c=o.data,s=o.mutate,u=Object(C.c)(t),m=u.data,d=u.mutate,h=u.isValidating;Object(n.useEffect)((function(){t||(a?e.push("/profile/".concat(a.username)):e.push("/login"))}),[t,e,a]);var v=Object(n.useMemo)((function(){return(null===a||void 0===a?void 0:a.username)===t}),[a,t]),g=Object(n.useMemo)((function(){return(null===m||void 0===m?void 0:m.reduce((function(e,t){var a=t.contents,n=a.left,i=a.right;return e+n.votes+i.votes}),0))||0}),[m]);return i.a.createElement(l.a,{maxWidth:"sm",disableGutters:!0},i.a.createElement(O,{userInfo:c,setUserInfo:s,savedPolls:(null===m||void 0===m?void 0:m.length)||0,totalVotes:g}),m?m.length?i.a.createElement(j.a,{polls:m,mutate:d}):i.a.createElement(N.a,{message:v?"Create a poll and it will show up here.":""}):h&&i.a.createElement(y.a,null),v&&i.a.createElement(x.a,null))}}}]);
//# sourceMappingURL=7.bbd229ea.chunk.js.map