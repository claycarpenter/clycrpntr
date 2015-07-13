---
title: Simple Data File Input in Jade CLI
tags: jade
template: /base.jade
category: snippet
---

Jade can easily interweave variable data into a template. Variables can be defined inline, inside of the template, but a much easier option is available. Jade supports loading a data object through its command line interface. For this example, we'll focus on the most practical option: loading data from a JSON file. Jade also support declaring the JSON data as a string in the command line argument, but that's not as practical for most purposes.

The general syntax for compiling a Jade file with a data object is this:

```
jade <template.jade> --obj <data.json>
```

Let's use this technique to create a blog post for one of Aesop's fables. Here we have the post data model, captured in `post.json`:

```
{
  "title": "The Thirsty Pigeon",
  "body": "A Pigeon, oppressed by excessive thirst, saw a goblet of water painted on a signboard. Not supposing it to be only a picture, she flew toward it with a loud whir and unwittingly dashed against the signboard, jarring herself terribly. Having broken her wings by the blow, she fell to the ground, and was caught by one of the bystanders. Zeal should not outrun discretion.",
  "author": {
    "email": "aesop@example.com",
    "name": "Aesop"
  }
}
```

The basic blog post template is named `post.jade` and contains this Jade structure:

```
doctype html

html
  head
    title #{title}
  body
    article
      h1 #{title}
      p #{body}
      footer
        address
          | Written by
          a(href="mailto:" + author.email) #{author.name}
```

To combine the two, we use this command:

```
jade post.jade --object post.json
```

Which generates this HTML:

```
<!DOCTYPE html>
<html>
  <head>
    <title>The Thirsty Pigeon</title>
  </head>
  <body>
    <article>
      <h1>The Thirsty Pigeon</h1>
      <p>A Pigeon, oppressed by excessive thirst, saw a goblet of water painted on a signboard. Not supposing it to be only a picture, she flew toward it with a loud whir and unwittingly dashed against the signboard, jarring herself terribly. Having broken her wings by the blow, she fell to the ground, and was caught by one of the bystanders. Zeal should not outrun discretion.</p>
      <footer>
        <address>Written by<a href="mailto:aesop@example.com">Aesop</a></address>
      </footer>
    </article>
  </body>
</html>
```
