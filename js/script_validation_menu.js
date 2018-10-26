$(document).ready(function () {
    
    //VARIABLES
    var $firstName = $("input[name=firstname]"),
        $lastName = $("input[name=lastname]"),
        $address = $("input[name=address]"),
        $houseNumber = $("input[name=house-number]"),
        $postCode = $("input[name=postcode]"),
        $telNumb = $("input[name=tel-number]"),
        regExpText = /^[a-zA-z]+$/, //Text valid;
        regExpNumb = /^[0-9]/; //Number valid
    
    
    //Prevent submitting, if the given address-details are not correct
    $("main").on("submit", ".form-payment", function(e) {
        
        if($firstName.val() == "" || $lastName.val() == "" || $address.val() == "" || $houseNumber.val() == "" || $postCode.val() == ""){
        
            
            $(".required").each(function() {
             
                if($(this).val() == ""){
                    
                    $(this).css("border", "2px solid red");
                    
                }else{
                    
                    $(this).css("border-color", "#FFFFFF");
                }
                
            });
            
            
            
            e.preventDefault();

        }else{
            
            if($firstName.val().match(regExpNumb) || $lastName.val().match(regExpNumb) || $postCode.val().match(regExpText) || $telNumb.val().match(regExpText) || $houseNumber.val().match(regExpText) || $telNumb.val().match(regExpText)){
                
                
                e.preventDefault();
                
            }
            
        }
    
    });

});