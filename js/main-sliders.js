//products__item-track
//product-big-slider
//tecnology__slider-track

$(function() {
    // Owl Carousel
    var owl1 = $(".owl-carousel");
    owl1.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsClass: 'products__item-dots',
        dotClass: 'products__item-dot'
    });
});

$(function() {
    // Owl Carousel
    var owl1 = $(".owl-carousel2");
    owl1.owlCarousel({
        items: 2,
        loop: true,
        dots: true,
        dotsClass: 'tecnology__slider-switchers',
        dotClass: 'tecnology__slider-switcher'
    });
});

$(function() {
    // Owl Carousel
    var owl1 = $(".owl-carousel3");
    owl1.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navClass: 'prodNavBtn'
    });
});

$(function() {
    // Owl Carousel
    var owl1 = $(".owl-carousel4");
    owl1.owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        nav: true,
        navClass: 'prodNavBtn',
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});