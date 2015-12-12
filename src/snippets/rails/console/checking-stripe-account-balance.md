---
title: Checking Stripe Account Balance from the Rails Console
tags: rails, rails-console
template: /base.jade
category: snippet
---

A handy way to quickly check the pending charges in your Stripe account from the Rails console:

```
helper.number_to_currency(Stripe::Balance.retrieve.pending[0].amount.to_f/100)
```

This snippet assumes that you have the Stripe SDK installed, and that you have the appropriate API (secret) key configured for your account.
