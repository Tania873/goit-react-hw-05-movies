"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{687:function(e,r,t){t.d(r,{DZ:function(){return _},Iy:function(){return o},_s:function(){return p},j3:function(){return f},lJ:function(){return h}});var n=t(861),a=t(757),s=t.n(a),c=t(243),u="3c255862ff74050ccdb5109073919cb8";function o(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/movie/day?",{params:{api_key:u}});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log("error = ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(r),{params:{api_key:u,language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log("error = ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("search/movie",{params:{api_key:u,language:"en-US",query:r,include_adult:!1,page:1}});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log("error = ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(r,"/credits"),{params:{api_key:u,language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log("error = ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(r,"/reviews"),{params:{api_key:u,language:"en-US",page:1}});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log("error = ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"},881:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),a=t(439),s=t(757),c=t.n(s),u=t(791),o=t(87),i=t(689),p=t(687),l="Movies_container__+-Cnt",f="Movies_form__4ow+Z",v="Movies_moviesList__lstJL",h="Movies_input__KrUqs",m="Movies_button__GcIka",_="Movies_moviesItem__2Ne0E",d="Movies_moviesLink__c+bDX",g="Movies_div__Jujoi",y=t(184),x=function(){var e=(0,u.useState)([]),r=(0,a.Z)(e,2),t=r[0],s=r[1],x=(0,u.useState)(!1),k=(0,a.Z)(x,2),w=k[0],b=k[1],Z=(0,o.lr)(),j=(0,a.Z)(Z,2),N=j[0],M=j[1],S=N.get("search"),U=(0,i.TH)();return(0,u.useEffect)((function(){if(b(!1),S)return function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.j3)(S);case 2:if(r=e.sent,0!==(t=r.data.results).length){e.next=7;break}return b(!0),e.abrupt("return");case 7:s(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(S),function(){}}),[S]),(0,y.jsxs)("div",{className:l,children:[(0,y.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault();var r=e.currentTarget,t=r.elements.search.value;M({search:t}),r.reset()},children:[(0,y.jsx)("input",{className:h,name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,y.jsx)("button",{className:m,type:"submit",children:" "})]}),S&&!w&&(0,y.jsx)("ul",{className:v,children:t.map((function(e){var r=e.id,t=e.name,n=e.title;return(0,y.jsx)("li",{className:_,children:(0,y.jsxs)(o.rU,{className:d,to:"".concat(r),state:{from:U},children:[n," ",t]},r)},r)}))}),w&&(0,y.jsx)("div",{className:g,children:"Aw, there are no results for your query!"})]})}}}]);
//# sourceMappingURL=881.c5f2c16e.chunk.js.map