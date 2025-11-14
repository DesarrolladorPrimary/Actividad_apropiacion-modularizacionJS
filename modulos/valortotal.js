// Funcion que calcula el subtotal: cantidad × precio
export function CalcularSubtotal(cantidad , precio) // Exporta la funcion que recibe cantidad y precio
{
    return cantidad * precio; // Multiplica ambos valores para obtener el subtotal
}

// Funcion que calcula el IVA (19%) sobre el subtotal
export function CalcularIva(Subtotal) // Exporta la funcion que recibe el subtotal calculado
{
    return Subtotal * 0.19; // Calcula el 19% del subtotal
}

// Funcion que calcula el total a pagar: subtotal + IVA
export function CalcularTotal(Subtotal,iva) // Exporta la funcion que recibe subtotal e IVA
{
    return Subtotal + iva; // Suma subtotal e IVA para conocer el total a pagar
}
