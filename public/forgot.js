//replaces the Forgot password page with a confirmation message
function replace() { 

    let emailSection = $("#email");

        if(document.getElementById("submit-button").click) {
            if(emailSection.val().match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
                if(emailSection.val().match("backusagrilabs@gmail.com")){
                    $("#forgot-pass-header").text("Email Link Sent!");
                    $("#email-button-section").text("There should be an email message with a new link to reset your password.");
                } else {
                    alert("invalid email. Try again")
                }
            }
        }
    }