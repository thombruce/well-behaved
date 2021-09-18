<template lang='pug'>
div
  TntContent(:article='article')
  .card.bordered
    .card-body
      FizzBuzz(:terms="{ 3: 'Fizz', 5: 'Buzz', 13: 'Foo' }" :upTo='1000')
</template>

<script>
export default {
  async asyncData ({ $content, redirect, query }) {
    const slug = 'fizzbuzz'

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
