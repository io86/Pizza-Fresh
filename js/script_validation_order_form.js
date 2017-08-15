function validationOrder() {
    
    //VARIABLES
    var firstnm = document.orderForm.firstname.value,
        lastnm = document.orderForm.lastname.value,
        address = document.orderForm.address.value,
        number = document.orderForm.number.value,
        postcode = document.orderForm.postcode.value,
        phone = document.orderForm.phone.value,
        regExpText = /[^a-zA-z]s/i, //Name valid
        regExpNumb = /^[0-9]/; //Number valid
    
    //Check if all required fields have been filled
    if (firstnm === '' || lastnm === '' || address === '' || number === '' || postcode === '') {
        alert('Please fill all the fields that have *');
        return false;
    }
    
    //Check if firstname and lastname contain letters
    if (regExpText.test(firstnm) || regExpText.test(lastnm)) {
        alert('Please write correct your name!');
        return false;
    }
    
    //Check if address contain letters
    if (regExpText.test(address)) {
        alert('Please write correct your address!');
        return false;
    }

    //Check if number of house contains numbers
    if (isNaN(number)) {
        alert('Please fill correct the number of your house!');
        return false;
    }
    
    if (isNaN(postcode)) {
        alert('Please fill correct the postcode!');
        return false;
    }

    //Check if phone number contains numbers
    if (isNaN(phone)) {
        alert('Please write correct your telephone number!');
        return false;
    }
}