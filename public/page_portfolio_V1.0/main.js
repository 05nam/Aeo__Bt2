$(document).ready(function () {
    $('.image-slider').slick(
        {
            slidesToShow: 3,
            // autoplay: true,
            // autoplaySpeed: 2000,
            // Gắn sự kiện click cho nút điều hướng tùy chỉnh
            prevArrow: "<button type='button' class='slick-prev pull-left slick--arrow'><i class='bx bxs-right-arrow' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right slick--arrow'><i class='bx bxs-left-arrow' aria-hidden='true'></i></button>"
        }
    );

});