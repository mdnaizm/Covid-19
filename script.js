$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggole');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-time');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 0){
            $('.scroll-top').show();
        }else{
            $('scroll-top').hide(); 
        }
        // scroll spy

        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');
            
            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navba').find('[href="#${id}"]').addClass('active');
            }
        });
        $('a[href*=]').on('click',function(e){
            e.preventDefoult();
            $('html,body').animate({
                scrollTop : $($(this).attr('href')).offset().top,
            },500,
            'linear'
            )
        })
    });
});