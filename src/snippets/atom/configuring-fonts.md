---
title: Configuring Fonts in Atom
tags: atom
template: /base.jade
category: snippet
---

There are (at least) three ways to configure fonts in Atom:

1. Via the Settings page
2. Directly modifying the config file (`config.cson`)
3. Directly modifying the user stylesheet

### Settings page

This is the easiest method. Start by opening the settings page by clicking on *Preferences* under the Atom/File menu. From there, click on the *Settings* tab (if it's not already selected) and then scroll down to the *Editor Settings* section. There, you can configure the Font Family and Font Size settings.

### Config file

Directly modifying the config file is simply performing manually the work done by the Settings page. To open the config file, click on *Open your config* under the Atom/File menu. You'll be presented with a CSON-formatted configuration file. Look for the `fontSize` and `fontFamily` values and update with your preferred settings, like so:

```
"*":
  editor:
    fontSize: 12
    fontFamily: "Monaco"
```

Note that any changes via the Settings Page will overwrite changes in the config file, and vice-versa.

### User stylesheet

Modifying the font values through the user stylesheet provides the most control over the font rendering in Atom. The stylesheet, which can be found by clicking *Open your stylesheet* under the Atom/File menu, is a LESS stylesheet that supports styling Atom in much the same way as you would style a web page.

Note that these changes will *override* any definitions in the config file or Settings page.

To change the text editor font, add CSS properties to the `atom-text-editor` selector, like so:

```
atom-text-editor {
  -webkit-font-smoothing: subpixel-antialiased;
  font-family: 'Menlo', monospace;
  font-size: 11px;
}
```