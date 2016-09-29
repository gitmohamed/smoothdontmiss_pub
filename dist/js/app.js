$(document).ready(function(){
  // Building 'Code is cheap'
  /////////////////////////////////////////////
  //////`````/// ```` ///``````////`````` ////
  /////` //////` // `///``///  ///````///////
  ////`````/// ```` ///``````////`````  ////
  /////////////////////////////////////////
  ////////////////////////////////////////

  $('#owl-carousel').owlCarousel({
    autoPlay: false,
    slideSpeed : 300,
    singleItem: true,
    navigation : true,
    navigationText : ["BACK","NEXT"],
    transitionStyle: 'fade'
  });

  var scrollHandler = function(e) {
    var top = $(window).scrollTop();
    $('header').css({'background-position-y': top/10 + 'px'});
  }

  $(window).scroll(scrollHandler);


});
