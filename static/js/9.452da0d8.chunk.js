(this.webpackJsonpwhich=this.webpackJsonpwhich||[]).push([[9],{237:function(e,t,a){"use strict";var n=a(236),l=a(0),r=a.n(l),i=a(269),o=a(56),c=a(101),s=a(342),u=a(378),m=a(379),h=a(69),d=a(264),g=a.n(d),v=Object(c.a)({root:{position:"absolute",color:"white",top:"86%",fontSize:20,textShadow:"0 0 3px black",display:"flex",alignItems:"center"},left:{left:30},right:{right:30}}),p=function(e){var t=e.value,a=e.which,n=e.like,l=v();return r.a.createElement("div",{className:"".concat(l.root," ").concat(l[a])},n&&r.a.createElement(g.a,null),"".concat(t,"%"))},f=a(68),E=a(26),b=a(42),w={month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"},k=Object(c.a)((function(e){return{images:{height:e.spacing(50)},imagesBlock:{display:"flex"},rateLine:{position:"relative",width:"100%",height:e.spacing(2),backgroundColor:e.palette.primary.light,transitionDuration:"0.5s"},highlight:{backgroundColor:"".concat(e.palette.primary.main," !important")},fillRateLine:{height:e.spacing(2),backgroundColor:e.palette.primary.light,transitionDuration:"0.5s"}}})),O=function(e){var t,a,n=e.poll,l=e.setPoll,i=k(),c=n.author,d=n.contents,g=d.left,v=d.right,O=n.vote,y=Object(h.b)().enqueueSnackbar,j=Object(b.b)().isAuthenticated,x=new Date(n.createdAt).toLocaleString("default",w),N=function(e){if(j)if(O)y("You have already voted in this poll",{variant:"error"});else{var t={which:e,pollId:n._id},a=Object(o.a)({},n);a.contents[e].votes+=1,a.vote=Object(o.a)({_id:"",authorId:"",createdAt:new Date},t),l(a),Object(E.c)("votes/",t)}else y("Unauthorized users can not vote in polls",{variant:"error"})};g.votes||v.votes?a=100-(t=Math.round(g.votes/(g.votes+v.votes)*100)):(t=0,a=0);var C=g.votes>=v.votes?"left":"right";return r.a.createElement(s.a,null,r.a.createElement(f.a,{user:c,info:x}),r.a.createElement("div",{className:i.imagesBlock},r.a.createElement(u.a,{onDoubleClick:function(){return N("left")}},r.a.createElement(m.a,{className:i.images,image:g.url}),r.a.createElement(p,{value:t,which:"left",like:"left"===(null===O||void 0===O?void 0:O.which)})),r.a.createElement(u.a,{onDoubleClick:function(){return N("right")}},r.a.createElement(m.a,{className:i.images,image:v.url}),r.a.createElement(p,{value:a,which:"right",like:"right"===(null===O||void 0===O?void 0:O.which)}))),r.a.createElement("div",{className:"".concat(i.rateLine," ").concat("right"===C?i.highlight:"")},r.a.createElement("div",{className:"".concat(i.fillRateLine," ").concat("left"===C?i.highlight:""),style:{width:"".concat(t,"%")}})))};t.a=function(e){var t=e.polls,a=e.mutate,l=function(e){var l=e.index,i=e.style,o=e.key,c=t[l];return r.a.createElement("div",{key:"".concat(o,"-").concat(c._id,"-").concat(t.length),style:i},r.a.createElement(O,{poll:c,setPoll:function(e){var r=Object(n.a)(t);r[l]=e,a([],!1),a(r,!1)}}))};return r.a.createElement(i.c,null,(function(e){var a=e.height,n=e.isScrolling,o=e.registerChild,c=e.onChildScroll,s=e.scrollTop;return r.a.createElement(i.a,{disableHeight:!0},(function(e){var u=e.width;return r.a.createElement("div",{ref:o},r.a.createElement(i.b,{autoHeight:!0,height:a,isScrolling:n,onScroll:c,rowCount:t.length,rowHeight:550,rowRenderer:l,scrollTop:s,width:u,containerStyle:{pointerEvents:"auto"},overscanRowCount:1}))}))}))}},388:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),i=a(380),o=a(16),c=a(377),s=a(53),u=a(101),m=a(278),h=a.n(m),d=a(88),g=a.n(d),v=a(376),p=a(174),f=a(352),E=a(371),b=a(276),w=a.n(b),k=a(42),O=Object(u.a)({moreMenu:{position:"absolute",right:10,zIndex:100}}),y=function(){var e=O(),t=l.a.useState(null),a=Object(o.a)(t,2),n=a[0],i=a[1],c=Object(k.b)().logout,s=Object(r.f)(),u=Boolean(n);return l.a.createElement("div",{className:e.moreMenu},l.a.createElement("div",null,l.a.createElement(p.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},l.a.createElement(w.a,null)),l.a.createElement(f.a,{id:"long-menu",anchorEl:n,keepMounted:!0,open:u,onClose:function(){i(null)},PaperProps:{style:{maxHeight:216,width:"20ch"}}},l.a.createElement(E.a,{onClick:function(){c(),s.push("/login")}},"Log out"))))},j=Object(u.a)({root:{position:"relative"},menuButton:{width:200,height:50,textAlign:"center"},menuNumber:{fontWeight:800,color:"black"},menuText:{color:"darkgray"}}),x=function(e){var t=e.text,a=e.value,n=j();return l.a.createElement("div",{className:n.menuButton},l.a.createElement("div",{className:n.menuNumber},a),l.a.createElement("div",{className:n.menuText},t))},N=a(392),C=a(372),S=a(373),I=a(374),L=a(386),D=a(375),P=a(277),R=function(e){var t=e.setIsOpen,a=e.isOpen,r=e.callback,i=Object(n.useState)(""),c=Object(o.a)(i,2),s=c[0],u=c[1],m=function(){t(!1)};return l.a.createElement("div",null,l.a.createElement(N.a,{open:a,onClose:m},l.a.createElement(C.a,null,"Upload an Image"),l.a.createElement(S.a,null,l.a.createElement(I.a,null,"Unfortunetly we do not support uploading images yet. Please provide a valid URL to your image:"),l.a.createElement(L.a,{autoFocus:!0,margin:"dense",id:"name",label:"Image URL",type:"text",fullWidth:!0,autoComplete:"off",onChange:function(e){u(e.target.value)}})),l.a.createElement(D.a,null,l.a.createElement(P.a,{onClick:m,color:"primary"},"Cancel"),l.a.createElement(P.a,{onClick:function(){var e=s;if(s.startsWith("https://www.instagram.com/")){var t=s.match("/p/(.*)/"),a=t&&t[1];e="https://www.instagram.com/p/".concat(a,"/media/?size=l")}else if(s.startsWith("https://drive.google.com/")){var n=s.match("/d/(.*)/"),l=n&&n[1];e="https://drive.google.com/uc?export=view&id=".concat(l)}r(e||""),m()},color:"primary",disabled:!s.length},"Submit"))))},U=a(48),A=a(26),B=Object(u.a)((function(e){return{root:{position:"relative"},avatar:{width:150,height:150,margin:"0 auto"},name:{margin:e.spacing(1,0),display:"flex",alignItems:"center",justifyContent:"center"},verified:{marginLeft:e.spacing(.5),width:e.spacing(3),height:e.spacing(3)},profileMenu:{display:"flex",width:"100%",height:50,margin:"50px 0",borderBottom:"1px solid lightgray"},menuButton:{width:200,height:50,textAlign:"center"},badge:{width:e.spacing(5),height:e.spacing(5),borderRadius:"50%",cursor:"pointer",background:"#d3d3d3",display:"flex",alignItems:"center","& svg":{margin:"0 auto"}},avatarContainer:{position:"relative",textAlign:"center"},menuNumber:{fontWeight:800,color:"black"},menuText:{color:"darkgray"},skeleton:{margin:"10px auto",borderRadius:2}}})),M=function(e){var t=e.savedPolls,a=e.totalVotes,r=e.setUserInfo,i=e.userInfo,u=B(),m=Object(n.useState)(!1),d=Object(o.a)(m,2),p=d[0],f=d[1],E=Object(k.b)().user,b=new Date((null===i||void 0===i?void 0:i.createdAt)||"").toLocaleDateString();return l.a.createElement("div",{className:u.root},i?(null===i||void 0===i?void 0:i._id)===(null===E||void 0===E?void 0:E._id)?l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{className:u.avatarContainer},l.a.createElement(c.a,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},onClick:function(){f(!p)},badgeContent:l.a.createElement("div",{className:u.badge},l.a.createElement(h.a,null))},l.a.createElement(U.a,{className:u.avatar,user:i}))),l.a.createElement(R,{isOpen:p,setIsOpen:f,callback:function(e){var t=null===E||void 0===E?void 0:E._id;Object(A.b)("/users/".concat(t),{avatarUrl:e}).then((function(e){r(e.data)}))}})):l.a.createElement(U.a,{className:u.avatar,user:i}):l.a.createElement(v.a,{animation:"wave",variant:"circle",width:150,height:150,className:u.avatar}),i?l.a.createElement(s.a,{variant:"h5",className:u.name},null===i||void 0===i?void 0:i.username,(null===i||void 0===i?void 0:i.verified)&&l.a.createElement(g.a,{className:u.verified,color:"primary"})):l.a.createElement(v.a,{animation:"wave",variant:"rect",width:100,height:20,className:u.skeleton}),l.a.createElement("div",{className:u.profileMenu},i?l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{text:"Polls",value:t}),l.a.createElement(x,{text:"Since",value:b}),l.a.createElement(x,{text:"Total votes",value:a})):l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{animation:"wave",variant:"rect",width:170,height:20,className:u.skeleton}),l.a.createElement(v.a,{animation:"wave",variant:"rect",width:170,height:20,className:u.skeleton}),l.a.createElement(v.a,{animation:"wave",variant:"rect",width:170,height:20,className:u.skeleton}))))},T=a(237),W=a(91),_=a(70);t.default=function(){var e=Object(r.f)(),t=Object(r.g)().username,a=Object(k.b)().user,o=Object(_.d)(t),c=o.data,s=o.mutate,u=Object(_.c)(t),m=u.data,h=u.mutate,d=u.isValidating;Object(n.useEffect)((function(){t||(a?e.push("/profile/".concat(a.username)):e.push("/login"))}),[t,e,a]);var g=Object(n.useMemo)((function(){return m.reduce((function(e,t){var a=t.contents,n=a.left,l=a.right;return e+n.votes+l.votes}),0)}),[m]);return l.a.createElement(i.a,{maxWidth:"sm",disableGutters:!0},l.a.createElement(M,{userInfo:c,setUserInfo:s,savedPolls:m.length,totalVotes:g}),d&&!m?l.a.createElement(W.a,null):l.a.createElement(T.a,{polls:m,mutate:h}))}}}]);
//# sourceMappingURL=9.452da0d8.chunk.js.map