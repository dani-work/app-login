import React from 'react'
import { LoginForm } from './LoginForm'
import './styles/login.css'


/* Login Page */
export function Login() {
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-12 login-form-1">
                        <img className="padlock-icon" src='media/svg/icons/padlock.svg' alt="padlock icon" />
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div >

    )
}