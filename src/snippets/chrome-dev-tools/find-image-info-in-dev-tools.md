---
title: Inspecting Image Info Using Chrome Dev Tools
tags: chrome dev tools
template: /base.jade
category: snippet
---

There are extensions available to make finding image info easy in Chrome. If you'd rather avoid installing another extension simply to view image details, Chrome does make that information available. It's not as straightforward as other browsers, but it definitely is possible.

How to find the image info depends on how the image is being referenced: using a basic `img` tag or via a CSS property. There's no way (that I'm aware of) to know beforehand whether the image is loaded as an `img` or via CSS, but both methods start with inspecting the image-presenting element and once you're there you can determine which steps to follow.

## Image via `img` Element

Steps:

1. Right-click on target image.
2. Select Inspect Element. Dev Tools will appear with the selected element highlighted.
3. Find the image `src` attribute containing the image's URL.
4. Once you have located the URL, right click on it. Select Open link in Resources Panel.
5. Chrome will present the Resources Panel, with the selected image highlighted. You'll be able to see image dimentions as well as file size and encoding type.

## Image via CSS Property

Steps:

1. Right-click on target image.
2. Select Inspect Element. Dev Tools will appear with the selected element highlighted.
3. Find the URL of the image source. This should be contained in either a `background` or `background-image` property. The easiest way to locate the property is to click on the Computed tab--the background URL declaration should be near the top.
4. Once you have located the property containing the URL, just (left) click on it.
5. Chrome will present the Resources Panel, with the selected image highlighted. You'll be able to see image dimentions as well as file size and encoding type.
