import React, { useState } from 'react'
import background from "../Assets/background.jpg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const [user, setUser] = useState({
        email: ""
    })

    let navigate = useNavigate()

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async () => {
        const res = await axios.post('http://localhost:8000/forgot/password', user)
        if (res.data.status === 1) {
            navigate('/otp')
            localStorage.setItem('mail', user.email)
        }
        else if (res.data.status === 0) {
            console.log(res.data)
        }
    }

    return (
        <>
            <div>
                <img
                    className="background_image"
                    src={background}
                    alt="backgroung image"
                />
                <div className="background_color"></div>
            </div>

            <div className='card'>
                <h1>Forgot Password?</h1>
                <input type='email' name="email" className='email_login' placeholder='Email Address' onChange={(e) => handleChange(e)} />
                <button type='submit' className='btn_login' onClick={handleSubmit}>Submit</button>

            </div>
        </>

    )
}

export default ForgotPassword