(this.webpackJsonpwhich=this.webpackJsonpwhich||[]).push([[9],{229:function(e,t,a){"use strict";var n=a(228),l=a(0),r=a.n(l),i=a(261),o=a(53),c=a(100),s=a(334),u=a(370),m=a(371),d=a(66),h=a(256),v=a.n(h),g=Object(c.a)({root:{position:"absolute",color:"white",top:"86%",fontSize:20,textShadow:"0 0 3px black",display:"flex",alignItems:"center"},left:{left:30},right:{right:30}}),p=function(e){var t=e.value,a=e.which,n=e.like,l=g();return r.a.createElement("div",{className:"".concat(l.root," ").concat(l[a])},n&&r.a.createElement(v.a,null),"".concat(t,"%"))},f=a(64),E=a(24),b=a(41),w={month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"},k=Object(c.a)((function(e){return{images:{height:e.spacing(50)},imagesBlock:{display:"flex"},rateLine:{position:"relative",width:"100%",height:e.spacing(2),backgroundColor:e.palette.primary.light,transitionDuration:"0.5s"},highlight:{backgroundColor:"".concat(e.palette.primary.main," !important")},fillRateLine:{height:e.spacing(2),backgroundColor:e.palette.primary.light,transitionDuration:"0.5s"}}})),O=function(e){var t,a,n=e.poll,l=e.setPoll,i=k(),c=n.author,h=n.contents,v=h.left,g=h.right,O=n.vote,y=Object(d.b)().enqueueSnackbar,j=Object(b.b)().isAuthenticated,x=new Date(n.createdAt).toLocaleString("default",w),N=function(e){if(j)if(O)y("You have already voted in this poll",{variant:"error"});else{var t={which:e,pollId:n._id},a=Object(o.a)({},n);a.contents[e].votes+=1,a.vote=Object(o.a)({_id:"",authorId:"",createdAt:new Date},t),l(a),Object(E.c)("votes/",t)}else y("Unauthorized users can not vote in polls",{variant:"error"})};v.votes||g.votes?a=100-(t=Math.round(v.votes/(v.votes+g.votes)*100)):(t=0,a=0);var C=v.votes>=g.votes?"left":"right";return r.a.createElement(s.a,null,r.a.createElement(f.a,{user:c,info:x}),r.a.createElement("div",{className:i.imagesBlock},r.a.createElement(u.a,{onDoubleClick:function(){return N("left")}},r.a.createElement(m.a,{className:i.images,image:v.url}),r.a.createElement(p,{value:t,which:"left",like:"left"===(null===O||void 0===O?void 0:O.which)})),r.a.createElement(u.a,{onDoubleClick:function(){return N("right")}},r.a.createElement(m.a,{className:i.images,image:g.url}),r.a.createElement(p,{value:a,which:"right",like:"right"===(null===O||void 0===O?void 0:O.which)}))),r.a.createElement("div",{className:"".concat(i.rateLine," ").concat("right"===C?i.highlight:"")},r.a.createElement("div",{className:"".concat(i.fillRateLine," ").concat("left"===C?i.highlight:""),style:{width:"".concat(t,"%")}})))};t.a=function(e){var t=e.polls,a=e.mutate,l=function(e){var l=e.index,i=e.style,o=e.key,c=t[l];return r.a.createElement("div",{key:"".concat(o,"-").concat(c._id,"-").concat(t.length),style:i},r.a.createElement(O,{poll:c,setPoll:function(e){var r=Object(n.a)(t);r[l]=e,a([],!1),a(r,!1)}}))};return r.a.createElement(i.c,null,(function(e){var a=e.height,n=e.isScrolling,o=e.registerChild,c=e.onChildScroll,s=e.scrollTop;return r.a.createElement(i.a,{disableHeight:!0},(function(e){var u=e.width;return r.a.createElement("div",{ref:o},r.a.createElement(i.b,{autoHeight:!0,height:a,isScrolling:n,onScroll:c,rowCount:t.length,rowHeight:550,rowRenderer:l,scrollTop:s,width:u,containerStyle:{pointerEvents:"auto"},overscanRowCount:1}))}))}))}},380:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),i=a(372),o=a(16),c=a(369),s=a(142),u=a(50),m=a(100),d=a(270),h=a.n(d),v=a(85),g=a.n(v),p=a(368),f=a(169),E=a(344),b=a(363),w=a(268),k=a.n(w),O=a(41),y=Object(m.a)({moreMenu:{position:"absolute",right:10,zIndex:100}}),j=function(){var e=y(),t=l.a.useState(null),a=Object(o.a)(t,2),n=a[0],i=a[1],c=Object(O.b)().logout,s=Object(r.f)(),u=Boolean(n);return l.a.createElement("div",{className:e.moreMenu},l.a.createElement("div",null,l.a.createElement(f.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},l.a.createElement(k.a,null)),l.a.createElement(E.a,{id:"long-menu",anchorEl:n,keepMounted:!0,open:u,onClose:function(){i(null)},PaperProps:{style:{maxHeight:216,width:"20ch"}}},l.a.createElement(b.a,{onClick:function(){c(),s.push("/login")}},"Log out"))))},x=Object(m.a)({root:{position:"relative"},menuButton:{width:200,height:50,textAlign:"center"},menuNumber:{fontWeight:800,color:"black"},menuText:{color:"darkgray"}}),N=function(e){var t=e.text,a=e.value,n=x();return l.a.createElement("div",{className:n.menuButton},l.a.createElement("div",{className:n.menuNumber},a),l.a.createElement("div",{className:n.menuText},t))},C=a(384),S=a(364),I=a(365),L=a(366),U=a(378),D=a(367),P=a(269),R=function(e){var t=e.setIsOpen,a=e.isOpen,r=e.callback,i=Object(n.useState)(""),c=Object(o.a)(i,2),s=c[0],u=c[1],m=function(){t(!1)};return l.a.createElement("div",null,l.a.createElement(C.a,{open:a,onClose:m},l.a.createElement(S.a,null,"Upload an Image"),l.a.createElement(I.a,null,l.a.createElement(L.a,null,"Unfortunetly we do not support uploading images yet. Please provide a valid URL to your image:"),l.a.createElement(U.a,{autoFocus:!0,margin:"dense",id:"name",label:"Image URL",type:"text",fullWidth:!0,autoComplete:"off",onChange:function(e){u(e.target.value)}})),l.a.createElement(D.a,null,l.a.createElement(P.a,{onClick:m,color:"primary"},"Cancel"),l.a.createElement(P.a,{onClick:function(){var e=s;if(s.startsWith("https://www.instagram.com/")){var t=s.match("/p/(.*)/"),a=t&&t[1];e="https://www.instagram.com/p/".concat(a,"/media/?size=l")}else if(s.startsWith("https://drive.google.com/")){var n=s.match("/d/(.*)/"),l=n&&n[1];e="https://drive.google.com/uc?export=view&id=".concat(l)}r(e||""),m()},color:"primary",disabled:!s.length},"Submit"))))},A=a(24),B=Object(m.a)((function(e){return{root:{position:"relative"},avatar:{width:150,height:150,margin:"0 auto"},name:{margin:e.spacing(1,0),display:"flex",alignItems:"center",justifyContent:"center"},verified:{marginLeft:e.spacing(.5),width:e.spacing(3),height:e.spacing(3)},profileMenu:{display:"flex",width:"100%",height:50,margin:"50px 0",borderBottom:"1px solid lightgray"},menuButton:{width:200,height:50,textAlign:"center"},badge:{width:e.spacing(5),height:e.spacing(5),borderRadius:"50%",cursor:"pointer",background:"#d3d3d3",display:"flex",alignItems:"center","& svg":{margin:"0 auto"}},avatarContainer:{position:"relative",textAlign:"center"},menuNumber:{fontWeight:800,color:"black"},menuText:{color:"darkgray"},skeleton:{margin:"10px auto",borderRadius:2}}})),M=function(e){var t=e.savedPolls,a=e.totalVotes,r=e.setUserInfo,i=e.userInfo,m=B(),d=Object(n.useState)(!1),v=Object(o.a)(d,2),f=v[0],E=v[1],b=Object(O.b)().user,w=new Date((null===i||void 0===i?void 0:i.createdAt)||"").toLocaleDateString();return l.a.createElement("div",{className:m.root},i?(null===i||void 0===i?void 0:i._id)===(null===b||void 0===b?void 0:b._id)?l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement("div",{className:m.avatarContainer},l.a.createElement(c.a,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:l.a.createElement("div",{className:m.badge},l.a.createElement(h.a,{onClick:function(){E(!f)}}))},l.a.createElement(s.a,{className:m.avatar,src:null===i||void 0===i?void 0:i.avatarUrl}))),l.a.createElement(R,{isOpen:f,setIsOpen:E,callback:function(e){var t=null===b||void 0===b?void 0:b._id;Object(A.b)("/users/".concat(t),{avatarUrl:e}).then((function(e){r(e.data)}))}})):l.a.createElement(s.a,{className:m.avatar,src:null===i||void 0===i?void 0:i.avatarUrl}):l.a.createElement(p.a,{animation:"wave",variant:"circle",width:150,height:150,className:m.avatar}),i?l.a.createElement(u.a,{variant:"h5",className:m.name},null===i||void 0===i?void 0:i.username,(null===i||void 0===i?void 0:i.verified)&&l.a.createElement(g.a,{className:m.verified,color:"primary"})):l.a.createElement(p.a,{animation:"wave",variant:"rect",width:100,height:20,className:m.skeleton}),l.a.createElement("div",{className:m.profileMenu},i?l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{text:"Polls",value:t}),l.a.createElement(N,{text:"Since",value:w}),l.a.createElement(N,{text:"Total votes",value:a})):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{animation:"wave",variant:"rect",width:170,height:20,className:m.skeleton}),l.a.createElement(p.a,{animation:"wave",variant:"rect",width:170,height:20,className:m.skeleton}),l.a.createElement(p.a,{animation:"wave",variant:"rect",width:170,height:20,className:m.skeleton}))))},T=a(229),W=a(88),_=a(67);t.default=function(){var e=Object(r.f)(),t=Object(r.g)().username,a=Object(O.b)().user,o=Object(_.d)(t),c=o.data,s=o.mutate,u=Object(_.c)(t),m=u.data,d=u.mutate,h=u.isValidating;Object(n.useEffect)((function(){t||(a?e.push("/profile/".concat(a.username)):e.push("/login"))}),[t,e,a]);var v=Object(n.useMemo)((function(){return m.reduce((function(e,t){var a=t.contents,n=a.left,l=a.right;return e+n.votes+l.votes}),0)}),[m]);return l.a.createElement(i.a,{maxWidth:"sm",disableGutters:!0},l.a.createElement(M,{userInfo:c,setUserInfo:s,savedPolls:m.length,totalVotes:v}),h&&!m?l.a.createElement(W.a,null):l.a.createElement(T.a,{polls:m,mutate:d}))}}}]);
//# sourceMappingURL=9.72d6cfc7.chunk.js.map