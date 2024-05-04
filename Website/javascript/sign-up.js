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
    var reader = new FileReader();
    reader.onload = function (e) {
        DisplayImage.src = e.target.result;
    }
    reader.readAsDataURL(FileImage.files[0]);
}