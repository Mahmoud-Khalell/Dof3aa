
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
      if (!response.ok) {      
        
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Data is : ");
      console.log(data);
      console.log("=== > " + data.expired);
      localStorage.setItem('token', data.token);

    })
    .catch(error => {

      console.error('There was a problem with the fetch operation:', error);
    });
  

}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    Get();
});




