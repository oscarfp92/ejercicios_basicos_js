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
  const counts = {}; // Objeto para almacenar los conteos de palabras

  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    if (counts[word]) { // Si la palabra ya está en el objeto, incrementamos el contador
      counts[word]++;
    } else { // Si la palabra no está en el objeto, la añadimos con un contador de 1
      counts[word] = 1;
    }
  }

  return counts; // Devolvemos el objeto con los conteos de palabras
}

// Prueba de la función
console.log(repeatCounter(words));