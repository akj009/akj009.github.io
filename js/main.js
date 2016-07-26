$(function() {
    // for animating the scroll.
    $('nav a').on('click', function(event){
        event.preventDefault();
        var hash = $(this).attr('href');
        
        var toScroll = $('.mdl-layout__content').scrollTop() + $(hash).offset().top - 68;
        $('.mdl-layout__content').animate({scrollTop: toScroll}, 800, function(){
            window.location.hash = hash;
        });
    });
    
    // for highligting the current section in navigation.
    
    $('.mdl-layout__content').scroll(function(){
        var aboutPos = $('#about').offset().top;
        var portfolioPos = $('#portfolio').offset().top;
        var demosPos = $('#demos').offset().top;
        var contactPos = $('#contact').offset().top;
        
        if(aboutPos<70 && aboutPos>50) {
            $('nav a').css({'font-family':'Roboto,Helvetica,Arial,sans-serif'});
            $('nav a[href="#about"]').css({'font-family':'Lobster'});
        }
        
        if(portfolioPos<70 && portfolioPos>50) {
            $('nav a').css({'font-family':'Roboto,Helvetica,Arial,sans-serif'});
            $('nav a[href="#portfolio"]').css({'font-family':'Lobster'});
        }
        
        if(demosPos<70 && demosPos>50) {
            $('nav a').css({'font-family':'Roboto,Helvetica,Arial,sans-serif'});
            $('nav a[href="#demos"]').css({'font-family':'Lobster'});
        }
        
        if(contactPos<70 && contactPos>50) {
            $('nav a').css({'font-family':'Roboto,Helvetica,Arial,sans-serif'});
            $('nav a[href="#contact"]').css({'font-family':'Lobster'});
             
        }
        
    })
});