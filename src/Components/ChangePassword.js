import React, { useState } from 'react'
import background from "../Assets/background.jpg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ChangePassword() {
    let navigate = useNavigate()
    const [password, setPassword] = useState({
        email: localStorage.getItem("mail"),
        newPassword: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async () => {
        const res = await axios.post('http://localhost:8000/reset/password', password)
        if (res.data.status === 1) {
            navigate("/login")
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
                <h1>Create your new password</h1>
                <input type='password' name="newPassword" className='email_login' placeholder='Password' onChange={(e) => handleChange(e)} />
                <input type='password' name="confirmPassword" className='email_login' placeholder='Confirm Password' onChange={(e) => handleChange(e)} />
                <button type='submit' className='btn_login' onClick={handleSubmit}>Submit</button>

            </div>
        </>
    )
}

export default ChangePassword