//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  const counts = {};
  for (i = 0; i< words.length; i++) {
  let word = words[i];
  if (counts[word]) {
    counts [word]++;
  } else {
    counts [word] = 1;
  }
} return counts;
}

console.log (repeatCounter(words));