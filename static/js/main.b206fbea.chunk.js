(this.webpackJsonpwhich=this.webpackJsonpwhich||[]).push([[2],{110:function(e,t,a){e.exports=a(140)},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=a(104),l=a(195),u=a(196),s=a(30),m=a(65),f=a.n(m),p=(a(115),a(16)),b=a(10),d=a(188),E=a(182),g=a(57),h=a(189),O=a(190),j=a(191),v=a(192),k=a(105),w=a(23),y=a(32),C=a(178),N=a(179),x=a(180),S=a(181),I=a(183),z=a(184),P=a(102),A=a.n(P),T=a(174),R=a(143),L=a(175),B=a(176),D=a(177),M=a(199),U=a(31),q=a(69),F=Object(k.a)((function(e){return{root:{position:"relative",background:"rgba(255, 255, 255, 0.5)",borderRadius:"2px",padding:e.spacing(.5),display:"flex",alignItems:"center"},results:{position:"absolute",width:"100%",top:e.spacing(5)},listItem:{padding:0}}})),J=r.a.memo((function(e){var t=e.callback,a=Object(n.useState)([]),c=Object(p.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)(""),u=Object(p.a)(l,2),s=u[0],m=u[1],f=Object(n.useState)(s),d=Object(p.a)(f,2),E=d[0],g=d[1],h=Object(b.f)(),O=F();Object(n.useEffect)((function(){var e=setTimeout((function(){return g(s)}),300);return function(){return clearTimeout(e)}}),[s]),Object(n.useEffect)((function(){E?Object(U.a)("/users?username[$regex]=".concat(E,"&$limit=").concat(7)).then((function(e){return i(e.data)})).catch((function(){return i([])})):i([])}),[E]);var j=function(){g(""),m("")},v=function(e){return function(){var a=o[e].username;h.push("/profile/".concat(a)),j(),t&&t()}},k=r.a.createElement(T.a,{onClickAway:j},r.a.createElement(R.a,{className:O.results},r.a.createElement(L.a,null,o.map((function(e,t){return r.a.createElement("div",{key:e._id},r.a.createElement(B.a,{button:!0,onClick:v(t),className:O.listItem},r.a.createElement(q.a,{user:e})),t<o.length-1&&r.a.createElement(D.a,null))})))));return r.a.createElement("div",{className:O.root},r.a.createElement(A.a,null),r.a.createElement(M.a,{placeholder:"Search...",value:s,onChange:function(e){m(e.target.value.trim())}}),o.length>0&&k)})),W=Object(k.a)({root:{display:"flex",justifyContent:"space-between"}}),Y=r.a.memo((function(e){var t=W(),a=Object(C.a)(),c=Object(n.useState)(!1),o=Object(p.a)(c,2),i=o[0],l=o[1],u=e.menu,s=e.logo,m=function(){l((function(e){return!e}))};return r.a.createElement(N.a,{appear:!1,direction:"down",in:!a},r.a.createElement(x.a,{position:"fixed"},r.a.createElement(S.a,{className:t.root},u,i?r.a.createElement(J,{callback:m}):s,r.a.createElement(E.a,{onClick:m},i?r.a.createElement(I.a,null):r.a.createElement(z.a,null)))))})),$=Object(k.a)({root:{top:"auto",bottom:0},toolbar:{display:"flex",justifyContent:"space-around"}}),_=r.a.memo((function(e){var t=$(),a=e.profile,n=e.feed,c=e.notifications;return r.a.createElement(x.a,{position:"fixed",className:t.root},r.a.createElement(S.a,{className:t.toolbar},c,n,a))})),G=Object(k.a)({root:{width:"60%",margin:"auto",display:"flex",justifyContent:"space-around"},group:{display:"flex"}}),H=r.a.memo((function(e){var t=G(),a=e.logo,n=e.feed,c=e.notifications,o=e.profile;return r.a.createElement(x.a,{position:"fixed"},r.a.createElement(S.a,{className:t.root},a,r.a.createElement(J,null),r.a.createElement("div",{className:t.group},n,c,o)))})),K=a(34),Q=a(198),V=a(186),X=a(187),Z=Object(k.a)((function(e){return{root:{padding:e.spacing(4,10),textAlign:"center"},avatar:{width:e.spacing(14),height:e.spacing(14)}}})),ee=r.a.memo((function(e){var t=e.user,a=Z();return r.a.createElement("div",{className:a.root},r.a.createElement(K.a,{user:t,className:a.avatar}),r.a.createElement(g.a,{variant:"h5"},t.username))})),te=Object(k.a)((function(e){return{item:{padding:e.spacing(2,14,2,2)},icon:{marginRight:e.spacing(1)}}})),ae=r.a.memo((function(e){var t=e.isOpen,a=e.setIsOpen,c=te(),o=Object(b.f)(),i=Object(y.b)(),l=i.user,u=i.logout,s=Object(n.useCallback)((function(){a(!0)}),[a]),m=Object(n.useCallback)((function(){a(!1)}),[a]);Object(n.useEffect)((function(){return o.listen((function(){return m()}))}),[o,m]);var f=Object(n.useCallback)((function(){u(),o.push("/login")}),[u,o]),p=Object(n.useCallback)((function(){o.push("/")}),[o]),d=Object(n.useMemo)((function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}),[]);return r.a.createElement(Q.a,{anchor:"left",open:t,onOpen:s,onClose:m,disableBackdropTransition:!d,disableDiscovery:d},l&&r.a.createElement(ee,{user:l}),r.a.createElement(D.a,null),r.a.createElement(L.a,null,l&&r.a.createElement(B.a,{button:!0,className:c.item,onClick:f},r.a.createElement(V.a,{className:c.icon}),r.a.createElement(g.a,null,"Logout")),r.a.createElement(B.a,{button:!0,className:c.item,onClick:p},r.a.createElement(X.a,{className:c.icon}),r.a.createElement(g.a,null,"About"))))})),ne=Object(k.a)((function(e){return{logo:{fontWeight:"bold",cursor:"pointer",color:"white"},avatar:{width:e.spacing(3),height:e.spacing(3)}}})),re=r.a.memo((function(){var e=ne(),t=Object(y.b)().user,a=Object(w.a)(),c=Object(b.f)(),o=Object(d.a)(a.breakpoints.down("sm")),i=Object(n.useState)(!1),l=Object(p.a)(i,2),u=l[0],s=l[1],m=r.a.createElement(E.a,{onClick:function(){c.push("/feed")}},r.a.createElement(h.a,null)),f=r.a.createElement(E.a,{onClick:function(){c.push("/notifications")}},r.a.createElement(O.a,null)),k=r.a.createElement(E.a,{onClick:function(){s(!0)}},r.a.createElement(j.a,null)),C=r.a.createElement(g.a,{variant:"h5",className:e.logo,onClick:function(){c.push("/")}},"Which"),N=r.a.createElement(E.a,{onClick:function(){t?c.push("/profile/".concat(t.username)):c.push("/login")}},t?r.a.createElement(K.a,{className:e.avatar,user:t}):r.a.createElement(v.a,{className:e.avatar}));return o?r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{logo:C,menu:k}),r.a.createElement(_,{feed:m,profile:N,notifications:f}),r.a.createElement(ae,{isOpen:u,setIsOpen:s})):r.a.createElement(H,{logo:C,profile:N,notifications:f,feed:m})})),ce=a(103),oe=a.n(ce),ie=Object(k.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(10),left:e.spacing(10),zIndex:1e3,cursor:"pointer",opacity:.4,"&:hover":{opacity:1},background:e.palette.primary.main,borderRadius:"50%"},icon:{fontSize:80,color:"white"}}})),le=r.a.memo((function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(w.a)(),i=ie(),l=Object(d.a)(o.breakpoints.down("sm"));return window.addEventListener("scroll",(function(){!a&&window.pageYOffset>400?c(!0):a&&window.pageYOffset<=400&&c(!1)})),r.a.createElement("div",{className:i.root},a&&!l&&r.a.createElement(oe.a,{className:i.icon,color:"primary",onClick:function(){window.scrollTo({top:0})}}))})),ue=a(45),se=a(71),me=a(95),fe=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(6),a.e(9)]).then(a.bind(null,390))})),pe=r.a.lazy((function(){return Promise.all([a.e(1),a.e(5),a.e(8)]).then(a.bind(null,392))})),be=r.a.lazy((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,391))})),de=r.a.lazy((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,384))})),Ee=r.a.lazy((function(){return Promise.all([a.e(0),a.e(7),a.e(10)]).then(a.bind(null,393))})),ge=r.a.lazy((function(){return a.e(12).then(a.bind(null,388))})),he=Object(k.a)((function(e){var t;return{root:(t={},Object(ue.a)(t,e.breakpoints.down("sm"),{margin:e.spacing(12,0,12,0)}),Object(ue.a)(t,e.breakpoints.up("md"),{margin:e.spacing(15,5,8,5)}),t)}})),Oe=function(){var e=he(),t=Object(w.a)(),a=Object(d.a)(t.breakpoints.down("sm"));return r.a.createElement(se.a,{preventDuplicate:!0,maxSnack:a?1:3,anchorOrigin:{vertical:a?"top":"bottom",horizontal:"right"}},r.a.createElement("div",{className:e.root},r.a.createElement(n.Suspense,{fallback:r.a.createElement(me.a,null)},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:Ee}),r.a.createElement(b.a,{exact:!0,path:"/login",component:be}),r.a.createElement(b.a,{exact:!0,path:"/registration",component:de}),r.a.createElement(b.a,{exact:!0,path:"/feed",component:pe}),r.a.createElement(b.a,{exact:!0,path:"/notifications",component:ge}),r.a.createElement(b.a,{path:"/profile/:username",component:fe})))))},je=Object(i.a)({palette:{primary:{main:f.a[700],light:f.a[100]}}}),ve=function(){return r.a.createElement(s.a,null,r.a.createElement(y.a,null,r.a.createElement(l.a,{theme:je},r.a.createElement(u.a,null),r.a.createElement(re,null),r.a.createElement(Oe,null),r.a.createElement(le,null))))};o.a.render(r.a.createElement(ve,null),document.getElementById("root"))},31:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return s}));var n=a(80),r=a.n(n),c=a(96),o=a.n(c),i=r.a.create({baseURL:"https://which-api.herokuapp.com"});i.interceptors.request.use((function(e){var t=localStorage.getItem("token");return o.a.set(e,"headers.Authorization",t)})),i.interceptors.response.use((function(e){return e}),(function(e){return"Request failed with status code 401"===e.message&&localStorage.getItem("token")&&(localStorage.removeItem("remember"),window.location.reload()),Promise.reject(e)}));var l=i.get,u=i.post,s=(i.put,i.patch)},32:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(16),r=a(59),c=a.n(r),o=a(73),i=a(0),l=a.n(i),u=a(31),s=a(72),m=function(e){var t=Object(i.useState)((function(){return localStorage.getItem(e)||null})),a=Object(n.a)(t,2),r=a[0],c=a[1];return[r,Object(i.useCallback)((function(t){t?localStorage.setItem(e,t):localStorage.removeItem(e),c(t)}),[e])]},f=Object(i.createContext)({user:void 0,login:function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),logout:function(){},isAuthenticated:!1}),p=function(e){var t=e.children,a=function(){var e=m("remember"),t=Object(n.a)(e,2),a=t[0],r=t[1],c=m("username"),o=Object(n.a)(c,2),l=o[0],f=o[1],p=m("token"),b=Object(n.a)(p,2),d=b[0],E=b[1],g=Object(s.d)(l).data,h=Object(i.useMemo)((function(){return Boolean(l)}),[l]),O=Object(i.useCallback)((function(){E(null),f(null)}),[E,f]);Object(i.useEffect)((function(){a||O()}),[a,O]);return{user:g,login:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(u.c)("/authentication",{strategy:"local",username:e,password:t}).then((function(t){return E(t.data.accessToken),f(e),r(a?"true":null),!0})).catch((function(){return!1}))},logout:O,token:d,isAuthenticated:h}}(),r=f.Provider;return l.a.createElement(r,{value:a},t)},b=function(){return Object(i.useContext)(f)}},34:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),o=a(147),i=a(101),l=a.n(i);t.a=function(e){var t=e.user,a=e.className,n=Object(c.f)(),i=t.username,u=t.avatarUrl,s=function(){n.push("/profile/".concat(i))};return u?r.a.createElement(o.a,{src:u,alt:i[0].toUpperCase(),onClick:s,className:a,style:{cursor:"pointer"}}):r.a.createElement(l.a,{className:a,onClick:s})}},69:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(105),o=a(90),i=a.n(o),l=a(142),u=a(34),s=Object(c.a)((function(e){return{root:{display:"flex",alignItems:"center"},verified:{marginLeft:e.spacing(.5),width:e.spacing(2),height:e.spacing(2)}}}));t.a=function(e){var t=e.user,a=e.info,n=s(),c=t.username,o=t.verified,m=r.a.createElement(u.a,{user:t}),f=r.a.createElement("div",{className:n.root},c,o&&r.a.createElement(i.a,{color:"primary",className:n.verified}));return r.a.createElement(l.a,{avatar:m,title:f,subheader:a})}},72:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(60),r=a(48),c=a(31),o=function(e){return Object(c.a)(e).then((function(e){return e.data}))},i={initialData:[],revalidateOnMount:!0},l=function(e){return Object(r.a)(e&&"/users?username=".concat(e),(function(e){return Object(c.a)(e).then((function(e){return e.data[0]}))}))},u=function(e){return Object(r.a)(e&&"/profiles/".concat(e),o,i)},s=function(){return Object(r.a)("/feed",o,Object(n.a)(Object(n.a)({},i),{},{revalidateOnFocus:!1}))},m=function(){return Object(r.a)("/feedback",o,i)}},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(145),o=a(105),i=Object(o.a)((function(e){return{loader:{width:"100%",textAlign:"center",marginTop:e.spacing(10)}}})),l=r.a.memo((function(){var e=i();return r.a.createElement("div",{className:e.loader},r.a.createElement(c.a,{color:"primary",style:{margin:"0 auto"}}))}));t.a=l}},[[110,3,4]]]);
//# sourceMappingURL=main.b206fbea.chunk.js.map