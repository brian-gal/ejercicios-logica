/* Actividad 1: Invertir una cadena
Escribe un programa en JavaScript que tome una cadena de texto y la invierta.
 */

/* Actividad 2: Números primos
Escribe un programa en JavaScript que imprima todos los números primos entre uno y cien. 
 */

/* Actividad 3: Generar una tabla de multiplicar
Escribe un programa en JavaScript que genere y muestre en la consola la tabla de multiplicar del número que elijas. El programa debería pedir al usuario que ingrese un número, y luego imprimir la tabla de multiplicar de ese número del uno al diez.
 */

function generarTabla(tabla) {
  for (let i = 1; i < 11; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`)
  }
}
// generarTabla(10)

/* Actividad 4: Encontrar el número más grande en un arreglo
Escribe un programa en JavaScript que encuentre y muestre el número más grande en un arreglo dado.
 */
function actividad4() {
  let numeros = [1, 4, 100, 9, 105, 66, 55]
  numeros.sort((a, b) => a - b)
  console.log(numeros[numeros.length - 1])
}
// actividad4()

/* Actividad 5: Contar vocales en una cadena
Escribe un programa en JavaScript que cuente y muestre el número de vocales en una cadena de texto dada.
 */

function actividad5(texto) {
  let vocales = 0
  let consonantes = 0
  for (let i = 0; i < texto.length; i++) {
    if (!isNaN(texto[i])) {
      continue;
    } else {
      if (texto[i] == "a" || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u') {
        vocales++
      } else {
        consonantes++
      }
    }
  }
  console.log(`texto: "${texto}""\nVocales: ${vocales}.\nConsonantes: ${consonantes}`)

}

actividad5("bueno")
/* Actividad 6: Factorial de un número
Escribe un programa en JavaScript que calcule y muestre el factorial de un número dado. Por ejemplo, el factorial de 5 es 120 (5 x 4 x 3 x 2 x 1).
 */

/* Actividad 7: Palíndromo
Escribe un programa en JavaScript que verifique si una cadena de texto dada es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).
 */

/* Actividad 8: FizzBuzz
Escribe un programa en JavaScript que imprima los números del 1 al 100. Pero para múltiplos de tres imprime "Fizz" en lugar del número, y para los múltiplos de cinco imprime "Buzz". Para números que son múltiplos de tres y cinco imprime "FizzBuzz". */

/* Actividad 9: Suma de números en un arreglo
Escribe un programa en JavaScript que sume todos los números de un arreglo dado. Por ejemplo, si el arreglo es [1, 2, 3, 4, 5], el programa debería imprimir 15. */