"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[672],{1468:function(s,e,n){n.d(e,{D:function(){return r}});var i=n(8683),a=(n(2791),n(8687)),d=n(7689),t=n(184),o=function(s){return{isAuth:s.auth.isAuth}},r=function(s){return(0,a.$j)(o)((function(e){return e.isAuth?(0,t.jsx)(s,(0,i.Z)({},e)):(0,t.jsx)(d.Fg,{to:"/login"})}))}},5672:function(s,e,n){n.r(e),n.d(e,{default:function(){return b}});n(2791);var i=n(7148),a="Dialogs_dialogs__Hf8HO",d="Dialogs_dialogItems__e6CoO",t="Dialogs_dialog__FsyPI",o="Dialogs_active__5Xww9",r="Dialogs_messages__9dofz",u="Dialogs_message__V9y61",c=n(1087),l=n(184),g=function(s){s.id;return(0,l.jsx)("div",{className:t+" "+o,children:(0,l.jsx)(c.OL,{to:"/dialogs/"+s.id,children:s.name})})},m=function(s){return(0,l.jsx)("div",{className:u,children:s.message})},f=n(7689),h=n(6139),j=n(704),_=n(7492),x=(0,j.Z)({form:"dialogAddMessageForm"})((function(s){return(0,l.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,l.jsx)("div",{children:(0,l.jsx)(h.Z,{name:"messageBody",component:_.gx,placeholder:"Add new message"})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{children:"Send"})})]})})),v=function(s){var e=s.messagesPage,n=e.dialogs.map((function(s){return(0,l.jsx)(g,{name:s.name,id:s.id},s.id)})),i=e.messages.map((function(s){return(0,l.jsx)(m,{message:s.message},s.id)}));return s.isAuth?(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("div",{className:d,children:n}),(0,l.jsx)("div",{className:r,children:i}),(0,l.jsx)("div",{children:(0,l.jsx)(x,{onSubmit:function(e){var n=e.messageBody;s.addMessage(n)}})})]}):(0,l.jsx)(f.Fg,{to:"/login"})},p=n(8687),D=n(1468),b=(0,n(7781).qC)((0,p.$j)((function(s){return{messagesPage:s.messagesPage}}),(function(s){return{addMessage:function(e){s((0,i.d)(e))}}})),D.D)(v)}}]);
//# sourceMappingURL=672.936ac84a.chunk.js.map