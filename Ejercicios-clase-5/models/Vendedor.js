const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Empresa")

const vendedorSchema = new mongoose.Schema({
    nombre: String,
    producto: String,
    email: String
}, {collection: "Vendedores"})

const Vendedor = mongoose.model("Vendedor", vendedorSchema)

module.exports = Vendedor