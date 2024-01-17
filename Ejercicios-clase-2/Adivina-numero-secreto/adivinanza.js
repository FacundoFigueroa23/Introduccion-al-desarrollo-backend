const generarNumeroAelatorio = () => {
    return Math.floor(Math.random() * 100) + 1
}

const verificarAdivinanza = (numSecreto, numAdivinado) => {
    if (numSecreto === numAdivinado) {
        console.log("¡Adivinaste el numero secreto, FELICITACIONES!")
    } else if (numSecreto > numAdivinado) {
        console.log("El numero secreto es mayor al numero ingresado. ¡Sigue intentando!")
    } else {
        console.log("El numero secreto es menor al numero ingresado. ¡Sigue intentando!")
    }
}

module.exports = {generarNumeroAelatorio, verificarAdivinanza}