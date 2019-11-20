var blank = [];
for (var i = 0; i < 6; i++) {
  var insert = parseInt(prompt('digita un numero intero'));
  console.log(insert);

  if (insert %2 == 1) {
    console.log('il numero è dispari ' + insert);
    blank.push(insert)
  }
}
console.log(blank);
