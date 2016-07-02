---
title: Simulating Poor Network Conditions with Toxiproxy
tags: toxiproxy, testing, network
template: /base.jade
category: snippet
---

There are a number of forces driving the need to increase resiliency in the face of poor network conditions. Web pages are increasingly being replaced by long-running (single-page) web applications, where the web app might be able to continue to work through temporary network disruption or even work fully offline. And mobile apps often encounter this problem, as their users move in and out of WiFi or cell service range, with both connectivity and the quality of that connection varying over time.

Naturally, developers build their apps in environments where network connectivity isn't an issue--frequently the connections stay local to the development environment. That's fine for being efficient while building out code, but it can also lead to a false confidence about the performance of the code in real-world situations. Conversely, testing a degraded networking conditions can help both to surface bugs (especially with regards to the app's ability to recover to adverse events) as well as build awareness of how those poor network conditions can color the user experience.

How, then, to simulate these poor conditions? [Toxiproxy](https://github.com/Shopify/toxiproxy), an open source project developed by the [Shopify team](https://github.com/Shopify), helps solve this problem. It's a high-performance, simple to configure proxy who's primary mission is to simulate poor network conditions using what it calls "toxics". It can simulate these conditions:

* Latency (with optional jitter)
* Complete service unavailability
* Reduced bandwidth
* Timeouts
* Slow-to-close connections
* Piecemeal information, with more optional delays

Toxiproxy provides both a cross-platform proxy server and cli, as well as support for integration testing. We'll be focusing on the proxy server and cli in this article, but check out the project docs for some [great examples](https://github.com/Shopify/toxiproxy#2-populating-toxiproxy) of making Ruby integration tests more realistic.

For this article, we'll look at how we can simulate degraded network conditions when trying to access the [Hipster Ipsum API](http://hipsterjesus.com/). However, the most of the same techniques will apply whether you're interfering with local services like Redis or Postgres, or if you're talking to external services like Mailchimp and Stripe.

To follow along, first you're going to need to install Toxiproxy. The [instructions](https://github.com/Shopify/toxiproxy#1-installing-toxiproxy) on Toxiproxy's README are pretty straightforward, so this should be a problem or take very long.

The general workflow to simulating a poor service connection with Toxiproxy is:

1. Start up the toxiproxy server
2. Create a new proxy
3. Add toxics to the proxy

To start up a new server, use the `toxiproxy-server` command. It's straightforward enough--the server will start. Note that the server doesn't run as a background daemon, so you'll likely want to dedicate a terminal window to the process. Also, the server holds all of the configurations in memory and will lose them after a restart of the server process.

Most of the interactions with Toxiproxy will be through the `toxiproxy-cli` command. The command to create a new proxy takes this general shape:

```
toxiproxy-cli create <proxy_name> -l <local address and port> -u <upstream address and port>
```

To connect to Hipster Ipsum's API, we can use this command:

```
toxiproxy-cli create hipsum -l 127.0.0.1:8080 -u hipsterjesus.com:80
```

All requests to `localhost:8080` will now be forwarded on to the hipster ipsum API.

We can see that the proxy is installed when looking over the results of `toxiproxy-cli list`:

```
Listen		Upstream	Name	Enabled	Toxics
======================================================================
127.0.0.1:8080	hipsterjesus.com:80	hipsum	true	None
```

That's really all that's needed to create our proxy. We can test it out with cURL like so:

```
curl -v --header 'Host: hipsterjesus.com' 127.0.0.1:8080/api
```

Note that we have to pass along a custom HTTP header field to get the request properly routed through Hipster Ipsum's infrastructure. This is a pretty common requirement, so if you run into problems with proxied services returning 404 errors, try adding a header Host value containing the domain name of the remote server you're trying to reach.

That cURL command returned quickly--maybe not what you're expecting. It returned quickly because at this point all we've configured is the proxy itself, but none of the toxics that mimic degraded network performance. We can add a downstream latency toxic to our proxy with this command:

```
toxiproxy-cli toxic add hipsum -t latency -a latency=5000
```

That toxic configuration adds a five second wait to any returning result. Run the cURL command again and you'll immediately notice the delay.

We can investigate which toxics are installed on a given proxy using the `toxiproxy-cli inspect <proxy_name>` command. It'll return something like this:

```
Name: hipsum	Listen: 127.0.0.1:8080	Upstream: hipsterjesus.com:80
======================================================================
Upstream toxics:
Proxy has no Upstream toxics enabled.

Downstream toxics:
latency_downstream: type=latency stream=downstream toxicity=1.00 attributes=[ jitter=0 latency=5000 ]
```

Finally, if you want to simulate a completely unavailable service, you can disable the proxy with `toxiproxy-cli toggle <proxy_name>`. Once you do that, any requests will immediately fail, like this cURL request does:

```
$ curl -v --header 'Host: hipsterjesus.com' 127.0.0.1:8080/api

*   Trying 127.0.0.1...
* connect to 127.0.0.1 port 8080 failed: Connection refused
* Failed to connect to 127.0.0.1 port 8080: Connection refused
* Closing connection 0
curl: (7) Failed to connect to 127.0.0.1 port 8080: Connection refused
```

There's a whole lot more to explore, including [other available Toxics](https://github.com/Shopify/toxiproxy#toxics), writing your own custom toxic, and using Toxiproxy in unit tests. Hopefully this has given you enough of a taste to see how easy and valuable it can be to test your service dependencies under suboptimal network conditions.
