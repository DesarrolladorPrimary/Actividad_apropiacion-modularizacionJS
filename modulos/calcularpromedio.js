// Exportamos la funcion Calcularpromedio para que pueda usarse en otros archivos
export function Calcularpromedio(not1, not2, not3) { // Define la funcion y recibe las tres notas
    let proemdio = (not1 + not2 + not3) / 3; // Calcula el promedio sumando y dividiendo entre 3

    if (proemdio >= 3.0) { // Verifica si el promedio es suficiente para aprobar
        alert("Aprobo"); // Muestra que aprobo cuando la condicion se cumple
    } else { // Caso contrario se toma como reprobado
        alert("Reprobo"); // Informa que reprobo cuando el promedio es menor a 3.0
    }

    return proemdio; // Devuelve el promedio calculado para poder reutilizarlo
}
