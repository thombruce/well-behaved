(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{4597:function(t,e,r){"use strict";r.r(e);r(2333);var n={props:{terms:{type:Object,default:function(){return{3:"Fizz",5:"Buzz"}}},from:{type:Number,default:1},to:{type:Number,default:100}},computed:{fizzbuzz:function(){for(var t=this.terms,e=this.from,r=this.to,n=[],i=e;i<=r;i++){var o="";for(var f in t)i%f==0&&(o+=t[f]);""===o&&(o+=i),n.push(o)}return n}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",t._l(t.fizzbuzz,(function(e){return r("li",[t._v(t._s(e))])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);