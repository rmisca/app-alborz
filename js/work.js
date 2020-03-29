// (function () {
//     function loadJSON(callback) {

//         var xobj = new XMLHttpRequest();

//         xobj.overrideMimeType("aplication/json");
//         xobj.open('GET', '../data/teams.json', true);
//         xobj.onreadystatechange = function () {
//             if (xobj.readyState == 4 && xobj.status == '200') {
//                 callback(xobj.responseText);
//             }
//         };
//         xobj.send(null);
//     }
//     function buildTeamTableHeader(data) {
//         var headers = data.headers;
//         var html = "<table><thead><tr><th>";
//         for (var i = 0; i < headers.length; i++) {
//             html += headers[i] + "</th>";
//             if (i !== headers.length - 1) {
//                 html += "<th>";
//             }
//         }
//         html += "</tr></thead>";
//         return html;
//     }
//     function buildTeamTableBody(data) {
//         var body = data.teams;
//         var html = "<tbody><tr><td>";
//         for (var i = 0; i < body.length; i++) {
//             html += body[i]["position"] + "</td><td>";
//             html += body[i]["name"] + "</td><td>";            
//             html += body[i]["games"] + "</td><td>";            
//             html += body[i]["wins"] + "</td><td>";            
//             html += body[i]["draws"] + "</td><td>";            
//             html += body[i]["defeats"] + "</td><td>";            
//             html += body[i]["goalsScored"] + "</td><td>";            
//             html += body[i]["goalsReceived"] + "</td><td>";            
//             html += body[i]["points"] + "</td></tr>"; 
//             if (i < body.length - 1) {
//                 html += "<tr><td>";
//             }
//         }
//         html += "</tbody></table>";
//         return html;
//     }
//     function buildTeamTable(header, body){
//         //todo :(
//         var jsonData = data;
//         var header = buildTeamTableHeader(jsonData);//"html"
//         var body = buildTeamTableBody(jsonData);
//         var table = header + body;
//         var container = document.getElementById("dynamic-table");
//         container.innerHTML = table;

//     }
//     buildTeamTable();

//     var btns = document.getElementsByClassName("mr-click-event");
  
//     function show (event) {
//         console.log(event);
//     }
//     for (var j = 0; j < btns.length; j++) {
//         btns[j].addEventListener ("click", show)
//     }
// })();





