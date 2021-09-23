import React from 'react'
import './styles/home.css'

export function Home() {
    return (
        <>
            <div className="card-columns animate__animated animate__fadeIn">
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-12 login-form-1">
                            <h2>Welcome!</h2>
                            The last time you accessed was
                            
                           
                               
                                <div id="countdown">
                                    <ul>
                                        <li><span id="days"></span>days</li>
                                        <li><span id="hours"></span>Hours</li>
                                        <li><span id="minutes"></span>Minutes</li>
                                        <li><span id="seconds"></span>Seconds</li>
                                    </ul>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}