import React, { useState } from 'react';
import validation from '../validator/Validator';

export default function Form(props) {
    // --------------------------- States -----------------------------
    const [newDriver, setDriver] = useState({
        nombre: '',
        apellido: '',
        nacionalidad: '',
        imagen: '',
        fecha_de_nacimiento: '',
        descripcion: '',
        escuderias: '',
    })

    const [errors, setError] = useState({
        nombre: '',
        apellido: '',
        nacionalidad: '',
        imagen: '',
        fecha_de_nacimiento: '',
        descripcion: '',
        escuderias: '',
    })
    // --------------------------- Functions -------------------------
    const handleChange = (event) => {
        setDriver({
            ...newDriver,
            [event.target.name]: event.target.value
        })
        setError(validation({
            ...newDriver,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div >
            <h2>Crea un nuevo Driver:</h2>
            <form>
                <label>Nombre: </label>
                <input
                    name='nombre'
                    type="text"
                    placeholder='Ingrese el nombre del Driver'
                    value={newDriver.nombre}
                    onChange={handleChange}
                />
                <p>{errors.nombre}</p>
                <br />

                <label>Apellido: </label>
                <input
                    name='apellido'
                    type="text"
                    placeholder='Ingrese el apellido del Driver'
                    value={newDriver.apellido}
                    onChange={handleChange}
                />
                <p>{errors.apellido}</p>
                <br />

                <label>Nacionalidad: </label>
                <input
                    name='nacionalidad'
                    type="text"
                    placeholder='Ingrese la nacionalidad del Driver'
                    value={newDriver.nacionalidad}
                    onChange={handleChange}
                />
                <p>{errors.nacionalidad}</p>
                <br />

                <label>Imagen: </label>
                <input
                    name='imagen'
                    type="text"
                    placeholder='ingrese la URL de la imagen del Driver'
                    value={newDriver.imagen}
                    onChange={handleChange}
                />
                <p>{errors.imagen}</p>
                <br />

                <label>Fecha de Nacimiento: </label>
                <input
                    name='fecha_de_nacimiento'
                    type="text"
                    placeholder='Ingrese aqui la fecha de nacimiento'
                    value={newDriver.fecha_de_nacimiento}
                    onChange={handleChange}
                />
                <p>{errors.fecha_de_nacimiento}</p>
                <br />

                <label>Escuderías: </label>
                <input
                    name='escuderias'
                    type="text"
                    placeholder='Ingrese las escuderias a las que ha pertenecido'
                    onChange={handleChange}
                />
                <p>{errors.escuderias}</p>
                <br />

                <label>Descripcion: </label>
                <input
                    name='descripcion'
                    type="text"
                    placeholder='Ingrese una breve descripción de el nuevo Driver'
                    value={newDriver.descripcion}
                    onChange={handleChange}
                />
                <p>{errors.descripcion}</p>
                <br />
                {/* <hr /> */}
                <button
                    type='submit'
                    disabled={
                        errors.nombre ||
                        errors.apellido ||
                        errors.nacionalidad ||
                        errors.imagen ||
                        errors.fecha_de_nacimiento ||
                        errors.descripcion ||
                        errors.escuderias
                    }
                >Crear</button>
                <hr />
            </form>
        </div>
    )
}