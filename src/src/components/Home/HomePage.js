import React from 'react'
import Button from '@mui/material/Button';
import { getTimeMsSession } from '../../helpers/utils'
import { Counter } from './Counter'
import './styles/home.css'

/* Home component with the counter */
export function Home({history}) {
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

                            <div className="form-group">
                                <Button variant="contained"
                                    style={{ backgroundColor: '#214A80', color: '#FFFFFF' }}
                                    onClick={()=> history.push('/logout')}                                   
                                    className="btnLogout">                        
                                    <span>Logout</span>
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}