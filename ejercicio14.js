//Contador de repeticiones.
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
} return counts
}
console.log (repeatCounter(words))