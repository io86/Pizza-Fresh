$(document).ready(function () {
    
    //VARIABLES
    var $price = $('.order-pizza-price'),
        $total = $('.total-price'),
        $quantity = $('input[name=quantity]'),
        $extra = $('input[type=checkbox]'),
        $item = $('.item'),
        orderedList = [],
        priceOrdPiz = [],
        sum;

    
    
    //FUNCTIONS
    
    //Function: open-close .modal-box-1 and .modal-box-2
    function opCl(sel, opt) {
        $(sel).css('display', opt);
    }
    
    //MODAL BOX 1
    
    //Function: Count the sum of ordered pizza of one particular item
    function countSum() {

        $price = $('.order-pizza-price');
        
        if ($extra.is(':checked')) {
            $price = parseFloat($price.text()) + 1;
        } else {
            $price = parseFloat($price.text());
        }
        
        //If the fiels with quantity of pizzas is empty, the total price is 0
        if ($quantity.val() === '') {
            $total.text('0' + ' €');
        } else {
            $total.text((parseFloat($quantity.val()) * $price).toFixed(1));
        }
   
        
    }
    
    //Open .modal-box-1, when the buttons + are clicked and transfer the information of pizza that is ordered
    $('.pizza-menu i').click(function () {
        var $this = $(this),
            $pizza = $this.parent().prev().text(),
            $price = $this.prev().text();
        
        //Open the .modal-box-1
        opCl('.modal-box-1', 'block');
        
        $('.item').text($pizza);
        $('.order-pizza-price').text($price);
        $total.text($price);
    });
    
    //Close .modal-box-1, when the icon X is clicked
    $('.modal-box-1 i').click(function () {
        opCl('.modal-box-1', 'none');
    });
    
    //Change the quantity of pizzas
    $('input[name=quantity]').keypress(function () {

        countSum();
    });

 
    //Check if the checkbox for extra cheese is checked
    $('input[type=checkbox]').click(function () {
        countSum();
    });
    
    //Open .modal-box-2, when the cart is clicked
    $('.cart').click(function () {
        opCl('.modal-box-2', 'block');
    });
     
    //Click on the button Add to cart
    $('.add-cart').click(function () {
        //Close .modal-box-1
        opCl('.modal-box-1', 'none');
       
        //Add ordered pizza, quantity of them and the total amount in two different arrays
        orderedList.push([$item.text(), $quantity.val()]);
        priceOrdPiz.push($total.text());
        
        $('.total-payment').before($quantity.val() + ' x ' + $item.text() + '<br>');
        
        sum = 0;
        $.each(priceOrdPiz, function () {
            sum += parseFloat(this);
            $('.total-payment').text('Total amount: ' + sum + ' €');
        });
        

    });
    
    //Close .modal-box-2
    $('.modal-box-2 i').click(function () {
        opCl('.modal-box-2', 'none');
    });

    
	
});