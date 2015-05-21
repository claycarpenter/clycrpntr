---
title: Installing npm Packages Directly from GitHub Gists
tags: npm, github, gist
template: /base.jade
category: snippet
---

**Note:** This functionality is only available in npm versions 2.8.0 and above. In order to install from a Gist in earlier versions of npm, you'll need to use a full Git URL as the package source argument (in place of the shorthand noted below).

npm has a shortcut method for installing packages directly from a GitHub Gist. Installing from a Gist can be useful when you're trying to test simple Node modules that aren't mature enough yet to become full GitHub repositories.

The generic command syntax is:

```
npm install gist:<gist ID>
```

The Gist ID will be a long hexadecimal string that looks something like `15b5e6c8762342a8ce38`. You can find the ID by inspecting either the Gist URL or the Git clone URL. In a Gist URL, it will be the final ID (after your github username):

```
https://gist.github.com/claycarpenter/15b5e6c8762342a8ce38
```

In the Git clone URL, it will be the string that precedes the `.git` suffix:

```
https://gist.github.com/15b5e6c8762342a8ce38.git
```
