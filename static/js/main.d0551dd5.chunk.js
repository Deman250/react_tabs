(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(2),l=a.n(i),r=a(3),b=a(4),o=a(7),u=a(5),s=a(8),T=(a(14),a(6)),v=a.n(T),m=function(t){var e=t.title,a=t.status,n=t.clickTab,i=v()({tabs:!0,tab__active:a===e});return c.a.createElement("button",{type:"button",className:i,onClick:function(){return n(e)}},e)};var p=function(t){var e=t.tabs,a=t.activeTab,n=t.clickTab;return c.a.createElement("div",null,c.a.createElement("ul",null,e.map(function(t){var e=t.title;return c.a.createElement(m,{title:e,clickTab:n,key:e,status:a})})),c.a.createElement("div",null,e.map(function(t){var e=t.title,n=t.content;return e!==a?void 0:c.a.createElement("p",{key:e},n)})))},f=(a(15),function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={tabs:[{title:"Tab 1",content:"Tab text 1"},{title:"Tab 2",content:"Tab text 2"},{title:"Tab 3",content:"Tab text 3"},{title:"Tab 4",content:"Tab text 4"},{title:"Tab 5",content:"Tab text 5"},{title:"Tab 6",content:"Tab text 6"},{title:"Tab 7",content:"Tab text 7"}]},a.clickTab=function(t){a.setState({activeTab:t})},a}return Object(s.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){var t=this.state,e=t.tabs,a=t.activeTab;return c.a.createElement("div",{className:"app"},c.a.createElement("h1",null,e.length,"Tabs"),c.a.createElement(p,{clickTab:this.clickTab,tabs:e,activeTab:a}))}}]),e}(c.a.Component));l.a.render(c.a.createElement(f,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d0551dd5.chunk.js.map