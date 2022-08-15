// Slide show banner header using slick slider
$('.header .slides .list-slide').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 1500,
});
// Slide show list style using slick slider
$('.products .list-products .show-wedding-style').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,

});
$(document).ready(function(){  
    $('.header .links #menuhide').on('click', function () {  
      $(".header .links #menushow").css("display","block");
      $(".header .links #menuhide").css("display","none");
      $(".header .links ul").animate({
        height: 'hide',
      },1000);
      $(".header .links").animate({
        height: '-=100%',
      },1000);
    });

    $('.header .links #menushow').on('click', function () {  
      $(".header .links #menushow").css("display","none");
      $(".header .links #menuhide").css("display","block");

      $(".header .links ul").animate({
        height: 'show',
      },1000);
      $(".header .links").animate({
        height: '+=100%',
      },1000);
    });
});

//reponsive Service animated
var services = document.querySelectorAll(".service .res-service ul li a");
$( function() {
  for (let i = 1; i <= services.length; i++) {
     $( "#tabs-"+i ).on( "click", function() {
    $( "#demo-tabs-"+i ).dialog( "open" );
  });
  
  $( "#demo-tabs-"+i ).dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
  }
} );


var GetButton = document.querySelectorAll(".products .list-products .show-wedding-dress .list-wedding-dress .dress");
$(document).ready(function(){
  GetButton.forEach(Button => {

    $(Button).mouseover(function(){
      $(Button.getElementsByTagName("button")).addClass("button-animated");
    });
    $(Button).mouseout(function(){
      $(Button.getElementsByTagName("button")).removeClass("button-animated");
    });
  });
  
});


