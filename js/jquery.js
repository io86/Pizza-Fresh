$(document).ready(function () {
    //Toggle menu
    $('.menu-btn').click(function () {
        $('ul').slideToggle();
        
        $('.line-btn:nth-child(2)').toggle();
        $('.line-btn:nth-child(1)').toggleClass('line-rotate-1');
        $('.line-btn:nth-child(3)').toggleClass('line-rotate-2');
        
        
    });
   
	
});