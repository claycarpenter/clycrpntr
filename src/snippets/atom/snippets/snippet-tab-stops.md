---
title: Snippet Tab Stops
tags: atom
template: /base.jade
category: snippet
---

Atom snippets support the definition of tab stops. Tab stops allow you to jump to different positions within the snippet. Tab stops come in two flavors: numeric and named.

Numeric tab stops simply define the tab stops in sequence, start with `$1`. The cursor will be placed at the first tab stop immediately after expanding the snippet. Here is a very basic example that drops the cursor into the `console.log` arguments:

```
'.source.js':
  'Console log':
    'prefix': 'log'
    'body': 'console.log($1);'
```

Adding a final tab stop at the end of the snippet makes it possible to jump to the end of that snippet block once all of the intermediate tabs have been filled out. Updating the previous example with a final tab stop after the semi-colon allows the user to jump out of the statement with a single tab press:

```
'.source.js':
  'Console log':
    'prefix': 'log'
    'body': 'console.log($1);$2'
```

Named tab stops function very similar to numeric tab stops, but with the addition of hints at the named tab stops. These hints can help orient you within the snippet. In this example, a snippet builds a [function bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) call while providing hints for the function name and "this" argument portions of the statement:

```
'.source.js':
  'Function bind':
    'prefix': 'funbind'
    'body': '${1:function}.bind(${2:thisArg});$3'
```

Note that both named and numeric tab stops can be used in the same snippet, as shown above where the third tab stop jumps the cursor to the end of the statement.
