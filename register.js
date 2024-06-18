const registerForm = document.querySelector('#registerForm');
const registerName = document.querySelector('#registerName');
const registerEmail = document.querySelector('#registerEmail');
const registerPassword = document.querySelector('#registerPassword');
const registerRePassword = document.querySelector('#registerRePassword');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
const indicator = document.querySelector('#indicator');

let finalPassword;

const obj = {
    name: '',
    email : '',
    password : '',
}


registerForm.addEventListener('submit', event => {
    event.preventDefault();
    obj.name = registerName.value;
    if (emailRegex.test(registerEmail.value)) {
        obj.email = registerEmail.value;
    }else{
        // alert('email is invalid');
        indicator.innerHTML = 'email is invalid';
    }

    if (passwordRegex.test(registerPassword.value)) {
        // console.log(registerPassword.value);
    }else{
//         alert(`Password must have the following:
// 1. Minimum Length: 8 characters,
// 2. At least one uppercase letter: A-Z,
// 3. At least one lowercase letter: a-z,
// 4. At least one digit: 0-9,
// 5. At least one special character: !@#$%^&*().
//             `)
        indicator.innerHTML = `Password must have the following: <br>
1. Minimum Length: 8 characters, <br>
2. At least one uppercase letter: A-Z, <br>
3. At least one lowercase letter: a-z, <br>
4. At least one digit: 0-9, <br>
5. At least one special character: !@#$%^&*().
            `;
    }

    if (registerPassword.value != registerRePassword.value) {
        indicator.innerHTML = 'Passwords do not match';
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

let data = JSON.parse(localStorage.getItem('registerData'));

function goToLogin() {
    if (data === null) {
    localStorage.setItem('registerData', JSON.stringify(obj));
    data = JSON.parse(localStorage.getItem('registerData'));
    window.location = 'index.html';
    }else if (obj.email === data.email && obj.password === data.password) {
        indicator.innerHTML = 'This user already exists. Please Log in!';
    } else {
        localStorage.setItem('registerData', JSON.stringify(obj));
    }
}