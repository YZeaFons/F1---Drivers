import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDetailDriver, previousState } from '../redux/actions';

export default function Detail(props) {
    const dispatch = useDispatch()
    const driver = useSelector(state => state.myDrivers[0])
    console.log(driver);
    // ---------------- States ----------------
    const { id } = useParams()
    // ---------------Use Effect ---------------
    useEffect(() => {
        dispatch(getDetailDriver(id))
    }, [id])

    const handleClick = () => {
        dispatch(previousState())
    }

    return (
        <div>
            <Link to='/home'>
                <img src={driver.image || 'https://i.pinimg.com/originals/49/ca/fe/49cafe61f30e6da84ac47abfd7fbea9a.png'} onClick={handleClick} />
            </Link>
            <br />
            <h2>Id: {driver?.id}</h2>
            <h2>Name: {`${driver.forename} ${driver.surname}`}</h2>
            <h2>Nationality: {driver.nationality}</h2>
            <h2>Birthday: {driver.birthday}</h2>
            <h2>Teams: {Array.isArray(driver.teams) ? driver.teams.map(team => team.Name).join(', ') : driver.teams}</h2>
            <h2>Description: {driver.description}</h2>
        </div>
    )
}