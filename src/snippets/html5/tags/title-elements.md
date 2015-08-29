---
title: The HTML5 title Element
tags: html5
template: /base.jade
category: snippet
---

The `title` element is one of the most straightforward of the HTML5 tags. Quite simply, it declares the title of the current document. Whatever text is contained within the `title` should be used by the browser to identify that particular document.

The HTML5 spec is rather strict about the `title`, requiring that exactly one `title` is on each document within the `head` section. The `title` must contain at least some text that is "[not inter-element whitespace](http://www.w3.org/TR/html5/document-metadata.html#the-title-element)". There are some cases where a `title` attribute is not needed. This is only possible when a high level protocol has already provided the document with a title outside of the HTML content. The most common example of this is HTML emails. In the case of HTML emails, the (HTML) document title can be determined from the Subject line of the email message.

The text within the `title` should identify the document as fully as possible outside of the context that it's current being presented in. To quote the spec, "the title describes the subject matter unambiguously". For instance, the `title` should have enough information to identify the page in a bookmark, search result, or browser history.
