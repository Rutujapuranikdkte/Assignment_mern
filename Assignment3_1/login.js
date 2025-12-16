function myfunction()
{

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

let msg=document.getElementById("msg");
let msg1=document.getElementById("msg1");

let pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

if(email==="")
{
    msg.innerHTML="please enter email address";
    msg.style.color="red";
    return false;
}
else if(!pattern.test(email))
{
    msg.innerHTML="enter valid email";
    msg.style.color="red";
    return false;
}
else
{
    msg.innerHTML="valid email";
    msg.style.color="green";
}

if(password==="")
{
    msg1.innerHTML="please enter password";
    msg1.style.color="red";
    return false;
}
else if(password.length<6)
{
    msg1.innerHTML="password must be atleast 6 characters";
    msg1.style.color="red";
    return false;
}
else
{
    alert("being successfull");
    return true;
    }
}
