const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let suma = 0;
  for (i = 0; i < numbers.length; i++) {
    suma += numbers[i]; 
  }
  return suma;
}
console.log (sumNumbers(numbers));