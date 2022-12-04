function creatGame(player1, hour, player2, definir) {
    return `
    <li>
            <figure><img src="./assets/icon-${player1}.svg"alt="Bandeira do ${player1}" title=${player1}> 
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
creatCard("03/12", "sábado", creatGame("Holanda", "12:00", "E. Unidos") + creatGame("Argentina", "16:00", "Austrália")) +
creatCard("04/12", "domingo", creatGame("França", '12:00', 'Polônia') + creatGame('Inglaterra', '16:00', 'Senegal')) +
creatCard("05/12", "segunda", creatGame("Japão", '12:00', 'Croácia') + creatGame('Brasil', '16:00', "Coreia")) +
creatCard("06/12", "terça", creatGame("Marrocos", '12:00', 'Espanha') + creatGame('Portugal', '16:00', 'Suíça'));
