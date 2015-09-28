---
title: Downloading A File With Curl
tags: command line, curl
template: /base.jade
category: snippet
---

cURL provides a couple of options for isolating the headers of a response.

To simply show the response headers but not any of the response body, use the `--head` flag:

```
curl --head https://www.google.com/
```

You can also save the headers using the `--dump-header` flag along with a file name:

```
curl --dump-header google-headers.txt https://www.google.com/
```

The `--dump-header` flag will only store the headers, not show them. If you want to both see the response headers immediately as well as store a copy for later review, use the `--dump` and `--dump-header` flags in tandem:

```
curl --dump-header google-headers.txt --head https://www.google.com/
```
