(this.webpackJsonproomy=this.webpackJsonproomy||[]).push([[0],{138:function(e,t,n){e.exports=n(310)},143:function(e,t,n){},304:function(e,t){},310:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(19),r=n.n(i),c=(n(143),n(38)),s=n(39),l=n(41),m=n(40),u=n(58),f=n(4),h=n(53),v=n.n(h),b=n(54),d=n.n(b),y=n(55),E=n.n(y),p=n(46),O=n.n(p),j=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={username:""},a}return Object(s.a)(n,[{key:"handleClick",value:function(e){this.state.username}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(v.a,null,o.a.createElement("div",null,o.a.createElement(d.a,{title:"Login"}),o.a.createElement(O.a,{hintText:"Enter your Username",floatingLabelText:"Username",onChange:function(t,n){return e.setState({username:n})}}),o.a.createElement(E.a,{label:"Submit",href:"/notifications/"+this.state.username,primary:!0,style:a.style,onClick:function(t){return e.handleClick(t)}}))))}}]),n}(a.Component),g=n(56),k=n(27),C=n(45),_=(n(275),n(59)),w=n(313),T=n(314),x=n(132),S=n.n(x),N=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(c.a)(this,n),(a=t.call(this,e)).state={notifications:{},notifier:{message:"",room:""}},a.add_notif=a.add_notif.bind(Object(C.a)(a)),a.notify=a.notify.bind(Object(C.a)(a));var o=S.a.connect("localhost:8080");return o.emit("join",a.props.match.params.room),o.on("notification",a.add_notif),a}return Object(s.a)(n,[{key:"remove_notif",value:function(e){var t=Object(k.a)({},this.state.notifications);t[e]=!1,this.setState({notifications:t})}},{key:"notify",value:function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:this.state.notifier.message})};fetch("http://localhost:8080/notify/"+this.state.notifier.room,e)}},{key:"add_notif",value:function(e){var t=Object(k.a)(Object(k.a)({},this.state.notifications),{},Object(g.a)({},e,!0));this.setState({notifications:t})}},{key:"refresh_message",value:function(e){var t=Object(k.a)(Object(k.a)({},this.state.notifier),{},{message:e});this.setState({notifier:t})}},{key:"refresh_room",value:function(e){var t=Object(k.a)(Object(k.a)({},this.state.notifier),{},{room:e});this.setState({notifier:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(v.a,null,o.a.createElement("div",null,o.a.createElement(d.a,{title:"Notifications for "+this.props.match.params.room})),o.a.createElement(w.a,null,o.a.createElement(O.a,{hintText:"Enter Room Name",floatingLabelText:"Room Name",onChange:function(t,n){return e.refresh_room(n)}}),o.a.createElement(O.a,{hintText:"Enter message",floatingLabelText:"Message",onChange:function(t,n){return e.refresh_message(n)}}),o.a.createElement(E.a,{label:"Notify",primary:!0,style:a.style,onClick:this.notify})),o.a.createElement(w.a,null,Object.keys(this.state.notifications).map((function(t){return o.a.createElement(T.a,{value:t},o.a.createElement(_.a,{onClose:function(){e.remove_notif(t)},show:e.state.notifications[t],animation:!0},o.a.createElement(_.a.Header,null,o.a.createElement("img",{src:"",className:"rounded mr-2",alt:""}),o.a.createElement("strong",{className:"mr-auto"},"\ud83d\udea8TODO")),o.a.createElement(_.a.Body,null,t)))})))))}}]),n}(a.Component),L=(n(307),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement("div",null,o.a.createElement(f.c,null,o.a.createElement(f.a,{exact:!0,path:"/",component:j}),o.a.createElement(f.a,{path:"/notifications/:room",component:N}))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(u.a,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[138,1,2]]]);
//# sourceMappingURL=main.0f88866b.chunk.js.map