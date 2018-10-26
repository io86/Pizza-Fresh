$(document).ready(function () {
    
    //VARIABLES
    var $name = $(".input-name"),
        $email = $(".input-email"),
        regExpNumb = /^[0-9]/; //Number valid;
    
    
    //Validation of the contact form
    $(".contact-form").on("submit", function(e) {
       
        if($name.val() == "" || $email.val() == "" || $name.val().match(regExpNumb)){

            e.preventDefault();

        }
        
    });
    
});