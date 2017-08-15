//Validation of the contact form
function validateForm() {
    var name = document.contactForm.name.value,
        mail = document.contactForm.mail.value,
        message = document.getElementById('textareaForm'),
        regExpName = /^[a-z\s]/i, //Name valid
        regExpMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  //Email valid
  
    //Check if Name and Email have been filled
    if (name.length === 0 || mail.length === 0) {
        alert('Please fill all the fields');
        return false;
    }

    //Check if Textarea has been filled 
    if (message.value.length === 0 || message.value === 'Write your message here...') {
        alert('Please don' + "'" + 't forget to write your message');
        return false;
    }
    
    //Check if Name is written correct
    if (!regExpName.test(name)) {
        alert('Please write correct your name!');
        return false;
    }
    
    //Check if Email address is valid
    if (!regExpMail.test(mail)) {
        alert('Please fill correct your email address!');
        return false;
    }
    
}

//Make the textarea empty, when it's clicked
function emptyTextarea() {
    var message = document.getElementById('textareaForm');
    message.innerHTML = '';
}