---
title: The HTML5 address Element
tags: html5
template: /base.jade
category: snippet
---

`address` elements represent contact information. That contact information will be associated with the nearest `article` or `body` ancestor. Note that this is a bit different from some other semantic markup tags, such as `header` and `aside`, which pertain to the nearest sectioning content. `address` elements are only valid for either a single article or the document (page) as a whole.

`address` elements are not meant to represent postal addresses. For instance, when marking up the content of driving directions, it would not be appropriate to wrap the origin and destination addresses in `address` tags. If a postal address is the point of contact, though, it would be appropriate to use an `address` tag. If an online store was listing an address to receive returns, that would be a good candidate for an `address` tag.

An `address` tag should only contain contact information and the minimum amount of surrounding content to give that contact information context. This `address` element contains a customer support email address as well as a short note that lets users know what that address is:

```
<address>
    Contact <a href="mailto:support@example.com">Customer Service</a> for 24/7 support!
</address>
```

Because the `address` element is only intended to contain contact information, there a limits on the legal child elements of `address`. From the [spec](http://www.w3.org/TR/html5/sections.html#the-address-element):

> [...] no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.

Some examples of good candidates for the `address` tag:

* A postal address, if that postal address is a means of contact.
* The email address of the article's author.
* A link to the profile page of an article's author.
* An address for general customer service inquiries on a company's site-wide footer.

