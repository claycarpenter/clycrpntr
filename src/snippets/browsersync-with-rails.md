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

```
browser-sync start --server --port 8080
```

The above command will start a BrowserSync server serving the files in the current working directory.

Cloud9 currently requires that servers start on port 8080, but that number could change in the future. Cloud9 also puts the expected port number in an environment variable, under the name `PORT`. You can insert that value into a command line argument using the dollar sign syntax.

A more future-proof version of the preceding command uses the PORT environment variable and looks like this:

```
browser-sync start --server --port $PORT
```

I typically configure my BrowserSync servers to watch and serve files out of a `www` directory below the project root. I also request that BrowserSync serve directory listings, as this makes navigating incomplete sites easier.

This is the full BrowserSync start command I most often use:

```
browser-sync start --server www --files "www/**/*" --directory --port $PORT
```
