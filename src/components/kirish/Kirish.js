import React from 'react';
import './kirish.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const Kirish = () => {
    return (
        <div>
        <div className='wrapper'>
            <div className='from-box login'>
                <form action="">
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required/>
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="Password" placeholder='Password' required/>
                        <FaLock className='icon' />

                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>Don`t have an account? <a href="#">Register</a> </p>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Kirish;