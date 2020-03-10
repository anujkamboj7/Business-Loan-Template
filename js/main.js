$(document).ready(function () {

    $('.menu-icon').on('click', function () {
        $('nav ul').toggleClass('show');
        $('header').toggleClass('bg-1');
        $('nav').toggleClass('active');
        $('nav').toggleClass('remove');
        $('nav ul li').toggleClass('remove');

    })
});


$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('header').addClass('scrolling-active')
            $('header').addClass('fixed')
            $('nav').addClass('remove')
        } else {
            $('header').removeClass('scrolling-active')
            $('nav').removeClass('remove')
        }
    })
})


if ($(window).width() <= 991){ 
    $(window).on('scroll', function () {
        $('header').removeclass('scrolling-active')
    })
    }


    $(document).ready(function(){
        $(".owl-carousel").owlCarousel(
            {
                nav:true,
                items: 1,
                loop: true,
                autoplay: true,
                animate: 'fadeIn',
                smartSpeed: 350,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
            
                    768: {
                        items: 3
                    },
                    1000: {
                        items: 3
                    }
                }
            }
        );
      });




// if ($(window).width() <= 991){ 
// $(".aos").removeClass("wow");
// }

