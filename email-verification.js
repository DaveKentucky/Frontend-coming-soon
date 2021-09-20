const emailForm = document.getElementById('email-form');

function validateForm() {
    const email = document.getElementById('email-address').value;
    valid = true;
    if (email === "") {
        valid = false;
    } else {
        valid = validateEmail(email);
    }

    return valid;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}