$(document).ready(function () {
    
    
    //Toggle menu
    $('.menu-btn').click(function () {
        
        $('.menu ul').slideToggle();
        
        //Button-menu
        $('.line-btn:nth-child(2)').toggle();
        $('.line-btn:nth-child(1)').toggleClass('line-rotate-1');
        $('.line-btn:nth-child(3)').toggleClass('line-rotate-2');
        
    }); 
   
	
});