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


// Función para calcular el total a pagar
// NOTA: podría implementar un switch en lugar de anidar tantos if
const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    // A mayor cantidad solicitada, menor interes
    if (cantidad < 5000) {
        total = cantidad * 1.5  //50%       
    } else if (cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4  //40%      
    } else if (cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.3  //30%
    } else {
        total = cantidad * 1.2  //20%
    }

    // A mayor plazo, menor interes
    if (plazo === 1) {
        total *= 1.05
    } else if(plazo === 3) {
        total *= 1.1
    } else if(plazo === 6) {
        total *= 1.15
    } else if(plazo === 12) {
        total *= 1.20
    } else if(plazo === 24) {
        total *= 1.25
    }

    return total;
}

// Objeto de exportaciones
export {
    formatearDinero,
    calcularTotalPagar,
    calcularIntereses
}