//1. Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
let i = 0;
for (i = 0; i < 10; i++) {
  console.log (i)
}


//2. Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo cuando el resto del número dividido entre 2 sea cero.
let x = 0;
for (x = 0; x < 10; x++) {
  if (x%2 == 0) {
    console.log (x)
  }
}

/*Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log. Muestra por consola un mensaje diciendo "Intentando dormir 🐑" en cada vuelta del bucle y cambia el mensaje en la décima vuelta a "¡Dormido!*/
let y = 0;
for (y = 0; y <= 9; y++) {
  if (y <= 8) {
    console.log ("Intentando dormir 🐑");}
    else  {
      console.log ("¡Dormido!")}
}