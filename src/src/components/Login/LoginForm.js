import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function LoginForm(props) {

       const [formLoginValues, handleLoginInputChange] = useState({
        lEmail: 'fernando@gmail.com',
        lPassword: '123456'
    });

    const [formRegisterValues, handleRegisterInputChange] = useState({
        rName: 'Nando',
        rEmail: 'nando@gmail.com',
        rPassword1: '123456',
        rPassword2: '123456'
    });

    const { lEmail, lPassword } = formLoginValues;
    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();
        //dispatch( startLogin( lEmail, lPassword ) );
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (rPassword1 !== rPassword2) {
            //return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
        }
        console.log('?')
        //dispatch( startRegister( rEmail, rPassword1, rName ) );
    }


    return (
        <div className="form-center">
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <TextField id="standard-basic" label="Email" variant="standard" className="form-control" />
                </div>
                <div className="form-group">
                    <TextField id="standard-basic" label="Password" variant="standard" className="form-control" />
                </div>
                <br/>
                <div className="form-group">
                    <Button variant="contained" 
                    style={{backgroundColor: '#214A80', color: '#FFFFFF'}}
                    className="btnSubmit">Log In</Button>
                </div>
            </form>
        </div>
    );
}

