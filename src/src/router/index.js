import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Login } from '../components/Login/LoginPage';
import { Home } from '../components/Home/HomePage';
import { Logout } from '../components/Login/Logout';

/* Routes for the App */
export const AppRouter = () => {

    const isAuthorized = useSelector(state => state.auth, shallowEqual);
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/logout" component={Logout} />
                    <PublicRoute exact path="/login"    isAuthorized={isAuthorized} component={Login} />
                    <PrivateRoute exact path="/"        isAuthorized={isAuthorized} component={Home} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    )
}