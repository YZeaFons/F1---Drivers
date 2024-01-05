import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import validation from '../validator/Validator';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const URLTeams = 'http://localhost:3001/F1/teams'

export default function Form(props) {
    // --------------------------- USE EFFECT -------------------------
    useEffect(() => {
        const getAllTeams = async () => {
            try {
                const { data } = await axios.get(URLTeams)
                setTeams(data)
            } catch (error) {
                alert(error.message)
            }
        }
        getAllTeams()
    }, [])
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
    const [teams, setTeams] = useState([])
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

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createDriver(newDriver)
        setDriver({
            name: '',
            surname: '',
            nationality: '',
            image: '',
            birthday: '',
            description: '',
            teams: [],
        })
    }



    return (
        <div >
            <h2>Crea un nuevo Driver:</h2>
            <form onSubmit={handleSubmit}>
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

                <label>Escuderias 2: </label>
                <Select
                    options={teams.map((option) => ({ label: option.name, value: option.id }))}
                />

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