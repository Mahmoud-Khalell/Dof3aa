var logoutbtn=document.getElementById("sign-out-nav")
logoutbtn.addEventListener('click', () => {
    localStorage.removeItem("token");
    location.reload();
});


