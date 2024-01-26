const express = require('express')
const librosRouter = require('./routes/libros.js')
const errorHandler = require('./middleware/errorHandler.js')

const app = express()

app.use(express.json())
app.use('/libros', librosRouter)
app.use(errorHandler)

app.listen(3000, () => {
    console.log("Servidor funcionando en el puerto 3000")
})