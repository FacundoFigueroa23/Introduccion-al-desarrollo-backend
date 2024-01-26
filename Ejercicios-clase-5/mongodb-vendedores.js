const express = require('express')

const vendedoresRouter = require('./routes/vendedores.js')

const app = express()

app.use(express.json())

app.use('/vendedores', vendedoresRouter)

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})