(this.webpackJsonplimitlist=this.webpackJsonplimitlist||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(4),r=a.n(c),l=(a(25),a(26),a(2)),s=function(e,t){if(!e||!t)return"";var a=Number(e.replace("$","")),n=Number(t);return a&&n?(a*n).toFixed(2):"0"},u=function(e){return e&&!isNaN(Number(e))?"$".concat(Number(e).toFixed(2)):""},o=(a(27),a(16)),m=a.n(o),d=a(8),f=a(7),v=a(6),p=a(17),b=a.n(p),E=a(18),g=a.n(E),N=function(e){return i.a.createElement(b.a,Object.assign({type:"text",mask:g()({prefix:"$",suffix:"",includeThousandsSeparator:!0,thousandsSeparatorSymbol:",",allowDecimal:!0,decimalSymbol:".",decimalLimit:2,integerLimit:7,allowNegative:!1,allowLeadingZeroes:!1}),inputMode:"decimal",value:e.value},e))},h=(a(30),function(e){var t=Object(n.useState)(e.editing),a=Object(l.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(e.value),m=Object(l.a)(o,2),d=m[0],p=m[1],b=Object(n.useState)(),E=Object(l.a)(b,2),g=E[0],h=E[1];Object(n.useEffect)((function(){h(s(d.price,d.quantity))}),[d]);var y=function(e,t){p((function(a){return Object(v.a)({},a,Object(f.a)({},e,t))}))},j=i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",className:"input name",placeholder:"Product Name",value:d.name,onChange:function(e){y("name",e.target.value)}})),i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",className:"input quantity",placeholder:"Quantity",inputMode:"decimal",value:d.quantity,onChange:function(e){y("quantity",Number(e.target.value)?Number(e.target.value).toString():"0")}})),i.a.createElement("div",{className:"control"},i.a.createElement(N,{className:"input price",placeholder:"Price",value:d.price?d.price:"",onChange:function(e){y("price",e.target.value)}})),i.a.createElement("div",{className:"control"},i.a.createElement(N,{className:"input total is-static",value:g,readOnly:!0}))),i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{className:"button is-primary",disabled:!d.name&&!d.price&&!d.quantity,onClick:function(t){t.stopPropagation(),e.onChange(Object(v.a)({},d,{price:d.price?d.price.replace("$",""):""})),r(!1)}},i.a.createElement("span",{className:"icon is-small"},i.a.createElement("i",{className:"fas fa-check"})),i.a.createElement("span",null,"Save")),i.a.createElement("button",{className:"button",onClick:function(t){t.stopPropagation(),p(e.value),r(!1),""!==e.value.name||""!==e.value.price&&void 0!==e.value.price||""!==e.value.quantity&&void 0!==e.value.quantity||e.onDelete(d)}},"Cancel"),i.a.createElement("button",{className:"button is-danger is-outlined is-pulled-right",onClick:function(t){e.onDelete(d)}},i.a.createElement("span",null,"Delete"),i.a.createElement("span",{className:"icon is-small"},i.a.createElement("i",{className:"fas fa-times"}))))),O=i.a.createElement("div",{className:"columns is-mobile clickable"},i.a.createElement("div",{className:"column"},e.value.name),i.a.createElement("div",{className:"column is-narrow"},e.value.quantity),i.a.createElement("div",{className:"column is-narrow"},u(e.value.price)),i.a.createElement("div",{className:"column is-narrow"},u(s(e.value.price,e.value.quantity)))),w=c?j:O;return i.a.createElement("div",{className:e.className,onClick:function(){return r(!0)}},w)}),y=Object(d.b)((function(e){return i.a.createElement(h,e)})),j=Object(d.a)((function(e){return i.a.createElement("div",{className:"list-item"},e.items.map((function(t,a){return i.a.createElement(y,{className:m()("list-item",{"select-none":e.isSorting}),key:t.id,index:a,value:t,editing:e.editingItemIds.includes(t.id),onChange:e.onChange,onDelete:e.onDelete})})))})),O=function(e){var t,a;return{id:e.id,name:e.name,quantity:null===(t=e.quantity)||void 0===t?void 0:t.toString(),price:null===(a=e.price)||void 0===a?void 0:a.toFixed(2)}},w=function(e){return{id:e.id,name:e.name,quantity:e.quantity?Number(e.quantity):null,price:e.price?Number(e.price):null}},I=function(e){var t,a=Object(n.useState)(!1),c=Object(l.a)(a,2),r=c[0],u=c[1],o=(null===(t=e.items)||void 0===t?void 0:t.map(O))||[],m=o?o.map((function(e){return Number(s(e.price,e.quantity))})).reduce((function(e,t){return e+t}),0).toFixed(2):0;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"list"},i.a.createElement("div",{className:"list-item has-background-white-ter"},i.a.createElement("div",{className:"has-text-right"},i.a.createElement("div",{className:"input is-static is-paddingless"},"$",m))),o.length>0&&i.a.createElement(j,{items:o,editingItemIds:e.editingItemIds||[],onChange:function(t){e.updateItem(w(t))},onDelete:function(t){e.deleteItem(w(t))},isSorting:r,pressDelay:200,onSortStart:function(){u(!0)},onSortEnd:function(t){var a=t.oldIndex,n=t.newIndex;e.moveItem(a,n),u(!1)},helperClass:"sorting"}),o.length<1&&i.a.createElement("div",{className:"section has-text-centered"},i.a.createElement("div",null,"Your list is empty."),i.a.createElement("span",null,"Add your first item "),i.a.createElement("i",{className:"fas fa-arrow-down"})),i.a.createElement("div",{className:"list-item"},i.a.createElement("button",{className:"button is-small is-fullwidth",onClick:e.addItem},i.a.createElement("span",{className:"icon"},i.a.createElement("i",{className:"fas fa-plus"})),i.a.createElement("span",null,"Add Item")))))},x=a(10),S=a(5),k=a.n(S),C=a(19),q=a.n(C),L=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),u=Object(l.a)(s,2),o=u[0],m=u[1],d=Object(n.useState)(!1),f=Object(l.a)(d,2),p=f[0],b=f[1],E=Object(n.useCallback)((function(){!function(){var t;k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.a.awrap(e.storage.Lists.find(e.listId));case 2:if(a.t0=a.sent,a.t0){a.next=5;break}a.t0=[];case 5:t=a.t0,r(t),b(!0);case 8:case"end":return a.stop()}}))}()}),[e.listId,e.storage.Lists]);Object(n.useEffect)(E,[e.listId]);var g=Object(n.useCallback)((function(){p&&e.storage.Lists.set(e.listId,c)}),[p,c,e.listId,e.storage.Lists]);Object(n.useEffect)(g,[c]);var N=function(){var e={id:q()(),name:"",price:null,quantity:null};r((function(t){return[].concat(Object(x.a)(t),[e])})),m((function(t){return[].concat(Object(x.a)(t),[e.id])}))},h=function(e){r((function(t){return t.filter((function(t){return e.id!==t.id}))})),o.includes(e.id)&&m((function(t){return t.filter((function(t){return t!==e.id}))}))},y=function(e){r((function(t){return t.map((function(t){return e.id===t.id?Object(v.a)({},e):t}))})),o.includes(e.id)&&m((function(t){return t.filter((function(t){return t!==e.id}))}))},j=function(e,t){r((function(a){return i=e,c=t,function(e,t,a){var n=a<0?e.length+a:a,i=e.splice(t,1)[0];e.splice(n,0,i)}(n=(n=a).slice(),i,c),n;var n,i,c}))},O=i.a.Children.map(e.children,(function(e){return i.a.cloneElement(e,{items:c,editingItemIds:o,addItem:N,deleteItem:h,updateItem:y,moveItem:j})}));return i.a.createElement(i.a.Fragment,null,O)},D=a(9),F=a.n(D),$={Lists:{find:function(e){var t;return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=F()(e)){a.next=3;break}return a.abrupt("return",[]);case 3:return a.abrupt("return",t);case 4:case"end":return a.stop()}}))},set:function(e,t){return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:F()(e,t);case 1:case"end":return a.stop()}}))}}},P=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("div",{className:"navbar-item logo"},"Limitlist"))),i.a.createElement("div",{className:"section window-view-height"},i.a.createElement("div",{className:"container"},i.a.createElement(L,{listId:"itemList",storage:$},i.a.createElement(I,null)))),i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("a",{href:"https://notabug.org/jimmyh/limitlist"},"Source"),i.a.createElement("span",null,"\xa0Copyright \xa9 2020 Jimmy Hogoboom"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.0151cb6a.chunk.js.map