---
title: The pre Element
tags: html5
template: /base.jade
category: snippet
---

`pre` elements indicate blocks of preformatted text. For most forms of textual output, the whitespace between sequential word blocks will always be rendered as a single space, no matter what the whitespace really is. With `pre` elements, the whitespace within the content of that tag is reproduced faithfully.

Good candidates for `pre` tags include:

* Computer code
* Textual computer output, especially command line sequences
* ASCII art
* Poetry with unusual formatting

In this example, the `pre` tag is used along with the `code` tag to produce a formatted code snippet:

```
<pre><code>function sayHello (name) {
  console.log('Hello, ' + name);
}</code></pre>
```

Here, the `pre` tag operates to retain the formatting of the simple bulleted list from an email message:

```
<pre>
Things I want to get done with this project phase:

 * Conduct user interviews
 * Get documentation for external interfaces
 * Start designing rough wireframes of the user interface
</pre>
```

And finally, what would this post be without some ASCII art:

```
<pre>
        /@@@@@@@\
      (@@@@@ # @@@@@\
     (` \@@@@@@@@~~~~
    /`    \@@@@@|
   /@@     ''''  \
  /@@@@\          |
 /@@@@@@@\        |
/@@@@@@@@@        |
|@@@@@@@@         |
|@@@@@@@          |
|@@@@@@@          |
|@@@'@@@@        |
|@@@ '@@@        ;
|@@@  @@;       ;
|@@@  ''       ;
(@@@@         ;
 (@@@@        |
  (__@@_______)
</pre>
```

Thanks to [ASCII World](http://www.asciiworld.com/-Penguin-.html) for that penguin art.
