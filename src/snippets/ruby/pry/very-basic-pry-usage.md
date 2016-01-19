---
title: Very Basic Pry Usage
tags: rails, rails-console, pry
template: /base.jade
category: snippet
---

For good reason, Pry is the debugger/REPL of choice for most Rubyists. To get started, first you'll want to install pry:

```
gem install pry
```

Then add a debugging breakpoint to your Ruby script with the `binding.pry` statement. Once the program hits that point, execution will be halted at the point and you'll be dropped into the Pry REPL.

In order to run the script, Ruby will need to know you depend on the pry gem. You can achieve this is one of two ways:

* temporarily - execute the script with a `-r pry` flag. For example: `ruby -r pry test_script.rb`
* permanently - add a `require 'pry'` statement to the top of your Ruby script. This is generally the better way to go.

Once that's set up, run the ruby script and wait for it to hit that breakpoint. Once the breakpoint is hit you'll be able to interact with your script from the context of the code at the location of the breakpoint. When you've seen what you need to and are ready to continue on, type the `continue` command to allow the program to resume normal execution.
