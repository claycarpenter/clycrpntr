---
title: The samp Element
tags: html5
template: /base.jade
category: snippet
---

A `samp` element indicates that its contents contain sample output from a computer system. The element is the semantic opposite of the `kbd` element, which indicates any input into a computer system.

The spec [doesn't define](http://www.w3.org/TR/html5/text-level-semantics.html#the-samp-element) what exactly does and does not count as "output from a program or computing system". Nonetheless, any [phrasing content] is allowed as child content of a `samp` element, which includes the expected text elements as well as images, audio, and video. Considering that, I think any of these suggestions stay true to the semantics the spec has outlined for `samp`:

* Lines of command line output
* Screenshots
* Audio containing recordings of expected program output.
* Textual transcriptions of computer-generated speech.
* Videos showing the computer system or program in action.

Here is an example of using the `samp` element to present a command line prompt:

```
<p>
  After executing a command with <code>sudo</code>, you will be asked to provide the super user password at a <samp>Password:</samp> prompt.
</p>
```

And here is an example showing a transcription of computer audio output:

```
<p>
  Siri contains a number of easter eggs. For instance, asking Siri "when will the world end?" will get this response: <samp>Well, Unix 32-bit time overflows on January 19, 2038. Maybe then.</samp>
</p>
```

Thanks to [Business Insider](http://www.businessinsider.com/best-siri-responses-2015-6) for noting that Siri easter egg.
