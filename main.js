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
    creatCard("20/11", "domingo", creatGame("Catar", "13:00", "Equador")) +
    creatCard("21/11", "segunda", creatGame("Inglaterra", "10:00", "Irã") + creatGame("Senegal", "13:00", "Holanda") +
    creatGame("E. Unidos", "16:00", "Gales")) +
    creatCard("22/11", "terça", creatGame("Argentina", "07:00", "Arábia") + creatGame("Dinamarca", "10:00", "Tunísia") +
    creatGame("México", "13:00", "Polônia") + creatGame("França", "16:00", "Austrália")) +
    creatCard("23/11", "quarta", creatGame("Marrocos", "07:00", "Croácia") + creatGame("Alemanha", "10:00", "Japão") +
    creatGame("Espanha", "13:00", "Costa Rica") + creatGame("Bélgica", "16:00", "Canadá")) +
    creatCard("24/11", "quinta", creatGame('Suíça', '07:00', 'Camarões') + creatGame('Uruguai', '10:00', 'Coreia') + 
    creatGame('Portugal', '13:00', 'Camarões') + creatGame('Brasil', '16:00', 'Sérvia')) +
    creatCard("25/11", "sexta", creatGame("Gales", "07:00", "Irã") + creatGame("Catar", "10:00", "Senegal") +
    creatGame("Holanda", "13:00", "Equador") + creatGame("Inglaterra", "16:00", "E. Unidos")) +
    creatCard("26/11", "sábado", creatGame("Tunísia", "07:00", "Austrália") + creatGame("Polônia", "10:00", "Arábia") +
    creatGame("França", "13:00", "Dinamarca") + creatGame("Argentina", "16:00", "México")) +
    creatCard("27/11", "domingo", creatGame("Japão", "07:00", "Costa Rica") + creatGame("Bélgica", "10:00", "Marrocos") +
    creatGame("Croácia", "13:00", "Canadá") + creatGame("Espanha", "16:00", "Alemanha")) +
    creatCard("28/11", "segunda", creatGame('Camarões', '07:00', 'Sérvia') + creatGame('Coreia', '10:00', 'Gana') +
    creatGame('Brasil', '13:00', 'Suíça') + creatGame('Portugal', '16:00', 'Uruguai')) +
    creatCard("29/11", "terça", creatGame('Equador', '12:00', 'Senegal') + creatGame('Holanda', '12:00', 'Catar') +
    creatGame('Irã', '16:00', 'E. Unidos') + creatGame('Gales', '16:00', 'Inglaterra')) +
    creatCard("30/11", "quarta", creatGame('Tunísia', '12:00', 'França') + creatGame('Austrália', '12:00', 'Dinamarca') +
    creatGame('Tunísia', '16:00', 'França') + creatGame('Arábia', '16:00', 'México')) +
    creatCard("01/12", "quinta", creatGame('Croácia', '12:00', 'Bélgica') + creatGame('Canadá', '12:00', 'Marrocos') +
    creatGame('Japão', '16:00', 'Espanha') + creatGame('Costa Rica', '16:00', 'Alemanha')) +
    creatCard("02/12", "sexta", creatGame('Coreia', '12:00', 'Portugal') + creatGame('Gana', '12:00', 'Uruguai') +
    creatGame('Sérvia', '16:00', 'Suíça') + creatGame('Camarões', '16:00', 'Brasil')) 
