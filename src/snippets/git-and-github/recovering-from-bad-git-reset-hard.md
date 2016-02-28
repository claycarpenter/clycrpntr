---
title: Recovering From A Bad Git Reset Hard
tags: git
template: /base.jade
category: snippet
---

Get's reset command can be quite handy when you need to alter what HEAD points to, especially in the case of rolling back commits. Occasionally--as I did last night--you'll make a mistake, and decide (quite soon) after you've executed the reset hard command that you really did want that commit, after all. In that case, git reset hard can come to the rescue again, as long as you know where to point it.

Assume for this example that you've been playing around with RSpec, and you just wiped out your most recent commit (some setup and teardown code) with this command:

```
git reset --hard HEAD^
```

Your reflog would now look something like this:

```
> git reflog

faa1221 HEAD@{0}: reset: moving to HEAD^
98a2f3e HEAD@{1}: commit: [adds] exploration of RSpec setup, teardown.
faa1221 HEAD@{2}: commit: [adds] exploration of basic test contexts.
```

The commit that you wiped out is `98a2f3e`. In order to get that back, all you need to do is just reset hard back to that commit SHA:

```
git reset --hard 98a2f3e
```

Alternatively, in this case you could also use the more friendly syntax `git reset --hard HEAD@{1}`. Either way you achieve the same thing: your accidentally tossed away commit is back in your branch history.
