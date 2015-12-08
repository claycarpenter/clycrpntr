---
title: Rails Paths in the Rails Console
tags: rails, rails-console
template: /base.jade
category: snippet
---

You can use the Rails console to start an interactive integration test. Use the `app` variable, which then allows you to make requests and inspect responses. For instance, to mock a REST call to retrieve a location, you can use `app.get`:

```
[1] pry(main)> app.get '/locations/1'
```

That'll return the HTTP status code of the response. To see the full response, inspect the `app.response.body`:

```
[1] pry(main)> app.response.body
=> "{\"id\":1,\"street\":\"1400 S Lake Shore Dr\",\"unit\":null,\"zip\":\"60605\",\"created_at\":\"2015-12-07T23:36:05.068Z\",\"updated_at\":\"2015-12-07T23:36:05.068Z\"}"
```

Thanks to [Pramgatic Studios](https://pragmaticstudio.com/blog/2014/3/11/console-shortcuts-tips-tricks) and [Nick at Signal v. Noise](https://signalvnoise.com/posts/3176-three-quick-rails-console-tips) for pointing this out.

More details are available in the docs for the [integration RequestHelpers](http://api.rubyonrails.org/classes/ActionDispatch/Integration/RequestHelpers.html#method-i-get) and the ActionDispatch [Response](http://api.rubyonrails.org/classes/ActionDispatch/Response.html).
