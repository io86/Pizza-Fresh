$(document).ready(function () {
    
    //VARIABLES
    var orderedPizzaList = [],
        orderedQuantityList = [],
        orderedPriceList = [],
        listOrdersHtmlArray = [],
        $pizza = $order = $quantity = $price = $totalPriceItem = "",
        $listOrdersHtml = $html = "",
        orderedPizzaListLength = summe = 0;
    
    //alert(orderedList.length);
    //FUNCTIONS
    
    //Function: open-close .modal-box-1 and .modal-box-2
    function openCloseModalBox(sel, opt) {
        $(sel).css('display', opt);
    }
    
    //Open .modal-box-1, when the buttons + are clicked and transfer the information of pizza that is ordered
    $('.pizza-menu i').click(function () {
        var $this = $(this),
            $pizza = $this.parent().prev().text(),
            $price = $this.prev().text(),
            $quantity = $totalPrice = 0;
        
        //Open the .modal-box-1
        openCloseModalBox('.modal-box-1', 'block');
        
        $(".modal-box-1 .item").text($pizza);
        $(".modal-box-1 .order-pizza-price").text($price);
        
        if($("input[type=checkbox]").is(":checked")){
            
            $price = parseFloat($price) + 1;
            
            
        }else{
            
            $price = parseFloat($price);
            
        }
        
        $quantity = parseFloat($("input[name=quantity]").val());
        $totalPriceItem = $price * $quantity;
        $(".modal-box-1 .total-price").text($totalPriceItem.toFixed(1));
        
       
    });
    
    //Close .modal-box-1, when the icon X is clicked
    $('.modal-box-1 i').click(function () {
        openCloseModalBox('.modal-box-1', 'none');
    });
    
    //Change the quantity of pizzas
    $('input[name=quantity]').keyup(function () {
        
        var $price = $(".modal-box-1 .order-pizza-price").text(),
            $quantity = $("input[name=quantity]").val(),
            $totalPrice = $(".modal-box-1 .total-price").text();
        
        if($("input[type=checkbox]").is(":checked")){
            
            $price = parseFloat($price) + 1;
            
            
        }else{
            
            $price = parseFloat($price);
            
        }
        
        if($.isNumeric($quantity) == true){
            
            $quantity = parseFloat($quantity);
            $totalPriceItem = parseFloat($totalPriceItem);

            $totalPriceItem = $price * $quantity;

            $(".modal-box-1 .total-price").text($totalPriceItem.toFixed(1));
            
            $(this).css("border-color", "gray");
            
        }else{
            
            $(this).css("border-color", "red");
            $(".modal-box-1 .total-price").text("0.0");
            
        }
        
    });
    
    //Check if the given valu in input is number
    $("input[name=quantity]").keydown(function(event) {
        
        var keyCode = event.which || event.keyCode;
        
        if((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || keyCode == 8){

        }else{

            event.preventDefault();

        }
        
        $(this).attr("maxLength", "2");

    
    });
    
    //Extra cheese
    $("input[type=checkbox]").click(function () {
        
        var $price = $(".modal-box-1 .order-pizza-price").text(),
            $quantity = $("input[name=quantity]").val(),
            $totalPrice = $(".modal-box-1 .total-price").text();
        
        if($(this).is(":checked")){
            
            $price = parseFloat($price) + 1;
            
            
        }else{
            
            $price = parseFloat($price);
            
        }
        
        $quantity = parseFloat($quantity);
        $totalPriceItem = parseFloat($totalPriceItem);

        $totalPriceItem = $price * $quantity;

        $(".modal-box-1 .total-price").text($totalPriceItem.toFixed(1));
        
    });

    //Click add to cart    
    $(".add-cart").click(function () {
       
        var newOrderBoolean = "",
            indexOfOrderInArray = 0,
            lengthOfArrayOrderedPizza = 0;
        
        $pizza = $(".modal-box-1 .item").text();
        $order = $newItem = "";
        $quantity = $("input[name=quantity]").val();
        $price = $(".modal-box-1 .order-pizza-price").text();
        $totalPriceItem = $(".modal-box-1 .total-price").text();        
        
        function addToCart(){
            
            if(orderedPizzaList.length == 0){

                orderedQuantityList.push($quantity);
                orderedPizzaList.push($pizza);
                orderedPriceList.push($totalPriceItem);

            }else{           

                if(orderedPizzaList.indexOf($pizza) == -1){

                    orderedQuantityList.push($quantity);
                    orderedPizzaList.push($pizza);
                    orderedPriceList.push($totalPriceItem);

                }else{

                    indexOfOrderInArray = orderedPizzaList.indexOf($pizza);

                    orderedQuantityList[indexOfOrderInArray] = parseInt(orderedQuantityList[indexOfOrderInArray]) + parseInt($quantity);

                    orderedPriceList[indexOfOrderInArray] = parseInt(orderedPriceList[indexOfOrderInArray]) + parseInt($totalPriceItem);

                }




            }
            
        }
        
        
        if($.isNumeric($("input[name=quantity]").val()) == true){

            openCloseModalBox('.modal-box-1', 'none');
            $("input[name=quantity]").css("border-color", "gray");
            
            addToCart();
            
        }else{
            
            $(".valid-number").css("display", "block");
            
        }
        
            
        
    });
    
    //Open .modal-box-2
    $('.div-cart').click(function () {
        
        var i;
        
        openCloseModalBox('.modal-box-2', 'block');
        
        lengthOfArrayOrderedPizza = orderedPizzaList.length;

        
        
        for(i = 0; i < orderedPizzaList.length; i++){
            
            $html += "<li>" + orderedQuantityList[i] + " x " + orderedPizzaList[i] + "<span class='float-right'>€ " + orderedPriceList[i] + "</span>" + "<br><button class='btn-delete-item'>ENTFERNEN</button></li>";

            
        }

        $(".ordered-list").html($html);

        for(i = 0; i < orderedPriceList.length; i++){
        
            summe += parseFloat(orderedPriceList[i]);
            
        }
        
        $(".total-payment").html("SUMME" + "<span class='float-right'>€ " + summe.toFixed(1) + "</span>");
        
  
        
    });
    
    //Click on .btn-delete-item to delete the ordered pizza
    $(".modal-box-2").on("click", ".btn-delete-item", function(){
        
        $(this).parent().remove();
        
    });
    
    //Close .modal-box-2
    $(".modal-box-2 i").click(function () {
        
        openCloseModalBox('.modal-box-2', 'none');
        
        $html = "";
        
        
    });
    
	
});