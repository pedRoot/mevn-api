(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"131d":function(t,e,a){},"1dde":function(t,e,a){var o=a("d039"),n=a("b622"),r=a("2d00"),s=n("species");t.exports=function(t){return r>=51||!o((function(){var e=[],a=e.constructor={};return a[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,a){var o=a("861d"),n=a("e8b5"),r=a("b622"),s=r("species");t.exports=function(t,e){var a;return n(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?o(a)&&(a=a[s],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var o=a("c04e"),n=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var s=o(e);s in t?n.f(t,s,r(0,a)):t[s]=a}},a434:function(t,e,a){"use strict";var o=a("23e7"),n=a("23cb"),r=a("a691"),s=a("50c4"),i=a("7b0b"),c=a("65f0"),d=a("8418"),l=a("1dde"),u=a("ae40"),f=l("splice"),m=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,p=9007199254740991,b="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!f||!m},{splice:function(t,e){var a,o,l,u,f,m,g=i(this),C=s(g.length),_=n(t,C),w=arguments.length;if(0===w?a=o=0:1===w?(a=0,o=C-_):(a=w-2,o=v(h(r(e),0),C-_)),C+a-o>p)throw TypeError(b);for(l=c(g,o),u=0;u<o;u++)f=_+u,f in g&&d(l,u,g[f]);if(l.length=o,a<o){for(u=_;u<C-o;u++)f=u+o,m=u+a,f in g?g[m]=g[f]:delete g[m];for(u=C;u>C-o+a;u--)delete g[u-1]}else if(a>o)for(u=C-o;u>_;u--)f=u+o-1,m=u+a-1,f in g?g[m]=g[f]:delete g[m];for(u=0;u<a;u++)g[u+_]=arguments[u+2];return g.length=C-o+a,l}})},ae40:function(t,e,a){var o=a("83ab"),n=a("d039"),r=a("5135"),s=Object.defineProperty,i={},c=function(t){throw t};t.exports=function(t,e){if(r(i,t))return i[t];e||(e={});var a=[][t],d=!!r(e,"ACCESSORS")&&e.ACCESSORS,l=r(e,0)?e[0]:c,u=r(e,1)?e[1]:void 0;return i[t]=!!a&&!n((function(){if(d&&!o)return!0;var t={length:-1};d?s(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,l,u)}))}},b727:function(t,e,a){var o=a("0366"),n=a("44ad"),r=a("7b0b"),s=a("50c4"),i=a("65f0"),c=[].push,d=function(t){var e=1==t,a=2==t,d=3==t,l=4==t,u=6==t,f=5==t||u;return function(m,h,v,p){for(var b,g,C=r(m),_=n(C),w=o(h,v,3),D=s(_.length),x=0,y=p||i,A=e?y(m,D):a?y(m,0):void 0;D>x;x++)if((f||x in _)&&(b=_[x],g=w(b,x,C),t))if(e)A[x]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return x;case 2:c.call(A,b)}else if(l)return!1;return u?-1:d||l?l:A}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},bad7:function(t,e,a){"use strict";var o=a("131d"),n=a.n(o);n.a},c740:function(t,e,a){"use strict";var o=a("23e7"),n=a("b727").findIndex,r=a("44d2"),s=a("ae40"),i="findIndex",c=!0,d=s(i);i in[]&&Array(1)[i]((function(){c=!1})),o({target:"Array",proto:!0,forced:c||!d},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(i)},c93e:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.alert.color},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.alert.text))])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-9"},[a("h3",{staticClass:"my-4"},[t._v("Listado de Notas")]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.notas,(function(e,o){return a("tr",{key:o},[a("td",{staticClass:"text-left"},[t._v(t._s(e.nombre))]),a("td",{staticClass:"text-left"},[t._v(t._s(e.descripcion))]),a("td",[a("b-icon",{staticClass:"mousePointer",attrs:{icon:"trash-fill",variant:"danger"},on:{click:function(a){return t.removeNota(e._id)}}}),a("b-icon",{staticClass:"mousePointer",attrs:{icon:"pencil",variant:"info"},on:{click:function(a){return t.availableForm(e)}}})],1)])})),0)])]),a("div",{staticClass:"col-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.modCreate?a("a",{staticClass:"btn btn-primary my-4",attrs:{href:"#"},on:{click:function(e){return t.availableForm()}}},[t._v("Nueva nota")]):a("a",{staticClass:"btn btn-warning my-4",attrs:{href:"#"}},[t._v("Editar nota")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.sendForm(t.formData)}}},[a("fieldset",{attrs:{id:"formData",disabled:""}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nombre,expression:"formData.nombre"}],staticClass:"form-control my-3",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.formData.nombre},on:{input:function(e){e.target.composing||t.$set(t.formData,"nombre",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.descripcion,expression:"formData.descripcion"}],staticClass:"form-control my-3",attrs:{type:"text",placeholder:"Description",rows:"5"},domProps:{value:t.formData.descripcion},on:{input:function(e){e.target.composing||t.$set(t.formData,"descripcion",e.target.value)}}})]),t.modCreate?a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"createOtherNota"}}),a("label",{staticClass:"form-check-label",attrs:{for:"createOtherNota"}},[t._v("Crear otra nota")])]):t._e(),a("b-button",{staticClass:"btn-danger my-3 mx-2",on:{click:function(e){return t.availableForm()}}},[t._v("Cancelar")]),a("b-button",{staticClass:"btn-success my-3",attrs:{type:"submit"}},[t._v("Enviar")])],1)])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:".thead-light"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Nombre")]),a("th",{attrs:{scope:"col"}},[t._v("Descripcion")]),a("th",{attrs:{scope:"col"}})])])}],r=(a("c740"),a("a434"),{data:function(){return{notas:[],dismissSecs:5,modCreate:!0,dismissCountDown:0,alert:{color:"",text:""},formData:{id:"",nombre:"",descripcion:""}}},created:function(){this.getAllNotas()},methods:{availableForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.modCreate=!t;var e=document.getElementById("formData").disabled;document.getElementById("formData").disabled=!e,this.formData.id="",this.formData.nombre="",this.formData.descripcion="",t&&(this.formData.id=t._id,this.formData.nombre=t.nombre,this.formData.descripcion=t.descripcion)},showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"danger",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.alert.color=t,this.alert.text=e,this.activateAlert()},getAllNotas:function(){var t=this;this.axios.get("/notas").then((function(e){t.notas=e.data.notas})).catch((function(t){console.log(t.response)}))},sendForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 0==this.formData.nombre.length?(this.showAlert("danger","El nombre es requerido."),!1):this.modCreate?this.createNota():this.editNota(t)},createNota:function(){var t=this;if(0==this.formData.nombre.length)return this.showAlert("danger","No podemos crear una nota sin nombre."),!1;this.axios.post("/nota",this.formData).then((function(e){t.notas.push(e.data.nota),t.formData.nombre="",t.formData.descripcion="",document.getElementById("createOtherNota").checked||(document.getElementById("formData").disabled=!0),t.showAlert("success","Nota creada con exito !!!")})).catch((function(e){var a=e.response.data.err._message?e.response.data.err._message:"No se ha podido crear la nota!!!";t.showAlert("danger",a)}))},removeNota:function(t){var e=this;this.axios.delete("/nota/".concat(t)).then((function(t){var a=e.notas.findIndex((function(e){return e._id===t.data.nota._id}));e.notas.splice(a,1),e.showAlert("success","Nota eliminada !!!")})).catch((function(t){var a=t.response.data.err._message?t.response.data.err._message:"Disculpa, tenemos problemas borrando esta nota!!!";e.showAlert("danger",a)}))},editNota:function(t){var e=this;this.axios.put("/nota/".concat(t.id),t).then((function(t){var a=e.notas.findIndex((function(e){return e._id===t.data.nota._id}));e.notas[a].nombre=t.data.nota.nombre,e.notas[a].descripcion=t.data.nota.descripcion,e.availableForm(),e.showAlert("success","Nota editada !!!")})).catch((function(t){var a=t.response.data.err._message?t.response.data.err._message:"Disculpa, tenemos problemas editando esta nota!!!";e.showAlert("danger",a)}))},countDownChanged:function(t){this.dismissCountDown=t},activateAlert:function(){this.dismissCountDown=this.dismissSecs}}}),s=r,i=(a("bad7"),a("2877")),c=Object(i["a"])(s,o,n,!1,null,"abbe1d34",null);e["default"]=c.exports},e8b5:function(t,e,a){var o=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},f820:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],r=a("2877"),s={},i=Object(r["a"])(s,o,n,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=about.14706e9f.js.map