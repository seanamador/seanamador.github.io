// var work = $('')

// work.hover(function() {
//   TweenMax.to(work, .35, {borderLeft: "15px solid #00b89d"})
// }, function() {
//   TweenMax.to(this, .5, {borderLeft: "10px solid #00b89d"})
// })

var tm = new TweenMax({});
var tl = new TimelineMax({});
var win = jQuery(window);

$(document).ready(function() {
    tl.set('.film', { className: "+=hide" })
    menu();
    smoothScroll();
    whatido();
    // fixedMenu();
    // tl.set('.wrapper',{scale: 0.9, opacity: 0})
});
// $(window).bind("load", function() {
//     $('.wrapper').removeClass('hide');
//     // tl.to('.wrapper',1,{scale: 1, opacity: 1, ease: Expo.easeInOut});
//     $('.loader').hide();
// });


function menu() {
    var dev = $('.content-selector .devNav');
    var film = $('.content-selector .filmNav');

    dev.click(function() {
        $('.film').removeClass('show').addClass('hide');
        $('.developer').removeClass('hide').addClass('show');
        dev.addClass('active');
        film.removeClass('active');
        console.log('dev');

    });

    film.click(function() {
        $('.developer').removeClass('show').addClass('hide');
        $('.film').removeClass('hide').addClass('show');
        film.addClass('active');
        dev.removeClass('active');
        console.log('film');
    });
}

// smooth scroll fn
function smoothScroll() {
    var scrollTime = 0.8;
    var scrollDistance = 150;

    win.on("mousewheel DOMMouseScroll", function(event) {
        event.preventDefault();


        // var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var delta = (Math.abs(event.originalEvent.wheelDelta) < 120 ? event.originalEvent.wheelDelta / 6 : event.originalEvent.wheelDelta / 120) || -event.originalEvent.detail;

        // console.log('wheelDelta: ' + event.originalEvent.wheelDelta);
        // console.log('detail: ' + -event.originalEvent.detail);
        // console.log('delta: ' + delta);
        var scrollTop = win.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);

        TweenMax.to(win, scrollTime, {
            scrollTo: { y: finalScroll, autoKill: true },
            ease: Power1.easeOut,
            autoKill: true,
            overwrite: 5
        });

    });

}

function whatido() {
    var text = $('.whatido > .text');
    var tlR = new TimelineMax({ repeat: -1 });
    
    tlR
        .set(text, { opacity: 0 })
        .to('.text-1', 1, { opacity: 1, ease: Expo.easeInOut }, )
        .to('.text-1', 1, { opacity: 0, ease: Expo.easeInOut }, 4)

    .to('.text-2', 1, { opacity: 1, ease: Expo.easeInOut }, 4.5)
        .to('.text-2', 1, { opacity: 0, ease: Expo.easeInOut }, 6.5)

    .to('.text-3', 1, { opacity: 1, ease: Expo.easeInOut }, 7)
        .to('.text-3', 1, { opacity: 0, ease: Expo.easeInOut }, 9)

    .to('.text-4', 1, { opacity: 1, ease: Expo.easeInOut }, 9.5)
        .to('.text-4', 1, { opacity: 0, ease: Expo.easeInOut }, 11.5)

    .to('.text-5', 1, { opacity: 1, ease: Expo.easeInOut }, 12)
        .to('.text-5', 1, { opacity: 0, ease: Expo.easeInOut }, 14.5)

    .to('.text-6', 1, { opacity: 1, ease: Expo.easeInOut }, 15)
        .to('.text-6', 1, { opacity: 0, ease: Expo.easeInOut }, 17)

    .to('.text-7', 1, { opacity: 1, ease: Expo.easeInOut }, 17.5)
        .to('.text-7', 1, { opacity: 0, ease: Expo.easeInOut }, 19.5)



}

 var body = document.body,timer;
window.addEventListener('scroll', function() {
   clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
   timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },500);
}, false);

// $(window).scroll(function() {
//  var distance = $('.scroll-detect').offset().top,
//         $window = $(window);

//     $window.scroll(function() {
//         if ($window.scrollTop() >= distance) {
//             console.log('top');
//             $('.content-selector-wrapper').addClass('scrolled');
//         }else{
//             $('.content-selector-wrapper').removeClass('scrolled');
//         }
//     });
//  });
