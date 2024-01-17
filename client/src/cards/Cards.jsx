import React, { useEffect, useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Card from '../card/Card';
import './Cards.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllDrivers, getAllTeams, searchByName } from '../redux/actions'
import Pagination from '../pagination/Pagination';
import Filters from '../filters/Filters';

export default function Cards(props) {

    // ?---------------------- Hooks ----------------------------
    const dispatch = useDispatch()
    const myDrivers = useSelector(state => state.myDrivers)
    console.log(myDrivers);
    // ?---------------------- States ----------------------------
    const [driverPerPage, setNumDriversPerPage] = useState(9)
    const [totalPaginas, setNumTotalPaginas] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    // ?---------------------- useEffect ----------------------------
    useEffect(() => {
        setNumTotalPaginas(Math.ceil(myDrivers.length / driverPerPage))
    }, [myDrivers])
    // ?--------------------- ASYNC Functions ------------------------
    // ********************* F onSearch ************************
    const onSearch = async (name) => {
        if (name === '') { window.alert('Debes ingresar un nombre') }
        dispatch(searchByName(name))
        dispatch(getAllTeams())
        setCurrentPage(1)
        if (myDrivers.length === 0) window.alert('No existen coincidencias con el nombre proporcionado')
    }

    const allDrivers = () => {
        dispatch(getAllDrivers())
        dispatch(getAllTeams())
        setCurrentPage(1)
    }
    // ?--------------------- Pagination ------------------------
    const indexLast = (currentPage) * driverPerPage
    const indexFirst = indexLast - driverPerPage
    const driversToShow = myDrivers.slice(indexFirst, indexLast)


    return (
        <section className='mainContainer'>
            <div className='topBar'>
                <SearchBar onSearch={onSearch} allDrivers={allDrivers} />
            </div>
            <aside className='sideBar'>
                <div>
                    <Pagination totalPaginas={totalPaginas} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
                <div>
                    <Filters setCurrentPage={setCurrentPage} />
                </div>

            </aside>

            <div className='cardContainer'>
                {
                    !driversToShow.length
                        ? <h2>No se han seleccionado Drivers</h2>
                        : driversToShow.map(driver => (
                            <Card
                                key={driver.id}
                                id={driver.id}
                                image={driver.image}
                                fullName={`${driver.forename} ${driver.surname}`}
                                teams={Array.isArray(driver.teams) ? driver.teams.map(team => team.Name).join(', ') : driver.teams}
                            />
                        ))
                }
            </div>
        </section>
    )
}