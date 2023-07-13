import React, { useEffect, useState } from 'react'
import background from '../Assets/background.jpg'
import logo from '../Assets/Netflix_Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'


function Register() {
    let navigate = useNavigate()

    const [user, setUser] = useState({
        username: "",
        email: "",
        mobile: "",
        password: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:8000/create/user', user)
        console.log(res)
        if (res.data.status === 1) {
            toast.success("Registered")
            navigate("/login")
        }
        if (res.data.status === 0) {

        }
    }
    const handleChange = async (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    let storedEmail = localStorage.getItem('email')



    return (
        <>
            <div className='login_container'>
                <Link to={"/"}>
                    <img className='logo' src={logo} alt='logo' />
                </Link>
                <div>
                    <img className='background_image' src={background} alt='backgroung' />
                    <div className='background_color'>
                    </div>
                </div>

                <div className='card'>
                    <h1 className='sign_in_header'>
                        Sign Up
                    </h1>
                    <form className='form'>
                        <input placeholder='Username' name='username' className='email_login' type='text' onChange={handleChange} />
                        <input placeholder='Email address' name='email' className='email_login' value={storedEmail} type='email' onChange={handleChange} />
                        <input placeholder='mobile' name='mobile' className='email_login' type='number' onChange={handleChange} />
                        <input placeholder='Password' name='password' className='email_login' type='password' onChange={handleChange} />
                        <div className='help_feature'>
                            <input type='checkbox' />
                            <label>I accept the <span>Terms and Condition</span></label>
                        </div>
                        <button className='btn_login' onClick={handleSubmit} >Sign Up</button>
                    </form>
                </div>
            </div>
            <Toaster />
        </>
    )
}

export default Register