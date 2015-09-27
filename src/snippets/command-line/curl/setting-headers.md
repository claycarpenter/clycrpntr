---
title: Downloading A File With Curl
tags: command line, curl
template: /base.jade
category: snippet
---

cURL can be directed to send customized headers along with a request. To add headers, use either the `--header` flag or its shorthand variant `-h`, followed by a quoted string containing the header name and value (`"name: value"`).

This can be useful when communicating with endpoints that inspect the `Accept` header to determine what to send back to the client. For instance, this cURL command sends a message to a chat server, instructing the server to respond with JSON in the response body:

```
curl -X POST -d '{"message": "Hello!"}' --header "Accept: application/json" http://example.com/chat
```

This can also be useful when working with APIs that require custom headers to be provided with requests, such as some OAuth-enabled services.
