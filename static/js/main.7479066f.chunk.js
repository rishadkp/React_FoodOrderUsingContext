(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,r){e.exports={form:"Checkout_form__2Kcrj",control:"Checkout_control__3Vt4x",actions:"Checkout_actions__3wiTF",submit:"Checkout_submit__1cYfk",invalid:"Checkout_invalid__12rzf"}},,,,function(e,t,r){e.exports={"cart-items":"Cart_cart-items__WwoGU",total:"Cart_total__ZHYKK",actions:"Cart_actions__1eiAd","button--alt":"Cart_button--alt__2A036",button:"Cart_button__1TQNx"}},function(e,t,r){e.exports={ordersPage:"Orders_ordersPage__23cph",card:"Orders_card__3hv29",header:"Orders_header__uTGHZ",arrow:"Orders_arrow__20Opg",navigation:"Orders_navigation__2gXkm",orders:"Orders_orders__2Fzy0",emptyOrders:"Orders_emptyOrders__1ZsL6"}},,,,function(e,t,r){e.exports={"cart-item":"CartItem_cart-item__3KLBu",summary:"CartItem_summary__1ZxZM",price:"CartItem_price__2bRv3",amount:"CartItem_amount__k0_O0",actions:"CartItem_actions__HCfX1"}},function(e,t,r){e.exports={order:"Order_order__1Hbio",orderUserDetail:"Order_orderUserDetail__4hWwl",status:"Order_status__3GO2F",time:"Order_time__-l7Qp",placed:"Order_placed__3MdTO",orderDetails:"Order_orderDetails__1uOyj"}},,function(e,t,r){e.exports={button:"HeaderCartButton_button__nthPD",icon:"HeaderCartButton_icon__12yi5",badge:"HeaderCartButton_badge__14uSN",bump:"HeaderCartButton_bump__bqhQ6"}},function(e,t,r){e.exports={button:"HeaderOrdersButton_button__2IsFE",icon:"HeaderOrdersButton_icon__rifeM",badge:"HeaderOrdersButton_badge__QfZqF",bump:"HeaderOrdersButton_bump__1xh0q"}},,,function(e,t,r){e.exports={meal:"MealItem_meal__hGcYL",description:"MealItem_description__1k6ta",price:"MealItem_price__2XfgL"}},function(e,t,r){e.exports={meals:"AvailableMeals_meals__4ombN","meals-appear":"AvailableMeals_meals-appear__3w7Pk",mealsLoading:"AvailableMeals_mealsLoading__2lBsN",MealsError:"AvailableMeals_MealsError__g1y6B"}},function(e,t,r){e.exports={backdrop:"Modal_backdrop__19g_t",modal:"Modal_modal__1PgNX","slide-down":"Modal_slide-down__1f4us"}},,function(e,t,r){e.exports={header:"Header_header__lX64y","main-image":"Header_main-image__1RN9d"}},,,,function(e,t,r){e.exports={summary:"MealsSummary_summary__1tW_8"}},function(e,t,r){e.exports={card:"Card_card__qax6k"}},function(e,t,r){e.exports={input:"Input_input__jDLe9"}},function(e,t,r){e.exports={form:"MealItemForm_form__3gU5x"}},function(e,t,r){e.exports={UserAdress:"UserAdress_UserAdress__3gRlo"}},,function(e,t,r){e.exports={orderItems:"OrderItems_orderItems__2nI_G"}},,,,,,,,,,function(e,t,r){},,,,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(31),c=r.n(n),a=(r(48),r(2)),s=r(1),i=r.n(s),o=r(39),l=r(3),d=r(0),j=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),b=r(20),m=r.n(b),O=function(e){var t=Object(s.useState)(!1),r=Object(a.a)(t,2),n=r[0],c=r[1],i=Object(s.useContext)(u).items,o=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(m.a.button," ").concat(n?m.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(d.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(d.jsx)("span",{className:m.a.icon,children:Object(d.jsx)(j,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:m.a.badge,children:o})]})},h=r(9),x=r(15),f=r(21),p=r.n(f),_=function(e){var t=Object(s.useState)("0"),r=Object(a.a)(t,2),n=r[0],c=r[1],i=Object(s.useState)(!1),o=Object(a.a)(i,2),l=o[0],j=o[1],u="".concat(p.a.badge," ").concat(l?p.a.bump:"");return Object(s.useEffect)((function(){var e=function(){var e=Object(x.a)(Object(h.a)().mark((function e(){var t,r,n,a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-beba8-default-rtdb.firebaseio.com/orders.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Not found");case 5:return e.next=7,t.json();case 7:for(a in r=e.sent,n=[],r)n.push({id:a,orderItems:r[a].orderItems,user:r[a].user,time:r[a].time});c(n.length);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){console.log(e.message)})),j(!0);var t=setTimeout((function(){j(!1)}),300);return function(){clearTimeout(t)}}),[e.cartIsShown]),Object(d.jsx)("a",{href:"/Orders",children:Object(d.jsxs)("button",{className:p.a.button,children:[Object(d.jsx)("span",{className:p.a.icon}),Object(d.jsx)("span",{children:"Orders"}),Object(d.jsx)("span",{className:u,children:n})]})})},v=r.p+"static/media/meals.2971f633.jpg",C=r(28),N=r.n(C),g=function(e){return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsxs)("header",{className:N.a.header,children:[Object(d.jsx)("h1",{children:"Foodies App"}),Object(d.jsx)(_,{cartIsShown:e.cartIsShown}),Object(d.jsx)(O,{onClick:e.onShowCart})]}),Object(d.jsx)("div",{className:N.a["main-image"],children:Object(d.jsx)("img",{src:v,alt:"A table full of delicious food!"})})]})},y=r(32),I=r.n(y),w=function(){return Object(d.jsxs)("section",{className:I.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},k=r(33),A=r.n(k),S=function(e){var t=e.className+" "+A.a.card;return Object(d.jsx)("div",{className:t,children:e.children})},M=r(11),P=r(34),H=r.n(P),F=i.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:H.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(M.a)({ref:t},e.input))]})})),E=r(35),D=r.n(E),R=function(e){var t=Object(s.useState)(!0),r=Object(a.a)(t,2),n=r[0],c=r[1],i=Object(s.useRef)();return Object(d.jsxs)("form",{className:D.a.form,onSubmit:function(t){t.preventDefault();var r=i.current.value,n=+r;0===r.trim().length||n<1||n>5?c(!1):e.onAddToCart(n)},children:[Object(d.jsx)(F,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+ Add"}),!n&&Object(d.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},T=r(24),B=r.n(T),L=function(e){var t=Object(s.useContext)(u),r="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:B.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:B.a.description,children:e.description}),Object(d.jsx)("div",{className:B.a.price,children:r})]}),Object(d.jsx)("div",{children:Object(d.jsx)(R,{onAddToCart:function(r){t.addItem({id:e.id,name:e.name,amount:r,price:e.price})}})})]})},U=r(25),G=r.n(U),Y=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),r=t[0],n=t[1],c=Object(s.useState)(!0),i=Object(a.a)(c,2),o=i[0],l=i[1],j=Object(s.useState)(null),u=Object(a.a)(j,2),b=u[0],m=u[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(x.a)(Object(h.a)().mark((function e(){var t,r,c,a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-beba8-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("something went wrong!");case 5:return e.next=7,t.json();case 7:for(a in r=e.sent,c=[],r)c.push({id:a,name:r[a].name,description:r[a].description,price:r[a].price});n(c),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){l(!1),m(e.message)}))}),[]),o)return Object(d.jsx)("section",{className:G.a.mealsLoading,children:Object(d.jsx)("p",{children:"Loading......."})});if(b)return Object(d.jsx)("section",{className:G.a.MealsError,children:Object(d.jsx)("p",{children:"Http error"})});var O=r.map((function(e){return Object(d.jsx)(L,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:G.a.meals,children:Object(d.jsx)(S,{children:Object(d.jsx)("ul",{children:O})})})},Z=function(){return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(w,{}),Object(d.jsx)(Y,{})]})},q=r(22),z=r.n(q),Q=r(26),X=r.n(Q),$=function(e){return Object(d.jsx)("div",{className:X.a.backdrop,onClick:e.onClose})},K=function(e){return Object(d.jsx)("div",{className:X.a.modal,children:Object(d.jsx)("div",{className:X.a.content,children:e.children})})},V=document.getElementById("overlays"),J=function(e){return Object(d.jsxs)(s.Fragment,{children:[z.a.createPortal(Object(d.jsx)($,{onClose:e.onClose}),V),z.a.createPortal(Object(d.jsx)(K,{children:e.children}),V)]})},W=r(17),ee=r.n(W),te=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:ee.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:ee.a.summary,children:[Object(d.jsx)("span",{className:ee.a.price,children:t}),Object(d.jsxs)("span",{className:ee.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:ee.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},re=r(12),ne=r.n(re),ce=r(8),ae=r.n(ce),se=function(e){return""===e.trim()},ie=function(e){var t=Object(s.useState)({name:!0,city:!0,street:!0,postalCode:!0}),r=Object(a.a)(t,2),n=r[0],c=r[1],i=Object(s.useContext)(u),o=Object(s.useRef)(),l=Object(s.useRef)(),j=Object(s.useRef)(),b=Object(s.useRef)(),m=!1,O="".concat(ae.a.control," \n         ").concat(n.name?"":ae.a.invalid),h="".concat(ae.a.control," \n        ").concat(n.street?"":ae.a.invalid),x="".concat(ae.a.control," \n        ").concat(n.city?"":ae.a.invalid),f="".concat(ae.a.control," \n        ").concat(n.postalCode?"":ae.a.invalid);return Object(d.jsxs)("form",{className:ae.a.form,onSubmit:function(t){t.preventDefault();var r=o.current.value,n=l.current.value,a=j.current.value,s=b.current.value,d=!se(r),u=!se(n),O=!se(a),h=6===s.trim().length;c({name:d,street:u,city:O,postalCode:h}),(m=d&&u&&h&&O)&&(e.onConfirm({name:r,street:n,city:a,postalCode:s}),m&&(i.clearCart(),e.onSuccesSubmit()))},children:[Object(d.jsxs)("div",{className:O,children:[Object(d.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(d.jsx)("input",{type:"text",id:"name",ref:o}),!n.name&&Object(d.jsx)("p",{children:"please enter name"})]}),Object(d.jsxs)("div",{className:h,children:[Object(d.jsx)("label",{htmlFor:"street",children:"Street"}),Object(d.jsx)("input",{type:"text",id:"street",ref:l}),!n.street&&Object(d.jsx)("p",{children:"Please enter street details"})]}),Object(d.jsxs)("div",{className:f,children:[Object(d.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(d.jsx)("input",{type:"text",id:"postal",ref:b}),!n.postalCode&&Object(d.jsx)("p",{children:"Please enter postal code"})]}),Object(d.jsxs)("div",{className:x,children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{type:"text",id:"city",ref:j}),!n.city&&Object(d.jsx)("p",{children:"please enter the city name"})]}),Object(d.jsxs)("div",{className:ae.a.actions,children:[Object(d.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(d.jsx)("button",{className:ae.a.submit,type:"submit",children:"Confirm"})]})]})},oe=function(e){var t=Object(s.useState)(!1),r=Object(a.a)(t,2),n=r[0],c=r[1],i=Object(s.useContext)(u),o="$".concat(i.totalAmount.toFixed(2)),l=i.items.length>0,j=function(e){i.removeItem(e)},b=function(e){i.addItem(e)},m=Object(d.jsx)("ul",{className:ne.a["cart-items"],children:i.items.map((function(e){return Object(d.jsx)(te,{name:e.name,amount:e.amount,price:e.price,onRemove:j.bind(null,e.id),onAdd:b.bind(null,e)},e.id)}))}),O=Object(d.jsxs)("div",{className:ne.a.actions,children:[Object(d.jsx)("button",{className:ne.a.button,onClick:function(){i.clearCart({})},children:"Clear Cart"}),Object(d.jsx)("button",{className:ne.a["button--alt"],onClick:e.onClose,children:"Close"}),l&&Object(d.jsx)("button",{className:ne.a.button,onClick:function(){c(!0)},children:"Order"})]});return Object(d.jsxs)(J,{onClose:e.onClose,children:[m,Object(d.jsxs)("div",{className:ne.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:o})]}),n&&Object(d.jsx)(ie,{onConfirm:function(e){var t=(new Date).toLocaleString();fetch("https://react-http-beba8-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:e,time:t,orderItems:i.items})})},onCancel:e.onClose,onSuccesSubmit:e.onClose}),!n&&O]})},le=r(13),de=r.n(le),je=r(18),ue=r.n(je),be=r(36),me=r.n(be),Oe=function(e){return Object(d.jsxs)("div",{className:me.a.UserAdress,children:[Object(d.jsx)("div",{children:"Name : "+e.user.name}),Object(d.jsx)("div",{children:"City : "+e.user.city}),Object(d.jsx)("div",{children:"PostalCode : "+e.user.postalCode})]})},he=r(37),xe=r(38),fe=r.n(xe),pe=function(e){var t,r=0,n=Object(he.a)(e.orderItems);try{for(n.s();!(t=n.n()).done;){var c=t.value;r+=c.price*c.amount}}catch(s){n.e(s)}finally{n.f()}var a=e.orderItems.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsxs)("td",{children:["$ ",e.price]}),Object(d.jsx)("td",{children:e.amount})]},e.id)}));return console.log(r),Object(d.jsx)("div",{className:fe.a.orderItems,children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:" Item Name"}),Object(d.jsx)("th",{children:"Price per Item"}),Object(d.jsx)("th",{children:"Quantity"})]})}),Object(d.jsx)("tbody",{children:a}),Object(d.jsxs)("tfoot",{children:[Object(d.jsx)("td",{colSpan:2,children:"Total"}),Object(d.jsxs)("td",{children:["$ ",r]})]})]})})},_e=function(e){var t=Object(s.useState)(!1),r=Object(a.a)(t,2),n=r[0],c=r[1],i=e.id.slice(1);return Object(d.jsx)("li",{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:ue.a.order,onClick:function(){n||c(!0),n&&c(!1)},children:[Object(d.jsxs)("div",{className:ue.a.orderUserDetail,children:[Object(d.jsx)("div",{children:"Order ID : "+i}),Object(d.jsx)(Oe,{user:e.user})]}),Object(d.jsxs)("div",{className:ue.a.status,children:[Object(d.jsx)("div",{children:"STATUS"}),Object(d.jsx)("div",{className:ue.a.placed,children:"Placed"})]}),Object(d.jsxs)("div",{className:ue.a.time,children:[Object(d.jsx)("i",{children:"Ordered on : "}),e.time]})]}),n&&Object(d.jsx)("div",{children:Object(d.jsx)(pe,{orderItems:e.orderItems})})]})})},ve=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),r=t[0],n=t[1],c=Object(s.useState)(!1),i=Object(a.a)(c,2),o=i[0],l=i[1];Object(s.useEffect)((function(){var e=function(){var e=Object(x.a)(Object(h.a)().mark((function e(){var t,r,c,a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-beba8-default-rtdb.firebaseio.com/orders.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Not found");case 5:return e.next=7,t.json();case 7:for(a in r=e.sent,c=[],r)c.push({id:a,orderItems:r[a].orderItems,user:r[a].user,time:r[a].time});n(c),c.length||l(!0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){console.log(e.message)}))}),[]);var j=r.sort().reverse().map((function(e){return Object(d.jsx)(_e,{id:e.id,user:e.user,orderItems:e.orderItems,time:e.time},e.id)}));return Object(d.jsxs)("div",{className:de.a.ordersPage,children:[Object(d.jsx)("div",{className:de.a.header,children:Object(d.jsx)("h1",{children:"Orders"})}),Object(d.jsx)("div",{className:de.a.navigation,children:Object(d.jsx)("a",{href:"/",children:"Go to booking page"})}),Object(d.jsx)("div",{className:de.a.orders,children:Object(d.jsxs)(S,{className:de.a.card,children:[Object(d.jsx)("ol",{children:j}),o&&Object(d.jsx)("h3",{className:de.a.emptyOrders,children:"No Orders to show"})]})})]})},Ce=r(16),Ne={items:[],totalAmount:0},ge=function(e,t){if("ADD"===t.type){var r,n=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),a=e.items[c];if(a){var s=Object(M.a)(Object(M.a)({},a),{},{amount:a.amount+t.item.amount});(r=Object(Ce.a)(e.items))[c]=s}else r=e.items.concat(t.item);return{items:r,totalAmount:n,orderPlaced:0}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(M.a)(Object(M.a)({},l),{},{amount:l.amount-1});(i=Object(Ce.a)(e.items))[o]=j}return{items:i,totalAmount:d,orderPlaced:0}}return t.type,Ne},ye=function(e){var t=Object(s.useReducer)(ge,Ne),r=Object(a.a)(t,2),n=r[0],c=r[1],i={items:n.items,totalAmount:n.totalAmount,orderPlaced:n.orderPlaced,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(d.jsx)(u.Provider,{value:i,children:e.children})},Ie=function(){var e=120034701;console.log("number",e);var t=e.toString();console.log("stringNumber",t);var r=t.split(""),n=r.filter((function(e){return"0"!==e})),c=r.filter((function(e){return"0"===e})),a=[].concat(Object(Ce.a)(n),Object(Ce.a)(c));console.log(a.join(""))};var we=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),r=t[0],n=t[1];return Ie(),Object(d.jsx)(o.a,{children:Object(d.jsx)(ye,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsxs)(l.a,{path:"/",exact:!0,children:[r&&Object(d.jsx)(oe,{onClose:function(){n(!1)}}),Object(d.jsx)(g,{onShowCart:function(){n(!0)},cartIsShown:r}),Object(d.jsx)("main",{children:Object(d.jsx)(Z,{})})]}),Object(d.jsx)(l.a,{path:"/Orders",children:Object(d.jsx)(ve,{})})]})})})};c.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(we,{}))}],[[57,1,2]]]);
//# sourceMappingURL=main.7479066f.chunk.js.map