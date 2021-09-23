import React from 'react'
import { getTimeMsSession } from '../../helpers/utils'
import { Counter } from './Counter'
import './styles/home.css'

/* Home component with the counter */
export function Home() {
    var startSessionDate = getTimeMsSession();
    return (
        <> 
            <div className="card-columns animate__animated animate__fadeIn">
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-12 login-form-1">
                            <h2>Welcome!</h2>
                            The last time you accessed was
                            <div id="countdown">
                                <Counter startTimeMs={startSessionDate}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}