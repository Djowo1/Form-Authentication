// loginform
const logInForm = document.querySelector('.login-form');
// signupForm
const signUpForm = document.querySelector('.signup-form');
// logInBtn
const logInBtn = document.querySelector('.login button');
// signUpBtn
const signUpBtn = document.querySelector('.signup button');
// backLayer
const backLayer = document.querySelector('.back-layer');

// Buttons to show forms
const logInFormBtn = document.querySelector('.btn12');
const signUpFormBtn = document.querySelector('.btn11');

// Toggle between login and signup forms
signUpBtn.addEventListener('click', () => {
    logInForm.classList.remove('active');
    signUpForm.classList.add('active');
    backLayer.style.clipPath = "inset(0 0 0 50%)";
});

logInBtn.addEventListener('click', () => {
    signUpForm.classList.remove('active');
    logInForm.classList.add('active');
    backLayer.style.clipPath = "";
});

// Redirect to fitnesspage.html when signUpFormBtn or logInFormBtn is clicked


logInFormBtn.addEventListener('click', () => {
    window.location.href = 'fitnesspage.html';
});

// Password visibility toggle for all password fields
const togglePassword1 = document.getElementById('togglePassword1');
const lpassword = document.getElementById('lpassword');

const togglePassword2 = document.getElementById('togglePassword2');
const spassword1 = document.getElementById('spassword1');

const togglePassword3 = document.getElementById('togglePassword3');
const spassword2 = document.getElementById('spassword2');

// Toggle function for login form password
if (togglePassword1 && lpassword) {
    togglePassword1.addEventListener('click', () => {
        const type = lpassword.getAttribute('type') === 'password' ? 'text' : 'password';
        lpassword.setAttribute('type', type);
        togglePassword1.classList.toggle('bxs-low-vision');
        togglePassword1.classList.toggle('bxs-show');
    });
}

// Toggle function for signup form first password
if (togglePassword2 && spassword1) {
    togglePassword2.addEventListener('click', () => {
        const type = spassword1.getAttribute('type') === 'password' ? 'text' : 'password';
        spassword1.setAttribute('type', type);
        togglePassword2.classList.toggle('bxs-low-vision');
        togglePassword2.classList.toggle('bxs-show');
    });
}

// Toggle function for signup form confirm password
if (togglePassword3 && spassword2) {
    togglePassword3.addEventListener('click', () => {
        const type = spassword2.getAttribute('type') === 'password' ? 'text' : 'password';
        spassword2.setAttribute('type', type);
        togglePassword3.classList.toggle('bxs-low-vision');
        togglePassword3.classList.toggle('bxs-show');
    });
}


// Password matching validation and form submission
signUpFormBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.signup-form input');
    for (const input of inputs) {
        if (!input.value) {
            alert(`${input.placeholder} is required!`);
            return;
        }
    }
    if (spassword1.value !== spassword2.value) {
        alert('Passwords do not match!');
    } else {
        alert('Sign Up Successful!');
        // Redirect to the fitness page (Ensure the file path is correct)
        window.location.href = 'fitnesspage.html';
    }

    
});
