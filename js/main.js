$(function(){
  $('.sidenav').sidenav();

  
  $(".js-video-button").modalVideo({
    youtube: {
        controls: 0,
        nocookie: true
    }
});
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
      });
     
      

        $('#slider-share').lightSlider({
          item:1,
          loop:false,
          slideMove:1,
          easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
          speed:600,
          responsive : [
              {
                  breakpoint:800,
                  settings: {
                      item:1,
                      slideMove:1,
                      slideMargin:6,
                    }
              },
              {
                  breakpoint:480,
                  settings: {
                      item:1,
                      slideMove:1
                    }
              }
          ]
      });  

      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
      });
     
      

        $('#brands').lightSlider({
          item:5,
          loop:false,
          slideMove:1,
          easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
          speed:600,
          responsive : [
              {
                  breakpoint:800,
                  settings: {
                      item:2,
                      slideMove:1,
                      slideMargin:6,
                    }
              },
              {
                  breakpoint:480,
                  settings: {
                      item:1,
                      slideMove:1
                    }
              }
          ]
      });  
      
});