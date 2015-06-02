---
title: The HTML5 main Element
tags: html5
template: /base.jade
category: snippet
---

The `main` element is a container that designates the primary content of a document. You can think of it as the portion of the page where the user's focus should first be directed upon loading the page. Because the `main` element wraps the primary page content, it should contain the document outline rather than be a part of it. For instance, if there is a table of contents, that will be contained within the `main`, rather than including the `main`.

There should only one `main` element per document (there can be only one primary focus). Currently the [HTML5 spec](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-main-element) forbids the `main` element from being a descendant of either article, aside, footer, header, or nav elements. It looks like this [restriction will be removed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main#Specifications) in an upcoming, but I see no point in making the `main` element a child of any of those other elements. `header` and `footer` elements should be siblings of the `main` element, while `article`, `aside`, and `nav` elements can reside inside of the `main` element.

Some examples of good candidates for the `main` tag:

* The front page of a newspaper site. Multiple articles would be shown, each within a child `article` element.
* An interior page of a newspaper site. In this case only a single `article` might comprise the entire `main` content.
* The content of a wiki page. The `main` element would contain a single `article` with multiple `section` children. A `nav` representing the table of contents for the document would also be a direct child of the `main`.
* A search results page. The results themselves might be matching `article`s.

Consider a basic page that includes a list of blog posts, along with common site-wide header and footer sections. A semantic markup for such a page would look something like this:

* `body`
    * `header`
    * `main`
        * `article`
            * `section`
            * `section`
        * `article`
            * `section`
            * `section`
    * `footer`

Note that the header and footer elements are siblings of the `main` element. Also note that the primary document content cascades in order of increasing granularity from `main` to multiple `article`s to multiple `section`s.
