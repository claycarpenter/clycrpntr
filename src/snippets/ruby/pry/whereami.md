---
title: Pry whereami Command
tags: rails, rails-console, pry
template: /base.jade
category: snippet
---

Pry's `whereami` command does as its name implies: it will help orient you within the code base you're debugging.

The default `whereami` output is what's shown when Pry first stops and presents you with its REPL. You can get that same output at any time using `whereami`, which produces something like this:

```
[24] pry(main)> whereami

Frame number: 0/0

From: /Users/clay/dev/code/github/ruby-sandbox/work/basics/lambdas_blocks_procs/person.rb @ line 27 :

    22:
    23: person = SimplePerson.new 'Gabby'
    24: name_proc = person.method(:name).to_proc
    25: puts name_proc.call   # => 'Gabby'
    26:
 => 27: binding.pry
```

`whereami` has a few other nifty options to note:

* `whereami [LINES]` - Prints `LINES` number of lines before and after the current line.
* `-n, --no-line-numbers` - Hides the line numbers from the output. Handy for when you need to copy and paste.
* `-f, --file`, `-c, --class`, `-m, --method` - Shows the entirety of the current file, class, or method.
