const express = require('express')
const {requiredScopes} = require('express-oauth2-jwt-bearer')

const router = express.Router()

let productos = [
    {id: 1, nombre: "Vaso", precio: 1000},
    {id: 2, nombre: "Perfume", precio: 47500},
    {id: 3, nombre: "Reloj", precio: 8000}
]

router.get('/', requiredScopes("read:productos"), (req, res, next) => {
    try {
        res.status(200).send(productos)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', requiredScopes("read:productos"), (req, res, next) => {
    try {
        const id = Number(req.params.id)
        let producto = productos.find((prod) => prod.id === id)
        if(producto) {
            res.status(200).send(producto)
        } else {
            res.status(404).json({message: "Producto no encontrado"})
        }
    } catch(err) {
        next(err)
    }
})

router.post('/', requiredScopes("write:productos"), (req, res, next) => {
    try {
        const {nombre, precio} = req.body
        if (!nombre || !precio) {
            res.status(200).json({message: "Faltan datos"})
        } else {
            productos.push({id: productos.length + 1, nombre, precio})
            res.status(200).json({message: "Producto creado correctamente"})
        }
    } catch(err) {
        next(err)
    }
})

router.put('/:id', requiredScopes("write:productos"), (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const {nombre, precio} = req.body
        let producto = productos.find((prod) => prod.id === id)
        if (!producto) {
            res.status(404).json({message: "Producto no encontrado"})
        } else {
            productos.splice(id-1, 1, {id, nombre: nombre || producto.nombre, precio: precio || producto.precio})
            res.status(200).json({message: "Producto editado correctamente"})
        }
    } catch(err) {
        next(err)
    }
})

router.delete('/:id', requiredScopes("write:productos"), (req, res, next) => {
    try {
        const id = Number(req.params.id)
        let producto = productos.find((prod) => prod.id === id)
        if (!producto) {
            res.status(404).json({message: "Producto no encontrado"})
        } else {
            productos.splice(id-1, 1)
            res.status(200).json({message: "Producto eliminado correctamente"})
        }
    } catch(err) {
        next(err)
    }
})

module.exports = router