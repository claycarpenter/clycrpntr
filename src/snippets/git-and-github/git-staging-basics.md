---
title: Git Staging Basics
tags: git
template: /base.jade
category: snippet
---

Git conceptually separates the entire changes in the working directory from the set of changes intended to be included in the next commit. Those changes marked to be in the next commit are said to be in the staging area. Most manipulations of the staging area involve one of two commands: `git add` or `git reset`. Viewing what's included in the staging area and what modifications to the working directory are outside of the staging area is accomplished using `git status`.

When a file is changed in the working directory, `git status` will inform you of the change. For instance, after altering a repo's `README.md` file, Git status will report the change:

```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```


`git add` adds a file (or set of files) to the staging area. This could be changes to an already tracked file, or the addition of a new file. Adding the `README.md` to the staging area is accomplished with this command:

```
git add README.md
```

Git's status will now report that the file's changes are staged for committing:

```
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   README.md
```

To remove a changed file from the staging area, use the `git reset` command. Removing the `README.md` can be done with this statement:

```
git reset HEAD README.md
```

That leaves us back where we started, as Git status reports:

```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```
