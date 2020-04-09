(function() {
    App.Validation.Validate = function() {
        this.borderFailedLogin = () => {
            const redEmail = document.getElementById("mr-email");
            const redPassword = document.getElementById("mr-password");
            const redTextEmail = document.getElementById("mr-color-red-email");
            const redTextPassword = document.getElementById("mr-color-red-password");
            let isValid = true;
            if (redEmail.value === "") {
                redEmail.classList.add("mr-red-border");
                redTextEmail.classList.remove("hide");
                isValid = false;
            } else {
                redEmail.classList.remove("mr-red-border");
                redTextEmail.classList.add("hide");
            }
            if (redPassword.value === "") {
                redPassword.classList.add("mr-red-border");
                redTextPassword.classList.remove("hide");
                isValid = false;
            } else {
                redPassword.classList.remove("mr-red-border");
                redTextPassword.classList.add("hide");

            }
            return isValid;
        }
    }
})()