$(window).on("load",function() {
    if($(".social-section .posts").children().length == 0) {
        $(".social-loader").show();
    }
    // $.ajax({
    //     url: "https://www.instagram.com/explore/tags/smoothdontmiss/?__a=1", 
    //     success: function(data) {
    //         var posts = data.graphql.hashtag.edge_hashtag_to_media.edges;
    //         if (data.graphql.hashtag.edge_hashtag_to_media.count == 0) {
    //             $(".social-section .posts").append("No Posts");
    //         } else {
    //             posts.forEach(node => {
    //                 $(".social-loader").hide();
    //                 $(".social-section .posts").append("<a href='https://www.instagram.com/p/" + node.node.shortcode + "' target='_blank'><li><img loading=lazy src=" + node.node.thumbnail_src + " alt='instagram' /></li></a>");
    //             });
    //         }
    //     },
    //     error: function(err) {
    //         console.log("An error occured", err);
    //     }
    // });
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(200,1);}
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(200,0);}
            }
        });
        // console.log(Math.max((Math.min(1 - $(window).scrollTop()*0.004 + 0.1, 1)), 0));
        if($(window).width() > 700) {
            $(".action").css({"opacity": Math.max((Math.min(1 - $(window).scrollTop()*0.004 + 0.1, 1)), 0)});
        }
        if ($(window).scrollTop() > 360) {
            $(".action").hide();
        } else {
            $(".action").show();
        }
    }).scroll(); //invoke scroll-handler on page-load
    if ($(window).width() < 500) {
        $(".mobile-menu-btn").on("touch, click", function() {
            if($(".menu-outer").css("display") === 'none') {
                $('.mobile-menu-btn').css("background", "#111");
                $('.mobile-menu-btn').children()[0].style.transform = "translateY(15px) rotate(45deg)";
                $('.mobile-menu-btn').children()[1].style.opacity = "0";
                $('.mobile-menu-btn').children()[2].style.transform = "translateY(-9px) rotate(-45deg)";
                $(".menu-outer").fadeIn(250);
            } else {
                $('.mobile-menu-btn').css("background", "#000");
                $('.mobile-menu-btn').children()[0].style.transform = "translateY(0) rotate(0)";
                $('.mobile-menu-btn').children()[1].style.opacity = "1";
                $('.mobile-menu-btn').children()[2].style.transform = "translateY(0) rotate(0)";
                $(".menu-outer").fadeOut(250);
            }
        });
        $(".menu-outer li").on("touch, click", function() {
            $('.mobile-menu-btn').css("background", "#000");
            $('.mobile-menu-btn').children()[0].style.transform = "translateY(0) rotate(0)";
            $('.mobile-menu-btn').children()[1].style.opacity = "1";
            $('.mobile-menu-btn').children()[2].style.transform = "translateY(0) rotate(0)";
            $(".menu-outer").fadeOut(200);
        });
    }
    $('#newsletterSubmit').submit(function(e) {
        $.ajax({
            url: `/rsvp?email=${$("#newsletterSubmit input")[0].value}&first=${$("#newsletterSubmit input")[1].value}&last=${$("#newsletterSubmit input")[2].value}&number=${$("#newsletterSubmit input")[3].value}&guests=${$("#newsletterSubmit input")[4].value}`, 
            method: "POST",
            success: function(data) {
                $("#newsletterSubmit > small").css('display', 'none');
                $("#newsletterSubmit h3").css("display", "none");
                $("#newsletterSubmit input").css("display", "none");
                $(".form-inputs").append("<div style='text-align:center;text-shadow: 2px 2px #000;'><p>Thank You, You have RSVP'd for an Upcoming Event!</p><p>Location will be sent 9am June 11, 2021</p></div>")
                console.log(data);
            },
            error: function(err) {
                console.log("An error occured", err);
            }
        });
        e.preventDefault();
    })
});