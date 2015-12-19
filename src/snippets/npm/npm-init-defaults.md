---
title: Accepting Defaults with npm init
tags: npm
template: /base.jade
category: snippet
---

To quickly create a new `package.json`, you can force `npm init` to use default values for all of the prompts is uses to collect details for the new package. Forcing defaults can be accomplished with any of four equivalent flags: `-f`, `--force`, `-y`, `--yes`. The full command is:

```
npm init [-f|--force|-y|--yes]
```

If you already have a `package.json` file, running init with forced defaults will only fill in any options you haven't already specified.

More details can be found on npm's [npm init](https://docs.npmjs.com/cli/init) documentation.
