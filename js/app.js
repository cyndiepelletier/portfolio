$(function(){

    $('.arrow').click(function(){           
        $('html, body').animate({
            scrollTop:$('#about').offset().top
        }, 'slow');

        $('.navigation ul.nav li').each(function(){
            $(this).removeClass('active');
        })
        $('li.about').addClass('active');
    })

    $('.navigation ul.nav li').click(function(){

        var id = $(this).find('a').attr('data-href');
        $('html, body').animate({
            scrollTop:$(id).offset().top
        }, 'slow');

        $('.navigation ul.nav li').each(function(){
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
    $('.work-container').mixItUp();

    $('.hamburger').on('click', function(){
        $('body').toggleClass('menu-open');
    })

    new Waypoint({
        element: document.getElementById('about'),
        handler: function(direction) {
            if (direction == 'down') {
                $('.navigation').removeClass('hidden')
            } else {
                $('.navigation').addClass('hidden');
            }
        }
    })
});