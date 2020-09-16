$(document).ready(function(){

    // Burger loading Screen.
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


    // Start game animation.
    $(".play").click(function(){

        // Triggers function to play sound. 
        playTheme();

        $(".start-container").fadeOut(500);

    })


    // Play again animation.
    $(".reload").click(function(){

        $(".loadout").fadeIn(1000);

        setTimeout(reload, 2000);


        // Triggers function when user clicks 'Play again?' - Reloads screen/game. 
        function reload(){

            window.location.reload(false);

        };

    })
    

    // Mute/Unmute animation.
    $(".mute-button").click(function(){

        $(".mute, .unmute").toggle();

    })


    // Reset Option animations.
    $(".reset").click(function(){

        $(this).toggle();

        $(".options").toggle();

    })

    // Triggers function if user clicks 'NO' on reset options.
    $(".no-reset").click(function(){

        $(".reset").toggle();

        $(".options").toggle();

        // Triggers function to play sound.
        playLouise();

    })

    // Triggers when user selects next level - Level 2.
    $(".lvl-two").click(function(){

        $(".loadout").fadeIn(1000);

        setTimeout(levelTwo, 401);

        // Function to take user to next level.
        function levelTwo() {

            window.location.href = "level_two.html";
              
        }
          
    })
    
    // Triggers when user selects next level - Level 3.
    $(".lvl-three").click(function(){

        $(".loadout").fadeIn(1000);

        setTimeout(levelThree, 401);

        // Function to take user to next level.
        function levelThree() {

            window.location.href = "level_three.html";
              
        }
    
    })
    
    // Triggers when user selects to back to beginning - Level 1.
    $(".lvl-one").click(function(){

        $(".loadout").fadeIn(1000);

        setTimeout(levelOne, 401);

        // Function to take user to next to beginning.
        function levelOne() {

            window.location.href = "index.html";
              
        }

	})

})