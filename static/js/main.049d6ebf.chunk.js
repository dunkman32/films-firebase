(this.webpackJsonpfilms=this.webpackJsonpfilms||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n(11),c=n(49),s=n.n(c),i=n(42),u=n(7),o=n(26),d={statuses:{isStarted:!1,isPending:!1,isFinished:!1,isFailed:!1,isSucceed:!1},error:{message:""},data:[]},f={key:"main",storage:s.a},b=Object(i.a)(f,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.constants.LIST_REQUESTED:return Object(a.a)(Object(a.a)({},d),{},{statuses:Object(a.a)(Object(a.a)({},e.statuses),{},{isStarted:!0,isPending:!0})});case u.constants.LIST_SUCCEEDED:return Object(a.a)(Object(a.a)({},e),{},{statuses:{isStarted:!1,isPending:!1,isFinished:!0,isFailed:!1,isSucceed:!0},data:Object(o.b)((function(){return t.payload.response.data}),[])});case u.constants.LIST_FAILED:return Object(a.a)(Object(a.a)({},d),{},{statuses:{isStarted:!1,isPending:!1,isFinished:!0,isFailed:!0,isSucceed:!1},error:{message:Object(o.b)((function(){return t.payload.message}),"")}});default:return e}})),j={statuses:{isStarted:!1,isPending:!1,isFinished:!1,isFailed:!1,isSucceed:!1},error:{message:""}},l={key:"main",storage:s.a},O={list:b,add:Object(i.a)(l,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.constants.ADD_REQUESTED:return Object(a.a)(Object(a.a)({},j),{},{statuses:Object(a.a)(Object(a.a)({},e.statuses),{},{isStarted:!0,isPending:!0})});case u.constants.ADD_SUCCEEDED:return Object(a.a)(Object(a.a)({},e),{},{statuses:{isStarted:!1,isPending:!1,isFinished:!0,isFailed:!1,isSucceed:!0}});case u.constants.ADD_FAILED:return Object(a.a)(Object(a.a)({},j),{},{statuses:{isStarted:!1,isPending:!1,isFinished:!0,isFailed:!0,isSucceed:!1},error:{message:Object(o.b)((function(){return t.payload.message}),"")}});default:return e}}))},p=Object(r.c)(O);t.default=p},132:function(e,t,n){"use strict";n.r(t),n.d(t,"getList",(function(){return m})),n.d(t,"addElement",(function(){return D})),n.d(t,"default",(function(){return g}));var r=n(11),a=n(21),c=n.n(a),s=n(20),i=n(7),u=n(207),o=n(90);o.a.initializeApp({apiKey:"AIzaSyDU2aOroAgqeKemO6qdFCaRSl60PqFC5mM",authDomain:"films-77573.firebaseapp.com",projectId:"films-77573",storageBucket:"films-77573.appspot.com",messagingSenderId:"691827665866",appId:"1:691827665866:web:fe04b91804f8ca6e637d33",measurementId:"G-RS9CM5BC29"});o.a.auth();var d=o.a.firestore(),f=d.collection("films");function b(e){var t=f.doc();return e.id=t.id,t.set(e)}function j(){return l.apply(this,arguments)}function l(){return(l=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.collection("films"),e.abrupt("return",t.orderBy("addDate","desc").get());case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=c.a.mark(m),p=c.a.mark(D),E=c.a.mark(g);function m(){var e,t,n,r;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(s.b)(j);case 3:return e=a.sent,t=[],e.forEach((function(e){t.push(e.data())})),a.next=8,Object(s.c)(i.actions.get.success({data:t}));case 8:a.next=15;break;case 10:return a.prev=10,a.t0=a.catch(0),n=a.t0.response,r=a.t0.message,a.next=15,Object(s.c)(i.actions.get.failure(n,r));case 15:case"end":return a.stop()}}),O,null,[[0,10]])}function D(e){var t,n,a;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload.data,c.prev=1,c.next=4,Object(s.b)(b,Object(r.a)(Object(r.a)({},t),{},{addDate:(new Date).getTime()}));case 4:return c.next=6,Object(s.a)([Object(s.c)(i.actions.add.success()),Object(s.c)(i.actions.get.request())]);case 6:c.next=13;break;case 8:return c.prev=8,c.t0=c.catch(1),n=c.t0.response,a=c.t0.message,c.next=13,Object(s.c)(i.actions.add.failure(n,a));case 13:case"end":return c.stop()}}),p,null,[[1,8]])}function g(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.e)(i.constants.LIST_REQUESTED,m);case 2:return e.next=4,Object(s.e)(i.constants.ADD_REQUESTED,D);case 4:case"end":return e.stop()}}),E)}},140:function(e,t,n){},222:function(e,t,n){},232:function(e,t,n){var r={"./Main/actions/index.js":93,"./Main/constants/index.js":94,"./Main/index.js":7,"./Main/reducers/index.js":131,"./Main/sagas/index.js":132,"./Main/selectors/index.js":96};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=232},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(33),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{type:e,payload:t}},c=function(e,t){try{var n=e();return Object(r.isBoolean)(t)&&!Object(r.isBoolean)(n)||(Object(r.isString)(t)&&!Object(r.isString)(n)||Object(r.isArray)(t)&&!Object(r.isArray)(n)||Object(r.isObject)(t)&&!Object(r.isObject)(n))?t:n||t}catch(a){return t}}},397:function(e,t,n){"use strict";n.r(t);var r,a,c,s,i,u=n(2),o=n.n(u),d=n(86),f=n.n(d),b=(n(222),n(63)),j=n(215),l=n(14),O=(n(140),n(136)),p=n(51),E=n(7),m=n(216),D=n(52),g=n(212),S=n(399),v=n(12),h=Object(D.a)(m.a)(r||(r=Object(p.a)(["\n  color: green;\n  margin-left: 1rem;\n  font-size: larger;\n"]))),x=D.a.div(a||(a=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),A=D.a.div(c||(c=Object(p.a)(["\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: .5rem .5rem .25rem;\n  border-bottom: 1px dashed gray;\n"]))),_=D.a.button(s||(s=Object(p.a)(["\n  padding: 0.25rem 1rem;\n  border-radius: 3px;\n  /* Color the border and text with theme.main */\n  color: ",";\n  border: 2px solid ",";\n"])),(function(e){return e.theme.main}),(function(e){return e.theme.main})),I=D.a.input.attrs((function(e){return{type:"text",size:e.size||"1rem"}}))(i||(i=Object(p.a)(["  \n  padding: 0.25rem;\n  border: 2px solid palevioletred;\n"]))),y=function(){var e=Object(b.b)(),t=Object(b.c)(E.selectors.selectList),n=Object(u.useState)(""),r=Object(O.a)(n,2),a=r[0],c=r[1],s=Object(u.useState)([]),i=Object(O.a)(s,2),o=i[0],d=i[1];Object(u.useEffect)((function(){d(t.data)}),[t]);var f=function(){e(E.actions.get.request())};Object(u.useEffect)((function(){f()}),[]);var j=Object(u.useCallback)((function(){e(E.actions.add.request({name:a}))}),[a]),l=function(e){var t=new Date(e);return Object(g.a)(t)?Object(S.a)(t,"yyyy.MM.dd 'at' HH:mm:ss"):"undefined"};return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("hr",{}),Object(v.jsxs)(x,{children:[Object(v.jsx)(I,{onChange:function(e){return c(e.target.value)}}),Object(v.jsx)(_,{onClick:j,children:" Click to Add"}),Object(v.jsx)(h,{onClick:f})]}),Object(v.jsx)("hr",{}),null===o||void 0===o?void 0:o.map((function(e){return Object(v.jsxs)(A,{children:[Object(v.jsx)("span",{children:l(e.addDate)})," ",Object(v.jsx)("span",{children:e.name})]},e.id)}))]})},C=n(89),T=n(214),w=function(){return console.log("AIzaSyDU2aOroAgqeKemO6qdFCaRSl60PqFC5mM","sss"),Object(v.jsx)(b.a,{store:C.store,children:Object(v.jsx)(T.a,{persistor:C.persistor,children:Object(v.jsx)(j.a,{children:Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{path:"/",exact:!0,children:Object(v.jsx)(y,{})}),Object(v.jsx)(l.a,{path:"/main",exact:!0,children:Object(v.jsx)(y,{})})]})})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,400)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};f.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root")),F()},7:function(e,t,n){"use strict";n.r(t),n.d(t,"moduleName",(function(){return u}));var r=n(93);n.d(t,"actions",(function(){return r}));var a=n(94);n.d(t,"constants",(function(){return a}));var c=n(131);n.d(t,"reducer",(function(){return c.default}));var s=n(132);n.d(t,"saga",(function(){return s.default}));var i=n(96);n.d(t,"selectors",(function(){return i}));var u="Main"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return x})),n.d(t,"persistor",(function(){return A}));var r={};n.r(r),n.d(r,"getAllModules",(function(){return f})),n.d(r,"getAllModuleReducers",(function(){return b})),n.d(r,"getAllModuleSagas",(function(){return j}));var a=n(19),c=n(42),s=n(217),i=n(49),u=n.n(i),o=n(88),d=n(11),f=function(e){var t;return(t=e).keys().map((function(e){return t(e)})).filter((function(e){return e.moduleName}))},b=function(e){return f(e,!0).filter((function(e){return e.reducer})).reduce((function(e,t){return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},t.moduleName,t.reducer))}),{})},j=function(e){return f(e,!1).filter((function(e){return e.saga})).map((function(e){return e.saga}))},l=function(){return n(232)},O=n(213),p=r.getAllModuleReducers(l()),E=Object(a.c)(Object(d.a)({firebase:O.firebaseReducer},p)),m=n(21),D=n.n(m),g=n(20),S=D.a.mark(v);function v(){var e,t;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.a)(r.getAllModuleSagas(l()));case 2:return e=r.getAllModuleSagas(l()),t=e.map((function(e){return Object(g.d)(D.a.mark((function t(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(g.b)(e);case 4:return t.abrupt("break",12);case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0,"Saga crash detected");case 10:t.next=0;break;case 12:case"end":return t.stop()}}),t,null,[[1,7]])})))})),n.next=6,Object(g.a)(t);case 6:case"end":return n.stop()}}),S)}var h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.reduxDevTools,i=void 0!==r&&r,o=Object(s.a)(),d={key:"root",storage:u.a,whitelist:[]},f=Object(c.a)(d,e),b=i&&"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0})||a.d,j=Object(a.e)(f,b(Object(a.a)(o))),l=Object(c.b)(j);return o.run(t),{store:j,persistor:l}}(E,v,{reduxDevTools:"true"}),x=h.store,A=h.persistor},93:function(e,t,n){"use strict";n.r(t),n.d(t,"get",(function(){return c})),n.d(t,"add",(function(){return s}));var r=n(7),a=n(26),c={request:function(){return Object(a.a)(r.constants.LIST_REQUESTED)},success:function(e){return Object(a.a)(r.constants.LIST_SUCCEEDED,{response:e})},failure:function(e,t){return Object(a.a)(r.constants.LIST_FAILED,{response:e,message:t})}},s={request:function(e){return Object(a.a)(r.constants.ADD_REQUESTED,{data:e})},success:function(){return Object(a.a)(r.constants.ADD_SUCCEEDED)},failure:function(e,t){return Object(a.a)(r.constants.ADD_FAILED,{response:e,message:t})}}},94:function(e,t,n){"use strict";n.r(t),n.d(t,"LIST_REQUESTED",(function(){return r})),n.d(t,"LIST_SUCCEEDED",(function(){return a})),n.d(t,"LIST_FAILED",(function(){return c})),n.d(t,"ADD_REQUESTED",(function(){return s})),n.d(t,"ADD_SUCCEEDED",(function(){return i})),n.d(t,"ADD_FAILED",(function(){return u}));var r="MAIN/LIST_REQUESTED",a="MAIN/LIST_SUCCEEDED",c="MAIN/LIST_FAILED",s="MAIN/ADD_REQUESTED",i="MAIN/ADD_SUCCEEDED",u="MAIN/ADD_FAILED"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"selectList",(function(){return c}));var r=n(208),a=n(7),c=Object(r.a)((function(e){return e[a.moduleName]}),(function(e){return e.list}))}},[[397,1,2]]]);
//# sourceMappingURL=main.049d6ebf.chunk.js.map