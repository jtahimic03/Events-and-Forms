const firstName = document.getElementById('firstName')
const email = document.getElementById('email')
const form = document.getElementById('photoShootForm')
const errorElement = document.getElementById('error')
const radioButtons = document.getElementsByName('setting');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    if(firstNameValue === ''){
        setError(firstName, 'First name is required');
    }else{
        setSuccess(firstName)
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    }else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }else {
        setSuccess(email);
    }

};