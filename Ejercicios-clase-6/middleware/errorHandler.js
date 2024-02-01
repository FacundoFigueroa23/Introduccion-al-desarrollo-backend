const errorHandler = (err, req, res, next) => {

    // Verifico si el error tiene un código de estado definido, y si no, se lo asigno
    const statusCode = err.statusCode || 500

    // Construyo objeto de reapuesta de error
    const errorResponse = {
        error: {
            message: err.message || "Error interno del servidor",
            code: err.code || "internal_error"
        }
    }

    // Envio respuesta de error en formato JSON
    res.status(statusCode).json(errorResponse)
}

module.exports = errorHandler