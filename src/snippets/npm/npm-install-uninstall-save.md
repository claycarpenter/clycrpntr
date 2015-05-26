---
title: Automatically Updating npm Dependency Declarations
tags: npm, node.js
template: /base.jade
category: snippet
---

npm allows you to immediately record any module dependency installations and removals. This helps to keep your package.json manifest up to date. Note that in order for installations or removals to be stored in the package.json manifest, such a file must actually already exist. The quickest way to accomplish this is by executing `npm init` and accepting all of the defaults. If anything's inaccurate you can always change it later (before you publish the module, of course).

For both installs and removals/uninstalls, the `--save` indicates that the package.json dependency list should be updated after the operation. You can also use the shorthand flag `-S`.

To record or "save" a newly installed dependency, add the `--save` flag like so:

```
npm install express --save
```

This will add a new line to your package.json file that looks something like this:

```
"dependencies": {
    "express": "^4.12.4"
}
```

To remove the module dependency as well as the package.json dependency declaration, use uninstall with the same `--save` flag:

```
npm uninstall express --save
```

Note if you don't add the `--save` flag when uninstalling a declared dependency, npm will happily remove the module but then complain that it can't find a required dependency. For instance, removing the express module *without* updating the package.json will cause `npm ls` to throw an error like this:

```
save-test@1.0.0 /home/ubuntu/workspace/tmp/save-test
└── UNMET DEPENDENCY express@^4.12.4

npm ERR! missing: express@^4.12.4, required by save-test@1.0.0
npm ERR! not ok code 0
```

If you run into that case, it's easy enough to solve. Just re-run the module uninstallation (same arguments), but this time add the `--save` flag. npm will clean up the package.json and put your project back into a happy state.
