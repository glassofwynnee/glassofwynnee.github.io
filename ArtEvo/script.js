// --- VARIABLES TO STORE USER INPUT ---
        let userValue = "";
        let passwordValue = "";

        // --- OBJECT TO ORGANIZE DATA ---
        const userData = {
            usernameOrEmailOrPhone: "",
            password: ""
        };

        // DOM elements
        const userInput = document.getElementById("userInput");
        const passwordInput = document.getElementById("passwordInput");
        const signupBtn = document.getElementById("signupBtn");
        const successMsg = document.getElementById("successMessage");

        // --- DOM EVENT: INPUT CHANGE ---
        userInput.addEventListener("input", () => {
            userValue = userInput.value;
        });

        passwordInput.addEventListener("input", () => {
            passwordValue = passwordInput.value;
        });

        // --- DOM EVENT: BUTTON CLICK ---
        signupBtn.addEventListener("click", () => {

            // Store values inside object
            userData.usernameOrEmailOrPhone = userValue;
            userData.password = passwordValue;

            // Simple validation
            if (userValue === "" || passwordValue === "") {
                alert("Please fill out all fields.");
                return;
            }

            // --- DYNAMIC PAGE UPDATE ---
            successMsg.style.display = "block";

            // Simulate redirect after 1.5 seconds
            setTimeout(() => {
                window.location.href = "home.html"; // <-- redirect to home page
            }, 1500);
        });