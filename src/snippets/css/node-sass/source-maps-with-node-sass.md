---
title: Source Maps With node-sass
tags: sass, node-sass
template: /base.jade
category: snippet
---

Source maps come in handy when trying to investigate and debug stylesheets produced by CSS proprocessors such as Sass and node-sass. They enable the browser developer tools to point to the line of Sass source that generated the style rule.

Like the Ruby interface for Sass, node-sass is capable of generating these source maps alongside the CSS output. Enabling source map output in node-sass is done with the flag `--source-map`. That flag requires a value, which can be either `true` or the full path to the source map. That value will determine how node-sass names the source map file. If the value ends in `.map`, that value will be used as the path to and name of the source map file. If the flag value is anything else (that doesn't end in `.map`) then node-sass will name the source map file with a `.map` extension after the input Sass source file name.

For instance, compiling a scss file to CSS and requesting an automatically named source map looks like this:

```
node-sass styles.scss styles.css --source-map true
```

That will result in these files:

```
styles.css
styles.css.map
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

The big difference between the automatic and user-provided naming of the source map file comes into play when an output directory is used. For user-provided source map filenames, the output directory *won't* be automatically prefixed before the source map filename. If the source map file naming is automatic, then that source map file will be generated within the output directory.

Generating with an explicit filename and an output directory:

```
node-sass styles.scss styles.css --source-map source.map --output build
```

Will generate the CSS in the output directory, and the source map file relative to the current working directory:

```
build/styles.css
source.map
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
