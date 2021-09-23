import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { Login } from '../components/Login/LoginPage';
import { Home } from '../components/Home/HomePage';
import { Logout } from '../components/Login/Logout';
import { getAuth } from '../helpers/utils';



/* Routes for the App */
export const AppRouter = () => {
    const isAuthorized = getAuth();
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/login"  component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <PrivateRoute exact path="/" isAuthorized={isAuthorized} component={Home} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    )
}