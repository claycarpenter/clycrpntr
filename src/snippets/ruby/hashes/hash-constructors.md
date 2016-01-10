---
title: Hash Constructors
tags: ruby
template: /base.jade
category: snippet
---

This snippet quickly covers three different ways to create hashes by providing values to the hash constructor.

### List of values

Hashes can be created by providing a list of values that are paired off to create key-value pairs in the new hash. Because the values are paired, the number of values provided must be event.

```
from_array = Hash[
  'a', 1, 'b', 2
]
puts "From array list: #{from_array}"
```

Produces this output:

```
From array list: {"a"=>1, "b"=>2}
```

### List of two-element arrays

In this technique, hashes are created from a list of two-element arrays. In those arrays, the first element is the key, the second is the pair.

```
from_paired_array = Hash[ [
  ['a', 1],
  ['b', 2]
] ]
puts "From array pairs: #{from_paired_array}"
```

Produces this output:

```
From array pairs: {"a"=>1, "b"=>2}
```

### List of key-value pairs

Finally, hashes can be created from an array of key-value pairs.

```
from_key_value_pairs = Hash[
  'a' => 1,
  'b' => 2
]
puts "From key-value pairs: #{from_key_value_pairs}"
```

Produces this output:

```
From key-value pairs: {"a"=>1, "b"=>2}
```

