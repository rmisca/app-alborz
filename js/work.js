(function () {
    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();

        xobj.overrideMimeType("aplication/json");
        xobj.open('GET', '../data/teams.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == '200') {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }
    function buildTeamTableHeader(data) {
        var headers = data.headers;
        var html = "<table><thead><tr><th>";
        for (var i = 0; i < headers.length; i++) {
            html += headers[i] + "</th>";
            if (i !== headers.length - 1) {
                html += "<th>";
            }
        }
        html += "</tr></thead></table>";
        return html;
    }
    function buildTeamTableBody(data) {
        //todo Romina to create table body
    }
    function buildTeamTable(header, body){
        //todo :(
        var jsonData = data;
        var header = buildTeamTableHeader(jsonData);
        var container = document.getElementById("dynamic-table");
        container.innerHTML = header;
    }
    buildTeamTable();
})()