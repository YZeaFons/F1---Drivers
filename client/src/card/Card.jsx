import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
    return (
        <div>
            <div className='card'>
                <div className='content'>
                    <div className='cardImg'>
                        <Link className='imagelink' to={`/driver/${props.id}`}>
                            <img className='img' src={props.image || 'https://i.pinimg.com/originals/49/ca/fe/49cafe61f30e6da84ac47abfd7fbea9a.png'} alt="No image found" />
                        </Link>
                    </div>
                    <div className='footer'>
                        <h3>Name: {props.fullName}</h3>
                        <h2>Teams: {props.teams}</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}