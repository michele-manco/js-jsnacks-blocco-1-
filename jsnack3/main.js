// jSnack 3: Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
var usernumb = [];
for (var i = 0; i < 5; i++) {
  var insert = parseInt(prompt('digita un numero intero'));
  console.log(insert);
  usernumb.push(insert)
}
console.log(usernumb);
// var add = 0;
// for (var i = 0; i < usernumb.length; i++) {
//   add = add + usernumb[i];
// }
// console.log(add);
// ciclo while
var counter = 0;
var add = 0;
while (counter < usernumb.length) {
 add = add + usernumb[counter];
 counter++;
}
console.log(add);
