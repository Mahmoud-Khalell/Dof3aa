var signout = document.getElementById("sign-out-nav");

signout.onclick = function () {
    localStorage.removeItem("token");
    window.location.href = "login.html";
    
}
