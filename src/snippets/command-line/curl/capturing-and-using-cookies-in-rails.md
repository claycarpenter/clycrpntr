---
title: Capturing and Using Cookies With Rails
tags: command line, curl
template: /base.jade
category: snippet
---

Rails creates a new session cookie for each request/response cycle. This increases security, but also increases the difficulty of imitating a browser using command line tools like cURL.

When using cURL to imitate a browser for a user's session, you'll need to follow this rough guideline:

1. Capture a fresh cookie via the browser (using the browser dev tools; you can also spy on network traffic as noted in [this Railscast episode](http://railscasts.com/episodes/356-dangers-of-session-hijacking?view=asciicast)).
2. Send an initial request with cURL while manually providing the fresh cookie. The request should also be configured to capture the returned cookie.
3. Continue to work with the Rails app via cURL, ensuring that the old cookie is sent with each request and the new cookie from the response is stored and sent along with the subsequent request.

The easiest way to provide a one-time cookie through cURL is using the `--cookie` flag, which takes a name-value pair like so:

```
--cookie "_cookie_name=cookieValue"
```

The step 2 request will look something like this:

```
curl -v http://localhost:3000/snippets/1 --cookie '_your_app_session=cFJseTBzcHlHYTRBU1NrSldMb0N1Q2hxNkowWnJaZm5xTVhuUkhXdG1Xdkw2TVJONlJQenQzenJxNWZnS2FLSXNxbHU3SVhxdDhLZHlNK3RFZTNsb2w3SUQwTzZTeVVkZkVBWmpHMDhZeG1KYUk3b1BPWDhTemJCNm10UjB0TkdVcGk2UGNFdm84clRScS9OTzNjMm1veDNSQ3dSYUJ5Qk1RTnhoUk9RdDhibjhKOGNxbS9lUm8rVnUybm1PbGtQdlM5NTVmc2xidHAyY3Y4d28vU3Jwdz09LS1nR2J0L1RSdjdteDVUSGZwTHpoTjhBPT0%3D--6c4685cba9a974ad0a6b46c071848bcc56922cae' --cookie-jar cookies.txt
```

That will send along the existing fresh cookie, and then store the response cookie in a new file names `cookies.txt`.

With `cookies.txt` now populated, you can continue to use that file to read cookies for the request and then write cookies capture from the response. Simply make calls with both the `--cookie` and `--cookie-jar` flags pointing to the same text file, like so:

```
curl -v http://localhost:3000/snippets/1 --cookie cookies.txt --cookie-jar cookies.txt
```
