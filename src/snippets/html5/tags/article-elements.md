---
title: The HTML5 article Element
tags: html5
template: /base.jade
category: snippet
---

`article` elements wrap around content that is self-contained. What kind of content is self-contained? A good rule of thumb suggested in the HTML5 spec and elsewhere is to consider whether the content is redistributable or syndicatable. If that content is still useful when removed and placed into another context, then it likely is a good candidate for an article tag.

There can be one or many `article`s within a given document. It's also legal to nest `article` elements. Consider a simple product page that lists product details along with reviews. The entire product page, both the details and reviews, could be wrapped in one `article`. While the details would belong directly to the main product `article`, the reviews could also be `article`s themselves. The reviews have value outside of the product details page, for instance as pullquotes alongside a product sale banner.

Common semantic child elements of `article` are `header`, `footer`, `section`, `nav`, and `aside`. Most `article` elements should have a `header` child with a heading (`h1`, `h2`, etc.) that identifies that content. `footer`s within articles are an excellent place for article metadata like publish date or the author bio. `section`s can be used to divide the content of the `article` if that makes the content more understandable. `nav` elements can contain navigation lists that point to the `section`s within an article.

Some examples of good candidates for the `article` tag:

* Individual articles listed on a news site.
* An article in Wikipedia.
* Product detail cards within a store listing page.
* Blog posts.
* Blog comments, product reviews, social media feeds (e.g., each individual Twitter comment on the main article).
