// Importamos la funcion SaludoPersonalizado desde el archivo Salud.js ubicado en la carpeta modulos
import { SaludoPersonalizado } from "./modulos/Salud.js"; // Trae la funcion para usarla aqui

// Mostramos un mensaje en pantalla usando alert, llamando a la funcion con el nombre "Jensen"
alert(SaludoPersonalizado("Jensen")); // Llama la funcion con "Jensen" y muestra el saludo
