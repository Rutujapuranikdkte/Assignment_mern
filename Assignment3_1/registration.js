function myfunction() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;

    let msg = document.getElementById("msg");
    let msg1 = document.getElementById("msg1");
    let msg2 = document.getElementById("msg2");
    let msg3 = document.getElementById("msg3");

    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    
    if (name === "") {
        msg.innerHTML = "Please enter name";
        msg.style.color = "red";
        return false;
    } else {
        msg.innerHTML = "Name entered successfully";
        msg.style.color = "green";
    }

    
    if (email === "") {
        msg1.innerHTML = "Please enter email";
        msg1.style.color = "red";
        return false;
    } else if (!pattern.test(email)) {
        msg1.innerHTML = "Enter valid email";
        msg1.style.color = "red";
        return false;
    } else {
        msg1.innerHTML = "Valid email";
        msg1.style.color = "green";
    }

    
    if (password === "") {
        msg2.innerHTML = "Please enter password";
        msg2.style.color = "red";
        return false;
    } else if (password.length < 6) {
        msg2.innerHTML = "Password must be at least 6 characters";
        msg2.style.color = "red";
        return false;
    } else {
        msg2.innerHTML = "Password OK";
        msg2.style.color = "green";
    }

   
    if (phone === "") {
        msg3.innerHTML = "Enter phone number";
        msg3.style.color = "red";
        return false;
    } else if (phone.length !== 10) {
        msg3.innerHTML = "Enter 10 digit phone number";
        msg3.style.color = "red";
        return false;
    } else {
        msg3.innerHTML = "Phone number OK";
        msg3.style.color = "green";
    }

    alert("Registration successful!");
}
