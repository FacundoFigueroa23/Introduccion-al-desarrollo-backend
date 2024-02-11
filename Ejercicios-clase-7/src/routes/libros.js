const express = require('express')
const { requiredScopes } = require('express-oauth2-jwt-bearer')

const {getAllLibros, getLibroById, createLibro, updateLibroById, deleteLibroById} = require('../controllers/libroControllers.js')

const router = express.Router()

// GET /libros
router.get('/', requiredScopes("read:libros"), getAllLibros)

// GET /libros/:id
router.get('/:id', requiredScopes("read:libros"), getLibroById)

// POST /libros
router.post('/', requiredScopes("write:libros"), createLibro)

// PUT /libros/:id
router.put('/:id', requiredScopes("write:libros"), updateLibroById)

// DELETE /libros/:id
router.delete('/:id', requiredScopes("write:libros"), deleteLibroById)

module.exports = router