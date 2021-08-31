
let slider = tns({
    container: '.slider',
    items: 5,
    gutter: 73,
    slideBy: 3,
    autoplay: true,
    nav: true,
    controlsContainer: '#controls',
    prevButton : '.previous' , 
    nextButton : '.next' , 
    controlsPosition: 'bottom',
    navPosition: 'bottom',
    speed: 1000,
    autoplayTimeout: 3000,
    autoplayButtonOutput: false,
    responsive: {
      400 : {
        items: 1,
        slideBy: 1,
        nav: false
      },
      576 : {
        items: 2,
        slideBy: 2,
        nav:false
      },
      768: {
        items: 3,
        slideBy: 3,
        nav: true
      },
      1200: {
        items: 5,
        slideBy: 3,
        nav: true
      },
      1440 : {
        items: 5,
        slideBy: 3,
        nav: true
      }
    },
});