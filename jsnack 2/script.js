// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// dichiaro array
let arrNum = [3, 5, 72, 38, 105, 1002, 58, 90, 1, 22, 38];
let sum = 0;
console.log(arrNum);

// presa lugnhezza array

for (let index = 0; index < arrNum.length; index++) {
    
    // se la posizione de index e' pari
    if (index % 2 == 0) {
        console.log('numero in posizione pari', arrNum[index]);

    // altrimenti se e' dispari
    } else {
        console.log('numero in posizione dispari', arrNum[index]);
        sum += arrNum[index];
        
    }
      
}

console.log('somma numeri posizione dispari: ' + sum);