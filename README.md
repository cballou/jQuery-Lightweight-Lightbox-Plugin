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
