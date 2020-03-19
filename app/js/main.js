$(document).ready(function(){
    $('.reviews__slider').owlCarousel({
        items: 3,
        margin: 198,
        nav: true,
        navText: ["<img src=\"img/arrow__left.svg\">","<img src=\"img/arrow__right.svg\" >"],
    });

    ymaps.ready(init);
    var myMapAll;
    function init() {
        myMapAll = new ymaps.Map("contacts__content__map", {
            center: [56.060066,37.178768],
            zoom: 10
        });
    }
});