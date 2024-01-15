import React, { useEffect, useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Card from '../card/Card';
import './Cards.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllDrivers, searchByName } from '../redux/actions'
import Pagination from '../pagination/Pagination';

export default function Cards(props) {

    // ?---------------------- Hooks ----------------------------
    const dispatch = useDispatch()
    const myDrivers = useSelector(state => state.myDrivers)
    // ?---------------------- States ----------------------------
    const [driverPerPage, setNumDriversPerPage] = useState(9)
    const [totalPaginas, setNumTotalPaginas] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [driversPag, setDriversPag] = useState([])
    console.log(totalPaginas);
    // ?---------------------- useEffect ----------------------------
    useEffect(() => {
        setNumTotalPaginas(Math.ceil(myDrivers.length / driverPerPage))
    }, [myDrivers])
    // ?--------------------- ASYNC Functions ------------------------
    // ********************* F onSearch ************************
    const onSearch = async (name) => {
        if (name === '') { window.alert('Debes ingresar un nombre') }
        dispatch(searchByName(name))
        setCurrentPage(1)
        if (myDrivers.length === 0) window.alert('No existen coincidencias con el nombre proporcionado')
    }

    const allDrivers = () => {
        dispatch(getAllDrivers())
        setCurrentPage(1)
    }

    return (
        <section>
            <div>
                <SearchBar onSearch={onSearch} allDrivers={allDrivers} />
            </div>
            <div>
                <Pagination totalPaginas={totalPaginas} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
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