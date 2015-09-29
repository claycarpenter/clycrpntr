---
title: Downloading A File With Curl
tags: command line, curl
template: /base.jade
category: snippet
---

One of my favorite ways to use cURL is with verbose output enabled. Signal that you'd like verbose output with the `-v` flag, and you'll see all of the request and response headers. If you're connecting over HTTPS, you'll also see some details of the server certificates reported.

This is the verbose output from a basic cURL request to the Google homepage (over HTTPS):

```
Trying 74.125.21.104...
* Connected to www.google.com (74.125.21.104) port 443 (#0)
* TLS 1.2 connection using TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
* Server certificate: www.google.com
* Server certificate: Google Internet Authority G2
* Server certificate: GeoTrust Global CA
> GET / HTTP/1.1
> Host: www.google.com
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Fri, 25 Sep 2015 01:39:59 GMT
< Expires: -1
< Cache-Control: private, max-age=0
< Content-Type: text/html; charset=ISO-8859-1
< P3P: CP="This is not a P3P policy! See http://www.google.com/support/accounts/bin/answer.py?hl=en&answer=151657 for more info."
< Server: gws
< X-XSS-Protection: 1; mode=block
< X-Frame-Options: SAMEORIGIN
< Set-Cookie: PREF=ID=1111111111111111:FF=0:TM=1443145199:LM=1443145199:V=1:S=LSmI8zBYHJ4je4Kw; expires=Thu, 31-Dec-2015 16:02:17 GMT; path=/; domain=.google.com
< Set-Cookie: NID=71=zZVbjGIYzt68RPik1DnacmXIuInHtQjU7MOJpDz1g8AKZ7-BmM-lqllXnkzq60V4HKSZpVGB__yYcfiBppOSxoweXNM9YQXdlpWLoPRWNDH9L5-_pwOztXVGFyE3_4K61-EUt8cGuVQA_UEc09WRDHMDc_0D0H7VeA; expires=Sat, 26-Mar-2016 01:39:59 GMT; path=/; domain=.google.com; HttpOnly
< Alternate-Protocol: 443:quic,p=1
< Alt-Svc: quic=":443"; p="1"; ma=604800
< Accept-Ranges: none
< Vary: Accept-Encoding
< Transfer-Encoding: chunked
```

Note that the request headers are on lines beginning with `>`, while the response headers are on lines starting with `<`. The response body (which I didn't include here), is simply printed out without any prefix.
