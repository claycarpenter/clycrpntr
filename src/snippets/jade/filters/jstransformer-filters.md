---
title: Installing and Using JSTransformer Filters in Jade
tags: jade
template: /base.jade
category: snippet
---

Beginning with Jade 2.0, filters will be implemented with help from jstransformer middleware. The jstransformer modules provide a bridge between Jade's rendering functionality and the processing operations of the core module they're wrapping. For instance, the `jstransformer-marked` module wraps `marked` functionality to provide Markdown transpilation support; the `jstransformer-less` module similarly wraps `less` to provide Less compilation.

In order to use these new jstransformer-supported filters, you'll need to install the modules. If you're running Jade globally, you can use these npm install commands:

```
# Install Marked/markdown support
npm install -g jstransformer-marked

# Install Less support
npm install -g jstransformer-less
```

Once those modules are installed, they'll automatically be available to Jade.

Using the `marked` filter:

```
:marked
  # Markdown Works

  Here is a simple list:

  * Alpha
  * Beta
  * Parking Lot
```

```
<h1 id="markdown-works">Markdown Works</h1>
<p>Here is a simple list:</p>
<ul>
<li>Alpha</li>
<li>Beta</li>
<li>Parking Lot</li>
</ul>
```

Compiling Less with the `less` filter:

```
style
  :less
    @blue: #3bbfce;
    p {
      color: @blue;
    }
```

```
<style>
p {
  color: #3bbfce;
}
</style>
```
