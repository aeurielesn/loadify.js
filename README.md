Loadify.js
==========

This script turns your Loadify.js-enabled anchors into Ajax calls and loads the HTML response into a desired page element. It also uses the HTML5 History API to modify the location accordingly.

The code is based on GitHub's [Tree Slider] and my own needs.

  [Tree Slider]: https://github.com/blog/760-the-tree-slider

Usage
-----

Load **Loadify.js**.

```html
<script src="/assets/js/Loadify.js" type="text/javascript"></script>
```

Add `data-loadify-target` attributes to the anchors you want to enable **Loadify.js** with the target element where you want to load the response as value.

```html
<a href="usage.html" data-loadify-target="#content">Usage</a>
```

Enjoy.