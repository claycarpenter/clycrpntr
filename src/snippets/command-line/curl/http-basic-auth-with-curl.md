---
title: Downloading A File With Curl
tags: command line, curl
template: /base.jade
category: snippet
---

cURL can supply HTTP Basic authentication credentials when making requests. To provide those credentials, use the `-u` flag and then follow with the username, like so:

```
curl -u <username> <site url>
```

cURL will then prompt you for the password. If you'd prefer to provide the password via the command line, you can supply both the username and password separated by a colon:

```
curl -u <username>:<password> <site url>
```

A couple notes about security issues here:

* Supplying the password as part of the command arguments can be convenient, especially if you're going to be revisiting the bash history to make multiple calls. However, it also clearly exposes your password in plaintext, so I'd suggest only choosing this route for demo/tesing user accounts.
* As HTTP Basic really provides no encryption (the username and password combination is Base64 encoded), so HTTP Basic should only ever be used over secure connections (HTTPS).
