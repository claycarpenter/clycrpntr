---
title: Downloading A File With Curl
tags: command line, curl
template: /base.jade
category: snippet
---

cURL can automatically infer the proper request method for certain request situations, rendering the request method argument (`-X` or `--request`) superfluous.

In these three situations, cURL will automatically assign the appropriate request method:

* For a typical read request, the `GET` method is inferred and `-X GET` is not needed.
* For a head request (`-I` or `--head`), the `HEAD` method is inferred and `-X HEAD` is not needed.
* For a request that includes a request body/data (using `-d`), the `POST` method is inferred.

With that in mind, take advantage of these shortcuts to save yourself a little bit of extra typing.

Many thanks to cURL author Daniel Stenberg's [post on this subject](http://daniel.haxx.se/blog/2015/09/11/unnecessary-use-of-curl-x/).
