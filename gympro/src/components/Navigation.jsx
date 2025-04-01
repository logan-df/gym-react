import {Outlet, Link} from "react-router-dom";
import './css/Navigation.css';


function Navigation() {
    return (
        <nav id="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/progress">Progress Tracker</Link></li>
                <li><Link to="/workout">Workout Routines</Link></li>
                <li><Link to="/diets">Diet</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;