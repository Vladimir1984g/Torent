$(function(){
    $('.slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="nextArrow.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="prevArrow.svg" alt="prev arrow"></button>',
        fade: true,
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});