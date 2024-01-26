const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Empresa")

const clienteSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    email: String
})

const Cliente = mongoose.model("Cliente", clienteSchema)

// CREATE
// const nuevoCliente = new Cliente({
//     nombre: "Raul",
//     edad: 35,
//     email: "raul35@hotmail.com"
// })
// const result = nuevoCliente
//     .save()
//     .then(() => {
//         console.log("Cliente guardado correctamente")
//     })
//     .catch((err) => {
//         console.log(err)
//     }) 

// READ
// Cliente.find()
// .then((clientes) => {
//     console.log("Clientes encontrados: ", clientes)
// })
// .catch((err) => {
//     console.error("Error al buscar clientes: ", err)
// })

// UPDATE
// Cliente.updateOne({nombre : "Juan"}, {edad: 21})
// .then(() => {
//     console.log("Cliente actualizado correctamente")
// })
// .catch((err) => {
//     console.error("Error al actualizar cliente", err)
// })

// DELETE
// Cliente.deleteOne({nombre: "Juan"})
// .then(() => {
//     console.log("Cliente eliminado satisfactoriamente")
// })
// .catch((err) => {
//     console.error("El cliente no pudo ser eliminado ", err)
// })