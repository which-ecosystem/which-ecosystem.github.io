(this.webpackJsonpwhich=this.webpackJsonpwhich||[]).push([[14],{455:function(e,t,a){"use strict";a.r(t);var n=a(62),r=a.n(n),o=a(71),c=a(12),l=a(0),i=a.n(l),s=a(10),d=a(337),m=a(60),u=a(452),p=a(436),b=a(189),h=a(1),f=a(2),g=(a(4),a(3)),k=a(234),y=a(5),v=a(43),O=a(8),w=l.forwardRef((function(e,t){e.checked;var a=e.classes,n=e.className,r=e.control,o=e.disabled,c=(e.inputRef,e.label),i=e.labelPlacement,s=void 0===i?"end":i,d=(e.name,e.onChange,e.value,Object(f.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),m=Object(k.a)(),u=o;"undefined"===typeof u&&"undefined"!==typeof r.props.disabled&&(u=r.props.disabled),"undefined"===typeof u&&m&&(u=m.disabled);var p={disabled:u};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof r.props[t]&&"undefined"!==typeof e[t]&&(p[t]=e[t])})),l.createElement("label",Object(h.a)({className:Object(g.a)(a.root,n,"end"!==s&&a["labelPlacement".concat(Object(O.a)(s))],u&&a.disabled),ref:t},d),l.cloneElement(r,p),l.createElement(v.a,{component:"span",className:Object(g.a)(a.label,u&&a.disabled)},c))})),j=Object(y.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(w),x=a(24),E=a(30),C=a(335),$=l.forwardRef((function(e,t){var a=e.autoFocus,n=e.checked,r=e.checkedIcon,o=e.classes,c=e.className,i=e.defaultChecked,s=e.disabled,d=e.icon,m=e.id,u=e.inputProps,p=e.inputRef,y=e.name,v=e.onBlur,O=e.onChange,w=e.onFocus,j=e.readOnly,x=e.required,$=e.tabIndex,S=e.type,N=e.value,I=Object(f.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=Object(C.a)({controlled:n,default:Boolean(i),name:"SwitchBase",state:"checked"}),R=Object(E.a)(B,2),z=R[0],P=R[1],F=Object(k.a)(),L=s;F&&"undefined"===typeof L&&(L=F.disabled);var A="checkbox"===S||"radio"===S;return l.createElement(b.a,Object(h.a)({component:"span",className:Object(g.a)(o.root,c,z&&o.checked,L&&o.disabled),disabled:L,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){v&&v(e),F&&F.onBlur&&F.onBlur(e)},ref:t},I),l.createElement("input",Object(h.a)({autoFocus:a,checked:n,defaultChecked:i,className:o.input,disabled:L,id:A&&m,name:y,onChange:function(e){var t=e.target.checked;P(t),O&&O(e,t)},readOnly:j,ref:p,required:x,tabIndex:$,type:S,value:N},u)),z?r:d)})),S=Object(y.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})($),N=l.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.color,o=void 0===r?"secondary":r,c=e.edge,i=void 0!==c&&c,s=e.size,d=void 0===s?"medium":s,m=Object(f.a)(e,["classes","className","color","edge","size"]),u=l.createElement("span",{className:a.thumb});return l.createElement("span",{className:Object(g.a)(a.root,n,{start:a.edgeStart,end:a.edgeEnd}[i],"small"===d&&a["size".concat(Object(O.a)(d))])},l.createElement(S,Object(h.a)({type:"checkbox",icon:u,checkedIcon:u,classes:{root:Object(g.a)(a.switchBase,a["color".concat(Object(O.a)(o))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},m)),l.createElement("span",{className:a.track}))})),I=Object(y.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(x.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(x.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(N),B=a(346),R=a(437),z=a(438),P=a(32),F=Object(m.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:e.spacing(35)},display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},formHeader:{textAlign:"center",fontSize:25},formTransfer:{display:"flex",justifyContent:"center"},transferButton:{marginLeft:10,color:"green",cursor:"pointer"}}}));t.default=function(){var e=Object(l.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],m=Object(l.useState)(!1),h=Object(c.a)(m,2),f=h[0],g=h[1],k=F(),y=Object(P.b)().login,v=Object(s.f)(),O=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.username,o=t.password,c=t.remember,a&&o?y(a,o,c).then((function(e){e?v.push("/profile/".concat(a)):n(!0)})):n(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){g((function(e){return!e}))};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:k.formHeader},"Sign In"),i.a.createElement(d.c,{initialValues:{username:"",password:"",remember:!0},onSubmit:O},(function(e){var t=e.values,n=e.isSubmitting;return i.a.createElement(d.b,{className:k.root,autoComplete:"off"},i.a.createElement(d.a,{name:"username",label:"Login",value:t.username,error:a,as:u.a}),i.a.createElement(d.a,{name:"password",label:"Password",as:u.a,value:t.password,error:a,helperText:a&&"Invalid credentials",type:f?"text":"password",InputProps:{endAdornment:i.a.createElement(p.a,{position:"end"},i.a.createElement(b.a,{size:"small",onClick:w},f?i.a.createElement(R.a,null):i.a.createElement(z.a,null)))}}),i.a.createElement(d.a,{name:"remember",label:"Remember me",as:j,control:i.a.createElement(I,{color:"primary",checked:t.remember,size:"small"})}),i.a.createElement(B.a,{variant:"contained",type:"submit",disabled:n},"submit"))})),i.a.createElement("div",{className:k.formTransfer},i.a.createElement("div",null,"Don't have an account?"),i.a.createElement("span",{onClick:function(){v.push("/registration")},className:k.transferButton,role:"presentation"},"Sign up")))}}}]);
//# sourceMappingURL=14.ba2ccf28.chunk.js.map