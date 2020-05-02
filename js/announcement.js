(function() {
    App.Core.Announcement = function() {
        this.announcements = [],
        this.util = new App.Util.Utilities(),
        this.loadAnnouncement = () => {
            this.util.getContainer().innerHTML = this.util.loadPage("templates/announcement.html");
            document.getElementById("mr-click-announcement-button").addEventListener("click", this.announcementButton);
        },
        this.announcementButton = () => {
            let titleAnnouncement = document.getElementById("mr-announcement-title").value;
            let descriptionAnnouncement = document.getElementById("mr-announcement-description").value;
            const announcement = {};
            announcement.title = titleAnnouncement;
            announcement.description = descriptionAnnouncement;
            announcement.addedDate = Date.now();
            this.announcements.push(announcement);
            localStorage.setItem("announcements", JSON.stringify(this.announcements));
            const elementsToClear = document.querySelectorAll("[data-mr-announcement]");
            this.util.clearInputs(elementsToClear);
            // this.util.loadHome();
        }

    }
})()