(this.webpackJsonpwhich=this.webpackJsonpwhich||[]).push([[10],{233:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(60),l=a(77),i=Object(c.a)({root:{position:"absolute",width:"100%",height:"100%"},image:{objectFit:"cover",pointerEvents:"none",width:"100%",height:"100%"}});t.a=function(e){var t=e.src,a=e.alt,n=i();return r.a.createElement("picture",{className:n.root},r.a.createElement(l.a,{src:t,alt:a,className:n.image}))}},240:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(299),l=a(267),i=a.n(l);t.a=function(e){var t=e.callback,a=e.children,l=Object(n.useRef)(null),o=function(){(null===l||void 0===l?void 0:l.current)&&l.current.click()},s=a&&r.a.Children.only(a),u=r.a.createElement(c.a,{onClick:o,variant:"contained",color:"primary",size:"large",startIcon:r.a.createElement(i.a,null)},"Upload");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"file",ref:l,multiple:!1,accept:".jpg, .jpeg, .png, .gif",style:{display:"none"},onChange:function(e){var a,n=null===(a=e.target)||void 0===a?void 0:a.files;(null===n||void 0===n?void 0:n.length)&&t(n[0])}}),r.a.isValidElement(s)?r.a.cloneElement(s,{onClick:o}):u)}},241:function(e,t,a){"use strict";var n=a(12),r=a(268),c=a.n(r),l=a(80),i=a.n(l),o=a(242),s=a.n(o),u=a(27),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;return new Promise((function(a,n){return 1===t?a(e):new c.a(e,{success:function(e){return a(e)},error:function(e){return n(e)},quality:t})}))};t.a=function(e,t,a){var r={headers:{"Content-Type":"image/png"},onUploadProgress:function(e){if(a){var t=e.loaded,n=e.total,r=Math.round(95*t/n);a(r)}}};return s.a.all([Object(u.a)("/files?key=".concat(e.name)),m(e,t)]).then((function(e){var t=Object(n.a)(e,2),a=t[0],c=t[1],l=a.data;return i.a.put(l,c,r)})).then((function(e){a&&a(100);var t=e.config.url;return t?t.slice(0,t.indexOf("?")):""}))}},398:function(e,t,a){"use strict";a.r(t);var n=a(62),r=a.n(n),c=a(12),l=a(71),i=a(0),o=a.n(i),s=a(242),u=a.n(s),m=a(10),f=a(60),p=a(366),d=a(291),v=a(184),b=a(395),h=a(299),g=a(78),E=a(241),j=function(){var e=Object(i.useState)(),t=Object(c.a)(e,2),a=t[0],n=t[1],o=Object(i.useState)(0),s=Object(c.a)(o,2),u=s[0],m=s[1],f=Object(i.useCallback)(function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m(.01),!(a instanceof File)){e.next=3;break}return e.abrupt("return",Object(E.a)(a,t,m));case 3:return e.abrupt("return",a||"");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a]);return{file:a,setFile:n,resolve:f,progress:u}},k=a(43),O=a(365),y=a(113),w=a(393),C=a(394),x=a(368),F=a.n(x),S=a(388),N=a(389),I=a(390),U=a(391),z=a(396),L=a(392),P=function(e){var t=e.setIsOpen,a=e.isOpen,n=e.callback,r=Object(i.useState)(""),l=Object(c.a)(r,2),s=l[0],u=l[1],m=function(){t(!1)};return o.a.createElement("div",null,o.a.createElement(S.a,{open:a,onClose:m},o.a.createElement(N.a,null,"Upload via link"),o.a.createElement(I.a,null,o.a.createElement(U.a,null,"Provide a valid URL to your image:"),o.a.createElement(z.a,{autoFocus:!0,margin:"dense",id:"name",label:"Image URL",type:"text",fullWidth:!0,autoComplete:"off",onChange:function(e){u(e.target.value)}})),o.a.createElement(L.a,null,o.a.createElement(h.a,{onClick:m,color:"primary"},"Cancel"),o.a.createElement(h.a,{onClick:function(){var e=s;if(s.startsWith("https://www.instagram.com/")){var t=s.match("/p/(.*)/"),a=t&&t[1];e="https://www.instagram.com/p/".concat(a,"/media/?size=l")}else if(s.startsWith("https://drive.google.com/")){var r=s.match("/d/(.*)/"),c=r&&r[1];e="https://drive.google.com/uc?export=view&id=".concat(c)}n(e||""),m()},color:"primary",disabled:!s.length},"Submit"))))},R=function(e){var t=e.callback,a=e.children,n=Object(i.useState)(!1),r=Object(c.a)(n,2),l=r[0],s=r[1],u=function(){s(!0)},m=o.a.createElement(h.a,{onClick:u,variant:"outlined",color:"primary",startIcon:o.a.createElement(F.a,null)},"Attach a link"),f=a&&o.a.Children.only(a);return o.a.createElement(o.a.Fragment,null,o.a.createElement(P,{callback:t,isOpen:l,setIsOpen:s}),o.a.isValidElement(f)?o.a.cloneElement(f,{onClick:u}):m)},W=a(240),D=a(233),q=Object(f.a)({root:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",width:"50%"},clearIcon:{opacity:".5",fontSize:50},overlay:{backgroundColor:"rgba(0, 0, 0, 0.45)",color:"white",position:"absolute",top:0,left:0,height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",transitionDuration:"0.5s"},invisible:{backgroundColor:"rgba(0, 0, 0, 0)"},icon:{color:"white"}}),A=function(e){var t=e.callback,a=e.progress,n=q(),r=Object(i.useState)(),l=Object(c.a)(r,2),s=l[0],u=l[1],m=function(e){var a;e instanceof File?(a=e,new Promise((function(e,t){var n=new FileReader;n.addEventListener("load",(function(){"string"===typeof n.result&&e(n.result)}),!1),n.addEventListener("error",(function(){t(new Error("Error reading the file"))}),!1),a&&n.readAsDataURL(a)}))).then((function(e){return u(e)})):u(e),t(e)},f=o.a.createElement("div",{className:n.root},o.a.createElement(W.a,{callback:m}),o.a.createElement(k.a,{variant:"h6"}," or "),o.a.createElement(R,{callback:m})),p=o.a.createElement(O.a,{onClick:function(){u(void 0),t(void 0)},className:n.root,disabled:Boolean(a)},o.a.createElement(D.a,{src:s}),o.a.createElement("div",{className:"".concat(n.overlay," ").concat(100===a&&n.invisible)},a?a<100?o.a.createElement(y.a,{variant:"static",value:a,className:n.icon}):o.a.createElement(w.a,{className:n.icon,fontSize:"large"}):o.a.createElement(C.a,{className:n.icon,fontSize:"large"})));return s?p:f},B=a(75),J=a(27),V=a(32),G=a(74),M=Object(f.a)((function(e){return{root:{marginBottom:e.spacing(4)},images:{height:e.spacing(50),display:"flex"}}}));t.default=function(){var e=M(),t=Object(m.f)(),a=Object(g.b)().enqueueSnackbar,n=Object(V.b)().user,i=Object(G.a)().mutate,s=j(),f=s.file,E=s.setFile,k=s.resolve,O=s.progress,y=j(),w=y.file,C=y.setFile,x=y.resolve,F=y.progress,S=function(){var e=Object(l.a)(r.a.mark((function e(){var n,l,o,s,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.all([k(),x()]);case 3:n=e.sent,l=Object(c.a)(n,2),o=l[0],s=l[1],m={left:{url:o},right:{url:s}},t.push("/feed"),Object(J.c)("/polls/",{contents:m}).then((function(){i(),a("Your poll has been successfully created!",{variant:"success"})})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),a("Failed to create a poll. Please, try again.",{variant:"error"}),t.push("/feed");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(p.a,{maxWidth:"sm",disableGutters:!0},o.a.createElement(d.a,{className:e.root},n&&o.a.createElement(B.a,{user:n,info:""}),o.a.createElement(v.a,null),o.a.createElement("div",{className:e.images},o.a.createElement(A,{callback:E,progress:O}),o.a.createElement(A,{callback:C,progress:F})),O||F?o.a.createElement(b.a,{color:"primary"}):o.a.createElement(h.a,{color:"primary",disabled:!(f&&w),variant:"contained",onClick:S,fullWidth:!0},"Submit")))}}}]);
//# sourceMappingURL=10.70b1fe32.chunk.js.map