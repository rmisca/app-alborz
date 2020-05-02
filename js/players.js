(function () {
    App.Core.Player = function () {
        this.players = [],
        this.util = new App.Util.Utilities(),
        this.validation = new App.Validation.Validate(),
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
            this.validation.isInputFilled(lastname);
            if (this.validation.isInputFilled(lastname) && this.validation.isInputFilled(firstname)) {
                // this code will run if the form has the required fields filled
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
                const elementsToClear = document.querySelectorAll("[data-mr-player]");
                this.util.clearInputs(elementsToClear);
            } else {
                this.addRedBorder();
            }

        },
         this.addRedBorder = () => {
            const redFirstname = document.getElementById("firstname");
            const redTextFirstname = document.getElementById("mr-color-red-firstname");
            const redLastname = document.getElementById("lastname");
            const redTextLastname = document.getElementById("mr-color-red-lastname");

            if (redFirstname.value === "") {
                redFirstname.classList.add("mr-red-border");
                redTextFirstname.classList.remove("hide");
            } else {
                redFirstname.classList.remove("mr-red-border");
                redTextFirstname.classList.add("hide");
            }
             if (redLastname.value === "") {
                 redLastname.classList.add("mr-red-border");
                 redTextLastname.classList.remove("hide");
             } else {
                 redLastname.classList.remove("mr-red-border");
                 redTextLastname.classList.add("hide");
             }
         }
    }
})()