(function() {
    document.getElementById('mr-add-button-player').addEventListener('click', addPlayer)
    document.getElementById('mr-persist-button-player').addEventListener('click', persistPlayers)
    document.getElementById('mr-login-button').addEventListener('click', loadLoginSection)
    document.getElementById('mr-register-button').addEventListener('click', loadRegisterSection)
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
        for (let i = 0; i < dbusers.length; i++ ) {
            if (dbusers[i].email === email && dbusers[i].password === password) {
                console.log("Login successful")
                break;
            } else {
                if (dbusers.length - 1 === i) {
                    console.log("Login failed")
                }
            }
            console.log(dbusers[i]);
        }
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

    initLocalStorage();
}) ()