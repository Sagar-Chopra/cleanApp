jQuery(document).ready(function($) {
	gt3_animate_cart ();
	gt3_spinner_up_down ();
	gt3_size_guide ();
	gt3_comment_label();
	gt3_category_accordion();
    woocommerce_triger_lightbox();
    gt3_replace_product_gallery_trigger();
    gt3_login_register();
    gt3_infinite_scroll();
});

jQuery(window).load(function($) {
	if (jQuery(".gt3-animation-wrapper.gt3-anim-product").length) {
        gt3_scroll_animation('.gt3-animation-wrapper.gt3-anim-product', false);
	}
});

jQuery(window).resize(function($){

});

function viewport() {
	/* http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/ */
    var e = window, a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[a + 'Width'], height: e[a + 'Height']};
}

jQuery( document ).ajaxComplete(function() {
	var select = jQuery('#yith-quick-view-modal .variations select');
	if (select.length) {
		select.on('change', function(){
			var thumbnails = jQuery('#yith-quick-view-modal .gt3-thumbnails-control');
			var selectEmpty = true;

			select.each(function(){
			    var easyzoom = jQuery("#yith-quick-view-content .woocommerce-product-gallery__image").easyZoom();
				var api = easyzoom.data('easyZoom');
				api.teardown();
				api._init();

				if ( this.value !== '') {
					selectEmpty = false;
				}
			});

			if ( selectEmpty ) {
				thumbnails.css({'height':'auto'});
			} else {
				thumbnails.find('.gt3-thumb-control-item:first').trigger( "click" );
				thumbnails.css({'height':'0'});
			}
		})
	}
});

function gt3_scroll_animation($wrapper, newItem) {
    if(typeof $wrapper === 'string') {
        $wrapper = jQuery($wrapper);
    }
    var order = 0,
        lastOffsetTop = 0,
        delay;
    jQuery.each($wrapper, function(index, value) {
        var wrapper = jQuery(this);
        wrapper.imagesLoaded(function () {
            var elOffset = wrapper.offset(),
                windowHeight = jQuery(window).outerHeight(),
                offset = 20;
            if (elOffset.top > (windowHeight + offset)) {
                if (order === 0) {
                    lastOffsetTop = elOffset.top;
                } else {
                    if (lastOffsetTop !== elOffset.top) {
                        order = 0;
                        lastOffsetTop = elOffset.top;
                    }
                }
                order++;
                index = order;
            }
            delay = index * 0.20;
            wrapper.css({
                'transition-delay': delay + 's'
            });
            wrapper.attr('data-delay', delay);
        });
    });
    $wrapper.appear(function () {
        var wrapper = jQuery(this),
            windowScrollTop = jQuery(window).scrollTop();
        if (newItem) {
            wrapper.addClass('loaded');
        } else {
            var addLoaded = setTimeout(function () {
                wrapper.addClass('loaded');
            }, 300);
            if (windowScrollTop > 100) {
                clearTimeout(addLoaded);
                wrapper.addClass('loaded');
            }
        }
        var elDur = wrapper.css('transition-duration'),
            elDelay = wrapper.css('transition-delay'),
            timeRemove = elDur.split('s')[0] * 1000 + elDelay.split('s')[0] * 1000 + 4000,
            notRemove = '.will-progress';
        wrapper.not(notRemove).delay(timeRemove).queue(function () {
            wrapper.removeClass('loaded gt3-anim-product').dequeue();
        });
        wrapper.delay(timeRemove).queue(function () {
            wrapper.css('transition-delay', '');
        });
    }, {
        accX: 0,
        accY: 30
    });
}

// Cart Count Icon Animation
function gt3_animate_cart () {
	jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
		this.each(function() {
			for (var x=1; x<=intShakes; x++) {
				jQuery(this).animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
				.animate({left:intDistance}, ((intDuration/intShakes)/2))
				.animate({left:0}, (((intDuration/intShakes)/4)));
			}
		});
		return this;
	};
	jQuery(document.body).on('added_to_cart', function(el, data, params){
		setTimeout(function(){
			jQuery(".gt3_header_builder_cart_component").addClass("show_cart");
			jQuery(".woo_mini-count").shake(3,1.2,300);
			jQuery(".gt3-loading-overlay, .gt3-loading").remove();
		}, 300);
		setTimeout(function(){
			jQuery(".gt3_header_builder_cart_component").removeClass("show_cart");
		}, 2800);
    });
}

// Input spinner
function gt3_spinner_up_down () {
	var rtime;
	var timeout = false;
	var delta = 400;

	jQuery('body').on('tap click', '.gt3_qty_spinner .quantity-up', function() {
		var input 	= jQuery(this).parent().find('input[type="number"]'),
			max 		= input.attr('max'),
			oldValue 	= parseFloat(input.val()),
        	newVal;
		if (oldValue >= max && '' !== max) {
			newVal = oldValue;
		} else {
			newVal = oldValue + 1;
		}
		input.val(newVal).addClass('allotted');
		input.trigger("change");

		gt3_timeout(input);
	});

	jQuery('body').on('tap click', '.gt3_qty_spinner .quantity-down', function() {
		var input 	= jQuery(this).parent().find('input[type="number"]'),
			min 		= input.attr('min'),
			oldValue 	= parseFloat(input.val()),
			newVal;
		if (oldValue <= min && '' !== min) {
			newVal = oldValue;
		} else {
			newVal = oldValue - 1;
		}
		input.val(newVal).addClass('allotted');
		input.trigger("change");

		gt3_timeout(input);
	});

	function gt3_timeout(input){
		rtime = new Date();
		if (timeout === false) {
			timeout = true;
			setTimeout(clickend, delta);
		}
		function clickend() {
			if (new Date() - rtime < delta) {
				setTimeout(clickend, delta);
			} else {
				timeout = false;
				input.removeClass('allotted');
			}
		}
	}
}

function gt3_size_guide() {
	var size_popup = jQuery('.gt3_block_size_popup');
	if (size_popup.length) {
		size_popup.on('tap click', function(){
			image_size_popup = jQuery('.image_size_popup');
			image_size_popup.addClass('active');
			if (image_size_popup.hasClass('active')) {
				jQuery(document).keyup(function(e) {
					if (e.keyCode === 27) image_size_popup.removeClass('active');
				});
				jQuery('.image_size_popup .layer, .image_size_popup .close').on('tap click', function(){
					image_size_popup.removeClass('active');
				});
			}
		});
	}
}

function gt3_comment_label() {
	if (jQuery('#respond #commentform p[class*="comment-form-"] > label').length) {
		jQuery('#respond #commentform p[class*="comment-form-"] > label').each(function () {
			var _this_label = jQuery(this);
			_this_label.parent().find('input, textarea').on('focus', function () {
				_this_label.addClass('gt3_onfocus');
			}).on('blur', function () {
				if (jQuery(this).val() === "") {
					_this_label.removeClass('gt3_onfocus');
				} else {
					_this_label.addClass('gt3_onfocus');
				}
			});
		})
	}
}

function gt3_category_accordion () {
	var widget_product_categories = jQuery('.widget_product_categories');
	if (widget_product_categories.length) {
		widget_product_categories.each(function(){
			var $this = jQuery(this);
			var elements = $this.find('.product-categories>li.cat-parent');

			for (var i = 0; i < elements.length; i++) {
				if ( jQuery(elements[i]).hasClass('current-cat-parent') ) {
					jQuery(elements[i]).addClass('open').find('.current-cat').parent().slideDown();
				}
				jQuery(elements[i]).append("<span class=\"gt3-button-cat-open\"></span>");
			}
		});
		jQuery(".gt3-button-cat-open").on("click", function () {
			jQuery(this).parent().toggleClass('open');
			if (jQuery(this).parent().hasClass('open')) {
				jQuery(this).parent().children('.children').slideDown();
			} else {
				jQuery(this).parent().children('.children').slideUp();
			}
		})
	}
}

// func called from frontend
function gt3_clear_recently_products(el){
	document.cookie = 'gt3_product_recently_viewed=;path=/';
	jQuery(el).parent().fadeOut(400);
}

function woocommerce_triger_lightbox() {
    jQuery('.woocommerce-product-gallery .woocommerce-product-gallery__wrapper').on('click', function () {
        jQuery('.woocommerce-product-gallery a.woocommerce-product-gallery__trigger').trigger( "click" );
    });
}

function gt3_replace_product_gallery_trigger(){
    var $product_gallery = jQuery('.woocommerce-product-gallery');
    if ($product_gallery.length) {
        $product_gallery.append( jQuery('.woocommerce-product-gallery__trigger') );
    }
}

function gt3_login_register(){
    var $modal = jQuery('.gt3_header_builder__login-modal');
    if (!jQuery('body').hasClass('woocommerce-account') && $modal.find('.woocommerce-error').length){
        $modal.addClass('active');
    }
}


function gt3_infinite_scroll() {
    if (window.sessionStorage && sessionStorage.getItem('gt3-show_all') && sessionStorage.getItem('gt3-show_all') === 'true'){
        jQuery('.infinite_scroll-view_all').removeClass('infinite_scroll-view_all').addClass('infinite_scroll-always');
    }
    var elem = jQuery('.infinite_scroll-always .products');
    if (elem.length) {
        elem.each(function () {
            var $this = jQuery(this);
            $this.infiniteScroll({
                path: ".next.page-numbers",
                append: ".products > .product",
                prefill: true,
                scrollThreshold: viewport().height * 1.2,
                history: false,
                hideNav: '.woocommerce-pagination',
                status: '.spinner.infinite-scroll'
            });
            $this.on('append.infiniteScroll', function () {
                if (jQuery(".gt3-animation-wrapper.gt3-anim-product").length) {
                    gt3_scroll_animation('.gt3-animation-wrapper.gt3-anim-product:not(.loaded)', true);
                }
            });

            if (window.sessionStorage && sessionStorage.getItem('gt3-show_all') && sessionStorage.getItem('gt3-show_all') === 'true'){
                sessionStorage.setItem('gt3-show_all', 'false');
                setCookie('gt3-show_all', 'false');

                $this.imagesLoaded(function () {
                    setTimeout(function () {
                        gt3_scrollTo($this.find('.product:first-of-type'), 2500);
                    }, 500);
                });

            }
        });
    }

    var elem2 = jQuery('.infinite_scroll-view_all .products');
    if (elem2.length) {
        elem2.each(function () {
            var $this = jQuery(this),
                $top_nav = $this.prev('.gt3-products-header').find('.gt3-pagination_nav');
            $top_nav.find('.gt3_show_all').on('click tap', function (e) {
                var $button = jQuery(this);
                if ( window.sessionStorage && sessionStorage.getItem('gt3-show_all') !== 'true'){
                    if ( $button.hasClass('first-page') ){
                        e.preventDefault();
                        $top_nav.find('.gt3_show_all_li').fadeOut(300);
                        $this.next('.spinner.infinite-scroll').fadeIn(300);
                        setTimeout(function () {
                            gt3_scrollTo($this.find('.product:first-of-type'), 2500);
                        }, 500);
                    }else{
                        sessionStorage.setItem('gt3-show_all', 'true');
                        setCookie('gt3-show_all', 'true');
                    }
                }

                $this.infiniteScroll({
                    path: ".next.page-numbers",
                    append: ".products > .product",
                    prefill: true,
                    scrollThreshold: viewport().height * 1.2,
                    history: false,
                    hideNav: '.gt3-products-bottom .woocommerce-pagination',
                    status: '.spinner.infinite-scroll'
                });
                $this.on('append.infiniteScroll', function () {
                    if (jQuery(".gt3-animation-wrapper.gt3-anim-product").length) {
                        gt3_scroll_animation('.gt3-animation-wrapper.gt3-anim-product:not(.loaded)', false);
                    }
                });
            });
        });
    }
}

function gt3_scrollTo(element, duration, callback) {
    if (typeof element !== "number") {
        element = element.offset().top - 200;
    }
    window.scrollTo({
        top: element,
        behavior: "smooth"
    });
}

function setCookie(name, value, options) {
    options = options || {};

    jQuery.extend(options, {
        path: '/',
        expires: 2592000 // month
    });

    var expires = options.expires;

    if (typeof expires === "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    var updatedCookie = name + "=" + (typeof value === "object" ? JSON.stringify(value) : value);

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
