import React, { useState } from 'react'
import background from "../Assets/background.jpg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Otp() {
    const [otp, setOtp] = useState({
        email: localStorage.getItem("mail"),
        otp: ""
    })
    let navigate = useNavigate()

    const handleChange = (e) => {
        setOtp((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async () => {
        const res = await axios.post('http://localhost:8000/verify/otp', otp)
        if (res.data.status === 1) {
            navigate("/change")
        }
        else if (res.data.status === 0) {
            console.log(res)
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
                <h1>OTP</h1>
                <input type='password' name="otp" className='email_login' placeholder='OTP' onChange={(e) => { handleChange(e) }} />
                <button type='submit' className='btn_login' onClick={handleSubmit} >Submit</button>

            </div>
        </>

    )
}

export default Otp