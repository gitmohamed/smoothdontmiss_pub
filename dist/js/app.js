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
