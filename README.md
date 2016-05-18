# Lightweight Lightbox jQuery Plugin #

Lightweight is a very minimal jQuery lightbox/modal plugin, hence the name. There's a number of configuration options and easy to read code, so you can override to your hearts content.

For full documentation, please visit:

[Official Lightweight Website](https://www.coreyballou.com/projects/jquery-lightweight-lightbox-plugin/)

## Usage ##

Here is a basic example of using lightweight on an element already hidden on your page. In this example, you're simply turning a hidden element into a modal.

```javascript
// open the element (assumes it's already hidden by end user)
$('#targetElement').lightweight({
    height: 400,
    width: 400
});

// and close...
$('#targetElement').lightweight('close');
```

## Default Configuration Option Values ##

```javascript
$.fn.lightweight.defaults = {
    height: 260,
    width: 380,
    color: '#fff',
    bgColor: '#000',
    bgOpacity: .5,
    overlayColor: '#000',
    overlayOpacity: .8,
    fadeSpeed: 400,
    borderRadius: 10,
    closeClass: '.close'
};
```

