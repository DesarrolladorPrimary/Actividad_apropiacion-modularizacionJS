// Importamos la funcion Calcularpromedio desde el archivo calcularpromedio.js ubicado en la carpeta modulos
import { Calcularpromedio } from "./modulos/calcularpromedio.js"; // Trae la funcion para usarla

// Pedimos al usuario que ingrese la primera nota y la convertimos a numero decimal
let not1 = parseFloat(prompt("Ingrese la nota 1: ")); // Solicita la primera nota y la convierte

// Pedimos la segunda nota y la convertimos a numero decimal
let not2 = parseFloat(prompt("Ingrese la nota 2: ")); // Solicita la segunda nota y la convierte

// Pedimos la tercera nota y la convertimos a numero decimal
let not3 = parseFloat(prompt("Ingrese la nota 3: ")); // Solicita la tercera nota y la convierte

// Llamamos la funcion Calcularpromedio con las tres notas y mostramos el resultado con alert
alert(Calcularpromedio(not1, not2, not3)); // Calcula el promedio y lo muestra en pantalla
