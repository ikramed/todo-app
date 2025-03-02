document.addEventListener("DOMContentLoaded", function () {
    const permissionsBtn = document.getElementById("permissionsBtn");
    const notificationsBtn = document.getElementById("notificationsBtn");
    const darkModeBtn = document.getElementById("darkModeBtn");
    const securityBtn = document.getElementById("securityBtn");
    const helpBtn = document.getElementById("helpBtn");
    const languageSelect = document.getElementById("languageSelect");
    const aboutBtn = document.getElementById("aboutBtn");

    permissionsBtn.addEventListener("click", function () {
        const isActive = permissionsBtn.textContent === "Activate";
        permissionsBtn.textContent = isActive ? "Deactivate" : "Activate";
       
    });

    
    notificationsBtn.addEventListener("click", function () {
        const isActive = notificationsBtn.textContent === "Activate";
        notificationsBtn.textContent = isActive ? "Deactivate" : "Activate";
    
    });

    darkModeBtn.addEventListener("click", function () {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", isDarkMode ? "true" : "false");

       
        darkModeBtn.textContent = isDarkMode ? "Deactivate " : "Activate ";
    });

    
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        darkModeBtn.textContent = "Deactivate ";
    } else {
        darkModeBtn.textContent = "Activate ";
    }

    
    securityBtn.addEventListener("click", function () {
        window.location.href = "security.html";
    });

 
    helpBtn.addEventListener("click", function () {
        window.location.href = "help.html";
    });

   
    languageSelect.addEventListener("change", function () {
        const selectedLanguage = languageSelect.value;
        localStorage.setItem("language", selectedLanguage); 
        applyLanguage(selectedLanguage); 
    });

   
    const savedLanguage = localStorage.getItem("language") || "en";
    languageSelect.value = savedLanguage;
    applyLanguage(savedLanguage);

   
    function applyLanguage(language) {
        if (language === "en") {
            document.body.setAttribute("lang", "en");
           
        } else if (language === "fr") {
            document.body.setAttribute("lang", "fr");
       
        }
    }

   
    aboutBtn.addEventListener("click", function () {
        window.location.href = "about.html";
    });
});
