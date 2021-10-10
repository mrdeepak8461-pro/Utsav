$('.owl-carousel-1').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    dots:false,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    animateOut: 'fadeOut',
    dots:false,
    responsive:{
        0:{
            items:1
        }
    }
});

$('.owl-carousel-3').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    animateOut: 'fadeOut',
    dots:false,
    responsive:{
        0:{
            items:1
        }
    }
});

$('.owl-carousel-4').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    animateOut: 'fadeOut',
    dots:false,
    responsive:{
        0:{
            items:1
        }
    }
});

$('.owl-carousel-5').owlCarousel({
    loop:true,
    margin:50,
    autoplay:true,
    nav:true,
    smartSpeed: 500,
    animateOut: 'fadeOut',
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$('.owl-carousel-6').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.owl-carousel-7').owlCarousel({
    loop:true,
    margin:50,
    autoplay:true,
    nav:true,
    smartSpeed: 500,
    animateOut: 'fadeOut',
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

baguetteBox.run('.tz-gallery');


AOS.init();

AOS.init({
    duration: 900
});
