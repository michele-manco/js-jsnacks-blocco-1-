
var lista = ['kennedy', 'capote', 'gatsby']
var username = prompt('Digita il tuo cognome');
console.log(username);
// console.log(lista.lenght);
var inlista = 0
for (var i = 0; i < lista.length; i++) {
    if (username == lista[i]) {

      inlista = 1;

    }
}
if (inlista == 1) {
  console.log('sei stato invitato');

} else {
  console.log('non sei stato invitato');
}
