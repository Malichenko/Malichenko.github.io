
$(document).ready(function() {
    $('.navbar-toggler').on('click', function() {
        $(this).toggleClass('is-active');
    });
});

(function($) {
    $.fn.animated = function(inEffect) {
        $(this).each(function() {
            var ths = $(this);

            ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
                if (dir === "down") {
                    ths.addClass(inEffect).css("opacity", "1");
                };
            }, {
                offset: "70%"
            });

        });
    };
})(jQuery);


$(document).ready(function() {
    animatedElements();

    $('.owl-carousel').owlCarousel({
        items: 1,
        navText: ['<img src="./img/arrow-left.png">', '<img src="./img/arrow-right.png">'],
        loop: true,
        responsive: {
            0: {
                nav: false
            },
            992: {
                nav: true
            }
        }
    });

    $(window).resize(function() {
        animatedElements();
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass("navbar--sticky");
    } else {
        $('.navbar').removeClass("navbar--sticky");
    }
});

function animatedElements() {
    if ($(window).width() >= 991) {
        $('.from-left').animated('fadeInLeft', 'fadeOutRight');
        $('.from-right').animated('fadeInRight', 'fadeOutLeft');
        $('.from-up').animated('pulse');
        $('.from-in-up').animated('fadeInUp');
    }

}