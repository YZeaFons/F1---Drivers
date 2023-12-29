import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
export default function SearchBar({ onSearch, getAllDrivers }) {
    // ------------- States ---------------------
    const [name, setName] = useState('')
    // ------------- Handlers--------------------
    const handlerChange = (event) => {
        const { value } = event.target
        setName(value)
    }
    // ----------
    const handleClick = (event) => {
        // event.preventDefault()
        onSearch(name)
        setName('')
    }
    // -------------- SearchBar --------------------
    return (
        <div>
            <label>Driver :  </label>
            <input
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
            <button onClick={() => { getAllDrivers() }}>Todos</button>

        </div>
    )
}