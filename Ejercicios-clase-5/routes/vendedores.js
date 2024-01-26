const express = require('express')
const Vendedor = require('../models/Vendedor.js')

const router = express.Router()

// CREATE
router.post('/', async (req, res) => {
    try {
        const {nombre, producto, email} = req.body
        if (nombre === "" || producto === "" || email === "") {
            res.json({message: "Faltan datos"})
        } else {
            await Vendedor.create({nombre, producto, email})
            res.status(200).json({message: "Vendedor agregado con éxito", nuevoVendedor: {nombre, producto, email}})
        }
    } catch(err) {
        res.status(500).json({message: "Error al agregar vendedor"})
    }
})

// READ
router.get('/', async (req, res) => {
    try {
        const vendedores = await Vendedor.find()
        if (vendedores.length !== 0) {
            res.status(200).json(vendedores)
        } else {
            res.status(200).json({message: "No hay vendedores"})
        }
    } catch(err) {
        res.status(500).json({message: "Error al obtener los vendedores"})
    }
})

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const datos = req.body
        await Vendedor.findByIdAndUpdate(id, datos)
        res.status(200).json({message: "Vendedor actualizado con éxito"})
    } catch(err) {
        res.status(500).json({message: "Error al actualizar vendedor"})
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await Vendedor.findByIdAndDelete(id)
        res.status(200).json({message: "Vendedor eliminado con éxito"})
    } catch(err) {
        res.status(500).json({message: "Error al eliminar vendedor"})
    }
})

module.exports = router