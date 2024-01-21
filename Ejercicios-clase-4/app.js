const express = require('express')

const app = express()

app.use(express.json())

const librosRouter = require('./routes/libros.js')

const errorHandler = require('./middlewares/errorHandler.js')

app.use('/libros', librosRouter)
app.use(errorHandler)

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})