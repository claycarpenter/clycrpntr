---
title: 12-Factor Apps Aspect 3: Configuration
tags: 12factor
template: /base.jade
category: snippet
---

The third aspect of a 12-Factor application is configuration. Specifically, storing any values that are likely to change between deployment environments within environment configurations and outside of the codebase.

What counts as configuration? The 12-Factor Config page provides these examples:

> * Resource handles to the database, Memcached, and other backing services
> * Credentials to external services such as Amazon S3 or Twitter
> * Per-deploy values such as the canonical hostname for the deploy

What doesn't count as "configuration", for these purposes, are details that declare key pieces of application logic or wiring and don't change between deploys. Examples include web server or API service route configurations, dependency injection wiring, and configurable values that have been extracted from the code to enhance future configurability (for instance, a service fee percent).

Performing this step is critical to conforming to aspect #1 - a single codebase. A single codebase only works if that codebase doesn't have to conform to each targeted deployment environment.

Configuration details should be captured in the key/value pairs of environment variables. Such declarations are widely supported and language agnostic. For day-to-day development work, environment variables can be captured in a local file to and loaded into the app runtime environment using a tool like Dotenv or Figaro.

Pulling from outside of the codebase to get configuration means that the actual configs aren't necessarily readily identifiable. Document environment dependencies; know what configs are needed, and where to find them.

Configurations generally shouldn't be included in source control; this is doubly true if those configurations contain production credentials. Checking configurations into source control can cause problems when those files need to be modified for each local environment, which creates files that are always marked as modified by the local source control system. However, leaving configuration files outside of source control makes it difficult to share default configurations and document what configuration values are needed. Consider creating an example document listing all configurations (in simple key-value pairs, with comments as documentation). If there are values that are shared amongst the developers, include those in the example configuration so that new developers can get up to speed quickly.
