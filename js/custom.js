

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
       // Filter js
       var mixer = mixitup('.fillter');

        // gallery menu Active
    $('.fillter_menu ul li').on('click',function(){
      $(this).addClass('cta_active').siblings().removeClass('cta_active');
  });


  // scroll function js
      // scroll fucntion
      $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling >400){
            $('.back_to_top').fadeIn();
        }else{
            $('.back_to_top').fadeOut();
        }


        if(scrolling > 300){
            $('nav').addClass('nav-fix');
        }else{
            $('nav').removeClass('nav-fix');
        }
    });


        // bac to top js
        $('.back_to_top').on('click',function(){
          $('html,body').animate({
              scrollTop:'0px', 
          },1500);
      });
  
    //  nav active class
      $('nav ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
      });


  });
