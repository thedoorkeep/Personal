$(".pic").hover(
  function(){
      $(".info", this).css("display", "block");
  }, function(){
      $(".info", this).css("display", "none");
});

$('.fading-slider').unslider({
animation: 'fade', autoplay: true, arrows: false 
});

 $(function(onclick) {
    $(".rslides").responsiveSlides();
  });

 