(this["webpackJsonpfloral-event-creation-tool"]=this["webpackJsonpfloral-event-creation-tool"]||[]).push([[5],{848:function(e,t,n){"use strict";n.r(t);var a=n(225),o=n(226),l=n(228),c=n(227),r=n(229),i=n(3),m=n.n(i),u=n(849),d=n(850),s=n(851),p=n(852),v=n(853),y=n(854),E=n(855),f=n(856),g=n(857),h=n(858),b=n(847),C=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){b.a.initialize("UA-150279426-1"),b.a.pageview("/dashboard")}},{key:"render",value:function(){var e=function(e){return encodeURIComponent(e)},t=function(){var t=document.getElementById("eventTitle"),n=document.getElementById("eventLocation"),a=document.getElementById("eventDate"),o=document.getElementById("output"),l=new Date("".concat(a.value,"T10:00:00")).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),c="eventTitle=".concat(e(t.value),"&eventLocation=").concat(e(n.value),"&eventDate=").concat(l),r="<a href='".concat("https://kellyshannonfloral.myshopify.com","/?").concat(c,"'>\n          Send Flowers Now\n        </a>");o.value=r},n=function(){var e=document.getElementById("copyBtn");e.classList.remove("btn-success"),e.classList.add("btn-primary")};return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement("strong",null,"Kelly Shannon Floral - Event Link Creation tool")),m.a.createElement(s.a,null,m.a.createElement(p.a,null),m.a.createElement(v.a,null,m.a.createElement(y.a,null,m.a.createElement(E.a,{for:"eventTitle"},"Event Title"),m.a.createElement(f.a,{onChange:t,type:"text",name:"eventTitle",id:"eventTitle",placeholder:"Mr. Chapman's Wake"})),m.a.createElement(y.a,null,m.a.createElement(E.a,{for:"eventLocation"},"Event Location"),m.a.createElement(f.a,{onChange:t,type:"text",name:"eventLocation",id:"eventLocation",placeholder:"Newcomer Funeral Home - Orlando, Fl "})),m.a.createElement(y.a,null,m.a.createElement(E.a,{for:"eventDate"},"Date"),m.a.createElement(f.a,{onChange:t,type:"date",name:"eventDate",id:"eventDate"})))),m.a.createElement(g.a,null,m.a.createElement(y.a,null,m.a.createElement(E.a,{for:"output"},"Link Code"),m.a.createElement(f.a,{type:"textarea",name:"output",id:"output",readOnly:!0})),m.a.createElement(h.a,Object.assign({id:"copyBtn",name:"copyBtn",onClick:function(e){document.getElementById("output").select(),document.execCommand("copy"),b.a.event({category:"User Triggered",label:"Tool",action:"Copied Link Code"}),e.target.classList.remove("btn-primary"),e.target.classList.add("btn-success"),setTimeout(n,3e3)}},{color:"primary"}),"Copy to Clipboard"))))}}]),t}(i.Component);t.default=C}}]);
//# sourceMappingURL=5.56d95913.chunk.js.map