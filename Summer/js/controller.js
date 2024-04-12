const lowerCaseLetter = /[a-z]/g;
const upperCaseLetter = /[A-Z/]/g;
const numbers = /[0-9]/g;


const controller = {};
controller.register = (dataSignUp) => {
  
  if (dataSignUp.name == "") {
    
    document.getElementById("name-error").innerText =
      "*Please input your first name";
  } else {

    document.getElementById("name-error").innerText = "";
  }

  //PHONE
  if (dataSignUp.phone == "") {
    
    document.getElementById("phone-error").innerText =
      "*Please input your phone";
  } else {
    
    document.getElementById("phone-error").innerText = "";
  }
  // EMAIL
  if (dataSignUp.email == "") {
    
    document.getElementById("email-error").innerText =
      "*Please input your email";
  } else {
    
    document.getElementById("email-error").innerText = "";
  }

  // PASSWORD
  if (dataSignUp.password == "") {
    
    document.getElementById("password-error").innerText =
      "*Please input your password";
  } else {
    
    document.getElementById("password-error").innerText = "";
  }

  // ADDRESS
  if (!(dataSignUp.confirmPassword == dataSignUp.address)) {
   
    document.getElementById("address-error").innerText =
      "*Please input your address";
  } else {
   
    document.getElementById("address-error").innerText = "";
  }

  ////// PASSWORD CONDITION
  
  if (dataSignUp.password.length < 6) {
    document.getElementById("password-error").innerHTML =
      "Your password is  must be at least 6 characters long";
  } else if (!dataSignUp.password.match(lowerCaseLetter)) {
    document.getElementById("password-error").innerHTML =
      "Your password must contain a lowercase letter";
  } else if (!dataSignUp.password.match(upperCaseLetter)) {
    document.getElementById("password-error").innerHTML =
      "Your password must contain a uppercase letter";
  } else if (!dataSignUp.password.match(numbers)) {
    document.getElementById("password-error").innerHTML =
      "Your password must contain a number or special characters";
  } else {
    
    if (
      dataSignUp.name !== "" &&
      dataSignUp.phone !== "" &&
      dataSignUp.email !== "" &&
      dataSignUp.password !== "" &&
      dataSignUp.address !== ""
    ) {
    return dataSignUp;
    }
  }
};