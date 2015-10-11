---
title: Expiring Rails Assets in Heroku
tags: rails, heroku
template: /base.jade
category: snippet
---

To pick up Heroku environment config variables in the JS assets of a Rails application, ERB statements inside of the JS file can be used to pull in the environment variable, like so:

```
var API_KEY = "<%= ENV['SECRET_API_KEY'] %>";
```

This straightforward technique works well enough but runs into a problem when the configuration (environment variables) changes but the JS file that references those config values doesn't. Sprockets won't detect that it needs to recompile the file, and no matter how many Heroku deployments are completed the old cached JS file will stick around with the outdated config values.

This problem is compounded by the fact that the typical manner for clearing and recompiling assets doesn't work with Heroku. As Richard Schneeman [notes in this Heroku forms post](https://discussion.heroku.com/t/stale-assets-in-production/265/2), running `heroku run rake assets:clean assets:precompile` will execute on a different dyno than the one hosting your Rails application. The process will run fine, look like it's working, but have no effect on the Rails application you're trying to refresh.

The only solution seems to be to updated the assets version number in Rails. This will cause the assets to be recompiled during the next Heroku deploy/build. To update the assets version number, open up `config/initializers/assets.rb` and find this line:

```
# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
```

Bump that up to a new version (e.g., `1.1`) and redeploy to Heroku. Heroku will update the assets during the build process and now your JS files will have the correct, current config variables.
