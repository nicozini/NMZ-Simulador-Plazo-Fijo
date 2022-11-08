// Función para formatear dinero
const formatearDinero = valor => {
    // API de internacionalización en Javascript
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
    });
    return formatter.format(valor);
}

// Función para calcular intereses de la inversión
// (import x tasa x plazo ) / 365
const calcularIntereses = (cantidad, tasa, plazo) => {
    console.log(cantidad);
    console.log(plazo);
    console.log(tasa);
    const partial = cantidad * (tasa/100) * plazo
    return partial / 365;
}



// Objeto de exportaciones
export {
    formatearDinero,
    calcularIntereses
}