!function(e){var t={};function o(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=828)}({678:function(e,t,o){},828:function(e,t,o){"use strict";o.r(t);new Map,new Map;var r,i,n,s;o(678);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t,o){return(t=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var y=0;function b(e){return"__private_"+y+++"_"+e}var g=window.GT3,m=(g.Hooks,g.autobind),h=g.ThemesCore,w=h.Widgets.BasicWidget,v=h.jQuery,O=h.isRTL,_=g.Isotope,j=m((n=b("ui"),s=b("isIsotope"),(i=function(e){var t,o;function r(){var t;t=e.apply(this,arguments)||this,Object.defineProperty(l(t),n,{writable:!0,value:{$scope:".gt3_module_blog",isotope_wrapper:".isotope_blog_items",$isotope_wrapper:".isotope_blog_items",$filter:".isotope-filter a"}}),Object.defineProperty(l(t),s,{writable:!0,value:!1}),t.isotope=null,t.extendUI(d(l(t),n)[n]),t.init();var o=window.GT3.ThemesCore.editMode;return t.ui.$scope?(t.showImages(),d(l(t),s)[s]=!!t.ui.isotope_wrapper,d(l(t),s)[s]?(t.isotope=new _(t.ui.isotope_wrapper,p({itemSelector:".isotope_item",originLeft:!O},t.settings.isotope_settings||{})),t.settings.packery?t.resizeWidget():t.ui.$isotope_wrapper.imagesLoaded((function(){t.isotope.layout(),setTimeout((function(){t.isotope.layout()}),3e3)})),t.ui.$filter&&t.ui.$filter.on("click",(function(e){e.preventDefault();var o=e.target||e.currentTarget,r=o.getAttribute("data-filter");v(o).siblings().removeClass("active"),v(o).addClass("active"),t.isotope.arrange({filter:r})})),t.settings.packery&&t.ui.$scope.addClass("blog_packery_loaded"),o&&t.resize(),t.afterInit(),t):l(t)):l(t)}o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,f(t,o);var i=r.prototype;return i.showImages=function(){v(".loading:first",this.ui.$scope).length&&(v(".loading:first",this.ui.$scope).removeClass("loading"),setTimeout(this.showImages,200))},i.resizeWidget=function(){var e,t,o,r,i=this,n=this.settings.packery_grid,s=v(window).outerWidth(),u=n.grid,a=n.lap;s<600?u=1:s<900&&u%2==0?(a/=2,u/=2):s<900&&u>2&&(u=2),e=Math.floor(this.ui.$isotope_wrapper.width()/u);var p=0;this.ui.$isotope_wrapper.find(".element").each((function(i,u){var c=v(u);s<600?c.css("height","auto").css("width","auto").attr("data-ratio",""):(t=o=e,(r=p%a+1)in n.elem&&("w"in n.elem[r]&&n.elem[r].w>1&&(o=e*n.elem[r].w),"h"in n.elem[r]&&n.elem[r].h>1&&(t=e*n.elem[r].h)),p++,c.css("height",Math.floor(t)).css("width",Math.floor(o)))})),this.isotope&&this.isotope.arrange({masonry:{columnWidth:e}}),this.isotope&&this.ui.$isotope_wrapper.imagesLoaded((function(){i.isotope.layout(),setTimeout((function(){i.isotope.layout()}),3e3)}))},i.resize=function(){d(this,s)[s]&&(this.settings.packery?this.resizeWidget():(this.ui.$scope.off(),this.isotope.layout()))},r}(w)).widgetName="gt3-core-blog",r=i))||r;window.GT3.ThemesCore.onWidgetRegisterHandler(j.widgetName,j)}});