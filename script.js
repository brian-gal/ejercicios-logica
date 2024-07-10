

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
generarTabla(10)