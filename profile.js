document.addEventListener("DOMContentLoaded", function () {
    const userName = localStorage.getItem("userName") || "-";
    const userUsername = localStorage.getItem("userUsername") || "-";
    const userProfilePic = localStorage.getItem("userProfilePic") || "download (3).png";

    document.getElementById("userName").textContent = userName;
    document.getElementById("userUsername").textContent = userUsername;
    document.getElementById("userProfilePic").src = userProfilePic;
});
document.getElementById("saveBtn").addEventListener("click", function () {
    const name = document.getElementById("userNameInput").value;
    const username = document.getElementById("userUsernameInput").value;
    const picFile = document.getElementById("userProfilePicInput").files[0];

    if (name && username) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userUsername", username);

        if (picFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                localStorage.setItem("userProfilePic", e.target.result);
                window.location.href = "profile.html"; 
            };
            reader.readAsDataURL(picFile);
        } else {
            window.location.href = "profile.html"; 
        }
    } else {
        alert("Please fill all fields.");
    }
});
document.addEventListener("DOMContentLoaded", function () {

    const storedName = localStorage.getItem("userName");
    const storedUsername = localStorage.getItem("userUsername");
    const storedPic = localStorage.getItem("userProfilePic");

    if (storedName) document.getElementById("userNameInput").value = storedName;
    if (storedUsername) document.getElementById("userUsernameInput").value = storedUsername;
    if (storedPic) document.getElementById("previewImage").src = storedPic;

  
    document.getElementById("saveBtn").addEventListener("click", function () {
        const name = document.getElementById("userNameInput").value;
        const username = document.getElementById("userUsernameInput").value;
        const picFile = document.getElementById("userProfilePicInput").files[0];

        if (name && username) {
            localStorage.setItem("userName", name);
            localStorage.setItem("userUsername", username);

            if (picFile) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    localStorage.setItem("userProfilePic", e.target.result);
                    window.location.href = "profile.html";
                };
                reader.readAsDataURL(picFile);
            } else {
                window.location.href = "profile.html"; 
            }
        } else {
            alert("Please fill all fields.");
        }
    });

 
    document.getElementById("removePicBtn").addEventListener("click", function () {
        localStorage.removeItem("userProfilePic"); 
        document.getElementById("previewImage").src = "default.jpg";
    });
});
