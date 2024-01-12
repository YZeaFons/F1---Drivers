import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
const URL = 'http://localhost:5000/drivers'

export default function Detail(props) {
    // ---------------- States ----------------
    const { id } = useParams()
    const location = useLocation()
    const [driver, setDriver] = useState({})

    const queryParams = new URLSearchParams(location.search)
    const source = queryParams.get('source')
    // ---------------Use Effect ---------------
    console.log('Estos son mis datos para buscar', id, source);
    useEffect(() => {
        axios(`${URL}/${id}?source=${source}`)
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