(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(n){n.exports=JSON.parse('[{"name":"Annie Copeland","id":"","number":""},{"name":"Rosie Simpson","id":"","number":""},{"name":"Cherish Bautista","id":"","number":""},{"name":"Ezequiel Hayden","id":"","number":""},{"name":"Ada Garcia","id":"","number":""},{"name":"Everett Smith","id":"","number":""},{"name":"Izayah Carey","id":"","number":""},{"name":"Giselle Alvarez","id":"","number":""},{"name":"Rayne Duffy","id":"","number":""},{"name":"Davin Archer","id":"","number":""},{"name":"Dorian Sosa","id":"","number":""},{"name":"Willow Olson","id":"","number":""}]')},22:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var a,r=t(1),o=t.n(r),i=t(12),c=t.n(i),s=(t(22),t(17)),l=t(4),d=t(2),u=t(3),b=t(0);function m(n){var e=n.children,t=n.className;return t?Object(b.jsxs)(h,{className:t,children:[" ",e]}):Object(b.jsx)(h,{children:e})}var p,h=u.a.section(a||(a=Object(d.a)(["\n  padding: 0 20px;\n  margin: 0;\n"])));function j(n){var e=n.children,t=n.className;return t?Object(b.jsx)(f,{className:t,children:e}):Object(b.jsx)(f,{children:e})}var x,f=u.a.div(p||(p=Object(d.a)(["\n  padding: 0 10px;\n  margin: 0 auto;\n"])));function g(n){var e=n.title,t=n.className;return t?Object(b.jsx)(k,{className:t,children:e}):Object(b.jsx)(k,{children:e})}g.defaultProps={title:"Section title"};var O,v,w,y,k=u.a.h2(x||(x=Object(d.a)(["\n  color: var(--yellow);\n  font-size: 32px;\n  font-family: var(--big);\n  text-align: center;\n"])));function S(n){var e=n.onSubmit,t=Object(r.useState)(""),a=Object(l.a)(t,2),o=a[0],i=a[1],c=Object(r.useState)(""),s=Object(l.a)(c,2),d=s[0],u=s[1],p=function(n){var e=n.currentTarget,t=e.name,a=e.value;"name"===t&&i(a),"number"===t&&u(a)},h=function(){i(""),u("")};return Object(b.jsx)(m,{children:Object(b.jsxs)(j,{children:[Object(b.jsx)(g,{title:"Phonebook"}),Object(b.jsxs)(M,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),e({name:o,number:d}),h()},children:[Object(b.jsxs)(E,{children:["Name",Object(b.jsx)(J,{type:"text",name:"name",value:o,placeholder:"Enter fullname",onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(b.jsxs)(E,{children:["Number",Object(b.jsx)(J,{type:"tel",name:"number",value:d,placeholder:"Enter phone number",onChange:p,minLength:"7",maxLength:"9",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(b.jsx)(D,{type:"submit",disabled:""===o||""===d,children:"Add contact"})]})]})})}var C,z,N,A,M=u.a.form(O||(O=Object(d.a)(["\n  padding: 5px;\n  margin: 0 auto;\n  width: 250px;\n  font-family: var(--font);\n"]))),D=u.a.button(v||(v=Object(d.a)(["\n  margin: 0;\n  width: 100%;\n  border: 1px solid rgb(255, 252, 252);\n  box-shadow: 0.7px 0.7px 0.75px rgb(173, 172, 172);\n  border-radius: 10px;\n  background-color: rgb(245, 250, 245);\n  padding: 5px 20px;\n\n  font-family: var(--font);\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 250ms ease-in;\n\n  :hover {\n    cursor: pointer;\n    color: var(--white);\n    background-color: var(--green);\n    border: 1px solid var(--blue);\n  }\n\n  :disabled:hover {\n    cursor: not-allowed;\n    color: var(--red);\n    background-color: var(--white);\n    border: 1px solid var(--red);\n  }\n"]))),E=u.a.label(w||(w=Object(d.a)(["\n  margin: 0 0 2px 0;\n  font-family: var(--font);\n  font-size: 18px;\n  font-weight: 600;\n"]))),J=u.a.input(y||(y=Object(d.a)(["\n  padding: 5px 20px;\n  margin-bottom: 20px;\n  width: 100%;\n  border-radius: 10px;\n"])));function B(n){var e=n.value,t=n.onChange;return Object(b.jsx)(r.Fragment,{children:Object(b.jsxs)(L,{children:[Object(b.jsxs)(q,{children:["Find contacts by ",Object(b.jsx)(P,{children:"name"})]}),Object(b.jsx)(R,{type:"search",name:"search",value:e,onChange:t})]})})}var I,F,L=u.a.label(C||(C=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),q=u.a.p(z||(z=Object(d.a)(["\n  margin: 5px 0;\n  color: var(--white);\n  font-family: var(--font);\n  font-size: 18px;\n  line-height: 1.5;\n"]))),P=u.a.span(N||(N=Object(d.a)(["\n  color: var(--yellow);\n"]))),R=u.a.input(A||(A=Object(d.a)(["\n  color: var(--blue);\n"])));function Z(n){var e=n.contacts,t=n.onDeleteButtonClick;return Object(b.jsx)("ul",{children:e.map((function(n){return Object(b.jsxs)(G,{children:[n.name," : ",n.number,Object(b.jsx)(T,{type:"button",onClick:function(){return t(n.id)},children:"Delete"})]},n.id)}))})}var G=u.a.li(I||(I=Object(d.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  list-style: circle;\n  align-items: baseline;\n  width: 350px;\n  padding: 5px;\n\n  font-family: var(--font);\n  font-size: 18px;\n  line-height: 1.5;\n\n  ::before {\n    content: '';\n    display: block;\n    height: 7px;\n    width: 7px;\n    background-color: var(--yellow);\n    border-radius: 50%;\n  }\n"]))),T=u.a.button(F||(F=Object(d.a)(["\n  margin: 5px 0 5px 10px;\n  border: 1px solid rgb(255, 252, 252);\n  box-shadow: 0.7px 0.7px 0.75px rgb(173, 172, 172);\n  border-radius: 6px;\n  background-color: rgb(245, 250, 245);\n  padding: 3px 10px 3px 10px;\n\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 250ms ease-in;\n\n  :hover {\n    cursor: pointer;\n    color: var(--white);\n    background-color: var(--blue);\n    border: 1px solid var(--dark);\n  }\n"]))),H=t(7),W=function(n){return n.map((function(n){return n.id=Object(H.a)(),n.number=Math.floor(899*Math.random()+100)+"-"+Math.floor(89*Math.random()+10)+"-"+Math.floor(89*Math.random()+10),n}))},$=t(16);function K(){var n=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:JSON.stringify,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:JSON.parse,o=Object(r.useState)((function(){var t;return a(null!==(t=window.localStorage.getItem(n))&&void 0!==t?t:e)})),i=Object(l.a)(o,2),c=i[0],s=i[1];return Object(r.useEffect)((function(){window.localStorage.setItem(n,t(c)),a(0===window.localStorage.getItem(n).length)&&s(e)}),[n,e,c,t,a]),[c,s]}("contacts",W($)),e=Object(l.a)(n,2),t=e[0],a=e[1],o=Object(r.useState)(""),i=Object(l.a)(o,2),c=i[0],d=i[1],u=function(n,e){return e.some((function(e){return e.name===n.name}))?(alert("".concat(n.name," is already in contacts!")),!1):!e.some((function(e){return e.number===n.number}))||(alert("".concat(n.number," is already in contacts!")),!1)},p=Object(r.useMemo)((function(){return function(n){var e=c.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))}(t)}),[t,c]);return Object(b.jsxs)(r.Fragment,{children:[Object(b.jsx)(S,{onSubmit:function(n){u(n,t)&&(n.id=Object(H.a)(),a((function(e){return[n].concat(Object(s.a)(e))})))}}),Object(b.jsx)(m,{children:Object(b.jsxs)(j,{children:[Object(b.jsx)(g,{title:"Contacts"}),Object(b.jsx)(B,{value:c,onChange:function(n){d(n.currentTarget.value)}}),Object(b.jsx)(Z,{contacts:p,onDeleteButtonClick:function(n){a((function(e){return e.filter((function(e){return e.id!==n}))}))}})]})})]})}c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.9cb81a36.chunk.js.map