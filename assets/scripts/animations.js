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
    
    $(".start-container").delay(4100).fadeIn(500);

	$(".title, .button").delay(4600).animate({
		opacity: '1',
    }, 500)
    
	$(".game-container").delay(4800).animate({
		opacity: '1',
    }, 500)

    /* Start game animation. */
    $(".play").click(function(){
        play();
        $(".start-container").fadeOut(500);
    })

    /* Play again animation. */
    $(".again").click(function(){
        $(".loadout").fadeIn(1000);

        setTimeout(reload, 2000);

        function reload(){
            window.location.reload(false);
        };
    })
    
    /* Mute/Unmute animation. */
    $(".mute-button").click(function(){
        $(".mute, .unmute").toggle();
    })

    /* Reset Option animations. */
    $(".reset").click(function(){
        $(this).toggle();
        $(".options").toggle();
    })

    $(".no-reset").click(function(){
        $(".reset").toggle();
        $(".options").toggle();
    })

})