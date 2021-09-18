<template lang='pug'>
ol
  li(v-for='val in fizzbuzz') {{ val }}
</template>

<script>
export default {
  props: {
    terms: {
      type: Object,
      default: function () {
        return {
          3: 'Fizz',
          5: 'Buzz'
        }
      }
    },

    from: {
      type: Number,
      default: 1
    },

    to: {
      type: Number,
      default: 100
    }
  },

  computed: {
    fizzbuzz () {
      const terms = this.terms
      const from = this.from
      const to = this.to

      let values = []

      for (let i = from; i <= to; i++) {
        let phrase = ''
        for (const factor in terms) {
          if (i % factor === 0) { phrase += terms[factor] }
        }
        if (phrase === '') { phrase += i }
        values.push(phrase)
      }

      return values
    }
  }
}
</script>