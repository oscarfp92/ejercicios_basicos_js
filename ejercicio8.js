const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringlist) {
let longest = avengers[0];
for(i = 0; i < avengers.length; i++) {
  if (avengers[i].length > longest.length);
    longest = avengers [i];
}
return longest;
}
console .log (findLongestWord(avengers));