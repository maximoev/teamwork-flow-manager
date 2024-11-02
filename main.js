// Get references to the login and register forms by their HTML IDs
const loginForm = document.getElementById("login_form");
const registerForm = document.getElementById("register_form");

// Get references to the login and register buttons by their HTML IDs
const loginButton = document.getElementById("login_button");
const registerButton = document.getElementById("register_button");


// Define a fuctionto toggle between the forms.
// This function accepts a parameter (showLogin) to determine which form display
function toggleForms(showLogin){
    if(showLogin){
        // If showLogin is true, show the login form by adding the "active" class
        loginForm.classList.add("active");
        // Remove the "active" class from the register form to hide it
        registerForm.classList.remove("active");
    }else{
        // If showLogin is false, hide the login form by removing the "active" class
        loginForm.classList.remove("active");
        // Add the "active" class to the register form to display it
        registerForm.classList.add("active"); 
    }
}
// Add an event listener to the login button
// When clicked, it will call toggleForms with true to show the login form
loginButton.addEventListener("click", () => toggleForms(true));

// Add an event listener to the register button
// When clicked, it will call toggleForms with flase to show the register form
registerButton.addEventListener("click", () => toggleForms(false));

// When the page loads, show the login form by default
document.addEventListener("DOMContentLoaded", () => toggleForms(true));