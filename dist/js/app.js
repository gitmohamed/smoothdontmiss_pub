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
    $('#treaturight').css({'filter': 'blur(' + top/10 + 'px' + ')'});
  }

  $(window).scroll(scrollHandler);

  $('#muteToggle').on('click', (e) => {
    var video = document.getElementById("treaturight");
    video.muted = !video.muted;
    if ($('#muteToggle').attr('name') != 'volume-high-outline') {
      $('#muteToggle').attr('name', 'volume-high-outline');
    } else {
      $('#muteToggle').attr('name', 'volume-mute-outline');
    }
  })
});
