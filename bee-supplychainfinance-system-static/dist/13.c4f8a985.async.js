(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"9Aar":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=n(a("p0pE")),r=n(a("d6i3")),c=a("oC34"),u={namespace:"warningDetail",state:{steps:[],warningList:[],logs:[]},effects:{getSteps:r["default"].mark(function e(t,a){var n,s,u,d,i;return r["default"].wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=t.callback,u=a.call,d=a.put,e.next=4,u(c.getSteps,n);case 4:if(i=e.sent,0!==i.code){e.next=10;break}return e.next=8,d({type:"setSteps",payload:i.data});case 8:e.next=11;break;case 10:s&&s(i.code,i.msg);case 11:case"end":return e.stop()}},e)}),getWarningList:r["default"].mark(function e(t,a){var n,s,u,d,i;return r["default"].wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=t.success,u=a.call,d=a.put,e.next=4,u(c.getWarningList,n);case 4:if(i=e.sent,!i||0!==i.code){e.next=11;break}return e.next=8,d({type:"setWarningList",payload:i.data});case 8:s&&s(i.page),e.next=12;break;case 11:s&&s(i);case 12:case"end":return e.stop()}},e)}),getLogs:r["default"].mark(function e(t,a){var n,s,u,d,i;return r["default"].wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=t.success,u=a.call,d=a.put,e.next=4,u(c.getLogs,n);case 4:if(i=e.sent,0!==i.code){e.next=11;break}return e.next=8,d({type:"setLogs",payload:i.data});case 8:s&&s(i.page),e.next=12;break;case 11:s&&s(i.code,i.msg);case 12:case"end":return e.stop()}},e)}),addWarning:r["default"].mark(function e(t,a){var n,s,u,d;return r["default"].wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=t.success,u=a.call,a.put,e.next=4,u(c.addWarning,n);case 4:d=e.sent,s&&s(d);case 6:case"end":return e.stop()}},e)}),handleWarning:r["default"].mark(function e(t,a){var n,s,u,d;return r["default"].wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=t.success,u=a.call,a.put,e.next=4,u(c.handleWarning,n);case 4:d=e.sent,s&&s(d);case 6:case"end":return e.stop()}},e)})},reducers:{setSteps:function(e,t){return(0,s["default"])({},e,{steps:t.payload})},setWarningList:function(e,t){return(0,s["default"])({},e,{warningList:t.payload})},setLogs:function(e,t){return(0,s["default"])({},e,{logs:t.payload})}}};t["default"]=u}}]);