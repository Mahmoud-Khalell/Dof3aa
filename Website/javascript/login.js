

function Get(){
    const url = 'https://localhost:44303/api/User';
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    console.log(username);
    console.log(password);

    const requestBody = {
      username: username,
      PasSword: password
    };

    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
      hideloading()
      if (!response.ok) {    
        throw new Error('Network response was not ok');
      }
      return response.json();

    })
      .then(data => {
      hideloading()
      console.log("Data is : ");
      console.log(data);
      console.log("=== > " + data.expired);
      localStorage.setItem('token', data.token);
      localStorage.setItem('expired', data.expired);
      // open home page
      
      window.location.href = "./courses.html";
    })
      .catch(error => {
      hideloading()

      console.error('There was a problem with the fetch operation:', error);
    });
  

}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    showloading();
  Get();
  
});


function showloading(){
  document.getElementById('loadingDiv').style.display = 'flex';
}
function hideloading(){
  document.getElementById('loadingDiv').style.display = 'none';
}
// tohidediv();




/// on text change id password do function


function ShowWrongPassword(state) {
    if (state) {
        document.getElementById('span-password').style.display = 'block';
    } else {
        document.getElementById('span-password').style.display = 'none';
    }
}

function ShowWrongUsername(state) {
    if (state) {
        document.getElementById('span-user').style.display = 'block';
    } else {
        document.getElementById('span-user').style.display = 'none';
    }
}

ShowWrongUsername(true);
ShowWrongPassword(true);

document.getElementById('password').oninput = function() {
    ShowWrongUsername(false);
  ShowWrongPassword(false);
 }

document.getElementById('username').oninput = function() {
    ShowWrongUsername(false);
    ShowWrongPassword(false);
 }
