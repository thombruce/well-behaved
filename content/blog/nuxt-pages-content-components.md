---
title: Nuxt Pages, Content and Components
date: 2021-09-18T16:42:47Z
---

Let's show off a little, shall we? One reason I love Nuxt Content is the capability to embed Nuxt and Vue components in Markdown content documents, which are then rendered by some Nuxt page, typically a dynamic one. For instance... let's add my clock widget, shall we?

```sh
yarn add @thombruce/vue-timepiece --dev
```

```js
export default {
  // ...
  buildModules: [
    // ...
    '@thombruce/vue-timepiece/nuxt',
    // ...
  ],
  // ...
}
```

And then to embed it in a document, I just add...

```md
<timepiece-analog></timepiece-analog>
```

...and it appears!

<timepiece-analog></timepiece-analog>

Fantastic.

Okay, that's a really strong start. Components inside of content, rendered by the files in `/pages`. But actually... those page files are components too. _No, I'm not thinking about embedding them here._ What I'm thinking is...

At present, this document is rendered by a page component at `pages/_collection/_slug.vue`. The underscore in both `_collection` and `_slug` communicates to Nuxt that these are dynamic pages, those values will differ and these should be used to render many different documents... like all the other blog pages. Buuuut... I could create a file at `pages/blog/nuxt-pages-content-components.vue`. That path would **exactly** match this document, and take priority over the dynamic page. I could do some interesting things with that...

1. The layout could be completely different for this page in particular
2. It could have its own application logic and dynamic content

I mean, I could program all sorts to appear on the page. Essentially we have a nesting structure like so:

- Page - top level, dynamic, highly programmatic
- Content - static
- Component - dynamic, highly programmatic

Once I do decide on the content's position on the page, that's pretty much set... but apart from that, both individual components that it contains and the surrounding page component can add a tonne of other flashy things. And I don't expect this has much of a performance cost... Maybe a little. But for static sites, all of these pages are generated anyway, so the result is always... all of these files exist, in a sense. Definitely something to look at, maybe I'll benchmark the build with and without in future, but for just now...

Let's add something nifty _outside_ of this content document.

What follows is not embedded in my Markdown doc, it is a custom page component built specifically to render this document and show you... uhmm... whatever appears below...