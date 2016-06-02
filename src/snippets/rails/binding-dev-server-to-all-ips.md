---
title: Binding the Rails Dev Server to All Local IPs
tags: rails, rails-console, pry
template: /base.jade
category: snippet
---

By default, the Rails dev server binds only to localhost (127.0.0.1). This ends up working out very well for most development tasks. However, if you need to access your development server from other machines on your local network, then you'll want to bind to an externally accessible IP address. Usually, on a residential WiFi this will take the form of something like `192.168.1.104`. You can tell Rails to bind to this address using the `--binding` flag:

```
rails s --binding=192.168.1.104
```

The binding flag also has a shorthand form: `-bX.X.X.X`. So the previous example could be rewritten like this:

```
rails s -b192.168.1.104
```

A really handy solution is to bind to all local addresses, which can be achieved by binding to the IP address `0.0.0.0`. So you can make your Rails server available on all of your dev machine IPs--including localhost and your WiFi address--with this command:

```
rails s -b0.0.0.0
```
