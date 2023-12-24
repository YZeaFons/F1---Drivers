import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const URL = 'http://localhost:3001/F1/driver'

export default function Detail(props) {
    // ---------------- States ----------------
    const { id } = useParams()
    const [driver, setDriver] = useState({})
    // ---------------Use Effect ---------------
    useEffect(() => {
        axios(`${URL}/${id}`)
            .then(({ data }) => {
                if (!data) {
                    window.alert('Numero de Id no disponible')
                }
                setDriver(data)
            })
    }, [id])
    return (
        <div>
            <Link to='/home'>
                <img src={driver.image} />
            </Link>
            <br />
            <h2>Id: {driver.id}</h2>
            <h2>Name: {`${driver.forename} ${driver.surname}`}</h2>
            <h2>Nationality: {driver.nationality}</h2>
            <h2>Birthday: {driver.birthday}</h2>
            <h2>Teams: {driver.teams}</h2>
            <h2>Description: {driver.description}</h2>
        </div>
    )
}