const express = require('express')
const { auth } = require('express-oauth2-jwt-bearer')

const productosRouter = require('./routes/productos.js')
const errorHandler = require('./middleware/errorHandler.js')

const app = express()

const jwtCheck = auth({
    audience: 'http://127.0.0.1:3000/productos',
    issuerBaseURL: 'https://dev-5yi83r0pzvsc5ir2.us.auth0.com/',
    tokenSigningAlg: 'RS256'
})

app.use(express.json())

app.use('/productos', jwtCheck, productosRouter)

app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})