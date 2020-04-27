(function () {
    App.Core.Player = function () {
        this.players = [],
        this.util = new App.Util.Utilities(),
        this.loadAddPlayerPage = () => {
            this.util.getContainer().innerHTML = this.util.loadPage("templates/add-player.html");
            document.getElementById("mr-add-player").addEventListener("click", this.addPlayer);
        },
        this.addPlayer = () => {
            const lastname = document.getElementById("lastname").value;
            const firstname = document.getElementById("firstname").value;
            const badgeNumber = document.getElementById("badgeNumber").value;
            const yellowCards = document.getElementById("yellowCards").value;
            const redCards = document.getElementById("redCards").value;
            const goalsScored = document.getElementById("goalsScored").value;
            const chooseTeam = document.getElementById("chooseTeam").value;
            const suspendedCheck = document.getElementById("suspendedCheck").value;
            const player = {};
            player.lastname = lastname;
            player.firstname = firstname;
            player.badgeNumber = badgeNumber;
            player.yellowCards = yellowCards;
            player.redCards = redCards;
            player.goalsScored = goalsScored;
            player.chooseTeam = chooseTeam;
            player.suspendedCheck = suspendedCheck;
            this.players.push(player);
            localStorage.setItem("players", JSON.stringify(this.players));

        }
    }
})()