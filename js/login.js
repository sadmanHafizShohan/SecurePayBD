const fullLoginSection = document.getElementById("full-login-section");
const fullDashboardSection = document.getElementById("full-dashboard-section");


document.getElementById("login-button").addEventListener("click", function (e) {
  // prevent login form reload
  e.preventDefault();
  // get the pin number and mobile number
const pinNumber = document.getElementById("pin-number").value;
const mobileNumber = document.getElementById("mobile-number").value;
  //validate user when they try to login
  const defaultPin = "123456"; //by default pin is 123456

  if (pinNumber.length == 0 && mobileNumber.length == 0) {
    alert("Please input your number and pin");
    return;
  } else if (pinNumber !== defaultPin && mobileNumber.length !== 11) {
    alert("wrong credentials! try again...");
    return;
  } else if (pinNumber !== defaultPin) {
    alert("wrong pin! by default the pin is 123456");
    return;
  } else if (mobileNumber.length !== 11) {
    alert("Your mobile number should be 11 digit");
    return;
  } else 
    fullLoginSection.className = "hidden";
  fullDashboardSection.className = "visible";
  // window.location = "/dashboard.html"

const accountNumber = document.getElementById("account-number");
accountNumber.innerText = `Account No. ${mobileNumber}`;
const inputUserName = document.getElementById("input-user-name").value;
const userName = document.getElementById("user-name");
userName.innerText = inputUserName;

});

document.getElementById("logout-button").addEventListener('click', function(){
  fullLoginSection.className = "visible";
  fullDashboardSection.className = "hidden";  
})

window.addEventListener("beforeunload", function (e) {
  e.preventDefault(); 
});
