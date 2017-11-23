function currentPosition() {
    var target = $('.menu__item.active');
    $('.menu__bg').css({'left':target.position().left, 'top':target.position().top});
};

$(document).ready(function () {

    $('.menu__item').click(function(e) {
        var valueLeft,
            valueTop;

        valueLeft = $(this).position().left;
        valueTop = $(this).position().top;
        $('.menu__bg').css({'left':valueLeft, 'top':valueTop});
    });

    currentPosition();
});

$(window).resize(function(){
    currentPosition();
});