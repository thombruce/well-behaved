---
title: Well Behaved Deployment
date: 2021-09-16T11:46:11Z
---

Netlify or GitHub Pages for this one? What do we think?

I'm also having ideas about creating a shared monorepo for all of my blogs that would have a shared content folder... at least for blog posts, anyway. But then I don't know how, uhmmm, sensible that is.

Anyway, Netlify vs GitHub Pages. I frequently forget the reasons I had for picking one over the other... Currently use GitHub Pages to host the [TNT docs](https://thombruce.github.io/tnt), and Netlify to serve all of my other sites. None of those use Netlify's advanced features though; I even moved the build process off Netlify and across to GitHub Actions. So I don't know if I need Netlify... well... I don't know if I need it _yet_ - it might have benefits in the future, like the serverless functions offered by Netlify that I'm not yet using.

Actually, if I did move to a shared monorepo for all of my blogs that would lead to some issues, and it absolutely wouldn't work as a GitHub Pages site. Each GitHub repo gets precisely one GitHub pages site; it can be based on any branch or directory (I think) in the repo, but there can only be one. Netlify, on the other hand, could build multiple sites from the same repository, each site having its own `dist` folder. But I think I'm not going to pursue the monorepo idea here... I already have a separate mechanism for having the sites share content; it's imperfect, but it works. In which case...

Why Netlify?

GitHub Pages and Netlify have comparable bandwidth limitations at 100GB per month each. GitHub Pages has additional limitations on site size, at 1GB recommended repository size and 1GB limit on deployed site size. The main limiting factor on Netlify is build time - it stacks up quickly. On GitHub, build time is limited to 10 builds per hour but there's no limit on time used per month for free, open-source projects. This is actually why I no longer use Netlify's build processes, despite still using their service to deploy my sites.

But why? Why do I still use them to deploy my sites? I... don't know. Yet... despite not knowing, I still am tempted to deploy this _Well Behaved_ website there. The interface is cleaner, more convenient for listing and navigating to individual sites, compared with GitHub where sites are mixed in with all of my other repositories...

I have a longterm answer to that problem, which is to create my own site management interface that communicates with both of their APIs among others, and provides a single UI for cross-service site and deployment management. But I'm not there yet...

Yeah, okay, for now I just like the interface of Netlify a lot and appreciate how convenient it makes listing and managing my sites. We'll deploy on Netlify. It only takes a second... and done! Well Behaved can be found at https://well-behaved.netlify.app/. Haven't bothered to give it a custom domain yet, perhaps I won't. DNS propagation takes a little while longer, and I don't really place that much importance on this website... It is, after all, just a place to misbehave.