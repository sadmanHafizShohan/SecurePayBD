document.getElementById("login-button").addEventListener('click', function(e){
    e.preventDefault();
    const pinNumber = document.getElementById("pin-number").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    if( pinNumber !== "123456" && mobileNumber.length !== 11){
        alert("wrong pin and mobile number! try again...")
    }else if( pinNumber !== "123456"){
        alert("wrong pin! by default the pin is 123456")
    }else if( mobileNumber.length !== 11){
        alert("Your mobile number should be 11 digit")
    }else 
    window.location = "/dashboard.html"

})