// Formato ES
// import {Chance} from 'chance'

// Formato Common JS
const Chance = require('chance')

// Creo una instancia de la clase Chance
const chance = new Chance()

// Genero datos aleatorios usando Chance
const randomName = chance.name()
const randomAge = chance.age()
const randomEmail = chance.email()

// Imprimo los datos generados
console.log("Nombre aleatorio: " + randomName)
console.log("Edad aleatoria: " + randomAge)
console.log("Email aleatorio: " + randomEmail)