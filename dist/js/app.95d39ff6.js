(function(t){function e(e){for(var o,l,r=e[0],s=e[1],u=e[2],c=0,f=[];c<r.length;c++)l=r[c],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},i={app:0},a=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("To-Do-Lists")]),n("to-do-form",{on:{"todo-added":t.addToDo}}),n("h2",{ref:"listSummary",attrs:{id:"list-summary",tabindex:"-1"}},[t._v(t._s(t.listSummary))]),n("ul",{staticClass:"stack-large",attrs:{"aria-labelledby":"list-summary"}},t._l(t.ToDoItems,(function(e){return n("li",{key:e.id},[n("to-do-item",{attrs:{label:e.label,done:e.done,id:e.id},on:{"checkbox-changed":function(n){return t.updateDoneStatus(e.id)},"item-deleted":function(n){return t.deleteToDo(e.id)},"item-edited":function(n){return t.editToDo(e.id,n)}}})],1)})),0)],1)},a=[],l=(n("99af"),n("4de4"),n("7db0"),n("c740"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"custom-checkbox"},[n("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:t.id},domProps:{checked:t.isDone},on:{change:function(e){return t.$emit("checkbox-changed")}}}),n("label",{staticClass:"checkbox-label",attrs:{for:t.id}},[t._v(t._s(t.label))])]),t.isEditing?n("to-do-item-edit-form",{attrs:{id:t.id,label:t.label},on:{"item-edited":t.itemEdited,"edit-cancelled":t.editCancelled}}):n("div",{staticClass:"btn-group"},[n("button",{ref:"editButton",staticClass:"btn",attrs:{type:"button"},on:{click:t.toggleToItemEditForm}},[t._v(" Edit "),n("span",{staticClass:"visually-hidden"},[t._v(t._s(t.label))])]),n("button",{staticClass:"btn btn__danger",attrs:{type:"button"},on:{click:t.deleteToDo}},[t._v(" Delete "),n("span",{staticClass:"visually-hidden"},[t._v(t._s(t.label))])])])],1)}),r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"stack-small",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",[n("label",{staticClass:"edit-label"},[t._v('Edit Name for "'+t._s(t.label)+'"')]),n("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.newLabel,expression:"newLabel",modifiers:{lazy:!0,trim:!0}}],ref:"labelInput",attrs:{id:t.id,type:"text",autocomplete:"off"},domProps:{value:t.newLabel},on:{change:function(e){t.newLabel=e.target.value.trim()},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"btn-group"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.onCancel}},[t._v(" Cancel "),n("span",{staticClass:"visually-hidden"},[t._v("editing "+t._s(t.label))])]),n("button",{staticClass:"btn btn__primary",attrs:{type:"submit"}},[t._v(" Save "),n("span",{staticClass:"visually-hidden"},[t._v("edit for "+t._s(t.label))])])])])},u=[],d={props:{label:{type:String,required:!0},id:{type:String,required:!0}},data:function(){return{newLabel:this.label}},methods:{onSubmit:function(){this.newLabel&&this.newLabel!==this.label&&this.$emit("item-edited",this.newLabel)},onCancel:function(){this.$emit("edit-cancelled")}},mounted:function(){var t=this.$refs.labelInput;t.focus()}},c=d,f=(n("7e50"),n("2877")),b=Object(f["a"])(c,s,u,!1,null,"7bf4ca44",null),m=b.exports,p={components:{ToDoItemEditForm:m},props:{label:{required:!0,type:String},done:{default:!1,type:Boolean},id:{required:!0,type:String}},data:function(){return{isEditing:!1}},methods:{deleteToDo:function(){this.$emit("item-deleted")},toggleToItemEditForm:function(){console.log(this.$refs.editButton),this.isEditing=!0},itemEdited:function(t){this.$emit("item-edited",t),this.isEditing=!1,this.focusOnEditButton()},editCancelled:function(){this.isEditing=!1,this.focusOnEditButton()},focusOnEditButton:function(){var t=this;this.$nextTick((function(){var e=t.$refs.editButton;e.focus()}))}},computed:{isDone:function(){return this.done}}},h=p,v=(n("f586"),Object(f["a"])(h,l,r,!1,null,"0e96d81c",null)),_=v.exports,y=n("f5cb"),g=n.n(y),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"label"}],staticClass:"input__lg",attrs:{type:"text",name:"new-todo",id:"new-todo-input",autocomplete:"off"},domProps:{value:t.label},on:{input:function(e){e.target.composing||(t.label=e.target.value)}}}),n("button",{staticClass:"btn btn__primary btn__lg",attrs:{type:"submit"}},[t._v("Add")])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"label-wrapper"},[n("label",{staticClass:"label__lg",attrs:{for:"new-todo-input"}},[t._v(" What needs to be done? ")])])}],T={methods:{onSubmit:function(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="")}},data:function(){return{label:""}}},w=T,x=Object(f["a"])(w,D,C,!1,null,null,null),E=x.exports,S={name:"App",components:{ToDoItem:_,ToDoForm:E},data:function(){return{ToDoItems:[{id:g()("todo-"),label:"Learn Vue",done:!1},{id:g()("todo-"),label:"Create a Vue project",done:!0},{id:g()("todo-"),label:"Have fun",done:!0},{id:g()("todo-"),label:"Create a to-do list",done:!1}]}},methods:{addToDo:function(t){this.ToDoItems.push({id:g()("todo-"),label:t,done:!1})},updateDoneStatus:function(t){var e=this.ToDoItems.find((function(e){return e.id===t}));e.done=!e.done},deleteToDo:function(t){var e=this.ToDoItems.findIndex((function(e){return e.id===t}));this.ToDoItems.splice(e,1),this.$refs.listSummary.focus()},editToDo:function(t,e){var n=this.ToDoItems.find((function(e){return e.id===t}));n.label=e}},computed:{listSummary:function(){var t=this.ToDoItems.filter((function(t){return t.done})).length;return"".concat(t," out of ").concat(this.ToDoItems.length," items completed")}}},O=S,$=(n("034f"),Object(f["a"])(O,i,a,!1,null,null,null)),k=$.exports;n("b059");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(k)}}).$mount("#app")},"7e50":function(t,e,n){"use strict";n("e8db")},"85ec":function(t,e,n){},b059:function(t,e,n){},da72:function(t,e,n){},e8db:function(t,e,n){},f586:function(t,e,n){"use strict";n("da72")}});
//# sourceMappingURL=app.95d39ff6.js.map