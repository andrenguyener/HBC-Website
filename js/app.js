"use strict";




var membersList = document.querySelector( "#members" );
var pContainerHeight = $( 'header' )
	.height();



render();

$( window )
	.scroll( function() {
		var wScroll = $( this )
			.scrollTop();


		if ( window.innerWidth > 498 ) {
			if ( wScroll <= pContainerHeight ) {
				$( '.hbc-logo' )
					.css( {
						'transform': 'translate(0px, -' + wScroll / 8 + '%)'
					} );
			}
			if ( window.innerWidth > 768 ) {
				if ( wScroll <= pContainerHeight ) {
					$( '#husky-h' )
						.css( {
							'transform': 'translate(0px, ' + wScroll / 8 + '%)'
						} );
					$( '#husky-u' )
						.css( {
							'transform': 'translate(0px, -' + wScroll / 8 + '%)'
						} );
					$( '#husky-s' )
						.css( {
							'transform': 'translate(0px, -' + wScroll / 4 + '%)'
						} );
					$( '#husky-k' )
						.css( {
							'transform': 'translate(0px, ' + wScroll / 7 + '%)'
						} );
					$( '#husky-y' )
						.css( {
							'transform': 'translate(0px, -' + wScroll / 18 + '%)'
						} );
				}

			}



			$( window )
				.scroll( function() {
					if ( $( document )
						.scrollTop() > 15 ) {
						$( '.nav' )
							.addClass( 'shrink' );
					} else {
						$( '.nav' )
							.removeClass( 'shrink' );
					}
				} );
		}
		var scrollTop = $( window )
			.scrollTop();
		var height = $( window )
			.height();
		$( '.about-section' )
			.css( {
				'opacity': ( 1 - ( height - scrollTop ) / height )
			} );
		$( '.arrow-down' )
			.css( {
				'opacity': ( ( height - scrollTop * 2 ) / ( height ) )
			} );
		$( '.husky-logo' )
			.css( {
				'opacity': ( ( height - scrollTop ) / ( height ) )
			} );
	} );








$( ".navbar-nav li a" )
	.mouseup( function() {
		$( this )
			.blur();
	} )







var header = $( '.hbc-logo' );
var range = 200;

$( window )
	.on( 'scroll', function() {

		var scrollTop = $( this )
			.scrollTop();
		var offset = header.offset()
			.top;
		var height = header.outerHeight();
		offset = offset + height / 2;
		var calc = 1 - ( scrollTop - offset + range ) / range;

		header.css( {
			'opacity': calc
		} );

		if ( calc > '1' ) {
			header.css( {
				'opacity': 1
			} );
		} else if ( calc < '0' ) {
			header.css( {
				'opacity': 0
			} );
		}

	} );


var lastScrollTop = 0;

window.addEventListener( "scroll", function() {
	var st = window.pageYOffset || document.documentElement.scrollTop;
	if ( st > lastScrollTop ) {
		$( ".navbar-nav" )
			.addClass( "nav-hide" );
		$( ".navbar-toggle" )
			.addClass( "nav-hide" );
	} else {
		$( ".navbar-nav" )
			.removeClass( "nav-hide" );
		$( ".navbar-toggle" )
			.removeClass( "nav-hide" );
	}
	lastScrollTop = st;
}, false );




if ( navigator.userAgent.match( /Trident\/7\./ ) ) { // if IE
	$( 'body' )
		.on( "mousewheel", function() {
			// remove default behavior
			event.preventDefault();

			//scroll without smoothing
			var wheelDelta = event.wheelDelta;
			var currentScrollPosition = window.pageYOffset;
			window.scrollTo( 0, currentScrollPosition - wheelDelta );
		} );
}


function render() {
	MEMBERS.forEach( function( memberInner ) {
		var memberCard = document.createElement( "div" );
		memberCard.className = "member-card";
		var img = document.createElement( "img" );
		img.className = "member-img lazy";
		var name = document.createElement( "p" );
		name.className = "member-name";
		name.textContent = memberInner.name;
		var description = document.createElement( "p" );
		description.className = "member-description";
		img.src = memberInner.picture;
		if ( memberInner.position.length > 1 ) {
			description.innerHTML = memberInner.position + "<br/>" + memberInner.description;
		} else {
			description.innerHTML = memberInner.description;
		}
		memberCard.appendChild( img );
		memberCard.appendChild( name );
		memberCard.appendChild( description );
		memberCard.addEventListener( "click", testFunction, false );
		membersList.appendChild( memberCard );
	} );

	function testFunction() {
		// alert('hi')
	}
}




$( document )
	.on( 'click', 'a', function( event ) {

		var hrefLink = $( this )
			.attr( "href" );
		if ( !( hrefLink )
			.includes( ".com" ) ) {
			event.preventDefault();
			$( 'html, body' )
				.animate( {
					scrollTop: $( $.attr( this, 'href' ) )
						.offset()
						.top - 50
				}, 500 );
		}


	} );



( function( $ ) {

	'use strict';
	// Toggle classes in body for syncing sliding animation with other elements
	$( '#bs-example-navbar-collapse-2' )
		.on( 'show.bs.collapse', function( e ) {

			$( 'body' )
				.addClass( 'menu-slider' );

		} )
		.on( 'shown.bs.collapse', function( e ) {

			$( 'body' )
				.addClass( 'in' );

		} )
		.on( 'hide.bs.collapse', function( e ) {

			$( 'body' )
				.removeClass( 'menu-slider' );

		} )
		.on( 'hidden.bs.collapse', function( e ) {

			$( 'body' )
				.removeClass( 'in' );

		} );

	$( '#bs-example-navbar-collapse-2' )
		.on( 'click', 'a', function( event ) {
			if ( $( ".menu-slider" ) && $( ".in" ) ) {
				$( 'body' )
					.removeClass( 'menu-slider' );
				$( 'body' )
					.removeClass( 'in' );
				$( '#bs-example-navbar-collapse-2' )
					.removeClass( 'in' );
				$( '.navbar-toggle' )
					.addClass( "collapsed" );
			}
		} );

} )( jQuery );








$.fn.inView = function() {
	//Window Object
	var win = $( window );
	//Object to Check
	var obj = $( this );
	//the top Scroll Position in the page
	var scrollPosition = win.scrollTop();
	//the end of the visible area in the page, starting from the scroll position
	var visibleArea = win.scrollTop() + win.height();
	//the end of the object to check
	var objEndPos = ( obj.offset()
		.top + obj.outerHeight() );
	return ( visibleArea + 150 >= objEndPos && scrollPosition <= objEndPos ? true : false )
};


$( window )
	.scroll( function() {
		if ( $( "header" )
			.inView() ) {
			$( '#home-nav' )
				.addClass( "active" );
			$( '#about-nav' )
				.removeClass( "active" );
			$( '#members-nav' )
				.removeClass( "active" );
			$( '#contact-nav' )
				.removeClass( "active" );
		} else if ( $( ".about-section" )
			.inView() ) {
			$( '#about-nav' )
				.addClass( "active" );
			$( '#home-nav' )
				.removeClass( "active" );
			$( '#members-nav' )
				.removeClass( "active" );
			$( '#contact-nav' )
				.removeClass( "active" );
		} else if ( $( ".contact-section" )
			.inView() ) {
			$( '#contact-nav' )
				.addClass( "active" );
			$( '#home-nav' )
				.removeClass( "active" );
			$( '#about-nav' )
				.removeClass( "active" );
			$( '#members-nav' )
				.removeClass( "active" );
		} else if ( $( ".members-section" )
			.inView() ) {

			$( '#members-nav' )
				.addClass( "active" );
			$( '#about-nav' )
				.removeClass( "active" );
			$( '#home-nav' )
				.removeClass( "active" );
			$( '#contact-nav' )
				.removeClass( "active" );
		} else if ( $( "#members-anchor" )
			.inView() ) {
			$( '#members-nav' )
				.addClass( "active" );
			$( '#about-nav' )
				.removeClass( "active" );
			$( '#contact-nav' )
				.removeClass( "active" );
			$( '#home-nav' )
				.removeClass( "active" );
		}

	} );