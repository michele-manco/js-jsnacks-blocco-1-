// jSnack 2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
var word1 = prompt('digita una parola');
console.log(word1);
var word2 = prompt('digita un altra parola');
console.log(word2);

// if (word1.lenght > word2.lenght) {
//   console.log(word2);
//
// } else if (word2.lenght > word1.lenght) {
//   console.log(word1);
// }
// else {
//   console.log('le parole hanno la stessa lunghezza');
// }

if (word1.length == word2.length) {
  console.log('le parole hanno la stessa lunghezza');

} else if (word1.length > word2.length) {
  console.log('digita ' + word1);


} else {
  console.log('digita ' + word2);


}
var elenco = [ word1, word2];
console.log(elenco);
elenco.sort(function(a, b){return b - a });
console.log(elenco);
console.log('la parola + lunga è '+ elenco[0]);
