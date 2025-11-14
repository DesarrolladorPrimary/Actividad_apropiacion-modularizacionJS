// Importamos las funciones CalcularSubtotal, CalcularIva y CalcularTotal desde el archivo valortotal.js ubicado en la carpeta modulos
import { CalcularSubtotal, CalcularIva, CalcularTotal } from "./modulos/valortotal.js"; // Trae las tres funciones necesarias

// Pedimos al usuario que ingrese la cantidad de productos y convertimos el valor a entero
let cantidad = parseInt(prompt("Ingrese la cantidad de productos: ")); // Solicita cantidad y la transforma en entero

// Pedimos al usuario que ingrese el precio del producto y convertimos el valor a decimal
let precio = parseFloat(prompt("Ingrese el precio del producto: ")); // Solicita el precio y lo convierte a decimal

// Calculamos el subtotal multiplicando cantidad por precio
let Subtotal = CalcularSubtotal(cantidad, precio); // Calcula el subtotal usando la funcion importada

// Calculamos el IVA (19%) sobre el subtotal
let iva = CalcularIva(Subtotal); // Obtiene el IVA del subtotal

// Calculamos el total sumando el subtotal y el IVA
let total = CalcularTotal(Subtotal, iva); // Suma subtotal e IVA para el total

// Mostramos los resultados finales al usuario usando alert
alert(`subtotal: ${Subtotal} iva(19%): ${iva} total a pagar: ${total}`); // Muestra el detalle del calculo al usuario

// Llamadas adicionales a las funciones (no tienen efecto visible porque no se usan los retornos)
CalcularSubtotal(cantidad, precio); // Ejecuta nuevamente la funcion aunque no se use el resultado
CalcularIva(Subtotal); // Calcula el IVA pero no almacena el valor
CalcularTotal(Subtotal, iva); // Calcula el total pero no lo reutiliza
