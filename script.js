const firstName = document.getElementById('firstName')
const email = document.getElementById('email')
const form = document.getElementById('photoShootForm')
const errorElement = document.getElementById('error')
const radioButtons = document.getElementsByName('setting');
//global variables


form.addEventListener('submit', e => {
    e.preventDefault(); //prevent the form from submmitting with invalid inputs

    validateInputs(); // calls the function when submit button is clicked

})


const setError = (element, message) => {//parameters is the html element and its message
    const inputControl = element.parentElement; //error message will be placed inside the parent element 
    const errorDisplay = inputControl.querySelector('.error');//where he error message will be displayed

    errorDisplay.innerText = message;//sets the text to the message from the parameter 
    inputControl.classList.add('error');//adds the error class 
    inputControl.classList.remove('success')//removes success class if its present 
}

//vise versa compared to setError
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';//removes the error text if displayed
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//checks if the email is valid and in the right format
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());//changes the string to lowercase
}

const validateInputs = () => {
    //variables used for the function
    const firstNameValue = firstName.value.trim();//trim removes any spaces user could press
    const emailValue = email.value.trim();

    if(firstNameValue === ''){//checks if the string is empty
        setError(firstName, 'First name is required');
    }else{
        setSuccess(firstName)
    }

    if(emailValue === '') {//checks if email is empty
        setError(email, 'Email is required');
    }else if (!isValidEmail(emailValue)) {//check if email is valid
        setError(email, 'Provide a valid email address');
    }else {
        setSuccess(email);
    }

};