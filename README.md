# Lightweight Lightbox jQuery Plugin #

Lightweight is a very minimal jQuery lightbox/modal plugin, hence the name. There's a number of configuration options and easy to read code, so you can override to your hearts content.

For full documentation, please visit:

[Official Lightweight Website](https://www.coreyballou.com/projects/jquery-lightweight-lightbox-plugin/)

## Usage ##

To be continued... For now, here's the set of configuration options:

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

Basic usage:

```javascript
// open the element (assumes it's already hidden by end user)
$('#targetElement').lightweight({
    height: 400,
    width: 400
});

// and close...
$('#targetElement').lightweight('close');
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/cballou/jquery-lightweight-lightbox-plugin/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

