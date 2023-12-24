import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import Card from '../card/Card';

export default function Cards({ onSearch, drivers }) {
    return (
        <div className='cardContainer'>
            <SearchBar onSearch={onSearch} />
            {
                !drivers.length
                    ? <h2>No se han seleccionado Drivers</h2>
                    : drivers.map(driver => (
                        <Card
                            key={driver.id}
                            id={driver.id}
                            image={driver.image}
                            fullName={`${driver.name} ${driver.surname}`}
                            teams={driver.teams}
                        />
                    ))
            }
        </div>
    )
}