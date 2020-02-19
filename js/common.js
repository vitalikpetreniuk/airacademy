$(function() {

    var header = $('header#air-header');
    var mobile_menu = $('#air-m-menu');

    header.find('.menu-toggle').on('click', function(){
        mobile_menu.fadeIn('fast');
    });
    mobile_menu.find('.menu-close').on('click', function(){
        mobile_menu.fadeOut('fast');
    });

    $('.format-line').on('click', function(){
        $('.format.active .format-text').slideUp();
        $('.format ').removeClass('active');
        $(this).parent().addClass('active');
        $(this).siblings('.format-text').slideDown();
    });

    $('.studies').find('.study-heading').on('click', function(){
        $(this).parent().toggleClass('active');
        $(this).siblings('.study-content').slideToggle();
    });

    $('.experts').owlCarousel({
        dots: false,
        responsive:{
            0:{
                margin: 50,
                items: 1
            },
            768:{
                margin: 60,
                items: 2
            },
            1024:{
                margin: 70,
                items: 2
            },
            1280:{
                margin: 70,
                items: 3
            },
            1600:{
                margin: 70,
                items: 4
            }
        }
    });

    $('.feedbacks').owlCarousel({
        dots: false,
        items: 1,
        nav: true,
        loop: true,
        center:true,
        responsive:{
            0:{
                margin: 0,
                items: 1
            },
            1024:{
                margin: 200,
                items: 2
            }
        }
    });

    $('button.air-enroll').on('click', function(){
        $('body').addClass('air-popup-show');
    });
    $('#enroll-popup').find('.popup-close').on('click', function(){
        $('body').removeClass('air-popup-show');
    });

});
