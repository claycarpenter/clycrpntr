---
title: npm Log Level Options
tags: npm
template: /base.jade
category: snippet
---

The verbosity of npm's log output can be configured by using one of six log levels. The levels are, in order of increasing verbosity:

* silent
* error
* warn
* info
* verbose
* silly

Each log level also includes any of the messages specified on any less-verbose log levels. For instance, the log level `info` will also include `error` and `warn` messages.

Each of the log level descriptions below will give examples based upon a test `npm install` operation against this npm package defintion:

```
{
    "name": "install-fail-test",
    "version": "1.0.0",
    "dependencies": {
        "nonexistent-module": "^1.0.0"
    }
}
```

That package.json contains a dependency on a non-existent module in order to cause errors during the install operation and force log output on the error channel.

## Silent

The least verbose log level, this will turn off all log output, including errors. Executing `npm install` against the aforementioned broken module will result in absolutely no log output, even though the install operation completely fails. Only use this log level if you're very sure of what you're doing.

Note that `silent` only supresses log output, not normal program output. So running an `ls` command will still print the installed module tree, even if the log level is set to `silent`.

## Error

This log level will print any errors encountered during the npm operation. In the case of an error, it will also print some environment information, similar to the output of log level `info`. The output of the failed install first shows the cause of the error:

```
npm ERR! 404 404 Not Found: nonexistent-module
npm ERR! 404 
npm ERR! 404 'nonexistent-module' is not in the npm registry.
npm ERR! 404 You should bug the author to publish it
npm ERR! 404 It was specified as a dependency of 'install-fail-test'
npm ERR! 404 
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, or http url, or git url.
```

And then continues on to print out some environment details and note the location of the generated npm-debug log:

```
npm ERR! System Linux 3.14.13-c9
npm ERR! command "/home/ubuntu/.nvm/v0.10.35/bin/node" "/home/ubuntu/.nvm/v0.10.35/bin/npm" "install" "--loglevel" "error"
npm ERR! cwd /home/ubuntu/workspace/tmp/install-fail-test
npm ERR! node -v v0.10.35
npm ERR! npm -v 1.4.28
npm ERR! code E404
npm ERR! 
npm ERR! Additional logging details can be found in:
npm ERR!     /home/ubuntu/workspace/tmp/install-fail-test/npm-debug.log
npm ERR! not ok code 0
```

## Warn

This log level contains messages about potential problems. Nothing noted on the `warn` channel should cause a fatal failure, but the warnings are probably pointing out areas where code or configuration isn't performing optimally.

For instance, during the `npm install` operation npm will complain that the module's package.json doesn't contain some declarations that would make it easier for others to understand, use, and contribute to the module:

```
npm WARN package.json install-fail-test@1.0.0 No description
npm WARN package.json install-fail-test@1.0.0 No repository field.
npm WARN package.json install-fail-test@1.0.0 No README data
```

This seems to be the default log level for npm.

## Info

This log level contains messages that help to describe what npm is doing behind the scenes. I consider the first level of debug output. `info` level messages will begin with printing out the environment details:

```
npm info using npm@1.4.28
npm info using node@v0.10.35
```

In the case of our failed install test, the `info` channel will also indicate that it's trying to install the dependency "nonexistent-module" and where it's looking for that dependency to be located (the npm registry):

```
npm info preinstall install-fail-test@1.0.0
npm info trying registry request attempt 1 at 19:58:34
npm http GET https://registry.npmjs.org/nonexistent-module
npm http 404 https://registry.npmjs.org/nonexistent-module
```

Running normal npm operations at a log level of `info` wouldn't be ridiculous, and might give interesting insight into the inner workings of npm to curious beginners.

## Verbose

The `verbose` channel contains even more messages than the `info` section. Where `info` describes the higher levels steps that are involved in an operation, `verbose` goes even further to start describing argument values and key pieces of the data models involved in the operation. All of that output can be pretty, well, verbose, and it can hide more important messages like warnings and errors in amongst all of the noise. Use this log level only for debugging purposes.

Keeping with the failed install example, you can see the `verbose` log level at work when it prints the full details of the 404 response from the npm registry:

```
npm verb headers { server: 'CouchDB/1.5.0 (Erlang OTP/R16B03)',
npm verb headers   'content-type': 'application/json',
npm verb headers   'cache-control': 'max-age=0',
npm verb headers   'content-length': '51',
npm verb headers   'accept-ranges': 'bytes',
npm verb headers   date: 'Wed, 20 May 2015 20:03:21 GMT',
npm verb headers   via: '1.1 varnish',
npm verb headers   age: '0',
npm verb headers   connection: 'keep-alive',
npm verb headers   'x-served-by': 'cache-ord1728-ORD',
npm verb headers   'x-cache': 'MISS',
npm verb headers   'x-cache-hits': '0',
npm verb headers   'x-timer': 'S1432152201.188865,VS0,VE70' }
```

## Silly

Even more verbose than `verbose`, the `silly` log level contains messages that are probably only useful to developers working on npm code. For instance, during the failing test install, immediately after the `verbose` channel logs the details for the 404 response, the `silly` channel notes that the callback handler is called with values of 404 and the response object:

```
npm sill registry.get cb [ 404,
npm sill registry.get   { server: 'CouchDB/1.5.0 (Erlang OTP/R16B03)',
npm sill registry.get     'content-type': 'application/json',
npm sill registry.get     'cache-control': 'max-age=0',
npm sill registry.get     'content-length': '51',
npm sill registry.get     'accept-ranges': 'bytes',
npm sill registry.get     date: 'Wed, 20 May 2015 20:11:21 GMT',
npm sill registry.get     via: '1.1 varnish',
npm sill registry.get     age: '0',
npm sill registry.get     connection: 'keep-alive',
npm sill registry.get     'x-served-by': 'cache-ord1725-ORD',
npm sill registry.get     'x-cache': 'MISS',
npm sill registry.get     'x-cache-hits': '0',
npm sill registry.get     'x-timer': 'S1432152681.348105,VS0,VE71' } ]
```

## Win

npm used to support a log level named `win` that would print out only `ok` or `not ok` messages. There are still some mentions of this log level floating around in older documentation (such as [this early blog post](http://blog.izs.me/post/1675072029/10-cool-things-you-probably-didnt-realize-npm) by Isaac Schlueter).

In relatively recent version of npm (e.g., v1.4), the `win` log level would incorrectly be interpreted as `silly`, resulting in the same very verbose output. This was [correct in npm v1.5.0](https://github.com/npm/npm/issues/5038) and attempting to use this log level with npm versions above 1.5.0 will result in an `invalid config` warning.
