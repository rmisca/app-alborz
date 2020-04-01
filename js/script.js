(function() {
    // document.getElementById('mr-add-button-player').addEventListener('click', addPlayer)
    // document.getElementById('mr-persist-button-player').addEventListener('click', persistPlayers)
    document.getElementById('mr-login-button').addEventListener('click', loadLoginSection)
    document.getElementById('mr-register-button').addEventListener('click', loadRegisterSection)
    document.getElementById('mr-logout-button').addEventListener("click", logout)
    let players = [];
    
    
    function addPlayer () {
        let player = {};
    
    
        const playerInputs = document.querySelectorAll('[data-mr-player]');
    
        for(let i = 0; i < playerInputs.length; i++) {
            player[playerInputs[i].name] = playerInputs[i].value;
        }
        players.push(player);
        clearInputs(playerInputs);
        showSuccessMessage();
    }

    function persistPlayers () {
        localStorage.players = JSON.stringify(players);
    }

    function clearInputs(playerInputs) {
        for(let i = 0; i < playerInputs.length; i++) {
            if(playerInputs[i].name === "suspended") {
                playerInputs[i].checked = false;
            } else {
                playerInputs[i].value = "";
            }
        }
    }

    function showSuccessMessage () {
        const alert = document.getElementById('mr-alert');
        alert.classList.add("show");
    }
    function clearContent () {
        document.getElementById('mr-content').innerHTML = "";
    }
    function loadLoginSection () {
        clearContent();
        document.getElementById('mr-content').innerHTML = loadPage('templates/login.html');
        const logButton = document.getElementById("mr-signin-button");
        addEventListeners(logButton, "click", login);
    }

    function loadRegisterSection () {
        clearContent();
        document.getElementById('mr-content').innerHTML = loadPage("templates/register.html");
        const registerButton = document.getElementById("mr-registration-button");
        addEventListeners(registerButton, "click", register);
    }

    function addEventListeners (element, eventType, callback) {
        element.addEventListener(eventType, callback)
    }


    function login () {
        const email = document.getElementById("mr-email").value;
        const password = document.getElementById("mr-password").value;
        const dbusers = JSON.parse(localStorage.users);
        if (borderFailedLogin()) {
            clearAlerts();
            for (let i = 0; i < dbusers.length; i++ ) {
                if (dbusers[i].email === email && dbusers[i].password === password) {
                    setLoggedInUser(dbusers[i]);
                    initViewAfterLogin();
                    redirectToAddPlayer();
                    break;
                } else {
                    if (dbusers.length - 1 === i) {
                        alertFailedMessage();
                    }
                }
            }
        }
    }
    function redirectToAddPlayer() {
        document.getElementById("mr-content").innerHTML = loadPage("templates/add-player.html");
    }
    function setLoggedInUser (user) {
        localStorage.setItem("loggedUser", JSON.stringify(user));
    }

    function register () {
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
        console.log(localStorage.users);
    }

    function alertFailedMessage() {
        const alertFailedBox = document.getElementById("mr-failed-alert");
        alertFailedBox.classList.add("show");
    }

    function clearAlerts() {
        const alertFailedBox = document.getElementById("mr-failed-alert");
        const alertSuccessBox = document.getElementById("mr-success-alert");
        alertFailedBox.classList.remove("show");
        alertSuccessBox.classList.remove("show");
        alertFailedBox.classList.add("hide");
        alertSuccessBox.classList.add("hide");
    }
    function  borderFailedLogin () {
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
    function loadPage(href) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }

    function initLocalStorage () {
        loadUsers();
    }

    function loadUsers() {
        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", JSON.stringify(users));
        }

    }
    function initViewAfterLogin() {
        const login = document.getElementById("mr-login-button");
        const register = document.getElementById("mr-register-button");
        const logoutButton = document.getElementById("mr-logout-button");
        if (isLoggedIn()) {
            login.classList.add("hide");
            register.classList.add("hide");
            logoutButton.classList.remove("hide");
        } else {
            login.classList.remove("hide");
            register.classList.remove("hide");
            logoutButton.classList.add("hide");
        }
    }

    function logout() {
        localStorage.removeItem("loggedUser");
        initViewAfterLogin();
        clearContent();
        document.getElementById('mr-content').innerHTML = loadPage('templates/home.html');

    }
    function isLoggedIn() {
        return localStorage.loggedUser;
    }

    initViewAfterLogin();
    initLocalStorage();
}) ()