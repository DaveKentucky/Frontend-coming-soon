const emailForm = document.getElementById('email-form');
const emailTextbox = document.getElementById('email-address');
const emailButton = document.getElementById('email-button');
const form = document.querySelector('form');
const errorElements = document.querySelectorAll('.error');


emailTextbox.addEventListener('click', () => {
    errorElements.forEach(element => {
        if(element.id === 'error-icon') {
            element.style.display = 'none';
        }
    });
})

function validateForm() {
    const email = emailTextbox.value;    
    valid = true;
    if (email === "") {
        valid = false;
    } else {
        valid = validateEmail(email);
    }
    if (!valid) {
        form.style.borderColor = 'hsl(0, 93%, 68%)';
        form.style.borderWidth = '2px';
        emailButton.style.margin = '-2px';
        errorElements.forEach(element => {
            element.style.display = 'block';
            element.animate([
                { transform: 'translateY(0px)' },
                { transform: 'translateY(-10px)' },
                { transform: 'translateY(0px)'},
                { transform: 'translateY(-5px)' },
                { transform: 'translateY(0px)' },
            ], {duration: 500});
        });
    }
    return valid;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}