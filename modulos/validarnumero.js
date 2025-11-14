// Funcion flecha que valida si el valor ingresado es un numero
const validar_numero = (numero) => { // Declara la funcion que recibe el dato ingresado
    if (isNaN(numero)) { // Verifica si el valor no es un numero
        return false; // Retorna false cuando encuentra un valor no numerico
    }
    return true; // Si supera la validacion anterior retorna true
}

// Funcion flecha que verifica si un numero es primo
const validar_divisores = (numero) => { // Declara la funcion que comprobara divisores
    let bandera = true; // Asumimos inicialmente que el numero es primo

    if (validar_numero(numero)) { // Comprueba primero que sea un numero valido
        for (let i = 2; i * i <= numero; i++) { // Recorre divisores hasta la raiz cuadrada
            if (numero % i === 0) { // Si encuentra un divisor exacto
                bandera = false; // Marca que no es primo
                break; // Sale del bucle al confirmar un divisor
            }
        }
        return bandera; // Devuelve true o false segun la bandera
    } else {
        alert(`No es un numero`); // Informa cuando la entrada no es numerica
    }
}

// Funcion exportada que muestra si el numero es primo o no
export const mostrar_mensaje = (numero) => { // Exporta la funcion que recibe el numero final
    if (validar_divisores(numero)) { // Llama a la validacion para saber si es primo
        alert(`El numero ${numero} es primo`); // Mensaje cuando el numero es primo
    } else {
        alert(`El numero ${numero} no es primo`); // Mensaje cuando el numero no es primo
    }
}
