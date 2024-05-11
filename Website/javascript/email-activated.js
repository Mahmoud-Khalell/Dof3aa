
// create a countdown timer form 5 to 0 seconds and then redirect to the home page
var count = 6;
var interval = setInterval(function(){
    document.getElementById('countdown').innerHTML = count;
    count--;
    if(count === 0){
        clearInterval(interval);
        window.location.href = './login.html';
    }
}, 1000); 
