
export default function validation(driver) {
    const patronURL = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    const dateVal = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/


    let errorsList = {}
    // ------------------------------ Errors Nombre --------------------------
    if (driver.name === '') errorsList.name = 'Debes ingresar un nombre'
    else if (driver.name.length < 2 || driver.name.length > 20) errorsList.name = 'El nombre debe contener entre 2 y 20 caracteres'
    // ------------------------------ Errors Apellido --------------------------
    if (driver.surname === '') errorsList.surname = 'Debes ingresar un apellido'
    else if (driver.surname.length < 2 || driver.surname.length > 20) errorsList.surname = 'El apellido debe contener entre 2 y 20 caracteres'
    // ------------------------------ Errors Nacionalidad --------------------------
    if (driver.nationality === '') errorsList.nationality = 'Debes ingresar una nacionalidad'
    else if (driver.nationality.length < 2 || driver.nationality.length > 20) errorsList.nationality = 'La Nacionalidad debe contener entre 2 y 20 caracteres'
    // ------------------------------ Errors Imagen --------------------------
    if (driver.image === '') errorsList.image = 'Debes ingresar la URL de la imagen'
    else if (!patronURL.test(driver.image)) errorsList.image = 'Debes ingresar una dirección URL válida'
    // ------------------------------ Errors Fecha de nacimiento --------------------------
    if (driver.birthday === '') errorsList.birthday = 'Debes ingresar la fecha de nacimiento del Driver'
    else if (!dateVal.test(driver.birthday)) errorsList.birthday = 'La fecha debe seguir el patrón YYYY-MM-DD'
    // ------------------------------ Errors Escuderias --------------------------
    if (driver.teams.length === 0) errorsList.teams = 'Debes ingresar al menos una escudería'
    // ------------------------------ Errors Descripción --------------------------
    if (driver.description === '') errorsList.description = 'Debes ingresar una descripción del nuevo Driver'

    return errorsList
}

// const prueba = {
//     name: 'Yeison',
//     surname: 'Zea',
//     nationality: 'Colombia',
//     image: 'http://en.wikipedia.org/wiki/Chris_Bristow',
//     birthday: '2023-12-2',
//     description: 'dd',
//     teams: ['def', 'grt'],
// }

// console.log(validation(prueba));