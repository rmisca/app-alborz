document.getElementById('mr-add-buton-player').addEventListener('click', addPlayer)
let players = [];


function addPlayer () {
    let player = {};
    const playerInputs = document.querySelectorAll('[data-mr-player]');

    for(let i = 0; i < playerInputs.length; i++) {
        player[playerInputs[i].name] = playerInputs[i].value;
    }
    players.push(player);

    console.log(player);
    clearInputs(playerInputs);
}

function clearInputs(playerInputs) {
    let lastname = document.querySelectorAll('[data-mr-player="lastname"]')[0].value;
    const firstname = document.querySelectorAll('[data-mr-player="firstname"]')[0].value;
    const badgeNumber = document.querySelectorAll('[data-mr-player="badge-number"]')[0].value;
    const yellowCards = document.querySelectorAll('[data-mr-player="yellow-cards"]')[0].value;
    const redCards = document.querySelectorAll('[data-mr-player="red-cards"]')[0].value;
    const goalsScored = document.querySelectorAll('[data-mr-player="goals-scored"]')[0].value;
    const suspended = document.querySelectorAll('[data-mr-player="suspended"]')[0].checked;
    const team = document.querySelectorAll('[data-mr-player="choose-team"]')[0].value;

    for(let i = 0; i < playerInputs.length; i++) {
        playerInputs[i] = "";
    }
}