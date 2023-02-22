let emailSection = $("#email");
let passwordSection = $("#password");
let signInButton = $("#sign-in-button");

let errorSection = $("#error-feedback-message");


signInButton.click(function(){
    errorSection.empty(); // remove the contents of errorSection
    if(emailSection.val().match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        if(emailSection.val().match("backusagrilabs@gmail.com") && passwordSection.val() === "Password123!"){
            alert("backusagrilabs@gmail.com is logged in.");
            alert("You have provided a valid email id");
            errorSection.append("<h3> Logged in Successfully! </h3>");
        }
        else{
            alert("Email and/or password is incorrect, please try again.");
            errorSection.append("<h3> Email and/or password is incorrect, please try again. </h3>");
        }
    }
    else{
        alert("Please Enter Email and/or password!");
        errorSection.append("<h3> Please Enter Email and/or Password! </h3>");
    }
});



