function validateForm() {
    var name = document.contactForm.name.value,
        mail = document.contactForm.mail.value,
        message = document.getElementById('textareaForm');
  
    if (name.length === 0 || mail.length === 0) {
        alert('Please fill all the fields');
        return false;
    }

    if (message.value.length === 0 || message.value === '    ' || message.value === 'Write your message here...') {
        alert('Please don' + "'" + 't forget to write your message');
        return false;
    }
}

function emptyTextarea() {
    var message = document.getElementById('textareaForm');
    message.innerHTML = '';
}