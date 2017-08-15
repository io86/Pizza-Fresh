function draw() {
    
    var canvas = document.getElementById('cart');
    
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        
        context.strokeStyle = "rgb(255,255,255)";
        context.lineWidth = 4;
        context.beginPath();
        
        //Draw of the main part of cart
        context.moveTo(10, 10);
        context.lineTo(20, 10);
        context.lineTo(40, 50);
        context.lineTo(70, 50);
        context.lineTo(80, 30);
        context.lineTo(30, 30);
        
        context.stroke();
        context.closePath();
        
        context.beginPath();
        
        //Draw the rads(circles) of the cart
        context.strokeStyle = "rgb(255,255,255)";
        context.arc(47, 60, 2, 0, 2 * Math.PI);
        
        context.moveTo(62, 60);
        context.arc(62, 60, 2, 0, 2 * Math.PI);
        
        
        
        context.stroke();
        context.closePath();
        
        
    }
    
}

window.onload = draw;