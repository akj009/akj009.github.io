$(function() {
    // for animating the scroll.
    $('a').on('click', function(){
        event.preventDefault();
        var hash = $(this).attr('href');
        
        var toScroll = $('.mdl-layout__content').scrollTop() + $(hash).offset().top - 68;
        $('.mdl-layout__content').animate({scrollTop: toScroll}, 800, function(){
            window.location.hash = hash;
        });
    });
    
    // for highligting the current section in navigation.
    
    if($('#about').offset()==0){
        console.log('About Me');
    }
    else if($('#portfolio').offset()==0) {
        console.log('My works');
    }
    else if($('#demos').offset()==0) {
        console.log('Demos');
    }
    else {
        console.log('Contact me');
    }
});