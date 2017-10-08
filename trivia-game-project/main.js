// Hide the game container by default
$('#gameContainer').hide();

// FadeOut jumbotron when button is clicked, then FadeIn the Game container
$('#start').click(()=>{
    $('.jumbotron').fadeOut(400, ()=>{
        $('#gameContainer').fadeIn();
    });
});