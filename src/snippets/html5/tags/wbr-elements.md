---
title: The wbr Element
tags: html5
template: /base.jade
category: snippet
---

The `wbr` element indicates a line break opportunity. It notifies the browser where long, unbroken lines (containing no whitespace at all) of text can be split if needed.

It seems like the best usage for this would be to indicate where to break text within preformatted blocks. For instance, consider this presentation of a code snippet:

```
<pre>
// Plugins required by the build system.
var Metalsmith = require('metalsmith'),<wbr>markdown = require('metalsmith-markdown'),<wbr>jadeTemplater = require('metalsmith-jade-templater'),<wbr>browserSync = require('metalsmith-browser-sync'),<wbr>drafts = require('metalsmith-drafts'),<wbr>sass = require('metalsmith-sass'),<wbr>yargs = require('yargs');
</pre>
```

The `wbr` elements in that snippet allow for line breaks in the preformatted text that helps the snippet presentation maintain readability even if it's rendered in a narrow content box.
