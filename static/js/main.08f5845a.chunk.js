(this["webpackJsonphmww-11"]=this["webpackJsonphmww-11"]||[]).push([[0],[,,function(e,n,t){e.exports={login:"Login_login__2Tr32",control:"Login_control__3120j",invalid:"Login_invalid__23wB7",actions:"Login_actions__1VBh0"}},,,,function(e,n,t){e.exports={card:"Card_card__1xVQd"}},function(e,n,t){e.exports={button:"Button_button__31LTY"}},function(e,n,t){e.exports={home:"Home_home__21dHs"}},function(e,n,t){e.exports={nav:"Navigation_nav__1gJxT"}},function(e,n,t){e.exports={"main-header":"MainHeader_main-header__aHqZ7"}},,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(5),s=t.n(i),l=(t(15),t(3)),o=t(6),r=t.n(o),u=t(0),d=function(e){return Object(u.jsx)("div",{className:"".concat(r.a.card," ").concat(e.className),children:e.children})},j=t(2),b=t.n(j),m=t(7),h=t.n(m),O=function(e){return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(h.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})};function p(e,n){return"INPUT_EMAIL"===n.type?{emailValue:n.val,isValid:n.val.includes("@")}:"INPUT_EMAIL_BLUR"===n.type?{emailValue:e.emailValue,isValid:e.emailValue.includes("@")}:e}var g={emailValue:"",isValid:void 0};function x(e,n){return"INPUT_PASSWORD"===n.type?{passValue:n.valPass,passIsValid:n.valPass.trim().length>6}:"INPUT_PASSWORD_BLUR"===n.type?{passValue:e.passValue,passIsValid:e.passValue.trim().length>6}:e}var _={passValue:"",passIsValid:void 0},f=function(e){var n=Object(a.useReducer)(p,g),t=Object(l.a)(n,2),c=t[0],i=t[1],s=Object(a.useReducer)(x,_),o=Object(l.a)(s,2),r=o[0],j=o[1],m=Object(a.useState)(!1),h=Object(l.a)(m,2),f=h[0],v=h[1],L=r.passIsValid;Object(a.useEffect)((function(){var e=setTimeout((function(){v(c.emailValue.includes("@")&&r.passValue.trim().length>6)}),1500);return function(){clearTimeout(e)}}),[c.emailValue,r.passValue]);return Object(u.jsx)(d,{className:b.a.login,children:Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e.onLogin(c.emailValue,r.passValue)},children:[Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===c.isValid?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"email",children:"E-Mail"}),Object(u.jsx)("input",{type:"email",id:"email",value:c.emailValue,onChange:function(e){i({type:"INPUT_EMAIL",val:e.target.value})},onBlur:function(){i({type:"INPUT_EMAIL_BLUR"})}})]}),Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===L?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",id:"password",value:r.passValue,onChange:function(e){j({type:"INPUT_PASSWORD",valPass:e.target.value})},onBlur:function(){j({type:"INPUT_PASSWORD_BLUR"})}})]}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)(O,{type:"submit",className:b.a.btn,disabled:!f,children:"Login"})})]})})},v=t(8),L=t.n(v),V=function(e){return Object(u.jsx)(d,{className:L.a.home,children:Object(u.jsx)("h1",{children:"Welcome back!"})})},I=t(9),N=t.n(I),P=function(e){return Object(u.jsx)("nav",{className:N.a.nav,children:Object(u.jsxs)("ul",{children:[e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},y=t(10),S=t.n(y),T=function(e){return Object(u.jsxs)("header",{className:S.a["main-header"],children:[Object(u.jsx)("h1",{children:"A Typical Page"}),Object(u.jsx)(P,{isLoggedIn:e.isAuthenticated,onLogout:e.onLogout})]})};var U=function(){var e=Object(a.useState)(!1),n=Object(l.a)(e,2),t=n[0],i=n[1];Object(a.useEffect)((function(){"1"===localStorage.getItem("isLogin")&&i(!0)}),[]);var s=function(){i(!1),localStorage.removeItem("isLogin")};return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(T,{isAuthenticated:t,onLogout:s}),Object(u.jsxs)("main",{children:[!t&&Object(u.jsx)(f,{onLogin:function(e,n){localStorage.setItem("isLogin","1"),i(!0)}}),t&&Object(u.jsx)(V,{onLogout:s})]})]})};s.a.render(Object(u.jsx)(U,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.08f5845a.chunk.js.map