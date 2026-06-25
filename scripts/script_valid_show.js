/*ვალიდაცია*/

const form = document.getElementById("loginForm");

if(form){

form.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
    if(email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }


    if(!emailRegex.test(email)){
        alert("Invalid email format");
        return;
    }

    localStorage.setItem("loggedIn", "true");

    window.location.href = "index.html"
});

}



/*პაროლის show/hide */

const toggle = document.getElementById("togglePassword");
const password = document.getElementById("password");

if(toggle && password){

toggle.addEventListener("click", () => {

    const isPassword = password.type === "password";

    password.type = isPassword ? "text" : "password";
    toggle.textContent = isPassword ? "Hide" : "Show";

});

}