(this.webpackJsonpwhich=this.webpackJsonpwhich||[]).push([[8],{249:function(e,t,a){"use strict";var n=a(43),i=a(0),r=a.n(i),o=a(10),c=a(177),l=a(178),s=a(384),u=a(104),h=a(277),m=a.n(h),d=Object(u.a)((function(e){var t;return{root:(t={zIndex:1e3,position:"fixed"},Object(n.a)(t,e.breakpoints.down("sm"),{right:e.spacing(2),bottom:e.spacing(8)}),Object(n.a)(t,e.breakpoints.up("md"),{right:e.spacing(5),bottom:e.spacing(5)}),t)}}));t.a=function(e){var t=e.hideOnScroll,a=void 0!==t&&t,n=d(),i=Object(o.f)(),u=Object(c.a)();return r.a.createElement(l.a,{appear:!1,direction:"up",in:!a||!u},r.a.createElement(s.a,{onClick:function(){i.push("/new")},className:n.root,color:"secondary"},r.a.createElement(m.a,null)))}},250:function(e,t,a){"use strict";var n=a(283),i=a(0),r=a.n(i),o=a(282),c=a(60),l=a(104),s=a(276),u=a(352),h=a(353),m=a(71),d=a(275),g=a.n(d),v=Object(l.a)({root:{position:"absolute",color:"white",top:"86%",fontSize:20,textShadow:"0 0 3px black",display:"flex",alignItems:"center"},left:{left:30},right:{right:30}}),p=function(e){var t=e.value,a=e.which,n=e.like,i=v();return r.a.createElement("div",{className:"".concat(i.root," ").concat(i[a])},n&&r.a.createElement(g.a,null),"".concat(t,"%"))},f=a(69),b=a(31),E=a(32),w={month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"},k=Object(l.a)((function(e){return{images:{height:e.spacing(50)},imagesBlock:{display:"flex"},rateLine:{position:"relative",width:"100%",height:e.spacing(2),backgroundColor:e.palette.primary.light,transitionDuration:"0.5s"},highlight:{backgroundColor:"".concat(e.palette.primary.main," !important")},fillRateLine:{height:e.spacing(2),backgroundColor:e.palette.primary.light,transitionDuration:"0.5s"}}})),O=function(e){var t,a,n=e.poll,i=e.setPoll,o=k(),l=n.author,d=n.contents,g=d.left,v=d.right,O=n.vote,j=Object(m.b)().enqueueSnackbar,y=Object(E.b)().isAuthenticated,S=new Date(n.createdAt).toLocaleString("default",w),C=function(e){if(y)if(O)j("You have already voted in this poll",{variant:"error"});else{var t={which:e,pollId:n._id},a=Object(c.a)({},n);a.contents[e].votes+=1,a.vote=Object(c.a)({_id:"",authorId:"",createdAt:new Date},t),i(a),Object(b.c)("votes/",t)}else j("Unauthorized users can not vote in polls",{variant:"error"})};g.votes||v.votes?a=100-(t=Math.round(g.votes/(g.votes+v.votes)*100)):(t=0,a=0);var x=g.votes>=v.votes?"left":"right";return r.a.createElement(s.a,null,r.a.createElement(f.a,{user:l,info:S}),r.a.createElement("div",{className:o.imagesBlock},r.a.createElement(u.a,{onDoubleClick:function(){return C("left")}},r.a.createElement(h.a,{className:o.images,image:g.url}),r.a.createElement(p,{value:t,which:"left",like:"left"===(null===O||void 0===O?void 0:O.which)})),r.a.createElement(u.a,{onDoubleClick:function(){return C("right")}},r.a.createElement(h.a,{className:o.images,image:v.url}),r.a.createElement(p,{value:a,which:"right",like:"right"===(null===O||void 0===O?void 0:O.which)}))),r.a.createElement("div",{className:"".concat(o.rateLine," ").concat("right"===x?o.highlight:"")},r.a.createElement("div",{className:"".concat(o.fillRateLine," ").concat("left"===x?o.highlight:""),style:{width:"".concat(t,"%")}})))};t.a=function(e){var t=e.polls,a=e.mutate,i=function(e){var i=e.index,o=e.style,c=e.key,l=t[i];return r.a.createElement("div",{key:"".concat(c,"-").concat(l._id,"-").concat(t.length),style:o},r.a.createElement(O,{poll:l,setPoll:function(e){var r=Object(n.a)(t);r[i]=e,a([],!1),a(r,!1)}}))};return r.a.createElement(o.c,null,(function(e){var a=e.height,n=e.isScrolling,c=e.registerChild,l=e.onChildScroll,s=e.scrollTop;return r.a.createElement(o.a,{disableHeight:!0},(function(e){var u=e.width;return r.a.createElement("div",{ref:c},r.a.createElement(o.b,{autoHeight:!0,height:a,isScrolling:n,onScroll:l,rowCount:t.length,rowHeight:550,rowRenderer:i,scrollTop:s,width:u,containerStyle:{pointerEvents:"auto"},overscanRowCount:1}))}))}))}},385:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(354),o=a(250),c=a(249),l=a(32),s=a(72);t.default=function(){var e=Object(s.a)(),t=e.data,a=e.mutate,n=Object(l.b)().isAuthenticated;return i.a.createElement(r.a,{maxWidth:"sm",disableGutters:!0},n&&i.a.createElement(c.a,{hideOnScroll:!0}),i.a.createElement(o.a,{polls:t,mutate:a}))}}}]);
//# sourceMappingURL=8.8a8c3f1b.chunk.js.map