---
title: Defining Multiple Snippets in Atom
tags: atom
template: /base.jade
category: snippet
---

All Atom snippets are defined for a particular scope, effectively targeting those snippets to specific source code types. Each time one of those scopes is defined, it overwrites every other definition in that same scope within that file. For instance, assume we have two snippets, one a shortcut for `console.log`, the other a similar shortcut for `console.error`.  Defining them in order, like the following example, will result in only the final definition being available:

```
'.source.js':
  'Console log':
    'prefix': 'log'
    'body': 'console.log($1)'
'.source.js':
  'Console error':
    'prefix': 'logerror'
    'body': 'console.error("Error: ", $1);$2'
```

That second `'.source.js'` definition overwrites the first, and only the `logerror` snippet will stick around.

Instead, to define multiple snippets for the same scope, define them under the same scope definition:

```
'.source.js':
  'Console log':
    'prefix': 'log'
    'body': 'console.log($1)'
  'Console error':
    'prefix': 'logerror'
    'body': 'console.error("Error: ", $1);$2'
```

Note that compound scope strings, such as `.source.js, .source.json` *don't* overwrite the individual scopes in that composition. For instance, the following configuration will successfully define all three snippets, with the first available to JS or JSON files while the latter two are only available in JS files:

```
'.source.js, .source.json':
  'Person object literal':
    'prefix': 'person'
    'body': """
    {
      "name": "$1"
    };$3
    """

'.source.js':
  'Console log':
    'prefix': 'log'
    'body': 'console.log($1)'
  'Console error':
    'prefix': 'logerror'
    'body': 'console.error("Error: ", $1);$2'
```
