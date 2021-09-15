(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,5,6,9],{4581:function(t,e,r){var content=r(4586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("e40228a2",content,!0,{sourceMap:!1})},4582:function(t,e,r){"use strict";r.r(e);var n={props:["toc"]},c=r(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",t._l(t.toc,(function(link){return r("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[r("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},4583:function(t,e,r){"use strict";var n=r(4),c=r(4584),l=r(36),o=r(27),d=r(63),h=r(130);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=l(this),r=o(e.length),n=h(e,0);return n.length=c(n,e,e,r,0,void 0===t?1:d(t)),n}})},4584:function(t,e,r){"use strict";var n=r(95),c=r(27),l=r(75),o=function(t,e,source,r,d,h,f,_){for(var element,m=d,v=0,x=!!f&&l(f,_,3);v<r;){if(v in source){if(element=x?x(source[v],v,e):source[v],h>0&&n(element))m=o(t,e,element,c(element.length),m,h-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[m]=element}m++}v++}return m};t.exports=o},4585:function(t,e,r){"use strict";r(4581)},4586:function(t,e,r){var n=r(37)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\ndl.authors dd[data-v-2fe40326]:first-of-type:before{\n  content:"by "\n}\ndl.authors dd[data-v-2fe40326]:not(:last-child):after{\n  content:", "\n}\ndl.authors dd[data-v-2fe40326]:nth-last-child(2):after{\n  content:" and "\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},4587:function(t,e,r){"use strict";r.r(e);var n={props:["articles"]},c=r(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.articles?t._l(t.articles,(function(article){return r("article",{staticClass:"card card-side bordered mb-4"},[r("figure",[article.image?r("NuxtImg",{staticStyle:{width:"200px",height:"200px","object-fit":"cover"},attrs:{src:article.image,width:"200",height:"200"}}):t._e()],1),r("div",{staticClass:"card-body"},[r("header",[r("h2",{staticClass:"card-title"},[r("NuxtLink",{attrs:{to:article}},[t._v(t._s(article.title))])],1),article.date?r("time",{attrs:{datetime:article.date}},[t._v(t._s(t._f("toLocaleString")(article.date)))]):t._e()]),article.description?r("div",[r("p",[t._v(t._s(article.description))])]):t._e()])])})):r("div",{staticClass:"text-center"},[r("span",{staticClass:"text-2xl text-secondary"},[t._v("There's nothing to see yet.")])])],2)}),[],!1,null,null,null);e.default=component.exports},4588:function(t,e,r){"use strict";r.r(e);r(14),r(4583);var n=r(56),c={props:["article"],computed:{categories:function(){return(this.article.categories||[this.article.category]).flat().filter(Boolean)},series:function(){return[this.article.series].flat().filter(Boolean)},tags:function(){return[this.article.tags].flat().filter(Boolean)},authors:function(){return(this.article.authors||[this.article.author]).flat().filter(Boolean)}},methods:{parameterize:function(t){return Object(n.kebabCase)(t)}}},l=(r(4585),r(2)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[t.categories.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Categories")]),t._l(t.categories,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/categories/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/categories/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),t.series.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Series")]),t._l(t.series,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/series/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/series/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),r("h1",[t._v(t._s(t.article.title))]),t.authors.length?r("address",[r("dl",{staticClass:"authors"},[r("dt",{staticClass:"sr-only"},[t._v("Authors")]),t._l(t.authors,(function(e){return r("dd",{staticClass:"inline"},[t.$router.match("/authors/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/authors/"+t.parameterize(e),rel:"author"}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2)]):t._e(),t.tags.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Tags")]),t._l(t.tags,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/tags/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/tags/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),t.article.date?r("time",{staticClass:"block",attrs:{pubdate:"",datetime:t.article.date}},[t._v(t._s(t._f("toLocaleString")(t.article.date)))]):t._e(),t.article.image?r("NuxtImg",{attrs:{src:t.article.image,sizes:"xs:320px sm:640px md:768px"}}):t._e()],1)}),[],!1,null,"2fe40326",null);e.default=component.exports},4589:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},c=r(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",[r("h2",[t._v("Table of Contents")]),r("TntUITableOfContents",{attrs:{toc:t.article.toc}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntUITableOfContents:r(4582).default})},4590:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},c=r(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.article.container},[r("NuxtContent",{attrs:{document:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports},4591:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},c=r(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("TntContentHeader",{attrs:{article:t.article}}),0!=t.article.showToC&&t.article.toc&&t.article.toc.length?[r("TntContentToC",{attrs:{article:t.article}}),r("hr")]:t._e(),r("TntContentBody",{attrs:{article:t.article}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntContentHeader:r(4588).default,TntContentToC:r(4589).default,TntContentBody:r(4590).default})},4610:function(t,e,r){"use strict";r.r(e);var n=r(8),c=r(3),l=(r(28),r(96),r(41),r(15),r(45),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,l,o,d,h,f,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.$taxonomies,o=t.redirect,d=t.query,h=t.params,f=h.slug,e.next=4,r(h.collection,f).where({draft:{$ne:!0}}).fetch().catch(Object(c.a)(regeneratorRuntime.mark((function t(){var e,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=h.collection,t.next=3,l(e,"",{deep:!0}).find(h.slug);case 3:return c=t.sent,t.next=6,r("",{deep:!0}).where({$and:[{draft:{$ne:!0}},{$or:[Object(n.a)({},e,{$contains:c.title}),Object(n.a)({},e,{$eq:c.title})]}]}).sortBy("date","desc").fetch();case 6:return o=t.sent,t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)}))));case 4:if(!(article=e.sent).redirect){e.next=9;break}o({path:article.redirect,query:d}),e.next=10;break;case 9:return e.abrupt("return",{slug:f,article:article});case 10:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.title,meta:[{hid:"og:title",property:"og:title",content:"".concat(this.article.title," | ").concat("Well Behaved")},{hid:"og:description",property:"og:description",content:"".concat(this.article.description?this.article.description:"An excuse for bad behaviour.")},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:"".concat("https://wellbehaved.thombruce.com").concat(this.$route.fullPath,"/")},{hid:"og:image",property:"og:image",content:"".concat("https://wellbehaved.thombruce.com").concat(this.article.image?this.$img(this.article.image,{width:"1200px",height:"627px"}):"/wellbehaved.jpg")}]}}}),o=r(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[Array.isArray(t.article)?r("article",[r("header",[r("h1",[t._v(t._s(t._f("titleize")(t.slug)))])]),r("TntBlogList",{attrs:{articles:t.article}})],1):r("TntContent",{attrs:{article:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntContent:r(4591).default,TntBlogList:r(4587).default})}}]);