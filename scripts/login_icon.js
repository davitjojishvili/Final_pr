/* აიქონის შეცვლა */


const userIcon = document.getElementById("user_icon");

if (userIcon && localStorage.getItem("loggedIn") === "true") {
    userIcon.src = "./img/human_icon_green.png";
}