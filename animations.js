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
    
	$(".load").delay(4100).fadeOut(500);

	$(".title, .buttons").delay(4600).animate({
		opacity: '1',
    }, 500)
    
	$(".game-container").delay(4800).animate({
		opacity: '1',
    }, 500)

    $(".again").click(function(){

        $("body").fadeOut(500);

        setTimeout(reload, 501);

        function reload() {
            window.location.reload(false);
        }

    })

})