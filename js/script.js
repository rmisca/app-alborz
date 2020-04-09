(function() {
    const util = new App.Util.Utilities();
    const announce = new App.Announcement.Announce();
    const auth = new App.Auth.Login();

    // document.getElementById('mr-add-button-player').addEventListener('click', addPlayer)
    // document.getElementById('mr-persist-button-player').addEventListener('click', persistPlayers)
    document.getElementById('mr-login-button').addEventListener('click', auth.loadLoginPage)
    document.getElementById('mr-register-button').addEventListener('click', auth.loadRegisterPage)
    document.getElementById('mr-logout-button').addEventListener("click", auth.logout)
    document.getElementById("mr-home-button").addEventListener("click", util.loadHome)
    document.getElementById("go-to-team").addEventListener("click", util.loadTeam)
    document.getElementById("mr-announcement-button").addEventListener("click", announce.loadAnnouncement)
    let players = [];

    function addPlayer () {
        let player = {};
    
    
        const playerInputs = document.querySelectorAll('[data-mr-player]');
    
        for(let i = 0; i < playerInputs.length; i++) {
            player[playerInputs[i].name] = playerInputs[i].value;
        }
        players.push(player);
        util.clearInputs(playerInputs);
        util.showSuccessMessage();
    }

    function persistPlayers () {
        localStorage.players = JSON.stringify(players);
    }

    function redirectToAddPlayer() {
        document.getElementById("mr-content").innerHTML = util.loadPage("templates/add-player.html");
    }

    auth.welcomeOnThePage();
    util.loadHome();
    auth.initViewAfterLogin();
    util.loadUsers();
}) ()