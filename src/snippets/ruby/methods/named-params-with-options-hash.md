---
title: Named Parameters with Options Hash
tags: ruby
template: /base.jade
category: snippet
---

Ruby allows the last parameter in a parameter list to be defined as a hash literal, which makes it easy to pass in a set of options. For instance, if the method signature looks like this:

```
def say(message, options)
```

It could be called like this:

```
say('Hi', broadcast: true, async: true)
```

And the `say` method would receive `{broadcast: true, async: true}` as the value for the options argument.

In order to make the options actually _optional_, the options argument should be given a default value:

```
def say(message, options={})
```

Taken together, the default hash value and the hash literal syntax make for an easy way to provide named, optional arguments to methods.

In this example, we have a very simple method named `string_reverser` which, true to its name, reverses a string. The method takes a pair of optional arguments: `swapcase` and `strip`. which perform those functions on the result of the string reversal if they're defined as `true`.

You can see the method implementation and a few tests below:

```
def string_reverser(string, options={})
  reversed = string.reverse

  if options[:swapcase]
    reversed.swapcase!
  end

  if options[:strip]
    reversed.strip!
  end

  reversed
end

puts string_reverser "abc", :swapcase => true
# => CBA
puts string_reverser "Alpha Beta", {swapcase: true}
# => ATEb AHPLa
puts string_reverser "Wolverine  ", swapcase: false, strip: true
# => enirevloW
```

Note that Ruby is pretty flexible in how you define the hash literals, including allowing a hash defined with curly brackets.
