$(window).on("load",function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
        });
        // console.log(Math.max((Math.min(1 - $(window).scrollTop()*0.004 + 0.1, 1)), 0));
        $(".action").css({"bottom": windowBottom/5 + 100 + "px", "opacity": Math.max((Math.min(1 - $(window).scrollTop()*0.004 + 0.1, 1)), 0)});
    }).scroll(); //invoke scroll-handler on page-load
    if ($(window).width() < 500) {
        $(".mobile-menu-btn").on("touch, click", function() {
            $(".menu-outer").toggleClass("opened");
        })
    }
});