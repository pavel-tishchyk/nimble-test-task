(this["webpackJsonpnimble-test-task"]=this["webpackJsonpnimble-test-task"]||[]).push([[0],{128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(26),s=a.n(c),u=a(35),o=a(27),i=a(101),l=a(100),d=a(17),j="SET_TRACKERS_DATA",b="GET_TRACKERS_DATA",f="ADD_TRACKER",O="DELETE_TRACKER",k="STOP_TRACKER",p="START_TRACKER",x=function(e){return{type:j,payload:{trackersData:e}}},m={trackersData:[]};var v=Object(o.c)({trackers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=t.payload,r=t.type;switch(r){case j:return Object(d.a)(Object(d.a)({},e),{},{trackersData:a.trackersData});case f:return Object(d.a)(Object(d.a)({},e),{},{trackersData:[].concat(Object(l.a)(e.trackersData),[a.tracker])});case O:return Object(d.a)(Object(d.a)({},e),{},{trackersData:e.trackersData.filter((function(e){return e.id!==a.trackerId}))});case k:return Object(d.a)(Object(d.a)({},e),{},{trackersData:e.trackersData.map((function(e){return e.id===a.trackerId?Object(d.a)(Object(d.a)({},e),{},{stopDate:a.stopDate}):e}))});case p:return Object(d.a)(Object(d.a)({},e),{},{trackersData:e.trackersData.map((function(e){return e.id===a.trackerId?Object(d.a)(Object(d.a)({},e),{},{date:a.date,stopDate:null}):e}))});default:return e}}}),h=a(16),D=a.n(h),g=a(19),T=function(e){return e.trackers.trackersData},w=a(28),y=a.n(w),S=function(e){localStorage.setItem("trackersData",JSON.stringify(e))},C=function(e){var t=e/1e3,a=Math.trunc(t/3600),r=Math.trunc(t%3600/60),n=Math.trunc(t%3600%60);return r=r<10?"0"+r:r,n=n<10?"0"+n:n,"".concat(a=a<10?"0"+a:a,":").concat(r,":").concat(n)},I=function(e,t){return t?y()(t).diff(y()(e)):y()().diff(y()(e))},R=D.a.mark(K),A=D.a.mark(F),E=D.a.mark(J),N=D.a.mark(M),_=D.a.mark(L),z=D.a.mark(P);function K(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,JSON.parse(localStorage.getItem("trackersData"));case 2:return(e=t.sent)||(e=[]),t.next=6,Object(g.b)(x(e));case 6:case"end":return t.stop()}}),R)}function F(e){var t;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.payload,a.next=3,Object(g.c)(T);case 3:return t=a.sent,a.next=6,S(t);case 6:case"end":return a.stop()}}),A)}function J(e){var t;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.payload,a.next=3,Object(g.c)(T);case 3:return t=a.sent,a.next=6,S(t);case 6:case"end":return a.stop()}}),E)}function M(e){var t;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.payload,a.next=3,Object(g.c)(T);case 3:return t=a.sent,a.next=6,S(t);case 6:case"end":return a.stop()}}),N)}function L(e){var t;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.payload,a.next=3,Object(g.c)(T);case 3:return t=a.sent,a.next=6,S(t);case 6:case"end":return a.stop()}}),_)}function P(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)(b,K);case 2:return e.next=4,Object(g.d)(f,F);case 4:return e.next=6,Object(g.d)(O,J);case 6:return e.next=8,Object(g.d)(k,M);case 8:return e.next=10,Object(g.d)(p,L);case 10:case"end":return e.stop()}}),z)}var B=D.a.mark(G);function G(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([P()]);case 2:case"end":return e.stop()}}),B)}var q=Object(i.a)(),H=Object(o.e)(v,Object(o.a)(q));q.run(G);var Q=H,U=a(145),V=a(147),W=a(143),X=a(59),Y=a(144),Z=a(38),$=a(9),ee={addTracker:function(e){return{type:f,payload:{tracker:e}}}},te=Object(u.b)(null,ee)((function(e){var t=e.index,a=e.addTracker,r=n.a.useState(""),c=Object(X.a)(r,2),s=c[0],u=c[1],o=function(e){var r=Date.now(),n=s||"No name tracker #".concat(t),c=(new Date).toISOString();a({id:r,name:n,date:c,stopDate:null}),u(""),e.preventDefault()};return Object($.jsx)(U.a.Row,{as:"form",onSubmit:o,children:Object($.jsxs)(Y.a,{name:"name",fluid:!0,value:s,onChange:function(e){return u(e.target.value)},size:"large",placeholder:"Enter tracker name...",className:"form",icon:!0,children:[Object($.jsx)("input",{}),Object($.jsx)(Z.a,{link:!0,name:"play circle",size:"big",color:"green",onClick:o})]})})})),ae={deleteTracker:function(e){return{type:O,payload:{trackerId:e}}},stopTracker:function(e,t){return{type:k,payload:{trackerId:e,stopDate:t}}},startTracker:function(e,t){return{type:p,payload:{trackerId:e,date:t}}}},re=Object(u.b)(null,ae)((function(e){var t=e.tracker,a=t.id,r=t.name,c=t.date,s=t.stopDate,u=e.deleteTracker,o=e.stopTracker,i=e.startTracker,l=n.a.useState(null),d=Object(X.a)(l,2),j=d[0],b=d[1],f=n.a.useState(C(I(c,s))),O=Object(X.a)(f,2),k=O[0],p=O[1],x=n.a.useCallback((function(){var e=y()().diff(y()(s)),t=y()(c).valueOf()+e;i(a,new Date(t).toISOString())}),[s,i,a,c]),m=n.a.useCallback((function(){clearInterval(j),b(null),o(a,(new Date).toISOString())}),[o,a,j]),v=n.a.useCallback((function(){j&&(clearInterval(j),b(null)),u(a)}),[a,j,u]);return n.a.useEffect((function(){if(!s&&!j){var e=setInterval((function(){return p(C(I(c,s)))}),1e3);b(e)}}),[s,j,c]),Object($.jsxs)(W.a.Item,{className:s?"card":"card card-active",children:[Object($.jsx)(W.a.Content,{verticalAlign:"bottom",className:"card-name",children:Object($.jsx)(V.a,{size:"small",color:s?"black":"green",children:r})}),Object($.jsx)(W.a.Content,{verticalAlign:"middle",className:"card-timer",children:Object($.jsx)(V.a,{size:"small",color:s?"black":"green",children:k})}),Object($.jsxs)(W.a.Content,{className:"card-actions",children:[Object($.jsx)(Z.a,{name:s?"play circle outline":"pause circle outline",size:"big",color:"black",onClick:s?x:m}),Object($.jsx)(Z.a,{name:"minus circle",size:"big",color:"red",onClick:v})]})]})})),ne={getTrackersData:function(){return{type:b}}},ce=Object(u.b)((function(e){return{trackersData:e.trackers.trackersData}}),ne)((function(e){var t=e.trackersData,a=e.getTrackersData;n.a.useEffect((function(){a()}),[a]);var r=t.map((function(e){return Object($.jsx)(re,{tracker:e},e.id)}));return Object($.jsx)(U.a,{centered:!0,children:Object($.jsxs)(U.a.Column,{computer:6,mobile:16,children:[Object($.jsx)(U.a.Row,{children:Object($.jsx)(V.a,{size:"huge",textAlign:"center",className:"logo",children:"tracker"})}),Object($.jsx)(te,{index:t.length+1}),Object($.jsx)(U.a.Row,{as:W.a,className:"card-list",divided:!0,children:r})]})})})),se=function(){return Object($.jsx)(u.a,{store:Q,children:Object($.jsx)(ce,{})})},ue=(a(127),a(128),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,148)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))});s.a.render(Object($.jsx)(n.a.StrictMode,{children:Object($.jsx)(se,{})}),document.getElementById("root")),ue()}},[[129,1,2]]]);
//# sourceMappingURL=main.56dc0daf.chunk.js.map