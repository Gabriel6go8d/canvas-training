(this["webpackJsonprace-project"]=this["webpackJsonprace-project"]||[]).push([[0],{43:function(t,e,i){},44:function(t,e,i){t.exports=i.p+"static/media/logo.5d5d9eef.svg"},56:function(t,e,i){t.exports=i(68)},61:function(t,e,i){},68:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n),s=i(22),r=i.n(s);i(61),i(43),i(76),i(77),i(75),i(44);var o=function(){var t=Object(n.useRef)(null),e=Object(n.useRef)(null),i=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current.addEventListener("change",(function(t){s=400*t.target.value,d()})),e.current.addEventListener("click",(function(t){s=i.current.value,d()}));var n=.8*window.innerHeight,a=.8*window.innerWidth,s=100,r=document.getElementById("myCanvas2");r.height=n,r.width=a;var o=r.getContext("2d");function h(){var t=Math.floor(10*Math.random()+1);return[Math.random()*a-.3*a,-2e3*Math.random(),t]}function c(t,e,i,a,s,r){this.x=t,this.y=e,this.radious=s,this.dx=i,this.lastPX=a,this.angle=r,this.draw=function(){o.beginPath(),o.arc(this.x,this.y,this.radious,0,2*Math.PI,!1),o.strokeStyle="#000000",o.fillStyle="#000000",o.fill(),o.stroke()},this.update=function(){this.y>n&&(this.dx=2,this.lastPX=this.x,this.angle=0,this.radious-=.3*this.radious);var t=5*this.radious;if(1===this.dx)this.x+=3,this.y+=8;else if(2===this.dx){this.angle+=Math.acos(1-Math.pow(2/t,2)/2),this.x=this.lastPX+t+t*Math.cos(this.angle+Math.PI),this.y=n+(t+30)*Math.sin(this.angle+Math.PI)}if(t<5){var e=h();this.x=e[0],this.y=e[1],this.radious=e[2],this.dx=1}this.draw()}}var l=[],d=function(){l=[];for(var t=0;t<s;t++){var e=h();l.push(new c(e[0],e[1],1,0,e[2],0))}};d(),setInterval((function(){o.clearRect(0,0,a,n);for(var t=0;t<l.length;t++)l[t].update()}),16)}),[]),a.a.createElement("div",null,a.a.createElement("div",{className:"row justify-content-center mt-2"},a.a.createElement("h3",{className:"col-2 text-white"},"Change Rain"),a.a.createElement("input",{ref:t,type:"range",class:"custom-range col-2 mt-2 mr-5",min:"0",max:"5",step:"0.1"}),a.a.createElement("button",{ref:e,className:"btn btn-danger mr-2 ml-5"},"Go Crazy"),a.a.createElement("input",{ref:i,type:"number",placeholder:"Pick Number"})),a.a.createElement("canvas",{id:"myCanvas2",className:"mt-4",style:{backgroundColor:"#f3f6f4",border:"2px solid black"}},"sdsd"))};var h=function(){var t={x:void 0,y:void 0},e=["#F2C38C","#24160D","#F35217","#8B0104","#570200"],i=!0;return Object(n.useEffect)((function(){var n=.8*window.innerHeight,a=.8*window.innerWidth,s=document.getElementById("myCanvas");s.height=n,s.width=a;var r=s.getContext("2d");function o(e,o,h,c,l,d,u){this.x=e,this.y=o,this.dx=h,this.dy=c,this.radious=l,this.minRadious=d,this.color=u,this.drawCircle=function(){r.beginPath(),r.arc(this.x,this.y,this.radious,0,2*Math.PI,!1),r.strokeStyle=u,r.fillStyle=u,i&&r.fill(),r.stroke()},this.Update=function(){(this.x+this.radious>Math.floor(a)||this.x-this.radious<0)&&(this.dx=-this.dx),(this.y+this.radious>Math.floor(n)||this.y-this.radious<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy;var e=s.getBoundingClientRect();t.x-e.x-this.x<50&&t.x-e.x-this.x>-50&&t.y-e.y-this.y<50&&t.y-e.y-this.y>-50&&this.radious<50?this.radious+=1:this.radious>this.minRadious&&(this.radious-=1),this.drawCircle()}}window.addEventListener("mousemove",(function(e){t.x=e.clientX,t.y=e.clientY})),window.addEventListener("resize",(function(){s.height=.8*window.innerHeight,s.width=.8*window.innerWidth,c()}));var h=[],c=function(){h=[];for(var t=0;t<500;t++){var i=Math.floor(7*Math.random()+1),s=Math.random()*(a-2*i)+i,r=Math.random()*(n-2*i)+i,c=2*(Math.random()-.5),l=2*(Math.random()-.5),d=e[Math.floor(Math.random()*e.length)];h.push(new o(s,r,c,l,i,i,d))}};c(),setInterval((function(){r.clearRect(0,0,a,n);for(var t=0;t<h.length-1;t++)h[t].Update()}),16)}),[]),a.a.createElement("div",{className:"col mt-2"},a.a.createElement("div",{className:"row justify-content-center"},a.a.createElement("button",{className:"btn btn-success mt-1",onClick:function(){return i=!i}},"Fill or Not")),a.a.createElement("canvas",{id:"myCanvas",className:"mt-1",style:{backgroundColor:"#f3f6f4",border:"2px solid black"}},"sdsd"))};var c=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,null),a.a.createElement(o,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(67);r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.15d6b72d.chunk.js.map