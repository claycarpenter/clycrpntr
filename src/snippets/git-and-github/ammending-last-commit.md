---
title: Amending The Last Commit in Git
tags: git
template: /base.jade
category: snippet
---

If you have made a mistake in the last commit, Git provides a nice feature that helps you fix that error. This works for adding any extra file changes as well as for updating the commit message.

After you have made the first, incomplete commit, the next step is to identify what's missing. If there are any extra file changes that need to be added to the commit, add then to the index (staging), as if preparing for a new commit. If no files need to be changed, and the only item that needs updating is the commit message, you can simply run the next command:

```
git commit --amend
```

That will cause your interactive editor to open up, presenting the last Git commit message. You can then update the commit message as you see fit, and then save that message to finalize the updated commit.

Going forward, Git will see an amended commit as a single revision, no matter how many amendments have been added.
