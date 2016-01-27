---
title: Enhanced Default Hash Values
tags: ruby
template: /base.jade
category: snippet
---

Ruby supports enhanced default hash value logic through the provision of a block that will handle unknown keys. The block takes a pair of parameters, the hash and the new key, respectively. At its most basic, the block looks like this:

```
simple_default = Hash.new do |hash, key|
  hash[key] = 'default'
end
```

That block will store the value `'default'` in the hash, and return it to the caller. The last value of the block will be the value returned caller--not necessarily the value of the hash with the specified key. This gives the option of storing the default value, or simply returning it back to the caller.

For instance, these two examples both provide different default values based on the type of the key provided:

```
store_default = Hash.new do |hash, key|
  # Value based on key type
  value = 0 if key.is_a? Fixnum
  value = '*' if key.is_a? String

  # ...And store the value...
  # Assignment is last, so value is returned
  hash[key] = value
end

puts store_default['a']
puts store_default[1]
p store_default

no_storage = Hash.new do |hash, key|
  # Value based on key type
  value = 0 if key.is_a? Fixnum
  value = '*' if key.is_a? String

  # Just return the value, without storing.
  value
end

puts no_storage['a']
puts no_storage[1]
p no_storage
```

You can see the difference in the output of the test commands. The first hash, which stores defaults, not only provides the defaults as return values, but also keeps those default values:

```
*
0
{"a"=>"*", 1=>0}
```

The second hash only returns the default values, without storing them. The final print statement shows that the hash is still empty:

```
*
0
{}
```
