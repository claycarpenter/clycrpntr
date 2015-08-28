---
title: BrowserSync with Rails
tags: rails, BrowserSync
template: /base.jade
category: snippet
---

BrowserSync can be used in front of a development Rails server by taking advantage of BrowserSync's proxy mode. For a typical Rails dev server running on `localhost:3000`, the BrowserSync start command looks like this:

```
browser-sync start --proxy localhost:3000 --files "app/assets/stylesheets/*.scss, app/assets/javascripts/*.js, app/views/**/*.html.erb"
```

The above command will start BrowserSync in proxy mode. BrowserSync will start on `localhost:3001` and forward all requests to the Rails dev server running at `localhost:3000`. The command also instructs BrowserSync to listen for three sets of file changes:

* Stylesheets (`app/assets/stylesheets/*.scss`)
* JavaScripts (`app/assets/javascripts/*.js`)
* Rails views, in the form of HTML ERB files (`app/views/**/*.html.erb`)
