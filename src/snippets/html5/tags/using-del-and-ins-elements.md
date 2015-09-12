---
title: Using the del and ins Elements
tags: html5
template: /base.jade
category: snippet
---

The HTML5 `del` and `ins` elements support annotating markup with records of changes to the content or structure. But when should they be used? Certainly, marking up every change to the document could get very tedious. In many cases, this kind of fine-grained recording won't be necessary (or feasible). In other circumstances, a record of changes to the document could be valuable or even legally or contractually necessary.

Some examples of documents that could benefit from change records include:

* Reflecting the changes in legal documents such as contracts or legislation.
* News articles that want to publish corrections.
* Documentation for public APIs. The change records could help users identify what has changed between API versions.

Recording these content changes is a practice that's only as valuable as the change log documentation that accompanies those records. With that in mind, populating the `ins` and `del` tag's `cite` attribute is almost a requirement. That attribute should point to an included changelog, likely at the bottom of the page, that provides a meaningful yet concise description of the changes.

Timestamps, in the form of `datetime` attribute values, could also be useful but are less important than the `cite` values. Understand exactly when a change was made is usually far lass interesting than knowing why a change was made.
