---
title: Setting npm Log Level From CLI Flags
tags: npm
template: /base.jade
category: snippet
---

The npm log level for a particular operation can be set on a per-commmand basis by passing log level flags along with the command line arguments.

All npm log levels (`silent`, `error`, `warn`, `info`, `verbose`, and `silly`) have longhand versions. All but `error` also have shorthand flags. Here are both versions for all log levels:

| Longhand | Shorthand |
|:---|:---|
|`--loglevel silent`|`-s`|
|`--loglevel error`|*none*|
|`--loglevel warn`|`-q`|
|`--loglevel info`|`-d`|
|`--loglevel verbose`|`-dd`|
|`--loglevel silly`|`-ddd`|

Either the longhand or shorthand versions can be used with any npm command:

```
npm install express --loglevel info
npm install express -d
```

Adding multiple log level flags to the same command won't cause an error, but only the last log level specified will be honored. For instance, this command will operate on the `silent` log level:

```
npm install express --loglevel info -s
```

While switching the position of the log level flags will set the command to log on the `info` level:

```
npm install express -s --loglevel info
```
Having multiple log level flags on a single command would be confusing, so even though it doesn't throw an error it's probably not a good practice to follow.
