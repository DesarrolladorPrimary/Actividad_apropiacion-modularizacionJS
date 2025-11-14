// Importamos la funcion mostrar_mensaje desde el archivo validar_numero.js ubicado en la carpeta modulos
import { mostrar_mensaje } from "./modulos/validar_numero.js"; // Disponibiliza la funcion de validacion

// Pedimos al usuario que ingrese un numero y lo guardamos como texto
let numero = prompt("Ingrese un numero:"); // Solicita el numero en formato cadena

// Convertimos el valor ingresado a numero entero usando parseInt
numero = parseInt(numero); // Convierte la cadena ingresada a entero

// Llamamos la funcion mostrar_mensaje pasando el numero como argumento
mostrar_mensaje(numero); // Ejecuta la validacion y muestra el mensaje correspondiente
