(window["webpackJsonpfood-recipe"]=window["webpackJsonpfood-recipe"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),i=a.n(r),o=(a(13),a(14),a(3)),l=a.n(o),s=a(7),u=a(1),m=(a(16),a(4)),p=a.n(m),f=function(e){var t=e.title,a=e.image,n=e.ingredients;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("h3",null,"Recipe"),c.a.createElement("ul",null,n.map(function(e){return c.a.createElement("li",{key:e.weight},e.text)})),c.a.createElement("img",{className:p.a.image,src:a,alt:"Food Recipe"}))},h=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/food-recipe"}),t=e.APP_ID,a=e.APP_KEY,r=Object(n.useState)([]),i=Object(u.a)(r,2),o=i[0],m=i[1],p=Object(n.useState)(""),h=Object(u.a)(p,2),d=h[0],v=h[1],E=Object(n.useState)("beef"),b=Object(u.a)(E,2),g=b[0],w=b[1];Object(n.useEffect)(function(){_()},[g]);var _=function(){var e=Object(s.a)(l.a.mark(function e(){var n,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(g,"&app_id=").concat(t,"&app_key=").concat(a,"&from=0&to=8&calories=591-722&health=alcohol-free"));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,m(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),w(d),v("")}},c.a.createElement("input",{className:"search-bar",type:"text",value:d,onChange:function(e){v(e.target.value)},placeholder:"search recipe"}),c.a.createElement("button",{className:"search-button",type:"search"},"Search")),c.a.createElement("div",{className:"recipes"},o.map(function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,image:e.recipe.image,ingredients:e.recipe.ingredients})})))};var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,a){e.exports={recipe:"recipe_recipe__2ISjV",image:"recipe_image__VU5vx"}},8:function(e,t,a){e.exports=a(22)}},[[8,1,2]]]);
//# sourceMappingURL=main.804fbc57.chunk.js.map