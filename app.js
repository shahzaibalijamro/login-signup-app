const logInForm = document.querySelector('#logInForm');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const loginData = JSON.parse(localStorage.getItem('registerData'));
const indicator = document.querySelector('#indicator');

const obj = {
    email : '',
    password : '',
}

logInForm.addEventListener('submit', event => {
    event.preventDefault();
    obj.email = emailInput.value;
    obj.password = passwordInput.value;
    if (loginData === null) {
        indicator.innerHTML = "You haven't registered yet, please register first !";
    }else{
        if (obj.email === loginData.email && obj.password === loginData.password) {
            indicator.innerHTML = "";
            alert(`Welcome, ${loginData.name} !`);
        }
        else if (obj.email === loginData.email) {
            indicator.innerHTML = "Incorrect Password!";
        }
        else if (obj.email !== loginData.email) {
            indicator.innerHTML = "This email is not registered!";
        }
        else{
            indicator.innerHTML = "email and password do not match!";
        }
    }
})

