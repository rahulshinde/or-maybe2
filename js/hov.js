// HOV.JS
// no jay-z here, sorry :(
// changes img description on link hover

$(document).ready( function() {

	// link-1
	$( '#link-1' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/2.jpg');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
        });

    // link-2
	$( '#link-2' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/3.jpg');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
        });

    // link-3
	$( '#link-3' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/4.jpg');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
        });

    // link-4
	$( '#link-4' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/5.jpg');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
        });

    // link-5
	$( '#link-5' )
		.mouseover(function() { 
            $('#thumb').attr("src", 'img/landing/6.jpg');
        })

        .mouseout(function() {
            $('#thumb').attr("src", 'img/landing/1.jpg');
        });
});