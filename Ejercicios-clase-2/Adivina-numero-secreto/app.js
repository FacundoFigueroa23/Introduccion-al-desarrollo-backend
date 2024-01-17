// Genera un numero aleatorio entre 1 y 100 para que el usuario loo adivine.
// Pide al usuario que ingrese un numero y comparalo con el numero generado.
// Proporciona retroalimentacion al usuario si el numero es demasiado alto o demasiado bajo.
// Continua solicitando numeros al usuario hasta que adivine el numero correcto.
// Muestra un mensaje de felicitaciones cuando el usuario adivina el numero.

const readlineSync = require('readline-sync')
const {generarNumeroAelatorio, verificarAdivinanza} = require('./adivinanza.js')

const obtenerNumeroUsuario = () => {
    return readlineSync.questionInt("Ingrese un numero: ")
}

const juegoAdivinanza = () => {
    const numAleatorio = generarNumeroAelatorio()
    let numAdivinado = 0

    console.log("¡Bienvenido a Adivina el numero secreto!")
    console.log("Intenta adivinar el numero del 1 al 100.")

    while (numAleatorio !== numAdivinado) {
        numAdivinado = obtenerNumeroUsuario()
        verificarAdivinanza(numAleatorio, numAdivinado)
    }
}

juegoAdivinanza()