
document.getElementById('nextBtn').addEventListener('click', function() {
    window.location.href = "login.html"; 
});



document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            const passwordMinLength = 8;

            if (!email.match(emailRegex)) {
                alert("❌ Please enter a valid email address.");
                return;
            }

            if (password.length < passwordMinLength) {
                alert("❌ Password must be at least 8 characters long.");
                return;
            }

       
            window.location.href = "dashboard.html";
        });
    } else {
        console.error("erro");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const currentDateElement = document.getElementById("currentDate");

    if (currentDateElement) {
        const currentDate = new Date().toLocaleDateString();
        console.log(currentDate); 
        currentDateElement.textContent = currentDate;
    } else {
        console.error("error!");
    }
});


