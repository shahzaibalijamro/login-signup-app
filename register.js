const registerForm = document.querySelector('#registerForm');
const registerName = document.querySelector('#registerName');
const registerEmail = document.querySelector('#registerEmail');
const registerPassword = document.querySelector('#registerPassword');
const registerRePassword = document.querySelector('#registerRePassword');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;


registerForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log(registerName.value);
    if (emailRegex.test(registerEmail.value)) {
        console.log(registerEmail.value);
    }else{
        alert('email is invalid')
    }
    if (passwordRegex.test(registerPassword.value)) {
        console.log(registerRePassword.value);
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
    }
    // console.log(registerEmail.value);
    console.log(registerPassword.value);
    console.log(registerRePassword.value);
})