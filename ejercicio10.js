const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  media = 0;
  for (i = 0; i < numbers.length; i++) {
    media += numbers[i] / numbers.length
} 
return media;
}
console.log (average (numbers))