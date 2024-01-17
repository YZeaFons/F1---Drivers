import React from 'react';
import './Filter.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterByOrigin, filterByTeam, orderAlfabet, orderByDOB } from '../redux/actions';

export default function Filters({ setCurrentPage }) {
    // ?---------------------- Hooks ----------------------------
    const dispatch = useDispatch()
    const myTeams = useSelector(state => state.myTeams)
    // ?---------------------- States ----------------------------
    // ?---------------------- Handlers ----------------------------
    const handleResetFilters = () => {
        dispatch(filterByOrigin('All'))
        dispatch(filterByTeam('All'))

        document.getElementById("filterByOrigin").selectedIndex = 0;
        document.getElementById("filterByTeam").selectedIndex = 0;
        document.getElementById("orderByBirthday").selectedIndex = 0;
        document.getElementById("orderByAlfa").selectedIndex = 0;
    }
    const handleOrigin = (event) => {
        event.preventDefault()
        setCurrentPage(1)
        dispatch(filterByOrigin('All'))
        dispatch(filterByOrigin(event.target.value))
        document.getElementById("filterByTeam").selectedIndex = 0;
    }

    const handleTeam = (event) => {
        event.preventDefault()
        setCurrentPage(1)
        dispatch(filterByTeam('All'))
        dispatch(filterByTeam(event.target.value))
        document.getElementById("filterByOrigin").selectedIndex = 0;
    }

    const handleOrderDOB = (event) => {
        event.preventDefault()
        setCurrentPage(1)
        dispatch(orderByDOB(event.target.value))
        document.getElementById("orderByAlfa").selectedIndex = 0;
    }

    const handleOrderAlfa = (event) => {
        event.preventDefault()
        setCurrentPage(1)
        dispatch(orderAlfabet(event.target.value))
        document.getElementById("orderByBirthday").selectedIndex = 0;
    }

    return (
        <div className='Filters'>
            <div className='filterOrder'>
                <h3>Filter by:</h3>
                <div className='clase2'>
                    <label>Origin: </label>
                    <select
                        name="filterByOrigin"
                        id="filterByOrigin"
                        defaultValue={'All'}
                        onChange={handleOrigin}
                    // value={ }
                    >
                        <option value="All">All</option>
                        <option value="API">API</option>
                        <option value="database">Data Base</option>
                    </select>
                </div>
                <div className='clase2'>
                    <label>Team: </label>
                    <select
                        name="filterByTeam"
                        id="filterByTeam"
                        onChange={handleTeam}
                        defaultValue={'All'}
                    >
                        <option value="All">All</option>
                        {myTeams.map((option) => (
                            <option
                                key={option.Name}
                                value={option.Name}
                            >
                                {option.Name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


            <div className='filterOrder'>
                <h3>Order By</h3>
                <div className='clase2'>
                    <label>Birthday: </label>
                    <select
                        name="orderByBirthday"
                        id="orderByBirthday"
                        defaultValue={'-'}
                        onChange={handleOrderDOB}
                    >
                        <option value="-">-</option>
                        <option value="Menor a Mayor">Menor a Mayor</option>
                        <option value="Mayor a Menor">Mayor a Menor</option>
                    </select>

                </div>
                <div className='clase2'>
                    <label>Alphabetic: </label>
                    <select
                        name="orderByAlfa"
                        id="orderByAlfa"
                        defaultValue={'-'}
                        onChange={handleOrderAlfa}
                    >
                        <option value="-">-</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>

                </div>
            </div>
            <div className='filterOrder'>
                <button onClick={handleResetFilters}>Reset</button>
            </div>
        </div>
    )
}