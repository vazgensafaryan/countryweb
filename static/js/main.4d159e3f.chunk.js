(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{54:function(e,c,t){},57:function(e,c,t){"use strict";t.r(c);var n,a=t(9),s=t.n(a),i=t(42),j=t.n(i),r=t(67),l=t(68),d=t(66),b=t(38),u=t(43),O=t(69),o=t(70),v=(t(54),t(3)),h=Object(O.a)(n||(n=Object(u.a)(["\n  query Country($code: ID!) {\n    country(code: $code) {\n      name\n      native\n      capital\n      emoji\n      currency\n      languages {\n        code\n        name\n      }\n    }\n  }\n"])));var x=function(){var e=Object(a.useState)(""),c=Object(b.a)(e,2),t=c[0],n=c[1],s=Object(o.a)(h),i=Object(b.a)(s,2),j=i[0],r=i[1].data;return Object(v.jsx)("div",{id:"page",children:Object(v.jsxs)("div",{id:"content",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{type:"text",placeholder:"COUNTRY CODE",maxLength:2,onChange:function(e){n(e.target.value)}}),"\xa0",Object(v.jsx)("button",{onClick:function(){j({variables:{code:t.toUpperCase()}})},children:"GET COUNTRY"})]}),Object(v.jsx)("div",{children:r&&Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"title",children:"Name"}),Object(v.jsx)("div",{className:"value",children:r.country.name}),Object(v.jsx)("hr",{}),Object(v.jsx)("div",{className:"title",children:"Native"}),Object(v.jsx)("div",{className:"value",children:r.country.native}),Object(v.jsx)("hr",{}),Object(v.jsx)("div",{className:"title",children:"Capital"}),Object(v.jsx)("div",{className:"value",children:r.country.capital}),Object(v.jsx)("hr",{}),Object(v.jsx)("div",{className:"title",children:"Currency"}),Object(v.jsx)("div",{className:"value",children:r.country.currency}),Object(v.jsx)("hr",{}),Object(v.jsx)("div",{className:"title",children:"Flag"}),Object(v.jsx)("div",{className:"value",children:r.country.emoji}),Object(v.jsx)("hr",{}),Object(v.jsxs)("div",{id:"languages",children:[Object(v.jsx)("div",{className:"title",children:"Languages"}),Object(v.jsx)("div",{className:"value",children:r.country.languages.map((function(e){return Object(v.jsx)("div",{children:e.name})}))})]})]})})]})})};var m=function(){var e=new r.a({uri:"https://countries.trevorblades.com",cache:new l.a});return Object(v.jsx)(d.a,{client:e,children:Object(v.jsx)(x,{})})};j.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(m,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.4d159e3f.chunk.js.map