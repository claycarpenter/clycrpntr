---
title: Minimal NPM package.json Declaration
tags: npm, github
template: /base.jade
category: snippet
---

An NPM module's package.json declaration requires only a pair of attributes:

* `name` - The module's name. This is the module's handle, and will be used when requiring the module into other code (e.g., `require('express')`) and when performing NPM operations (install, update, list, etc.) on the module (e.g., `npm install express`). Many more details can be found in the [name section of the package.json documentation](https://docs.npmjs.com/files/package.json#name).
* `version` - The module's version. Must be in semantic version format, and parseable by node-semver. More details in the [package.json version section](https://docs.npmjs.com/files/package.json#version) as well as the [semantic versioning specicification](http://semver.org/).

With only the two required attributes specified, this is the format for the shortest possible valid NPM package description:

```
{
    "name": "minimum-module",
    "version": "0.0.2"
}
```
