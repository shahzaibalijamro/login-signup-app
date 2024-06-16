const registerForm = document.querySelector('#registerForm');
const registerName = document.querySelector('#registerName');
const registerEmail = document.querySelector('#registerEmail');
const registerPassword = document.querySelector('#registerPassword');
const registerRePassword = document.querySelector('#registerRePassword');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;

let finalPassword;

const obj = {
    email : '',
    password : '',
}


registerForm.addEventListener('submit', event => {
    event.preventDefault();
    if (emailRegex.test(registerEmail.value)) {
        obj.email = registerEmail.value;
    }else{
        alert('email is invalid')
    }

    if (passwordRegex.test(registerPassword.value)) {
        console.log(registerPassword.value);
    }else{
        alert(`Password must have the following:
1. Minimum Length: 8 characters,
2. At least one uppercase letter: A-Z,
3. At least one lowercase letter: a-z,
4. At least one digit: 0-9,
5. At least one special character: !@#$%^&*().
            `)
    }

    if (registerPassword.value != registerRePassword.value) {
        alert('Passwords do not match');
    }else{
        finalPassword = registerPassword.value;
    }

    if (passwordRegex.test(registerPassword.value) && registerPassword.value === registerRePassword.value) {
        obj.password = registerPassword.value;
    }
    
    if (emailRegex.test(registerEmail.value) && passwordRegex.test(registerPassword.value) && registerPassword.value === registerRePassword.value) {
        goToLogin();
    }
});


function goToLogin() {
    localStorage.setItem('registerData', JSON.stringify(obj));
    window.location = 'index.html';
}