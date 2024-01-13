import React, { useEffect } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Card from '../card/Card';
import './Cards.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllDrivers, searchByName } from '../redux/actions'

export default function Cards(props) {
    const dispatch = useDispatch()
    const myDrivers = useSelector(state => state.myDrivers)
    // ?---------------------- useEffect ----------------------------
    useEffect(() => {
        dispatch(getAllDrivers())
    }, [])
    // ?--------------------- ASYNC Functions ------------------------
    // ********************* F onSearch ************************
    const onSearch = async (name) => {
        if (name === '') { window.alert('Debes ingresar un nombre') }
        dispatch(searchByName(name))
        if (myDrivers.length === 0) window.alert('No existen coincidencias con el nombre proporcionado')
    }
    // ******************* F Get All Drivers **********************
    const allDrivers = () => {
        dispatch(getAllDrivers())
    }

    return (
        <section>
            <SearchBar onSearch={onSearch} allDrivers={allDrivers} />
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