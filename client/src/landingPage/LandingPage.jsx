import './LandingPage.css'
import { NavLink } from "react-router-dom";

export default function LandingPage(props) {
    return (
        <div className='landingPage'>
            <NavLink to='/home' >
                <button>Home</button>
            </NavLink>
        </div>
    );
}