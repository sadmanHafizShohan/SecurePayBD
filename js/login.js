document.getElementById("login-button").addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = document.getElementById("mobile-number").value;
    const pinNumber = document.getElementById("pin-number").value
    console.log(pinNumber, mobileNumber)
})