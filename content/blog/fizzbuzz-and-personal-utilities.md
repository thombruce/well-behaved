---
title: FizzBuzz and Personal Utilities
date:
---

[Yesterday](/blog/fizzbuzz) I wrote up a little Vue component that basically does FizzBuzz for any given range of numbers and allows for the ruleset to be extended or changed by passing in a set of terms. And that's... great. It's a messy inclusion on this site, but that is what this site is meant for; rough work, rough journaling - it isn't supposed to make sense... or even be grammatically comfortable <- _The grammar on that sentence? Yikes!_

That said, I did get to thinking... _okay, well that's fine for Vue but I could generalise the actual FizzBuzz logic further in pure JavaScript and create components for any library from that._ Essentially I got to thinking I _could_ make a library specifically dedicated to FizzBuzz. What would be the point?

Well, FizzBuzz isn't actually all that useful an application. Sure, the same logic proves competency and can be applied to other problems, but FizzBuzz is itself a pretty niche application. The _point_ is to demonstrate process and competency. _So then_, I thought, _if I do a FizzBuzz library, it should also demonstrate the process and explain to others how one may go about answering the question._ Easy; I could add that to a readme. And yet...

I'd still be dedicating a whole repo to developing a little library for FizzBuzz? Can I do better than that?

Enter monorepos, which I've already talked about [in another place](https://code.thombruce.com/). I already intended to achieve this as a monorepo, having a separate directory for the JS vs Vue code. But I could go further, and house those packages together with a bunch of utilities I'd like to throw together for... generating random numbers, passwords, other sort of... general utilities. Not all of them useful, but all of them together and accessible from a single... website full of them. So Thom's Utilities, then? Yeah, pretty much.

So I would have a _Utilities_ project with a _docs_ site and nested hierarchy of _packages_ managed by Yarn Workspaces and Lerna. Easy enough. Assuming both of those support the hierarchical structure I'm thinking of then we'd wind up with a directory structure a bit like...

```txt
📂 util
├── 📁 docs
├── 📂 packages
|   └── 📂 fizzbuzz
|       ├── 📂 packages
|       |   ├── 📁 js
|       |   └── 📁 vue
|       ├── package.json
|       └── README.md
├── package.json
└── README.md
```

In the above illustration, the root project called 'util' is a workspace with numerous packages; most would live under the 'packages' directory with the exception of 'docs'. However, 'fizzbuzz' is **also** a workspace with numerous packages, those being simply called 'js' and 'vue' depending on target framework.

That's what I'm thinking, right... It gives me a collective space to work on certain utility projects that are _good code_ but don't necessarily justify having their own repositories. And we can change our mind later; it's trivial to move packages out of such a monorepo. If and when that becomes necessary, then it's easily done. But the benefit of doing it this way is that the 'docs' site always serves as something that can use and test the latest code.

I mean I just don't see the benefit of a whole separate project just for FizzBuzz, and yet it is something that I think will be worthwhile to demonstrate on a website showing off utilities I've created, little applets.

Yeah, okay. I've convinced myself. That's what I'm gonna do!

Or is it? Let's quickly second-guess that. I have in my mind that I'll convert the FizzBuzz Vue component I wrote yesterday into a more general JS module, as well as a Vue component, but actually... the Vue component is redundant. The JS module will essentially do everything I want apart from styling, but styling and markup are application-specific... _I think_. I mean, certainly I prefer the sort of library that simply offers an API for constructing styled components rather than one which simply provides them. The component parts I will be creating are... the output, range selectors for our `from` and `to` values, and an extendible, shrinkable and modifiable list of rules (our `terms`). Those component-parts actually share more in common with other UI components I may like to build than they do with the core code in this case. In other words... they're a very different scope. I should let the application, and maybe a UI library handle those UI parts.

This means that the FizzBuzz library I will be putting together should work with just one very small file. That... shouldn't be surprising, should it? Well, it isn't...

No, I'm just realising we over-thought this previously. The 'fizzbuzz' package won't need its own sub-packages, we don't need to worry about nested packages yet. All we need is this:

```txt
📂 util
├── 📁 docs
├── 📂 packages
|   └── 📂 fizzbuzz
|       ├── 📂 src
|       |   └── index.js
|       ├── package.json
|       └── README.md
├── package.json
└── README.md
```

...admittedly doesn't look like much of a reduction, but consider that those 'js' and 'vue' folders were themselves full-fledged packages, whereas here... 'src' simply contains `index.js`... it's a bigger reduction than it looks. And let's be honest, this is already more though than this particular little problem warrants. But we're learning, we're thinking in terms of... _"is this UI part needed, or is it out of scope?"_ And that's a good thing.

Y'know, on third-thought... I think I will separate the FizzBuzz utility out into its own repository. That way I could point to its development in the Git history, perhaps keep a simple CHANGELOG too; it could be an example of my development process... both for me and for others. Since it is such a simple utility, the history and structure of the project should be clear enough to get a sense of that process at a glance. Yeah, that's what I'll do...

The utilities site is practically ready to go; I'll just separate out the FizzBuzz utility and use it to illustrate a development process...

Yeah, I'm happy with that. I've done my best to separate commits on the FizzBuzz project out into meaningful, hopefully pretty readable steps here: https://github.com/thombruce/fizzbuzz/commits/main

And I've imported the utility over at https://util.thombruce.com/fizzbuzz with some of my own UI elements applied there for playing with the library, and I think that works great. Done!