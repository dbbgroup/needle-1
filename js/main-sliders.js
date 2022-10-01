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