const express = require('express')
const { auth } = require('express-oauth2-jwt-bearer')

const errorHandler = require('./middlewares/errorHandler.js')
const librosRouter = require('./routes/libros.js')

const autenticacion = auth({
    audience: "http://127.0.0.1:3000/libros",
    issuerBaseURL: "https://dev-5yi83r0pzvsc5ir2.us.auth0.com",
    tokenSigningAlg: 'RS256'
})

const app = express()

app.use(express.json())
app.use('/libros', autenticacion, librosRouter)
app.use(errorHandler)

app.listen(3000, () => {
    console.log("Servidor funcionando en el puerto 3000")
})

module.exports = app