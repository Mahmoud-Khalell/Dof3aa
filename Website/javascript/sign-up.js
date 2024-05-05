var cheekPassword = document.getElementById("first-user-password");
var confirmPassword = document.getElementById("confirm-user-password");
var validfeedback = document.getElementById("valid-password-feedback");
var invalidfeedback = document.getElementById("invalid-password-feedback");

var passwordconstraint = "";
function checkPassword(password) {  
    if (password.length < 8) {
        passwordconstraint = "Password must be at least 8 characters";
        return false;
    }else if (password.search(/[a-z]/i) < 0) {
        passwordconstraint = "Password must contain at least one letter";
        return false;
    }else if (password.search(/[A-Z]/) < 0) {
        passwordconstraint = "Password must contain at least one uppercase letter";
        return false;
    }else if (password.search(/[0-9]/) < 0) {
        passwordconstraint = "Password must contain at least one digit";
        return false;
    } else if (password.search(/[!@#$%^&*]/) < 0) {
        passwordconstraint = "Password must contain at least one special character";
        return false;
    }
    return true;    
}

cheekPassword.oninput = function() {
    if (checkPassword(cheekPassword.value)) {
        validfeedback.innerHTML = "Valid password";
        invalidfeedback.innerHTML = "";
        cheekPassword.classList.remove("is-invalid");
        cheekPassword.classList.add("is-valid");       
    } else {
        validfeedback.innerHTML = "";
        invalidfeedback.innerHTML = passwordconstraint;
        cheekPassword.classList.add("is-invalid");
        cheekPassword.classList.remove("is-valid");   
    }
    checkConfirmPassword();
}

confirmPassword.oninput = function() {
    checkConfirmPassword();
}

function checkConfirmPassword() {    
    if (confirmPassword.value === cheekPassword.value) {
        confirmPassword.classList.remove("is-invalid");
        confirmPassword.classList.add("is-valid");
        
    } else {
        confirmPassword.classList.add("is-invalid");
        confirmPassword.classList.remove("is-valid");
    }
}




// --------------------------------- SIGN UP FORM VALIDATION ---------------------------------

// fill select with universities data
var universitySelect = document.getElementById("input-University");
var collegeSelect = document.getElementById("input-Faculty");
var departmentSelect = document.getElementById("input-Department");

universitiesData.forEach(universitiesData => {
    var option = document.createElement("option");
    option.text = universitiesData.name;
    option.value = universitiesData.name;
    universitySelect.add(option);    
});

universitySelect.onchange = function () {
    collegeSelect.innerHTML = "<option selected>Choose...</option>";
        departmentSelect.innerHTML = "<option selected>Choose...</option>";
    var selectedUniversity = universitiesData.find(university => university.name === universitySelect.value);
    selectedUniversity.colleges.forEach(college => {
        var option = document.createElement("option");
        option.text = college.name;
        option.value = college.name;
        collegeSelect.add(option);
    });
}

collegeSelect.onchange = function () {
    departmentSelect.innerHTML = "<option selected>Choose...</option>";
    var selectedUniversity = universitiesData.find(university => university.name === universitySelect.value);
    var selectedCollege = selectedUniversity.colleges.find(college => college.name === collegeSelect.value);
    selectedCollege.departments.forEach(department => {
        var option = document.createElement("option");
        option.text = department;
        option.value = department;
        departmentSelect.add(option);
    });
}



// --------------------------------- SIGN UP FORM VALIDATION ---------------------------------

var FileImage = document.getElementById("input-Profile-Image");
var DisplayImage = document.getElementById("Profile-Image");

FileImage.onchange = function () {    
    // check file size and type 
    var file = FileImage.files[0];
    var fileType = file.type;
    var fileSize = file.size;
    var validTypes = ["image/jpeg", "image/png", "image/jpg"];
    var validSize = 1024 * 1024 * 2; // 2MB
    if (!validTypes.includes(fileType)) {
        alert("Invalid file type");
        FileImage.value = "";
        DisplayImage.src = "";

        return;
    } else if (fileSize > validSize) {
        alert("Invalid file size");
        FileImage.value = "";
        DisplayImage.src = "";
        return;
    }
    
    var reader = new FileReader();
    reader.onload = function (e) {
        DisplayImage.src = e.target.result;
    }
    reader.readAsDataURL(FileImage.files[0]);
}






document.querySelector('form').addEventListener('submit', function(event) {
   
    // go to page courses.html
    event.preventDefault(); 
    var firstName = document.getElementById("input-FirstName").value;
    var lastName = document.getElementById("input-LastName").value;
    var username = document.getElementById("input-UserName").value;
    var email = document.getElementById("input-Email").value;
    var password = document.getElementById("first-user-password").value;
    var confirmPassword = document.getElementById("confirm-user-password").value;
    var university = document.getElementById("input-University").value;
    var college = document.getElementById("input-Faculty").value;
    var department = document.getElementById("input-Department").value;
    var image = document.getElementById("input-Profile-Image").src;
    var valid = true;
    if (!checkPassword(password)) {
        valid = false;
        console.log("password");
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        valid = false;
    }
    if (valid) {
        var data = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
            university: university,
            college: college,
            department: department,
            image: image
        }
        console.log(data);
        //sendDatatoServer(data);
        showloading();
        setTimeout(() => {
            hideloading();
            
        }, 2000);

    }
});



function sendDatatoServer(data) {
    
    const url = 'https://localhost:44303/api/User';

    fetch(url, {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(data)
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
        window.location.href = "./courses.html";
    })
        .catch(error => {
        hideloading()

        console.error('There was a problem with the fetch operation:', error);
    });



}





function showloading(){
  document.getElementById('loadingDiv').style.display = 'flex';
}
function hideloading(){
  document.getElementById('loadingDiv').style.display = 'none';
}