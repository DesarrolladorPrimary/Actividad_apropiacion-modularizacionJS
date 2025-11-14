// Importamos la funcion ContarHasta desde el archivo contador.js ubicado en la carpeta modulos
import { ContarHasta } from "./modulos/contador.js"; // Permite acceder a la funcion del modulo

// Pedimos al usuario que ingrese un numero y lo convertimos a entero con parseInt
let n = parseInt(prompt("Ingrese el numero: ")); // Pide el numero y lo convierte a entero

// Llamamos la funcion ContarHasta pasando el numero ingresado como argumento
ContarHasta(n); // Ejecuta el conteo hasta el valor entregado por el usuario
