import React, { useState } from 'react';
export default function SearchBar({ onSearch }) {
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

        </div>
    )
}