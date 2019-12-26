$('.mobile-btn') .on('click', function () {
    $('.mobile-btn') .toggleClass('show');
    $('.menu') .toggleClass('show-menu');

});
$('.menu a').on('click', function () {
    $('.menu').removeClass('show');
    $('.mobile-btn').removeClass('show-menu')
});