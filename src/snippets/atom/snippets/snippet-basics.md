---
title: Atom Snippet Basics
tags: atom
template: /base.jade
category: snippet
---

Atom supports snippets to help reduce the need to repetitively type out boilerplate code. Snippets are expanded when you type the snippet key into the editor (something like `log` or `button`) and the hit tab (the exact keystroke can be configured like other shortcuts).

Like other Atom configurations, snippets are contained in CSON files. To start editing snippets, open the Snippets file via the *Open Your Snippets* option in your *Atom* or *File* menu. Once there, you can use the existing snippet `snip` to create the boilerplate needed to define a new snippet. Typing `snip` and hitting tab will create this template:

```
'.source.js':
  'Snippet Name':
    'prefix': 'Snippet Trigger'
    'body': 'Hello World!'
```

That defines four pieces of information about the snippet. In order, they are:

1. The snippet scope. This specifies which source types this snippet will be available in. `.source.js` will make a snippet available in JavaScript files. Multiple scopes can be strung together with commas: `.source.js, .source.json`. You can check out the installed language packages to determine what the scope name is for your target language. More details on this process can be found [here](https://github.com/atom/snippets#determining-the-correct-scope-for-a-snippet).
2. The snippet name. This is just a human-friendly name for the snippet. The properties defined below this object actually build the snippet.
3. The snippet prefix. This is the key that you'll type in your editor in order to execute the snippet.
4. The snippet body. This contains the snippet template.

Here is a very basic snippet that will create a console.log statement:

```
'.source.js':
  'Console log'
    'prefix': 'log'
    'body': 'console.log($1)'
```
