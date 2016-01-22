---
title: Showing the Complete History of a File in Git
tags: git
template: /base.jade
category: snippet
---

Git log can be used, along with the patch option, to produce a comprehensive history of file under source control. This provides not only the commit comments, but also the full patch details, so you can review exactly what changed in each commit.

The command looks like this:

```
git log -p <path/to/file>
```

And produces output that looks like this:

```
commit dc212000b7c7d653fe23ac27ffa2b8210341de67
Author: Clay Carpenter <claycarpenter@gmail.com>
Date:   Sat May 2 16:58:50 2015 -0400

    Adds support for defining the BrowserSync server port via cli argument.

    Adds default port values for Cloud9 (8080) and standard environments (3000).

diff --git a/build.js b/build.js
index 13fc221..792f8d4 100755
--- a/build.js
+++ b/build.js
@@ -19,7 +19,11 @@ var defaultArgValues = {
     // Disable this action when running BrowserSync as BrowserSync currently
     // seems to get confused when a directory it's watching is removed and
     // replaced.
-    clean: false
+    clean: false,
+
+    // Default to either the environment port (for Cloud9 compatibility) or
+    // the browserSync default port of 3000.
+    port: process.env.PORT || 3000
 };

 // Require arguments parser and set default values.
@@ -39,7 +43,7 @@ var browserSyncOptions = {
         'templates/**/*.jade',   // Jade templates
         'src/**/*.scss' // Sass
     ],
-    port: process.env.PORT,
+    port: cliArgs.port,
     directory: true
 };
```

Note that this output is much more readable is colors are enabled. If colors aren't enabled in your Git installation, see this [documentation](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#Colors-in-Git) for instructions.

Thanks to Stack Overflow users [ralphtheninja](http://stackoverflow.com/a/9807432/1148628) and [Jeff Ferland](http://stackoverflow.com/a/9807682/1148628) for their answers that helped to inspire this post.
