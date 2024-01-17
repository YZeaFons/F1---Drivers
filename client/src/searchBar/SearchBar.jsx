import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Searchbar.css'
export default function SearchBar({ onSearch, allDrivers }) {
    //? ------------- States ---------------------
    const [name, setName] = useState('')
    //? ------------- Handlers--------------------
    const handlerChange = (event) => {
        const { value } = event.target
        setName(value)
    }
    // ----------
    const handleClick = (event) => {
        onSearch(name)
        setName('')
    }

    return (
        <div className='searchbar'>
            <label className='driverSearch'>Search Driver :  </label>
            <input
                className='input'
                type='text'
                name='search'
                id='search'
                onChange={handlerChange}
                value={name}
                placeholder='Ingrese nombre a buscar'
            />
            <button onClick={() => handleClick()}>Buscar</button>

            <NavLink to='/create'>
                <button>Crear Nuevo</button>
            </NavLink>
            <button onClick={() => { allDrivers() }}>Todos</button>

        </div>
    )
}