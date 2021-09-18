---
title: FizzBuzz
date: 2021-09-18T17:27:32Z
---

[Now that I know](/blog/nuxt-pages-content-components) that I can mix up my blog posts by giving them their own page components, and since I'm not yet decided where to place my coding experiments here, I want to use this pattern to get something off my mind... which is FizzBuzz.

FizzBuzz is a standard coding challenge in interviews. The rules are simple: List a sequence of integers; for each integer that is a multiple of 3, output 'Fizz' instead; for each that is a multiple of 5, output 'Buzz' instead; and for each that is a multiple of both 3 and 5 (multiples of 15), output 'FizzBuzz' instead. Generally the challenge is designed to see how programmers code, whether they leave themselves room for adaptation and alteration, or if they just rush through the problem with the given rules...

And I just want to write a simple FizzBuzz thing because I always forget what FizzBuzz is when it comes to interviews. So... let's create a page component and the rest of this page will just be that and output FizzBuzz up to... let's say, 1000. But let's make it possible to change and configure that value, perhaps some other values too.

But that's all. This is just 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, from here on out...

Actually, I'll do you one better. I've generalised the code so that it can go up to any number of my choice and accepts a `terms` parameter with integer-word combos with which it will construct phrases. Let's say we want the general FizzBuzz problem for positive integers up to 1000, plus for multiples of 13 we should also add 'Foo'. I just include my new component like so...

```html
<fizz-buzz :terms="{ 3: 'Fizz', 5: 'Buzz', 13: 'Foo' }" :upTo='1000'></fizz-buzz>
```

And the code is generalised enough to handle that. If you want to look for the first instance of 'FizzBuzzFoo', it happens at 195, the first common multiple of 3, 5 and 13.
