//function that replaces the change password page with a confirmation message when user clicks "done" button
function replace() { 

    if(document.getElementById("done-button").click()) {
        $("#change-pass-header").text("Your Password has been changed");
        $("#changepass-section").hide();
    }
}
