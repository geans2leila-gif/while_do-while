//do while
const r = require('readline-sync');

let nota;

do {
    nota = parseFloat(r.question(" Óla Rodrigo digite uma nota de  (0 a 10):"));

    if( nota < 0 || nota > 10){
        console.log("Nota inválida. Digite uma nota (0 a 10).");
    }

}while ( nota < 0 || nota > 10);

console.log("Nota válida: " + nota);    

