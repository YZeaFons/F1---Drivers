import React, { useEffect } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Card from '../card/Card';
import './Cards.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllDrivers } from '../redux/actions'

export default function Cards({ onSearch }) {
    const dispatch = useDispatch()
    const myDrivers = useSelector(state => state.allDrivers)
    // ?---------------------- useEffect ----------------------------
    useEffect(() => {
        dispatch(getAllDrivers())
    }, [])
    return (
        <section>
            <SearchBar onSearch={onSearch} getAllDrivers={getAllDrivers} />
            <div className='cardContainer'>
                {
                    !myDrivers.length
                        ? <h2>No se han seleccionado Drivers</h2>
                        : myDrivers.map(driver => (
                            <Card
                                key={driver.id}
                                id={driver.id}
                                image={driver.image}
                                fullName={`${driver.forename} ${driver.surname}`}
                                teams={driver.teams}
                            />
                        ))
                }
            </div>
        </section>
    )
}