

$(function(){
        // console.log(Hi);
    // Open and close nav on mobile

    var oHome = anime({
        targets:'.nav_menu_home',
        translateX:[-200,0],
        opacity:[0,1],
        easing:'linear',
        duration:2000,
        autoplay:true,
    
    });

    var oPortfolio = anime({
        targets:'.nav_menu_portfolio',
        translateX:[-200,0],
        opacity:[0,1],
        easing:'linear',
        duration:2200,
        autoplay:true,
    
    });

    var oAboutMe = anime({
        targets:'.nav_menu_about',
        translateX:[-200,0],
        opacity:[0,1],
        easing:'linear',
        duration:2400,
        autoplay:true,
    
    });
    

    var oSkills = anime({
        targets:'.nav_menu_skills',
        translateX:[-200,0],
        opacity:[0,1],
        easing:'linear',
        duration:2600,
        autoplay:true,
    
    });

    var oContact = anime({
        targets:'.nav_menu_contact',
        translateX:[-200,0],
        opacity:[0,1],
        easing:'linear',
        duration:2800,
        autoplay:true,
    
    });

    $('.menu_hamburger').on('click', function(e) {
        var navData = $('.nav_menu_wrap').data('nav');
        e.stopPropagation();

        if (navData == 'close') {
            $('.nav_menu_wrap').addClass('nav-open')
                .data('nav', 'open')

            $('.menu_hamburger>i').first().removeClass('fas fa-bars')
                .addClass('fas fa-times');
             

            $('.nav_menu_wrap').show(1500);
            oHome.restart();
            oPortfolio.restart();
            oAboutMe.restart();
            oSkills.restart();
            oContact.restart();

        } else {
            $('.nav_menu_wrap').removeClass('nav-open')
             .data('nav', 'close');

            $('.menu_hamburger>i').removeClass('fas fa-times')
             .addClass('fas fa-bars');

            $('.nav_menu_wrap').hide(1500);

        
        }
    });

// ---------SLOGAN ANIMATION---------

    var oGreeting = anime({
        targets:'.greeting',
        translateY:[-100,0],
        opacity:[0,1],
        easing:'linear',
        duration:1500,
        autoplay:true,
    
    });

     oGreeting.play(1000);

    //Highlight links when clicked

    // $('.desktop-nav li a').on('click',function(e){
       
        // $('a').removeClass('active');
        // $(this).addClass('active');


    //     $('.modal-header .close').on('click',function(e){
    //         $('.desktop-nav li a .btn').removeClass('active');
    //     });

    // });

    
});

