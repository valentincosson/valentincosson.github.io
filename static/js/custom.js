$( ".nav-link" ).click(function() {
    $('.nav-link').removeClass( 'active' );
    $('.nav-link').removeClass( 'clicked' );
    $(this).addClass('active').addClass('clicked');
})

$(window).bind('scroll', function() {

    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');

    elems.each(function(index) {
        var elemTop 	= $(this).offset().top;
        var elemBottom 	= elemTop + $(this).height();

        if (currentTop >= elemTop && currentTop <= elemBottom) {
            var id 		= $(this).attr('id');
            var navElem = $('a[href="#' + id + '"]');
            if (!$('.nav-link').hasClass('clicked')) {
                $('.nav-link').removeClass( 'active' );
                navElem.addClass('active');
            }
            $('.nav-link').removeClass( 'clicked' );
        }
    })
});
