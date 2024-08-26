/**
 * Verifica si un número es positivo o negativo.
 * @param {number} numero - El número a verificar.
 */
function verificarNumero(numero) {
    if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
}

verificarNumero(10);  
verificarNumero(-5);  
verificarNumero(0);   
