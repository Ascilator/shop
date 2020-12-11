jQuery(function () {

    $('.slider_body.main_slider').slick({
        infinite: false,
        rows: 0,
        speed: 300,
        easing: 'ease',
        waitForAnimate: false,
        touchMove: true,
        touchTreshhold: 50,
        slidesToShow: 1,
        slideToScroll: 1,
        dots: true,
        arrows: false,
        appendDots: $('.slider_controls'),
        //nextArrow: $('.slider_card_next'),
        //prevArrow: $('.slider_card_prev'),
        //autoplay: true,
    });
    $('.catalog_slider_body').slick({
        infinite: false,
        rows: 0,
        speed: 600,
        easing: 'ease',
        waitForAnimate: false,
        touchMove: true,
        touchTreshhold: 50,
        slidesToShow: 1,
        slideToScroll: 1,
        nextArrow: $('.cat_slider_next'),
        prevArrow: $('.cat_slider_prev'),
        slidesPerRow: 5,
        rows: 2,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesPerRow: 4,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    rows: 4,
                    slidesPerRow: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    rows: 2,
                    slidesPerRow: 1,
                },
            },


        ],
    });
    $('.blog_slider').slick({
        infinite: false,

        speed: 300,
        easing: 'ease',
        waitForAnimate: false,
        touchMove: true,
        touchTreshhold: 50,
        slidesToShow: 4,
        slidesToScroll: 4,

        nextArrow: $('.blog_slider_next'),
        prevArrow: $('.blog_slider_prev'),
        responsive: [

            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true,
                },
            },


        ],
    });
    if ($('html').width() < 1200) {
        $('.cat_body').slick({
            infinite: false,

            speed: 300,
            easing: 'ease',
            waitForAnimate: false,
            touchMove: true,
            touchTreshhold: 50,
            //slidesToShow: 4,
            slidesToScroll: 3,
            variableWidth: true,
            arrows: false,
        });
    };
    $('.resevies_slider_body').slick({
        infinite: false,
        rows: 0,
        speed: 300,
        easing: 'ease',
        waitForAnimate: false,
        touchMove: true,
        touchTreshhold: 50,
        //slidesToShow: 3,
        slideToScroll: 1,
        //dots: true,
        variableWidth: true,

        nextArrow: $('.res_slider_next'),
        prevArrow: $('.res_slider_prev'),
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                },
            },


        ],
    });
    $('#slider_good').slick({
        infinite: false,
        rows: 0,
        speed: 300,
        easing: 'ease',
        waitForAnimate: false,
        touchMove: true,
        touchTreshhold: 50,
        //slidesToShow: 4,
        slideToScroll: 1,
        //dots: true,
        variableWidth: true,

        nextArrow: $('.you_may_goods_slider_next'),
        prevArrow: $('.you_may_goods_slider_prev'),

    });
    $('.big_slider_body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        centerMode: true,
        asNavFor: '.small_slider_body'
    });
    $('.small_slider_body').slick({
        slidesToShow: 2,
        //variableWidth: true,
        infinite: false,
        slidesToScroll: 1,
        asNavFor: '.big_slider_body',
        dots: false,
        arrows: false,
        //centerMode: true,
        focusOnSelect: true
    });
    function drop_down_good() {
        $('.drop_down_item._title').click(function () {
            $('.drop_down_body').not($(this).siblings('.drop_down_body')).slideUp();
            var body_drop = $(this).siblings('.drop_down_body');
            $(this).siblings('.drop_down_body').slideToggle();
            $(this).parent().toggleClass('_active');
        });
        $('.drop_down_item').not('._title').click(function () {
            var text = $(this).text();
            $(this).parent().siblings('.drop_down_item').children('.drop_down_text').text(text);

            $(this).parent().slideUp();
            $(this).parent().parent().removeClass('_active');
        });

    }

    drop_down_good();
    dynamic_adaptive();

    function dynamic_adaptive() {
        if ($('html').width() < 900) {
            $('.slider_catalog_controls').insertAfter($('.catalog_slider'));
            $('.slider_blog_controls').insertAfter($('.blog_slider'));
        }
        $(window).resize(function () {
            if ($('html').width() < 900) {
                $('.slider_catalog_controls').insertAfter($('.catalog_slider'));
                $('.slider_blog_controls').insertAfter($('.blog_slider'));
            } else {
                $('.slider_catalog_controls').insertAfter($('.catalog>.wrapper>.block_header>.block_title'));
                $('.slider_blog_controls').insertAfter($('.our_block>.wrapper>.block_header>.block_title'));
            }
        });
    }
    $('.dots._btn').click(function () {

        $('.footer_item._add').toggle();
    });
    $('.check_box_item').click(function () {
        $(this).toggleClass('_active');
    });
    $('.filter_item>.item_header>.item_arrow').click(function () {
        $(this).parent().siblings('.item_body').slideToggle();
        $(this).parent().toggleClass('_active');
    });
    $('.black_href').click(function () {
        $('.left_part_filter').removeClass('_active');
        $('body').removeClass('_lock');
    });


    $('.filter_mobile').click(function () {
        $('.left_part_filter').toggleClass('_active');
        $('body').toggleClass('_lock');
    });

    $(".tab_body").not(":first").hide();
    $('.tab_link').click(function () {
        $('.tab_link').removeClass('_active');
        $(this).addClass('_active');
        $(".tab_body").hide().eq($(this).index()).fadeIn()
    });

    $(".tab_body_pop").not(":first").hide();
    $('.tab_link_pop').click(function () {
        $('.tab_link_pop').removeClass('_active');
        $(this).addClass('_active');
        $(".tab_body_pop").hide().eq($(this).index()).fadeIn()
    });



    $('.calcultor>.plus').click(function () {
        var text = $(this).siblings($('.value')).text();
        text = +text;
        text++;
        $(this).siblings('.value').text(text);
    });
    $('.calcultor>.minus').click(function () {
        var text = $(this).siblings($('.value')).text();
        text = +text;
        if (text != 1) {
            text--;
        }
        $(this).siblings('.value').text(text);
    });

    $('.add_res').click(function () {
        $('.add_res_popup').addClass('_active');
        $('body').addClass('_lock');
        $('.black_href._res').addClass('_active');
    });
    $('.mobile_btn').click(function () {
        $('.all_charact_popup').toggleClass('_active');
        $('body').toggleClass('_lock');
        $('.black_href._char').toggleClass('_active');
    });

    $('.black_href').click(function () {
        $('._popup').removeClass('_active');
        $('body').removeClass('_lock');
        $('.black_href').removeClass('_active');
    });
    $('.close').click(function () {
        $('._popup').removeClass('_active');
        $('body').removeClass('_lock');
        $('.black_href').removeClass('_active');
    });
    $('.close_btn').click(function () {
        $('._popup').removeClass('_active');
        $('body').removeClass('_lock');
        $('.black_href').removeClass('_active');
    });

    $('._add_to_cart_btn').click(function () {
        $('.add_to_cart').toggleClass('_active');
        $('body').toggleClass('_lock');
        $('.black_href._cart').toggleClass('_active');
    });
    $('.burger').click(function () {
        $('.menu').toggleClass('_active');
        $('body').toggleClass('_lock');
    })
    $('#form').on('submit', formSend)
    function formSend(e) {
        $('._req>input').removeClass('_error')
        e.preventDefault();

        var sub = true;
        for (var i = 0; i < 3; i++) {


            if ($('._req>input').eq(i).val() == "") {

                $('._req>input').eq(i).addClass('_error');
                sub = false;
            }

        }
        if (sub == true) {

        }
    }
    function addError(input) {
        input.addClass("_error");
    }
    function removeError(input) {
        input.removeClass("_error");
    }


    $('.sub').click(function () {

        $('._popup').removeClass('_active');
        $('body').removeClass('_lock');
        $('.black_href').removeClass('_active');

        $('.after_submit_popup').addClass('_active');
        $('body').addClass('_lock');
        $('.black_href._sub').addClass('_active');

    });

});

