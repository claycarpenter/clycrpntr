---
title: Filtering File Upload Logging with Paperclip
tags: rails, paperclip, logging
template: /base.jade
category: snippet
---

Made By Munsters projects typically rely on Rails backends, and that means that we often enlist [Paperclip](https://github.com/thoughtbot/paperclip) to help us handle file uploads. Typically we push the file uploads from the client side as part of a single RESTful request, sending the Base64 encoded file data alongside other pieces of the resource.

This system works well, but the default configuration tends to bloat the application logs. This is because Rails will dutifully log the incoming request parameters, including the Base64 representation of the uploaded file. Even a very tiny 10px square JPEG causes this to be written to the log:

```ruby
"avatar"=>{"filetype"=>"image/jpeg", "filename"=>"10x10_sports.jpeg", "filesize"=>754, "base64"=>"/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gNzAK/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8Av6n4rv12xNEy282dzAryeeCM9MVnRa5arCivaqWCgNtbjP8A3zVjWxtnVBwu7oOlWFsrTYP9Fh6f88xS5YvfUE5L4dD/2Q=="}
```

Obviously, more realistic file sizes would write even more to the logs, a problem only exacerbated by the increased data footprint that results from Base64 encoding.

The solution lies in taking advantage of Rails [filter parameters support](http://guides.rubyonrails.org/action_controller_overview.html#parameters-filtering). Originally intended to filter out sensitive information such as passwords and credit card details from reaching the logs, we can also repurpose it to filter out parameters that just don't really need to be logged in the first place, like upload file contents.

There are a couple of options in how you filter out the Paperclip uploads. The first is to filter based on the name of the Paperclip image property. In our example, the model has an `avatar` property that holds the Paperclip image, so we can filter out those parameters with this configuration:

```ruby
config.filter_parameters << :avatar
```

You would then need to do this for any Paperclip properties in your app. For instance, if you also had file uploads under a `file` property, the configuration would look like this:

```ruby
config.filter_parameters += [:avatar, :file]
```

The resulting log output will look like this:

```ruby
"avatar"=>"[FILTERED]"
```

Alternatively, you can filter out just the Base64 data from the Paperclip uploads. This has a couple of advantages, showing more details about the Paperclip upload and also working for any Paperclip uploads, no matter the name of the target property. This configuration:

```ruby
config.filter_parameters << :base64
```

Results in this more details log output:

```
"avatar"=>{"filetype"=>"image/png", "filename"=>"dribble_darthvader.png", "filesize"=>55149, "base64"=>"[FILTERED]"}
```

Finally, if you want to substitute a slightly more accurate message than just "FILTERED", you can take advantage of lambda support in the `filter_parameters` property. This simple lambda looks for keys named "base64" and then replaces the parameter value with "[FILE CONTENTS OMITTED]":

```ruby
config.filter_parameters << lambda do |key, value|
 value.replace('[FILE CONTENTS OMITTED]') if key == 'base64'
end
```

Which will result in log output like this:

```ruby
"avatar"=>{"filetype"=>"image/png", "filename"=>"dribble_darthvader.png", "filesize"=>55149, "base64"=>"[FILTERED]"}
```

There's more that can be done with this technique, especially when implementing more complex lambdas. In the meantime, these few basic changes should help keep your logs trim and readable, even when processing large file uploads.
