---
title: Downloading A File With Curl
tags: command line, curl
template: /base.jade
category: snippet
---

cURL can make for a handy way to download a file, especially if you're limited to a command line interface (such as when remotely maintaining a server over SSH).

The general syntax for downloading a file with cURL is:

```
curl -o <local file name> <file url>
```

For instance, this command will retrieve the Google logo image from Google's home page:

```
curl -o https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
```

cURL will store whatever response it gets in the local file. This means that if you target a web page with your cURL download request, it will store the resulting HTML. This command stores the contents of the Google home page:

```
curl -o google.html https://www.google.com/
```
