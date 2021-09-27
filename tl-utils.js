function cardLightboxInitialize(){
    $('body').append(`<div class="lightbox__dim" style="display: none;">
        <div class="lightbox-content"></div>
    </div>`);
}
$(document).ready(function() {
    $('.preview-wrapper').remove();
    cardLightboxInitialize();
    $('.tab-header').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('tab-header__open');
    })
    $('.mt-header').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('tab-header__open');
    })
    $('.minitalk-option_header').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('tab-header__open');
    })
    $('.tabber a').click( function() {
	    $(this).parent().siblings().removeClass('active');
	    $(this).parent().addClass('active');
	    $(this).parents('.minitalk-option_content').children('div').hide();
	    $(this).parents('.minitalk-option_content').children(`div[data-tab="${$(this).attr('data-tab')}"]`).show();
	});
    $('.cards-item').click(function() {
        $('body').addClass('lightbox-visible');
        $('.lightbox-content').html( $(this).html() ).parent().fadeToggle(200);
    });
    $('.lightbox__dim').click(function() {
        $('body').removeClass('lightbox-visible');
        $('.lightbox-content').parent().fadeOut(200);
    }).children().click(function(e) {
        return false;
    });
    $('.card-pair-wrapper').click(function(){
        $('.card-pair-wrapper').toggleClass('bloomed');
    });
});
