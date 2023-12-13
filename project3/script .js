const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const errorMessageEl = document.getElementById('error_message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessageEl.style.display = 'block';
        errorMessageEl.textContent = 'Passwords do not match!';

        // Add animation to error message
        errorMessageEl.classList.add('shake');
        setTimeout(() => {
            errorMessageEl.classList.remove('shake');
        }, 500);
    } else {
        // Submit form if passwords match
        form.submit();
    }
});
