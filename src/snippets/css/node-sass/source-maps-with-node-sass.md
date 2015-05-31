---
title: Source Maps With node-sass
tags: sass, node-sass
template: /base.jade
category: snippet
---

Source maps come in handy when trying to investigate and debug stylesheets produced by CSS proprocessors such as Sass and node-sass. They enable the browser developer tools to point to the line of Sass source that generated the style rule.

Like the Ruby interface for Sass, node-sass is capable of generating these source maps alongside the CSS output. Enabling source map output in node-sass is done with the flag `--source-map <filename>`. The filename value is required, and can have three different values: 

* true - This indicates automatic source map file naming and location. The source map file will be named similarly to the generated CSS file, but have an additional extension of `.map`. The source map will be placed in the output directory alongside the generated CSS.
* any string other than true that doesn't end in ".map" - This option idicates automatic source map file naming (similar to the true option) but node-sass will store the source map file inside the directory indicated by the string. This path is resolved relative to the current working directory, rather than the specified output directory.
* a string that end in ".map" - This indicates that node-sass should use this input as the full path of the source map. This path is resolved relative to the current working directory, rather than the specified output directory.

For instance, compiling a scss file to CSS and requesting an automatically named source map looks like this:

```
node-sass styles.scss styles.css --source-map true
```

That will result in these files:

```
styles.css
styles.css.map
```

This is an example of requesting automatic source map file naming but also specifying a source map directory:

```
node-sass styles.scss styles.css --source-map sourceMaps
```

That will result in these files:

```
styles.css
sourceMaps/styles.css.map
```

The same command, but with a source map file name provided:

```
node-sass styles.scss styles.css --source-map source.map
```

Will generate these files:

```
styles.css
source.map
```

The big difference between the automatic and user-provided naming of the source map file comes into play when an output directory is used. For user-provided source map filenames or source map directories, the output directory *won't* be automatically prefixed before the source map filename. If the source map file naming is entirely automatic (the true option), then that source map file will be generated within the output directory.

Generating with an explicit filename and an output directory:

```
node-sass styles.scss styles.css --source-map source.map --output build
```

Will generate the CSS in the output directory, and the source map file relative to the current working directory:

```
build/styles.css
source.map
```

Generating with an automatic filename, a specific source map directory, and a build output directory:

```
node-sass styles.scss styles.css --source-map sourceMaps --output build
```

Will generate the CSS in the output directory, and the source map file relative to the current working directory:

```
build/styles.css
sourceMaps/source.map
```

Generating with an automatic filename and an output directory:

```
node-sass styles.scss styles.css --source-map true --output build
```

Will generate both the CSS and the source map file in the output directory:

```
build/styles.css
build/styles.css.map
```
