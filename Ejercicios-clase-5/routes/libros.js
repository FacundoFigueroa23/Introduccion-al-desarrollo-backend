const express = require('express')
const Libro = require('../models/Libro.js')

const router = express.Router()

// GET /libros
router.get('/', async (req, res) => {
    try {
        const libros = await Libro.find()
        if (libros.length !== 0) {
            res.status(200).json(libros)
        } else {
            res.status(200).json({message: "No hay libros cargados"})
        }
    } catch(err) {
        res.status(500).json({message: "Error al obtener los libros"})
    }
})

// GET /libros/:id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const libro = await Libro.findById(id)
        res.status(200).json(libro)
    } catch(err) {
        res.status(500).json({message: "Error al buscar libro"})
    }
})

// POST /libros
router.post('/', async (req, res) => {
    try {
        const {titulo, autor} = req.body
        if (!titulo || !autor) {
            res.status(200).json({message: "Faltan datos"})
        } else {
            const nuevoLibro = await Libro.create({titulo, autor})
            res.status(200).json({message: "Libro agregado con éxito", nuevoLibro})
        }
    } catch(err) {
        res.status(500).json({message: "Error al agregar libro"})
    }
})

// PUT /libros/:id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const datos = req.body
        await Libro.findByIdAndUpdate(id, datos)
        res.status(200).json({message: "Libro editado con éxito", changes: datos})
    } catch(err) {
        res.status(500).json({message: "Error al editar libro"})
    }
})

// DELETE /libros/:id
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await Libro.findByIdAndDelete(id)
        res.status(200).json({message: "Libro eliminado con éxito"})
    } catch(err) {
        res.status(500).json({message: "Error al eliminar libro"})
    }
})

module.exports = router