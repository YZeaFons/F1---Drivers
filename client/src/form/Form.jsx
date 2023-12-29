import React, { useState } from 'react';
import validation from '../validator/Validator';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'

export default function Form(props) {
    // --------------------------- Hooks -----------------------------
    const dispatch = useDispatch()
    // --------------------------- States -----------------------------
    const [newDriver, setDriver] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: '',
        birthday: '',
        description: '',
        teams: [],
    })

    const [errors, setError] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: '',
        birthday: '',
        description: '',
        teams: '',
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
                    name='name'
                    type="text"
                    placeholder='Ingrese el nombre del Driver'
                    value={newDriver.name}
                    onChange={handleChange}
                />
                <p>{errors.name}</p>
                <br />

                <label>Apellido: </label>
                <input
                    name='surname'
                    type="text"
                    placeholder='Ingrese el apellido del Driver'
                    value={newDriver.surname}
                    onChange={handleChange}
                />
                <p>{errors.surname}</p>
                <br />

                <label>Nacionalidad: </label>
                <input
                    name='nationality'
                    type="text"
                    placeholder='Ingrese la nacionalidad del Driver'
                    value={newDriver.nationality}
                    onChange={handleChange}
                />
                <p>{errors.nationality}</p>
                <br />

                <label>Imagen: </label>
                <input
                    name='image'
                    type="text"
                    placeholder='ingrese la URL de la imagen del Driver'
                    value={newDriver.image}
                    onChange={handleChange}
                />
                <p>{errors.image}</p>
                <br />

                <label>Fecha de Nacimiento: </label>
                <input
                    name='birthday'
                    type="text"
                    placeholder='Ingrese aqui la fecha de nacimiento'
                    value={newDriver.birthday}
                    onChange={handleChange}
                />
                <p>{errors.birthday}</p>
                <br />

                <label>Escuderías: </label>
                <input
                    name='teams'
                    type="text"
                    placeholder='Ingrese las escuderias a las que ha pertenecido'
                    value={newDriver.teams}
                    onChange={handleChange}
                />
                <p>{newDriver.teams}</p>
                <p>{errors.teams}</p>
                <br />

                <label>Descripcion: </label>
                <input
                    name='description'
                    type="text"
                    placeholder='Ingrese una breve descripción de el nuevo Driver'
                    value={newDriver.description}
                    onChange={handleChange}
                />
                <p>{errors.description}</p>
                <br />
                {/* <hr /> */}
                <button
                    type='submit'
                    disabled={
                        errors.name ||
                        errors.surname ||
                        errors.nationality ||
                        errors.image ||
                        errors.birthday ||
                        errors.description ||
                        errors.teams
                    }
                >Crear</button>
                <NavLink to='/home'>
                    <button>Cancelar</button>
                </NavLink>
                <hr />
            </form>
        </div>
    )
}