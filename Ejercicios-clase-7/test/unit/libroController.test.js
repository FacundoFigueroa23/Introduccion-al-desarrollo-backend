const {getAllLibros, getLibroById, createLibro, updateLibroById, deleteLibroById} = require('../../src/controllers/libroControllers.js')

const libroModel = require('../../src/models/Libro.js')

jest.mock('../../src/models/Libro.js')

describe("Controlador libro", () => {
    let mockRes;

    beforeEach(() => {
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }
    })

    test("getAllLibros debería obtener todos los libros", async () => {
        const mockLibros = [
            { id: "1", title: "Libro 1" },
            { id: "2", title: "Libro 2" },
        ]
        libroModel.find.mockResolvedValue(mockLibros)
        const mockReq = {}
        await getAllLibros(mockReq, mockRes)
        expect(mockRes.status).toHaveBeenCalledWith(200)
        expect(mockRes.json).toHaveBeenCalledWith(mockLibros)
    })

    test("getLibroById debería obtener un libro", async () => {
        const mockLibro = { id: "1", titulo: "Libro Encontrado", autor:"Juan Perez" }
        libroModel.findById.mockResolvedValue(mockLibro)
        const mockReq = { params: { id: "1" } }
        await getLibroById(mockReq, mockRes)
        expect(mockRes.status).toHaveBeenCalledWith(200)
        expect(mockRes.json).toHaveBeenCalledWith(mockLibro)
    })
    
    test("createLibro debería crear un nuevo libro", async () => {
        const mockLibro = { titulo: "Nuevo Libro", autor: "Juan Perez" }
        mockLibro.save = () => {}
        libroModel.create.mockResolvedValue(mockLibro)
        const mockReq = { body: mockLibro }
        await createLibro(mockReq, mockRes)
        expect(mockRes.status).toHaveBeenCalledWith(201)
        expect(mockRes.json).toHaveBeenCalledWith({message: "Libro agregado con éxito"})
    })

    test("createLibro no debería crear un nuevo libro si faltan datos", async () => {
        const mockLibro = { titulo: "Nuevo Libro" }
        mockLibro.save = () => {}
        libroModel.create.mockResolvedValue(mockLibro)
        const mockReq = { body: mockLibro }
        await createLibro(mockReq, mockRes)
        expect(mockRes.status).toHaveBeenCalledWith(500)
        expect(mockRes.json).toHaveBeenCalledWith({error: "Faltan datos"})
    })

    test("updateLibro debería actualizar un libro existente", async () => {
        const libroId = '1'
        const libroActualizado = { titulo: 'Libro Actualizado', autor: 'Autor Actualizado' }
        const libroActualizadoMock = { _id: libroId, ...libroActualizado }
        libroModel.findByIdAndUpdate.mockResolvedValue(libroActualizadoMock)
        const mockReq = { params: { id: "1" }, body: libroActualizado }
        await updateLibroById(mockReq, mockRes)
        expect(libroModel.findByIdAndUpdate).toHaveBeenCalledWith(libroId, libroActualizado)
        expect(mockRes.status).toHaveBeenCalledWith(200)
        expect(mockRes.json).toHaveBeenCalledWith({message: "Libro editado con éxito", changes: libroActualizado})
    })

    test("updateLibro debería devolver un error si el libro no existe", async () => {
        libroModel.findByIdAndUpdate.mockResolvedValue(null)
        const mockReq = { params: { id: "99" }, body: { titulo: "Libro Actualizado" }}
        await updateLibroById(mockReq, mockRes)
        expect(mockRes.status).toHaveBeenCalledWith(404)
        expect(mockRes.json).toHaveBeenCalledWith({ error: "Libro no encontrado" })
    });

    test("deleteLibro debería eliminar un libro existente", async () => {
        const mockReq = { params: { id: "1" } }
        await deleteLibroById(mockReq, mockRes)
        expect(libroModel.findByIdAndDelete).toHaveBeenCalledWith(mockReq.params.id)
        expect(mockRes.status).toHaveBeenCalledWith(200)
        expect(mockRes.json).toHaveBeenCalledWith({message: "Libro eliminado con éxito"})
    })
})