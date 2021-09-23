import React from 'react'
import { LoginForm } from './LoginForm'
import './styles/login.css'

export function Login() {
    return (

        <div className="container login-container">
            <div className="row">
                <div className="col-md-12 login-form-1">
                    <img className="padlock-icon" src='media/svg/icons/padlock.svg' />
                    <LoginForm />
                </div>
            </div>
        </div>

    )
}