/**
 * Light(weight) lightbox plugin.
 */
(function($) {

    $.fn.lightweight = function(options) {

        var scrollTop = $(window).scrollTop();
        var closeMe = typeof options == 'string' && options == 'close';
        var opts = (closeMe) ? $.extend({}, $.fn.lightweight.defaults) : $.extend({}, $.fn.lightweight.defaults, options);
        var $lightbox = $('#lightbox');
        var $lightbox_box = $('#lightbox-box');
        var $overlay = $('#lightbox-overlay');
        var $holder = $('#lightbox-holder');

        return this.each(function() {

            var $this = $(this);

            // check if lightbox is open
            if (closeMe && close())
                return false;

            // create containers if they dont exist
            if ($lightbox.length == 0) {
                $lightbox = $('<div id="lightbox"></div>');
                $lightbox_box = $('<div id="lightbox-box"></div>');
                $overlay = $('<div id="lightbox-overlay"></div>');
                $holder = $('<div id="lightbox-holder"></div>');
            }

            // tweak the element styling
            $overlay.css({ bgColor: opts.overlayColor, position: 'fixed' });

            $lightbox_box.css({
                bgColor: opts.bgColor,
                width: opts.width,
                height: opts.height,
                marginLeft: 0 - Math.floor(opts.width / 2),
                marginTop: 0 - Math.floor(opts.height / 2) + scrollTop,
                'box-shadow': '0 0 10px #000',
                '-webkit-box-shadow': '0 0 10px #000',
                '-moz-box-shadow': '0 0 10px #000'
            });

            // handle border radius
            if (opts.borderRadius.length > 0) {
                $lightbox_box.css({
                    'border-radius': opts.borderRadius,
                    '-moz-border-radius' : opts.borderRadius,
                    '-webkit-border-radius': opts.borderRadius
                });
            }

            $lightbox.css({
                color: opts.color,
                width: opts.width - 60,
                height: opts.height - 60,
                marginLeft: 0 - Math.floor(opts.width / 2),
                marginTop: 0 - Math.floor(opts.height / 2) + scrollTop
            })
            .click(function(e) {
                $('body').one('click.lw', function() {
                    close();
                });
                e.stopPropagation();
            });

            // append content to lightbox and show if hidden
            $this.appendTo($lightbox);
            $this.show();

            // place the elements and bind close to body
            $('body').prepend($holder, $overlay, $lightbox_box, $lightbox).one('click.lw', function() {
                close();
            });

            // watch for escape
            $(document).bind('keydown.lw', function(e) {
                if (e.keyCode == 27) {
                    $(document).unbind('keydown.lw');
                    close();
                }
            });

            // bind close class
            $lightbox.find(opts.closeClass).one('click', function(e) {
               close();
               e.preventDefault();
            });

            // show the elements asynchronously
            $overlay.stop().show().animate({ opacity: opts.overlayOpacity }, opts.fadeSpeed, 'linear');
            $lightbox_box.stop().show().animate({ opacity: opts.bgOpacity }, opts.fadeSpeed, 'linear');
            $lightbox.stop().show().animate({ opacity: 100 }, opts.fadeSpeed + 100, 'linear');

        });

        /**
         * Function to close the lightbox.
         */
        function close() {
            $('body').unbind('click.lw');
            $(document).unbind('keydown.lw');
            if ($lightbox.length > 0 && $lightbox.is(':visible')) {
                // fade out elements asynchronously
                $lightbox.stop().animate({ opacity: 0 }, opts.fadeSpeed, 'linear');
                $lightbox_box.stop().animate({ opacity: 0 }, opts.fadeSpeed, 'linear');
                $overlay.stop().animate({ opacity: 0 }, opts.fadeSpeed, 'linear', function() {
                    $lightbox.hide();
                    $lightbox_box.hide();
                    $overlay.hide();
                    $lightbox.children().appendTo($holder);
                });

                return true;
            }
            return false;
        }

    };

})(jQuery);

/**
 * Default light(weight) options.
 */
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