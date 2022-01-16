$(document).ready(function(){
    
  


    // scroll fucntion
   

    
    // js for banner
    $('.hero-slider').slick({
        autoplay:true,
        arrows: true,
        prevArrow:'<i class="fas fa-chevron-left arrow_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right arrow_right"></i>',
    });

    //  js for letest-pro
    $('.letest-pro').slick({
        autoplay:true,
        arrows: true,
        slidesToShow:4,
        prevArrow:'<i class="fas fa-chevron-left arrow_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right arrow_right"></i>',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow:1,
                arrows:true,

              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
              }
            }
          ]
    });
 
    
     //  js for letest-pro
     $('.tes_slider').slick({
        autoplay:true,
        arrows: true,
        slidesToShow:2,
        prevArrow:'<i class="fas fa-chevron-left arrow_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right arrow_right"></i>',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow:1,
                arrows:true,

              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
              }
            }
          ]
    });
    $('#countdown').countdown({
        year: 2022,   // YYYY Format
        month: 5,     // 1-12
        day: 10,       // 1-31
        hour: 0,     // 24 hour format 0-23
        minute: 0,   // 0-59
        second: 0,    // 0-59
        timezone: -6, // http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
        labels: true, // Show/Hide label elements
        onFinish: function () {
        }  // Executes client side when timer is zero
    });
 
  });
