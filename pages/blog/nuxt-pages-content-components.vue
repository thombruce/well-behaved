<template lang='pug'>
div
  TntContent(:article='article')
  .card.bordered
    .card-body
      p Another clock, I guess:
      TimepieceAnalog
      p Maybe the theme change widget from TNT:
      TntUIThemeToggle
      p Nothing that impressive. All of this could have been added to the article itself. But it hasn't been. It does demonstrate the possibility of having very different custom page components per entry.
      p To go further, we could completely change up the layout, apply custom CSS to the page, add even more dynamic content... like, for example, this card linking back to this very page:
      TntBlogList(:articles='[article]')
      p This is a pretty powerful pattern...
</template>

<script>
export default {
  async asyncData ({ $content, redirect, query }) {
    const slug = 'nuxt-pages-content-components'

    const article = await $content('blog', slug)
      .where({ draft: { $ne: true } })
      .fetch()

    if (article.redirect) {
      redirect({ path: article.redirect, query: query })
    } else {
      return { slug, article }
    }
  },

  head () {
    return {
      title: this.article.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `${this.article.title} | ${process.env.siteTitle}` },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.article.description ? this.article.description : process.env.siteDescription}`
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: `${process.env.baseUrl}${this.$route.fullPath}/` },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.baseUrl}${this.article.image ? this.$img(this.article.image, { width: '1200px', height: '627px' }) : process.env.siteImg}`
        }
      ]
    }
  }
}
</script>
