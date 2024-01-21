const express = require('express')
const Joi = require('joi')

const libros = require('../data.js')

const router = express.Router()

const libroSchema = Joi.object({
    titulo: Joi.string().required().label('Titulo'),
    autor: Joi.string().required().label('Autor')
})

// GET /libros
router.get('/', (req, res, next) => {
    try {
        res.json(libros)
    } catch(err) {
        next(err)
    }
})

// GET /libros/id
router.get('/:id', (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const libro = libros.find((libro) => libro.id === id)

        if(!libro) {
            const error = new Error("Libro no encontrado")
            error.status = 404
            throw error
        }

        res.json(libro)
    } catch(err) {
        next(err)
    }
})

// POST /libros
router.post('/', (req, res, next) => {
    try {
        const {error, value} = libroSchema.validate(req.body)

        if (error) {
            const validationError = new Error("Error de validación")
            validationError.status = 400
            validationError.details = error.details.map( detail => detail.message)
            throw validationError
        }

        const {titulo, autor} = value

        const nuevoLibro = {
            id: libros.length + 1,
            titulo,
            autor
        }

        libros.push(nuevoLibro)
        res.status(201).json(nuevoLibro)
    } catch(err) {
        next(err)
    }
})

// PUT /libros/id
router.put('/:id', (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const {error, value} = libroSchema.validate(req.body)

        if (error) {
            const validationError = new Error("Error de validación")
            validationError.status = 400
            validationError.details = error.details.map( detail => detail.message)
            throw validationError
        }

        const {titulo, autor} = value

        const libro = libros.find( libro => libro.id === id)

        if (!libro) {
            const error = new Error("Libro no encontrado")
            error.status = 404
            throw error
        }

        libro.titulo = titulo
        libro.autor = autor

        res.json(libro)
    } catch(err) {
        next(err)
    }
})

// DELETE /libros/id
router.delete('/:id', (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const index = libros.findIndex( libro => libro.id === id)

        if (index === -1) {
            const error = new Error("Libro no encontrado")
            error.status = 404
            throw error
        }

        const libroEliminado = libros.splice(index, 1)
        res.json(libroEliminado)
    } catch(err) {
        next(err)
    }
})

module.exports = router