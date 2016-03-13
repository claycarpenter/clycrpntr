---
title: Date Ranges in Where Clauses
tags: rails, activerecord
template: /base.jade
category: snippet
---

Adding date ranges to Active Record where clauses involves using the Ruby range operator (`..`):

```
now = DateTime.now
yesterday = now - 1.day
Orders.where(created_at: yesterday..now)
```

Note that the older date should be the first operand in the range; a range of `now..yesterday` would not match any records.

When I'm searching for all activity on a certain day, I also frequently use the `beginning_of_day` and `end_of_day` convenience operators:

```
yesterday = DateTime.now - 1.day
Order.where(created_at: yesterday.beginning_of_day..yesterday.end_of_day)
```
