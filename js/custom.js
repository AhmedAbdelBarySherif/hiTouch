//slider of home
$(document).ready( function() {
    //main slider of home
    $('#myCarousel').carousel({
        interval:   3000
    });

    var clickEvent = false;
    $('#myCarousel').on('click', '.nav a', function() {
            clickEvent = true;
            $('.nav li').removeClass('active');
            $(this).parent().addClass('active');		
    }).on('slid.bs.carousel', function(e) {
        if(!clickEvent) {
            var count = $('.nav').children().length -1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if(count == id) {
                $('.nav li').first().addClass('active');	
            }
        }
        clickEvent = false;
    });
    
    //animation wow liberary
    new WOW().init();
    
     //niceScroll Trigger
    $('html, body').niceScroll({
        cursorborder:"1px solid #d9232e",
        cursorcolor: '#d9232e'
    });
    
    //up 
    $(window).scroll(function(){
        if( $(this).scrollTop() >= 500 ){
            $('.up').fadeIn();
        } else{
            $('.up').fadeOut();
        }
    });
    
    $('.up').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    
    //Dynamic links
    $('.navbar .navbar-nav li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        },1000);
    });
    
    //nav bar
    $(window).scroll(function(){
        if( $(this).scrollTop() >= 10 ){
            $('.navbar').css('background-color', '#fff');
        } else{
            $('.navbar').css('background-color', 'rgba(0, 0, 0, 0)');
        }
    });
    
    /*$('.link_a').click(function(){
        $(this).addClass('colorred').find('.link_a').removeClass('colorred');
    });
    */
});