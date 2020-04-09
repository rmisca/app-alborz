(function() {
    App.Util.Utilities = function() {
        this.clearContent = () => {
            document.getElementById('mr-content').innerHTML = "";
        },
        this.loadUsers = () => {
            if (localStorage.getItem("users") === null) {
                localStorage.setItem("users", JSON.stringify(users));
            }
        },
        this.loadPage = (href) => {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", href, false);
            xmlhttp.send();
            return xmlhttp.responseText;
        },
        this.addEventListeners = (element, eventType, callback) => {
            element.addEventListener(eventType, callback)
        },
        this.alertFailedMessage = () => {
            const alertFailedBox = document.getElementById("mr-failed-alert");
            alertFailedBox.classList.remove("hide");
        },
        this.clearAlerts = () => {
            const alertFailedBox = document.getElementById("mr-failed-alert");
            alertFailedBox.classList.add("hide");
        }
        this.loadPageIntoContainer = (container, pagePath) => {
            container.innerHTML = this.loadPage(pagePath);
        },
         this.loadTeam = () => {
            const container = this.getContainer();
            this.loadPageIntoContainer(container, "templates/team.html")
        },
        this.loadHome = () => {
            const container = this.getContainer();
            this.loadPageIntoContainer(container, "templates/home.html")
            this.showAnnouncements();
        },
        this.showAnnouncements = () => {
            const announcements = JSON.parse(localStorage.getItem("announcements"));
            const template = document.getElementById("announcement-template");
            const templateContainer = document.getElementById("announcement-section-container");
            let tempAux = "";
            for (let i=0; i < announcements.length; i++) {
                const addedDate = new Date(announcements[i].addedDate);
                const datestring = addedDate.getDate()  + "-" + (addedDate.getMonth()+1) + "-" + addedDate.getFullYear() + " " +
                    addedDate.getHours() + ":" + addedDate.getMinutes();
                let temp = template.innerHTML;
                temp = temp.replace("{{ title }}", announcements[i].title);
                temp = temp.replace("{{ description }}", announcements[i].description);
                temp = temp.replace("{{ addedDate }}", datestring);
                tempAux += temp;
                templateContainer.innerHTML = tempAux;
            }
        },
        this.getContainer = () => {
            return document.getElementById("mr-content");
        },
         this.clearInputs = (playerInputs) => {
            for(let i = 0; i < playerInputs.length; i++) {
                if(playerInputs[i].name === "suspended") {
                    playerInputs[i].checked = false;
                } else {
                    playerInputs[i].value = "";
                }
            }
        },
        this.showSuccessMessage = () => {
            const alert = document.getElementById('mr-alert');
            alert.classList.add("show");
        }

    }
})()