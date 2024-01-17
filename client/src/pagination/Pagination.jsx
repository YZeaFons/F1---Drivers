import React from 'react';
import './Pagination.css'
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
        <div className='Paginationmain'>
            <div className='paginationPag'>
                <p>Pagina {currentPage} de {totalPaginas} </p>
            </div>
            <div className='paginationSel'>
                {currentPage > 1 ? (
                    <button className='buttonleft' onClick={handlePrev}>
                        ⇚
                    </button>
                ) : (<p>⇚</p>)}
                {currentPage < totalPaginas ? (
                    <button onClick={handleNext}>
                        ⇛
                    </button>
                ) : (<p>⇛ </p>)}
            </div>
        </div>
    )
}