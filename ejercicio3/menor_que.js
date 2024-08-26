/**
 * Verifica si un número es mayor o menor que 100.
 * @param {number} numero - El número a verificar.
 */
function verificarMayorMenorQue100(numero) {
    if (numero > 100) {
        console.log("El número es mayor que 100.");
    } else if (numero < 100) {
        console.log("El número es menor que 100.");
    } else {
        console.log("El número es igual a 100.");
    }
}

verificarMayorMenorQue100(150); 
verificarMayorMenorQue100(50);  
verificarMayorMenorQue100(100); 