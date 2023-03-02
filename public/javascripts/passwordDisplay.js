var inputs = document.querySelectorAll('.eyeopen_icon');
inputs.forEach(function (clearEachInputs) {
    clearEachInputs.addEventListener('click', function (e) {
    var inputAll = this.parentElement.querySelector('input');
    if (inputAll.type === "password") {
        inputAll.type = "text";
        this.src = "./stylesheets/sign_up/playground_assets/eyeclose_icon.svg";
    } else {
        inputAll.type = "password";
        this.src = "./stylesheets/sign_up/playground_assets/eyeopen_icon.svg";
    }
    })
})