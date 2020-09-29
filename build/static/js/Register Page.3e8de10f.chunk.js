(this.webpackJsonpmensaje=this.webpackJsonpmensaje||[]).push([[6],{157:function(e,a,t){"use strict";t.r(a);var r=t(16),n=t.n(r),s=t(26),l=t(19),c=t(0),o=t.n(c),m=t(2),i=t(18),u=t(8),p=t(144),d=t(145),b=t(38),E=t(140),v=t(143),f=t(7),h=t(1),j=t(11),x=t.n(j),k=t(138),g=t(37),O=Object(k.a)("input-group-append"),w=Object(k.a)("input-group-prepend"),N=Object(k.a)("input-group-text",{Component:"span"}),C=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,n=e.className,s=e.as,l=void 0===s?"div":s,c=Object(f.a)(e,["bsPrefix","size","className","as"]);return t=Object(g.a)(t,"input-group"),o.a.createElement(l,Object(h.a)({ref:a},c,{className:x()(n,t,r&&t+"-"+r)}))}));C.displayName="InputGroup";var y=Object(h.a)({},C,{Text:N,Radio:function(e){return o.a.createElement(N,null,o.a.createElement("input",Object(h.a)({type:"radio"},e)))},Checkbox:function(e){return o.a.createElement(N,null,o.a.createElement("input",Object(h.a)({type:"checkbox"},e)))},Append:O,Prepend:w}),P=t(40),S=o.a.createElement(p.a,{icon:d.a}),I=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,F=function(){var e=Object(m.g)(),a=Object(c.useState)(""),t=Object(l.a)(a,2),r=t[0],p=t[1],d=Object(c.useState)(""),f=Object(l.a)(d,2),h=f[0],j=f[1],x=Object(c.useState)(""),k=Object(l.a)(x,2),g=k[0],O=k[1],w=Object(c.useState)(""),N=Object(l.a)(w,2),C=N[0],F=N[1],G=Object(c.useState)(""),U=Object(l.a)(G,2),L=U[0],Y=U[1],A=Object(c.useState)(!1),R=Object(l.a)(A,2),z=R[0],J=R[1],T=Object(c.useState)({}),D=Object(l.a)(T,2),M=D[0],V=D[1],$=Object(c.useState)(!1),q=Object(l.a)($,2),B=q[0],H=q[1],K=function(){H(!B)},Q=function(){var a=Object(s.a)(n.a.mark((function a(t){var s,l,c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(V({}),t.preventDefault(),""!==r.trim()){a.next=6;break}V({name:"You must enter a name!"}),a.next=43;break;case 6:if(""!==h.trim()){a.next=10;break}V({username:"You must enter a username!"}),a.next=43;break;case 10:if(!(h.trim().length<3)){a.next=14;break}V({username:"Username must be greater than 2 characters!"}),a.next=43;break;case 14:if(""!==g.trim()){a.next=18;break}V({email:"You must enter an email address!"}),a.next=43;break;case 18:if(g.match(I)){a.next=22;break}V({email:"You must enter a valid email!"}),a.next=43;break;case 22:if(""!==C.trim()){a.next=26;break}V({password1:"You must enter a password!"}),a.next=43;break;case 26:if(!(C.trim().length<7)){a.next=30;break}V({password1:"Password must be greater than 6 characters"}),a.next=43;break;case 30:if(C.trim()===L.trim()){a.next=34;break}V({password1:"Passwords don't match!",password2:"Passwords don't match!"}),a.next=43;break;case 34:return J(!0),a.next=37,Object(P.b)("user/register",{name:r,username:h,email:g,password:C});case 37:s=a.sent,l=s.status,c=s.message,Object(b.c)(l,c),"ok"===l&&e.push(u.d),J(!1);case 43:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"cover black"}),o.a.createElement("div",{className:"container"},o.a.createElement(i.b,{to:u.c},o.a.createElement("h1",{className:"logo"},"Mensaje")),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"subscribe"},o.a.createElement("h4",null,"Sign Up"),o.a.createElement(v.a,{noValidate:!0,onSubmit:Q},o.a.createElement(v.a.Row,null,o.a.createElement(v.a.Group,{className:"form-group"},o.a.createElement(v.a.Label,{className:"sr-only"},"First name"),o.a.createElement(v.a.Control,{type:"text",placeholder:"Full Name...",value:r,onChange:function(e){var a=e.target;return p(a.value)},className:"form-control transparent",isInvalid:!!M.name}),o.a.createElement(v.a.Control.Feedback,{type:"invalid"},M.name)),o.a.createElement(v.a.Group,{controlId:"validationCustomUsername"},o.a.createElement(v.a.Label,{className:"sr-only"},"Username"),o.a.createElement(y,null,o.a.createElement(y.Prepend,null,o.a.createElement(y.Text,{id:"inputGroupPrepend"},"@")),o.a.createElement(v.a.Control,{type:"text",className:"form-control transparent",placeholder:"Username...",value:h,onChange:function(e){var a=e.target;return j(a.value)},"aria-describedby":"inputGroupPrepend",isInvalid:!!M.username}),o.a.createElement(v.a.Control.Feedback,{type:"invalid"},M.username))),o.a.createElement(v.a.Group,{controlId:"validationCustom02"},o.a.createElement(v.a.Label,{className:"sr-only"},"Email Address"),o.a.createElement(v.a.Control,{type:"email",className:"form-control transparent",placeholder:"Email Address...",value:g,onChange:function(e){var a=e.target;return O(a.value)},isInvalid:!!M.email}),o.a.createElement(v.a.Control.Feedback,{type:"invalid"},M.email)),o.a.createElement(v.a.Group,{controlId:"validationCustom02"},o.a.createElement(v.a.Label,{className:"sr-only"},"Password"),o.a.createElement(v.a.Control,{type:B?"text":"password",className:"form-control transparent",placeholder:"Password...",value:C,onChange:function(e){var a=e.target;return F(a.value)},isInvalid:!!M.password1}),o.a.createElement("i",{onClick:K},S),o.a.createElement(v.a.Control.Feedback,{type:"invalid"},M.password1)),o.a.createElement(v.a.Group,{controlId:"validationCustom02"},o.a.createElement(v.a.Label,{className:"sr-only"},"Password"),o.a.createElement(v.a.Control,{type:B?"text":"password",className:"form-control transparent",placeholder:"Password again...",value:L,onChange:function(e){var a=e.target;return Y(a.value)},isInvalid:!!M.password2}),o.a.createElement("i",{onClick:K},S),o.a.createElement(v.a.Control.Feedback,{type:"invalid"},M.password2))),o.a.createElement(E.a,{type:"submit",className:"btn",disabled:!!z},z?o.a.createElement(b.a,null):"Sign Up"),o.a.createElement(i.b,{to:u.d},o.a.createElement("p",{className:"text-right"},"Already have an account?")),o.a.createElement(i.b,{to:u.b},o.a.createElement("p",{className:"text-right"},"Forgot password?")))))))};a.default=F}}]);
//# sourceMappingURL=Register Page.3e8de10f.chunk.js.map