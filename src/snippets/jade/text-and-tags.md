---
title: Mixing Jade Text and Tags
tags: jade
template: /base.jade
category: snippet
---

Commonly you'll have tags that markup small portions of a block of otherwise plain text. An example would be a link to an FAQ page within a small statement that directs users to visit that page for support:

```
<p>
  If you have questions, please visit our <a href="/help/faq">FAQ</a> for answers to the most commonly asked questions.
</p>
```

There are a couple options for marking this up in Jade. The first uses piped text, separating out the two blocks of plaintext on either side of the tag, and listing the `a` tag on it's own line as well. The markup would look like this:

```
p
  | If you have questions, please visit our
  a(href="/help/faq") FAQ
  | for answers to the most commonly asked questions.
```

Another more concise option is to take advantage of tag interpolation (the `#[ ]` structure). This allows all of the `p` tag's contents to be placed on one line. That markup would look like this:

```
p If you have questions, please visit our #[a(href="/help/faq") FAQ] for answers to the most commonly asked questions.
```

Finally, you can also use pure (longhand) HTML. This somewhat defeats the purpose of using Jade, but it is possible. With the expanded `a` tag, the Jade markup would look like this:

```
p If you have questions, please visit our <a href="/help/faq">FAQ</a> for answers to the most commonly asked questions.
```
