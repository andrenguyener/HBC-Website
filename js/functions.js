      if (window.innerWidth > 498) {
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
          
        $('.hbc-logo').css({
            'transform' : 'translate(0px, -'+ wScroll /8 + '%)'
        });

        $('.nav').css({
            'transform' : 'translate(0px, -'+ wScroll /8 + '%)'
        });
    
    })
      }
    

    //scroll reveal thingy
    // if (MEMBERS)
    // if (wScroll > $('#members').offset().top - 
    // ($(window).height() / 1.5)) {

    //     $('#members .member-card').each(function(i) {

    //         setTimeout(function() {
    //            $('#members .member-card').eq(i).addClass('is-showing'); 
    //         }, 150 * (i + 1));
            
    //     });
    // }






