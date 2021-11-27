(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=n(11),s=n(10),l=n(3),u=n(4),b=n(6),m=n(5),d=n(0);var h=function(t){var e=t.title,n=t.children;return Object(d.jsxs)("section",{children:[e&&Object(d.jsx)("h2",{children:e})," ",n]})},j=n(2),f=n(21),p=(n(17),function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputNameId=Object(f.a)(),t.inputNumberId=Object(f.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:"PhonebookForm",children:[Object(d.jsx)("label",{htmlFor:this.inputNameId,children:"Name"}),Object(d.jsx)("input",{id:this.inputNameId,value:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange}),Object(d.jsx)("label",{htmlFor:this.inputNumberId,children:"Number"}),Object(d.jsx)("input",{id:this.inputNumberId,value:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange}),Object(d.jsx)("button",{className:"Phonebook__btn",type:"submit",disabled:!e||!n,children:"Add contact"})]})}}]),n}(a.Component)),O=p,v=(n(18),function(t){var e=t.filter,n=t.filtered,a=Object(f.a)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:a,children:"Find name"}),Object(d.jsx)("input",{id:a,name:e,type:"text",value:e,onChange:n,className:"inputFilter"})," "]})}),g=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDelete;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:["\ud83d\ude42",n," \ud83d\udcde",a]}),Object(d.jsx)("button",{type:"button",onClick:function(){return c(e)},className:"Contact__btn",children:"Delete"})]})},x=(n(19),function(t){var e=t.contacts,n=t.onDelete;return e.length>0?Object(d.jsx)("ul",{className:"nameList",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsx)("li",{className:"nameItem",children:Object(d.jsx)(g,{name:a,number:c,id:e,onDelete:n})},e)}))}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("p",{children:"No contacts"})})}),C=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.checkNameInBook=function(e){return t.state.contacts.find((function(t){return t.name===e}))},t.formSubmitHandler=function(e){if(t.checkNameInBook(e.name))alert("".concat(e.name," is already in Contactbook!"));else{var n=Object(s.a)({id:Object(f.a)()},e);t.setState((function(t){return{contacts:[n].concat(Object(i.a)(t.contacts))}}))}},t.onChangeFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n.trim()})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("App componentDidMount");var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){console.log("App componentDidUpdate");var n=this.state.contacts;n!==e.contacts&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 contacts, \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e contacts \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"),localStorage.setItem("contacts",JSON.stringify(n)))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(d.jsxs)("div",{className:"Container",children:[Object(d.jsx)(h,{title:"Phonebook",children:Object(d.jsx)(O,{onSubmit:this.formSubmitHandler})}),Object(d.jsxs)(h,{title:"Contacts",children:[Object(d.jsx)(v,{filter:t,filtered:this.onChangeFilter}),Object(d.jsx)(x,{contacts:e,onDelete:this.removeContact})]})]})}}]),n}(a.Component),N=C;o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.14b37f8f.chunk.js.map