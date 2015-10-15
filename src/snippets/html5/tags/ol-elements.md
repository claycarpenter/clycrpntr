---
title: The HTML5 ol Element
tags: html5
template: /base.jade
category: snippet
---

The HTML5 `ol` element represents ordered lists. Unlike its sister element, `ul`, an ordered list presents a list where the order of the list items has meaning. Typically, these list items are presented alongside (sequential) numbering, but that presentation can be controlled (or removed entirely) by the CSS `list-style-type` [property](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type).

Ordered and unordered lists can be mixed together as needed. For instance, these cooking instructions use ordered items to present the steps, but divert to an unordered list when listing the ingredients:

```
<ol>
  <li>
    Gather these ingredients:
    <ul>
      <li>Oats</li>
      <li>Sugar</li>
      <li>Butter</li>
      <li>Cocao powder</li>
      <li>Chocolate chips</li>
    </ul>
  </li>
  <li>Melt butter.</li>
  <li>Mix all ingredients in a big bowl.</li>
  <li>Drop cookies by the spoonful onto wax paper.</li>
  <li>Let the cookies cool and solidify (or don't), and then eat them all. Yes, that's right, all of them. Go to town. No one will ever know.</li>
</ol>
```

The `ol` element has a couple of interesting attributes: `reversed` and `start`. The `reversed` attribute (a boolean attribute that needs no value), will be presented in reverse order (the least important element will be displayed first). This works well for unique situations, such as "countdown" lists:

```
<p>Top five reasons to write a blog post today:</p>
<ol reversed>
  <li>It'll clarify your thinking.</li>
  <li>The post gives back something to the community.</li>
  <li>If you wait until you have the perfect article or topic, you'll never write.</li>
  <li>It gives you an opportunity to play with Markdown. Markdown! Yay!</li>
  <li>You've already watched every Battlestar Galactica episode, thrice. So there's nothing better to do anyways.</li>
</ol>
```

The `start` attribute sets the numeric value for the starting point for the list. This applies regardless of what numbering type is used for the list. Here, a list is continued after it's interrupted by a paragraph:

```
<ol>
  <li>One</li>
  <li>Two</li>
</ol>
<p>Lorem ipsum something something...</p>
<ol start="3">
  <li>Three</li>
  <li>Four</li>
</ol>
```
