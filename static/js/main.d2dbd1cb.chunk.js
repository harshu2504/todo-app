(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(t,e,a){t.exports=a(22)},22:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(12),s=a.n(o),r=a(2),l=a(3),c=a(5),u=a(4),d=a(6),h=a(8),m=a(14),b=a(1),p=a(7),v=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={isEditing:!1,task:a.props.task},a.handleRemove=a.handleRemove.bind(Object(b.a)(a)),a.toggleForm=a.toggleForm.bind(Object(b.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(b.a)(a)),a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(t){t.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.setState({isEditing:!this.state.isEditing})}},{key:"handleChange",value:function(t){this.setState(Object(p.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){return this.state.isEditing?i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleUpdate},i.a.createElement("input",{type:"text",name:"task",value:this.state.task,onChange:this.handleChange}),i.a.createElement("button",null,"save"))):i.a.createElement("div",null,i.a.createElement("button",{onClick:this.toggleForm},"edit"),i.a.createElement("button",{onClick:this.handleRemove},"X"),i.a.createElement("li",null,this.props.task))}}]),e}(n.Component),k=a(13),j=a.n(k),O=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={task:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleChange",value:function(t){this.setState(Object(p.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.createTodo(Object(h.a)({},this.state,{id:j()()})),this.setState({task:""})}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",{htmlFor:"task"},"New Todo"),i.a.createElement("input",{type:"text",placeholder:"new todo",id:"task",value:this.state.task,onChange:this.handleChange,name:"task"}),i.a.createElement("button",null,"add item"))}}]),e}(n.Component),f=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={todos:[]},a.create=a.create.bind(Object(b.a)(a)),a.remove=a.remove.bind(Object(b.a)(a)),a.update=a.update.bind(Object(b.a)(a)),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"create",value:function(t){this.setState({todos:[].concat(Object(m.a)(this.state.todos),[t])})}},{key:"remove",value:function(t){this.setState({todos:this.state.todos.filter((function(e){return e.id!==t}))})}},{key:"update",value:function(t,e){var a=this.state.todos.map((function(a){return a.id===t?Object(h.a)({},a,{task:e}):a}));this.setState({todos:a})}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return i.a.createElement(v,{key:e.id,id:e.id,task:e.task,removeTodo:t.remove,updateTodo:t.update})}));return i.a.createElement("div",null,i.a.createElement("h1",null,"Hii Todo List"),i.a.createElement(O,{createTodo:this.create}),i.a.createElement("ul",null,e))}}]),e}(n.Component),g=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(f,null)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d2dbd1cb.chunk.js.map