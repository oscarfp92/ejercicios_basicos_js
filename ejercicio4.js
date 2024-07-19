//Dado el siguiente array:
const aldeanos = [ "Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo" ];

//1. Saca a "Tendo" por consola atacando su posición.
console.log (aldeanos[4]);

//2. Coloca en el último lugar de este array a "Cervasio".
aldeanos.push ("Cervasio");
console.log (aldeanos);

//3. Cambia el primer elemento de este array por "Bambina".
aldeanos[0] = "Bambina";
console.log (aldeanos);

//4. Dale la vuelta a este array.
aldeanos.reverse();
console.log (aldeanos);

//5. Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
aldeanos.splice(4, 1, "Canela");
console.log (aldeanos);

//6. Imprime por consola el último elemeento de este array sin atacar a la posición explícitamente.
 console.log (aldeanos[aldeanos.length-1])