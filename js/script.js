
$('.one').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,

    autoplayHoverpause: true,
    autoplayTimeout: 1000,
    responsive: {
        0: {
            items: 1
        },
        375: {
            items: 3
        },
        425: {
            items: 2
        },
        768: {
            items: 5
        },
        1024: {
            items: 6
        }
    }
})
$('.two').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,

    autoplayHoverpause: true,
    autoplayTimeout:1000,
    responsive: {
        0: {
            items: 2
        },
        425: {
            items: 3
        },
        768: {
            items: 4
        },
        1024: {
            items: 4
        }
    }
})