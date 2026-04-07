//do while
// para acomentar varias linhas chift alt A

//const r = require('readline-sync');

/* let nota;

do {
    nota = parseFloat(r.question(" Óla Rodrigo digite uma nota de  (0 a 10):"));

    if( nota < 0 || nota > 10){
        console.log("Nota inválida. Digite uma nota (0 a 10).");
    }

}while ( nota < 0 || nota > 10);

console.log("Nota válida: " + nota);    
 */


// média com while 
const r = require('readline-sync');
// variaveis 
let soma = 0;
let contador = 1;

// contador para controlar o numero de notas
while ( contador <= 5) { 
    // solicita a nota do usuário 
    let nota = parseFloat(r.question(`Nota ${contador}: `)); 
    // realiza o calculo das notas, 4 notas.
    soma += nota; 
    // incrementa o contador para a próxima nota 
    contador++;
}
// define a media a soma da 4 notas dividido por 4, para obter a média.
let media = soma / 5; 
//printa a média e usa toFixed para limitar a 2 casas decimais.
console.log("A média é: " + media.toFixed(2)); 



/* const r = require('readline-sync');

// média com do while

let somaDoWhile =0;
let contadorDoWhile = 1;

do {
    let nota = parseFloat(r.question(`Nota ${contadorDoWhile}: `));
    somaDoWhile += nota;
    contadorDoWhile++;

} while (contadorDoWhile <= 5);

let mediaDoWhile = somaDoWhile / 5;
console.log("A média é: " + mediaDoWhile.toFixed(2));  */