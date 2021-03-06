$(document).ready(function() {
    
    /*Sticky Nav*/
    $('.js--section-selections').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '570px;'
    });
    
    /*Button Scroll*/
    
    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-selections').offset().top}, 1000);
    });
    
    $(function() {
       $('a[href*=#]:not([href=#])').click(function() {
           if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
               var target = $(this.hash);
               target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
               if (target.length) {
                   $('html, body').animate({scrollTop: target.offset().top}, 1000);
                   return false;
               }
           }
       }); 
    });
    
    /*Scroll Animations*/
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInU4');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /*Moblie Navigation*/
    $('.js--nav-icon').click(function() {
       
        var nav = $('.js--main-nav');
        
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
           icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close'); 
        }
        
    });
    
    /*Maps*/

    var maps = new GMaps({
       div: '.map',
        lat: 38.743266,
        lng: -9.1602037,
        zoom: 12
    });
    
});



