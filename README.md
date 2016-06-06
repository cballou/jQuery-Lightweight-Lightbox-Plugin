# Lightweight Lightbox jQuery Plugin #

Lightweight is a very minimal jQuery lightbox/modal plugin; hence the name. One popular aspect of lightweight is that it requires no additional CSS on your part as it generates inline styles on the fly when new modals are created.

There's a number of configuration options and easy to read code, so you can override to your hearts content.

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

## Generated Wrapper Code ##

In the event you want to default customize the styling of lightweight to match your site's theme better, here's a sample of the HTML generated for a lightbox. You'll likely want `#lightbox-holder { display:none; }`.

```html
<body>
    <!-- stores HTML of closed lightboxes to keep them hidden -->
    <div id="lightbox-holder"></div>
    
    <!-- the primary lightbox display which will have HTML content appended -->
    <div id="lightbox"></div>
    
    <!-- handles user-defined box styling of the lightbox -->
    <div id="lightbox-box"></div>
    
    <!-- the body/page overlay -->
    <div id="lightbox-overlay"></div>
</body>
```
