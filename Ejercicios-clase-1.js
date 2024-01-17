// Crear un programa que permita realizar un registro de estudiantes.
// El programa debe tener las siguientes funcionalidades:
// 1) Permitir al usuario ingresar la cantidad de estudiantes que desea registrar.
// 2) Solicitar al usuario que ingrese los nombres y edades de los estudiantes.
// 3) Almacenar la información de cada estudiante en un objeto con las propiedades nombre y edad.
// 4) Guardar cada objeto del estudiante en un array.
// 5) Mostrar en pantalla la lista de estudiantes registrados, mostrando el nombre y la edad de cada uno.

const imprimirEstudiantes = (arrayEstudiantes) => {
    console.log("- - - Estudiantes - - -\n")
    for(let i=0; i<arrayEstudiantes.length - 1; i++){
        console.log(`Nombre: ${arrayEstudiantes[i]['nombre']}, Edad: ${arrayEstudiantes[i]['edad']}\n`)
    }
    console.log(`Nombre: ${arrayEstudiantes[arrayEstudiantes.length - 1]['nombre']}, Edad: ${arrayEstudiantes[arrayEstudiantes.length - 1]['edad']}`)
}

const registroEstudiantes = () => {
    let totalEstudiantes = Number(prompt("Ingrese la cantidad de estudiantes a registrar: "))
    let estudiantes = []
    for (let i=0; i < totalEstudiantes; i++) {
        const nombre = prompt("Ingrese nombre del estudiante: ")
        let edad = Number(prompt(`Ingrese edad de ${nombre}`))
        estudiantes.push({nombre, edad})
    }
    imprimirEstudiantes(estudiantes)
}

// registroEstudiantes()

// -----------------------------------------------------------------------------------------------------------------------

// Escribe una función llamada calcularPromedio que tome como parámetro un arreglo de números y calcule el promedio de esos números.
// Instrucciones:
// 1) Crea una función llamada calcularPromedio con un parámetro llamado números.
// 2) Dentro de la función, declara una variable suma y asignale el valor inicial de cero.
// 3) Utiliza la sentencia iterativa for para recorrer cada número en el arreglo numeros.
// 4) En cada iteración, suma el número actual al valor de suma.
// 5) Después de recorrer todos los números, calcula el promedio dividiendo suma entre la longitud del arreglo numeros.
// 6) Retorna el promedio calculado.

const calcularPromedio = (numeros) => {
    let suma = 0
    for(let i=0; i<numeros.length; i++){
        suma += numeros[i]
    }
    return suma / numeros.length
}

// console.log(calcularPromedio([8, 5, 2]))