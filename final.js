function creatGame(player1, hour, player2) {
    return `
    <li>
            <figure><img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" title=${player1}> 
            <figcaption>${player1}</figcaption></figure>
            <strong>${hour}</strong>
            <figure><img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" title=${player2}> 
            <figcaption>${player2}</figcaption></figure>
    </li>
    `
}

let delay = -0.4;
function creatCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span> </h2>
    <ul>
        ${games}
    </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML =
     creatCard("18/12", "domingo", creatGame("", "12:00", ""));