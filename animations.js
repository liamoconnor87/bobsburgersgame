$(document).ready(function(){

	/* Burger Loading Screen */
	$(".load img").delay(500).animate({
		opacity: '1',
	}, 700)
	$(".load img").animate({
		opacity: '0',
	}, 500)
	$(".load img").animate({
		opacity: '1',
	}, 700)
	$(".load img").animate({
		opacity: '0',
	}, 500)
	$(".load img").animate({
		opacity: '1',
	}, 700)
	$(".load img").animate({
		opacity: '0',
	}, 500)
	$(".load").delay(4100).animate({
        opacity: '0',
    }, 500)
    
    $(".load").delay(4600).animate({
        height: '0',
        width: '0',
	}, 100)

	$(".title").delay(4600).animate({
		opacity: '1',
	}, 500)

	$(".game-container").delay(4800).animate({
		opacity: '1',
    }, 500)
})