$(document).ready(function () {

    //Variables and Array with src of the used images
    var srcImg, indexSrcImg,
        fotoArr = ["../img/gallery/foto_1.jpg", "../img/gallery/foto_2.jpg", "../img/gallery/foto_3.jpg", "../img/gallery/foto_4.jpg", "../img/gallery/foto_5.jpg", "../img/gallery/foto_6.jpg", "../img/gallery/foto_7.jpg", "../img/gallery/foto_8.jpg", "../img/gallery/foto_9.jpg", "../img/gallery/foto_10.jpg", "../img/gallery/foto_11.jpg", "../img/gallery/foto_12.jpg"];
    
    //Prepend img in the display of gallery
    $('.display-foto').prepend('<img src="../img/gallery/foto_1.jpg" alt="Photo of our restaurant">');
    
    //Change image when the arrows are clicked
    $('.left-arrow i').click(function () {
         
        srcImg = $('.display-foto img').attr('src');
        indexSrcImg = fotoArr.indexOf(srcImg);
        
        if (indexSrcImg === 0) {
            indexSrcImg = 12;
        }
        
        $('.display-foto img').attr('src', fotoArr[indexSrcImg - 1]);
        

    });
    
    $('.right-arrow i').click(function () {
             
        srcImg = $('.display-foto img').attr('src');
        indexSrcImg = fotoArr.indexOf(srcImg);
        
        if (indexSrcImg === 11) {
            indexSrcImg = -1;
        }
        
        $('.display-foto img').attr('src', fotoArr[indexSrcImg + 1]);
         
    });
    
    //In the display of photo is appeared the photo, which is clicked
    $('.thubs img').click(function () {
        var activeImg = $(this).attr('src');
        
        $('.display-foto img').attr('src', activeImg);
    });
	
});