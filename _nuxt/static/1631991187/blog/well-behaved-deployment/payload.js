__NUXT_JSONP__("/blog/well-behaved-deployment", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao){return {data:[{slug:F,article:{slug:F,title:N,date:O,toc:[],body:{type:n,children:[{type:b,tag:f,props:{},children:[{type:a,value:P}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:Q}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:R},{type:b,tag:s,props:{href:S,rel:[t,u,v],target:w},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:i,props:{},children:[{type:a,value:V}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:X},{type:b,tag:h,props:{},children:[{type:a,value:Y}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:_}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:$}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:aa},{type:b,tag:i,props:{},children:[{type:a,value:o}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:ac}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:ad},{type:b,tag:s,props:{href:x,rel:[t,u,v],target:w},children:[{type:a,value:x}]},{type:a,value:ae}]}]},dir:p,path:af,extension:q,createdAt:j,updatedAt:j},_img:{}}],fetch:{"data-v-5ed6e13f:0":{collections:{"/blog":[{slug:"fizzbuzz",title:"FizzBuzz",date:"2021-09-18T17:27:32.000Z",toc:[],body:{type:n,children:[{type:b,tag:f,props:{},children:[{type:b,tag:"nuxt-link",props:{to:ag},children:[{type:a,value:"Now that I know"}]},{type:a,value:" that I can mix up my blog posts by giving them their own page components, and since I'm not yet decided where to place my coding experiments here, I want to use this pattern to get something off my mind... which is FizzBuzz."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"FizzBuzz is a standard coding challenge in interviews. The rules are simple: List a sequence of integers; for each integer that is a multiple of 3, output 'Fizz' instead; for each that is a multiple of 5, output 'Buzz' instead; and for each that is a multiple of both 3 and 5 (multiples of 15), output 'FizzBuzz' instead. Generally the challenge is designed to see how programmers code, whether they leave themselves room for adaptation and alteration, or if they just rush through the problem with the given rules..."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"And I just want to write a simple FizzBuzz thing because I always forget what FizzBuzz is when it comes to interviews. So... let's create a page component and the rest of this page will just be that and output FizzBuzz up to... let's say, 1000. But let's make it possible to change and configure that value, perhaps some other values too."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"But that's all. This is just 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, from here on out..."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Actually, I'll do you one better. I've generalised the code so that it can go up to any number of my choice and accepts a "},{type:b,tag:h,props:{},children:[{type:a,value:"terms"}]},{type:a,value:" parameter with integer-word combos with which it will construct phrases. Let's say we want the general FizzBuzz problem for positive integers up to 1000, plus for multiples of 13 we should also add 'Foo'. I just include my new component like so..."}]},{type:a,value:c},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:["language-html",B]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,l]},children:[{type:b,tag:d,props:{className:[e,l]},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:ah}]},{type:a,value:ai}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,G]},children:[{type:a,value:":terms"}]},{type:b,tag:d,props:{className:[e,H]},children:[{type:b,tag:d,props:{className:[e,g,I]},children:[{type:a,value:J}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:aj}]},{type:a,value:"{ 3: "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:"Fizz"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:", 5: "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:"Buzz"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:", 13: "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:"Foo"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:" }"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:aj}]}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,G]},children:[{type:a,value:":from"}]},{type:b,tag:d,props:{className:[e,H]},children:[{type:b,tag:d,props:{className:[e,g,I]},children:[{type:a,value:J}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:"-15"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,G]},children:[{type:a,value:":to"}]},{type:b,tag:d,props:{className:[e,H]},children:[{type:b,tag:d,props:{className:[e,g,I]},children:[{type:a,value:J}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:"1000"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:C}]}]},{type:b,tag:d,props:{className:[e,l]},children:[{type:b,tag:d,props:{className:[e,l]},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:ak}]},{type:a,value:ai}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:C}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"And the code is generalised enough to handle that. If you want to look for the first instance of 'FizzBuzzFoo', it happens at 195, the first common multiple of 3, 5 and 13."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"EDIT: Actually, I've just also made the lower bound a variable; you can see above I call it as "},{type:b,tag:h,props:{},children:[{type:a,value:":from='-15'"}]},{type:a,value:". So now the first instance of 'FizzBuzzFoo' is 0, because "},{type:b,tag:h,props:{},children:[{type:a,value:"0 modulo N"}]},{type:a,value:" for any value of N is 0, and I'm starting from a negative value."}]}]}]},dir:p,path:"\u002Fblog\u002Ffizzbuzz",extension:q,createdAt:j,updatedAt:j},{slug:"hello-world",title:"Hello, World!",date:"2021-09-15T21:54:05.000Z",toc:[],body:{type:n,children:[{type:b,tag:f,props:{},children:[{type:a,value:"Hi there, hello world, and welcome... to "},{type:b,tag:i,props:{},children:[{type:a,value:o}]},{type:a,value:", my excuse to not be. "},{type:b,tag:i,props:{},children:[{type:a,value:o}]},{type:a,value:" is a deliberate misnomer, a contradiction at odds with my intentions, an oxymoron by proxy. See, there's such a thing as good writing, as well-behaved websites and code, and I've got a few projects on the go where I'm aiming for that sort of thing..."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Actually, let's not bother listing them."}]},{type:a,value:" The key point is this: I agonise sometimes over where my writing fits, and where I should be writing some of the code that I want to be writing. I mean... in both fields, there are things which fit in certain scopes and I've tried to refine my works to fit into a certain subset of scopes... but what if some things don't fit? What if I just want to journal? What if I just want to mess around and... make a quick widget to show something off? What if those things don't necessitate whole additional scopes of their own? My answer..."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"An excuse to write poorly with no target length, no specific genres or topics. And an excuse to write code for the sake of writing code instead of... refining it and making it fit neatly into little packages. Things that start here might evolve into concepts developed elsewhere, and that's fine - that's the point! I just don't necessarily have the space for that right now, but this can be that space."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"And speaking of having no target length and not having to play by the rules..."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:al,props:{},children:[{type:a,value:"END."}]}]}]},dir:p,path:"\u002Fblog\u002Fhello-world",extension:q,createdAt:j,updatedAt:j},{slug:"nuxt-pages-content-components",title:"Nuxt Pages, Content and Components",date:"2021-09-18T16:42:47.000Z",toc:[],body:{type:n,children:[{type:b,tag:f,props:{},children:[{type:a,value:"Let's show off a little, shall we? One reason I love Nuxt Content is the capability to embed Nuxt and Vue components in Markdown content documents, which are then rendered by some Nuxt page, typically a dynamic one. For instance... let's add my clock widget, shall we?"}]},{type:a,value:c},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,"language-text"]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"yarn add @thombruce\u002Fvue-timepiece --dev\n"}]}]}]},{type:a,value:c},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,"language-js"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,am,an]},children:[{type:a,value:"export"}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,am,an]},children:[{type:a,value:"default"}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"{"}]},{type:a,value:K},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:E}]},{type:a,value:"\n  buildModules"},{type:b,tag:d,props:{className:[e,"operator"]},children:[{type:a,value:":"}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"["}]},{type:a,value:L},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:E}]},{type:a,value:L},{type:b,tag:d,props:{className:[e,"string"]},children:[{type:a,value:"'@thombruce\u002Fvue-timepiece\u002Fnuxt'"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:ao}]},{type:a,value:L},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:E}]},{type:a,value:K},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"]"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:ao}]},{type:a,value:K},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"}"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"And then to embed it in a document, I just add..."}]},{type:a,value:c},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,"language-md"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,l]},children:[{type:b,tag:d,props:{className:[e,l]},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:ah}]},{type:a,value:M}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:C}]}]},{type:b,tag:d,props:{className:[e,l]},children:[{type:b,tag:d,props:{className:[e,l]},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:ak}]},{type:a,value:M}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:C}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"...and it appears!"}]},{type:a,value:c},{type:b,tag:M,props:{},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Fantastic."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Okay, that's a really strong start. Components inside of content, rendered by the files in "},{type:b,tag:h,props:{},children:[{type:a,value:"\u002Fpages"}]},{type:a,value:". But actually... those page files are components too. "},{type:b,tag:i,props:{},children:[{type:a,value:"No, I'm not thinking about embedding them here."}]},{type:a,value:" What I'm thinking is..."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"At present, this document is rendered by a page component at "},{type:b,tag:h,props:{},children:[{type:a,value:"pages\u002F_collection\u002F_slug.vue"}]},{type:a,value:". The underscore in both "},{type:b,tag:h,props:{},children:[{type:a,value:"_collection"}]},{type:a,value:" and "},{type:b,tag:h,props:{},children:[{type:a,value:"_slug"}]},{type:a,value:" communicates to Nuxt that these are dynamic pages, those values will differ and these should be used to render many different documents... like all the other blog pages. Buuuut... I could create a file at "},{type:b,tag:h,props:{},children:[{type:a,value:"pages\u002Fblog\u002Fnuxt-pages-content-components.vue"}]},{type:a,value:". That path would "},{type:b,tag:al,props:{},children:[{type:a,value:"exactly"}]},{type:a,value:" match this document, and take priority over the dynamic page. I could do some interesting things with that..."}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"The layout could be completely different for this page in particular"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"It could have its own application logic and dynamic content"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"I mean, I could program all sorts to appear on the page. Essentially we have a nesting structure like so:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Page - top level, dynamic, highly programmatic"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Content - static"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Component - dynamic, highly programmatic"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Once I do decide on the content's position on the page, that's pretty much set... but apart from that, both individual components that it contains and the surrounding page component can add a tonne of other flashy things. And I don't expect this has much of a performance cost... Maybe a little. But for static sites, all of these pages are generated anyway, so the result is always... all of these files exist, in a sense. Definitely something to look at, maybe I'll benchmark the build with and without in future, but for just now..."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Let's add something nifty "},{type:b,tag:i,props:{},children:[{type:a,value:"outside"}]},{type:a,value:" of this content document."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"What follows is not embedded in my Markdown doc, it is a custom page component built specifically to render this document and show you... uhmm... whatever appears below..."}]}]},dir:p,path:ag,extension:q,createdAt:j,updatedAt:j},{slug:F,title:N,date:O,toc:[],body:{type:n,children:[{type:b,tag:f,props:{},children:[{type:a,value:P}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:Q}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:R},{type:b,tag:s,props:{href:S,rel:[t,u,v],target:w},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:i,props:{},children:[{type:a,value:V}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:X},{type:b,tag:h,props:{},children:[{type:a,value:Y}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:_}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:$}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:aa},{type:b,tag:i,props:{},children:[{type:a,value:o}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:ac}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:ad},{type:b,tag:s,props:{href:x,rel:[t,u,v],target:w},children:[{type:a,value:x}]},{type:a,value:ae}]}]},dir:p,path:af,extension:q,createdAt:j,updatedAt:j}]}}},mutations:void 0}}("text","element","\n","span","token","p","punctuation","code","em","2021-09-18T18:50:46.816Z","'","tag"," ","root","Well Behaved","\u002Fblog",".md","li","a","nofollow","noopener","noreferrer","_blank","https:\u002F\u002Fwell-behaved.netlify.app\u002F","div","nuxt-content-highlight","pre","line-numbers","\u003E","comment","\u002F\u002F ...","well-behaved-deployment","attr-name","attr-value","attr-equals","=","\n  ","\n    ","timepiece-analog","Well Behaved Deployment","2021-09-16T11:46:11.000Z","Netlify or GitHub Pages for this one? What do we think?","I'm also having ideas about creating a shared monorepo for all of my blogs that would have a shared content folder... at least for blog posts, anyway. But then I don't know how, uhmmm, sensible that is.","Anyway, Netlify vs GitHub Pages. I frequently forget the reasons I had for picking one over the other... Currently use GitHub Pages to host the ","https:\u002F\u002Fthombruce.github.io\u002Ftnt","TNT docs",", and Netlify to serve all of my other sites. None of those use Netlify's advanced features though; I even moved the build process off Netlify and across to GitHub Actions. So I don't know if I need Netlify... well... I don't know if I need it ","yet"," - it might have benefits in the future, like the serverless functions offered by Netlify that I'm not yet using.","Actually, if I did move to a shared monorepo for all of my blogs that would lead to some issues, and it absolutely wouldn't work as a GitHub Pages site. Each GitHub repo gets precisely one GitHub pages site; it can be based on any branch or directory (I think) in the repo, but there can only be one. Netlify, on the other hand, could build multiple sites from the same repository, each site having its own ","dist"," folder. But I think I'm not going to pursue the monorepo idea here... I already have a separate mechanism for having the sites share content; it's imperfect, but it works. In which case...","Why Netlify?","GitHub Pages and Netlify have comparable bandwidth limitations at 100GB per month each. GitHub Pages has additional limitations on site size, at 1GB recommended repository size and 1GB limit on deployed site size. The main limiting factor on Netlify is build time - it stacks up quickly. On GitHub, build time is limited to 10 builds per hour but there's no limit on time used per month for free, open-source projects. This is actually why I no longer use Netlify's build processes, despite still using their service to deploy my sites.","But why? Why do I still use them to deploy my sites? I... don't know. Yet... despite not knowing, I still am tempted to deploy this "," website there. The interface is cleaner, more convenient for listing and navigating to individual sites, compared with GitHub where sites are mixed in with all of my other repositories...","I have a longterm answer to that problem, which is to create my own site management interface that communicates with both of their APIs among others, and provides a single UI for cross-service site and deployment management. But I'm not there yet...","Yeah, okay, for now I just like the interface of Netlify a lot and appreciate how convenient it makes listing and managing my sites. We'll deploy on Netlify. It only takes a second... and done! Well Behaved can be found at ",". Haven't bothered to give it a custom domain yet, perhaps I won't. DNS propagation takes a little while longer, and I don't really place that much importance on this website... It is, after all, just a place to misbehave.","\u002Fblog\u002Fwell-behaved-deployment","\u002Fblog\u002Fnuxt-pages-content-components","\u003C","fizz-buzz","\"","\u003C\u002F","strong","keyword","module",",")));