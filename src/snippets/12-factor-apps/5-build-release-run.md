---
title: 12-Factor Apps Aspect 5: Build, Release, Run
tags: 12factor
template: /base.jade
category: snippet
---

Three step process: build a release, push the release to a server/host, run the release.

The "release" stage involves combining the build output with the configuration of a particular host environment. Depends on config values, as specified in #3.

Releases should be unique IDs--timestamps work, as do incrementing integers or semver.

Once a release is created, it cannot be modified. Any modifications are cause for the creation of another release.

The only thing that should change around a release are the environment configuration variables. Everything else should remain stable.

All builds should happen from the same single code base mentioned described in #1.

Releases should be archived, with older releases available for retrieval in the case that a deployment needs to be rolled back.

Run stage should be simple, reliable, straightforward. See #9. Ideally, simple enough that it's a single command that can be run by an automated script, in case that system needs to be restarted by an automatic monitoring service.

Run stages should be isolated from/independent of the releases they host. Moving to a new release should not require the run stage to be modified.
