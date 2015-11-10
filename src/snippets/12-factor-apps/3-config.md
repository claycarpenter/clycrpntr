---
title: 12-Factor Apps Aspect 3: Configuration
tags: 12factor
template: /base.jade
category: snippet
---

Store config in the environment

Environment variables in server environments; can use files containing key/value pairs for easier day-to-day development.

Pulling from outside of the codebase to get configuration means that the actual configs aren't necessarily readily identifiable. Document environment dependencies; know what configs are needed, and where to find them.

Config variables should contain everything that changes between environments. DB URLs, app URLs, credentials, cache locations, etc., etc.

Configs generally shouldn't be included in source control. Do include examples and documentation of config variables. Might include dev config value examples, if those are generally applicable enough to not need to be modified by each individual developer.

Config variables _shouldn't_ contain things that count as "configuration" but _don't_ change between environments. If you have pulled out variables that are likely to change to isolate those changes to easily maintainable config files (YAML, JSON, etc.) instead of hard-coded values, those can stay in source control, stay in config files, stay out of the environment.
