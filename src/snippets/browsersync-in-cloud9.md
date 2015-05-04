---
title: Starting BrowserSync in Cloud9
tags: Cloud9, BrowserSync
template: /base.jade
category: snippet
---

Starting BrowserSync in Cloud9 is easy, as long as you provide the correct port number.

By default, BrowserSync will start on port 3000. Cloud9 requires that any server run on that platform is always bound to port 8080. Getting BrowserSync running in Cloud9 is as easy as just overriding the default port with 8080:

```
browser-sync start --server --port 8080
```

The above command will start a BrowserSync server serving the files in the current working directory. 

Cloud9 currently requires that servers start on port 8080, but that number could change in the future. Cloud9 also puts the expected port number in an environment variable, under the name `PORT`. You can insert that value into a command line argument using the dollar sign syntax.

A more future-proof version of the preceeding command uses the PORT environment variable and looks like this:

```
browser-sync start --server --port $PORT
```

I typically configure my BrowserSync servers to watch and serve files out of a `www` directory below the project root. I also request that BrowserSync serve directory listings, as this makes navigating incomplete sites easier.

This is the full BrowserSync start command I most often use:

```
browser-sync start --server www --files "www/**/*" --directory --port $PORT
```
