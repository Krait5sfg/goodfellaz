$(document).ready(function () {
  $(".owl-carousel-clients").owlCarousel({
    items: 4,
    nav: true,
    navText: "",
    dotsEach: 2,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      500: {
        items: 2,
      },
      600: {
        items: 3,
      },
    }
  });
});

$(document).ready(function () {
  $(".owl-carousel-reviews").owlCarousel({
    items: 1,
    nav: true,
    navText: "",
    dotsEach: 1,
    margin: 10,
    smartSpeed: 1000,
  });
});

$(document).ready(function () {
  $(".owl-carousel-presentation").owlCarousel({
    items: 1,
    nav: true,
    navText: "",
    dotsEach: 1,
    margin: 10,
    smartSpeed: 1000,
  });
});