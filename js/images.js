$(document).ready(function(){
    
});

$(function(){$('.small a').click(function(e){
    e.preventDefault();
})})

$(function(){$('.button').click(function(e){
    if($('body > div.button').text() =='+' ){  
        $('body > div.button').text('-');
        $('body > div.gallery').slideDown(2000);
    } else {    
    $('body > div.button').text('+');
    $('body > div.gallery').slideUp(2000)}
})})

$(function(){$('body > div.gallery > div.small > a:nth-child(1)').click(function(e){
    if ($('body > div.gallery > div.big > img').attr('src') == '../img/images/gallery/1.jpg'){
        e.preventDefault();
    } else {
    {$('body > div.gallery > div.big > img').attr('src', '../img/images/gallery/1.jpg')}
    {$('body > div.gallery > div.big > img').fadeOut(1).fadeIn(2000)}
    {$('body > div.gallery > div.small > a:nth-child(1)').fadeTo(2000, 0.5)}
    {$('body > div.gallery > div.small > a:nth-child(2)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(3)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(4)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(1) > img').css({'border':'3px solid red'})}
    {$('body > div.gallery > div.small > a:nth-child(2) > img').css({'border':'none'})}
    {$('body > div.gallery > div.small > a:nth-child(3) > img').css({'border':'none'})}
    {$('body > div.gallery > div.small > a:nth-child(4) > img').css({'border':'none'})}
}
})});
$(function(){$('body > div.gallery > div.small > a:nth-child(2)').click(function(e){
    if ($('body > div.gallery > div.big > img').attr('src') == '../img/images/gallery/2.jpg'){
        e.preventDefault();
    } else {
    {$('body > div.gallery > div.big > img').attr('src', '../img/images/gallery/2.jpg')}
    {$('body > div.gallery > div.big > img').fadeOut(1).fadeIn(2000)}
    {$('body > div.gallery > div.small > a:nth-child(2)').fadeTo(2000, 0.5)}
    {$('body > div.gallery > div.small > a:nth-child(1)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(3)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(4)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(2) > img').css({'border':'3px solid red'})}
    {$('body > div.gallery > div.small > a:nth-child(1) > img').css({'border':'none'})}
    {$('body > div.gallery > div.small > a:nth-child(3) > img').css({'border':'none'})}
    {$('body > div.gallery > div.small > a:nth-child(4) > img').css({'border':'none'})}}
})});
$(function(){$('body > div.gallery > div.small > a:nth-child(3)').click(function(e){
    if ($('body > div.gallery > div.big > img').attr('src') == '../img/images/gallery/3.jpg'){
        e.preventDefault();
    } else {
    {$('body > div.gallery > div.big > img').attr('src', '../img/images/gallery/3.jpg')}
    {$('body > div.gallery > div.big > img').fadeOut(1).fadeIn(2000)}
    {$('body > div.gallery > div.small > a:nth-child(3)').fadeTo(2000, 0.5)}
    {$('body > div.gallery > div.small > a:nth-child(2)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(1)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(4)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(3) > img').css({'border':'3px solid red'})}
    {$('body > div.gallery > div.small > a:nth-child(2) > img').css({'border':'none'})}
    {$('body > div.gallery > div.small > a:nth-child(1) > img').css({'border':'none'})}
    {$('body > div.gallery > div.small > a:nth-child(4) > img').css({'border':'none'})}}
})});
$(function(){$('body > div.gallery > div.small > a:nth-child(4)').click(function(e){
    if ($('body > div.gallery > div.big > img').attr('src') == '../img/images/gallery/4.jpg'){
        e.preventDefault();
    } else {
    {$('body > div.gallery > div.big > img').attr('src', '../img/images/gallery/4.jpg')}
    {$('body > div.gallery > div.big > img').fadeOut(1).fadeIn(2000)}
    {$('body > div.gallery > div.small > a:nth-child(4)').fadeTo(2000, 0.5)}
    {$('body > div.gallery > div.small > a:nth-child(2)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(3)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(1)').fadeTo(2000, 1)}
    {$('body > div.gallery > div.small > a:nth-child(4) > img').css({'border':'3px solid red'})}
    {$('body > div.gallery > div.small > a:nth-child(2) > img').css({'border':'none'})}
    {$('body > div.gallery > div.small > a:nth-child(3) > img').css({'border':'none'})}
    {$('body > div.gallery > div.small > a:nth-child(1) > img').css({'border':'none'})}}
})})


