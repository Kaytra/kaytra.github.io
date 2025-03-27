import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import pfp from '../img/Kaytra_pfp.png';

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    return <nav className="nav sticky">
        <Link to="/"><img className='pfp' src={pfp} /></Link>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/boundaries">Boundaries</Link></li>
            <li><Link to="/interests">Current Interests</Link></li>
        </ul>
    </nav>
}

export default Navbar;