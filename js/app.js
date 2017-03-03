"use strict";

// import Waypoint  from 'waypoint';


var membersList = document.querySelector("#members");
var pContainerHeight = $('header').height();



    render();
    // window.sr = ScrollReveal({ duration: 3000, delay: 1000 });
    // sr.reveal('.member-card', 100);

        $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        

            if (window.innerWidth > 498) {
                  if (wScroll <= pContainerHeight) {
                    $('.hbc-logo').css({
                        'transform' : 'translate(0px, -'+ wScroll /8 + '%)'
                    });
                  }

            //     $('.nav').css({
            //         'transform' : 'translate(0px, -'+ wScroll /8 + '%)'
            //     });
            
          
                $('.block').css({
                        'transform' : 'translate(0px, -'+ wScroll /30 + '%)'
                });
            
                
             
                 $('.block2').css({
                    'transform' : 'translate(0px, '+ wScroll /20 + '%)'
                });
            
            // $('.block').css({
            //         'transform' : 'translate(0px, -'+ wScroll /30 + '%)'
            // });
            
            $(window).scroll(function() {
                if($(document).scrollTop() > 15) {
                    $('.nav').addClass('shrink');
                }
                else {
                    $('.nav').removeClass('shrink');
                }
            });
            }
        });





var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop;  
   if (st > lastScrollTop){
       $(".navbar-nav").addClass("nav-hide");
   } else {
       $(".navbar-nav").removeClass("nav-hide");
   }
   lastScrollTop = st;
}, false);
    

    //scroll reveal thingy
    // if (wScroll > $('#members').offset().top - 
    // ($(window).height() / 1.5)) {

    //     $('#members .member-card').each(function(i) {

    //         setTimeout(function() {
    //            $('#members .member-card').eq(i).addClass('is-showing'); 
    //         }, 150 * (i + 1));
            
    //     });
    // }

    // })



function render() {
   MEMBERS.forEach(function(memberInner) {
       var memberCard = document.createElement("div");
       memberCard.className = "member-card";
       var img = document.createElement("img");
       img.className = "member-img lazy";
       var name = document.createElement("p");
       name.className = "member-name";
       name.textContent = memberInner.name;
       var position = document.createElement("p");
       position.textContent = memberInner.position;
       position.className = "member-position";
       var description = document.createElement("p");
       description.className = "member-description";
       img.src = memberInner.picture;
       description.textContent = memberInner.description;
       name.appendChild(position);
       memberCard.appendChild(img);
       memberCard.appendChild(name);
       memberCard.appendChild(description);
       membersList.appendChild(memberCard);
   });
}




$(document).on('click', 'a', function(event){
    event.preventDefault();
    if ($('#contact-anchor').attr('id') === $.attr(this, 'href')) {
        console.log("test");
        $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top + 1000
        }, 500);
    } else {
        console.log("1test");
        $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
    }, 500);
    }
    
});



(function ($) {

    'use strict';
// $('#wrapper').on('click', function(event){
//    if ($(".menu-slider") && $(".in")){
//      $('body').removeClass('menu-slider');
//      $('body').removeClass('in');
//      $('#bs-example-navbar-collapse-2').removeClass('in');
// }
// });
    // Toggle classes in body for syncing sliding animation with other elements
    $('#bs-example-navbar-collapse-2')
        .on('show.bs.collapse', function (e) {

                $('body').addClass('menu-slider');
            console.log("opens menu");
        })
        .on('shown.bs.collapse', function (e) {

                $('body').addClass('in');
            console.log("body slides");
        })
        .on('hide.bs.collapse', function (e) {
       
                $('body').removeClass('menu-slider');
          
        })
        .on('hidden.bs.collapse', function (e) {
       
                $('body').removeClass('in');
      
        });

$('#bs-example-navbar-collapse-2').on('click','a', function(event){
    if ($(".menu-slider") && $(".in")) {
         $('body').removeClass('menu-slider');
        $('body').removeClass('in');
        $('#bs-example-navbar-collapse-2').removeClass('in');
        $('.navbar-toggle').addClass("collapsed");
    }
});
        
})(jQuery);








$.fn.inView = function(){
    //Window Object
    var win = $(window);
    //Object to Check
    var obj = $(this);
    //the top Scroll Position in the page
    var scrollPosition = win.scrollTop();
    //the end of the visible area in the page, starting from the scroll position
    var visibleArea = win.scrollTop() + win.height();
    //the end of the object to check
    var objEndPos = (obj.offset().top + obj.outerHeight());
    return(visibleArea + 150 >= objEndPos && scrollPosition <= objEndPos ? true : false)
};


$(window).scroll(function(){
    if($("header").inView()) {
        $('#home-nav').addClass("active");
        $('#about-nav').removeClass("active");
        $('#members-nav').removeClass("active");
        $('#contact-nav').removeClass("active");
    } else if ($(".about-section").inView()) {
        $('#about-nav').addClass("active");
        $('#home-nav').removeClass("active");
        $('#members-nav').removeClass("active");
        $('#contact-nav').removeClass("active");
    }  else if ($(".contact-section").inView()) {
        $('#contact-nav').addClass("active");
        $('#home-nav').removeClass("active");
        $('#about-nav').removeClass("active");
        $('#members-nav').removeClass("active");
    }else if ($(".members-section").inView()) {
        console.log("members in view");
        $('#members-nav').addClass("active");
        $('#about-nav').removeClass("active");
        $('#home-nav').removeClass("active");
        $('#contact-nav').removeClass("active");
    } else if ($("#members-anchor").inView()) {
        $('#members-nav').addClass("active");
        $('#about-nav').removeClass("active");
        $('#contact-nav').removeClass("active");
        $('#home-nav').removeClass("active");
    }
    
});

// $(window).scroll(function(){
//     if($(".about-section").inView()) {
//             $('#about-nav').addClass("active");
//         } else {
//             $('#about-nav').removeClass("active");
//         }
// });

// $(window).scroll(function(){
//     if($(".members-section").inView()) {
//             $('#members-nav').addClass("active");
//         } else {
//             $('#members-nav').removeClass("active");
//         }
// });

// $(window).scroll(function(){
//    if($(".contact-section").inView()) {
//         $('#contact-nav').addClass("active");
//     } else {
//         $('#contact-nav').removeClass("active");
//     }
// });

// var waypoint = new Waypoint({
//   element: document.getElementById('about-section'),
//   handler: function() {
//     notify('Basic waypoint triggered')
//   }
// })



//lazy load
// (function($, window, document, undefined) {
//     var $window = $(window);

//     $.fn.lazyload = function(options) {
//         var elements = this;
//         var $container;
//         var settings = {
//             threshold       : 0,
//             failure_limit   : 0,
//             event           : "scroll",
//             effect          : "show",
//             container       : window,
//             data_attribute  : "original",
//             skip_invisible  : false,
//             appear          : null,
//             load            : null,
//             placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
//         };

//         function update() {
//             var counter = 0;

//             elements.each(function() {
//                 var $this = $(this);
//                 if (settings.skip_invisible && !$this.is(":visible")) {
//                     return;
//                 }
//                 if ($.abovethetop(this, settings) ||
//                     $.leftofbegin(this, settings)) {
//                         /* Nothing. */
//                 } else if (!$.belowthefold(this, settings) &&
//                     !$.rightoffold(this, settings)) {
//                         $this.trigger("appear");
//                         /* if we found an image we'll load, reset the counter */
//                         counter = 0;
//                 } else {
//                     if (++counter > settings.failure_limit) {
//                         return false;
//                     }
//                 }
//             });

//         }

//         if(options) {
//             /* Maintain BC for a couple of versions. */
//             if (undefined !== options.failurelimit) {
//                 options.failure_limit = options.failurelimit;
//                 delete options.failurelimit;
//             }
//             if (undefined !== options.effectspeed) {
//                 options.effect_speed = options.effectspeed;
//                 delete options.effectspeed;
//             }

//             $.extend(settings, options);
//         }

//         /* Cache container as jQuery as object. */
//         $container = (settings.container === undefined ||
//                       settings.container === window) ? $window : $(settings.container);

//         /* Fire one scroll event per scroll. Not one scroll event per image. */
//         if (0 === settings.event.indexOf("scroll")) {
//             $container.bind(settings.event, function() {
//                 return update();
//             });
//         }

//         this.each(function() {
//             var self = this;
//             var $self = $(self);

//             self.loaded = false;

//             /* If no src attribute given use data:uri. */
//             if ($self.attr("src") === undefined || $self.attr("src") === false) {
//                 if ($self.is("img")) {
//                     $self.attr("src", settings.placeholder);
//                 }
//             }

//             /* When appear is triggered load original image. */
//             $self.one("appear", function() {
//                 if (!this.loaded) {
//                     if (settings.appear) {
//                         var elements_left = elements.length;
//                         settings.appear.call(self, elements_left, settings);
//                     }
//                     $("<img />")
//                         .bind("load", function() {

//                             var original = $self.attr("data-" + settings.data_attribute);
//                             $self.hide();
//                             if ($self.is("img")) {
//                                 $self.attr("src", original);
//                             } else {
//                                 $self.css("background-image", "url('" + original + "')");
//                             }
//                             $self[settings.effect](settings.effect_speed);

//                             self.loaded = true;

//                             /* Remove image from array so it is not looped next time. */
//                             var temp = $.grep(elements, function(element) {
//                                 return !element.loaded;
//                             });
//                             elements = $(temp);

//                             if (settings.load) {
//                                 var elements_left = elements.length;
//                                 settings.load.call(self, elements_left, settings);
//                             }
//                         })
//                         .attr("src", $self.attr("data-" + settings.data_attribute));
//                 }
//             });

//             /* When wanted event is triggered load original image */
//             /* by triggering appear.                              */
//             if (0 !== settings.event.indexOf("scroll")) {
//                 $self.bind(settings.event, function() {
//                     if (!self.loaded) {
//                         $self.trigger("appear");
//                     }
//                 });
//             }
//         });

//         /* Check if something appears when window is resized. */
//         $window.bind("resize", function() {
//             update();
//         });

//         /* With IOS5 force loading images when navigating with back button. */
//         /* Non optimal workaround. */
//         if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
//             $window.bind("pageshow", function(event) {
//                 if (event.originalEvent && event.originalEvent.persisted) {
//                     elements.each(function() {
//                         $(this).trigger("appear");
//                     });
//                 }
//             });
//         }

//         /* Force initial check if images should appear. */
//         $(document).ready(function() {
//             update();
//         });

//         return this;
//     };

//     /* Convenience methods in jQuery namespace.           */
//     /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

//     $.belowthefold = function(element, settings) {
//         var fold;

//         if (settings.container === undefined || settings.container === window) {
//             fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
//         } else {
//             fold = $(settings.container).offset().top + $(settings.container).height();
//         }

//         return fold <= $(element).offset().top - settings.threshold;
//     };

//     $.rightoffold = function(element, settings) {
//         var fold;

//         if (settings.container === undefined || settings.container === window) {
//             fold = $window.width() + $window.scrollLeft();
//         } else {
//             fold = $(settings.container).offset().left + $(settings.container).width();
//         }

//         return fold <= $(element).offset().left - settings.threshold;
//     };

//     $.abovethetop = function(element, settings) {
//         var fold;

//         if (settings.container === undefined || settings.container === window) {
//             fold = $window.scrollTop();
//         } else {
//             fold = $(settings.container).offset().top;
//         }

//         return fold >= $(element).offset().top + settings.threshold  + $(element).height();
//     };

//     $.leftofbegin = function(element, settings) {
//         var fold;

//         if (settings.container === undefined || settings.container === window) {
//             fold = $window.scrollLeft();
//         } else {
//             fold = $(settings.container).offset().left;
//         }

//         return fold >= $(element).offset().left + settings.threshold + $(element).width();
//     };

//     $.inviewport = function(element, settings) {
//          return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
//                 !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
//      };

//     /* Custom selectors for your convenience.   */
//     /* Use as $("img:below-the-fold").something() or */
//     /* $("img").filter(":below-the-fold").something() which is faster */

//     $.extend($.expr[":"], {
//         "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
//         "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
//         "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
//         "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
//         "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
//         /* Maintain BC for couple of versions. */
//         "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
//         "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
//         "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
//     });

// })(jQuery, window, document);







// $(document).ready(function() { 
//     // prepare images to lazyload 
//     $('.lazy').each(function() { 
//         $(this).attr('data-original', $(this).attr('src')); 
//         $(this).removeAttr('src').removeAttr('alt'); 
//     }); 
//         $('.lazy').lazyload(); 
// }); 

