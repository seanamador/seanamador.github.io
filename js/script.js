// var work = $('')

// work.hover(function() {
//   TweenMax.to(work, .35, {borderLeft: "15px solid #00b89d"})
// }, function() {
//   TweenMax.to(this, .5, {borderLeft: "10px solid #00b89d"})
// })

var tm = new TweenMax({ });
var tl = new TimelineMax({ });
var win = jQuery(window);

$(document).ready(function() { 
	tl.set('.film',{className:"+=hide"})
	menu();
	smoothScroll();
	// tl.set('.wrapper',{scale: 0.9, opacity: 0})
 });
$(window).bind("load", function() {
	$('.wrapper').removeClass('hide');
	// tl.to('.wrapper',1,{scale: 1, opacity: 1, ease: Expo.easeInOut});
	$('.loader').hide();
});


function menu(){
	var dev = $('.content-selector .devNav');
	var film = $('.content-selector .filmNav');

	dev.click(function(){
		$('.film').removeClass('show').addClass('hide');
		$('.developer').removeClass('hide').addClass('show');
		dev.addClass('active');
		film.removeClass('active');
		console.log('dev');

	});

	film.click(function(){
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
            var delta = ( Math.abs(event.originalEvent.wheelDelta) < 120 ? event.originalEvent.wheelDelta / 6 : event.originalEvent.wheelDelta / 120 ) || -event.originalEvent.detail;

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