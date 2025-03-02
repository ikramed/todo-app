document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
    const passwordMinLength = 8; 

    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < passwordMinLength) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    window.location.href = "dashboard.html"; 
});
});
