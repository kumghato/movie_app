import React from 'react'
import background from '../Assets/background.jpg'
import '../App.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Home() {

    const handleChange = (e) => {
        console.log(e.target.email, e.target.value)
        localStorage.setItem("email",e.target.value)
    }

    return (
        <>
            <Navbar />
            <div>
                <img className='background_image' src={background} alt='backgroung image' />
                <div className='background_color'>
                </div>
            </div>
            <div className='home_info'>
                <h1 className='Header__1'>
                    Unlimited movies, TV shows and more
                </h1>
                <h5 className='Sub_header__1'>
                    Watch anywhere. Cancel anytime.
                </h5>
                <h5 className='Home__para'>
                    Ready to watch? Enter your email to create or restart your membership.
                </h5>
            </div>
            <div className='getting_started'>
                <input className='email' type='email' placeholder='Email address' id='email' onChange={(e) => { handleChange(e) }} />

                <Link to={"/register"}>
                    <button className='btn_signUp'>Get Started</button>
                </Link>
            </div>

        </>
    )
}

export default Home