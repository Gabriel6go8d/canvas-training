(this["webpackJsonprace-project"]=this["webpackJsonprace-project"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(12),s=a.n(r),c=(a(33),a(6));a(20);var l=function(e){var t={x:void 0,y:void 0},a=["#F2C38C","#24160D","#F35217","#8B0104","#570200"],r=!0,s=Object(n.useState)(.6*window.innerHeight),l=Object(c.a)(s,2),o=l[0],h=l[1],d=Object(n.useState)(.7*window.innerWidth),u=Object(c.a)(d,2),m=u[0],v=u[1];return Object(n.useEffect)((function(){var e=document.getElementById("myCanvas");e.height=o,e.width=m;var n=e.getContext("2d");function i(a,i,s,c,l,h,d){this.x=a,this.y=i,this.dx=s,this.dy=c,this.radious=l,this.minRadious=h,this.color=d,this.drawCircle=function(){n.beginPath(),n.arc(this.x,this.y,this.radious,0,2*Math.PI,!1),n.strokeStyle=d,n.fillStyle=d,r&&n.fill(),n.stroke()},this.Update=function(){(this.x+this.radious>Math.floor(m)||this.x-this.radious<0)&&(this.dx=-this.dx),(this.y+this.radious>Math.floor(o)||this.y-this.radious<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy;var a=e.getBoundingClientRect();t.x-a.x-this.x<50&&t.x-a.x-this.x>-50&&t.y-a.y-this.y<50&&t.y-a.y-this.y>-50&&this.radious<50?this.radious+=1:this.radious>this.minRadious&&(this.radious-=1),this.drawCircle()}}window.addEventListener("mousemove",(function(e){t.x=e.clientX,t.y=e.clientY})),window.addEventListener("resize",(function(){e.height=.8*window.innerHeight,e.width=.8*window.innerWidth,c()}));var s=[],c=function(){s=[];for(var e=0;e<500;e++){var t=Math.floor(7*Math.random()+1),n=Math.random()*(m-2*t)+t,r=Math.random()*(o-2*t)+t,c=2*(Math.random()-.5),l=2*(Math.random()-.5),h=a[Math.floor(Math.random()*a.length)];s.push(new i(n,r,c,l,t,t,h))}};c();var l=setInterval((function(){n.clearRect(0,0,m,o);for(var e=0;e<s.length-1;e++)s[e].Update()}),16),d=function(){h(.6*window.innerHeight),v(.7*window.innerWidth),console.log("resize")};return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d),clearInterval(l),l=0}}),[m,o]),i.a.createElement("div",{className:"mt-3"},i.a.createElement("div",{className:"row m-0 p-0 justify-content-center"},i.a.createElement("button",{className:"btn btn-success",onClick:function(){return r=!r}},"Fill or Not")),i.a.createElement("canvas",{id:"myCanvas",className:"mt-1 canvasStyle"},"sdsd"))};var o=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null),r=Object(n.useState)(.6*window.innerHeight),s=Object(c.a)(r,2),l=s[0],o=s[1],h=Object(n.useState)(.7*window.innerWidth),d=Object(c.a)(h,2),u=d[0],m=d[1];return Object(n.useEffect)((function(){var n=100;e.current.addEventListener("change",(function(e){n=400*e.target.value,d()})),t.current.addEventListener("click",(function(e){n=a.current.value,d()}));var i=document.getElementById("myCanvas2");i.height=l,i.width=u;var r=i.getContext("2d");function s(){var e=Math.floor(10*Math.random()+1);return[Math.random()*u-.3*u,-2e3*Math.random(),e]}function c(e,t,a,n,i,c){this.x=e,this.y=t,this.radious=i,this.dx=a,this.lastPX=n,this.angle=c,this.draw=function(){r.beginPath(),r.arc(this.x,this.y,this.radious,0,2*Math.PI,!1),r.strokeStyle="#000000",r.fillStyle="#000000",r.fill(),r.stroke()},this.update=function(){this.y>l&&(this.dx=2,this.lastPX=this.x,this.angle=0,this.radious-=.3*this.radious);var e=5*this.radious;if(1===this.dx)this.x+=3,this.y+=8;else if(2===this.dx){this.angle+=Math.acos(1-Math.pow(2/e,2)/2),this.x=this.lastPX+e+e*Math.cos(this.angle+Math.PI),this.y=l+(e+30)*Math.sin(this.angle+Math.PI)}if(e<5){var t=s();this.x=t[0],this.y=t[1],this.radious=t[2],this.dx=1}this.draw()}}var h=[],d=function(){h=[];for(var e=0;e<n;e++){var t=s();h.push(new c(t[0],t[1],1,0,t[2],0))}};d();var v=setInterval((function(){r.clearRect(0,0,u,l);for(var e=0;e<h.length;e++)h[e].update()}),16),f=function(){o(.6*window.innerHeight),m(.7*window.innerWidth),console.log("resize")};return window.addEventListener("resize",f),function(){window.removeEventListener("resize",f),clearInterval(v),v=0}}),[u,l]),i.a.createElement("div",{className:"mt-3"},i.a.createElement("div",{className:"row m-0 p-0 justify-content-center"},i.a.createElement("h3",{className:"col-4 col-md-4 col-lg-2 text-white"},"Change Rain"),i.a.createElement("input",{ref:e,type:"range",className:"custom-range col-4 col-md-4 col-lg-2 mt-2 mr-5",min:"0",max:"5",step:"0.1"}),i.a.createElement("button",{ref:t,className:"btn btn-danger col-md-4 col-4 col-lg-1 mr-2 ml-5"},"Go Crazy"),i.a.createElement("input",{ref:a,type:"number",placeholder:"Pick Number",className:"col-4 col-md-4 col-lg-2"})),i.a.createElement("p",{className:"warning_text"},"Depending on your PC more than 1500 can crash your Page"),i.a.createElement("canvas",{id:"myCanvas2",className:"mt-4 canvasStyle"}))};var h=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null),r=Object(n.useState)(.6*window.innerHeight),s=Object(c.a)(r,2),l=s[0],o=s[1],h=Object(n.useState)(.7*window.innerWidth),d=Object(c.a)(h,2),u=d[0],m=d[1];return Object(n.useEffect)((function(){var n=100;e.current.addEventListener("change",(function(e){n=50*e.target.value,d()})),t.current.addEventListener("click",(function(e){n=a.current.value,d()}));var i=document.getElementById("myCanvas3");i.height=l,i.width=u;var r=i.getContext("2d");function s(){var e=Math.floor(10*Math.random()+1);return[Math.random()*u,-2e3*Math.random(),e]}function c(e,t,a,n,i,c){this.x=e,this.y=t,this.radious=i,this.dx=a,this.lastPX=n,this.angle=c,this.draw=function(){r.beginPath(),r.arc(this.x,this.y,this.radious,0,2*Math.PI,!1),r.strokeStyle="#000000",r.fillStyle="#000000",r.fill(),r.stroke()},this.update=function(){this.y>l&&(1===this.dx&&(v(this.x,this.y),this.dx=2),this.lastPX=this.x,this.angle=0,this.radious-=.3*this.radious);var e=5*this.radious,t=3*e,a=3*e;if(1===this.dx)this.y+=8;else if(2===this.dx){var n=s();this.x=n[0],this.y=n[1],this.radious=n[2],this.dx=1}else 3===this.dx?(this.angle+=Math.acos(1-Math.pow(1/e,2)/2),this.x=this.lastPX+t+t*Math.cos(this.angle+Math.PI),this.y=l+a*Math.sin(this.angle+Math.PI)):4===this.dx&&(this.angle+=Math.acos(1-Math.pow(1/e,2)/2),this.x=this.lastPX-t-t*Math.cos(this.angle+Math.PI),this.y=l+a*Math.sin(this.angle+Math.PI));this.draw()}}var h=[],d=function(){h=[];for(var e=0;e<n;e++){var t=s();h.push(new c(t[0],t[1],1,0,t[2],0))}};d();var v=function(e,t){for(var a=0;a<5;a++){var n=5*Math.random()+1,i=Math.round(Math.random()+3);h.push(new c(e,t-30,i,e,n,0))}},f=setInterval((function(){r.clearRect(0,0,u,l);for(var e=0;e<h.length;e++)h[e].update()}),16),g=function(){o(.6*window.innerHeight),m(.7*window.innerWidth),console.log("resize")};return window.addEventListener("resize",g),function(){window.removeEventListener("resize",g),clearInterval(f),f=0}}),[u,l]),i.a.createElement("div",{className:"mt-3"},i.a.createElement("div",{className:"row m-0 p-0 justify-content-center"},i.a.createElement("h3",{className:"col-4 col-md-4 col-lg-2 text-white"},"Change Rain"),i.a.createElement("input",{ref:e,type:"range",className:"custom-range col-4 col-md-4 col-lg-2 mt-2 mr-5",min:"0",max:"5",step:"0.1"}),i.a.createElement("button",{ref:t,className:"btn btn-danger col-md-4 col-4 col-lg-1 mr-2 ml-5"},"Go Crazy"),i.a.createElement("input",{ref:a,type:"number",placeholder:"Pick Number",className:"col-4 col-md-4 col-lg-2"})),i.a.createElement("p",{className:"warning_text"},"Depending on your PC more than 300 can crash your Page"),i.a.createElement("canvas",{id:"myCanvas3",className:"mt-4 canvasStyle"},"sdsd"))};var d=function(e){var t={x:void 0,y:void 0},a=["#F2C38C","#24160D","#F35217","#8B0104","#570200"],r=!0,s=Object(n.useState)(.6*window.innerHeight),l=Object(c.a)(s,2),o=l[0],h=l[1],d=Object(n.useState)(.7*window.innerWidth),u=Object(c.a)(d,2),m=u[0],v=u[1];return Object(n.useEffect)((function(){var e=document.getElementById("myCanvas4");e.height=o,e.width=m;var n=e.getContext("2d");function i(a,i,s,c,l,h,d){this.x=a,this.y=i,this.dx=s,this.dy=c,this.radious=l,this.minRadious=h,this.color=d,this.drawCircle=function(){n.beginPath(),n.arc(this.x,this.y,this.radious,0,2*Math.PI,!1),n.strokeStyle=d,n.fillStyle=d,r&&n.fill(),n.stroke()},this.Update=function(){(this.x+this.radious>Math.floor(m)||this.x-this.radious<0)&&(this.dx=-this.dx),(this.y+this.radious>Math.floor(o)||this.y-this.radious<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy;var a=e.getBoundingClientRect();t.x-a.x-this.x<100&&t.x-a.x-this.x>-100&&t.y-a.y-this.y<100&&t.y-a.y-this.y>-100&&(this.x-(t.x-a.x)<0?this.x-=2:this.x+=2,this.y-(t.y-a.y)<0?this.y-=2:this.y+=2),this.drawCircle()}}window.addEventListener("mousemove",(function(e){t.x=e.clientX,t.y=e.clientY})),window.addEventListener("resize",(function(){e.height=.8*window.innerHeight,e.width=.8*window.innerWidth,c()}));var s=[],c=function(){s=[];for(var e=0;e<500;e++){var t=Math.floor(7*Math.random()+1),n=Math.random()*(m-2*t)+t,r=Math.random()*(o-2*t)+t,c=2*(Math.random()-.5),l=2*(Math.random()-.5),h=a[Math.floor(Math.random()*a.length)];s.push(new i(n,r,c,l,t,t,h))}};c();var l=setInterval((function(){n.clearRect(0,0,m,o);for(var e=0;e<s.length-1;e++)s[e].Update()}),16),d=function(){h(.6*window.innerHeight),v(.7*window.innerWidth),console.log("resize")};return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d),clearInterval(l),l=0}}),[m,o]),i.a.createElement("div",{className:"mt-3"},i.a.createElement("div",{className:"row m-0 p-0 justify-content-center"},i.a.createElement("button",{className:"btn btn-success",onClick:function(){return r=!r}},"Fill or Not")),i.a.createElement("canvas",{id:"myCanvas4",className:"mt-1 canvasStyle"}))},u=a(45),m=a(46),v=a(21),f=a.n(v);var g=function(e){return i.a.createElement("div",null,i.a.createElement(u.a,{bg:"dark",variant:"dark",expand:"lg"},i.a.createElement(u.a.Brand,{style:{cursor:"pointer"}},i.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),"ACanvas"),i.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(m.a,{className:"mr-auto",activeKey:e.active},i.a.createElement(m.a.Link,{eventKey:1,onClick:function(){return e.action("explote")}},"Explote"),i.a.createElement(m.a.Link,{eventKey:2,onClick:function(){return e.action("run away")}},"Run Away"),i.a.createElement(m.a.Link,{eventKey:3,onClick:function(){return e.action("rain")}},"Rain"),i.a.createElement(m.a.Link,{eventKey:4,onClick:function(){return e.action("rain2")}},"Splash Rain"),i.a.createElement(m.a.Link,{eventKey:5,onClick:function(){return e.action("about")}},"About")))))};var w=function(){return i.a.createElement("div",{className:"container-fluid footer"},i.a.createElement("div",{className:"row justify-content-around text-center text-white align-items-center"},i.a.createElement("div",{className:"col-5 mt-3 mb-3"},i.a.createElement("h4",null,"Canvas and React Practice")),i.a.createElement("div",{className:"col-5 mt-3 mb-3"},i.a.createElement("p",null,"Author: Gabriel Gutierrez"),i.a.createElement("a",{href:"mailto:gabrie.ares93@gmail.com"},"Send me an Email"))))},E=a(27),y=a(16);var p=function(){return i.a.createElement("div",{className:"container text-left mt-5 about"},i.a.createElement("h4",null,"Canvas Project"),i.a.createElement("h4",null,"Author: Gabriel Gutierrez"),i.a.createElement("a",{href:"mailto:gabriel.ares93@gmail.com",className:"contact_link"},i.a.createElement("div",null,i.a.createElement(y.b,{size:"25px",color:"white"}),i.a.createElement("p",null,"Email: ")),i.a.createElement("p",null,"gabriel.ares93@gmail.com")),i.a.createElement("a",{href:"https://gabriel6go8d.github.io/curriculum-vitae-2/",className:"contact_link"},i.a.createElement("div",null,i.a.createElement(E.a,{size:"25px",color:"white"}),i.a.createElement("p",null,"Portfolio: ")),i.a.createElement("p",null,"https://gabriel6go8d.github.io/curriculum-vitae-2/")),i.a.createElement("a",{href:"https://github.com/Gabriel6go8d/canvas-training",className:"contact_link"},i.a.createElement("div",null,i.a.createElement(y.a,{size:"25px",color:"white"}),i.a.createElement("p",null,"Project Code: ")),i.a.createElement("p",null,"https://github.com/Gabriel6go8d/canvas-training")),i.a.createElement("a",{href:"https://github.com/Gabriel6go8d",className:"contact_link"},i.a.createElement("div",null,i.a.createElement(y.c,{size:"25px",color:"white"}),i.a.createElement("p",null,"GitHub: ")),i.a.createElement("p",null,"https://github.com/Gabriel6go8d")),i.a.createElement("p",{className:"mt-3"},"Used Tecnologies: "),i.a.createElement("p",null,"HTML5  CSS3  Canvas  Javascript  React  Bootstrap"),i.a.createElement("p",{className:"mt-3"},"What I Learn?"),i.a.createElement("p",null,"This was a really fun project, playing with features of canvas and the math was a little challenge. Also it worked as practice for Bootstrap and React Hooks (useState and useEffect)."))};var x=function(){var e=Object(n.useState)(1),t=Object(c.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(i.a.createElement(l,null)),u=Object(c.a)(s,2),m=u[0],v=u[1];return i.a.createElement("div",{className:"App app-content"},i.a.createElement(g,{action:function(e){document.getElementById("area").classList.add("areahidde"),setTimeout((function(){switch(e){case"explote":v(i.a.createElement(l,null)),r(1);break;case"run away":v(i.a.createElement(d,null)),r(2);break;case"rain":v(i.a.createElement(o,null)),r(3);break;case"rain2":v(i.a.createElement(h,null)),r(4);break;case"about":v(i.a.createElement(p,null)),r(5)}document.getElementById("area").classList.remove("areahidde")}),400)},active:a}),i.a.createElement("div",{className:"area",id:"area"},m),i.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.12897ea7.chunk.js.map