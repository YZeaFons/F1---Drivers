import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
    console.log(props.id);
    return (
        <div>
            <div className='CardDriver'>
                <Link to={`/driver/${props.id}`}>
                    <img src={props.image} alt="No image found" />
                </Link>
                <h2>Name: {props.fullName}</h2>
                <h2>Teams: {props.teams}</h2>

            </div>
        </div>
    )
}