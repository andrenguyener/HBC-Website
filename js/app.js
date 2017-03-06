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
            
          
                // $('.block').css({
                //         'transform' : 'translate(0px, -'+ wScroll /30 + '%)'
                // });
            
                
             
                //  $('.block2').css({
                //     'transform' : 'translate(0px, '+ wScroll /20 + '%)'
                // });
            
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
            var scrollTop = $(window).scrollTop();
                var height = $(window).height();
                $('.about-section').css({
                    'opacity': (1 - (height - scrollTop) / height)
                });
        });


var header = $('.hbc-logo');
var range = 200;

$(window).on('scroll', function () {
  
    var scrollTop = $(this).scrollTop();
    var offset = header.offset().top;
    var height = header.outerHeight();
    offset = offset + height / 2;
    var calc = 1 - (scrollTop - offset + range) / range;
  
    header.css({ 'opacity': calc });
  
    if ( calc > '1' ) {
      header.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      header.css({ 'opacity': 0 });
    }
  
});


var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop;  
   if (st > lastScrollTop){
       $(".navbar-nav").addClass("nav-hide");
       $(".navbar-toggle").addClass("nav-hide");
   } else {
       $(".navbar-nav").removeClass("nav-hide");
       $(".navbar-toggle").removeClass("nav-hide");
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
    //    var position = document.createElement("p");
    //    position.textContent = memberInner.position;
    //    position.className = "member-position";
       var description = document.createElement("p");
       description.className = "member-description";
       img.src = memberInner.picture;
       description.innerHTML = memberInner.position + "<br/>" + memberInner.description;
       if (description.innerHTML.length > 17) {
           description.className += " member-description-padding";
       }
    //    description.appendChild(document.createElement("br"));
    //    name.appendChild(position);
       memberCard.appendChild(img);
       memberCard.appendChild(name);
       memberCard.appendChild(description);
       membersList.appendChild(memberCard);
   });
}




$(document).on('click', 'a', function(event){
    event.preventDefault();
    
        console.log("1test");
        $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
    }, 500);
    
    this.addClass("active");
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
   
    if ($(".about-section").inView()) {
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

