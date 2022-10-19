$('document').ready(function(){
    const isMobile = {
        Android: function(){
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function(){
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function(){
            return navigator.userAgent.match(/Opera mini/i)
        },
        Windows: function(){
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function(){
            return(
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            )
        }
    }

    if(isMobile.any()){
        $('body').addClass('_touch')

    }else{
        $('body').addClass('_pc')
    }

    //menu open
    $('.menu-burger').click(function(e){
        e.preventDefault()
        $(this).toggleClass('_active')
        $('.menu').toggleClass('_active')
        $('body').toggleClass('_lock')
    })

    //change margin separate section on the main page
    function removeClass() {
        const isMain = $('.separate-section').attr('data-is-main')

        if(document.body.clientWidth < 991) {
            if(isMain) {
                $('.separate-section').removeClass('first-section')
            }
        }else {
            if(isMain) {
                $('.separate-section').addClass('first-section')
            }
        }
    }

    $(window).resize(removeClass)

    //popup open/close
    $('.popup-search').click(function(evt) {
        if(evt.target !== this) {
            return
        }
        $(this).removeClass('_open')
        $('body').removeClass('_lock')

        if($('.menu').hasClass('_active')) {
            $('.menu').removeClass('_active')
            $('.menu-burger').removeClass('_active')
        }
    })

    $('.popup__close').click(function() {
        $('.popup-search').removeClass('_open')
        $('body').removeClass('_lock')

        if($('.menu').hasClass('_active')) {
            $('.menu').removeClass('_active')
            $('.menu-burger').removeClass('_active')
        }
    })

    $('.open-popup').click(function() {
        const popup = $(this).attr('data-open')

        if($(popup)) {
            $(popup).addClass('_open')
            $('body').addClass('_lock')
        }
    })

    //marque
    if (document.documentElement.clientWidth < 991) {
        $('.marquee__wrapper').marquee({
            duration: 5000,
            startVisible: true,
            duplicated: false
        })
    }

    //swipers
    let nodeMainSwiper = document.querySelector('.swiper.main-swiper')
    let mainSwiper = undefined

    $(window).ready(function(){
        if (document.documentElement.clientWidth < 991) {
            mainSwiper = new Swiper(nodeMainSwiper, {
                navigation: {
                    nextEl: ".main-swiper__btns__container .swiper-button-next",
                    prevEl: ".main-swiper__btns__container .swiper-button-prev",
                },
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            })
        }
    })

    $(window).resize(function(){
        if (document.documentElement.clientWidth < 991) {
            if(mainSwiper === undefined) {
                mainSwiper = new Swiper(nodeMainSwiper, {
                    navigation: {
                        nextEl: ".main-swiper__btns__container .swiper-button-next",
                        prevEl: ".main-swiper__btns__container .swiper-button-prev",
                    },
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                })
            }
        } else {
            if(mainSwiper) {
                mainSwiper.destroy()
                mainSwiper = undefined
            }
        }
    })
    
})