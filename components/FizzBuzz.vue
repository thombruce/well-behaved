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
    upTo: {
      type: Number,
      default: 100
    }
  },
  computed: {
    fizzbuzz () {
      const terms = this.terms
      const upTo = this.upTo

      let values = []

      for (let i = 1; i <= upTo; i++) {
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