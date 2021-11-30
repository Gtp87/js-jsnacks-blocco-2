// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

// presi due array per nomi e cognomi
// let nomi =  ['Giuseppe', 'Carmelo', 'Giovanni', 'Rosa', 'Maria', 'Francesco', 'Daniela', 'Fulvio', 'Alessio', 'Andrea'];
// let cognomi = ['Bianchi', 'Rossi', 'Verdi', 'Mattarella', 'Obama', 'Russo', 'Vinci', 'Buonarroti', 'Monet', 'Wilde'];

// // array vuoto per lista generata
// let ospiti = [];

// // genero lista di 10 ospiti

// for (let index = 0; index < 10; index++) {
//     let ospite = nomi[Math.floor(Math.random() * 9)] + ' ' + cognomi[Math.floor(Math.random() * 9)];
//     ospiti.push(ospite);
// }
// // stampo in console
// console.log(ospiti)

// funzione

function fakeGuests(max) {
    let ospite = nomi[Math.floor(Math.random() * max)] + ' ' + cognomi[Math.floor(Math.random() * max)];
    return ospite;

}

let nomi = ['Giuseppe', 'Carmelo', 'Giovanni', 'Rosa', 'Maria', 'Francesco', 'Daniela', 'Fulvio', 'Alessio', 'Andrea'];
let cognomi = ['Bianchi', 'Rossi', 'Verdi', 'Mattarella', 'Obama', 'Russo', 'Vinci', 'Buonarroti', 'Monet', 'Wilde'];


let ospiti = [];

for (let index = 0; index < 10; index++) {
    let ospite = fakeGuests(9);
    ospiti.push(ospite);
}

console.log(ospiti);