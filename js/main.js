$(function() {
    $('a').on('click', function(){
        console.log('scrolling...');
        event.preventDefault();
        //debugger;
        var hash = $(this).attr('href');
        $('.mdl-layout__content').animate({scrollTop: $(hash).offset().top}, 800, function(){
            window.location.hash = hash;
        });
    });
    
    var separatorEl = '<hr class="separatorEl">';
    $('.mdl-card__title').append(separatorEl);
});