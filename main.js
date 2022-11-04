function creatName() {
    return `
    
    `
}
/* player1 - "Brasil", player2 - "Sérvia", player3 - "Suécia", player4 - "Portugal", player5 - "Uruguai", player6 - "Camarões"
*/
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
    creatCard("24/11", "quinta", creatGame('Suíça', '07:00', 'Camarões') + creatGame('Uruguai', '10:00', 'CoreiaSul') + 
    creatGame('Portugal', '13:00', 'Camarões') + creatGame('Brasil', '16:00', 'Servia')) +

    creatCard("28/11", "segunda", creatGame('Camarões', '07:00', 'Servia') + creatGame('CoreiaSul', '10:00', 'Gana') +
    creatGame('Brasil', '13:00', 'Suíça') + creatGame('Portugal', '16:00', 'Uruguai')) +

    creatCard("02/12", "sexta", creatGame('Brasil', '16:00', 'Camarões'))
