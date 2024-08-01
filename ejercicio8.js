/* Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función */

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringlist) {
  let longestWord = "";
  let maxLength = 0;

  for (i = 0; i < avengers.length; i++) {
    if (avengers[i].length > maxLength) {
    maxLength = avengers[i].length;
  }
}
    longestWord = avengers.find(function(word) {
    return word.length === maxLength;
});

return longestWord;
}

console.log (findLongestWord(avengers));