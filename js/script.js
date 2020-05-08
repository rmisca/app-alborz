
// Material Select Initialization
$(document).ready(function() {
    (function() {
        const util = new App.Util.Utilities();
        const announce = new App.Core.Announcement();
        const auth = new App.Auth.Login();
        const player = new App.Core.Player();
        const team = new App.Core.Team();

        document.getElementById('mr-login-button').addEventListener('click', auth.loadLoginPage)
        document.getElementById('mr-register-button').addEventListener('click', auth.loadRegisterPage)
        document.getElementById('mr-logout-button').addEventListener("click", auth.logout)
        document.getElementById("mr-home-button").addEventListener("click", util.loadHome)
        document.getElementById("go-to-team").addEventListener("click", util.loadTeam)
        document.getElementById("add-team-player").addEventListener("click", player.loadAddPlayerPage)
        document.getElementById("add-team").addEventListener("click", team.loadAddTeamPage)
        document.getElementById("mr-announcement-button").addEventListener("click", announce.loadAnnouncement)
        document.getElementById("mr-contact-button").addEventListener("click", util.loadContactPage)


        auth.welcomeOnThePage();
        util.loadHome();
        auth.initViewAfterLogin();
        util.loadUsers();


    }) ()

});