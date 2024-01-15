import React from 'react';
import { Link } from 'react-router-dom';


export default function Pagination({ totalPaginas, currentPage, setCurrentPage }) {

    const handleNext = () => {
        if (currentPage === totalPaginas) return
        return setCurrentPage(Number(currentPage) + 1)
    }
    const handlePrev = () => {
        if (currentPage === 1) return
        return setCurrentPage(Number(currentPage) - 1)
    }

    return (
        <div>
            {currentPage > 1 ? (
                <button onClick={handlePrev}>
                    ⇚
                </button>
            ) : (<p>⇚ </p>)}
            <p>Pagina {currentPage} de {totalPaginas} </p>
            {currentPage < totalPaginas ? (
                <button onClick={handleNext}>
                    ⇛
                </button>
            ) : (<p>⇛ </p>)}
        </div>
    )
}