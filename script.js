$(".arrow").click(function () {
    $('html,body').animate({
            scrollTop: $("main").offset().top - 100
        },
        'slow');
});

$('.scrollTo').click(function () {
    var getElement = $(this).attr('href');
    var targetDistance = 100;
    if ($(getElement).length) {
        var getOffset = $(getElement).offset().top;
        $('html,body').animate({
            scrollTop: getOffset - targetDistance
        }, 500);
    }
    return false;
})