document.getElementById("login-button").addEventListener('click', function(e){
    e.preventDefault();
    const pinNumber = document.getElementById("pin-number").value;

    if(pinNumber === "123456"){
        window.location = "/dashboard.html"
    }else{
        alert("wrong pin! the pin number is 123456")
    }
})