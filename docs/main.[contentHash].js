(()=>{"use strict";function c(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function d(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function b(e,a,b){return a&&d(e.prototype,a),b&&d(e,b),e}function e(i,a){var b;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=f(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var j,k=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return k=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{k||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function f(d,e){if(d){if("string"==typeof d)return g(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?g(d,e):void 0}}function g(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function h(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function i(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function j(d,a,b){return a&&i(d.prototype,a),b&&i(d,b),d}function k(i,a){var b;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=l(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var j,f=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return f=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{f||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function l(d,e){if(d){if("string"==typeof d)return m(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?m(d,e):void 0}}function m(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}var a={};(()=>{a.d=(b,c)=>{for(var d in c)a.o(c,d)&&!a.o(b,d)&&Object.defineProperty(b,d,{enumerable:!0,get:c[d]})}})(),(()=>{a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})();a.d({},{L:()=>v});var n=function(){function h(a){c(this,h),this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}return b(h,null,[{key:"fromJson",value:function(a){var b=a.id,c=a.tarea,d=a.completado,e=a.creado,f=new h(c);return f.id=b,f.completado=d,f.creado=e,f}}]),h}();var o=function(){function b(){h(this,b),this.cargarLocalStorage()}return j(b,[{key:"nuevoTodo",value:function(b){this.todos.push(b),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(c){this.todos=this.todos.filter(function(a){return a.id!=c}),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(f){var a,b=e(this.todos);try{for(b.s();!(a=b.n()).done;){var c=a.value;if(c.id==f){c.completado=!c.completado,this.guardarLocalStorage();break}}}catch(c){b.e(c)}finally{b.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter(function(b){return!b.completado}),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(n.fromJson)}}]),b}();var p=document.querySelector(".todo-list"),q=document.querySelector(".new-todo"),r=document.querySelector(".clear-completed"),s=document.querySelector(".filters"),t=document.querySelectorAll(".filtro"),u=function(d){var a="\n    <li class=\"".concat(d.completado?"completed":"","\" data-id=\"").concat(d.id,"\">\n\t\t\t\t\t\t<div class=\"view\">\n\t\t\t\t\t\t\t<input class=\"toggle\" type=\"checkbox\" ").concat(d.completado?"checked":"",">\n\t\t\t\t\t\t\t<label>").concat(d.tarea," </label>\n\t\t\t\t\t\t\t<button class=\"destroy\"></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input class=\"edit\" value=\"Create a TodoMVC template\">\n\t\t\t\t\t</li> "),b=document.createElement("div");return b.innerHTML=a,p.append(b.firstElementChild),b.firstElementChild};q.addEventListener("keyup",function(c){if(13===c.keyCode&&0<q.value.length){console.log(q.value);var a=new n(q.value);v.nuevoTodo(a),u(a),q.value=""}}),p.addEventListener("click",function(e){var a=e.target.localName,b=e.target.parentElement.parentElement,c=b.getAttribute("data-id");a.includes("input")?(v.marcarCompletado(c),b.classList.toggle("completed")):a.includes("button")&&(v.eliminarTodo(c),p.removeChild(b)),console.log(v)}),r.addEventListener("click",function(){v.eliminarCompletados();for(var c,a=p.children.length-1;0<=a;a--)c=p.children[a],c.classList.contains("completed")&&p.removeChild(c)}),s.addEventListener("click",function(g){var a=g.target.text;if(a){t.forEach(function(b){return b.classList.remove("selected")}),g.target.classList.add("selected");var b,c=k(p.children);try{for(c.s();!(b=c.n()).done;){var d=b.value;d.classList.remove("hidden");var e=d.classList.contains("completed");"Pendientes"===a?e&&d.classList.add("hidden"):"Completados"===a?e||d.classList.add("hidden"):void 0}}catch(b){c.e(b)}finally{c.f()}}});var v=new o;v.todos.forEach(function(b){return u(b)})})();