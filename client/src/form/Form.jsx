import React, { useEffect, useState } from 'react';
import validation from '../validator/Validator';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import './Form.css'

const URLTeams = '/F1/teams'

export default function Form(props) {
    //? --------------------------- USE EFFECT -------------------------
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
    //? --------------------------- States -----------------------------
    const [newDriver, setDriver] = useState({
        forename: '',
        surname: '',
        nationality: '',
        image: '',
        birthday: '',
        description: '',
        teams: '',
    })

    const [errors, setError] = useState({
        forename: '',
        surname: '',
        nationality: '',
        image: '',
        birthday: '',
        description: '',
        teams: '',
    })
    const [teams, setTeams] = useState([])
    const [teamsDriver, setTeamsDriver] = useState([])
    //? --------------------------- Handlers -------------------------
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
            forename: '',
            surname: '',
            nationality: '',
            image: '',
            birthday: '',
            description: '',
            teams: ''
        })
    }

    const handleSelectChange = (event) => {
        event.preventDefault()
        const { value } = event.target
        if (teamsDriver.includes(value)) {
            const newArray = teamsDriver.filter(option => option !== value)
            setTeamsDriver(newArray)
        } else {
            setTeamsDriver(() => {
                const updatedTeams = [...teamsDriver, value]
                const arrayteamsDriver = updatedTeams.join()
                setDriver(() => ({
                    ...newDriver,
                    teams: arrayteamsDriver
                }))
                return updatedTeams
            }
            )
        }
    }

    return (
        <div className='main'>
            <div className='mainForm'>
                <h2>Crea un nuevo Driver:</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <label>Nombre: </label>
                    <input
                        className='inputForm'
                        name='forename'
                        type="text"
                        placeholder='Ingrese el nombre del Driver'
                        value={newDriver.forename}
                        onChange={handleChange}
                    />
                    <p>{errors.forename}</p>
                    <br />

                    <label>Apellido: </label>
                    <input
                        className='inputForm'
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
                    <br />
                    <select multiple onChange={handleSelectChange}>
                        {teams.map((option) => (
                            <option
                                key={option.Name}
                                value={option.Name}
                            >
                                {option.Name}
                            </option>
                        ))}
                    </select>
                    <h4>Selected options:</h4>
                    <ul>{newDriver.teams.split(',').map((team, index) => (
                        <li key={index}>{team}</li>
                    ))}</ul>
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

                    <hr />
                    <br />
                    <div className='formButtons'>
                        <button
                            className='boton1'
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
                    </div>
                </form>

            </div>
        </div>
    )
}