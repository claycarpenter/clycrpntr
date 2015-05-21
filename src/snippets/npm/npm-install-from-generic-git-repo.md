---
title: Installing npm Packages From Generic Git Repos
tags: npm, git
template: /base.jade
category: snippet
---

Later versions of npm ([v2.8.0 was a major milestone](https://github.com/npm/npm/blob/d27d647ee0685b3ca3dd0cd344a267017113a9a9/CHANGELOG.md#v280-2015-04-09)) added support for shorthand syntax for referencing various common git repos (GitHub, Gist, BitBucket, etc.). If you're using an older version of npm, you can still install directly from git repos using the full git repo URL. 

The generic command syntax is:

```
npm install [--save] <git repo url>
```

The git repo URL must start with one of three supported protocols:

* git:
* git+https:
* git+ssh:

Which protocols are supported will depend on the git repo host. GitHub supports all three protocols, so all of these URLs pointing to my metalsmith-jade-templater plugin are valid:

```
git://github.com/claycarpenter/metalsmith-jade-templater.git
git+https://github.com/claycarpenter/metalsmith-jade-templater.git
git+ssh://github.com/claycarpenter/metalsmith-jade-templater.git
```

For example, I use this command to install my test Metalmsith Jade templating plugin:

```
npm install --save git+https://github.com/claycarpenter/metalsmith-jade-templater.git
```

Note that npm will keep a link to the GitHub repository as a dependency declaration in the package.json manifest. If the above command is run, referencing the git+https protocol, the package.json dependency link will look like this:

```
  "dependencies": {
    "metalsmith-jade-templater": "git+https://github.com/claycarpenter/metalsmith-jade-templater.git"
  }
```

After the module has been installed in this way it can be treated like any other module installed from the official npm registry.
