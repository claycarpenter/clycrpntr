---
title: Differences Between em and rem
tags: css
template: /base.jade
category: snippet
---

Two of the most common typographical units in CSS are ems and rems. What is the difference? A hint can be found in the name: "rem" is short for "root em". What's an em? An em is a font-relative metric that is computed by looking at the bounding box around an uppercase M. 

Two of the most common typographical units in CSS are ems and rems. What is the difference? A hint can be found in the name: "rem" is short for "root em". Unlike ems, rem units are based upon the root font size for the document. On web pages, that means the font size of the `html` element. Em units, in contrast, are computed based upon the font size either of the element's parent (in the case of the `font-size` property) or the element itself (in the case of every other property).

Because rem units are based upon a fixed root font size, the values they represent aren't influenced by element ancestors. Em units base their values on properties of their ancestors, which can cause unwanted interference.

Take this very basic page as an example:

```
<body>
    <header>
        <h1>SuperSite</h1>
        <p>The bestest site on the interwebs. Ever.</p>
    </header>
</body>
```

We're going to style the `h1` within the `header` to have a relatively large style, but we want any other text within the `header` to be smaller. The main site content should be in a larger font size to increase legibility, so we'll set the HTML to a static size of 18px.

Here is the stylesheet using em units:

```
html {
  font-size: 18px;  
}

header {
  font-size: .8em;
}

header h1 {
    font-size: 1.5em;
}
```

The computed font sizes are:

* `header h1` - 21.6px
* `header p` - 14.4px

Setting the `header` `font-size` to `.8em` has an unintended consequence: because the `h1`'s `font-size` is relative to its container, the size of the `h1` text is similary reduced to 80% of the HTML font size.

Here is the stylesheet using rem units:

```
html {
  font-size: 18px;  
}

header {
  font-size: .8rem;
}

header h1 {
    font-size: 1.5rem;
}
```

The computed font sizes are:

* `header h1` - 27px
* `header p` - 14.4px

Using rem units, the `h1` element `font-size` is computer based upon the HTML `font-size` and therefore avoids influence from the containing `header`. The result is a larger font size in the `h1` that is likely closer to what we had intended when designing the site.
