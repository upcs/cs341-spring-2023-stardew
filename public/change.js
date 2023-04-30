function replace() {
    document.getElementById("done-button").addEventListener("click", function() {
      document.getElementById("change-pass-header").textContent = "Your Password has been changed";
      document.getElementById("changepass-section").style.display = "none";
    });
}

module.exports = replace;