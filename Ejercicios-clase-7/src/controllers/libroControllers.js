const Libro = require('../models/Libro.js')

exports.getAllLibros = async (req, res) => {
    try {
        const libros = await Libro.find()
        res.status(200).json(libros)
    } catch(err) {
        res.status(500).json({error: "Error al obtener los libros"})
    }
}

exports.getLibroById = async (req, res) => {
    try {
        const id = req.params.id
        const libro = await Libro.findById(id)
        if (!libro) {
            res.status(404).json({error: "Libro no encontrado"})
        }
        res.status(200).json(libro)
    } catch(err) {
        res.status(500).json({error: "Error al buscar libro"})
    }
}

exports.createLibro = async (req, res) => {
    try {
        const {titulo, autor} = req.body
        if (!titulo || !autor) {
            res.status(500).json({error: "Faltan datos"})
        } else {
            await Libro.create({titulo, autor})
            res.status(201).json({message: "Libro agregado con éxito"})
        }
    } catch(err) {
        res.status(500).json({error: "Error al agregar libro"})
    }
}

exports.updateLibroById = async (req, res) => {
    try {
        const id = req.params.id
        const datos = req.body
        const libro = await Libro.findByIdAndUpdate(id, datos)
        if (!libro) {
            res.status(404).json({error: "Libro no encontrado"})
        }
        res.status(200).json({message: "Libro editado con éxito", changes: datos})
    } catch(err) {
        res.status(500).json({error: "Error al editar libro"})
    }
}

exports.deleteLibroById = async (req, res) => {
    try {
        const id = req.params.id
        await Libro.findByIdAndDelete(id)
        res.status(200).json({message: "Libro eliminado con éxito"})
    } catch(err) {
        res.status(500).json({error: "Error al eliminar libro"})
    }
}