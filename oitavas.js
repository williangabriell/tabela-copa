function creatGame(player1, hour, player2, definir) {
    return `
    <li>
            <figure><img src="./assets/icon-${definir}.svg"alt="Bandeira do ${definir}" title=${definir}> 
            <figcaption>${definir}</figcaption></figure>
            <strong>${hour}</strong>
            <figure><img src="./assets/icon-${definir}.svg" alt="Bandeira do ${definir}" title=${definir}> 
            <figcaption>${definir}</figcaption></figure>
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
creatCard("03/12", "sábado", creatGame("", '12:00', '') + creatGame('', '16:00', '')) +
creatCard("04/12", "segunda", creatGame("", '12:00', '') + creatGame('', '16:00', '')) +
creatCard("05/12", "segunda", creatGame("", '12:00', '') + creatGame('', '16:00', '')) +
creatCard("06/12", "segunda", creatGame("", '12:00', '') + creatGame('', '16:00', ''));
