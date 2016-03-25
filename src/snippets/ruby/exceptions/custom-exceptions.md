---
title: Custom Exceptions
tags: ruby
template: /base.jade
category: snippet
---

Basic custom exceptions only need to extend the Exception class:

```ruby
class CustomError < Exception
end
```

That alone is enough to create a custom error that your code can throw and watch for. By default, this custom exception will contain a message property, and nothing else. Raising it would look like this:

```ruby
raise CustomError, 'description of error'
```

A more complex error could take in arguments into its initializer. Here, an example of a basic error that signals an email delivery error and holds on to the email it was trying to deliver, in case it needs to be resent:

```ruby
class EmailDeliveryError < StandardError
  attr_reader :email

  def initialize(email)
    @email = email
  end
end
```

This works well via raise:

```ruby
pry(main)> raise EmailDeliveryError.new('email body'), 'Network connection error'
EmailDeliveryError: Network connection error
```

But it won't capture the message if you try to initialize the error like a standard Ruby object:

```ruby
pry(main)> EmailDeliveryError.new('email body')
=> #<EmailDeliveryError: EmailDeliveryError>
```

In order to be able to support both regular and raise syntax creation methods, we can add optional keyword arguments to our error initializer and call `super` to initialize the message:

```ruby
class EnhancedEmailDeliveryError < StandardError
  attr_reader :email

  def initialize(email:, message: nil)
    super(message) if message

    @email = email
  end
end
```

Works with both creation methods:

```ruby
pry(main)> EnhancedEmailDeliveryError.new(email: 'email body', message: 'Network connection error')
=> #<EnhancedEmailDeliveryError: Network connection error>
pry(main)> raise EnhancedEmailDeliveryError.new(email: 'email body'), 'Network connection error'
EnhancedEmailDeliveryError: Network connection error
```
