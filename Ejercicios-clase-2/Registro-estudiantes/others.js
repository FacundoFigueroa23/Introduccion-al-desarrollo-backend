const imprimirEstudiantes = (arrayEstudiantes) => {
    console.log("- - - Estudiantes - - -\n")
    for(let i=0; i<arrayEstudiantes.length - 1; i++){
        console.log(`Nombre: ${arrayEstudiantes[i]['nombre']}, Edad: ${arrayEstudiantes[i]['edad']}\n`)
    }
    console.log(`Nombre: ${arrayEstudiantes[arrayEstudiantes.length - 1]['nombre']}, Edad: ${arrayEstudiantes[arrayEstudiantes.length - 1]['edad']}`)
}

module.exports = {imprimirEstudiantes}