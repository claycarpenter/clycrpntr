---
title: Managing Environment Variables with Global and dotenv Gems
tags: rails, rails-console, pry
template: /base.jade
category: snippet
---

At Made by Munsters, our Rails projects use [dotenv](https://github.com/bkeepers/dotenv) to load environment variables for development and test Rails servers. dotenv reads a file (by default, the appropriately named `.env`) that contains a simple list of name=value pairs and loads each as a new environment variable entry. For instance, a `.env` file with these contents:

```
SERVER_URL = http://api.example.com/
SECRET_SERVICE_KEY = '123-opensesame'
```

dotenv would read that and populate Rails variables `ENV['SERVER_URL']` and `ENV['SECRET_SERVICE_KEY']`. This discussion won't cover installing dotenv, but it's a simple process and you can read the project's [installation instructions](https://github.com/bkeepers/dotenv#installation) to get yourself started.

Because environment variables frequently hold confidential details, such as secret keys, those `.env` files shouldn't be checked into source control. That protocol works to keep secret keys secret, but architecture has some drawbacks:

* No environment variable documentation is checked into source control. There isn't an easy way to document important details about the variables, such as how they were derived or what format they need to appear in.
* Environment variable references are spread out through the codebase; there is no consolidated list of environment variables in source control. This can be problematic when you're trying to verify that a new deployment environment that doesn't use a dotenv file (production environments running on Heroku, in our case) has the necessary environment variables configured.
* Not easy to add common, non-secret values that don't need to be hidden from source control, are OK to share among team members. For instance, default values for development environments that are shared by all team members.

Our solution to this problem is to enlist the help of another gem, [Global](https://github.com/railsware/global). Global reads configuration details from YAML files, loading them into a namespace under the globally accessible `Global` module. It also supports ERB interpretation and environment-specific configuration.

 With Global, we can now define a single environment configuration file that contains all of our environment variable references alongside their documentation. The above sample would look like this:

 ```
default:
  # Fully qualified server URL, including protocol and trailing slash.
  SERVER_URL: <%= ENV['SERVER_URL'] %>

  # Secret service key. See Clay for help generating a new key to use
  # in your local deployment.
  SECRET_SERVICE_KEY: <%= ENV['SECRET_SERVICE_KEY'] %>
 ```

I store this file in `/config/global/env.yml`, which means that the variable is contains are accessible in the `Global.env` namespace. So referring to the full server URL would look like `Global.env.SERVER_URL`.

Having ERB interpretation available in the configuration parsing also provides some opportunities to implement some extra features, such as default values for dev environments. If you wanted to make life easier for your fellow developers by having the server URL default to `localhost:3000` in development environments, you could use this config file:

```
# Default values, shared by all environments.
default:
  # Fully qualified server URL, including protocol and trailing slash.
  SERVER_URL: <%= ENV['SERVER_URL'] %>

  # Secret service key. See Clay for help generating a new key to use
  # in your local deployment.
  SECRET_SERVICE_KEY: <%= ENV['SECRET_SERVICE_KEY'] %>

# Development-specific values. Overrides defaults.
development:
  # Default to localhost:3000 if not SERVER_URL is defined.
  SERVER_URL: <%= ENV['SERVER_URL'] || 'http://localhost:3000/' %>
```

The setup gives you a complete list of environment variables your system needs to run, documentation of those variables right alongside their declaration, and optional environment-specific overrides.
