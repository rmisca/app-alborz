(function() {
    App.Auth.Login = function() {
        this.util = new App.Util.Utilities(),
        this.validation = new App.Validation.Validate(),
        this.loadLoginPage = () => {
            this.util.clearContent();
            document.getElementById('mr-content').innerHTML = this.util.loadPage('templates/login.html');
            const logButton = document.getElementById("mr-signin-button");
            this.util.addEventListeners(logButton, "click", this.login);
        },
        this.loadRegisterPage = () => {
            this.util.clearContent();
            document.getElementById('mr-content').innerHTML = this.util.loadPage("templates/register.html");
            const registerButton = document.getElementById("mr-registration-button");
            this.util.addEventListeners(registerButton, "click", this.register);
        },
        this.login = () => {
            const email = document.getElementById("mr-email").value;
            const password = document.getElementById("mr-password").value;
            const dbusers = JSON.parse(localStorage.users);
            if (this.validation.borderFailedLogin()) {
                this.util.clearAlerts();
                for (let i = 0; i < dbusers.length; i++ ) {
                    if (dbusers[i].email === email && dbusers[i].password === password) {
                        this.setLoggedInUser(dbusers[i]);
                        this.welcomeOnThePage();
                        this.initViewAfterLogin();
                        this.util.loadHome();
                        break;
                    } else {
                        if (dbusers.length - 1 === i) {
                            this.util.alertFailedMessage();
                        }
                    }
                }
            }
        },
        this.setLoggedInUser = (user) => {
            localStorage.setItem("loggedUser", JSON.stringify(user));
        },
        this.welcomeOnThePage = () => {
            const welcomeUserOnThePage = document.getElementById("mr-welcome-user");
            const avatarUser = document.getElementById("mr-welcome-avatar");
            if (this.isLoggedIn()) {
                welcomeUserOnThePage.classList.remove("hide");
                document.getElementById("welcome-username").innerHTML = JSON.parse(localStorage.loggedUser).email;
                avatarUser.classList.remove("hide");
                this.displayAvatar();
            } else {
                welcomeUserOnThePage.classList.add("hide");
                avatarUser.classList.add("hide");
            }
        },
        this.displayAvatar = () => {
            const profilePhoto = document.getElementById("avatar");
            profilePhoto.setAttribute("src", "https://robohash.org/" + JSON.parse(localStorage.loggedUser).email);
        },
        this.logout = () => {
            localStorage.removeItem("loggedUser");
            this.initViewAfterLogin();
            this.util.clearContent();
            this.util.loadHome();
            this.welcomeOnThePage();
        },
        this.initViewAfterLogin = () => {
            const login = document.getElementById("mr-login-button");
            const register = document.getElementById("mr-register-button");
            const logoutButton = document.getElementById("mr-logout-button");
            if (this.isLoggedIn()) {
                login.classList.add("hide");
                register.classList.add("hide");
                logoutButton.classList.remove("hide");
            } else {
                login.classList.remove("hide");
                register.classList.remove("hide");
                logoutButton.classList.add("hide");
            }
        },
        this.isLoggedIn = () => {
            return localStorage.loggedUser;
        },
            this.register = () => {
                const firstname = document.getElementById("firstname").value;
                const lastname = document.getElementById("lastname").value;
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                const confirmPassword = document.getElementById("confirm-password").value;
                const user = {};
                const dbusers = JSON.parse(localStorage.users);
                user.firstname = firstname;
                user.lastname = lastname;
                user.email = email;
                user.password = password;
                user.confirmPassword = confirmPassword;
                dbusers.push(user);
                localStorage.setItem("users", JSON.stringify(dbusers));
            }


    }

})()


