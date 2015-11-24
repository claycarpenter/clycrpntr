---
title: 12-Factor Apps Aspect 5: Build, Release, Run
tags: 12factor
template: /base.jade
category: snippet
---

Factor 5 of 12-Factor apps dictates that the process of moving from a codebase to a running deployment should involve three distinct steps: build, release, and run.

The first step, the build phase, involves taking the codebase and converting it into an executable bundle. This involves combining the codebase with the necessary dependencies (see aspect #2) into a single bundle. The result of the operation is known as a build. All builds should be produced from the same single codebase (aspect #1), regardless of the intended deployment environment.

The second step, the release phase, takes the build and pairs it with the configuration of the target deployment environment. This customizes the build to that environment, without actually changing the build. The config should contain all of the environment configuration variables necessary for the application to run (see aspect #3). The product of this step is known as the release.

The third and final step, the run phase, loads and launches the release by starting some of the apps' processes. This should be a simple, straightforward, and reliable process with as few moving parts as possible. A reliable run phase ensures that releases can be restarted/redeployed automatically in response to server faults (see aspect #9).

Both builds and releases should have unique IDs to identify them. Timestamps, incrementing integers, or more expressive semver versions all are suitable. Keeping builds identified helps to track what content is in which build, and keeping releases uniquely identified allows those releases to be selected again in the case that the system needs to be rolled back to some earlier point. Keep older releases archived so that they're available for that rollback process if they're needed.

In order to ensure the stability of a release, it cannot be modified after it is created. If there are any necessary changes, a new build and/or release should be created.
