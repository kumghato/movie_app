import React from 'react'
import logo from '../Assets/Netflix_Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='Navbar'>
            <img className='logo' src={logo} alt='dakjn' />

            <div className='nav_elements'>
                <select className='option__menu'>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                <Link to={"/login"}>
                    <button className='btn'>Sign In</button>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar