$(window).on("load",function() {
    if($(".social-section .posts").children().length == 0) {
        $(".social-loader").show();
    }
    $.ajax({
        url: "https://www.instagram.com/explore/tags/smoothdontmiss/?__a=1", 
        success: function(data){
            var posts = data.graphql.hashtag.edge_hashtag_to_media.edges;
            console.log(data.graphql.hashtag);
            posts.forEach(node => {
                $(".social-loader").hide();
                $(".social-section .posts").prepend("<a href='https://www.instagram.com/p/" + node.node.shortcode + "' target='_blank'><li><img src=" + node.node.thumbnail_src + " alt='instagram' /></li></a>");
                // if (node.node.is_video) {
                // } else {

                // }
            });
        }
    });

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
        if($(window).width() > 700) {
            $(".action").css({"bottom": windowBottom/80 + 12 + "%", "opacity": Math.max((Math.min(1 - $(window).scrollTop()*0.004 + 0.1, 1)), 0)});
        }
        if ($(window).scrollTop() > 360) {
            $(".action").hide();
        } else {
            $(".action").show();
        }
    }).scroll(); //invoke scroll-handler on page-load
    if ($(window).width() < 500) {
        $(".mobile-menu-btn").on("touch, click", function() {
            $(".menu-outer").toggleClass("opened");
        });
        $(".menu-outer li").on("touch, click", function() {
            $(".menu-outer").removeClass("opened");
        });
    }
});