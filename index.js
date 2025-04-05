$(document).ready(function () {
    $('.product-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        arrows: false, // Disable default arrows
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    });

    // Link custom buttons
    $('.custom-prev').click(function () {
        $('.product-carousel').slick('slickPrev');
    });

    $('.custom-next').click(function () {
        $('.product-carousel').slick('slickNext');
    });
});
