(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(7),c=a(2),s=a(4),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},b=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(m.jsx)(j,{user:t.user})]},t.id)},h=function(e){var t=e.todos;return Object(m.jsx)("section",{children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=function(e){var t=e.addTodoHandler,a=Object(o.useState)(""),n=Object(c.a)(a,2),i=n[0],r=n[1],s=Object(o.useState)(0),d=Object(c.a)(s,2),u=d[0],j=d[1],b=Object(o.useState)(!1),h=Object(c.a)(b,2),O=h[0],f=h[1],p=Object(o.useState)(!1),x=Object(c.a)(p,2),v=x[0],y=x[1];return Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault();var a=!1;if(i||(f(!0),a=!0),u||(y(!0),a=!0),!a){var n=l.find((function(e){return e.id===u}))||null;t({title:i,userId:u,completed:!1,user:n}),r(""),j(0)}},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title-input",children:"Title:\xa0"}),Object(m.jsx)("input",{id:"title-input",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:i,onChange:function(e){r(e.target.value),O&&f(!1)}}),O&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"user-id",children:"User:\xa0"}),Object(m.jsxs)("select",{id:"user-id","data-cy":"userSelect",value:u,onChange:function(e){j(+e.target.value),v&&y(!1)},children:[Object(m.jsx)("option",{value:0,children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),v&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:l.find((function(t){return t.id===e.userId}))||null})})),p=function(){var e=Object(o.useState)(f),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsx)(O,{addTodoHandler:function(e){var t=a.map((function(e){return e.id})),i=Math.max.apply(Math,Object(r.a)(t)),c=Object(s.a)(Object(s.a)({},e),{},{id:i+1});n((function(e){return[].concat(Object(r.a)(e),[c])}))}}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c653e202.chunk.js.map