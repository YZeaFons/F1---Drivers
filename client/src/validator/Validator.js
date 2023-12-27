
export default function validation(driver) {
    const patronURL = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    const dateVal = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/


    let errorsList = {}
    // ------------------------------ Errors Nombre --------------------------
    if (driver.nombre === '') errorsList.nombre = 'Debes ingresar un nombre'
    else if (driver.nombre.length < 2 && driver.nombre.length > 20) errorsList.nombre = 'El nombre debe contener entre 2 y 20 caracteres'
    // ------------------------------ Errors Apellido --------------------------
    if (driver.apellido === '') errorsList.apellido = 'Debes ingresar un apellido'
    else if (driver.apellido.length < 2 && driver.apellido.length > 20) errorsList.apellido = 'El apellido debe contener entre 2 y 20 caracteres'
    // ------------------------------ Errors Nacionalidad --------------------------
    if (driver.nacionalidad === '') errorsList.nacionalidad = 'Debes ingresar una nacionalidad'
    else if (driver.nacionalidad.length < 2 && driver.nacionalidad.length > 20) errorsList.nacionalidad = 'La Nacionalidad debe contener entre 2 y 20 caracteres'
    // ------------------------------ Errors Imagen --------------------------
    if (driver.imagen === '') errorsList.imagen = 'Debes ingresar la URL de la imagen'
    else if (!patronURL.test(driver.imagen)) errorsList.imagen = 'Debes ingresar una dirección URL válida'
    // ------------------------------ Errors Fecha de nacimiento --------------------------
    if (driver.fecha_de_nacimiento === '') errorsList.fecha_de_nacimiento = 'Debes ingresar la fecha de nacimiento del Driver'
    else if (!dateVal.test(driver.fecha_de_nacimiento)) errorsList.fecha_de_nacimiento = 'La fecha debe seguir el patrón YYYY-MM-DD'
    // ------------------------------ Errors Escuderias --------------------------
    if (driver.escuderias === '') errorsList.escuderias = 'Debes ingresar una escudería'
    // ------------------------------ Errors Descripción --------------------------
    if (driver.descripcion === '') errorsList.descripcion = 'Debes ingresar una descripción del nuevo Driver'

    return errorsList
}

// const prueba = {
//     nombre: 'Yeison',
//     apellido: 'Zea',
//     nacionalidad: 'Colombia',
//     imagen: 'http://en.wikipedia.org/wiki/Chris_Bristow',
//     fecha_de_nacimiento: '2023-12-2',
//     descripcion: 'dd',
//     escuderias: 'dd',
// }

// console.log(validation(prueba));