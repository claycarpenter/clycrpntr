---
title: Pushing Git Tags to Remotes
tags: git
template: /base.jade
category: snippet
---

By default, git doesn't send tags along with a `git push` operation. There are two ways to ask git to push tags to the remote server.

The first method of sending a tag to the remote server targets an individual tag. The syntax for this command is:

```
git push <remote> <tag name>
```

Note that the remote repo name (or URL) is required in this case; failing to supply that will cause git to interpret the tab name as the name of a remote.

That command works great for one tag, but it you're trying to push up a collection of tags, the `--tags` flag works best. Using that flag with `git push` will cause the push operation to also push all local tags up to the remote repository.

The syntax for pushing all tags is:

```
git push --tags origin
``` 
