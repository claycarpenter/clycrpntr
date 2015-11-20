---
title: 12-Factor Apps Aspect 1: Single Codebase
tags: 12factor
template: /base.jade
category: snippet
---

The first aspect of 12-factor apps is keeping your app housed in a single codebase.

The code base can have many branches to track and support ongoing development, but deployments should always be based off of that shared codebase. Ideally, those deployments should be based off of the primary branch (e.g., master, trunk, or head). Aligning your repository in this manner makes it clear exactly what code should be deployed to production.

The same codebase should be deployable to development, test, staging, and production environments. Anything that the codebase needs to know about to run in a particular environment should be provided through environment variables (see aspect #3).

Avoid creating forks to handle "customized" software requests to suit specific business clients. Isolate those changes into separate modules, and then allow the software to load those modules via dependency management (as described in aspect #2).

If there is a need for more than one codebase, that should be taken as an indication that the codebase contains multiple apps. In such a situation, identify the boundaries of those apps, and split them out into their own codebases. If those applications are hard to separate because they share code, then those shared components should be extracted into sharable libraries.

If possible, try to work with a repository host that's well-known and supports easy access and collaboration. Prime examples include GitHub and BitBucket. There is a lot of value to being able to find any version of any file (or sets of files) through an intuitive web interface at any time. Additionally, many of these hosting services also provide team collaboration tools that make it easy to keep discussions about the code close to the code itself. A great example of this is GitHub's Pull Review system, which works great both for code reviews and change tracking.
