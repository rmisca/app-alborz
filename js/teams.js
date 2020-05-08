$(document).ready(function() {
    (function () {
        App.Core.Team = function () {
            this.teams = [],
            this.util = new App.Util.Utilities(),
            this.validation = new App.Validation.Validate(),
            this.loadAddTeamPage = () => {
                this.util.getContainer().innerHTML = this.util.loadPage("templates/add-team.html");
                document.getElementById("mr-add-team").addEventListener("click", this.addTeam);
                $('.mdb-select').materialSelect();
            },
            this.addTeam = () => {
                const name = document.getElementById("team-name").value;
                const color = document.getElementById("team-color").value;
                const manager = document.getElementById("team-manager").value;
                const coach = document.getElementById("team-coach").value;
                const teamPlayers = document.getElementById("choose-player").value;
                // this.validation.isInputFilled(lastname);
                // if (this.validation.isInputFilled(lastname) && this.validation.isInputFilled(firstname)) {
                    // this code will run if the form has the required fields filled
                    const team = {};
                    team.name = name;
                    team.color = color;
                    team.manager = manager;
                    team.coach = coach;
                    team.teamPlayers = teamPlayers;
                    this.teams.push(team);
                    localStorage.setItem("teams", JSON.stringify(this.teams));
                    const elementsToClear = document.querySelectorAll("[data-mr-team]");
                    this.util.clearInputs(elementsToClear);
                // } else {
                //     this.addRedBorder();
                // }

            }

        }
    })()
});